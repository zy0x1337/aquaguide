import type { Species } from '../../types/species';

export const platy: Species = {
  id: 'platy-001',
  slug: 'platy',
  imageUrl: '/images/species/platy.jpeg',
  funFact: "Platies have been selectively bred so extensively that they come in almost every color imaginable. Some color morphs are nearly unrecognizable from the wild ancestor.",

  taxonomy: {
    scientificName: 'Xiphophorus maculatus',
    commonName: 'Platy',
    family: 'Poeciliidae',
    origin: 'Mexico, Guatemala',
    region: 'Central America',
    biotope: 'Spring-fed rivers with warm, hard water',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 20, max: 28, ideal: 24 },
    ph: { min: 7.0, max: 8.5, ideal: 7.5 },
    gh: { min: 10, max: 30 }, // Hard water
    flow: 'low',
    substrate: 'any',
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Not too dense. They prefer open swimming space but like a few plants for fry shelter.',
    hardscape: ['Smooth Stones'],
  },

  behavior: {
    tags: ['livebearer', 'peaceful', 'colorful', 'active'],
    minGroupSize: 3,
    description: 'Peaceful, easy-going livebearers. Extremely hardy and unfussy about almost everything.',
    compatibility: {
      goodMates: ['Almost everything peaceful', 'Swordtails', 'Mollies', 'Tetras'],
      badMates: ['Aggressive Cichlids'],
      notes: 'One of the most beginner-friendly fish ever.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Hard water', '1 male per 2-3 females (overpopulation risk)'],

    proTips: [
      "They come in Koi, Sunset, Mickey Mouse, Dalmatian, and hundreds of colors.",
      "Females will constantly produce fry. Have a plan (culls, separate tank, or food for predators).",
      "They love vegetable matter. Blanched zucchini makes their colors brighter."
    ],

    commonMistakes: [
      "Soft water (they struggle).",
      "Too many males (harassment of females).",
      "Ignoring overpopulation (fry everywhere!)."
    ],
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['ich', 'fin-rot'],
    sensitivities: ['Soft water', 'Ammonia spikes'],
  },

  scientificContext: {
    wildHabitat: "Clear springs and rivers in Mexico with hard, neutral to alkaline water.",
    sexualDimorphism: "Males have a gonopodium (modified anal fin). Females are larger and rounder.",
    variants: ['Koi', 'Sunset', 'Mickey Mouse', 'Dalmatian', 'Marble', 'Gold', 'Tuxedo'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger: 'None needed.',
    fryCare: 'Large fry accept crushed flakes immediately.',
    notes: 'Can hybridize with Swordtails (same genus).',
  },
};
