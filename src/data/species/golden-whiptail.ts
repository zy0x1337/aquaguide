import type { Species } from '../../types/species';

export const sturisomatichthysAureus: Species = {
  id: 'loricariidae-golden-whiptail',
  slug: 'golden-whiptail',
  imageUrl: '/images/species/golden-whiptail.jpg',

  imageCredit: {
    photographer: 'Richard Bartz (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sturisoma_aureum_Richard_Bartz.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  
  funFact: "The Golden Whiptail is a master of camouflage, resembling a sun-bleached twig or branch. Males develop distinctive bristles (odontodes) on their snout and cheeks during maturity. They are excellent algae eaters and are one of the few loricariids where the male guards the eggs until hatching.",

  taxonomy: {
    scientificName: 'Sturisomatichthys aureus',
    commonName: 'Golden Whiptail / Gold Royal Farlowella',
    family: 'Loricariidae',
    origin: 'South America (Colombia - Magdalena River basin)',
    region: 'South America',
    biotope: 'Clear, fast-flowing rivers and streams with rocky substrates, submerged wood, and abundant biofilm.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 20,
    color: 'A slender, elongated body with a golden-tan to light brown base color. Darker brown irregular markings or saddles run along the back and sides. The caudal fin has filamentous extensions. Males develop prominent odontodes on the snout.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 200,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 100,
      verticalCM: 40,
      territories: 1,
    },
    
    bioloadMultiplier: 1.0,
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'They require driftwood for grazing. Robust plants like Anubias and Java Fern can be attached to hardscape. Open swimming space along the bottom is appreciated.',
    hardscape: ['Driftwood (essential for diet)', 'Smooth river stones', 'Slate', 'Submerged branches'],
  },

  behavior: {
    tags: ['peaceful', 'algae_eater', 'bottom_dweller'],
    minGroupSize: 1,
    description: 'A very peaceful and graceful species that spends most of its time attached to wood or glass grazing on biofilm and algae. They are generally inactive during the day but can become more active during feeding or in the evening. Males are territorial towards each other when breeding.',
    
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Corydoras', 'Peaceful Cichlids', 'Danios', 'Other peaceful Loricariids'],
      badMates: ['Large aggressive cichlids', 'Fin nippers', 'Species that compete aggressively for algae'],
      notes: 'Excellent community fish. They do not compete well for food with boisterous algae eaters like Flying Foxes. Ensure they get enough food.',
      
      rules: [
        {
          type: 'requires',
          condition: 'driftwood',
          reason: 'Wood is essential for their digestion. They rasp on it constantly to aid in processing their vegetable diet.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'high oxygen levels',
          reason: 'They are adapted to fast-flowing, well-oxygenated streams. Low oxygen leads to stress.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'vegetable supplements',
          reason: 'They are primarily vegetarians. Relying only on tank algae is insufficient; they need blanched vegetables or algae wafers.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '3-6',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 0,
      territorial: 2,
    },
    
    activity: {
      level: 'low',
      peakTimes: ['evening', 'night'],
      nocturnal: true,
    },
    
    socialStructure: {
      type: 'pair',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Driftwood in diet', 
      'Vegetable supplements', 
      'Well oxygenated water', 
      'Good water quality',
    ],

    proTips: [
      "Feed blanched zucchini, cucumber, or spinach regularly to supplement their algae intake.",
      "Provide vertical surfaces like slate or the tank glass for them to rest on; they often spawn on these surfaces.",
      "Males can be identified by the bristles (odontodes) on their snout."
    ],

    commonMistakes: [
      "Not providing driftwood leads to digestive issues.",
      "Keeping them with aggressive algae eaters results in starvation.",
      "Assuming they will survive only on algae in a mature tank leads to malnutrition."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['algae-wafers', 'spirulina', 'vegetables'],
      supplements: ['bloodworms', 'daphnia'],
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
      notes: 'They produce a moderate amount of waste. Regular water changes are necessary to maintain water quality and oxygen levels.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 8,
    commonDiseases: ['ich', 'bacterial infections', 'malnutrition'],
    sensitivities: ['Low oxygen', 'Lack of wood', 'High nitrates'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the Magdalena River basin in Colombia. They inhabit clear, oxygen-rich waters with rocky and woody substrates. They rely on biofilm and aufwuchs for food.",
    sexualDimorphism: "Males develop prominent odontodes (bristles) along the snout and cheek area. Females are rounder in the belly, especially when gravid.",
    variants: ['Wild Type'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'medium',
    trigger: 'Spawning occurs on flat surfaces, often the aquarium glass or slate. The male guards the eggs until they hatch.',
    fryCare: 'Fry hatch in about 10 days. They are large enough to eat algae wafers and blanched vegetables immediately. The male protects the eggs but not the fry.',
    notes: 'They are relatively easy to breed in a well-maintained tank with a sexed pair.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'starvation', cause: 'outcompeted-for-algae-or-lack-of-veggies', frequency: 0.35 },
      { issue: 'hypoxia', cause: 'low-oxygen-stagnant-water', frequency: 0.25 },
      { issue: 'aggression', cause: 'multiple-males-territorial-disputes', frequency: 0.15 },
      { issue: 'jumping', cause: 'startled-no-lid', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 150, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};