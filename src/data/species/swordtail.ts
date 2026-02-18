import type { Species } from '../../types/species';

export const swordtail: Species = {
  id: 'sword-001',
  slug: 'swordtail',
  imageUrl: '/images/species/swordtail.jpg',
  funFact: "Swordtails are olympic jumpers capable of clearing 30cm+ from water surface - they're the most athletic livebearers! Any gap in lid = certain escape and death from dehydration within hours. They're named for males' spectacular SWORD-SHAPED TAIL EXTENSION (up to 5cm long!) used to impress females, but longer swords actually make them slower swimmers (hydrodynamic drag - fashion over function!). Here's the catch: males are relentless harassers chasing females 24/7 for breeding - single female = stressed to death within weeks! They need 1 male : 3+ females ratio spreading harassment. Watch males display curved body shaking charging at females in courtship. They're fast swimmers (can swim backward faster than mollies forward!) from fast-flowing Mexican rivers. Can hybridize with Platies (same genus!) producing infertile offspring. From Central America!",

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
    color: 'Sexually dimorphic with stunning varieties! Wild type males: Olive-green body with red/orange horizontal stripe from eye to tail, SPECTACULAR SWORD-SHAPED TAIL EXTENSION (3-5cm long yellow/orange/black edges - only males!). Streamlined torpedo body. Females: Olive-green/silver body, no sword, rounder/fuller profile especially when gravid (belly hugely swollen with developing fry). Bred varieties (hundreds!): Red Velvet (solid deep red), Pineapple (yellow body with black trim), Neon (electric blue/green metallic), Kohaku (white with red patches like koi), Lyretail (double-sword lyre-shaped tail), Wagtail (black fins with colored body), Marigold (solid orange-gold). Males always have gonopodium (modified anal fin) and sword',
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
      'Swordtails appreciate heavy planting with open swimming space - they\'re fast athletic swimmers needing horizontal swimming runs! Best setup: Dense background/side planting (Vallisneria, Amazon Sword - tall robust plants tolerating hard water) creating territories and fry hiding spots, with open center/front (80-100cm clear runs for sprinting!). They\'re from fast-flowing vegetated rivers and love: floating plants (Water Sprite, Frogbit - creates security, fry survival zones), stem plants (Ludwigia, Rotala - they graze algae from leaves), Java Fern/Anubias (hard leaves). They will not harm plants (may nibble algae but safe for planted tanks). Dense planting essential for fry survival (adults eat their own babies!).',
    hardscape: ['Smooth river stones (creates natural stream look)', 'Driftwood branches (territorial markers)', 'Open swimming space center (critical for athletic fish!)', 'No sharp edges (fast swimmers + jumping risk)'],
  },

  behavior: {
    tags: ['active','jumper', 'livebearer', 'semi-aggressive'],
    minGroupSize: 6,
    description:
      'Swordtails are extremely active athletic livebearers displaying dynamic behaviors! They\'re fast swimmers constantly cruising all tank levels (middle/top preference) exploring, displaying, chasing. Watch them sprint in straight lines (can swim backward faster than mollies forward!) and perform spectacular jumps (30cm+ from surface - olympic athletes!). Males are relentless harassers: constantly chasing females with courtship displays (curved body shaking, sword flashing, charging behavior). Males establish dominance hierarchies fighting for mating rights. They\'re aggressive toward other males: dominant male bullies subordinates constantly unless large groups (3+ males) or proper female ratios. Watch them graze algae from surfaces constantly. CRITICAL: They\'re prolific breeders producing 20-100 fry every 4-6 weeks!',
    
    compatibility: {
      goodMates: ['Other livebearers (Mollies, Platies - can hybridize with Platies!)', 'Large active tetras (Congo, Bleeding Heart)', 'Rainbowfish (match energy)', 'Fast barbs (Rosy, Tiger)', 'Danios (Zebra, Giant - fast swimmers)', 'Corydoras (bottom level)', 'Peaceful gouramis (Pearl, Honey)', 'Larger shrimp (Amano)'],
      badMates: ['Bettas (may harass/nip)', 'Guppies (often bullied by aggressive males)', 'Slow/long-finned fish', 'Very small fish (may eat fry-sized fish)', 'Aggressive cichlids', 'Goldfish (incompatible temps/parameters)'],
      notes:
        'Swordtails are semi-aggressive active fish best for robust community tanks! They\'re peaceful toward different-species tankmates but aggressive toward other male Swordtails and can harass slower fish. CRITICAL: 1 male : 3+ females ratio prevents female exhaustion from constant harassment! Too many males = constant fighting/chasing. They prefer hard alkaline water (like Mollies/Platies). WARNING: Can hybridize with Platies (same genus Xiphophorus) producing infertile hybrids with health issues. Best with other active fish matching their energy. Safe with larger shrimp but may eat shrimplets.',
      
      rules: [
        {
          type: 'requires',
          condition: 'secure lid with no gaps - jumping prevention mandatory',
          reason: 'CRITICAL #1 CAUSE OF DEATH: Swordtails are olympic jumpers clearing 30cm+ from surface! They jump when: startled, chasing during courtship, displaying dominance. Any gap in lid (even 2-3cm) = certain escape → found dried on floor within hours. 40% of Swordtail deaths from jumping! Secure tight-fitting lid with no gaps is absolutely mandatory',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: '1 male : 3+ females ratio',
          reason: 'Males are relentless harassers chasing females 24/7 for breeding! Single female or 1:1 ratio = female stressed/exhausted to death within weeks from constant pursuit. Multiple females = harassment spreads. Too many males = constant fighting. This ratio is critical for peaceful tank',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'keeping 2 males together',
          reason: 'With 2 males, dominant male will relentlessly bully subordinate = stress, hiding, injuries, death! Keep either: 1 male or 3+ males (aggression distributes). 2 males = death sentence for weaker male. This is non-negotiable',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'hybridization with Platies',
          reason: 'Swordtails and Platies are same genus (Xiphophorus) and readily hybridize producing infertile offspring with health issues (deformed spines, organ problems, shortened lifespans). Keep separate for pure breeding lines',
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
      'Secure lid with no gaps (olympic jumpers!) - critical', 
      '1 male : 3+ females ratio (harassment prevention)', 
      'Hard alkaline water (GH 12-30+, pH 7.0-8.5)', 
      'Spacious tank 120L+ (athletic swimmers need space)', 
      'Heavy planting with open swimming areas', 
      'Population control plan (prolific breeders!)',
    ],

    proTips: [
      "Secure lid = survival! Swordtails are the #1 most athletic livebearers and notorious jumpers clearing 30cm+ from surface! They jump when: startled (door slamming, sudden lights), chasing during courtship displays, displaying dominance, spooked. 40% of Swordtail deaths = found dried on floor! Any gap (even 2-3cm) = escape within days. Use tight-fitting glass/acrylic lid with no gaps around filter/heater. Check lid security weekly. This is mandatory.",
      "1 male : 3+ females ratio prevents harassment! Males are relentless chasers pursuing females 24/7 for breeding with courtship displays (curved body shaking, charging, nipping). Single female = stressed/exhausted to death within 2-3 weeks! 1:1 ratio still too much. 1 male : 3-5 females = harassment spreads, females get rest. Watch behavior - if one female constantly hiding, add more females.",
      "Avoid 2-male setups! With 2 males, dominant male will bully subordinate constantly = hiding, stress, injuries, death! Keep either: 1 male (peaceful) or 3+ males (aggression distributes across hierarchy). 2 males = death sentence for weaker fish. Many 'my male turned aggressive' complaints are 2-male tanks.",
      "Hard alkaline water essential! Swordtails are from hard mineral-rich Central American streams and need hard water (GH 12-30+, pH 7.0-8.5). In soft acidic water they develop: shimmy disease (nervous shaking), weakened immune system, shortened lifespans. Use crushed coral in filter or Seachem Equilibrium if tap water soft. Test GH/pH monthly.",
      "Prepare for fry explosion! Swordtails are prolific: females produce 20-100 fry every 4-6 weeks continuously! Without control, tank overruns within months. Natural solution: Adults eat most fry (this is OK and natural!). Dense planting saves some fry. Only raise first 1-2 broods. Don't feel guilty - this is nature.",
      "Late-blooming males confuse sexing! Some males develop slowly appearing female-like for 4-6 months before growing sword/gonopodium (genetic variation). Don't be surprised if 'female' grows sword at 6 months! This is normal. Always plan for potential late bloomers when stocking.",
      "They love algae! Swordtails are constant grazers picking at algae/biofilm from surfaces. This is natural behavior and beneficial (algae control!). Provide: algae-covered surfaces, spirulina flakes (2-3x weekly), blanched vegetables (zucchini, cucumber). Algae-rich diet = vibrant colors.",
    ],

    commonMistakes: [
      "No secure lid. Biggest killer! 40% of Swordtail deaths! They're olympic jumpers clearing 30cm+ from surface. Any gap (even small) = escape → found dried on floor within hours. Always use tight-fitting lid with no gaps. Check security weekly. This is mandatory.",
      "Wrong male:female ratio. Males are relentless harassers! Single female or 1:1 ratio = female stressed/chased to death within weeks. Too many males = constant fighting. 1 male : 3+ females is critical for peaceful tank and female survival.",
      "Keeping 2 males. Dominant male will bully subordinate constantly = hiding, stress, death! Keep 1 male or 3+ males (aggression distributes). 2 males = disaster. Many 'aggressive male' problems are 2-male setups.",
      "Tank too small (under 120L). Swordtails are large (14cm) athletic fish needing horizontal swimming space! In tanks under 120L they become understimulated, bored, aggressive. 60-80L tanks = cramped, stressed fish. 120L+ with 80-100cm length = natural behaviors.",
      "Soft acidic water. Swordtails need hard alkaline water (GH 12-30+, pH 7.0-8.5)! In soft water (GH under 10) they develop shimmy disease (nervous shaking), poor colors, immune issues. Like Mollies, they waste away without minerals. Raise hardness for health.",
      "No population control. Swordtails breed constantly: 20-100 fry every 4-6 weeks! Without intervention tank overruns within 6 months. Natural solution: Let adults eat most fry (this is OK!). Only save first 1-2 broods. This is natural population control.",
      "Mixing with Platies for breeding. Swordtails and Platies readily hybridize (same genus) producing infertile offspring with health issues (deformed spines, organ damage). Keep separate if you want pure breeding lines.",
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
      notes: 'Weekly 30% water changes. Swordtails are hardy tolerating wide parameter ranges (perfect beginners!). They prefer hard alkaline water (GH 12-30+, pH 7.0-8.5) - use crushed coral in filter or Seachem Equilibrium if tap water soft. Keep nitrates under 40ppm. They\'re cold-tolerant (18-28°C) - unheated option if room temp stable. Moderate flow from filter output (they\'re from flowing streams). Very forgiving maintenance but secure lid mandatory (jumpers!).',
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
      'Xiphophorus hellerii inhabits fast-flowing clear streams and rivers in Central America (Mexico - Atlantic slopes, Guatemala, Honduras, Belize). Wild habitat: moderate depth (50-200cm) streams with moderate to strong current, clear oxygenated water, rocky/gravel substrate, heavy aquatic vegetation (Vallisneria, submerged plants), hard alkaline water (GH 15-25+, pH 7.5-8.2 from limestone geology), temps 20-28°C. They\'re active swimmers in current zones feeding on: algae/biofilm, aquatic insects, small crustaceans, plant matter. Males use sword displays to impress females in courtship.',
    sexualDimorphism:
      'Easy to sex (usually!). Males: Slimmer, more streamlined torpedo-shaped bodies. Spectacular sword-shaped tail extension (3-5cm long lower caudal fin rays - iconic!). Gonopodium (modified anal fin - long pointed tube). More vibrant colors. Slightly smaller overall. Females: Fuller, rounder, much deeper-bodied especially when gravid (carrying fry - belly hugely swollen, dark gravid spot visible). No sword (rounded tail). Normal fan-shaped anal fin. Larger overall size. Late-blooming males: Some males develop slowly appearing female-like for 4-6 months before growing sword/gonopodium (genetic variation - confusing!). Juveniles difficult to sex until 3-4 months.',
    variants: ['Green Swordtail (wild-type)', 'Red Velvet (solid red)', 'Pineapple (yellow with black)', 'Neon (metallic blue-green)', 'Kohaku (white with red patches)', 'Lyretail (double-sword lyre-tail)', 'Wagtail (black fins + colored body)', 'Marigold (orange-gold)', 'Hundreds more!'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger:
      'Swordtail breeding is effortless - hardest fish to prevent breeding! They breed continuously with males and females present requiring no special conditions. Natural triggers: 1) Presence of males (gonopodium for internal fertilization), 2) Well-fed females (quality diet speeds gestation), 3) Warm temps (24-26°C speeds gestation - 28 days vs 35 days cooler). Females can store sperm for 6+ months producing multiple broods from single mating! Gestation: 28-35 days depending on temp.',
    fryCare:
      'Swordtails are livebearers giving birth to free-swimming fry (20-100 per brood every 4-6 weeks!). Watch gravid females: hugely swollen bellies (box-shaped profile), dark gravid spot, hiding/restless behavior before birth. Birth occurs over hours - female releases fry one-by-one. CRITICAL: Adults (including mother!) eat their own fry immediately! For fry survival: 1) Provide dense plants especially floating (Java Moss, Hornwort, Water Sprite - fry hide here), 2) Separate gravid female to breeder box 1-2 days before birth (return mother after - don\'t leave her confined long!), 3) Raise fry in separate tank. Fry are large at birth (8-10mm) and accept crushed flakes immediately (no special foods needed!). Feed 2-3x daily. Growth fast: 2cm at 6 weeks, 4cm at 3 months, sexually mature 4-6 months (females earlier, males later - late bloomers!). Separate sexes at 4 months.',
    notes:
      'Swordtail breeding is too easy (main challenge: population control!). Females produce 20-100 fry every 4-6 weeks continuously. Without intervention tank overruns with hundreds within 6 months. Natural solution: Adults eat most fry (this is natural population control - don\'t feel guilty!). Dense planting saves some fry naturally. Only raise first 1-2 broods intentionally. WARNING: Swordtails readily hybridize with Platies (same genus Xiphophorus) producing infertile hybrids with health issues. Also: Different Swordtail color morphs interbreed creating mixed offspring (can be fun or mess up breeding lines!).',
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
