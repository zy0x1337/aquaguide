import type { Species } from '../../types/species';

export const hyphessobryconSerpae: Species = {
  id: 'tetra-serpae',
  slug: 'serpae-tetra',
  imageUrl: '/images/species/serpae-tetra.jpg',

  imageCredit: {
    photographer: 'Faucon (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Serpae_tetra.JPG',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  
  funFact: "The Serpae Tetra is known for its vivid red coloration and a distinctive black comma-shaped spot behind its gills. It is infamous in the hobby for being a fin nipper, a behavior that is significantly reduced when kept in large schools where they focus their energy on each other.",

  taxonomy: {
    scientificName: 'Hyphessobrycon serpae',
    commonName: 'Serpae Tetra / Red Minor Tetra / Jewel Tetra',
    family: 'Characidae',
    origin: 'South America (Amazon River Basin, Paraguay Basin)',
    region: 'South America',
    biotope: 'Slow-moving streams and tributaries with dense vegetation and submerged roots.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4,
    color: 'A bright reddish body with a distinctive black comma-shaped spot just behind the gill plate. The dorsal fin is tall and black with a prominent white tip. Males have a more hooked dorsal fin.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 23, max: 27, ideal: 25 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
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
    
    bioloadMultiplier: 0.5,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'They prefer a densely planted tank with plenty of hiding spots. Floating plants help diffuse light.',
    hardscape: ['Driftwood', 'Submerged branches', 'Leaf litter'],
  },

  behavior: {
    tags: ['schooler', 'semi-aggressive', 'fin_nipper', 'active'],
    minGroupSize: 8,
    description: 'An active and hardy schooling fish that has a reputation for nipping the fins of slow-moving or long-finned tankmates. In large groups, this aggression is mostly directed at each other, but they should still be chosen with caution for community tanks.',
    
    compatibility: {
      goodMates: ['Danios', 'Barbs', 'Corydoras', 'Larger tetras', 'Plecos', 'Rainbowfish'],
      badMates: ['Betta', 'Angelfish', 'Guppies', 'Mollies', 'Slow moving fish', 'Long finned fish'],
      notes: 'They are best kept with fast-swimming fish that can tolerate their boisterous behavior. Do not keep with species that have flowing fins.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group-size >= 8',
          reason: 'Keeping them in larger groups helps spread out their aggressive tendencies among themselves rather than other tankmates.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'long finned fish',
          reason: 'Their fin nipping behavior can severely damage the fins of species like Bettas and Guppies.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'open swimming space',
          reason: 'They are active swimmers and need room to move.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 5,
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
      risk: 'high',
      targets: ['Betta', 'Angelfish', 'Guppies', 'Long finned fish'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Groups of 8+ fish', 
      'Robust tankmates', 
      'Avoid long finned fish', 
      'Planted tank',
    ],

    proTips: [
      "Feed a varied diet to maintain their bright red coloration.",
      "They are very hardy and can tolerate a wide range of water parameters, making them good for beginners.",
      "Use floating plants to make them feel more secure and reduce their skittishness."
    ],

    commonMistakes: [
      "Keeping them in small groups increases their fin nipping behavior towards other fish.",
      "Housing them with peaceful, long-finned species leads to shredded fins.",
      "Assuming they are purely peaceful like other tetras can lead to community tank disasters."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'bloodworms', 'brine-shrimp', 'micro-pellets'],
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
      notes: 'Regular water changes help maintain their health and activity levels.',
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
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'velvet', 'fin rot'],
    sensitivities: ['High nitrates', 'Sudden parameter changes'],
  },

  scientificContext: {
    wildHabitat: "Found in the Amazon and Paraguay River basins. They inhabit slow-moving waters with dense vegetation where they feed on small invertebrates and plant matter.",
    sexualDimorphism: "Males are slimmer and have a more hooked dorsal fin. Females are rounder, especially when carrying eggs.",
    variants: ['Wild Type', 'Longfin Serpae', 'Golden Serpae'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Breeding is achieved with soft, acidic water and fine-leaved plants. Eggs are scattered among plants.',
    fryCare: 'Parents will eat the eggs. Fry hatch in 24 hours and need infusoria initially.',
    notes: 'Breeding is relatively easy, but the eggs are light-sensitive and should be kept in the dark.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'fin nipping', cause: 'kept-with-long-finned-fish', frequency: 0.35 },
      { issue: 'stress', cause: 'group-too-small', frequency: 0.25 },
      { issue: 'water-quality', cause: 'high-nitrates', frequency: 0.15 },
      { issue: 'jumping', cause: 'startled-no-lid', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 25, max: 70, currency: 'EUR' },
      monthly: { min: 5, max: 12, currency: 'EUR' },
    },
  },
};