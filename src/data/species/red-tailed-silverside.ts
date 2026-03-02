import type { Species } from '../../types/species';

export const bedotiaGeayi: Species = {
  id: 'madagascar-rainbowfish-redtail',
  slug: 'red-tailed-silverside',
  imageUrl: '/images/species/red-tailed-silverside.jpg',

  imageCredit: {
    photographer: 'Natural History Museum University of Pisa',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bedotia_geayi_Natural_History_Museum_University_of_Pisa_(cropped).jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  
  funFact: "The Red Tailed Silverside is endemic to the Mananjary River basin in Madagascar. Males develop a spectacular fiery red to orange tail fin that contrasts sharply with their silvery body, a color pattern that intensifies during courtship displays.",

  taxonomy: {
    scientificName: 'Bedotia geayi',
    commonName: 'Red Tailed Silverside',
    family: 'Bedotiidae',
    origin: 'Madagascar (Mananjary River basin)',
    region: 'Africa',
    biotope: 'Clear, flowing streams and rivers with overhanging vegetation and rocky substrates.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 12,
    color: 'Males have a silvery body with a stunning red to deep orange caudal fin. The dorsal and anal fins may have a reddish tint. Females are more subdued with a yellowish or clear tail and a plumper body.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 100,
    tempC: { min: 22, max: 26, ideal: 24 },
    ph: { min: 7.0, max: 8.0, ideal: 7.5 },
    gh: { min: 10, max: 25 },
    kh: { min: 6, max: 15 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 35,
      territories: 0,
    },
    
    bioloadMultiplier: 1.0,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'They appreciate dense planting along the edges for cover but require open swimming space in the center. Robust plants are recommended.',
    hardscape: ['Driftwood', 'River stones', 'Submerged branches'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'active', 'jumper'],
    minGroupSize: 6,
    description: 'An active and peaceful schooling fish. They spend most of their time in the upper and middle water layers. Males are generally tolerant of each other but display to establish dominance. They are excellent jumpers and require a secure lid.',
    
    compatibility: {
      goodMates: ['Rainbowfish', 'Tetras', 'Danios', 'Corydoras', 'Gobies', 'Peaceful barbs'],
      badMates: ['Fin nippers', 'Large aggressive cichlids', 'Slow moving fish'],
      notes: 'Best kept in groups with a ratio of more females than males to allow natural displays without exhausting the females.',
      
      rules: [
        {
          type: 'requires',
          condition: 'secure lid',
          reason: 'They are skilled jumpers and will leap from the tank if startled or during energetic displays.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'group-size >= 6',
          reason: 'They are a schooling species. Small groups lead to stress and lack of natural social behavior.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'hard alkaline water',
          reason: 'They are adapted to hard, alkaline conditions. Soft, acidic water compromises their immune system.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 1,
      territorial: 1,
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
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Groups of 6+ fish', 
      'Secure lid', 
      'Hard alkaline water', 
      'Live or frozen foods',
    ],

    proTips: [
      "They can be reluctant to accept dried foods initially; live or frozen foods are often required to induce feeding.",
      "A dark substrate and floating plants help reduce glare and encourage better coloration.",
      "They prefer a tank with some current to mimic their natural riverine habitat."
    ],

    commonMistakes: [
      "Keeping them in soft, acidic water leads to reduced lifespan and disease.",
      "Failing to provide a varied diet of live or frozen foods results in poor condition.",
      "Underestimating their jumping ability leads to losses."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['bloodworms', 'brine-shrimp', 'daphnia', 'flakes'],
      supplements: ['mosquito-larvae'],
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
      notes: 'Regular water changes are essential to maintain water quality and encourage spawning.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'hang-on-back',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'velvet', 'bloat'],
    sensitivities: ['Soft water', 'Poor water quality', 'Lack of live food'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the Mananjary River system in eastern Madagascar. They inhabit clear, well-oxygenated streams with moderate flow. The water is typically hard and alkaline.",
    sexualDimorphism: "Males are larger and develop a bright red or orange tail fin. Females are smaller with a yellowish tail and a noticeably plumper belly when gravid.",
    variants: ['Wild Type'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Spawning occurs among fine-leaved plants or spawning mops. Pairs spawn daily over a period of days.',
    fryCare: 'Eggs are large and hatch in about 6-7 days. Fry are relatively large and can take baby brine shrimp immediately.',
    notes: 'Breeding is achievable in home aquaria but eggs are prone to fungus; using methylene blue or placing eggs in clean water is recommended.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'jumping', cause: 'startled-no-lid', frequency: 0.30 },
      { issue: 'starvation', cause: 'refusal-of-dry-food', frequency: 0.25 },
      { issue: 'water-quality', cause: 'soft-water-stress', frequency: 0.20 },
      { issue: 'stress', cause: 'small-group-size', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};