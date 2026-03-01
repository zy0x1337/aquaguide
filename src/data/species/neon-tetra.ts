import type { Species } from '../../types/species';

export const neonTetra: Species = {
  id: 'tetra-001',
  slug: 'neon-tetra',
  imageUrl: '/images/species/neon-tetra.jpg',
  
  funFact: "In the wild, Neon Tetras live in blackwater streams so dark that their iridescent stripe is the only way they can locate each other in the gloom. This 'neon beacon' evolved for communication in pitch-black jungle waters!",

  taxonomy: {
    scientificName: 'Paracheirodon innesi',
    commonName: 'Neon Tetra',
    family: 'Characidae',
    origin: 'Peru, Brazil (Amazon Basin, Solimões River tributaries)',
    region: 'South America',
    biotope: 'Blackwater tributaries with tea-colored, acidic water rich in tannins and dense overhanging vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 3,
    color: 'An iridescent electric-blue stripe runs horizontally along the body, contrasted by a brilliant crimson-red belly. Colors are most vibrant against dark substrate.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 20, max: 26, ideal: 23 },
    ph: { min: 5.0, max: 7.0, ideal: 6.0 },
    gh: { min: 2, max: 10 },
    kh: { min: 1, max: 5 },
    flow: 'low',
    substrate: 'dark-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'all',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.3,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense planting and floating plants are essential to diffuse light, mimicking their shaded natural habitat. Dark substrate enhances their coloration significantly.',
    hardscape: ['Branchy Driftwood', 'Indian Almond Leaves', 'River Stones', 'Bogwood'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'shy', 'colorful', 'active'],
    minGroupSize: 10,
    description: 'These active shoaling fish are the quintessential community species but are sensitive to water quality. They form loose groups that tighten into schools when startled. In small groups, they become timid and lose their coloration, so keeping them in large numbers is essential for their well-being. They are generally peaceful but can be intimidated by larger or boisterous tankmates.',
    
    compatibility: {
      goodMates: ['Corydoras', 'Otocinclus', 'Harlequin Rasboras', 'Dwarf Gouramis', 'Cherry Shrimp', 'Nerite Snails'],
      badMates: ['Angelfish', 'Large Cichlids', 'Goldfish', 'Bettas', 'Discus'],
      notes: 'A classic community fish, but they should never be housed with Angelfish, which are their natural predators.',
      
      rules: [
        {
          type: 'avoid',
          target: 'angelfish',
          reason: 'Angelfish are natural predators of Neon Tetras and will hunt them once they reach adult size.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'large cichlids or predatory fish',
          reason: 'Any fish large enough to swallow a Neon will eventually try.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 10',
          reason: 'They are obligate shoalers that suffer stress and color loss in small groups.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'tank cycled >= 8 weeks',
          reason: 'They are extremely sensitive to ammonia and nitrite and must only be added to fully mature tanks.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '10-20',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
      interspecific: 1,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 999,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Groups of 10+ mandatory', 
      'Add to mature tanks only', 
      'Soft, acidic water preferred', 
      'Dim lighting or floating plants', 
      'Dark substrate',
    ],

    proTips: [
      "Always add them to a fully cycled tank that has been running for at least two months to avoid New Tank Syndrome.",
      "Use floating plants to dim the lighting, which encourages them to swim openly and display their best colors.",
      "Maintain a stable temperature below 26°C, as warmer water can shorten their lifespan."
    ],

    commonMistakes: [
      "Adding them to newly established tanks often results in mass mortality due to water instability.",
      "Keeping groups smaller than ten causes chronic stress and fading of their signature colors.",
      "Housing them with Angelfish, a popular but disastrous combination that ends in the Neons being eaten.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'crushed-flakes', 'brine-shrimp', 'daphnia'],
      supplements: ['bloodworms', 'spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Perform water changes with water that matches the tank temperature closely, as they are sensitive to thermal shock.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['neon-tetra-disease', 'ich', 'fin-rot', 'false-neon-disease', 'columnaris'],
    sensitivities: ['New Tank Syndrome', 'High nitrite', 'Sudden pH swings', 'Bright light', 'High temperatures'],
  },

  scientificContext: {
    wildHabitat: "Inhabits clearwater and blackwater tributaries of the Amazon Basin. These waters are tea-colored from tannins, extremely soft, and acidic. The dense jungle canopy creates dim lighting conditions. They school in large numbers to protect themselves from predators, feeding on insect larvae and small crustaceans. While not currently endangered, they are one of the most popular aquarium fish worldwide.",
    sexualDimorphism: "Females appear noticeably rounder and deeper-bodied than males, especially when carrying eggs, causing their blue stripe to curve slightly. Males are slimmer with a straighter stripe.",
    variants: ['Standard Neon', 'Longfin Neon', 'Gold Neon', 'Diamond Head Neon'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Breeding requires extremely soft, acidic water and total darkness, as the eggs are highly photosensitive.',
    fryCare: 'The tiny fry need microscopic food sources like infusoria for the first few days. The breeding tank must be kept dark to protect the light-sensitive eggs and larvae. Growth is slow and survivorship is often low without expert care.',
    notes: 'Breeding is considered one of the most difficult tasks for this species in the home aquarium.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'neon-tetra-disease', cause: 'weak-genetics-from-mass-breeding', frequency: 0.30 },
      { issue: 'new-tank-syndrome', cause: 'added-to-uncycled-tank-under-8-weeks', frequency: 0.25 },
      { issue: 'predation-by-angelfish', cause: 'incompatible-tankmates', frequency: 0.15 },
      { issue: 'stress-faded-colors', cause: 'group-too-small-under-10', frequency: 0.10 },
      { issue: 'ich-outbreak', cause: 'temperature-shock-from-shipment', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 150, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};