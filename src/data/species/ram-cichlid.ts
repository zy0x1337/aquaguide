import type { Species } from '../../types/species';

export const ramCichlid: Species = {
  id: 'cichlid-001',
  slug: 'ram-cichlid',
  imageUrl: '/images/species/ram-cichlid.jpg',
  
  funFact: "German Blue Rams are temperature-sensitive dwarf cichlids that form monogamous pairs. They are known for their spectacular courtship dances and 'sand volcano' digging behavior.",

  taxonomy: {
    scientificName: 'Mikrogeophagus ramirezi',
    commonName: 'German Blue Ram',
    family: 'Cichlidae',
    origin: 'South America (Orinoco River Basin - Venezuela, Colombia)',
    region: 'South America',
    biotope: 'Warm shallow streams and pools with sandy bottoms, dense vegetation, and soft acidic water.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 6,
    color: 'The body is an iridescent blue covered in neon blue spots, with a distinctive black vertical bar through the eye. Males have longer dorsal spines, while females display a pink belly when breeding.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 26, max: 30, ideal: 28 },
    ph: { min: 5.0, max: 7.0, ideal: 6.0 },
    gh: { min: 4, max: 15 },
    kh: { min: 2, max: 8 },
    flow: 'low',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 35,
      territories: 1,
    },
    
    bioloadMultiplier: 1.0,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Heavily planted tanks with broad-leaved plants for spawning sites are ideal. They require open sandy areas for digging and displaying.',
    hardscape: ['Flat smooth stones', 'Small caves', 'Driftwood'],
  },

  behavior: {
    tags: ['peaceful', 'colorful', 'bottom_dweller', 'territorial', 'pair-bonding', 'intelligent'],
    minGroupSize: 2,
    description: 'A peaceful dwarf cichlid that forms strong pair bonds. They are intelligent and can recognize their owners. They spend much of their time sifting through sand for food and will diligently guard their fry. Males can be territorial towards each other, but they are generally suitable for community tanks.',
    
    compatibility: {
      goodMates: ['Small peaceful tetras', 'Corydoras', 'Otocinclus', 'Peaceful gouramis', 'Larger shrimp'],
      badMates: ['Aggressive cichlids', 'Fin nippers', 'Goldfish', 'Large predatory fish'],
      notes: 'Best kept as a male-female pair. All tankmates must be able to tolerate the high temperatures required by this species.',
      
      rules: [
        {
          type: 'requires',
          condition: 'stable warm temperature 26-29°C',
          reason: 'They are extremely sensitive to temperature fluctuations and cold, which can be fatal.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'soft acidic water',
          reason: 'They thrive in soft, acidic conditions; hard water causes stress and poor health.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'pristine water quality',
          reason: 'They are highly sensitive to ammonia, nitrite, and high nitrates.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'fine sand substrate',
          reason: 'They naturally sift sand to find food; gravel damages their gills.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0-6,
        midwater: '12-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 1,
      territorial: 5,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'pair',
      maxMalesPerTank: 2,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'high',
    cost: 'medium',
    specialRequirements: [
      'Stable warm temperature (26-29°C)', 
      'Soft acidic water', 
      'Pristine water quality', 
      'Fine sand substrate', 
      'Flat spawning surfaces',
    ],

    proTips: [
      "Stable warm temperature is non-negotiable; even small fluctuations can cause stress.",
      "Maintain pristine water quality with weekly changes to prevent disease.",
      "They thrive in soft, acidic water and may struggle in hard tap water."
    ],

    commonMistakes: [
      "Temperature instability is the primary cause of death.",
      "Poor water quality quickly leads to disease.",
      "Keeping them in hard, alkaline water causes stress and fading."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['bloodworms', 'brine-shrimp', 'micro-pellets'],
      supplements: ['spirulina', 'flakes'],
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
      notes: 'Strict adherence to a weekly water change schedule is vital to keep nitrates low.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['ich', 'velvet', 'hole-in-head-disease', 'fin-rot'],
    sensitivities: ['Temperature instability', 'Cold water', 'Ammonia', 'High nitrates', 'Hard water'],
  },

  scientificContext: {
    wildHabitat: "Inhabits warm, shallow pools in the Orinoco River basin with soft, acidic water. They live in sandy-bottomed areas rich in organic debris. Their populations are stable in the wild, though habitat degradation is a local concern.",
    sexualDimorphism: "Males have longer, more pointed dorsal fins. Females are rounder with a distinctive pink or purple belly, especially when ready to spawn.",
    variants: ['German Blue Ram', 'Gold Ram', 'Electric Blue Ram', 'Black Ram'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'medium',
    trigger: 'Breeding is triggered by raising the temperature and providing a flat stone. The pair will meticulously clean the spawning site before laying eggs.',
    fryCare: 'Both parents care for the eggs and fry. The eggs hatch in 3-4 days, and the parents will move the fry to pits in the sand. Fry require very small live foods like infusoria initially.',
    notes: 'First-time parents may eat their eggs, but usually succeed on subsequent attempts.',
  },
  
  experienceData: {
    successRate: 0.45,
    survivalRate: 0.50,
    
    commonFailures: [
      { issue: 'temperature-instability-stress-death', cause: 'daily-fluctuations-over-1-2C-or-cold-water-under-26c', frequency: 0.60 },
      { issue: 'ich-velvet-outbreak', cause: 'temperature-swings-or-stress-from-poor-conditions', frequency: 0.20 },
      { issue: 'hole-in-head-disease', cause: 'high-nitrates-over-20ppm-or-poor-water-quality', frequency: 0.10 },
      { issue: 'stunted-pale-colors', cause: 'hard-alkaline-water-or-wrong-parameters', frequency: 0.05 },
      { issue: 'gill-damage-infections', cause: 'gravel-substrate-instead-of-fine-sand', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 250, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};