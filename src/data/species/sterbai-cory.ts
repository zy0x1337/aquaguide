import type { Species } from '../../types/species';

export const sterbaiCory: Species = {
  id: 'cory-sterbai',
  slug: 'sterbai-cory',
  imageUrl: '/images/species/corydoras-sterbai.jpg',
  
  funFact: "Sterbai Corys are the warm-water specialists of the Corydoras world, thriving at temperatures up to 28°C where most other species struggle, making them the ideal bottom dweller for Discus tanks.",

  imageCredit: {
    photographer: 'Matthew Mannell (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Corydoras_Sterbai.jpg',
    license: 'Public Domain',
    licenseUrl: 'https://en.wikipedia.org/wiki/Public_domain',
  },

  taxonomy: {
    scientificName: 'Corydoras sterbai',
    commonName: 'Sterbai Corydoras',
    family: 'Callichthyidae',
    origin: 'South America (Brazil and Bolivia - Guaporé River basin)',
    region: 'South America',
    biotope: 'Slow-moving tributaries and floodplain lagoons with sandy substrates and submerged wood.',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 6.5,
    color: 'Dark body covered in white spots with distinctive orange pectoral fins.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 2, max: 18 },
    kh: { min: 2, max: 12 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'surface',
      preference: 0.96,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.6,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'They appreciate planted tanks but need open sandy areas for foraging. They tolerate the warmer temperatures suitable for Amazon plants.',
    hardscape: ['Driftwood', 'Smooth River Stones', 'Terracotta Caves', 'Leaf Litter'],
  },

  behavior: {
    tags: ['shoaler', 'bottom_dweller', 'peaceful', 'robust', 'scaleless'],
    minGroupSize: 6,
    description: 'A peaceful, shoaling catfish that is more tolerant of warm water than most other Corydoras species. They are active foragers, constantly sifting through the substrate for food. Like other Corys, they will dart to the surface to gulp air.',
    
    compatibility: {
      goodMates: ['Discus', 'German Blue Rams', 'Bolivian Rams', 'Apistogramma', 'Cardinal Tetras', 'Rummynose Tetras', 'Angelfish', 'Peaceful Gouramis', 'Cherry Shrimp'],
      badMates: ['Goldfish', 'Cool-water Corydoras (Panda, Peppered)', 'Aggressive Cichlids'],
      notes: 'Their ability to thrive in warmer water (26-28°C) makes them unique among common Corydoras, ideal for Discus or Ram setups. Do not mix with cool-water Cory species due to temperature conflicts.',
      
      rules: [
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'Gravel damages their delicate barbels, leading to infection and an inability to locate food.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 6',
          reason: 'They are shoaling fish; small groups lead to stress and shyness.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'cool-water corydoras (Panda, Peppered)',
          reason: 'Temperature incompatibility. Sterbais need warm water (26-28°C), while others prefer cooler temps.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
        midwater: '15-30',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'evening'],
      nocturnal: false,
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
    diet: 'omnivore',
    effort: 'low',
    cost: 'medium',
    specialRequirements: [
      'Warm water (26-28°C ideal)', 
      'Sand substrate', 
      'Groups of 6+',
      'Well-oxygenated water',
    ],

    proTips: [
      "They are one of the few Corydoras suitable for warm Discus tanks.",
      "Orange pectoral fin intensity is a good indicator of health; pale fins suggest stress or poor water quality.",
      "Feed sinking tablets or pellets after lights out to ensure they get food before other fish."
    ],

    commonMistakes: [
      "Keeping them in cool water (under 24°C) makes them lethargic.",
      "Using gravel substrate wears down their barbels.",
      "Assuming all Corydoras have the same temperature requirements."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['wafers', 'pellets', 'bloodworms', 'brine-shrimp'],
      supplements: ['daphnia', 'vegetables', 'spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Warm water holds less oxygen, so ensure good surface agitation.',
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
    lifespanYears: 10,
    commonDiseases: ['barbel-erosion', 'red-blotch-disease', 'ich', 'columnaris'],
    sensitivities: ['Sharp substrate', 'Salt', 'Copper medications', 'Low oxygen'],
  },

  scientificContext: {
    wildHabitat: "Inhabits the Guaporé River basin in Brazil and Bolivia. They are found in slow-moving tributaries and lagoons with sandy substrates. Unlike many Corydoras, they originate from warmer lowland tropical waters, which explains their temperature preference.",
    sexualDimorphism: "Females are larger and rounder, especially when gravid. Males are slimmer and smaller.",
    variants: ['Wild Type', 'Captive-bred'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'beginner',
    trigger: 'Spawning is triggered by a large water change with slightly warmer water (26-27°C). Condition with high-protein foods.',
    fryCare: 'Eggs are laid on surfaces. Fry are robust and accept microworms or powdered food. Maintain warm water for fry.',
    notes: 'Breeding is straightforward and similar to other Corydoras, but temperature triggers differ.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.82,
    
    commonFailures: [
      { issue: 'lethargy-low-activity', cause: 'kept-too-cool-under-24C', frequency: 0.28 },
      { issue: 'barbel-erosion', cause: 'gravel-substrate', frequency: 0.25 },
      { issue: 'oxygen-stress', cause: 'poor-aeration-in-warm-water', frequency: 0.18 },
      { issue: 'red-blotch-disease', cause: 'dirty-substrate-bacteria', frequency: 0.15 },
      { issue: 'stress-hiding', cause: 'small-group-under-6-fish', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 180, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};