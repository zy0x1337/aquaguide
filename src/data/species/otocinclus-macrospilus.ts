import type { Species } from '../../types/species';

export const otocinclusMacrospilus: Species = {
  id: 'oto-002',
  slug: 'otocinclus-macrospilus',
  imageUrl: '/images/species/otocinclus-macrospilus.jpg', // Oft schwer zu unterscheiden
  funFact: "Often confused with O. vittatus. The main difference is the tail pattern: Macrospilus has a large spot at the tail base that is NOT connected to the body stripe.",

  taxonomy: {
    scientificName: 'Otocinclus macrospilus',
    commonName: 'Marbled Otocinclus',
    family: 'Loricariidae',
    origin: 'Peru (Amazon)',
    region: 'South America',
    biotope: 'Vegetation-rich river margins with moderate flow',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 4,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 21, max: 26, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 4, max: 15 },
    flow: 'moderate',
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Broad-leaved plants (Swords, Anubias) provide grazing surfaces for biofilm.',
    hardscape: ['Driftwood (mandatory)', 'Round Stones'],
  },

  behavior: {
    tags: ['shoaler', 'algae_eater', 'peaceful', 'shy'],
    minGroupSize: 6,
    description: 'Small, nervous algae eaters. Identical behavior to O. vittatus.',
    compatibility: {
      goodMates: ['Shrimp', 'Neon Tetras', 'Corydoras', 'Discus'],
      badMates: ['Goldfish', 'Large Cichlids'],
      notes: 'Can be mixed with O. vittatus in a school.',
    },
  },

  care: {
    difficulty: 'expert', // Wegen Futter
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: ['Mature tank (6 months+) ONLY', 'Constant supply of algae'],

    proTips: [
      "NEVER add to a new tank. Starvation risk.",
      "Check tail pattern to distinguish from O. vittatus (disconnected tail spot).",
      "Supplement with zucchini and Repashy Soilent Green."
    ],

    commonMistakes: [
      "Adding to a sterile/new tank.",
      "Keeping singly."
    ],
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['starvation'],
    sensitivities: ['Ammonia', 'Nitrite', 'Medications'],
  },

  scientificContext: {
    wildHabitat: "Maturing floating vegetation rafts in the Amazon.",
    sexualDimorphism: "Females are wider/rounder.",
    variants: [],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Cool water changes + Heavy feeding.',
    fryCare: 'Microscopic food needed.',
    notes: 'Rarely bred.',
  },
};
