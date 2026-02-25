import type { Species } from '../../types/species';

export const amanoShrimp: Species = {
  id: 'shrimp-001',
  slug: 'amano-shrimp',
  imageUrl: '/images/species/amano-shrimp.jpg',
  funFact: "Amano Shrimp are algae eating champions! One Amano devours as much algae as 10 Cherry Shrimp. Unstoppable against hair algae nightmares. Plus, they are escape artists that survive on land for hours, walking around your house looking for water!",

  taxonomy: {
    scientificName: 'Caridina multidentata',
    commonName: 'Amano Shrimp',
    family: 'Atyidae',
    origin: 'Japan, Taiwan',
    region: 'Asia',
    biotope: 'Fast flowing freshwater streams with high oxygen and rocky substrates.',
  },

  visuals: {
    iconShape: 'shrimp',
    adultSizeCM: 5,
    color: 'Translucent grey to greenish with reddish brown dots along sides. Long rostrum and antennae.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 20, max: 28, ideal: 24 },
    ph: { min: 6.5, max: 8.0, ideal: 7.2 },
    gh: { min: 6, max: 20 },
    kh: { min: 2, max: 10 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.80,
    },
    
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.1,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Planted tanks with plenty of surface area for grazing biofilm. Mosses and broad leaved plants are excellent.',
    hardscape: ['Driftwood', 'Rocks', 'Caves'],
  },

  behavior: {
    tags: ['peaceful', 'algae_eater', 'active', 'social'],
    minGroupSize: 3,
    description: 'Tireless workers constantly scavenging for algae and uneaten food. Bolder and larger than dwarf shrimp. Notorious escape artists that climb out of tanks if given the chance.',
    
    compatibility: {
      goodMates: ['Small peaceful fish', 'Tetras', 'Rasboras', 'Corydoras', 'Snails'],
      badMates: ['Large Cichlids', 'Pufferfish', 'Large Loaches', 'Any fish large enough to eat them'],
      notes: 'Safe with almost all community fish that are not predators.',
      
      rules: [
        {
          type: 'requires',
          condition: 'tight lid',
          reason: 'Will climb out of open top tanks.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'copper',
          reason: 'Deadly to all invertebrates.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 10,
        midwater: '15 to 30',
        bottom: '6 to 12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
      interspecific: 0,
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
      'No copper medications', 
      'Secure lid',
      'Drip acclimation',
    ],

    proTips: [
      "Best algae eater available. They even tackle hair algae and black beard algae.",
      "Drip acclimate slowly. They are sensitive to shock from changing water conditions.",
      "If swimming frantically around tank, check water parameters. Sign of stress or mating behavior.",
    ],

    commonMistakes: [
      "Using copper based plant fertilizers or medications.",
      "Leaving tank uncovered.",
      "Assuming they will breed. Larvae need saltwater to survive.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['biofilm', 'pellets'],
      supplements: ['bloodworms', 'vegetables'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 20,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Be careful when vacuuming not to suck them up.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['bacterial infections', 'molting issues'],
    sensitivities: ['Copper', 'Ammonia', 'Nitrite'],
  },

  scientificContext: {
    wildHabitat: 'Found in Japanese mountain streams. Larvae wash out to sea and return to freshwater as adults.',
    sexualDimorphism: 'Females are larger with row of dashes on side. Males have dots.',
    variants: ['Standard'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'expert',
    trigger: 'Natural',
    fryCare: 'Larvae require brackish water to develop. Extremely difficult in captivity.',
    notes: 'Virtually impossible for beginners due to saltwater larval stage.',
  },
  
  experienceData: {
    successRate: 0.90,
    survivalRate: 0.85,
    
    commonFailures: [
      { issue: 'escape', cause: 'no lid', frequency: 0.30 },
      { issue: 'poisoning', cause: 'copper', frequency: 0.20 },
      { issue: 'predation', cause: 'eaten by large fish', frequency: 0.20 },
    ],
    
    estimatedCosts: {
      initial: { min: 30, max: 60, currency: 'EUR' },
      monthly: { min: 2, max: 5, currency: 'EUR' },
    },
  },
};
