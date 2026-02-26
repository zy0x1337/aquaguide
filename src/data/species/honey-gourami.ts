import type { Species } from '../../types/species';

export const honeyGourami: Species = {
  id: 'gourami-001',
  slug: 'honey-gourami',
  imageUrl: '/images/species/honey-gourami.jpg',
  
  funFact: "Males undergo a dramatic transformation during courtship, turning from a gentle honey gold to a deep black with vibrant yellow stripes while constructing intricate bubble nests at the surface.",

  taxonomy: {
    scientificName: 'Trichogaster chuna',
    commonName: 'Honey Gourami',
    family: 'Osphronemidae',
    origin: 'India and Bangladesh (rice paddies, slow-moving streams, ponds)',
    region: 'Asia',
    biotope: 'Slow-moving or stagnant waters with dense surface vegetation and low oxygen levels.',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 5,
    color: 'Males range from golden honey yellow to a striking black and yellow breeding pattern. Females remain a subdued silvery tan with a distinctive dark lateral line.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    gh: { min: 4, max: 15 },
    kh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'midwater',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 1,
    },
    
    bioloadMultiplier: 0.8,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Floating plants are essential for bubble nest construction and providing the sense of security these shy fish require. Dense planting creates the necessary cover to encourage them to swim in the open.',
    hardscape: ['Driftwood', 'Smooth caves', 'Leaf litter'],
  },

  behavior: {
    tags: ['peaceful', 'shy', 'bubble_nester', 'labyrinth_fish', 'centerpiece'],
    minGroupSize: 1,
    description: 'These peaceful labyrinth fish are perfect centerpiece species for quiet community tanks, spending their time gracefully exploring the upper water levels. Males are dedicated bubble nest builders, constructing intricate foam structures among floating plants while displaying dramatic breeding colors. They possess a specialized labyrinth organ that allows them to gulp atmospheric air, enabling them to thrive in oxygen-poor environments. While generally peaceful, males can become territorial toward one another or harass females during spawning, so keeping a single male with multiple females is recommended. They are timid by nature and will retreat into vegetation if kept with boisterous tankmates.',
    
    compatibility: {
      goodMates: ['Small peaceful tetras', 'Small rasboras', 'Corydoras', 'Kuhli Loaches', 'Otocinclus', 'Peaceful snails'],
      badMates: ['Aggressive fish', 'Fin-nippers', 'Bettas', 'Fast boisterous fish'],
      notes: 'They are excellent for peaceful planted tanks but are easily intimidated by active species. Avoid mixing with Bettas to prevent territorial conflicts.',
      
      rules: [
        {
          type: 'requires',
          condition: 'floating plants mandatory',
          reason: 'Males need floating plants to build bubble nests, and both sexes require surface cover to feel secure.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'low flow filtration',
          reason: 'Strong currents destroy bubble nests and cause chronic stress for this species adapted to stagnant water.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'single females with males',
          reason: 'Males relentlessly court females, and a single female can be harassed to death without others to share the attention.',
          severity: 'high',
        },
        {
          type: 'warning',
          condition: 'densely planted tank',
          reason: 'Without dense vegetation, these shy fish will hide constantly and refuse to come out.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 1-3,
        midwater: '10-20',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 4,
      interspecific: 0,
      territorial: 3,
    },
    
    activity: {
      level: 'low',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
      maxMalesPerTank: 2,
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
      'Floating plants mandatory', 
      'Low flow filtration', 
      'Densely planted tank', 
      '1 male : 2 females ratio',
    ],

    proTips: [
      "Maintain a tight-fitting lid and reduce surface flow to protect the bubble nests males build.",
      "Keep a ratio of one male to two or three females to prevent the male from harassing a single female."
    ],

    commonMistakes: [
      "Keeping them in strong currents destroys their bubble nests and causes stress.",
      "Housing them with fin-nippers or aggressive fish leads to chronic stress and hiding."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'crushed-flakes', 'brine-shrimp', 'daphnia'],
      supplements: ['bloodworms', 'spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Perform gentle water changes to avoid disturbing the bubble nest if present.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['ich', 'velvet', 'fin-rot', 'dropsy'],
    sensitivities: ['Strong current', 'Cold water', 'Parameter swings', 'Aggressive tankmates'],
  },

  scientificContext: {
    wildHabitat: "Native to the stagnant pools and rice paddies of India and Bangladesh, these fish inhabit warm, slow-moving waters rich in vegetation. They are often found in areas with low oxygen levels, utilizing their labyrinth organ to breathe atmospheric air. The water is typically soft and acidic, stained dark by tannins from decaying organic matter.",
    sexualDimorphism: "Males are easily distinguished by their brighter coloration and pointed dorsal fins, turning deep black when in breeding condition. Females are larger, rounder in the belly, and retain a uniform silvery-brown coloration.",
    variants: ['Standard Honey', 'Sunset/Red Honey', 'Gold Honey'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'Lower the water level slightly and raise the temperature to simulate the dry season, prompting the male to build a bubble nest among floating plants. Condition the pair with live foods to encourage spawning behavior.',
    fryCare: 'Once the eggs hatch, the male guards the nest, and the fry become free-swimming after three days. At this stage, remove the male and feed the tiny fry infusoria or liquid fry food for the first week. As they grow, introduce newly hatched brine shrimp and perform frequent small water changes to maintain quality.',
    notes: 'Males can become aggressive toward females after spawning; removing the female is often necessary for her safety.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'female-harassment-death', cause: 'single-female-with-male', frequency: 0.30 },
      { issue: 'chronic-stress', cause: 'strong-filtration-flow', frequency: 0.25 },
      { issue: 'hiding-stress', cause: 'no-floating-plants', frequency: 0.20 },
      { issue: 'intimidation-stress', cause: 'aggressive-tankmates', frequency: 0.15 },
      { issue: 'territorial-conflicts', cause: 'mixed-with-bettas', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 220, currency: 'EUR' },
      monthly: { min: 12, max: 30, currency: 'EUR' },
    },
  },
};