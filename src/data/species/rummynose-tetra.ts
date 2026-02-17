import type { Species } from '../../types/species';

export const rummynoseTetra: Species = {
  id: 'rummy-nose-tetra',
  slug: 'rummy-nose-tetra',
  imageUrl: '/images/species/rummy-nose-tetra.jpg',
  funFact: "Rummynose Tetras are LIVING WATER QUALITY BAROMETERS with their brilliant red noses acting as REAL-TIME HEALTH INDICATORS! FLAMING RED NOSE = perfect water quality and health. FADED/PALE NOSE = instant warning of stress, ammonia spikes, nitrate problems, temperature swings, or parameter shifts - they change color WITHIN MINUTES giving you early warning before disasters! They're the CANARY IN THE COAL MINE for aquariums. Watch them display SYNCHRONIZED SCHOOLING - they swim in TIGHT FORMATION like one organism moving in perfect unison (balletic displays!). They're BLACKWATER SPECIALISTS from Amazon Rio Tapajós needing ultra-soft acidic tannin-stained water (pH 5.5-6.5, GH under 8). Groups 12+ create mesmerizing schools! From Brazilian blackwater streams!",

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
    iconShape: 'torpedo',
    adultSizeCM: 5,
    color: 'STUNNING TRICOLOR PATTERN with health-indicating features! FLAMING RED HEAD (from snout covering entire face/gill plates - the WATER QUALITY INDICATOR changing color with stress!). IRIDESCENT SILVER BODY with subtle blue-green sheen. DISTINCTIVE CAUDAL PEDUNCLE with THREE BOLD HORIZONTAL BLACK-AND-WHITE STRIPES on tail (zebra-striped tail - species signature!). Clear dorsal/anal fins. CRITICAL: Red nose intensity = HEALTH BAROMETER: Brilliant flaming red = perfect conditions/health. 50% faded red = stress/water issues (nitrates over 20ppm). Pale/no red = EMERGENCY (ammonia/nitrite/severe stress). This color change happens WITHIN MINUTES making them instant indicators',
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
      primary: 'middle',
      secondary: 'top',
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
    planting: 'very-heavy',
    plantingNotes:
      'Rummynose Tetras require VERY HEAVY PLANTING replicating Amazonian blackwater streams! They\'re from shaded flooded forests (igapós) with dense marginal vegetation. Best setup: BACKGROUND/SIDE THICKETS (Amazon Swords, Cryptocoryne wendtii, Vallisneria - creates security zones and sightline breaks), FLOATING PLANTS (Water Sprite, Frogbit, Amazon Frogbit - diffuses lighting, creates "blackwater" shading, reduces jumping), OPEN MIDWATER SWIMMING SPACE (critical for schooling displays!). They need BLACKWATER CONDITIONS: Indian almond leaves (Catappa), oak leaf litter, alder cones, or peat filtration creating tannin-stained tea-colored water (mimics wild habitat, lowers pH, releases beneficial compounds). Dimmed lighting essential (they\'re from shaded streams).',
    hardscape: ['Driftwood branches (tannin release - blackwater replication)', 'Fine sand substrate (natural foraging substrate)', 'LEAF LITTER layer (Indian almond/Catappa leaves, oak leaves - blackwater biotope)', 'Marginal plant roots (mimics igapó flooded forest)', 'NO sharp edges'],
  },

  behavior: {
    tags: ['schooling', 'peaceful', 'shy', 'active', 'midwater', 'indicator_species'],
    minGroupSize: 12,
    description:
      'Rummynose Tetras display MESMERIZING TIGHT SYNCHRONIZED SCHOOLING - they swim in PERFECT FORMATION like one organism moving in balletic unison (most stunning schooling behavior of all tetras!). Watch them create "living clouds" moving together through midwater with coordinated turns/movements. They\'re NERVOUS SHY FISH: easily spooked by sudden movements, quick to scatter then reform school. They\'re LIVING WATER QUALITY INDICATORS: red nose color fades WITHIN MINUTES of stress/parameter issues giving instant visual warnings! They\'re DIURNAL ACTIVE during day, resting at night. Groups under 12 = stressed, constant hiding, faded noses. Groups 12-20+ = confident, tight schooling, brilliant red noses, natural behaviors.',
    
    compatibility: {
      goodMates: ['All peaceful community fish (Neon Tetras, Cardinal Tetras)', 'Corydoras (all peaceful species)', 'Harlequin Rasboras', 'Otocinclus', 'Pygmy Corydoras', 'Honey Gouramis', 'Peaceful dwarf cichlids (Bolivian Rams)', 'ALL dwarf shrimp (safe with adults but may eat eggs/shrimplets)', 'Snails (peaceful cohabitants)'],
      badMates: ['Fin nippers (Tiger Barbs, Serpae Tetras)', 'Aggressive/territorial fish', 'Large cichlids', 'Goldfish (incompatible temps/parameters)', 'Boisterous fast fish (stress shy tetras)'],
      notes:
        'Rummynose Tetras are ULTRA-PEACEFUL MODEL COMMUNITY FISH perfect for planted blackwater biotopes! They\'re COMPLETELY NON-AGGRESSIVE never bothering tankmates. CRITICAL: They\'re NERVOUS/SHY needing PEACEFUL TANKMATES only! Boisterous/aggressive fish (barbs, large danios) stress them causing: constant hiding, faded noses, refusal to school, early death. Best in CALM PLANTED COMMUNITY TANKS with gentle water movement. They\'re safe with ADULT SHRIMP but may opportunistically eat shrimp eggs/tiny shrimplets under 5mm (not predatory but opportunistic). Their schooling behavior tightens when feeling threatened - this is natural defensive behavior.',
      
      rules: [
        {
          type: 'requires',
          condition: 'LARGE GROUPS 12+ fish minimum',
          reason: 'Rummynose are TIGHT SCHOOLING FISH needing groups 12+ for security and natural behavior! Groups under 12 (especially 6 or fewer) = chronic stress, constant hiding, faded noses, no schooling displays, shortened lifespans. Large groups = confident behavior, brilliant red noses, mesmerizing synchronized schooling. This is critical for their well-being',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'PRISTINE WATER QUALITY (ammonia/nitrite 0ppm, nitrate under 20ppm)',
          reason: 'Rummynose are EXTREMELY SENSITIVE TO POLLUTION and act as water quality indicators! They cannot tolerate ANY ammonia/nitrite (nose fades immediately = warning!). Nitrates over 20ppm cause stress (faded noses). Pristine water is mandatory for health and brilliant red coloration',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'ignoring faded nose color',
          reason: 'FADED NOSES = EMERGENCY WARNING! Red nose color fades within minutes of stress/water issues. Ignoring faded noses = missing early warnings of ammonia spikes, nitrate problems, temperature issues, or other disasters. Check parameters immediately when noses fade!',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'mixing with boisterous/aggressive tankmates',
          reason: 'Rummynose are NERVOUS SHY FISH easily stressed by boisterous tankmates! In tanks with barbs, large active danios, or aggressive fish: constant hiding, faded noses, no schooling behavior, stress-related illness. Only peaceful calm tankmates',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: '10-15',
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
      type: 'schooling',
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
      'LARGE GROUPS 12+ fish (tight schooling needs)', 
      'PRISTINE WATER (ammonia/nitrite 0ppm, nitrate under 20ppm)', 
      'BLACKWATER CONDITIONS (tannins from Catappa leaves, peat filtration)', 
      'ULTRA-SOFT ACIDIC WATER (pH 5.5-7.0, GH 1-8)', 
      'Weekly 30% water changes (prevent nitrate creep)', 
      'Dimmed lighting (floating plants)', 
      'Peaceful tankmates only',
    ],

    proTips: [
      "RED NOSE DIAGNOSTICS = instant water quality monitoring! Learn to READ NOSE COLOR: FLAMING BRILLIANT RED = perfect conditions, pristine water, low stress, optimal health. 50% FADED RED = warning signs (nitrates over 20ppm, slight stress, parameter drift). PALE/NO RED = EMERGENCY (ammonia/nitrite present, severe stress, temperature shock, major water issues). This color change happens WITHIN MINUTES giving you early warning before disasters! Check nose color daily - if fading, test water immediately. They're living test kits!",
      "BLACKWATER SETUP essential for maximum color/health! Replicate wild Amazon igapó conditions: Add 5-10 INDIAN ALMOND LEAVES (Catappa) to tank - they release tannins staining water tea-colored (lowers pH naturally, antibacterial properties, mimics wild habitat). Replace every 2-3 weeks. Alternative: Peat filtration (mesh bag of peat in filter), alder cones, oak leaf litter. Water should be slightly amber-tinted. This brings out MAXIMUM RED NOSE COLOR and natural behaviors!",
      "Groups 12+ MINIMUM for proper schooling! With 6-8 fish: loose schooling, lots of hiding, half-hearted displays. With 12-15+ fish: TIGHT SYNCHRONIZED SCHOOLING moving as one organism (mesmerizing!), confident behavior, constant midwater swimming, brilliant red noses. Bigger groups = better schooling. 20-30 fish in 200L+ tank = spectacular living cloud displays!",
      "Weekly 30% WATER CHANGES prevent nitrate creep! Rummynose are EXTREMELY INTOLERANT to high nitrates (over 20ppm). Nitrate accumulation = gradual nose fading, lethargy, disease susceptibility. Weekly changes keep nitrates under 20ppm. Use dechlorinated water MATCHED TO TANK TEMP (cold water shock = instant nose fading!). This is the #1 maintenance priority.",
      "FLOATING PLANTS reduce stress! Rummynose are from SHADED flooded forests and feel insecure under bright open lighting. Add: Water Sprite, Amazon Frogbit, Red Root Floaters creating 50-70% surface coverage. This: diffuses harsh lighting (mimics forest canopy), provides security (reduces jumping/skittishness), enhances schooling confidence. Dimmed tanks = brilliant red noses!",
      "Feed SMALL AMOUNTS 2x DAILY! They're active swimmers needing quality nutrition for energy/color. Best diet: High-quality micro-pellets (Fluval Bug Bites, Xtreme Nano) as staple, frozen foods 2-3x weekly (baby brine shrimp, daphnia, bloodworms - enhances red coloration!), occasional flakes. Feed amounts consumed in 2-3 minutes. Overfeeding = water quality crashes = faded noses (vicious cycle!).",
      "DRIP ACCLIMATE when introducing! Rummynose are SENSITIVE to parameter changes - sudden shifts = stress = faded noses = disease. Use slow drip acclimation (1-2 hours) gradually adjusting to tank parameters. Standard float-and-dump = stress. Take your time!",
    ],

    commonMistakes: [
      "Small groups (6 or fewer). BIGGEST MISTAKE! Rummynose are TIGHT SCHOOLING FISH needing groups 12+ for security. With small groups: chronic stress, constant hiding, faded noses (even in perfect water!), no schooling displays, shortened lifespans (2-3 years vs 5-7 in proper groups). This is critical - they're NOT 'minimum 6' fish, they're 'minimum 12' for proper behavior.",
      "Ignoring faded noses. CRITICAL ERROR! Faded noses = EARLY WARNING of water problems (ammonia spikes, nitrate buildup, parameter shifts, temperature issues). Many hobbyists ignore fading until fish dying. Faded noses = test water immediately and take action! They're giving you advance notice - don't waste it.",
      "No blackwater conditions. Rummynose are BLACKWATER SPECIALISTS from ultra-soft acidic tannin-stained Amazon streams. In hard alkaline water (pH over 7.5, GH over 10): pale noses, stress, shortened lifespans, poor color. Add Catappa leaves or peat filtration for tannins. Soft acidic water = brilliant red noses.",
      "Nitrate creep. Rummynose are EXTREMELY SENSITIVE to high nitrates (over 20ppm)! Without weekly water changes, nitrates accumulate gradually → slowly fading noses, lethargy, immune suppression, early deaths. Many 'mysterious deaths' are chronic nitrate exposure. Keep nitrates under 20ppm always.",
      "Cold water changes. Adding COLD TAP WATER during water changes = instant temperature shock → noses fade within minutes! Always match new water to tank temp (±1°C). Temperature swings stress them severely.",
      "Mixing with boisterous fish. Rummynose are NERVOUS SHY FISH! In tanks with Tiger Barbs, large active danios, or aggressive species: constant hiding, no schooling, faded noses, stress deaths. Only peaceful calm tankmates.",
      "Bright harsh lighting. They're from SHADED flooded forests! Bright open lighting = stress, skittishness, hiding. Add floating plants creating 50-70% surface coverage for security.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'tropical-flakes', 'baby-brine-shrimp', 'daphnia'],
      supplements: ['bloodworms', 'micro-worms', 'spirulina-flakes'],
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
      notes: 'Weekly 30% water changes MANDATORY. Rummynose Tetras are EXTREMELY SENSITIVE to water quality - they\'re living indicators showing problems before test kits! Keep: ammonia/nitrite 0ppm (ANY amount = instant nose fading!), nitrate UNDER 20ppm (critical - they\'re intolerant to high nitrates), pH 5.5-7.0 (soft acidic blackwater conditions). Add BLACKWATER TANNINS (Indian almond/Catappa leaves, peat filtration, alder cones) maintaining tea-colored water. Gentle low flow. Always MATCH NEW WATER TEMP to tank (±1°C) - cold water shock = instant nose fading! Monitor nose color daily as first indicator of issues.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'low',
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
      'Petitella rhodostoma inhabits BLACKWATER STREAMS and FLOODED FORESTS (igapós) in Lower Amazon basin (Rio Tapajós, Pará state, Brazil). Wild habitat: shallow to moderate depth (30-150cm) slow-flowing sections, ULTRA-SOFT ACIDIC WATER (pH 5.5-6.5, GH under 3, nearly mineral-free!), TANNIN-STAINED tea-colored water (from decomposing leaf litter/wood), DENSE MARGINAL VEGETATION (overhanging plants, submerged roots), thick LEAF LITTER substrate (Catappa, various tropical leaves), heavily SHADED by forest canopy (dim lighting), warm temps 25-27°C. They school in TIGHT FORMATIONS as anti-predator defense (confuses predators - "safety in numbers"). They feed on micro-organisms, small insects, algae in midwater zones.',
    sexualDimorphism:
      'DIFFICULT TO SEX (subtle differences only visible when mature). Females MAY be: Rounder, fuller abdomens especially when carrying eggs (noticeably plumper profile), slightly larger overall (5-5.5cm vs males 4.5-5cm). Males MAY be: Slimmer, more streamlined torpedo-shaped bodies, slightly more intense red nose coloration when displaying. These differences ONLY visible in mature adults (12+ months) side-by-side. Juveniles impossible to sex. Most hobbyists never reliably sex Rummynose.',
    variants: ['Petitella rhodostoma (Common/True Rummynose - this species)', 'Hemigrammus bleheri (Firehead/Brilliant Rummynose - red extends further back)', 'Petitella georgiae (False Rummynose - less red, smaller)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'intermediate',
    trigger:
      'Rummynose Tetra breeding is ACHIEVABLE in home aquaria with proper blackwater conditions! Wild spawning triggers: 1) RAINY SEASON simulation (pH drop to 5.5-6.0, cooler water 24°C), 2) HEAVY CONDITIONING with LIVE FOODS (baby brine shrimp, micro-worms, daphnia - feed 3x daily for 2 weeks fattening females), 3) Very soft water (GH under 4), 4) PEAT FILTRATION or heavy tannins (blackwater replication), 5) Spawning mop or fine-leaved plants (spawning substrate). Select plump gravid females + brightest males, place group 6-8 fish in 40L+ breeding tank.',
    fryCare:
      'Breeding setup: 40L+ bare bottom or fine sand substrate, spawning mop (yarn) or Java Moss clumps (egg deposition sites), sponge filter (gentle flow), heater 25°C, BLACKWATER CONDITIONS (pH 5.5-6.0, peat filtration), DIM LIGHTING or cover tank (eggs light-sensitive). Spawning behavior: Males chase females in early morning, females scatter 100-200 ADHESIVE EGGS on plants/mop, spawning takes 1-2 hours. REMOVE ADULTS IMMEDIATELY (egg eaters!). Eggs hatch 24-36 hours (tiny transparent fry!). Fry free-swimming 3-5 days after hatch. First foods: INFUSORIA/green water (days 1-7 - critical!), liquid fry food, then BABY BRINE SHRIMP (day 7+ - growth accelerates!), micro-pellets (3 weeks+). Feed fry 3-4x daily. Growth moderate: 1cm at 6 weeks, 2.5cm at 3 months, 4cm at 6 months, sexually mature 9-12 months. Keep lighting dim first 2 weeks (egg/fry light sensitivity).',
    notes:
      'Rummynose breeding is VERY ACHIEVABLE with blackwater conditions! Success keys: 1) Soft acidic water (pH 5.5-6.0, GH under 4) - non-negotiable, 2) Heavy conditioning with live foods (plump females), 3) Peat filtration/tannins, 4) Remove adults immediately after spawning (prolific egg eaters!), 5) Infusoria culture ready for fry (first week critical!). Many hobbyists successfully breed Rummynose in proper blackwater setups. Challenge: Raising fry past first week (need microscopic foods). Patience required but very rewarding!',
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
