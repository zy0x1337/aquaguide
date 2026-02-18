import type { Species } from '../../types/species';

export const rummynoseTetra: Species = {
  id: 'rummy-nose-tetra',
  slug: 'rummy-nose-tetra',
  imageUrl: '/images/species/rummy-nose-tetra.jpg',
  funFact: "Rummynose Tetras are living water quality barometers with their brilliant red noses acting as real-time health indicators! Flaming red nose = perfect water quality and health. Faded/pale nose = instant warning of stress, ammonia spikes, nitrate problems, temperature swings, or parameter shifts - they change color within minutes giving you early warning before disasters! They're the 'canary in the coal mine' for aquariums. Watch them display synchronized schooling - they swim in tight formation like one organism moving in perfect unison (balletic displays!). They're blackwater specialists from Amazon Rio Tapajós needing ultra-soft acidic tannin-stained water (pH 5.5-6.5, GH under 8). Groups 12+ create mesmerizing schools! From Brazilian blackwater streams!",

  imageCredit: {
    photographer: 'Rummy-nose Tetra (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rummy-nose_tetra_(Hemigrammus_rhodostomus).jpg',
    license: 'Public Domain',
    licenseUrl: 'https://en.wikipedia.org/wiki/Public_domain'
  },

  taxonomy: {
    scientificName: 'Petitella rhodostoma / Hemigrammus bleheri',
    commonName: 'Rummy Nose Tetra / Firehead Tetra',
    family: 'Acestrorhynchidae',
    origin: 'South America (Lower Amazon basin - Rio Tapajós, Pará, Brazil - blackwater streams)',
    region: 'South America',
    biotope: 'Blackwater streams and flooded forest (igapós) with ultra-soft acidic tannin-stained water, dense marginal vegetation, leaf litter substrate',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'Stunning tricolor pattern with health-indicating features! Flaming red head (from snout covering entire face/gill plates - the water quality indicator changing color with stress!). Iridescent silver body with subtle blue-green sheen. Distinctive caudal peduncle with THREE BOLD HORIZONTAL BLACK-AND-WHITE STRIPES on tail (zebra-striped tail - species signature!). Clear dorsal/anal fins. CRITICAL: Red nose intensity = health barometer: Brilliant flaming red = perfect conditions/health. 50% faded red = stress/water issues (nitrates over 20ppm). Pale/no red = emergency (ammonia/nitrite/severe stress). This color change happens within minutes making them instant indicators',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 100,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 5.5, max: 7.0, ideal: 6.2 },
    gh: { min: 1, max: 8 },
    kh: { min: 0, max: 4 },
    flow: 'low',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 100,
      verticalCM: 40,
      territories: 0,
    },
    
    bioloadMultiplier: 0.9,
  },

  habitat: {
    planting: 'dense',
    plantingNotes:
      'Rummynose Tetras require very heavy planting replicating Amazonian blackwater streams! They\'re from shaded flooded forests (igapós) with dense marginal vegetation. Best setup: background/side thickets (Amazon Swords, Cryptocoryne wendtii, Vallisneria - creates security zones and sightline breaks), floating plants (Water Sprite, Frogbit, Amazon Frogbit - diffuses lighting, creates "blackwater" shading, reduces jumping), open midwater swimming space (critical for schooling displays!). They need blackwater conditions: Indian almond leaves (Catappa), oak leaf litter, alder cones, or peat filtration creating tannin-stained tea-colored water (mimics wild habitat, lowers pH, releases beneficial compounds). Dimmed lighting essential (they\'re from shaded streams).',
    hardscape: ['Driftwood branches (tannin release - blackwater replication)', 'Fine sand substrate (natural foraging substrate)', 'Leaf litter layer (Indian almond/Catappa leaves, oak leaves - blackwater biotope)', 'Marginal plant roots (mimics igapó flooded forest)', 'No sharp edges'],
  },

  behavior: {
    tags: ['schooler', 'peaceful', 'shy', 'active', 'midwater'],
    minGroupSize: 12,
    description:
      'Rummynose Tetras display mesmerizing tight synchronized schooling - they swim in perfect formation like one organism moving in balletic unison (most stunning schooling behavior of all tetras!). Watch them create "living clouds" moving together through midwater with coordinated turns/movements. They\'re nervous shy fish: easily spooked by sudden movements, quick to scatter then reform school. They\'re living water quality indicators: red nose color fades within minutes of stress/parameter issues giving instant visual warnings! They\'re diurnal active during day, resting at night. Groups under 12 = stressed, constant hiding, faded noses. Groups 12-20+ = confident, tight schooling, brilliant red noses, natural behaviors.',
    
    compatibility: {
      goodMates: ['All peaceful community fish (Neon Tetras, Cardinal Tetras)', 'Corydoras (all peaceful species)', 'Harlequin Rasboras', 'Otocinclus', 'Pygmy Corydoras', 'Honey Gouramis', 'Peaceful dwarf cichlids (Bolivian Rams)', 'All dwarf shrimp (safe with adults but may eat eggs/shrimplets)', 'Snails (peaceful cohabitants)'],
      badMates: ['Fin nippers (Tiger Barbs, Serpae Tetras)', 'Aggressive/territorial fish', 'Large cichlids', 'Goldfish (incompatible temps/parameters)', 'Boisterous fast fish (stress shy tetras)'],
      notes:
        'Rummynose Tetras are ultra-peaceful model community fish perfect for planted blackwater biotopes! They\'re completely non-aggressive never bothering tankmates. CRITICAL: They\'re nervous/shy needing peaceful tankmates only! Boisterous/aggressive fish (barbs, large danios) stress them causing: constant hiding, faded noses, refusal to school, early death. Best in calm planted community tanks with gentle water movement. They\'re safe with adult shrimp but may opportunistically eat shrimp eggs/tiny shrimplets under 5mm (not predatory but opportunistic). Their schooling behavior tightens when feeling threatened - this is natural defensive behavior.',
      
      rules: [
        {
          type: 'requires',
          condition: 'large groups 12+ fish minimum',
          reason: 'Rummynose are tight schooling fish needing groups 12+ for security and natural behavior! Groups under 12 (especially 6 or fewer) = chronic stress, constant hiding, faded noses, no schooling displays, shortened lifespans. Large groups = confident behavior, brilliant red noses, mesmerizing synchronized schooling. This is critical for their well-being',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'pristine water quality (ammonia/nitrite 0ppm, nitrate under 20ppm)',
          reason: 'Rummynose are extremely sensitive to pollution and act as water quality indicators! They cannot tolerate any ammonia/nitrite (nose fades immediately = warning!). Nitrates over 20ppm cause stress (faded noses). Pristine water is mandatory for health and brilliant red coloration',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'ignoring faded nose color',
          reason: 'Faded noses = emergency warning! Red nose color fades within minutes of stress/water issues. Ignoring faded noses = missing early warnings of ammonia spikes, nitrate problems, temperature issues, or other disasters. Check parameters immediately when noses fade!',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'mixing with boisterous/aggressive tankmates',
          reason: 'Rummynose are nervous shy fish easily stressed by boisterous tankmates! In tanks with barbs, large active danios, or aggressive fish: constant hiding, faded noses, no schooling behavior, stress-related illness. Only peaceful calm tankmates',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 10-15,
        midwater: '20-30',
        bottom: '8-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
      maxMalesPerTank: 20,
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
      'Large groups 12+ fish (tight schooling needs)', 
      'Pristine water (ammonia/nitrite 0ppm, nitrate under 20ppm)', 
      'Blackwater conditions (tannins from Catappa leaves, peat filtration)', 
      'Ultra-soft acidic water (pH 5.5-7.0, GH 1-8)', 
      'Weekly 30% water changes (prevent nitrate creep)', 
      'Dimmed lighting (floating plants)', 
      'Peaceful tankmates only',
    ],

    proTips: [
      "Red nose diagnostics = instant water quality monitoring! Learn to read nose color: flaming brilliant red = perfect conditions, pristine water, low stress, optimal health. 50% faded red = warning signs (nitrates over 20ppm, slight stress, parameter drift). Pale/no red = emergency (ammonia/nitrite present, severe stress, temperature shock, major water issues). This color change happens within minutes giving you early warning before disasters! Check nose color daily - if fading, test water immediately. They're living test kits!",
      "Blackwater setup essential for maximum color/health! Replicate wild Amazon igapó conditions: Add 5-10 Indian almond leaves (Catappa) to tank - they release tannins staining water tea-colored (lowers pH naturally, antibacterial properties, mimics wild habitat). Replace every 2-3 weeks. Alternative: Peat filtration (mesh bag of peat in filter), alder cones, oak leaf litter. Water should be slightly amber-tinted. This brings out maximum red nose color and natural behaviors!",
      "Groups 12+ minimum for proper schooling! With 6-8 fish: loose schooling, lots of hiding, half-hearted displays. With 12-15+ fish: tight synchronized schooling moving as one organism (mesmerizing!), confident behavior, constant midwater swimming, brilliant red noses. Bigger groups = better schooling. 20-30 fish in 200L+ tank = spectacular living cloud displays!",
      "Weekly 30% water changes prevent nitrate creep! Rummynose are extremely intolerant to high nitrates (over 20ppm). Nitrate accumulation = gradual nose fading, lethargy, disease susceptibility. Weekly changes keep nitrates under 20ppm. Use dechlorinated water matched to tank temp (cold water shock = instant nose fading!). This is the #1 maintenance priority.",
      "Floating plants reduce stress! Rummynose are from shaded flooded forests and feel insecure under bright open lighting. Add: Water Sprite, Amazon Frogbit, Red Root Floaters creating 50-70% surface coverage. This: diffuses harsh lighting (mimics forest canopy), provides security (reduces jumping/skittishness), enhances schooling confidence. Dimmed tanks = brilliant red noses!",
      "Feed small amounts 2x daily! They're active swimmers needing quality nutrition for energy/color. Best diet: High-quality micro-pellets (Fluval Bug Bites, Xtreme Nano) as staple, frozen foods 2-3x weekly (baby brine shrimp, daphnia, bloodworms - enhances red coloration!), occasional flakes. Feed amounts consumed in 2-3 minutes. Overfeeding = water quality crashes = faded noses (vicious cycle!).",
      "Drip acclimate when introducing! Rummynose are sensitive to parameter changes - sudden shifts = stress = faded noses = disease. Use slow drip acclimation (1-2 hours) gradually adjusting to tank parameters. Standard float-and-dump = stress. Take your time!",
    ],

    commonMistakes: [
      "Small groups (6 or fewer). Biggest mistake! Rummynose are tight schooling fish needing groups 12+ for security. With small groups: chronic stress, constant hiding, faded noses (even in perfect water!), no schooling displays, shortened lifespans (2-3 years vs 5-7 in proper groups). This is critical - they're not 'minimum 6' fish, they're 'minimum 12' for proper behavior.",
      "Ignoring faded noses. Critical error! Faded noses = early warning of water problems (ammonia spikes, nitrate buildup, parameter shifts, temperature issues). Many hobbyists ignore fading until fish dying. Faded noses = test water immediately and take action! They're giving you advance notice - don't waste it.",
      "No blackwater conditions. Rummynose are blackwater specialists from ultra-soft acidic tannin-stained Amazon streams. In hard alkaline water (pH over 7.5, GH over 10): pale noses, stress, shortened lifespans, poor color. Add Catappa leaves or peat filtration for tannins. Soft acidic water = brilliant red noses.",
      "Nitrate creep. Rummynose are extremely sensitive to high nitrates (over 20ppm)! Without weekly water changes, nitrates accumulate gradually → slowly fading noses, lethargy, immune suppression, early deaths. Many 'mysterious deaths' are chronic nitrate exposure. Keep nitrates under 20ppm always.",
      "Cold water changes. Adding cold tap water during water changes = instant temperature shock → noses fade within minutes! Always match new water to tank temp (±1°C). Temperature swings stress them severely.",
      "Mixing with boisterous fish. Rummynose are nervous shy fish! In tanks with Tiger Barbs, large active danios, or aggressive species: constant hiding, no schooling, faded noses, stress deaths. Only peaceful calm tankmates.",
      "Bright harsh lighting. They're from shaded flooded forests! Bright open lighting = stress, skittishness, hiding. Add floating plants creating 50-70% surface coverage for security.",
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
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Weekly 30% water changes mandatory. Rummynose Tetras are extremely sensitive to water quality - they\'re living indicators showing problems before test kits! Keep: ammonia/nitrite 0ppm (any amount = instant nose fading!), nitrate under 20ppm (critical - they\'re intolerant to high nitrates), pH 5.5-7.0 (soft acidic blackwater conditions). Add blackwater tannins (Indian almond/Catappa leaves, peat filtration, alder cones) maintaining tea-colored water. Gentle low flow. Always match new water temp to tank (±1°C) - cold water shock = instant nose fading! Monitor nose color daily as first indicator of issues.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['ich', 'fin-rot', 'columnaris', 'neon-tetra-disease', 'stress-related-infections'],
    sensitivities: ['Nitrate over 20ppm (highly intolerant!)', 'Ammonia/nitrite (instant stress)', 'pH over 7.5 (alkaline stress)', 'Temperature fluctuations (cold water shock)', 'Parameter changes (sensitive to shifts)', 'Copper medications'],
  },

  scientificContext: {
    wildHabitat:
      'Petitella rhodostoma inhabits blackwater streams and flooded forests (igapós) in Lower Amazon basin (Rio Tapajós, Pará state, Brazil). Wild habitat: shallow to moderate depth (30-150cm) slow-flowing sections, ultra-soft acidic water (pH 5.5-6.5, GH under 3, nearly mineral-free!), tannin-stained tea-colored water (from decomposing leaf litter/wood), dense marginal vegetation (overhanging plants, submerged roots), thick leaf litter substrate (Catappa, various tropical leaves), heavily shaded by forest canopy (dim lighting), warm temps 25-27°C. They school in tight formations as anti-predator defense (confuses predators - "safety in numbers"). They feed on micro-organisms, small insects, algae in midwater zones.',
    sexualDimorphism:
      'Difficult to sex (subtle differences only visible when mature). Females may be: Rounder, fuller abdomens especially when carrying eggs (noticeably plumper profile), slightly larger overall (5-5.5cm vs males 4.5-5cm). Males may be: Slimmer, more streamlined torpedo-shaped bodies, slightly more intense red nose coloration when displaying. These differences only visible in mature adults (12+ months) side-by-side. Juveniles impossible to sex. Most hobbyists never reliably sex Rummynose.',
    variants: ['Petitella rhodostoma (Common/True Rummynose - this species)', 'Hemigrammus bleheri (Firehead/Brilliant Rummynose - red extends further back)', 'Petitella georgiae (False Rummynose - less red, smaller)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger:
      'Rummynose Tetra breeding is achievable in home aquaria with proper blackwater conditions! Wild spawning triggers: 1) Rainy season simulation (pH drop to 5.5-6.0, cooler water 24°C), 2) Heavy conditioning with live foods (baby brine shrimp, micro-worms, daphnia - feed 3x daily for 2 weeks fattening females), 3) Very soft water (GH under 4), 4) Peat filtration or heavy tannins (blackwater replication), 5) Spawning mop or fine-leaved plants (spawning substrate). Select plump gravid females + brightest males, place group 6-8 fish in 40L+ breeding tank.',
    fryCare:
      'Breeding setup: 40L+ bare bottom or fine sand substrate, spawning mop (yarn) or Java Moss clumps (egg deposition sites), sponge filter (gentle flow), heater 25°C, blackwater conditions (pH 5.5-6.0, peat filtration), dim lighting or cover tank (eggs light-sensitive). Spawning behavior: Males chase females in early morning, females scatter 100-200 adhesive eggs on plants/mop, spawning takes 1-2 hours. Remove adults immediately (egg eaters!). Eggs hatch 24-36 hours (tiny transparent fry!). Fry free-swimming 3-5 days after hatch. First foods: infusoria/green water (days 1-7 - critical!), liquid fry food, then baby brine shrimp (day 7+ - growth accelerates!), micro-pellets (3 weeks+). Feed fry 3-4x daily. Growth moderate: 1cm at 6 weeks, 2.5cm at 3 months, 4cm at 6 months, sexually mature 9-12 months. Keep lighting dim first 2 weeks (egg/fry light sensitivity).',
    notes:
      'Rummynose breeding is very achievable with blackwater conditions! Success keys: 1) Soft acidic water (pH 5.5-6.0, GH under 4) - non-negotiable, 2) Heavy conditioning with live foods (plump females), 3) Peat filtration/tannins, 4) Remove adults immediately after spawning (prolific egg eaters!), 5) Infusoria culture ready for fry (first week critical!). Many hobbyists successfully breed Rummynose in proper blackwater setups. Challenge: Raising fry past first week (need microscopic foods). Patience required but very rewarding!',
  },
  
  experienceData: {
    successRate: 0.65,
    survivalRate: 0.60,
    
    commonFailures: [
      { issue: 'faded-noses-chronic-stress', cause: 'small-groups-under-12-fish-or-poor-water-quality', frequency: 0.35 },
      { issue: 'nitrate-poisoning-deaths', cause: 'nitrate-creep-over-20ppm-infrequent-water-changes', frequency: 0.25 },
      { issue: 'stress-from-wrong-tankmates', cause: 'mixed-with-boisterous-aggressive-fish', frequency: 0.15 },
      { issue: 'temperature-shock', cause: 'cold-water-changes-not-matching-tank-temp', frequency: 0.15 },
      { issue: 'shortened-lifespan', cause: 'no-blackwater-conditions-hard-alkaline-water', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 150, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
