import type { Species } from '../../types/species';

export const kryptopterusVitreolus: Species = {
  id: 'catfish-glass',
  slug: 'glass-catfish',
  imageUrl: '/images/species/glass-catfish.jpg',

  imageCredit: {
    photographer: 'Martin Fisch (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Glaswelse.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  
  funFact: "The Glass Catfish is one of the few vertebrates with a completely transparent body, allowing you to see its internal organs and backbone. It is also one of the few catfish that swims in the open water column rather than hiding on the bottom.",

  taxonomy: {
    scientificName: 'Kryptopterus vitreolus',
    commonName: 'Glass Catfish / Phantom Catfish',
    family: 'Siluridae',
    origin: 'Thailand (river basins of the Chao Phraya and Mae Klong)',
    region: 'Asia',
    biotope: 'Slow-moving rivers and streams with dense vegetation and tannin-stained water.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 8,
    color: 'Completely transparent body with the internal organs clearly visible. The head is not transparent and is typically silver or slightly opaque. Two long barbels extend from the mouth.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 22, max: 27, ideal: 25 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 2, max: 10 },
    kh: { min: 2, max: 8 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.85,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.6,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'They feel more secure with dense planting and floating plants to diffuse light. Driftwood adds to their natural environment.',
    hardscape: ['Driftwood', 'Submerged branches', 'Leaf litter'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'scaleless', 'shy'],
    minGroupSize: 6,
    description: 'A peaceful, schooling species that swims in the open water column. They are very active during the day but can be shy if kept in small numbers. They rely on their transparency for camouflage. They are sensitive to water quality and medications.',
    
    compatibility: {
      goodMates: ['Neon Tetra', 'Cardinal Tetra', 'Harlequin Rasbora', 'Corydoras', 'Otocinclus', 'Dwarf Shrimp'],
      badMates: ['Large aggressive fish', 'Fin nippers', 'Cichlids', 'Goldfish'],
      notes: 'They must be kept in groups. Solitary individuals become stressed and refuse to eat. Do not keep with boisterous fish that will outcompete them for food.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group-size >= 6',
          reason: 'They are a schooling fish. Lone individuals become withdrawn and stop eating.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'mature tank',
          reason: 'They are sensitive to water quality changes and need an established tank with stable parameters.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'copper medications',
          reason: 'They are scaleless and highly sensitive to copper and other strong medications.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
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
      'Groups of 6+ fish', 
      'Mature tank', 
      'Small live or frozen foods', 
      'Copper free medications',
    ],

    proTips: [
      "They often refuse dry foods initially. Feed live or frozen foods like bloodworms and brine shrimp.",
      "Provide a peaceful environment as they are easily stressed by aggressive tankmates.",
      "Their transparency serves as camouflage; a darker substrate makes them feel more secure."
    ],

    commonMistakes: [
      "Keeping them alone causes severe stress and eventual death.",
      "Introducing them to immature tanks causes losses due to unstable water parameters.",
      "Using copper-based medications is often fatal."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['bloodworms', 'brine-shrimp', 'daphnia'],
      supplements: ['crushed-flakes'],
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
      notes: 'They require pristine water conditions. Regular water changes are essential.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 75,
      },
      filter: {
        required: true,
        type: 'hang-on-back',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 8,
    commonDiseases: ['ich', 'velvet', 'internal parasites'],
    sensitivities: ['Copper medications', 'Ammonia', 'Nitrite', 'Sudden parameter changes'],
  },

  scientificContext: {
    wildHabitat: "Found in slow-moving rivers and streams in Thailand. The water is typically turbid and rich in vegetation. They are often found schooling in open water.",
    sexualDimorphism: "Males are slightly slimmer than females. During breeding, females appear fuller in the belly.",
    variants: ['Wild Type', 'Glass Catfish'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Breeding is rare in home aquaria. It requires specific water conditions and triggers that are not fully understood.',
    fryCare: 'Fry are very small and require infusoria or green water initially.',
    notes: 'There are very few reports of successful breeding in captivity.',
  },
  
  experienceData: {
    successRate: 0.65,
    survivalRate: 0.60,
    
    commonFailures: [
      { issue: 'stress', cause: 'kept-alone-or-in-small-groups', frequency: 0.30 },
      { issue: 'starvation', cause: 'refusal-of-dry-food', frequency: 0.25 },
      { issue: 'medication-toxicity', cause: 'exposure-to-copper', frequency: 0.20 },
      { issue: 'acclimation-shock', cause: 'rapid-water-change', frequency: 0.15 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 8, max: 18, currency: 'EUR' },
    },
  },
};