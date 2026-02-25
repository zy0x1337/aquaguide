import type { Species } from '../../types/species';

export const corydorasPaleatus: Species = {
  id: 'species-corydoras-paleatus',
  slug: 'corydoras-paleatus',
  imageUrl: '/images/species/corydoras-paleatus.jpg',
  
  funFact: "As one of the first tropical fish bred in captivity back in 1876, this hardy species remains a favorite for its ability to survive in cool, oxygen-poor waters by swallowing air at the surface.",

  imageCredit: {
    photographer: 'Kuznetsov_Peter on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/corydoras-paleatus-4996632/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  taxonomy: {
    scientificName: 'Corydoras paleatus',
    commonName: 'Peppered Corydoras',
    family: 'Callichthyidae',
    origin: 'South America (Argentina, Uruguay - Paraná and La Plata river basins)',
    region: 'South America',
    biotope: 'Shallow, slow-moving rivers and floodplains with sandy substrates in temperate South America.',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 7,
    color: 'A silver-green body is overlaid with a distinctive peppered pattern of black and grey spots. An albino variant with a pinkish body and red eyes is also common in the aquarium trade.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 18, max: 24, ideal: 21 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 5, max: 19 },
    kh: { min: 2, max: 12 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'surface',
      preference: 0.98,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.6,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Hardy plants like Java Fern and Vallisneria are ideal as they tolerate the cooler water temperatures this species prefers. Broad-leaved plants provide convenient resting spots near the bottom for these active foragers.',
    hardscape: ['Smooth river stones', 'Driftwood', 'Terracotta caves', 'Leaf litter'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'bottom_dweller', 'social', 'robust', 'scaleless', 'coldwater'],
    minGroupSize: 6,
    description: 'This robust and peaceful catfish is a lively addition to the cooler water aquarium, constantly scavenging along the bottom for food. It is a social species that must be kept in groups, where it will exhibit playful behavior and winks as it searches the substrate. While generally hardy, it possesses sensitive barbels that require a soft sand substrate to prevent erosion and infection. They are famous for their sudden dashes to the surface to gulp air, a behavior made possible by their specialized intestinal breathing. Unlike many Corydoras, they thrive in unheated tanks, making them excellent companions for subtropical species.',
    
    compatibility: {
      goodMates: ['White Cloud Mountain Minnows', 'Hillstream Loaches', 'Rosy Barbs', 'Goldfish', 'Cherry Shrimp'],
      badMates: ['Tropical fish requiring 26-28°C', 'Aggressive Cichlids', 'Large predatory catfish'],
      notes: 'They are ideal inhabitants for unheated or temperate tanks but struggle in the consistently high temperatures required by many tropical species.',
      
      rules: [
        {
          type: 'requires',
          condition: 'temperature <= 24°C',
          reason: 'This species originates from a temperate climate and suffers from heat stress in standard tropical temperatures.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'tropical fish requiring 26-28°C',
          reason: 'A compromise temperature will either overheat the Peppered Cory or chill the tropical tankmates.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'Sharp gravel damages their sensitive barbels, leading to infection and an inability to locate food.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 6',
          reason: 'They are social shoalers that become withdrawn and stressed when kept alone or in pairs.',
          severity: 'high',
        },
        {
          type: 'requires',
          target: 'goldfish (fancy varieties)',
          reason: 'Both species thrive in the same cooler temperature range, making them compatible tankmates.',
          severity: 'low',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
        midwater: '15-30',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'afternoon', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
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
      'Cool water (18-22°C ideal)', 
      'Sand substrate', 
      'Groups of 6+',
      'Sinking foods',
    ],

    proTips: [
      "In many homes, an aquarium heater is unnecessary for this species as they thrive at normal room temperature.",
      "Feed sinking pellets or wafers in the evening to ensure they get their share before other fish eat it all.",
      "They are sensitive to salt, so avoid using it as a treatment in their tank."
    ],

    commonMistakes: [
      "Keeping them in heated tropical tanks shortens their lifespan significantly due to metabolic stress.",
      "Using gravel substrate wears down their barbels and leads to bacterial infections.",
      "Keeping them alone results in a shy fish that spends all its time hiding."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['wafers', 'pellets', 'bloodworms'],
      supplements: ['brine-shrimp', 'daphnia', 'vegetables'],
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
      notes: 'Regular vacuuming of the substrate is essential to prevent the buildup of waste that can harm their sensitive barbels.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 12,
    commonDiseases: ['barbel-erosion', 'red-blotch-disease', 'ich', 'columnaris', 'fungal-infections'],
    sensitivities: ['High temperatures', 'Salt', 'Copper medications', 'Sharp substrate', 'Sudden temperature changes'],
  },

  scientificContext: {
    wildHabitat: "Native to the cooler river basins of Argentina and Uruguay, this species inhabits waters far south of the Amazon. Unlike many tropical relatives, it is adapted to significant seasonal temperature drops, thriving in environments that would be too cold for most other Corydoras. These habitats are typically shallow and rich in detritus, where the fish forage among leaf litter and muddy substrates. Their ability to breathe atmospheric air allows them to survive in oxygen-poor conditions often found in stagnant backwaters.",
    sexualDimorphism: "Females grow larger and display a much rounder, broader body shape, particularly when laden with eggs. Males remain smaller and slimmer, often showing a more streamlined profile when viewed from above.",
    variants: ['Wild Type', 'Albino', 'Longfin', 'High-Fin'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'beginner',
    trigger: 'Spawning is frequently triggered by a large water change with slightly cooler water, simulating the seasonal influx of fresh rainwater. A diet rich in live or frozen foods for several weeks prior helps condition the females for egg production.',
    fryCare: 'The fry are relatively large upon hatching and can accept newly hatched brine shrimp or microworms almost immediately. They grow quickly in clean, well-oxygenated water with daily small water changes. Because they are sensitive to poor water quality, maintaining pristine conditions is more critical for the fry than for the adults. Keep the rearing tank relatively shallow to facilitate their access to the surface for air.',
    notes: 'They have been bred in captivity for over a century and are one of the easiest catfish to spawn in the home aquarium.',
  },
  
  experienceData: {
    successRate: 0.92,
    survivalRate: 0.88,
    
    commonFailures: [
      { issue: 'shortened-lifespan-early-death', cause: 'kept-too-warm-over-24C', frequency: 0.35 },
      { issue: 'barbel-erosion', cause: 'gravel-substrate', frequency: 0.25 },
      { issue: 'stress-hiding', cause: 'small-group-under-6-fish', frequency: 0.15 },
      { issue: 'red-blotch-disease', cause: 'dirty-substrate-bacteria', frequency: 0.12 },
      { issue: 'salt-toxicity', cause: 'aquarium-salt-treatment', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 6, max: 18, currency: 'EUR' },
    },
  },
};