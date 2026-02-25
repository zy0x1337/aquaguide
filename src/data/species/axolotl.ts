import type { Species } from '../../types/species';

export const axolotl: Species = {
  id: 'axolotl',
  slug: 'axolotl',
  imageUrl: '/images/species/axolotl.jpg',
  funFact: "Axolotls never grow up, keeping baby gills forever! They flawlessly regenerate lost limbs, spinal cords, and even brain parts. Scientists study them hoping to unlock human healing secrets. Plus, they smile constantly!",

  taxonomy: {
    scientificName: 'Ambystoma mexicanum',
    commonName: 'Axolotl',
    family: 'Ambystomatidae',
    origin: 'Central Mexico (Lake Xochimilco)',
    region: 'North America',
    biotope: 'High altitude freshwater canals with cold water and muddy bottoms.',
  },

  visuals: {
    iconShape: 'eel-like',
    adultSizeCM: 30,
    color: 'Wild type is dark brown. Captive morphs include Leucistic (pink/white), Albino, and Melanoid (black). Distinctive external feathery gills.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 110,
    tempC: { min: 15, max: 20, ideal: 17 },
    ph: { min: 7.4, max: 7.6, ideal: 7.5 },
    gh: { min: 7, max: 14 },
    kh: { min: 3, max: 8 },
    flow: 'low',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 90,
      verticalCM: 40,
      territories: 1,
    },
    
    bioloadMultiplier: 5.0,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Plants must tolerate cold water. Low light species like Anubias and Java Fern work best. Provide open sand areas for walking.',
    hardscape: ['Large smooth caves', 'PVC pipes', 'Smooth pots'],
  },

  behavior: {
    tags: ['peaceful', 'nocturnal', 'predator', 'amphibian', 'coldwater'],
    minGroupSize: 1,
    description: 'Curious bottom walkers that smile constantly. Despite cute appearance, they are ambush predators that try to eat anything fitting in their mouth. Generally solitary but can coexist if same size.',
    
    compatibility: {
      goodMates: ['Other Axolotls (same size only)'],
      badMates: ['Fish (all kinds)', 'Snails', 'Shrimp'],
      notes: 'Best in species only tank. Fish nip gills; axolotls eat fish.',
      
      rules: [
        {
          type: 'requires',
          condition: 'cold water',
          reason: 'High temperatures cause stress and disease.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'gravel',
          reason: 'Causes fatal impaction if swallowed.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'fish',
          reason: 'Fish nip gills; Axolotls eat fish.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        bottom: '0 to 1',
      },
    },
    
    aggressionLevel: {
      intraspecific: 6,
      interspecific: 4,
      territorial: 3,
    },
    
    activity: {
      level: 'low',
      peakTimes: ['night'],
      nocturnal: true,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'medium',
      targets: ['anything moving'],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'high',
    cost: 'high',
    specialRequirements: [
      'Chiller often required', 
      'No gravel', 
      'High filtration',
    ],

    proTips: [
      "Temperature is key! Anything over 20C is dangerous.",
      "Earthworms are best staple diet.",
      "Use fine sand or bare bottom to prevent impaction.",
    ],

    commonMistakes: [
      "Keeping them too warm.",
      "Using gravel.",
      "Keeping with fish.",
    ],
    
    feeding: {
      frequency: 'every-other-day',
      primaryFoods: ['pellets'],
      supplements: ['bloodworms', 'brine-shrimp'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Messy eaters. Heavy filtration needed.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 15,
    commonDiseases: ['fungal infections', 'bacterial infections', 'impaction'],
    sensitivities: ['Heat', 'Ammonia', 'Current'],
  },

  scientificContext: {
    wildHabitat: 'Only found in Lake Xochimilco, Mexico.',
    sexualDimorphism: 'Males have swollen cloaca. Females are rounder.',
    variants: ['Wild', 'Leucistic', 'Albino', 'Melanoid', 'Copper', 'GFP'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'medium',
    trigger: 'Seasonal temperature changes.',
    fryCare: 'Live baby brine shrimp needed. Cannibalistic.',
    notes: 'Raising fry is space intensive.',
  },
  
  experienceData: {
    successRate: 0.60,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'heat stress', cause: 'high temperature', frequency: 0.40 },
      { issue: 'impaction', cause: 'gravel', frequency: 0.25 },
    ],
    
    estimatedCosts: {
      initial: { min: 300, max: 800, currency: 'EUR' },
      monthly: { min: 20, max: 60, currency: 'EUR' },
    },
  },
};
