import type { Species } from '../../types/species';

export const hemigrammusErythrozonus: Species = {
  id: 'tetra-glowlight',
  slug: 'glowlight-tetra',
  imageUrl: '/images/species/glowlight-tetra.jpg',

  imageCredit: {
    photographer: 'h080 (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hemigrammus_erythrozonus_h080.jpg',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/'
  },
  
  funFact: "The Glowlight Tetra possesses a stunning iridescent red-orange stripe that runs from the snout, through the eye, and to the base of the tail, creating a glowing effect reminiscent of an incandescent filament. This stripe is created by light reflecting off guanine crystals in the skin, not by bioluminescence, but the effect is equally mesmerizing in a dimly lit tank.",

  taxonomy: {
    scientificName: 'Hemigrammus erythrozonus',
    commonName: 'Glowlight Tetra',
    family: 'Characidae',
    origin: 'South America (Essequibo River basin, Guyana)',
    region: 'South America',
    biotope: 'Blackwater creeks and tributaries with tannin-stained, acidic water and dense vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4,
    color: 'A translucent body with a brilliant iridescent red-orange stripe running horizontally from the nose to the tail base. The stripe passes directly through the eye, which is often outlined in the same color. Fins are typically clear with a hint of red at the base.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 23, max: 27, ideal: 25 },
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    gh: { min: 2, max: 15 },
    kh: { min: 2, max: 8 },
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
    
    bioloadMultiplier: 0.5,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'They look best in a planted tank with dark substrate and tannin-stained water, which mimics their natural blackwater habitat and enhances their glowing stripe. Floating plants are beneficial to diffuse light.',
    hardscape: ['Driftwood', 'Leaf litter', 'Submerged branches'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'active', 'midwater'],
    minGroupSize: 8,
    description: 'A peaceful, active schooling fish that adds a splash of color to any community tank. They are not as tightly schooling as some other tetras but still rely on the presence of their own kind for security. The glowing stripe is most visible under dimmer lighting or against a dark background.',
    
    compatibility: {
      goodMates: ['Neon Tetras', 'Cardinal Tetras', 'Rasboras', 'Corydoras', 'Dwarf Gouramis', 'Pencilfish', 'Dwarf shrimp'],
      badMates: ['Large aggressive fish', 'Fin nippers', 'Cichlids'],
      notes: 'An excellent community fish for peaceful setups. Their peaceful nature makes them ideal tankmates for other small, gentle species.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group-size >= 8',
          reason: 'They are a schooling species. In smaller groups, they become shy, lose coloration, and spend most of their time hiding.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'clean water',
          reason: 'They are sensitive to high nitrate levels and deteriorating water conditions. Weekly maintenance is necessary.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 8-12,
        midwater: '15-25',
        bottom: '6-10',
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
      'Dark substrate enhances color',
    ],

    proTips: [
      "Use a dark substrate and background to make the iridescent stripe really 'pop'.",
      "They thrive in tannin-stained water; adding Indian Almond leaves is highly recommended.",
      "Feed a varied diet including live or frozen foods to maintain the vibrant red stripe."
    ],

    commonMistakes: [
      "Keeping them in bright, bare tanks makes them look washed out and stressed.",
      "Introducing them to uncycled tanks causes high mortality due to ammonia sensitivity.",
      "Keeping them in small groups results in shy fish that hide in the corners."
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
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Regular water changes are essential to keep nitrates low and maintain their health and coloration.',
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
    wildHabitat: "Endemic to the Essequibo River basin in Guyana. They inhabit slow-moving, tannin-stained blackwater creeks rich in decaying plant matter. The water is typically very soft and acidic.",
    sexualDimorphism: "Females are noticeably rounder and deeper-bodied than males, especially when carrying eggs. Males are slimmer and often have a more intense red stripe.",
    variants: ['Wild-type Glowlight', 'Golden Glowlight (leucistic)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Breeding requires very soft, acidic water (pH 5.5-6.0). Condition the pair with live foods. Use fine-leaved plants or spawning mops in a separate tank.',
    fryCare: 'Eggs are scattered among plants and are sensitive to light. Parents should be removed after spawning. Fry hatch in about 24-36 hours and are very small, requiring infusoria or green water initially.',
    notes: 'While not impossible, breeding is rarely achieved in the average community tank.',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'stress-from-small-group', cause: 'kept-in-groups-under-6', frequency: 0.25 },
      { issue: 'water-quality-issues', cause: 'high-nitrates-or-ammonia', frequency: 0.30 },
      { issue: 'acclimation-shock', cause: 'sudden-parameter-change', frequency: 0.20 },
      { issue: 'faded-colors', cause: 'bright-tank-or-stress', frequency: 0.15 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 12, currency: 'EUR' },
    },
  },
};