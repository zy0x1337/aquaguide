import type { Species } from '../../types/species';

export const cherryBarb: Species = {
  id: 'barb-001',
  slug: 'cherry-barb',
  imageUrl: '/images/species/cherry-barb.jpg',
  funFact: "Cherry Barbs are the 'gentle souls' of the barb family—peaceful, shy, and utterly non-aggressive (unlike their infamous cousin, the Tiger Barb). Male Cherry Barbs transform into stunning crimson-red jewels during breeding season or when showing off to females—like aquatic peacocks! But here's the critical catch: if you have too many males competing for too few females, the poor girls get harassed to death. Literally. Males chase females relentlessly, causing stress, exhaustion, and death. The magic ratio? 2-3 females per 1 male. Get it right and watch the boys put on a dazzling red display show; get it wrong and watch tragedy unfold.",

  taxonomy: {
    scientificName: 'Puntius titteya',
    commonName: 'Cherry Barb',
    family: 'Cyprinidae',
    origin: 'Sri Lanka (endemic - found nowhere else in wild)',
    region: 'Asia',
    biotope: 'Shaded, slow-moving forest streams and tributaries with dense vegetation, leaf litter, sandy/muddy substrates, and soft acidic water',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'Males: Stunning cherry-red body (especially during breeding/courtship) with dark horizontal stripe from nose to tail. Color intensity varies—brightest when competing for females. Females: Silvery-yellow to peachy-tan with same dark stripe, rounder body. Males are visual wow; females are understated elegance',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 22, max: 27, ideal: 25 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    gh: { min: 4, max: 15 },
    kh: { min: 2, max: 10 },
    flow: 'low',
    substrate: 'dark',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.6,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Cherry Barbs thrive in heavily planted tanks that mimic their shaded Sri Lankan forest streams. Dense background and side planting (Vallisneria, Cryptocoryne, Rotala, Ludwigia) provides security and creates visual barriers—critical for reducing male aggression toward females. They love to dart through vegetation in playful chases. Floating plants (Water Sprite, Frogbit) diffuse light and create dim conditions they prefer (wild habitat is heavily shaded by forest canopy). Dark substrate (black sand/gravel) makes male red coloration pop dramatically. Open swimming areas in center allow for schooling displays and courtship behavior.',
    hardscape: ['Driftwood (creates tannins + territories)', 'Smooth River Stones', 'Leaf litter (Indian Almond, Oak leaves)', 'Caves (rarely used but appreciated)'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'active', 'shy'],
    minGroupSize: 8,
    description: 'Cherry Barbs are the anti-Tiger-Barb—peaceful, shy, and completely non-aggressive toward tankmates. They\'re the gentle introverts of the barb world. In groups (8+), they form loose shoals that explore the tank confidently, but become timid and hide in small groups. Males establish subtle dominance hierarchies through fin displays and body posturing—no actual fighting, just aquatic posturing contests. When courting, males turn intensely red and perform elaborate dances (shimmying, fin spreading, circling females). It\'s beautiful to watch! HOWEVER: Males are relentless in pursuing females. If male:female ratio is wrong (too many males), females get chased constantly, become exhausted, stop eating, and die from stress. This is the #1 Cherry Barb keeping mistake. Proper ratio (2-3 females per male) diffuses harassment—males compete with each other instead of focusing on one poor female.',
    
    compatibility: {
      goodMates: ['Peaceful Tetras (Neon, Cardinal, Ember)', 'Rasboras (all species)', 'Corydoras', 'Kuhli Loaches', 'Otocinclus', 'Peaceful Gouramis (Honey, Pearl)', 'Snails', 'Shrimp (Cherry, Amano)'],
      badMates: ['Aggressive fish', 'Tiger Barbs (different temperament—will stress Cherry Barbs)', 'Large Cichlids', 'Fin-nippers', 'Very active aggressive feeders'],
      notes: 'Cherry Barbs are excellent community fish—peaceful, non-aggressive, shrimp-safe, and compatible with most peaceful species. They\'re much calmer than Tiger Barbs or other aggressive barbs. Safe with all invertebrates (shrimp, snails). They\'re active swimmers but not hyper or chaotic. Males may chase each other during courtship but never harm tankmates. Best kept with similarly peaceful, calm species.',
      
      rules: [
        {
          type: 'requires',
          condition: 'male to female ratio 1:2 or 1:3',
          reason: 'CRITICAL: Too many males = females harassed to death. Males chase females relentlessly for breeding. If ratio is wrong (e.g., 6 males, 2 females), the 2 females get chased 24/7, become exhausted, stop eating, and die from stress. Always keep 2-3 females per male. Example: 2 males + 6 females = happy tank',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'tiger barbs or aggressive barbs',
          reason: 'Cherry Barbs are peaceful and shy. Tiger Barbs are aggressive and boisterous. Mixing them = stressed Cherry Barbs that hide constantly and lose color. Keep Cherry Barbs with calm peaceful fish only',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'group size 8+ fish',
          reason: 'Cherry Barbs are shy and insecure in small groups. Groups of 6-8 tolerate but 10+ creates natural confident behavior. Larger groups also help diffuse male aggression',
          severity: 'medium',
        },
        {
          type: 'requires',
          condition: 'dense planting with visual barriers',
          reason: 'Heavy planting provides hiding spots for females to escape male harassment. Open bare tanks = nowhere to hide = stressed fish. Dense planting breaks lines of sight and reduces chasing',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
        midwater: '10-20',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 3,
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
      'CRITICAL: Maintain 2-3 females per 1 male ratio (wrong ratio = dead females)', 
      'Groups of 8+ fish for confidence', 
      'Dense planting with hiding spots',
      'Soft, slightly acidic water preferred (wild habitat)',
    ],

    proTips: [
      "MALE:FEMALE RATIO IS EVERYTHING. This is the #1 Cherry Barb mistake. Too many males = dead females from harassment. Aim for 2-3 females per male. Example setups: 2M + 6F = 8 fish total; 3M + 9F = 12 fish total. Males are bright red (easy to sex), females are yellow/silver. Count carefully when buying!",
      "Males turn brightest red when competing for females. If you want maximum color, keep proper ratio. Males show off their best colors when they have 'girls to impress.' All-male groups = dull colors and constant fighting.",
      "Cherry Barbs are peaceful unlike Tiger Barbs. Don't mix them! Tiger Barbs are boisterous bullies; Cherry Barbs are shy introverts. Mixing them stresses Cherry Barbs who hide constantly and lose color.",
      "Spirulina flakes enhance red coloration in males. High-quality foods with carotenoids (shrimp, krill) intensify reds. Feed varied diet for best colors.",
      "Dark substrate + tannins = stunning male color. Black sand/gravel provides contrast that makes red males pop. Add Indian Almond leaves for tannin-stained water (mimics wild habitat).",
      "Shrimp-safe! Cherry Barbs are one of the few barbs that won't harass shrimp. Safe with Cherry Shrimp, Amano Shrimp, Neocaridina. Great for planted shrimp tanks.",
    ],

    commonMistakes: [
      "Wrong male:female ratio = #1 killer. 6 males + 2 females = disaster. Females get chased relentlessly, become exhausted, stop eating, hide constantly, and die within weeks. Males need 2-3 females each to diffuse harassment. Always buy more females than males!",
      "Keeping in small groups (under 6). Cherry Barbs are shy and insecure in small numbers. Groups of 3-5 hide constantly and never show natural behavior. 8-12 fish creates confident, active schools.",
      "Mixing with Tiger Barbs or aggressive barbs. Tiger Barbs are bullies; Cherry Barbs are peaceful. Mixing them = stressed Cherry Barbs that hide and fade. Keep Cherry Barbs with calm peaceful fish only.",
      "Bare tanks with no plants. Cherry Barbs are forest stream fish adapted to dense vegetation. Bare open tanks = constant stress and hiding. Heavy planting brings out confidence and colors.",
      "All-male groups for 'better colors.' Yes, males are redder, but all-male groups = constant fighting, stress, dull colors. Proper male:female ratio = brightest males (they show off for females!).",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'flakes', 'brine-shrimp', 'daphnia'],
      supplements: ['bloodworms', 'spirulina', 'vegetables'],
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
      notes: 'Weekly 30% water changes maintain stability. Cherry Barbs are hardy and tolerate parameter fluctuations better than tetras. Vacuum substrate to remove waste. Keep nitrates below 20ppm for best health and coloration.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'fin-rot', 'velvet', 'dropsy', 'parasites'],
    sensitivities: ['Cold water (<22°C)', 'Stress from wrong male:female ratio (females die)', 'Stress from aggressive tankmates', 'Poor diet (color fades)'],
  },

  scientificContext: {
    wildHabitat: "Cherry Barbs are endemic to Sri Lanka—found nowhere else in the wild! They inhabit shaded, slow-moving forest streams and tributaries in lowland rainforests. Water is soft (GH 4-8), slightly acidic (pH 6.0-6.5), warm (24-26°C), and stained amber by tannins from decaying leaves. Substrate is sandy/muddy with thick leaf litter. Dense vegetation (submerged plants, roots, overhanging branches) creates dim, shaded environment. Wild populations are threatened by habitat loss (deforestation, agriculture). Aquarium trade relies on captive breeding—most Cherry Barbs sold are farm-raised (good for conservation!).",
    sexualDimorphism: "Easy to sex! Males: Bright cherry-red body (especially when breeding/excited), slimmer body, dark horizontal stripe. Color varies—brightest when competing for females, duller when stressed/hiding. Females: Silvery-yellow to peachy-tan, rounder fuller body (especially when gravid/carrying eggs), same dark stripe. Juveniles (under 3 months) are all drab and impossible to sex—wait until maturity (4-6 months) to determine sex.",
    variants: ['Wild Type (standard red males, yellow females)', 'Albino Cherry Barb (pale peachy-pink, less common)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Cherry Barbs are easy to breed—one of the best beginner egg-layers! Trigger spawning with: 1) Proper male:female ratio (1M:2-3F), 2) Conditioning with high-protein live/frozen foods (bloodworms, brine shrimp, daphnia) for 2 weeks until females visibly plump, 3) Slight temperature increase to 26-27°C, 4) Large water change (40-50%) with slightly cooler water to simulate rainy season. Males turn intensely red and perform elaborate courtship dances—shimmying, fin spreading, circling females.',
    fryCare: 'Females scatter 200-300 adhesive eggs among fine-leaved plants (Java Moss, spawning mops) or substrate. No parental care—adults eat eggs immediately. Remove adults after spawning or use spawning mop/separate tank. Eggs hatch in 24-36 hours at 26°C into tiny larvae. Fry become free-swimming at 3-5 days. Feed infusoria or liquid fry food initially, then newly-hatched baby brine shrimp after 5-7 days. Fry are hardy and accept crushed flakes quickly (easier than most egg-layers). Growth is moderate: 1cm at 4 weeks, 2cm at 8 weeks. Separate by size to prevent cannibalism.',
    notes: 'Cherry Barbs breed readily and prolifically in community tanks if conditions are right. Many breeders report surprise fry appearing in planted tanks—some survive to adulthood on their own. For deliberate breeding, use separate spawning tank with spawning mops or dense Java Moss, condition breeders well, and remove adults post-spawn. Fry are easy to raise compared to tetras or other egg-layers. One of the best beginner breeding projects!',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'females-harassed-to-death', cause: 'wrong-male-female-ratio-too-many-males', frequency: 0.42 },
      { issue: 'stress-hiding-no-color', cause: 'small-groups-or-no-planting', frequency: 0.20 },
      { issue: 'stressed-by-tiger-barbs', cause: 'mixed-with-aggressive-barbs', frequency: 0.15 },
      { issue: 'color-fading', cause: 'poor-diet-or-bright-lighting', frequency: 0.12 },
      { issue: 'ich-outbreak', cause: 'cold-water-or-temperature-shock', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 140, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
