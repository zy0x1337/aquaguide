import type { Species } from '../../types/species';

export const swordtail: Species = {
  id: 'sword-001',
  slug: 'swordtail',
  imageUrl: '/images/species/swordtail.jpg',
  funFact: "Swordtails are OLYMPIC JUMPERS capable of clearing 30cm+ from water surface - they're the MOST ATHLETIC livebearers! ANY GAP in lid = certain escape and death from dehydration within hours. They're named for males' spectacular SWORD-SHAPED TAIL EXTENSION (up to 5cm long!) used to impress females, but longer swords actually make them SLOWER SWIMMERS (hydrodynamic drag - fashion over function!). Here's the catch: males are RELENTLESS HARASSERS chasing females 24/7 for breeding - single female = stressed to death within weeks! They need 1 MALE : 3+ FEMALES ratio spreading harassment. Watch males display CURVED BODY SHAKING charging at females in courtship. They're FAST SWIMMERS (can swim backward faster than mollies forward!) from fast-flowing Mexican rivers. Can HYBRIDIZE with Platies (same genus!) producing infertile offspring. From Central America!",

  taxonomy: {
    scientificName: 'Xiphophorus hellerii',
    commonName: 'Swordtail / Green Swordtail',
    family: 'Poeciliidae',
    origin: 'Central America (Mexico, Guatemala, Honduras - fast-flowing streams and rivers)',
    region: 'Central America',
    biotope: 'Fast-flowing clear streams and rivers with heavy vegetation, moderate to strong current, hard alkaline water, rocky/gravel substrate',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 14,
    color: 'SEXUALLY DIMORPHIC with stunning varieties! WILD TYPE MALES: Olive-green body with red/orange horizontal stripe from eye to tail, SPECTACULAR SWORD-SHAPED TAIL EXTENSION (3-5cm long yellow/orange/black edges - only males!). Streamlined torpedo body. FEMALES: Olive-green/silver body, NO SWORD, rounder/fuller profile especially when gravid (belly hugely swollen with developing fry). BRED VARIETIES (hundreds!): RED VELVET (solid deep red), PINEAPPLE (yellow body with black trim), NEON (electric blue/green metallic), KOHAKU (white with red patches like koi), LYRETAIL (double-sword lyre-shaped tail), WAGTAIL (black fins with colored body), MARIGOLD (solid orange-gold). Males always have GONOPODIUM (modified anal fin) and sword',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 120,
    tempC: { min: 18, max: 28, ideal: 24 },
    ph: { min: 7.0, max: 8.5, ideal: 7.5 },
    gh: { min: 12, max: 30 },
    kh: { min: 6, max: 15 },
    flow: 'moderate',
    substrate: 'gravel',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 120,
      verticalCM: 40,
      territories: 0,
    },
    
    bioloadMultiplier: 1.8,
  },

  habitat: {
    planting: 'dense',
    plantingNotes:
      'Swordtails appreciate HEAVY PLANTING with OPEN SWIMMING SPACE - they\'re FAST ATHLETIC SWIMMERS needing horizontal swimming runs! Best setup: DENSE background/side planting (Vallisneria, Amazon Sword - tall robust plants tolerating hard water) creating territories and fry hiding spots, with OPEN CENTER/FRONT (80-100cm clear runs for sprinting!). They\'re from fast-flowing vegetated rivers and love: FLOATING PLANTS (Water Sprite, Frogbit - creates security, fry survival zones), stem plants (Ludwigia, Rotala - they graze algae from leaves), Java Fern/Anubias (hard leaves). They will NOT harm plants (may nibble algae but safe for planted tanks). Dense planting essential for FRY SURVIVAL (adults eat their own babies!).',
    hardscape: ['Smooth river stones (creates natural stream look)', 'Driftwood branches (territorial markers)', 'Open swimming space center (CRITICAL for athletic fish!)', 'NO SHARP EDGES (fast swimmers + jumping risk)'],
  },

  behavior: {
    tags: ['active','jumper', 'livebearer', 'semi-aggressive'],
    minGroupSize: 6,
    description:
      'Swordtails are EXTREMELY ACTIVE ATHLETIC LIVEBEARERS displaying dynamic behaviors! They\'re FAST SWIMMERS constantly cruising all tank levels (middle/top preference) exploring, displaying, chasing. Watch them SPRINT in straight lines (can swim backward faster than mollies forward!) and perform SPECTACULAR JUMPS (30cm+ from surface - Olympic athletes!). Males are RELENTLESS HARASSERS: constantly chasing females with COURTSHIP DISPLAYS (curved body shaking, sword flashing, charging behavior). Males establish DOMINANCE HIERARCHIES fighting for mating rights. They\'re AGGRESSIVE toward other males: dominant male bullies subordinates constantly unless large groups (3+ males) or proper female ratios. Watch them graze algae from surfaces constantly. CRITICAL: They\'re PROLIFIC BREEDERS producing 20-100 fry every 4-6 weeks!',
    
    compatibility: {
      goodMates: ['Other livebearers (Mollies, Platies - can hybridize with Platies!)', 'Large active tetras (Congo, Bleeding Heart)', 'Rainbowfish (match energy)', 'Fast barbs (Rosy, Tiger)', 'Danios (Zebra, Giant - fast swimmers)', 'Corydoras (bottom level)', 'Peaceful gouramis (Pearl, Honey)', 'Larger shrimp (Amano)'],
      badMates: ['Bettas (may harass/nip)', 'Guppies (often bullied by aggressive males)', 'Slow/long-finned fish', 'Very small fish (may eat fry-sized fish)', 'Aggressive cichlids', 'Goldfish (incompatible temps/parameters)'],
      notes:
        'Swordtails are SEMI-AGGRESSIVE ACTIVE FISH best for ROBUST COMMUNITY TANKS! They\'re peaceful toward different-species tankmates but AGGRESSIVE toward other male Swordtails and can HARASS slower fish. CRITICAL: 1 MALE : 3+ FEMALES ratio prevents female exhaustion from constant harassment! Too many males = constant fighting/chasing. They prefer HARD ALKALINE WATER (like Mollies/Platies). WARNING: Can HYBRIDIZE with PLATIES (same genus Xiphophorus) producing infertile hybrids with health issues. Best with OTHER ACTIVE FISH matching their energy. Safe with larger shrimp but may eat shrimplets.',
      
      rules: [
        {
          type: 'requires',
          condition: 'SECURE LID with NO GAPS - jumping prevention MANDATORY',
          reason: 'CRITICAL #1 CAUSE OF DEATH: Swordtails are OLYMPIC JUMPERS clearing 30cm+ from surface! They jump when: startled, chasing during courtship, displaying dominance. ANY GAP in lid (even 2-3cm) = certain escape → found dried on floor within hours. 40% of Swordtail deaths from jumping! Secure tight-fitting lid with NO GAPS is absolutely mandatory',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: '1 male : 3+ females ratio',
          reason: 'Males are RELENTLESS HARASSERS chasing females 24/7 for breeding! Single female or 1:1 ratio = female stressed/exhausted to death within weeks from constant pursuit. Multiple females = harassment spreads. Too many males = constant fighting. This ratio is critical for peaceful tank',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'keeping 2 males together',
          reason: 'With 2 males, dominant male will RELENTLESSLY BULLY subordinate = stress, hiding, injuries, death! Keep EITHER: 1 male OR 3+ males (aggression distributes). 2 males = death sentence for weaker male. This is non-negotiable',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'hybridization with Platies',
          reason: 'Swordtails and Platies are SAME GENUS (Xiphophorus) and readily hybridize producing infertile offspring with health issues (deformed spines, organ problems, shortened lifespans). Keep separate for pure breeding lines',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '12-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 7,
      interspecific: 4,
      territorial: 5,
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
      risk: 'medium',
      targets: ['slow-moving fish', 'long-finned fish (Bettas, fancy Guppies)', 'other male Swordtails (dominance behavior)'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'SECURE LID with NO GAPS (Olympic jumpers!) - CRITICAL', 
      '1 male : 3+ females ratio (harassment prevention)', 
      'HARD alkaline water (GH 12-30+, pH 7.0-8.5)', 
      'SPACIOUS TANK 120L+ (athletic swimmers need space)', 
      'Heavy planting with open swimming areas', 
      'Population control plan (prolific breeders!)',
    ],

    proTips: [
      "SECURE LID = SURVIVAL! Swordtails are the #1 MOST ATHLETIC LIVEBEARERS and NOTORIOUS JUMPERS clearing 30cm+ from surface! They jump when: startled (door slamming, sudden lights), chasing during courtship displays, displaying dominance, spooked. 40% of Swordtail deaths = found dried on floor! ANY GAP (even 2-3cm) = escape within days. Use tight-fitting glass/acrylic lid with NO GAPS around filter/heater. Check lid security weekly. This is MANDATORY.",
      "1 MALE : 3+ FEMALES ratio prevents harassment! Males are RELENTLESS CHASERS pursuing females 24/7 for breeding with courtship displays (curved body shaking, charging, nipping). Single female = stressed/exhausted to death within 2-3 weeks! 1:1 ratio still too much. 1 male : 3-5 females = harassment spreads, females get rest. Watch behavior - if one female constantly hiding, add more females.",
      "AVOID 2-MALE SETUPS! With 2 males, dominant male will BULLY subordinate constantly = hiding, stress, injuries, death! Keep EITHER: 1 male (peaceful) OR 3+ males (aggression distributes across hierarchy). 2 males = death sentence for weaker fish. Many 'my male turned aggressive' complaints are 2-male tanks.",
      "HARD ALKALINE WATER essential! Swordtails are from hard mineral-rich Central American streams and NEED hard water (GH 12-30+, pH 7.0-8.5). In soft acidic water they develop: shimmy disease (nervous shaking), weakened immune system, shortened lifespans. Use crushed coral in filter or Seachem Equilibrium if tap water soft. Test GH/pH monthly.",
      "Prepare for FRY EXPLOSION! Swordtails are PROLIFIC: females produce 20-100 fry every 4-6 weeks continuously! Without control, tank overruns within months. Natural solution: Adults eat most fry (this is OK and natural!). Dense planting saves some fry. Only raise first 1-2 broods. Don't feel guilty - this is nature.",
      "LATE-BLOOMING MALES confuse sexing! Some males develop slowly appearing female-like for 4-6 months before growing sword/gonopodium (genetic variation). Don't be surprised if 'female' grows sword at 6 months! This is normal. Always plan for potential late bloomers when stocking.",
      "They LOVE ALGAE! Swordtails are constant grazers picking at algae/biofilm from surfaces. This is natural behavior and beneficial (algae control!). Provide: algae-covered surfaces, spirulina flakes (2-3x weekly), blanched vegetables (zucchini, cucumber). Algae-rich diet = vibrant colors.",
    ],

    commonMistakes: [
      "No secure lid. BIGGEST KILLER! 40% of Swordtail deaths! They're OLYMPIC JUMPERS clearing 30cm+ from surface. Any gap (even small) = escape → found dried on floor within hours. Always use tight-fitting lid with NO GAPS. Check security weekly. This is mandatory.",
      "Wrong male:female ratio. Males are RELENTLESS HARASSERS! Single female or 1:1 ratio = female stressed/chased to death within weeks. Too many males = constant fighting. 1 male : 3+ females is critical for peaceful tank and female survival.",
      "Keeping 2 males. Dominant male will BULLY subordinate constantly = hiding, stress, death! Keep 1 male OR 3+ males (aggression distributes). 2 males = disaster. Many 'aggressive male' problems are 2-male setups.",
      "Tank too small (under 120L). Swordtails are LARGE (14cm) ATHLETIC FISH needing horizontal swimming space! In tanks under 120L they become understimulated, bored, aggressive. 60-80L tanks = cramped, stressed fish. 120L+ with 80-100cm length = natural behaviors.",
      "Soft acidic water. Swordtails NEED hard alkaline water (GH 12-30+, pH 7.0-8.5)! In soft water (GH under 10) they develop shimmy disease (nervous shaking), poor colors, immune issues. Like Mollies, they waste away without minerals. Raise hardness for health.",
      "No population control. Swordtails breed CONSTANTLY: 20-100 fry every 4-6 weeks! Without intervention tank overruns within 6 months. Natural solution: Let adults eat most fry (this is OK!). Only save first 1-2 broods. This is natural population control.",
      "Mixing with Platies for breeding. Swordtails and Platies readily HYBRIDIZE (same genus) producing infertile offspring with health issues (deformed spines, organ damage). Keep separate if you want pure breeding lines.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'spirulina', 'algae-wafers', 'vegetables'],
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
      notes: 'Weekly 30% water changes. Swordtails are HARDY tolerating wide parameter ranges (perfect beginners!). They prefer HARD ALKALINE WATER (GH 12-30+, pH 7.0-8.5) - use crushed coral in filter or Seachem Equilibrium if tap water soft. Keep nitrates under 40ppm. They\'re COLD-TOLERANT (18-28°C) - unheated option if room temp stable. Moderate flow from filter output (they\'re from flowing streams). Very forgiving maintenance but SECURE LID mandatory (jumpers!).',
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
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'fin-rot', 'shimmy-disease', 'velvet', 'fungal-infections'],
    sensitivities: ['Soft water (causes shimmy disease!)', 'Ammonia spikes', 'New Tank Syndrome', 'Overcrowding stress'],
  },

  scientificContext: {
    wildHabitat:
      'Xiphophorus hellerii inhabits FAST-FLOWING CLEAR STREAMS and rivers in Central America (Mexico - Atlantic slopes, Guatemala, Honduras, Belize). Wild habitat: moderate depth (50-200cm) streams with MODERATE TO STRONG CURRENT, clear oxygenated water, rocky/gravel substrate, HEAVY AQUATIC VEGETATION (Vallisneria, submerged plants), HARD ALKALINE WATER (GH 15-25+, pH 7.5-8.2 from limestone geology), temps 20-28°C. They\'re active swimmers in current zones feeding on: algae/biofilm, aquatic insects, small crustaceans, plant matter. Males use SWORD DISPLAYS to impress females in courtship.',
    sexualDimorphism:
      'EASY TO SEX (usually!). MALES: Slimmer, more streamlined torpedo-shaped bodies. SPECTACULAR SWORD-SHAPED TAIL EXTENSION (3-5cm long lower caudal fin rays - iconic!). GONOPODIUM (modified anal fin - long pointed tube). More vibrant colors. Slightly smaller overall. FEMALES: Fuller, rounder, MUCH DEEPER-BODIED especially when gravid (carrying fry - belly hugely swollen, dark gravid spot visible). NO SWORD (rounded tail). Normal fan-shaped anal fin. Larger overall size. LATE-BLOOMING MALES: Some males develop slowly appearing female-like for 4-6 months before growing sword/gonopodium (genetic variation - confusing!). Juveniles difficult to sex until 3-4 months.',
    variants: ['Green Swordtail (wild-type)', 'Red Velvet (solid red)', 'Pineapple (yellow with black)', 'Neon (metallic blue-green)', 'Kohaku (white with red patches)', 'Lyretail (double-sword lyre-tail)', 'Wagtail (black fins + colored body)', 'Marigold (orange-gold)', 'Hundreds more!'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger:
      'Swordtail breeding is EFFORTLESS - hardest fish to PREVENT breeding! They breed continuously with males and females present requiring NO special conditions. Natural triggers: 1) Presence of males (gonopodium for internal fertilization), 2) Well-fed females (quality diet speeds gestation), 3) Warm temps (24-26°C speeds gestation - 28 days vs 35 days cooler). Females can STORE SPERM for 6+ MONTHS producing multiple broods from single mating! Gestation: 28-35 days depending on temp.',
    fryCare:
      'Swordtails are LIVEBEARERS giving birth to FREE-SWIMMING FRY (20-100 per brood every 4-6 weeks!). Watch gravid females: hugely swollen bellies (box-shaped profile), dark gravid spot, hiding/restless behavior before birth. Birth occurs over hours - female releases fry one-by-one. CRITICAL: Adults (including mother!) EAT THEIR OWN FRY immediately! For fry survival: 1) Provide DENSE PLANTS especially FLOATING (Java Moss, Hornwort, Water Sprite - fry hide here), 2) Separate gravid female to BREEDER BOX 1-2 days before birth (return mother after - don\'t leave her confined long!), 3) Raise fry in separate tank. Fry are LARGE at birth (8-10mm) and accept CRUSHED FLAKES immediately (no special foods needed!). Feed 2-3x daily. Growth FAST: 2cm at 6 weeks, 4cm at 3 months, sexually mature 4-6 months (females earlier, males later - late bloomers!). Separate sexes at 4 months.',
    notes:
      'Swordtail breeding is TOO EASY (main challenge: POPULATION CONTROL!). Females produce 20-100 fry every 4-6 weeks continuously. Without intervention tank overruns with hundreds within 6 months. Natural solution: Adults eat most fry (this is NATURAL population control - don\'t feel guilty!). Dense planting saves some fry naturally. Only raise first 1-2 broods intentionally. WARNING: Swordtails readily HYBRIDIZE with PLATIES (same genus Xiphophorus) producing infertile hybrids with health issues. Also: Different Swordtail color morphs interbreed creating mixed offspring (can be fun or mess up breeding lines!).',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'jumping-escape-death', cause: 'no-secure-lid-or-gaps-in-cover', frequency: 0.40 },
      { issue: 'female-harassment-exhaustion', cause: 'wrong-male-female-ratio-single-female', frequency: 0.25 },
      { issue: 'male-bullying-death', cause: 'keeping-2-males-dominant-kills-subordinate', frequency: 0.15 },
      { issue: 'shimmy-disease', cause: 'soft-water-under-gh-12-mineral-deficiency', frequency: 0.10 },
      { issue: 'fry-overpopulation-crisis', cause: 'no-population-control-plan', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 150, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
