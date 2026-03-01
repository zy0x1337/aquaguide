import type { Species } from '../../types/species';

export const trichogasterLalius: Species = {
  id: 'trichogaster-lalius',
  slug: 'dwarf-gourami',
  imageUrl: 'https://cdn.pixabay.com/photo/2021/11/17/21/53/fish-6804822_1280.jpg',
  imageCredit: {
    author: 'Pixabay',
    url: 'https://pixabay.com',
    platform: 'Pixabay'
  },
  funFact: 'Male Dwarf Gouramis can spit water at insects above the surface to knock them into the water for a quick meal!',

  taxonomy: {
    scientificName: 'Trichogaster lalius',
    commonName: 'Dwarf Gourami',
    family: 'Osphronemidae',
    origin: 'South Asia (India, Bangladesh, Pakistan)',
    region: 'Asia',
    biotope: 'Slow-moving, heavily vegetated streams and ponds'
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 7,
    color: 'Striking alternating diagonal stripes of neon blue and bright orange/red in males; females are mostly silvery-gray.'
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 54,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 4, max: 15 },
    kh: { min: 2, max: 8 },
    flow: 'low',
    substrate: 'Fine gravel or sand, preferably dark to bring out their colors.',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'midwater',
      preference: 0.8
    },
    spaceNeeds: {
      horizontalCM: 60,
      territories: 1
    }
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Requires floating plants (like Salvinia or Duckweed) to build bubble nests and feel secure. Dense background planting is essential.',
    hardscape: ['driftwood', 'botanicals']
  },

  behavior: {
    tags: ['labyrinth_fish', 'bubble_nester', 'centerpiece', 'peaceful', 'territorial', 'slow_eater'],
    minGroupSize: 1,
    description: 'Generally peaceful but males are territorial toward each other and similar-looking anabantoids. They use their modified pelvic fins as sensory organs to feel their surroundings.',
    compatibility: {
      goodMates: ['tetras', 'rasboras', 'corydoras', 'otocinclus', 'kuhli_loaches'],
      badMates: ['bettas', 'other_gouramis', 'fin_nippers', 'aggressive_cichlids', 'shrimp'],
      notes: 'Best kept as a single male, or a male with 2-3 females if the tank is large enough.',
      
      rules: [
        {
          type: 'avoid',
          target: 'betta-splendens',
          reason: 'Severe aggression between different Labyrinth fish species.',
          severity: 'critical'
        },
        {
          type: 'warning',
          target: 'fin_nipper',
          reason: 'Their long sensory pelvic fins are tempting targets for fin-nippers like Tiger Barbs.',
          severity: 'high'
        }
      ]
    },
    
    aggressionLevel: {
      intraspecific: 7,
      interspecific: 2,
      territorial: 6
    },
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'evening', 'feeding'],
      nocturnal: false
    },
    socialStructure: {
      type: 'pair',
      maleToFemaleRatio: '1:2',
      maxMalesPerTank: 1
    },
    finNipping: {
      risk: 'none'
    }
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Access to atmospheric air',
      'Floating plants',
      'Gentle water flow'
    ],
    proTips: [
      'Ensure a tight-fitting lid to keep the air above the water warm and humid, which protects their labyrinth organ.',
      'Soak dry foods before feeding to prevent bloating.'
    ],
    commonMistakes: [
      'Keeping multiple males in a small tank',
      'Too much surface agitation',
      'Keeping them with aggressive or fast-swimming fin-nippers'
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets'],
      supplements: ['bloodworms', 'daphnia', 'brine-shrimp'],
      vegetarian: false,
      fastingDay: 'sunday'
    },
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Very sensitive to water quality issues; keep nitrates below 20ppm.'
    },
    equipment: {
      heater: { required: true, watts: 50 },
      filter: { required: true, type: 'sponge', flowRate: 'gentle' },
      airstone: false
    }
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['Dwarf Gourami Iridovirus (DGIV)', 'Ich', 'Fin Rot'],
    sensitivities: ['Poor water quality', 'Cold drafts above water surface']
  },

  scientificContext: {
    wildHabitat: 'Sluggish, heavily vegetated waters of the Ganges, Brahmaputra, and Indus river basins.',
    sexualDimorphism: 'Males are highly colorful with striking diagonal stripes; females are much duller (silvery-gray) and slightly smaller.',
    variants: ['Powder Blue', 'Neon Blue', 'Flame', 'Coral']
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'Lower water level slightly, raise temperature to 28°C, and provide abundant floating plants.',
    fryCare: 'Requires infusoria or liquid fry food initially, progressing to baby brine shrimp.',
    notes: 'Remove female immediately after spawning as the male will become highly aggressive while guarding the nest.'
  }
};