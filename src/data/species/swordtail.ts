import type { Species } from '../../types/species';

export const swordtail: Species = {
  id: 'sword-001',
  slug: 'swordtail',
  imageUrl: '/images/species/swordtail.jpg',
  funFact: "The 'sword' is purely ornamental and found only on males. It's used to impress females, but longer swords actually make them slower swimmers.",

  taxonomy: {
    scientificName: 'Xiphophorus hellerii',
    commonName: 'Swordtail',
    family: 'Poeciliidae',
    origin: 'Mexico, Guatemala, Honduras',
    region: 'Central America',
    biotope: 'Fast-flowing streams and rivers with heavy vegetation',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 12, // Werden ziemlich groß!
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 100, // Brauchen Schwimmraum!
    tempC: { min: 18, max: 28, ideal: 24 }, // Sehr robust
    ph: { min: 7.0, max: 8.5, ideal: 7.5 },
    gh: { min: 10, max: 30 }, // Hartes Wasser
    flow: 'moderate', // Lieben Strömung
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Robust background plants (Vallisneria) are great. They need open space to sprint.',
    hardscape: ['River Stones', 'Driftwood'],
  },

  behavior: {
    tags: ['livebearer', 'active', 'jumper', 'semi-aggressive'],
    minGroupSize: 5,
    description: 'Fast, athletic swimmers. Males can be aggressive towards each other. They occupy all levels of the tank but prefer the middle-top.',
    compatibility: {
      goodMates: ['Mollies', 'Platies', 'Large Tetras', 'Rainbowfish'],
      badMates: ['Bettas', 'Guppies (often bullied)', 'Slow long-finned fish'],
      notes: 'Males develop a hierarchy. Keep 1 male with 3+ females, or a group of 3+ males to spread aggression.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Lid strictly required (Olympic jumpers)', 'Hard water'],

    proTips: [
      "They are jumpers! Any gap in the lid is an exit door.",
      "Males can transform? Sort of. Late-blooming males look like females for months before developing the sword.",
      "They love algae. They will peck at surfaces constantly."
    ],

    commonMistakes: [
      "Tank too small. These are 12cm fish that swim fast. 60L is too small.",
      "Keeping 2 males. The dominant one will kill the weaker one. 1 or 3+ is the rule.",
      "Soft water. Like all livebearers, they waste away without minerals."
    ],
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['ich', 'fin-rot', 'shimmies'],
    sensitivities: ['Soft water', 'New Tank Syndrome'],
  },

  scientificContext: {
    wildHabitat: "Clear, fast-flowing streams in Central America. The water is alkaline and hard.",
    sexualDimorphism: "Males possess the iconic 'sword' extension on the caudal fin and a gonopodium. Females are larger and rounder but lack the sword.",
    variants: ['Red Velvet', 'Pineapple', 'Neon Swordtail', 'Lyretail'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger: 'None needed.',
    fryCare: 'Fry are large and easy to raise. Provide floating plants for cover.',
    notes: 'Can hybridize with Platies (Xiphophorus maculatus).',
  },
};
