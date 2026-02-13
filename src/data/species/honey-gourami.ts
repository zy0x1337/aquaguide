import type { Species } from '../../types/species';

export const honeyGourami: Species = {
  id: 'gourami-001',
  slug: 'honey-gourami',
  imageUrl: '/images/species/honey-gourami.jpg',
  funFact: "Males build bubble nests and perform an elaborate 'dance' for females. When breeding, they turn almost black.",

  taxonomy: {
    scientificName: 'Trichogaster chuna',
    commonName: 'Honey Gourami',
    family: 'Osphronemidae',
    origin: 'India, Bangladesh',
    region: 'Asia',
    biotope: 'Slow-moving rivers with dense vegetation',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 6,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40, // Single ok, 75L+ for pairs/groups
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    flow: 'low', // Critical
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Floating plants essential for bubble nest building. Live plants reduce stress.',
    hardscape: ['Driftwood', 'Caves'],
  },

  behavior: {
    tags: ['bubble_nester', 'peaceful', 'centerpiece', 'labyrinth_fish'],
    minGroupSize: 1, // Singles ok, 2 pairs ideal in 75L+
    description: 'Small, non-aggressive Gourami. Males territorial but non-violent. Perfect for peaceful community tanks or 2 pairs in larger setups.',
    compatibility: {
      goodMates: [
        'Small Tetras (Rasboras, Ember)', 
        'Corydoras', 
        'Pygmy Corydoras', 
        'Shrimp (adults safe, eats fry)', 
        'Snails'
      ],
      badMates: [
        'Aggressive Cichlids', 
        'Tiger Barbs', 
        'Fin-nippers', 
        'Large predatory fish', 
        'Bettas'
      ],
      notes: 'Very peaceful but males may chase slow/small fish during breeding/feeding. Keep with fast, peaceful nano fish. Shrimp adults safe but fry will be eaten. Pairs or 2 pairs (75L+) work well with hiding spots.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Low flow filter', 'Floating plants'],

    proTips: [
      "Males turn almost black during breeding - sign of health, not disease.",
      "Less aggressive than Pearl/Blue Gouramis.",
      "2 pairs work well in 75L+ with plenty of hiding spots.",
      "Feed live food occasionally (Daphnia) for intense colors."
    ],

    commonMistakes: [
      "Strong filter flow destroys bubble nests.",
      "Housing with aggressive fish.",
      "No floating plants for nest building.",
      "Tank too small for pairs (under 60L)."
    ],
  },

  health: {
    lifespanYears: 5, // 4-6 years with good care
    commonDiseases: ['Ich', 'Fin rot', 'Velvet', 'Bacterial infections', 'Dropsy'],
    sensitivities: ['Strong current', 'Cold water'],
  },

  scientificContext: {
    wildHabitat: "Slow, weedy rivers and ponds in South Asia.",
    sexualDimorphism: "Males more colorful (golden-orange) and slimmer. Females paler/browner and rounder.",
    variants: ['Yellow/Gold', 'Red/Sunset', 'Orange'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'Warm water (26-28°C) + live food.',
    fryCare: 'Male guards nest. Remove female. Fry need infusoria initially.',
    notes: 'Easier than Bettas. 2 pairs can breed simultaneously with enough space.',
  },
};
