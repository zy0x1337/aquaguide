import type { Species } from '../../types/species';

export const endlerGuppy: Species = {
  id: 'guppy-001',
  slug: 'endler-guppy',
  imageUrl: '/images/species/endler-guppy.jpg',
  
  funFact: "Rediscovered in 1975 after being presumed extinct, this distinct species boasts neon metallic colors that are brighter and more intense than those of the common guppy.",

  taxonomy: {
    scientificName: 'Poecilia wingei',
    commonName: 'Endler\'s Livebearer',
    family: 'Poeciliidae',
    origin: 'Venezuela (Laguna de Patos, Campoma, Cumana)',
    region: 'South America',
    biotope: 'Warm, mineral-rich coastal lagoons with dense algae growth and potential brackish influence.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2.5,
    color: 'Males display vivid neon orange and metallic green patterns, while females are a uniform silver-grey. Pure N-Class strains maintain specific, consistent coloration.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 24, max: 30, ideal: 27 },
    ph: { min: 7.0, max: 8.5, ideal: 7.5 },
    gh: { min: 10, max: 30 },
    kh: { min: 5, max: 20 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'midwater',
      preference: 0.90,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 20,
      territories: 0,
    },
    
    bioloadMultiplier: 0.4,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Floating plants are essential for providing cover for females and refuge for fry. Dense planting also creates grazing surfaces for algae, which supplements their diet.',
    hardscape: ['Smooth river rocks', 'Driftwood', 'Clay pots'],
  },

  behavior: {
    tags: ['livebearer', 'surface_dweller', 'active', 'colorful', 'nano', 'shoaler'],
    minGroupSize: 6,
    description: 'These tiny fish are hyperactive, constantly darting around the upper water column in search of food or mates. Males are relentless in their courtship, displaying vibrant colors and performing energetic dances to attract females. While peaceful, their constant activity can be stressful for timid tankmates. They are hardy and adaptable but thrive best in the specific hard water conditions of their natural habitat.',
    
    compatibility: {
      goodMates: ['Corydoras', 'Otocinclus', 'Small Rasboras', 'Cherry Shrimp', 'Nerite Snails'],
      badMates: ['Common Guppies', 'Bettas', 'Angelfish', 'Tiger Barbs'],
      notes: 'Do not mix with common guppies to preserve the genetic purity of the Endler strain.',
      
      rules: [
        {
          type: 'avoid',
          target: 'common guppies',
          reason: 'They hybridize easily with common guppies, resulting in offspring that lose the distinctive coloration and hardiness of the pure strain.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'bettas',
          reason: 'Bettas often mistake the bright colors and active movements of males for rival fish and will attack them.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'male to female ratio of 1:2 or 1:3',
          reason: 'Males court females incessantly, and a shortage of females leads to the harassment and exhaustion of the few that are present.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'all-male groups',
          reason: 'An all-male tank eliminates breeding and results in a peaceful, colorful display without the risk of overpopulation.',
          severity: 'low',
        },
        {
          type: 'requires',
          condition: 'hard water GH >= 10',
          reason: 'They are adapted to mineral rich environments and often develop health issues in soft water.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '6-12',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 4,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'afternoon', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
      maleToFemaleRatio: '1:2-3',
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
      'Hard water (GH 10-30) is mandatory', 
      'Ratio of one male to two or three females', 
      'Dense floating plants',
      'Separation from common guppies',
    ],

    proTips: [
      "An all-male tank provides a stunning display of color without the risk of overpopulation.",
      "Seek out N-Class or pure strains from specialty breeders to ensure you get the hardiest and most colorful fish.",
      "Include vegetable matter like spirulina in their diet to maintain bright colors."
    ],

    commonMistakes: [
      "Keeping them in soft or acidic water leads to nervous disorders and premature death.",
      "Housing them with common guppies permanently contaminates the pure gene pool.",
      "Maintaining incorrect gender ratios causes stress and exhaustion in females."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'spirulina'],
      supplements: ['daphnia', 'brine-shrimp', 'vegetables'],
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
      notes: 'Regular water changes are necessary to manage the bioload, especially as the population grows from breeding.',
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
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 2,
    commonDiseases: ['shimmies', 'ich', 'fin-rot', 'internal-parasites', 'columnaris'],
    sensitivities: ['Soft water', 'Cold water', 'Acidic pH', 'Overfeeding', 'Inbreeding'],
  },

  scientificContext: {
    wildHabitat: "Native to isolated coastal lagoons in Venezuela, these fish live in warm waters rich in minerals and often green with algae. The specific habitat of the original Endler population, Laguna de Patos, is threatened by urban development and pollution. Conservation of their natural environment is a concern for the species, though they are widely bred in captivity.",
    sexualDimorphism: "Males are significantly smaller but far more colorful, displaying complex patterns of metallic orange, green, and black. Females are larger and possess a uniform silver grey body with a dark gravid spot near the anal fin when pregnant. These differences are apparent at a very young age.",
    variants: ['Black Bar', 'Tiger', 'El Silverado', 'Peacock', 'Japan Blue', 'Hybrid K-Class'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger: 'Breeding occurs readily without intervention when both sexes are present. Slightly raising the temperature can increase the frequency of spawning cycles.',
    fryCare: 'Fry are born fully formed and capable of swimming immediately. They accept the same foods as adults, provided the particles are small enough. Because adults rarely prey on their young, the population can expand rapidly without intervention. Providing dense cover helps increase the survival rate of the smallest fry.',
    notes: 'Females are capable of storing sperm for months, producing multiple broods from a single mating. Population control is often the primary challenge for the aquarist.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'shimmies-disease', cause: 'soft-water', frequency: 0.30 },
      { issue: 'female-stress-death', cause: 'wrong-sex-ratio', frequency: 0.20 },
      { issue: 'fry-overpopulation', cause: 'no-breeding-control', frequency: 0.15 },
      { issue: 'hybridization', cause: 'mixed-with-guppies', frequency: 0.12 },
      { issue: 'predation', cause: 'betta-tankmate', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};