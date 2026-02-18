import type { Species } from '../../types/species';

export const whiteCloudMinnow: Species = {
  id: 'minnow-001',
  slug: 'white-cloud-minnow',
  imageUrl: '/images/species/white-cloud-mountain-minnow.jpg',
  funFact: "White Cloud Mountain Minnows are extinct in their original wild habitat (White Cloud Mountain near Guangzhou, China - polluted by tourism!) but are a conservation success story now thriving in aquariums worldwide! They're called the 'poor man's neon tetra' displaying similar iridescent neon-blue stripes at 1/3rd the price and 10x the hardiness! They're true coldwater fish needing no heater (14-22°C room temperature!) - save money on electricity while keeping gorgeous fish! They survived in wild from 5°C to 30°C making them extremely temperature tolerant! They're the easiest egg scatterers to breed - spawning daily in planted tanks without special triggers and parents rarely eat fry (can raise babies in main tank!). Males perform constant 'sparring' displays (fin-flaring contests - beautiful ritualized combat that never causes harm!). Rediscovered after 20 years presumed extinct! From Chinese mountain streams!",

  taxonomy: {
    scientificName: 'Tanichthys albonubes',
    commonName: 'White Cloud Mountain Minnow / Canton Danio / Poor Man\'s Neon',
    family: 'Cyprinidae',
    origin: 'China (Guangdong Province - White Cloud Mountain/Baiyun Mountain near Guangzhou)',
    region: 'Asia',
    biotope: 'Cool clear shallow mountain streams with moderate flow, rocky substrates, dense aquatic vegetation, extreme seasonal temperature fluctuations (5-30°C!)',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4,
    color: 'Stunning neon iridescence - "poor man\'s neon tetra"! Olive-brown to bronze body with brilliant iridescent neon-blue stripe running from eye to tail base (like neon tetras but cheaper!). Pink/red flush behind gill plates. Fins with bright red edges especially visible in males (red-tipped dorsal, caudal, anal fins!). Tail has distinctive red-and-black pattern. Overall shimmering metallic appearance. Males more colorful: Brighter red fin edges, more intense neon stripe, slimmer torpedo bodies. Females duller: Pale red, rounder fuller abdomens. Under proper lighting they sparkle like tiny jewels! Golden variety: Bright yellow-gold body with same neon stripe pattern',
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
      'White Cloud Mountain Minnows need heavy planting for security and breeding! They\'re from densely vegetated mountain streams. Best setup: Background/side planting (Vallisneria, Java Fern, Anubias - creates security zones), floating plants (Water Sprite, Frogbit - encourages breeding, diffuses light), fine-leaved plants (Cabomba, Hornwort - spawning sites). They appreciate moderate flow from filter output (replicating mountain stream currents). Coldwater plants best: Vallisneria, Anubias, Java Fern, Java Moss tolerate cooler temps (18°C). Dark substrate enhances their colors making neon stripe more visible.',
    hardscape: ['River stones (smooth pebbles - rocky substrate replication)', 'Driftwood branches', 'Moderate flow areas (stream current simulation)', 'Open swimming space midwater', 'Dark sand or fine gravel substrate'],
  },

  behavior: {
    tags: ['schooler', 'peaceful', 'active', 'coldwater', 'jumper'],
    minGroupSize: 8,
    description:
      'White Cloud Mountain Minnows are extremely peaceful active schoolers displaying fascinating social behaviors! Watch males constantly perform "sparring" displays - beautiful ritualized combat where males face each other, flare fins to maximum extension, intensify colors (brilliant red fin edges!), circle each other in slow-motion dance. This looks aggressive but is completely harmless ritualized behavior (establishing hierarchy without injuries!). They\'re very active swimming in loose schools across midwater. They\'re extremely hardy - literally BULLETPROOF surviving beginner mistakes! They\'re temperature tolerant (5-30°C range!) - no other common aquarium fish has this range! They\'re excellent jumpers when excited - secure lid needed. Very peaceful never aggressive toward tankmates.',
    
    compatibility: {
      goodMates: ['Hillstream loaches (Sewellia, Beaufortia - matching temps!)', 'Zebra Danios (similar temps/activity)', 'All dwarf shrimp (100% shrimp-safe!)', 'Snails (peaceful cohabitants)', 'Other coldwater fish', 'Fancy goldfish (if tank large enough 200L+ - temps compatible!)', 'Paradise fish (matching temps)', 'Dojo loaches (Weather loaches)'],
      badMates: ['Tropical fish (Angelfish, Discus, Tetras - temp mismatch!)', 'Large predatory fish', 'Aggressive cichlids', 'Common goldfish (too large/messy)', 'Any fish requiring 26°C+ temps'],
      notes:
        'White Cloud Mountain Minnows are perfect coldwater community fish but CRITICAL: They cannot mix with tropical species! They need 14-22°C (room temperature) while tropicals need 24-28°C. Keeping them in tropical tanks = heat stress, shortened lifespans (2-3 years vs 5-8 years!), faded colors, lethargy. They\'re ideal for unheated/coldwater setups with hillstream loaches, goldfish (fancy only - commons too large), paradise fish. They\'re 100% shrimp-safe even with tiny shrimplets! Best in specialized coldwater community tanks. Can pond during summer (May-October) in temperate climates then moved indoors winter.',
      
      rules: [
        {
          type: 'requires',
          condition: 'coldwater setup (14-22°C) - no tropical fish',
          reason: 'CRITICAL: White Clouds are true coldwater fish requiring 14-22°C! They cannot coexist with tropical species needing 24-28°C. Keeping in tropical heated tanks = heat stress, dramatically shortened lifespans (2-3 years vs 5-8 years healthy!), faded colors, lethargy, early death. They need room temperature/unheated setups. This is non-negotiable',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'secure lid with no gaps',
          reason: 'They are excellent jumpers especially when excited/spooked! Any gap in lid = escape and death. Jumping occurs spontaneously or during feeding. Tight-fitting lid mandatory',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'groups 8+ fish minimum',
          reason: 'They\'re schooling fish needing groups 8+ for security and natural sparring behaviors! Small groups = stress, hiding, no displays. Large groups = confident schooling, constant sparring displays, active swimming',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'using aquarium heater',
          reason: 'White Clouds are coldwater fish thriving at room temperature (18-20°C) - they don\'t need heaters! Using heaters unnecessarily = heat stress and wasted electricity. Save money - run unheated! Exception: if room drops below 14°C use low-wattage heater maintaining 16-18°C',
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
      'Coldwater setup (14-22°C) - no heater needed!', 
      'Secure lid (jumpers!)', 
      'Groups 8+ minimum (schooling behavior)', 
      'Moderate flow (stream current)', 
      'Heavy planting (security + breeding)', 
      'No tropical tankmates (temp mismatch!)',
    ],

    proTips: [
      "Save money - no heater needed! White Clouds are true coldwater fish thriving at room temperature (18-20°C) - they don't need aquarium heaters! This saves: 1) Initial heater cost (€30-50), 2) Monthly electricity (heaters use 50-100W continuously = €10-20/month!), 3) Equipment failure risk (heater malfunctions = cooked fish). They're comfortable 14-22°C - normal room temps perfect! Exception: If room drops below 14°C in winter, use low-wattage heater maintaining 16-18°C. Most energy-efficient aquarium fish!",
      "The bulletproof beginner fish! White Clouds are literally indestructible making them ideal first fish! They tolerate: 1) Extreme temperature range (5-30°C wild - no other common fish survives this!), 2) Wide pH range (6.0-8.5), 3) Beginner mistakes (overfeeding, irregular maintenance), 4) Parameter fluctuations, 5) Cycling tanks (hardy during nitrogen cycle). They're infinitely hardier than Neon Tetras (which die easily). Perfect for learning aquarium basics with forgiving fish!",
      "'Poor man's neon tetra' - budget alternative! They display similar iridescent neon-blue stripe as Neon Tetras at: 1/3rd the price (€2 vs €6+ for Neons!), 10x the hardiness (Neons sensitive, White Clouds bulletproof!), easier breeding (spawn daily vs difficult Neon breeding), coldwater (no heater needed!). For budget-conscious hobbyists wanting colorful schooling fish: White Clouds are superior choice to Neons!",
      "Easiest breeding egg scatterers ever! White Clouds spawn continuously in planted tanks without special triggers! Setup: 1) Groups 8+ with more females than males, 2) Heavy planting (Java Moss, fine-leaved plants), 3) Quality food 2x daily, 4) Slightly cooler water (18-20°C). That's it - they spawn daily depositing eggs on plants! CRITICAL: Unlike most fish, parents rarely eat eggs/fry (can raise babies in community tank!). Fry appear near surface eating crushed flakes. Colony breeding works brilliantly - easiest breeding project!",
      "Male sparring displays are spectacular! Males constantly perform ritualized combat: facing off, flaring fins to maximum (brilliant red edges!), intensifying colors, slow-motion circling. This looks aggressive but is completely harmless (establishing hierarchy - no injuries!). These displays are why you keep groups - with 8+ fish you get constant fascinating interactions. More males = more sparring (keep balanced sex ratios though!).",
      "Outdoor pond summer option! In temperate climates (Germany, UK, Netherlands, etc.), White Clouds can live in outdoor ponds May-October enjoying natural sunlight, live foods (mosquito larvae!), massive color enhancement! They tolerate down to 5°C but move indoors before first frost (October). Outdoor temps 15-25°C perfect. Then overwinter in unheated indoor aquarium 16-20°C. This seasonal cycle mimics wild temperature fluctuations!",
      "Coldwater plant compatibility! Since White Clouds need cooler temps (18°C), choose plants tolerating lower temps: Best = Java Fern, Anubias, Java Moss, Vallisneria (all thrive 16-22°C). Avoid: Tropical plants needing 24°C+ (Amazon Swords, Rotala, most stem plants struggle in cold). Coldwater plants grow slower but healthier at these temps.",
    ],

    commonMistakes: [
      "Keeping in tropical heated tanks (26°C+). Biggest mistake (80% of failures!). White Clouds are coldwater fish needing 14-22°C! In tropical tanks 26-28°C: heat stress, dramatically shortened lifespans (live 2-3 years vs 5-8 years healthy!), faded colors (lose neon blue), lethargy, constant gasping at surface (overheating!), early death. They need room temperature unheated setups. Keeping them tropical is like keeping goldfish in heated discus tank - it's wrong!",
      "Mixing with tropical fish. White Clouds need 18°C, tropicals need 26°C - incompatible! Either White Clouds suffer heat stress or tropicals freeze. They need specialized coldwater community with hillstream loaches, goldfish, paradise fish. Cannot coexist with Angels, Tetras, Discus, Gouramis (all tropical!).",
      "Small groups (2-4 fish). They're schooling fish needing groups 8+ for security and sparring displays! Small groups = stress, hiding, no fascinating male displays. With 8-12+ fish: confident schooling, constant sparring, active swimming.",
      "No secure lid. They're excellent jumpers! Any gap = escape death. Jumping occurs during feeding excitement or spontaneously. Tight-fitting lid mandatory - this applies to all minnows/danios.",
      "Judging them as 'boring'. Uninformed hobbyists dismiss them as 'cheap plain fish' not realizing: 1) Stunning neon iridescence (rival Neon Tetras!), 2) Fascinating male sparring displays, 3) Easy breeding producing generations, 4) Extreme hardiness, 5) No heater needed! They're incredibly interesting fish in proper groups!",
      "Using aquarium heater unnecessarily. White Clouds are coldwater fish thriving at room temp 18-20°C! They don't need heaters wasting electricity. Exception: If room drops below 14°C use minimal heating to 16°C. Save money!",
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
      notes: 'Weekly 30% water changes. White Cloud Mountain Minnows are extremely hardy tolerating wide parameter ranges! They need coldwater (14-22°C ideal 18°C) - no heater needed at room temperature (saves electricity!). They tolerate pH 6.0-8.5 (very flexible!), GH 5-20 (soft to moderately hard). Keep ammonia/nitrite 0ppm, nitrates under 40ppm (they\'re forgiving!). Moderate flow from filter output (replicates mountain stream currents - they enjoy flow!). Exception heating: If room drops below 14°C in winter, use minimal heater maintaining 16-18°C. Otherwise run unheated. Very forgiving maintenance - perfect beginners.',
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
    sensitivities: ['Heat stress (over 24°C - shortened lifespans!)', 'Chlorine (dechlorinate water)', 'Permanent warm temps (26°C+ = early death)', 'Inbreeding depression (farm-raised stock - genetic issues)'],
  },

  scientificContext: {
    wildHabitat:
      'Tanichthys albonubes was originally endemic to White Cloud Mountain (Baiyun Mountain/Baiyunshan) ~15km north of Guangzhou city, Guangdong Province, China - a collection of ~30 peaks. Type locality habitat: Cool clear shallow mountain streams (spring-fed tributaries), moderate flow, rocky substrates with pebbles/cobblestones, dense aquatic vegetation (trailing marginal plants), water depth typically 30-60cm, temps with extreme seasonal fluctuation (5°C winter to 30°C summer - remarkable tolerance!), neutral to slightly alkaline water pH 6.5-7.5. Conservation status: The species is extinct in type locality! Between 1980-2001 no specimens were found anywhere (presumed extinct from pollution + tourism development turning mountain into resort with cable cars, hotels, parks). In 2001 rediscovered at isolated locations: 1) Small relict populations near original locality (Guangdong), 2) Coastal streams in Shanwei, Guangdong, 3) Ha Long Bay drainage, Quang Ninh Province, Vietnam, 4) Hainan Island population (warmer water - less cold-tolerant). Now thrives in aquarium trade worldwide - conservation success!',
    sexualDimorphism:
      'Easy to sex when mature (6+ months). Males: More vibrant colors (brighter neon-blue stripe, intense red fin edges!), slimmer torpedo-shaped streamlined bodies, more pointed dorsal/anal fins, constant sparring displays (fin flaring). Females: Duller coloration (pale neon stripe, faded red), rounder fuller abdomens especially when gravid (egg-filled bellies noticeably plump), slightly larger overall, less displaying. Most reliable: Red fin intensity (bright red = male, pale red = female) + body shape (slim = male, round = female). Easy sexing for breeding setup.',
    variants: ['Wild-type (olive-brown with neon stripe)', 'Golden White Cloud (bright yellow-gold body - popular!)', 'Longfin White Cloud (extended flowing fins)', 'Hong Kong variety (slightly larger)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger:
      'White Cloud Mountain Minnows are easiest egg scatterers to breed - spawning daily without special triggers! Natural breeding occurs continuously in planted community tanks. Enhance breeding: 1) Groups 8-10+ with more females than males (2-3 females per male spreads male attention), 2) Heavy feeding with quality foods (frozen bloodworms, brine shrimp, high-protein pellets - 2-3x daily for 1-2 weeks fattening females), 3) Heavy planting especially fine-leaved (Java Moss, spawning mops, Cabomba - egg deposition sites), 4) Slightly cooler water (18-20°C - mimics spring conditions), 5) Clean water (frequent changes). That\'s it - no complex triggers needed! Males display/spawn constantly.',
    fryCare:
      'Breeding behavior: Males perform constant sparring establishing hierarchy then pursue gravid females. Spawning occurs throughout day: male chases female into plants, pair swims side-by-side, female releases 5-10 eggs scattering onto plant leaves (adhesive eggs stick to surfaces!), male fertilizes, repeats producing 130+ eggs per female per month (3-5 eggs daily!). CRITICAL: White Clouds rarely eat eggs/fry (unlike most fish!) - this makes them easiest breeding project! Options: 1) Community breeding: Leave adults/eggs together in planted tank - many fry survive to adulthood naturally (easiest!), 2) Spawning mop method: Place yarn mops, check daily, remove egg-laden mops to separate rearing tank (higher survival). Eggs hatch 2-3 days (tiny transparent fry!). Fry free-swimming 2-3 days after hatch hiding in plants near surface. First foods: infusoria (days 1-4), crushed flakes/powder food (day 5+), baby brine shrimp (day 7+ - growth accelerates!), micro-pellets (2 weeks+). Feed fry 3-4x daily. Growth moderate: 1cm at 6 weeks, 2cm at 3 months, 3cm at 6 months, sexually mature 6-8 months. Easiest breeding experience!',
    notes:
      'White Cloud Mountain Minnows win award for easiest breeding of any egg scatterer! Unlike most fish requiring: complex triggers, separate breeding tanks, removing adults (egg eaters), difficult fry foods - White Clouds spawn daily in community tanks and parents ignore eggs/fry! Many hobbyists have "surprise fry" appearing constantly. This makes them perfect first breeding project teaching breeding basics with forgiving species. Colony breeding works brilliantly: setup 60L+ planted tank, add group 10-15 mixed sex, feed heavily, watch generations appear! Very rewarding.',
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
