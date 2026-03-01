import type { Plant } from '../../types/plant';
import { anubiasBarteriNana } from './anubias-barteri-nana';
import { anubiasNanaPetite } from './anubias-nana-petite';
import {bacopaMonnieri} from './bacopa-monnieri';
import {microsorumPteropus} from './microsorum-pteropus';
import {myriophyllumMattogrossense} from './myriophyllum-mattogrossense'
import { hornwort } from './hornwort';
import { aponogetonMadagascariensis } from './aponogeton-madagascariensis';
import { limnobiumLaevigatum } from './limnobium-laevigatum';
import { phyllanthusFluitans } from './phyllantus-fluitans';

// 1. Array aller Pflanzen sammeln
export const allPlants: Plant[] = [
  anubiasBarteriNana,
  anubiasNanaPetite,
  bacopaMonnieri,
  microsorumPteropus,
  myriophyllumMattogrossense,
  hornwort,
  aponogetonMadagascariensis,
  limnobiumLaevigatum,
  phyllanthusFluitans
];

// 2. Repository Pattern (wie bei Species)
export const plantRepository = {
  // Alle holen
  getAll: (): Plant[] => {
    return allPlants.sort((a, b) => a.taxonomy.commonName.localeCompare(b.taxonomy.commonName));
  },

  // Einzelne per Slug holen
  getBySlug: (slug: string): Plant | undefined => {
    return allPlants.find(p => p.slug === slug);
  },

  // Suche (Optional, für später)
  search: (query: string): Plant[] => {
    const q = query.toLowerCase();
    return allPlants.filter(p => 
      p.taxonomy.commonName.toLowerCase().includes(q) ||
      p.taxonomy.scientificName.toLowerCase().includes(q)
    );
  }
};
