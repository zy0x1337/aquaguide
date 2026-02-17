import type { Species } from '../../types/species';

export const melanotaeniaLacustris: Species = {
  id: 'rainbowfish-001',
  slug: 'lake-kutubu-rainbowfish',
  imageUrl: '/images/species/lake-kutubu-rainbowfish.jpg',
  funFact: "Lake Kutubu Rainbowfish are ENDANGERED SPECIES (IUCN Red List!) endemic to a SINGLE LAKE in remote Papua New Guinea highlands! They're one of only 14 fish species in pristine Lake Kutubu - 10 are found NOWHERE ELSE on Earth! They have UNIQUE COLOR-CHANGING ABILITY rapidly shifting patterns in SECONDS throughout the day (unlike other rainbowfish!). Wild habitat has EXTREME ALKALINE WATER (pH 8.5-9.0 - among highest natural fish habitats!) from underground limestone springs. The lake experiences mysterious 'TURNING OF THE WATER' every 2 years - massive dark oxygen-depleted water upwellings from lake bottom causing mass fish deaths! Conservation threats: invasive Tilapia, oil drilling (Kutubu Oil Project), overfishing for aquarium trade. By keeping captive-bred fish, you help preserve this species! From Papua New Guinea Southern Highlands!",

  imageCredit: {
    photographer: 'Klaus Rudloff (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Melanotaenia_lacustris.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },

  taxonomy: {
    scientificName: 'Melanotaenia lacustris',
    commonName: 'Lake Kutubu Rainbowfish / Turquoise Rainbowfish / Blue Rainbowfish',
    family: 'Melanotaeniidae',
    origin: 'Papua New Guinea (ENDEMIC to Lake Kutubu + outlet Soro River only - nowhere else!)',
    region: 'Oceania',
    biotope: 'Clear still to slow-moving lake waters with heavy aquatic vegetation, submerged roots/logs, EXTREME ALKALINE water (pH 8.5-9.0 from limestone!)',
  },

  visuals: {
    iconShape: 'torpedo',
    adultSizeCM: 12,
    color: 'STUNNING ELECTRIC TURQUOISE-BLUE BRILLIANCE! Adults display IRIDESCENT TURQUOISE-BLUE bodies (metallic sheen like neon!), darker blue horizontal stripe along midline, silvery-blue flanks with intricate scale patterns creating shimmering effect. Fins have BLUE-TURQUOISE TINGE with BLACK EDGES (especially visible during spawning!). Males MORE VIBRANT: Deeper bodies, ORANGE BREEDING STRIPE on forehead (distinctive marking during displays!), more intense turquoise, pointed dorsal/anal fins. Females DULLER: Less blue intensity, rounder fuller bodies. UNIQUE: Unlike other rainbowfish, M. lacustris can RAPIDLY CHANGE COLORS in SECONDS displaying many different patterns throughout day (stress/excitement/display related!). WARNING: Juveniles are BLAND silver-grey - brilliant blue emerges ONLY with maturity (8-12 months) and proper conditions! Don\'t judge in stores',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 200,
    tempC: { min: 22, max: 26, ideal: 24 },
    ph: { min: 7.0, max: 8.5, ideal: 7.8 },
    gh: { min: 10, max: 25 },
    kh: { min: 8, max: 20 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'middle',
      secondary: 'top',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 150,
      verticalCM: 50,
      territories: 0,
    },
    
    bioloadMultiplier: 1.5,
  },

  habitat: {
    planting: 'heavy',
    plantingNotes:
      'Lake Kutubu Rainbowfish need HEAVY SIDE/BACKGROUND PLANTING with OPEN SWIMMING CORRIDORS - they\'re EXTREMELY ACTIVE SWIMMERS needing horizontal space! Best setup: DENSE PLANTING on sides/back (Vallisneria, Amazon Swords, Anubias - creates security and retreats), WIDE OPEN CENTER (150cm+ horizontal swimming runs - critical!), floating plants optional. They need HARD ALKALINE WATER - choose plants tolerating high pH/GH (Vallisneria, Anubias, Java Fern, Crinum). CRITICAL: Females in breeding condition COMPULSIVELY NIBBLE ALGAE - leave back glass uncleaned for natural grazing or provide algae wafers! They\'re from CLEAR WATER and appreciate pristine conditions with strong lighting showing their colors.',
    hardscape: ['Smooth driftwood branches (submerged logs - wild habitat replication)', 'Smooth river stones', 'OPEN SWIMMING SPACE center (MANDATORY - 150cm+ runs!)', 'NO sharp edges (active swimmers)', 'Clear water essential (Lake Kutubu is crystal clear!)'],
  },

  behavior: {
    tags: ['active', 'peaceful', 'schooling', 'jumper', 'endangered', 'diurnal'],
    minGroupSize: 6,
    description:
      'Lake Kutubu Rainbowfish are EXTREMELY ACTIVE ATHLETIC SWIMMERS with endless energy! They\'re CREPUSCULAR - most active at DAWN/DUSK (feed during these times!). Watch males constantly perform NON-AGGRESSIVE DISPLAY RITUALS: flaring fins, intensifying colors (brilliant turquoise + orange forehead stripe!), circling each other, body shimmering. They\'re PEACEFUL but BOISTEROUS - their constant activity/energy can intimidate shy species! They\'re SCHOOLING FISH swimming in loose coordinated groups across midwater. They\'re EXCELLENT JUMPERS - secure lid mandatory! Watch their UNIQUE COLOR-CHANGING ability - patterns shift in seconds during excitement/displays. They occupy middle to upper water column retreating to plants when startled.',
    
    compatibility: {
      goodMates: ['OTHER RAINBOWFISH (mixed species schools!)', 'Larger peaceful tetras (Congo, Bleeding Heart)', 'Corydoras (bottom level different)', 'Plecos (Bristlenose, Clown)', 'Peaceful barbs (Rosy, Cherry)', 'Larger rasboras', 'Peaceful gouramis (Pearl)', 'Active community fish matching energy'],
      badMates: ['Slow/shy fish (Bettas, Honey Gouramis - stressed by activity)', 'Long-finned fish (may nip)', 'Fin nippers', 'Aggressive cichlids', 'Very small fish (may eat fry-sized)', 'Goldfish (incompatible temps/parameters)'],
      notes:
        'Lake Kutubu Rainbowfish are PEACEFUL but ENERGETIC community fish best for ACTIVE TANKS! They\'re COMPLETELY NON-AGGRESSIVE never attacking tankmates, but their CONSTANT BOISTEROUS ACTIVITY stresses shy/slow species (Bettas, shy gouramis, slow tetras). Best with OTHER ACTIVE FISH matching their energy. CRITICAL: Males can RELENTLESSLY HARASS FEMALES in small groups (constant chasing for breeding)! Keep EQUAL MALE:FEMALE RATIOS in groups 6-10+ to distribute harassment. They mix well with OTHER RAINBOWFISH species creating spectacular mixed schools. Need 150cm+ tank length for proper swimming space.',
      
      rules: [
        {
          type: 'requires',
          condition: 'LARGE TANK with 150cm+ horizontal length',
          reason: 'Lake Kutubu Rainbowfish are EXTREMELY ACTIVE SWIMMERS needing massive horizontal swimming space! In tanks under 150cm length they become understimulated, bored, stressed, aggressive. They evolved in vast Lake Kutubu and need room to sprint. 200L+ tank with 150cm+ length is mandatory for proper behavior',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'TIGHT-FITTING LID with NO GAPS',
          reason: 'They are EXCELLENT JUMPERS clearing 30cm+ from surface! Any gap in lid = certain escape and death. Jumping occurs when startled, during courtship displays, or spontaneously. Secure tight-fitting lid mandatory at all times',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'HARD ALKALINE WATER (pH 7.0-8.5, GH 10-25+)',
          reason: 'CRITICAL: They\'re from Lake Kutubu with EXTREME ALKALINE WATER (pH 8.5-9.0 wild from limestone geology!). They NEED hard alkaline water for health. In soft acidic water: poor colors, stress, shortened lifespans. Use crushed coral or Seachem Equilibrium if tap water soft',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'keeping small groups or unequal sex ratios',
          reason: 'Males RELENTLESSLY HARASS females for breeding! In small groups or male-heavy ratios: females become exhausted/stressed from constant chasing. Keep groups 6-10+ with EQUAL male:female ratios distributing harassment. This is critical for female welfare',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'mixing with slow/shy tankmates',
          reason: 'Their CONSTANT BOISTEROUS ACTIVITY stresses slow/shy species! In tanks with Bettas, shy gouramis, or peaceful slow fish: those fish hide constantly, refuse food, become stressed. Only mix with active robust tankmates matching energy',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: '10-15',
        midwater: '15-25',
        bottom: '8-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 1,
      territorial: 2,
    },
    
    activity: {
      level: 'very-high',
      peakTimes: ['dawn', 'dusk'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'schooling',
      maxMalesPerTank: 10,
    },
    
    finNipping: {
      risk: 'low',
      targets: ['long-finned slow fish (occasional nipping during boisterous activity)'],
    },
  },

  care: {
    difficulty: 'intermediate',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'LARGE TANK (200L+, 150cm+ length) - active swimmers', 
      'TIGHT-FITTING LID (excellent jumpers!)', 
      'HARD ALKALINE WATER (pH 7.0-8.5, GH 10-25+)', 
      'Equal male:female ratios in groups 6-10+', 
      'Active tankmates matching energy', 
      'CAPTIVE-BRED stock (wild populations endangered!)', 
      'Pristine water quality (clear water species)',
    ],

    proTips: [
      "BUY CAPTIVE-BRED ONLY - conservation responsibility! Lake Kutubu Rainbowfish are ENDANGERED (IUCN Red List!) - wild populations threatened by invasive Tilapia, oil drilling, and overfishing. They're endemic to SINGLE LAKE in Papua New Guinea found nowhere else! By buying CAPTIVE-BRED fish, you SUPPORT CONSERVATION reducing pressure on wild populations. Ask stores for captive-bred stock. Responsible hobbyists are this species' best hope!",
      "DON'T JUDGE JUVENILES in stores! Young fish are BLAND SILVER-GREY and completely unimpressive. Their BRILLIANT ELECTRIC TURQUOISE-BLUE coloration emerges ONLY with maturity (8-12 months) and proper conditions (hard alkaline water, quality diet, stress-free environment). Buy young knowing colors develop later. This is THE most common complaint - 'my rainbowfish aren't colorful!' Give them time!",
      "CREPUSCULAR FEEDING - dawn/dusk optimal! They're MOST ACTIVE at dawn and dusk (natural behavior). Feed during these times for: best feeding response, maximum color display (males intensify during feeding competition!), natural circadian rhythm. Morning + evening feedings ideal.",
      "HARD ALKALINE WATER essential! Wild Lake Kutubu has EXTREME pH 8.5-9.0 (among highest natural fish habitats!) from underground limestone springs. Replicate: pH 7.5-8.5, GH 12-25+. Use: crushed coral in filter, Seachem Equilibrium, limestone rocks. In soft acidic water: pale colors, stress, disease. Hard water = brilliant turquoise!",
      "150cm+ TANK LENGTH mandatory! They're EXTREMELY ACTIVE SWIMMERS from vast Lake Kutubu (60 square kilometers!) needing horizontal swimming runs. In tanks under 150cm: understimulation, boredom, aggression toward tankmates. 200L+ tank with 150cm+ length = proper behavior, full color displays, healthy activity.",
      "MIXED RAINBOWFISH SCHOOLS spectacular! They school peacefully with OTHER Melanotaenia species creating multi-colored displays (mix with Boesemani, Praecox, etc.). Different species schools together naturally. 15-20 mixed rainbowfish in 300L+ tank = stunning living artwork!",
      "STRICT QUARANTINE - Mycobacteriosis risk! Rainbowfish (especially wild-caught or stressed) are susceptible to FISH TB (Mycobacteriosis - incurable, contagious, zoonotic!). QUARANTINE new arrivals 4-6 weeks observing for: weight loss, lethargy, spinal deformities, skin lesions. This disease is serious - prevention critical.",
    ],

    commonMistakes: [
      "Tank under 150cm length. BIGGEST MISTAKE! They're EXTREMELY ACTIVE SWIMMERS needing massive horizontal space. In tanks under 150cm they become: understimulated, bored, stressed, aggressive toward tankmates, poor coloration. They evolved in 60-square-kilometer lake! Need 200L+ tank with 150cm+ length minimum.",
      "Small groups (2-3 fish). Rainbowfish are SCHOOLING SPECIES thriving in groups 6-10+! Small groups = stress, hiding, poor colors, female harassment. Bigger groups = confident behavior, tight schooling, brilliant displays, harassment distributed.",
      "Mixing with slow/shy fish. Their CONSTANT BOISTEROUS ACTIVITY stresses Bettas, shy gouramis, peaceful slow fish. Those fish hide constantly, refuse food, develop stress illnesses. Only mix with active robust tankmates.",
      "Soft acidic water. They're from EXTREME ALKALINE habitat (pH 8.5-9.0 wild!) and NEED hard alkaline water! In soft water (pH under 7.0, GH under 10): pale colors, lethargy, stress, shortened lifespans. Raise hardness for health.",
      "No secure lid. They're EXCELLENT JUMPERS! Any gap = escape → found dead on floor. 30% of rainbowfish deaths from jumping! Tight-fitting lid with NO GAPS mandatory.",
      "Judging juveniles. Young fish are BLAND GREY and completely unimpressive! Colors emerge ONLY at 8-12 months maturity with proper conditions. Many hobbyists return 'colorless' fish not realizing they need time to develop. Be patient!",
      "Unequal sex ratios. Males RELENTLESSLY HARASS females for breeding! In male-heavy groups: females exhausted/stressed from constant chasing. Keep EQUAL ratios in groups 6-10+ distributing harassment.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['high-quality-flakes', 'micro-pellets', 'spirulina-flakes', 'color-enhancing-pellets'],
      supplements: ['frozen-bloodworms', 'brine-shrimp', 'daphnia', 'blanched-vegetables', 'algae-wafers'],
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
      notes: 'Weekly 30% water changes MANDATORY. Lake Kutubu Rainbowfish need PRISTINE WATER (they\'re from crystal-clear Lake Kutubu!). Keep: ammonia/nitrite 0ppm, nitrate under 40ppm. CRITICAL: They need HARD ALKALINE WATER (pH 7.0-8.5, GH 10-25+, KH 8-20) - use crushed coral in filter or Seachem Equilibrium if tap water soft. Wild Lake Kutubu has EXTREME pH 8.5-9.0 from limestone! Moderate flow from filter output (they\'re from still to slow-moving water). High oxygen levels beneficial (active swimmers). Strong lighting shows their colors best. Test water weekly maintaining stable parameters.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 200,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: true,
      lighting: 'high',
      co2: false,
    },
  },

  health: {
    lifespanYears: 8,
    commonDiseases: ['mycobacteriosis-fish-tb', 'ich', 'velvet', 'bacterial-infections', 'fungal-infections'],
    sensitivities: ['Poor water quality (clear water species!)', 'Sudden parameter changes', 'Low oxygen levels', 'Mycobacteriosis (Fish TB - QUARANTINE new fish!)', 'Soft acidic water (need hard alkaline!)'],
  },

  scientificContext: {
    wildHabitat:
      'Melanotaenia lacustris is ENDEMIC (found nowhere else!) to Lake Kutubu and outlet Soro River (Kikori River drainage) in Papua New Guinea Southern Highlands Province. Lake Kutubu is one of PNG\'s LARGEST LAKES (~60 square kilometers) formed when volcanic debris blocked valley. It\'s EXTREMELY REMOTE and pristine. Wild habitat: CRYSTAL CLEAR STILL TO SLOW-MOVING water, HEAVY AQUATIC VEGETATION, submerged roots/logs, EXTREME ALKALINE WATER (pH 8.5-9.0 from underground limestone springs - among highest natural fish habitats!), GH 15-25+, temps 22-25°C. The lake experiences mysterious "TURNING OF THE WATER" every ~2 years - massive dark oxygen-depleted water upwellings from lake bottom causing mass fish deaths (natural phenomenon!). 14 fish species inhabit lake - 10 ARE ENDEMIC! Conservation status: ENDANGERED (IUCN) - threats include invasive Tilapia, Kutubu Oil Project drilling, gill nets, logging, overfishing.',
    sexualDimorphism:
      'MODERATE TO SEX when mature (8-12 months). MALES: Deeper taller bodies (more "humped" profile), MORE VIBRANT turquoise-blue coloration, ORANGE BREEDING STRIPE on forehead above gill plates (distinctive during displays!), more pointed elongated dorsal/anal fins, display constantly. FEMALES: Rounder fuller abdomens especially when gravid (egg-filled), DULLER less intense turquoise coloration, rounded fins, slightly larger overall size, less active displays. These differences ONLY visible in mature adults! Juveniles impossible to sex (all bland silver-grey). Most reliable: orange forehead stripe = male.',
    variants: ['Wild-type (classic turquoise)', 'Lacustris Blue (enhanced blue selection)', 'Turquoise Rainbow (common trade name)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'intermediate',
    trigger:
      'Lake Kutubu Rainbowfish breeding is ACHIEVABLE with proper setup! They\'re CONTINUOUS SPAWNERS depositing small egg batches over several days/weeks (not single mass spawning event!). Natural triggers: 1) HEAVY CONDITIONING with live/frozen foods (bloodworms, brine shrimp, daphnia - feed 2-3x daily for 2 weeks fattening fish), 2) SPAWNING MOPS or fine-leaved plants (Java Moss, spawning yarn mops - egg deposition sites), 3) Slightly warmer water (25-26°C - 2°C increase), 4) Hard alkaline water (pH 7.5-8.0), 5) Dawn spawning (most active early morning). Wild spawning peaks during RAINY SEASON (raised water levels/temp). Condition group as harem: 2-3 males with 3-4 females.',
    fryCare:
      'Breeding setup: 40L+ dedicated tank, spawning mops or Java Moss (egg sites), hard alkaline water pH 7.5-8.0, temp 25°C, gentle sponge filter, no substrate needed. Spawning behavior: Males develop INTENSE COLORS + ORANGE FOREHEAD STRIPE displaying constantly to females (shimmering, fin flaring, circling). Females inspect mops. Spawning occurs at DAWN over several days: pairs embrace, female releases 5-10 eggs attached to mop by thin threads (adhesive eggs!), male fertilizes. This repeats producing 50-150 total eggs over days. ADULTS EAT EGGS - check mops daily removing egg-laden mops to separate hatching container with same water! Eggs hatch 7-8 days (24°C). Fry FREE-SWIMMING 2-3 days after hatch. CRITICAL: First foods challenging! Feed: INFUSORIA or liquid fry food (days 1-7 - tiny mouths!), then NEWLY HATCHED BRINE SHRIMP (day 7+ - growth accelerates!), micro-pellets (3 weeks+). Feed fry 3-4x daily. Growth SLOW but steady: 1cm at 8 weeks, 2-3cm at 4 months, 5cm at 8 months, sexually mature 12-18 months. Colors develop at 8-12 months.',
    notes:
      'Lake Kutubu Rainbowfish breeding is MODERATELY CHALLENGING but achievable! They\'re CONTINUOUS SPAWNERS making multiple attempts easier. Challenges: 1) Daily egg collection needed (adults eat spawn!), 2) Slow fry growth (12-18 months to maturity!), 3) Tiny fry need infusoria first week (culture preparation required). Many breeders use SPAWNING MOPS (yarn tied to cork floats) checked daily for eggs. CONSERVATION IMPORTANCE: By breeding captive stock, you help preserve ENDANGERED wild populations! Responsible breeding supports species survival.',
  },
  
  experienceData: {
    successRate: 0.55,
    survivalRate: 0.60,
    
    commonFailures: [
      { issue: 'jumping-escape-death', cause: 'no-secure-lid-excellent-jumpers', frequency: 0.30 },
      { issue: 'poor-coloration-pale-grey', cause: 'soft-acidic-water-need-hard-alkaline', frequency: 0.25 },
      { issue: 'understimulation-aggression', cause: 'tank-under-150cm-length-need-swimming-space', frequency: 0.20 },
      { issue: 'female-harassment-stress', cause: 'small-groups-or-unequal-sex-ratios', frequency: 0.15 },
      { issue: 'mycobacteriosis-fish-tb', cause: 'poor-quarantine-contagious-disease', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 150, max: 400, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};
