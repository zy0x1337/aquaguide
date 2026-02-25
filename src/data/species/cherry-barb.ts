import type { Species } from '../../types/species';

export const cherryBarb: Species = {
  id: 'barb-001',
  slug: 'cherry-barb',
  imageUrl: '/images/species/cherry-barb.jpg',
  
  funFact: "Unlike their boisterous cousins the Tiger Barbs, Cherry Barbs are peaceful fish where males develop a brilliant crimson coloration to court females.",

  taxonomy: {
    scientificName: 'Puntius titteya',
    commonName: 'Cherry Barb',
    family: 'Cyprinidae',
    origin: 'Sri Lanka (endemic - found nowhere else in wild)',
    region: 'Asia',
    biotope: 'Shaded, slow-moving forest streams with dense vegetation and leaf litter.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'Males display a vibrant cherry red body, especially during courtship, while females are a more subdued golden tan with a darker lateral stripe.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 22, max: 27, ideal: 25 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    gh: { min: 4, max: 15 },
    kh: { min: 2, max: 10 },
    flow: 'low',
    substrate: 'dark',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.6,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Heavily planted tanks with floating plants provide the dim lighting and security this shy species requires. Dark substrate enhances the vibrant red coloration of the males.',
    hardscape: ['Driftwood', 'Smooth river stones', 'Leaf litter', 'Caves'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'active', 'shy'],
    minGroupSize: 8,
    description: 'These peaceful cyprinids are ideal for community aquariums, exhibiting none of the fin-nipping aggression associated with some other barbs. They are somewhat shy and spend their time swimming in the middle and lower regions of the tank. When kept in groups, they show interesting social interactions, with males displaying their best colors to attract mates. Dense vegetation encourages them to swim in the open rather than hiding.',
    
    compatibility: {
      goodMates: ['Peaceful Tetras', 'Rasboras', 'Corydoras', 'Kuhli Loaches', 'Gouramis', 'Snails', 'Shrimp'],
      badMates: ['Tiger Barbs', 'Large Cichlids', 'Fin-nippers', 'Very active feeders'],
      notes: 'They are excellent community fish that should not be housed with aggressive or boisterous species.',
      
      rules: [
        {
          type: 'requires',
          condition: 'male to female ratio 1:2 or 1:3',
          reason: 'Males will relentlessly harass females if they are outnumbered, leading to exhaustion and death.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'tiger barbs or aggressive barbs',
          reason: 'Their peaceful temperament makes them an easy target for bullying by more boisterous barbs.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'group size 8+ fish',
          reason: 'Keeping them in smaller groups results in shyness and stress.',
          severity: 'medium',
        },
        {
          type: 'requires',
          condition: 'dense planting with visual barriers',
          reason: 'Plants provide essential hiding spots for females to escape the attention of males.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
        midwater: '10-20',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
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
      maxMalesPerTank: 3,
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
    cost: 'low',
    specialRequirements: [
      'Maintain 2-3 females per male', 
      'Groups of 8+ fish', 
      'Dense planting',
      'Peaceful tankmates',
    ],

    proTips: [
      "A heavily female-biased ratio is crucial because males will relentlessly pursue females during courtship.",
      "Feeding foods rich in carotenoids enhances the deep red coloration of the males.",
      "They are one of the few barbs suitable for keeping with delicate species like shrimp due to their peaceful nature."
    ],

    commonMistakes: [
      "Keeping too many males results in the harassment and eventual death of the females.",
      "Housing them with active tankmates causes them to hide and refuse food.",
      "Small groups lead to nervous behavior and a lack of appetite."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'flakes', 'brine-shrimp'],
      supplements: ['bloodworms', 'daphnia', 'spirulina'],
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
      notes: 'Regular water changes are necessary to maintain their health and color intensity.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'fin-rot', 'velvet', 'dropsy', 'parasites'],
    sensitivities: ['Cold water', 'Stress from harassment', 'Aggressive tankmates', 'Poor diet'],
  },

  scientificContext: {
    wildHabitat: "Endemic to Sri Lanka, this species inhabits slow-flowing, shaded streams within rainforests. The water is typically soft and acidic, stained dark by tannins from decaying vegetation. They are found among dense leaf litter and submerged roots in shallow waters. While the IUCN lists them as Least Concern, habitat destruction remains a threat to their limited natural range.",
    sexualDimorphism: "Males are brightly colored in red, especially when breeding, while females are duller with a yellowish-tan body. Females are also rounder in the belly, particularly when carrying eggs.",
    variants: ['Wild type', 'Albino'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Condition the group with high-quality live or frozen foods and slightly raise the temperature to simulate the onset of the breeding season. Provide plenty of fine-leaved plants like Java Moss for the scattering of eggs.',
    fryCare: 'The eggs hatch after about twenty-four hours, and the fry become free-swimming a few days later. They should be fed infusoria or liquid fry food initially before graduating to baby brine shrimp. Parents will eat the eggs, so using a separate breeding tank or spawning mops is recommended for higher yields.',
    notes: 'Breeding is relatively easy, but the adults provide no parental care and will consume their own eggs if given the chance.',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'females-harassed-to-death', cause: 'wrong-male-female-ratio-too-many-males', frequency: 0.42 },
      { issue: 'stress-hiding-no-color', cause: 'small-groups-or-no-planting', frequency: 0.20 },
      { issue: 'stressed-by-tiger-barbs', cause: 'mixed-with-aggressive-barbs', frequency: 0.15 },
      { issue: 'color-fading', cause: 'poor-diet-or-bright-lighting', frequency: 0.12 },
      { issue: 'ich-outbreak', cause: 'cold-water-or-temperature-shock', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 140, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};