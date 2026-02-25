import type { Species } from '../../types/species';

export const diamondTetra: Species = {
  id: 'tetra-010',
  slug: 'diamond-tetra',
  imageUrl: '/images/species/diamond-tetra.jpg',
  
  funFact: "The Diamond Tetra is the ugly duckling of the aquarium world, starting life as a drab grey juvenile before maturing into a shimmering jewel with iridescent scales that sparkle under the light.",

  taxonomy: {
    scientificName: 'Moenkhausia pittieri',
    commonName: 'Diamond Tetra',
    family: 'Characidae',
    origin: 'Venezuela (Lake Valencia and surrounding coastal rivers)',
    region: 'South America',
    biotope: 'Slow-moving rivers and lakes with clear water and moderate vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 6,
    color: 'The body displays a silvery base that reflects blue and violet light, resembling a diamond. Males develop long, flowing fins as they mature, while females remain rounder with shorter fins.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 120,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'moderate',
    substrate: 'dark',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'all',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 35,
      territories: 0,
    },
    
    bioloadMultiplier: 0.50,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Setup should emphasize open swimming space to showcase their active schooling behavior. Position full-spectrum lights to catch the iridescence of their scales, using dark substrate to enhance the contrast.',
    hardscape: ['Driftwood', 'Smooth river stones', 'Indian Almond Leaves'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'active', 'diurnal', 'colorful'],
    minGroupSize: 10,
    description: 'These active fish are a joy to watch as they patrol the middle layers of the aquarium in a tight school. They are relatively peaceful but can be boisterous during feeding time, so ensure all tankmates get their share. Males often engage in spirited but harmless displays, flaring their fins at one another to assert dominance. Their signature iridescence develops fully with age, turning a seemingly plain fish into a sparkling highlight of the tank.',
    
    compatibility: {
      goodMates: ['Corydoras', 'Larger Tetras', 'Rasboras', 'Peaceful Barbs', 'Dwarf Cichlids'],
      badMates: ['Tiger Barbs', 'Large Cichlids', 'Fin-nippers'],
      notes: 'They are robust enough to withstand the activity of a lively community tank but should be protected from species that might nip their elaborate fins.',
      
      rules: [
        {
          type: 'avoid',
          target: 'fin-nipping species',
          reason: 'Species that nip fins will damage the long, flowing extensions that mature males develop.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'large predatory fish',
          reason: 'Their small size makes them an easy meal for large predatory species.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'group size 10+ fish',
          reason: 'They are schooling fish that feel insecure and hide constantly if kept in small numbers.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'tank length 80cm+',
          reason: 'They are active swimmers that require horizontal space to exhibit natural behavior.',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'very small fish',
          reason: 'Adult Diamond Tetras may eat tiny fry or very small nano species.',
          severity: 'low',
        },
      ],
      
      idealTankmates: {
        surface: 0-10,
        midwater: '10-20',
        bottom: '8-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'afternoon'],
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
    cost: 'medium',
    specialRequirements: [
      'Proper lighting setup', 
      'Tank length 80cm+', 
      'Maturity takes 8-12 months', 
      'Dark substrate',
      'Groups of 10+',
    ],

    proTips: [
      "Full-spectrum lighting is essential to reveal their true diamond-like sparkle.",
      "Patience is key, as males do not develop their full coloration and fin length until they are nearly a year old.",
      "Feed a varied diet including carotenoid-rich foods to enhance their iridescence."
    ],

    commonMistakes: [
      "Buying them as juveniles and expecting immediate color leads to disappointment.",
      "Keeping them with fin nippers ruins their beautiful finnage.",
      "Housing them in a small tank restricts their active swimming behavior."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'flakes', 'brine-shrimp', 'daphnia'],
      supplements: ['bloodworms', 'spirulina'],
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
      notes: 'Crystal clear water is necessary to maximize the light reflection that creates their signature shimmer.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 150,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'high',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['ich', 'columnaris', 'velvet', 'fin-rot'],
    sensitivities: ['Ammonia spikes', 'Temperature shocks', 'Poor water quality', 'Fin-nipping tankmates'],
  },

  scientificContext: {
    wildHabitat: "Native to Lake Valencia in Venezuela, this species inhabits calm, vegetated waters. Unlike many tetras, they are not found in extreme blackwater environments but prefer clearer, neutral water with plenty of plant life. The lake has suffered from pollution in recent decades, making captive breeding important for the species' presence in the hobby.",
    sexualDimorphism: "Males are easily distinguished by their elongated dorsal and anal fins, which become quite flowing with age. Females are significantly rounder in the body, especially when carrying eggs, and lack the dramatic fin extensions of the males.",
    variants: ['Wild Type', 'Captive-Bred'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Spawning is often induced by slightly raising the water temperature and offering a diet rich in small live or frozen foods to condition the females.',
    fryCare: 'Once the eggs hatch, the tiny fry require microscopic food sources like infusoria for the first few days. As they grow, they can be transitioned to baby brine shrimp. Regular water changes are critical to ensure high survival rates during the early stages of development.',
    notes: 'Breeding is moderately difficult, largely due to the need for a separate rearing tank to protect the eggs.',
  },
  
  experienceData: {
    successRate: 0.82,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'disappointing-appearance', cause: 'judged-before-maturity-or-poor-lighting', frequency: 0.30 },
      { issue: 'fin-damage', cause: 'kept-with-fin-nipping-species-tiger-barbs', frequency: 0.18 },
      { issue: 'ich-outbreak', cause: 'temperature-fluctuation-or-stress-new-tank', frequency: 0.15 },
      { issue: 'stress-hiding', cause: 'group-too-small-under-10-fish', frequency: 0.12 },
      { issue: 'color-fading', cause: 'poor-diet-or-cloudy-water', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 120, max: 300, currency: 'EUR' },
      monthly: { min: 15, max: 30, currency: 'EUR' },
    },
  },
};