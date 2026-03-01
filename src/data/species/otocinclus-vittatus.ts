import type { Species } from '../../types/species';

export const otocinclusVittatus: Species = {
  id: 'oto-001',
  slug: 'otocinclus',
  imageUrl: '/images/species/otocinclus-vittatus.jpg',
  
  funFact: "Otocinclus are the only 100% shrimp-safe algae eater, with mouths too small to harm even newborn shrimplets. They are obligate biofilm grazers that will starve in a sterile tank, making a mature setup an absolute requirement for their survival.",

  taxonomy: {
    scientificName: 'Otocinclus vittatus',
    commonName: 'Otocinclus Catfish',
    family: 'Loricariidae',
    origin: 'South America (Amazon Basin - Peru, Brazil, Colombia)',
    region: 'South America',
    biotope: 'Vegetation-rich river margins with moderate flow and algae-covered surfaces.',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 4.5,
    color: 'A mottled brown-tan body with a distinctive dark horizontal stripe running from the snout to the tail. They possess a sucker mouth for clinging to surfaces.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 21, max: 27, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 4, max: 15 },
    kh: { min: 2, max: 10 },
    flow: 'moderate',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.6,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.4,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Broad-leaved plants like Anubias and Amazon Swords are essential for providing grazing surfaces. A mature tank with established biofilm is mandatory for their survival.',
    hardscape: ['Driftwood', 'Smooth river stones'],
  },

  behavior: {
    tags: ['peaceful', 'shy', 'social', 'algae_eater', 'bottom_dweller'],
    minGroupSize: 6,
    description: 'A peaceful, social algae eater that must be kept in groups. They are constantly grazing on biofilm and soft algae using their sucker mouth. Highly sensitive to water quality and starvation, they require a mature tank with established food sources. They are completely safe for plants and shrimp.',
    
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Corydoras', 'Peaceful cichlids', 'Cherry shrimp', 'Snails'],
      badMates: ['Large aggressive fish', 'Goldfish', 'Fast competitive feeders'],
      notes: 'They are ideal for planted tanks but should not be expected to clean a dirty tank. They are the safest algae eater for shrimp tanks.',
      
      rules: [
        {
          type: 'requires',
          condition: 'mature tank 6+ months old',
          reason: 'They are obligate biofilm eaters and starve quickly in sterile setups.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'groups of 6+ fish',
          reason: 'Isolated individuals become stressed, hide, and refuse to eat.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'broad-leaved plants',
          reason: 'Large leaf surfaces are necessary for natural grazing behavior.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'sunken-belly fish at store',
          reason: 'Fish with concave stomachs are already starving and often fail to recover.',
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
    difficulty: 'medium',
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Mature tank with biofilm', 
      'Groups of 6+', 
      'Broad-leaved plants', 
      'Supplemental feeding',
      'Oxygen-rich water',
    ],

    proTips: [
      "Only add them to a tank that has been running for at least six months to ensure enough biofilm.",
      "Check for plump bellies at the store; thin fish are often too starved to recover.",
      "Supplement their diet with blanched vegetables, as natural algae is rarely sufficient."
    ],

    commonMistakes: [
      "Adding them to new tanks causes rapid starvation.",
      "Buying fish with sunken bellies leads to high mortality rates.",
      "Keeping them in small groups causes chronic stress."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['biofilm', 'aufwuchs'],
      supplements: ['algae-wafers', 'blanched-zucchini', 'spirulina'],
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
      vacuumingNeeded: false,
      notes: 'Maintain high oxygen levels and do not scrape all algae from the tank, as this is their primary food source.',
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
    lifespanYears: 5,
    commonDiseases: ['starvation', 'ich', 'bacterial-infections'],
    sensitivities: ['Starvation', 'Ammonia', 'Medications', 'Low oxygen', 'Parameter swings'],
  },

  scientificContext: {
    wildHabitat: "Native to the Amazon Basin, they inhabit shallow, vegetation-rich margins of rivers and streams. They cling to hard surfaces in large groups, grazing on algae and detritus in well-oxygenated water. Their environment features moderate flow and dense plant growth.",
    sexualDimorphism: "Females are wider and rounder when viewed from above, especially when carrying eggs. Males are slimmer and slightly smaller.",
    variants: ['Otocinclus vittatus', 'Otocinclus affinis', 'Otocinclus macrospilus', 'Otocinclus vestitus'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Spawning is rare and triggered by pristine water conditions and large, cool water changes simulating rainfall.',
    fryCare: 'Tiny fry require microscopic food sources like infusoria and established biofilm to survive. Growth is slow.',
    notes: 'Breeding is difficult and usually accidental in mature, heavily planted tanks.',
  },
  
  experienceData: {
    successRate: 0.40,
    survivalRate: 0.40,
    
    commonFailures: [
      { issue: 'starvation-death-within-2-4-weeks', cause: 'added-to-new-sterile-tank-under-6-months', frequency: 0.60 },
      { issue: 'purchased-already-starving', cause: 'bought-fish-with-sunken-bellies-from-store', frequency: 0.20 },
      { issue: 'slow-starvation', cause: 'no-supplemental-feeding-or-insufficient-biofilm', frequency: 0.10 },
      { issue: 'stress-from-isolation', cause: 'kept-singly-or-in-small-groups-under-6', frequency: 0.05 },
      { issue: 'medication-poisoning', cause: 'full-dose-copper-medications-scaleless-sensitivity', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 200, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};