import type { Species } from '../../types/species';

export const neocaridinaDavidiRedCherry: Species = {
  id: 'shrimp-018',
  slug: 'cherry-shrimp',
  imageUrl: '/images/species/cherry-shrimp.jpg',
  
  funFact: "While wild specimens are a drab brown, selective breeding has produced the vibrant Red Cherry Shrimp. Females carrying eggs are known as 'berried' and will constantly fan their swimmerets to oxygenate the developing young.",

  taxonomy: {
    scientificName: 'Neocaridina davidi',
    commonName: 'Cherry Shrimp',
    family: 'Atyidae',
    origin: 'China, Taiwan, Korea - cool vegetated streams',
    region: 'Asia',
    biotope: 'Shallow, slow-moving streams and ponds with dense vegetation and rocky substrates.',
  },

  visuals: {
    iconShape: 'shrimp',
    adultSizeCM: 3,
    color: 'Females display a deep red coloration, especially when grazing, while males remain smaller and paler. Various grades exist, from the translucent Cherry to the solid Painted Fire Red.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 20,
    tempC: { min: 18, max: 28, ideal: 22 },
    ph: { min: 6.5, max: 8.0, ideal: 7.2 },
    gh: { min: 6, max: 15 },
    kh: { min: 2, max: 10 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.90,
    },
    
    spaceNeeds: {
      horizontalCM: 20,
      verticalCM: 15,
      territories: 0,
    },
    
    bioloadMultiplier: 0.05,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense planting, particularly mosses like Java Moss, provides essential hiding spots for molting shrimp and grazing surfaces for biofilm. Floating plants help diffuse lighting.',
    hardscape: ['Driftwood', 'Smooth river stones', 'Terracotta caves', 'Indian Almond leaves', 'Lava rock'],
  },

  behavior: {
    tags: ['peaceful', 'algae_eater', 'social', 'active'],
    minGroupSize: 10,
    description: 'These invertebrates are tireless scavengers that constantly graze on algae and biofilm. They are entirely peaceful and spend their day climbing on plants and hardscape in search of food. In a stable environment, they breed readily, with females carrying eggs under their tail for about a month before releasing fully formed miniature shrimp.',
    
    compatibility: {
      goodMates: ['Small peaceful fish', 'Otocinclus', 'Other shrimp', 'Snails'],
      badMates: ['Pufferfish', 'Loaches', 'Bettas', 'Large Cichlids', 'Goldfish'],
      notes: 'They are safe with most peaceful community fish, though shrimplets may be eaten. A species-only tank is best for maximum breeding success.',
      
      rules: [
        {
          type: 'avoid',
          target: 'copper-based products',
          reason: 'Copper is highly toxic to invertebrates and will cause rapid death. Check all medications and fertilizers.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'predatory fish',
          reason: 'Species like Loaches and Puffers will actively hunt and eat adult shrimp.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'stable water parameters',
          reason: 'They are sensitive to sudden changes in pH or temperature, which can cause fatal molting issues.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'mixing color varieties',
          reason: 'Different Neocaridina colors will interbreed, resulting in drab, wild-type brown offspring.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
        midwater: '10-20',
        bottom: '10-100',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day', 'night'],
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
    cost: 'low',
    specialRequirements: [
      'Stable water parameters', 
      'No copper products', 
      'Drip acclimation', 
      'Calcium for molting',
      'Dense moss cover',
    ],

    proTips: [
      "Drip acclimate new shrimp for at least two hours to prevent osmotic shock from sudden parameter changes.",
      "Maintain a General Hardness (GH) of at least 6 dGH to ensure they have enough calcium to molt successfully.",
      "Provide plenty of hiding spots like Java Moss, as shrimp are vulnerable immediately after molting."
    ],

    commonMistakes: [
      "Using plant fertilizers or medications containing copper results in mass death.",
      "Rapid acclimation causes osmotic shock, a leading cause of death for newly introduced shrimp.",
      "Keeping them in very soft water leads to failed molts."
    ],
    
    feeding: {
      frequency: 'every-other-day',
      primaryFoods: ['biofilm', 'algae-wafers', 'wafers', 'pellets'],
      supplements: ['vegetables', 'spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 20,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Be gentle during water changes to avoid sucking up shrimplets. Match temperature and parameters closely.',
    },
    
    equipment: {
      heater: {
        required: false,
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
    lifespanYears: 2,
    commonDiseases: ['molting-failure', 'bacterial-infections', 'vorticella', 'parasites'],
    sensitivities: ['Copper', 'Sudden parameter changes', 'Low GH', 'Medications', 'Chlorine'],
  },

  scientificContext: {
    wildHabitat: "Native to the slow-moving, vegetated streams of East Asia. In the wild, they are detritivores, feeding on decaying plant matter and biofilm. They are not currently evaluated by the IUCN but are widespread in the hobby due to their ease of breeding. Introduced populations exist globally due to aquarium release.",
    sexualDimorphism: "Females are larger with a deeper, rounder abdomen and display much brighter red coloration. When carrying eggs, a 'saddle' is visible on their back before the eggs are moved to the swimmerets. Males are smaller, slimmer, and paler.",
    variants: ['Red Cherry', 'Blue Dream', 'Yellow Golden Back', 'Orange Sakura', 'Green Jade', 'Carbon Rili'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger: 'Breeding occurs readily in stable, clean water conditions. After molting, the female releases pheromones that attract males for mating.',
    fryCare: 'The female carries the fertilized eggs under her tail for about 3-4 weeks, fanning them constantly to keep them oxygenated. Once hatched, the tiny shrimplets are fully independent and will graze on biofilm and detritus. They require no special feeding but benefit from a well-established tank with plenty of cover.',
    notes: 'They breed prolifically in a species-only tank, often overpopulating the system if not controlled.',
  },
  
  experienceData: {
    successRate: 0.90,
    survivalRate: 0.85,
    
    commonFailures: [
      { issue: 'copper-poisoning-mass-death', cause: 'medications-or-fertilizers-with-copper', frequency: 0.30 },
      { issue: 'death-during-acclimation', cause: 'rapid-parameter-change-osmotic-shock', frequency: 0.25 },
      { issue: 'failed-molt-death', cause: 'low-calcium-or-sudden-parameter-shift', frequency: 0.18 },
      { issue: 'brown-offspring-color-loss', cause: 'mixed-neocaridina-colors-interbreeding', frequency: 0.15 },
      { issue: 'shrimplets-eaten-by-fish', cause: 'community-tank-without-dense-moss', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 30, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};