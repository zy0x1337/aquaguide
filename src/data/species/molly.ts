import type { Species } from '../../types/species';

export const molly: Species = {
  id: 'molly-001',
  slug: 'molly',
  imageUrl: '/images/species/molly.jpg',
  funFact: "Mollies can tolerate brackish water better than most freshwater fish. Some populations even thrive in saltwater.",

  taxonomy: {
    scientificName: 'Poecilia sphenops',
    commonName: 'Molly',
    family: 'Poeciliidae',
    origin: 'Mexico, Central America',
    region: 'Central America',
    biotope: 'Warm, coastal estuaries and rivers (often brackish)',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 7,
  },

  environment: {
    type: 'freshwater', // Toleriert Brackwasser
    minTankSizeLiters: 60,
    tempC: { min: 22, max: 29, ideal: 26 },
    ph: { min: 7.0, max: 8.5, ideal: 7.5 },
    gh: { min: 15, max: 30 }, // HARD water
    flow: 'low',
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'They love plants but will also eat them if hungry. Provide Java Moss for grazing.',
    hardscape: ['Driftwood'],
  },

  behavior: {
    tags: ['livebearer', 'peaceful', 'surface_dweller'],
    minGroupSize: 3,
    description: 'Peaceful, active livebearers. Males can be aggressive towards each other when competing for females.',
    compatibility: {
      goodMates: ['Platies', 'Swordtails', 'Community fish'],
      badMates: ['Aggressive Cichlids'],
      notes: 'Safe with shrimp.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Hard water (GH > 15)', 'Ratio: 1 male per 2-3 females'],

    proTips: [
      "Add aquarium salt (1 teaspoon per 20L). Mollies thrive with it, most other fish tolerate it.",
      "They are algae grazers. Feed Spirulina flakes occasionally.",
      "Black Mollies are heat lovers. Keep at 26-27°C for best colors."
    ],

    commonMistakes: [
      "Soft water (they get 'shimmies' and die).",
      "Too many males (constant fighting).",
      "Cold water (<22°C)."
    ],
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['ich', 'fin-rot', 'shimmies'],
    sensitivities: ['Soft water', 'Cold water', 'High nitrate'],
  },

  scientificContext: {
    wildHabitat: "Coastal rivers and estuaries in Central America, often with salt influence.",
    sexualDimorphism: "Males have a gonopodium (modified anal fin). Females are larger and rounder.",
    variants: ['Black Molly', 'Dalmatian Molly', 'Gold Molly', 'Marble Molly'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger: 'None needed.',
    fryCare: 'Large fry accept crushed flakes immediately.',
    notes: 'Produce huge numbers of fry. Can hybridize with Platies (same genus).',
  },
};
