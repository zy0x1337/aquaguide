import type { Species } from '../../types/species';

export const rosyBarb: Species = {
  id: 'species-rosy-barb',
  slug: 'rosy-barb',
  imageUrl: '/images/species/rosy-barb.jpg',
  funFact:
    "Rosy Barbs are COLD-TOLERANT CHAMPIONS thriving in 18-26°C - one of the FEW tropical-looking fish perfect for UNHEATED AQUARIUMS! They're from subtropical Himalayan foothills (India/Nepal) with seasonal cool temps. Here's the catch: they're NOTORIOUS FIN NIPPERS when kept in small groups (under 8 fish) or with slow/long-finned tankmates! In groups under 6 they become AGGRESSIVE bullies chasing/nipping constantly. But in LARGE SCHOOLS (8-12+) they're peaceful community fish focusing on each other! Watch males display SPECTACULAR ROSY-RED BREEDING COLORS (like glowing rubies!) competing for females. They're ACTIVE SCHOOLING SWIMMERS needing 120L+ tanks for horizontal swimming space. EGG SCATTERERS spawning at dawn (4-7am) with males chasing females in courtship dances! They're POWERFUL JUMPERS - secure lid mandatory! From flowing Himalayan streams!",

  imageCredit: {
    photographer: 'Andreas Hartl on Pixabay',
    sourceUrl: 'https://pixabay.com/photos/rosy-barb-fish-aquarium-freshwater-5405584/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/',
  },

  taxonomy: {
    scientificName: 'Pethia conchonius',
    commonName: 'Rosy Barb / Red Barb',
    family: 'Cyprinidae',
    origin: 'South Asia (Northern India, Nepal, Bangladesh, Pakistan - Himalayan foothills - flowing streams)',
    region: 'Asia',
    biotope: 'Gently flowing clear streams and well-vegetated ponds/pools in subtropical Himalayan foothills with seasonal cool temps, moderate current, gravel substrate',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 10,
    color: 'SEXUALLY DIMORPHIC! MALES: Base silver-pink body transforming to SPECTACULAR ROSY-RED to DEEP CRIMSON during breeding (like glowing rubies!) especially head/belly area. Black spot/marking on dorsal fin base. Fins develop red-orange tinting. Slimmer torpedo-shaped profile. FEMALES: Silver-gold body with minimal red coloration, rounder/deeper-bodied especially when gravid (carrying eggs - belly hugely swollen). Both sexes have dark-edged scales creating subtle reticulated pattern. Juveniles pale silver. Variants: Neon Rosy (enhanced colors), Longfin Rosy (extended fins), Gold Rosy (xanthic yellow)',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 120,
    tempC: { min: 18, max: 26, ideal: 22 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 19 },
    kh: { min: 4, max: 12 },
    flow: 'moderate',
    substrate: 'gravel',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 120,
      verticalCM: 40,
      territories: 0,
    },
    
    bioloadMultiplier: 1.5,
  },

  habitat: {
    planting: 'medium',
    plantingNotes:
      'Rosy Barbs appreciate BALANCED planting: OPEN SWIMMING SPACE center (they\'re ACTIVE horizontal swimmers needing 80-100cm clear runs!), with MODERATE background/side vegetation for security. Best plants: Hardy species (Vallisneria, Amazon Sword, Anubias - they may nibble soft plants!), FLOATING PLANTS (Salvinia, Frogbit - create dappled shade mimicking stream canopy). Avoid DELICATE PLANTS (they may uproot/nibble). Provide OPEN horizontal swimming lanes center/front - this is critical for schooling behavior and prevents boredom (bored barbs = aggressive fin nippers!).',
    hardscape: ['Rounded smooth river stones (creates natural stream look)', 'Driftwood roots/branches (territorial markers, mimics fallen logs)', 'Background plants (security)', 'NO SHARP EDGES (active swimmers!)'],
  },

  behavior: {
    tags: ['active', 'schooler', 'semi-aggressive', 'fin_nipper', 'colorful'],
    minGroupSize: 8,
    description:
      'Rosy Barbs are EXTREMELY ACTIVE SCHOOLING FISH displaying dynamic behaviors! They\'re CONSTANT SWIMMERS cruising horizontally in tight coordinated groups exploring every level. Watch males display SPECTACULAR ROSY-RED BREEDING COLORS competing for females with fin flaring, body tilting, chasing displays (like underwater courtship dances!). They\'re SOCIAL establishing hierarchies within schools. CRITICAL: They\'re NOTORIOUS FIN NIPPERS when kept in SMALL GROUPS (under 8) or understimulated! In groups under 6 they become AGGRESSIVE bullies chasing/nipping constantly. But in LARGE SCHOOLS (8-12+) aggression distributes across group and they\'re peaceful community fish! They\'re POWERFUL JUMPERS (can leap 15-20cm!) - secure lid MANDATORY. Active foragers constantly picking at substrate/plants searching for food.',
    
    compatibility: {
      goodMates: ['FAST-MOVING fish (Zebra Danios, Giant Danios - match their speed!)', 'Corydoras (bottom level - safe)', 'Loaches (Yoyo, Clown - bottom dwellers)', 'Rainbowfish (fast active schoolers)', 'Fast tetras in large groups (Congo, Serpae)', 'Other barbs (Cherry Barbs, Odessa Barbs)', 'Plecos (armored)'],
      badMates: ['Angelfish (slow + long fins = nipped!)', 'Guppies (long fins = targets!)', 'Bettas (long fins = shredded!)', 'Long-finned Gouramis (Pearl, Dwarf - fins nipped)', 'Slow-moving fish', 'Peaceful shy species'],
      notes:
        'Rosy Barbs are CHALLENGING for community tanks due to FIN NIPPING! They\'re NOT inherently aggressive - nipping is BOREDOM/UNDERSTIMULATION behavior from: 1) SMALL GROUPS (under 8 fish), 2) SMALL TANKS (under 120L), 3) SLOW/LONG-FINNED TANKMATES. CRITICAL: Keep LARGE SCHOOLS (8-12+) in SPACIOUS TANKS (120L+) with FAST-MOVING TANKMATES ONLY! Nipping distributes across school members and they focus on each other vs tankmates. Perfect with other fast active fish matching their energy. AVOID all long-finned slow fish (Angelfish, Guppies, Bettas, Gouramis). Best in species-only tanks or with robust fast swimmers.',
      
      rules: [
        {
          type: 'requires',
          condition: 'LARGE SCHOOLS 8-12+ fish',
          reason: 'CRITICAL FIN NIPPING PREVENTION: Rosy Barbs are notorious fin nippers when kept in SMALL GROUPS (under 8). In groups under 6 they become aggressive bullies. Large schools (8-12+) = aggression distributes across group, natural social behavior, peaceful community fish. This is NON-NEGOTIABLE for community tanks',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'slow-moving or long-finned fish',
          reason: 'Rosy Barbs are ACTIVE SWIMMERS and will relentlessly FIN NIP slow/long-finned tankmates (Angelfish, Guppies, Bettas, Pearl Gouramis). Even large schools still nip slow fish. Keep ONLY with fast-moving robust species matching their energy',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'SPACIOUS TANKS 120L+ with open swimming space',
          reason: 'Rosy Barbs are ACTIVE HORIZONTAL SWIMMERS needing 80-100cm clear swimming runs. Small tanks (under 120L) = understimulation, boredom, aggressive fin nipping. Large tanks with open space = natural schooling behavior, reduced aggression',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'SECURE LID with no gaps',
          reason: 'Rosy Barbs are POWERFUL JUMPERS capable of leaping 15-20cm from water surface! Many escape through small gaps or open-top tanks and die from dehydration. Secure fitted lid mandatory',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 6-12,
        midwater: '12-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 4,
      interspecific: 6,
      territorial: 2,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
      maxMalesPerTank: 6,
    },
    
    finNipping: {
      risk: 'high',
      targets: ['slow-moving fish', 'long-finned fish (Angelfish, Guppies, Bettas, Gouramis)', 'peaceful shy species', 'tankmates in small groups under 8'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'LARGE SCHOOLS 8-12+ fish (fin nipping prevention!)', 
      'SPACIOUS TANK 120L+ with open swimming space', 
      'FAST-MOVING TANKMATES ONLY (no slow/long-finned fish!)', 
      'SECURE LID (powerful jumpers!)', 
      'Moderate flow (stream habitat)', 
      'UNHEATED option possible (18-26°C tolerance)',
    ],

    proTips: [
      "LARGE SCHOOLS = PEACEFUL BARBS! The #1 SECRET to preventing FIN NIPPING: keep LARGE SCHOOLS (8-12+ fish)! In groups under 6, Rosy Barbs become aggressive bullies chasing/nipping constantly. Large schools = aggression distributes across members, natural social hierarchy, peaceful community behavior. They focus on each other vs tankmates. This transforms them from 'problem fish' to peaceful schoolers. Budget: Plan for 8+ minimum.",
      "COLD-TOLERANT = UNHEATED OPTION! Rosy Barbs are from subtropical Himalayan foothills and THRIVE 18-26°C - one of the FEW tropical-looking fish perfect for UNHEATED AQUARIUMS! If room temperature stays 18-22°C year-round (common indoors), NO HEATER needed! This saves electricity and simplifies setup. They actually prefer COOLER temps (22-24°C) over warm (26°C+) - extends lifespan and enhances colors.",
      "AVOID slow/long-finned tankmates! Even in large schools, Rosy Barbs will FIN NIP slow/long-finned fish (Angelfish, Guppies, Bettas, Pearl Gouramis). Keep ONLY with FAST-MOVING robust species matching their energy: Danios, fast tetras (Congo), Rainbowfish, other barbs, Corydoras (bottom level). This is NON-NEGOTIABLE.",
      "Provide OPEN SWIMMING SPACE! Rosy Barbs are ACTIVE HORIZONTAL SWIMMERS needing 80-100cm clear swimming runs center tank. Without open space they become understimulated/bored = aggressive fin nipping. Avoid over-planting - keep center/front open with moderate background vegetation.",
      "SECURE LID mandatory! Rosy Barbs are POWERFUL JUMPERS (15-20cm leaps!) especially when startled or chasing during spawning. Many escape through small gaps or open-top tanks dying from dehydration. Use tight-fitting glass/acrylic lid with NO GAPS. Check lid security regularly.",
      "Feed VARIED DIET for spectacular colors! Males develop ELECTRIC ROSY-RED breeding colors (like glowing rubies!) with quality diet. Best: high-quality flakes/micro-pellets (daily staple), frozen bloodworms/daphnia/brine shrimp (2-3x weekly - color enhancers!), spirulina/vegetable matter (balance). Varied diet = intense breeding colors in males.",
      "Breeding is EASY! Rosy Barbs are prolific EGG SCATTERERS spawning at DAWN (4-7am). Condition pair with high-protein foods, separate to breeding tank with spawning mops/plants, watch males chase females in courtship. Remove adults after spawning (they eat eggs!). Eggs hatch 1-2 days. Easy beginner breeder.",
    ],

    commonMistakes: [
      "Small groups (under 8 fish). #1 CAUSE OF FIN NIPPING! 70% of 'aggressive Rosy Barb' complaints come from keeping groups under 6 fish. In small groups they become territorial bullies chasing/nipping constantly. Large schools (8-12+) = aggression distributes, peaceful behavior. This is critical.",
      "Housing with slow/long-finned fish. Even in large schools, Rosy Barbs relentlessly FIN NIP slow targets (Angelfish, Guppies, Bettas, Gouramis). 'They were fine for 2 weeks then started nipping' is common. ONLY keep with fast-moving robust species. This is non-negotiable.",
      "Small tanks (under 120L). Rosy Barbs are ACTIVE SWIMMERS needing horizontal swimming space. In tanks under 120L they become understimulated/bored = aggressive nipping behavior. 120L+ with open swimming runs = natural behavior, reduced aggression.",
      "No secure lid. Rosy Barbs are powerful jumpers (15-20cm leaps!). Many die from escaping through gaps or open-top tanks. Always use tight-fitting lid with NO GAPS. This is mandatory.",
      "Too warm water (over 26°C). Despite being 'tropical fish', Rosy Barbs are from SUBTROPICAL foothills and prefer COOLER temps (22-24°C). Keeping at 28°C+ = shortened lifespans, reduced colors, increased aggression. They thrive cooler than most tropicals.",
      "Over-planting tank. Rosy Barbs need OPEN SWIMMING SPACE center tank (80-100cm clear runs). Heavy planting throughout = understimulation, boredom, aggression. Keep planting moderate with open center.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'spirulina'],
      supplements: ['bloodworms', 'daphnia', 'brine-shrimp', 'vegetables'],
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
      notes: 'Weekly 30% water changes. Rosy Barbs are HARDY tolerating wide parameter ranges (perfect beginners!). They prefer CLEAN OXYGENATED WATER with moderate flow (mimicking flowing streams). Keep nitrates under 40ppm. They thrive in COOLER temps (22-24°C) - unheated option if room temp stable 18-22°C year-round. Moderate flow from filter output essential (they\'re from flowing streams). Very forgiving maintenance.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'hang-on-back',
        flowRate: 'moderate',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['ich', 'fin-rot', 'bacterial-infections', 'velvet'],
    sensitivities: ['Ammonia', 'Poor oxygenation', 'Overfeeding', 'High temps (over 26°C shortens lifespan)'],
  },

  scientificContext: {
    wildHabitat:
      'Pethia conchonius inhabits FLOWING CLEAR STREAMS and well-vegetated pools/ponds in SUBTROPICAL HIMALAYAN FOOTHILLS (Northern India, Nepal, Bangladesh, Pakistan). Wild habitat: shallow to moderate depth (20-100cm) streams with MODERATE TO STRONG CURRENT, clear oxygenated water, gravel/rocky substrate, dense marginal vegetation, COOLER SEASONAL TEMPS (15-25°C depending on season - subtropical climate with cool winters!). They\'re active swimmers foraging in current for aquatic insects, small crustaceans, algae, plant matter. They tolerate WIDE TEMPERATURE RANGE (15-28°C) from seasonal variation.',
    sexualDimorphism:
      'EASY TO SEX (especially breeding season). MALES: Slimmer torpedo-shaped bodies, SPECTACULAR ROSY-RED to DEEP CRIMSON coloration especially during breeding (head, belly, fins glow like rubies!), black spot/marking on dorsal fin base, more intense overall colors. FEMALES: Rounder, deeper-bodied especially when gravid (carrying eggs - belly hugely swollen), SILVER-GOLD coloration with minimal red, fuller profile, duller colors. Breeding colors in males INTENSIFY dramatically during spawning (like transformation!). Juveniles (under 3 months) difficult to sex - wait for color development.',
    variants: ['Rosy Barb (wild-type)', 'Neon Rosy Barb (enhanced colors - line-bred)', 'Longfin Rosy Barb (extended fins)', 'Gold Rosy Barb (xanthic yellow morph)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger:
      'Rosy Barb breeding is EFFORTLESS! They breed readily with minimal intervention. Triggers: 1) SEPARATE sexes for 1-2 weeks conditioning with HIGH-PROTEIN FOODS (frozen bloodworms, brine shrimp, daphnia) until females plump with eggs, 2) Set up BREEDING TANK (40-60L) with spawning mops or fine-leaved plants (Hornwort, Java Moss - egg catchers!), marbles/coarse gravel substrate (eggs fall through protecting from adults), gentle sponge filter, 3) Increase temp SLIGHTLY to 24-26°C (optional - speeds spawning), 4) Introduce conditioned pair or trio (1 male, 2 females) EVENING before spawning.',
    fryCare:
      'Spawning occurs at DAWN (4-7am) with spectacular courtship: males chase females intensely, nudging head/belly, displaying rosy-red colors, driving females toward spawning plants. Females scatter 100-300 ADHESIVE EGGS among plants (males fertilize immediately). Spawning lasts several hours. CRITICAL: Rosy Barbs are NOTORIOUS EGG EATERS! Remove adults IMMEDIATELY after spawning or they consume all eggs. Eggs hatch in 1-2 days at 24°C. Fry free-swimming day 5-6. Feed INFUSORIA or liquid fry food first week, then BABY BRINE SHRIMP. Growth FAST: 1cm at 4 weeks, 2.5cm at 8 weeks, mature 4-6 months. Easy beginner breeder!',
    notes:
      'Rosy Barb breeding is among EASIEST for egg scatterers! Main challenge: PREVENTING EGG EATING (remove adults immediately!). Use marbles/coarse gravel substrate so eggs fall through out of reach. Or use spawning mops. Many hobbyists breed accidentally in community tanks (fry survive in dense plants). For deliberate breeding: separate conditioning is key. First spawns may be small (50-100 eggs) - subsequent spawns larger (200-300+). Parents show NO parental care.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'fin-nipping-aggression', cause: 'small-groups-under-8-fish-or-slow-long-finned-tankmates', frequency: 0.70 },
      { issue: 'jumping-escape-death', cause: 'no-secure-lid-or-gaps-in-cover', frequency: 0.15 },
      { issue: 'understimulation-boredom', cause: 'small-tank-under-120l-or-no-swimming-space', frequency: 0.08 },
      { issue: 'stress-from-warm-water', cause: 'keeping-over-26c-subtropical-species', frequency: 0.05 },
      { issue: 'ich-outbreak', cause: 'temperature-swings-or-poor-water-quality', frequency: 0.02 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 180, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
