import type { Species } from '../../types/species';

export const sailfinPleco: Species = {
  id: 'pleco-004',
  slug: 'sailfin-pleco',
  imageUrl: '/images/species/sailfin-pleco.jpg',
  
  funFact: "Sold as cute 5cm juveniles, these fish can grow into 50cm armored giants, making them one of the aquarium hobby's biggest rehoming challenges. Their massive dorsal fin unfurls like a sail during territorial displays.",

  taxonomy: {
    scientificName: 'Pterygoplichthys gibbiceps',
    commonName: 'Sailfin Pleco',
    family: 'Loricariidae',
    origin: 'South America (Orinoco and Amazon River Basins)',
    region: 'South America',
    biotope: 'Large rivers with strong currents, sandy substrates, and submerged driftwood forests.',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 50,
    color: 'Juveniles display a striking pattern of dark spots on a golden-brown body. Adults become a uniform muddy brown or grey. The massive, sail-like dorsal fin is a key identifier.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 500,
    tempC: { min: 23, max: 30, ideal: 26 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 4, max: 20 },
    kh: { min: 2, max: 15 },
    flow: 'high',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.90,
    },
    
    spaceNeeds: {
      horizontalCM: 180,
      verticalCM: 60,
      territories: 1,
    },
    
    bioloadMultiplier: 3.5,
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'They will uproot and destroy most plants. Hardscape-only setups are recommended, with massive pieces of driftwood for grazing and shelter.',
    hardscape: ['Massive driftwood', 'Large smooth boulders', 'Extra-large caves', 'PVC pipes'],
  },

  behavior: {
    tags: ['semi-aggressive', 'nocturnal', 'territorial', 'algae_eater', 'bottom_dweller'],
    minGroupSize: 1,
    description: 'A nocturnal giant that becomes increasingly territorial with age. They are known for "bulldozing" decor and producing enormous amounts of waste. While generally peaceful toward midwater fish, they can be aggressive toward other bottom dwellers. Their distinctive dorsal fin is raised during displays of aggression or excitement.',
    
    compatibility: {
      goodMates: ['Large robust cichlids (Oscars, Severums)', 'Large catfish (Synodontis)', 'Silver Dollars', 'Bichirs'],
      badMates: ['Small fish', 'Other plecos', 'Bottom-dwellers', 'Peaceful community fish', 'Invertebrates'],
      notes: 'Best kept alone in a large tank or with large, robust tankmates that occupy the upper levels. They are not suitable for the average community aquarium.',
      
      rules: [
        {
          type: 'requires',
          condition: '500L+ tank minimum (adults)',
          reason: 'Adults grow to 50cm and produce a massive bioload that will crash smaller systems.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'small/medium peaceful fish',
          reason: 'They can accidentally crush or injure smaller tankmates during their nocturnal activity.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'other large plecos',
          reason: 'Territorial battles between large plecos often result in severe injury or death.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'driftwood mandatory',
          reason: 'They require wood for digestive health and will rasp on it constantly.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'industrial filtration',
          reason: 'They produce more waste than almost any other aquarium fish relative to their size.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0-5,
        midwater: '5-10',
        bottom: '1',
      },
    },
    
    aggressionLevel: {
      intraspecific: 9,
      interspecific: 6,
      territorial: 9,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['night'],
      nocturnal: true,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'low',
      targets: [],
    },
  },

  care: {
    difficulty: 'expert',
    diet: 'herbivore',
    effort: 'high',
    cost: 'high',
    specialRequirements: [
      'Minimum 500L tank', 
      'Massive driftwood', 
      'Industrial-grade filtration',
      'Weekly 50% water changes',
      '20+ year commitment',
    ],

    proTips: [
      "This is a commitment for decades; ensure you have the space and resources for a 50cm fish.",
      "Vegetable matter is essential; feed blanched zucchini, cucumber, and spirulina wafers daily.",
      "They are notorious for destroying planted setups; focus on a functional hardscape."
    ],

    commonMistakes: [
      "Buying a juvenile without understanding the adult size and bioload.",
      "Underestimating the amount of waste they produce, leading to poor water quality.",
      "Keeping them in planted tanks, which they will destroy."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['vegetables', 'algae-wafers'],
      supplements: ['blanched-zucchini', 'spirulina', 'pellets'],
      vegetarian: true,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 50,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Massive water changes and heavy filtration are required to manage their significant bioload. Daily vacuuming may be necessary to remove the large amounts of waste produced.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 300,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'strong',
      },
      airstone: true,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 20,
    commonDiseases: ['ich', 'bloat', 'digestive-issues-no-wood', 'skin-infections'],
    sensitivities: ['Copper medications', 'High nitrates', 'Lack of fiber/wood', 'Poor oxygenation'],
  },

  scientificContext: {
    wildHabitat: "Inhabits large, fast-flowing rivers in the Amazon and Orinoco basins. They are found in deep pools and rocky areas with abundant driftwood. They have been introduced to Florida and other regions, where they are considered an invasive species due to their ability to disrupt local ecosystems.",
    sexualDimorphism: "Sexing is extremely difficult until the fish is fully mature. Males may develop a small genital papilla and a broader head, but these differences are subtle.",
    variants: ['Wild-type (Leopard)', 'Gold/Albino', 'Orinoco Sailfin'],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'expert',
    trigger: 'Breeding in home aquaria is virtually impossible due to the massive tank size required. They are bred commercially in large outdoor ponds.',
    fryCare: 'Commercial breeding involves massive ponds where males can excavate deep burrows. Hobbyists should not attempt breeding as the fry require industrial-scale rearing facilities.',
    notes: 'Leave breeding to commercial facilities; they require specific environmental triggers and space that cannot be replicated in home tanks.',
  },
  
  experienceData: {
    successRate: 0.15,
    survivalRate: 0.45,
    
    commonFailures: [
      { issue: 'outgrew-tank-surrendered', cause: 'impulse-buy-undersized-tank', frequency: 0.50 },
      { issue: 'nitrate-poisoning-bioload-crash', cause: 'insufficient-filtration-water-changes', frequency: 0.20 },
      { issue: 'fighting-injuries-death', cause: 'kept-with-other-large-plecos', frequency: 0.12 },
      { issue: 'digestive-failure', cause: 'insufficient-driftwood-or-vegetables', frequency: 0.10 },
      { issue: 'chronic-stress-stunting', cause: 'tank-too-small-poor-conditions', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 800, max: 2500, currency: 'EUR' },
      monthly: { min: 50, max: 150, currency: 'EUR' },
    },
  },
};