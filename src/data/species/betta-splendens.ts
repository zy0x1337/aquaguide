import type { Species } from '../../types/species';

export const bettaSplendens: Species = {
  id: 'betta-001',
  slug: 'betta-splendens',
  imageUrl: '/images/species/betta-splendens.jpg',
  funFact: "Bettas have a superpower: the 'Labyrinth Organ'! This lets them gulp air directly from surface, thriving in stagnant waters where other fish suffocate. They recognize owners and learn tricks. Watch them build intricate bubble nests from pure instinct!",

  taxonomy: {
    scientificName: 'Betta splendens',
    commonName: 'Siamese Fighting Fish',
    family: 'Osphronemidae',
    origin: 'Thailand, Cambodia, Vietnam',
    region: 'Asia',
    biotope: 'Shallow rice paddies, ditches, and stagnant waters.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 7,
    color: 'Highly variable colors (Red, Blue, White, Black, Multi) and fin types (Veiltail, Halfmoon, Crowntail, Plakat).',
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
      preference: 0.85,
    },
    
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 20,
      territories: 1,
    },
    
    bioloadMultiplier: 1.0,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Broad leaved plants like Anubias near surface act as resting spots. Silk or live plants only; plastic shreds fins.',
    hardscape: ['Driftwood', 'Smooth stones'],
  },

  behavior: {
    tags: ['jumper', 'surface_dweller', 'territorial', 'semi-aggressive', 'labyrinth_fish', 'bubble_nester'],
    minGroupSize: 1,
    description: 'Solitary and highly territorial. Males fight to death. Despite this, interactive pets that bond with owners. Build bubble nests at surface to attract females.',
    
    compatibility: {
      goodMates: ['Snails', 'Shrimp (sometimes)', 'Corydoras (in large tanks)'],
      badMates: ['Other Bettas', 'Guppies', 'Gouramis', 'Fin nippers'],
      notes: 'Best kept alone. Community tanks require 60L+ and careful stocking.',
      
      rules: [
        {
          type: 'avoid',
          target: 'other male bettas',
          reason: 'Lethal fighting.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'colorful long finned fish',
          reason: 'Mistaken for rivals.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        midwater: '5 to 10',
        bottom: '2 to 6',
      },
    },
    
    aggressionLevel: {
      intraspecific: 10,
      interspecific: 6,
      territorial: 8,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'medium',
      targets: ['guppies'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Heater mandatory', 
      'Lid', 
      'Gentle flow',
    ],

    proTips: [
      "Use resting leaf near surface.",
      "Mirrors provide enrichment (5 mins max).",
    ],

    commonMistakes: [
      "Bowls (too small, cold).",
      "Plastic plants (shred fins).",
      "Strong flow.",
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
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Warm water only.',
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
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['fin rot', 'bloat', 'velvet'],
    sensitivities: ['Cold', 'Dirty water'],
  },

  scientificContext: {
    wildHabitat: 'Rice paddies.',
    sexualDimorphism: 'Males have huge fins.',
    variants: ['Veiltail', 'Halfmoon', 'Plakat', 'Crowntail'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'Conditioning',
    fryCare: 'Male guards nest.',
    notes: 'Violent spawning. Fry need individual jars.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.78,
    
    commonFailures: [
      { issue: 'fin rot', cause: 'poor water', frequency: 0.40 },
      { issue: 'cold stress', cause: 'no heater', frequency: 0.25 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
