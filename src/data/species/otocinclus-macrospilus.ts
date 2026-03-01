import type { Species } from '../../types/species';

export const otocinclusMacrospilus: Species = {
  id: 'oto-002',
  slug: 'otocinclus-macrospilus',
  imageUrl: '/images/species/otocinclus-macrospilus.jpg',
  
  funFact: "Distinguished from the common Oto by its 'broken' stripe: the lateral line stops before the tail, leaving a separate heart-shaped spot. 90% of 'Otocinclus vittatus' sold in stores are actually this species.",

  taxonomy: {
    scientificName: 'Otocinclus macrospilus',
    commonName: 'Marbled Otocinclus',
    family: 'Loricariidae',
    origin: 'South America (Peru - Amazon River system)',
    region: 'South America',
    biotope: 'Slow to moderate flow river margins with dense vegetation and submerged wood.',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 3.5,
    color: 'Mottled tan body with a distinctive interrupted dark lateral stripe that stops before the tail base, featuring a separate heart-shaped spot on the caudal peduncle.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 21, max: 26, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 2, max: 15 },
    kh: { min: 1, max: 8 },
    flow: 'moderate',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.3,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Broad-leaved plants like Anubias and Amazon Swords are essential grazing surfaces. A mature tank with established biofilm is mandatory for their survival.',
    hardscape: ['Driftwood', 'Smooth river stones'],
  },

  behavior: {
    tags: ['algae_eater', 'peaceful', 'shy', 'shoaler', 'diurnal', 'bottom_dweller'],
    minGroupSize: 6,
    description: 'A peaceful, shy algae eater that spends its day constantly grazing on biofilm and algae. It is a schooling species that becomes highly stressed if kept alone or in small numbers. While excellent for planted tanks, they are delicate and require specific conditions to thrive.',
    
    compatibility: {
      goodMates: ['Small peaceful tetras', 'Rasboras', 'Corydoras', 'Dwarf shrimp', 'Snails'],
      badMates: ['Goldfish', 'Large cichlids', 'Fast competitive feeders'],
      notes: 'They are completely safe with shrimp but cannot compete for food with fast or boisterous tankmates.',
      
      rules: [
        {
          type: 'requires',
          condition: 'mature tank (6+ months old) with established algae',
          reason: 'Adding them to a new, sterile tank results in starvation, which is the leading cause of death.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'groups of 6+ fish minimum',
          reason: 'They are schooling fish; individuals kept alone will hide, refuse food, and waste away.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'fast/competitive feeders',
          reason: 'Being slow grazers, they will be outcompeted for food and slowly starve.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 8-12,
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
      level: 'moderate',
      peakTimes: ['all-day'],
      nocturnal: false,
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
    difficulty: 'expert',
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Mature tank with established algae', 
      'Constant biofilm supply', 
      'Groups 6+ mandatory', 
      'Peaceful tankmates only', 
      'Pristine water quality',
    ],

    proTips: [
      "Never introduce them to a newly set up tank. They require a thick layer of algae and biofilm to graze on immediately.",
      "Drip acclimation is mandatory as they are extremely sensitive to sudden changes in water chemistry.",
      "Supplement their diet with algae wafers and blanched vegetables, as most tanks do not produce enough natural algae to sustain a group."
    ],

    commonMistakes: [
      "Adding them to new tanks causes starvation within weeks due to lack of food sources.",
      "Keeping them in groups smaller than six leads to chronic stress and eventual death.",
      "Using standard acclimation methods often results in shock and mortality."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['algae-wafers', 'biofilm', 'spirulina', 'blanched-zucchini'],
      supplements: ['GlasGarten BacterAE'],
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
      notes: 'They are highly sensitive to organic pollutants and require strict adherence to water quality standards.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'moderate',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['starvation', 'ich', 'velvet', 'stress-related-infections'],
    sensitivities: ['Ammonia', 'Nitrite', 'High nitrates', 'Copper medications', 'Parameter shock'],
  },

  scientificContext: {
    wildHabitat: "Inhabits shallow, vegetation-rich margins of the Amazon River system in Peru. They are found in large groups grazing on aufwuchs (biofilm) on submerged roots and leaves in soft, acidic water.",
    sexualDimorphism: "Females are generally rounder and larger than males, especially when gravid. Males have a slimmer profile.",
    variants: ['O. macrospilus', 'O. vittatus', 'O. vestitus', 'O. cocama'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Breeding is rare and often accidental. Triggers include a drop in temperature simulating the rainy season and heavy feeding of protein-rich foods.',
    fryCare: 'Tiny fry require infusoria and green water for the first few weeks. Growth is slow, and survival rates are low without specific care.',
    notes: 'Successful breeding in home aquaria is considered a significant achievement.',
  },
  
  experienceData: {
    successRate: 0.30,
    survivalRate: 0.35,
    
    commonFailures: [
      { issue: 'starvation-death', cause: 'added-to-new-clean-tanks-with-no-algae-biofilm', frequency: 0.70 },
      { issue: 'acclimation-shock-death', cause: 'poor-acclimation-parameter-shock-first-week', frequency: 0.15 },
      { issue: 'stress-hiding-death', cause: 'kept-singly-or-small-groups-under-6-fish', frequency: 0.08 },
      { issue: 'stress-from-boisterous-tankmates', cause: 'mixed-with-active-fish-cant-graze-peacefully', frequency: 0.05 },
      { issue: 'ammonia-nitrite-poisoning', cause: 'poor-water-quality-sensitive-fish', frequency: 0.02 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 200, currency: 'EUR' },
      monthly: { min: 5, max: 25, currency: 'EUR' },
    },
  },
};