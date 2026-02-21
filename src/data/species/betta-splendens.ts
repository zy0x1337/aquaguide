import type { Species } from '../../types/species';

export const bettaSplendens: Species = {
  id: 'betta-001',
  slug: 'betta-splendens',
  imageUrl: '/images/species/betta-splendens.jpg',
  funFact: "Bettas have a specialized 'Labyrinth Organ' that allows them to breathe atmospheric air directly, helping them survive in oxygen-poor puddles and shallow rice paddies. This adaptation lets them thrive where other fish would suffocate! Watch them gulp air at the surface. It's not a problem, it's their superpower. Fun fact: they can recognize their owners and even learn tricks like following your finger or jumping through hoops.",

  taxonomy: {
    scientificName: 'Betta splendens',
    commonName: 'Siamese Fighting Fish',
    family: 'Osphronemidae',
    origin: 'Thailand, Cambodia, Vietnam (Chao Phraya and Mekong Basin)',
    region: 'Asia',
    biotope: 'Shallow rice paddies, swamps, ditches, and floodplains with dense vegetation, warm water (26-30°C), and low oxygen levels',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 7,
    color: 'Highly variable due to selective breeding. Common colors: red, blue, turquoise, white, black, yellow, orange, multicolor. Patterns include solid, butterfly, marble, koi, dragon scale. Fin types: Veiltail (long flowing), Halfmoon (180° spread), Plakat (short fighter), Crowntail (spiky rays), Dumbo (giant pectorals)',
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
      preference: 0.85,
    },
    
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 20,
      territories: 1,
    },
    
    bioloadMultiplier: 1.0,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Bettas need resting spots near the surface because long fins are heavy and exhausting to hold up. Provide broad-leaved plants (Anubias, Amazon Swords) positioned near surface, floating plants (Water Sprite, Frogbit), or Betta hammocks (suction cup leaves). Use ONLY silk or live plants. Plastic plants shred delicate fins and cause fin rot. Dense planting provides security and reduces stress. Leave open swimming space in center.',
    hardscape: ['Driftwood (creates tannins)', 'Smooth Stones', 'Caves (hiding spots)', 'Indian Almond Leaves'],
  },

  behavior: {
    tags: ['jumper', 'surface_dweller', 'labyrinth_fish', 'territorial', 'semi-aggressive'],
    minGroupSize: 1,
    description: 'Bettas are solitary and highly territorial. Males are infamous for fighting to the death with other males (hence "Siamese Fighting Fish"). They flare (spread fins and gills) to intimidate rivals, impress females, or when they see their reflection. Despite aggression toward other Bettas, they\'re intelligent and interactive with humans. They recognize their owners, swim to the front when you approach, and can learn tricks like following fingers, jumping through hoops, or pushing balls. Some keepers do daily "flare training" with mirrors for exercise (5 minutes max to avoid stress). Bettas explore their environment actively, rest on leaves near surface, and often build bubble nests even without females present (instinct).',
    
    compatibility: {
      goodMates: ['Snails (Nerite, Mystery)', 'Kuhli Loaches', 'Corydoras (peaceful bottom dwellers)', 'Peaceful Rasboras (Harlequin, Chili)', 'Small Tetras (Ember, Neon in 60L+ tanks)', 'Otocinclus'],
      badMates: ['Other male Bettas (NEVER)', 'Female Bettas (except breeding or sororities)', 'Guppies (colorful fins trigger aggression)', 'Gouramis (territorial conflict)', 'Fin-nippers (Tiger Barbs, Serpae Tetras)', 'Angelfish (long fins)', 'Goldfish (different water requirements)'],
      notes: 'Bettas are best kept alone. They\'re perfectly happy as solo fish and don\'t get lonely. Community tanks can work in 60L+ tanks with careful tankmate selection, but many Bettas are too aggressive even for peaceful fish. Avoid anything with long flowing fins (mistaken for rival Bettas) or bright colors (triggers flaring/aggression). Fast-moving fish stress them out during feeding. Monitor closely and have backup plan if aggression occurs.',
      
      rules: [
        {
          type: 'avoid',
          target: 'other male bettas',
          reason: 'Males will fight to the death. Even visual contact through tank dividers causes chronic stress. NEVER house two males together.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'long-finned fish',
          reason: 'Triggers flaring and aggression. Bettas attack guppies, angelfish, and fancy goldfish mistaking them for rival Bettas.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'community tank size 60L+',
          reason: 'Community setups only work in larger tanks (60L+) with many hiding spots, dense planting, and careful tankmate selection. 20L tanks should be Betta-only.',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'female bettas',
          reason: 'Females can work in "sororities" (5+ females, 100L+ tank, expert care) but male-female pairs will fight outside brief breeding. Never permanent.',
          severity: 'medium',
        },
        {
          type: 'requires',
          condition: 'surface access',
          reason: 'Bettas MUST access water surface to breathe air via labyrinth organ. Never block surface completely with plants or decorations.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '5-10',
        bottom: '2-6',
      },
    },
    
    aggressionLevel: {
      intraspecific: 10,
      interspecific: 6,
      territorial: 8,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'medium',
      targets: ['guppies', 'angelfish', 'long-finned goldfish', 'other bettas'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Heater is mandatory (tropical species, 24-30°C)', 
      'Tight-fitting lid required (excellent jumpers)', 
      'Silk or live plants only (no plastic, tears fins)',
      'Low flow filter (long fins exhaust in strong current)',
      'Surface access for labyrinth breathing',
    ],

    proTips: [
      "Use a 'Betta hammock' (suction cup leaf) or tall broad-leaved plant (Anubias) near surface. Long fins are heavy and Bettas need to rest horizontally near air without swimming constantly. This prevents fin damage and exhaustion.",
      "Flare training: Show him a mirror for 5 minutes daily. It provides mental stimulation and exercise (like a workout for his fins). BUT don't overdo it! More than 5-10 minutes causes chronic stress. Some keepers skip this entirely and Bettas are fine.",
      "Feed variety for vibrant colors. Pellets are convenient but monotonous. Supplement with frozen bloodworms, brine shrimp, or daphnia 2-3x per week. You'll see his colors intensify dramatically within weeks.",
      "Indian Almond Leaves (IAL): Add 1-2 dried leaves to tank. They release beneficial tannins (water turns tea-colored) that prevent fin rot, mimic natural habitat, and reduce stress. Replace monthly.",
      "MYTH BUSTER: Bettas DO need filters and heaters! Wild Bettas live in warm (26-30°C) water. Room temperature (18-22°C) causes lethargy, immune suppression, and shortened lifespan. Bowls and vases are cruel.",
      "Bubble nests: Males blow bubble nests at surface even without females. This is NORMAL instinct and sign of health/happiness, not distress. Don't destroy nests during water changes if possible.",
    ],

    commonMistakes: [
      "Keeping them in bowls, vases, or <10L tanks. Bettas need minimum 20L with filter and heater like any tropical fish. Bowls cause ammonia poisoning, temperature swings, and early death. The 'Betta in a vase' trend is animal cruelty.",
      "Plastic plants. These shred delicate fins, leading to tears, infections, and fin rot. Use silk plants (soft fabric) or live plants only. Run pantyhose test: if it snags pantyhose, it'll shred fins.",
      "Thinking they're lonely and adding tankmates. Bettas are solitary by nature and perfectly happy alone. Adding fish often causes stress, aggression, or injury. Solo Bettas live longer, calmer lives.",
      "Strong filter flow. Long-finned Bettas (Halfmoon, Veiltail) get exhausted fighting current. Use sponge filters or baffle output. If Betta is constantly pushed around or hiding, flow is too strong.",
      "Overfeeding. Bettas have stomachs the size of their eyeball! Feed 3-4 pellets once daily. Overfeeding causes bloat, swim bladder issues, and constipation. Fast them one day per week (Sunday = fasting day).",
      "Ignoring temperature. Bettas are TROPICAL. Below 24°C they become lethargic, stop eating, and develop infections. Never keep them at room temperature without heaters. 26°C is ideal.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets', 'brine-shrimp', 'bloodworms'],
      supplements: ['daphnia', 'frozen-food'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Weekly 25-30% water changes. Small tanks (20L) may need twice-weekly changes due to faster parameter swings. Vacuum substrate to remove uneaten food and waste. Use dechlorinator (chlorine is toxic). Match temperature during changes (sudden temp drops shock them).',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['fin-rot', 'velvet', 'dropsy', 'ich', 'columnaris', 'swim-bladder-disorder'],
    sensitivities: [
      'Cold water (below 24°C)', 
      'Ammonia and nitrite spikes', 
      'Sharp plastic plants (fin damage)', 
      'Strong water flow (exhaustion)',
      'Overfeeding (bloat, swim bladder)',
      'Stress from tankmate aggression',
    ],
  },

  scientificContext: {
    wildHabitat: "Wild Betta splendens inhabit shallow (10-30cm depth), slow-moving or stagnant waters in Southeast Asia: rice paddies, floodplains, ditches, swamps, and forest streams. Water is warm (26-30°C), soft, slightly acidic (pH 6.0-7.0), and oxygen-poor due to decaying vegetation and stagnant conditions. During dry season, pools shrink to puddles and Bettas survive by breathing atmospheric air via labyrinth organ. Wild Bettas are less colorful (dull red-brown with green iridescence) and have shorter fins than domesticated varieties. They've been selectively bred for fighting and beauty for over 150 years.",
    sexualDimorphism: "Males: much longer fins (up to 10cm tail spread in Halfmoons), brighter and more intense colors, slimmer bodies, pointed ventral fins. Females: shorter fins (1-2cm), duller colors (though modern varieties are stunning), rounder fuller bodies, visible egg spot (white dot/ovipositor between pelvic fins). Males flare dramatically; females rarely flare. Males build bubble nests; females don't.",
    variants: [
      'Veiltail (long flowing asymmetrical tail)',
      'Halfmoon (180° tail spread)',
      'Plakat (short-finned, original fighting type)',
      'Crowntail (spiky webbing reduction)',
      'Dumbo Ear (giant pectoral fins)',
      'Delta/Super Delta (triangular tail)',
      'Koi Betta (marble coloration like koi fish)',
      'Alien Betta (iridescent scales)',
      'Wild Type (short fins, dull red-brown)',
    ],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'Condition pair separately for 2 weeks with high-protein foods (bloodworms, brine shrimp). Introduce female to male\'s territory in clear container so they see each other. When female shows vertical breeding stripes (ready) and male builds large bubble nest, release her. Spawning is violent. Male wraps around female under nest, squeezing eggs out. Immediately remove female after spawning (male attacks her to protect eggs).',
    fryCare: 'Male guards bubble nest and eggs alone (remove female or he kills her). Eggs hatch in 24-48 hours. Fry become free-swimming at 3-5 days. Remove male at this point or he eats fry. Feed fry infusoria or liquid fry food for first week, then baby brine shrimp. Separate males at 8-12 weeks when they start fighting. You\'ll need dozens of jars/tanks for males.',
    notes: 'Breeding Bettas is intense. Spawning looks violent (male chases, bites, body-slams female) but is normal. Torn fins are expected. Female needs recovery time afterward. Major challenge: separating 50-100+ male fry into individual containers at 8-12 weeks. Most breeders cull heavily or have buyer networks. Not recommended for beginners unless prepared for massive commitment.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.78,
    
    commonFailures: [
      { issue: 'fin-rot', cause: 'plastic-plants-or-poor-water-quality', frequency: 0.40 },
      { issue: 'stress-death', cause: 'no-heater-or-cold-temperature', frequency: 0.25 },
      { issue: 'swim-bladder-disorder', cause: 'overfeeding-or-poor-diet', frequency: 0.15 },
      { issue: 'aggression-injuries', cause: 'tankmate-conflict', frequency: 0.10 },
      { issue: 'jumped-out', cause: 'no-lid', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
