import { Tank } from '../../types/tank';

export type AlertLevel = 'critical' | 'warning' | 'info';

export interface ParameterAlert {
  id: string;
  tankId: string;
  tankName: string;
  level: AlertLevel;
  title: string;
  description: string;
  parameter: string;
  currentValue: number | string;
  recommendation: string;
  actions: string[];
  timestamp: string;
}

/**
 * Analyze tank parameters and generate alerts
 */
export const analyzeParameters = (tank: Tank): ParameterAlert[] => {
  const alerts: ParameterAlert[] = [];
  const params = tank.parameters;
  const timestamp = new Date().toISOString();

  // Critical: Ammonia detected
  if (params.ammonia > 0) {
    alerts.push({
      id: `${tank.id}-ammonia`,
      tankId: tank.id,
      tankName: tank.name,
      level: params.ammonia > 0.25 ? 'critical' : 'warning',
      title: 'Ammonia Detected',
      description: `Ammonia level is ${params.ammonia} ppm. This is toxic to fish and indicates incomplete cycling or overfeeding.`,
      parameter: 'ammonia',
      currentValue: params.ammonia,
      recommendation: 'Perform immediate water change and check filtration',
      actions: [
        'Perform 25-50% water change immediately',
        'Test filter and ensure it\'s working properly',
        'Reduce feeding temporarily',
        'Add beneficial bacteria supplement',
        'Test daily until ammonia reaches 0 ppm',
      ],
      timestamp,
    });
  }

  // Critical: Nitrite detected
  if (params.nitrite > 0) {
    alerts.push({
      id: `${tank.id}-nitrite`,
      tankId: tank.id,
      tankName: tank.name,
      level: params.nitrite > 0.5 ? 'critical' : 'warning',
      title: 'Nitrite Detected',
      description: `Nitrite level is ${params.nitrite} ppm. This is toxic and indicates the nitrogen cycle is not complete.`,
      parameter: 'nitrite',
      currentValue: params.nitrite,
      recommendation: 'Water change required and monitor cycle',
      actions: [
        'Perform 25-50% water change',
        'Continue cycling process',
        'Reduce feeding or stop temporarily',
        'Add aquarium salt (1 tbsp per 5 gallons) to reduce toxicity',
        'Test every 2 days',
      ],
      timestamp,
    });
  }

  // Warning: High nitrate
  if (params.nitrate > 40) {
    alerts.push({
      id: `${tank.id}-nitrate-high`,
      tankId: tank.id,
      tankName: tank.name,
      level: params.nitrate > 80 ? 'critical' : 'warning',
      title: 'High Nitrate Levels',
      description: `Nitrate is ${params.nitrate} ppm. While less toxic than ammonia/nitrite, high nitrate can stress fish and promote algae growth.`,
      parameter: 'nitrate',
      currentValue: params.nitrate,
      recommendation: 'Schedule water change and reduce feeding',
      actions: [
        'Perform 30-50% water change',
        'Increase frequency of water changes',
        'Reduce feeding amount',
        'Add live plants to consume nitrate',
        'Check for decaying matter in tank',
      ],
      timestamp,
    });
  }

  // Warning: pH outside typical range
  if (tank.type === 'freshwater') {
    if (params.ph < 6.0) {
      alerts.push({
        id: `${tank.id}-ph-low`,
        tankId: tank.id,
        tankName: tank.name,
        level: params.ph < 5.5 ? 'warning' : 'info',
        title: 'Low pH',
        description: `pH is ${params.ph}. This is acidic and may stress fish adapted to neutral water.`,
        parameter: 'ph',
        currentValue: params.ph,
        recommendation: 'Gradually increase pH to safe range',
        actions: [
          'Add crushed coral or limestone to raise pH slowly',
          'Perform partial water changes with buffered water',
          'Test KH - low KH causes pH instability',
          'Avoid sudden pH changes - adjust gradually over days',
        ],
        timestamp,
      });
    } else if (params.ph > 8.0) {
      alerts.push({
        id: `${tank.id}-ph-high`,
        tankId: tank.id,
        tankName: tank.name,
        level: params.ph > 8.5 ? 'warning' : 'info',
        title: 'High pH',
        description: `pH is ${params.ph}. This is alkaline and may not be suitable for all freshwater species.`,
        parameter: 'ph',
        currentValue: params.ph,
        recommendation: 'Lower pH gradually if needed for your species',
        actions: [
          'Add driftwood or almond leaves to naturally lower pH',
          'Use RO water mixed with tap water',
          'Test regularly and adjust slowly',
          'Verify fish species pH requirements',
        ],
        timestamp,
      });
    }
  }

  // Warning: Temperature outside typical range
  if (params.tempC < 20 || params.tempC > 30) {
    alerts.push({
      id: `${tank.id}-temperature`,
      tankId: tank.id,
      tankName: tank.name,
      level: params.tempC < 18 || params.tempC > 32 ? 'warning' : 'info',
      title: params.tempC < 20 ? 'Low Temperature' : 'High Temperature',
      description: `Temperature is ${params.tempC}°C. Most tropical fish prefer 24-26°C.`,
      parameter: 'temperature',
      currentValue: `${params.tempC}°C`,
      recommendation: 'Adjust heater or cooling',
      actions: [
        params.tempC < 20 ? 'Check aquarium heater and increase temperature' : 'Reduce room temperature or add fan',
        'Ensure heater is properly sized for tank volume',
        'Monitor temperature daily',
        'Verify fish species temperature requirements',
      ],
      timestamp,
    });
  }

  // Info: GH/KH recommendations
  if (params.gh != null && params.gh < 3 && tank.type === 'freshwater') {
    alerts.push({
      id: `${tank.id}-gh-low`,
      tankId: tank.id,
      tankName: tank.name,
      level: 'info',
      title: 'Low General Hardness (GH)',
      description: `GH is ${params.gh}°dGH. Very soft water may not be ideal for all fish species.`,
      parameter: 'gh',
      currentValue: `${params.gh}°dGH`,
      recommendation: 'Consider increasing hardness for certain species',
      actions: [
        'Add minerals if keeping hard water species',
        'Use remineralizers designed for aquariums',
        'Research your fish species\' GH preferences',
      ],
      timestamp,
    });
  }

  return alerts;
};

/**
 * Get all alerts for user's tanks
 */
export const getAllAlerts = (tanks: Tank[]): ParameterAlert[] => {
  return tanks.flatMap(tank => analyzeParameters(tank));
};

/**
 * Get critical alerts only
 */
export const getCriticalAlerts = (tanks: Tank[]): ParameterAlert[] => {
  return getAllAlerts(tanks).filter(alert => alert.level === 'critical');
};

/**
 * Get alert counts by level
 */
export const getAlertCounts = (tanks: Tank[]): { critical: number; warning: number; info: number } => {
  const alerts = getAllAlerts(tanks);
  return {
    critical: alerts.filter(a => a.level === 'critical').length,
    warning: alerts.filter(a => a.level === 'warning').length,
    info: alerts.filter(a => a.level === 'info').length,
  };
};
