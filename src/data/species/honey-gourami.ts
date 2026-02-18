import type { Species } from '../../types/species';

export const honeyGourami: Species = {
  id: 'gourami-001',
  slug: 'honey-gourami',
  imageUrl: '/images/species/honey-gourami.jpg',
  funFact: "Honey Gouramis are peaceful centerpieces with dramatic color changes! Watch males transform from golden-honey to intense black with neon yellow stripes during breeding—it's like watching a fish change costumes! They're bubble nest artists building intricate floating foam nests among plants, using saliva bubbles arranged in perfect domes. Here's the cool part: they have a labyrinth organ (like bettas)—a specialized air-breathing structure allowing them to gulp atmospheric oxygen at the surface! Watch them swim to the top, tilt sideways, and breathe air directly—they can survive in low-oxygen water where other fish suffocate. Males perform courtship dances: circling females, flaring fins, displaying black breeding colors, leading females to bubble nests. From India/Bangladesh rice paddies and slow streams!",

  taxonomy: {
    scientificName: 'Trichogaster chuna',
    commonName: 'Honey Gourami',
    family: 'Osphronemidae',
    origin: 'India and Bangladesh (rice paddies, slow-moving streams, ponds with dense vegetation)',
    region: 'Asia',
    biotope: 'Slow-moving or stagnant water with dense surface vegetation, floating plants, low oxygen levels, soft acidic water',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 5,
    color: 'Stunning color-changers! Normal coloration: Males: golden-honey yellow body with subtle orange wash, translucent fins. Females: pale silvery-tan to brownish-gray, very subdued colors. Breeding coloration (males): dramatic transformation to intense black body with bright neon yellow dorsal stripe and yellow throat (absolutely stunning!). Sunset variant: intense orange-red year-round. Yellow/Gold variant: bright golden-yellow',
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
    plantingNotes:
      'Honey Gouramis are plant-dependent and thrive in densely planted tanks! They prefer surface areas with floating plants (mandatory for bubble nests and security). Best plants: floating plants (Salvinia, Frogbit, Water Lettuce—essential for bubble nests!), tall stem plants (Vallisneria, Hygrophila, Bacopa—reaching surface), broad-leaved plants (Anubias, Java Fern, Amazon Sword), fine plants (Java Moss, Christmas Moss). Dense planting provides security—they hide when stressed. CRITICAL: Low flow setup (gentle filtration)—strong current destroys bubble nests and stresses fish.',
    hardscape: ['Driftwood (provides hiding spots)', 'Smooth caves', 'Leaf litter (Indian Almond leaves)', 'Minimal—plants are primary focus'],
  },

  behavior: {
    tags: ['peaceful', 'shy', 'bubble_nester', 'labyrinth_fish', 'centerpiece'],
    minGroupSize: 1,
    description:
      'Honey Gouramis are shy, peaceful centerpiece fish perfect for planted community tanks! They\'re timid and slow-moving, preferring to drift through plants gracefully. Watch them explore surface areas constantly, patrolling floating plants and breathing air at the surface (labyrinth organ). Males are bubble nest builders: they construct intricate floating foam nests among plants using saliva bubbles—building for hours, arranging bubbles into perfect domes. Males also perform courtship displays: circling females, flaring fins, displaying black breeding colors, vibrating bodies. CRITICAL: Males can be mildly territorial when breeding (chasing females aggressively)—keep 1 male : 2 females ratio to spread harassment. They\'re peaceful toward other species but slow-moving—easily intimidated by fast/boisterous fish.',
    
    compatibility: {
      goodMates: ['Small peaceful tetras (Neons, Cardinals, Embers)', 'Small rasboras (Harlequins, CPD, Chili)', 'Corydoras (all sizes)', 'Kuhli Loaches', 'Otocinclus', 'Peaceful snails', 'Adult shrimp (Cherry, Amano)'],
      badMates: ['Aggressive fish (cichlids, barbs)', 'Fin-nippers (Tiger Barbs)', 'Bettas (similar niche - territorial)', 'Fast boisterous fish', 'Large predatory fish', 'Very active fish'],
      notes:
        'Honey Gouramis are excellent for peaceful planted community tanks with calm species. They\'re 100% peaceful toward other species but slow-moving and easily intimidated. Best with small, peaceful fish (tetras, rasboras, corydoras). Avoid fast/aggressive species. CRITICAL: Keep 1 male : 2 females if keeping pairs (males harass single females relentlessly during breeding). Can keep single males safely. Shrimp: adults safe (ignored), but shrimplets eaten opportunistically. They\'re bubble nesters like bettas—don\'t mix with bettas (territorial conflicts).',
      
      rules: [
        {
          type: 'requires',
          condition: 'floating plants mandatory',
          reason: 'Honey Gouramis need floating plants for bubble nest building (males) and surface security (both sexes). Without floating plants, males can\'t build nests (stress) and both sexes feel exposed. This is essential',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'low flow filtration (gentle current)',
          reason: 'CRITICAL: Strong current destroys bubble nests and stresses Honey Gouramis (they\'re from stagnant water). Use sponge filters or adjust output to minimal flow. Strong flow = chronic stress',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'single females with males',
          reason: 'Males harass single females relentlessly during breeding (chasing for hours/days). This causes severe stress and can kill females. Keep 1 male : 2+ females ratio or keep males solo',
          severity: 'high',
        },
        {
          type: 'warning',
          condition: 'densely planted tank with hiding spots',
          reason: 'Honey Gouramis are shy. Without dense plants, they hide constantly behind equipment. Dense planting = confident, visible fish with natural behavior',
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
      'Floating plants mandatory (bubble nests)', 
      'Low flow filtration (gentle current)', 
      'Densely planted tank', 
      '1 male : 2 females ratio if keeping pairs', 
      'Peaceful tankmates only',
    ],

    proTips: [
      "RATIO IS CRITICAL! If keeping pairs, use 1 male : 2+ females. Males harass single females relentlessly during breeding (chasing for hours/days)—this causes severe stress and can kill females. Multiple females spread harassment. OR keep single males safely (they build bubble nests even without females).",
      "Watch the color transformation! Breeding males change from golden-honey to intense black with neon yellow stripes—absolutely stunning! This is normal and healthy (not disease). Happens when males build bubble nests. Colors return to normal after breeding.",
      "Labyrinth organ = air breather! Honey Gouramis breathe atmospheric oxygen at surface (like bettas). Watch them tilt sideways and gulp air—normal behavior. This allows them to survive low-oxygen water. Ensure surface access always available.",
      "Low flow is mandatory! They're from stagnant rice paddies and slow streams. Strong current destroys bubble nests and causes chronic stress. Use sponge filters or baffle HOB output to gentle flow. This is non-negotiable.",
      "Floating plants = bubble nest success! Males build intricate foam nests among floating plant roots (Salvinia, Frogbit, Water Lettuce). Without floating plants, males can't build nests (stress). Beautiful to watch—they arrange bubbles for hours!",
      "Feed varied diet! Micro-pellets, crushed flakes, baby brine shrimp, daphnia, bloodworms, mosquito larvae. Live/frozen foods enhance colors dramatically (especially breeding colors). Feed 1-2x daily, small portions.",
      "Most peaceful gourami! Unlike Dwarf/Pearl Gouramis, Honeys are timid and gentle. Perfect for peaceful community tanks. Never aggressive toward other species.",
    ],

    commonMistakes: [
      "Strong filtration flow. #1 mistake! Strong current destroys bubble nests and stresses fish chronically. Honey Gouramis are from stagnant water. Use sponge filters or minimal flow. Strong flow = stressed, unhappy fish.",
      "Single female with male. Males harass single females relentlessly during breeding (constant chasing). This causes severe stress and kills females. Keep 1M:2F ratio or single males only. Don't buy pairs without extra females.",
      "No floating plants. Males need floating plants for bubble nest building (biological imperative). Without them, males show stress. Both sexes need floating cover for security. This is essential.",
      "Aggressive/fast tankmates. Honey Gouramis are timid and slow. Fast fish (barbs, danios) intimidate them constantly. Aggressive fish (cichlids) stress them. Keep with peaceful, calm species only.",
      "Sparse planting. Honeys are plant-dependent. Without dense plants, they hide behind equipment constantly. Heavily planted tanks = confident, visible fish.",
      "Mixing with bettas. Both are labyrinth fish (bubble nesters) with similar niches. They show territorial aggression toward each other. Keep separate.",
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
      notes: 'Weekly 25-30% water changes. Honey Gouramis prefer soft acidic stable water. Keep nitrates below 10ppm. CRITICAL: Low flow filtration (sponge filters ideal)—strong current destroys bubble nests. Add floating plants (mandatory). Mature planted tanks with biofilm ideal.',
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
    commonDiseases: ['ich', 'velvet', 'fin-rot', 'dropsy', 'bacterial-infections'],
    sensitivities: ['Strong current (chronic stress)', 'Cold water (under 22°C)', 'Parameter swings', 'Bright lighting', 'Aggressive tankmates'],
  },

  scientificContext: {
    wildHabitat:
      'Honey Gouramis inhabit slow-moving or stagnant water in India and Bangladesh. Wild habitat: rice paddies, ponds, ditches, slow streams with dense surface vegetation, floating plants, minimal flow, low oxygen levels (labyrinth organ adaptation), soft acidic water (pH 6.0-7.0), warm temperatures (24-28°C). They occupy surface zones, breathing air constantly and building bubble nests among floating plants. Feed on insects, larvae, zooplankton at surface.',
    sexualDimorphism:
      'Distinct in adults. Males: Slimmer, more elongated bodies. Golden-honey yellow coloration (normal) or intense black with neon yellow stripes (breeding). Pointed dorsal/anal fins. Build bubble nests. Females: Rounder, fuller bodies especially when gravid. Pale silvery-tan to brownish-gray coloration (very subdued). Rounded fins. Never show breeding colors. Easy to distinguish in mature fish (4+ months old) by coloration and body shape.',
    variants: ['Standard Honey (golden-honey)', 'Sunset/Red Honey (intense orange-red year-round)', 'Gold/Yellow Honey (bright golden-yellow)'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger:
      'Honey Gouramis breed readily in proper conditions! Trigger breeding: 1) Mature pair (6+ months old) with 1 male : 2 females, 2) Floating plants (Salvinia, Frogbit—mandatory for bubble nest!), 3) Excellent conditioning with live/frozen foods (baby brine shrimp, daphnia, bloodworms, mosquito larvae) for 2 weeks until females plump, 4) Soft acidic water (GH 4-10, pH 6.0-6.8, temp 26-28°C), 5) Low flow (sponge filter only), 6) Shallow water (20-25cm—easier for fry to reach surface). Males build intricate foam nests among floating plants. Males turn intense black with yellow stripes (breeding colors).',
    fryCare:
      'Bubble nest spawning: Male builds foam nest among floating plants (takes 1-3 days). When ready, male performs courtship dance (circling female, flaring fins, displaying black colors). Female approaches nest. Pair embraces under nest—male wraps body around female, squeezing eggs out (30-40 eggs per embrace). Male fertilizes eggs and collects them in mouth, spitting into bubble nest. Multiple embraces (100-300 total eggs). CRITICAL: Remove female immediately after spawning (male becomes aggressive protecting nest). Male guards nest, repairs bubbles, adds eggs. Eggs hatch in 24-36 hours at 27°C. Fry hang in nest for 2-3 days absorbing yolk. Remove male when fry free-swimming (day 3-4)—he may eat fry. Fry need infusoria or liquid fry food for 5-7 days, then baby brine shrimp. Growth: 1cm at 4 weeks, 2cm at 8 weeks, mature at 5 months.',
    notes:
      'Honey Gouramis breed readily in proper conditions. Main requirements: 1) Floating plants for bubble nest (mandatory), 2) Low flow (strong current destroys nest), 3) Remove female after spawning (male aggressive), 4) Remove male when fry free-swimming (may eat fry), 5) Fry need infusoria initially. Breeding is easier than bettas—less aggressive nest guarding. Beautiful to watch: male\'s color transformation and nest-building behavior.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'female-harassment-death', cause: 'single-female-with-male-insufficient-females', frequency: 0.30 },
      { issue: 'chronic-stress-destroyed-nests', cause: 'strong-filtration-flow', frequency: 0.25 },
      { issue: 'hiding-stress', cause: 'no-floating-plants-or-sparse-planting', frequency: 0.20 },
      { issue: 'intimidation-stress', cause: 'aggressive-or-fast-boisterous-tankmates', frequency: 0.15 },
      { issue: 'territorial-conflicts', cause: 'mixed-with-bettas', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 220, currency: 'EUR' },
      monthly: { min: 12, max: 30, currency: 'EUR' },
    },
  },
};
