import type { Species } from '../../types/species';

export const tetraodonMbu: Species = {
  id: 'tetraodon-mbu',
  slug: 'tetraodon-mbu',
  imageUrl: '/images/species/tetraodon-mbu.jpg',
  
  funFact: "The world's largest freshwater pufferfish, reaching 67cm. They are highly intelligent, often recognizing their owners, but they have teeth that grow continuously and require a diet of hard-shelled prey to prevent overgrowth.",

  taxonomy: {
    scientificName: 'Tetraodon mbu',
    commonName: 'Giant Pufferfish',
    family: 'Tetraodontidae',
    origin: 'Central Africa (Congo River Basin, Tanganyika Basin)',
    region: 'Africa',
    biotope: 'Large rivers and lakes with rocky substrates and clear, well-oxygenated water.',
  },

  visuals: {
    iconShape: 'globiform',
    adultSizeCM: 67,
    color: 'Golden-yellow to olive-green with intricate brown maze-like patterns. Each individual has a unique pattern. They have a powerful beak formed from fused teeth.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 1500,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 7.0, max: 8.0, ideal: 7.5 },
    gh: { min: 10, max: 25 },
    kh: { min: 5, max: 15 },
    flow: 'moderate',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 250,
      verticalCM: 80,
      territories: 1,
    },
    
    bioloadMultiplier: 30.0,
  },

  habitat: {
    planting: 'none',
    plantingNotes: 'They destroy live plants. A decor of large rocks and driftwood to create caves is recommended.',
    hardscape: ['Massive rock caves', 'Large smooth river rocks', 'Driftwood branches'],
  },

  behavior: {
    tags: ['intelligent', 'predator', 'territorial'],
    minGroupSize: 1,
    description: 'A highly intelligent species that can recognize its owner and often begs for food. They are active predators that use their beak to crush shells. They must be kept alone as they will attack and eat any tankmate. They are famous for their ability to inflate when threatened.',
    
    compatibility: {
      goodMates: [],
      badMates: ['All fish', 'All invertebrates', 'Other puffers'],
      notes: 'Must be kept in a solitary tank. They are aggressive predators that will eventually kill or eat any other creature in the aquarium.',
      
      rules: [
        {
          type: 'requires',
          condition: '1500L minimum for single adult',
          reason: 'They grow massive and produce a huge bioload. Smaller tanks lead to stunting and water quality crashes.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'weekly live snails for dental health',
          reason: 'Their teeth grow continuously. Without hard-shelled prey to grind them down, the teeth will overgrow, preventing the fish from eating.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'all tankmates',
          reason: 'They are apex predators. Any fish or invertebrate sharing the tank will eventually be attacked and killed.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'copper medications and formalin',
          reason: 'Scaleless fish are extremely sensitive to these chemicals, which are often fatal.',
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
      intraspecific: 10,
      interspecific: 10,
      territorial: 9,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'high',
      targets: ['all tankmates'],
    },
  },

  care: {
    difficulty: 'expert',
    diet: 'carnivore',
    effort: 'high',
    cost: 'high',
    specialRequirements: [
      '1500L+ tank', 
      'Heavy filtration', 
      'Weekly 50-60% water changes', 
      'Weekly live snails', 
      'Solitary setup',
    ],

    proTips: [
      "Feed hard-shelled foods like snails and clams weekly to wear down their continuously growing teeth.",
      "They are sensitive to common medications; use only puffer-safe treatments.",
      "Despite their size, they are intelligent and benefit from interaction and tank re-arrangement for enrichment."
    ],

    commonMistakes: [
      "Keeping them in tanks that are too small leads to severe health issues.",
      "Failing to provide hard-shelled prey leads to dental overgrowth and starvation.",
      "Attempting to keep them with other fish results in the death of the tankmates."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['live-snails-weekly', 'frozen-whole-fish'],
      supplements: ['frozen-squid', 'frozen-krill'],
      vegetarian: false,
      liveFood: {
        required: true,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 50,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Massive water changes are required due to their enormous bioload. Maintain pristine water quality to prevent disease.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 500,
      },
      filter: {
        required: true,
        type: 'canister-plus-sump',
        flowRate: 'strong',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 20,
    commonDiseases: ['dental-overgrowth', 'ich', 'internal-parasites'],
    sensitivities: ['Copper', 'Formalin', 'Ammonia', 'Poor water quality'],
  },

  scientificContext: {
    wildHabitat: "Inhabits deep river channels and lakes in the Congo Basin. They are ambush predators feeding on mollusks and crustaceans. Their ability to inflate is a defense mechanism against predation. They are not currently endangered but are sensitive to habitat degradation.",
    sexualDimorphism: "Visual sexing is nearly impossible. Differences are extremely subtle, and most keepers never determine the sex of their fish.",
    variants: ['Wild type'],
  },

  breeding: {
    method: 'unknown',
    difficulty: 'impossible',
    trigger: 'Breeding has not been achieved in home aquariums. It would require massive tanks and specific environmental triggers that are currently unknown.',
    fryCare: 'No captive breeding data exists.',
    notes: 'All specimens in the trade are wild-caught.',
  },
  
  experienceData: {
    successRate: 0.20,
    survivalRate: 0.25,
    
    commonFailures: [
      { issue: 'dental-overgrowth-starvation', cause: 'no-live-snails-teeth-grew-preventing-eating', frequency: 0.40 },
      { issue: 'stunted-growth-organ-failure', cause: 'tank-too-small-under-1500L', frequency: 0.30 },
      { issue: 'chronic-ammonia-poisoning', cause: 'inadequate-filtration-bioload-too-high', frequency: 0.15 },
      { issue: 'copper-medication-death', cause: 'used-standard-ich-treatment-with-copper', frequency: 0.10 },
      { issue: 'suffocation-power-outage', cause: 'no-backup-oxygen-system', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 2000, max: 5000, currency: 'EUR' },
      monthly: { min: 60, max: 150, currency: 'EUR' },
    },
  },
};