import type { Species } from '../../types/species';

export const zebraDanio: Species = {
  id: 'species-zebra-danio',
  slug: 'danio-rerio',
  imageUrl: '/images/species/danio-rerio.jpg',
  funFact: "Zebra Danios are perpetual motion machines—they never stop moving! Watch them zoom through tanks in synchronized schools like miniature torpedoes, racing against invisible currents. They're so active and hardy they're used in scientific research worldwide (70% genetic similarity to humans!). Here's the wild part: they're dawn spawners triggered by morning light—females scatter 300-500 eggs at sunrise while males chase frantically! They're also temperature-flexible survivors: wild populations endure 43°F winters and 100°F summers (6-38°C range!). Fun fact: Zebra Danios were the first GM fish—GloFish are genetically modified Danios with jellyfish genes creating neon colors. They're indestructible beginner fish but need space and schools—10+ creates stunning synchronized swimming displays!",

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
    biotope: 'Slow to moderate-flowing streams, rice paddies, roadside ditches with mud/sand substrates, moderate vegetation. Cooler water (18-24°C) than most tropicals',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'Striking! Horizontal blue-purple stripes alternating with silver-gold bands from nose to tail (zebra pattern). Males: brighter, more intense blue stripes. Females: duller, more silver. Under good lighting, blue stripes shimmer iridescently. Dark substrates make colors pop dramatically',
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
    plantingNotes:
      'Zebra Danios are surface to mid-water swimmers that need open swimming space! They zoom back and forth constantly and feel cramped in heavily planted tanks. Best setup: plants along back and sides (Vallisneria, Java Fern, Anubias) with open front space for racing. Floating plants (Salvinia, Frogbit) provide shade and reduce stress but don\'t cover entire surface—danios need space! They appreciate moderate current from filters. Dark substrate (black sand, dark gravel) makes zebra stripes pop dramatically.',
    hardscape: ['Smooth river stones', 'Driftwood (provides current breaks)', 'Pebble areas', 'Minimal—focus on open swimming space'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'active', 'surface_dweller'],
    minGroupSize: 8,
    description:
      'Zebra Danios are perpetual motion machines—the most active aquarium fish! They form loose schools and zoom through tanks in synchronized swimming displays, racing back and forth endlessly like tiny torpedoes. Watch them patrol surface zones, darting, chasing, and playing in current from filters. They\'re highly social and need groups of 8-10+ to thrive—larger groups = better schooling behavior and reduced aggression. Small groups (under 6) become aggressive toward each other, with dominant males harassing subordinates constantly. They\'re peaceful toward other species but their constant activity intimidates shy fish. Males establish temporary dominance hierarchies through chasing displays but rarely cause injuries. They\'re bold and fearless, always first to investigate new objects or food. Their energy is contagious—watching them makes tanks feel alive!',
    
    compatibility: {
      goodMates: ['Corydoras', 'Tetras (Cardinals, Rummynose)', 'Barbs', 'Livebearers', 'Loaches', 'Plecos', 'Robust peaceful fish'],
      badMates: ['Slow-moving fish (Bettas, Angelfish - stressed by activity)', 'Shy fish', 'Long-finned fish (may nip occasionally)', 'Very small nano fish'],
      notes:
        'Zebra Danios are excellent community fish but their constant activity can stress slower, shyer species. Best kept with equally active, peaceful tankmates. They\'re safe with shrimp and snails (ignore them completely). Groups of 8-10+ are mandatory—small groups (under 6) develop aggression toward each other. Their boisterous energy makes them poor matches for shy fish (Bettas, Gouramis, Angelfish). Perfect for lively community tanks.',
      
      rules: [
        {
          type: 'requires',
          condition: 'groups of 8-10+ fish',
          reason: 'Zebra Danios are highly social schoolers. Groups under 6 develop aggression toward each other (chasing, fin-nipping). Groups of 8-10+ = peaceful schools with natural behavior. This is non-negotiable',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'long horizontal swimming space (80cm+ tank)',
          reason: 'Danios are extremely active swimmers needing horizontal space for racing. Tall narrow tanks cause stress. 80cm+ length mandatory',
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
      'Long horizontal swimming space (80cm+)', 
      'Moderate to strong water flow', 
      'Cooler water than most tropicals (18-24°C)', 
      'High oxygen levels',
    ],

    proTips: [
      "Group size = peace! Small groups (under 6) = aggressive chasing toward each other. Groups of 8-10+ = peaceful schools with stunning synchronized swimming. Dominant males establish hierarchies but don't cause harm in proper groups.",
      "Cooler water than most tropicals! Danios prefer 18-24°C (64-75°F), cooler than standard tropical temps. They tolerate warmer water (up to 26°C) but thrive and show best colors in cooler conditions. Wild populations survive 6-38°C extremes!",
      "Dark substrate = stunning stripes! Black sand or dark gravel makes blue zebra stripes shimmer and pop. Light substrates wash out colors. Simple change = dramatic visual impact.",
      "They're indestructible beginners' fish! Danios tolerate beginner mistakes (parameter swings, imperfect cycling, occasional overfeeding) better than almost any fish. Perfect for new fishkeepers learning water chemistry.",
      "Space = happy danios! They need long horizontal tanks (80cm+ minimum) for racing. Tall narrow tanks stress them. Give them room and watch synchronized swimming displays!",
      "Watch the dawn spawning ritual! Danios spawn at sunrise triggered by morning light. Males chase females frantically, females scatter hundreds of eggs among plants. It's beautiful chaos!",
      "Feed 2-3x daily in small portions. Danios have high metabolism from constant activity. They burn energy like rockets and need frequent small meals. Quality flakes + occasional live/frozen foods.",
    ],

    commonMistakes: [
      "Small groups (under 6) = aggression nightmare. Danios become aggressive toward each other in small groups. Dominant males constantly chase and harass subordinates. Groups of 8-10+ mandatory for peaceful behavior.",
      "Tanks too small or tall/narrow. Danios need horizontal swimming space (80cm+ length). Tall narrow tanks (30cm cubes) stress them—they can't race properly. Tank shape matters!",
      "Water too warm. Danios prefer cooler water (18-24°C) than most tropicals. Keeping them at 28°C+ stresses them and shortens lifespan. They're not standard tropical fish.",
      "Mixed with slow shy fish. Danio constant activity stresses Bettas, Angelfish, Gouramis. Danios zoom everywhere and intimidate slow-movers. Keep with equally active species.",
      "Poor oxygenation. High activity = high oxygen needs. Inadequate filtration or surface agitation causes stress and reduced activity. Strong filters with good water movement ideal.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'brine-shrimp', 'bloodworms'],
      supplements: ['daphnia', 'spirulina'],
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
      notes: 'Weekly 30% water changes. Danios are hardy but appreciate clean water. Keep nitrates below 20ppm. Moderate to strong flow preferred (mimics streams). High activity = high waste production. Good filtration mandatory. Cooler water (18-24°C) preferred.',
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
      'Zebra Danios inhabit slow to moderate-flowing streams, rice paddies, roadside ditches, and seasonal pools across India, Bangladesh, Nepal, Pakistan (Ganges and Brahmaputra river basins). Wild habitat: shallow water (10-50cm deep) with mud or sand substrates, moderate vegetation, cooler temperatures (18-24°C) than most tropicals. Water is neutral to slightly alkaline (pH 6.5-7.5), moderate hardness (GH 5-15). They tolerate extreme temperature fluctuations: 6°C winters to 38°C summers! They occupy surface to mid-water zones, feeding on insects, larvae, zooplankton, and algae.',
    sexualDimorphism:
      'Easy to sex! Males: Slimmer, more streamlined bodies with brighter, more intense blue zebra stripes. Gold bands between stripes more vivid. Actively chase females during spawning. Females: Rounder, fuller bodies especially when gravid (carrying eggs). Duller coloration with more silver than blue. Noticeably plumper belly. Easy to distinguish in mature groups.',
    variants: ['Standard Zebra Danio (wild-type)', 'Longfin Zebra Danio (extended flowing fins)', 'Leopard Danio (spotted pattern)', 'GloFish Danios (genetically modified - neon colors)', 'Golden Zebra Danio', 'Albino Zebra Danio'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger:
      'Zebra Danios are prolific breeders—among the easiest egg-layers for beginners! They\'re dawn spawners triggered by morning light. Trigger spawning: 1) Mature group (6+ months old) with plump females (visible eggs), 2) Separate breeding tank (40L+) with 2-3cm marbles or spawning mops on bottom (protects eggs from parents), 3) Excellent conditioning with live foods (brine shrimp, daphnia, bloodworms) for 1-2 weeks, 4) Slightly warmer temp (24-26°C), 5) Morning light trigger (uncover tank at dawn). Males chase females frantically through tank. Spawning lasts 1-2 hours.',
    fryCare:
      'Females scatter 300-500 adhesive eggs among plants or marbles at dawn. Eggs fall through marbles to bottom where parents can\'t eat them (critical!). Remove parents immediately after spawning—they eat eggs/fry voraciously. Eggs hatch in 48-72 hours at 24°C. Fry are tiny (3mm) and hang vertically on tank walls for 2-3 days absorbing yolk sacs. Once free-swimming (day 5), feed infusoria or liquid fry food for 5-7 days, then graduate to baby brine shrimp nauplii and micro-worms. Growth is moderate: 1cm at 4 weeks, 2cm at 8 weeks, mature at 3 months. Fry care is easy—among the easiest egg-layers to breed.',
    notes:
      'Danios breed constantly in community tanks but eggs are eaten immediately. For deliberate breeding: marble-bottom breeding tank, condition adults heavily, introduce at night, expose to morning light, remove after spawning. Spawning is exciting to watch—males chase females frantically through tank at dawn in beautiful chaos. Fry rearing is straightforward. Perfect breeding project for beginners!',
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
