import type { Plant } from '../../types/plant';
import { anubiasBarteriNana } from './anubias-barteri-nana';
import { anubiasNanaPetite } from './anubias-nana-petite';
import {bacopaMonnieri} from './bacopa-monnieri';
import {microsorumPteropus} from './microsorum-pteropus';
import {myriophyllumMattogrossense} from './myriophyllum-mattogrossense'
import { hornwort } from './hornwort';
import { aponogetonMadagascariensis } from './aponogeton-madagascariensis';
import { limnobiumLaevigatum } from './limnoboium-laevigatum';

// 1. Array aller Pflanzen sammeln
const plants: Plant[] = [
  anubiasBarteriNana,
  anubiasNanaPetite,
  bacopaMonnieri,
  microsorumPteropus,
  myriophyllumMattogrossense,
  hornwort,
  aponogetonMadagascariensis,
  limnobiumLaevigatum
  // Hier später weitere Pflanzen importieren:
  // javaFern,
  // cryptocoryneWendtii,
];

// 2. Repository Pattern (wie bei Species)
export const plantRepository = {
  // Alle holen
  getAll: (): Plant[] => {
    return plants.sort((a, b) => a.taxonomy.commonName.localeCompare(b.taxonomy.commonName));
  },

  // Einzelne per Slug holen
  getBySlug: (slug: string): Plant | undefined => {
    return plants.find(p => p.slug === slug);
  },

  // Suche (Optional, für später)
  search: (query: string): Plant[] => {
    const q = query.toLowerCase();
    return plants.filter(p => 
      p.taxonomy.commonName.toLowerCase().includes(q) ||
      p.taxonomy.scientificName.toLowerCase().includes(q)
    );
  }
};
