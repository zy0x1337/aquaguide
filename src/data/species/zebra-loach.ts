import type { Species } from '../../types/species';

export const botiaStriata: Species = {
  id: 'loach-zebra',
  slug: 'zebra-loach',
  imageUrl: '/images/species/zebra-loach.jpg',

  imageCredit: {
    photographer: 'Lerdsuwa (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Agassiz%27s_dwarf_cichlid_(Apistogramma_agassizii)_(15875959140).jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/'
  },
  
  funFact: "The Zebra Loach is one of the few botiid loaches that remains relatively small, making it suitable for smaller aquariums than its larger relatives like the Clown Loach. It is a voracious snail eater, often employed by aquarists to control pest snail populations, though it will also consume other foods with enthusiasm.",

  taxonomy: {
    scientificName: 'Botia striata',
    commonName: 'Zebra Loach / Striped Loach',
    family: 'Botiidae',
    origin: 'India (Western Ghats, Mysore, Maharashtra)',
    region: 'Asia',
    biotope: 'Clear, well-oxygenated mountain streams with rocky substrates and sandy patches.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 10,
    color: 'A beautiful pattern of alternating dark brown or black and creamy white or yellow vertical stripes that encircle the body, resembling a zebra. The fins are translucent with dark banding.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 100,
    tempC: { min: 23, max: 27, ideal: 25 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 5, max: 12 },
    kh: { min: 3, max: 8 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 35,
      territories: 0,
    },
    
    bioloadMultiplier: 1.2,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'They appreciate robust plants, but ensure there is open space for swimming. They are known to dig around plant bases, so hardy species like Anubias and Java Fern attached to hardscape are best.',
    hardscape: ['Smooth river stones', 'Driftwood', 'Slate caves', 'Leaf litter'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'active', 'scaleless'],
    minGroupSize: 5,
    description: 'An active and entertaining shoaling fish. They are generally peaceful but can be boisterous during feeding. They often rest on their sides or even upside down under decorations, which can alarm inexperienced keepers. They are known for their ability to click or grunt when excited or stressed.',
    
    compatibility: {
      goodMates: ['Barbs', 'Danios', 'Rasboras', 'Gouramis', 'Tetras', 'Corydoras', 'Other peaceful loaches'],
      badMates: ['Large aggressive cichlids', 'Slow moving long finned fish', 'Bettas'],
      notes: 'They are excellent community fish for robust setups. While peaceful, they may eat small snails and can outcompete timid bottom feeders for food.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group-size >= 5',
          reason: 'They are highly social shoaling fish. Lone individuals become shy, stressed, and reclusive.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'They constantly forage by sifting sand through their gills. Sharp gravel damages their delicate barbels and skin.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'copper medications',
          reason: 'As scaleless fish, they are extremely sensitive to copper and many commercial medications.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '5-8',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 1,
      territorial: 1,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'evening'],
      nocturnal: true,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 999,
    },
    
    finNipping: {
      risk: 'low',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'medium',
    specialRequirements: [
      'Groups of 5+ fish', 
      'Sand substrate', 
      'Hiding spots', 
      'Copper free medications',
    ],

    proTips: [
      "They are excellent for controlling pest snail populations but will also eat frozen and dry foods.",
      "Provide plenty of hiding spots to make them feel secure, which actually encourages them to come out more.",
      "Avoid using nets with fine mesh, as their subocular spines can get tangled."
    ],

    commonMistakes: [
      "Keeping them alone leads to chronic stress and hiding.",
      "Using sharp gravel damages their sensory barbels.",
      "Treating the tank with standard copper-based medications is often fatal."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets', 'bloodworms', 'brine-shrimp', 'snails'],
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
      notes: 'They require clean, well-oxygenated water. They are sensitive to organic waste buildup.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 10,
    commonDiseases: ['ich', 'skinny disease', 'bacterial infections', 'parasites'],
    sensitivities: ['Copper medications', 'Formalin', 'Sharp substrate', 'Low oxygen'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the Western Ghats of India. They inhabit clear, well-oxygenated streams with rocky and sandy bottoms. These environments are often shaded by forest canopy. They are listed as Vulnerable on the IUCN Red List due to habitat loss, though they are widely bred in captivity.",
    sexualDimorphism: "Females are generally rounder and heavier-bodied than males, especially when carrying eggs. Males may have a slightly more streamlined appearance.",
    variants: ['Wild Type'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Breeding in home aquaria is rare. It requires pristine water conditions, specific feeding triggers, and often hormone injections in commercial settings.',
    fryCare: 'Fry are very small and require microscopic food cultures.',
    notes: 'Most specimens available in the trade are wild-caught or commercially farmed abroad. Home breeding is almost unheard of.',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'medication-toxicity', cause: 'exposure-to-copper', frequency: 0.30 },
      { issue: 'stress-from-isolation', cause: 'kept-alone-or-in-pairs', frequency: 0.25 },
      { issue: 'barbel-damage', cause: 'sharp-gravel-substrate', frequency: 0.15 },
      { issue: 'jumping', cause: 'no-lid', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 150, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};