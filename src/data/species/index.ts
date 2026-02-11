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
import { neocaridinaDavidiRedCherry } from './neocaridina-davidi-red-cherry';

// Batch A (7)
import { harlequinRasbora } from './harlequin-rasbora';
import { chiliRasbora } from './chili-rasbora';
import { cherryBarb } from './cherry-barb';
import { celestialPearlDanio } from './celestial-pearl-danio';
import { platy } from './platy';
import { cardinalTetra } from './cardinal-tetra';
import { honeyGourami } from './honey-gourami';

// Batch B (5)
import { siameseAlgaeEater } from './siamese-algae-eater';
import { rummynoseTetra } from './rummynose-tetra';
import { ramCichlid } from './ram-cichlid';
import { molly } from './molly';
import { blackSkirtTetra } from './black-skirt-tetra';

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
  neocaridinaDavidiRedCherry,

  // Batch A
  harlequinRasbora,
  chiliRasbora,
  cherryBarb,
  celestialPearlDanio,
  platy,
  cardinalTetra,
  honeyGourami,

  // Batch B
  siameseAlgaeEater,
  rummynoseTetra,
  ramCichlid,
  molly,
  blackSkirtTetra,
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
      if (tag === 'community')
        return s.behavior.tags.includes('peaceful') || s.behavior.tags.includes('shoaler'); // Simplifizierte Logik
      return true;
    });
  }
};
