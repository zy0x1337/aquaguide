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
  items: Omit<TankItem, 'id'>[];  // We'll generate IDs when loading
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
  {
    id: 'beginner-community',
    name: 'Beginner Community Tank',
    description: 'Perfect starter setup with hardy, peaceful fish and easy plants. 60L community aquarium.',
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
      // Fish
      {
        type: 'fish' as const,
        data: findSpecies('neon-tetra')!,
        position: { x: 40, y: 40, z: 50 },
        count: 8,
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 4 }
      },
      {
        type: 'fish' as const,
        data: findSpecies('bronze-cory')!,
        position: { x: 30, y: 75, z: 30 },
        count: 5,
        locked: false,
        visuals: { rotation: 0, flipX: true, swayDelay: 0.5, floatSpeed: 3 }
      },
      // Plants
      {
        type: 'plant' as const,
        data: findPlant('java-fern')!,
        position: { x: 15, y: 80, z: 20 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1, floatSpeed: 2 }
      },
      {
        type: 'plant' as const,
        data: findPlant('anubias-nana')!,
        position: { x: 70, y: 82, z: 70 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.5, floatSpeed: 2 }
      },
      {
        type: 'plant' as const,
        data: findPlant('amazon-sword')!,
        position: { x: 50, y: 83, z: 80 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.8, floatSpeed: 3 }
      },
      // Hardscape
      {
        type: 'hardscape' as const,
        data: findHardscape('wood-s')!,
        position: { x: 35, y: 82, z: 40 },
        locked: false,
        visuals: { rotation: 45, flipX: false, swayDelay: 0, floatSpeed: 0 }
      },
      {
        type: 'hardscape' as const,
        data: findHardscape('rock-m')!,
        position: { x: 65, y: 85, z: 30 },
        locked: false,
        visuals: { rotation: 120, flipX: false, swayDelay: 0, floatSpeed: 0 }
      }
    ].filter(item => item.data !== undefined) // Remove undefined items
  },
  
  {
    id: 'shrimp-paradise',
    name: 'Shrimp Paradise',
    description: 'Nano planted tank optimized for cherry shrimp breeding. Dense planting with moss.',
    difficulty: 'intermediate',
    tankConfig: {
      name: 'Nano (30L)',
      length: 30,
      width: 30,
      height: 35,
      volume: 30,
      aspectRatio: 0.86
    },
    items: [
      // Shrimp
      {
        type: 'fish' as const,
        data: findSpecies('neocaridina-davidi-red-cherry')!,
        position: { x: 45, y: 70, z: 50 },
        count: 10,
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 2 }
      },
      // Dense Plants
      {
        type: 'plant' as const,
        data: findPlant('java-moss')!,
        position: { x: 25, y: 82, z: 30 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 1 }
      },
      {
        type: 'plant' as const,
        data: findPlant('java-moss')!,
        position: { x: 70, y: 83, z: 65 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.5, floatSpeed: 1 }
      },
      {
        type: 'plant' as const,
        data: findPlant('bucephalandra')!,
        position: { x: 50, y: 82, z: 40 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1, floatSpeed: 2 }
      },
      {
        type: 'plant' as const,
        data: findPlant('anubias-nana')!,
        position: { x: 35, y: 81, z: 70 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.2, floatSpeed: 2 }
      },
      // Hardscape
      {
        type: 'hardscape' as const,
        data: findHardscape('dragon')!,
        position: { x: 40, y: 84, z: 45 },
        locked: false,
        visuals: { rotation: 90, flipX: false, swayDelay: 0, floatSpeed: 0 }
      },
      {
        type: 'hardscape' as const,
        data: findHardscape('rock-s')!,
        position: { x: 60, y: 86, z: 55 },
        locked: false,
        visuals: { rotation: 180, flipX: false, swayDelay: 0, floatSpeed: 0 }
      }
    ].filter(item => item.data !== undefined)
  },

  {
    id: 'dutch-planted',
    name: 'Dutch Planted Showcase',
    description: 'Advanced planted tank with variety of stem plants and CO2 injection. High maintenance beauty.',
    difficulty: 'advanced',
    tankConfig: {
      name: 'Medium (180L)',
      length: 100,
      width: 40,
      height: 45,
      volume: 180,
      aspectRatio: 2.22
    },
    items: [
      // Small schooling fish
      {
        type: 'fish' as const,
        data: findSpecies('cardinal-tetra')!,
        position: { x: 50, y: 35, z: 50 },
        count: 20,
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 4 }
      },
      {
        type: 'fish' as const,
        data: findSpecies('otocinclus-vittatus')!,
        position: { x: 30, y: 70, z: 30 },
        count: 6,
        locked: false,
        visuals: { rotation: 0, flipX: true, swayDelay: 0.3, floatSpeed: 3 }
      },
      // Heavy Planting
      {
        type: 'plant' as const,
        data: findPlant('rotala-rotundifolia')!,
        position: { x: 20, y: 80, z: 70 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.5, floatSpeed: 3 }
      },
      {
        type: 'plant' as const,
        data: findPlant('rotala-rotundifolia')!,
        position: { x: 25, y: 81, z: 30 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 0.8, floatSpeed: 3 }
      },
      {
        type: 'plant' as const,
        data: findPlant('ludwigia-repens')!,
        position: { x: 75, y: 82, z: 65 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1, floatSpeed: 3 }
      },
      {
        type: 'plant' as const,
        data: findPlant('amazon-sword')!,
        position: { x: 50, y: 83, z: 75 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.2, floatSpeed: 2 }
      },
      {
        type: 'plant' as const,
        data: findPlant('java-fern')!,
        position: { x: 65, y: 82, z: 25 },
        locked: false,
        visuals: { rotation: 0, flipX: false, swayDelay: 1.5, floatSpeed: 2 }
      },
      // Hardscape
      {
        type: 'hardscape' as const,
        data: findHardscape('wood-l')!,
        position: { x: 40, y: 83, z: 50 },
        locked: false,
        visuals: { rotation: 60, flipX: false, swayDelay: 0, floatSpeed: 0 }
      },
      {
        type: 'hardscape' as const,
        data: findHardscape('seiryu')!,
        position: { x: 70, y: 85, z: 40 },
        locked: false,
        visuals: { rotation: 135, flipX: false, swayDelay: 0, floatSpeed: 0 }
      }
    ].filter(item => item.data !== undefined)
  }
];
