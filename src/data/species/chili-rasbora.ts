import type { Species } from '../../types/species';

export const chiliRasbora: Species = {
  id: 'rasbora-002',
  slug: 'chilli-rasbora',
  imageUrl: '/images/species/chilli-rasbora.jpg',
  funFact: "At just 1cm, this is one of the smallest aquarium fish ever. They were rediscovered in 2001 and caused a sensation in the nano-aqua community.",

  taxonomy: {
    scientificName: 'Boraras brigittae',
    commonName: 'Chilli Rasbora',
    family: 'Characidae',
    origin: 'Brazil (Mato Grosso, Araguaia River)',
    region: 'South America',
    biotope: 'Blackwater creeks with dense vegetation',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 1,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 10, // Kann in sehr kleinen Tanks!
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 4.5, max: 6.5, ideal: 5.5 },
    gh: { min: 0, max: 6 }, // Very soft!
    flow: 'low',
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'They disappear in open tanks! Dense foreground plants (Glossostigma, HC) are mandatory.',
    hardscape: ['Driftwood', 'Leaf Litter'],
  },

  behavior: {
    tags: ['shoaler', 'nano', 'shy', 'midwater', 'peaceful'],
    minGroupSize: 15, // Ja, 15! Sie sind sehr klein
    description: 'Tiny, peaceful schoolers that form dense aggregations. They are barely visible without dense plants.',
    compatibility: {
      goodMates: ['Other nano fish', 'Shrimp', 'Snails'],
      badMates: ['Anything that eats fish'],
      notes: 'Possibly the most shrimp-safe fish. Often kept in shrimp-only tanks.',
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: ['Soft/acidic water', 'Dense planting', 'High stocking (for security)'],

    proTips: [
      "They glow like embers in red/orange color under good lighting.",
      "Feed twice daily in tiny portions. Their stomachs are microscopic.",
      "They are prey items for larger fish, so keep them isolated or with peaceful nano species."
    ],

    commonMistakes: [
      "Keeping too few (stress from visibility).",
      "Hard water (they waste away).",
      "Sparse tanks (they hide constantly)."
    ],
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['ich', 'starvation'],
    sensitivities: ['Hard water', 'Predation', 'Hunger'],
  },

  scientificContext: {
    wildHabitat: "Dense vegetation in very acidic blackwater tributaries.",
    sexualDimorphism: "Males are more intensely colored. Females are slightly larger.",
    variants: [],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Extreme soft water + Live food saturation.',
    fryCare: 'Microscopic fry need paramecium for weeks.',
    notes: 'Virtually never bred in captivity.',
  },
};
