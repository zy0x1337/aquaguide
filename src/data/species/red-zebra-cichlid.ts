import type { Species } from '../../types/species';

export const maylandiaEstherae: Species = {
  id: 'cichlid-red-zebra',
  slug: 'red-zebra-cichlid',
  imageUrl: '/images/species/red-zebra-cichlid.jpg',

  imageCredit: {
    photographer: 'Grzegorz Polak (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pyszczak.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  
  funFact: "The Red Zebra Cichlid exhibits a rare phenomenon in the fish world called polychromatism, where males can display entirely different color morphs. While most males are powder blue, some populations produce orange or red males, leading to the confusing common name 'Red Zebra' for a fish that is often blue.",

  taxonomy: {
    scientificName: 'Maylandia estherae',
    commonName: 'Red Zebra Cichlid',
    family: 'Cichlidae',
    origin: 'Lake Malawi (Africa - rocky coastlines)',
    region: 'Africa',
    biotope: 'Rocky littoral zones of Lake Malawi with abundant algae growth on rocks.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 12,
    color: 'Males are typically bright powder blue or orange red depending on the morph. Females are often beige or brown, or display an Orange Blotched OB pattern. They have a stocky body typical of Mbuna cichlids.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 200,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 7.5, max: 8.5, ideal: 8.0 },
    gh: { min: 10, max: 20 },
    kh: { min: 8, max: 15 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 100,
      verticalCM: 40,
      territories: 3,
    },
    
    bioloadMultiplier: 2.0,
  },

  habitat: {
    planting: 'none',
    plantingNotes: 'They are avid diggers and will uproot most plants. Anubias attached to rocks may survive.',
    hardscape: ['Rocks', 'Caves', 'Piles of stones'],
  },

  behavior: {
    tags: ['territorial'],
    minGroupSize: 4,
    description: 'A typical Mbuna cichlid: aggressive, territorial, and active. Males are highly intolerant of other males. They spend their time grazing algae from rocks and defending their territory. They dig extensively in the substrate.',
    
    compatibility: {
      goodMates: ['Other Mbuna species', 'Synodontis catfish', 'Lake Malawi Haplochromis'],
      badMates: ['Peaceful community fish', 'South American cichlids', 'Slow moving fish', 'Invertebrates'],
      notes: 'Best kept in a Lake Malawi species tank. Overcrowding is often used to spread out aggression, requiring heavy filtration.',
      
      rules: [
        {
          type: 'requires',
          condition: 'harem ratio 1 male to 3 females',
          reason: 'Males are relentless in their pursuit of females. Multiple females are necessary to spread the aggression and prevent a single female from being exhausted.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'hard alkaline water',
          reason: 'They are adapted to the specific chemistry of Lake Malawi. Soft acidic water leads to health issues and death.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'rock piles for territory',
          reason: 'They need visual barriers and caves to establish territories and escape aggression.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '15-20',
        bottom: '2-4',
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
      type: 'harem',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'medium',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'herbivore',
    effort: 'medium',
    cost: 'low',
    specialRequirements: [
      'Hard alkaline water', 
      'Harem group', 
      'Spirulina based diet', 
      'Overcrowding with filtration', 
      'Rock pile setup',
    ],

    proTips: [
      "Feed a diet rich in vegetable matter like spirulina flakes to prevent Malawi Bloat, a common fatal condition.",
      "Arrange rocks to create distinct territories and caves to reduce aggression.",
      "Perform frequent water changes to manage the high bioload resulting from the recommended overcrowding."
    ],

    commonMistakes: [
      "Feeding high protein foods leads to bloat.",
      "Keeping two males in a standard tank results in the death of the subordinate.",
      "Using driftwood can lower pH, which is detrimental to their health."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['flakes', 'algae-wafers', 'vegetables', 'spirulina'],
      supplements: ['brine-shrimp'],
      vegetarian: true,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'High waste producers. Overcrowding necessitates excellent biological filtration and frequent large water changes.',
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
    lifespanYears: 10,
    commonDiseases: ['malawi bloat', 'ich', 'hole in the head'],
    sensitivities: ['Soft water', 'High protein diet', 'Ammonia'],
  },

  scientificContext: {
    wildHabitat: "Endemic to Lake Malawi. They inhabit rocky areas known as the 'mbuna' habitat, grazing on algae (aufwuchs) growing on the rocks. They are maternal mouthbrooders.",
    sexualDimorphism: "Males are larger and brightly colored (blue or orange). Females are smaller and usually drab or Orange Blotched (OB).",
    variants: ['Red Zebra (Orange male)', 'Blue Zebra (Blue male)', 'Orange Blotch OB'],
  },

  breeding: {
    method: 'mouthbrooder',
    difficulty: 'beginner',
    trigger: 'Breeding occurs readily in suitable water conditions. The male displays to the female, often on a flat rock.',
    fryCare: 'The female holds the eggs in her mouth for about 21 days. She should be isolated to release the fry to prevent them from being eaten.',
    notes: 'Crossbreeding between different color morphs is common and often discouraged by purists.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'aggression death', cause: 'multiple-males-in-small-tank', frequency: 0.30 },
      { issue: 'malawi bloat', cause: 'diet-high-in-protein', frequency: 0.25 },
      { issue: 'water chemistry shock', cause: 'soft-water-environment', frequency: 0.20 },
      { issue: 'hybridization', cause: 'mixed-color-morphs', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 100, max: 300, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};