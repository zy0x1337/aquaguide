export type Difficulty = 'beginner' | 'medium' | 'expert';

// Hier auch nochmal sicherstellen, dass 'midwater' dabei ist
export type EthologyTag = 
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
  | 'social';


export interface Species {
  id: string;
  slug: string;
  funFact: string;
  imageUrl?: string;

  taxonomy: {
    scientificName: string;
    commonName: string;
    family: string;
    origin: string;
  };

  visuals: {
    iconShape: 'fusiform' | 'eel-like' | 'compressed' | 'round'; // Ggf. erweitern
    adultSizeCM: number;
  };

  environment: {
    type: 'freshwater' | 'brackish' | 'marine';
    minTankSizeLiters: number;
    tempC: { min: number; max: number; ideal: number };
    ph: { min: number; max: number; ideal: number };
    gh: { min: number; max: number };
    flow: 'slow' | 'medium' | 'fast';
    substrate: 'sand' | 'gravel' | 'soil' | 'any';
  };

  habitat: {
    planting: 'sparse' | 'medium' | 'dense' | 'none';
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
      notes: string;
    };
  };

  care: {
    difficulty: Difficulty; // Nutzt jetzt 'beginner' | 'medium' | 'expert'
    diet: 'carnivore' | 'herbivore' | 'omnivore';
    effort: 'low' | 'medium' | 'high';
    cost: 'low' | 'medium' | 'high';
    specialRequirements: string[];
  };

  health: {
    lifespanYears: number;
    commonDiseases: string[]; // Hier stehen jetzt die Slugs oder Namen drin
    sensitivities: string[];
  };

  scientificContext?: {
    wildHabitat: string;
    sexualDimorphism: string;
    variants: string[];
  };

  breeding?: {
    method: 'egg_scatterer' | 'mouthbrooder' | 'bubble_nester' | 'livebearer' | 'cave_spawner';
    difficulty: Difficulty; // Nutzt auch den neuen Typ
    trigger: string;
    fryCare: string;
  };
}
