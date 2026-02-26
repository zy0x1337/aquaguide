import type { Species } from '../../types/species';

export const kuhliLoach: Species = {
  id: 'loach-001',
  slug: 'kuhli-loach',
  imageUrl: '/images/species/kuhli-loach.jpg',
  
  funFact: "These scaleless, eel-like loaches are famous for entwining together in 'noodle piles' when resting, a unique social behavior linked to their need for security.",

  taxonomy: {
    scientificName: 'Pangio kuhlii',
    commonName: 'Kuhli Loach',
    family: 'Cobitidae',
    origin: 'Southeast Asia (Indonesia, Malaysia, Thailand: Borneo, Sumatra, Java)',
    region: 'Asia',
    biotope: 'Shallow blackwater forest streams with thick leaf litter and mud substrates.',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 10,
    color: 'An eel-like body with alternating bands of pinkish-orange and dark brown. They possess tiny eyes and four pairs of sensitive barbels around the mouth.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 24, max: 30, ideal: 26 },
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    gh: { min: 0, max: 10 },
    kh: { min: 0, max: 5 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.98,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 20,
      territories: 0,
    },
    
    bioloadMultiplier: 0.6,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense planting and floating plants help diffuse light, creating the dim environment these shy fish prefer. Leaf litter provides additional cover and foraging grounds.',
    hardscape: ['PVC pipes', 'Terracotta caves', 'Smooth driftwood', 'Leaf litter'],
  },

  behavior: {
    tags: ['peaceful', 'shy', 'nocturnal', 'social', 'bottom_dweller', 'scaleless'],
    minGroupSize: 6,
    description: 'A shy, nocturnal scavenger that spends daylight hours buried in the substrate or hiding in tight crevices. They are highly social and must be kept in groups, where they will often rest entangled with one another. At night, they emerge to sift through the sand for food using their sensitive barbels. Their scaleless skin makes them particularly sensitive to medications and water quality.',
    
    compatibility: {
      goodMates: ['Small peaceful fish', 'Corydoras', 'Otocinclus', 'Peaceful Gouramis', 'Rasboras'],
      badMates: ['Large cichlids', 'Aggressive bottom dwellers', 'Goldfish'],
      notes: 'Best kept in a species-specific setup or with other small, peaceful fish that will not compete for bottom space.',
      
      rules: [
        {
          type: 'requires',
          condition: 'fine sand substrate',
          reason: 'They burrow constantly for security and food; coarse gravel damages their delicate barbels and skin.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'groups of 6-10+ fish',
          reason: 'They are highly social and become withdrawn and stressed if kept alone or in small numbers.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'multiple caves/tubes',
          reason: 'Secure hiding spots are essential for them to feel safe enough to come out during the day.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'copper-based medications',
          reason: 'Their scaleless skin absorbs toxins rapidly, making standard copper treatments fatal.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 6-12,
        midwater: '12-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['night'],
      nocturnal: true,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 10,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Fine sand substrate mandatory', 
      'Groups of 6-10+', 
      'Multiple caves/tubes', 
      'Filter intake protection', 
      'No copper medications',
      'Tight-fitting lid',
    ],

    proTips: [
      "Use a sponge pre-filter to prevent these slender fish from being sucked into the filter intake.",
      "Feed sinking tablets or frozen foods after lights out to ensure they get their share before other fish eat it."
    ],

    commonMistakes: [
      "Using gravel or sharp sand leads to infection and erosion of their sensitive barbels.",
      "Keeping them alone results in a shy fish that hides constantly and rarely feeds.",
      "Using full-strength medications containing copper is often fatal due to their lack of scales."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets', 'wafers', 'bloodworms', 'tubifex'],
      supplements: ['brine-shrimp', 'daphnia'],
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
      notes: 'Be careful when vacuuming the substrate, as they often burrow just below the surface. Check filter intakes regularly.',
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
    lifespanYears: 10,
    commonDiseases: ['ich', 'skin-infections', 'barbel-erosion', 'internal-parasites'],
    sensitivities: ['Copper medications', 'Sharp substrate', 'High nitrates', 'Parameter swings'],
  },

  scientificContext: {
    wildHabitat: "Inhabits shallow, slow-moving forest streams and peat swamps in Southeast Asia. The water is typically soft, acidic, and stained dark by tannins from decomposing plant matter. They live among thick leaf litter and mud, burrowing for protection and foraging for small invertebrates. These environments are dimly lit and densely vegetated.",
    sexualDimorphism: "Females are noticeably plumper than males, especially when carrying eggs, which are visible through their semi-transparent skin. Males have a more streamlined body shape and larger pectoral fins used during courtship.",
    variants: ['Standard Kuhli (banded)', 'Black Kuhli (solid dark)', 'Silver/Cinnamon Kuhli'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Spawning is rare in home aquaria and often triggered by a large water change with cooler water to simulate the rainy season. Pairs perform a spiral dance near the surface to release eggs.',
    fryCare: 'The bright green eggs are adhesive and hatch within 24 hours. The tiny fry require infusoria for the first week before they can accept newly hatched brine shrimp. Providing heavy cover and pristine water is critical for their survival.',
    notes: 'Most breeding attempts are accidental, occurring in heavily planted tanks with large groups during stormy weather periods.',
  },
  
  experienceData: {
    successRate: 0.65,
    survivalRate: 0.60,
    
    commonFailures: [
      { issue: 'injuries-infections-death', cause: 'gravel-or-coarse-substrate-instead-of-fine-sand', frequency: 0.40 },
      { issue: 'constant-hiding-never-visible', cause: 'small-groups-under-6-or-no-caves', frequency: 0.25 },
      { issue: 'medication-poisoning-death', cause: 'copper-based-ich-treatments-on-scaleless-fish', frequency: 0.15 },
      { issue: 'sucked-into-filter-death', cause: 'uncovered-filter-intakes', frequency: 0.12 },
      { issue: 'stress-from-bright-lighting', cause: 'no-caves-or-dim-lighting', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 100, max: 250, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};