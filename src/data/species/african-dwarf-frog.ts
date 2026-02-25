import type { Species } from '../../types/species';

export const africanDwarfFrog: Species = {
  id: 'frog-001',
  slug: 'african-dwarf-frog',
  imageUrl: '/images/species/african-dwarf-frog.jpg',
  funFact: "African Dwarf Frogs are adorable clowns! Watch them 'zen float' motionless at the surface with limbs spread like starfish. Nearly blind, they hunt by smell and use webbed 'hands' to shovel food into their mouths like tiny excavators!",

  imageCredit: {
    photographer: 'CHUCAO (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hymenochirus_boettgeri_1.jpg',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
  },

  taxonomy: {
    scientificName: 'Hymenochirus boettgeri',
    commonName: 'African Dwarf Frog',
    family: 'Pipidae',
    origin: 'Central Africa (Congo Basin)',
    region: 'Africa',
    biotope: 'Slow moving rivers, shallow pools with dense vegetation and muddy substrates.',
  },

  visuals: {
    iconShape: 'frog',
    adultSizeCM: 4,
    color: 'Olive green to brown with darker mottled spots. Cream belly. Fully webbed front and hind feet.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.5, max: 7.8, ideal: 7.2 },
    gh: { min: 5, max: 20 },
    kh: { min: 3, max: 15 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'surface',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 45,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.6,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Heavily planted tanks mimic their wild habitat. Broad leaved plants near the surface are critical as resting platforms for breathing. Dense vegetation provides security.',
    hardscape: ['Smooth driftwood', 'Smooth stones', 'Terracotta pots', 'Floating cork bark'],
  },

  behavior: {
    tags: ['peaceful', 'social', 'nocturnal', 'amphibian'],
    minGroupSize: 2,
    description: 'Fully aquatic and spend their entire lives underwater, surfacing only to breathe air. Swimming is chaotic and frantic. Being nearly blind, they rely on touch and smell to find food. Social creatures that feel safer in groups.',
    
    compatibility: {
      goodMates: ['Peaceful Tetras', 'Rasboras', 'Endlers', 'Corydoras', 'Otocinclus'],
      badMates: ['Large fish', 'Fast competitive feeders', 'Cichlids', 'Goldfish'],
      notes: 'Extremely peaceful but vulnerable. In mixed tanks, they often starve because fast fish steal all food before frogs find it.',
      
      rules: [
        {
          type: 'avoid',
          target: 'fast aggressive feeders',
          reason: 'Frogs are slow, blind hunters. Fast fish devour all food before frogs notice, leading to starvation. Target feeding is mandatory.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'surface access',
          reason: 'Frogs must breathe atmospheric air every few minutes. Do not cover entire surface with floating plants.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'African Clawed Frogs',
          reason: 'Often mislabeled. Clawed Frogs grow huge (15cm), are aggressive predators, and eat Dwarf Frogs. Verify webbed front feet (Dwarf) vs clawed (Xenopus).',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 5,
        midwater: '10 to 20',
        bottom: '4 to 8',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'low',
      peakTimes: ['night', 'feeding'],
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
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Target feeding required', 
      'Very low water flow', 
      'Smooth substrate only',
    ],

    proTips: [
      "Use turkey baster to drop food directly in front of their noses. This ensures they eat before fish steal everything.",
      "Don't panic if they float motionless at surface. This 'zen pose' is just how they rest and breathe.",
      "Check the feet! Dwarf Frogs have webbing between front toes. No webbing with tiny black claws means aggressive African Clawed Frog.",
      "They shed their skin periodically and eat it. Looks like a ghostly white suit peeling off.",
    ],

    commonMistakes: [
      "Buying wrong frog species (Clawed Frog) which grows huge and eats fish.",
      "Using strong filters. High flow exhausts them and causes stress.",
      "Starvation in community tanks due to lack of target feeding.",
      "Using gravel that can be swallowed, causing fatal impaction.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets', 'brine-shrimp'],
      supplements: ['bloodworms', 'daphnia'],
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
      vacuumingNeeded: true,
      notes: 'Remove uneaten food promptly to prevent water fouling.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: false,
        type: 'sponge',
        flowRate: 'gentle',
      },
      airstone: true,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['dropsy', 'bacterial infections', 'fungal infections'],
    sensitivities: ['Strong currents', 'Sharp substrates', 'Copper'],
  },

  scientificContext: {
    wildHabitat: 'Inhabits stagnant, shaded waters in Congo Basin. These waters are warm, shallow, and low in oxygen, necessitating air breathing.',
    sexualDimorphism: 'Males are slimmer with visible post axillary gland behind front legs. Females are larger and rounder.',
    variants: ['Wild Type', 'Albino'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'medium',
    trigger: 'Simulate rainy season with cooler water changes. Males will buzz loudly underwater.',
    fryCare: 'Eggs float at surface. Remove adults as they eat eggs. Tadpoles are tiny and require infusoria.',
    notes: 'Raising tiny, fragile tadpoles is difficult for beginners.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'starvation', cause: 'outcompeted for food', frequency: 0.40 },
      { issue: 'impaction', cause: 'swallowed gravel', frequency: 0.20 },
      { issue: 'exhaustion', cause: 'strong filter flow', frequency: 0.20 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 80, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};
