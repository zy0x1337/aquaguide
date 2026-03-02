import type { Species } from '../../types/species';

export const hyphessobryconPulchripinnis: Species = {
  id: 'tetra-lemon',
  slug: 'lemon-tetra',
  imageUrl: '/images/species/lemon-tetra.jpg',

  imageCredit: {
    photographer: 'SOK (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Citrontetra_Hyphessobrycon_pulchripinnis.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  
  funFact: "The Lemon Tetra has a translucent yellow body that acts like a prism, refracting light to create a beautiful glow. The diagnostic feature for identification is the anal fin, which is bright yellow with a black leading edge margined by a thin white line.",

  taxonomy: {
    scientificName: 'Hyphessobrycon pulchripinnis',
    commonName: 'Lemon Tetra',
    family: 'Characidae',
    origin: 'South America (Brazil - Tapajós River basin)',
    region: 'South America',
    biotope: 'Clear and blackwater streams with dense aquatic vegetation and submerged roots.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4.5,
    color: 'A translucent yellow to golden body. The anal fin is yellow with a distinct black band along the front edge, followed by a white margin. The upper part of the eye is bright red.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 22, max: 27, ideal: 25 },
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    gh: { min: 2, max: 15 },
    kh: { min: 2, max: 8 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.6,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Prefers a planted tank with open swimming areas. Floating plants are beneficial for diffusing light, which enhances their colors.',
    hardscape: ['Driftwood', 'Branches', 'Leaf litter'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'active'],
    minGroupSize: 8,
    description: 'A peaceful, active shoaling fish that is an excellent addition to community tanks. Males often spar with each other by spreading their fins, displaying the black and white edges of their anal fins, but no harm is done.',
    
    compatibility: {
      goodMates: ['Neon Tetra', 'Cardinal Tetra', 'Harlequin Rasbora', 'Corydoras', 'Otocinclus', 'Apistogramma', 'Dwarf Shrimp'],
      badMates: ['Tiger Barb', 'Large Cichlids', 'Betta', 'Fin nippers'],
      notes: 'They are generally peaceful but can become fin nippers if kept in too small a group or with long-finned fish.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group-size >= 8',
          reason: 'They are schooling fish. In smaller groups, they become stressed and may resort to fin nipping.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'clean water',
          reason: 'They are sensitive to deteriorating water conditions and high nitrates.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 8-12,
        midwater: '15-25',
        bottom: '8-12',
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
      type: 'school',
      maxMalesPerTank: 999,
    },
    
    finNipping: {
      risk: 'low',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Groups of 8+ fish', 
      'Stable water parameters', 
      'Planted tank',
    ],

    proTips: [
      "A dark substrate and dim lighting make their yellow coloration appear much more vibrant.",
      "Males have a slightly more pointed anal fin and more intense fin coloration than females.",
      "They adapt well to a wide range of water conditions, making them great for beginners."
    ],

    commonMistakes: [
      "Keeping them in bright light without floating plants makes them look washed out.",
      "Housing them with aggressive tankmates causes them to hide constantly.",
      "Keeping them in small groups increases the risk of them nipping the fins of other fish."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'bloodworms', 'brine-shrimp'],
      supplements: ['daphnia', 'spirulina'],
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
      notes: 'Maintain good water quality to prevent disease and keep their colors bright.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'hang-on-back',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['ich', 'velvet', 'fin-rot'],
    sensitivities: ['High nitrates', 'Ammonia', 'Poor water quality'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the Tapajós River basin in Brazil. They inhabit clear and blackwater streams with slow currents, often found among aquatic plants and submerged roots.",
    sexualDimorphism: "Males have a slightly more pointed anal fin with a sharper black and white edge. Females are rounder in the belly, especially when gravid.",
    variants: ['Wild Type', 'Albino Lemon Tetra'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Condition the pair with live foods. Spawning occurs in soft, acidic water. Eggs are scattered among fine-leaved plants.',
    fryCare: 'Eggs hatch in about 24-36 hours. Fry are very small and need infusoria or green water for the first few days. Parents should be removed as they eat the eggs.',
    notes: 'Breeding is fairly simple in the right conditions.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'stress-from-small-group', cause: 'kept-in-groups-under-6', frequency: 0.25 },
      { issue: 'color-fade', cause: 'bright-light-or-stress', frequency: 0.20 },
      { issue: 'water-quality-issues', cause: 'high-nitrates', frequency: 0.20 },
      { issue: 'acclimation-shock', cause: 'sudden-parameter-change', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 30, max: 80, currency: 'EUR' },
      monthly: { min: 5, max: 12, currency: 'EUR' },
    },
  },
};