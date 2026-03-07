import type { Species } from '../../types/species';

export const microdevarioKubotai: Species = {
  id: 'rasbora-emerald-dwarf',
  slug: 'emerald-dwarf-rasbora',
  imageUrl: '/images/species/emerald-dwarf-rasbora.jpg',

  imageCredit: {
    photographer: 'BottomDog (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Prachtalgenfresser_(Panda_Garra,_Garra_flavatra)_by_Marcin_Adrian.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  
  funFact: "The Emerald Dwarf Rasbora displays a brilliant iridescent green lateral stripe that shimmers under correct lighting conditions. It is a tiny, peaceful schooling fish ideal for nano aquariums.",

  taxonomy: {
    scientificName: 'Microdevario kubotai',
    commonName: 'Emerald Dwarf Rasbora / Green Neon Rasbora',
    family: 'Cyprinidae',
    origin: 'Southeast Asia (Myanmar, Thailand)',
    region: 'Asia',
    biotope: 'Shallow, slow-moving forest streams with dense vegetation and tannin-stained water.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2,
    color: 'A slender body with a brilliant iridescent green or turquoise lateral stripe running from the nose to the tail. The belly is silvery. Males are slightly more colorful and slender than females.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 30,
    tempC: { min: 22, max: 26, ideal: 24 },
    ph: { min: 6.0, max: 7.0, ideal: 6.5 },
    gh: { min: 2, max: 10 },
    kh: { min: 1, max: 5 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.2,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense planting is recommended to provide security. Floating plants help diffuse the light, which encourages them to swim in the open.',
    hardscape: ['Driftwood', 'Leaf litter', 'Submerged branches'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'active', 'nano'],
    minGroupSize: 10,
    description: 'A tiny, peaceful shoaling fish that needs the company of its own kind to feel secure. They are active swimmers but can be shy if the tank is too open or bright. They are perfect inhabitants for a nano planted tank.',
    
    compatibility: {
      goodMates: ['Chili Rasbora', 'Ember Tetra', 'Pygmy Corydoras', 'Dwarf Shrimp', 'Other small peaceful fish'],
      badMates: ['Large fish', 'Active swimmers', 'Fin nippers', 'Goldfish'],
      notes: 'Their small size makes them suitable only for nano community tanks with other tiny species. They should not be kept with fish large enough to eat them.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group-size >= 10',
          reason: 'They are a schooling fish. In small groups, they become shy and spend most of their time hiding.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'tiny foods',
          reason: 'Their mouths are very small. They require micro-pellets, crushed flakes, or live foods.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'dim lighting or floating plants',
          reason: 'Bright light makes them shy. Floating plants help them feel secure.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '15-25',
        bottom: '8-12',
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
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Groups of 10+ fish', 
      'Tiny food particles', 
      'Clean water', 
      'Dense planting',
    ],

    proTips: [
      "Use dark substrate and background to enhance the iridescent green stripe.",
      "Feed small live foods like microworms or baby brine shrimp to keep them in top condition.",
      "They look best when kept in large schools of 20 or more fish."
    ],

    commonMistakes: [
      "Feeding food particles that are too large leads to starvation.",
      "Keeping them in groups that are too small causes them to hide constantly.",
      "Placing them in tanks with boisterous tankmates prevents them from feeding properly."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['crushed-flakes', 'micro-pellets', 'brine-shrimp'],
      supplements: ['daphnia', 'cyclops'],
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
      vacuumingNeeded: false,
      notes: 'Regular water changes are beneficial. They are sensitive to poor water conditions.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 25,
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
    lifespanYears: 3,
    commonDiseases: ['ich', 'velvet', 'fin-rot'],
    sensitivities: ['Ammonia', 'Nitrite', 'Large food', 'Bright lighting'],
  },

  scientificContext: {
    wildHabitat: "Found in shallow, slow-moving streams in Myanmar and Thailand. These habitats are often heavily shaded by overhanging vegetation and stained with tannins.",
    sexualDimorphism: "Males are slimmer and display a more intense green coloration. Females are rounder, especially when gravid.",
    variants: ['Wild Type'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Spawning occurs among fine-leaved plants. Eggs are scattered and ignored by parents.',
    fryCare: 'Fry are incredibly small and require green water or infusoria for the first few days.',
    notes: 'Breeding is possible but raising the tiny fry is challenging.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'starvation', cause: 'food-too-large', frequency: 0.35 },
      { issue: 'stress', cause: 'group-too-small', frequency: 0.25 },
      { issue: 'intimidation', cause: 'fast-tankmates', frequency: 0.15 },
      { issue: 'water-quality', cause: 'high-nitrates', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 30, max: 80, currency: 'EUR' },
      monthly: { min: 5, max: 12, currency: 'EUR' },
    },
  },
};