// src/types/species.ts

// --- HELPER TYPES ---
export type Difficulty = 'beginner' | 'medium' | 'expert';
export type WaterType = 'freshwater' | 'brackish' | 'marine';
export type Diet = 'carnivore' | 'herbivore' | 'omnivore';
export type Temperament = 'peaceful' | 'aggressive' | 'semi-aggressive';
import type { ImageCredit } from './common';

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
  | 'social'
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

// --- NEW: ADVANCED BEHAVIOR TYPES ---
export type SwimmingZone = 'surface' | 'midwater' | 'bottom' | 'all';
export type ActivityLevel = 'low' | 'moderate' | 'high';
export type SocialStructureType = 'solitary' | 'pair' | 'harem' | 'school' | 'shoal';
export type FinNippingRisk = 'none' | 'low' | 'medium' | 'high';

export interface AggressionLevel {
  intraspecific: number;  // 1-10: Aggression within same species
  interspecific: number;  // 1-10: Aggression toward other species
  territorial: number;    // 1-10: Territory defense behavior
}

export interface ActivityProfile {
  level: ActivityLevel;
  peakTimes: Array<'morning' | 'afternoon' | 'evening' | 'night'>;
  nocturnal: boolean;
}

export interface SocialStructure {
  type: SocialStructureType;
  maleToFemaleRatio?: string; // e.g., "1:2-3" for livebearers
  maxMalesPerTank?: number;
}

export interface FinNipping {
  risk: FinNippingRisk;
  targets?: string[]; // Common names or tags like "long-finned"
}

export interface SwimmingZonePreference {
  primary: SwimmingZone;
  secondary?: SwimmingZone;
  preference: number; // 0-1, e.g., 0.8 = 80% in primary zone
}

export interface SpaceNeeds {
  horizontalCM: number;  // Minimum floor space per fish
  verticalCM?: number;   // Minimum height (for tall fish)
  territories?: number;  // Number of territories needed
}

// --- NEW: FEEDING TYPES ---
export type FeedingFrequency = 'once-daily' | 'twice-daily' | 'every-other-day' | 'three-times-daily';
export type FoodType = 
  | 'micro-pellets' | 'pellets' | 'flakes' | 'granules' | 'wafers'
  | 'bloodworms' | 'brine-shrimp' | 'daphnia' | 'tubifex'
  | 'algae-wafers' | 'vegetables' | 'spirulina'
  | 'live-food' | 'frozen-food';

export interface Feeding {
  frequency: FeedingFrequency;
  primaryFoods: FoodType[];
  supplements?: FoodType[];
  vegetarian: boolean;
  liveFood?: {
    required: boolean;
    recommended: boolean;
  };
  fastingDay?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
}

// --- NEW: MAINTENANCE TYPES ---
export type MaintenanceFrequency = 'daily' | 'twice-weekly' | 'weekly' | 'biweekly' | 'monthly';

export interface Maintenance {
  waterChangePercentage: number;
  waterChangeFrequency: MaintenanceFrequency;
  vacuumingNeeded: boolean;
  notes?: string;
}

// --- NEW: EQUIPMENT TYPES ---
export type FilterType = 'sponge' | 'hang-on-back' | 'canister' | 'internal' | 'undergravel';
export type FlowRate = 'gentle' | 'moderate' | 'strong';
export type LightingLevel = 'low' | 'moderate' | 'high';

export interface EquipmentRequirements {
  heater?: {
    required: boolean;
    watts?: number; // Recommended wattage per 20L
  };
  filter?: {
    required: boolean;
    type?: FilterType;
    flowRate?: FlowRate;
  };
  airstone?: boolean;
  lighting?: LightingLevel;
  co2?: boolean; // For plant-eaters that need planted tanks
}

// --- NEW: EXPERIENCE DATA ---
export interface CommonFailure {
  issue: string;      // e.g., "fin-rot", "death"
  cause: string;      // e.g., "plastic-plants", "no-heater"
  frequency: number;  // 0-1, percentage of users affected
}

export interface EstimatedCosts {
  initial: { min: number; max: number; currency: string };
  monthly: { min: number; max: number; currency: string };
}

export interface ExperienceData {
  successRate?: number;     // 0-1, percentage of users who succeed
  survivalRate?: number;    // 0-1, percentage surviving 1+ year
  commonFailures?: CommonFailure[];
  estimatedCosts?: EstimatedCosts;
}

// --- NEW: COMPATIBILITY RULE ---
export type CompatibilityRuleType = 'avoid' | 'requires' | 'warning';
export type CompatibilitySeverity = 'low' | 'medium' | 'high' | 'critical';

export interface CompatibilityRule {
  type: CompatibilityRuleType;
  target?: string;      // Species ID, tag, or description
  condition?: string;   // e.g., "tank-size > 60L"
  reason: string;
  severity: CompatibilitySeverity;
}

export interface IdealTankmates {
  surface?: number;     // Max number of surface dwellers
  midwater?: string;    // e.g., "5-10" or "unlimited"
  bottom?: string;      // e.g., "2-3"
}

// --- MAIN INTERFACE ---
export interface Species {
  id: string;
  slug: string;
  
  imageUrl?: string;
  imageCredit?: ImageCredit;
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
    
    // NEW: Advanced environment data
    swimmingZone?: SwimmingZonePreference;
    spaceNeeds?: SpaceNeeds;
    bioloadMultiplier?: number; // Override default calculation (1.0 = average)
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
      
      // NEW: Advanced compatibility
      rules?: CompatibilityRule[];
      idealTankmates?: IdealTankmates;
    };
    
    // NEW: Quantified behavior
    aggressionLevel?: AggressionLevel;
    activity?: ActivityProfile;
    socialStructure?: SocialStructure;
    finNipping?: FinNipping;
  };

  care: {
    difficulty: Difficulty;
    diet: Diet;
    effort: 'low' | 'medium' | 'high';
    cost: 'low' | 'medium' | 'high';
    specialRequirements?: string[];
    proTips?: string[];
    commonMistakes?: string[];
    
    // NEW: Detailed care instructions
    feeding?: Feeding;
    maintenance?: Maintenance;
    equipment?: EquipmentRequirements;
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
  
  // NEW: Community experience data
  experienceData?: ExperienceData;
}
