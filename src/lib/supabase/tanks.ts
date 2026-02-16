import { supabase } from '../supabase';
import type { Tank } from '../../types/tank';

export interface SupabaseTank {
  id: string;
  user_id: string;
  name: string;
  type: 'freshwater' | 'saltwater' | 'brackish';
  volume_liters: number;
  parameters: Tank['parameters'];
  inhabitants: Tank['inhabitants'];
  created_at: string;
  updated_at: string;
}

// Convert Supabase format to app format
const toTank = (data: SupabaseTank): Tank => ({
  id: data.id,
  name: data.name,
  type: data.type,
  volumeLiters: data.volume_liters,
  parameters: data.parameters,
  inhabitants: data.inhabitants,
  createdAt: data.created_at,
  updatedAt: data.updated_at,
});

// Convert app format to Supabase format
const toSupabaseTank = (tank: Omit<Tank, 'id' | 'createdAt' | 'updatedAt'>) => ({
  name: tank.name,
  type: tank.type,
  volume_liters: tank.volumeLiters,
  parameters: tank.parameters,
  inhabitants: tank.inhabitants,
});

/**
 * Get all tanks for the current user
 */
export const getUserTanks = async (): Promise<Tank[]> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Not authenticated');
  }

  const { data, error } = await supabase
    .from('tanks')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching tanks:', error);
    throw new Error('Failed to fetch tanks');
  }

  return (data || []).map(toTank);
};

/**
 * Get a single tank by ID
 */
export const getTankById = async (id: string): Promise<Tank | null> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Not authenticated');
  }

  const { data, error } = await supabase
    .from('tanks')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null; // Tank not found
    }
    console.error('Error fetching tank:', error);
    throw new Error('Failed to fetch tank');
  }

  return toTank(data);
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
      ...toSupabaseTank(tank),
      user_id: user.id,
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating tank:', error);
    throw new Error('Failed to create tank');
  }

  return toTank(data);
};

/**
 * Update an existing tank
 */
export const updateTank = async (
  id: string,
  updates: Partial<Omit<Tank, 'id' | 'createdAt' | 'updatedAt'>>
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
  if (updates.inhabitants) supabaseUpdates.inhabitants = updates.inhabitants;

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

  return toTank(data);
};

/**
 * Delete a tank
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
