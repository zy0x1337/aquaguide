import type { Species } from '../../types/species';

export const cardinalTetra: Species = {
  id: 'tetra-002',
  slug: 'cardinal-tetra',
  imageUrl: '/images/species/cardinal-tetra.jpg',
  
  funFact: "Often mistaken for the Neon Tetra, this species boasts a full-length crimson stripe and forms schools so vast in the wild that they resemble a living river of light.",

  taxonomy: {
    scientificName: 'Paracheirodon axelrodi',
    commonName: 'Cardinal Tetra',
    family: 'Characidae',
    origin: 'Brazil, Venezuela, Colombia (Rio Negro, Orinoco Basin - blackwater tributaries)',
    region: 'South America',
    biotope: 'Blackwater rivers and flooded forest streams with extremely soft, acidic, tannin-stained water.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'An iridescent blue-green stripe runs from nose to tail above a brilliant crimson belly. Dark substrates and tannin-stained water enhance these vibrant colors.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 75,
    tempC: { min: 23, max: 28, ideal: 25 },
    ph: { min: 4.5, max: 7.5, ideal: 6.0 },
    gh: { min: 1, max: 12 },
    kh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'dark',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'all',
      preference: 0.80,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.35,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Heavily planted tanks with floating plants provide the dim lighting conditions this shy species prefers. Dark substrate intensifies their coloration significantly.',
    hardscape: ['Driftwood', 'Indian Almond Leaves', 'River rocks', 'Leaf litter'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'shy', 'diurnal', 'colorful'],
    minGroupSize: 12,
    description: 'This peaceful shoaling fish is a stunning addition to the community aquarium, renowned for the iridescent blue and red stripes that run the length of its body. It is slightly larger and more robust than the similar Neon Tetra, making it a better choice for community tanks with larger tankmates. In the wild, they congregate in schools of thousands to confuse predators, a behavior that persists in the aquarium where they feel most secure in large groups. They are active swimmers that occupy the middle water layers, exploring their environment with a lively but non-aggressive demeanor.',
    
    compatibility: {
      goodMates: ['Corydoras', 'Harlequin Rasboras', 'Dwarf Cichlids', 'Otocinclus', 'Peaceful Gouramis'],
      badMates: ['Angelfish', 'Large Cichlids', 'Bettas', 'Goldfish'],
      notes: 'They thrive best in a species-specific setup or with other small, peaceful fish that will not outcompete them for food.',
      
      rules: [
        {
          type: 'avoid',
          target: 'angelfish',
          reason: 'Adult Angelfish are natural predators that will consume small tetras.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'large predatory fish',
          reason: 'Any fish with a mouth large enough to swallow them will pose a threat.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group size 12+ fish',
          reason: 'Keeping them in smaller groups causes stress and dilutes their natural schooling instincts.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'neon tetras',
          reason: 'While they can coexist, Cardinals prefer warmer water than Neons, requiring a temperature compromise.',
          severity: 'low',
        },
        {
          type: 'requires',
          condition: 'tank cycled 6+ weeks',
          reason: 'They are sensitive to ammonia and nitrite spikes common in newly established tanks.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 0-10,
        midwater: '12-30',
        bottom: '6-15',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'afternoon'],
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
      'Groups of 12 or more', 
      'Soft acidic water', 
      'Dim lighting',
      'Dark substrate',
      'Cycled tank',
    ],

    proTips: [
      "The vibrancy of the red stripe is a reliable indicator of water quality and overall health.",
      "Captive-bred specimens are significantly hardier than wild-caught individuals and adapt better to aquarium life.",
      "Darker substrates and the addition of tannins using Indian Almond leaves will make their colors truly pop."
    ],

    commonMistakes: [
      "Confusing them with Neon Tetras often leads to incorrect water temperature preferences.",
      "Keeping them in groups smaller than ten causes timidity and color loss.",
      "Housing them with adult Angelfish results in the tetras being eaten."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'flakes'],
      supplements: ['bloodworms', 'brine-shrimp', 'daphnia'],
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
      notes: 'Perform regular water changes to keep nitrates low, as they are sensitive to deteriorating water conditions.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
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
    lifespanYears: 5,
    commonDiseases: ['neon-tetra-disease', 'ich', 'columnaris', 'velvet', 'parasites'],
    sensitivities: ['Ammonia spikes', 'High nitrates', 'Hard water', 'Bright lighting', 'Temperature shocks'],
  },

  scientificContext: {
    wildHabitat: "Native to the upper Rio Negro and Orinoco drainages, this species inhabits slow-moving blackwater streams rich in tannins. The water is extremely soft and acidic, often stained the color of tea by decaying vegetation. These environments provide dense cover among submerged roots and leaf litter where they find safety from predators.",
    sexualDimorphism: "Females generally have a rounder, deeper body shape, particularly when laden with eggs. Males are slimmer and slightly smaller, but sexing is difficult without comparison.",
    variants: ['Standard wild type', 'Golden', 'Albino'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Breeding requires extremely soft, acidic water with a pH below 5.5 and the absence of light, mimicking their deep forest pool habitat.',
    fryCare: 'The eggs are photosensitive and must be kept in total darkness to hatch successfully. Fry are tiny and require microscopic foods like infusoria for the first few days.',
    notes: 'Breeding is notoriously difficult in home aquaria, and most specimens sold in the trade are wild-caught.',
  },
  
  experienceData: {
    successRate: 0.78,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'neon-tetra-disease', cause: 'wild-caught-parasites-or-weak-genetics', frequency: 0.25 },
      { issue: 'stress-death-hiding', cause: 'group-too-small-under-12', frequency: 0.20 },
      { issue: 'predation-by-angelfish', cause: 'kept-with-adult-angelfish', frequency: 0.15 },
      { issue: 'ich-outbreak', cause: 'temperature-fluctuation-or-stress', frequency: 0.12 },
      { issue: 'color-fading', cause: 'hard-water-or-bright-lighting', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 100, max: 250, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};