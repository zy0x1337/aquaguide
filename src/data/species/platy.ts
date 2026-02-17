import type { Species } from '../../types/species';

export const platy: Species = {
  id: 'platy-001',
  slug: 'platy',
  imageUrl: '/images/species/platy.jpeg',
  funFact: "Platies are COLOR-MORPHING CHAMPIONS selectively bred into HUNDREDS of colors/patterns! Original wild fish were dull olive-gray, but decades of breeding created: MICKEY MOUSE (three black spots forming Mickey's silhouette on tail!), KOI (orange/white/black like koi carp), SUNSET (red/orange/yellow gradient), BLUE CORAL (neon blue), WAGTAIL (black fins with colored body), TUXEDO (half black/half color), PANDA (black/white), NEON (fluorescent colors). They come in EVERY COLOR IMAGINABLE - some morphs unrecognizable from wild ancestors! Here's the fun: they're EFFORTLESS BREEDERS producing 20-50 fry every 4-6 weeks with ZERO effort! Females can STORE SPERM for 6+ months producing multiple broods from single mating. They're the ULTIMATE BEGINNER FISH: peaceful, hardy, colorful, undemanding, breeding-machines. From Mexican spring-fed rivers with hard alkaline water!",

  imageCredit: {
    photographer: 'Marrabbio2 (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Xiphophorus_maculatus_1.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },

  taxonomy: {
    scientificName: 'Xiphophorus maculatus',
    commonName: 'Platy / Southern Platyfish / Moonfish',
    family: 'Poeciliidae',
    origin: 'Central America (Mexico, Guatemala, Honduras - spring-fed rivers and streams)',
    region: 'Central America',
    biotope: 'Spring-fed clear rivers and canals with hard alkaline mineral-rich water, moderate vegetation, gentle current',
  },

  visuals: {
    iconShape: 'plump',
    adultSizeCM: 6,
    color: 'INCREDIBLY VARIABLE! WILD TYPE: Dull olive-gray/brown body with black spots. BRED MORPHS (hundreds!): MICKEY MOUSE (three black spots forming Mickey silhouette on tail base - iconic!), KOI (orange/white/black patches like koi carp), SUNSET (red/orange/yellow gradient), BLUE CORAL (neon blue body), WAGTAIL (black fins with colored body - any color combo!), TUXEDO (half black/half color split), PANDA (black/white), NEON (fluorescent GloFish variants), RED (solid red), GOLD (solid yellow-gold), DALMATIAN (white with black spots). Males slimmer, females rounder/deeper-bodied. Males have GONOPODIUM (modified anal fin)',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 18, max: 28, ideal: 24 },
    ph: { min: 7.0, max: 8.5, ideal: 7.5 },
    gh: { min: 10, max: 30 },
    kh: { min: 5, max: 15 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'middle',
      secondary: 'top',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 1.2,
  },

  habitat: {
    planting: 'moderate',
    plantingNotes:
      'Platies appreciate BALANCED planting: open swimming space center/front (active swimmers!) with MODERATE background/side planting for security and FRY HIDING SPOTS. Best plants: Java Fern, Anubias (hard leaves), Vallisneria (tall background), Amazon Sword (broad leaves), FLOATING PLANTS (Water Sprite, Frogbit - essential for fry survival! babies hide here). Avoid OVER-PLANTING (they need open swimming areas). Dense planting protects fry from adult cannibalism but adults prefer open water. Algae growth on plants/glass = natural grazing food (they love picking algae!).',
    hardscape: ['Smooth river stones (create caves/territories)', 'Minimal driftwood (can lower pH - they prefer alkaline!)', 'Open swimming space center'],
  },

  behavior: {
    tags: ['peaceful', 'active', 'colorful', 'hardy', 'livebearer', 'prolific_breeder'],
    minGroupSize: 6,
    description:
      'Platies are PEACEFUL, ACTIVE, COLORFUL LIVEBEARERS perfect for community tanks! They\'re constantly SWIMMING exploring all levels (middle/top zones), displaying vibrant colors, and interacting socially. Males display to each other (flaring fins, chasing) but rarely fight seriously. They\'re PROLIFIC BREEDERS: females give birth to 20-50 FREE-SWIMMING FRY every 4-6 weeks with ZERO effort! Females can STORE SPERM for 6+ months producing multiple broods from single mating (even pure female groups sometimes have fry!). Adults will EAT their own fry if not separated (natural population control). Watch them constantly grazing algae from glass/plants. They\'re EXTREMELY HARDY: tolerating parameter swings, beginner mistakes, diverse conditions. Peaceful toward all tankmates (one of safest community fish!).',
    
    compatibility: {
      goodMates: ['Almost ALL peaceful community fish (tetras, rasboras, danios)', 'Other livebearers (Mollies, Guppies, Swordtails - can hybridize with Swordtails!)', 'Corydoras', 'Peaceful gouramis', 'Loaches', 'Larger shrimp (Amano - may eat small shrimp)', 'Snails'],
      badMates: ['Aggressive cichlids', 'Large predatory fish', 'Goldfish (incompatible temps/parameters)', 'Bettas (may nip platy fins - usually OK but monitor)'],
      notes:
        'Platies are PERFECT for BEGINNER COMMUNITY TANKS! They\'re among the MOST PEACEFUL fish: compatible with almost everything peaceful. They prefer HARD ALKALINE WATER (like Mollies/Swordtails) but tolerate wide parameter ranges. WARNING: Can HYBRIDIZE with SWORDTAILS (same genus Xiphophorus) producing infertile hybrid offspring with health issues. Safe with LARGER shrimp (Amano) but may eat CHERRY SHRIMP (opportunistic). Adults eat their own fry - provide dense plants or separate fry for survival. Best in GROUPS of 6+ with 1 male : 2-3 females ratio (spreads male harassment).',
      
      rules: [
        {
          type: 'requires',
          condition: '1 male : 2-3 females ratio',
          reason: 'Males constantly chase females for breeding. Single female = harassed to death from stress. Multiple females = harassment spread. Too many males = constant chasing/stress. This ratio prevents female exhaustion',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'hybridization with Swordtails',
          reason: 'Platies and Swordtails are SAME GENUS (Xiphophorus) and readily hybridize producing infertile offspring with health issues (deformed spines, short lifespans). Keep separate for pure breeding',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'fry overpopulation',
          reason: 'Platies are PROLIFIC: 20-50 fry every 4-6 weeks! Without population control, tank overruns with hundreds within months. Natural solution: adults eat most fry (OK!). Only save fry from first 1-2 broods',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: '6-10',
        midwater: '12-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 1,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
      maxMalesPerTank: 5,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'very-low',
    cost: 'low',
    specialRequirements: [
      'Hard alkaline water preferred (GH 10-30+, pH 7.0-8.5)', 
      '1 male : 2-3 females ratio (prevents harassment)', 
      'Moderate planting (fry hiding spots)', 
      'Population control plan (prolific breeders!)',
    ],

    proTips: [
      "HARD WATER preferred (like Mollies)! While Platies tolerate wider ranges than Mollies, they THRIVE in hard alkaline water (GH 10-30+, pH 7.0-8.5) from spring-fed Mexican rivers. In soft acidic water they're more disease-prone. Use crushed coral or Seachem Equilibrium to raise hardness. Test GH/pH before buying.",
      "1 MALE : 2-3 FEMALES ratio prevents harassment! Males constantly chase females for breeding. Single female = stressed to death. Multiple females = harassment spread. Watch behavior - if one female constantly hiding, add more females.",
      "Prepare for FRY EXPLOSION! Platies are EFFORTLESS BREEDERS: 20-50 fry every 4-6 weeks with ZERO effort! Without control, tank overruns within months. Natural solution: Adults eat most fry (this is OK and natural population control!). Only save fry from first 1-2 broods. Don't feel guilty - this is nature.",
      "Feed VEGETABLE MATTER for vibrant colors! Platies are omnivores needing 50-60% PLANT material (algae, spirulina flakes, blanched zucchini/spinach). Vegetable-rich diet = brighter colors, better health, less aggression. Watch them graze algae from glass - adorable!",
      "Hundreds of COLOR MORPHS available! Popular: MICKEY MOUSE (three spots forming Mickey silhouette - iconic!), KOI (orange/white/black), SUNSET (red/orange/yellow), WAGTAIL (black fins + colored body). Mix colors for stunning display! NOTE: Different morphs interbreed creating new unexpected patterns.",
      "Extremely COLD-TOLERANT! Platies thrive 18-28°C (64-82°F) - widest range of common fish! They're perfect for UNHEATED tanks in warm climates or cooler community setups. This flexibility makes them ideal beginners fish.",
    ],

    commonMistakes: [
      "Wrong male:female ratio. Too many males (or 1 male with 1 female) = constant harassment, stressed females. Single female chased to death. 1 male : 2-3 females spreads harassment and prevents female exhaustion.",
      "Soft acidic water. While Platies tolerate wider ranges than Mollies, they PREFER hard alkaline water (GH 10-30+, pH 7.0-8.5). In very soft water (GH under 8) they're more disease-prone (ich, fin rot). Raise hardness for best health.",
      "No population control plan. Platies breed CONSTANTLY: 20-50 fry every 4-6 weeks! Without intervention, tank overruns with hundreds within 6 months. Natural solution: Let adults eat most fry. Only save first 1-2 broods. This is natural.",
      "Ignoring fry in pure female groups. Females can STORE SPERM for 6+ months! Even pure female groups sometimes produce fry months after last male contact. Don't be surprised by 'virgin births' - stored sperm.",
      "Mixing with Swordtails for breeding. Platies and Swordtails readily HYBRIDIZE (same genus) producing infertile offspring with health issues (deformed spines). Keep separate if you want pure breeding lines.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['tropical-flakes', 'spirulina-flakes', 'algae-wafers', 'vegetable-matter'],
      supplements: ['bloodworms', 'brine-shrimp', 'daphnia'],
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
      vacuumingNeeded: true,
      notes: 'Weekly 25% water changes. Platies are EXTREMELY HARDY tolerating parameter swings better than most fish (perfect for beginners!). Keep nitrates under 40ppm. They prefer HARD ALKALINE WATER (GH 10-30+, pH 7.0-8.5) - use crushed coral in filter or Seachem Equilibrium if tap water is soft. Very forgiving of maintenance lapses.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'low',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['ich', 'fin-rot', 'velvet', 'fungal-infections'],
    sensitivities: ['Very soft water (prefer hard!)', 'Ammonia spikes', 'Sudden parameter swings'],
  },

  scientificContext: {
    wildHabitat:
      'Xiphophorus maculatus inhabits SPRING-FED CLEAR RIVERS and canals in Central America (Mexico - Rio Panuco/Rio Coatzacoalcos basins, Guatemala, Honduras). Wild habitat: shallow (20-100cm) clear spring-fed streams with HARD ALKALINE MINERAL-RICH WATER (GH 15-25+, pH 7.5-8.2), moderate aquatic vegetation, gentle to moderate current, sandy/gravel substrate, warm temps (20-26°C). They graze ALGAE from rocks/plants and feed on aquatic insects, zooplankton. Wild fish are dull olive-gray with black spots (unrecognizable from colorful aquarium morphs!).',
    sexualDimorphism:
      'EASY TO SEX. MALES: Slimmer, more streamlined bodies. GONOPODIUM (modified anal fin - long pointed tube for internal fertilization). Brighter colors, especially in breeding condition. Slightly smaller overall. FEMALES: Fuller, rounder, MUCH DEEPER-BODIED especially when gravid (carrying developing fry - belly hugely swollen, dark gravid spot near vent visible through skin). Normal fan-shaped anal fin. Larger overall size. Juveniles (under 8 weeks) difficult to sex - wait for gonopodium development at 3-4 months.',
    variants: ['MICKEY MOUSE (three black spots forming Mickey silhouette!)', 'KOI (orange/white/black)', 'SUNSET (red/orange/yellow gradient)', 'BLUE CORAL (neon blue)', 'WAGTAIL (black fins + colored body)', 'TUXEDO (half black/half color)', 'PANDA (black/white)', 'NEON/GLOFISH (fluorescent)', 'Hundreds more!'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger:
      'Platies are EFFORTLESS BREEDERS requiring NO SPECIAL CONDITIONS! They breed continuously in any tank with males and females present (hardest fish to PREVENT breeding!). Natural triggers: 1) Presence of males (gonopodium for internal fertilization), 2) Warm temps (24-26°C speeds gestation), 3) Good feeding (especially vegetable matter). Females can STORE SPERM for 6+ MONTHS producing multiple broods from single mating! Gestation: 24-30 days (faster in warmer water).',
    fryCare:
      'Platies are LIVEBEARERS giving birth to FREE-SWIMMING FRY (20-50 per brood every 4-6 weeks!). Watch gravid females: hugely swollen bellies, dark gravid spot, hiding behavior before birth. Birth occurs over hours - female releases fry one-by-one. CRITICAL: Adults (including mother!) EAT THEIR OWN FRY immediately! For fry survival: 1) Provide DENSE PLANTS especially FLOATING PLANTS (Java Moss, Water Sprite, Frogbit - fry hide here), 2) Separate gravid female to BREEDER BOX 1-2 days before birth (return mother after), 3) Raise fry in separate tank. Fry are LARGE at birth (5-7mm) and accept CRUSHED FLAKES immediately (no special foods needed!). Feed 2-3x daily. Growth is FAST: 1.5cm at 6 weeks, 3cm at 3 months, sexually mature at 4 months. Separate sexes at 3 months to prevent juvenile breeding.',
    notes:
      'Platy breeding is TOO EASY (main challenge: POPULATION CONTROL!). Females produce 20-50 fry every 4-6 weeks continuously. Without intervention, tank overruns with hundreds within 6 months. Natural solution: Adults eat most fry (this is NATURAL population control - don\'t feel guilty!). Only save fry from first 1-2 broods. WARNING: Platies readily HYBRIDIZE with SWORDTAILS (same genus Xiphophorus) producing infertile hybrids with health issues. Also: Different platy color morphs interbreed creating unexpected new patterns (can be fun or mess up breeding lines!).',
  },
  
  experienceData: {
    successRate: 0.90,
    survivalRate: 0.85,
    
    commonFailures: [
      { issue: 'female-harassment-stress', cause: 'wrong-male-female-ratio-too-many-males', frequency: 0.30 },
      { issue: 'fry-overpopulation-crisis', cause: 'no-population-control-plan', frequency: 0.25 },
      { issue: 'ich-outbreak', cause: 'soft-water-or-parameter-swings', frequency: 0.20 },
      { issue: 'hybrid-offspring', cause: 'breeding-with-swordtails-same-genus', frequency: 0.15 },
      { issue: 'female-exhaustion', cause: 'single-female-constant-breeding', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};
