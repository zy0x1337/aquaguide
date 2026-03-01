import type { Species } from '../../types/species';

export const pandaCory: Species = {
  id: 'cory-001',
  slug: 'panda-cory',
  imageUrl: '/images/species/panda-cory.jpg',
  
  funFact: "Named for their striking resemblance to giant pandas, these catfish have three distinct black patches over their eyes, dorsal fin, and tail base. They possess a modified intestine that allows them to gulp atmospheric air at the surface, a vital adaptation for surviving in oxygen-poor water.",

  taxonomy: {
    scientificName: 'Corydoras panda',
    commonName: 'Panda Corydoras',
    family: 'Callichthyidae',
    origin: 'Peru (Ucayali River system, Rio Lurin)',
    region: 'South America',
    biotope: 'Cool, clear mountain streams fed by Andean snowmelt with sandy substrates and moderate flow.',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 5,
    color: 'A peach-pink to creamy-white body featuring three distinct black patches: one covering the eyes like a mask, one on the dorsal fin, and one at the base of the tail.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 20, max: 24, ideal: 22 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 2, max: 12 },
    kh: { min: 1, max: 8 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'surface',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.5,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Planted areas provide security, but open sandy spaces are essential for foraging. Floating plants help diffuse light for these shy fish. Sand is mandatory to protect their delicate barbels.',
    hardscape: ['Smooth river stones', 'Driftwood', 'Terracotta pots', 'Leaf litter'],
  },

  behavior: {
    tags: ['shoaler', 'bottom_dweller', 'peaceful', 'diurnal', 'shy', 'scaleless', 'nano'],
    minGroupSize: 6,
    description: 'A shy and sensitive species that is more timid than other Corydoras. They are social fish that need the security of a group to feel confident enough to venture out. They spend their day actively sifting through sand for food, occasionally darting to the surface to gulp air. When startled, they tend to freeze rather than flee.',
    
    compatibility: {
      goodMates: ['Neon Tetras', 'Harlequin Rasboras', 'Ember Tetras', 'Celestial Pearl Danios', 'Otocinclus', 'Cherry Shrimp', 'Apistogramma'],
      badMates: ['Goldfish', 'Large Cichlids', 'Discus', 'German Rams'],
      notes: 'They are coolwater fish and should not be kept in standard tropical temperatures. They are ideal for unheated or temperate setups alongside other coolwater species.',
      
      rules: [
        {
          type: 'requires',
          condition: 'temperature <= 24°C',
          reason: 'Native to high-altitude streams, they suffer stress and illness in standard tropical temperatures above 24°C.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'warm-water fish',
          reason: 'Temperature incompatibility makes them unsuitable tankmates for Discus or Rams.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'Gravel damages their sensitive barbels, leading to infection and inability to find food.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 6',
          reason: 'They are a social species that becomes withdrawn and stressed in small numbers.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 10-15,
        midwater: '15-25',
        bottom: '6-10',
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
      'Cool water (22°C ideal)', 
      'Sand substrate mandatory', 
      'Groups of 6+',
      'Gentle current',
    ],

    proTips: [
      "Temperature is the most critical factor; they thrive in cool water (22°C) and will deteriorate in the heat of a typical tropical tank.",
      "Use sand to protect their barbels, which are essential for locating food.",
      "Provide plenty of cover and dim lighting to help these shy fish feel secure."
    ],

    commonMistakes: [
      "Keeping them in heated tropical tanks causes stress and shortens their lifespan.",
      "Gravel substrate wears down their barbels, preventing them from foraging effectively.",
      "Keeping them in small groups leads to constant hiding and poor health."
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
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Perform water changes with cool water to match their preferred temperature range. They are sensitive to nitrates, so regular maintenance is necessary.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 10,
    commonDiseases: ['barbel-erosion', 'red-blotch-disease', 'ich', 'columnaris', 'fungal-infections'],
    sensitivities: ['High temperatures', 'Sharp substrate', 'High nitrates', 'Salt', 'Copper medications'],
  },

  scientificContext: {
    wildHabitat: "Inhabits clear, cool tributaries of the Ucayali River system in Peru. These high-altitude streams are fed by Andean snowmelt, resulting in well-oxygenated water with temperatures rarely exceeding 22°C. They are found over sandy substrates among leaf litter and aquatic vegetation. While they are common in the aquarium trade, their specific habitat requirements make them vulnerable to improper care.",
    sexualDimorphism: "Females are significantly rounder and broader, especially when carrying eggs. Males are smaller and more streamlined.",
    variants: ['Standard Panda', 'Longfin Panda', 'Albino Panda (rare)'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'beginner',
    trigger: 'Simulate the rainy season with a large water change using water that is slightly cooler than the tank (18-20°C). Condition with high-protein foods.',
    fryCare: 'Eggs are laid on glass or plant leaves. Fry are delicate and require microscopic foods like infusoria upon hatching, moving on to baby brine shrimp as they grow. Cool water temperatures are critical for fry development.',
    notes: 'Breeding is straightforward if their temperature requirements are met, but fry are more sensitive than those of other Corydoras species.',
  },
  
  experienceData: {
    successRate: 0.72,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'temperature-stress-death', cause: 'kept-too-warm-over-24C', frequency: 0.40 },
      { issue: 'barbel-erosion', cause: 'gravel-substrate', frequency: 0.25 },
      { issue: 'initial-die-off', cause: 'new-tank-or-transport-stress', frequency: 0.15 },
      { issue: 'nitrate-poisoning', cause: 'poor-maintenance', frequency: 0.10 },
      { issue: 'stress-death', cause: 'kept-alone-or-small-group', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 70, max: 180, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};