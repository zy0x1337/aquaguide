import type { Species } from '../../types/species';

export const kuhliLoach: Species = {
  id: 'loach-001',
  slug: 'kuhli-loach',
  imageUrl: '/images/species/kuhli-loach.jpg',
  funFact: "Kuhli Loaches are 'scaleless' fish. Because they lack hard scales, they are extremely sensitive to medications (like copper) and sharp gravel, which can cut their bellies.",

  taxonomy: {
    scientificName: 'Pangio kuhlii',
    commonName: 'Kuhli Loach',
    family: 'Cobitidae',
    origin: 'Indonesia, Malaysia, Thailand (Borneo, Sumatra)',
    region: 'Asia',
    biotope: 'Shallow forest streams with thick leaf litter and mud bottoms',
  },

  visuals: {
    iconShape: 'eel-like',
    adultSizeCM: 10,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 24, max: 30, ideal: 26 },
    ph: { min: 5.5, max: 7.0, ideal: 6.0 },
    gh: { min: 0, max: 10 },
    flow: 'low', // Korrigiert
    substrate: 'sand', // PFLICHT
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Requires plenty of hiding spots (caves, leaf litter, PVC tubes) and low light. If they feel secure, they will come out more often. Sharp gravel is strictly forbidden.',
    hardscape: ['Smooth Rocks', 'PVC Tubes (hiding)', 'Leaf Litter', 'Fine Sand'],
  },

  behavior: {
    tags: ['bottom_dweller', 'shy', 'shoaler', 'peaceful', 'nocturnal', 'scaleless'],
    minGroupSize: 6,
    description: 'Nocturnal scavengers that love to burrow into soft sand. They are very social and form "cuddle piles" in caves. Often called "noodle fish" by hobbyists.',
    compatibility: {
      goodMates: ['Neon Tetras', 'Rasboras', 'Bettas', 'Gouramis', 'Peaceful community fish'],
      badMates: ['Cichlids', 'Goldfish', 'Large Catfish', 'Aggressive Bottom Dwellers'],
      notes: 'Safe with almost anything that doesn\'t eat them. Shrimp safe-ish (might eat babies).',
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Sand substrate mandatory (they burrow!)', 'Cave systems', 'No copper medications (scaleless)'],

    proTips: [
      "MUST be kept on sand. They filter sand through their gills and burrow. Gravel damages their barbels.",
      "They are nocturnal. Feed sinking pellets after lights out to see them active.",
      "Cover filter intakes! They will swim into the motor and die.",
      "The more hiding spots you have, the more you will see them (paradoxically, they feel safe)."
    ],

    commonMistakes: [
      "Using gravel substrate. This prevents burrowing and cuts their bellies.",
      "Keeping them alone. They love to pile up together like noodles in caves.",
      "Using copper medication during Ich treatment. They are scaleless and absorb toxins (use Malachite Green instead)."
    ],
  },

  health: {
    lifespanYears: 10, // Werden sehr alt!
    commonDiseases: ['ich', 'fin-rot', 'fungal-infection'],
    sensitivities: ['Copper medications', 'Sharp substrate', 'Nitrate > 20ppm'],
  },

  scientificContext: {
    wildHabitat: "Slow-moving forest streams with thick layers of leaf litter and mud bottoms. Water is usually stained with tannins (blackwater).",
    sexualDimorphism: "Females become noticeably plumper/thicker when carrying eggs (green eggs visible through skin). Males have slightly larger pectoral fins.",
    variants: ['Black Kuhli (Pangio oblonga)', 'Silver Kuhli'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Accidental breeding happens during large water changes or pressure drops (storm simulation). In nature, they spawn near the surface among floating plant roots.',
    fryCare: 'Green water and infusoria. Fry are bright green when hatched!',
  },
};
