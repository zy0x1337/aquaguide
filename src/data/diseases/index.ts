// src/data/diseases/index.ts
import { ich } from './ich';
import { finRot } from './fin-rot';
import { neonTetraDisease } from './neon-tetra-disease';
import type { Disease } from '../../types/disease';

// 1. Hier müssen ALLE Krankheiten rein, sonst werden sie nicht gefunden!
export const allDiseases: Disease[] = [
  ich,
  finRot,
  neonTetraDisease
];

// 2. Die Suchfunktion
export const resolveDiseaseReference = (identifier: string): Disease | string => {
  // Suche nach exaktem Slug-Match
  const found = allDiseases.find(d => d.slug === identifier);
  
  // Wenn gefunden -> Gib das Objekt zurück (wird zum Link)
  // Wenn NICHT gefunden -> Gib den String zurück (wird zum grauen Text)
  return found ? found : identifier;
};
