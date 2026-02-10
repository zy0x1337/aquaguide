import type { Species } from '../../types/species';

export const bettaSplendens: Species = {
  id: 'betta-001',
  slug: 'betta-splendens',
  imageUrl: '/images/species/betta-splendens.jpg',
  funFact: "Bettas have a specialized organ called the 'Labyrinth Organ' that allows them to breathe atmospheric air, helping them survive in oxygen-poor puddles.",
  
  taxonomy: {
    scientificName: 'Betta splendens',
    commonName: 'Siamese Fighting Fish (male)',
    family: 'Osphronemidae',
    origin: 'Thailand (Mekong Basin)',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 7,
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 20,
    tempC: { min: 24, max: 30, ideal: 26 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    flow: 'slow',
    substrate: 'any',
  },
  
  habitat: {
    planting: 'dense',
    plantingNotes: 'Likes resting spots near the surface (e.g., Anubias leaves, Betta logs). Silk or live plants only; plastic tears fins.',
    hardscape: ['Driftwood', 'Smooth Stones', 'Caves'],
  },
  
  behavior: {
    tags: ['jumper', 'surface', 'fin_nipper', 'territorial'],
    minGroupSize: 1,
    description: 'Solitary and territorial. Males will fight to the death. Very interactive with owners.',
    compatibility: {
      goodMates: ['Snails', 'Shrimp (sometimes eaten)', 'Kuhli Loaches'],
      badMates: ['Other Bettas', 'Guppies (colorful)', 'Fin-nippers'],
      notes: 'Best kept alone.',
    }
  },
  
  care: {
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'low',
    specialRequirements: ['Heater is mandatory', 'Lid required (jumper)'],
  },
  
  health: {
    lifespanYears: 3,
    commonDiseases: [
      'fin-rot', // VERLINKT
      'ich',     // VERLINKT
      'Velvet',  // Text
      'Dropsy'   // Text
    ],
    sensitivities: ['Cold water', 'Ammonia spikes', 'Sharp plastic plants'],
  },

  scientificContext: {
    wildHabitat: "Stagnant rice paddies and floodplains.",
    sexualDimorphism: "Males have much longer fins and brighter colors. Females are shorter-finned with an 'egg spot'.",
    variants: ['Veiltail', 'Halfmoon', 'Plakat', 'Crowntail'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium', // Hier passt 'medium' perfekt!
    trigger: 'Rise in temperature + shallow water. Male builds bubble nest.',
    fryCare: 'Male guards the nest. Remove female immediately after spawning.',
  },
};
