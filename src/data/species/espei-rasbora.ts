import type { Species } from '../../types/species';

export const trigonostigmaEspei: Species = {
  id: 'trigonostigma-espei',
  slug: 'espei-rasbora',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Trigonostigma_espei_1.jpg/1200px-Trigonostigma_espei_1.jpg',
  imageCredit: {
    author: 'Wikimedia Commons',
    url: 'https://commons.wikimedia.org/wiki/File:Trigonostigma_espei_1.jpg',
    platform: 'Wikimedia'
  },
  funFact: 'Often confused with the Harlequin Rasbora, the Espei (Lambchop) Rasbora has a thinner "lambchop" shaped black marking and generally exhibits a brighter, more coppery-orange coloration.',

  taxonomy: {
    scientificName: 'Trigonostigma espei',
    commonName: 'Espei Rasbora / Lambchop Rasbora',
    family: 'Danionidae',
    origin: 'Southeast Asia (Thailand, Cambodia)',
    region: 'Asia',
    biotope: 'Slow-flowing, heavily vegetated forest streams with acidic, tannin-stained water'
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 3.5,
    color: 'Striking copper/orange body with a distinct black "lambchop" marking starting from the mid-body to the tail.'
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 54,
    tempC: { min: 23, max: 28, ideal: 25 },
    ph: { min: 5.5, max: 7.0, ideal: 6.5 },
    gh: { min: 1, max: 10 },
    kh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'Dark sand or fine gravel is preferred to enhance their colors.',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8
    },
    spaceNeeds: {
      horizontalCM: 60,
      territories: 0
    }
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Provide heavily planted areas around the back and sides with open swimming space in the center. Broad-leaved plants like Cryptocoryne are excellent for them.',
    hardscape: ['driftwood', 'botanicals']
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'active', 'nano_safe', 'midwater', 'social'],
    minGroupSize: 8,
    description: 'A very peaceful, active schooling fish that brings vibrant color and constant movement to the mid-levels of the aquarium. They display their best colors and behaviors when kept in large groups.',
    compatibility: {
      goodMates: ['corydoras', 'small_tetras', 'dwarf_cichlids', 'honey_gouramis', 'kuhli_loaches', 'amano_shrimp'],
      badMates: ['large_cichlids', 'aggressive_species', 'oscar', 'large_predators'],
      notes: 'Excellent community fish for peaceful setups. Very safe with most dwarf shrimp.',
      
      rules: [
        {
          type: 'warning',
          target: 'tank-size < 54L',
          reason: 'While small, they are very active and need swimming space.',
          severity: 'low'
        }
      ]
    },
    
    aggressionLevel: {
      intraspecific: 1,
      interspecific: 1,
      territorial: 1
    },
    activity: {
      level: 'high',
      peakTimes: ['morning', 'evening', 'all-day'],
      nocturnal: false
    },
    socialStructure: {
      type: 'school',
      maleToFemaleRatio: 'any',
    },
    finNipping: {
      risk: 'none'
    }
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Must be kept in groups of 8+',
      'Stable water parameters'
    ],
    proTips: [
      'Adding Indian Almond leaves (catappa) mimics their natural blackwater environment and boosts their immune system.',
      'Keeping them in groups of 12 or more dramatically improves their schooling behavior and confidence.'
    ],
    commonMistakes: [
      'Keeping them in groups smaller than 6',
      'Placing them in tanks with aggressive or overly large tank mates',
      'Keeping them in bright, sparsely decorated tanks (they will wash out in color)'
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'crushed-flakes'],
      supplements: ['daphnia', 'cyclops', 'baby-brine-shrimp'],
      vegetarian: false
    },
    maintenance: {
      waterChangePercentage: 20,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Prefer stable conditions; avoid massive parameter swings during water changes.'
    },
    equipment: {
      heater: { required: true, watts: 50 },
      filter: { required: true, type: 'sponge', flowRate: 'gentle' },
      airstone: false
    }
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['Ich', 'Fungal Infections'],
    sensitivities: ['High nitrates', 'Sudden pH swings']
  },

  scientificContext: {
    wildHabitat: 'Found in heavily shaded, slow-flowing forest streams with soft, acidic water full of decaying organic matter.',
    sexualDimorphism: 'Males are slightly smaller, more slender, and more intensely colored than females. Females have a rounder belly, especially when gravid.',
    variants: []
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'medium',
    trigger: 'Soft, acidic water (pH 5.5-6.0), warm temperature (28°C), and broad-leaved plants (like Cryptocoryne) for egg deposition.',
    fryCare: 'Extremely small fry require infusoria for the first few days before moving to baby brine shrimp.',
    notes: 'Unlike egg-scatterers, they invert themselves to lay adhesive eggs on the undersides of broad leaves.'
  }
};