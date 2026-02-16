import { supabase } from '../supabase';
import type { Tank } from '../../types/tank';

interface SupabaseTank {
  id: string;
  user_id: string;
  name: string;
  type: 'freshwater' | 'saltwater' | 'brackish';
  volume_liters: number;
  parameters: Tank['parameters'];
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

// Helper to validate UUID format
const isValidUUID = (id: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
};

// Convert Supabase format to app format
const toTank = (data: SupabaseTank, inhabitants: SupabaseTankInhabitant[] = []): Tank => {
  const fish = inhabitants
    .filter(i => i.species_type === 'fish')
    .map(i => ({
      speciesId: i.species_id,
      speciesName: i.species_name,
      quantity: i.quantity,
      addedAt: i.added_at,
    }));

  const plants = inhabitants
    .filter(i => i.species_type === 'plant')
    .map(i => ({
      speciesId: i.species_id,
      speciesName: i.species_name,
      quantity: i.quantity,
      addedAt: i.added_at,
    }));

  return {
    id: data.id,
    name: data.name,
    type: data.type,
    volumeLiters: data.volume_liters,
    parameters: data.parameters,
    inhabitants: { fish, plants },
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
};

/**
 * Get all tanks for the current user with their inhabitants
 */
export const getUserTanks = async (): Promise<Tank[]> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Not authenticated');
  }

  // Fetch tanks
  const { data: tanksData, error: tanksError } = await supabase
    .from('tanks')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (tanksError) {
    console.error('Error fetching tanks:', tanksError);
    throw new Error('Failed to fetch tanks');
  }

  if (!tanksData || tanksData.length === 0) {
    return [];
  }

  // Fetch all inhabitants for these tanks
  const tankIds = tanksData.map(t => t.id);
  const { data: inhabitantsData, error: inhabitantsError } = await supabase
    .from('tank_inhabitants')
    .select('*')
    .in('tank_id', tankIds);

  if (inhabitantsError) {
    console.error('Error fetching inhabitants:', inhabitantsError);
    // Continue without inhabitants rather than failing
  }

  // Group inhabitants by tank_id
  const inhabitantsByTank = new Map<string, SupabaseTankInhabitant[]>();
  (inhabitantsData || []).forEach(inhabitant => {
    const existing = inhabitantsByTank.get(inhabitant.tank_id) || [];
    inhabitantsByTank.set(inhabitant.tank_id, [...existing, inhabitant]);
  });

  // Combine tanks with their inhabitants
  return tanksData.map(tank => toTank(tank, inhabitantsByTank.get(tank.id) || []));
};

/**
 * Get a single tank by ID with inhabitants
 */
export const getTankById = async (id: string): Promise<Tank | null> => {
  if (!isValidUUID(id)) {
    console.warn(`Invalid tank ID format: ${id}. Expected UUID.`);
    return null;
  }

  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Not authenticated');
  }

  // Fetch tank
  const { data: tankData, error: tankError } = await supabase
    .from('tanks')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (tankError) {
    if (tankError.code === 'PGRST116') {
      return null;
    }
    console.error('Error fetching tank:', tankError);
    throw new Error('Failed to fetch tank');
  }

  // Fetch inhabitants
  const { data: inhabitantsData, error: inhabitantsError } = await supabase
    .from('tank_inhabitants')
    .select('*')
    .eq('tank_id', id);

  if (inhabitantsError) {
    console.error('Error fetching inhabitants:', inhabitantsError);
    // Continue without inhabitants
  }

  return toTank(tankData, inhabitantsData || []);
};

/**
 * Create a new tank
 */
export const createTank = async (
  tank: Omit<Tank, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Tank> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Not authenticated');
  }

  const { data, error } = await supabase
    .from('tanks')
    .insert({
      user_id: user.id,
      name: tank.name,
      type: tank.type,
      volume_liters: tank.volumeLiters,
      parameters: tank.parameters,
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating tank:', error);
    throw new Error(`Failed to create tank: ${error.message}`);
  }

  return toTank(data, []);
};

/**
 * Update an existing tank (parameters only, not inhabitants)
 */
export const updateTank = async (
  id: string,
  updates: Partial<Omit<Tank, 'id' | 'createdAt' | 'updatedAt' | 'inhabitants'>>
): Promise<Tank> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Not authenticated');
  }

  const supabaseUpdates: any = {};
  if (updates.name) supabaseUpdates.name = updates.name;
  if (updates.type) supabaseUpdates.type = updates.type;
  if (updates.volumeLiters) supabaseUpdates.volume_liters = updates.volumeLiters;
  if (updates.parameters) supabaseUpdates.parameters = updates.parameters;

  const { data, error } = await supabase
    .from('tanks')
    .update(supabaseUpdates)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    console.error('Error updating tank:', error);
    throw new Error('Failed to update tank');
  }

  // Fetch inhabitants after update
  const { data: inhabitantsData } = await supabase
    .from('tank_inhabitants')
    .select('*')
    .eq('tank_id', id);

  return toTank(data, inhabitantsData || []);
};

/**
 * Delete a tank (CASCADE will delete inhabitants automatically)
 */
export const deleteTank = async (id: string): Promise<void> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Not authenticated');
  }

  const { error } = await supabase
    .from('tanks')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    console.error('Error deleting tank:', error);
    throw new Error('Failed to delete tank');
  }
};

/**
 * Add an inhabitant to a tank
 */
export const addInhabitant = async (
  tankId: string,
  speciesId: string,
  speciesName: string,
  speciesType: 'fish' | 'plant',
  quantity: number
): Promise<void> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Not authenticated');
  }

  // Verify tank ownership
  const { data: tank } = await supabase
    .from('tanks')
    .select('id')
    .eq('id', tankId)
    .eq('user_id', user.id)
    .single();

  if (!tank) {
    throw new Error('Tank not found or access denied');
  }

  const { error } = await supabase
    .from('tank_inhabitants')
    .insert({
      tank_id: tankId,
      species_id: speciesId,
      species_name: speciesName,
      species_type: speciesType,
      quantity,
    });

  if (error) {
    console.error('Error adding inhabitant:', error);
    throw new Error('Failed to add inhabitant');
  }
};

/**
 * Remove an inhabitant from a tank
 */
export const removeInhabitant = async (
  tankId: string,
  speciesId: string,
  speciesType: 'fish' | 'plant'
): Promise<void> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Not authenticated');
  }

  // Verify tank ownership
  const { data: tank } = await supabase
    .from('tanks')
    .select('id')
    .eq('id', tankId)
    .eq('user_id', user.id)
    .single();

  if (!tank) {
    throw new Error('Tank not found or access denied');
  }

  const { error } = await supabase
    .from('tank_inhabitants')
    .delete()
    .eq('tank_id', tankId)
    .eq('species_id', speciesId)
    .eq('species_type', speciesType);

  if (error) {
    console.error('Error removing inhabitant:', error);
    throw new Error('Failed to remove inhabitant');
  }
};
