import type { Species } from '../../types/species';

export const rudd: Species = {
  id: 'coldwater-001',
  slug: 'rudd',
  imageUrl: '/images/species/rudd.jpg',
  
  funFact: "Rudd are Europe's ultimate temperature survivors, capable of thriving in frozen ponds at 2°C and summer heatwaves at 28°C. Their adult size adapts to their environment, growing larger in lakes with predators. In clean water, their fins glow brilliant red-orange, making them living water quality indicators.",

  imageCredit: {
    photographer: 'Klaus Rudloff (via Wikimedia Commons)', // Placeholder if original link broken, or use original
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Scardinius_erythrophthalmus_(Linnaeus,_1758)_c_2.JPG',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },

  taxonomy: {
    scientificName: 'Scardinius erythrophthalmus',
    commonName: 'Rudd',
    family: 'Cyprinidae',
    origin: 'Europe (Pyrenees to Caspian Sea, Scandinavia to Greece)',
    region: 'Europe',
    biotope: 'Slow-moving rivers, lakes, and ponds with dense vegetation. Tolerates a wide range of temperatures and conditions.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 25,
    color: 'Silvery body with a greenish-bronze back. The dorsal, anal, and pelvic fins are bright red-orange in healthy specimens. Eye features a golden iris with a red spot.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 450,
    tempC: { min: 4, max: 28, ideal: 18 },
    ph: { min: 6.5, max: 8.5, ideal: 7.5 },
    gh: { min: 10, max: 25 },
    kh: { min: 5, max: 20 },
    flow: 'low',
    substrate: 'dark-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.70,
    },
    
    spaceNeeds: {
      horizontalCM: 150,
      verticalCM: 50,
      territories: 0,
    },
    
    bioloadMultiplier: 1.0,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Enthusiastic plant-eaters. Only tough, hard-leaved plants like Anubias, Java Fern, and Vallisneria will survive. Soft plants will be consumed rapidly. Dark substrate enhances their red fin coloration.',
    hardscape: ['Driftwood', 'Smooth river stones'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'midwater', 'active', 'diurnal'],
    minGroupSize: 8,
    description: 'Active, confident shoaling fish that need large groups to feel secure. They are peaceful but fast, competitive feeders. They require seasonal temperature fluctuations to thrive and breed. In winter, they enter a semi-dormant state and stop feeding.',
    
    compatibility: {
      goodMates: ['Goldfish', 'Weather Loaches', 'Bitterling', 'Minnows', 'Gudgeon'],
      badMates: ['Tropical fish', 'Aggressive species', 'Very small fish', 'Delicate slow feeders'],
      notes: 'A coldwater species incompatible with tropical setups. Best kept in a species-only tank or with other coldwater fish in an unheated aquarium or pond.',
      
      rules: [
        {
          type: 'requires',
          condition: 'seasonal temperature fluctuation (winter cooling)',
          reason: 'They are temperate fish that need a winter cooling period (4-10°C) for health and breeding. Constant warm temperatures shorten their lifespan.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'large horizontal swimming space (150cm+ length)',
          reason: 'Adults reach 20-25cm and are active swimmers requiring significant horizontal space.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'group size 8+ fish',
          reason: 'Obligate shoalers that become stressed and skittish in smaller groups.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'tropical heated tanks',
          reason: 'They suffer in constant tropical temperatures and require cooler winter periods.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'delicate plants',
          reason: 'They will consume most soft aquatic plants.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 0-5,
        midwater: '8-15',
        bottom: '5-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
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
      'Seasonal temperature fluctuation required', 
      'Large tank (450L+)', 
      'Unheated setup', 
      'Groups of 8+',
      'Tough plants only',
      'Excellent oxygenation',
    ],

    proTips: [
      "Do not use a heater; they are a coldwater species that thrives at room temperature or in a pond.",
      "They require a winter cooling period for health and breeding. Allow temperatures to drop naturally in winter.",
      "Stop feeding when temperatures drop below 8°C as their metabolism slows significantly."
    ],

    commonMistakes: [
      "Keeping them in heated tropical tanks leads to a shortened lifespan and poor health.",
      "Housing them in small tanks restricts their active swimming behavior.",
      "Expecting delicate plants to survive; they will be eaten.",
      "Failing to provide a winter cooling period prevents natural breeding cycles."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'pellets', 'vegetables'],
      supplements: ['daphnia', 'bloodworms', 'algae-wafers'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'winter',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Clean, well-oxygenated water is essential for maintaining their bright red fin coloration. Reduce feeding and water changes during winter dormancy.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 15,
    commonDiseases: ['ich', 'columnaris', 'fungal-infections', 'parasites'],
    sensitivities: ['Low oxygen', 'Constant warm temps', 'Poor water quality'],
  },

  scientificContext: {
    wildHabitat: "Widespread across Europe in slow-moving freshwater bodies. They prefer shallow, vegetated areas but are highly adaptable to different conditions, including temperature extremes. They often hybridize with Roach (Rutilus rutilus) in the wild.",
    sexualDimorphism: "Males develop white spawning tubercles on the head and body during the breeding season. Females have a fuller, rounder body shape.",
    variants: ['Wild-type Rudd', 'Golden Rudd'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Spawning is triggered by rising water temperatures in spring after a winter cooling period. They require dense planting to scatter their adhesive eggs.',
    fryCare: 'Eggs hatch in 4-10 days. Fry are tiny and require infusoria initially. Breeding is most successful in outdoor ponds where natural food sources are abundant.',
    notes: 'Breeding is rarely achieved in indoor aquariums due to space and temperature control requirements.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'shortened-lifespan-no-breeding', cause: 'kept-in-heated-tropical-tank-no-winter-cooling', frequency: 0.30 },
      { issue: 'stress-stunted-growth', cause: 'tank-too-small-under-400L', frequency: 0.25 },
      { issue: 'skittish-hiding-faded-colors', cause: 'group-too-small-under-8-fish', frequency: 0.18 },
      { issue: 'all-plants-destroyed', cause: 'soft-plants-eaten-voraciously', frequency: 0.15 },
      { issue: 'gasping-at-surface', cause: 'poor-oxygenation-in-warm-water', frequency: 0.12 },
    ],
    
    estimatedCosts: {
      initial: { min: 250, max: 600, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};