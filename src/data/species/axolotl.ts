import type { Species } from '../../types/species';

export const axolotl: Species = {
  id: 'axolotl',
  slug: 'axolotl',
  imageUrl: '/images/species/axolotl.jpg',
  
  funFact: "Unlike other salamanders, the Axolotl remains in its aquatic larval form for life, retaining its external gills and the ability to regenerate lost limbs and even brain tissue.",

  imageCredit: {
    photographer: 'Pixabay',
    sourceUrl: 'https://pixabay.com/photos/axolotl-mexican-salamander-animal-6934866/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },
  
  taxonomy: {
    scientificName: 'Ambystoma mexicanum',
    commonName: 'Axolotl / Mexican Walking Fish / Mexican Salamander',
    family: 'Ambystomatidae',
    origin: 'Central Mexico (Lake Xochimilco, Lake Chalco near Mexico City - now only Xochimilco canals remain)',
    region: 'North America',
    biotope: 'High-altitude freshwater lakes and canals with cold, clear water and abundant aquatic vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 30,
    color: 'Wild types are dark brown with gold speckling, while popular captive morphs include leucistic pink with black eyes and golden albinos. They possess distinctive feathery external gills and a wide, lidless smile.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 110,
    tempC: { min: 15, max: 20, ideal: 17 },
    ph: { min: 7.4, max: 7.6, ideal: 7.5 },
    gh: { min: 7, max: 14 },
    kh: { min: 3, max: 8 },
    flow: 'low',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 90,
      verticalCM: 40,
      territories: 1,
    },
    
    bioloadMultiplier: 5.0,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Plants must tolerate cold temperatures between 16 and 18 degrees Celsius. Hardy species like Java Fern and Anubias provide essential shade and hiding spots without risking injury to the axolotl\'s delicate skin.',
    hardscape: ['Smooth slate caves', 'Large river stones', 'PVC pipes', 'Terracotta pots'],
  },

  behavior: {
    tags: ['peaceful', 'nocturnal'],
    minGroupSize: 1,
    description: 'These entirely aquatic salamanders are clumsy swimmers, preferring to walk along the bottom on their four legs. They rely on a keen sense of smell and vibration detection to hunt, as their eyesight is quite poor. Solitary by nature, they are prone to nipping at the limbs and gills of tankmates, making individual housing the safest option. They are most active at night or during feeding times, often approaching their keepers at the glass for food.',
    
    compatibility: {
      goodMates: ['Other axolotls (same size only)'],
      badMates: ['All fish', 'Crayfish', 'Snails'],
      notes: 'They are best kept alone to prevent accidental injuries or predation. Any tank mate small enough is considered food, while larger fish may damage their sensitive gills.',
      
      rules: [
        {
          type: 'requires',
          condition: '110L minimum tank per axolotl',
          reason: 'A large volume is necessary to dilute the massive amount of waste produced by this heavy-bodied carnivore.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'cold water 16-18°C mandatory',
          reason: 'Temperatures above 20 degrees Celsius cause severe stress, immune system failure, and rapid death.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'gravel substrate or rough decorations',
          reason: 'Swallowing gravel causes fatal impaction because they inhale their food with significant suction.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'mixing different sized axolotls or tankmates',
          reason: 'Axolotls will attempt to eat anything that fits in their mouth, and larger fish may damage their delicate gills.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '0',
        bottom: '0-1',
      },
    },
    
    aggressionLevel: {
      intraspecific: 6,
      interspecific: 4,
      territorial: 3,
    },
    
    activity: {
      level: 'low',
      peakTimes: ['night'],
      nocturnal: true,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'medium',
      targets: ['tankmates', 'limbs of other axolotls'],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'high',
    cost: 'high',
    specialRequirements: [
      '110L minimum tank', 
      'Cold water 16-18°C', 
      'Powerful filtration', 
      'Fine sand substrate', 
      'Low flow', 
      'Dim lighting'
    ],

    proTips: [
      "Use a chiller or fans to maintain water temperature below 20 degrees Celsius, as heat is the leading cause of illness.",
      "Feed earthworms or high-quality sinking pellets using tongs to prevent accidental ingestion of substrate.",
      "Cover the tank securely, as axolotls are surprisingly strong jumpers and can escape through small gaps."
    ],

    commonMistakes: [
      "Keeping them in warm water leads to stress, fungal infections, and eventual organ failure.",
      "Using gravel as a substrate often results in fatal digestive blockages.",
      "Housing them with fish usually results in the fish being eaten or the axolotl being injured."
    ],
    
    feeding: {
      frequency: 'every-other-day',
      primaryFoods: ['live-food', 'pellets'],
      supplements: ['bloodworms', 'frozen-food'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Perform weekly water changes with temperature-matched water to manage the high bioload. Test parameters frequently to ensure ammonia and nitrite remain at zero.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 15,
    commonDiseases: ['fungal-infections', 'bacterial-infections', 'impaction', 'ammonia-burns', 'gill-damage'],
    sensitivities: ['Temperature over 20°C', 'Ammonia and nitrite', 'Chlorine', 'Gravel substrate', 'Bright lighting'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the high-altitude lake system of Xochimilco in Mexico City, this species inhabits cold, spring-fed canals and lakes. They are critically endangered in the wild due to habitat destruction, pollution, and invasive predatory fish. Conservation efforts focus on habitat restoration, though the species survives largely through captive populations worldwide.",
    sexualDimorphism: "Males develop a noticeably swollen cloaca and a more slender body shape compared to females. Females tend to be rounder and fuller in the abdomen, particularly when carrying eggs.",
    variants: ['Wild type', 'Leucistic', 'Albino', 'Golden Albino', 'Melanoid', 'Copper', 'GFP'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'medium',
    trigger: 'Breeding is often triggered by a slight drop in water temperature mimicking the onset of winter. Increasing the photoperiod and feeding heavily with live foods can further stimulate courtship behavior.',
    fryCare: 'Larvae hatch after two to three weeks and must be separated by size immediately to prevent cannibalism. They require live food such as baby brine shrimp from day one and daily water changes to maintain pristine conditions. Raising large numbers of offspring demands significant tank space and dedication.',
    notes: 'While breeding is straightforward, raising the hundreds of larvae requires a massive commitment of time and resources.',
  },
  
  experienceData: {
    successRate: 0.60,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'death-from-heat-stress', cause: 'temperature-over-20C-caused-organ-failure', frequency: 0.40 },
      { issue: 'impaction-from-gravel', cause: 'swallowed-gravel-substrate-blocked-intestines', frequency: 0.25 },
      { issue: 'ammonia-poisoning', cause: 'uncycled-tank-or-inadequate-filtration', frequency: 0.20 },
      { issue: 'injuries-from-tank-mates', cause: 'plecos-or-other-axolotls-bit-gills-limbs', frequency: 0.10 },
      { issue: 'fungal-infections', cause: 'warm-water-and-poor-water-quality', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 300, max: 800, currency: 'EUR' },
      monthly: { min: 20, max: 60, currency: 'EUR' },
    },
  },
};