import type { Species } from '../../types/species';

export const trichopodusTrichopterus: Species = {
  id: 'gourami-three-spot',
  slug: 'three-spot-gourami',
  imageUrl: '/images/species/three-spot-gourami.jpg',
  
  funFact: "The Three Spot Gourami is a chameleon of the aquarium world, available in stunning color morphs like the Gold, Opaline, and Cosby Gourami, all deriving from the wild-type Blue Gourami. They possess a labyrinth organ, allowing them to gulp atmospheric oxygen directly from the surface, a survival adaptation for the oxygen-poor waters of their native habitat.",

  taxonomy: {
    scientificName: 'Trichopodus trichopterus',
    commonName: 'Three Spot Gourami / Blue Gourami',
    family: 'Osphronemidae',
    origin: 'Southeast Asia (Thailand, Vietnam, Malaysia, Indonesia)',
    region: 'Asia',
    biotope: 'Slow-moving or stagnant bodies of water including swamps, rice paddies, and canals with dense vegetation and low oxygen levels.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 15,
    color: 'The wild type is a pale blue with two dark spots (one mid-body, one at the caudal peduncle) and the eye acting as a third spot. Selective breeding has produced the Gold (yellow), Opaline (marbled blue), and Cosby (deep blue with black marbling) varieties. Males have a pointed dorsal fin.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 18 },
    kh: { min: 3, max: 12 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 35,
      territories: 1,
    },
    
    bioloadMultiplier: 1.5,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'They appreciate densely planted tanks with tall plants that reach the surface, providing hiding spots and territory markers. Floating plants are essential to diffuse overhead light and simulate their natural habitat.',
    hardscape: ['Driftwood', 'Smooth stones', 'Roots'],
  },

  behavior: {
    tags: ['semi-aggressive', 'territorial', 'labyrinth_fish'],
    minGroupSize: 1,
    description: 'A hardy and adaptable fish that can develop distinct personalities. Males can be territorial and aggressive toward other males and similarly shaped fish. They are generally peaceful with larger, peaceful species but may bully smaller tankmates. Like all gouramis, they regularly surface to gulp air.',
    
    compatibility: {
      goodMates: ['Gouramis (other species, in large tanks)', 'Barbs', 'Larger Tetras', 'Danios', 'Corydoras', 'Plecos'],
      badMates: ['Male gouramis (conspecifics)', 'Bettas', 'Fin nippers', 'Very small fish', 'Aggressive cichlids'],
      notes: 'Males are often intolerant of other male Three Spot Gouramis. They can be kept in pairs (male and female) in adequately sized tanks, or singly. Avoid housing with long-finned species due to potential fin nipping.',
      
      rules: [
        {
          type: 'requires',
          condition: 'air gap at water surface',
          reason: 'They are labyrinth fish and must have access to atmospheric air to survive. Filling the tank to the brim without an air space is dangerous.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'keeping multiple males',
          reason: 'Males are territorial and will fight relentlessly. Keep one male per tank or ensure the tank is very large with plenty of visual barriers.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'slow or long-finned fish',
          reason: 'They may nip the fins of slow-moving fish like Bettas or Angelfish.',
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
      intraspecific: 7,
      interspecific: 4,
      territorial: 7,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'pair',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'medium',
      targets: ['long-finned fish', 'slow-moving tankmates'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Access to surface air', 
      'Cover to reduce aggression', 
      'Avoid multiple males', 
      'Secure lid',
    ],

    proTips: [
      "They are extremely hardy and can tolerate a wide range of water conditions, making them excellent for beginners.",
      "Floating plants help reduce aggression by breaking lines of sight and making them feel more secure.",
      "Feed a varied diet including some vegetable matter, such as blanched peas or spinach."
    ],

    commonMistakes: [
      "Housing two males together leads to constant fighting and injury.",
      "Keeping them in tanks with strong currents stresses them, as they prefer calm water.",
      "Failing to provide a gap between the water and the lid can cause them to damage themselves when surfacing for air."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'pellets', 'bloodworms', 'brine-shrimp'],
      supplements: ['spirulina', 'vegetables'],
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
      notes: 'They are relatively clean fish but still benefit from regular maintenance. Keep the water flow gentle.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'hang-on-back',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['ich', 'velvet', 'fin rot', 'internal parasites'],
    sensitivities: ['Strong currents', 'Cold water', 'High nitrates'],
  },

  scientificContext: {
    wildHabitat: "Found in a variety of shallow, slow-moving freshwater habitats in Southeast Asia. They are often found in ditches, rice paddies, and swamps where oxygen levels can be low, which drove the evolution of their labyrinth organ.",
    sexualDimorphism: "Males have a longer, more pointed dorsal fin, while females have a shorter, more rounded dorsal fin. Males may also show more intense coloration during breeding.",
    variants: ['Blue Gourami (Wild Type)', 'Gold Gourami', 'Opaline Gourami', 'Cosby Gourami', 'Three Spot Gourami'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'beginner',
    trigger: 'Lowering the water level and slightly increasing the temperature can trigger spawning. Males build a bubble nest among floating plants.',
    fryCare: 'The male guards the nest. Fry are tiny and need infusoria or green water for the first few days before moving on to baby brine shrimp. Remove the female after spawning; the male should be removed once the fry are free swimming.',
    notes: 'Breeding is relatively easy. The male becomes very protective of the nest.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'aggression between males', cause: 'keeping multiple males in small tank', frequency: 0.35 },
      { issue: 'jumping injury', cause: 'startled without lid', frequency: 0.25 },
      { issue: 'fin damage', cause: 'housed with fin nippers', frequency: 0.15 },
      { issue: 'water quality', cause: 'high nitrates', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 8, max: 18, currency: 'EUR' },
    },
  },
};