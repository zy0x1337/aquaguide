import type { Species } from '../../types/species';

export const pseudomugilGertrudae: Species = {
  id: 'blue-eye-spotted',
  slug: 'spotted-blue-eye',
  imageUrl: '/images/species/spotted-blue-eye.jpg',

  imageCredit: {
    photographer: 'Atulbhats (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Getrudae_Rainbowfish.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  
  funFact: "The Spotted Blue-eye is a tiny gem of the aquarium hobby, named for its striking iridescent blue iris. Males perform elaborate display dances, flaring their extended dorsal and anal fins to impress females, often spawning daily in well-maintained tanks.",

  taxonomy: {
    scientificName: 'Pseudomugil gertrudae',
    commonName: 'Spotted Blue Eye',
    family: 'Pseudomugilidae',
    origin: 'New Guinea and Northern Australia (Cape York Peninsula)',
    region: 'Oceania',
    biotope: 'Swamps, shallow creeks, and billabongs with dense aquatic vegetation and submerged wood.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4,
    color: 'A translucent pale yellow to olive body speckled with small dark spots. The eye is a brilliant neon blue. Males have distinctly elongated dorsal and anal fins with black and yellow margins, while females have shorter, rounder fins.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 30,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'midwater',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.3,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense planting is essential, especially floating plants, to provide security and spawning mops. They feel most comfortable in a well-planted environment.',
    hardscape: ['Driftwood', 'Leaf litter', 'Fine-leaved plants'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'jumper', 'predator'],
    minGroupSize: 8,
    description: 'A very peaceful, active schooling fish that spends most of its time in the upper water layers. They can be shy if kept in small numbers or without adequate cover. Males display to each other and potential mates by flaring their fins in a dance.',
    
    compatibility: {
      goodMates: ['Ember Tetra', 'Pygmy Corydoras', 'Chili Rasbora', 'Dwarf Shrimp', 'Other small peaceful fish'],
      badMates: ['Large fish', 'Fin nippers', 'Boisterous species'],
      notes: 'Their small size makes them suitable only for nano or micro community tanks. They should not be kept with fish large enough to eat them.',
      
      rules: [
        {
          type: 'requires',
          condition: 'secure lid',
          reason: 'They are excellent jumpers and will leap from the tank if startled.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 8',
          reason: 'They are a schooling species. In small groups, they become timid and fail to display natural behaviors.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'tiny foods',
          reason: 'They have very small mouths and cannot eat standard flake foods. Crushed flakes or micro-pellets are necessary.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 8-12,
        midwater: '10-15',
        bottom: '6-10',
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
      maxMalesPerTank: 999,
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
    cost: 'medium',
    specialRequirements: [
      'Secure lid', 
      'Small foods', 
      'Groups of 8+', 
      'Floating plants',
    ],

    proTips: [
      "Condition them with live or frozen foods like baby brine shrimp or microworms to encourage spawning.",
      "A darker substrate enhances their blue eyes and yellow fins.",
      "They do well in cooler water and do not strictly require a heater in warmer homes."
    ],

    commonMistakes: [
      "Feeding food particles that are too large leads to starvation.",
      "Keeping them in open tanks without floating plants causes stress.",
      "Housing them with large or aggressive tankmates results in them hiding constantly."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['pellets', 'crushed-flakes', 'brine-shrimp'],
      supplements: ['daphnia'],
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
      notes: 'Regular water changes are beneficial but avoid creating strong currents.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['ich', 'velvet', 'fin-rot'],
    sensitivities: ['Large food', 'Strong currents', 'Rough handling'],
  },

  scientificContext: {
    wildHabitat: "Found in a variety of habitats, from clear streams to tannin-stained swamps. They are highly adaptable to different water chemistries but prefer slow-moving waters dense with vegetation.",
    sexualDimorphism: "Males are more colorful with elongated dorsal and anal fins. Females are rounder, especially when gravid, and have shorter fins.",
    variants: ['Spotted Blue Eye', 'Aru Island form', 'Cape York form'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Spawning occurs readily in mature tanks. Males display to females daily. Providing spawning mops or fine-leaved plants encourages egg deposition.',
    fryCare: 'Eggs are large and adhere to plants. Hatching takes about 7-10 days. Fry are relatively large and can take baby brine shrimp immediately.',
    notes: 'They are continuous spawners, laying a few eggs daily under good conditions.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'jumping', cause: 'startled-no-lid', frequency: 0.30 },
      { issue: 'starvation', cause: 'food-too-large', frequency: 0.25 },
      { issue: 'stress', cause: 'small-group-size', frequency: 0.20 },
      { issue: 'predation', cause: 'housed-with-large-fish', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 30, max: 80, currency: 'EUR' },
      monthly: { min: 5, max: 12, currency: 'EUR' },
    },
  },
};