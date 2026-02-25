import type { Species } from '../../types/species';

export const bettaSplendensFemale: Species = {
  id: 'betta-splendens-female',
  slug: 'betta-splendens-female',
  imageUrl: '/images/species/betta-splendens-female.jpg',
  funFact: "Don't underestimate the ladies! Female Bettas are faster, smarter, and more peaceful than their dramatic brothers. Perfect community fish when kept solo, fierce rulers when in sororities!",

  taxonomy: {
    scientificName: 'Betta splendens',
    commonName: 'Siamese Fighting Fish (Female)',
    family: 'Osphronemidae',
    origin: 'Thailand, Cambodia, Vietnam',
    region: 'Asia',
    biotope: 'Stagnant shallow water bodies including rice paddies and drainage ditches.',
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
    plantingNotes: 'Females thrive in heavily planted aquariums. For sorority setups, jungle style planting becomes mandatory to break visual contact and reduce aggression.',
    hardscape: ['Driftwood', 'Caves'],
  },

  behavior: {
    tags: ['semi-aggressive', 'surface_dweller', 'territorial', 'labyrinth_fish', 'jumper'],
    minGroupSize: 1,
    description: 'When maintained individually, they display curious and active community behavior. In group settings called sororities, complex and stressful dominance hierarchies emerge. Dominant females persistently harass weaker individuals. Single females prove safer and easier to maintain.',
    
    compatibility: {
      goodMates: ['Tetras', 'Corydoras', 'Rasboras', 'Snails'],
      badMates: ['Male Bettas', 'Fin nippers', 'Other females (unless expert)'],
      notes: 'Never house with males under any circumstances. Sorority setups demand expert level experience and vigilant monitoring.',
      
      rules: [
        {
          type: 'avoid',
          target: 'male Bettas',
          reason: 'Continuous fighting or harassment leads to death of one or both fish.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'expert for sororities',
          reason: 'Elevated risk of mortality and chronic stress in female group dynamics.',
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
      "Single females represent underrated community fish options offering personality without excessive aggression.",
      "The white egg spot visible on the belly provides definitive female confirmation.",
      "Sorority attempts frequently fail catastrophically. Maintaining one female proves significantly safer and less stressful.",
    ],

    commonMistakes: [
      "Housing females with males, resulting in constant harassment or spawning aggression.",
      "Attempting sorority setups in undersized aquariums without adequate visual barriers.",
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
    wildHabitat: 'Shallow stagnant water environments with minimal flow and variable oxygen levels.',
    sexualDimorphism: 'Females possess notably shorter fins and display a prominent white egg spot on the ventral surface.',
    variants: ['Koi', 'Galaxy', 'Crowntail', 'Veiltail'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'Conditioning with high quality foods triggers breeding readiness.',
    fryCare: 'Male assumes full parental care of bubble nest and developing fry.',
    notes: 'Spawning involves intense chasing and aggressive behavior from both partners.',
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
