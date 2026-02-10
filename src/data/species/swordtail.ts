import type { Species } from '../../types/species';

export const swordtail: Species = {
  id: 'livebearer-002',
  slug: 'swordtail',
  imageUrl: '/images/species/swordtail.jpg',
  funFact: "The 'sword' is actually an elongation of the lower fin rays and is only found on males. It serves no swimming purpose and is purely a display to attract females. Longer sword = more attractive (but slower swimming).",
  
  taxonomy: {
    scientificName: 'Xiphophorus hellerii',
    commonName: 'Orange Swordtail',
    family: 'Poeciliidae',
    origin: 'Central America (Mexico to Honduras)',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 12, // Werden deutlich größer als Guppys!
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 100, // Brauchen Schwimmraum!
    tempC: { min: 20, max: 28, ideal: 24 },
    ph: { min: 7.0, max: 8.2, ideal: 7.5 },
    gh: { min: 10, max: 25 },
    flow: 'medium', // Kommen aus Fließgewässern
    substrate: 'any',
  },
  
  habitat: {
    planting: 'medium',
    plantingNotes: 'Requires open swimming space in the middle. Tall background plants (Vallisneria) are recommended so harassed females can break the line of sight.',
    hardscape: ['River Stones', 'Driftwood'],
  },
  
  behavior: {
    tags: ['shoaler', 'jumper', 'active', 'surface'],
    minGroupSize: 5,
    description: 'Active swimmers that can be boisterous. Males are territorial towards each other. Keep 1 male with 3+ females. They are notorious jumpers!',
    compatibility: {
      goodMates: ['Mollies', 'Platies', 'Larger Tetras', 'Corydoras'],
      badMates: ['Long-finned fish (nipping risk)', 'Very shy nano fish'],
      notes: 'Can hybridize with Platies (Xiphophorus maculatus).',
    }
  },
  
  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Hard water', 'Tight lid (Jumper!)'],
  },
  
  health: {
    lifespanYears: 4,
    commonDiseases: [
      'ich',
      'Shimmies', // Bei weichem Wasser
      'Fungal infections'
    ],
    sensitivities: ['Soft water', 'Ammonia'],
  },

  scientificContext: {
    wildHabitat: "Fast-flowing streams and rivers with rocky bottoms in Central America.",
    sexualDimorphism: "Only males possess the 'sword' tail extension. Females are larger and rounder. Males have a gonopodium (modified anal fin).",
    variants: ['Green Swordtail (Wild type)', 'Kohaku (Red/White)', 'Lyretail'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger: 'Automatic. Females can store sperm for months and drop multiple batches of fry from a single mating.',
    fryCare: 'Parents will eat their fry. Use breeding box or dense floating plants if survival is desired.',
  },
};
