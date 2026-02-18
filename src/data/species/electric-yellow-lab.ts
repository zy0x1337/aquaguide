import type { Species } from '../../types/species';

export const electricYellowLab: Species = {
  id: 'electric-yellow-lab',
  slug: 'electric-yellow-lab',
  imageUrl: '/images/species/electric-yellow-lab.jpg',
  funFact: "Electric Yellow Labs are NEON SUNSHINE in fish form—the BRIGHTEST, most ELECTRIC yellow fish in the aquarium hobby! They're the PEACE-MAKERS of Lake Malawi Mbuna cichlids—shockingly LESS AGGRESSIVE than cousins despite being rock-dwelling 'Mbuna' (rock fish). Watch males perform ELABORATE courtship: vibrating bodies, flaring fins, circling females in mesmerizing displays! Here's the MAGIC: females are MOUTH-BROODERS—they hold 15-40 eggs in their mouths for 3-4 WEEKS, refusing food completely while fry develop! Watching a gravid female with bulging throat pouch swimming protectively is incredible. They're also DIG-MASTERS: both sexes excavate massive spawning pits in sand, moving POUNDS of substrate with their mouths overnight. From Lake Malawi's Lion's Cove rocky shores at 10-20m depth!",

  imageCredit: {
    photographer: 'FilderAquaristik on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/firefish-fisch-malawibuntbarsch-3928534/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  taxonomy: {
    scientificName: 'Labidochromis caeruleus',
    commonName: 'Electric Yellow Lab',
    family: 'Cichlidae',
    origin: "Lake Malawi, Africa (Lion's Cove, Nkhata Bay, Charo Reef - rocky shoreline at 10-20m depth)",
    region: 'Africa',
    biotope: 'Rocky shorelines with scattered boulders on sandy substrate, algae-covered rocks, moderate current, high alkalinity (pH 7.8-8.6), hard water',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 10,
    color: 'STUNNING! NEON ELECTRIC YELLOW body (brightest yellow in freshwater fish) with jet-black dorsal stripe running full length. Black-tipped dorsal and pelvic fins. Males: more intense electric yellow especially during breeding. Females: slightly duller yellow with faint vertical stress bars. Juveniles: pale yellow with black bars that fade with maturity',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 200,
    tempC: { min: 23, max: 28, ideal: 26 },
    ph: { min: 7.8, max: 8.6, ideal: 8.2 },
    gh: { min: 10, max: 20 },
    kh: { min: 8, max: 18 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 100,
      verticalCM: 40,
      territories: 1,
    },
    
    bioloadMultiplier: 1.2,
  },

  habitat: {
    planting: 'none',
    plantingNotes:
      'Electric Yellow Labs come from ROCKY Lake Malawi shores with NO plants! They EXCAVATE constantly, uprooting everything. Traditional plants (stem plants, carpets) are destroyed within days. If plants desired, use ONLY bulletproof species ATTACHED to rocks: Anubias (barteri, nana), Java Fern (tied to rocks with fishing line), Bolbitis. Even these may be shredded. Best practice: SKIP PLANTS entirely and focus on dramatic ROCKSCAPES mimicking Lake Malawi’s rocky shores.',
    hardscape: ['CRITICAL: Malawi limestone rocks (Texas Holey Rock ideal - buffers pH naturally)', 'Stacked rock caves (one per fish minimum)', 'Open sand swimming zones', 'Large smooth boulders (territorial markers)', 'Aragonite or crushed coral sand (buffers pH)', 'NO driftwood (lowers pH - dangerous)'],
  },

  behavior: {
    tags: ['semi-aggressive', 'cichlid', 'colorful', 'active', 'territorial', 'architect'],
    minGroupSize: 6,
    description:
      'Electric Yellow Labs are the FRIENDLIEST Mbuna cichlids—surprisingly PEACEFUL compared to aggressive cousins! They\'re ACTIVE, constantly swimming through rockwork and excavating sand with their mouths. Males establish TERRITORIES around preferred caves, defending them with displays (fin flaring, jaw locking, body vibrations) but RARELY causing serious harm. Females roam freely through territories. They\'re SOCIAL and thrive in groups using "overstocking strategy"—12-15 fish in 200L spreads aggression so no single fish is targeted. Watch the COURTSHIP DANCES: males vibrate bodies intensely, circle females, and lure them into caves for spawning. After spawning, females become MOUTH-BROODERS, holding eggs in mouths for 3-4 WEEKS. They\'re enthusiastic DIGGERS, excavating massive pits overnight, moving pounds of sand.',
    
    compatibility: {
      goodMates: ['Other PEACEFUL Mbuna (Labidochromis perlmutt, Iodotropheus sprengerae)', 'Red Zebra (Maylandia estherae - contrasting colors!)', 'Yellow Tail Acei (Pseudotropheus acei)', 'Synodontis petricola catfish (African synodontis only)', 'Other Labidochromis species'],
      badMates: ['Haplochromines (torn apart by Mbuna)', 'Peacock cichlids (too passive)', 'Tanganyika cichlids (wrong water params)', 'ANY softwater fish (tetras, angelfish, discus - pH too low)', 'Nano fish/shrimp (eaten)', 'Oscars/large aggressive cichlids'],
      notes:
        'Electric Yellow Labs are IDEAL for AFRICAN MBUNA COMMUNITY TANKS with proper planning. They\'re the LEAST AGGRESSIVE Mbuna, perfect for beginners entering African cichlids. CRITICAL: Keep ONLY with other Lake Malawi Mbuna requiring IDENTICAL water (pH 7.8-8.6, hard alkaline). NEVER mix with softwater fish—pH needs are incompatible. Best tankmates: similarly-sized peaceful Mbuna (avoid hyper-aggressive species like Melanochromis auratus). Overstocking strategy: 12-15 Mbuna in 200L+ spreads aggression. Harem ratios: 1 male : 3-4 females per species reduces fighting.',
      
      rules: [
        {
          type: 'requires',
          condition: 'HIGH pH HARD ALKALINE water (pH 7.8-8.6, GH 10-20, KH 8-18)',
          reason: 'CRITICAL: Yellow Labs are Lake Malawi specialists requiring HIGH pH HARD water. pH below 7.5 = chronic stress, disease, death. Use aragonite sand, crushed coral, African cichlid salts, limestone rocks to maintain parameters. This is NON-NEGOTIABLE',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'rockwork with caves (one territory per fish minimum)',
          reason: 'Yellow Labs are territorial and need caves for security and spawning. Without adequate territories, aggression escalates. Provide Texas Holey Rock or stacked limestone creating 6+ caves',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'OVERSTOCKING strategy (12-15 Mbuna in 200L+)',
          reason: 'African Mbuna require OVERSTOCKING to spread aggression (counterintuitive!). Understocked tanks = single fish targeted and killed. Overstocking diffuses aggression across group. Requires STRONG filtration',
          severity: 'high',
        },
        {
          type: 'warning',
          condition: 'LOW protein diet (spirulina-based, avoid mammal meats)',
          reason: 'CRITICAL: High protein diet (bloodworms, beef heart, mammal meats) causes FATAL Malawi Bloat. Feed spirulina flakes, algae wafers, vegetable-based cichlid pellets. Protein max 35%',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'harem ratios (1 male : 3-4 females per species)',
          reason: 'Multiple males of same species fight brutally. Keep 1 male with 3-4 females per species to spread male attention and reduce aggression',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '12-15',
        bottom: '3-6',
      },
    },
    
    aggressionLevel: {
      intraspecific: 5,
      interspecific: 3,
      territorial: 7,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
      maxMalesPerTank: 2,
    },
    
    finNipping: {
      risk: 'low',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'HIGH pH HARD water (pH 7.8-8.6, GH 10-20) - MANDATORY', 
      'Aragonite/crushed coral sand (pH buffer)', 
      'African cichlid salts', 
      'Texas Holey Rock or limestone (buffers pH)', 
      'STRONG filtration (8-10x turnover/hour)', 
      'Weekly water changes (30-50%)', 
      'LOW protein vegetable-based diet',
    ],

    proTips: [
      "HIGH pH HARD WATER = LIFE OR DEATH! Yellow Labs are Lake Malawi specialists needing pH 7.8-8.6 (NOT 7.0!). Use: 1) Aragonite or crushed coral sand (buffers pH naturally), 2) African cichlid salt mix (Seachem Malawi Buffer), 3) Texas Holey Rock limestone (raises pH). Test pH WEEKLY. Below pH 7.5 = stress, disease, death.",
      "MALAWI BLOAT = #1 KILLER (40% deaths!). Caused by HIGH PROTEIN diet (bloodworms, beef, mammal meats). Feed SPIRULINA flakes, algae wafers, vegetable-based pellets, blanched vegetables (zucchini, peas). Protein MAX 35%. Avoid mammal proteins entirely!",
      "OVERSTOCKING STRATEGY (counterintuitive!). African Mbuna REQUIRE overstocking to spread aggression. Stock 12-15 Mbuna in 200L+ tank. Understocked tanks = dominant fish kills subordinates. Overstocking diffuses aggression. REQUIRES strong filtration (canister 8-10x turnover).",
      "HAREM RATIOS reduce fighting. Keep 1 MALE with 3-4 FEMALES per species. Multiple males = brutal fighting, injuries, death. Mixed-species tanks work: 1M:3F Yellow Labs + 1M:3F Red Zebras = 14 fish total.",
      "ROCKWORK = TERRITORIES. Provide Texas Holey Rock or stacked limestone creating 1 cave per fish MINIMUM. Arrange rocks to break line-of-sight (reduces aggression). Secure rocks with aquarium-safe silicone—diggers will topple unstable structures.",
      "Watch the MOUTH-BROODING! Gravid females develop BULGING throat pouches from holding 15-40 eggs. They refuse food for 3-4 WEEKS. Don't panic—this is normal! Fry emerge fully formed at 21-28 days. Isolate fry or adults will eat them.",
      "SAND SUBSTRATE MANDATORY. Yellow Labs DIG extensively, excavating spawning pits and moving pounds of substrate. Gravel injuries their mouths and prevents natural behavior. Use fine aragonite or pool filter sand (1-2mm).",
    ],

    commonMistakes: [
      "Wrong water parameters = #1 failure. 'My Yellow Labs died despite clean water!' YES—because pH was 7.0 instead of 8.2! Lake Malawi cichlids NEED high pH hard water. Softwater kills them slowly. Use aragonite sand and cichlid salts!",
      "High protein diet = Malawi Bloat (40% deaths). Bloodworms, beef heart, high-protein pellets cause FATAL bloating within weeks. Feed spirulina/vegetable-based foods. Protein max 35%. Bloat has NO cure—prevention only.",
      "Understocking. 'I keep 4 Yellow Labs in 200L to avoid aggression.' WRONG! Mbuna REQUIRE overstocking (12-15 fish) to spread aggression. Small groups = dominant fish kills subordinates. Counterintuitive but essential.",
      "Multiple males per species. Two male Yellow Labs = brutal fighting, injuries, death. Keep 1 male : 3-4 females per species ONLY. Males are HIGHLY territorial.",
      "Insufficient rockwork. Without caves, constant fighting occurs. Provide 1 cave per fish minimum using Texas Holey Rock or stacked limestone. Break line-of-sight to reduce aggression.",
      "Gravel substrate. Yellow Labs are enthusiastic DIGGERS. Gravel injuries mouths and prevents spawning pits. Use SAND (aragonite or pool filter sand 1-2mm).",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['spirulina', 'algae-wafers', 'vegetables'],
      supplements: ['zucchini', 'pellets'],
      vegetarian: true,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 40,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Weekly 30-50% water changes MANDATORY. African cichlids produce MASSIVE waste. Keep nitrates below 20ppm. STRONG filtration essential (canister filter 8-10x tank volume turnover). Vacuum sand weekly to remove waste. Test pH weekly—maintain 7.8-8.6 with African cichlid salts and aragonite sand.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 200,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'strong',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 10,
    commonDiseases: ['malawi-bloat', 'ich', 'bacterial-infections', 'columnaris', 'hexamita'],
    sensitivities: ['Low pH (below 7.5 - fatal stress)', 'High protein diet (Malawi Bloat)', 'Poor water quality (nitrates)', 'Ammonia/nitrite spikes', 'Soft water (chronic stress)'],
  },

  scientificContext: {
    wildHabitat:
      'Electric Yellow Labs inhabit rocky shorelines of Lake Malawi, Africa (Lion\'s Cove, Nkhata Bay, Charo Reef) at 10-20m depth. Wild habitat: scattered boulders on sandy substrate with algae-covered rocks. Water is HARD, HIGHLY ALKALINE (pH 7.8-8.6, GH 10-20, KH 8-12), warm (24-28°C), moderate current, extremely stable parameters. They graze "aufwuchs" (algae/biofilm coating rocks) and hunt small invertebrates. Relatively peaceful compared to aggressive Mbuna cousins.',
    sexualDimorphism:
      'MODERATE DIFFICULTY. MALES: More intense ELECTRIC YELLOW coloration especially during breeding. Prominent EGG SPOTS on anal fin (3-7 bright yellow/orange spots). Slightly larger, more elongated body. Territorial and aggressive toward other males. FEMALES: Slightly duller yellow with faint vertical stress bars. ROUNDER, fuller body especially when gravid. NO egg spots or very faint. Less aggressive. Juveniles difficult to sex—wait for maturity (6+ months) and egg spot development.',
    variants: ['Standard Electric Yellow (Lion\'s Cove)', 'Nkhata Bay population', 'Charo Reef strain', 'White (albino) Lab (rare)'],
  },

  breeding: {
    method: 'mouthbrooder',
    difficulty: 'beginner',
    trigger:
      'Electric Yellow Labs are PROLIFIC breeders—among easiest African cichlids! They breed CONSTANTLY in proper conditions. Trigger spawning: 1) Mature group (8+ months old) in harem ratio (1M:3-4F), 2) Proper water params (pH 8.0-8.6, temp 26-28°C, GH 12-18), 3) Adequate territories (caves for each fish), 4) Excellent conditioning with spirulina foods, 5) Large water change (40-50%). Males excavate MASSIVE spawning pits in sand, then perform vibrating courtship displays luring females.',
    fryCare:
      'Females lay 15-40 eggs in male\'s spawning pit. Male fertilizes eggs, female IMMEDIATELY scoops eggs into mouth (mouthbrooding). Male\'s egg spots on anal fin MIMIC EGGS—female tries to pick them up and inhales sperm for fertilization (clever evolution!). Female becomes MOUTH-BROODER, holding eggs/fry for 21-28 DAYS without eating. She develops bulging throat pouch and refuses food. At 3-4 weeks, fully-formed 8mm fry are RELEASED. Fry can free-swim immediately. Female provides NO further care—adults will EAT fry. Remove fry to grow-out tank or provide dense rockwork for hiding. Feed fry crushed spirulina flakes, baby brine shrimp. Growth is MODERATE: 2cm at 8 weeks, mature at 6-8 months.',
    notes:
      'Yellow Labs breed CONSTANTLY in proper setups. Females spawn every 5-7 weeks. Watching mouth-brooding is fascinating—female\'s bulging throat and refusal to eat are normal. Some breeders "strip" eggs from female\'s mouth at 14 days and artificially hatch in tumbler (higher survival but stressful for female). Natural brooding preferred. Fry are EASY to raise—among hardiest cichlid fry.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'malawi-bloat-death', cause: 'high-protein-diet-mammal-meats', frequency: 0.40 },
      { issue: 'chronic-stress-disease-death', cause: 'low-pH-soft-water-below-7.5', frequency: 0.28 },
      { issue: 'aggression-injuries-death', cause: 'insufficient-territories-or-multiple-males', frequency: 0.15 },
      { issue: 'targeted-aggression', cause: 'understocking-not-enough-fish', frequency: 0.10 },
      { issue: 'poor-water-quality', cause: 'inadequate-filtration-high-bioload', frequency: 0.07 },
    ],
    
    estimatedCosts: {
      initial: { min: 250, max: 600, currency: 'EUR' },
      monthly: { min: 25, max: 50, currency: 'EUR' },
    },
  },
};
