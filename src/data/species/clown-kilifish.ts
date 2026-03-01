import type { Species } from '../../types/species';

export const epiplatysAnnulatus: Species = {
  id: 'killie-epiplatys-annulatus',
  slug: 'clown-killifish',
  imageUrl: '/images/species/clown-killifish.jpg',

  imageCredit: {
    photographer: 'Dornenwolf (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ringelhechtling_-Epiplatys_annulatus.jpg',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/'
  },

  funFact: "The Clown Killifish is a miniature wonder, barely reaching 4cm. Males possess a tail fin that mimics the head of a larger fish—a false eye spot that confuses predators. They are 'non-annual' killifish, meaning their eggs develop in water without a dry period, making them significantly easier to breed than many other killifish species.",

  taxonomy: {
    scientificName: 'Epiplatys annulatus',
    commonName: 'Clown Killifish / Banded Panchax',
    family: 'Aplocheilidae',
    origin: 'West Africa (Guinea, Liberia, Sierra Leone)',
    region: 'Africa',
    biotope: 'Shallow, slow-moving coastal streams, swamps, and rice paddies with dense surface vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4,
    color: 'Males are striking with vertical black bars contrasting against a yellowish-white body. The tail fin is a vivid red-orange with a distinctive black spot edged in white. Females are smaller with duller coloration and lack the vibrant tail pattern.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 30,
    tempC: { min: 20, max: 24, ideal: 22 },
    ph: { min: 6.0, max: 7.0, ideal: 6.5 },
    gh: { min: 2, max: 10 },
    kh: { min: 1, max: 6 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'surface',
      preference: 0.95,
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
    plantingNotes: 'Floating plants are absolutely critical. They provide the security these surface-dwellers need and shade the tank. A dark tank floor with heavy surface cover encourages them to display their best colors.',
    hardscape: ['Driftwood branches near surface', 'Leaf litter', 'Floating plants (Riccia, Salvinia, Duckweed)'],
  },

  behavior: {
    tags: ['surface_dweller', 'jumper', 'peaceful'],
    minGroupSize: 4,
    description: 'A timid, surface-dwelling species that spends almost all its time near the water\'s surface, waiting for small insects to fall. Males can be territorial with each other, displaying by flaring their fins, but rarely cause injury. They are easily startled and will jump if frightened. Best kept in a species-only tank due to their specific requirements for calm water and surface food.',
    
    compatibility: {
      goodMates: ['Pygmy Corydoras', 'Corydoras hastatus', 'Amano Shrimp', 'Small peaceful shrimp'],
      badMates: ['Active swimmers (Danios, Tetras)', 'Fin nippers', 'Large fish', 'Cichlids', 'Bettas'],
      notes: 'Best kept in a species-only setup. They are easily outcompeted for food and easily stressed by fast-moving tankmates. Their small mouths restrict them to tiny foods often ignored by other fish.',
      
      rules: [
        {
          type: 'requires',
          condition: 'secure lid with no gaps',
          reason: 'They are expert jumpers and will leap from the tank if startled or during spawning chases. An open tank guarantees losses.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'very low water flow',
          reason: 'They inhabit stagnant backwaters in the wild. Even moderate filter output can stress them and prevent them from feeding effectively.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'temperature above 26°C',
          reason: 'They are a cooler-water species. Prolonged exposure to tropical temperatures shortens their lifespan.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '0',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 1,
      territorial: 2,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'evening'],
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
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Secure lid', 
      'Floating plants', 
      'Very low flow', 
      'Small live/frozen foods', 
      'Cooler water (20-24°C)',
    ],

    proTips: [
      "Use a sponge filter for gentle filtration. They cannot fight strong currents.",
      "Feed small live foods like fruit flies, grindal worms, or baby brine shrimp. Some individuals accept high-quality micro-pellets but live food is best for color.",
      "They look best in a dark, tannin-stained tank with heavy floating cover."
    ],

    commonMistakes: [
      "Keeping them in standard heated tropical tanks (26°C+) reduces their lifespan.",
      "Housing them with active fish leads to starvation, as they are slow, deliberate feeders.",
      "Strong water flow from power filters blows them around the tank."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['bloodworms', 'brine-shrimp'],
      supplements: ['daphnia'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Gentle water changes are vital. Do not pour water directly from a height, as this creates currents they dislike. Drip acclimation is recommended for new specimens.',
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
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['ich', 'velvet', 'fungal-infections'],
    sensitivities: ['Strong currents', 'High temperatures', 'Lack of cover', 'Large foods'],
  },

  scientificContext: {
    wildHabitat: "Found in shallow, often temporary bodies of water in coastal West Africa. These habitats are heavily vegetated with very little current and stained with tannins. The water is soft and slightly acidic.",
    sexualDimorphism: "Males are larger, deeper-bodied, and display the characteristic bright red tail with a black spot. Females are smaller, plainer, and have a clear or yellowish tail.",
    variants: ['Wild Type (Monrovia)', 'Campoma'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Spawning occurs readily in soft, acidic water. Provide fine-leaved plants or spawning mops at the surface. A pair will spawn daily for weeks.',
    fryCare: 'Eggs are tiny and somewhat adhesive. Parents will eat eggs if given the chance. Remove spawning mops to a separate container. Fry are very small and need green water or infusoria for the first few days, then vinegar eels or microworms.',
    notes: 'Unlike annual killifish, their eggs do not need a dry period. They hatch in about 10-14 days submerged.',
  },
  
  experienceData: {
    successRate: 0.60,
    survivalRate: 0.55,
    
    commonFailures: [
      { issue: 'jumping-death', cause: 'no-lid-startled', frequency: 0.30 },
      { issue: 'starvation', cause: 'food-too-large-or-outcompeted', frequency: 0.25 },
      { issue: 'stress-from-flow', cause: 'filter-too-strong', frequency: 0.20 },
      { issue: 'heat-stress', cause: 'temp-over-26c', frequency: 0.15 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};