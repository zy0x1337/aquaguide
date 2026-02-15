import type { Species } from '../../types/species';

export const bettaSplendens: Species = {
  id: 'betta-001',
  slug: 'betta-splendens',
  imageUrl: '/images/species/betta-splendens.jpg',
  funFact: "Bettas have a specialized organ called the 'Labyrinth Organ' that allows them to breathe atmospheric air, helping them survive in oxygen-poor puddles.",

  taxonomy: {
    scientificName: 'Betta splendens',
    commonName: 'Siamese Fighting Fish',
    family: 'Osphronemidae',
    origin: 'Thailand, Cambodia (Chao Phraya, Mekong Basin)',
    region: 'Asia',
    biotope: 'Shallow rice paddies, swamps, and floodplains with dense vegetation',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 7,
    color: 'Variable (red, blue, white, black, multicolor)',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 20,
    tempC: { min: 24, max: 30, ideal: 26 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    flow: 'low',
    substrate: 'any',
    
    // NEW: Advanced environment data
    swimmingZone: {
      primary: 'surface',
      secondary: 'midwater',
      preference: 0.85, // 85% at surface
    },
    
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 20,
      territories: 1,
    },
    
    bioloadMultiplier: 1.0, // Average bioload
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Requires resting spots near the surface (e.g., Anubias leaves, Betta logs). Use silk or live plants only; plastic tears fins. Floating plants reduce stress.',
    hardscape: ['Driftwood', 'Smooth Stones', 'Caves'],
  },

  behavior: {
    tags: ['jumper', 'surface_dweller', 'labyrinth_fish', 'territorial'],
    minGroupSize: 1,
    description: 'Solitary and highly territorial. Males will fight to the death. They recognize their owners and can be trained to follow fingers or perform tricks.',
    
    compatibility: {
      goodMates: ['Snails', 'Kuhli Loaches', 'Harlequin Rasboras (in 60L+ tanks)'],
      badMates: ['Other Bettas', 'Guppies (colorful fins trigger aggression)', 'Gouramis', 'Fin-nippers (Tiger Barbs, Serpae Tetras)'],
      notes: 'Best kept alone. In community tanks, avoid anything with long fins or bright colors.',
      
      // NEW: Advanced compatibility rules
      rules: [
        {
          type: 'avoid',
          target: 'long-finned fish',
          reason: 'Triggers flaring and aggression - will attack guppies, angelfish, etc.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'other male bettas',
          reason: 'Males will fight to the death',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'tank-size >= 60L',
          reason: 'Community tanks only work in 60L+ with many hiding spots',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'female bettas',
          reason: 'Can work in "sorority" (5+ females) but requires experience',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 0,        // No other surface dwellers
        midwater: '5-10',  // Rasboras, small tetras okay
        bottom: '2-6',     // Corydoras, Kuhli Loaches okay
      },
    },
    
    // NEW: Quantified behavior
    aggressionLevel: {
      intraspecific: 10,  // Males will kill each other
      interspecific: 6,   // Nippy with long-finned fish
      territorial: 8,     // Strong territory defense
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'medium',
      targets: ['guppy', 'angelfish', 'long-finned goldfish', 'other bettas'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'low',
    specialRequirements: [
      'Heater is mandatory (tropical species)', 
      'Lid required (jumper)', 
      'Silk or live plants (no plastic)'
    ],

    proTips: [
      "Use a 'Betta hammock' or tall plant near the surface. Long fins are heavy, and they need to rest near the air.",
      "Flare training: Show him a mirror for 5 minutes a day. It provides exercise and reduces boredom, but don't overdo it (stress).",
      "Feed variety: Pellets are okay, but frozen bloodworms or daphnia will make his colors pop.",
      "Indian Almond Leaves (IAL) release tannins that prevent fin rot and mimic their natural habitat."
    ],

    commonMistakes: [
      "Keeping them in bowls/vases. They need a filter and heater like any other tropical fish.",
      "Plastic plants. These can shred delicate fins, leading to fin rot. Use silk or live plants.",
      "Thinking they are lonely. Bettas are solitary and perfectly happy alone. Adding tankmates often just adds stress.",
      "Strong filter flow. Long-finned Bettas get exhausted fighting the current."
    ],
    
    // NEW: Detailed feeding schedule
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets', 'brine-shrimp', 'bloodworms'],
      supplements: ['daphnia', 'frozen-food'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true, // For best color
      },
      fastingDay: 'sunday', // Helps prevent bloating
    },
    
    // NEW: Maintenance schedule
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Small tanks (20L) may need twice-weekly changes',
    },
    
    // NEW: Equipment requirements
    equipment: {
      heater: {
        required: true,
        watts: 50, // 50W for typical 20-40L tank
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'gentle', // Critical: strong flow exhausts them
      },
      airstone: false, // Not needed (labyrinth breather)
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['fin-rot', 'velvet', 'dropsy', 'ich', 'columnaris'],
    sensitivities: ['Cold water', 'Ammonia spikes', 'Sharp plastic plants'],
  },

  scientificContext: {
    wildHabitat: "Stagnant rice paddies and floodplains in Southeast Asia. The water is often warm, shallow (<30cm), and oxygen-poor due to decaying vegetation.",
    sexualDimorphism: "Males have much longer fins and brighter, more intense colors. Females have shorter fins and an 'egg spot' (ovipositor) on the belly.",
    variants: ['Veiltail', 'Halfmoon', 'Plakat (Short-finned)', 'Crowntail', 'Dumbo Ear', 'Koi Betta'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'Rise in temperature + shallow water (10-15cm). Male builds bubble nest at the surface.',
    fryCare: 'Male guards the nest. Remove female immediately after spawning (male may kill her). Fry need infusoria or liquid fry food.',
    notes: 'Breeding Bettas is aggressive; torn fins are common. Have separate tanks ready for male, female, and eventually jars for ALL males (they fight).',
  },
  
  // NEW: Community experience data
  experienceData: {
    successRate: 0.85, // 85% of users successfully keep bettas
    survivalRate: 0.78, // 78% survive 1+ year (bowl-keeping lowers this)
    
    commonFailures: [
      { issue: 'fin-rot', cause: 'plastic-plants', frequency: 0.40 },
      { issue: 'stress-death', cause: 'no-heater', frequency: 0.25 },
      { issue: 'swim-bladder', cause: 'overfeeding', frequency: 0.15 },
      { issue: 'aggression', cause: 'tankmate-conflict', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
