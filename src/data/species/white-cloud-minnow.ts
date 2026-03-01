import type { Species } from '../../types/species';

export const whiteCloudMinnow: Species = {
  id: 'minnow-001',
  slug: 'white-cloud-minnow',
  imageUrl: '/images/species/white-cloud-mountain-minnow.jpg',
  
  funFact: "Extinct in their original wild habitat near Guangzhou, China, but a conservation success thriving in aquariums. Known as the 'poor man's neon tetra' for their iridescence and hardiness. They are true coldwater fish requiring no heater.",

  taxonomy: {
    scientificName: 'Tanichthys albonubes',
    commonName: 'White Cloud Mountain Minnow',
    family: 'Cyprinidae',
    origin: 'China (Guangdong Province - White Cloud Mountain)',
    region: 'Asia',
    biotope: 'Cool clear shallow mountain streams with rocky substrates and dense vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4,
    color: 'Olive-brown to bronze body with a brilliant iridescent neon-blue stripe. Males display brighter red fin edges and slimmer bodies, while females are rounder.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 14, max: 22, ideal: 18 },
    ph: { min: 6.0, max: 8.5, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    kh: { min: 4, max: 15 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.7,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense planting with coldwater-tolerant species like Java Fern, Anubias, and Vallisneria. Floating plants encourage breeding and diffuse light.',
    hardscape: ['River stones', 'Driftwood branches', 'Dark sand substrate'],
  },

  behavior: {
    tags: ['schooler', 'peaceful', 'active', 'coldwater', 'jumper'],
    minGroupSize: 8,
    description: 'A very peaceful and active schooling fish. Males engage in fascinating, harmless "sparring" displays to establish hierarchy. They are extremely hardy and tolerant of a wide temperature range, making them ideal for unheated coldwater setups.',
    
    compatibility: {
      goodMates: ['Hillstream loaches', 'Zebra Danios', 'Dwarf shrimp', 'Snails', 'Fancy goldfish', 'Paradise fish'],
      badMates: ['Tropical fish (Angelfish, Tetras)', 'Large predatory fish', 'Common goldfish'],
      notes: 'Best kept in a coldwater community. Incompatible with tropical species due to temperature requirements. Completely safe with shrimp.',
      
      rules: [
        {
          type: 'requires',
          condition: 'coldwater setup (14-22°C) - no tropical fish',
          reason: 'They are true coldwater fish. Tropical temperatures cause heat stress and significantly shorten their lifespan.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'secure lid with no gaps',
          reason: 'They are excellent jumpers, especially when excited or during feeding.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'groups 8+ fish minimum',
          reason: 'They are schooling fish; smaller groups lead to stress and lack of natural social behavior.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 8-12,
        midwater: '15-20',
        bottom: '8-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
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
      maxMalesPerTank: 15,
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
      'Coldwater setup (14-22°C)', 
      'Secure lid', 
      'Groups 8+ minimum', 
      'Heavy planting', 
    ],

    proTips: [
      "No heater needed! They thrive at room temperature, saving electricity costs.",
      "Often called the 'poor man's neon tetra'—they offer similar beauty with much greater hardiness.",
      "They are one of the easiest egg-scattering fish to breed; parents rarely eat fry."
    ],

    commonMistakes: [
      "Keeping them in heated tropical tanks shortens their lifespan drastically.",
      "Mixing with tropical species creates an incompatible temperature environment.",
      "Keeping them in small groups prevents natural schooling and sparring behavior."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'flakes'],
      supplements: ['bloodworms', 'brine-shrimp', 'daphnia'],
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
      notes: 'Weekly water changes. Extremely hardy and forgiving of minor parameter fluctuations, making them perfect for beginners.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
      },
      filter: {
        required: true,
        type: 'hang-on-back',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 7,
    commonDiseases: ['ich', 'fin-rot', 'velvet'],
    sensitivities: ['Permanent warm temperatures (>24°C)', 'Chlorine'],
  },

  scientificContext: {
    wildHabitat: "Originally endemic to White Cloud Mountain in China; the type locality population is extinct due to pollution and tourism. Rediscovered in isolated locations in Guangdong and Vietnam. They inhabit cool, clear, shallow streams with dense vegetation.",
    sexualDimorphism: "Males are slimmer with brighter red fin edges. Females are rounder, especially when gravid.",
    variants: ['Wild-type', 'Golden White Cloud', 'Longfin', 'Hong Kong variety'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Breeds readily in cool water without special triggers. Spawning is frequent in well-planted tanks.',
    fryCare: 'Eggs are scattered among plants. Parents rarely eat eggs or fry, making them easy to raise in the community tank. Fry can be fed crushed flakes.',
    notes: 'One of the easiest egg-scattering fish to breed.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'heat-stress-shortened-lifespan', cause: 'kept-in-tropical-heated-tanks-26c-plus', frequency: 0.80 },
      { issue: 'jumping-escape-death', cause: 'no-secure-lid-excellent-jumpers', frequency: 0.10 },
      { issue: 'stress-hiding', cause: 'small-groups-under-8-fish-schooling-species', frequency: 0.05 },
      { issue: 'inbreeding-genetic-issues', cause: 'farm-raised-weak-stock-physical-deformities', frequency: 0.03 },
      { issue: 'mixing-with-tropicals', cause: 'temperature-incompatibility-stress', frequency: 0.02 },
    ],
    
    estimatedCosts: {
      initial: { min: 30, max: 80, currency: 'EUR' },
      monthly: { min: 3, max: 10, currency: 'EUR' },
    },
  },
};