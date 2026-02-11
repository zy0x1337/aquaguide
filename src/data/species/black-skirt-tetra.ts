import type { Species } from '../../types/species';

export const blackSkirtTetra: Species = {
  id: 'tetra-004',
  slug: 'black-skirt-tetra',
  imageUrl: '/images/species/black-skirt-tetra.jpg',
  funFact: "Their name comes from the vertical black stripes on their body that look like a black skirt. Coloration fades with age and in poor conditions.",

  taxonomy: {
    scientificName: 'Gymnocorymbus ternetzi',
    commonName: 'Black Skirt Tetra',
    family: 'Characidae',
    origin: 'Brazil, Bolivia',
    region: 'South America',
    biotope: 'Slow-moving tributaries with dense vegetation',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 20, max: 27, ideal: 24 },
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    gh: { min: 4, max: 20 },
    flow: 'low',
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'They love dense vegetation. Background plants preferred.',
    hardscape: ['Driftwood', 'Smooth Stones'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater'],
    minGroupSize: 8,
    description: 'Peaceful schooling fish, though juveniles can be fin-nippers. This behavior usually disappears with maturity and proper group size.',
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Corydoras', 'Gouramis'],
      badMates: ['Slow long-finned fish (can nip fins)', 'Aggressive fish'],
      notes: 'Excellent for planted community tanks.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Groups of 8+', 'Dense planting'],

    proTips: [
      "Fin-nipping behavior (if observed) is solved by larger group size (10+).",
      "Feed quality flakes or micro-pellets.",
      "Black coloration fades with age and poor water quality. Dark substrate helps.",
      "They are hardy and forgiving of beginner mistakes."
    ],

    commonMistakes: [
      "Keeping too few (stress + fin-nipping).",
      "Pairing with long-finned fish (potential nipping).",
      "Sparse tanks (stress)."
    ],
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'fin-rot'],
    sensitivities: ['Overcrowding', 'Poor water quality'],
  },

  scientificContext: {
    wildHabitat: "Forested streams with low light and abundant vegetation.",
    sexualDimorphism: "Females are rounder and deeper bodied. Males are slimmer.",
    variants: ['Long-fin Black Skirt Tetra'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Soft water + Live food conditioning.',
    fryCare: 'Eggs are adhesive. Fry need infusoria initially.',
    notes: 'One of the easier egg-layers to breed.',
  },
};
