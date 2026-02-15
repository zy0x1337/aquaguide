import { TankItem, TankConfig } from '../types/builder';
import { Species } from '../types/species';

export interface TankStats {
  bioloadScore: number; // Raw abstract score
  stockingPercentage: number;
  filterRate: number; // L/h
  heaterWattage: number; // Watts
  lightingLumens: number; // Total Lumens
  warnings: string[];
}

export const calculateTankStats = (items: TankItem[], tankConfig: TankConfig): TankStats => {
  const warnings: string[] = [];
  const fishItems = items.filter(i => i.type === 'fish');
  const plantItems = items.filter(i => i.type === 'plant');

  // 1. Calculate Bioload (Weighted)
  let totalBioload = 0;
  
  fishItems.forEach(item => {
    const species = item.data as Species;
    const count = item.count || 1;
    const length = species.visuals.adultSizeCM;
    
    // Mass Multiplier based on body shape
    let massMultiplier = 1.0;
    switch (species.visuals.iconShape) {
      case 'fusiform': massMultiplier = 1.0; break; // Streamlined (Tetras, Danios)
      case 'compressed': massMultiplier = 1.2; break; // Tall/Thin (Angelfish, Gourami)
      case 'depressed': massMultiplier = 1.1; break; // Flat (Plecos, Rays)
      case 'globiform': massMultiplier = 1.6; break; // Round (Puffers, Goldfish types)
      case 'eel-like': massMultiplier = 1.2; break; // Long (Loaches)
      default: massMultiplier = 1.0;
    }

    // Waste Multiplier based on diet/behavior (Simplified assumption)
    // Predators/Messy eaters get a bump
    // FIXED: accessing diet from 'care' property, not 'behavior'
    if (species.care.diet === 'carnivore') massMultiplier *= 1.1;
    
    // The Formula: Length * Count * MassModifier
    // Base rule approximation: 1cm of slender fish needs ~1.5L of water
    totalBioload += (length * count * massMultiplier);
  });

  // Calculate Capacity
  // Standard rule: 1cm fish per 1.5L is "100%" for a standard filter
  // We make it slightly exponential for larger volumes to be safer
  const capacityPoints = tankConfig.volume / 1.5;
  
  const stockingPercentage = Math.round((totalBioload / capacityPoints) * 100);

  // 2. Hardware Recommendations
  
  // Filter: Aim for 4x-6x turnover per hour
  // If stocking is high (>80%), suggest higher turnover
  const turnoverMultiplier = stockingPercentage > 80 ? 7 : 5;
  const filterRate = Math.round(tankConfig.volume * turnoverMultiplier);

  // Heater: Approx 1 Watt per Liter for standard room temp delta
  // Round to nearest standard sizes: 25, 50, 75, 100, 150, 200, 300
  const rawWatts = tankConfig.volume;
  const standardWatts = [25, 50, 75, 100, 150, 200, 300, 400, 500];
  const heaterWattage = standardWatts.find(w => w >= rawWatts) || 500;

  // Lighting: Based on tank volume and plant load
  // Low tech: 15-20 lumens/L
  // High tech: 30-50 lumens/L
  const hasPlants = plantItems.length > 0;
  const lumenMultiplier = hasPlants ? 30 : 15;
  const lightingLumens = Math.round(tankConfig.volume * lumenMultiplier);

  // 3. Logic Warnings
  if (stockingPercentage > 110) warnings.push('⚠️ Critically Overstocked: Upgrade filtration immediately!');
  else if (stockingPercentage > 90) warnings.push('⚠️ Heavy Bioload: Weekly water changes required.');
  
  // Schooling checks
  const speciesGroups = new Map<string, number>();
  fishItems.forEach(item => { 
    const id = (item.data as Species).id;
    speciesGroups.set(id, (speciesGroups.get(id) || 0) + (item.count || 1));
  });

  // Check unique species count for compatibility warnings (simplified)
  // (Full compatibility logic remains in the main component for now, but could move here)

  return {
    bioloadScore: totalBioload,
    stockingPercentage,
    filterRate,
    heaterWattage,
    lightingLumens,
    warnings
  };
};
