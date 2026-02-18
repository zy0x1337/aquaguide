import type { Species } from '../../types/species';

export const whiteCloudMinnow: Species = {
  id: 'minnow-001',
  slug: 'white-cloud-minnow',
  imageUrl: '/images/species/white-cloud-mountain-minnow.jpg',
  funFact: "White Cloud Mountain Minnows are EXTINCT IN THEIR ORIGINAL WILD HABITAT (White Cloud Mountain near Guangzhou, China - polluted by tourism!) but are CONSERVATION SUCCESS STORY now thriving in aquariums worldwide! They're called the 'POOR MAN'S NEON TETRA' displaying similar iridescent neon-blue stripes at 1/3rd the price and 10X the hardiness! They're TRUE COLDWATER FISH needing NO HEATER (14-22°C room temperature!) - save money on electricity while keeping gorgeous fish! They survived in wild from 5°C to 30°C making them EXTREMELY TEMPERATURE TOLERANT! They're the EASIEST EGG SCATTERERS to breed - spawning DAILY in planted tanks without special triggers and parents RARELY EAT FRY (can raise babies in main tank!). Males perform constant 'SPARRING' displays (fin-flaring contests - beautiful ritualized combat that never causes harm!). Rediscovered after 20 years presumed extinct! From Chinese mountain streams!",

  taxonomy: {
    scientificName: 'Tanichthys albonubes',
    commonName: 'White Cloud Mountain Minnow / Canton Danio / Poor Man\'s Neon',
    family: 'Cyprinidae',
    origin: 'China (Guangdong Province - White Cloud Mountain/Baiyun Mountain near Guangzhou)',
    region: 'Asia',
    biotope: 'Cool clear shallow mountain streams with moderate flow, rocky substrates, dense aquatic vegetation, EXTREME seasonal temperature fluctuations (5-30°C!)',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4,
    color: 'STUNNING NEON IRIDESCENCE - "Poor Man\'s Neon Tetra"! Olive-brown to bronze body with BRILLIANT IRIDESCENT NEON-BLUE STRIPE running from eye to tail base (like neon tetras but cheaper!). Pink/red flush behind gill plates. Fins with BRIGHT RED EDGES especially visible in males (red-tipped dorsal, caudal, anal fins!). Tail has distinctive RED-AND-BLACK PATTERN. Overall shimmering metallic appearance. Males MORE COLORFUL: Brighter red fin edges, more intense neon stripe, slimmer torpedo bodies. Females DULLER: Pale red, rounder fuller abdomens. Under proper lighting they sparkle like tiny jewels! GOLDEN VARIETY: Bright yellow-gold body with same neon stripe pattern',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 14, max: 22, ideal: 18 },
    ph: { min: 6.0, max: 8.5, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    kh: { min: 4, max: 15 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.7,
  },

  habitat: {
    planting: 'dense',
    plantingNotes:
      'White Cloud Mountain Minnows need HEAVY PLANTING for security and breeding! They\'re from densely vegetated mountain streams. Best setup: BACKGROUND/SIDE PLANTING (Vallisneria, Java Fern, Anubias - creates security zones), FLOATING PLANTS (Water Sprite, Frogbit - encourages breeding, diffuses light), fine-leaved plants (Cabomba, hornwort - spawning sites). They appreciate MODERATE FLOW from filter output (replicating mountain stream currents). COLDWATER PLANTS best: Vallisneria, Anubias, Java Fern, Java Moss tolerate cooler temps (18°C). Dark substrate enhances their colors making neon stripe more visible.',
    hardscape: ['River stones (smooth pebbles - rocky substrate replication)', 'Driftwood branches', 'Moderate flow areas (stream current simulation)', 'Open swimming space midwater', 'Dark sand or fine gravel substrate'],
  },

  behavior: {
    tags: ['schooler', 'peaceful', 'active', 'coldwater', 'jumper'],
    minGroupSize: 8,
    description:
      'White Cloud Mountain Minnows are EXTREMELY PEACEFUL ACTIVE SCHOOLERS displaying fascinating social behaviors! Watch males constantly perform "SPARRING" displays - beautiful ritualized combat where males face each other, FLARE FINS to maximum extension, intensify colors (brilliant red fin edges!), circle each other in slow-motion dance. This looks aggressive but is COMPLETELY HARMLESS ritualized behavior (establishing hierarchy without injuries!). They\'re very ACTIVE swimming in loose schools across midwater. They\'re EXTREMELY HARDY - literally BULLETPROOF surviving beginner mistakes! They\'re TEMPERATURE TOLERANT (5-30°C range!) - no other common aquarium fish has this range! They\'re EXCELLENT JUMPERS when excited - secure lid needed. Very PEACEFUL never aggressive toward tankmates.',
    
    compatibility: {
      goodMates: ['Hillstream loaches (Sewellia, Beaufortia - matching temps!)', 'Zebra Danios (similar temps/activity)', 'ALL dwarf shrimp (100% shrimp-safe!)', 'Snails (peaceful cohabitants)', 'Other coldwater fish', 'FANCY GOLDFISH (if tank large enough 200L+ - temps compatible!)', 'Paradise fish (matching temps)', 'Dojo loaches (Weather loaches)'],
      badMates: ['TROPICAL FISH (Angelfish, Discus, Tetras - TEMP MISMATCH!)', 'Large predatory fish', 'Aggressive cichlids', 'Common goldfish (too large/messy)', 'Any fish requiring 26°C+ temps'],
      notes:
        'White Cloud Mountain Minnows are PERFECT COLDWATER COMMUNITY FISH but CRITICAL: They CANNOT mix with TROPICAL SPECIES! They need 14-22°C (room temperature) while tropicals need 24-28°C. Keeping them in TROPICAL TANKS = heat stress, shortened lifespans (2-3 years vs 5-8 years!), faded colors, lethargy. They\'re IDEAL for UNHEATED/COLDWATER SETUPS with hillstream loaches, goldfish (fancy only - commons too large), paradise fish. They\'re 100% SHRIMP-SAFE even with tiny shrimplets! Best in SPECIALIZED COLDWATER COMMUNITY TANKS. Can POND during summer (May-October) in temperate climates then moved indoors winter.',
      
      rules: [
        {
          type: 'requires',
          condition: 'COLDWATER SETUP (14-22°C) - NO TROPICAL FISH',
          reason: 'CRITICAL: White Clouds are TRUE COLDWATER FISH requiring 14-22°C! They CANNOT coexist with tropical species needing 24-28°C. Keeping in tropical heated tanks = HEAT STRESS, dramatically shortened lifespans (2-3 years vs 5-8 years healthy!), faded colors, lethargy, early death. They need room temperature/unheated setups. This is non-negotiable',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'SECURE LID with no gaps',
          reason: 'They are EXCELLENT JUMPERS especially when excited/spooked! Any gap in lid = escape and death. Jumping occurs spontaneously or during feeding. Tight-fitting lid mandatory',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'groups 8+ fish minimum',
          reason: 'They\'re SCHOOLING FISH needing groups 8+ for security and natural sparring behaviors! Small groups = stress, hiding, no displays. Large groups = confident schooling, constant sparring displays, active swimming',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'using aquarium heater',
          reason: 'White Clouds are COLDWATER FISH thriving at ROOM TEMPERATURE (18-20°C) - they DON\'T NEED HEATERS! Using heaters unnecessarily = heat stress and wasted electricity. Save money - run unheated! Exception: if room drops below 14°C use low-wattage heater maintaining 16-18°C',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 8-12,
        midwater: '15-20',
        bottom: '8-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
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
      maxMalesPerTank: 15,
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
      'COLDWATER SETUP (14-22°C) - NO HEATER needed!', 
      'SECURE LID (jumpers!)', 
      'Groups 8+ minimum (schooling behavior)', 
      'Moderate flow (stream current)', 
      'Heavy planting (security + breeding)', 
      'NO tropical tankmates (temp mismatch!)',
    ],

    proTips: [
      "SAVE MONEY - NO HEATER NEEDED! White Clouds are TRUE COLDWATER FISH thriving at ROOM TEMPERATURE (18-20°C) - they DON'T NEED AQUARIUM HEATERS! This saves: 1) Initial heater cost (€30-50), 2) Monthly electricity (heaters use 50-100W continuously = €10-20/month!), 3) Equipment failure risk (heater malfunctions = cooked fish). They're comfortable 14-22°C - normal room temps perfect! Exception: If room drops below 14°C in winter, use low-wattage heater maintaining 16-18°C. Most energy-efficient aquarium fish!",
      "THE BULLETPROOF BEGINNER FISH! White Clouds are LITERALLY INDESTRUCTIBLE making them IDEAL FIRST FISH! They tolerate: 1) EXTREME temperature range (5-30°C wild - no other common fish survives this!), 2) Wide pH range (6.0-8.5), 3) Beginner mistakes (overfeeding, irregular maintenance), 4) Parameter fluctuations, 5) Cycling tanks (hardy during nitrogen cycle). They're INFINITELY HARDIER than Neon Tetras (which die easily). Perfect for learning aquarium basics with forgiving fish!",
      "'POOR MAN'S NEON TETRA' - budget alternative! They display SIMILAR IRIDESCENT NEON-BLUE STRIPE as Neon Tetras at: 1/3rd the PRICE (€2 vs €6+ for Neons!), 10X the HARDINESS (Neons sensitive, White Clouds bulletproof!), EASIER BREEDING (spawn daily vs difficult Neon breeding), COLDWATER (no heater needed!). For budget-conscious hobbyists wanting colorful schooling fish: White Clouds are SUPERIOR CHOICE to Neons!",
      "EASIEST BREEDING EGG SCATTERERS EVER! White Clouds spawn CONTINUOUSLY in planted tanks without special triggers! Setup: 1) Groups 8+ with MORE FEMALES than males, 2) Heavy planting (Java Moss, fine-leaved plants), 3) Quality food 2x daily, 4) Slightly cooler water (18-20°C). That's IT - they spawn DAILY depositing eggs on plants! CRITICAL: Unlike most fish, parents RARELY EAT EGGS/FRY (can raise babies in community tank!). Fry appear near surface eating crushed flakes. Colony breeding works brilliantly - easiest breeding project!",
      "MALE SPARRING DISPLAYS are spectacular! Males constantly perform ritualized combat: facing off, flaring fins to maximum (brilliant red edges!), intensifying colors, slow-motion circling. This looks aggressive but is COMPLETELY HARMLESS (establishing hierarchy - no injuries!). These displays are WHY you keep groups - with 8+ fish you get constant fascinating interactions. More males = more sparring (keep balanced sex ratios though!).",
      "OUTDOOR POND summer option! In temperate climates (Germany, UK, Netherlands, etc.), White Clouds can live in OUTDOOR PONDS May-October enjoying natural sunlight, live foods (mosquito larvae!), massive color enhancement! They tolerate down to 5°C but move indoors BEFORE first frost (October). Outdoor temps 15-25°C perfect. Then overwinter in UNHEATED indoor aquarium 16-20°C. This seasonal cycle mimics wild temperature fluctuations!",
      "COLDWATER PLANT compatibility! Since White Clouds need cooler temps (18°C), choose plants tolerating lower temps: BEST = Java Fern, Anubias, Java Moss, Vallisneria (all thrive 16-22°C). AVOID: Tropical plants needing 24°C+ (Amazon Swords, Rotala, most stem plants struggle in cold). Coldwater plants grow SLOWER but healthier at these temps.",
    ],

    commonMistakes: [
      "Keeping in TROPICAL HEATED TANKS (26°C+). BIGGEST MISTAKE (80% of failures!). White Clouds are COLDWATER FISH needing 14-22°C! In tropical tanks 26-28°C: HEAT STRESS, dramatically shortened lifespans (live 2-3 years vs 5-8 years healthy!), faded colors (lose neon blue), lethargy, constant gasping at surface (overheating!), early death. They need ROOM TEMPERATURE unheated setups. Keeping them tropical is like keeping goldfish in heated discus tank - it's wrong!",
      "Mixing with tropical fish. White Clouds need 18°C, tropicals need 26°C - INCOMPATIBLE! Either White Clouds suffer heat stress OR tropicals freeze. They need SPECIALIZED COLDWATER COMMUNITY with hillstream loaches, goldfish, paradise fish. Cannot coexist with Angels, Tetras, Discus, Gouramis (all tropical!).",
      "Small groups (2-4 fish). They're SCHOOLING FISH needing groups 8+ for security and sparring displays! Small groups = stress, hiding, no fascinating male displays. With 8-12+ fish: confident schooling, constant sparring, active swimming.",
      "No secure lid. They're EXCELLENT JUMPERS! Any gap = escape death. Jumping occurs during feeding excitement or spontaneously. Tight-fitting lid mandatory - this applies to ALL minnows/danios.",
      "Judging them as 'boring'. Uninformed hobbyists dismiss them as 'cheap plain fish' not realizing: 1) Stunning neon iridescence (rival Neon Tetras!), 2) Fascinating male sparring displays, 3) Easy breeding producing generations, 4) Extreme hardiness, 5) No heater needed! They're incredibly interesting fish in proper groups!",
      "Using aquarium heater unnecessarily. White Clouds are COLDWATER fish thriving at room temp 18-20°C! They DON'T NEED HEATERS wasting electricity. Exception: If room drops below 14°C use minimal heating to 16°C. Save money!",
      "Overfeeding. Like all fish they're opportunistic eaters. Overfeeding = water quality crashes. Feed small amounts 1-2x daily. They're small fish with small stomachs!",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'flakes', 'crushed-flakes', 'pellets'],
      supplements: ['bloodworms', 'brine-shrimp', 'daphnia'],
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
      notes: 'Weekly 30% water changes. White Cloud Mountain Minnows are EXTREMELY HARDY tolerating wide parameter ranges! They need COLDWATER (14-22°C ideal 18°C) - NO HEATER NEEDED at room temperature (saves electricity!). They tolerate pH 6.0-8.5 (very flexible!), GH 5-20 (soft to moderately hard). Keep ammonia/nitrite 0ppm, nitrates under 40ppm (they\'re forgiving!). MODERATE FLOW from filter output (replicates mountain stream currents - they enjoy flow!). Exception heating: If room drops BELOW 14°C in winter, use minimal heater maintaining 16-18°C. Otherwise run UNHEATED. Very forgiving maintenance - perfect beginners.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
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
    lifespanYears: 7,
    commonDiseases: ['ich', 'fin-rot', 'velvet', 'fungal-infections'],
    sensitivities: ['HEAT STRESS (over 24°C - shortened lifespans!)', 'Chlorine (dechlorinate water)', 'Permanent warm temps (26°C+ = early death)', 'Inbreeding depression (farm-raised stock - genetic issues)'],
  },

  scientificContext: {
    wildHabitat:
      'Tanichthys albonubes was originally endemic to White Cloud Mountain (Baiyun Mountain/Baiyunshan) ~15km north of Guangzhou city, Guangdong Province, China - a collection of ~30 peaks. Type locality habitat: COOL CLEAR SHALLOW MOUNTAIN STREAMS (spring-fed tributaries), moderate flow, rocky substrates with pebbles/cobblestones, DENSE AQUATIC VEGETATION (trailing marginal plants), water depth typically 30-60cm, temps with EXTREME SEASONAL FLUCTUATION (5°C winter to 30°C summer - remarkable tolerance!), neutral to slightly alkaline water pH 6.5-7.5. CONSERVATION STATUS: The species is EXTINCT IN TYPE LOCALITY! Between 1980-2001 NO SPECIMENS were found anywhere (presumed extinct from pollution + tourism development turning mountain into resort with cable cars, hotels, parks). In 2001 REDISCOVERED at isolated locations: 1) Small relict populations near original locality (Guangdong), 2) Coastal streams in Shanwei, Guangdong, 3) Ha Long Bay drainage, Quang Ninh Province, Vietnam, 4) Hainan Island population (warmer water - less cold-tolerant). Now thrives in aquarium trade worldwide - CONSERVATION SUCCESS!',
    sexualDimorphism:
      'EASY TO SEX when mature (6+ months). MALES: More VIBRANT COLORS (brighter neon-blue stripe, intense red fin edges!), SLIMMER torpedo-shaped streamlined bodies, more pointed dorsal/anal fins, constant sparring displays (fin flaring). FEMALES: DULLER coloration (pale neon stripe, faded red), ROUNDER FULLER abdomens especially when gravid (egg-filled bellies noticeably plump), slightly LARGER overall, less displaying. Most reliable: Red fin intensity (bright red = male, pale red = female) + body shape (slim = male, round = female). Easy sexing for breeding setup.',
    variants: ['Wild-type (olive-brown with neon stripe)', 'Golden White Cloud (bright yellow-gold body - popular!)', 'Longfin White Cloud (extended flowing fins)', 'Hong Kong variety (slightly larger)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger:
      'White Cloud Mountain Minnows are EASIEST EGG SCATTERERS TO BREED - spawning DAILY without special triggers! Natural breeding occurs CONTINUOUSLY in planted community tanks. Enhance breeding: 1) Groups 8-10+ with MORE FEMALES than males (2-3 females per male spreads male attention), 2) HEAVY FEEDING with quality foods (frozen bloodworms, brine shrimp, high-protein pellets - 2-3x daily for 1-2 weeks fattening females), 3) HEAVY PLANTING especially fine-leaved (Java Moss, spawning mops, Cabomba - egg deposition sites), 4) Slightly COOLER water (18-20°C - mimics spring conditions), 5) Clean water (frequent changes). That\'s IT - no complex triggers needed! Males display/spawn constantly.',
    fryCare:
      'Breeding behavior: Males perform CONSTANT SPARRING establishing hierarchy then pursue gravid females. Spawning occurs throughout day: male chases female into plants, pair swims side-by-side, female releases 5-10 eggs scattering onto plant leaves (adhesive eggs stick to surfaces!), male fertilizes, repeats producing 130+ eggs per female per MONTH (3-5 eggs daily!). CRITICAL: White Clouds RARELY EAT EGGS/FRY (unlike most fish!) - this makes them EASIEST breeding project! Options: 1) COMMUNITY BREEDING: Leave adults/eggs together in planted tank - many fry survive to adulthood naturally (easiest!), 2) SPAWNING MOP METHOD: Place yarn mops, check daily, remove egg-laden mops to separate rearing tank (higher survival). Eggs hatch 2-3 days (tiny transparent fry!). Fry FREE-SWIMMING 2-3 days after hatch hiding in plants near surface. First foods: INFUSORIA (days 1-4), crushed flakes/powder food (day 5+), BABY BRINE SHRIMP (day 7+ - growth accelerates!), micro-pellets (2 weeks+). Feed fry 3-4x daily. Growth moderate: 1cm at 6 weeks, 2cm at 3 months, 3cm at 6 months, sexually mature 6-8 months. EASIEST breeding experience!',
    notes:
      'White Cloud Mountain Minnows win award for EASIEST BREEDING OF ANY EGG SCATTERER! Unlike most fish requiring: complex triggers, separate breeding tanks, removing adults (egg eaters), difficult fry foods - White Clouds spawn DAILY in community tanks and parents IGNORE eggs/fry! Many hobbyists have "surprise fry" appearing constantly. This makes them PERFECT FIRST BREEDING PROJECT teaching breeding basics with forgiving species. Colony breeding works brilliantly: setup 60L+ planted tank, add group 10-15 mixed sex, feed heavily, watch generations appear! Very rewarding.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'heat-stress-shortened-lifespan', cause: 'kept-in-tropical-heated-tanks-26c-plus', frequency: 0.80 },
      { issue: 'jumping-escape-death', cause: 'no-secure-lid-excellent-jumpers', frequency: 0.10 },
      { issue: 'stress-hiding', cause: 'small-groups-under-8-fish-schooling-species', frequency: 0.05 },
      { issue: 'inbreeding-genetic-issues', cause: 'farm-raised-weak-stock-physical-deformities', frequency: 0.03 },
      { issue: 'mixing-with-tropicals', cause: 'temperature-incompatibility-stress', frequency: 0.02 },
    ],
    
    estimatedCosts: {
      initial: { min: 30, max: 80, currency: 'EUR' },
      monthly: { min: 3, max: 10, currency: 'EUR' },
    },
  },
};
