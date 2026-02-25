import type { Species } from '../../types/species';

export const anomalochromisThomasi: Species = {
  id: 'cichlid-001',
  slug: 'anomalochromis-thomasi',
  imageUrl: '/images/species/anomalochromis-thomasi.jpg',
  funFact: "Unlike aggressive cichlid cousins, these gentle gems mate for life! Watch breeding pairs become ultimate parents, fiercely guarding babies and herding fry like tiny border collies.",

  imageCredit: {
    photographer: 'Haplochromis (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anomalochromis_thomasi.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  
  taxonomy: {
    scientificName: 'Anomalochromis thomasi',
    commonName: 'African Butterfly Cichlid',
    family: 'Cichlidae',
    origin: 'West Africa (Sierra Leone, Guinea, Liberia)',
    region: 'Africa',
    biotope: 'Forest streams with high oxygen levels, aquatic vegetation, and rocky structures.',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 7,
    color: 'Beige body covered in iridescent blue green spangles. Dark vertical bars appear based on mood. Red edging on dorsal fin.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 23, max: 27, ideal: 25 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.80,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 30,
      territories: 1,
    },
    
    bioloadMultiplier: 0.8,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Flat stones and broad leaved plants like Anubias provide ideal spawning sites. Visual barriers created with driftwood and plants significantly reduce stress levels.',
    hardscape: ['Flat stones', 'Driftwood', 'Caves'],
  },

  behavior: {
    tags: ['peaceful', 'pair-bonding', 'cichlid', 'parental-care'],
    minGroupSize: 2,
    description: 'Delightful dwarf cichlid that defies the typical aggressive stereotype. Calm and slightly shy, forming strong monogamous pair bonds. Displays territorial behavior during spawning but leaves plants intact.',
    
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Corydoras', 'Gouramis', 'Other dwarf cichlids'],
      badMates: ['Large aggressive Cichlids', 'Fin nippers', 'Hyperactive fish'],
      notes: 'Outstanding cichlid choice for community aquariums. Simply ensure they have a small designated territory.',
      
      rules: [
        {
          type: 'requires',
          condition: 'flat stones',
          reason: 'Essential for spawning behavior.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 5,
        midwater: '10 to 20',
        bottom: '4 to 6',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 1,
      territorial: 4,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'pair',
      maxMalesPerTank: 2,
    },
    
    finNipping: {
      risk: 'low',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Flat surfaces for breeding', 
      'Clean water',
    ],

    proTips: [
      "Among the best beginner cichlids thanks to hardiness and peaceful temperament.",
      "Color loss indicates water quality issues or stress. They display their finest colors when comfortable and secure.",
      "Exceptional parents providing fascinating behaviors. Watching them guide their fry cloud around the aquarium becomes mesmerizing.",
    ],

    commonMistakes: [
      "Housing with aggressive tankmates that constantly bully them.",
      "Failing to provide adequate hiding spots and visual barriers.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'pellets'],
      supplements: ['bloodworms', 'brine-shrimp', 'vegetables'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 20,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
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
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'parasites'],
    sensitivities: ['Poor water quality'],
  },

  scientificContext: {
    wildHabitat: 'Inhabits small forest streams throughout West Africa with clean, well oxygenated water.',
    sexualDimorphism: 'Subtle differences exist. Males grow slightly larger with more intense coloration. Females develop rounder bodies when carrying eggs.',
    variants: ['Standard'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'beginner',
    trigger: 'Quality nutrition and pristine water conditions.',
    fryCare: 'Parents provide outstanding care. Fry accept baby brine shrimp immediately after becoming free swimming.',
    notes: 'Breeding occurs readily in appropriate conditions.',
  },
  
  experienceData: {
    successRate: 0.90,
    survivalRate: 0.85,
    
    commonFailures: [
      { issue: 'stress', cause: 'aggressive tankmates', frequency: 0.30 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 10, currency: 'EUR' },
    },
  },
};
