import type { Species } from '../../types/species';

export const zebraDanio: Species = {
  id: 'species-zebra-danio',
  slug: 'danio-rerio',
  imageUrl: '/images/species/danio-rerio.jpg',
  funFact: "Zebra danios are the most active schooling fish - they never stop! Perfect for testing new filters or equipment.",

  imageCredit: {
    photographer: 'Kuznetsov_Peter on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/danio-rerio-zebrafisch-%d1%80%d0%b5%d1%80%d0%b8%d0%be-fische-4996610/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
    },

  taxonomy: {
    scientificName: 'Danio rerio',
    commonName: 'Zebra Danio',
    family: 'Danionidae',
    origin: 'India (Ganges, Brahmaputra)',
    region: 'Asia',
    biotope: 'Fast-flowing hill streams with gravel beds and plant roots',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 54, // School MINIMUM!
    tempC: { min: 18, max: 25, ideal: 23 },
    ph: { min: 6.0, max: 7.5, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    flow: 'high',
    substrate: 'sand-gravel', // Dark substrate makes stripes POP
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Upper water region. Plants at edges leave middle open for swimming. Floating plants for shade.',
    hardscape: ['Stream rocks', 'Driftwood roots', 'Pebble beaches'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'surface_dweller', 'active'],
    minGroupSize: 8, // School = minimum 8!
    description: 'Extremely active schoolers. Become aggressive to each other in small groups. Swim nonstop in perfect formation.',
    compatibility: {
      goodMates: ['Corydoras', 'Kuhli Loaches', 'Tetras', 'Shrimp', 'Snails'],
      badMates: ['Slow bottom dwellers', 'Shy fish', 'Fin-nippers'],
      notes: 'Perfect community fish. School size determines behavior.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Large school (8+)', 'High flow filter'],

    proTips: [
      "8+ for perfect schooling. 6 = nervous, 4 = aggressive.",
      "Dark gravel/sand makes stripes POP! Bright blue reflections.",
      "Cycle test fish - survive EVERYTHING. Perfect for beginners.",
      "Feed 3x daily - burn energy like rockets!"
    ],

    commonMistakes: [
      "Too small groups (under 8) → Aggression between themselves.",
      "No current → Boring behavior, stunted fins.",
      "Single keeping → Stress, shortened lifespan."
    ],
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['Ich', 'Fin rot', 'Columnaris', 'Dropsy'],
    sensitivities: ['Ammonia/Nitrite', 'Too warm temperatures'],
  },

  scientificContext: {
    wildHabitat: "Oxygen-rich hill streams with gravel and roots. Extreme active hunters.",
    sexualDimorphism: "Females plumper (eggs), males slimmer, brighter stripes.",
    variants: ['Longfin Zebra', 'Leopard Danio', 'Glow Danio', 'Albino'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Temperature up (26°C) + Live food conditioning.',
    fryCare: 'Parents eat eggs/fry immediately. Gravel/marble protects eggs.',
    notes: 'Spawning tank with 2-3cm gravel. Male chases female through gravel banks.',
  },
};
