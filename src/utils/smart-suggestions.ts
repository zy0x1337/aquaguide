import { TankItem, TankConfig, SmartSuggestion } from '../types/builder';
import { Species } from '../types/species';
import { allSpecies } from '../data/species';
import { allPlants } from '../data/plants';

/**
 * Generate context-aware suggestions based on current tank setup
 */
export const generateSmartSuggestions = (
  items: TankItem[],
  tankConfig: TankConfig
): SmartSuggestion[] => {
  const suggestions: SmartSuggestion[] = [];
  const fishItems = items.filter(i => i.type === 'fish');
  const plantItems = items.filter(i => i.type === 'plant');
  const hardscapeItems = items.filter(i => i.type === 'hardscape');

  // Equipment suggestions
  if (!tankConfig.hasFilter) {
    suggestions.push({
      id: 'filter-needed',
      type: 'equipment',
      title: 'Filter Required',
      description: `Add a filter rated for ${Math.ceil(tankConfig.volume * 4)} L/h flow rate`,
      priority: 'high',
      reason: 'Essential for water quality and fish health'
    });
  }

  if (!tankConfig.hasHeater && fishItems.length > 0) {
    const needsHeater = fishItems.some(item => {
      const fish = item.data as Species;
      return fish.environment.tempC.min > 20; // Tropical fish
    });
    
    if (needsHeater) {
      const watts = Math.ceil(tankConfig.volume * 0.8); // ~1W per liter
      suggestions.push({
        id: 'heater-needed',
        type: 'equipment',
        title: 'Heater Required',
        description: `Your tropical fish need a ${watts}W heater to maintain 24-26°C`,
        priority: 'high',
        reason: 'Tropical species cannot survive in cold water'
      });
    }
  }

  // Cleanup crew suggestion
  const hasBottomDwellers = fishItems.some(item => {
    const fish = item.data as Species;
    return fish.behavior.tags?.includes('bottom_dweller');
  });

  if (fishItems.length > 0 && !hasBottomDwellers) {
    const suitableCleanup = allSpecies.filter(s => 
      s.behavior.tags?.includes('bottom_dweller') &&
      s.environment.minTankSizeLiters <= tankConfig.volume
    ).slice(0, 3);

    if (suitableCleanup.length > 0) {
      suggestions.push({
        id: 'cleanup-crew',
        type: 'fish',
        title: 'Add Cleanup Crew?',
        description: 'Bottom-dwellers help keep substrate clean',
        species: suitableCleanup[0],
        priority: 'medium',
        reason: 'Improves tank maintenance and adds activity to bottom layer'
      });
    }
  }

  // Schooling fish count warning
  fishItems.forEach(item => {
    const fish = item.data as Species;
    if (fish.behavior.minGroupSize && fish.behavior.minGroupSize > 1) {
      const currentCount = item.count || 1;
      if (currentCount < fish.behavior.minGroupSize) {
        suggestions.push({
          id: `school-${item.id}`,
          type: 'fish',
          title: `${fish.taxonomy.commonName}: Small School`,
          description: `Increase to ${fish.behavior.minGroupSize}+ fish for natural behavior`,
          priority: 'medium',
          reason: 'Schooling fish are stressed in small groups'
        });
      }
    }
  });

  // Plant suggestions for bare tanks
  if (fishItems.length > 0 && plantItems.length === 0) {
    suggestions.push({
      id: 'add-plants',
      type: 'plant',
      title: 'Add Live Plants',
      description: 'Plants improve water quality and provide hiding spots',
      priority: 'medium',
      reason: 'Plants absorb nitrates and reduce stress for fish'
    });
  }

  // Hardscape for hiding spots
  if (fishItems.length > 0 && hardscapeItems.length === 0) {
    suggestions.push({
      id: 'add-hardscape',
      type: 'equipment',
      title: 'Add Hiding Spots',
      description: 'Driftwood or rocks provide shelter and reduce aggression',
      priority: 'low',
      reason: 'Shy fish need places to retreat'
    });
  }

  // Substrate warning for Corydoras
  if (tankConfig.substrate === 'gravel') {
    const hasCorydoras = fishItems.some(item => {
      const fish = item.data as Species;
      return fish.taxonomy.scientificName.toLowerCase().includes('corydoras');
    });

    if (hasCorydoras) {
      suggestions.push({
        id: 'substrate-warning',
        type: 'maintenance',
        title: 'Switch to Sand Substrate',
        description: 'Corydoras can damage their barbels on sharp gravel',
        priority: 'high',
        reason: 'Prevents injury and infection'
      });
    }
  }

  // Centerpiece fish suggestion
  const hasCenterpiece = fishItems.some(item => {
    const fish = item.data as Species;
    return fish.visuals.adultSizeCM > 6; // Larger fish
  });

  if (fishItems.length >= 2 && !hasCenterpiece && tankConfig.volume >= 54) {
    suggestions.push({
      id: 'centerpiece',
      type: 'fish',
      title: 'Add Centerpiece Fish?',
      description: 'A colorful larger fish adds visual interest',
      priority: 'low',
      reason: 'Optional: Creates focal point in aquarium'
    });
  }

  return suggestions.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
};

/**
 * Check compatibility between all items and generate issues
 */
export const checkCompatibility = (
  items: TankItem[],
  tankConfig: TankConfig
): { severity: 'critical' | 'warning' | 'info'; message: string; solution?: string }[] => {
  const issues: { severity: 'critical' | 'warning' | 'info'; message: string; solution?: string }[] = [];
  const fishItems = items.filter(i => i.type === 'fish');

  if (fishItems.length === 0) return [];

  // Temperature overlap
  const temps = fishItems.map(item => {
    const s = item.data as Species;
    return { name: s.taxonomy.commonName, min: s.environment.tempC.min, max: s.environment.tempC.max };
  });
  
  const overallTempMin = Math.max(...temps.map(t => t.min));
  const overallTempMax = Math.min(...temps.map(t => t.max));
  
  if (overallTempMin > overallTempMax) {
    issues.push({
      severity: 'critical',
      message: '🌡️ Incompatible temperature requirements',
      solution: 'Remove fish with conflicting temperature needs or choose similar species'
    });
  } else if (overallTempMax - overallTempMin < 2) {
    issues.push({
      severity: 'warning',
      message: `⚠️ Narrow temperature range: ${overallTempMin}-${overallTempMax}°C`,
      solution: 'Monitor temperature closely with a reliable thermometer'
    });
  }

  // pH overlap
  const phs = fishItems.map(item => {
    const s = item.data as Species;
    return { name: s.taxonomy.commonName, min: s.environment.ph.min, max: s.environment.ph.max };
  });
  
  const overallPhMin = Math.max(...phs.map(p => p.min));
  const overallPhMax = Math.min(...phs.map(p => p.max));
  
  if (overallPhMin > overallPhMax) {
    issues.push({
      severity: 'critical',
      message: '💧 Incompatible pH requirements',
      solution: 'Choose fish with overlapping pH ranges'
    });
  }

  // Tank size check
  fishItems.forEach(item => {
    const s = item.data as Species;
    if (s.environment.minTankSizeLiters > tankConfig.volume) {
      issues.push({
        severity: 'critical',
        message: `📏 ${s.taxonomy.commonName} needs minimum ${s.environment.minTankSizeLiters}L (you have ${tankConfig.volume}L)`,
        solution: 'Remove this fish or upgrade to a larger tank'
      });
    }
  });

  // Aggression check
  const hasAggressive = fishItems.some(item => {
    const s = item.data as Species;
    return s.behavior.tags?.includes('territorial') || s.behavior.tags?.includes('aggressive');
  });

  const hasPeaceful = fishItems.some(item => {
    const s = item.data as Species;
    return !s.behavior.tags?.includes('territorial') && !s.behavior.tags?.includes('aggressive');
  });

  if (hasAggressive && hasPeaceful) {
    issues.push({
      severity: 'warning',
      message: '⚔️ Mixing aggressive and peaceful species',
      solution: 'Provide plenty of hiding spots and monitor for bullying'
    });
  }

  return issues;
};
