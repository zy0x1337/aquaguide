// src/types/plant.ts

import type { ImageCredit } from './common';

export type AquascapeStyle = 'dutch' | 'nature_aquarium' | 'iwagumi' | 'biotope' | 'jungle' | 'low_tech' | 'walstad';

export interface Plant {
  id: string;
  slug: string;
  imageUrl: string;

  imageCredit?: ImageCredit;

  difficulty: 'easy' | 'medium' | 'advanced';

  /** A short, engaging fun fact shown prominently on the detail page */
  funFact?: string;

  taxonomy: {
    scientificName: string;
    commonName: string;
    family: string;
    /** Country / broad region, e.g. "West Africa (Cameroon)" */
    origin: string;
    /** More specific native habitat description */
    nativeRegion?: string;
  };

  specs: {
    type: 'stem' | 'rosette' | 'rhizome' | 'moss' | 'float' | 'bulb' | 'carpet' | 'fern' | 'epiphyte';
    heightCM: { min: number; max: number };
    light: 'low' | 'medium' | 'high';
    co2: 'low' | 'medium' | 'high';
    growthRate: 'slow' | 'medium' | 'fast' | 'very fast';
    placement: ('foreground' | 'midground' | 'background' | 'epiphyte' | 'floating' | 'carpet')[];
  };

  parameters: {
    tempC: { min: number; max: number; ideal?: number };
    ph: { min: number; max: number; ideal?: number };
    /** Carbonate hardness in °dKH */
    kh?: { min: number; max: number };
    /** General hardness in °dGH */
    gh?: { min: number; max: number };
    /** Preferred water flow */
    flow?: 'none' | 'low' | 'medium' | 'high';
    /** Recommended photoperiod in hours per day */
    photoperiodHours?: { min: number; max: number };
  };

  planting: {
    substrate: boolean;
    soilTabs: boolean;
    liquidFertilizer: boolean;
    propagation: string;
    notes?: string;
    /** How and how often to trim */
    trimming?: string;
    /** How the plant ages / senesces */
    senescenceNotes?: string;
  };

  nutrients?: {
    nitrogen: 'low' | 'medium' | 'high';
    phosphate: 'low' | 'medium' | 'high';
    potassium: 'low' | 'medium' | 'high';
    iron: 'low' | 'medium' | 'high';
  };

  commonProblems?: Array<{
    title: string;
    desc: string;
    solution: string;
  }>;

  /** Known cultivars / variants, e.g. ["Windelov", "Trident", "Needle Leaf"] */
  variants?: string[];

  relatedPlants?: string[];

  /** Quick bullet-point pro tips */
  proTips?: string[];

  /** Common mistakes to avoid */
  commonMistakes?: string[];

  /** Aquascape / tank-setup context */
  aquascapeContext?: {
    /** Styles this plant suits well */
    styles: AquascapeStyle[];
    /** Short description of the plant's role in the tank */
    roleInTank?: string;
    /** Fish / invertebrate species that coexist well with this plant */
    companionFish?: string[];
    /** Fish that damage or eat this plant */
    incompatibleFish?: string[];
    /** Recommended substrate types */
    substrateRecommendations?: string[];
  };

  description: string;
}
