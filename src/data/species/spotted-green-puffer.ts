import type { Species } from '../../types/species';

export const dichotomyctereNigroviridis: Species = {
  id: 'puffer-spotted-green',
  slug: 'spotted-green-puffer',
  imageUrl: '/images/species/spotted-green-puffer.jpg',

  imageCredit: {
    photographer: 'Natural History Museum University of Pisa',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dichotomyctere_nigroviridis_Natural_History_Museum_University_of_Pisa_(cropped).jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  
  funFact: "The Spotted Green Puffer is a highly adaptable euryhaline species, capable of living in freshwater, brackish, and even full marine conditions. They possess a beak formed by fused teeth that grows continuously and must be worn down by consuming hard-shelled prey like snails.",

  taxonomy: {
    scientificName: 'Dichotomyctere nigroviridis',
    commonName: 'Spotted Green Puffer',
    family: 'Tetraodontidae',
    origin: 'Southeast Asia (Indonesia, Philippines, Thailand, Vietnam)',
    region: 'Asia',
    biotope: 'Varied environments including freshwater rivers, brackish estuaries, and coastal marine waters.',
  },

  visuals: {
    iconShape: 'globiform',
    adultSizeCM: 15,
    color: 'A greenish dorsal surface with distinct black spots covering the body and a white belly. A characteristic dark ring often encircles the eye. They can change color intensity based on mood and environment.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 150,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 7.5, max: 8.5, ideal: 8.0 },
    gh: { min: 12, max: 30 },
    kh: { min: 8, max: 20 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 100,
      verticalCM: 40,
      territories: 1,
    },
    
    bioloadMultiplier: 2.5,
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'Plants are often uprooted or nipped. Use hardy, tough species attached to wood or rock if necessary. They prefer open swimming space.',
    hardscape: ['Driftwood', 'Large stones', 'PVC pipes', 'Clay pots'],
  },

  behavior: {
    tags: ['predator', 'territorial', 'intelligent'],
    minGroupSize: 1,
    description: 'An intelligent and curious fish that recognizes its owner. They are aggressive and territorial, especially towards their own kind. They spend time patrolling the tank and investigating decorations. They are known to be fin nippers and will harass slow-moving tankmates.',
    
    compatibility: {
      goodMates: ['None recommended', 'Fast robust fish in very large tanks'],
      badMates: ['Slow moving fish', 'Long finned fish', 'Small fish', 'Shrimp', 'Snails', 'Other puffers'],
      notes: 'Ideally kept in a species-only tank. They are hostile towards most other fish and will eat invertebrates. Keeping multiple puffers requires a very large tank with many hiding spots to diffuse aggression.',
      
      rules: [
        {
          type: 'requires',
          condition: 'hard alkaline water with added salt',
          reason: 'While often sold as freshwater fish, they thrive best in brackish conditions (specific gravity 1.005-1.010) which prevents disease and improves longevity.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'weekly snails for dental health',
          reason: 'Their teeth grow continuously and will overgrow without hard-shelled foods, leading to starvation.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'copper medications',
          reason: 'As scaleless fish, they are highly sensitive to copper and many other medications.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '0',
        bottom: '0',
      },
    },
    
    aggressionLevel: {
      intraspecific: 8,
      interspecific: 7,
      territorial: 9,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'high',
      targets: ['long finned fish', 'slow moving fish'],
    },
  },

  care: {
    difficulty: 'expert',
    diet: 'carnivore',
    effort: 'high',
    cost: 'medium',
    specialRequirements: [
      'Brackish water conditions preferred', 
      'Hard shelled foods for beak maintenance', 
      'Species only tank', 
      'Copper free medications',
    ],

    proTips: [
      "Add marine salt to the water to achieve a specific gravity of 1.005-1.010 to ensure long term health.",
      "Feed hard-shelled foods like snails, shrimp with shell, and clams to wear down their teeth.",
      "They are messy eaters; excellent filtration and frequent water changes are mandatory."
    ],

    commonMistakes: [
      "Keeping them in soft acidic freshwater leads to disease and early death.",
      "Housing them with peaceful community fish results in the community fish being attacked.",
      "Failing to feed hard-shelled prey leads to beak overgrowth requiring manual trimming."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['snails', 'frozen-krill', 'mussels', 'crayfish'],
      supplements: ['bloodworms'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 50,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'High waste production necessitates frequent large water changes. Ensure new water matches the salinity and parameters of the tank.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 150,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'strong',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 15,
    commonDiseases: ['ich', 'velvet', 'internal parasites', 'beak overgrowth'],
    sensitivities: ['Copper medications', 'Low salinity', 'Poor water quality', 'Sharp decor'],
  },

  scientificContext: {
    wildHabitat: "Found in a wide range of habitats from freshwater streams to fully marine coastal waters in Southeast Asia. They migrate between these environments during different life stages.",
    sexualDimorphism: "Males generally have a more intense yellow coloration on the belly and dorsal surface compared to females. Females appear rounder when gravid.",
    variants: ['Green Puffer', 'Topaz Puffer'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Spawning has been reported in brackish and marine conditions, but raising the fry is extremely difficult due to the complex larval stages.',
    fryCare: 'Fry require extremely small foods and specific water parameters. Success in home aquaria is rare.',
    notes: 'Not bred regularly in captivity.',
  },
  
  experienceData: {
    successRate: 0.45,
    survivalRate: 0.40,
    
    commonFailures: [
      { issue: 'starvation', cause: 'beak-overgrowth-preventing-eating', frequency: 0.35 },
      { issue: 'disease', cause: 'kept-in-soft-freshwater', frequency: 0.30 },
      { issue: 'aggression', cause: 'housed-with-incompatible-fish', frequency: 0.20 },
      { issue: 'medication-toxicity', cause: 'exposure-to-copper', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 100, max: 250, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};