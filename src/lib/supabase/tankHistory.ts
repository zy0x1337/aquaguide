import { supabase } from '../supabase';

export interface ParameterReading {
  id: string;
  tankId: string;
  tempC?: number;
  ph?: number;
  ammonia?: number;
  nitrite?: number;
  nitrate?: number;
  gh?: number;
  kh?: number;
  tds?: number;
  salinity?: number;
  notes?: string;
  measuredAt: string;
  createdAt: string;
}

export interface MaintenanceLog {
  id: string;
  tankId: string;
  type: 'water_change' | 'filter_cleaning' | 'equipment_maintenance' | 'medication' | 'other';
  title: string;
  description?: string;
  waterChangePercent?: number;
  performedAt: string;
  createdAt: string;
}

interface SupabaseParameterReading {
  id: string;
  tank_id: string;
  temp_c?: number;
  ph?: number;
  ammonia?: number;
  nitrite?: number;
  nitrate?: number;
  gh?: number;
  kh?: number;
  tds?: number;
  salinity?: number;
  notes?: string;
  measured_at: string;
  created_at: string;
}

interface SupabaseMaintenanceLog {
  id: string;
  tank_id: string;
  type: string;
  title: string;
  description?: string;
  water_change_percent?: number;
  performed_at: string;
  created_at: string;
}

// Convert Supabase format to app format
const toParameterReading = (data: SupabaseParameterReading): ParameterReading => ({
  id: data.id,
  tankId: data.tank_id,
  tempC: data.temp_c,
  ph: data.ph,
  ammonia: data.ammonia,
  nitrite: data.nitrite,
  nitrate: data.nitrate,
  gh: data.gh,
  kh: data.kh,
  tds: data.tds,
  salinity: data.salinity,
  notes: data.notes,
  measuredAt: data.measured_at,
  createdAt: data.created_at,
});

const toMaintenanceLog = (data: SupabaseMaintenanceLog): MaintenanceLog => ({
  id: data.id,
  tankId: data.tank_id,
  type: data.type as MaintenanceLog['type'],
  title: data.title,
  description: data.description,
  waterChangePercent: data.water_change_percent,
  performedAt: data.performed_at,
  createdAt: data.created_at,
});

/**
 * Get parameter readings for a tank
 */
export const getParameterReadings = async (
  tankId: string,
  limit: number = 30
): Promise<ParameterReading[]> => {
  const { data, error } = await supabase
    .from('tank_parameter_readings')
    .select('*')
    .eq('tank_id', tankId)
    .order('measured_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching parameter readings:', error);
    throw new Error('Failed to fetch parameter readings');
  }

  return (data || []).map(toParameterReading);
};

/**
 * Add a new parameter reading
 */
export const addParameterReading = async (
  tankId: string,
  reading: Omit<ParameterReading, 'id' | 'tankId' | 'createdAt' | 'measuredAt'> & { measuredAt?: string }
): Promise<ParameterReading> => {
  const { data, error } = await supabase
    .from('tank_parameter_readings')
    .insert({
      tank_id: tankId,
      temp_c: reading.tempC,
      ph: reading.ph,
      ammonia: reading.ammonia,
      nitrite: reading.nitrite,
      nitrate: reading.nitrate,
      gh: reading.gh,
      kh: reading.kh,
      tds: reading.tds,
      salinity: reading.salinity,
      notes: reading.notes,
      measured_at: reading.measuredAt || new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    console.error('Error adding parameter reading:', error);
    throw new Error('Failed to add parameter reading');
  }

  return toParameterReading(data);
};

/**
 * Delete a parameter reading
 */
export const deleteParameterReading = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('tank_parameter_readings')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting parameter reading:', error);
    throw new Error('Failed to delete parameter reading');
  }
};

/**
 * Get maintenance logs for a tank
 */
export const getMaintenanceLogs = async (
  tankId: string,
  limit: number = 50
): Promise<MaintenanceLog[]> => {
  const { data, error } = await supabase
    .from('tank_maintenance_logs')
    .select('*')
    .eq('tank_id', tankId)
    .order('performed_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching maintenance logs:', error);
    throw new Error('Failed to fetch maintenance logs');
  }

  return (data || []).map(toMaintenanceLog);
};

/**
 * Add a new maintenance log
 */
export const addMaintenanceLog = async (
  tankId: string,
  log: Omit<MaintenanceLog, 'id' | 'tankId' | 'createdAt' | 'performedAt'> & { performedAt?: string }
): Promise<MaintenanceLog> => {
  const { data, error } = await supabase
    .from('tank_maintenance_logs')
    .insert({
      tank_id: tankId,
      type: log.type,
      title: log.title,
      description: log.description,
      water_change_percent: log.waterChangePercent,
      performed_at: log.performedAt || new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    console.error('Error adding maintenance log:', error);
    throw new Error('Failed to add maintenance log');
  }

  return toMaintenanceLog(data);
};

/**
 * Delete a maintenance log
 */
export const deleteMaintenanceLog = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('tank_maintenance_logs')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting maintenance log:', error);
    throw new Error('Failed to delete maintenance log');
  }
};
