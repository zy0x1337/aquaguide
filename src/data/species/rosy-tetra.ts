import type { Species } from '../../types/species';

export const hyphessobryconBentosi: Species = {
  id: 'tetra-rosy',
  slug: 'rosy-tetra',
  imageUrl: '/images/species/rosy-tetra.jpg',

  imageCredit: {
    photographer: 'Holger Krisp (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Schmucksalmler_Hyphessobrycon_bentosi.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  
  funFact: "The Rosy Tetra is distinguished by its elegant, high-backed body and a distinctive dorsal fin that features a stark white tip contrasting with a black margin. Males often engage in mock battles, spreading their fins to display their impressive markings.",

  taxonomy: {
    scientificName: 'Hyphessobrycon bentosi',
    commonName: 'Rosy Tetra / Roberts Tetra',
    family: 'Characidae',
    origin: 'South America (Amazon Basin - Brazil, Peru)',
    region: 'South America',
    biotope: 'Slow-moving blackwater tributaries with dense vegetation and submerged roots.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4.5,
    color: 'A deep, rhomboid body with a rosy pink to reddish hue. The dorsal fin is tall and sickle-shaped, featuring a prominent black patch tipped with white. The anal fin has a black edge with a white lower margin.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 5.5, max: 7.0, ideal: 6.5 },
    gh: { min: 2, max: 12 },
    kh: { min: 1, max: 6 },
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
    plantingNotes: 'They thrive in a densely planted tank with floating plants to diffuse light. Dark substrate enhances their rosy coloration.',
    hardscape: ['Driftwood', 'Leaf litter', 'Submerged branches'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'active'],
    minGroupSize: 8,
    description: 'A peaceful and somewhat shy tetra that is very active when kept in proper numbers. Males display to each other by flaring their fins. They have a flowing swimming style and appreciate open swimming space.',
    
    compatibility: {
      goodMates: ['Neon Tetra', 'Cardinal Tetra', 'Rummy Nose Tetra', 'Corydoras', 'Hatchetfish', 'Pencilfish'],
      badMates: ['Tiger Barbs', 'Serpae Tetras', 'Large Cichlids', 'Fin nippers'],
      notes: 'Do not house with fin nippers as their elaborate fins make them targets. They are easily outcompeted for food by very fast species.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group-size >= 8',
          reason: 'They are a schooling fish. Small groups lead to shyness and loss of color.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'clean water',
          reason: 'They are sensitive to high nitrates and deteriorating water conditions.',
          severity: 'medium',
        },
        {
          type: 'requires',
          condition: 'floating plants',
          reason: 'They prefer subdued lighting. Floating plants help them feel secure.',
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
      'Dark substrate', 
      'Vegetable matter in diet',
    ],

    proTips: [
      "Use a dark substrate and background to bring out their best rosy coloration.",
      "Feed a varied diet that includes some vegetable matter or spirulina.",
      "They look stunning in a blackwater setup with tannin-stained water."
    ],

    commonMistakes: [
      "Keeping them in bright tanks without cover causes them to fade and hide.",
      "Housing them with fin nippers ruins their beautiful dorsal fins.",
      "Keeping them in small groups prevents natural schooling behavior."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'bloodworms', 'brine-shrimp'],
      supplements: ['spirulina', 'daphnia'],
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
      notes: 'Regular water changes help maintain their health and color.',
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
    sensitivities: ['High nitrates', 'Ammonia', 'Bright lighting'],
  },

  scientificContext: {
    wildHabitat: "Found in the Amazon Basin. They inhabit slow-moving, tannin-stained blackwater streams with heavy submerged vegetation and leaf litter.",
    sexualDimorphism: "Males have a longer, more sickle-shaped dorsal fin and are generally more colorful. Females are rounder in the belly.",
    variants: ['Wild Type', 'White Fin Rosy Tetra'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Breeding requires very soft, acidic water. Use a separate breeding tank with fine-leaved plants.',
    fryCare: 'Eggs are scattered among plants. Parents should be removed as they eat the eggs. Fry are small and need infusoria initially.',
    notes: 'Breeding is achievable but raising the fry requires attention to water quality.',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'fin damage', cause: 'housed-with-fin-nippers', frequency: 0.25 },
      { issue: 'stress-from-small-group', cause: 'kept-in-groups-under-6', frequency: 0.25 },
      { issue: 'water-quality-issues', cause: 'high-nitrates', frequency: 0.20 },
      { issue: 'faded-colors', cause: 'bright-tank-no-cover', frequency: 0.15 },
    ],
    
    estimatedCosts: {
      initial: { min: 30, max: 80, currency: 'EUR' },
      monthly: { min: 5, max: 12, currency: 'EUR' },
    },
  },
};