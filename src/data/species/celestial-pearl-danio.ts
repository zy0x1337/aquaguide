import type { Species } from '../../types/species';

export const celestialPearlDanio: Species = {
  id: 'danio-001',
  slug: 'celestial-pearl-danio',
  imageUrl: '/images/species/celestial-pearl-danio.jpeg',
  
  funFact: "Often called the Galaxy Rasbora, this tiny fish displays a starry pattern that made it an instant sensation upon its discovery in 2006.",

  taxonomy: {
    scientificName: 'Danio margaritatus',
    commonName: 'Celestial Pearl Danio',
    family: 'Cyprinidae',
    origin: 'Myanmar (Inle Lake region, Hopong area - shallow seasonal ponds)',
    region: 'Asia',
    biotope: 'Shallow, vegetated seasonal ponds and small streams fed by springs.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2.5,
    color: 'The body features a deep blue background sprinkled with pearly white or yellow spots, resembling a starry sky. Males display vibrant red orange fins with black striping, while females are more subdued in coloration.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 20, max: 26, ideal: 22 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 2, max: 12 },
    kh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'dark-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 25,
      territories: 0.5,
    },
    
    bioloadMultiplier: 0.3,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense planting with fine leaved stems and floating plants provides the security these shy fish need to display their best colors. Dark substrate enhances their galaxy like patterning significantly.',
    hardscape: ['Smooth river stones', 'Driftwood', 'Leaf litter', 'Caves'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'nano', 'colorful', 'active'],
    minGroupSize: 10,
    description: 'These small cyprinids are renowned for their dazzling coloration and active nature, spending their day foraging among plants in the middle and lower water layers. Males engage in fascinating, harmless sparring matches where they circle one another with fins flared to assert dominance. While generally peaceful, they can be timid and require a well planted environment to feel secure enough to show their full vibrancy. In a large group, they become bolder and their complex social interactions become a captivating display for the observer.',
    
    compatibility: {
      goodMates: ['Chili Rasboras', 'Ember Tetras', 'Pygmy Corydoras', 'Otocinclus', 'Cherry Shrimp'],
      badMates: ['Large fish', 'Aggressive fish', 'Fast feeders', 'Bettas'],
      notes: 'They are easily intimidated by larger tankmates and thrive best in a species-specific setup or with other peaceful nano fish.',
      
      rules: [
        {
          type: 'requires',
          condition: 'groups of 10+ fish',
          reason: 'Small groups lead to stress and faded coloration because they rely on safety in numbers.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'densely planted tank with floating plants',
          reason: 'Without dense plant cover, these shy fish will hide constantly and refuse to come out.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'large or aggressive fish',
          reason: 'Their tiny size makes them an easy target for bullying or predation.',
          severity: 'high',
        },
        {
          type: 'warning',
          condition: 'female-biased ratio (2-3 females per male)',
          reason: 'A ratio favoring females helps disperse male attention and reduces sparring intensity.',
          severity: 'low',
        },
      ],
      
      idealTankmates: {
        surface: 0-6,
        midwater: '10-20',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 0,
      territorial: 2,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 8,
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
      'Groups of 10 or more', 
      'Dense planting', 
      'Dark substrate', 
      'Cool water temperature', 
      'Female biased ratio',
    ],

    proTips: [
      "Keep them in cooler water around 22 degrees Celsius to maintain health and encourage natural breeding behavior.",
      "A darker substrate highlights their iridescent spotting and makes their colors appear much more vivid.",
      "Feed a varied diet of small live or frozen foods to enhance their coloration and stimulate breeding."
    ],

    commonMistakes: [
      "Keeping them in warm tropical temperatures above 26 degrees Celsius causes stress and shortens their lifespan.",
      "Housing them with large or boisterous fish prevents them from competing for food and causes them to hide.",
      "Keeping groups smaller than ten individuals leads to shyness and a lack of the social interaction they need."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'crushed-flakes'],
      supplements: ['bloodworms', 'daphnia', 'brine-shrimp', 'spirulina'],
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
      vacuumingNeeded: false,
      notes: 'Keep the water cool and clean, as they are sensitive to high nitrates and elevated temperatures.',
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
    commonDiseases: ['ich', 'velvet', 'internal-parasites', 'stress-fading'],
    sensitivities: ['Warm water', 'High nitrates', 'Large tankmates', 'Sparse planting'],
  },

  scientificContext: {
    wildHabitat: "Endemic to a small area near Hopong in Myanmar, this species inhabits shallow ponds and streams fed by springs. These waters are clear, cool, and dense with aquatic vegetation. The specific locality is restricted, making them vulnerable to over collection, though captive breeding has reduced pressure on wild populations. They are currently listed as Near Threatened due to their limited range.",
    sexualDimorphism: "Males are smaller and more vibrantly colored, displaying bright red orange fins and intense blue bodies. Females are larger, rounder, and possess a more subdued coloration with yellowish fins.",
    variants: ['Wild type', 'Line bred for enhanced red'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Spawning is triggered by cooler temperatures and a diet rich in live foods. A drop in temperature to around 18 or 19 degrees Celsius significantly increases egg hatch rates compared to warmer conditions.',
    fryCare: 'The tiny eggs are scattered among fine leaved plants and hatch within a few days. Parents often eat their own eggs, so providing dense moss or removing the adults can increase survival rates. The fry are very small and require infusoria or liquid fry food for the first week before they can accept newly hatched brine shrimp. They grow slowly and need pristine water conditions to develop correctly.',
    notes: 'Breeding is frequent in well maintained tanks, but fry require very small food items initially.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'constant-hiding-faded-colors', cause: 'small-groups-under-10-or-sparse-planting', frequency: 0.35 },
      { issue: 'stress-and-disease', cause: 'water-too-warm-over-26C', frequency: 0.20 },
      { issue: 'intimidation-by-tankmates', cause: 'mixed-with-large-or-aggressive-fish', frequency: 0.18 },
      { issue: 'washed-out-colors', cause: 'light-substrate-or-poor-diet', frequency: 0.15 },
      { issue: 'breeding-failure', cause: 'too-warm-water-for-egg-hatching', frequency: 0.12 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 200, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};