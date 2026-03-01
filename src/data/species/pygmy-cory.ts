import type { Species } from '../../types/species';

export const pygmyCory: Species = {
  id: 'pygmy-cory',
  slug: 'pygmy-cory',
  imageUrl: '/images/species/pygmy-cory.jpg',
  
  funFact: "Unlike their bottom-dwelling cousins, Pygmy Corys are midwater swimmers that hover in schools like tiny, synchronized submarines, breaking all the traditional Corydoras rules.",

  imageCredit: {
    photographer: 'Carnat Joel',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Corydoras_pygmaeus_carnat_joel_5.jpg',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/'
  },

  taxonomy: {
    scientificName: 'Corydoras pygmaeus',
    commonName: 'Pygmy Corydoras',
    family: 'Callichthyidae',
    origin: 'Brazil (Rio Madeira basin)',
    region: 'South America',
    biotope: 'Shallow, slow-moving tributary streams with sandy bottoms and dense vegetation.',
  },
  
  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 2.3,
    color: 'A silver-white body features a distinctive horizontal black stripe from nose to tail. They are significantly smaller than most other Corydoras species.',
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 26, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 2, max: 12 },
    kh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.60,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.25,
  },
  
  habitat: {
    planting: 'dense',
    plantingNotes: 'They thrive in heavily planted tanks where they weave through stems. Floating plants are beneficial for diffusing light, and fine-leaved plants offer security for this shy species.',
    hardscape: ['Smooth River Stones', 'Small Driftwood', 'Leaf Litter'],
  },
  
  behavior: {
    tags: ['shoaler', 'peaceful', 'bottom_dweller', 'midwater', 'nano', 'scaleless', 'active'],
    minGroupSize: 10,
    description: 'Unique among Corydoras, these fish spend a significant amount of time swimming in the middle of the water column. They are peaceful, active schooling fish that need the security of a large group to feel confident. In small numbers, they become shy and reclusive, but in groups of ten or more, they display mesmerizing synchronized swimming behaviors.',
    
    compatibility: {
      goodMates: ['Ember Tetras', 'Chili Rasboras', 'Celestial Pearl Danios', 'Otocinclus', 'Dwarf Shrimp', 'Nerite Snails'],
      badMates: ['Bettas', 'Large Cichlids', 'Goldfish', 'Large Tetras'],
      notes: 'Their tiny size makes them suitable only for nano community tanks with other peaceful small species. They must not be kept with fish large enough to eat them.',
      
      rules: [
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'Their delicate barbels are easily damaged by sharp gravel, leading to infection and an inability to locate food.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 10',
          reason: 'They are a highly social species that loses confidence and stops schooling in smaller groups.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'fish larger than 5cm',
          reason: 'Their diminutive size makes them an easy meal for even moderately sized peaceful fish.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'nitrates < 20ppm',
          reason: 'They are more sensitive to nitrate levels than larger Corydoras species.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 10-15,
        midwater: '10-15',
        bottom: '10-15',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'afternoon', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
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
      'Groups of 10-15+ required', 
      'Fine sand substrate mandatory', 
      'Nitrates must stay below 20ppm',
      'Micro-sized foods required',
    ],

    proTips: [
      "They require micro-pellets or crushed flakes, as standard wafers are too large for their tiny mouths.",
      "Midwater swimming is normal behavior for this species, not a sign of distress.",
      "They are sensitive to nitrates; maintain pristine water quality with frequent changes."
    ],

    commonMistakes: [
      "Keeping them in small groups results in shy, stressed fish that hide constantly.",
      "Using standard-sized foods leads to starvation as they cannot eat large particles.",
      "Housing them with medium-sized fish puts them at risk of being eaten."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'flakes', 'brine-shrimp', 'daphnia'],
      supplements: ['spirulina', 'bloodworms'],
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
      notes: 'Gentle vacuuming is necessary to avoid sucking up the small fish. They are excellent indicators of water quality; lethargy often signals rising nitrate levels.',
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
    lifespanYears: 4,
    commonDiseases: ['barbel-erosion', 'ich', 'fungal-infections', 'columnaris'],
    sensitivities: ['High nitrates', 'Sharp substrate', 'Copper medications', 'Salt', 'Temperature shocks'],
  },
  
  scientificContext: {
    wildHabitat: "Endemic to the shallow tributaries of the Rio Madeira basin in Brazil. They inhabit clear, slow-moving waters with sandy substrates and dense vegetation. Their unique midwater swimming habit likely evolved as a strategy to avoid benthic predators in their shallow native streams.",
    sexualDimorphism: "Females are noticeably rounder and deeper-bodied than males, particularly when carrying eggs. Males are smaller and more streamlined.",
    variants: ['Standard Pygmy', 'Captive-bred'],
  },
  
  breeding: {
    method: 'egg_layer',
    difficulty: 'beginner',
    trigger: 'Spawning occurs spontaneously in well-fed groups. Condition them with micro-worms and baby brine shrimp to encourage egg production.',
    fryCare: 'Females lay small batches of eggs on plants and glass. The tiny fry require microscopic foods like infusoria for the first week before they can accept baby brine shrimp. Growth is slow, and survival depends on maintaining stable, pristine water conditions.',
    notes: 'Breeding is relatively easy in a dedicated species tank, but raising the microscopic fry presents a challenge.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'underfeeding-starvation', cause: 'food-too-large-or-insufficient-micro-foods', frequency: 0.25 },
      { issue: 'nitrate-poisoning', cause: 'nitrates-over-20ppm', frequency: 0.20 },
      { issue: 'group-too-small-stress', cause: 'fewer-than-10-fish', frequency: 0.18 },
      { issue: 'barbel-erosion', cause: 'gravel-substrate', frequency: 0.15 },
      { issue: 'predation', cause: 'tankmates-too-large', frequency: 0.12 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 140, currency: 'EUR' },
      monthly: { min: 6, max: 15, currency: 'EUR' },
    },
  },
};