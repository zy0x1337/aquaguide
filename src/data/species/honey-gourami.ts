import type { Species } from '../../types/species';

export const honeyGourami: Species = {
  id: 'gourami-001',
  slug: 'honey-gourami',
  imageUrl: '/images/species/honey-gourami.jpg',
  funFact: "Honey Gouramis are PEACEFUL CENTERPIECES with DRAMATIC color changes! Watch males transform from golden-honey to INTENSE BLACK with neon yellow stripes during breeding—it's like watching a fish change costumes! They're BUBBLE NEST ARTISTS building intricate floating foam nests among plants, using saliva bubbles arranged in perfect domes. Here's the COOL part: they have a LABYRINTH ORGAN (like bettas)—a specialized air-breathing structure allowing them to gulp atmospheric oxygen at the surface! Watch them swim to the top, tilt sideways, and BREATHE AIR directly—they can survive in low-oxygen water where other fish suffocate. Males perform COURTSHIP DANCES: circling females, flaring fins, displaying black breeding colors, leading females to bubble nests. From India/Bangladesh rice paddies and slow streams!",

  imageCredit: {
    photographer: 'Hristo Hristov (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Trichogaster_chuna.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },

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
    color: 'STUNNING COLOR-CHANGERS! Normal coloration: Males: golden-honey yellow body with subtle orange wash, translucent fins. Females: pale silvery-tan to brownish-gray, very subdued colors. BREEDING COLORATION (males): DRAMATIC transformation to INTENSE BLACK body with bright NEON YELLOW dorsal stripe and yellow throat (absolutely stunning!). Sunset variant: intense orange-red year-round. Yellow/Gold variant: bright golden-yellow',
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
      'Honey Gouramis are PLANT-DEPENDENT and thrive in DENSELY PLANTED tanks! They prefer SURFACE areas with FLOATING PLANTS (MANDATORY for bubble nests and security). Best plants: floating plants (Salvinia, Frogbit, Water Lettuce—essential for bubble nests!), tall stem plants (Vallisneria, Hygrophila, Bacopa—reaching surface), broad-leaved plants (Anubias, Java Fern, Amazon Sword), fine plants (Java Moss, Christmas Moss). Dense planting provides security—they hide when stressed. CRITICAL: LOW FLOW setup (gentle filtration)—strong current destroys bubble nests and stresses fish.',
    hardscape: ['Driftwood (provides hiding spots)', 'Smooth caves', 'Leaf litter (Indian Almond leaves)', 'Minimal—plants are primary focus'],
  },

  behavior: {
    tags: ['peaceful', 'shy', 'bubble_nester', 'labyrinth_fish', 'centerpiece'],
    minGroupSize: 1,
    description:
      'Honey Gouramis are SHY, PEACEFUL CENTERPIECE fish perfect for planted community tanks! They\'re TIMID and slow-moving, preferring to drift through plants gracefully. Watch them explore SURFACE areas constantly, patrolling floating plants and breathing air at the surface (labyrinth organ). Males are BUBBLE NEST BUILDERS: they construct intricate floating foam nests among plants using saliva bubbles—building for hours, arranging bubbles into perfect domes. Males also perform COURTSHIP DISPLAYS: circling females, flaring fins, displaying BLACK breeding colors, vibrating bodies. CRITICAL: Males can be MILDLY TERRITORIAL when breeding (chasing females aggressively)—keep 1 MALE : 2 FEMALES ratio to spread harassment. They\'re PEACEFUL toward other species but slow-moving—easily intimidated by fast/boisterous fish.',
    
    compatibility: {
      goodMates: ['Small peaceful tetras (Neons, Cardinals, Embers)', 'Small rasboras (Harlequins, CPD, Chili)', 'Corydoras (all sizes)', 'Kuhli Loaches', 'Otocinclus', 'Peaceful snails', 'Adult shrimp (Cherry, Amano)'],
      badMates: ['Aggressive fish (cichlids, barbs)', 'Fin-nippers (Tiger Barbs)', 'Bettas (similar niche - territorial)', 'Fast boisterous fish', 'Large predatory fish', 'Very active fish'],
      notes:
        'Honey Gouramis are EXCELLENT for PEACEFUL PLANTED COMMUNITY TANKS with calm species. They\'re 100% peaceful toward other species but SLOW-MOVING and easily INTIMIDATED. Best with SMALL, PEACEFUL fish (tetras, rasboras, corydoras). Avoid fast/aggressive species. CRITICAL: Keep 1 MALE : 2 FEMALES if keeping pairs (males harass single females relentlessly during breeding). Can keep single males safely. SHRIMP: adults safe (ignored), but shrimplets eaten opportunistically. They\'re BUBBLE NESTERS like bettas—don\'t mix with bettas (territorial conflicts).',
      
      rules: [
        {
          type: 'requires',
          condition: 'FLOATING PLANTS mandatory',
          reason: 'Honey Gouramis NEED floating plants for bubble nest building (males) and surface security (both sexes). Without floating plants, males can\'t build nests (stress) and both sexes feel exposed. This is essential',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'LOW FLOW filtration (gentle current)',
          reason: 'CRITICAL: Strong current destroys bubble nests and stresses Honey Gouramis (they\'re from stagnant water). Use sponge filters or adjust output to minimal flow. Strong flow = chronic stress',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'single females with males',
          reason: 'Males harass single females RELENTLESSLY during breeding (chasing for hours/days). This causes SEVERE STRESS and can kill females. Keep 1 MALE : 2+ FEMALES ratio or keep males solo',
          severity: 'high',
        },
        {
          type: 'warning',
          condition: 'densely planted tank with hiding spots',
          reason: 'Honey Gouramis are SHY. Without dense plants, they hide constantly behind equipment. Dense planting = confident, visible fish with natural behavior',
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
      'FLOATING PLANTS mandatory (bubble nests)', 
      'LOW FLOW filtration (gentle current)', 
      'DENSELY planted tank', 
      '1 MALE : 2 FEMALES ratio if keeping pairs', 
      'Peaceful tankmates only',
    ],

    proTips: [
      "RATIO IS CRITICAL! If keeping pairs, use 1 MALE : 2+ FEMALES. Males harass single females RELENTLESSLY during breeding (chasing for hours/days)—this causes severe stress and can kill females. Multiple females spread harassment. OR keep single males safely (they build bubble nests even without females).",
      "Watch the COLOR TRANSFORMATION! Breeding males change from golden-honey to INTENSE BLACK with neon yellow stripes—absolutely stunning! This is NORMAL and healthy (not disease). Happens when males build bubble nests. Colors return to normal after breeding.",
      "LABYRINTH ORGAN = AIR BREATHER! Honey Gouramis breathe atmospheric oxygen at surface (like bettas). Watch them tilt sideways and gulp air—normal behavior. This allows them to survive low-oxygen water. Ensure surface access always available.",
      "LOW FLOW is MANDATORY! They're from stagnant rice paddies and slow streams. Strong current destroys bubble nests and causes chronic stress. Use sponge filters or baffle HOB output to gentle flow. This is NON-NEGOTIABLE.",
      "FLOATING PLANTS = BUBBLE NEST SUCCESS! Males build intricate foam nests among floating plant roots (Salvinia, Frogbit, Water Lettuce). Without floating plants, males can\'t build nests (stress). Beautiful to watch—they arrange bubbles for hours!",
      "Feed varied diet! Micro-pellets, crushed flakes, baby brine shrimp, daphnia, bloodworms, mosquito larvae. Live/frozen foods enhance colors dramatically (especially breeding colors). Feed 1-2x daily, small portions.",
      "Most peaceful gourami! Unlike Dwarf/Pearl Gouramis, Honeys are TIMID and gentle. Perfect for peaceful community tanks. Never aggressive toward other species.",
    ],

    commonMistakes: [
      "Strong filtration flow. #1 mistake! Strong current DESTROYS bubble nests and stresses fish chronically. Honey Gouramis are from STAGNANT water. Use sponge filters or minimal flow. Strong flow = stressed, unhappy fish.",
      "Single female with male. Males harass single females RELENTLESSLY during breeding (constant chasing). This causes severe stress and kills females. Keep 1M:2F ratio or single males only. Don't buy pairs without extra females.",
      "No floating plants. Males NEED floating plants for bubble nest building (biological imperative). Without them, males show stress. Both sexes need floating cover for security. This is essential.",
      "Aggressive/fast tankmates. Honey Gouramis are TIMID and SLOW. Fast fish (barbs, danios) intimidate them constantly. Aggressive fish (cichlids) stress them. Keep with PEACEFUL, CALM species only.",
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
      notes: 'Weekly 25-30% water changes. Honey Gouramis prefer SOFT ACIDIC STABLE water. Keep nitrates below 10ppm. CRITICAL: LOW FLOW filtration (sponge filters ideal)—strong current destroys bubble nests. Add floating plants (mandatory). Mature planted tanks with biofilm ideal.',
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
      'Honey Gouramis inhabit slow-moving or STAGNANT water in India and Bangladesh. Wild habitat: rice paddies, ponds, ditches, slow streams with DENSE SURFACE VEGETATION, floating plants, MINIMAL FLOW, low oxygen levels (labyrinth organ adaptation), soft acidic water (pH 6.0-7.0), warm temperatures (24-28°C). They occupy SURFACE zones, breathing air constantly and building bubble nests among floating plants. Feed on insects, larvae, zooplankton at surface.',
    sexualDimorphism:
      'DISTINCT IN ADULTS. MALES: Slimmer, more elongated bodies. Golden-honey yellow coloration (normal) or INTENSE BLACK with neon yellow stripes (breeding). Pointed dorsal/anal fins. Build bubble nests. FEMALES: ROUNDER, fuller bodies especially when gravid. Pale silvery-tan to brownish-gray coloration (very subdued). Rounded fins. Never show breeding colors. Easy to distinguish in mature fish (4+ months old) by coloration and body shape.',
    variants: ['Standard Honey (golden-honey)', 'Sunset/Red Honey (intense orange-red year-round)', 'Gold/Yellow Honey (bright golden-yellow)'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger:
      'Honey Gouramis breed READILY in proper conditions! Trigger breeding: 1) Mature pair (6+ months old) with 1 MALE : 2 FEMALES, 2) FLOATING PLANTS (Salvinia, Frogbit—mandatory for bubble nest!), 3) Excellent conditioning with LIVE/FROZEN FOODS (baby brine shrimp, daphnia, bloodworms, mosquito larvae) for 2 weeks until females plump, 4) SOFT ACIDIC water (GH 4-10, pH 6.0-6.8, temp 26-28°C), 5) LOW FLOW (sponge filter only), 6) SHALLOW water (20-25cm—easier for fry to reach surface). Males build intricate foam nests among floating plants. Males turn INTENSE BLACK with yellow stripes (breeding colors).',
    fryCare:
      'BUBBLE NEST SPAWNING: Male builds foam nest among floating plants (takes 1-3 days). When ready, male performs courtship dance (circling female, flaring fins, displaying black colors). Female approaches nest. Pair EMBRACES under nest—male wraps body around female, squeezing eggs out (30-40 eggs per embrace). Male FERTILIZES eggs and collects them in mouth, spitting into bubble nest. Multiple embraces (100-300 total eggs). CRITICAL: Remove FEMALE immediately after spawning (male becomes AGGRESSIVE protecting nest). Male guards nest, repairs bubbles, adds eggs. Eggs hatch in 24-36 hours at 27°C. Fry hang in nest for 2-3 days absorbing yolk. REMOVE MALE when fry free-swimming (day 3-4)—he may eat fry. Fry need INFUSORIA or liquid fry food for 5-7 days, then BABY BRINE SHRIMP. Growth: 1cm at 4 weeks, 2cm at 8 weeks, mature at 5 months.',
    notes:
      'Honey Gouramis breed readily in proper conditions. Main requirements: 1) FLOATING PLANTS for bubble nest (mandatory), 2) LOW FLOW (strong current destroys nest), 3) Remove female after spawning (male aggressive), 4) Remove male when fry free-swimming (may eat fry), 5) Fry need infusoria initially. Breeding is EASIER than bettas—less aggressive nest guarding. Beautiful to watch: male\'s color transformation and nest-building behavior.',
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
