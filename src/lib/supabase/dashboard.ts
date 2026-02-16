import { supabase } from '../supabase';
import { Tank } from '../../types/tank';
import { ParameterReading, MaintenanceLog } from './tankHistory';

export interface DashboardStats {
  totalTanks: number;
  totalFish: number;
  totalPlants: number;
  totalVolumeLiters: number;
  averageHealth: number;
  tanksByType: {
    freshwater: number;
    saltwater: number;
    brackish: number;
  };
}

export interface TankHealthScore {
  tankId: string;
  tankName: string;
  score: number; // 0-100
  issues: string[];
  lastMaintenance?: string;
  daysUntilNextWaterChange?: number;
}

export interface RecentActivity {
  id: string;
  type: 'parameter_reading' | 'maintenance' | 'tank_created' | 'inhabitant_added';
  tankId: string;
  tankName: string;
  description: string;
  timestamp: string;
}

/**
 * Get dashboard statistics for the current user
 */
export const getDashboardStats = async (): Promise<DashboardStats> => {
  const { data: tanks, error } = await supabase
    .from('tanks')
    .select('*')
    .eq('user_id', (await supabase.auth.getUser()).data.user?.id);

  if (error) {
    console.error('Error fetching tanks for stats:', error);
    throw new Error('Failed to fetch dashboard stats');
  }

  if (!tanks || tanks.length === 0) {
    return {
      totalTanks: 0,
      totalFish: 0,
      totalPlants: 0,
      totalVolumeLiters: 0,
      averageHealth: 0,
      tanksByType: { freshwater: 0, saltwater: 0, brackish: 0 },
    };
  }

  const stats: DashboardStats = {
    totalTanks: tanks.length,
    totalFish: 0,
    totalPlants: 0,
    totalVolumeLiters: 0,
    averageHealth: 0,
    tanksByType: { freshwater: 0, saltwater: 0, brackish: 0 },
  };

  tanks.forEach((tank) => {
    // Count inhabitants
    if (tank.inhabitants?.fish) {
      stats.totalFish += tank.inhabitants.fish.reduce((sum: number, f: any) => sum + f.quantity, 0);
    }
    if (tank.inhabitants?.plants) {
      stats.totalPlants += tank.inhabitants.plants.reduce((sum: number, p: any) => sum + p.quantity, 0);
    }

    // Sum volume
    stats.totalVolumeLiters += tank.volume_liters || 0;

    // Count by type
    if (tank.type in stats.tanksByType) {
      stats.tanksByType[tank.type as keyof typeof stats.tanksByType]++;
    }
  });

  // Calculate average health (we'll implement this below)
  const healthScores = await Promise.all(
    tanks.map((tank) => calculateTankHealth(tank))
  );
  stats.averageHealth = healthScores.reduce((sum, h) => sum + h.score, 0) / healthScores.length;

  return stats;
};

/**
 * Calculate health score for a tank (0-100)
 */
export const calculateTankHealth = async (tank: any): Promise<TankHealthScore> => {
  const issues: string[] = [];
  let score = 100;

  // Parse parameters
  const params = typeof tank.parameters === 'string' ? JSON.parse(tank.parameters) : tank.parameters;

  // Check ammonia (critical)
  if (params.ammonia > 0) {
    issues.push('Ammonia detected');
    score -= 30;
  }

  // Check nitrite (critical)
  if (params.nitrite > 0) {
    issues.push('Nitrite detected');
    score -= 30;
  }

  // Check nitrate (warning)
  if (params.nitrate > 40) {
    issues.push('High nitrate levels');
    score -= 20;
  } else if (params.nitrate > 20) {
    issues.push('Elevated nitrate');
    score -= 10;
  }

  // Check pH range (general freshwater range)
  if (tank.type === 'freshwater') {
    if (params.ph < 6.0 || params.ph > 8.0) {
      issues.push('pH outside ideal range');
      score -= 15;
    }
  }

  // Check temperature (general range)
  if (params.tempC < 20 || params.tempC > 30) {
    issues.push('Temperature outside typical range');
    score -= 10;
  }

  // Check last maintenance
  try {
    const { data: logs } = await supabase
      .from('tank_maintenance_logs')
      .select('performed_at, type')
      .eq('tank_id', tank.id)
      .eq('type', 'water_change')
      .order('performed_at', { ascending: false })
      .limit(1);

    if (logs && logs.length > 0) {
      const lastWaterChange = new Date(logs[0].performed_at);
      const daysSince = Math.floor((Date.now() - lastWaterChange.getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysSince > 21) {
        issues.push('Water change overdue');
        score -= 15;
      }

      return {
        tankId: tank.id,
        tankName: tank.name,
        score: Math.max(0, score),
        issues,
        lastMaintenance: logs[0].performed_at,
        daysUntilNextWaterChange: Math.max(0, 14 - daysSince),
      };
    }
  } catch (err) {
    console.error('Error fetching maintenance logs:', err);
  }

  return {
    tankId: tank.id,
    tankName: tank.name,
    score: Math.max(0, score),
    issues,
  };
};

/**
 * Get health scores for all user tanks
 */
export const getAllTankHealthScores = async (): Promise<TankHealthScore[]> => {
  const { data: tanks, error } = await supabase
    .from('tanks')
    .select('*')
    .eq('user_id', (await supabase.auth.getUser()).data.user?.id);

  if (error || !tanks) {
    console.error('Error fetching tanks:', error);
    return [];
  }

  return Promise.all(tanks.map((tank) => calculateTankHealth(tank)));
};

/**
 * Get recent activity across all tanks
 */
export const getRecentActivity = async (limit: number = 10): Promise<RecentActivity[]> => {
  const userId = (await supabase.auth.getUser()).data.user?.id;
  if (!userId) return [];

  const activities: RecentActivity[] = [];

  // Get recent parameter readings
  const { data: readings } = await supabase
    .from('tank_parameter_readings')
    .select(`
      id,
      tank_id,
      measured_at,
      tanks!inner(name, user_id)
    `)
    .eq('tanks.user_id', userId)
    .order('measured_at', { ascending: false })
    .limit(limit);

  if (readings) {
    readings.forEach((reading: any) => {
      activities.push({
        id: reading.id,
        type: 'parameter_reading',
        tankId: reading.tank_id,
        tankName: reading.tanks.name,
        description: 'Water parameters recorded',
        timestamp: reading.measured_at,
      });
    });
  }

  // Get recent maintenance logs
  const { data: logs } = await supabase
    .from('tank_maintenance_logs')
    .select(`
      id,
      tank_id,
      type,
      title,
      performed_at,
      tanks!inner(name, user_id)
    `)
    .eq('tanks.user_id', userId)
    .order('performed_at', { ascending: false })
    .limit(limit);

  if (logs) {
    logs.forEach((log: any) => {
      activities.push({
        id: log.id,
        type: 'maintenance',
        tankId: log.tank_id,
        tankName: log.tanks.name,
        description: log.title,
        timestamp: log.performed_at,
      });
    });
  }

  // Sort by timestamp and limit
  return activities
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, limit);
};

/**
 * Get aggregated parameter trends across all tanks
 */
export const getAggregatedParameterTrends = async (days: number = 30): Promise<any[]> => {
  const userId = (await supabase.auth.getUser()).data.user?.id;
  if (!userId) return [];

  const sinceDate = new Date();
  sinceDate.setDate(sinceDate.getDate() - days);

  const { data: readings } = await supabase
    .from('tank_parameter_readings')
    .select(`
      measured_at,
      temp_c,
      ph,
      ammonia,
      nitrite,
      nitrate,
      tanks!inner(user_id)
    `)
    .eq('tanks.user_id', userId)
    .gte('measured_at', sinceDate.toISOString())
    .order('measured_at', { ascending: true });

  if (!readings) return [];

  // Group by day and calculate averages
  const groupedByDay: { [key: string]: any } = {};

  readings.forEach((reading: any) => {
    const date = new Date(reading.measured_at).toISOString().split('T')[0];
    
    if (!groupedByDay[date]) {
      groupedByDay[date] = {
        date,
        tempC: [],
        ph: [],
        ammonia: [],
        nitrite: [],
        nitrate: [],
      };
    }

    if (reading.temp_c != null) groupedByDay[date].tempC.push(reading.temp_c);
    if (reading.ph != null) groupedByDay[date].ph.push(reading.ph);
    if (reading.ammonia != null) groupedByDay[date].ammonia.push(reading.ammonia);
    if (reading.nitrite != null) groupedByDay[date].nitrite.push(reading.nitrite);
    if (reading.nitrate != null) groupedByDay[date].nitrate.push(reading.nitrate);
  });

  // Calculate averages
  return Object.values(groupedByDay).map((day: any) => ({
    date: day.date,
    avgTempC: day.tempC.length > 0 ? day.tempC.reduce((a: number, b: number) => a + b, 0) / day.tempC.length : null,
    avgPh: day.ph.length > 0 ? day.ph.reduce((a: number, b: number) => a + b, 0) / day.ph.length : null,
    avgAmmonia: day.ammonia.length > 0 ? day.ammonia.reduce((a: number, b: number) => a + b, 0) / day.ammonia.length : null,
    avgNitrite: day.nitrite.length > 0 ? day.nitrite.reduce((a: number, b: number) => a + b, 0) / day.nitrite.length : null,
    avgNitrate: day.nitrate.length > 0 ? day.nitrate.reduce((a: number, b: number) => a + b, 0) / day.nitrate.length : null,
  }));
};
