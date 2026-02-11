// src/types/species.ts

// --- HELPER TYPES ---
export type Difficulty = 'beginner' | 'medium' | 'expert';
export type WaterType = 'freshwater' | 'brackish' | 'marine';
export type Diet = 'carnivore' | 'herbivore' | 'omnivore';
export type Temperament = 'peaceful' | 'aggressive' | 'semi-aggressive';

// NEU: Shapes für Visuals (inkl. Shrimp/Frog Fix)
export type Shape = 
  | 'fusiform' 
  | 'compressed' 
  | 'eel-like' 
  | 'depressed' 
  | 'globiform' 
  | 'shrimp'  // <--- NEU
  | 'frog';   // <--- NEU

export type Region = 
  | 'South America' 
  | 'Central America' 
  | 'North America' 
  | 'Asia' 
  | 'Africa' 
  | 'Australia' 
  | 'Europe';

// --- MAIN INTERFACE ---
export interface Species {
  id: string;
  slug: string; // URL-Friendly ID
  
  // Header / Meta
  imageUrl?: string;
  funFact?: string; // Kurzer "Wow"-Fakt für den Header

  taxonomy: {
    scientificName: string;
    commonName: string;
    family: string;
    origin: string; // Detail-Text (z.B. "Rio Negro")
    region: Region; // Grober Filter
    biotope?: string; // Detail-Biotop (z.B. "Blackwater stream")
  };

  visuals: {
    iconShape: Shape; // <--- Hier wird jetzt 'shrimp' akzeptiert
    adultSizeCM: number;
    color?: string; // Optional: für den Simulator (z.B. 'red')
  };

  environment: {
    type: WaterType;
    minTankSizeLiters: number;
    tempC: { min: number; max: number; ideal: number };
    ph: { min: number; max: number; ideal: number };
    gh?: { min: number; max: number }; // General Hardness (Optional gemacht, falls alte Daten fehlen)
    kh?: { min: number; max: number }; // Carbonate Hardness
    flow: 'low' | 'moderate' | 'high'; // <--- Angepasst an deine Data-Files
    substrate?: string;
  };

  habitat: {
    planting: 'sparse' | 'medium' | 'dense';
    plantingNotes: string;
    hardscape: string[]; // z.B. ["Driftwood", "Round stones"]
  };

  behavior: {
    tags: string[]; // z.B. ["shoaler", "fin_nipper"]
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
    
    // v2.0 UPGRADE FELDER:
    proTips?: string[];       // 3-5 Experten-Tipps
    commonMistakes?: string[]; // Häufige Fehler
  };

  health: {
    lifespanYears: number;
    commonDiseases: string[]; // Slugs oder Namen
    sensitivities: string[]; // z.B. ["Copper", "Nitrate"]
  };

  scientificContext?: {
    wildHabitat: string;
    sexualDimorphism: string;
    variants?: string[];
    notes?: string;
  };

  breeding?: {
    // Liste erweitert für Wirbellose
    method: 'egg_scatterer' | 'mouthbrooder' | 'bubble_nester' | 'livebearer' | 'cave_spawner' | 'egg_layer' | 'substrate_spawner' | 'other'; 
    difficulty: Difficulty;
    trigger?: string;
    fryCare?: string;
    notes?: string; // Hilfreich für Zusatzinfos
  };
}
