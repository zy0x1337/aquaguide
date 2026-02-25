import type { Species } from '../../types/species';

export const blackSkirtTetra: Species = {
  id: 'tetra-004',
  slug: 'black-skirt-tetra',
  imageUrl: '/images/species/black-skirt-tetra.jpg',
  
  funFact: "Often called the Black Widow Tetra, this species is known for the dramatic transformation from a jet-black juvenile to a silvery-grey adult, while retaining its distinctive flowing anal fin.",

  taxonomy: {
    scientificName: 'Gymnocorymbus ternetzi',
    commonName: 'Black Skirt Tetra',
    family: 'Characidae',
    origin: 'South America (Paraguay River Basin: Brazil, Bolivia, Argentina)',
    region: 'South America',
    biotope: 'Slow-moving forest streams and tributaries with dense vegetation and tannin-stained water.',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 5,
    color: 'Juveniles display a deep black body with two vertical bars, while adults naturally fade to a silvery-grey. A long-finned variety is also popular in the aquarium trade.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 20, max: 28, ideal: 24 },
    ph: { min: 6.0, max: 7.8, ideal: 6.8 },
    gh: { min: 5, max: 18 },
    kh: { min: 3, max: 12 },
    flow: 'moderate',
    substrate: 'dark',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.80,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.7,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense planting along the back and sides provides security and reduces aggression by breaking lines of sight. Floating plants are beneficial for diffusing light and mimicking their natural shady environment.',
    hardscape: ['Driftwood', 'Smooth river stones', 'Leaf litter'],
  },

  behavior: {
    tags: ['shoaler', 'semi-aggressive', 'midwater', 'active', 'fin_nipper'],
    minGroupSize: 10,
    description: 'These active schooling fish occupy the middle and upper layers of the aquarium, constantly on the move. They are generally peaceful when kept in sufficient numbers, but they develop a notorious reputation for fin-nipping if crowded or kept in groups that are too small. As they mature, their intense black coloration gradually fades to a softer grey, which is a natural part of the aging process. They are hardy and adaptable, making them an excellent choice for community tanks with appropriately sized tankmates.',
    
    compatibility: {
      goodMates: ['Danios', 'Other Tetras', 'Rasboras', 'Corydoras', 'Peaceful Gouramis'],
      badMates: ['Angelfish', 'Bettas', 'Fancy Guppies', 'Gouramis with long fins'],
      notes: 'They are excellent community fish when kept in groups of ten or more and paired with fast-moving or robust tankmates.',
      
      rules: [
        {
          type: 'avoid',
          target: 'long-finned slow fish (Angelfish, Bettas, Fancy Guppies)',
          reason: 'Young Black Skirt Tetras are notorious fin-nippers that target long, flowing fins.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'large groups of 10+ fish',
          reason: 'Groups smaller than eight become stressed and turn into bullies, while larger schools diffuse aggression.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'juvenile Black Skirts with any slow fish',
          reason: 'Juveniles under one year are significantly more nippy than mature adults.',
          severity: 'medium',
        },
        {
          type: 'requires',
          condition: 'dense planting to break lines of sight',
          reason: 'Visual barriers reduce chasing and nipping by limiting territory visibility.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
        midwater: '10-15',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 3,
      territorial: 1,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'feeding'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 999,
    },
    
    finNipping: {
      risk: 'medium',
      targets: ['long-finned fish', 'slow-moving fish'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Large groups (10+ fish)', 
      'Dense planting', 
      'Dark substrate',
      'Appropriate tankmates',
    ],

    proTips: [
      "Maintaining a group of ten or more effectively eliminates fin-nipping behavior by spreading aggression among the school.",
      "Do not panic when their black color fades to grey; this is a natural sign of maturity, not illness.",
      "Dark substrate and tannins from Indian Almond leaves can help maintain their coloration longer."
    ],

    commonMistakes: [
      "Keeping them in small groups causes stress, leading to aggression toward other tank inhabitants.",
      "Housing them with long-finned species like Bettas results in damaged fins due to nipping.",
      "Mistaking the natural fading of adult coloration for a disease or health issue."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets'],
      supplements: ['bloodworms', 'brine-shrimp', 'daphnia', 'spirulina'],
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
      notes: 'These active fish produce a moderate amount of waste, so regular vacuuming of the substrate is necessary to maintain water quality.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'fin-rot', 'velvet', 'neon-tetra-disease', 'bloat'],
    sensitivities: ['Small groups', 'Poor water quality', 'High nitrates', 'Overcrowding'],
  },

  scientificContext: {
    wildHabitat: "Native to the Paraguay River Basin in South America, this species inhabits slow-moving forest streams and tributaries. These waters are typically stained with tannins from decaying vegetation, creating dim, acidic conditions. They are often found among submerged roots and dense aquatic plants where they find safety from predators. The IUCN currently lists them as Least Concern, though localized habitat changes occur.",
    sexualDimorphism: "Females appear noticeably rounder and fuller-bodied than males, especially when carrying eggs. Males are more slender and often have a slightly more pointed anal fin.",
    variants: [
      'Standard short-fin', 
      'Long-fin Black Skirt', 
      'GloFish Black Skirt'
    ],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Condition the pair with high-protein foods and perform a large water change with slightly cooler water to simulate the rainy season. Spawning often occurs in the early morning.',
    fryCare: 'The parents will consume the eggs, so moving them to a separate rearing tank is essential. Once the fry are free-swimming after three to five days, feed them infusoria or liquid fry food. As they grow, transition them to baby brine shrimp. Keep the rearing tank dimly lit to encourage healthy development.',
    notes: 'Breeding is relatively easy, but raising the tiny fry requires a separate tank and microscopic food sources.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'fin nipping harassment', cause: 'small groups under 8 fish', frequency: 0.38 },
      { issue: 'damaged angelfish betta fins', cause: 'paired with long finned slow fish', frequency: 0.25 },
      { issue: 'color fading panic', cause: 'natural aging mistaken for illness', frequency: 0.15 },
      { issue: 'stress from bare tanks', cause: 'no visual barriers or planting', frequency: 0.12 },
      { issue: 'bullied by larger fish', cause: 'mixed with aggressive species', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 140, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};