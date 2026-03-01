import type { Species } from '../../types/species';

export const sparklingGourami: Species = {
  id: 'sparkling-gourami',
  slug: 'sparkling-gourami',
  imageUrl: '/images/species/sparkling-gourami.jpg',
  
  funFact: "Males produce audible croaking sounds by vibrating modified pectoral tendons during courtship. Like all labyrinth fish, they possess a specialized organ allowing them to breathe atmospheric air, making surface access critical.",

  imageCredit: {
    photographer: 'Dezinformator15',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sparkling_gourami.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0'
  },
  
  taxonomy: {
    scientificName: 'Trichopsis pumila',
    commonName: 'Sparkling Gourami',
    family: 'Osphronemidae',
    origin: 'Southeast Asia (Thailand, Cambodia, Vietnam, Laos)',
    region: 'Asia',
    biotope: 'Rice paddies, shallow ponds, and slow-moving streams with dense vegetation and low oxygen levels.',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 3.5,
    color: 'Iridescent blue-green spots on a brownish-olive body. Males display brighter colors and pointed dorsal fins, while females have rounder bodies and duller coloration.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 30,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    gh: { min: 2, max: 10 },
    kh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'dark-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 25,
      territories: 1,
    },
    
    bioloadMultiplier: 0.5,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Floating plants are mandatory for bubble nest construction and security. Dense planting provides territories. An air gap at the surface is critical for labyrinth breathing.',
    hardscape: ['Driftwood branches', 'Leaf litter', 'Fine dark sand'],
  },

  behavior: {
    tags: ['peaceful', 'territorial', 'bubble_nester', 'nano', 'labyrinth_fish'],
    minGroupSize: 2,
    description: 'A peaceful, slow-moving fish often seen hovering in midwater or gulping air from the surface. Males are territorial toward other males and produce distinct croaking sounds during displays. They are micropredators that hunt small organisms.',
    
    compatibility: {
      goodMates: ['Ember Tetras', 'Chili Rasboras', 'Pygmy Corydoras', 'Otocinclus', 'Dwarf shrimp', 'Snails'],
      badMates: ['Bettas', 'Fast aggressive eaters', 'Large cichlids', 'Fin nippers', 'Goldfish'],
      notes: 'Males are territorial toward other male gouramis. They are entirely safe with shrimp. Avoid fast-swimming tankmates that outcompete them for food.',
      
      rules: [
        {
          type: 'requires',
          condition: 'air gap at water surface (2-3cm)',
          reason: 'They are obligate air-breathers via a labyrinth organ. Blocking surface access leads to suffocation.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'keeping multiple males in small tanks (under 60L)',
          reason: 'Males are territorial. In small tanks, dominant males will harass subordinates.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'mixing with Bettas',
          reason: 'Both are labyrinth fish and will compete for territory.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'strong water flow',
          reason: 'They inhabit still waters and struggle in strong currents.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 5,
      interspecific: 1,
      territorial: 6,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
      maxMalesPerTank: 3,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Air gap at surface (labyrinth breathers)', 
      'Floating plants', 
      'Very low flow', 
      'Heavily planted tank', 
      'Small live/frozen foods', 
      'Peaceful tankmates only',
    ],

    proTips: [
      "Listen for croaking sounds; this indicates a secure male. Silent fish may be stressed.",
      "Maintain an air gap at the surface to allow them to gulp atmospheric air.",
      "Feed small live foods like baby brine shrimp or micro-worms to encourage breeding."
    ],

    commonMistakes: [
      "Filling the tank to the brim prevents them from accessing air.",
      "Keeping multiple males in small tanks leads to fighting.",
      "Strong water flow causes stress and exhaustion.",
      "Mixing with fast eaters results in the gourami starving."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['brine-shrimp', 'daphnia', 'bloodworms', 'micro-pellets'],
      supplements: ['cyclops'],
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
      notes: 'Tolerates lower oxygen levels than most fish due to the labyrinth organ, but water quality should still be maintained.',
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
    lifespanYears: 5,
    commonDiseases: ['ich', 'velvet', 'labyrinth-organ-damage', 'fin-rot'],
    sensitivities: ['Cold water', 'Strong water flow', 'Lack of surface access', 'Dry air', 'Copper medications'],
  },

  scientificContext: {
    wildHabitat: "Inhabits shallow, stagnant waters such as rice paddies and ponds in Southeast Asia. These environments are often low in oxygen, which drove the evolution of the labyrinth organ. They feed on insect larvae and micro-crustaceans.",
    sexualDimorphism: "Males are slimmer, more colorful, and have pointed dorsal fins. Females are rounder, especially when gravid, and have rounded fins.",
    variants: ['Trichopsis pumila (Standard)', 'Trichopsis vittata (Croaking Gourami)', 'Trichopsis schalleri (Three-Stripe)'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'beginner',
    trigger: 'Males build bubble nests under floating leaves. Breeding is frequent in established tanks. Condition with live foods to initiate spawning.',
    fryCare: 'The male guards the eggs. Fry are tiny and require infusoria or green water for the first week before moving to baby brine shrimp.',
    notes: 'Breeding is straightforward; the main challenge is rearing the tiny fry.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'suffocation-death', cause: 'no-air-gap-at-surface-labyrinth-breathers-need-air-access', frequency: 0.25 },
      { issue: 'male-aggression', cause: 'multiple-males-in-small-tanks-under-60l-territorial-stress', frequency: 0.20 },
      { issue: 'starvation', cause: 'outcompeted-for-food-by-fast-aggressive-eaters', frequency: 0.20 },
      { issue: 'stress-hiding', cause: 'strong-water-flow-still-water-species', frequency: 0.20 },
      { issue: 'stress-from-bright-lighting', cause: 'no-floating-plants-harsh-open-lighting', frequency: 0.15 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};