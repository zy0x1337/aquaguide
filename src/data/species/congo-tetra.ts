import type { Species } from '../../types/species';

export const congoTetra: Species = {
  id: 'tetra-011',
  slug: 'congo-tetra',
  imageUrl: '/images/species/congo-tetra.jpg',
  
  funFact: "The male Congo Tetra is a living rainbow, displaying an iridescent spectrum of colors that shift with the light angle, complemented by elegant, flowing fin extensions.",

  taxonomy: {
    scientificName: 'Phenacogrammus interruptus',
    commonName: 'Congo Tetra',
    family: 'Alestidae',
    origin: 'Central Africa (Congo River Basin - Democratic Republic of Congo)',
    region: 'Africa',
    biotope: 'Large, slow-moving rivers and tributaries with moderate current and dense riparian vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 8.5,
    color: 'Males are renowned for their iridescent scales that shimmer with rainbow colors and long, flowing fin extensions. Females are more subdued in coloration and have shorter, rounder fins.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 200,
    tempC: { min: 23, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 4, max: 18 },
    kh: { min: 2, max: 12 },
    flow: 'moderate',
    substrate: 'dark',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'all',
      preference: 0.80,
    },
    
    spaceNeeds: {
      horizontalCM: 100,
      verticalCM: 40,
      territories: 0,
    },
    
    bioloadMultiplier: 0.60,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Tall plants along the back and sides provide security while leaving the center open for active swimming. Dark substrate is crucial as it reflects light upwards to enhance their iridescent colors.',
    hardscape: ['Driftwood', 'Smooth river stones', 'Indian Almond Leaves'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'active', 'diurnal', 'colorful'],
    minGroupSize: 8,
    description: 'These active schooling fish are a majestic presence in the middle water layers, constantly moving in a loose formation. Males frequently engage in elaborate courtship displays, spreading their fins to showcase their vibrant colors to rivals and potential mates. They are peaceful by nature and rarely show aggression toward other species. A large group is essential to encourage their natural confidence and to see their full range of social interactions. Their movements are graceful, resembling a slow, synchronized dance under the right lighting conditions.',
    
    compatibility: {
      goodMates: ['Larger Tetras', 'Rainbowfish', 'Peaceful Gouramis', 'Synodontis Catfish', 'Larger Corydoras'],
      badMates: ['Fin-nippers', 'Tiger Barbs', 'Aggressive Cichlids', 'Large predators'],
      notes: 'Their long fins make them a target for fin-nippers, so choose tankmates carefully.',
      
      rules: [
        {
          type: 'avoid',
          target: 'fin-nipping species',
          reason: 'The long, flowing fins of males are easily damaged by nipping species.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'group size 8+ fish',
          reason: 'They are schooling fish that become shy and stressed without the security of a group.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'tank length 100cm+ (200L minimum)',
          reason: 'Active swimmers require significant horizontal space to exhibit natural behaviors.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'full-spectrum lighting',
          reason: 'Full-spectrum lighting is necessary to reveal their true rainbow color potential.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'aggressive cichlids',
          reason: 'Their peaceful nature makes them an easy target for bullying by aggressive tankmates.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 0-10,
        midwater: '8-20',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
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
    cost: 'medium',
    specialRequirements: [
      'Full-spectrum LED lighting', 
      'Dark substrate', 
      'Tank length 100cm+', 
      'Groups of 8+',
      'Maturity takes 8-12 months',
    ],

    proTips: [
      "Use full-spectrum LED lighting to bring out their full rainbow iridescence.",
      "A dark substrate enhances their colors by providing a strong contrast.",
      "Feed a varied diet including live or frozen foods to maintain their vibrant sheen."
    ],

    commonMistakes: [
      "Housing them with fin-nippers results in torn fins and severe stress.",
      "Keeping them in small groups causes them to become timid and lose their coloration.",
      "Using standard aquarium lighting fails to showcase their incredible iridescent colors."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'brine-shrimp', 'daphnia'],
      supplements: ['bloodworms', 'spirulina', 'vegetables'],
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
      notes: 'They produce a moderate amount of waste, so regular water changes are necessary to maintain water quality.',
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
      airstone: false,
      lighting: 'high',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'velvet', 'columnaris', 'fin-rot'],
    sensitivities: ['Ammonia spikes', 'Temperature shocks', 'Poor water quality', 'Fin-nipping tankmates'],
  },

  scientificContext: {
    wildHabitat: "Native to the Congo River Basin, this species inhabits clear, slow-moving waters rich in vegetation. They congregate in large schools in the middle water layers, feeding on insects and crustaceans. The water is typically warm and slightly acidic to neutral, stained light amber by tannins. While not currently endangered, their habitat faces localized threats from deforestation and pollution.",
    sexualDimorphism: "Males are significantly more colorful, displaying intense iridescence and distinctive extensions on the middle rays of their caudal fin. Females are larger and rounder in the body, especially when gravid, but lack the vibrant coloration and fin extensions of the males.",
    variants: ['Standard wild type'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Condition the group with high-quality live or frozen foods and slightly raise the temperature. Spawning is often initiated by a large water change with cooler water to simulate the rainy season.',
    fryCare: 'The eggs are scattered among plants and hatch after about six days. The tiny fry are free-swimming shortly after and require microscopic foods like infusoria for the first few days. They grow relatively quickly once they can accept newly hatched brine shrimp. Maintaining excellent water quality is critical during the early stages of development.',
    notes: 'Breeding is moderately difficult, largely due to the need for a separate rearing tank to protect the eggs from the parents.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'disappointing-dull-appearance', cause: 'poor-lighting-or-light-substrate', frequency: 0.35 },
      { issue: 'fin-damage-stress', cause: 'kept-with-fin-nippers-tiger-barbs', frequency: 0.20 },
      { issue: 'stress-hiding-color-loss', cause: 'group-too-small-under-8-fish', frequency: 0.15 },
      { issue: 'ich-outbreak', cause: 'temperature-fluctuation-or-stress', frequency: 0.12 },
      { issue: 'premature-return', cause: 'judged-before-maturity-8-12-months', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 180, max: 400, currency: 'EUR' },
      monthly: { min: 20, max: 40, currency: 'EUR' },
    },
  },
};