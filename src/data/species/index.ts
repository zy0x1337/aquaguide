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
import { harlequinRasbora } from './harlequin-rasbora';
import { chiliRasbora } from './chili-rasbora';
import { cherryBarb } from './cherry-barb';
import { celestialPearlDanio } from './celestial-pearl-danio';
import { platy } from './platy';
import { cardinalTetra } from './cardinal-tetra';
import { honeyGourami } from './honey-gourami';
import { siameseAlgaeEater } from './siamese-algae-eater';
import { rummynoseTetra } from './rummynose-tetra';
import { ramCichlid } from './ram-cichlid';
import { molly } from './molly';
import { blackSkirtTetra } from './black-skirt-tetra';
import { zebraDanio } from './danio-rerio';
import { corydorasPaleatus } from './corydoras-paleatus';
import { rosyBarb } from './rosy-barb';
import { oscar } from './oscar';
import { goldSpotPleco } from './gold-spot-pleco';
import { electricYellowLab } from './electric-yellow-lab';
import { bumblebeeGoby } from './bumblebee-goby';
import { amanoShrimp } from './amano-shrimp';

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
  harlequinRasbora,
  chiliRasbora,
  cherryBarb,
  celestialPearlDanio,
  platy,
  cardinalTetra,
  honeyGourami,
  siameseAlgaeEater,
  rummynoseTetra,
  ramCichlid,
  molly,
  blackSkirtTetra,
  zebraDanio,
  corydorasPaleatus,
  rosyBarb,
  oscar,
  goldSpotPleco,
  electricYellowLab,
  bumblebeeGoby,
  amanoShrimp
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
