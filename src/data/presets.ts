import { TankConfig, TankItem } from '../types/builder';
import { allSpecies } from './species';
import { allPlants } from './plants';
import { HARDSCAPE_LIBRARY } from './builder';

export interface TankPreset {
  id: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tankConfig: TankConfig;
  items: Omit<TankItem, 'id'>[];
}

// Helper to safely find species
const findSpecies = (id: string) => {
  const species = allSpecies.find(s => s.id === id);
  if (!species) console.warn(`Species not found: ${id}`);
  return species;
};

const findPlant = (id: string) => {
  const plant = allPlants.find(p => p.id === id);
  if (!plant) console.warn(`Plant not found: ${id}`);
  return plant;
};

const findHardscape = (id: string) => {
  const hardscape = HARDSCAPE_LIBRARY.find(h => h.id === id);
  if (!hardscape) console.warn(`Hardscape not found: ${id}`);
  return hardscape;
};

export const TANK_PRESETS: TankPreset[] = [
  // ========================================
  // PRESET 1: BEGINNER COMMUNITY (54L)
  // ========================================
  {
    id: 'beginner-community',
    name: 'Beginner Community Tank',
    description: 'Perfect starter setup with hardy schooling fish and easy low-light plants. No CO2 required.',
    difficulty: 'beginner',
    tankConfig: {
      name: 'Standard (54L)',
      length: 60,
      width: 30,
      height: 30,
      volume: 54,
      aspectRatio: 2.0
    },
    items: [
      // FISH - Mid-water schoolers
      {
        type: 'fish' as const,
        data: findSpecies('tetra-001')!, // neon-tetra
        position: { x: 45, y: 35, z: 50 },
        count: 10,
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 4 }
      },
      {
        type: 'fish' as const,
        data: findSpecies('rasbora-001')!, // harlequin-rasbora
        position: { x: 55, y: 40, z: 60 },
        count: 8,
        locked: false,
        visuals: { rotation: 0, flipX: true, swayDelay: 0.3, floatSpeed: 3.5 }
      },
      
      // Bottom dwellers
      {
        type: 'fish' as const,
        data: findSpecies('cory-002')!, // bronze-cory
        position: { x: 30, y: 80, z: 30 },
        count: 6,
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.5, floatSpeed: 2 }
      },

      // PLANTS - Easy, low-light species
      // Background left
      {
        type: 'plant' as const,
        data: findPlant('plant-hornwort')!,
        position: { x: 15, y: 70, z: 20 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.8, floatSpeed: 2 }
      },
      {
        type: 'plant' as const,
        data: findPlant('plant-hornwort')!,
        position: { x: 20, y: 68, z: 75 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.2, floatSpeed: 2.5 }
      },

      // Midground - Anubias on wood
      {
        type: 'plant' as const,
        data: findPlant('plant-anubias-barteri-nana')!, // anubias-barteri-nana
        position: { x: 40, y: 82, z: 35 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.5, floatSpeed: 1.5 }
      },
      {
        type: 'plant' as const,
        data: findPlant('plant-javafarn')!, // microsorum-pteropus
        position: { x: 65, y: 80, z: 65 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.8, floatSpeed: 1.8 }
      },

      // Floating
      {
        type: 'plant' as const,
        data: findPlant('plant-froschbiss')!, // limnobium-laevigatum
        position: { x: 70, y: 5, z: 40 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 0.5 }
      },

      // HARDSCAPE
      {
        type: 'hardscape' as const,
        data: findHardscape('wood-l')!,
        position: { x: 38, y: 83, z: 38 },
        locked: false,
        visuals: { rotation: 45, flipX: false, swayDelay: 0, floatSpeed: 0 }
      },
      {
        type: 'hardscape' as const,
        data: findHardscape('rock-s')!,
        position: { x: 65, y: 85, z: 68 },
        locked: false,
        visuals: { rotation: 120, flipX: false, swayDelay: 0, floatSpeed: 0 }
      },
      {
        type: 'hardscape' as const,
        data: findHardscape('rock-s')!,
        position: { x: 25, y: 86, z: 60 },
        locked: false,
        visuals: { rotation: 80, flipX: false, swayDelay: 0, floatSpeed: 0 }
      }
    ].filter(item => item.data !== undefined)
  },

  // ========================================
  // PRESET 2: NANO SHRIMP TANK (30L)
  // ========================================
  {
    id: 'nano-shrimp',
    name: 'Nano Shrimp Paradise',
    description: 'Dense planted nano tank for breeding Red Cherry Shrimp. Heavy planting provides hiding spots for babies.',
    difficulty: 'beginner',
    tankConfig: {
      name: 'Nano (30L)',
      length: 30,
      width: 30,
      height: 35,
      volume: 30,
      aspectRatio: 0.86
    },
    items: [
      // SHRIMP
      {
        type: 'fish' as const,
        data: findSpecies('shrimp-001')!, // neocaridina-davidi-red-cherry
        position: { x: 40, y: 75, z: 50 },
        count: 15,
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 1.5 }
      },

      // PLANTS - Dense planting
      // Background
      {
        type: 'plant' as const,
        data: findPlant('plant-hornwort')!,
        position: { x: 20, y: 70, z: 25 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.5, floatSpeed: 2 }
      },
      {
        type: 'plant' as const,
        data: findPlant('plant-bacopa-monnieri')!, // bacopa-monnieri
        position: { x: 75, y: 72, z: 70 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.8, floatSpeed: 2.5 }
      },

      // Midground - Anubias forest
      {
        type: 'plant' as const,
        data: findPlant('plant-anubias-nana-petite')!, // anubias-nana-petite
        position: { x: 35, y: 82, z: 40 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1, floatSpeed: 1.5 }
      },
      {
        type: 'plant' as const,
        data: findPlant('plant-anubias-nana-petite')!,
        position: { x: 55, y: 83, z: 60 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.3, floatSpeed: 1.5 }
      },
      {
        type: 'plant' as const,
        data: findPlant('plant-javafarn')!, // microsorum-pteropus
        position: { x: 65, y: 81, z: 35 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.6, floatSpeed: 1.8 }
      },

      // Floating cover
      {
        type: 'plant' as const,
        data: findPlant('plant-froschbiss')!, // limnobium-laevigatum
        position: { x: 50, y: 5, z: 50 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 0.5 }
      },

      // HARDSCAPE - Dragon stone cluster
      {
        type: 'hardscape' as const,
        data: findHardscape('dragon')!,
        position: { x: 45, y: 84, z: 45 },
        locked: false,
        visuals: { rotation: 90, flipX: false, swayDelay: 0, floatSpeed: 0 }
      },
      {
        type: 'hardscape' as const,
        data: findHardscape('rock-s')!,
        position: { x: 30, y: 86, z: 60 },
        locked: false,
        visuals: { rotation: 45, flipX: false, swayDelay: 0, floatSpeed: 0 }
      },
      {
        type: 'hardscape' as const,
        data: findHardscape('rock-s')!,
        position: { x: 70, y: 86, z: 50 },
        locked: false,
        visuals: { rotation: 180, flipX: false, swayDelay: 0, floatSpeed: 0 }
      }
    ].filter(item => item.data !== undefined)
  },

  // ========================================
  // PRESET 3: PLANTED COMMUNITY (112L)
  // ========================================
  {
    id: 'planted-community',
    name: 'Planted Community Tank',
    description: 'Balanced planted tank with colorful fish and varied plant heights. Moderate lighting, optional CO2.',
    difficulty: 'intermediate',
    tankConfig: {
      name: 'Medium (112L)',
      length: 80,
      width: 35,
      height: 40,
      volume: 112,
      aspectRatio: 2.0
    },
    items: [
      // FISH - Multiple species, different levels
      // Top swimmers
      {
        type: 'fish' as const,
        data: findSpecies('rasbora-001')!, // harlequin-rasbora
        position: { x: 50, y: 25, z: 50 },
        count: 12,
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 4 }
      },

      // Mid-level
      {
        type: 'fish' as const,
        data: findSpecies('tetra-002')!, // ember-tetra
        position: { x: 35, y: 40, z: 60 },
        count: 15,
        locked: false,
        visuals: { rotation: 0, flipX: true, swayDelay: 0.3, floatSpeed: 3.5 }
      },
      {
        type: 'fish' as const,
        data: findSpecies('rasbora-003')!, // chili-rasbora
        position: { x: 65, y: 35, z: 40 },
        count: 20,
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.6, floatSpeed: 3 }
      },

      // Bottom cleaners
      {
        type: 'fish' as const,
        data: findSpecies('cory-001')!, // pygmy-cory
        position: { x: 25, y: 80, z: 30 },
        count: 8,
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.8, floatSpeed: 2 }
      },
      {
        type: 'fish' as const,
        data: findSpecies('oto-002')!, // otocinclus-vittatus
        position: { x: 70, y: 78, z: 70 },
        count: 6,
        locked: false,
        visuals: { rotation: 0, flipX: true, swayDelay: 1, floatSpeed: 2 }
      },

      // Centerpiece
      {
        type: 'fish' as const,
        data: findSpecies('gourami-001')!, // honey-gourami
        position: { x: 50, y: 45, z: 45 },
        count: 2,
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.2, floatSpeed: 2.5 }
      },

      // PLANTS - Layered planting
      // Background tall stems - left side
      {
        type: 'plant' as const,
        data: findPlant('plant-bacopa-monnieri')!, // bacopa-monnieri
        position: { x: 15, y: 70, z: 25 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.5, floatSpeed: 3 }
      },
      {
        type: 'plant' as const,
        data: findPlant('plant-bacopa-monnieri')!,
        position: { x: 20, y: 68, z: 70 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.8, floatSpeed: 3 }
      },
      {
        type: 'plant' as const,
        data: findPlant('plant-myrio-mattogrossense')!, // myriophyllum-mattogrossense
        position: { x: 25, y: 72, z: 50 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1, floatSpeed: 3.5 }
      },

      // Background right
      {
        type: 'plant' as const,
        data: findPlant('plant-hornwort')!,
        position: { x: 80, y: 70, z: 30 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.2, floatSpeed: 2.5 }
      },
      {
        type: 'plant' as const,
        data: findPlant('plant-hornwort')!,
        position: { x: 85, y: 68, z: 65 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.5, floatSpeed: 2.5 }
      },

      // Midground - Anubias & Ferns
      {
        type: 'plant' as const,
        data: findPlant('plant-anubias-barteri-nana')!, // anubias-barteri-nana
        position: { x: 40, y: 82, z: 40 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.8, floatSpeed: 1.5 }
      },
      {
        type: 'plant' as const,
        data: findPlant('plant-javafarn')!, // microsorum-pteropus
        position: { x: 60, y: 80, z: 55 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 2, floatSpeed: 1.8 }
      },
      {
        type: 'plant' as const,
        data: findPlant('plant-anubias-nana-petite')!,
        position: { x: 50, y: 83, z: 70 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 2.2, floatSpeed: 1.5 }
      },

      // Feature plant
      {
        type: 'plant' as const,
        data: findPlant('plant-madagaskar-lace')!, // aponogeton
        position: { x: 70, y: 78, z: 45 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 2.5, floatSpeed: 2 }
      },

      // Floating
      {
        type: 'plant' as const,
        data: findPlant('plant-froschbiss')!,
        position: { x: 30, y: 5, z: 50 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 0.5 }
      },

      // HARDSCAPE - Natural layout
      {
        type: 'hardscape' as const,
        data: findHardscape('wood-l')!,
        position: { x: 35, y: 82, z: 35 },
        locked: false,
        visuals: { rotation: 60, flipX: false, swayDelay: 0, floatSpeed: 0 }
      },
      {
        type: 'hardscape' as const,
        data: findHardscape('wood-l')!,
        position: { x: 65, y: 83, z: 60 },
        locked: false,
        visuals: { rotation: 120, flipX: false, swayDelay: 0, floatSpeed: 0 }
      },
      {
        type: 'hardscape' as const,
        data: findHardscape('seiryu')!,
        position: { x: 75, y: 84, z: 40 },
        locked: false,
        visuals: { rotation: 90, flipX: false, swayDelay: 0, floatSpeed: 0 }
      },
      {
        type: 'hardscape' as const,
        data: findHardscape('rock-m')!,
        position: { x: 45, y: 85, z: 65 },
        locked: false,
        visuals: { rotation: 135, flipX: false, swayDelay: 0, floatSpeed: 0 }
      }
    ].filter(item => item.data !== undefined)
  },

  // ========================================
  // PRESET 4: BETTA PALACE (20L)
  // ========================================
  {
    id: 'betta-palace',
    name: 'Betta Palace',
    description: 'Peaceful planted tank for a single male Betta. Dense planting and gentle flow create a relaxing environment.',
    difficulty: 'beginner',
    tankConfig: {
      name: 'Nano (20L)',
      length: 25,
      width: 25,
      height: 30,
      volume: 20,
      aspectRatio: 0.83
    },
    items: [
      // FISH - Single Betta
      {
        type: 'fish' as const,
        data: findSpecies('betta-001')!, // betta-splendens
        position: { x: 50, y: 40, z: 50 },
        count: 1,
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 2 }
      },

      // PLANTS - Soft, broad leaves
      {
        type: 'plant' as const,
        data: findPlant('plant-anubias-barteri-nana')!, // anubias-barteri-nana
        position: { x: 30, y: 82, z: 40 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.5, floatSpeed: 1.5 }
      },
      {
        type: 'plant' as const,
        data: findPlant('plant-anubias-barteri-nana')!,
        position: { x: 70, y: 81, z: 60 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.8, floatSpeed: 1.5 }
      },
      {
        type: 'plant' as const,
        data: findPlant('plant-javafarn')!, // microsorum-pteropus
        position: { x: 50, y: 80, z: 70 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1, floatSpeed: 1.8 }
      },

      // Background
      {
        type: 'plant' as const,
        data: findPlant('plant-hornwort')!,
        position: { x: 25, y: 70, z: 25 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.2, floatSpeed: 2 }
      },

      // Floating (Betta love resting spots)
      {
        type: 'plant' as const,
        data: findPlant('plant-froschbiss')!,
        position: { x: 60, y: 5, z: 50 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 0.5 }
      },

      // HARDSCAPE - Hide & rest spots
      {
        type: 'hardscape' as const,
        data: findHardscape('wood-s')!,
        position: { x: 35, y: 83, z: 45 },
        locked: false,
        visuals: { rotation: 75, flipX: false, swayDelay: 0, floatSpeed: 0 }
      },
      {
        type: 'hardscape' as const,
        data: findHardscape('rock-s')!,
        position: { x: 65, y: 85, z: 35 },
        locked: false,
        visuals: { rotation: 120, flipX: false, swayDelay: 0, floatSpeed: 0 }
      }
    ].filter(item => item.data !== undefined)
  },

  // ========================================
  // PRESET 5: GOLDFISH POND (180L)
  // ========================================
  {
    id: 'fancy-goldfish',
    name: 'Fancy Goldfish Showcase',
    description: 'Spacious tank for fancy goldfish with minimal planting (they eat plants). Focus on swimming space.',
    difficulty: 'intermediate',
    tankConfig: {
      name: 'Medium (180L)',
      length: 100,
      width: 40,
      height: 45,
      volume: 180,
      aspectRatio: 2.22
    },
    items: [
      // FISH - Fancy Goldfish (use any goldfish-safe species we have)
      // Using peaceful community fish as placeholder since we don't have goldfish
      {
        type: 'fish' as const,
        data: findSpecies('cyprinidae-002')!, // white-cloud-minnow
        position: { x: 40, y: 40, z: 50 },
        count: 10,
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 3 }
      },
      {
        type: 'fish' as const,
        data: findSpecies('danio-001')!, // danio-rerio
        position: { x: 60, y: 35, z: 60 },
        count: 8,
        locked: false,
        visuals: { rotation: 0, flipX: true, swayDelay: 0.3, floatSpeed: 4 }
      },

      // PLANTS - Minimal, hardy only
      {
        type: 'plant' as const,
        data: findPlant('plant-anubias-barteri-nana')!, // anubias-barteri-nana
        position: { x: 20, y: 82, z: 30 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.5, floatSpeed: 1.5 }
      },
      {
        type: 'plant' as const,
        data: findPlant('plant-anubias-barteri-nana')!,
        position: { x: 80, y: 81, z: 70 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.8, floatSpeed: 1.5 }
      },

      // HARDSCAPE - Large open spaces
      {
        type: 'hardscape' as const,
        data: findHardscape('rock-l')!,
        position: { x: 25, y: 84, z: 40 },
        locked: false,
        visuals: { rotation: 45, flipX: false, swayDelay: 0, floatSpeed: 0 }
      },
      {
        type: 'hardscape' as const,
        data: findHardscape('seiryu')!,
        position: { x: 75, y: 83, z: 65 },
        locked: false,
        visuals: { rotation: 90, flipX: false, swayDelay: 0, floatSpeed: 0 }
      },
      {
        type: 'hardscape' as const,
        data: findHardscape('rock-m')!,
        position: { x: 50, y: 85, z: 30 },
        locked: false,
        visuals: { rotation: 120, flipX: false, swayDelay: 0, floatSpeed: 0 }
      }
    ].filter(item => item.data !== undefined)
  }
];
