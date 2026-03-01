import type { Species } from '../../types/species';

export const rosyBarb: Species = {
  id: 'species-rosy-barb',
  slug: 'rosy-barb',
  imageUrl: '/images/species/rosy-barb.jpg',
  
  funFact: "Rosy Barbs are cold-tolerant champions thriving in 18-26°C - one of the few tropical-looking fish perfect for unheated aquariums! However, they are notorious fin nippers when kept in small groups or with slow tankmates.",

  imageCredit: {
    photographer: 'Andreas Hartl on Pixabay',
    sourceUrl: 'https://pixabay.com/photos/rosy-barb-fish-aquarium-freshwater-5405584/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  taxonomy: {
    scientificName: 'Pethia conchonius',
    commonName: 'Rosy Barb',
    family: 'Cyprinidae',
    origin: 'South Asia (Northern India, Nepal, Bangladesh, Pakistan - Himalayan foothills)',
    region: 'Asia',
    biotope: 'Gently flowing clear streams and well-vegetated ponds in subtropical Himalayan foothills.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 10,
    color: 'Sexually dimorphic. Males develop a spectacular rosy-red to deep crimson coloration during breeding. Females are more silver-gold with a rounder body. Both sexes have a dark spot at the base of the dorsal fin.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 120,
    tempC: { min: 18, max: 26, ideal: 22 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 19 },
    kh: { min: 4, max: 12 },
    flow: 'moderate',
    substrate: 'gravel',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 120,
      verticalCM: 40,
      territories: 0,
    },
    
    bioloadMultiplier: 1.5,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'They appreciate open swimming space in the center of the tank with dense planting along the back and sides. They may nibble on soft-leaved plants. Floating plants help diffuse light.',
    hardscape: ['Rounded smooth river stones', 'Driftwood roots', 'Background plants'],
  },

  behavior: {
    tags: ['active', 'schooler', 'semi-aggressive', 'fin_nipper', 'colorful'],
    minGroupSize: 8,
    description: 'Rosy Barbs are extremely active schooling fish. They are generally peaceful when kept in large groups, but they become aggressive fin nippers if the group is too small. Males display spectacular rosy-red breeding colors during courtship. They are powerful jumpers, so a secure lid is mandatory.',
    
    compatibility: {
      goodMates: ['Zebra Danios', 'Giant Danios', 'Corydoras', 'Loaches', 'Rainbowfish', 'Fast tetras', 'Other barbs', 'Plecos'],
      badMates: ['Angelfish', 'Guppies', 'Bettas', 'Long-finned Gouramis', 'Slow-moving fish'],
      notes: 'In groups smaller than 8, they are notorious bullies. Keep only with fast-moving, robust tankmates. Avoid all long-finned fish.',
      
      rules: [
        {
          type: 'requires',
          condition: 'large schools 8-12+ fish',
          reason: 'In groups smaller than 8, they will relentlessly fin nip other fish. Large groups diffuse aggression among themselves.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'slow-moving or long-finned fish',
          reason: 'Rosy Barbs will nip the fins of slow or long-finned species like Bettas and Gouramis.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'spacious tanks 120L+ with open swimming space',
          reason: 'They are active swimmers and become bored and aggressive in small tanks.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'secure lid with no gaps',
          reason: 'They are powerful jumpers and can leap from open-top tanks.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 6-12,
        midwater: '12-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 4,
      interspecific: 6,
      territorial: 2,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
      maxMalesPerTank: 6,
    },
    
    finNipping: {
      risk: 'high',
      targets: ['slow-moving fish', 'long-finned fish'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Large schools 8-12+ fish', 
      'Spacious tank 120L+', 
      'Fast-moving tankmates only', 
      'Secure lid', 
      'Moderate flow', 
    ],

    proTips: [
      "Large schools are the key to preventing fin nipping. In groups of 8 or more, they focus on each other and leave tankmates alone.",
      "They are excellent candidates for unheated tanks in temperate climates, tolerating temperatures down to 18°C.",
      "Males display the most intense red coloration when kept in cooler water and fed a varied diet."
    ],

    commonMistakes: [
      "Keeping them in small groups leads to them terrorizing other fish in the tank.",
      "Housing them with slow or long-finned fish will result in shredded fins.",
      "Failing to use a tight-fitting lid often results in the fish jumping out."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'spirulina'],
      supplements: ['bloodworms', 'daphnia', 'brine-shrimp', 'vegetables'],
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
      notes: 'They are hardy and forgiving of minor water quality issues, but prefer clean, oxygenated water.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'hang-on-back',
        flowRate: 'moderate',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['ich', 'fin-rot', 'bacterial-infections'],
    sensitivities: ['Ammonia', 'Poor oxygenation', 'Overfeeding', 'High temps'],
  },

  scientificContext: {
    wildHabitat: "Native to the foothills of the Himalayas in South Asia. They inhabit clear, flowing streams and still pools with abundant vegetation. The water is typically well-oxygenated and experiences seasonal temperature drops, which explains their tolerance for cooler temperatures. They are opportunistic omnivores, feeding on insects, algae, and detritus.",
    sexualDimorphism: "Males are slimmer and turn a deep rosy-red during spawning. Females are larger, rounder, and maintain a silver-gold coloration.",
    variants: ['Wild Type', 'Neon Rosy', 'Longfin Rosy', 'Gold Rosy'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'They spawn readily in cooler water. Separate sexes for conditioning and provide a breeding tank with fine-leaved plants or spawning mops.',
    fryCare: 'Parents will eat the eggs, so they must be removed after spawning. Fry hatch in about 30 hours and are free-swimming within a few days. Feed infusoria initially, then baby brine shrimp.',
    notes: 'One of the easiest egg-scattering fish to breed.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'fin-nipping-aggression', cause: 'small-groups-under-8-fish-or-slow-long-finned-tankmates', frequency: 0.70 },
      { issue: 'jumping-escape-death', cause: 'no-secure-lid-or-gaps-in-cover', frequency: 0.15 },
      { issue: 'understimulation-boredom', cause: 'small-tank-under-120l-or-no-swimming-space', frequency: 0.08 },
      { issue: 'stress-from-warm-water', cause: 'keeping-over-26c-subtropical-species', frequency: 0.05 },
      { issue: 'ich-outbreak', cause: 'temperature-swings-or-poor-water-quality', frequency: 0.02 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 180, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};