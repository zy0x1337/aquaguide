import type { Species } from '../../types/species';

export const aphaniusFasciatus: Species = {
  id: 'aphanius-fasciatus',
  slug: 'mediterranean-killifish',
  imageUrl: '/images/species/mediterranean-killifish.jpg',

  imageCredit: {
    photographer: 'Natural History Museum of the University of Pisa',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aphanius_fasciatus_Natural_History_Museum_University_of_Pisa_male.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  
  funFact: "The Mediterranean Killifish is a euryhaline species, meaning it can thrive in a wide range of salinities, from pure fresh water to hypersaline conditions much saltier than the ocean. Males display striking metallic blue bars and yellow fins to attract the more camouflaged females.",

  taxonomy: {
    scientificName: 'Aphanius fasciatus',
    commonName: 'Mediterranean Killifish',
    family: 'Cyprinodontidae',
    origin: 'Mediterranean coastal waters (Southern Europe, North Africa)',
    region: 'Europe',
    biotope: 'Coastal lagoons, salt marshes, and brackish estuaries, often in very shallow water with dense vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 6,
    color: 'Males are highly colorful, featuring silvery sides with 12 to 15 dark vertical bars that shimmer with metallic blue-green iridescence. Fins are often yellow to orange. Females are larger and lack the bright colors, showing a mottled brown pattern for camouflage.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 16, max: 24, ideal: 20 },
    ph: { min: 7.5, max: 9.0, ideal: 8.0 },
    gh: { min: 15, max: 40 },
    kh: { min: 10, max: 20 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 1,
    },
    
    bioloadMultiplier: 0.6,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'They thrive in a densely planted tank. Using hardy plants that tolerate hard, alkaline water and salt, such as Java Fern or Vallisneria, is recommended.',
    hardscape: ['Driftwood', 'Rocks', 'Coconut caves'],
  },

  behavior: {
    tags: ['semi-aggressive', 'brackish'],
    minGroupSize: 4,
    description: 'A hardy and active fish. Males can be aggressive toward each other and are persistent suitors of females. They are best kept in a species-specific tank or with other fish that tolerate hard, alkaline, or brackish water. They tend to occupy the middle and upper levels of the tank.',
    
    compatibility: {
      goodMates: ['Mollies', 'Bumblebee Goby', 'Glassfish', 'Other hardy brackish species'],
      badMates: ['Soft water fish', 'Long finned fish', 'Slow moving fish', 'Small shrimp'],
      notes: 'They are not suitable for the typical soft water community tank. They require hard, alkaline water with the addition of marine salt for long term health.',
      
      rules: [
        {
          type: 'requires',
          condition: 'hard alkaline water with added salt',
          reason: 'They are brackish fish that will deteriorate in soft, acidic freshwater. Adding marine salt mix is crucial for their immune system.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'keeping multiple males',
          reason: 'Males are territorial. Keeping more than one male in a small tank leads to aggression.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'secure lid',
          reason: 'They are capable jumpers, especially when startled.',
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
      intraspecific: 6,
      interspecific: 3,
      territorial: 5,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'medium',
      targets: ['long finned fish'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Hard alkaline water', 
      'Marine salt additive', 
      'Species tank preferred', 
      'Groups with multiple females',
    ],

    proTips: [
      "Add one teaspoon of marine salt per liter of water to replicate their natural environment and prevent disease.",
      "Feed a varied diet of small live and frozen foods to maintain the vibrant colors of the males.",
      "They are excellent mosquito larvae eaters and can be used for mosquito control in outdoor tubs in summer."
    ],

    commonMistakes: [
      "Keeping them in soft, acidic water results in disease and death.",
      "Housing them with delicate community fish leads to stress for both parties.",
      "Not providing enough hiding spots causes stress for females constantly pursued by males."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['bloodworms', 'brine-shrimp', 'daphnia'],
      supplements: ['crushed-flakes', 'spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Regular water changes are important, but remember to add the correct ratio of marine salt to the new water to maintain salinity levels.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
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
    sensitivities: ['Soft water', 'Low salinity', 'Acidic pH'],
  },

  scientificContext: {
    wildHabitat: "Inhabits coastal lagoons and salt marshes around the Mediterranean Sea. They are highly adaptable to fluctuating salinity and temperature. They are considered a species of least concern globally but are protected in some European countries due to localized habitat loss from wetland drainage.",
    sexualDimorphism: "Males are smaller but intensely colored with vertical blue bars and yellow fins. Females are larger, deeper-bodied, and have a mottled brown coloration that provides camouflage among rocks and vegetation.",
    variants: ['Wild Type'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Spawning is triggered by a rise in temperature and abundant food. They spawn among fine leaved plants or spawning mops.',
    fryCare: 'Fry are small and require infusoria or green water for the first few days before accepting baby brine shrimp. The parents will eat the eggs and fry, so removal of the eggs or parents is necessary.',
    notes: 'Breeding is relatively easy in the correct brackish or hard water conditions.',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'osmotic shock', cause: 'kept-in-soft-water', frequency: 0.40 },
      { issue: 'aggression', cause: 'multiple-males-in-small-tank', frequency: 0.25 },
      { issue: 'jumping', cause: 'startled-no-lid', frequency: 0.15 },
      { issue: 'starvation', cause: 'diet-lacking-small-invertebrates', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 30, max: 80, currency: 'EUR' },
      monthly: { min: 5, max: 12, currency: 'EUR' },
    },
  },
};