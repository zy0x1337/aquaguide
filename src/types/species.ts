// src/types/species.ts

// --- HELPER TYPES ---
export type Difficulty = 'beginner' | 'medium' | 'expert';
export type WaterType = 'freshwater' | 'brackish' | 'marine';
export type Diet = 'carnivore' | 'herbivore' | 'omnivore';
export type Temperament = 'peaceful' | 'aggressive' | 'semi-aggressive';

// NEU: Shapes für Visuals
export type Shape = 
  | 'fusiform' 
  | 'compressed' 
  | 'eel-like' 
  | 'depressed' 
  | 'globiform' 
  | 'shrimp' 
  | 'frog';

export type Region = 
  | 'South America' 
  | 'Central America' 
  | 'North America' 
  | 'Asia' 
  | 'Africa' 
  | 'Australia' 
  | 'Europe';

// --- BEHAVIOR TAGS ---
// Aktualisierte Liste basierend auf deinen Fehlermeldungen
export type EthologyTag = 
  // Original
  | 'architect'
  | 'jumper'
  | 'gardener'
  | 'fin_nipper'
  | 'shy'
  | 'shoaler'
  | 'schooler'
  | 'surface'
  | 'midwater'
  | 'bottom_dweller'
  | 'predator'
  | 'peaceful'
  | 'territorial'
  | 'active'
  | 'social'
  // Neu hinzugefügt (Data File Fixes)
  | 'surface_dweller'
  | 'bubble_nester'
  | 'centerpiece'
  | 'labyrinth_fish'
  | 'nocturnal'
  | 'scaleless'
  | 'livebearer'
  | 'algae_eater'
  | 'nano_safe'
  | 'nano'
  | 'diurnal'
  | 'colorful'
  | 'cichlid'
  | 'semi-aggressive'
  | 'coldwater'
  | 'amphibian'
  | 'slow_eater'
  | 'robust';

// --- MAIN INTERFACE ---
export interface Species {
  id: string;
  slug: string;
  
  imageUrl?: string;
  funFact?: string;

  taxonomy: {
    scientificName: string;
    commonName: string;
    family: string;
    origin: string;
    region: Region;
    biotope?: string;
  };

  visuals: {
    iconShape: Shape;
    adultSizeCM: number;
    color?: string;
  };

  environment: {
    type: WaterType;
    minTankSizeLiters: number;
    tempC: { min: number; max: number; ideal: number };
    ph: { min: number; max: number; ideal: number };
    gh?: { min: number; max: number };
    kh?: { min: number; max: number };
    flow: 'low' | 'moderate' | 'high';
    substrate?: string;
  };

  habitat: {
    planting: 'sparse' | 'medium' | 'dense';
    plantingNotes: string;
    hardscape: string[];
  };

  behavior: {
    tags: EthologyTag[];
    minGroupSize: number;
    description: string;
    compatibility: {
      goodMates: string[];
      badMates: string[];
      notes?: string;
    };
  };

  care: {
    difficulty: Difficulty;
    diet: Diet;
    effort: 'low' | 'medium' | 'high';
    cost: 'low' | 'medium' | 'high';
    specialRequirements?: string[];
    proTips?: string[];
    commonMistakes?: string[];
  };

  health: {
    lifespanYears: number;
    commonDiseases: string[];
    sensitivities: string[];
  };

  scientificContext?: {
    wildHabitat: string;
    sexualDimorphism: string;
    variants?: string[];
    notes?: string;
  };

  breeding?: {
    method: 'egg_scatterer' | 'mouthbrooder' | 'bubble_nester' | 'livebearer' | 'cave_spawner' | 'egg_layer' | 'substrate_spawner' | 'other'; 
    difficulty: Difficulty;
    trigger?: string;
    fryCare?: string;
    notes?: string;
  };
}
