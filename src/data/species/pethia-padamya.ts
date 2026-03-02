import type { Species } from '../../types/species';

export const pethiaPadamya: Species = {
  id: 'barb-odessa',
  slug: 'odessa-barb',
  imageUrl: '/images/species/odessa-barb.jpg',
  
  funFact: "The Odessa Barb was long believed to be an artificial hybrid created in the aquarium trade until wild populations were discovered in Myanmar. Males display a spectacular iridescent red-orange lateral stripe that runs the length of the body, which is almost invisible in females.",

  imageCredit: {
    photographer: 'Tomas Čekanavičius',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Barbus_Puntius_ticto.JPG',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },

  taxonomy: {
    scientificName: 'Pethia padamya',
    commonName: 'Odessa Barb',
    family: 'Cyprinidae',
    origin: 'Myanmar (Burma - Ayeyarwady River basin)',
    region: 'Asia',
    biotope: 'Shallow, vegetated streams and ditches in the Ayeyarwady basin, often found in clear or slightly tannin-stained water.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 6,
    color: 'Males develop a striking, iridescent red-orange lateral stripe from the snout to the tail. The body is silver with rows of dark spots. Females are plainer, lacking the red stripe, and have a yellower body tone.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 18, max: 26, ideal: 23 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 35,
      territories: 0,
    },
    
    bioloadMultiplier: 1.0,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'They appreciate a planted tank, but ensure plenty of open swimming space. They are active swimmers and can uproot delicate plants.',
    hardscape: ['Smooth river stones', 'Driftwood', 'Submerged branches'],
  },

  behavior: {
    tags: ['schooler', 'active', 'peaceful'],
    minGroupSize: 6,
    description: 'An active and hardy schooling fish. They are peaceful but very energetic, which can stress slower tankmates. Males display their best colors when kept in groups with females, engaging in harmless sparring contests to establish dominance.',
    
    compatibility: {
      goodMates: ['Other Barbs', 'Danios', 'Rasboras', 'Loaches', 'Corydoras', 'Peaceful Gouramis', 'Larger Tetras'],
      badMates: ['Slow moving fish', 'Fish with long fins', 'Aggressive species'],
      notes: 'Best kept with other active species. They should not be kept with long-finned fish like Bettas or Guppies as their boisterous activity can be disruptive.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group-size >= 6',
          reason: 'They are a schooling fish. Keeping them in small groups causes stress and hiding.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'open swimming space',
          reason: 'They are very active and need horizontal swimming room to thrive.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 1,
      territorial: 1,
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
      'Groups of 6+ fish', 
      'Open swimming space', 
      'Cooler water preferred', 
      'Varied diet for color',
    ],

    proTips: [
      "They do not require a heater in most centrally heated homes, preferring temperatures around 20-24°C.",
      "Males show intense red coloration when kept in clean water and fed a varied diet.",
      "They are resilient and make excellent fish for beginners setting up a community tank."
    ],

    commonMistakes: [
      "Keeping them in small tanks restricts their active swimming behavior.",
      "Housing them with very slow or long-finned fish causes stress for the tankmates.",
      "Allowing the temperature to rise too high can reduce their activity and color."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'pellets', 'spirulina'],
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
      notes: 'They are hardy but benefit from regular water changes to maintain their vibrant colors.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
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
    commonDiseases: ['ich', 'fin rot', 'velvet'],
    sensitivities: ['High temperatures', 'Poor water quality'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the Ayeyarwady River basin in Myanmar. They inhabit shallow, clear streams with moderate flow and aquatic vegetation. The discovery of wild populations settled the debate about whether they were a man-made hybrid.",
    sexualDimorphism: "Males are colorful with a bright red-orange lateral stripe and more pronounced coloration. Females are rounder and lack the red stripe, appearing mostly gold or olive.",
    variants: ['Wild Type', 'Longfin Odessa'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Spawning is induced by a water change with slightly cooler water. Males intensify their color and chase females into dense plants.',
    fryCare: 'Eggs are scattered among plants. Parents will eat eggs if given the chance. Fry are small and require infusoria or finely crushed food initially.',
    notes: 'Breeding is relatively easy in a dedicated tank with fine-leaved plants.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'jumping', cause: 'startled-no-lid', frequency: 0.20 },
      { issue: 'stress-from-small-group', cause: 'under-6-fish', frequency: 0.15 },
      { issue: 'color-fade', cause: 'poor-diet-or-stress', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};