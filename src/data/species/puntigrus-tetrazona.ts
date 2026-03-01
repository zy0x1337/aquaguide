import type { Species } from '../../types/species';

export const puntigrusTetrazona: Species = {
  id: 'puntigrus-001',
  slug: 'puntigrus-tetrazona',
  imageUrl: '/images/species/puntigrus-tetrazona.jpg',
  
  funFact: "Tiger Barbs are notorious fin-nippers when kept in small numbers, but in schools of 10 or more, their aggression is redirected toward each other, leaving tankmates alone. Their vertical stripes serve as camouflage in their native murky waters, breaking up their body outline to confuse predators.",

  imageCredit: {
    photographer: 'Anandarajkumar',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:A_Male_Tiger_barb.png',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },

  taxonomy: {
    scientificName: 'Puntigrus tetrazona',
    commonName: 'Tiger Barb',
    family: 'Cyprinidae',
    origin: 'Indonesia (Sumatra, Borneo)',
    region: 'Asia',
    biotope: 'Shallow, slow-moving forest streams and peat swamps with dense vegetation and tannin-stained water.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 7,
    color: 'Golden-orange body with four distinctive vertical black bars. Males are more intensely colored with red snouts during breeding. Several morphs exist, including Green and Albino.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 120,
    tempC: { min: 20, max: 26, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    gh: { min: 3, max: 10 },
    kh: { min: 2, max: 8 },
    flow: 'moderate',
    substrate: 'sand-or-fine-gravel',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.70,
    },
    
    spaceNeeds: {
      horizontalCM: 100,
      verticalCM: 35,
      territories: 0,
    },
    
    bioloadMultiplier: 1.2,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Require large open swimming areas. Robust plants should be placed around the perimeter to provide shelter without obstructing their active swimming lanes.',
    hardscape: ['Driftwood', 'Smooth river stones', 'Indian Almond Leaves'],
  },

  behavior: {
    tags: ['schooler', 'semi-aggressive', 'fin_nipper', 'active'],
    minGroupSize: 10,
    description: 'Active and boisterous schooling fish that establish a social hierarchy. In groups smaller than 10, they are notorious fin-nippers, but in larger schools, they focus their energy on each other. They are constantly in motion and can stress shy or slow-moving tankmates.',
    
    compatibility: {
      goodMates: ['Other robust barbs', 'Danios', 'Loaches', 'Rainbowfish', 'Plecos'],
      badMates: ['Angelfish', 'Bettas', 'Guppies', 'Discus', 'Dwarf Cichlids', 'Shrimp'],
      notes: 'Only suitable for "rough and tumble" community tanks with fast, robust tankmates. They should never be kept with long-finned or slow-moving fish.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group of 10-12+ individuals',
          reason: 'In smaller groups, they become bored and turn their aggression toward the fins of other fish.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'long-finned or slow-moving fish',
          reason: 'Tiger Barbs will relentlessly shred the fins of species like Angelfish and Bettas.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'large tank (120L minimum)',
          reason: 'Cramped quarters increase aggression and stress levels.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '6-8',
      },
    },
    
    aggressionLevel: {
      intraspecific: 5,
      interspecific: 7,
      territorial: 3,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
      maxMalesPerTank: 999,
    },
    
    finNipping: {
      risk: 'high',
      targets: ['angelfish', 'bettas', 'guppies', 'fancy-goldfish'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'low',
    specialRequirements: [
      'Large group (10+) to reduce aggression', 
      'Spacious tank', 
      'Open swimming areas', 
      'Compatible robust tankmates',
    ],

    proTips: [
      "A group size of 10 or more is the most effective way to prevent fin-nipping behavior.",
      "Dim lighting or blackwater conditions can help calm their aggression and improve coloration.",
      "They are gluttonous eaters; avoid overfeeding to maintain water quality."
    ],

    commonMistakes: [
      "Keeping them in small groups (under 8) leads to them terrorizing other fish.",
      "Housing them with Angelfish or Bettas is a guaranteed recipe for disaster.",
      "Overfeeding is common because they always appear hungry."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'spirulina'],
      supplements: ['bloodworms', 'brine-shrimp', 'daphnia', 'blanched-zucchini'],
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
      notes: 'They are messy eaters and produce a significant bioload; regular water changes are essential to keep nitrates low and aggression down.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 150,
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
    lifespanYears: 6,
    commonDiseases: ['ich', 'velvet', 'fungal-infections', 'fin-rot', 'dropsy'],
    sensitivities: ['Ammonia', 'Nitrite', 'High nitrates', 'Overcrowding'],
  },

  scientificContext: {
    wildHabitat: "Native to Sumatra and Borneo, inhabiting shallow, slow-moving streams and peat swamps. The water is typically soft, acidic, and stained dark by tannins. They are found in large schools, foraging for invertebrates and plant matter.",
    sexualDimorphism: "Males are more slender and brightly colored, with a red snout during breeding. Females are rounder and less colorful.",
    variants: ['Wild type', 'Green Tiger Barb', 'Albino Tiger Barb', 'Platinum Tiger Barb', 'GloFish Tiger Barbs'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Breeding is easily achieved in a separate tank with fine-leaved plants. Condition the pair with live foods and slightly raise the temperature to initiate spawning.',
    fryCare: 'Parents will eat the eggs, so they must be removed immediately after spawning. Fry are tiny and require infusoria initially, moving on to baby brine shrimp as they grow.',
    notes: 'One of the easiest egg-scattering fish to breed in captivity.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'fin-nipping-stress-to-tankmates', cause: 'small-group-size-or-incompatible-tankmates', frequency: 0.35 },
      { issue: 'ich-outbreak', cause: 'stress-from-poor-acclimation-or-temperature-fluctuation', frequency: 0.20 },
      { issue: 'aggression-injuries', cause: 'overcrowding-or-inadequate-tank-size', frequency: 0.15 },
      { issue: 'water-quality-crash', cause: 'overfeeding-or-insufficient-filtration', frequency: 0.12 },
      { issue: 'faded-colors-lethargy', cause: 'high-nitrates-or-poor-diet', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 200, currency: 'EUR' },
      monthly: { min: 12, max: 30, currency: 'EUR' },
    },
  },
};