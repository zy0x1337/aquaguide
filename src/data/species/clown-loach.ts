import type { Species } from '../../types/species';

export const chromobotiaMacracanthus: Species = {
  id: 'loach-clown',
  slug: 'clown-loach',
  imageUrl: '/images/species/clown-loach.jpg',

  imageCredit: {
    photographer: 'Tylwyth Eldar (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aquarium_de_la_Porte_Dor%C3%A9e_-_Poisson_04.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  
  funFact: "The Clown Loach is famous for its ability to produce audible clicking sounds when excited or during social interactions. They are one of the few fish that sleep on their sides, often causing alarm for new owners who mistake this resting behavior for illness or death.",

  taxonomy: {
    scientificName: 'Chromobotia macracanthus',
    commonName: 'Clown Loach',
    family: 'Botiidae',
    origin: 'Indonesia (Sumatra, Borneo)',
    region: 'Asia',
    biotope: 'Clear and blackwater rivers with submerged wood, rocky substrates, and leaf litter.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 30,
    color: 'Bright orange body with three wide, black, vertical bands. The fins are red. The dorsal fin is black-tipped. Males have a slightly more concave caudal fin structure.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 300,
    tempC: { min: 25, max: 30, ideal: 27 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 5, max: 12 },
    kh: { min: 3, max: 8 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 120,
      verticalCM: 50,
      territories: 0,
    },
    
    bioloadMultiplier: 3.5,
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'Robust plants are recommended as they may nibble on soft leaves. They uproot plants while foraging.',
    hardscape: ['Driftwood', 'Smooth stones', 'PVC pipes', 'Slate caves'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'active', 'scaleless'],
    minGroupSize: 5,
    description: 'A highly social and active species that must be kept in groups. They are peaceful but can be boisterous during feeding. They require plenty of hiding spots and will squeeze into tight crevices. They are known to eat small snails.',
    
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Barbs', 'Gouramis', 'Corydoras', 'Rainbowfish'],
      badMates: ['Large aggressive cichlids', 'Fin nippers', 'Slow moving long finned fish'],
      notes: 'Best kept with other active, robust fish. They should not be kept with fish small enough to be considered food, such as tiny shrimp or fry.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group-size >= 5',
          reason: 'They are a social shoaling species. Solitary individuals become withdrawn and stressed.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'They root through the substrate constantly for food. Sharp gravel damages their delicate barbels and mouths.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'copper medications',
          reason: 'Being scaleless, they are highly sensitive to copper and many other common aquarium medications.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '5-8',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
      interspecific: 1,
      territorial: 1,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'evening'],
      nocturnal: true,
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
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Very large tank for adults', 
      'Groups of 5+ fish', 
      'Sand substrate', 
      'Warm water', 
      'Hiding places',
    ],

    proTips: [
      "They are extremely susceptible to ich (white spot disease). Quarantine new arrivals and maintain stable, warm water temperatures.",
      "Feed a varied diet including sinking pellets, frozen foods, and vegetable matter.",
      "They are slow growers but eventually reach 30 cm; plan for their adult size."
    ],

    commonMistakes: [
      "Buying them for small tanks without realizing their adult size.",
      "Keeping them alone leads to depression and lack of activity.",
      "Introducing them to tanks with fluctuating temperatures invites disease."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets', 'bloodworms', 'brine-shrimp', 'snails'],
      supplements: ['spirulina', 'vegetables'],
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
      notes: 'They produce a significant amount of waste. Regular water changes and good filtration are essential to prevent disease.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 200,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: true,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 15,
    commonDiseases: ['ich', 'velvet', 'internal parasites', 'skinny disease'],
    sensitivities: ['Copper medications', 'Cold water', 'Sudden temperature changes', 'High nitrates'],
  },

  scientificContext: {
    wildHabitat: "Native to the rivers of Sumatra and Borneo. They inhabit clear and turbid waters with rocky or sandy bottoms, often found in flooded forests during the wet season. They migrate upstream to spawn.",
    sexualDimorphism: "Males have a more concave ventral curve to the tail fin and a more streamlined body. Females are rounder, especially when full of eggs.",
    variants: ['Standard Clown Loach', 'Albino (extremely rare)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Breeding in home aquaria is virtually unheard of. It requires specific seasonal triggers and hormone treatments in commercial facilities.',
    fryCare: 'Fry are reared in specialized facilities. There are no established protocols for home breeding.',
    notes: 'Commercial breeding is difficult and usually involves hormones. Most specimens are wild-caught.',
  },
  
  experienceData: {
    successRate: 0.60,
    survivalRate: 0.55,
    
    commonFailures: [
      { issue: 'ich outbreak', cause: 'introduced-without-quarantine-or-temp-drop', frequency: 0.40 },
      { issue: 'stunting', cause: 'kept-in-too-small-tank', frequency: 0.25 },
      { issue: 'stress', cause: 'kept-alone-or-in-pairs', frequency: 0.20 },
      { issue: 'barbel erosion', cause: 'sharp-substrate', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 150, max: 400, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};