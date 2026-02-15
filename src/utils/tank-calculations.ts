import { TankItem, TankConfig } from '../types/builder';
import { Species } from '../types/species';

export interface TankStats {
  bioloadScore: number;
  stockingPercentage: number;
  filterRate: number; // L/h
  heaterWattage: number;
  lightingLumens: number;
  warnings: string[];
  criticalWarnings: string[]; // New: Critical territorial conflicts
  feedingAdvice: string[];
}

export const calculateTankStats = (items: TankItem[], tankConfig: TankConfig): TankStats => {
  const warnings: string[] = [];
  const criticalWarnings: string[] = [];
  const fishItems = items.filter(i => i.type === 'fish');
  const plantItems = items.filter(i => i.type === 'plant');

  // 1. Calculate Bioload (Realistic & Lenient Curve)
  let requiredLiters = 0;
  
  fishItems.forEach(item => {
    const species = item.data as Species;
    const count = item.count || 1;
    const length = species.visuals.adultSizeCM;
    
    // Size-based multiplier (Cube law approximation but flattened for leniency)
    // Small fish have very low impact. Large fish have exponential impact.
    let sizeMultiplier = 1.0;
    if (length <= 3) sizeMultiplier = 0.5;      // Nano fish (very low load)
    else if (length <= 6) sizeMultiplier = 0.8; // Small community fish
    else if (length <= 12) sizeMultiplier = 1.5; // Medium (Angelfish, Gourami)
    else if (length <= 20) sizeMultiplier = 2.5; // Large
    else sizeMultiplier = 4.0;                  // Monster fish

    // Waste Multiplier based on diet/shape
    let wasteFactor = 1.0;
    if (species.visuals.iconShape === 'globiform') wasteFactor *= 1.5; // Goldfish/Puffers are messy
    if (species.visuals.iconShape === 'depressed') wasteFactor *= 1.2; // Plecos are messy
    if (species.care.diet === 'carnivore') wasteFactor *= 1.2; // High protein waste
    if (species.visuals.iconShape === 'shrimp') wasteFactor = 0.1; // Shrimp are negligible (Check shape instead of tag)

    // Formula: (Total CM) * SizeMultiplier * WasteFactor
    // Result is "Liters of water recommended" for this group
    const fishLoad = (length * count) * sizeMultiplier * wasteFactor;
    requiredLiters += fishLoad;
  });

  // Plant Bonus: Plants absorb nitrates, effectively increasing capacity
  const plantCount = plantItems.length;
  // Reduce required liters by 1% per plant, up to max 25% reduction
  const plantReduction = Math.min(0.25, plantCount * 0.01); 
  requiredLiters = requiredLiters * (1 - plantReduction);

  // Surface Area Bonus: Wide tanks oxygenate better, allowing slightly more stock
  // If tank is shallow (Length > 2.5x Height), allow 10% more stock
  if (tankConfig.length / tankConfig.height > 2.5) {
     requiredLiters *= 0.9;
  }

  // Stocking Percentage
  const stockingPercentage = Math.round((requiredLiters / tankConfig.volume) * 100);

  // 2. Hardware Recommendations (Unchanged logic, just ensuring consistency)
  const turnoverMultiplier = stockingPercentage > 85 ? 7 : 4; // 4x is enough for light stock
  const filterRate = Math.round(tankConfig.volume * turnoverMultiplier);
  
  const rawWatts = tankConfig.volume; // 1 Watt per Liter baseline
  const standardWatts = [25, 50, 75, 100, 150, 200, 300, 400, 500];
  const heaterWattage = standardWatts.find(w => w >= rawWatts) || 500;

  const hasPlants = plantItems.length > 0;
  const lumenMultiplier = hasPlants ? 35 : 15;
  const lightingLumens = Math.round(tankConfig.volume * lumenMultiplier);

  // 3. Logic Warnings
  if (stockingPercentage > 115) warnings.push('⚠️ Critically Overstocked: Upgrade filtration immediately!');
  else if (stockingPercentage > 95) warnings.push('⚠️ Heavy Bioload: Weekly water changes required.');

  // 4. TERRITORIAL & AGGRESSION CONFLICT DETECTION
  detectTerritorialConflicts(fishItems, criticalWarnings, warnings, tankConfig);

  // 5. Feeding Advice
  const diets = new Set(fishItems.map(i => (i.data as Species).care.diet));
  const tags = new Set(fishItems.flatMap(i => (i.data as Species).behavior.tags));
  const advice: string[] = [];

  if (fishItems.length > 0) {
      const basicFoods = [];
      if (fishItems.some(i => (i.data as Species).visuals.adultSizeCM < 5)) basicFoods.push("Micro-pellets/Flakes");
      if (fishItems.some(i => (i.data as Species).visuals.adultSizeCM >= 5)) basicFoods.push("Granules");
      advice.push(`Daily: ${basicFoods.join(' & ')} as staple.`);

      if (tags.has('bottom_dweller')) {
          advice.push("Daily: Sinking wafers/pellets for bottom feeders.");
      }
      if (tags.has('algae_eater') || diets.has('herbivore')) {
          advice.push("2-3x/Week: Algae wafers or blanched veggies (zucchini/spinach).");
      }
      if (diets.has('carnivore') || diets.has('omnivore')) {
          advice.push("1-2x/Week: Frozen/Live food (Bloodworms, Brine Shrimp) for health & color.");
      }
      if (tags.has('surface_dweller')) {
          advice.push("Note: Ensure some floating food for surface dwellers.");
      }
      if (tags.has('nocturnal')) {
          advice.push("Tip: Feed nocturnal species (like some catfish) after lights out.");
      }
  }

  return {
    bioloadScore: requiredLiters,
    stockingPercentage,
    filterRate,
    heaterWattage,
    lightingLumens,
    warnings,
    criticalWarnings,
    feedingAdvice: advice
  };
};

/**
 * Detect territorial conflicts and aggressive combinations
 */
function detectTerritorialConflicts(
  fishItems: TankItem[], 
  criticalWarnings: string[], 
  warnings: string[],
  tankConfig: TankConfig
) {
  // Group fish by species for easier analysis
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

  // Critical Rule 1: Multiple Male Bettas (or any territorial fish with same-species aggression)
  speciesCounts.forEach(({ species, totalCount }) => {
    if (species.taxonomy.commonName.toLowerCase().includes('betta') && totalCount > 1) {
      criticalWarnings.push(`🚫 CRITICAL: ${totalCount}x ${species.taxonomy.commonName} - Males will fight to death!`);
    }
    
    // Check for too many territorial fish of same species in small space
    if (species.behavior.tags.includes('territorial')) {
      const spacePerFish = tankConfig.volume / totalCount;
      if (spacePerFish < species.environment.minTankSizeLiters) {
        criticalWarnings.push(`⚠️ ${species.taxonomy.commonName}: ${totalCount} individuals need more territory (${Math.round(species.environment.minTankSizeLiters * totalCount)}L minimum)`);
      }
    }
  });

  // Critical Rule 2: Multiple Territorial Species in Small Tanks
  const territorialSpecies = Array.from(speciesCounts.values()).filter(
    ({ species }) => species.behavior.tags.includes('territorial') || species.behavior.tags.includes('semi-aggressive')
  );

  if (territorialSpecies.length >= 2) {
    // Check if tank is large enough for multiple territories
    const totalTerritorialFish = territorialSpecies.reduce((sum, { totalCount }) => sum + totalCount, 0);
    const avgTerritorySize = tankConfig.volume / totalTerritorialFish;
    
    if (avgTerritorySize < 30) { // Less than 30L per territorial fish
      criticalWarnings.push(`⚠️ ${territorialSpecies.length} territorial species in ${tankConfig.volume}L - High risk of aggression!`);
    }

    // List the specific conflicts
    const names = territorialSpecies.map(({ species }) => species.taxonomy.commonName).join(', ');
    warnings.push(`⚠️ Territorial Mix: ${names} - Provide caves/hiding spots and monitor closely`);
  }

  // Rule 3: Aggressive + Peaceful Mix
  const aggressiveSpecies = Array.from(speciesCounts.values()).filter(
    ({ species }) => 
      species.behavior.tags.includes('semi-aggressive') || 
      species.behavior.tags.includes('territorial') ||
      species.behavior.tags.includes('aggressive')
  );
  
  const peacefulSpecies = Array.from(speciesCounts.values()).filter(
    ({ species }) => species.behavior.tags.includes('peaceful')
  );

  if (aggressiveSpecies.length > 0 && peacefulSpecies.length > 0) {
    aggressiveSpecies.forEach(({ species }) => {
      warnings.push(`⚠️ ${species.taxonomy.commonName} may harass peaceful tankmates - Watch for fin nipping`);
    });
  }

  // Rule 4: Fin-nippers with Long-finned Fish
  const finNippers = Array.from(speciesCounts.values()).filter(
    ({ species }) => species.behavior.tags.includes('fin_nipper')
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

  // Rule 5: Size Mismatch (Large predators with tiny fish)
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
