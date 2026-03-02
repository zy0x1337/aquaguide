import type { Species } from '../../types/species';

export const hyphessobryconHerbertaxelrodi: Species = {
  id: 'tetra-black-neon',
  slug: 'black-neon-tetra',
  imageUrl: '/images/species/black-neon-tetra.jpg',

  imageCredit: {
    photographer: 'Atulbhats (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Black-Neon-Tetra.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  
  funFact: "Despite its name, the Black Neon Tetra is not closely related to the Neon Tetra but belongs to a different genus group. It displays a stunning iridescent white stripe above a deep black lateral stripe, creating a high-contrast appearance that is visible even in dim lighting.",

  taxonomy: {
    scientificName: 'Hyphessobrycon herbertaxelrodi',
    commonName: 'Black Neon Tetra',
    family: 'Characidae',
    origin: 'South America (Brazil - Paraguay River basin)',
    region: 'South America',
    biotope: 'Blackwater streams and creeks with tannin-stained, acidic water and dense vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4,
    color: 'A distinctive color pattern featuring a shimmering white to gold stripe above a thick black longitudinal band. A red or orange patch is visible on the upper half of the eye.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 22, max: 26, ideal: 24 },
    ph: { min: 5.5, max: 7.0, ideal: 6.5 },
    gh: { min: 2, max: 12 },
    kh: { min: 1, max: 6 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8,
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
    plantingNotes: 'They thrive in densely planted tanks with floating plants to diffuse the light, mimicking their blackwater habitat. Dark substrate enhances their coloration.',
    hardscape: ['Driftwood', 'Leaf litter', 'Submerged branches'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'active'],
    minGroupSize: 8,
    description: 'A very hardy and peaceful shoaling fish that is often recommended as a more robust alternative to the standard Neon Tetra. They are active swimmers that stay in tight groups when given adequate numbers.',
    
    compatibility: {
      goodMates: ['Neon Tetra', 'Cardinal Tetra', 'Rummy Nose Tetra', 'Harlequin Rasbora', 'Corydoras', 'Otocinclus', 'Dwarf Shrimp'],
      badMates: ['Tiger Barb', 'Large Cichlids', 'Angelfish', 'Betta'],
      notes: 'An excellent community fish for calm tanks. They should not be kept with fin nippers or very large fish that may see them as food.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group-size >= 8',
          reason: 'They are a schooling species. Small groups lead to stress, loss of color, and hiding.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'clean water',
          reason: 'While hardy, they are sensitive to high nitrate levels and deteriorating water conditions.',
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
      intraspecific: 0,
      interspecific: 0,
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
      'Groups of 8+ fish', 
      'Stable water parameters', 
      'Floating plants for cover',
    ],

    proTips: [
      "They are very adaptable and often more resilient than standard Neon Tetras, making them great for beginners.",
      "Use dark substrate and tannin-stained water to bring out their best colors.",
      "Feed a varied diet including small live or frozen foods to maintain health."
    ],

    commonMistakes: [
      "Keeping them in small groups causes them to become shy and hide.",
      "Placing them in tanks with very strong currents prevents them from swimming comfortably.",
      "Introducing them to uncycled tanks causes high mortality."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'brine-shrimp', 'daphnia'],
      supplements: ['bloodworms', 'spirulina'],
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
      notes: 'Regular water changes help maintain their health and coloration. They are sensitive to high nitrates.',
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
    lifespanYears: 5,
    commonDiseases: ['ich', 'velvet', 'fin-rot'],
    sensitivities: ['High nitrates', 'Ammonia', 'Rapid parameter changes'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the Paraguay River basin in Brazil. They inhabit shallow, slow-moving blackwater streams stained by tannins from decaying plant matter. The water is typically soft and acidic.",
    sexualDimorphism: "Females are noticeably rounder and deeper-bodied than males, especially when carrying eggs. Males are slimmer with a more straight ventral line.",
    variants: ['Wild Type', 'Golden Black Neon (rare)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Condition the group with high-quality foods and separate a heavy female and a male into a soft, acidic breeding tank.',
    fryCare: 'Eggs are scattered among fine-leaved plants. Parents eat eggs, so remove them after spawning. Fry are small and need infusoria initially.',
    notes: 'Breeding is relatively easy in appropriate water conditions.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'stress-from-small-group', cause: 'kept-in-groups-under-6', frequency: 0.30 },
      { issue: 'water-quality-issues', cause: 'high-nitrates-or-ammonia', frequency: 0.25 },
      { issue: 'acclimation-shock', cause: 'sudden-parameter-change', frequency: 0.15 },
      { issue: 'predation', cause: 'housed-with-large-fish', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 30, max: 80, currency: 'EUR' },
      monthly: { min: 5, max: 12, currency: 'EUR' },
    },
  },
};