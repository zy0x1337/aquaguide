import type { Species } from '../../types/species';

export const swordtail: Species = {
  id: 'sword-001',
  slug: 'swordtail',
  imageUrl: '/images/species/swordtail.jpg',
  
  funFact: "Swordtails are Olympic jumpers capable of leaping 30cm from the water. Males possess a distinctive 'sword' tail extension used for courtship, though it creates drag. They are prolific breeders and males can be relentless in pursuing females.",

  taxonomy: {
    scientificName: 'Xiphophorus hellerii',
    commonName: 'Swordtail',
    family: 'Poeciliidae',
    origin: 'Central America (Mexico, Guatemala, Honduras)',
    region: 'Central America',
    biotope: 'Fast-flowing clear streams and rivers with heavy vegetation and hard, alkaline water.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 14,
    color: 'Wild males are olive-green with a red stripe and the signature sword-like extension on the lower tail fin. Females are larger and lack the sword. Many color morphs exist, including Red Velvet, Pineapple, and Neon.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 120,
    tempC: { min: 18, max: 28, ideal: 24 },
    ph: { min: 7.0, max: 8.5, ideal: 7.5 },
    gh: { min: 12, max: 30 },
    kh: { min: 6, max: 15 },
    flow: 'moderate',
    substrate: 'gravel',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 120,
      verticalCM: 40,
      territories: 0,
    },
    
    bioloadMultiplier: 1.8,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'They appreciate heavy planting along the back and sides with open swimming space in the center. They will not harm healthy plants.',
    hardscape: ['Smooth river stones', 'Driftwood branches'],
  },

  behavior: {
    tags: ['active', 'jumper', 'livebearer', 'semi-aggressive'],
    minGroupSize: 6,
    description: 'Extremely active and athletic swimmers. Males are relentless in courting females and can be aggressive toward other males. They are prolific breeders and notorious jumpers, requiring a secure lid.',
    
    compatibility: {
      goodMates: ['Mollies', 'Platies', 'Large tetras', 'Rainbowfish', 'Danios', 'Corydoras'],
      badMates: ['Bettas', 'Guppies', 'Slow fish', 'Aggressive cichlids', 'Goldfish'],
      notes: 'Best kept in a ratio of one male to three or more females to diffuse male aggression. They can hybridize with Platies.',
      
      rules: [
        {
          type: 'requires',
          condition: 'secure lid with no gaps',
          reason: 'They are expert jumpers and will escape through any gap, leading to death.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: '1 male : 3+ females ratio',
          reason: 'Males constantly chase females; a single female will be harassed to exhaustion.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'keeping 2 males together',
          reason: 'The dominant male will bully the subordinate relentlessly. Keep one male or three or more.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'hybridization with Platies',
          reason: 'They readily interbreed, producing infertile offspring.',
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
      intraspecific: 7,
      interspecific: 4,
      territorial: 5,
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
      risk: 'medium',
      targets: ['slow-moving fish', 'long-finned fish'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Secure lid mandatory', 
      '1 male : 3+ females ratio', 
      'Hard alkaline water', 
      'Spacious tank (120L+)', 
      'Population control plan',
    ],

    proTips: [
      "A tight-fitting lid is the most critical piece of equipment; they will jump through any gap.",
      "Maintain a strict ratio of one male to at least three females to prevent female exhaustion.",
      "They require hard, alkaline water; in soft water, they are prone to 'shimmy disease'."
    ],

    commonMistakes: [
      "Inadequate lid leads to fish found dried on the floor.",
      "Keeping a 1:1 sex ratio results in harassed females.",
      "Keeping only two males results in the death of the subordinate.",
      "Soft water causes neurological issues like shimmy disease."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'spirulina', 'algae-wafers', 'vegetables'],
      supplements: ['bloodworms', 'brine-shrimp', 'daphnia'],
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
      notes: 'They are hardy but require hard water parameters for long-term health.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'hang-on-back',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'fin-rot', 'shimmy-disease', 'velvet'],
    sensitivities: ['Soft water', 'Ammonia spikes', 'Overcrowding'],
  },

  scientificContext: {
    wildHabitat: "Native to fast-flowing streams in Central America. They inhabit areas with heavy vegetation and rocky substrates. They are adapted to hard, alkaline water rich in minerals.",
    sexualDimorphism: "Males possess the distinctive sword-like extension on the lower lobe of the caudal fin and a gonopodium. Females are larger, rounder, and lack the sword.",
    variants: ['Green', 'Red Velvet', 'Pineapple', 'Neon', 'Kohaku', 'Lyretail', 'Wagtail', 'Marigold'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger: 'They breed prolifically without special intervention. A warm temperature and good diet increase breeding frequency.',
    fryCare: 'Fry are born free-swimming and are large enough to take crushed flakes immediately. Adults will eat the fry, so provide dense plant cover or separate the fry.',
    notes: 'Population control is the main challenge. Females can store sperm to produce multiple broods from a single mating.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'jumping-escape-death', cause: 'no-secure-lid-or-gaps-in-cover', frequency: 0.40 },
      { issue: 'female-harassment-exhaustion', cause: 'wrong-male-female-ratio-single-female', frequency: 0.25 },
      { issue: 'male-bullying-death', cause: 'keeping-2-males-dominant-kills-subordinate', frequency: 0.15 },
      { issue: 'shimmy-disease', cause: 'soft-water-under-gh-12-mineral-deficiency', frequency: 0.10 },
      { issue: 'fry-overpopulation-crisis', cause: 'no-population-control-plan', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 150, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};