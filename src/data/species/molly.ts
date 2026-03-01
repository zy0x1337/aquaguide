import type { Species } from '../../types/species';

export const molly: Species = {
  id: 'molly-001',
  slug: 'molly',
  imageUrl: '/images/species/molly.jpg',
  
  funFact: "Mollies are euryhaline survivors, capable of living in everything from pure freshwater to full saltwater, but they will develop a fatal condition known as 'the shimmies' if kept in soft, acidic water.",

  taxonomy: {
    scientificName: 'Poecilia sphenops',
    commonName: 'Molly',
    family: 'Poeciliidae',
    origin: 'Central America (Mexico to Colombia)',
    region: 'Central America',
    biotope: 'Coastal estuaries, mangrove swamps, and hard, alkaline streams.',
  },

  visuals: {
    iconShape: 'globiform',
    adultSizeCM: 9,
    color: 'Selective breeding has produced many color morphs, including the popular solid Black Molly and spotted Dalmatian. Males are slimmer and possess a gonopodium, a modified anal fin used for breeding.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 7.5, max: 8.5, ideal: 8.0 },
    gh: { min: 15, max: 35 },
    kh: { min: 8, max: 20 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'midwater',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 35,
      territories: 0,
    },
    
    bioloadMultiplier: 1.8,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Hardy plants like Java Fern and Anubias are ideal as they tolerate the hard water and occasional saline additions mollies enjoy. Provide dense cover for fry to escape predation by adults.',
    hardscape: ['Driftwood', 'Smooth rocks'],
  },

  behavior: {
    tags: ['peaceful', 'active', 'livebearer', 'surface_dweller'],
    minGroupSize: 3,
    description: 'These active livebearers are generally peaceful but males are relentless in their pursuit of females. A single male will constantly harass a single female, so it is essential to keep multiple females for every male. They are prolific breeders, and females can store sperm for months, producing multiple broods from a single mating. They spend most of their time in the upper water column grazing on algae.',
    
    compatibility: {
      goodMates: ['Platies', 'Swordtails', 'Guppies', 'Corydoras', 'Peaceful barbs'],
      badMates: ['Aggressive cichlids', 'Soft water species', 'Long-finned fish'],
      notes: 'They are excellent for hard water community tanks but will struggle in soft, acidic conditions that suit many tetras.',
      
      rules: [
        {
          type: 'requires',
          condition: 'hard alkaline water (GH 15-30+, pH 7.5-8.5)',
          reason: 'In soft water, they develop a neurological condition known as the shimmies, which is often fatal.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: '1 male : 2-3 females ratio',
          reason: 'Males will harass a single female to exhaustion; multiple females spread the attention.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'Black Mollies',
          reason: 'This morph is highly inbred and more susceptible to disease and genetic defects than other varieties.',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'Balloon Mollies',
          reason: 'Selected for a spinal deformity, these fish often suffer from swim bladder issues and shorter lifespans.',
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
      intraspecific: 3,
      interspecific: 2,
      territorial: 1,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
      maxMalesPerTank: 3,
    },
    
    finNipping: {
      risk: 'low',
      targets: ['long-finned fish when hungry'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Hard alkaline water is mandatory', 
      'Multiple females per male', 
      'Vegetable matter in diet', 
      'Aquarium salt optional but beneficial',
    ],

    proTips: [
      "Add 1 teaspoon of aquarium salt per 20 liters to mimic their natural brackish environment and boost their immune system.",
      "Ensure the diet contains plenty of vegetable matter, such as spirulina or blanched spinach, to prevent them from nibbling on the fins of tankmates."
    ],

    commonMistakes: [
      "Keeping them in soft water leads to the shimmies, a fatal condition caused by mineral deficiency.",
      "Housing one male with one female results in the female being harassed constantly.",
      "Buying highly inbred Black Mollies from mass-production facilities often leads to disease outbreaks."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['spirulina', 'algae-wafers', 'flakes'],
      supplements: ['brine-shrimp', 'bloodworms', 'vegetables'],
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
      notes: 'They produce a high bioload for their size, necessitating regular water changes and good filtration to keep nitrates low.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 150,
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
    commonDiseases: ['shimmies', 'ich', 'fin-rot', 'fungal-infections'],
    sensitivities: ['Soft water', 'Cold temperatures', 'High nitrates'],
  },

  scientificContext: {
    wildHabitat: "Inhabits coastal brackish waters, estuaries, and mangrove swamps from Mexico to Colombia. These environments feature fluctuating salinity and very hard, alkaline water rich in algae. Their natural diet consists heavily of aufwuchs and algae scraped from surfaces. This origin explains their unique tolerance for saltwater and their requirement for mineral-rich water in the aquarium. They are not currently endangered in the wild.",
    sexualDimorphism: "Males are smaller and possess a gonopodium, a modified anal fin used for internal fertilization. Females are significantly larger with a fuller body and a standard fan-shaped anal fin.",
    variants: ['Black Molly', 'Dalmatian', 'Gold', 'Marble', 'Balloon', 'Sailfin Molly'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger: 'Breeding occurs readily in warm, hard water. Females can store sperm for up to six months to produce multiple broods.',
    fryCare: 'The adults will eat the fry if not separated or provided with dense plant cover. The fry are born relatively large and can immediately consume crushed flakes or baby brine shrimp. Providing floating plants offers a crucial refuge for the young.',
    notes: 'They are prolific breeders, often overpopulating a tank if measures are not taken to control the population.',
  },
  
  experienceData: {
    successRate: 0.65,
    survivalRate: 0.60,
    
    commonFailures: [
      { issue: 'shimmies-death-wobble', cause: 'soft-acidic-water-under-gh-15', frequency: 0.50 },
      { issue: 'weak-black-mollies', cause: 'inbred-genetics-from-chain-stores', frequency: 0.20 },
      { issue: 'female-harassment-death', cause: 'wrong-male-female-ratio-too-many-males', frequency: 0.10 },
      { issue: 'ich-outbreak', cause: 'cold-water-under-24c-stress', frequency: 0.10 },
      { issue: 'fin-nipping-aggression', cause: 'no-vegetable-matter-in-diet', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};