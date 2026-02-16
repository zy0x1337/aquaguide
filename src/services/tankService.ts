import { supabase } from '../lib/supabase';
import { Tank } from '../types/tank';

/**
 * Tank Service - Handles all tank-related database operations
 */

// Create a new tank
export async function createTank(tank: Omit<Tank, 'id' | 'createdAt' | 'updatedAt'>): Promise<Tank | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('tanks')
      .insert({
        user_id: user.id,
        name: tank.name,
        type: tank.type,
        volume_liters: tank.volumeLiters,
        parameters: tank.parameters,
        inhabitants: tank.inhabitants || { fish: [], plants: [] },
      })
      .select()
      .single();

    if (error) throw error;
    return mapDbTankToTank(data);
  } catch (error) {
    console.error('Error creating tank:', error);
    return null;
  }
}

// Get all tanks for current user
export async function getUserTanks(): Promise<Tank[]> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('tanks')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data.map(mapDbTankToTank);
  } catch (error) {
    console.error('Error fetching tanks:', error);
    return [];
  }
}

// Get a single tank by ID
export async function getTankById(id: string): Promise<Tank | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from('tanks')
      .select('*')
      .eq('id', id)
      .eq('user_id', user.id)
      .single();

    if (error) throw error;
    return mapDbTankToTank(data);
  } catch (error) {
    console.error('Error fetching tank:', error);
    return null;
  }
}

// Update a tank
export async function updateTank(id: string, updates: Partial<Omit<Tank, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Tank | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const dbUpdates: any = {};
    if (updates.name) dbUpdates.name = updates.name;
    if (updates.type) dbUpdates.type = updates.type;
    if (updates.volumeLiters) dbUpdates.volume_liters = updates.volumeLiters;
    if (updates.parameters) dbUpdates.parameters = updates.parameters;
    if (updates.inhabitants) dbUpdates.inhabitants = updates.inhabitants;

    const { data, error } = await supabase
      .from('tanks')
      .update(dbUpdates)
      .eq('id', id)
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) throw error;
    return mapDbTankToTank(data);
  } catch (error) {
    console.error('Error updating tank:', error);
    return null;
  }
}

// Delete a tank
export async function deleteTank(id: string): Promise<boolean> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { error } = await supabase
      .from('tanks')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error deleting tank:', error);
    return false;
  }
}

// Subscribe to tank changes (real-time)
export function subscribeTankChanges(
  userId: string,
  callback: (payload: any) => void
) {
  return supabase
    .channel('tank-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'tanks',
        filter: `user_id=eq.${userId}`,
      },
      callback
    )
    .subscribe();
}

// Helper: Map database tank to Tank type
function mapDbTankToTank(dbTank: any): Tank {
  return {
    id: dbTank.id,
    name: dbTank.name,
    type: dbTank.type,
    volumeLiters: dbTank.volume_liters,
    parameters: dbTank.parameters,
    inhabitants: dbTank.inhabitants || { fish: [], plants: [] },
    createdAt: dbTank.created_at,
    updatedAt: dbTank.updated_at,
  };
}

// Migrate localStorage tanks to Supabase
export async function migrateLocalStorageTanks(): Promise<{ success: number; failed: number }> {
  try {
    const storedTanks = localStorage.getItem('aquaguide_tanks');
    if (!storedTanks) return { success: 0, failed: 0 };

    const tanks: Tank[] = JSON.parse(storedTanks);
    let success = 0;
    let failed = 0;

    for (const tank of tanks) {
      const { id, createdAt, updatedAt, ...tankData } = tank;
      const result = await createTank(tankData);
      if (result) {
        success++;
      } else {
        failed++;
      }
    }

    // Clear localStorage after successful migration
    if (failed === 0) {
      localStorage.removeItem('aquaguide_tanks');
    }

    return { success, failed };
  } catch (error) {
    console.error('Error migrating localStorage tanks:', error);
    return { success: 0, failed: 0 };
  }
}
