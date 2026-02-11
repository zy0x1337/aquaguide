import type { Species } from '../../types/species';

export const otocinclusVittatus: Species = {
  id: 'oto-001',
  slug: 'otocinclus',
  imageUrl: '/images/species/otocinclus-vittatus.jpg',
  funFact: "Otocinclus are obligate aufwuchs eaters. In the wild, they school by the thousands, grazing on algae-covered rocks and driftwood.",

  taxonomy: {
    scientificName: 'Otocinclus vittatus',
    commonName: 'Otocinclus Catfish',
    family: 'Loricariidae',
    origin: 'Amazon Basin (Peru, Brazil)',
    region: 'South America',
    biotope: 'Vegetation-rich river margins with moderate flow',
  },

  visuals: {
    iconShape: 'depressed', // Flach / Saugwels
    adultSizeCM: 4,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 21, max: 26, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 4, max: 15 },
    flow: 'moderate', // Mag sauerstoffreiches Wasser
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Broad-leaved plants (Swords, Anubias) provide grazing surfaces for biofilm. Essential for their survival.',
    hardscape: ['Driftwood (mandatory for biofilm)', 'Round Stones'],
  },

  behavior: {
    tags: ['shoaler', 'algae_eater', 'peaceful', 'shy'],
    minGroupSize: 6, // Ja, sie sind Schwarmfische!
    description: 'Small, nervous algae eaters. They are excellent cleaners but extremely fragile if not kept in groups or if food is scarce.',
    compatibility: {
      goodMates: ['Shrimp (100% safe)', 'Neon Tetras', 'Corydoras', 'Discus'],
      badMates: ['Goldfish', 'Large Cichlids', 'Anything that can fit them in their mouth'],
      notes: 'The only fish that is 100% safe with baby shrimp.',
    },
  },

  care: {
    difficulty: 'expert', // Wegen der Futterproblematik
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: ['Mature tank (6 months+) ONLY', 'Constant supply of algae/biofilm'],

    proTips: [
      "NEVER add to a new tank. They will starve to death within weeks.",
      "Supplement diet with blanched zucchini, cucumber, or Repashy Soilent Green. If they have round bellies, they are healthy.",
      "Buy them last. Wait until your tank has visible algae growth.",
      "Check for 'sunken belly' in the store. Avoid skinny fish."
    ],

    commonMistakes: [
      "Adding to a sterile/new tank.",
      "Keeping singly or in pairs. They stress out and die without a group.",
      "Thinking they eat poop. They only eat soft algae and biofilm."
    ],
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['ich', 'starvation'], // Verhungern ist Todesursache #1
    sensitivities: ['Ammonia', 'Nitrite', 'Medications', 'Starvation'],
  },

  scientificContext: {
    wildHabitat: "Maturing floating vegetation rafts in the Amazon. They cling to roots and leaves in huge numbers.",
    sexualDimorphism: "Females are noticeably wider/rounder when viewed from above. Males are small and slender.",
    variants: ['Otocinclus macrospilus (often sold as the same fish)', 'Zebra Otocinclus (rare)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Cool water changes + Heavy feeding. Similar to Corydoras but harder.',
    fryCare: 'Fry need microscopic food (biofilm/infusoria). Very hard to raise.',
    notes: 'Rarely bred intentionally.',
  },
};
