import type { Species } from '../../types/species';

export const pterophyllumScalare: Species = {
  id: 'pterophyllum-scalare',
  slug: 'pterophyllum-scalare',
  imageUrl: '/images/species/pterophyllum-scalare.jpg',
  
  funFact: "Angelfish are intelligent cichlids that recognize their owners and form monogamous pairs. Both parents meticulously care for their eggs and fry, fiercely defending their territory during spawning. Their tall, laterally compressed bodies are an adaptation for ambushing prey among reeds in their native Amazon basin.",

  imageCredit: {
    photographer: 'Pixabay',
    sourceUrl: 'https://pixabay.com/photos/angel-fish-tropical-fish-aquarium-1011451/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },
  
  taxonomy: {
    scientificName: 'Pterophyllum scalare',
    commonName: 'Freshwater Angelfish',
    family: 'Cichlidae',
    origin: 'South America (Amazon Basin - Peru, Colombia, Brazil)',
    region: 'South America',
    biotope: 'Flooded forests and slow-moving blackwater tributaries with dense vertical vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 15,
    color: 'Wild type features a silver body with four dark vertical stripes. Many captive-bred variants exist, including Koi, Marble, Albino, and Black Lace. Their iconic disc shape and tall fins require a tall aquarium.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 240,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 3, max: 15 },
    kh: { min: 2, max: 10 },
    flow: 'low',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.9,
    },
    
    spaceNeeds: {
      horizontalCM: 120,
      verticalCM: 60,
      territories: 1,
    },
    
    bioloadMultiplier: 4.0,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Tall plants like Amazon Swords and Vallisneria are essential to mimic their natural habitat and provide security. Floating plants help diffuse light.',
    hardscape: ['Large driftwood branches', 'Smooth river rocks', 'Spawning slates'],
  },

  behavior: {
    tags: ['intelligent', 'territorial', 'schooler'],
    minGroupSize: 6,
    description: 'Angelfish are intelligent cichlids that form complex social hierarchies. They are ambush predators using their vertical stripes to hide among reeds. While generally peaceful when young, they become highly territorial during breeding. They require groups when young to form natural pairs, but established breeding pairs become aggressive towards other angelfish and small fish.',
    
    compatibility: {
      goodMates: ['Larger tetras (Congo, Bleeding Heart)', 'Corydoras', 'Bristlenose Plecos', 'Peaceful Gouramis'],
      badMates: ['Small tetras (Neons)', 'Guppies', 'Fin nippers (Tiger Barbs)', 'Aggressive cichlids'],
      notes: 'Juveniles are peaceful, but adults will eat small fish. Breeding pairs become very aggressive.',
      
      rules: [
        {
          type: 'requires',
          condition: '240L minimum for 6 angels, 500L for breeding pair',
          reason: 'They grow tall and need space to establish territories. Small tanks lead to stunted growth and aggression.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'tank height 60cm minimum',
          reason: 'Their vertical fin span can exceed 20cm. Standard tanks restrict movement and cause stress.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'small fish under 4cm',
          reason: 'Adult angels are predators and will consume small tankmates like Neon Tetras.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'fin nippers',
          reason: 'Their long fins are prime targets for species like Tiger Barbs, leading to injury and infection.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 6,
      interspecific: 5,
      territorial: 8,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
      maxMalesPerTank: 3,
    },
    
    finNipping: {
      risk: 'low',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      '240L minimum tank', 
      'Tank height 60cm+', 
      'Heavily planted', 
      'Soft acidic water', 
      'No fin nippers', 
      'Tankmates 4cm+ only',
    ],

    proTips: [
      "Buy juveniles in groups of 6-8 to allow natural pairs to form.",
      "Tank height is more critical than length due to their vertical orientation.",
      "Provide vertical structures like tall plants or driftwood for security."
    ],

    commonMistakes: [
      "Keeping with small fish that will be eaten as the angel matures.",
      "Housing with fin nippers which damage their delicate fins.",
      "Using tanks that are too short, restricting their natural swimming motion."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['pellets', 'flakes', 'bloodworms'],
      supplements: ['brine-shrimp', 'vegetables', 'daphnia'],
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
      notes: 'Angelfish are sensitive to water quality; maintain stable parameters to avoid stress and disease.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 200,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: true,
    },
  },

  health: {
    lifespanYears: 12,
    commonDiseases: ['ich', 'hole-in-head-disease', 'fin-rot', 'velvet'],
    sensitivities: ['Ammonia', 'High nitrates', 'Sudden parameter swings', 'Copper medications'],
  },

  scientificContext: {
    wildHabitat: "Inhabits the densely vegetated, slow-moving waters of the Amazon Basin. They use their tall, striped bodies to camouflage among vertical reeds and roots, ambushing small fish and invertebrates. They form monogamous pairs that defend breeding territories vigorously.",
    sexualDimorphism: "Males often have a more pronounced nuchal hump and a steeper forehead. Females are rounder when gravid. Venting is the most reliable method for sexing.",
    variants: ['Wild type', 'Koi', 'Marble', 'Albino', 'Black Lace', 'Gold', 'Platinum', 'Leopard', 'Zebra', 'Veil'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'medium',
    trigger: 'Breeding often follows a water change with slightly softer, warmer water. The pair will select a vertical surface, such as a slate or broad leaf, to clean and deposit eggs upon.',
    fryCare: 'Parents guard the eggs and fan them to prevent fungus. Once hatched, fry can be fed newly hatched brine shrimp. Parents may eat the first few spawns as they learn. Fry grow quickly but need protection from other tank inhabitants.',
    notes: 'Breeding pairs become highly aggressive and are best moved to a dedicated tank to protect tankmates and ensure fry survival.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'neon-tetras-eaten-by-mature-angels', cause: 'kept-with-small-fish-under-4cm-became-prey', frequency: 0.35 },
      { issue: 'shredded-fins-from-nipping', cause: 'kept-with-fin-nippers-tiger-barbs-serpae-tetras', frequency: 0.25 },
      { issue: 'stress-from-short-tank', cause: 'tank-height-under-60cm-restricted-vertical-swimming', frequency: 0.15 },
      { issue: 'bullying-in-small-groups', cause: 'kept-only-2-3-angels-dominant-bullied-weak', frequency: 0.15 },
      { issue: 'tankmates-killed-breeding-aggression', cause: 'ignored-breeding-pair-territorial-aggression', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 300, max: 800, currency: 'EUR' },
      monthly: { min: 20, max: 50, currency: 'EUR' },
    },
  },
};