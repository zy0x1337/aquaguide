import type { Species } from '../../types/species';

export const endlerGuppy: Species = {
  id: 'guppy-001',
  slug: 'endler-guppy',
  imageUrl: '/images/species/endler-guppy.jpg',
  funFact: "Endlers were rediscovered in 1975 by John Endler in Venezuela. They are distinct from common Guppies, staying smaller and having more metallic, psychedelic patterns.",

  taxonomy: {
    scientificName: 'Poecilia wingei',
    commonName: 'Endler\'s Livebearer',
    family: 'Poeciliidae',
    origin: 'Venezuela (Campoma & Cumana lagoons)',
    region: 'South America',
    biotope: 'Warm, hard, algae-rich lagoons (often brackish influence)',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2.5, // Männchen sind winzig!
  },

  environment: {
    type: 'freshwater', // Toleriert leichtes Brackwasser
    minTankSizeLiters: 40, // Kleiner als normale Guppies
    tempC: { min: 24, max: 29, ideal: 27 }, // Mag es sehr warm
    ph: { min: 7.0, max: 8.5, ideal: 7.5 }, // Hartes Wasser
    gh: { min: 10, max: 25 }, // PFLICHT: Mineralienreich
    flow: 'low',
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Floating plants and moss are mandatory if you want any fry to survive (or if you want females to hide from males).',
    hardscape: ['Rocks', 'Driftwood (careful with pH drop)'],
  },

  behavior: {
    tags: ['shoaler', 'livebearer', 'surface_dweller', 'active'],
    minGroupSize: 6,
    description: 'Hyperactive, constantly moving explosions of color. Males spend 100% of their time displaying to females. They occupy the top level of the tank.',
    compatibility: {
      goodMates: ['Shrimp (safe-ish)', 'Corydoras', 'Small Rasboras'],
      badMates: ['Bettas (will attack colorful males)', 'Angelfish', 'Large Tetras'],
      notes: 'Can hybridize with common Guppies (Poecilia reticulata). Do not mix if you want to keep the strain pure.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Hard water (GH > 10)', 'Ratio: 1 Male per 2-3 Females'],

    proTips: [
      "Keep only males if you don't want babies. They are colorful and peaceful together.",
      "If keeping both sexes, you WILL be overrun with fry. Have a plan (sell to store, or let nature take its course).",
      "They love vegetable matter. Spirulina flakes or blanched zucchini intensify their colors."
    ],

    commonMistakes: [
      "Keeping in soft/acidic water. They get 'shimmies' and die. They need minerals.",
      "Too many males. They will harass females to death from exhaustion.",
      "Mixing with common Guppies (ruins the wild genetics)."
    ],
  },

  health: {
    lifespanYears: 2, // Leben schnell und kurz
    commonDiseases: ['ich', 'fin-rot', 'shimmies'], // Shimmies = Mineralmangel
    sensitivities: ['Soft water', 'Acidic pH', 'Cold water'],
  },

  scientificContext: {
    wildHabitat: "Isolated lagoons in Venezuela. The water is very warm and hard, often green with algae.",
    sexualDimorphism: "Extreme. Males are tiny (2cm) and neon-colored. Females are larger (4cm) and plain silver/grey.",
    variants: ['Tiger Endler', 'Black Bar', 'Japan Blue', 'El Silverado'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger: 'Existing (Just add water).',
    fryCare: 'None needed. They are born large enough to eat crushed flakes. Parents rarely eat their own fry compared to common Guppies.',
    notes: 'Females store sperm and can give birth for months after being separated from males.',
  },
};
