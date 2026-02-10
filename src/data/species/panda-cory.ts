import type { Species } from '../../types/species';

export const pandaCory: Species = {
  id: 'cory-002',
  slug: 'panda-cory',
  imageUrl: '/images/species/panda-cory.jpg',
  funFact: "Named after the Giant Panda due to the black patches over its eyes. Unlike the Bronze Cory, Pandas prefer cooler water and are more sensitive to water quality.",
  
  taxonomy: {
    scientificName: 'Hoplisoma panda (prev. Corydoras)',
    commonName: 'Panda Corydoras',
    family: 'Callichthyidae',
    origin: 'Peru (Ucayali River system)',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5, // Kleiner als Aeneus
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 20, max: 25, ideal: 22 }, // KÜHLER!
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 2, max: 12 }, // Mag es weicher
    flow: 'medium',
    substrate: 'sand', // PFLICHT!
  },
  
  habitat: {
    planting: 'medium',
    plantingNotes: 'Needs shaded areas. Bright light stresses them out without cover.',
    hardscape: ['Fine Sand', 'Round Pebbles', 'Driftwood'],
  },
  
  behavior: {
    tags: ['shoaler', 'active', 'bottom_dweller', 'peaceful'],
    minGroupSize: 8, // Da kleiner und scheuer, lieber mehr
    description: 'A playful and active bottom dweller. More sensitive than the Bronze Cory. They love current and oxygen-rich water.',
    compatibility: {
      goodMates: ['White Cloud Minnows', 'Neon Tetras', 'Shrimp', 'Otocinclus'],
      badMates: ['Discus (too hot)', 'Goldfish', 'Aggressive feeders'],
      notes: 'Great for unheated (room temp) tanks.',
    }
  },
  
  care: {
    difficulty: 'medium', // Empfindlicher als Bronze!
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium', // Oft teurer
    specialRequirements: ['Cooler water', 'Pristine water quality'],
  },
  
  health: {
    lifespanYears: 6,
    commonDiseases: [
      'Bacterial infections', // Bei Stress/Wärme
      'Barbel erosion',
      'Nitrate poisoning'
    ],
    sensitivities: ['Temperatures > 26°C', 'Dirty substrate', 'Nitrates'],
  },

  scientificContext: {
    wildHabitat: "Clear, relatively fast-flowing streams with sandy bottoms. Water is oxygen-rich and cooler.",
    sexualDimorphism: "Females are rounder and larger. Males are streamlined.",
    variants: ['Longfin Panda', 'White Panda'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Cool water changes. They lay fewer eggs than Osteogaster but bigger ones. Often lay eggs in spawning mops.',
    fryCare: 'Fry are sensitive to water quality. Daily small water changes are recommended.',
  },
};
