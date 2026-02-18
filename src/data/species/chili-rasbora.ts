import type { Species } from '../../types/species';

export const chiliRasbora: Species = {
  id: 'rasbora-002',
  slug: 'chili-rasbora',
  imageUrl: '/images/species/chili-rasbora.jpg',
  funFact: "Chili Rasboras are LIVING EMBERS—tiny red sparks dancing through planted tanks like fireflies! At barely 0.8 inches (2cm), they're among the SMALLEST aquarium fish in the world, yet they GLOW like hot coals under proper lighting. Despite their TINY size, they have HUGE personalities and perform mesmerizing schooling displays when kept in large groups (12-20+). Watch males chase females in elaborate courtship dances, vibrating their bodies and circling through plants! Here's the WILD part: they're CONTINUOUS SPAWNERS—females scatter 2-5 adhesive eggs DAILY for weeks when conditioned, sticking them to leaf undersides like tiny jewels. Males establish temporary territories and intensify to NEON RED during spawning. Fun fact: discovered 1978 in Borneo, but didn't reach hobby until early 2000s. Now they're nano tank ROYALTY!",

  taxonomy: {
    scientificName: 'Boraras brigittae',
    commonName: 'Chili Rasbora',
    family: 'Cyprinidae',
    origin: 'Indonesia (Borneo - southwestern regions, peat swamp forests)',
    region: 'Asia',
    biotope: 'Blackwater peat swamp streams and forest pools with dense vegetation, leaf litter substrate, tannin-stained water, very soft acidic conditions',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2,
    color: 'FIERY! Intense red-orange body (like glowing embers) with dark black horizontal stripe running from nose to tail base. Males: NEON RED with more intense coloration especially during spawning. Females: slightly duller orange-red, rounder bodies. Small dark spots at anal/tail fin bases. Under good lighting and dark substrate, they GLOW like burning coals',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 30,
    tempC: { min: 23, max: 28, ideal: 26 },
    ph: { min: 4.0, max: 7.0, ideal: 6.0 },
    gh: { min: 1, max: 6 },
    kh: { min: 0, max: 4 },
    flow: 'low',
    substrate: 'dark-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 25,
      territories: 0.3,
    },
    
    bioloadMultiplier: 0.2,
  },

  habitat: {
    planting: 'dense',
    plantingNotes:
      'Chili Rasboras are PLANT-DEPENDENT and DISAPPEAR in sparse tanks! They NEED DENSE planting to feel secure—without it, they hide constantly behind equipment and filters. The more plants, the MORE VISIBLE and confident they become (counterintuitive!). They prefer MID-WATER zones, weaving through stems and floating plant roots. FLOATING PLANTS are ESSENTIAL for security. Dark substrate (black sand) creates DRAMATIC CONTRAST—their red bodies GLOW like embers against darkness. Best plants: fine-leaved species for spawning (Java Moss, Christmas Moss, Najas grass), broader leaves for shelter (Anubias, Java Fern, Cryptocoryne), stem plants (Rotala, Ludwigia), floating plants (Salvinia, Frogbit, Red Root Floaters). Soft/dim lighting preferred.',
    hardscape: ['Driftwood (creates tannins and shaded zones)', 'Leaf litter (Indian Almond, oak leaves)', 'Smooth stones', 'Minimal—plants are primary hardscape'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'nano', 'shy', 'colorful', 'active'],
    minGroupSize: 12,
    description:
      'Chili Rasboras are TINY LIVING EMBERS that create MESMERIZING schooling displays! They\'re highly SOCIAL and thrive in groups of 12-20+—larger groups = bolder, more confident fish with INTENSE colors. Watch them form loose aggregations, darting through plants in synchronized movements like miniature red comets! Males perform ELABORATE courtship: chasing females through vegetation, vibrating bodies, circling displays, and showing NEON RED coloration. They\'re SHY without dense plants—in sparse tanks, they hide constantly. With proper planting, they become ACTIVE and endlessly entertaining. Despite tiny size (0.8 inches), they\'re ACTIVE swimmers constantly exploring mid-water. They\'re PEACEFUL toward all tankmates and focus on grazing microorganisms and hunting tiny live foods.',
    
    compatibility: {
      goodMates: ['Other nano rasboras (CPD, Phoenix Rasbora)', 'Ember Tetras', 'Pygmy Corydoras', 'Otocinclus', 'Small peaceful snails', 'Adult shrimp (Cherry, Amano)', 'Kuhli Loaches'],
      badMates: ['ANY fish over 2 inches (will eat Chilis)', 'Aggressive fish', 'Fast/boisterous feeders', 'Angelfish', 'Bettas', 'Larger tetras', 'Most cichlids'],
      notes:
        'Chili Rasboras are PERFECT for NANO TANKS and peaceful nano communities. They\'re among the MOST SHRIMP-SAFE fish—mouths too small to eat adult shrimp (may nibble shrimplets). Best kept with SIMILAR-SIZED, SLOW-MOVING species. They\'re easily INTIMIDATED and OUTCOMPETED by larger/faster fish. Species-only tanks or peaceful nano communities ideal. Groups of 12-20+ spread social dynamics and create confidence. They\'re PREY for larger fish—only mix with gentle nano species.',
      
      rules: [
        {
          type: 'requires',
          condition: 'groups of 12-20+ fish',
          reason: 'Chili Rasboras are highly social and TIMID in small groups. Groups under 12 = stressed, hiding fish with faded colors. Groups of 12-20+ = confident, active, intensely colored schools. Larger groups create natural schooling behavior',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'VERY DENSELY planted tank with floating plants',
          reason: 'Chilis are PLANT-DEPENDENT. Without dense planting, they hide constantly behind equipment and show chronic stress. Dense plants = confident, visible fish. Floating plants essential for security',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'any fish over 2 inches',
          reason: 'Chili Rasboras are TINY (0.8 inches) and are PREY for most fish. Keep ONLY with similar-sized peaceful nano species. Larger fish will eat them',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'soft acidic water (GH 1-6, pH 4.5-7.0)',
          reason: 'Chilis are peat swamp specialists requiring SOFT water. Hard water (GH 10+) causes stress, faded colors, shortened lifespan. Use RO water or softening if tap water hard',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0-8,
        midwater: '12-20',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
      interspecific: 0,
      territorial: 1,
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
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Groups of 12-20+ (social species)', 
      'VERY DENSE planting (plant-dependent)', 
       'SOFT ACIDIC water (GH 1-6, pH 4.5-7.0)', 
      'Dark substrate (makes colors pop)', 
      'Very low flow (mimics peat swamps)',
      'Frequent small feedings (tiny stomachs)',
    ],

    proTips: [
      "GROUP SIZE = VISIBILITY! Small groups (under 12) = stressed, INVISIBLE fish hiding constantly. Groups of 12-20+ = CONFIDENT, ACTIVE schools glowing through tanks. The difference is DRAMATIC. Always buy 12+ if space allows.",
      "DENSE PLANTING = CONFIDENT FISH (counterintuitive!). Beginners think sparse tanks = visible fish. WRONG! Chilis hide in sparse tanks. HEAVY planting = secure, bold fish that venture out. More plants = more visible Chilis!",
      "Dark substrate = EMBER EFFECT! Black sand or dark gravel makes red bodies GLOW dramatically like burning coals. Light substrates wash out colors completely. Simple change = stunning visual impact.",
      "SOFT WATER MANDATORY! Chilis are peat swamp specialists needing GH 1-6. Hard tap water (GH 10+) causes stress, faded colors, shortened lifespan. Use RO water or Indian Almond leaves to soften. Tannin-stained 'tea' water ideal.",
      "Feed TINY portions 2-3x daily. Chilis have MICROSCOPIC stomachs (grain of rice size). They can't gorge once daily—need frequent small meals. Feed micro-pellets, crushed flakes, baby brine shrimp, daphnia. Quality food = intense colors.",
      "Watch the COURTSHIP DANCES! Males chase females through plants, vibrating bodies and circling in elaborate displays. They turn NEON RED during spawning. Beautiful behavior in mature groups.",
      "Most shrimp-safe fish! Mouths too small for adult shrimp. May nibble shrimplets occasionally but won't decimate colonies. Perfect for planted shrimp tanks.",
    ],

    commonMistakes: [
      "Small groups (under 12) = invisible fish. Chilis are HIGHLY social and TIMID. Groups under 12 = stressed fish hiding constantly with faded colors. Beginners buy 6 and never see them. Buy 12-20+ minimum!",
      "Sparse planting = chronic hiding. Chilis are PLANT-DEPENDENT. Without dense plants, they hide behind filters and equipment constantly. Heavily planted tanks = confident, visible fish. This is NON-NEGOTIABLE.",
      "Hard water. Chilis need SOFT ACIDIC water (GH 1-6, pH 4.5-7.0). Hard tap water (GH 10+, pH 8.0) stresses them, fades colors, shortens lifespan. Use RO water or rain water if tap is hard.",
      "Mixed with larger fish. Chilis are TINY (0.8 inches) and are PREY. Angelfish, Bettas, larger tetras, most cichlids will EAT them. Keep ONLY with peaceful nano species under 2 inches.",
      "Light substrate. White sand/gravel washes out red colors completely. Dark substrate creates DRAMATIC contrast—reds GLOW like embers. Simple fix = huge visual impact.",
      "Strong flow. Chilis come from still peat swamps and can't handle current. Strong filters exhaust them. Use sponge filters or baffle outputs to create gentle flow.",
    ],
    
    feeding: {
      frequency: 'three-times-daily',
      primaryFoods: ['micro-pellets', 'crushed-flakes', 'brine-shrimp', 'daphnia'],
      supplements: ['spirulina', 'cyclops'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 20,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Weekly 20-30% water changes. Chilis prefer SOFT ACIDIC STABLE water. Keep nitrates below 10ppm—very sensitive to poor water quality. Use RO water or rain water if tap is hard. Indian Almond leaves add tannins and soften water (ideal). Very low flow—sponge filters best. Mature planted tanks with biofilm help significantly.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
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
    commonDiseases: ['ich', 'velvet', 'internal-parasites', 'starvation', 'stress-fading'],
    sensitivities: ['Hard water (chronic stress)', 'Poor water quality (nitrates)', 'Strong flow (exhaustion)', 'Sparse planting (chronic stress)', 'Small groups (social stress)', 'Underfeeding (tiny stomachs)'],
  },

  scientificContext: {
    wildHabitat:
      'Chili Rasboras inhabit blackwater peat swamp forests in southwestern Borneo, Indonesia. Wild habitat: shallow (10-40cm deep) forest streams and pools with DENSE aquatic vegetation, thick leaf litter substrate (decomposing leaves), tannin-stained tea-colored water, VERY SOFT ACIDIC conditions (GH 0-3, KH 0-1, pH 4.0-6.0), warm temperatures (24-28°C), virtually NO flow (still water). They occupy mid-water zones among dense plants, feeding on zooplankton, mosquito larvae, and microorganisms. Discovered 1978; entered hobby early 2000s.',
    sexualDimorphism:
      'SUBTLE WHEN NOT BREEDING. MALES: More intensely colored with brighter red-orange bodies especially during spawning (NEON RED). Slimmer, more streamlined bodies. Actively court females with chasing/circling. FEMALES: Slightly duller orange-red coloration. ROUNDER, fuller bodies especially when gravid (carrying eggs). Less active during spawning. Juveniles (under 4 months) difficult to sex—wait for maturity and observe spawning behavior.',
    variants: ['Standard Chili Rasbora (wild-type)', 'Some captive-bred lines show slightly enhanced red coloration'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger:
      'Chili Rasboras are CONTINUOUS SPAWNERS—they scatter small batches DAILY for weeks when properly conditioned! Trigger breeding: 1) Mature group (6+ months old) with 12+ fish, 2) DENSE fine-leaved plants (Java Moss, Christmas Moss, Najas grass), 3) Excellent conditioning with LIVE/FROZEN FOODS (baby brine shrimp, daphnia, microworms, moina) for 2-3 weeks until females plump, 4) SOFT ACIDIC water (GH 1-3, pH 5.0-6.5, temp 26-28°C), 5) Tannin-stained water (Indian Almond leaves). Males establish temporary territories and intensify to NEON RED, chasing females into plants with vibrating body displays.',
    fryCare:
      'Females scatter 2-5 TINY adhesive eggs DAILY (continuous spawning strategy), sticking them to undersides of broad leaves and among fine plants. Total output: 10-30 eggs over several days. CRITICAL: Adults EAT eggs constantly—provide DENSE planting so some eggs survive OR collect egg-laden plants daily to separate hatching tank. Eggs hatch in 24-36 hours at 26°C. Fry are MICROSCOPIC (1-2mm) and need INFUSORIA or GREEN WATER for 5-7 days before graduating to BABY BRINE SHRIMP nauplii and microworms. Growth is SLOW: 5mm at 4 weeks, 1cm at 8 weeks, mature at 6 months. Fry rearing is CHALLENGING—need microscopic foods ready.',
    notes:
      'Chilis breed readily in proper conditions with continuous spawning (daily egg scattering for weeks). Main challenges: 1) TINY fry need infusoria/green water initially (prepare cultures beforehand), 2) Adults eat eggs constantly (dense planting helps some survive). For deliberate breeding: separate spawning tank with Java Moss, condition adults heavily, collect eggs daily. Many breeders report natural spawning in species tanks with dense planting where some fry survive to adulthood.',
  },
  
  experienceData: {
    successRate: 0.65,
    survivalRate: 0.60,
    
    commonFailures: [
      { issue: 'constant-hiding-invisible-fish', cause: 'small-groups-under-12-or-sparse-planting', frequency: 0.40 },
      { issue: 'stress-faded-colors-death', cause: 'hard-water-over-GH-8', frequency: 0.25 },
      { issue: 'eaten-by-tankmates', cause: 'mixed-with-larger-fish', frequency: 0.15 },
      { issue: 'starvation', cause: 'underfeeding-or-outcompeted-by-faster-fish', frequency: 0.12 },
      { issue: 'exhaustion-from-flow', cause: 'strong-filter-current', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 70, max: 180, currency: 'EUR' },
      monthly: { min: 12, max: 30, currency: 'EUR' },
    },
  },
};
