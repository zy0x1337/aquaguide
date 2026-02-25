import type { Species } from '../../types/species';

export const africanDwarfFrog: Species = {
  id: 'african-dwarf-frog',
  slug: 'african-dwarf-frog',
  imageUrl: '/images/species/african-dwarf-frog.jpg',
  
  funFact: "Male African Dwarf Frogs sing underwater by contracting their throat muscles, creating a faint buzzing sound to attract mates.",

  taxonomy: {
    scientificName: 'Hymenochirus boettgeri',
    commonName: 'African Dwarf Frog',
    family: 'Pipidae',
    origin: 'Central Africa (Congo Basin, Cameroon, Nigeria)',
    region: 'Africa',
    biotope: 'Shallow, stagnant rainforest pools and slow moving creeks with dense vegetation and muddy substrates.',
  },

  visuals: {
    iconShape: 'frog',
    adultSizeCM: 5,
    color: 'Olive to grey bodies with black mottling and a cream colored belly. A blonde variant displays peachy tan skin with lighter markings.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.5, max: 7.8, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    kh: { min: 3, max: 12 },
    flow: 'low',
    substrate: 'sand',
    swimmingZone: {
      primary: 'bottom',
      secondary: 'surface',
      preference: 0.70,
    },
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 25,
      territories: 0,
    },
    bioloadMultiplier: 0.4,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Broad leaved plants like Anubias and Java Fern provide essential resting platforms near the surface. Floating plants offer shade and security for these clumsy swimmers.',
    hardscape: ['Smooth river stones', 'Driftwood', 'Terracotta shelters', 'Floating platforms'],
  },

  behavior: {
    tags: ['peaceful', 'social', 'nocturnal'],
    minGroupSize: 2,
    description: 'These nearly blind amphibians hunt by smell and touch, often lunging past food before locating it with sensitive fingertips. They frequently hang motionless in a zen float to conserve energy between breaths. Social by nature, they often rest together on leaves or in shelters.',

    compatibility: {
      goodMates: [
        'Other African Dwarf Frogs', 
        'Nerite Snails', 
        'Mystery Snails', 
      ],
      badMates: [
        'Community fish', 
        'African Clawed Frogs', 
        'Crayfish', 
        'Goldfish', 
        'Cichlids', 
        'Bettas', 
      ],
      notes: 'A species only tank is the best environment to ensure they receive adequate food without competition.',
      
      rules: [
        {
          type: 'avoid',
          target: 'most community fish',
          reason: 'Fast fish consume all food before the blind and slow frogs can locate it.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'African Clawed Frogs (Xenopus laevis)',
          reason: 'African Clawed Frogs are larger predators that will eat Dwarf Frogs.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'low flow / calm water',
          reason: 'Strong currents exhaust these weak swimmers and prevent them from surfacing to breathe.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'target feeding required',
          reason: 'Their poor eyesight requires food to be delivered directly to their mouth area.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'shallow tank depth < 40cm',
          reason: 'They must surface frequently to breathe and deep water causes exhaustion.',
          severity: 'high',
        },
      ],
      idealTankmates: {
        surface: 0,
        midwater: '0-10',
        bottom: '2-6',
      },
    },

    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },

    activity: {
      level: 'low',
      peakTimes: ['morning', 'night'],
      nocturnal: true,
    },

    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 999,
    },

    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'low',
    
    specialRequirements: [
      'Target feeding with tweezers',
      'Sponge filter for gentle flow',
      'Tank depth under 40cm',
      'Tight fitting lid',
      'Species only setup',
    ],
    
    proTips: [
      "Use a turkey baster to deliver food directly in front of the frog to ensure it eats.",
      "Verify the frog has webbing on all four feet to avoid buying the larger African Clawed Frog.",
    ],
    
    commonMistakes: [
      "Keeping them with fish causes starvation because the frogs cannot compete for food.",
      "Deep tanks force them to swim too far for air, leading to exhaustion and drowning.",
      "Gravel substrates cause impaction if ingested during feeding.",
    ],
    
    feeding: {
      frequency: 'every-other-day',
      primaryFoods: ['bloodworms', 'brine-shrimp'],
      supplements: ['daphnia', 'pellets'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Use a dechlorinator for every water change because amphibians absorb chemicals directly through their skin.',
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
    lifespanYears: 6,
    commonDiseases: ['dropsy-bloat', 'bacterial-infections', 'fungal-infections', 'chytridiomycosis', 'skin-lesions'],
    sensitivities: [
      'Starvation from competition', 
      'Copper based medications', 
      'Salt', 
      'Chlorine', 
      'Strong vibrations'
    ],
  },

  scientificContext: {
    wildHabitat: "Inhabits shallow, stagnant pools in Central African rainforests with low oxygen and muddy substrates. These calm, tannin stained waters contain dense vegetation for hiding.",
    sexualDimorphism: "Males display a small white or pink gland behind the front legs, while females are larger and lack this gland.",
    variants: [
      'Wild type olive grey', 
      'Blonde or leucistic tan'
    ],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Simulate a rainy season by lowering water levels and slightly raising the temperature to encourage spawning.',
    fryCare: 'Separate the eggs immediately as adults will eat them. Feed the tiny tadpoles liquid fry food or infusoria several times a day.',
    notes: 'Spawning is rare in home aquaria and usually follows a simulated rainy season.',
  },

  experienceData: {
    successRate: 0.55,
    survivalRate: 0.50,
    commonFailures: [
      { issue: 'starvation-death', cause: 'kept-with-fish-outcompeted-for-food', frequency: 0.45 },
      { issue: 'drowning-exhaustion', cause: 'deep-tank-or-strong-current', frequency: 0.18 },
      { issue: 'escape-and-desiccation', cause: 'lid-with-holes-or-gaps', frequency: 0.12 },
      { issue: 'dropsy-bloat', cause: 'poor-water-quality-or-overfeeding', frequency: 0.10 },
      { issue: 'bought-african-clawed-frog-by-mistake', cause: 'store-mislabeling', frequency: 0.08 },
    ],
    estimatedCosts: {
      initial: { min: 30, max: 80, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};