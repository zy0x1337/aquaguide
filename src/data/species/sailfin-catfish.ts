import type { Species } from '../../types/species';

export const hypoptopomaInexspectatum: Species = {
  id: 'loricariidae-hypoptopoma',
  slug: 'hypoptopoma-inexspectatum',
  imageUrl: '/images/species/sailfin-catfish.jpg',

  imageCredit: {
    photographer: 'Fajoe (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hypoptopoma_inexspectatum.jpg',
    license: 'Public Domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/'
  },
  
  funFact: "The Hypoptopoma has an extremely flattened body shape that resembles a 'flying saucer', allowing it to hug surfaces and maintain a low profile in the water. Its eyes are positioned on the sides of the head to detect predators while it grazes on biofilm.",

  taxonomy: {
    scientificName: 'Hypoptopoma inexspectatum',
    commonName: 'Sailfin Catfish / Hypoptopoma',
    family: 'Loricariidae',
    origin: 'South America (Upper Paraná River basin)',
    region: 'South America',
    biotope: 'Slow-moving river margins, backwaters, and floodplain lakes with submerged vegetation and leaf litter.',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 7,
    color: 'A highly flattened, oval body with a mottled pattern of browns, tans, and greys to blend in with leaf litter. The dorsal fin is tall and sail-like. The head is wide and flat with eyes positioned on the sides.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 22, max: 26, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 4, max: 15 },
    kh: { min: 2, max: 8 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.90,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.5,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'They feel most secure in densely planted tanks with plenty of hiding spots among wood and leaves. Floating plants help diffuse the light.',
    hardscape: ['Driftwood', 'Leaf litter', 'Submerged branches', 'Rocks'],
  },

  behavior: {
    tags: ['peaceful', 'bottom_dweller', 'shy'],
    minGroupSize: 3,
    description: 'A very peaceful, shy catfish that spends its time rasping on wood, rocks, and plant leaves. It is highly adapted for a sedentary lifestyle, often remaining motionless for long periods to avoid detection. It should not be kept with boisterous or aggressive bottom dwellers.',
    
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Pencilfish', 'Corydoras', 'Dwarf Shrimp', 'Snails'],
      badMates: ['Large aggressive cichlids', 'Plecos', 'Other territorial algae eaters', 'Fin nippers'],
      notes: 'They are poor competitors for food. Ensure they get their share, especially in tanks with faster algae eaters. Their peaceful nature makes them ideal for quiet, mature community tanks.',
      
      rules: [
        {
          type: 'requires',
          condition: 'driftwood',
          reason: 'They rasp on wood as a primary part of their diet and need it for digestion.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'peaceful tankmates',
          reason: 'They are easily bullied and will starve if outcompeted for food by aggressive tankmates.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'biofilm and algae',
          reason: 'They are specialized grazers. A mature tank with established surfaces is necessary for their survival.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '3-6',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'low',
      peakTimes: ['evening', 'night'],
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
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Mature tank with biofilm', 
      'Driftwood', 
      'Peaceful tankmates', 
      'Supplemental vegetables',
    ],

    proTips: [
      "Introduce them only to a well-established tank, as they rely on biofilm and algae growth.",
      "Supplement their diet with blanched vegetables like zucchini and spinach.",
      "They prefer dimmer lighting; floating plants are a great addition."
    ],

    commonMistakes: [
      "Adding them to new tanks leads to starvation.",
      "Keeping them with aggressive algae eaters results in them being outcompeted for food.",
      "Assuming they will clean a dirty tank; they have specific dietary needs."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['algae-wafers', 'spirulina', 'vegetables'],
      supplements: ['bloodworms', 'brine-shrimp'],
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
      notes: 'Maintain good water quality. They are sensitive to high nitrates and low oxygen.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 75,
      },
      filter: {
        required: true,
        type: 'hang-on-back',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['ich', 'velvet', 'bloat', 'starvation'],
    sensitivities: ['Poor water quality', 'Lack of biofilm', 'Competition for food'],
  },

  scientificContext: {
    wildHabitat: "Found in the Upper Paraná River system in Brazil. They inhabit slow-moving waters rich in submerged vegetation and organic debris. Their flattened shape allows them to hide in narrow spaces and among leaf litter.",
    sexualDimorphism: "Females are generally broader and rounder when viewed from above, especially when gravid. Males may have slightly more pronounced odontotes on the pectoral fin rays.",
    variants: ['Wild Type'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'expert',
    trigger: 'Specific breeding triggers are unknown in home aquaria. Spawning likely occurs on flat surfaces or in cavities.',
    fryCare: 'Fry are small and require microscopic algae and biofilm.',
    notes: 'Breeding is rare in home aquaria.',
  },
  
  experienceData: {
    successRate: 0.60,
    survivalRate: 0.55,
    
    commonFailures: [
      { issue: 'starvation', cause: 'no-biofilm-or-outcompeted', frequency: 0.40 },
      { issue: 'stress', cause: 'aggressive-tankmates', frequency: 0.30 },
      { issue: 'water-quality', cause: 'high-nitrates', frequency: 0.15 },
      { issue: 'acclimation', cause: 'parameter-shock', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 18, currency: 'EUR' },
    },
  },
};