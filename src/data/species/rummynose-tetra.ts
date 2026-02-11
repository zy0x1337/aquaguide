import type { Species } from '../../types/species';

export const rummynoseTetra: Species = {
  id: 'tetra-003',
  slug: 'rummynose-tetra',
  imageUrl: '/images/species/rummynose-tetra.jpg',
  funFact: "Their red nose intensifies when they are stressed or scared. A faded nose is a sign of poor water conditions or illness.",

  taxonomy: {
    scientificName: 'Hemigrammus bleheri',
    commonName: 'Rummynose Tetra',
    family: 'Characidae',
    origin: 'Brazil (Amazon, Rio Negro)',
    region: 'South America',
    biotope: 'Blackwater tributaries with dense vegetation',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 22, max: 27, ideal: 24 },
    ph: { min: 5.0, max: 7.0, ideal: 6.0 },
    gh: { min: 2, max: 12 },
    flow: 'low',
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense vegetation with open swimming space. They look best in blackwater setups.',
    hardscape: ['Driftwood', 'Leaf Litter'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'shy'],
    minGroupSize: 12,
    description: 'Peaceful schooling fish with a striking red head. Very responsive to tank conditions (nose color = barometer).',
    compatibility: {
      goodMates: ['Other Tetras', 'Corydoras', 'Rasboras', 'Small Gouramis'],
      badMates: ['Large predatory fish'],
      notes: 'Perfect community fish. Safe with shrimp.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Soft/acidic water', 'Groups of 12+'],

    proTips: [
      "The red nose is a stress indicator. If it fades, check water parameters (especially nitrate).",
      "They are sensitive to ammonia and nitrite. Test your tank.",
      "Feed high-quality micro-pellets or crushed flakes."
    ],

    commonMistakes: [
      "Keeping too few (stress fading).",
      "Ignoring the faded nose (early warning sign).",
      "Hard water (coloration poor)."
    ],
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'fin-rot'],
    sensitivities: ['High nitrate', 'Ammonia spikes', 'Hard water'],
  },

  scientificContext: {
    wildHabitat: "Acidic, oxygen-rich blackwater streams with dense vegetation.",
    sexualDimorphism: "Females are slightly rounder. Males have a more vibrant red nose.",
    variants: [],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Soft, acidic water + Live food.',
    fryCare: 'Eggs are adhesive. Fry need infusoria.',
    notes: 'Fairly easy to breed in proper conditions.',
  },
};
