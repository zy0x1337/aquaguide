import { TankItem, TankConfig } from '../types/builder';
import { Species } from '../types/species';

export interface TankStats {
  bioloadScore: number;
  stockingPercentage: number;
  filterRate: number; // L/h
  heaterWattage: number;
  lightingLumens: number;
  warnings: string[];
  criticalWarnings: string[];
  feedingAdvice: string[];
  tempRange?: { min: number; max: number };
  phRange?: { min: number; max: number };
}

export const calculateTankStats = (items: TankItem[], tankConfig: TankConfig): TankStats => {
  const warnings: string[] = [];
  const criticalWarnings: string[] = [];
  const fishItems = items.filter(i => i.type === 'fish');
  const plantItems = items.filter(i => i.type === 'plant');

  // Calculate water parameter ranges
  let tempRange: { min: number; max: number } | undefined;
  let phRange: { min: number; max: number } | undefined;

  if (fishItems.length > 0) {
    const temps = fishItems.map(item => {
      const s = item.data as Species;
      return { min: s.environment.tempC.min, max: s.environment.tempC.max };
    });
    const phs = fishItems.map(item => {
      const s = item.data as Species;
      return { min: s.environment.ph.min, max: s.environment.ph.max };
    });
    
    tempRange = {
      min: Math.max(...temps.map(t => t.min)),
      max: Math.min(...temps.map(t => t.max))
    };
    
    phRange = {
      min: Math.max(...phs.map(p => p.min)),
      max: Math.min(...phs.map(p => p.max))
    };
  }

  // 1. Calculate Bioload (NOW USES bioloadMultiplier if available)
  let requiredLiters = 0;
  
  fishItems.forEach(item => {
    const species = item.data as Species;
    const count = item.count || 1;
    const length = species.visuals.adultSizeCM;
    
    // Size-based multiplier
    let sizeMultiplier = 1.0;
    if (length <= 3) sizeMultiplier = 0.5;
    else if (length <= 6) sizeMultiplier = 0.8;
    else if (length <= 12) sizeMultiplier = 1.5;
    else if (length <= 20) sizeMultiplier = 2.5;
    else sizeMultiplier = 4.0;

    // Waste Multiplier based on diet/shape
    let wasteFactor = 1.0;
    if (species.visuals.iconShape === 'globiform') wasteFactor *= 1.5;
    if (species.visuals.iconShape === 'depressed') wasteFactor *= 1.2;
    if (species.care.diet === 'carnivore') wasteFactor *= 1.2;
    if (species.visuals.iconShape === 'shrimp') wasteFactor = 0.1;

    // NEW: Use species-specific bioload multiplier if available
    const bioloadMultiplier = species.environment.bioloadMultiplier || 1.0;
    wasteFactor *= bioloadMultiplier;

    const fishLoad = (length * count) * sizeMultiplier * wasteFactor;
    requiredLiters += fishLoad;
  });

  // Plant Bonus
  const plantCount = plantItems.length;
  const plantReduction = Math.min(0.25, plantCount * 0.01); 
  requiredLiters = requiredLiters * (1 - plantReduction);

  // Surface Area Bonus
  if (tankConfig.length / tankConfig.height > 2.5) {
     requiredLiters *= 0.9;
  }

  const stockingPercentage = Math.round((requiredLiters / tankConfig.volume) * 100);

  // 2. Hardware Recommendations (NOW CONSIDERS species.care.equipment)
  const turnoverMultiplier = stockingPercentage > 85 ? 7 : 4;
  let filterRate = Math.round(tankConfig.volume * turnoverMultiplier);
  
  // Adjust filter for species that need gentle flow
  const needsGentleFlow = fishItems.some(item => {
    const s = item.data as Species;
    return s.care.equipment?.filter?.flowRate === 'gentle' || s.environment.flow === 'low';
  });
  
  if (needsGentleFlow) {
    filterRate = Math.round(tankConfig.volume * 3); // Lower turnover
    warnings.push('⚠️ Use gentle filter flow (sponge filter recommended for Bettas/slow swimmers)');
  }
  
  const rawWatts = tankConfig.volume;
  const standardWatts = [25, 50, 75, 100, 150, 200, 300, 400, 500];
  const heaterWattage = standardWatts.find(w => w >= rawWatts) || 500;

  const hasPlants = plantItems.length > 0;
  const lumenMultiplier = hasPlants ? 35 : 15;
  const lightingLumens = Math.round(tankConfig.volume * lumenMultiplier);

  // 3. Logic Warnings
  if (stockingPercentage > 115) warnings.push('⚠️ Critically Overstocked: Upgrade filtration immediately!');
  else if (stockingPercentage > 95) warnings.push('⚠️ Heavy Bioload: Weekly water changes required.');

  // 4. TERRITORIAL & AGGRESSION CONFLICT DETECTION (NOW USES aggressionLevel)
  detectTerritorialConflicts(fishItems, criticalWarnings, warnings, tankConfig);

  // 5. Feeding Advice (NOW USES species.care.feeding if available)
  const advice = generateFeedingAdvice(fishItems);

  return {
    bioloadScore: requiredLiters,
    stockingPercentage,
    filterRate,
    heaterWattage,
    lightingLumens,
    warnings,
    criticalWarnings,
    feedingAdvice: advice,
    tempRange,
    phRange
  };
};

function generateFeedingAdvice(fishItems: TankItem[]): string[] {
  if (fishItems.length === 0) return [];
  
  const advice: string[] = [];
  const diets = new Set(fishItems.map(i => (i.data as Species).care.diet));
  const tags = new Set(fishItems.flatMap(i => (i.data as Species).behavior.tags));
  
  // Check if any species have detailed feeding schedules
  const detailedFeeders = fishItems.filter(item => {
    const s = item.data as Species;
    return s.care.feeding !== undefined;
  });
  
  if (detailedFeeders.length > 0) {
    // Use species-specific feeding data
    const frequencies = new Set(detailedFeeders.map(item => {
      const s = item.data as Species;
      return s.care.feeding?.frequency;
    }));
    
    if (frequencies.has('twice-daily')) {
      advice.push('Feed twice daily: Morning and evening (some species require frequent feeding)');
    } else {
      advice.push('Feed once daily: Small portions to prevent waste');
    }
    
    // Compile unique food types
    const allFoods = new Set<string>();
    detailedFeeders.forEach(item => {
      const s = item.data as Species;
      s.care.feeding?.primaryFoods.forEach(f => allFoods.add(f));
      s.care.feeding?.supplements?.forEach(f => allFoods.add(f));
    });
    
    if (allFoods.size > 0) {
      advice.push(`Variety is key: ${Array.from(allFoods).slice(0, 4).join(', ')}`);
    }
    
    // Check for fasting days
    const hasFastingDay = detailedFeeders.some(item => {
      const s = item.data as Species;
      return s.care.feeding?.fastingDay !== undefined;
    });
    
    if (hasFastingDay) {
      advice.push('Consider a fasting day once per week to prevent bloating');
    }
  } else {
    // Fallback to generic advice
    const basicFoods = [];
    if (fishItems.some(i => (i.data as Species).visuals.adultSizeCM < 5)) basicFoods.push("Micro-pellets/Flakes");
    if (fishItems.some(i => (i.data as Species).visuals.adultSizeCM >= 5)) basicFoods.push("Granules");
    if (basicFoods.length > 0) {
      advice.push(`Daily: ${basicFoods.join(' & ')} as staple.`);
    }

    if (tags.has('bottom_dweller')) {
      advice.push("Daily: Sinking wafers/pellets for bottom feeders.");
    }
    if (tags.has('algae_eater') || diets.has('herbivore')) {
      advice.push("2-3x/Week: Algae wafers or blanched veggies (zucchini/spinach).");
    }
    if (diets.has('carnivore') || diets.has('omnivore')) {
      advice.push("1-2x/Week: Frozen/Live food (Bloodworms, Brine Shrimp) for health & color.");
    }
  }
  
  if (tags.has('surface_dweller')) {
    advice.push("Note: Ensure some floating food for surface dwellers.");
  }
  if (tags.has('nocturnal')) {
    advice.push("Tip: Feed nocturnal species (like some catfish) after lights out.");
  }
  
  return advice;
}

function detectTerritorialConflicts(
  fishItems: TankItem[], 
  criticalWarnings: string[], 
  warnings: string[],
  tankConfig: TankConfig
) {
  const speciesCounts = new Map<string, { species: Species; totalCount: number; items: TankItem[] }>();
  
  fishItems.forEach(item => {
    const species = item.data as Species;
    const count = item.count || 1;
    
    if (!speciesCounts.has(species.id)) {
      speciesCounts.set(species.id, { species, totalCount: 0, items: [] });
    }
    const entry = speciesCounts.get(species.id)!;
    entry.totalCount += count;
    entry.items.push(item);
  });

  // NEW: Use aggressionLevel if available
  speciesCounts.forEach(({ species, totalCount }) => {
    // Check for extreme intraspecific aggression
    if (species.behavior.aggressionLevel?.intraspecific >= 9 && totalCount > 1) {
      criticalWarnings.push(`🚫 CRITICAL: ${species.taxonomy.commonName} - ${totalCount} individuals will fight (intraspecific aggression = ${species.behavior.aggressionLevel.intraspecific}/10)`);
    }
    
    // Betta-specific check (fallback)
    if (species.taxonomy.commonName.toLowerCase().includes('betta') && totalCount > 1) {
      criticalWarnings.push(`🚫 CRITICAL: ${totalCount}x ${species.taxonomy.commonName} - Males will fight to death!`);
    }
    
    // Territory space check (NEW: uses spaceNeeds if available)
    if (species.behavior.tags.includes('territorial')) {
      const spacePerFish = tankConfig.volume / totalCount;
      const minSpace = species.environment.spaceNeeds?.horizontalCM 
        ? (species.environment.spaceNeeds.horizontalCM * species.environment.spaceNeeds.horizontalCM * 0.3) / 1000 // rough conversion
        : species.environment.minTankSizeLiters;
      
      if (spacePerFish < minSpace) {
        criticalWarnings.push(`⚠️ ${species.taxonomy.commonName}: ${totalCount} individuals need more territory (${Math.round(minSpace * totalCount)}L minimum)`);
      }
    }
  });

  // Multiple territorial species warning
  const territorialSpecies = Array.from(speciesCounts.values()).filter(
    ({ species }) => species.behavior.tags.includes('territorial') || species.behavior.tags.includes('semi-aggressive')
  );

  if (territorialSpecies.length >= 2) {
    const totalTerritorialFish = territorialSpecies.reduce((sum, { totalCount }) => sum + totalCount, 0);
    const avgTerritorySize = tankConfig.volume / totalTerritorialFish;
    
    if (avgTerritorySize < 30) {
      criticalWarnings.push(`⚠️ ${territorialSpecies.length} territorial species in ${tankConfig.volume}L - High risk of aggression!`);
    }

    const names = territorialSpecies.map(({ species }) => species.taxonomy.commonName).join(', ');
    warnings.push(`⚠️ Territorial Mix: ${names} - Provide caves/hiding spots and monitor closely`);
  }

  // Aggressive + Peaceful mix
  const aggressiveSpecies = Array.from(speciesCounts.values()).filter(
    ({ species }) => 
      species.behavior.tags.includes('semi-aggressive') || 
      species.behavior.tags.includes('territorial') ||
      (species.behavior.aggressionLevel?.interspecific || 0) >= 6
  );
  
  const peacefulSpecies = Array.from(speciesCounts.values()).filter(
    ({ species }) => 
      species.behavior.tags.includes('peaceful') &&
      (species.behavior.aggressionLevel?.interspecific || 0) < 4
  );

  if (aggressiveSpecies.length > 0 && peacefulSpecies.length > 0) {
    aggressiveSpecies.forEach(({ species }) => {
      warnings.push(`⚠️ ${species.taxonomy.commonName} may harass peaceful tankmates - Watch for fin nipping`);
    });
  }

  // Fin-nippers with long-finned fish (NEW: uses finNipping data)
  const finNippers = Array.from(speciesCounts.values()).filter(
    ({ species }) => 
      species.behavior.tags.includes('fin_nipper') ||
      species.behavior.finNipping?.risk === 'high' ||
      species.behavior.finNipping?.risk === 'medium'
  );
  
  const longFinnedFish = fishItems.filter(item => {
    const species = item.data as Species;
    return species.taxonomy.commonName.toLowerCase().includes('betta') || 
           species.taxonomy.commonName.toLowerCase().includes('angelfish') ||
           species.taxonomy.commonName.toLowerCase().includes('guppy');
  });

  if (finNippers.length > 0 && longFinnedFish.length > 0) {
    criticalWarnings.push(`🚫 Fin Nippers + Long-finned fish detected - Will cause severe stress!`);
  }

  // Size mismatch
  const largePredators = Array.from(speciesCounts.values()).filter(
    ({ species }) => species.visuals.adultSizeCM > 10 && species.care.diet === 'carnivore'
  );
  
  const tinyFish = fishItems.filter(item => {
    const species = item.data as Species;
    return species.visuals.adultSizeCM < 3;
  });

  if (largePredators.length > 0 && tinyFish.length > 0) {
    criticalWarnings.push(`🚫 Large carnivores will eat nano fish - Size mismatch!`);
  }
}
