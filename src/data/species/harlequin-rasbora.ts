import type { Species } from '../../types/species';

export const harlequinRasbora: Species = {
  id: 'rasbora-001',
  slug: 'harlequin-rasbora',
  imageUrl: '/images/species/harlequin-rasbora.jpg',
  funFact: "Harlequin Rasboras are the original schooling fish—the classic that started it all! Named after Italian theatre's Harlequin character whose costume featured diamond patterns, their triangular black wedge looks like a harlequin's mask or cape. Watch them school in perfect formation: 10-15 fish moving as one organism through planted tanks in mesmerizing synchronized displays! Here's the unique breeding trick: unlike most egg-scatterers, Harlequins lay eggs on the underside of broad leaves (like Java Fern, Amazon Sword), turning leaves upside down in elaborate spawning dances! Their black wedge is a mood indicator: intense black = confident, faded pale = stressed. They're also blackwater beauties: under tannin-stained water (Indian Almond leaves), their metallic orange glows like copper! From Southeast Asia's peat swamps!",

  imageCredit: {
    photographer: 'Christa Rohrbach (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Trigonostigma_heteromorpha_-_Karlsruhe_Zoo_01.jpg',
    license: 'CC BY 2.0',
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
    color: 'Stunning! Metallic copper-orange body (like polished pennies) with striking triangular black wedge pattern from mid-body to tail (harlequin mask). Orange shimmers iridescently under lighting. Females: rounder body, wider black wedge. Males: slimmer, narrower wedge. Under blackwater conditions (tannins), orange glows like burning copper',
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
      primary: 'midwater',
      secondary: 'surface',
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
    planting: 'dense',
    plantingNotes:
      'Harlequin Rasboras are plant-lovers and thrive in densely planted tanks mimicking Southeast Asian peat swamps! They prefer mid-water zones, swimming through stem plants and around broad leaves. Best plants: broad-leaved (Java Fern, Amazon Sword, Anubias—needed for spawning!), stem plants (Rotala, Ludwigia, Bacopa), fine-leaved (Java Moss, Christmas Moss), floating plants (Salvinia, Frogbit—diffuses lighting). Dark substrate (black sand, dark gravel) creates dramatic contrast—metallic orange pops against darkness. Blackwater setup with Indian Almond leaves intensifies copper-orange colors dramatically. Soft/dim lighting preferred.',
    hardscape: ['Driftwood (creates tannins - ideal)', 'Leaf litter (Indian Almond, oak leaves)', 'Smooth river stones', 'Minimal—plants are primary focus'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'active'],
    minGroupSize: 8,
    description:
      'Harlequin Rasboras are classic schooling fish creating mesmerizing synchronized swimming displays! Groups of 8-15+ move as single organisms, swimming in perfect formation through planted tanks. They\'re active and constantly exploring mid-water zones, weaving through plants gracefully. They\'re 100% peaceful—among the gentlest community fish, never harassing tankmates. Watch their tight schooling when slightly stressed (new tank, water changes) vs loose shoaling when confident (spread out exploring). Their black wedge is a mood indicator: intense black = confident/healthy, faded pale = stressed. Males perform subtle courtship displays: chasing females through plants, circling around broad leaves. They\'re shy in sparse tanks but confident in densely planted setups.',
    
    compatibility: {
      goodMates: ['Other peaceful rasboras', 'Small tetras (Neons, Cardinals, Embers)', 'Corydoras', 'Kuhli Loaches', 'Otocinclus', 'Gouramis (peaceful)', 'Adult shrimp', 'Peaceful snails'],
      badMates: ['Aggressive fish', 'Large cichlids', 'Bettas (may stress Harlequins)', 'Fin-nippers', 'Very fast feeders'],
      notes:
        'Harlequin Rasboras are perfect community fish—the gold standard for peaceful schoolers! They\'re compatible with virtually all peaceful species and focus on schooling behavior. They\'re shrimp-safe (ignore adults, may nibble shrimplets). Best in peaceful planted community tanks with similar-sized gentle species. Groups of 8-12+ spread social dynamics and create stunning synchronized swimming displays. Larger groups = tighter schools = more impressive behavior.',
      
      rules: [
        {
          type: 'requires',
          condition: 'groups of 8-12+ fish',
          reason: 'Harlequin Rasboras are highly social schoolers. Groups under 6 = stressed, timid fish with faded colors. Groups of 8-12+ = confident, active schools with intense colors and stunning synchronized swimming. This dramatically affects behavior',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'densely planted tank',
          reason: 'Harlequins are plant-dependent. Without dense planting, they hide and show stress. Dense plants = confident, visible fish with natural behavior. Plants also needed for breeding (broad leaves)',
          severity: 'high',
        },
        {
          type: 'warning',
          condition: 'soft acidic water (pH 6.0-7.0) with tannins',
          reason: 'Harlequins are blackwater species from peat swamps. Soft acidic water with tannins (Indian Almond leaves) intensifies orange colors to copper glow. They tolerate harder water but colors fade',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-12,
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
      type: 'shoal',
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
      'Densely planted tank', 
      'Dark substrate (enhances colors)', 
      'Soft acidic water preferred', 
      'Blackwater conditions ideal (tannins)',
    ],

    proTips: [
      "GROUP SIZE = SCHOOLING MAGIC! Small groups (under 6) = stressed, hiding fish with faded colors. Groups of 8-12+ = confident, active schools creating stunning synchronized swimming displays moving as single organisms. The difference is dramatic.",
      "Black wedge = mood indicator! Intense, solid black wedge = confident, healthy fish. Faded, pale wedge = stressed fish (poor water, wrong params, small group, sparse tank). Watch the wedge—it tells everything!",
      "Blackwater = copper glow! Add Indian Almond leaves, driftwood, or blackwater extract to create tannin-stained 'tea' water. Metallic orange intensifies to glowing copper—absolutely stunning. This mimics natural peat swamp habitat.",
      "Dark substrate = color pop! Black sand or dark gravel makes metallic orange shimmer dramatically. Light substrates wash out colors. Simple change = huge visual impact.",
      "Watch the leaf spawning! Unlike most egg-scatterers, Harlequins lay eggs on undersides of broad leaves (Java Fern, Amazon Sword). Males and females turn upside down together under leaf, vibrating bodies. Unique breeding behavior!",
      "Most peaceful community fish! Harlequins are 100% peaceful toward all tankmates and never nip fins. Perfect for beginners building first community tank.",
      "Feed small portions 2x daily. Micro-pellets, crushed flakes, baby brine shrimp, daphnia. Small mouths need tiny foods. Varied diet = best colors.",
    ],

    commonMistakes: [
      "Small groups (under 6) = stressed pale fish. Harlequins are highly social schoolers. Groups under 6 = timid fish hiding with faded black wedges. Beginners buy 4-6 and wonder why colors are dull. Buy 8-12+ for confident schools!",
      "Light substrate. White sand/gravel washes out metallic orange completely. Dark substrate creates dramatic contrast—orange glows against darkness. Simple fix = huge improvement.",
      "Sparse planting. Harlequins are plant-dependent. Without dense plants, they hide constantly. Heavily planted tanks = confident, visible fish with natural behavior.",
      "Bright lighting. Intense lighting stresses them and fades colors. Harlequins prefer dim conditions or floating plants diffusing light. Blackwater setups ideal.",
      "Hard water. Harlequins tolerate moderate hardness but thrive in soft acidic water (pH 6.0-7.0, GH 2-8) with tannins. Hard alkaline water fades colors noticeably.",
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
      notes: 'Weekly 25-30% water changes. Harlequin Rasboras prefer soft acidic stable water. Keep nitrates below 10ppm. Low flow—sponge filters ideal. Add Indian Almond leaves for tannins (intensifies colors). Mature planted tanks with biofilm help significantly.',
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
    commonDiseases: ['ich', 'velvet', 'fin-rot', 'internal-parasites'],
    sensitivities: ['Hard alkaline water (fades colors)', 'Bright lighting (stress)', 'Sparse planting (chronic stress)', 'Small groups (social stress)', 'Parameter swings'],
  },

  scientificContext: {
    wildHabitat:
      'Harlequin Rasboras inhabit slow-moving blackwater peat swamps and forest streams in Southeast Asia (Thailand, Malaysia, Singapore, Sumatra). Wild habitat: shallow (20-80cm deep) tea-colored water heavily stained with tannins from decomposing leaves, dense aquatic vegetation and submerged roots, thick leaf litter substrate, soft acidic conditions (GH 2-6, KH 1-3, pH 5.5-6.5), warm temperatures (24-28°C), minimal flow. They occupy mid-water zones among plants, feeding on insects, larvae, zooplankton, and algae.',
    sexualDimorphism:
      'Subtle but distinguishable. Males: Slimmer, more streamlined torpedo-shaped bodies. Narrower black wedge pattern (pointed). Slightly more intense metallic orange coloration. Actively chase females during spawning. Females: Rounder, fuller bodies especially when gravid (carrying eggs). Wider black wedge pattern (more rounded edges). Slightly duller coloration. Noticeably plumper belly. Easy to distinguish in mature groups (6+ months old) when females plump up.',
    variants: ['Standard Harlequin Rasbora (Trigonostigma heteromorpha)', 'Glowlight Rasbora (T. hengeli - different species, often confused)', 'Lambchop Rasbora (T. espei - different species)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger:
      'Harlequin Rasboras breed readily in proper conditions with unique leaf-spawning behavior! Trigger breeding: 1) Mature group (6+ months old, 8+ fish) with plump females, 2) Broad-leaved plants (Java Fern, Amazon Sword, Anubias—mandatory!), 3) Excellent conditioning with live/frozen foods (baby brine shrimp, daphnia, bloodworms, mosquito larvae) for 2 weeks until females noticeably plump, 4) Soft acidic water (GH 2-6, pH 6.0-6.5, temp 26-28°C), 5) Tannin-stained blackwater (Indian Almond leaves). Males chase females through plants, leading them to broad leaves. Pairs flip upside down under leaf undersides, vibrating bodies together.',
    fryCare:
      'Unlike most egg-scatterers, Harlequins lay 30-80 adhesive eggs on undersides of broad leaves (Java Fern, Amazon Sword). Pairs turn upside down under leaves, pressing bodies together while vibrating—female releases eggs, male fertilizes. Eggs stick to leaf undersides. CRITICAL: Adults eat eggs immediately. Remove adults after spawning or use separate breeding tank. Eggs are light-sensitive—keep tank dark (cover with towels). Eggs hatch in 24-36 hours at 26°C. Fry hang on leaves for 3-4 days absorbing yolk sacs. Once free-swimming (day 5), feed infusoria or liquid fry food for 5-7 days, then graduate to baby brine shrimp nauplii. Growth is moderate: 1cm at 6 weeks, 2cm at 10 weeks, mature at 6 months. Fry rearing is challenging—need microscopic foods.',
    notes:
      'Harlequins breed readily in proper conditions but fry rearing is challenging. Main issues: 1) Adults eat eggs immediately (remove or separate), 2) Eggs are light-sensitive (keep dark), 3) Fry need infusoria (prepare cultures beforehand). Unique leaf-spawning behavior is beautiful to watch—pairs flipping upside down under leaves vibrating. For deliberate breeding: separate 10-gallon breeding tank with Java Fern, condition adults heavily, dim lighting, remove after spawning.',
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
