// src/types/disease.ts

export type SeverityLevel = 'low' | 'moderate' | 'high' | 'critical';

export interface Disease {
  id: string;
  slug: string;
  name: string;
  aliases?: string[]; // z.B. "White Spot" für Ich
  type: 'parasitic' | 'bacterial' | 'fungal' | 'viral' | 'environmental';
  
  severity: SeverityLevel;
  isContagious: boolean;
  isIncurable: boolean; // Wichtig für Neon Tetra Disease

  symptoms: string[];
  
  treatment: {
    steps: string[];
    medication?: string[]; // Generische Wirkstoffe, keine Markennamen (z.B. "Malachite Green")
    prognosis: string;
  };
  
  prevention: string[];
}
