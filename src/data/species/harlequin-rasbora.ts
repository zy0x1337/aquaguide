import type { Species } from '../../types/species';

export const harlequinRasbora: Species = {
  id: 'rasbora-001',
  slug: 'harlequin-rasbora',
  imageUrl: '/images/species/harlequin-rasbora.jpg',
  funFact: "Named after the Harlequin character from Italian theatre, their triangular black patch resembles a mask. They were first exported to Europe in the 1950s and became an instant classic.",

  taxonomy: {
    scientificName: 'Trigonostigma heteromorpha',
    commonName: 'Harlequin Rasbora',
    family: 'Cyprinidae',
    origin: 'Thailand, Malaysia, Brunei',
    region: 'Asia',
    biotope: 'Slow-moving streams with dense vegetation and leaf litter',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4.5,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 20, max: 26, ideal: 23 },
    ph: { min: 5.5, max: 7.0, ideal: 6.0 },
    gh: { min: 2, max: 12 },
    flow: 'low',
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'They look best in blackwater setups with dense background plants. Dark substrate emphasizes their colors.',
    hardscape: ['Driftwood', 'Leaf Litter', 'Smooth Stones'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'shy'],
    minGroupSize: 10,
    description: 'Peaceful, shy schooling fish that stay in the middle water column. The triangular black patch intensifies when stressed or threatened.',
    compatibility: {
      goodMates: ['Tetras', 'Corydoras', 'Kuhli Loaches', 'Gouramis'],
      badMates: ['Large Cichlids', 'Aggressive fish'],
      notes: 'One of the most peaceful aquarium fish ever. Safe with shrimp and snails.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Soft/acidic water preferred', 'Groups of 10+'],

    proTips: [
      "They are color indicators. A faded/disappearing black patch means stress.",
      "Feed micro-pellets or crushed flakes. Their mouths are small.",
      "They love Indian Almond Leaves. The tannins bring out their orange coloration."
    ],

    commonMistakes: [
      "Keeping in small groups (stress fading colors).",
      "Bright lighting (makes them timid). Dim or blackwater setups are ideal.",
      "Hard water. They prefer soft, acidic water."
    ],
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'fin-rot'],
    sensitivities: ['Hard water', 'Bright light', 'Ammonia'],
  },

  scientificContext: {
    wildHabitat: "Tea-stained forest streams with extensive root systems and fallen leaves.",
    sexualDimorphism: "Females are rounder and have a wider black patch. Males are slimmer.",
    variants: ['Standard', 'Red Rasbora (different species, often mislabeled)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Soft, acidic water + Live food conditioning.',
    fryCare: 'Eggs are tiny and light-sensitive. Fry need infusoria.',
    notes: 'Parents eat eggs readily. Remove to a separate hatcher.',
  },
};
