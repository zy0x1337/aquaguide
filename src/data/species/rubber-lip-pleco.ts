import type { Species } from '../../types/species';

export const chaetostomaMilesi: Species = {
  id: 'pleco-rubber-lip',
  slug: 'rubber-lip-pleco',
  imageUrl: '/images/species/rubber-lip-pleco.jpg',

  imageCredit: {
    photographer: 'Chaetostoma milesi',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Chaetostoma_milesi_(16495455116).jpg',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
  },
  
  funFact: "The Rubber Lip Pleco is a smaller, peaceful alternative to the common pleco, maxing out around 15 cm. It is native to the cooler, fast-flowing streams of the Colombian Andes, where it uses its specialized fleshy lips to rasp algae from rocks.",

  taxonomy: {
    scientificName: 'Chaetostoma milesi',
    commonName: 'Rubber Lip Pleco / Rubbernose Pleco / Bulldog Pleco',
    family: 'Loricariidae',
    origin: 'South America (Colombia, Venezuela - Andean streams)',
    region: 'South America',
    biotope: 'Cool, clear, fast-flowing mountain streams with rocky substrates and high oxygen content.',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 15,
    color: 'A dark grey to brown body covered in small black spots. The head is broad with a flattened, bulbous nose equipped with fleshy lips. The dorsal fin has a distinctive high profile.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 120,
    tempC: { min: 20, max: 26, ideal: 23 },
    ph: { min: 6.5, max: 7.8, ideal: 7.2 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'high',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.90,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 35,
      territories: 1,
    },
    
    bioloadMultiplier: 1.2,
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'They come from rocky environments with sparse vegetation. Hardy plants like Anubias and Java Fern can be attached to hardscape.',
    hardscape: ['Smooth river stones', 'Driftwood', 'Slate caves', 'Biofilm covered rocks'],
  },

  behavior: {
    tags: ['peaceful', 'algae_eater', 'bottom_dweller', 'territorial'],
    minGroupSize: 1,
    description: 'A peaceful and hardy algae eater that is generally indifferent to other tankmates. Males can be territorial toward other males of their species, especially in smaller tanks. They spend most of their time attached to rocks or glass rasping algae.',
    
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Danios', 'Corydoras', 'Peaceful Barbs', 'Dwarf Shrimp', 'Snails'],
      badMates: ['Large aggressive cichlids', 'Other territorial plecos', 'Goldfish'],
      notes: 'Excellent for community tanks. They do not eat plants. They can be territorial with their own kind; keep one per tank unless the tank is very large.',
      
      rules: [
        {
          type: 'requires',
          condition: 'driftwood',
          reason: 'They require driftwood to rasp on, which aids in digestion.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'high oxygen levels',
          reason: 'Coming from mountain streams, they demand well-oxygenated water. Surface agitation is beneficial.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'temperature above 28°C',
          reason: 'They are a cooler water species. Prolonged exposure to tropical heat stress weakens their immune system.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '1-3',
      },
    },
    
    aggressionLevel: {
      intraspecific: 4,
      interspecific: 1,
      territorial: 4,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['all-day'],
      nocturnal: true,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'herbivore',
    effort: 'low',
    cost: 'medium',
    specialRequirements: [
      'Driftwood in diet', 
      'Well-oxygenated water', 
      'Algae or vegetable supplements', 
      'Cooler temperatures',
    ],

    proTips: [
      "They are excellent algae eaters but need their diet supplemented with algae wafers and blanched vegetables.",
      "Provide plenty of oxygen via powerheads or spray bars to mimic their natural stream habitat.",
      "They prefer slightly cooler water than many tropical fish; they are a good choice for unheated tanks in warm homes."
    ],

    commonMistakes: [
      "Keeping them in very warm tanks shortens their lifespan.",
      "Not providing driftwood deprives them of essential dietary fiber.",
      "Assuming they will survive solely on tank algae often leads to starvation."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['algae-wafers', 'spirulina', 'vegetables'],
      supplements: ['bloodworms', 'brine-shrimp'],
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
      notes: 'Regular water changes are important to keep oxygen levels high and nitrates low.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'strong',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 12,
    commonDiseases: ['ich', 'fin rot', 'bloat', 'malnutrition'],
    sensitivities: ['Low oxygen', 'Warm water', 'Lack of vegetable matter'],
  },

  scientificContext: {
    wildHabitat: "Found in the Andean foothills of Colombia and Venezuela. They inhabit clear, oxygen-rich streams with fast currents, clinging to rocks and feeding on aufwuchs (algae and microorganisms).",
    sexualDimorphism: "Males develop odontodes (bristles) along the back of the head and pectoral fins, and are generally smaller and slimmer than females.",
    variants: ['Chaetostoma milesi (Standard)', 'Chaetostoma sp. L187a (similar)'],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'expert',
    trigger: 'Breeding requires specific conditions: a cave, high oxygen, and a distinct drop in temperature to simulate the rainy season.',
    fryCare: 'The male guards the eggs. Fry hatch in about a week and need green water or infusoria initially.',
    notes: 'Breeding is rare in home aquaria but has been accomplished by dedicated hobbyists.',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'starvation', cause: 'relied-on-tank-algae-only', frequency: 0.30 },
      { issue: 'oxygen-deprivation', cause: 'stagnant-water-high-temp', frequency: 0.25 },
      { issue: 'aggression', cause: 'multiple-males-in-small-tank', frequency: 0.15 },
      { issue: 'jumping', cause: 'startled-no-lid', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 18, currency: 'EUR' },
    },
  },
};