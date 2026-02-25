import type { Species } from '../../types/species';

export const bettaSplendensFemale: Species = {
  id: 'betta-splendens-female',
  slug: 'betta-splendens-female',
  imageUrl: '/images/species/betta-splendens-female.jpg',
  funFact: "Female Bettas are often dismissed as boring. Nothing is further from truth! In sororities, they rule via brutal hierarchies. Kept alone, a single female makes a faster, smarter, and more peaceful community fish than her long finned brothers!",

  taxonomy: {
    scientificName: 'Betta splendens',
    commonName: 'Siamese Fighting Fish (Female)',
    family: 'Osphronemidae',
    origin: 'Thailand, Cambodia, Vietnam',
    region: 'Asia',
    biotope: 'Stagnant shallow water, rice paddies, ditches.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'Similar colors to males but with much shorter fins. Shows breeding stripes (vertical) or stress stripes (horizontal).',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 20,
    tempC: { min: 24, max: 30, ideal: 26 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    kh: { min: 3, max: 15 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'midwater',
      preference: 0.70,
    },
    
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 20,
      territories: 1,
    },
    
    bioloadMultiplier: 0.5,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Females love planted tanks. For sororities, dense jungle style planting is mandatory to break lines of sight.',
    hardscape: ['Driftwood', 'Caves'],
  },

  behavior: {
    tags: ['semi-aggressive', 'surface_dweller', 'territorial', 'labyrinth_fish', 'jumper'],
    minGroupSize: 1,
    description: 'Kept alone, curious and active community fish. In groups (sororities), they establish complex and stressful hierarchies. Dominant females bully weaker ones. Single females are safer and easier.',
    
    compatibility: {
      goodMates: ['Tetras', 'Corydoras', 'Rasboras', 'Snails'],
      badMates: ['Male Bettas', 'Fin nippers', 'Other females (unless expert)'],
      notes: 'Never keep with males. Sororities are for experts only.',
      
      rules: [
        {
          type: 'avoid',
          target: 'male Bettas',
          reason: 'They fight or harass each other to death.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'expert for sororities',
          reason: 'High risk of death and stress in female groups.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        midwater: '10 to 30',
        bottom: '6 to 15',
      },
    },
    
    aggressionLevel: {
      intraspecific: 6,
      interspecific: 2,
      territorial: 4,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 0,
    },
    
    finNipping: {
      risk: 'low',
      targets: ['long finned fish'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Heater mandatory', 
      'Lid (jumper)',
    ],

    proTips: [
      "Single females are underrated community fish.",
      "Egg spot (white dot on belly) confirms female.",
      "Sororities fail often. Keeping one is safer.",
    ],

    commonMistakes: [
      "Keeping with males.",
      "Starting sorority in small tank.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets', 'brine-shrimp'],
      supplements: ['bloodworms', 'daphnia'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
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
    lifespanYears: 4,
    commonDiseases: ['fin rot', 'dropsy', 'ich'],
    sensitivities: ['Cold water', 'Stress'],
  },

  scientificContext: {
    wildHabitat: 'Shallow stagnant water.',
    sexualDimorphism: 'Females have short fins and egg spot.',
    variants: ['Koi', 'Galaxy', 'Crowntail', 'Veiltail'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'Conditioning',
    fryCare: 'Male cares for nest.',
    notes: 'Aggressive spawning.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'sorority violence', cause: 'aggression', frequency: 0.35 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
