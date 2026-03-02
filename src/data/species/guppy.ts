import type { Species } from '../../types/species';

export const poeciliaReticulata: Species = {
  id: 'guppy-001',
  slug: 'guppy',
  imageUrl: '/images/species/guppy.jpg',
  
  funFact: "The Guppy is one of the most popular freshwater aquarium fish species, renowned for its adaptability and vibrant colors. Females can store sperm for up to eight months, allowing them to produce multiple batches of fry from a single mating, which contributes to their reputation for prolific breeding.",

  taxonomy: {
    scientificName: 'Poecilia reticulata',
    commonName: 'Guppy / Million Fish',
    family: 'Poeciliidae',
    origin: 'South America (Venezuela, Trinidad, Barbados) and introduced globally',
    region: 'South America',
    biotope: 'Highly adaptable; found in slow-moving streams, ditches, and pools with varying water conditions.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'Males are smaller and exhibit an incredible variety of colors and patterns due to selective breeding. Females are larger with a rounded belly and typically have a silvery-grey body with a gravid spot near the anal fin.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 18, max: 28, ideal: 24 },
    ph: { min: 6.8, max: 8.0, ideal: 7.5 },
    gh: { min: 8, max: 20 },
    kh: { min: 5, max: 15 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.6,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 1.0,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense planting, particularly with fine-leaved plants or floating plants, is essential to provide hiding spots for fry and reduce stress.',
    hardscape: ['Driftwood', 'Smooth stones'],
  },

  behavior: {
    tags: ['peaceful', 'livebearer', 'schooler', 'active'],
    minGroupSize: 5,
    description: 'A peaceful, active fish that thrives in groups. Males constantly display to females. They are social and do well in community tanks but are prolific breeders, leading to rapid population growth if males and females are kept together.',
    
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Corydoras', 'Mollies', 'Platies', 'Gouramis', 'Snails'],
      badMates: ['Tiger Barbs', 'Serpae Tetras', 'Bettas', 'Large Cichlids'],
      notes: 'Avoid housing with fin-nipping species that target their long fins. Best kept in a ratio of one male to two or three females to prevent females from being harassed excessively.',
      
      rules: [
        {
          type: 'requires',
          condition: 'ratio of 1 male to 2-3 females',
          reason: 'Males constantly court females. Without multiple females to divide his attention, a single female will be stressed and harassed.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'cover for fry',
          reason: 'Adults eat their own fry. Dense planting or spawning mops are necessary if the keeper intends to raise the young.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 1,
      territorial: 1,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
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
      'Groups with more females than males', 
      'Hard water preferred', 
      'Regular water changes', 
      'Cover for fry',
    ],

    proTips: [
      "They thrive in hard, alkaline water. In soft water, they are more prone to disease.",
      "Feed a varied diet including vegetable matter to keep them healthy.",
      "They breed easily; separate the sexes if you do not want a population explosion."
    ],

    commonMistakes: [
      "Keeping only males and females together without planning for fry leads to overpopulation.",
      "Housing them with fin-nipping species ruins their elaborate fins.",
      "Acclimating them too quickly to different water parameters can cause shock."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets'],
      supplements: ['bloodworms', 'brine-shrimp', 'vegetables'],
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
      notes: 'Regular water changes are important due to their high bioload relative to size, especially in breeding colonies.',
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
    lifespanYears: 3,
    commonDiseases: ['ich', 'fin-rot', 'velvet', 'internal-parasites'],
    sensitivities: ['Soft water', 'Ammonia', 'Temperature shock'],
  },

  scientificContext: {
    wildHabitat: "Native to northeastern South America. They are highly adaptable and have been introduced to many environments worldwide for mosquito control. They inhabit a wide range of freshwater habitats.",
    sexualDimorphism: "Males are smaller, brightly colored, and have a modified anal fin (gonopodium) used for mating. Females are larger, rounder, and usually lack the elaborate color patterns of males.",
    variants: ['Fancy Guppy', 'Endler Guppy', 'Delta Tail', 'Veil Tail', 'Moscow Guppy'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger: 'Breeding occurs readily in mixed-sex tanks. No specific triggers are needed, though warmer water can speed up gestation.',
    fryCare: 'Fry are born free-swimming and are large enough to eat crushed flakes immediately. Provide plenty of cover to protect them from adults.',
    notes: 'Females can store sperm for months, allowing them to produce multiple broods from a single encounter.',
  },
  
  experienceData: {
    successRate: 0.95,
    survivalRate: 0.90,
    
    commonFailures: [
      { issue: 'harassment', cause: 'imbalanced-male-to-female-ratio', frequency: 0.20 },
      { issue: 'overpopulation', cause: 'uncontrolled-breeding', frequency: 0.40 },
      { issue: 'fin-damage', cause: 'housed-with-fin-nippers', frequency: 0.15 },
      { issue: 'water-quality', cause: 'overstocking', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 20, max: 60, currency: 'EUR' },
      monthly: { min: 3, max: 10, currency: 'EUR' },
    },
  },
};