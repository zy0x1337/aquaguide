import type { Species } from '../../types/species';

export const electricYellowLab: Species = {
  id: 'electric-yellow-lab',
  slug: 'electric-yellow-lab',
  imageUrl: '/images/species/electric-yellow-lab.jpg',
  
  funFact: "Known as the peacekeepers of the Mbuna world, the Electric Yellow Lab displays a brilliant neon coloration that stands out against the dark rocks of its rocky Lake Malawi habitat.",

  imageCredit: {
    photographer: 'FilderAquaristik on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/firefish-fisch-malawibuntbarsch-3928534/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  taxonomy: {
    scientificName: 'Labidochromis caeruleus',
    commonName: 'Electric Yellow Lab',
    family: 'Cichlidae',
    origin: "Lake Malawi, Africa (Lion's Cove, Nkhata Bay, Charo Reef)",
    region: 'Africa',
    biotope: 'Rocky shorelines with sandy substrates and abundant algae growth in alkaline, hard water.',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 10,
    color: 'A brilliant electric yellow body is contrasted by black markings on the dorsal and anal fins. Males tend to be more intensely colored than females.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 200,
    tempC: { min: 23, max: 28, ideal: 26 },
    ph: { min: 7.8, max: 8.6, ideal: 8.2 },
    gh: { min: 10, max: 20 },
    kh: { min: 8, max: 18 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 100,
      verticalCM: 40,
      territories: 1,
    },
    
    bioloadMultiplier: 1.2,
  },

  habitat: {
    planting: 'none',
    plantingNotes: 'Plants are generally unsuitable as these diggers will uproot them; focus instead on robust rockwork creating caves and territories. Anubias attached to rocks may survive.',
    hardscape: ['Texas Holey Rock', 'Limestone stacks', 'Aragonite sand', 'Smooth boulders'],
  },

  behavior: {
    tags: ['semi-aggressive', 'cichlid', 'colorful', 'active', 'territorial', 'architect'],
    minGroupSize: 6,
    description: 'These active cichlids are constantly grazing on algae or sifting through the substrate for food. Unlike many of their relatives, they exhibit relatively low aggression, making them a staple for community Mbuna tanks. Males establish small territories around rock formations but rarely cause serious injury to tankmates. They are maternal mouthbrooders, with females carrying fertilized eggs in their throat pouch for protection.',
    
    compatibility: {
      goodMates: ['Other peaceful Mbuna', 'Red Zebra', 'Yellow Tail Acei', 'Synodontis catfish'],
      badMates: ['Soft water fish', 'Aggressive Mbuna', 'South American cichlids'],
      notes: 'They are best kept in a species-specific tank or with other peaceful Lake Malawi cichlids that share their water requirements.',
      
      rules: [
        {
          type: 'requires',
          condition: 'HIGH pH HARD ALKALINE water (pH 7.8-8.6)',
          reason: 'They are strictly adapted to the hard, alkaline conditions of Lake Malawi and will deteriorate in soft water.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'rockwork with caves',
          reason: 'Rock structures provide essential territories and visual barriers to reduce aggression.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'overstocking strategy (12-15 Mbuna in 200L+)',
          reason: 'Higher population densities disperse aggression, preventing any single fish from being targeted.',
          severity: 'high',
        },
        {
          type: 'warning',
          condition: 'low protein diet (spirulina-based)',
          reason: 'A diet high in animal protein causes Malawi Bloat, a fatal condition for these algae grazers.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'harem ratios (1 male : 3-4 females)',
          reason: 'Keeping multiple males leads to intense fighting, whereas a harem structure spreads male attention.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '12-15',
        bottom: '3-6',
      },
    },
    
    aggressionLevel: {
      intraspecific: 5,
      interspecific: 3,
      territorial: 7,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
      maxMalesPerTank: 2,
    },
    
    finNipping: {
      risk: 'low',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'High pH hard water', 
      'Aragonite sand', 
      'African cichlid salts', 
      'Limestone rocks', 
      'Strong filtration', 
      'Weekly water changes', 
      'Low protein diet',
    ],

    proTips: [
      "Use aragonite sand and limestone rocks to naturally buffer the pH to the required alkalinity.",
      "Feed a diet rich in spirulina and vegetable matter to prevent the fatal Malawi Bloat.",
      "Overstocking the tank diffuses aggression, but requires powerful filtration to handle the waste load."
    ],

    commonMistakes: [
      "Keeping them in soft or acidic water leads to stress and a weakened immune system.",
      "Feeding bloodworms or beef heart triggers severe digestive issues and bloat.",
      "Keeping a single male with a single female results in the female being harassed to death."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['spirulina', 'algae-wafers', 'vegetables'],
      supplements: ['pellets', 'blanched-zucchini'],
      vegetarian: true,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 40,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Large weekly water changes are necessary to manage the high bioload resulting from the overstocking strategy.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 200,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'strong',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 10,
    commonDiseases: ['malawi-bloat', 'ich', 'bacterial-infections', 'columnaris', 'hexamita'],
    sensitivities: ['Low pH', 'High protein diet', 'Nitrates', 'Ammonia', 'Soft water'],
  },

  scientificContext: {
    wildHabitat: "Endemic to Lake Malawi, this species inhabits rocky coastlines where it grazes on algae growing on stones. The water in this Rift Lake is incredibly hard and alkaline, providing a unique chemical environment. They are specialized grazers, feeding primarily on the algae and small invertebrates found within the rocky biocover. The specific morph known as the Electric Yellow originates from populations found near Lions Cove and Nkhata Bay.",
    sexualDimorphism: "Males are typically larger and display a more intense, uniform yellow coloration with distinct black markings on the fins. They also possess egg spots on the anal fin, which are used to stimulate the female during spawning. Females are slightly smaller, often with a paler yellow or even brownish hue, and lack prominent egg spots.",
    variants: ['Standard Electric Yellow', 'White Lab', 'Nkhata Bay population'],
  },

  breeding: {
    method: 'mouthbrooder',
    difficulty: 'beginner',
    trigger: 'Spawning is frequent in colonies with the correct water chemistry. A dominant male will dig a pit in the sand and display his vibrant colors to attract a female, circling her in a distinctive dance.',
    fryCare: 'The female collects the fertilized eggs in her mouth, incubating them for about three weeks. During this period, she will not eat and appears to have a swollen throat. Upon release, the fry are fully formed and can accept crushed spirulina flakes or baby brine shrimp immediately. It is best to separate the fry or provide dense cover to ensure survival.',
    notes: 'They are prolific breeders in the home aquarium, and mouthbrooding females are a common sight in mature colonies.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'malawi-bloat-death', cause: 'high-protein-diet-mammal-meats', frequency: 0.40 },
      { issue: 'chronic-stress-disease-death', cause: 'low-pH-soft-water-below-7.5', frequency: 0.28 },
      { issue: 'aggression-injuries-death', cause: 'insufficient-territories-or-multiple-males', frequency: 0.15 },
      { issue: 'targeted-aggression', cause: 'understocking-not-enough-fish', frequency: 0.10 },
      { issue: 'poor-water-quality', cause: 'inadequate-filtration-high-bioload', frequency: 0.07 },
    ],
    
    estimatedCosts: {
      initial: { min: 250, max: 600, currency: 'EUR' },
      monthly: { min: 25, max: 50, currency: 'EUR' },
    },
  },
};