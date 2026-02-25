import type { Species } from '../../types/species';

export const anomalochromisThomasi: Species = {
  id: 'cichlid-001',
  slug: 'anomalochromis-thomasi',
  imageUrl: '/images/species/anomalochromis-thomasi.jpg',
  funFact: "Anomalochromis thomasi are Africa's hidden gem cichlids! Unlike aggressive cousins, these are gentle and shy. Watch breeding pairs become the ultimate power couple, fiercely defending babies while herding fry like tiny border collies. They mate for life!",

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
    biotope: 'Forest streams with high oxygen, vegetation, and rocky structures.',
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
    plantingNotes: 'Flat stones and broad leaved plants like Anubias serve as spawning sites. Visual barriers with driftwood and plants reduce stress.',
    hardscape: ['Flat stones', 'Driftwood', 'Caves'],
  },

  behavior: {
    tags: ['peaceful', 'pair-bonding', 'cichlid', 'parental-care'],
    minGroupSize: 2,
    description: 'Delightful dwarf cichlid that defies aggressive stereotype. Calm, slightly shy, and form strong monogamous pair bonds. Territorial during spawning but not plant destroyers.',
    
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Corydoras', 'Gouramis', 'Other dwarf cichlids'],
      badMates: ['Large aggressive Cichlids', 'Fin nippers', 'Hyperactive fish'],
      notes: 'Excellent cichlid for community tanks. Just ensure they have small territory.',
      
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
      "One of best beginner cichlids due to hardiness and peaceful nature.",
      "If they lose color, check water quality or stress levels. Best colors when comfortable.",
      "Excellent parents. Watching them guide fry cloud around tank is amazing.",
    ],

    commonMistakes: [
      "Keeping with aggressive tankmates that bully them.",
      "Not providing enough hiding spots.",
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
    wildHabitat: 'Small forest streams in West Africa.',
    sexualDimorphism: 'Subtle. Males slightly larger and more colorful. Females rounder when full of eggs.',
    variants: ['Standard'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'beginner',
    trigger: 'Good food and clean water.',
    fryCare: 'Parents provide excellent care. Fry eat baby brine shrimp immediately.',
    notes: 'Very easy to breed.',
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
