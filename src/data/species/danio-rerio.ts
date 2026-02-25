import type { Species } from '../../types/species';

export const zebraDanio: Species = {
  id: 'species-zebra-danio',
  slug: 'danio-rerio',
  imageUrl: '/images/species/danio-rerio.jpg',
  
  funFact: "The Zebra Danio is a perpetual motion machine and a scientific superstar, sharing 70% of its genetic makeup with humans and serving as a vital model organism in research.",

  imageCredit: {
    photographer: 'Kuznetsov_Peter on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/danio-rerio-zebrafisch-%d1%80%d0%b5%d1%80%d0%b8%d0%be-fische-4996610/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  taxonomy: {
    scientificName: 'Danio rerio',
    commonName: 'Zebra Danio',
    family: 'Cyprinidae',
    origin: 'India, Bangladesh, Nepal, Pakistan (Ganges, Brahmaputra river basins)',
    region: 'Asia',
    biotope: 'Slow-moving streams, rice paddies, and ditches with cool water and sandy substrates.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'A sleek silver-gold body is adorned with horizontal blue-purple stripes that run from nose to tail. Males are generally more slender and vibrant than females.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 18, max: 26, ideal: 22 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    kh: { min: 3, max: 12 },
    flow: 'moderate',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'midwater',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.8,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'These active swimmers require long stretches of open water to race. Plant densely along the back and sides to provide shelter without obstructing their swimming lanes.',
    hardscape: ['Smooth river stones', 'Driftwood', 'Pebble areas'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'active', 'surface_dweller'],
    minGroupSize: 8,
    description: 'This species is renowned for its high energy and constant movement, patrolling the upper layers of the water in a tight school. They are peaceful but can be boisterous, often outcompeting slower fish for food. In small groups, they may become nippy, but a school of eight or more individuals focuses their energy on displaying to one another. They are hardy and adaptable, making them an excellent choice for new aquariums.',
    
    compatibility: {
      goodMates: ['Corydoras', 'Tetras', 'Barbs', 'Livebearers', 'Loaches', 'Plecos'],
      badMates: ['Bettas', 'Angelfish', 'Gouramis', 'Long-finned fish'],
      notes: 'Their hyperactive nature makes them unsuitable tankmates for slow-moving or long-finned species.',
      
      rules: [
        {
          type: 'requires',
          condition: 'groups of 8-10+ fish',
          reason: 'Keeping them in smaller groups leads to aggression as they have no outlet for their social energy.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'long horizontal swimming space (80cm+ tank)',
          reason: 'They are powerful swimmers that need length to express their natural behavior.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'slow shy fish (Bettas, Angelfish, Gouramis)',
          reason: 'The constant activity of Danios causes stress for fish that prefer a calm environment.',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'long-finned fish',
          reason: 'Their active chasing can occasionally lead to fin nipping.',
          severity: 'low',
        },
      ],
      
      idealTankmates: {
        surface: 8-15,
        midwater: '15-25',
        bottom: '8-15',
      },
    },
    
    aggressionLevel: {
      intraspecific: 5,
      interspecific: 1,
      territorial: 2,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 10,
    },
    
    finNipping: {
      risk: 'low',
      targets: ['long-finned-fish'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Groups of 8-10+ mandatory', 
      'Long horizontal swimming space', 
      'Moderate water flow', 
      'Cooler water preferred', 
      'High oxygen levels',
    ],

    proTips: [
      "Maintain them in cooler water around 22 degrees Celsius to replicate their natural habitat and extend their lifespan.",
      "A dark substrate enhances the contrast of their blue and silver stripes.",
      "Feed small amounts multiple times a day to match their high metabolism."
    ],

    commonMistakes: [
      "Housing them in small groups causes aggression and fin nipping.",
      "Keeping them in a tank that is too short restricts their active swimming behavior.",
      "Maintaining the water too warm shortens their lifespan and increases susceptibility to disease."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets'],
      supplements: ['brine-shrimp', 'bloodworms', 'daphnia', 'spirulina'],
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
      notes: 'They are hardy but produce a significant amount of waste due to their high activity levels.',
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
    commonDiseases: ['ich', 'fin-rot', 'columnaris', 'dropsy', 'mycobacteriosis'],
    sensitivities: ['Warm water', 'Poor oxygenation', 'Ammonia spikes', 'Small group aggression'],
  },

  scientificContext: {
    wildHabitat: "Native to the floodplains of the Ganges and Brahmaputra rivers, this species inhabits shallow, seasonal pools and rice paddies. These environments experience wide temperature fluctuations throughout the year, which has selected for the species' remarkable hardiness. The water is typically clear and well-oxygenated, supporting a rich abundance of insect larvae and zooplankton.",
    sexualDimorphism: "Males are slimmer and display more intense coloration, particularly the blue stripes. Females are noticeably rounder, especially when laden with eggs, and their stripes often appear slightly broken by the swelling of the belly.",
    variants: ['Standard Zebra', 'Longfin', 'Leopard', 'GloFish', 'Golden', 'Albino'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Spawning is often triggered by the first light of dawn and a slight increase in temperature. Use a breeding tank filled with marbles on the bottom to protect the eggs from the parents.',
    fryCare: 'The eggs hatch within two days into tiny larvae that cling to the glass. After they become free-swimming, feed them infusoria or liquid fry food until they are large enough to accept newly hatched brine shrimp. Growth is rapid with frequent water changes and good nutrition. The parents provide no care and will eat the eggs if given the chance.',
    notes: 'They are prolific breeders, often spawning spontaneously in community tanks, though fry rarely survive.',
  },
  
  experienceData: {
    successRate: 0.90,
    survivalRate: 0.85,
    
    commonFailures: [
      { issue: 'aggression-and-injuries', cause: 'groups-under-6-fish', frequency: 0.30 },
      { issue: 'stress-and-inactivity', cause: 'tank-too-small-or-narrow', frequency: 0.22 },
      { issue: 'fin-damage', cause: 'aggressive-tankmates-or-small-groups', frequency: 0.18 },
      { issue: 'shortened-lifespan', cause: 'water-too-warm-over-26C', frequency: 0.15 },
      { issue: 'stress-from-poor-oxygenation', cause: 'inadequate-filtration-low-flow', frequency: 0.15 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};