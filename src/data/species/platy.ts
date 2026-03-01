import type { Species } from '../../types/species';

export const platy: Species = {
  id: 'platy-001',
  slug: 'platy',
  imageUrl: '/images/species/platy.jpeg',
  
  funFact: "Platies are color-morphing champions, selectively bred into hundreds of varieties like the iconic 'Mickey Mouse' with its three tail spots. They are prolific livebearers; females can store sperm for up to six months, producing multiple broods from a single mating.",

  taxonomy: {
    scientificName: 'Xiphophorus maculatus',
    commonName: 'Platy',
    family: 'Poeciliidae',
    origin: 'Central America (Mexico, Guatemala, Honduras - spring-fed rivers)',
    region: 'Central America',
    biotope: 'Spring-fed clear rivers and canals with hard alkaline water and moderate vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 6,
    color: 'Highly variable coloration from selective breeding, including varieties like Mickey Mouse, Koi, Sunset, and Wagtail. Males are slimmer with a gonopodium; females are rounder with a gravid spot.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 18, max: 28, ideal: 24 },
    ph: { min: 7.0, max: 8.5, ideal: 7.5 },
    gh: { min: 10, max: 30 },
    kh: { min: 5, max: 15 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 1.2,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Appreciates open swimming space with planted borders for security. Floating plants are crucial for providing cover for fry, as adults will prey on their own young.',
    hardscape: ['Smooth river stones', 'Minimal driftwood'],
  },

  behavior: {
    tags: ['peaceful', 'active', 'colorful', 'livebearer'],
    minGroupSize: 6,
    description: 'Active, peaceful livebearers ideal for community tanks. They are prolific breeders, often requiring population control. They constantly graze on algae and spend time in the upper and middle water layers.',
    
    compatibility: {
      goodMates: ['Peaceful community fish', 'Mollies', 'Guppies', 'Corydoras', 'Snails'],
      badMates: ['Aggressive cichlids', 'Goldfish', 'Bettas'],
      notes: 'Compatible with most peaceful species. Can hybridize with Swordtails, so keep separate for pure breeding.',
      
      rules: [
        {
          type: 'requires',
          condition: '1 male : 2-3 females ratio',
          reason: 'Males constantly chase females; a single female will be harassed to exhaustion.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'hybridization with Swordtails',
          reason: 'They readily interbreed, producing infertile offspring with health issues.',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'fry overpopulation',
          reason: 'They breed prolifically, and a tank can quickly become overcrowded without population control.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '12-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 1,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
      maxMalesPerTank: 5,
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
      'Hard alkaline water preferred', 
      '1 male : 2-3 females ratio', 
      'Moderate planting for fry hiding', 
      'Population control plan',
    ],

    proTips: [
      "They thrive in hard, alkaline water; use crushed coral to buffer pH if necessary.",
      "Feed vegetable matter like spirulina to enhance coloration.",
      "Have a plan for fry, as they breed continuously."
    ],

    commonMistakes: [
      "Incorrect gender ratios lead to exhausted females.",
      "Allowing overpopulation degrades water quality.",
      "Mixing with Swordtails results in unwanted hybrids."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'spirulina', 'algae-wafers'],
      supplements: ['bloodworms', 'brine-shrimp', 'vegetables'],
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
      notes: 'They are very hardy but produce significant waste; regular maintenance is beneficial.',
    },
    
    equipment: {
      heater: {
        required: false,
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
    lifespanYears: 4,
    commonDiseases: ['ich', 'fin-rot', 'velvet', 'fungal-infections'],
    sensitivities: ['Very soft water', 'Ammonia spikes'],
  },

  scientificContext: {
    wildHabitat: "Native to spring-fed rivers in Mexico. They inhabit clear, hard, alkaline waters with moderate vegetation. Unlike the colorful aquarium morphs, wild specimens are relatively drab olive-green.",
    sexualDimorphism: "Males possess a gonopodium and are slimmer. Females are larger with a rounded belly and a visible gravid spot when pregnant.",
    variants: ['Mickey Mouse', 'Koi', 'Sunset', 'Wagtail', 'Tuxedo', 'Blue Coral'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger: 'Breeding requires no special triggers; it occurs readily in any mixed-gender tank. Females can store sperm for months.',
    fryCare: 'Fry are born free-swimming and are large enough to accept crushed flakes immediately. Dense floating plants are necessary to protect them from being eaten by adults.',
    notes: 'They are prolific breeders, and fry survival often depends on hiding spots within the tank.',
  },
  
  experienceData: {
    successRate: 0.90,
    survivalRate: 0.85,
    
    commonFailures: [
      { issue: 'female-harassment-stress', cause: 'wrong-male-female-ratio-too-many-males', frequency: 0.30 },
      { issue: 'fry-overpopulation-crisis', cause: 'no-population-control-plan', frequency: 0.25 },
      { issue: 'ich-outbreak', cause: 'soft-water-or-parameter-swings', frequency: 0.20 },
      { issue: 'hybrid-offspring', cause: 'breeding-with-swordtails-same-genus', frequency: 0.15 },
      { issue: 'female-exhaustion', cause: 'single-female-constant-breeding', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};