import type { Species } from '../../types/species';

export const oscar: Species = {
  id: 'oscar',
  slug: 'oscar',
  imageUrl: '/images/species/oscar.jpg',
  
  funFact: "Often called the 'river dog' of the aquarium, Oscars can recognize their owners and will excitedly 'wag' their bodies when approached, displaying a level of intelligence comparable to a pet dog.",

  imageCredit: {
    photographer: 'focusdanifocus on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/fische-oscar-fisch-oscar-tiger-7769543/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },
  
  taxonomy: {
    scientificName: 'Astronotus ocellatus',
    commonName: 'Oscar',
    family: 'Cichlidae',
    origin: 'South America (Amazon Basin - Peru, Brazil, Colombia)',
    region: 'South America',
    biotope: 'Flooded forests and blackwater river margins with slow current and submerged wood.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 35,
    color: 'Wild types feature a dark olive-green base with vibrant orange-red tiger stripes. A distinctive false eye spot on the tail base confuses predators.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 450,
    tempC: { min: 23, max: 29, ideal: 26 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 18 },
    kh: { min: 3, max: 12 },
    flow: 'low',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 150,
      verticalCM: 60,
      territories: 1,
    },
    
    bioloadMultiplier: 25.0,
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'Plants are often uprooted by digging. Use hardy species potted or attached to hardscape, and expect frequent redecorating.',
    hardscape: ['Massive driftwood', 'Large flat slate', 'PVC pipes', 'Smooth river rocks'],
  },

  behavior: {
    tags: ['intelligent', 'predator', 'territorial'],
    minGroupSize: 1,
    description: 'These large cichlids are renowned for their intelligence and dog-like personalities, often recognizing their owners and begging for food. They are powerful diggers that will constantly rearrange the substrate and decor. While interactive, they are predatory by nature and will consume any fish small enough to fit in their mouths. They require ample space not just for swimming, but to manage the significant territory they claim.',
    
    compatibility: {
      goodMates: ['Large Plecos', 'Giant Danios', 'Large Silver Dollars', 'Jack Dempsey Cichlids'],
      badMates: ['Small fish', 'Angelfish', 'Discus', 'Goldfish', 'Shrimp'],
      notes: 'Best kept as a single specimen in a species-only tank due to their predatory nature and high waste production. Tankmates must be robust and large.',
      
      rules: [
        {
          type: 'requires',
          condition: '450L minimum for single adult Oscar',
          reason: 'Smaller tanks cause stunting, organ failure, and fatal ammonia spikes due to their massive bioload.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'massive filtration 4-6x tank volume turnover/hour',
          reason: 'They produce an enormous amount of waste; insufficient filtration leads to chronic water quality issues.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'Oscar pairs without 900L+ tank',
          reason: 'Pairs become violently territorial without enough space to establish separate territories.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'feeding live goldfish',
          reason: 'Goldfish carry parasites and cause fatty liver disease due to high fat content.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '0-6',
        bottom: '1',
      },
    },
    
    aggressionLevel: {
      intraspecific: 8,
      interspecific: 7,
      territorial: 9,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'pair',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'high',
      targets: ['all smaller fish - predatory behavior'],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'high',
    cost: 'high',
    specialRequirements: [
      '450L minimum tank', 
      'Heavy filtration (canister + sump)', 
      '50% weekly water changes', 
      'Secure lid', 
      'Fine sand substrate',
    ],

    proTips: [
      "Invest in heavy-duty filtration (canister plus sump) as they produce massive amounts of waste.",
      "They bond strongly with owners and can be hand-fed with tongs, providing excellent enrichment.",
      "Plan for their adult size immediately; a 450L tank is the absolute minimum for a single adult."
    ],

    commonMistakes: [
      "Keeping them in undersized tanks leads to stunting and organ failure.",
      "Underestimating their bioload leads to rapid water quality deterioration.",
      "Feeder goldfish cause fatty liver disease; use quality pellets and frozen foods instead."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['cichlid-pellets-large', 'frozen-tilapia'],
      supplements: ['frozen-krill'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 50,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Large weekly water changes are mandatory to keep nitrate levels manageable given their high waste output.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 300,
      },
      filter: {
        required: true,
        type: 'canister-plus-sump',
        flowRate: 'strong',
      },
      airstone: true,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 15,
    commonDiseases: ['hole-in-head-disease', 'ich', 'columnaris', 'fatty-liver-disease'],
    sensitivities: ['Ammonia spikes', 'High nitrates', 'Fatty foods', 'Copper medications', 'Stunting'],
  },

  scientificContext: {
    wildHabitat: "Native to the Amazon Basin, Oscars inhabit floodplain forests and slow-moving rivers. They thrive in warm, soft, acidic waters with muddy substrates and plenty of submerged wood. They are opportunistic feeders, consuming small fish, insects, and crustaceans.",
    sexualDimorphism: "Sexing is difficult. Males may have thicker lips and a more pointed dorsal fin, while females appear fuller when gravid. Venting is the most reliable method.",
    variants: ['Tiger Oscar', 'Albino Oscar', 'Red Oscar', 'Leopard Oscar', 'Longfin Oscar'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'expert',
    trigger: 'Requires a very large tank and a bonded pair raised together. Spawning is triggered by high temperatures and large water changes with softer water.',
    fryCare: 'Both parents meticulously care for the eggs and fry, digging pits to move the larvae. Fry grow quickly on baby brine shrimp and require separation once the parents begin a new breeding cycle.',
    notes: 'Breeding is challenging due to the space requirements and potential aggression between partners.',
  },
  
  experienceData: {
    successRate: 0.50,
    survivalRate: 0.55,
    
    commonFailures: [
      { issue: 'stunted-growth-liver-failure', cause: 'tank-too-small-under-450L-stunting', frequency: 0.35 },
      { issue: 'chronic-ammonia-poisoning', cause: 'inadequate-filtration-waste-buildup', frequency: 0.25 },
      { issue: 'hole-in-head-disease', cause: 'high-nitrates-over-40ppm-from-poor-maintenance', frequency: 0.15 },
      { issue: 'fatty-liver-disease', cause: 'feeder-goldfish-diet-high-fat', frequency: 0.15 },
      { issue: 'pair-fighting-death', cause: 'oscar-pair-in-tank-under-900L', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 800, max: 2500, currency: 'EUR' },
      monthly: { min: 40, max: 100, currency: 'EUR' },
    },
  },
};