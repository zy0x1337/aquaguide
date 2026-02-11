import type { Species } from '../../types/species';

export const celestialPearlDanio: Species = {
  id: 'danio-001',
  slug: 'celestial-pearl-danio',
  imageUrl: '/images/species/celestial-pearl-danio.jpeg',
  funFact: "Discovered in 2006 in Myanmar, they caused a sensation because of their tiny size and sparkling spotted pattern. They were thought to be extinct after their type locality flooded.",

  taxonomy: {
    scientificName: 'Danio margaritatus',
    commonName: 'Celestial Pearl Danio',
    family: 'Cyprinidae',
    origin: 'Myanmar (Inle Lake)',
    region: 'Asia',
    biotope: 'Shallow, warm pools with dense floating vegetation',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 20,
    tempC: { min: 22, max: 27, ideal: 25 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 4, max: 12 },
    flow: 'low',
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Floating plants are essential. They use them for cover and grazing on microorganisms.',
    hardscape: ['Smooth Rocks', 'Driftwood'],
  },

  behavior: {
    tags: ['shoaler', 'nano', 'peaceful', 'surface_dweller'],
    minGroupSize: 8,
    description: 'Tiny, pearl-spotted schoolers. Males establish territories but rarely fight.',
    compatibility: {
      goodMates: ['Chili Rasboras', 'Corydoras', 'Shrimp', 'Snails'],
      badMates: ['Large fish', 'Aggressive fish'],
      notes: 'Perfect for nano/shrimp tanks.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'medium',
    specialRequirements: ['Warm water (22-27°C)', 'Floating plants'],

    proTips: [
      "They love live food (Daphnia, Infusoria). Their color intensifies dramatically.",
      "Males display by spreading their fins to each other (harmless sparring).",
      "They are prone to DGD (Diamond-encrusted Danio). It's not contagious, just a genetic expression of stress."
    ],

    commonMistakes: [
      "Keeping alone (stress fading).",
      "Cold water (<22°C).",
      "Sparse tanks without floating plants."
    ],
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['ich', 'DGD (Diamond Gene Disease)'],
    sensitivities: ['Cold water', 'Starvation'],
  },

  scientificContext: {
    wildHabitat: "Shallow tropical lakes with dense aquatic vegetation.",
    sexualDimorphism: "Males are more colorful and slimmer. Females are rounder.",
    variants: [],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Increased temperature + Live food.',
    fryCare: 'Fry accept tiny prepared foods. Infusoria helps initially.',
    notes: 'They breed readily in heavily planted tanks.',
  },
};
