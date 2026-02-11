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
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    flow: 'low', // Kritisch
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Floating plants are essential for bubble nest building. Live plants reduce stress.',
    hardscape: ['Driftwood', 'Caves'],
  },

  behavior: {
    tags: ['bubble_nester', 'peaceful', 'centerpiece', 'labyrinth_fish'],
    minGroupSize: 1,
    description: 'Small, non-aggressive Gourami. Males are territorial but do not fight violently. Excellent for peaceful community tanks.',
    compatibility: {
      goodMates: ['Small Tetras', 'Rasboras', 'Corydoras', 'Shrimp'],
      badMates: ['Aggressive fish', 'Large fish'],
      notes: 'Safe with everything. Even females can be kept in groups in larger tanks (60L+).',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Low flow filter', 'Floating plants'],

    proTips: [
      "Males turn almost black during breeding. It's a sign of health/aggression, not disease.",
      "They are less aggressive than other Gouramis (Pearls, Blues are meaner).",
      "Feed live food occasionally (Daphnia). Their color intensifies."
    ],

    commonMistakes: [
      "Strong filter flow (destroys bubble nests).",
      "Keeping with aggressive fish.",
      "No floating plants for nest building."
    ],
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['ich', 'fin-rot', 'velvet'],
    sensitivities: ['Strong current', 'Cold water'],
  },

  scientificContext: {
    wildHabitat: "Slow, weedy rivers and ponds in South Asia.",
    sexualDimorphism: "Males are more colorful (golden-yellow). Females are paler.",
    variants: [],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'Warm water (26-28°C) + Live food.',
    fryCare: 'Male guards nest. Remove female. Fry need infusoria initially.',
    notes: 'Easier than Bettas to breed.',
  },
};
