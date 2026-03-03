import { TankItem, TankConfig, SmartSuggestion } from '../types/builder';
import { Species } from '../types/species';
import { allSpecies } from '../data/species';

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
      return fish.environment.tempC.min > 20;
    });
    if (needsHeater) {
      const watts = Math.ceil(tankConfig.volume * 0.8);
      suggestions.push({
        id: 'heater-needed',
        type: 'equipment',
        title: 'Heater Required',
        description: `Your tropical fish need a ${watts}W heater to maintain 24-26\u00b0C`,
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

  // Substrate warning for Corydoras (single source of truth)
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
    return fish.visuals.adultSizeCM > 6;
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
 * Check compatibility between all items and generate issues.
 * Note: aggression/fin-nipping/size-mismatch logic lives in
 * tank-calculations.ts detectTerritorialConflicts() and is surfaced
 * via stats.criticalWarnings / stats.warnings in the UI layer.
 */
export const checkCompatibility = (
  items: TankItem[],
  tankConfig: TankConfig
): { severity: 'critical' | 'warning' | 'info'; message: string; solution?: string }[] => {
  const issues: { severity: 'critical' | 'warning' | 'info'; message: string; solution?: string }[] = [];
  const fishItems = items.filter(i => i.type === 'fish');

  if (fishItems.length === 0) return [];

  // ── 1. WATER TYPE (freshwater / saltwater / brackish) ─────────────────────
  const waterTypes = new Set(
    fishItems.map(item => {
      const s = item.data as Species;
      return (s.environment as Record<string, unknown>)['type'] as string | undefined;
    }).filter(Boolean)
  );

  if (waterTypes.has('freshwater') && waterTypes.has('saltwater')) {
    issues.push({
      severity: 'critical',
      message: '\uD83C\uDF0A Freshwater and saltwater species cannot share a tank',
      solution: 'Choose species with the same water type (freshwater or saltwater)'
    });
  } else if (
    waterTypes.has('brackish') &&
    (waterTypes.has('freshwater') || waterTypes.has('saltwater'))
  ) {
    issues.push({
      severity: 'warning',
      message: '\u26A0\uFE0F Brackish species mixed with non-brackish – check salinity needs',
      solution: 'Ensure all species tolerate the same salinity range'
    });
  }

  // ── 2. TEMPERATURE OVERLAP ────────────────────────────────────────────────
  const temps = fishItems.map(item => {
    const s = item.data as Species;
    return { name: s.taxonomy.commonName, min: s.environment.tempC.min, max: s.environment.tempC.max };
  });
  const overallTempMin = Math.max(...temps.map(t => t.min));
  const overallTempMax = Math.min(...temps.map(t => t.max));

  if (overallTempMin > overallTempMax) {
    issues.push({
      severity: 'critical',
      message: '\uD83C\uDF21\uFE0F Incompatible temperature requirements',
      solution: 'Remove fish with conflicting temperature needs or choose similar species'
    });
  } else if (overallTempMax - overallTempMin < 2) {
    issues.push({
      severity: 'warning',
      message: `\u26A0\uFE0F Narrow temperature range: ${overallTempMin}\u2013${overallTempMax}\u00b0C`,
      solution: 'Monitor temperature closely with a reliable thermometer'
    });
  }

  // ── 3. pH OVERLAP ─────────────────────────────────────────────────────────
  const phs = fishItems.map(item => {
    const s = item.data as Species;
    return { name: s.taxonomy.commonName, min: s.environment.ph.min, max: s.environment.ph.max };
  });
  const overallPhMin = Math.max(...phs.map(p => p.min));
  const overallPhMax = Math.min(...phs.map(p => p.max));

  if (overallPhMin > overallPhMax) {
    issues.push({
      severity: 'critical',
      message: '\uD83D\uDCA7 Incompatible pH requirements',
      solution: 'Choose fish with overlapping pH ranges'
    });
  }

  // ── 4. MINIMUM TANK SIZE ──────────────────────────────────────────────────
  fishItems.forEach(item => {
    const s = item.data as Species;
    if (s.environment.minTankSizeLiters > tankConfig.volume) {
      issues.push({
        severity: 'critical',
        message: `\uD83D\uDCCF ${s.taxonomy.commonName} needs minimum ${s.environment.minTankSizeLiters}L (you have ${tankConfig.volume}L)`,
        solution: 'Remove this fish or upgrade to a larger tank'
      });
    }
  });

  // ── 5. SWIM ZONE CROWDING ─────────────────────────────────────────────────
  const zoneCounts = { surface: 0, mid: 0, bottom: 0 };
  fishItems.forEach(item => {
    const s = item.data as Species;
    const count = item.count || 1;
    const tags = s.behavior.tags || [];
    if (tags.includes('surface_dweller') || tags.includes('surface')) {
      zoneCounts.surface += count;
    } else if (tags.includes('bottom_dweller')) {
      zoneCounts.bottom += count;
    } else {
      zoneCounts.mid += count;
    }
  });

  const totalFishCount = Object.values(zoneCounts).reduce((a, b) => a + b, 0);
  if (totalFishCount >= 4) {
    (Object.entries(zoneCounts) as [string, number][]).forEach(([zone, count]) => {
      const pct = (count / totalFishCount) * 100;
      if (pct > 65) {
        issues.push({
          severity: 'warning',
          message: `\uD83C\uDFCA ${Math.round(pct)}% of fish occupy the ${zone} zone`,
          solution: `Add species from other swim zones to use the full water column`
        });
      }
    });
  }

  return issues;
};
