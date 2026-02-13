// src/types/plant.ts

import type { ImageCredit } from './common';

export interface Plant {
  id: string;
  slug: string;
  imageUrl: string;
  
  imageCredit?: ImageCredit;
  
  difficulty: 'easy' | 'medium' | 'advanced';
  
  taxonomy: {
    scientificName: string;
    commonName: string;
    family: string;
    origin: string;
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
    tempC: { min: number; max: number };
    ph: { min: number; max: number };
  };

  planting: {
    substrate: boolean;
    soilTabs: boolean;
    liquidFertilizer: boolean;
    propagation: string;
    notes?: string;
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

  relatedPlants?: string[];

  description: string;
}
