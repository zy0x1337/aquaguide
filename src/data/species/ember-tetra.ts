import type { Species } from '../../types/species';

export const emberTetra: Species = {
  id: 'ember-tetra',
  slug: 'ember-tetra',
  imageUrl: '/images/species/ember-tetra.jpg',
  funFact: "Ember Tetras are LIVING FIREFLIES—tiny glowing ORANGE SPARKS dancing through planted tanks like floating embers from a campfire! Despite being barely 0.8 inches (2cm), they create STUNNING visual impact in groups of 15-20+, forming loose schools that shimmer through plants like orange clouds. Here's the WILD part: they're CONTINUOUS SPAWNERS—females scatter 30-60 eggs EVERY 2 WEEKS when properly conditioned, but they have ZERO PARENTAL CARE and eat their own eggs within minutes! Males display INTENSE courtship: chasing females through plants, vibrating bodies, and showing NEON ORANGE coloration that GLOWS under dim lighting. Under blackwater conditions (tannin-stained water, dark substrate), their colors intensify to BURNING EMBER orange-red—absolutely mesmerizing! From Brazil's Araguaia River blackwater streams!",

  imageCredit: {
    photographer: 'Klaus Rudloff (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyphessobrycon_amandae_A.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },

  taxonomy: {
    scientificName: 'Hyphessobrycon amandae',
    commonName: 'Ember Tetra',
    family: 'Characidae',
    origin: 'Brazil (Araguaia River basin, Mato Grosso - blackwater tributaries and slow-moving streams)',
    region: 'South America',
    biotope: 'Slow-moving blackwater streams with dense vegetation, leaf litter substrate, tannin-stained tea-colored water, soft acidic conditions',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2,
    color: 'FIERY! Intense orange-red body (like glowing embers) that GLOWS under dim lighting. Males: NEON ORANGE with more intense coloration, translucent fins with orange tint. Females: slightly duller orange-red, rounder bodies. Under blackwater conditions (dark substrate, tannins), colors intensify to BURNING ember orange-red. Bright lighting washes out colors to pale orange',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    gh: { min: 3, max: 12 },
    kh: { min: 1, max: 6 },
    flow: 'low',
    substrate: 'dark-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.3,
  },

  habitat: {
    planting: 'dense',
    plantingNotes:
      'Ember Tetras are PLANT-DEPENDENT and thrive in DENSELY PLANTED tanks! They prefer MID-WATER zones, weaving through stem plants and floating plant roots. FLOATING PLANTS are ESSENTIAL for security and diffusing lighting (they prefer dim conditions). Dark substrate (black sand, dark gravel) creates DRAMATIC CONTRAST—orange bodies GLOW like burning embers against darkness. Best plants: stem plants (Rotala, Ludwigia, Bacopa), fine-leaved plants (Java Moss, Christmas Moss), broader leaves (Anubias, Java Fern, Cryptocoryne), floating plants (Salvinia, Frogbit, Red Root Floaters). Blackwater setup with Indian Almond leaves intensifies colors dramatically. Soft/dim lighting preferred.',
    hardscape: ['Driftwood (creates tannins - ideal)', 'Leaf litter (Indian Almond, oak leaves)', 'Smooth stones', 'Minimal—plants are primary focus'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'nano', 'colorful', 'active'],
    minGroupSize: 10,
    description:
      'Ember Tetras are TINY ORANGE FIREFLIES creating MESMERIZING displays! They form loose schools (shoals, not tight schools) that drift through plants like glowing orange clouds. They\'re highly SOCIAL and thrive in groups of 10-20+—larger groups = bolder fish with INTENSE colors. Watch them explore mid-water zones constantly, weaving through plants in synchronized movements. Males perform COURTSHIP displays: chasing females through vegetation, vibrating bodies, circling displays, showing NEON ORANGE coloration. They\'re PEACEFUL toward all tankmates and focus on grazing microorganisms and hunting tiny foods. They\'re SHY in sparse tanks but CONFIDENT in heavily planted setups with floating cover. Despite tiny size (0.8 inches), they\'re ACTIVE swimmers constantly in motion.',
    
    compatibility: {
      goodMates: ['Other nano fish (CPD, Chili Rasbora, Phoenix Rasbora)', 'Pygmy Corydoras', 'Otocinclus', 'Small peaceful snails', 'Adult shrimp (Cherry, Amano)', 'Kuhli Loaches', 'Small peaceful tetras'],
      badMates: ['ANY fish over 3 inches', 'Bettas (may nip)', 'Angelfish (too large)', 'Larger tetras', 'Aggressive fish', 'Fast/boisterous feeders'],
      notes:
        'Ember Tetras are PERFECT for NANO COMMUNITY TANKS with peaceful species. They\'re SHRIMP-SAFE—mouths too small for adult shrimp (may nibble shrimplets). Best kept with SIMILAR-SIZED, PEACEFUL species. They\'re easily INTIMIDATED and OUTCOMPETED by larger/faster fish. Species-only tanks or peaceful nano communities ideal. Groups of 10-20+ spread social dynamics and create stunning visual impact—orange cloud effect!',
      
      rules: [
        {
          type: 'requires',
          condition: 'groups of 10-20+ fish',
          reason: 'Ember Tetras are highly social and TIMID in small groups. Groups under 10 = stressed, hiding fish with faded colors. Groups of 10-20+ = confident, active schools with INTENSE orange colors. Larger groups create stunning orange cloud displays',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'VERY DENSELY planted tank with floating plants',
          reason: 'Embers are PLANT-DEPENDENT. Without dense planting, they hide constantly and show stress. Dense plants + floating cover = confident, visible fish with intense colors',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'dark substrate (black sand, dark gravel)',
          reason: 'Dark substrate makes orange colors GLOW dramatically like burning embers. Light substrates wash out colors completely. This dramatically affects visual impact',
          severity: 'medium',
        },
        {
          type: 'warning',
          condition: 'dim lighting or floating plants',
          reason: 'Bright lighting washes out orange colors to pale. Dim lighting or floating plants (diffused light) intensifies ember glow to NEON ORANGE',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 0-8,
        midwater: '10-20',
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
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Groups of 10-20+ (social species)', 
      'VERY DENSE planting (plant-dependent)', 
      'Dark substrate (makes colors glow)', 
      'Dim lighting or floating plants', 
      'Soft acidic water (blackwater conditions ideal)',
      'Tiny foods (micro-pellets, crushed flakes)',
    ],

    proTips: [
      "GROUP SIZE = COLOR INTENSITY! Small groups (under 10) = stressed, pale, hiding fish. Groups of 10-20+ = CONFIDENT, NEON ORANGE schools creating stunning orange cloud effect. The difference is DRAMATIC. Always buy 10+ if space allows.",
      "DARK SUBSTRATE = EMBER GLOW! Black sand or dark gravel makes orange bodies GLOW dramatically like burning embers. Light substrates (white sand, light gravel) wash out colors to pale orange. Simple change = stunning visual impact.",
      "BLACKWATER CONDITIONS = MAXIMUM INTENSITY! Add Indian Almond leaves, driftwood, or blackwater extract to create tannin-stained 'tea' water. Colors intensify to BURNING ember orange-red—absolutely mesmerizing. This mimics natural habitat.",
      "DIM LIGHTING or FLOATING PLANTS! Bright lighting washes out colors to pale. Dim lighting or dense floating plants (Salvinia, Frogbit) diffuses light and intensifies NEON ORANGE glow. They prefer shaded conditions.",
      "Feed TINY portions 2-3x daily. Embers have MICROSCOPIC mouths and stomachs. Use micro-pellets, finely crushed flakes, baby brine shrimp, daphnia. They can't eat standard flakes—too large!",
      "Watch the COURTSHIP DANCES! Males chase females through plants, vibrating bodies and circling in elaborate displays. They turn NEON ORANGE during spawning. Beautiful behavior in mature groups.",
      "Most shrimp-safe nano fish! Mouths too small for adult shrimp. May nibble shrimplets occasionally but won't decimate colonies. Perfect for planted shrimp tanks.",
    ],

    commonMistakes: [
      "Small groups (under 10) = pale hiding fish. Embers are HIGHLY social and TIMID. Groups under 10 = stressed fish with faded colors hiding constantly. Beginners buy 6 and wonder why colors are dull. Buy 10-20+ minimum!",
      "Light substrate. White sand/gravel washes out orange colors completely. Dark substrate creates DRAMATIC ember glow—orange POPS against darkness. Simple fix = huge visual impact.",
      "Bright lighting. Intense lighting washes out colors to pale orange. Embers prefer DIM conditions or floating plants diffusing light. Dim lighting = NEON ORANGE glow.",
      "Sparse planting. Embers are PLANT-DEPENDENT. Without dense plants, they hide constantly behind equipment. Heavily planted tanks = confident, visible fish with intense colors.",
      "Foods too large. Embers have TINY mouths. Standard flakes are too big. Use micro-pellets, finely crushed flakes, baby brine shrimp. Underfeeding from wrong food size is common.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'crushed-flakes', 'brine-shrimp', 'daphnia'],
      supplements: [ 'spirulina', 'cyclops'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Weekly 30% water changes. Ember Tetras prefer SOFT ACIDIC STABLE water. Keep nitrates below 10ppm—sensitive to poor water quality. Low flow—sponge filters ideal. Add Indian Almond leaves for tannins (intensifies colors). Mature planted tanks with biofilm help significantly.',
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
    lifespanYears: 4,
    commonDiseases: ['ich', 'velvet', 'fin-rot', 'internal-parasites', 'fungal-infections'],
    sensitivities: ['Sudden parameter changes', 'Poor water quality (nitrates)', 'Bright lighting (stress)', 'Sparse planting (chronic stress)', 'Small groups (social stress)'],
  },

  scientificContext: {
    wildHabitat:
      'Ember Tetras inhabit slow-moving blackwater tributaries and streams in Araguaia River basin, Mato Grosso, Brazil. Wild habitat: shallow (20-60cm deep) forest streams with DENSE aquatic vegetation, thick leaf litter substrate (decomposing leaves), tannin-stained tea-colored water, SOFT ACIDIC conditions (GH 2-6, KH 0-2, pH 5.5-6.5), warm temperatures (24-28°C), minimal flow. They occupy mid-water zones among dense plants, feeding on zooplankton, mosquito larvae, and microorganisms. Discovered relatively recently (1987) and entered hobby 1990s.',
    sexualDimorphism:
      'SUBTLE WHEN NOT BREEDING. MALES: More intensely colored with NEON ORANGE bodies especially during spawning. Slimmer, more streamlined bodies. Actively court females with chasing/vibrating displays. FEMALES: Slightly duller orange coloration. ROUNDER, fuller bodies especially when gravid (carrying eggs). Less active during spawning. Juveniles (under 4 months) difficult to sex—wait for maturity and observe spawning behavior or body shape.',
    variants: ['Standard Ember Tetra (wild-type)', 'Some captive-bred lines show slightly enhanced orange coloration'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger:
      'Ember Tetras are CONTINUOUS SPAWNERS—they scatter small batches EVERY 2 WEEKS when properly conditioned! Trigger breeding: 1) Mature group (6+ months old) with 10+ fish, 2) DENSE fine-leaved plants (Java Moss, Christmas Moss, spawning mops), 3) Excellent conditioning with LIVE/FROZEN FOODS (baby brine shrimp, daphnia, microworms, moina) for 2 weeks until females plump, 4) SOFT ACIDIC water (GH 2-6, pH 6.0-6.5, temp 26-28°C), 5) Tannin-stained blackwater (Indian Almond leaves). Males chase females intensely through plants with vibrating body displays.',
    fryCare:
      'Females scatter 30-60 TINY non-adhesive eggs randomly among plants (continuous spawning strategy). CRITICAL: Adults have ZERO PARENTAL CARE and eat eggs WITHIN MINUTES—this is the biggest breeding challenge! Provide EXTREMELY DENSE planting so some eggs fall through and survive OR remove adults immediately after spawning OR collect eggs with turkey baster. Eggs hatch in 24-36 hours at 26°C. Fry are MICROSCOPIC (1mm) and need INFUSORIA or GREEN WATER for 5-7 days before graduating to BABY BRINE SHRIMP nauplii and microworms. Growth is SLOW: 5mm at 4 weeks, 1cm at 8 weeks, mature at 6 months. Fry rearing is CHALLENGING—need microscopic foods ready beforehand.',
    notes:
      'Embers breed readily in proper conditions with continuous spawning (every 2 weeks for months). Main challenge: ZERO PARENTAL CARE—adults eat eggs instantly. Solutions: 1) EXTREMELY dense planting allows 1-5% fry survival naturally (easiest), 2) Separate breeding tank with spawning mops and remove adults immediately (higher survival), 3) Collect eggs daily with turkey baster. For deliberate breeding: separate spawning tank with Java Moss, condition adults heavily with live foods, remove after spawning. Fry need infusoria/green water initially—prepare cultures beforehand.',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'pale-washed-out-colors', cause: 'light-substrate-or-bright-lighting', frequency: 0.35 },
      { issue: 'constant-hiding-stress', cause: 'small-groups-under-10-or-sparse-planting', frequency: 0.25 },
      { issue: 'intimidation-by-tankmates', cause: 'mixed-with-larger-or-faster-fish', frequency: 0.18 },
      { issue: 'starvation', cause: 'food-too-large-or-outcompeted', frequency: 0.12 },
      { issue: 'stress-from-bright-lighting', cause: 'no-floating-plants-or-shade', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 150, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};
