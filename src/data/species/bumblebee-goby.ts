import type { Species } from '../../types/species';

export const bumblebeeGoby: Species = {
  id: 'bumblebee-goby',
  slug: 'bumblebee-goby',
  imageUrl: '/images/species/bumblebee-goby.jpg',
  
  funFact: "The male Bumblebee Goby is a devoted father who guards his cave-bound eggs for over a week without eating, fanning them constantly to ensure they hatch safely.",

  imageCredit: {
    photographer: 'theaquariumkeeper on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/hummel-fisch-hummel-grundel-7793718/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  taxonomy: {
    scientificName: 'Brachygobius spp.',
    commonName: 'Bumblebee Goby',
    family: 'Gobiidae',
    origin: 'Southeast Asia (Thailand, Indonesia, Vietnam - coastal lowlands, mangrove swamps, estuaries)',
    region: 'Asia',
    biotope: 'Mangrove swamps, estuaries, and tidal streams with mud or sand substrates and submerged roots.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4,
    color: 'A bright yellow body is contrasted by four thick, vertical black bars. Males often display more intense coloration than females when defending a territory.',
  },

  environment: {
    type: 'brackish',
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 7.0, max: 8.5, ideal: 7.5 },
    gh: { min: 8, max: 20 },
    kh: { min: 6, max: 20 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 20,
      territories: 1,
    },
    
    bioloadMultiplier: 0.4,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Plants must be salt-tolerant if keeping the fish in brackish conditions, with Java Fern and Anubias being excellent choices. Dense planting provides necessary cover and breaks lines of sight, reducing stress and territorial squabbles.',
    hardscape: ['Snail shells', 'Small PVC pipes', 'Driftwood tangles', 'Smooth stones'],
  },

  behavior: {
    tags: ['bottom_dweller', 'territorial', 'shy', 'social', 'diurnal', 'colorful', 'nano', 'slow_eater'],
    minGroupSize: 6,
    description: 'These small, bottom-dwelling fish are known for their perch-and-pounce hunting style. They spend much of their time resting on rocks or leaves, darting out to snatch passing prey. They are social but territorial, often engaging in harmless displays to defend their chosen cave. In the wild, they inhabit both fresh and brackish waters, requiring keepers to match the salinity to their specific source. They are peaceful toward other species but can be outcompeted for food by faster swimmers.',
    
    compatibility: {
      goodMates: ['Other Bumblebee Gobies', 'Mollies (in brackish)', 'Nerite snails', 'Large adult shrimp'],
      badMates: ['Fast feeders', 'Large aggressive fish', 'Fin-nippers'],
      notes: 'A species-only tank is strongly recommended to ensure these slow feeders receive adequate nutrition.',
      
      rules: [
        {
          type: 'requires',
          condition: 'live or frozen food ONLY',
          reason: 'These obligate carnivores will starve if provided with only dry flakes or pellets.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'fast aggressive feeders',
          reason: 'They will be outcompeted for food and slowly starve in the presence of fast-swimming tankmates.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'match source water salinity',
          reason: 'Switching between fresh and brackish water causes fatal osmotic shock.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'multiple caves',
          reason: 'Multiple hiding spots allow males to establish territories and reduce aggression.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '0-6',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 1,
      territorial: 4,
    },
    
    activity: {
      level: 'low',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 4,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Live or frozen food only', 
      'Multiple caves', 
      'Stable salinity',
      'Target feeding',
      'Source water matching',
    ],

    proTips: [
      "Use a turkey baster to deliver food directly to their cave to ensure they eat before other fish arrive.",
      "Provide plenty of snail shells or small caves to allow males to establish their own territories.",
      "Always verify if the stock is wild-caught or tank-raised to determine the correct salinity requirements."
    ],

    commonMistakes: [
      "Feeding dry food leads to starvation as they are obligate carnivores that refuse flakes.",
      "Mixing them with fast-feeding fish results in the gobies being outcompeted for food.",
      "Acclimating them to a different salinity than their source water causes fatal osmotic shock."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['bloodworms', 'brine-shrimp', 'live-food'],
      supplements: ['daphnia', 'tubifex', 'frozen-food'],
      vegetarian: false,
      liveFood: {
        required: true,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 20,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Maintain stable salinity levels during water changes to prevent stress.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['ich', 'bacterial-infections', 'internal-wasting-from-starvation', 'osmotic-shock-from-salinity-changes'],
    sensitivities: ['Rapid salinity changes', 'Poor water quality', 'Food competition', 'Dry food diet'],
  },

  scientificContext: {
    wildHabitat: "Inhabiting the coastal waters of Southeast Asia, these fish live in mangrove swamps and tidal streams. They are often found among submerged roots and leaf litter in water that varies from fresh to brackish depending on the tide. This natural variation means the specific salinity requirements depend heavily on the geographic origin of the specimen.",
    sexualDimorphism: "Females appear rounder and fuller in the body, especially when carrying eggs. Males are generally more slender and display brighter yellow coloration when defending a territory.",
    variants: [
      'Brachygobius doriae',
      'Brachygobius xanthozonus',
      'Brachygobius nunus',
    ],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'expert',
    trigger: 'Condition the group with high-quality live foods and provide plenty of suitable caves. A slight increase in temperature and the addition of fresh water can mimic a seasonal change that triggers spawning.',
    fryCare: 'The male guards the eggs inside the cave until they hatch. The tiny fry require microscopic foods like infusoria or rotifers for the first few days. Once they are large enough, they can be fed newly hatched brine shrimp. Raising the fry is difficult due to their small size and specific dietary requirements.',
    notes: 'Breeding is achievable for experienced aquarists but requires preparation of live food cultures for the fry.',
  },
  
  experienceData: {
    successRate: 0.60,
    survivalRate: 0.55,
    
    commonFailures: [
      { issue: 'starvation-despite-feeding', cause: 'refuses-dry-food-needs-live-frozen-only', frequency: 0.45 },
      { issue: 'osmotic-shock-death', cause: 'switched-fresh-brackish-or-wrong-salinity', frequency: 0.22 },
      { issue: 'outcompeted-by-fast-feeders', cause: 'community-tank-gobies-starve', frequency: 0.15 },
      { issue: 'chronic-hiding-stress', cause: 'kept-alone-or-no-caves', frequency: 0.10 },
      { issue: 'poor-water-quality', cause: 'high-nitrates-parameter-swings', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};