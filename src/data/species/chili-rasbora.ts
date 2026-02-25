import type { Species } from '../../types/species';

export const chiliRasbora: Species = {
  id: 'chili-rasbora',
  slug: 'chili-rasbora',
  imageUrl: '/images/species/chili-rasbora.jpg',
  
  funFact: "Among the smallest fish in the hobby, the Chili Rasbora glows with an intense red hue that resembles a burning ember against a dark backdrop.",

  taxonomy: {
    scientificName: 'Boraras brigittae',
    commonName: 'Chili Rasbora',
    family: 'Cyprinidae',
    origin: 'Indonesia (Borneo - southwestern regions, peat swamp forests)',
    region: 'Asia',
    biotope: 'Blackwater peat swamp streams and forest pools with extremely soft, acidic, tannin-stained water and dense vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2,
    color: 'Males display a brilliant red-orange body with a distinct black stripe, while females are slightly duller and rounder. Dark substrate is essential to showcase their vivid colors.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 30,
    tempC: { min: 23, max: 28, ideal: 26 },
    ph: { min: 4.0, max: 7.0, ideal: 6.0 },
    gh: { min: 1, max: 6 },
    kh: { min: 0, max: 4 },
    flow: 'low',
    substrate: 'dark-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 25,
      territories: 0.3,
    },
    
    bioloadMultiplier: 0.2,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense planting is mandatory as these shy fish require thick vegetation to feel secure. Floating plants help diffuse the light, mimicking their natural shady environment.',
    hardscape: ['Driftwood', 'Leaf litter', 'Smooth stones'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'nano', 'shy', 'colorful', 'active'],
    minGroupSize: 12,
    description: 'These tiny cyprinids are peaceful and thrive in large groups where they exhibit fascinating schooling behavior. They are somewhat timid and will remain hidden in sparse setups, but become confident and active in heavily planted tanks. Males often display vibrant colors to attract mates, engaging in gentle courtship chases through the vegetation.',
    
    compatibility: {
      goodMates: ['Ember Tetras', 'Pygmy Corydoras', 'Otocinclus', 'Cherry Shrimp', 'Kuhli Loaches'],
      badMates: ['Large fish', 'Aggressive species', 'Fast feeders', 'Bettas'],
      notes: 'Best kept in a species-only tank or with other peaceful nano fish to ensure they get enough food.',
      
      rules: [
        {
          type: 'requires',
          condition: 'groups of 12-20+ fish',
          reason: 'Small groups lead to extreme shyness and stress, causing the fish to hide constantly.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'very densely planted tank with floating plants',
          reason: 'Without dense cover, these shy fish will refuse to come out into the open.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'any fish over 2 inches',
          reason: 'Their tiny size makes them an easy snack for even moderately sized community fish.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'soft acidic water (GH 1-6, pH 4.5-7.0)',
          reason: 'Hard water causes stress and fades their signature red coloration.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0-8,
        midwater: '12-20',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
      interspecific: 0,
      territorial: 1,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 10,
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
      'Groups of 12-20+', 
      'Dense planting', 
      'Soft acidic water', 
      'Dark substrate', 
      'Gentle water flow',
      'Small frequent feedings',
    ],

    proTips: [
      "A larger group size transforms these fish from nervous hiders into a confident, vibrant school.",
      "Use RO water or rainwater mixed with tap water to achieve the necessary low mineral content.",
      "Feed small portions multiple times a day to accommodate their tiny stomachs."
    ],

    commonMistakes: [
      "Keeping them in small groups results in fish that hide constantly and lose their color.",
      "Placing them in a tank with strong lighting and no floating plants causes severe stress.",
      "Housing them with fast-eating tankmates leads to starvation as they are slow feeders."
    ],
    
    feeding: {
      frequency: 'three-times-daily',
      primaryFoods: ['micro-pellets', 'crushed-flakes'],
      supplements: ['brine-shrimp', 'daphnia', 'spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 20,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Perform small, frequent water changes to maintain pristine water quality without altering the chemistry drastically.',
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
    lifespanYears: 6,
    commonDiseases: ['ich', 'velvet', 'internal-parasites', 'starvation', 'stress-fading'],
    sensitivities: ['Hard water', 'High nitrates', 'Strong flow', 'Bright lighting', 'Large tankmates'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the peat swamp forests of Borneo, this species resides in shallow, stagnant waters stained dark by decomposing organic matter. These environments are characterized by extremely low mineral content and high acidity, providing a unique ecological niche. The water is typically warm and shaded by overhanging vegetation, creating a dim, tea-colored habitat.",
    sexualDimorphism: "Males are smaller and exhibit a much more intense red coloration, particularly when courting. Females possess a duller orange hue and a noticeably rounder belly, especially when carrying eggs.",
    variants: ['Standard wild type'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Breeding is encouraged by maintaining soft, acidic water and feeding the group high-quality live foods to condition the females. Spawning often occurs in the early morning hours within dense fine-leaved plants.',
    fryCare: 'The microscopic fry require infusoria or green water for the first few days as their mouths are too small for most commercial foods. They grow slowly and need pristine water conditions to develop successfully. Because adults will predate on eggs and fry, a dedicated rearing tank or dense moss provides the best chance for survival.',
    notes: 'They are continuous spawners that will scatter eggs daily in the right conditions.',
  },
  
  experienceData: {
    successRate: 0.65,
    survivalRate: 0.60,
    
    commonFailures: [
      { issue: 'constant-hiding-invisible-fish', cause: 'small-groups-under-12-or-sparse-planting', frequency: 0.40 },
      { issue: 'stress-faded-colors-death', cause: 'hard-water-over-GH-8', frequency: 0.25 },
      { issue: 'eaten-by-tankmates', cause: 'mixed-with-larger-fish', frequency: 0.15 },
      { issue: 'starvation', cause: 'underfeeding-or-outcompeted-by-faster-fish', frequency: 0.12 },
      { issue: 'exhaustion-from-flow', cause: 'strong-filter-current', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 70, max: 180, currency: 'EUR' },
      monthly: { min: 12, max: 30, currency: 'EUR' },
    },
  },
};