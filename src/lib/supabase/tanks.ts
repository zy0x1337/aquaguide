import { supabase } from '../supabase';
import type { Tank } from '../../types/tank';

interface SupabaseTank {
  id: string;
  user_id: string;
  name: string;
  type: 'freshwater' | 'saltwater' | 'brackish';
  volume_liters: number;
  substrate?: string;
  lighting?: string;
  parameters: Tank['parameters'];
  is_public: boolean;
  public_slug: string | null;
  is_featured_on_profile: boolean;
  created_at: string;
  updated_at: string;
}

interface SupabaseTankInhabitant {
  id: string;
  tank_id: string;
  species_id: string;
  species_name: string;
  species_type: 'fish' | 'plant';
  quantity: number;
  added_at: string;
}

const isValidUUID = (id: string): boolean =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);

const toTank = (data: SupabaseTank, inhabitants: SupabaseTankInhabitant[] = []): Tank => ({
  id: data.id,
  name: data.name,
  type: data.type,
  volumeLiters: data.volume_liters,
  substrate: data.substrate,
  lighting: data.lighting,
  parameters: data.parameters,
  isPublic: data.is_public,
  publicSlug: data.public_slug ?? undefined,
  isFeaturedOnProfile: data.is_featured_on_profile ?? false,
  inhabitants: {
    fish: inhabitants
      .filter(i => i.species_type === 'fish')
      .map(i => ({ speciesId: i.species_id, speciesName: i.species_name, quantity: i.quantity, addedAt: i.added_at })),
    plants: inhabitants
      .filter(i => i.species_type === 'plant')
      .map(i => ({ speciesId: i.species_id, speciesName: i.species_name, quantity: i.quantity, addedAt: i.added_at })),
  },
  createdAt: data.created_at,
  updatedAt: data.updated_at,
});

export const getUserTanks = async (): Promise<Tank[]> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data: tanksData, error: tanksError } = await supabase
    .from('tanks').select('*').eq('user_id', user.id).order('created_at', { ascending: false });
  if (tanksError) throw new Error('Failed to fetch tanks');
  if (!tanksData || tanksData.length === 0) return [];

  const tankIds = tanksData.map(t => t.id);
  const { data: inhabitantsData } = await supabase
    .from('tank_inhabitants').select('*').in('tank_id', tankIds);

  const byTank = new Map<string, SupabaseTankInhabitant[]>();
  (inhabitantsData || []).forEach(i => {
    byTank.set(i.tank_id, [...(byTank.get(i.tank_id) || []), i]);
  });

  return tanksData.map(t => toTank(t, byTank.get(t.id) || []));
};

/** Public read – fetches featured tanks for a given user_id. No auth required. */
export const getFeaturedTanksForUser = async (userId: string): Promise<Tank[]> => {
  const { data: tanksData, error } = await supabase
    .from('tanks')
    .select('*')
    .eq('user_id', userId)
    .eq('is_featured_on_profile', true)
    .eq('is_public', true)
    .order('created_at', { ascending: false });
  if (error) throw new Error('Failed to fetch featured tanks');
  if (!tanksData || tanksData.length === 0) return [];

  const tankIds = tanksData.map(t => t.id);
  const { data: inhabitantsData } = await supabase
    .from('tank_inhabitants').select('*').in('tank_id', tankIds);

  const byTank = new Map<string, SupabaseTankInhabitant[]>();
  (inhabitantsData || []).forEach(i => {
    byTank.set(i.tank_id, [...(byTank.get(i.tank_id) || []), i]);
  });

  return tanksData.map(t => toTank(t, byTank.get(t.id) || []));
};

export const getTankById = async (id: string): Promise<Tank | null> => {
  if (!isValidUUID(id)) return null;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data: tankData, error } = await supabase
    .from('tanks').select('*').eq('id', id).eq('user_id', user.id).single();
  if (error) { if (error.code === 'PGRST116') return null; throw new Error('Failed to fetch tank'); }

  const { data: inhabitantsData } = await supabase
    .from('tank_inhabitants').select('*').eq('tank_id', id);

  return toTank(tankData, inhabitantsData || []);
};

/** Public read – no auth required. Used by PublicTankPage. */
export const getTankBySlug = async (slug: string): Promise<Tank | null> => {
  const { data: tankData, error } = await supabase
    .from('tanks').select('*').eq('public_slug', slug).eq('is_public', true).single();
  if (error) { if (error.code === 'PGRST116') return null; throw new Error('Failed to fetch tank'); }

  const { data: inhabitantsData } = await supabase
    .from('tank_inhabitants').select('*').eq('tank_id', tankData.id);

  return toTank(tankData, inhabitantsData || []);
};

/** Generates a slug via DB function and makes the tank public. */
export const publishTank = async (id: string): Promise<Tank> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data: current } = await supabase
    .from('tanks').select('name, public_slug').eq('id', id).eq('user_id', user.id).single();
  if (!current) throw new Error('Tank not found');

  let slug = current.public_slug;
  if (!slug) {
    const { data: slugData, error: slugError } = await supabase
      .rpc('generate_tank_slug', { tank_name: current.name });
    if (slugError) throw new Error('Failed to generate slug');
    slug = slugData as string;
  }

  const { data, error } = await supabase
    .from('tanks')
    .update({ is_public: true, public_slug: slug })
    .eq('id', id).eq('user_id', user.id)
    .select().single();
  if (error) throw new Error('Failed to publish tank');

  const { data: inhabitantsData } = await supabase
    .from('tank_inhabitants').select('*').eq('tank_id', id);
  return toTank(data, inhabitantsData || []);
};

/** Removes public access (slug is kept for potential re-publish). */
export const unpublishTank = async (id: string): Promise<Tank> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('tanks')
    .update({ is_public: false })
    .eq('id', id).eq('user_id', user.id)
    .select().single();
  if (error) throw new Error('Failed to unpublish tank');

  const { data: inhabitantsData } = await supabase
    .from('tank_inhabitants').select('*').eq('tank_id', id);
  return toTank(data, inhabitantsData || []);
};

/** Toggles whether a tank is pinned to the owner's public profile. */
export const setFeaturedOnProfile = async (id: string, featured: boolean): Promise<Tank> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('tanks')
    .update({ is_featured_on_profile: featured })
    .eq('id', id).eq('user_id', user.id)
    .select().single();
  if (error) throw new Error('Failed to update featured status');

  const { data: inhabitantsData } = await supabase
    .from('tank_inhabitants').select('*').eq('tank_id', id);
  return toTank(data, inhabitantsData || []);
};

export const createTank = async (tank: Omit<Tank, 'id' | 'createdAt' | 'updatedAt'>): Promise<Tank> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('tanks')
    .insert({
      user_id: user.id, name: tank.name, type: tank.type,
      volume_liters: tank.volumeLiters,
      substrate: tank.substrate || null,
      lighting: tank.lighting || null,
      parameters: tank.parameters,
    })
    .select().single();
  if (error) throw new Error(`Failed to create tank: ${error.message}`);
  return toTank(data, []);
};

export const updateTank = async (
  id: string,
  updates: Partial<Omit<Tank, 'id' | 'createdAt' | 'updatedAt' | 'inhabitants'>>
): Promise<Tank> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const supabaseUpdates: any = {};
  if (updates.name        !== undefined) supabaseUpdates.name         = updates.name;
  if (updates.type        !== undefined) supabaseUpdates.type         = updates.type;
  if (updates.volumeLiters !== undefined) supabaseUpdates.volume_liters = updates.volumeLiters;
  if (updates.substrate   !== undefined) supabaseUpdates.substrate    = updates.substrate || null;
  if (updates.lighting    !== undefined) supabaseUpdates.lighting     = updates.lighting  || null;
  if (updates.parameters  !== undefined) supabaseUpdates.parameters   = updates.parameters;

  const { data, error } = await supabase
    .from('tanks').update(supabaseUpdates).eq('id', id).eq('user_id', user.id).select().single();
  if (error) throw new Error('Failed to update tank');

  const { data: inhabitantsData } = await supabase
    .from('tank_inhabitants').select('*').eq('tank_id', id);
  return toTank(data, inhabitantsData || []);
};

export const deleteTank = async (id: string): Promise<void> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');
  const { error } = await supabase.from('tanks').delete().eq('id', id).eq('user_id', user.id);
  if (error) throw new Error('Failed to delete tank');
};

export const addInhabitant = async (
  tankId: string, speciesId: string, speciesName: string,
  speciesType: 'fish' | 'plant', quantity: number
): Promise<void> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');
  const { data: tank } = await supabase.from('tanks').select('id').eq('id', tankId).eq('user_id', user.id).single();
  if (!tank) throw new Error('Tank not found or access denied');
  const { error } = await supabase.from('tank_inhabitants').insert({
    tank_id: tankId, species_id: speciesId, species_name: speciesName,
    species_type: speciesType, quantity,
  });
  if (error) throw new Error('Failed to add inhabitant');
};

export const removeInhabitant = async (
  tankId: string, speciesId: string, speciesType: 'fish' | 'plant'
): Promise<void> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');
  const { data: tank } = await supabase.from('tanks').select('id').eq('id', tankId).eq('user_id', user.id).single();
  if (!tank) throw new Error('Tank not found or access denied');
  const { error } = await supabase.from('tank_inhabitants').delete()
    .eq('tank_id', tankId).eq('species_id', speciesId).eq('species_type', speciesType);
  if (error) throw new Error('Failed to remove inhabitant');
};
