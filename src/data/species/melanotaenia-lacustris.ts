import type { Species } from '../../types/species';

export const melanotaeniaLacustris: Species = {
  id: 'rainbowfish-001',
  slug: 'lake-kutubu-rainbowfish',
  imageUrl: '/images/species/lake-kutubu-rainbowfish.jpg',
  funFact: "Lake Kutubu Rainbowfish are ENDANGERED SPECIES (IUCN Red List!) endemic to a SINGLE LAKE in remote Papua New Guinea highlands! They're one of only 14 fish species in pristine Lake Kutubu - 10 are found nowhere else on Earth! They have unique color-changing ability rapidly shifting patterns in seconds throughout the day (unlike other rainbowfish!). Wild habitat has extreme alkaline water (pH 8.5-9.0 - among highest natural fish habitats!) from underground limestone springs. The lake experiences mysterious 'Turning of the Water' every 2 years - massive dark oxygen-depleted water upwellings from lake bottom causing mass fish deaths! Conservation threats: invasive Tilapia, oil drilling (Kutubu Oil Project), overfishing for aquarium trade. By keeping captive-bred fish, you help preserve this species! From Papua New Guinea Southern Highlands!",

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
    region: 'Australia',
    biotope: 'Clear still to slow-moving lake waters with heavy aquatic vegetation, submerged roots/logs, extreme alkaline water (pH 8.5-9.0 from limestone!)',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 12,
    color: 'Stunning electric turquoise-blue brilliance! Adults display iridescent turquoise-blue bodies (metallic sheen like neon!), darker blue horizontal stripe along midline, silvery-blue flanks with intricate scale patterns creating shimmering effect. Fins have blue-turquoise tinge with black edges (especially visible during spawning!). Males more vibrant: Deeper bodies, orange breeding stripe on forehead (distinctive marking during displays!), more intense turquoise, pointed dorsal/anal fins. Females duller: Less blue intensity, rounder fuller bodies. Unique: Unlike other rainbowfish, M. lacustris can rapidly change colors in seconds displaying many different patterns throughout day (stress/excitement/display related!). Warning: Juveniles are bland silver-grey - brilliant blue emerges only with maturity (8-12 months) and proper conditions! Don\'t judge in stores',
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
      primary: 'midwater',
      secondary: 'surface',
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
    planting: 'dense',
    plantingNotes:
      'Lake Kutubu Rainbowfish need heavy side/background planting with open swimming corridors - they\'re extremely active swimmers needing horizontal space! Best setup: Dense planting on sides/back (Vallisneria, Amazon Swords, Anubias - creates security and retreats), wide open center (150cm+ horizontal swimming runs - critical!), floating plants optional. They need hard alkaline water - choose plants tolerating high pH/GH (Vallisneria, Anubias, Java Fern, Crinum). CRITICAL: Females in breeding condition compulsively nibble algae - leave back glass uncleaned for natural grazing or provide algae wafers! They\'re from clear water and appreciate pristine conditions with strong lighting showing their colors.',
    hardscape: ['Smooth driftwood branches (submerged logs - wild habitat replication)', 'Smooth river stones', 'Open swimming space center (MANDATORY - 150cm+ runs!)', 'No sharp edges (active swimmers)', 'Clear water essential (Lake Kutubu is crystal clear!)'],
  },

  behavior: {
    tags: ['active', 'peaceful', 'schooler', 'jumper', 'diurnal'],
    minGroupSize: 6,
    description:
      'Lake Kutubu Rainbowfish are extremely active athletic swimmers with endless energy! They\'re crepuscular - most active at dawn/dusk (feed during these times!). Watch males constantly perform non-aggressive display rituals: flaring fins, intensifying colors (brilliant turquoise + orange forehead stripe!), circling each other, body shimmering. They\'re peaceful but boisterous - their constant activity/energy can intimidate shy species! They\'re schooling fish swimming in loose coordinated groups across midwater. They\'re excellent jumpers - secure lid mandatory! Watch their unique color-changing ability - patterns shift in seconds during excitement/displays. They occupy middle to upper water column retreating to plants when startled.',
    
    compatibility: {
      goodMates: ['Other rainbowfish (mixed species schools!)', 'Larger peaceful tetras (Congo, Bleeding Heart)', 'Corydoras (bottom level different)', 'Plecos (Bristlenose, Clown)', 'Peaceful barbs (Rosy, Cherry)', 'Larger rasboras', 'Peaceful gouramis (Pearl)', 'Active community fish matching energy'],
      badMates: ['Slow/shy fish (Bettas, Honey Gouramis - stressed by activity)', 'Long-finned fish (may nip)', 'Fin nippers', 'Aggressive cichlids', 'Very small fish (may eat fry-sized)', 'Goldfish (incompatible temps/parameters)'],
      notes:
        'Lake Kutubu Rainbowfish are peaceful but energetic community fish best for active tanks! They\'re completely non-aggressive never attacking tankmates, but their constant boisterous activity stresses shy/slow species (Bettas, shy gouramis, slow tetras). Best with other active fish matching their energy. CRITICAL: Males can relentlessly harass females in small groups (constant chasing for breeding)! Keep equal male:female ratios in groups 6-10+ to distribute harassment. They mix well with other rainbowfish species creating spectacular mixed schools. Need 150cm+ tank length for proper swimming space.',
      
      rules: [
        {
          type: 'requires',
          condition: 'large tank with 150cm+ horizontal length',
          reason: 'Lake Kutubu Rainbowfish are extremely active swimmers needing massive horizontal swimming space! In tanks under 150cm length they become understimulated, bored, stressed, aggressive. They evolved in vast Lake Kutubu and need room to sprint. 200L+ tank with 150cm+ length is mandatory for proper behavior',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'tight-fitting lid with no gaps',
          reason: 'They are excellent jumpers clearing 30cm+ from surface! Any gap in lid = certain escape and death. Jumping occurs when startled, during courtship displays, or spontaneously. Secure tight-fitting lid mandatory at all times',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'hard alkaline water (pH 7.0-8.5, GH 10-25+)',
          reason: 'CRITICAL: They\'re from Lake Kutubu with extreme alkaline water (pH 8.5-9.0 wild from limestone geology!). They need hard alkaline water for health. In soft acidic water: poor colors, stress, shortened lifespans. Use crushed coral or Seachem Equilibrium if tap water soft',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'keeping small groups or unequal sex ratios',
          reason: 'Males relentlessly harass females for breeding! In small groups or male-heavy ratios: females become exhausted/stressed from constant chasing. Keep groups 6-10+ with equal male:female ratios distributing harassment. This is critical for female welfare',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'mixing with slow/shy tankmates',
          reason: 'Their constant boisterous activity stresses slow/shy species! In tanks with Bettas, shy gouramis, or peaceful slow fish: those fish hide constantly, refuse food, become stressed. Only mix with active robust tankmates matching energy',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 10-15,
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
      level: 'high',
      peakTimes: ['morning', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
      maxMalesPerTank: 10,
    },
    
    finNipping: {
      risk: 'low',
      targets: ['long-finned slow fish (occasional nipping during boisterous activity)'],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Large tank (200L+, 150cm+ length) - active swimmers', 
      'Tight-fitting lid (excellent jumpers!)', 
      'Hard alkaline water (pH 7.0-8.5, GH 10-25+)', 
      'Equal male:female ratios in groups 6-10+', 
      'Active tankmates matching energy', 
      'Captive-bred stock (wild populations endangered!)', 
      'Pristine water quality (clear water species)',
    ],

    proTips: [
      "BUY CAPTIVE-BRED ONLY - conservation responsibility! Lake Kutubu Rainbowfish are ENDANGERED (IUCN Red List!) - wild populations threatened by invasive Tilapia, oil drilling, and overfishing. They're endemic to a single lake in Papua New Guinea found nowhere else! By buying captive-bred fish, you support conservation reducing pressure on wild populations. Ask stores for captive-bred stock. Responsible hobbyists are this species' best hope!",
      "Don't judge juveniles in stores! Young fish are bland silver-grey and completely unimpressive. Their brilliant electric turquoise-blue coloration emerges only with maturity (8-12 months) and proper conditions (hard alkaline water, quality diet, stress-free environment). Buy young knowing colors develop later. This is the most common complaint - 'my rainbowfish aren't colorful!' Give them time!",
      "Crepuscular feeding - dawn/dusk optimal! They're most active at dawn and dusk (natural behavior). Feed during these times for: best feeding response, maximum color display (males intensify during feeding competition!), natural circadian rhythm. Morning + evening feedings ideal.",
      "Hard alkaline water essential! Wild Lake Kutubu has extreme pH 8.5-9.0 (among highest natural fish habitats!) from underground limestone springs. Replicate: pH 7.5-8.5, GH 12-25+. Use: crushed coral in filter, Seachem Equilibrium, limestone rocks. In soft acidic water: pale colors, stress, disease. Hard water = brilliant turquoise!",
      "150cm+ tank length mandatory! They're extremely active swimmers from vast Lake Kutubu (60 square kilometers!) needing horizontal swimming runs. In tanks under 150cm: understimulation, boredom, aggression toward tankmates. 200L+ tank with 150cm+ length = proper behavior, full color displays, healthy activity.",
      "Mixed rainbowfish schools spectacular! They school peacefully with other Melanotaenia species creating multi-colored displays (mix with Boesemani, Praecox, etc.). Different species schools together naturally. 15-20 mixed rainbowfish in 300L+ tank = stunning living artwork!",
      "Strict quarantine - Mycobacteriosis risk! Rainbowfish (especially wild-caught or stressed) are susceptible to fish TB (Mycobacteriosis - incurable, contagious, zoonotic!). Quarantine new arrivals 4-6 weeks observing for: weight loss, lethargy, spinal deformities, skin lesions. This disease is serious - prevention critical.",
    ],

    commonMistakes: [
      "Tank under 150cm length. Biggest mistake! They're extremely active swimmers needing massive horizontal space. In tanks under 150cm they become: understimulated, bored, stressed, aggressive toward tankmates, poor coloration. They evolved in 60-square-kilometer lake! Need 200L+ tank with 150cm+ length minimum.",
      "Small groups (2-3 fish). Rainbowfish are schooling species thriving in groups 6-10+! Small groups = stress, hiding, poor colors, female harassment. Bigger groups = confident behavior, tight schooling, brilliant displays, harassment distributed.",
      "Mixing with slow/shy fish. Their constant boisterous activity stresses Bettas, shy gouramis, peaceful slow fish. Those fish hide constantly, refuse food, develop stress illnesses. Only mix with active robust tankmates.",
      "Soft acidic water. They're from extreme alkaline habitat (pH 8.5-9.0 wild!) and need hard alkaline water! In soft water (pH under 7.0, GH under 10): pale colors, lethargy, stress, shortened lifespans. Raise hardness for health.",
      "No secure lid. They're excellent jumpers! Any gap = escape → found dead on floor. 30% of rainbowfish deaths from jumping! Tight-fitting lid with no gaps mandatory.",
      "Judging juveniles. Young fish are bland grey and completely unimpressive! Colors emerge only at 8-12 months maturity with proper conditions. Many hobbyists return 'colorless' fish not realizing they need time to develop. Be patient!",
      "Unequal sex ratios. Males relentlessly harass females for breeding! In male-heavy groups: females exhausted/stressed from constant chasing. Keep equal ratios in groups 6-10+ distributing harassment.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'spirulina', 'pellets'],
      supplements: ['bloodworms', 'brine-shrimp', 'daphnia', 'blanched-zucchini', 'algae-wafers'],
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
      notes: 'Weekly 30% water changes mandatory. Lake Kutubu Rainbowfish need pristine water (they\'re from crystal-clear Lake Kutubu!). Keep: ammonia/nitrite 0ppm, nitrate under 40ppm. CRITICAL: They need hard alkaline water (pH 7.0-8.5, GH 10-25+, KH 8-20) - use crushed coral in filter or Seachem Equilibrium if tap water soft. Wild Lake Kutubu has extreme pH 8.5-9.0 from limestone! Moderate flow from filter output (they\'re from still to slow-moving water). High oxygen levels beneficial (active swimmers). Strong lighting shows their colors best. Test water weekly maintaining stable parameters.',
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
    sensitivities: ['Poor water quality (clear water species!)', 'Sudden parameter changes', 'Low oxygen levels', 'Mycobacteriosis (Fish TB - quarantine new fish!)', 'Soft acidic water (need hard alkaline!)'],
  },

  scientificContext: {
    wildHabitat:
      'Melanotaenia lacustris is endemic (found nowhere else!) to Lake Kutubu and outlet Soro River (Kikori River drainage) in Papua New Guinea Southern Highlands Province. Lake Kutubu is one of PNG\'s largest lakes (~60 square kilometers) formed when volcanic debris blocked valley. It\'s extremely remote and pristine. Wild habitat: crystal clear still to slow-moving water, heavy aquatic vegetation, submerged roots/logs, extreme alkaline water (pH 8.5-9.0 from underground limestone springs - among highest natural fish habitats!), GH 15-25+, temps 22-25°C. The lake experiences mysterious "Turning of the Water" every ~2 years - massive dark oxygen-depleted water upwellings from lake bottom causing mass fish deaths (natural phenomenon!). 14 fish species inhabit lake - 10 are endemic! Conservation status: ENDANGERED (IUCN) - threats include invasive Tilapia, Kutubu Oil Project drilling, gill nets, logging, overfishing.',
    sexualDimorphism:
      'Moderate to sex when mature (8-12 months). Males: Deeper taller bodies (more "humped" profile), more vibrant turquoise-blue coloration, orange breeding stripe on forehead above gill plates (distinctive during displays!), more pointed elongated dorsal/anal fins, display constantly. Females: Rounder fuller abdomens especially when gravid (egg-filled), duller less intense turquoise coloration, rounded fins, slightly larger overall size, less active displays. These differences only visible in mature adults! Juveniles impossible to sex (all bland silver-grey). Most reliable: orange forehead stripe = male.',
    variants: ['Wild-type (classic turquoise)', 'Lacustris Blue (enhanced blue selection)', 'Turquoise Rainbow (common trade name)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger:
      'Lake Kutubu Rainbowfish breeding is achievable with proper setup! They\'re continuous spawners depositing small egg batches over several days/weeks (not single mass spawning event!). Natural triggers: 1) Heavy conditioning with live/frozen foods (bloodworms, brine shrimp, daphnia - feed 2-3x daily for 2 weeks fattening fish), 2) Spawning mops or fine-leaved plants (Java Moss, spawning yarn mops - egg deposition sites), 3) Slightly warmer water (25-26°C - 2°C increase), 4) Hard alkaline water (pH 7.5-8.0), 5) Dawn spawning (most active early morning). Wild spawning peaks during rainy season (raised water levels/temp). Condition group as harem: 2-3 males with 3-4 females.',
    fryCare:
      'Breeding setup: 40L+ dedicated tank, spawning mops or Java Moss (egg sites), hard alkaline water pH 7.5-8.0, temp 25°C, gentle sponge filter, no substrate needed. Spawning behavior: Males develop intense colors + orange forehead stripe displaying constantly to females (shimmering, fin flaring, circling). Females inspect mops. Spawning occurs at dawn over several days: pairs embrace, female releases 5-10 eggs attached to mop by thin threads (adhesive eggs!), male fertilizes. This repeats producing 50-150 total eggs over days. Adults eat eggs - check mops daily removing egg-laden mops to separate hatching container with same water! Eggs hatch 7-8 days (24°C). Fry free-swimming 2-3 days after hatch. CRITICAL: First foods challenging! Feed: infusoria or liquid fry food (days 1-7 - tiny mouths!), then newly hatched brine shrimp (day 7+ - growth accelerates!), micro-pellets (3 weeks+). Feed fry 3-4x daily. Growth slow but steady: 1cm at 8 weeks, 2-3cm at 4 months, 5cm at 8 months, sexually mature 12-18 months. Colors develop at 8-12 months.',
    notes:
      'Lake Kutubu Rainbowfish breeding is moderately challenging but achievable! They\'re continuous spawners making multiple attempts easier. Challenges: 1) Daily egg collection needed (adults eat spawn!), 2) Slow fry growth (12-18 months to maturity!), 3) Tiny fry need infusoria first week (culture preparation required). Many breeders use spawning mops (yarn tied to cork floats) checked daily for eggs. Conservation importance: By breeding captive stock, you help preserve endangered wild populations! Responsible breeding supports species survival.',
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
