import type { Species } from '../../types/species';

export const zebraDanio: Species = {
  id: 'species-zebra-danio',
  slug: 'danio-rerio',
  imageUrl: '/images/species/danio-rerio.jpg',
  funFact: "Zebra Danios are PERPETUAL MOTION MACHINES—they NEVER STOP MOVING! Watch them zoom through tanks in synchronized schools like miniature torpedoes, racing against invisible currents. They're so ACTIVE and HARDY they're used in scientific research worldwide (70% genetic similarity to humans!). Here's the WILD part: they're DAWN SPAWNERS triggered by morning light—females scatter 300-500 eggs at sunrise while males chase frantically! They're also TEMPERATURE-FLEXIBLE survivors: wild populations endure 43°F winters and 100°F summers (6-38°C range!). Fun fact: Zebra Danios were the FIRST GM fish—GloFish are genetically modified Danios with jellyfish genes creating neon colors. They're indestructible beginner fish but need SPACE and SCHOOLS—10+ creates stunning synchronized swimming displays!",

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
    origin: 'India, Bangladesh, Nepal, Pakistan (Ganges, Brahmaputra river basins - slow-moving streams, rice paddies, ditches)',
    region: 'Asia',
    biotope: 'Slow to moderate-flowing streams, rice paddies, roadside ditches with mud/sand substrates, moderate vegetation. COOLER water (18-24°C) than most tropicals',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'STRIKING! Horizontal blue-purple stripes alternating with silver-gold bands from nose to tail (zebra pattern). Males: brighter, more intense blue stripes. Females: duller, more silver. Under good lighting, blue stripes SHIMMER iridescently. Dark substrates make colors POP dramatically',
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
      primary: 'top',
      secondary: 'middle',
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
    planting: 'moderate',
    plantingNotes:
      'Zebra Danios are SURFACE to MID-WATER swimmers that need OPEN SWIMMING SPACE! They zoom back and forth constantly and feel cramped in heavily planted tanks. Best setup: plants along BACK and SIDES (Vallisneria, Java Fern, Anubias) with OPEN FRONT SPACE for racing. Floating plants (Salvinia, Frogbit) provide shade and reduce stress but don\'t cover entire surface—danios need space! They appreciate moderate current from filters. Dark substrate (black sand, dark gravel) makes zebra stripes POP dramatically.',
    hardscape: ['Smooth river stones', 'Driftwood (provides current breaks)', 'Pebble areas', 'Minimal—focus on open swimming space'],
  },

  behavior: {
    tags: ['peaceful', 'shoaling', 'active', 'surface_dweller', 'hardy', 'fast_swimmer'],
    minGroupSize: 8,
    description:
      'Zebra Danios are PERPETUAL MOTION MACHINES—the most ACTIVE aquarium fish! They form loose schools and ZOOM through tanks in synchronized swimming displays, racing back and forth endlessly like tiny torpedoes. Watch them patrol surface zones, darting, chasing, and playing in current from filters. They\'re highly SOCIAL and need groups of 8-10+ to thrive—larger groups = better schooling behavior and reduced aggression. Small groups (under 6) become AGGRESSIVE toward each other, with dominant males harassing subordinates constantly. They\'re PEACEFUL toward other species but their CONSTANT ACTIVITY intimidates shy fish. Males establish temporary dominance hierarchies through chasing displays but rarely cause injuries. They\'re BOLD and fearless, always first to investigate new objects or food. Their energy is CONTAGIOUS—watching them makes tanks feel alive!',
    
    compatibility: {
      goodMates: ['Corydoras', 'Tetras (Cardinals, Rummynose)', 'Barbs', 'Livebearers', 'Loaches', 'Plecos', 'Robust peaceful fish'],
      badMates: ['Slow-moving fish (Bettas, Angelfish - stressed by activity)', 'Shy fish', 'Long-finned fish (may nip occasionally)', 'Very small nano fish'],
      notes:
        'Zebra Danios are EXCELLENT community fish but their CONSTANT ACTIVITY can stress slower, shyer species. Best kept with equally ACTIVE, PEACEFUL tankmates. They\'re safe with shrimp and snails (ignore them completely). Groups of 8-10+ are MANDATORY—small groups (under 6) develop aggression toward each other. Their boisterous energy makes them poor matches for shy fish (Bettas, Gouramis, Angelfish). Perfect for lively community tanks.',
      
      rules: [
        {
          type: 'requires',
          condition: 'groups of 8-10+ fish',
          reason: 'Zebra Danios are highly social schoolers. Groups under 6 develop AGGRESSION toward each other (chasing, fin-nipping). Groups of 8-10+ = peaceful schools with natural behavior. This is NON-NEGOTIABLE',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'long horizontal swimming space (80cm+ tank)',
          reason: 'Danios are EXTREMELY ACTIVE swimmers needing horizontal space for racing. Tall narrow tanks cause stress. 80cm+ length mandatory',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'slow shy fish (Bettas, Angelfish, Gouramis)',
          reason: 'Danio constant activity stresses slow-moving fish. Danios zoom constantly and outcompete at feeding. Keep with equally active species',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'long-finned fish',
          reason: 'Danios occasionally nip long flowing fins (rare but possible). Avoid mixing with fancy Bettas or long-fin Angelfish',
          severity: 'low',
        },
      ],
      
      idealTankmates: {
        surface: '8-15',
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
      level: 'very-high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'group',
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
      'Long horizontal swimming space (80cm+)', 
      'Moderate to strong water flow', 
      'COOLER water than most tropicals (18-24°C)', 
      'High oxygen levels',
    ],

    proTips: [
      "GROUP SIZE = PEACE! Small groups (under 6) = aggressive chasing toward each other. Groups of 8-10+ = peaceful schools with stunning synchronized swimming. Dominant males establish hierarchies but don't cause harm in proper groups.",
      "COOLER WATER than most tropicals! Danios prefer 18-24°C (64-75°F), COOLER than standard tropical temps. They tolerate warmer water (up to 26°C) but thrive and show best colors in cooler conditions. Wild populations survive 6-38°C extremes!",
      "Dark substrate = STUNNING stripes! Black sand or dark gravel makes blue zebra stripes SHIMMER and POP. Light substrates wash out colors. Simple change = dramatic visual impact.",
      "They're INDESTRUCTIBLE beginners' fish! Danios tolerate beginner mistakes (parameter swings, imperfect cycling, occasional overfeeding) better than almost any fish. Perfect for new fishkeepers learning water chemistry.",
      "SPACE = HAPPY DANIOS! They need LONG horizontal tanks (80cm+ minimum) for racing. Tall narrow tanks stress them. Give them room and watch synchronized swimming displays!",
      "Watch the DAWN SPAWNING ritual! Danios spawn at sunrise triggered by morning light. Males chase females frantically, females scatter hundreds of eggs among plants. It's beautiful chaos!",
      "Feed 2-3x daily in small portions. Danios have HIGH METABOLISM from constant activity. They burn energy like rockets and need frequent small meals. Quality flakes + occasional live/frozen foods.",
    ],

    commonMistakes: [
      "Small groups (under 6) = aggression nightmare. Danios become AGGRESSIVE toward each other in small groups. Dominant males constantly chase and harass subordinates. Groups of 8-10+ mandatory for peaceful behavior.",
      "Tanks too small or tall/narrow. Danios need HORIZONTAL swimming space (80cm+ length). Tall narrow tanks (30cm cubes) stress them—they can't race properly. Tank shape matters!",
      "Water too warm. Danios prefer COOLER water (18-24°C) than most tropicals. Keeping them at 28°C+ stresses them and shortens lifespan. They're NOT standard tropical fish.",
      "Mixed with slow shy fish. Danio constant activity STRESSES Bettas, Angelfish, Gouramis. Danios zoom everywhere and intimidate slow-movers. Keep with equally active species.",
      "Poor oxygenation. High activity = high oxygen needs. Inadequate filtration or surface agitation causes stress and reduced activity. Strong filters with good water movement ideal.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'brine-shrimp', 'bloodworms'],
      supplements: ['daphnia', 'mosquito-larvae', 'spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'weekly',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Weekly 30% water changes. Danios are HARDY but appreciate clean water. Keep nitrates below 20ppm. Moderate to strong flow preferred (mimics streams). High activity = high waste production. Good filtration mandatory. Cooler water (18-24°C) preferred.',
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
    sensitivities: ['Warm water (over 26°C - stress)', 'Poor oxygenation', 'Ammonia/nitrite spikes', 'Small group aggression (injuries)'],
  },

  scientificContext: {
    wildHabitat:
      'Zebra Danios inhabit slow to moderate-flowing streams, rice paddies, roadside ditches, and seasonal pools across India, Bangladesh, Nepal, Pakistan (Ganges and Brahmaputra river basins). Wild habitat: shallow water (10-50cm deep) with mud or sand substrates, moderate vegetation, COOLER temperatures (18-24°C) than most tropicals. Water is neutral to slightly alkaline (pH 6.5-7.5), moderate hardness (GH 5-15). They tolerate EXTREME temperature fluctuations: 6°C winters to 38°C summers! They occupy surface to mid-water zones, feeding on insects, larvae, zooplankton, and algae.',
    sexualDimorphism:
      'EASY TO SEX! MALES: Slimmer, more streamlined bodies with BRIGHTER, more intense blue zebra stripes. Gold bands between stripes more vivid. Actively chase females during spawning. FEMALES: Rounder, fuller bodies especially when gravid (carrying eggs). DULLER coloration with more silver than blue. Noticeably plumper belly. Easy to distinguish in mature groups.',
    variants: ['Standard Zebra Danio (wild-type)', 'Longfin Zebra Danio (extended flowing fins)', 'Leopard Danio (spotted pattern)', 'GloFish Danios (genetically modified - neon colors)', 'Golden Zebra Danio', 'Albino Zebra Danio'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger:
      'Zebra Danios are PROLIFIC breeders—among the easiest egg-layers for beginners! They\'re DAWN SPAWNERS triggered by MORNING LIGHT. Trigger spawning: 1) Mature group (6+ months old) with plump females (visible eggs), 2) Separate breeding tank (40L+) with 2-3cm marbles or spawning mops on bottom (protects eggs from parents), 3) Excellent conditioning with LIVE FOODS (brine shrimp, daphnia, bloodworms) for 1-2 weeks, 4) Slightly warmer temp (24-26°C), 5) Morning light trigger (uncover tank at dawn). Males chase females frantically through tank. Spawning lasts 1-2 hours.',
    fryCare:
      'Females scatter 300-500 adhesive eggs among plants or marbles at DAWN. Eggs fall through marbles to bottom where parents CAN\'T EAT them (critical!). Remove parents IMMEDIATELY after spawning—they eat eggs/fry voraciously. Eggs hatch in 48-72 hours at 24°C. Fry are tiny (3mm) and hang vertically on tank walls for 2-3 days absorbing yolk sacs. Once free-swimming (day 5), feed INFUSORIA or liquid fry food for 5-7 days, then graduate to BABY BRINE SHRIMP nauplii and micro-worms. Growth is MODERATE: 1cm at 4 weeks, 2cm at 8 weeks, mature at 3 months. Fry care is EASY—among the easiest egg-layers to breed.',
    notes:
      'Danios breed CONSTANTLY in community tanks but eggs are eaten immediately. For deliberate breeding: marble-bottom breeding tank, condition adults heavily, introduce at night, expose to morning light, remove after spawning. Spawning is EXCITING to watch—males chase females frantically through tank at dawn in beautiful chaos. Fry rearing is straightforward. Perfect breeding project for beginners!',
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
