import type { Species } from '../../types/species';

export const apistogrammaCacatuoides: Species = {
  id: 'apistogramma-cacatuoides',
  slug: 'cockatoo-dwarf-cichlid',
  imageUrl: '/images/species/apistogramma-cacatuoides.jpg',

  imageCredit: {
    photographer: 'Britzke (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Apistogramma_cacatuoides_(11120015446).jpg',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
  },
  
  funFact: 'When breeding, the female turns bright yellow and takes full charge of defending the fry, often chasing away the much larger male!',

  taxonomy: {
    scientificName: 'Apistogramma cacatuoides',
    commonName: 'Cockatoo Dwarf Cichlid',
    family: 'Cichlidae',
    origin: 'Amazon River basin (Peru, Colombia, Brazil)',
    region: 'South America',
    biotope: 'Shallow, slow-moving tributaries and leaf-littered pools in the Amazon rainforest'
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 8,
    color: 'Males have highly elongated, colorful dorsal fins (often red/orange with black patterns) resembling a cockatoo\'s crest. Females are smaller and mostly grayish-yellow.'
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    gh: { min: 2, max: 12 },
    kh: { min: 1, max: 6 },
    flow: 'low',
    substrate: 'Fine sand is absolutely essential, as they constantly sift the substrate for food through their gills.',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.85
    },
    spaceNeeds: {
      horizontalCM: 60,
      territories: 2
    }
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Requires plenty of hiding spots. Use dense planting around the edges but leave open sand areas. Leaf litter (Indian Almond leaves) is highly recommended.',
    hardscape: ['driftwood', 'botanicals', 'caves']
  },

  behavior: {
    tags: ['cichlid', 'territorial', 'bottom_dweller', 'parental-care', 'substrate-sifter'],
    minGroupSize: 2,
    description: 'Generally peaceful toward non-cichlids, but highly territorial around their chosen cave, especially during breeding. Best kept as a pair or a harem (1 male to multiple females).',
    compatibility: {
      goodMates: ['tetras', 'rasboras', 'pencilfish', 'hatchetfish', 'otocinclus'],
      badMates: ['other_apistogramma', 'large_cichlids', 'aggressive_bottom_dwellers', 'dwarf_shrimp'],
      notes: 'Avoid housing with other bottom-dwelling cichlids in small tanks to prevent severe territorial disputes. Will eat baby shrimp and likely adult Neocaridina.',
      
      rules: [
        {
          type: 'warning',
          target: 'corydoras',
          reason: 'Corydoras don\'t understand territories and will blunder into the Apisto\'s breeding cave, leading to continuous stress for both.',
          severity: 'medium'
        },
        {
          type: 'avoid',
          target: 'shrimp',
          reason: 'Adults will easily hunt down and eat dwarf shrimp.',
          severity: 'high'
        }
      ]
    },
    
    aggressionLevel: {
      intraspecific: 7,
      interspecific: 3,
      territorial: 8
    },
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'evening'],
      nocturnal: false
    },
    socialStructure: {
      type: 'harem',
      maleToFemaleRatio: '1:2-3',
      maxMalesPerTank: 1
    },
    finNipping: {
      risk: 'none'
    }
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Fine sand substrate',
      'Caves (coconut shells, terracotta pots, or ceramic caves)',
      'High water quality'
    ],
    proTips: [
      'Provide at least 2 caves per female in the tank so they can choose their preferred breeding site.',
      'A diet rich in live or frozen foods is crucial for bringing out the males\' colors and inducing spawning.'
    ],
    commonMistakes: [
      'Using sharp gravel, which damages their gills during sifting',
      'Keeping them in tanks with strong flow',
      'Skipping water changes (they are highly sensitive to nitrates)'
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'frozen-food'],
      supplements: ['bloodworms', 'brine-shrimp', 'daphnia', 'live-food'],
      vegetarian: false
    },
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Keep nitrates strictly below 20ppm. Clean the sand surface gently to avoid removing leaf litter.'
    },
    equipment: {
      heater: { required: true, watts: 50 },
      filter: { required: true, type: 'sponge', flowRate: 'gentle' },
      airstone: false
    }
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['Hole-in-the-Head', 'Internal Parasites'],
    sensitivities: ['High nitrates', 'Medication containing copper']
  },

  scientificContext: {
    wildHabitat: 'Found in the shallow, slow-moving backwaters of the Amazon basin, typically in areas choked with fallen leaves and submerged wood.',
    sexualDimorphism: 'Males are much larger (up to 8cm) with spectacular crest-like dorsal fins and colorful tails. Females remain small (up to 5cm) and are drab gray/brown, turning bright yellow when breeding.',
    variants: ['Double Red', 'Triple Red', 'Orange Flash', 'Super Red']
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'medium',
    trigger: 'Drop pH slightly using botanicals, feed heavily with live foods, and perform a small water change with slightly cooler water.',
    fryCare: 'Female handles all fry care. Fry can eat baby brine shrimp immediately. Do not remove the female, as her care is essential for fry survival.',
    notes: 'The female will become hyper-aggressive defending the cave. Ensure tank mates have room to escape to the upper levels of the tank.'
  }
};