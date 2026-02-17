import type { Species } from '../../types/species';

export const harlequinRasbora: Species = {
  id: 'rasbora-001',
  slug: 'harlequin-rasbora',
  imageUrl: '/images/species/harlequin-rasbora.jpg',
  funFact: "Harlequin Rasboras are the ORIGINAL SCHOOLING FISH—the classic that started it all! Named after Italian theatre's Harlequin character whose costume featured diamond patterns, their triangular BLACK WEDGE looks like a harlequin's mask or cape. Watch them school in PERFECT FORMATION: 10-15 fish moving as ONE ORGANISM through planted tanks in mesmerizing synchronized displays! Here's the UNIQUE breeding trick: unlike most egg-scatterers, Harlequins lay eggs on the UNDERSIDE of BROAD LEAVES (like Java Fern, Amazon Sword), turning leaves upside down in elaborate spawning dances! Their black wedge is a MOOD INDICATOR: intense black = confident, faded pale = stressed. They're also BLACKWATER BEAUTIES: under tannin-stained water (Indian Almond leaves), their metallic orange GLOWS like copper! From Southeast Asia's peat swamps!",

  imageCredit: {
    photographer: 'Christa Rohrbach (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Trigonostigma_heteromorpha_-_Karlsruhe_Zoo_01.jpg',
    license: 'CC BY-SA 2.0 DE',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/de/deed.en'
  },

  taxonomy: {
    scientificName: 'Trigonostigma heteromorpha',
    commonName: 'Harlequin Rasbora',
    family: 'Cyprinidae',
    origin: 'Southeast Asia (Thailand, Malaysia, Singapore, Sumatra - peat swamps, slow streams)',
    region: 'Asia',
    biotope: 'Slow-moving blackwater peat swamps and forest streams with dense vegetation, leaf litter substrate, tannin-stained tea-colored water, soft acidic conditions',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4.5,
    color: 'STUNNING! Metallic copper-orange body (like polished pennies) with striking triangular BLACK WEDGE pattern from mid-body to tail (harlequin mask). Orange shimmers iridescently under lighting. Females: rounder body, wider black wedge. Males: slimmer, narrower wedge. Under blackwater conditions (tannins), orange GLOWS like burning copper',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    gh: { min: 2, max: 12 },
    kh: { min: 1, max: 6 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'middle',
      secondary: 'top',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.5,
  },

  habitat: {
    planting: 'very-heavy',
    plantingNotes:
      'Harlequin Rasboras are PLANT-LOVERS and thrive in DENSELY PLANTED tanks mimicking Southeast Asian peat swamps! They prefer MID-WATER zones, swimming through stem plants and around broad leaves. Best plants: broad-leaved (Java Fern, Amazon Sword, Anubias—needed for spawning!), stem plants (Rotala, Ludwigia, Bacopa), fine-leaved (Java Moss, Christmas Moss), floating plants (Salvinia, Frogbit—diffuses lighting). DARK substrate (black sand, dark gravel) creates dramatic contrast—metallic orange POPS against darkness. Blackwater setup with Indian Almond leaves intensifies copper-orange colors dramatically. Soft/dim lighting preferred.',
    hardscape: ['Driftwood (creates tannins - ideal)', 'Leaf litter (Indian Almond, oak leaves)', 'Smooth river stones', 'Minimal—plants are primary focus'],
  },

  behavior: {
    tags: ['peaceful', 'shoaling', 'active', 'community', 'plant_dependent'],
    minGroupSize: 8,
    description:
      'Harlequin Rasboras are CLASSIC SCHOOLING FISH creating MESMERIZING synchronized swimming displays! Groups of 8-15+ move as SINGLE ORGANISMS, swimming in perfect formation through planted tanks. They\'re ACTIVE and constantly exploring mid-water zones, weaving through plants gracefully. They\'re 100% PEACEFUL—among the gentlest community fish, never harassing tankmates. Watch their TIGHT SCHOOLING when slightly stressed (new tank, water changes) vs LOOSE SHOALING when confident (spread out exploring). Their black wedge is a MOOD INDICATOR: intense black = confident/healthy, faded pale = stressed. Males perform subtle COURTSHIP displays: chasing females through plants, circling around broad leaves. They\'re SHY in sparse tanks but CONFIDENT in densely planted setups.',
    
    compatibility: {
      goodMates: ['Other peaceful rasboras', 'Small tetras (Neons, Cardinals, Embers)', 'Corydoras', 'Kuhli Loaches', 'Otocinclus', 'Gouramis (peaceful)', 'Adult shrimp', 'Peaceful snails'],
      badMates: ['Aggressive fish', 'Large cichlids', 'Bettas (may stress Harlequins)', 'Fin-nippers', 'Very fast feeders'],
      notes:
        'Harlequin Rasboras are PERFECT COMMUNITY FISH—the gold standard for peaceful schoolers! They\'re compatible with virtually all peaceful species and focus on schooling behavior. They\'re SHRIMP-SAFE (ignore adults, may nibble shrimplets). Best in PEACEFUL PLANTED COMMUNITY TANKS with similar-sized gentle species. Groups of 8-12+ spread social dynamics and create stunning synchronized swimming displays. Larger groups = tighter schools = more impressive behavior.',
      
      rules: [
        {
          type: 'requires',
          condition: 'groups of 8-12+ fish',
          reason: 'Harlequin Rasboras are highly social SCHOOLERS. Groups under 6 = stressed, timid fish with faded colors. Groups of 8-12+ = confident, active schools with intense colors and stunning synchronized swimming. This dramatically affects behavior',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'DENSELY planted tank',
          reason: 'Harlequins are plant-dependent. Without dense planting, they hide and show stress. Dense plants = confident, visible fish with natural behavior. Plants also needed for breeding (broad leaves)',
          severity: 'high',
        },
        {
          type: 'suggestion',
          condition: 'soft acidic water (pH 6.0-7.0) with tannins',
          reason: 'Harlequins are blackwater species from peat swamps. Soft acidic water with tannins (Indian Almond leaves) intensifies orange colors to copper glow. They tolerate harder water but colors fade',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: '6-12',
        midwater: '8-15',
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
      type: 'group',
      maxMalesPerTank: 8,
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
      'Groups of 8-12+ (social species)', 
      'DENSELY planted tank', 
      'Dark substrate (enhances colors)', 
      'Soft acidic water preferred', 
      'Blackwater conditions ideal (tannins)',
    ],

    proTips: [
      "GROUP SIZE = SCHOOLING MAGIC! Small groups (under 6) = stressed, hiding fish with faded colors. Groups of 8-12+ = CONFIDENT, ACTIVE schools creating STUNNING synchronized swimming displays moving as single organisms. The difference is DRAMATIC.",
      "BLACK WEDGE = MOOD INDICATOR! Intense, solid black wedge = confident, healthy fish. FADED, pale wedge = stressed fish (poor water, wrong params, small group, sparse tank). Watch the wedge—it tells everything!",
      "BLACKWATER = COPPER GLOW! Add Indian Almond leaves, driftwood, or blackwater extract to create tannin-stained 'tea' water. Metallic orange intensifies to GLOWING COPPER—absolutely stunning. This mimics natural peat swamp habitat.",
      "DARK SUBSTRATE = COLOR POP! Black sand or dark gravel makes metallic orange SHIMMER dramatically. Light substrates wash out colors. Simple change = huge visual impact.",
      "Watch the LEAF SPAWNING! Unlike most egg-scatterers, Harlequins lay eggs on UNDERSIDES of BROAD LEAVES (Java Fern, Amazon Sword). Males and females turn UPSIDE DOWN together under leaf, vibrating bodies. Unique breeding behavior!",
      "Most peaceful community fish! Harlequins are 100% peaceful toward all tankmates and never nip fins. Perfect for beginners building first community tank.",
      "Feed small portions 2x daily. Micro-pellets, crushed flakes, baby brine shrimp, daphnia. Small mouths need tiny foods. Varied diet = best colors.",
    ],

    commonMistakes: [
      "Small groups (under 6) = stressed pale fish. Harlequins are HIGHLY SOCIAL schoolers. Groups under 6 = timid fish hiding with faded black wedges. Beginners buy 4-6 and wonder why colors are dull. Buy 8-12+ for confident schools!",
      "Light substrate. White sand/gravel washes out metallic orange completely. Dark substrate creates DRAMATIC contrast—orange GLOWS against darkness. Simple fix = huge improvement.",
      "Sparse planting. Harlequins are plant-dependent. Without dense plants, they hide constantly. Heavily planted tanks = confident, visible fish with natural behavior.",
      "Bright lighting. Intense lighting stresses them and fades colors. Harlequins prefer DIM conditions or floating plants diffusing light. Blackwater setups ideal.",
      "Hard water. Harlequins tolerate moderate hardness but THRIVE in soft acidic water (pH 6.0-7.0, GH 2-8) with tannins. Hard alkaline water fades colors noticeably.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'crushed-flakes', 'baby-brine-shrimp', 'daphnia'],
      supplements: ['bloodworms', 'mosquito-larvae', 'spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'weekly',
    },
    
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Weekly 25-30% water changes. Harlequin Rasboras prefer SOFT ACIDIC STABLE water. Keep nitrates below 10ppm. Low flow—sponge filters ideal. Add Indian Almond leaves for tannins (intensifies colors). Mature planted tanks with biofilm help significantly.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'low',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['ich', 'velvet', 'fin-rot', 'internal-parasites'],
    sensitivities: ['Hard alkaline water (fades colors)', 'Bright lighting (stress)', 'Sparse planting (chronic stress)', 'Small groups (social stress)', 'Parameter swings'],
  },

  scientificContext: {
    wildHabitat:
      'Harlequin Rasboras inhabit slow-moving blackwater peat swamps and forest streams in Southeast Asia (Thailand, Malaysia, Singapore, Sumatra). Wild habitat: shallow (20-80cm deep) tea-colored water heavily stained with tannins from decomposing leaves, DENSE aquatic vegetation and submerged roots, thick leaf litter substrate, SOFT ACIDIC conditions (GH 2-6, KH 1-3, pH 5.5-6.5), warm temperatures (24-28°C), minimal flow. They occupy mid-water zones among plants, feeding on insects, larvae, zooplankton, and algae.',
    sexualDimorphism:
      'SUBTLE BUT DISTINGUISHABLE. MALES: Slimmer, more streamlined torpedo-shaped bodies. NARROWER black wedge pattern (pointed). Slightly more intense metallic orange coloration. Actively chase females during spawning. FEMALES: ROUNDER, fuller bodies especially when gravid (carrying eggs). WIDER black wedge pattern (more rounded edges). Slightly duller coloration. Noticeably plumper belly. Easy to distinguish in mature groups (6+ months old) when females plump up.',
    variants: ['Standard Harlequin Rasbora (Trigonostigma heteromorpha)', 'Glowlight Rasbora (T. hengeli - different species, often confused)', 'Lambchop Rasbora (T. espei - different species)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'intermediate',
    trigger:
      'Harlequin Rasboras breed READILY in proper conditions with unique LEAF-SPAWNING behavior! Trigger breeding: 1) Mature group (6+ months old, 8+ fish) with plump females, 2) BROAD-LEAVED PLANTS (Java Fern, Amazon Sword, Anubias—mandatory!), 3) Excellent conditioning with LIVE/FROZEN FOODS (baby brine shrimp, daphnia, bloodworms, mosquito larvae) for 2 weeks until females noticeably plump, 4) SOFT ACIDIC water (GH 2-6, pH 6.0-6.5, temp 26-28°C), 5) Tannin-stained blackwater (Indian Almond leaves). Males chase females through plants, leading them to broad leaves. Pairs FLIP UPSIDE DOWN under leaf undersides, vibrating bodies together.',
    fryCare:
      'Unlike most egg-scatterers, Harlequins lay 30-80 ADHESIVE eggs on UNDERSIDES of BROAD LEAVES (Java Fern, Amazon Sword). Pairs turn upside down under leaves, pressing bodies together while vibrating—female releases eggs, male fertilizes. Eggs stick to leaf undersides. CRITICAL: Adults eat eggs IMMEDIATELY. Remove adults after spawning OR use separate breeding tank. Eggs are LIGHT-SENSITIVE—keep tank dark (cover with towels). Eggs hatch in 24-36 hours at 26°C. Fry hang on leaves for 3-4 days absorbing yolk sacs. Once free-swimming (day 5), feed INFUSORIA or liquid fry food for 5-7 days, then graduate to BABY BRINE SHRIMP nauplii. Growth is MODERATE: 1cm at 6 weeks, 2cm at 10 weeks, mature at 6 months. Fry rearing is CHALLENGING—need microscopic foods.',
    notes:
      'Harlequins breed readily in proper conditions but fry rearing is CHALLENGING. Main issues: 1) Adults eat eggs immediately (remove or separate), 2) Eggs are light-sensitive (keep dark), 3) Fry need INFUSORIA (prepare cultures beforehand). Unique leaf-spawning behavior is BEAUTIFUL to watch—pairs flipping upside down under leaves vibrating. For deliberate breeding: separate 10-gallon breeding tank with Java Fern, condition adults heavily, dim lighting, remove after spawning.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'faded-colors-stress', cause: 'small-groups-under-8-or-sparse-planting', frequency: 0.30 },
      { issue: 'pale-washed-out-colors', cause: 'light-substrate-or-bright-lighting', frequency: 0.25 },
      { issue: 'chronic-stress-hiding', cause: 'hard-alkaline-water-or-aggressive-tankmates', frequency: 0.18 },
      { issue: 'timid-behavior', cause: 'insufficient-planting-or-floating-cover', frequency: 0.15 },
      { issue: 'outcompeted-at-feeding', cause: 'fast-boisterous-tankmates', frequency: 0.12 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 200, currency: 'EUR' },
      monthly: { min: 12, max: 30, currency: 'EUR' },
    },
  },
};
