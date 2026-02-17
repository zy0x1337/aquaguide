import type { Species } from '../../types/species';

export const bettaSplendensFemale: Species = {
  id: 'betta-002',
  slug: 'betta-splendens-female',
  imageUrl: '/images/species/betta-splendens-female.jpg',
  funFact: "Female Bettas are OFTEN underestimated as 'docile' versions of males—WRONG! They're fierce, feisty, and fully capable of aggression. The difference? Males fight rivals on SIGHT; females establish HIERARCHIES through calculated bullying. In Sorority tanks (female-only groups), they create brutal pecking orders with a queen bee ruling through intimidation. But here's the secret: SINGLE female Bettas are EASIER than males for community tanks—they're less territorial, faster swimmers, and compatible with more tankmates. Think of them as 'confident but not psychotic.'",

  taxonomy: {
    scientificName: 'Betta splendens',
    commonName: 'Siamese Fighting Fish (Female)',
    family: 'Osphronemidae',
    origin: 'Thailand, Cambodia, Vietnam - Mekong Basin and Chao Phraya River drainage',
    region: 'Asia',
    biotope: 'Shallow rice paddies, ditches, stagnant floodplains, and slow-moving streams with dense vegetation, low oxygen, warm water',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'SHORT fins (compared to males) but MODERN females are STUNNING! Wild-type: brownish-red with faint horizontal stripes. Domesticated varieties: Koi (white/orange/black patches like koi fish), Galaxy (blue/red speckled like stars), Candy (pastel gradients), Dumbo (giant pectoral fins). Females show vertical BREEDING STRIPES (dark bars) when receptive to males. Stressed females display horizontal stripes',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 20,
    tempC: { min: 24, max: 30, ideal: 26 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    kh: { min: 3, max: 15 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'midwater',
      preference: 0.70,
    },
    
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 20,
      territories: 1,
    },
    
    bioloadMultiplier: 0.5,
  },

  habitat: {
    planting: 'heavy',
    plantingNotes: 'Female Bettas LOVE planted tanks! For SINGLE females in community tanks: plant moderately with broad-leaved plants (Anubias, Amazon Swords) for resting spots near surface, plus floating plants (Water Sprite, Frogbit) to diffuse light and create territories. For SORORITIES (5+ females): JUNGLE-STYLE planting is MANDATORY—dense vegetation that breaks lines of sight prevents constant chasing. Think impenetrable Amazon rainforest: Vallisneria forests, Cryptocoryne thickets, driftwood mazes, floating plant carpets. If you can see from one side of tank to other = not dense enough for sorority. Single females are plant-safe; sororities may uproot delicate carpets during territory disputes.',
    hardscape: ['Driftwood (creates territories + tannins)', 'Smooth Caves', 'Indian Almond Leaves (botanicals)', 'Floating cork bark (resting platforms)'],
  },

  behavior: {
    tags: ['semi-aggressive', 'surface_dweller', 'labyrinth_fish', 'territorial', 'hierarchy'],
    minGroupSize: 1,
    description: 'Female Bettas are COMPLEX creatures—less aggressive than males but NOT peaceful! SINGLE females are confident, curious, and surprisingly good community fish. They claim a small territory (10-20cm radius, usually near surface) but coexist peacefully with most tankmates. They're FAST swimmers (short fins = speed) and bold during feeding—no shrinking violets here! Unlike males, single females rarely harass tankmates and focus energy on exploring and foraging. SORORITIES (5+ females) are a DIFFERENT ANIMAL ENTIRELY. Females in groups establish STRICT hierarchies through intimidation: chasing, fin nipping, body slamming. There\'s always an alpha female (queen bee) who dominates, mid-ranking enforcers, and stressed bottom-rank scapegoats. Hierarchy is NEVER stable—constant micro-aggressions, occasional full fights, and sudden rank changes. Stressed females show horizontal stripes and hide constantly. Sororities require EXPERT monitoring—daily observation for injuries, stress, and escalating violence. They\'re not beginner projects.',
    
    compatibility: {
      goodMates: ['Peaceful Tetras (Neon, Cardinal, Ember)', 'Corydoras', 'Rasboras', 'Kuhli Loaches', 'Snails (Nerite, Mystery)', 'Peaceful bottom-dwellers', 'Fast midwater schoolers'],
      badMates: ['Male Bettas (NEVER together except brief breeding)', 'Other female Bettas (unless proper sorority setup)', 'Fin-nippers (Tiger Barbs, Serpae Tetras)', 'Guppies (males resemble Bettas = attacked)', 'Gouramis (territorial conflict)', 'Long-finned slow fish'],
      notes: 'SINGLE female Bettas are EASIER community fish than males! They\'re less territorial, faster swimmers, and compatible with more tankmates. HOWEVER: NEVER keep 2 females together—they\'ll fight to death. Either keep 1 ALONE in community tank OR 5+ in proper sorority setup (100L+, heavily planted, expert-level care). NEVER keep male + female together permanently—males harass females to death outside brief breeding encounters (hours, not days). Female Bettas are safe with most peaceful community fish but will ATTACK fish with long flowing fins (mistaken for rival Bettas) or bright red coloration (triggers aggression).',
      
      rules: [
        {
          type: 'avoid',
          target: 'male Bettas',
          reason: 'NEVER keep male + female together permanently. Males harass females relentlessly outside breeding (which lasts hours). Female will be stressed, injured, or killed. Breeding requires separate conditioning, supervised spawning, immediate separation',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: '2-4 female Bettas together',
          reason: 'CRITICAL: 2-4 females = BLOODBATH. Dominant female bullies others to death with no hierarchy diffusion. Either keep 1 female ALONE or 5+ in proper sorority (100L+ tank, jungle planting). TWO females = disaster waiting to happen',
          severity: 'critical',
        },
        {
          type: 'expert',
          condition: 'Sorority tanks (5+ females)',
          reason: 'Sororities are ADVANCED projects requiring: 100L+ tank, jungle-style planting, 5+ females (odd numbers), daily observation, backup isolation tanks, stress management skills. Failure rate is HIGH—injuries, stress, deaths common. NOT for beginners. Single females in community tanks are MUCH easier',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'guppies and long-finned fish',
          reason: 'Female Bettas may attack male guppies (bright colors + flowing tails resemble rival Bettas) and other long-finned slow fish. Monitor carefully and remove if aggression occurs',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: '0-1',
        midwater: '10-30',
        bottom: '6-15',
      },
    },
    
    aggressionLevel: {
      intraspecific: 6,
      interspecific: 2,
      territorial: 4,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 0,
    },
    
    finNipping: {
      risk: 'low',
      targets: ['long-finned slow fish', 'guppies', 'other female bettas'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Tight-fitting lid (excellent jumpers!)', 
      'Warm water (26-28°C ideal)', 
      'Surface access for labyrinth breathing',
      'Low flow (short fins handle current better than males but still prefer calm water)',
      'FOR SORORITIES ONLY: 100L+ tank, jungle planting, 5+ females, daily monitoring, backup isolation tank',
    ],

    proTips: [
      "SINGLE female Bettas are UNDERRATED community fish! They're EASIER than males: less territorial, faster swimmers (short fins), and compatible with more tankmates. If you want a Betta in a community tank, choose a SINGLE FEMALE over a male. She'll claim a small territory but coexist peacefully with Tetras, Corydoras, Rasboras.",
      "Ovipositor (egg spot): White dot on belly between pelvic fins. If you see it = DEFINITELY female. Young females may not show it yet. Males NEVER have it.",
      "Modern female varieties (Koi, Galaxy, Candy, Dumbo) are STUNNING—rival males in beauty! Don't judge females by drab pet store tanks. In planted tanks with good food and low stress, they bloom into gorgeous fish with vibrant colors.",
      "Short fins = SPEED. Female Bettas are FAST swimmers and excellent at competing for food in community tanks. Males with giant fins struggle; females zoom in and grab pellets effortlessly.",
      "SORORITY REALITY CHECK: Success rate is <50% even for experienced keepers. Requires 100L+ tank, 5-9 females (odd numbers), JUNGLE planting, daily observation, and backup tanks for injured/bullied fish. If you're new to Bettas, skip sororities. Keep ONE female in community tank instead—it's easier, safer, and she'll be happier.",
      "Breeding stripes: Vertical dark bars appear when female is receptive to male. Horizontal stripes = stress. Vertical = 'I'm interested'; Horizontal = 'Help, I'm scared.'",
    ],

    commonMistakes: [
      "Thinking females are 'friendly' or 'peaceful.' They're LESS aggressive than males but still SEMI-AGGRESSIVE. Respect their personality—they're confident hunters, not timid schooling fish.",
      "Keeping male + female together permanently. Breeding is a TEMPORARY meeting (2-24 hours max) under supervision. Males harass females constantly outside spawning. Female will be stressed to death. ALWAYS separate after breeding.",
      "Attempting sororities without research. 2-4 females = GUARANTEED bloodbath (dominant female kills others). Sororities need 5+ females, 100L+ tanks, jungle planting, and expert monitoring. Failure means injuries, stress, deaths. If unsure, keep ONE female in community tank.",
      "Judging female beauty by pet store appearance. Store females are stressed, pale, and crammed in tanks. Give her planted tank, good food, warm water—watch her transform into a vibrant beauty in 2-4 weeks.",
      "Assuming females are slower or weaker. SHORT FINS = SPEED and AGILITY. Females are FASTER, more efficient swimmers than males. They're also just as aggressive when defending territory.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets', 'bloodworms', 'brine-shrimp'],
      supplements: ['daphnia', 'mysis-shrimp'],
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
      notes: 'Weekly 30% water changes. Bettas are messy eaters and produce moderate waste. Vacuum substrate to remove uneaten food. Keep nitrates below 20ppm. Warm water (26-28°C) is critical—Bettas are tropical fish and suffer below 24°C.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'low',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['fin-rot', 'dropsy', 'ich', 'velvet', 'columnaris', 'popeye'],
    sensitivities: ['Cold water (<24°C)', 'Stress (sorority dynamics = #1 cause)', 'Ammonia and nitrites', 'Sudden parameter changes', 'Overfeeding (bloat)'],
  },

  scientificContext: {
    wildHabitat: "Female Betta splendens inhabit shallow, warm, stagnant waters in Southeast Asia: rice paddies, ditches, floodplains, slow-moving streams, and swamps. These are LOW-OXYGEN environments (hence labyrinth organ evolution). Water is soft, slightly acidic, warm (26-30°C), and densely vegetated. During dry season, pools shrink and Bettas survive in puddles by breathing atmospheric air. Females are LESS territorial than males in the wild—they tolerate proximity when food/shelter is abundant but still establish loose hierarchies.",
    sexualDimorphism: "SHORT FINS (1-2cm) vs males' flowing fins (5-10cm+). SMALLER size (5cm vs males 6-7cm). EGG SPOT (ovipositor): white dot on belly between pelvic fins (males lack this). BREEDING STRIPES: vertical dark bars when receptive; horizontal stripes when stressed. BODY SHAPE: females rounder, fuller belly (especially when gravid/carrying eggs). BEHAVIOR: females less aggressive toward other species but brutal toward each other in hierarchies.",
    variants: ['Wild Type (brownish-red with faint stripes)', 'Koi Female (white/orange/black patches)', 'Galaxy Female (blue/red speckled)', 'Candy Female (pastel gradients)', 'Dumbo Ear Female (giant pectoral fins)', 'Crowntail Female (spiky fin rays)', 'Halfmoon Female (180° tail spread)'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'intermediate',
    trigger: 'Breeding Female Bettas requires careful planning: 1) CONDITION pair separately for 2 weeks with high-protein live foods (bloodworms, brine shrimp) until female is plump with eggs (visible white belly), 2) Introduce female to male\'s territory (breeding tank with bubble nest) in CLEAR CONTAINER first so they see each other without contact, 3) Female shows VERTICAL BREEDING STRIPES when receptive (dark bars), 4) Release female. Male courts aggressively—chasing, displaying, building nest. Female will be harassed heavily. Watch carefully! If female shows horizontal stripes (stress) or hides constantly, REMOVE HER. 5) Spawning occurs under bubble nest in embrace (male wraps around female, squeezing eggs out). Violent-looking but normal. 6) IMMEDIATELY remove female after spawning—male will attack her to protect eggs.',
    fryCare: 'Male guards bubble nest and eggs alone. Female plays NO parental role and will EAT eggs/fry if given chance—remove her immediately. Male fans eggs, retrieves fallen eggs, and guards fry for 2-3 days after hatching. Remove male once fry are free-swimming (3-5 days post-hatch) or he\'ll eat them. Fry need infusoria, then baby brine shrimp. Growth is slow; reach 1cm at 4 weeks. Separate males at 8-12 weeks when aggression starts.',
    notes: 'Female Bettas are SPAWNING MACHINES—they produce eggs every 2-3 weeks if well-fed. Breeding stripes (vertical bars) indicate readiness. NEVER leave male + female together permanently. Breeding is VIOLENT—male chases, bites fins, and body-slams female. This is NORMAL courtship but causes injuries. Supervise closely and separate immediately after spawning. Female needs recovery time (1-2 weeks) before next breeding.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'sorority-violence-deaths', cause: '2-4-females-together-or-inadequate-space', frequency: 0.35 },
      { issue: 'female-killed-by-male', cause: 'kept-together-permanently-outside-breeding', frequency: 0.20 },
      { issue: 'stress-from-sorority-hierarchy', cause: 'constant-bullying-by-dominant-females', frequency: 0.18 },
      { issue: 'attacked-guppies-or-tankmates', cause: 'mistaken-for-rival-bettas', frequency: 0.12 },
      { issue: 'jumped-out-of-tank', cause: 'no-lid-or-gaps-in-cover', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
