import type { Species } from '../../types/species';
import { bettaSplendens } from './betta-splendens';
import { bettaSplendensFemale } from './betta-splendens-female';
import { neonTetra } from './neon-tetra';
import { kuhliLoach } from './kuhli-loach';
import { otocinclusVittatus } from './otocinclus-vittatus';
import { otocinclusMacrospilus } from './otocinclus-macrospilus';
import { whiteCloudMinnow } from './white-cloud-minnow';
import { endlerGuppy } from './endler-guppy';
import { swordtail } from './swordtail';
import { bristlenosePleco } from './bristlenose-pleco';
import { bronzeCory } from './bronze-cory';
import { pandaCory } from './panda-cory';
import { africanDwarfFrog } from './african-dwarf-frog';
import { neocaridinaDavidi } from './neocaridina-davidi';

const allSpecies: Species[] = [
  bettaSplendens,
  bettaSplendensFemale,
  neonTetra,
  kuhliLoach,
  otocinclusVittatus,
  otocinclusMacrospilus,
  whiteCloudMinnow,
  endlerGuppy,
  swordtail,
  bristlenosePleco,
  bronzeCory,
  pandaCory,
  africanDwarfFrog,
  neocaridinaDavidi,
];

export const speciesRepository = {
  getAll: (): Species[] => allSpecies,
  getBySlug: (slug: string): Species | undefined => {
    return allSpecies.find(s => s.slug === slug);
  },
  // Filter Funktion
  filterByTag: (tag: 'beginner' | 'nano' | 'community'): Species[] => {
    return allSpecies.filter(s => {
      if (tag === 'beginner') return s.care.difficulty === 'beginner';
      if (tag === 'nano') return s.environment.minTankSizeLiters <= 40;
      if (tag === 'community') return s.behavior.tags.includes('peaceful') || s.behavior.tags.includes('shoaler'); // Simplifizierte Logik
      return true;
    });
  }
};