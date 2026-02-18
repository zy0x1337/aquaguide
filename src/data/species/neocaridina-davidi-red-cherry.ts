import type { Species } from '../../types/species';

export const neocaridinaDavidiRedCherry: Species = {
  id: 'shrimp-018',
  slug: 'cherry-shrimp',
  imageUrl: '/images/species/cherry-shrimp.jpg',
  funFact: "Cherry Shrimp (Neocaridina davidi) are the GATEWAY DRUG of the shrimp-keeping world—once you start, you CAN'T STOP! They breed like RABBITS: start with 10 shrimp, and within 6 months you'll have 200+ tiny cleaning crews marching across your tank. Watch a berried female (carrying eggs): she fans them constantly with her swimmerets like an underwater mother hen, and after 3-4 weeks, TINY PERFECT MINIATURE SHRIMP emerge—no larval stage, just adorable 2mm clones! The color grading system is WILD: Cherry grade = mostly transparent with red spots (€2); Fire Red = entirely opaque crimson (€8+). Want a red tank? Don't mix colors or you'll get BROWN SHRIMP SOUP!",

  taxonomy: {
    scientificName: 'Neocaridina davidi',
    commonName: 'Cherry Shrimp',
    family: 'Atyidae',
    origin: 'China, Taiwan, Korea - cool vegetated streams',
    region: 'Asia',
    biotope: 'Shallow, slow-moving streams and ponds with dense vegetation, rocky substrates, moderate current, and abundant biofilm',
  },

  visuals: {
    iconShape: 'shrimp',
    adultSizeCM: 3,
    color: 'GRADING SYSTEM (low to high): 1) CHERRY GRADE: mostly transparent with light red spots, colorless legs (€1-2). 2) SAKURA GRADE: mostly red body with spotted lower body/legs (€3-4). 3) FIRE RED GRADE: entirely opaque red, red legs, deep color (€5-8). 4) PAINTED FIRE RED: solid crimson, no transparent patches, deepest red (€8-12). Males ALWAYS less colorful than females',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 20,
    tempC: { min: 18, max: 28, ideal: 22 },
    ph: { min: 6.5, max: 8.0, ideal: 7.2 },
    gh: { min: 6, max: 15 },
    kh: { min: 2, max: 10 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.90,
    },
    
    spaceNeeds: {
      horizontalCM: 20,
      verticalCM: 15,
      territories: 0,
    },
    
    bioloadMultiplier: 0.05,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Cherry Shrimp are ALGAE-GRAZING MACHINES that live for biofilm! Plant HEAVILY with Java Moss (CRITICAL—best shrimp plant ever), Marimo moss balls, Java Fern, Anubias, Cryptocoryne, and any plants that grow biofilm. Dense planting provides hiding spots during molting (when they\'re vulnerable) and creates SURFACE AREA for biofilm growth (their primary food source). Floating plants (Water Sprite, Frogbit) diffuse light and drop detritus for grazing. Leaves with BROAD SURFACES (Anubias) become grazing platforms where shrimp congregate like tiny lawnmowers. Avoid sharp decorations—shrimp can puncture shells during molting.',
    hardscape: ['Driftwood (biofilm source)', 'Smooth river stones', 'Terracotta caves (hiding spots)', 'Indian Almond leaves (tannins + biofilm)', 'Lava rock (porous = biofilm heaven)'],
  },

  behavior: {
    tags: ['peaceful', 'algae_eater', 'social', 'active'],
    minGroupSize: 10,
    description: 'Cherry Shrimp are the aquarium\'s TIRELESS JANITORS—constantly grazing, climbing, and cleaning EVERY surface. Watch them work: they walk on glass, plants, substrate, filter intakes, heaters—EVERYTHING becomes a grazing platform. They pick at biofilm, algae, detritus, leftover food, and dead plant matter with their tiny claws. Social creatures that appreciate company—groups of 10+ create natural "grazing parties" where they cluster on favorite feeding spots. Females carrying eggs (berried) become MORE active, constantly fanning eggs with swimmerets to oxygenate them. Males are smaller, less colorful, and faster swimmers. During "mating frenzies," males swim frantically around tank searching for recently-molted females (who release pheromones). It\'s CHAOS: males zoom everywhere in synchronized madness!',
    
    compatibility: {
      goodMates: ['Small peaceful fish (Tetras, Rasboras, Guppies)', 'Peaceful bottom-dwellers (Corydoras, Otocinclus)', 'Other shrimp (Amano, other Neocaridina colors)', 'Snails (all types)', 'Peaceful nano fish'],
      badMates: ['Pufferfish (shrimp hunters)', 'Loaches (eat shrimp)', 'Bettas (sometimes nippy)', 'Large Cichlids', 'Crayfish (eat shrimp)', 'Goldfish (eat shrimp)', 'Angelfish (eat shrimplets)'],
      notes: 'Cherry Shrimp are safe with MOST peaceful community fish. However, shrimplets (babies) are TINY (2mm) and vulnerable—many fish eat them. For MAXIMUM breeding success, keep shrimp-only tanks. In community tanks, provide DENSE MOSS (Java Moss) for shrimplet hiding—some will survive to adulthood. Adult shrimp (2cm+) are generally safe with small peaceful fish. Avoid ANY fish with mouth large enough to swallow adult shrimp.',
      
      rules: [
        {
          type: 'avoid',
          target: 'copper-based products',
          reason: 'CRITICAL: Copper is 100% FATAL to shrimp. Check ALL medications, fertilizers, and tap water for copper content. Always use shrimp-safe products',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'predatory fish (puffers, loaches, large cichlids)',
          reason: 'These species actively HUNT shrimp. Adult shrimp may survive in heavily planted tanks but live in constant stress. NOT recommended',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'stable water parameters',
          reason: 'Shrimp are SENSITIVE to sudden changes (pH swings, temp shocks, ammonia spikes). Drip-acclimate new shrimp for 2+ hours. Gradual changes = healthy shrimp',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'mixing color varieties',
          reason: 'ALL Neocaridina colors interbreed. Red + Blue = BROWN offspring. Yellow + Green = BROWN. Keep ONE color per tank for pure lines or accept wild-type reversion',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
        midwater: '10-20',
        bottom: '10-100',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day', 'night'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 999,
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
      'Stable water parameters (NO sudden changes)', 
      'NO copper products (medications, fertilizers)', 
      'Drip-acclimate for 2+ hours when adding',
      'Calcium for molting (GH 6+ or add cuttlebone/Wonder Shells)',
      'Dense moss (Java Moss) for shrimplet survival',
    ],

    proTips: [
      "Cherry Shrimp are the EASIEST shrimp for beginners—MUCH hardier than Caridina (Crystal/Bee shrimp). They tolerate pH 6.5-8.0, GH 6-15, temp 18-28°C. Almost impossible to kill if you avoid copper and sudden changes. Perfect starter shrimp!",
      "COLOR GRADING ECONOMICS: Cherry grade (€1-2 each) vs Fire Red (€6-10 each). Start with Cherry grade—after breeding, you'll get MIXED grades including higher-quality offspring. Selectively breed best colors = upgrade your colony for free over 6-12 months!",
      "Breeding is AUTOMATIC. No special setup needed. Provide stable parameters, feed well, and they WILL breed. Females carry 20-50 eggs for 3-4 weeks, then release fully-formed shrimplets. Start with 10 shrimp = 100+ within 6 months in shrimp-only tank.",
      "COLOR MIXING WARNING: ALL Neocaridina davidi colors (Red, Blue, Yellow, Orange, Green) are SAME SPECIES and interbreed. Red + Blue = BROWN wild-type offspring. Keep ONE color per tank or accept brown shrimp takeover. Separate tanks = pure color lines.",
      "Molting is NORMAL. Every 4-6 weeks, shrimp shed shell. You'll find translucent empty shells that look EXACTLY like dead shrimp. DON'T remove—shrimp EAT old shells to recycle calcium. Count shrimp to confirm nobody died.",
      "Calcium is CRITICAL. Low GH (<6) = failed molts and death. Add crushed coral, cuttlebone, Wonder Shells, or mineral supplements to provide calcium. Shrimp need calcium to harden new shells after molting.",
      "Dense Java Moss = SHRIMPLET SURVIVAL. In community tanks with fish, shrimplets (2mm babies) hide in moss and graze biofilm. Without moss, fish eat ALL babies. With moss, SOME survive. Shrimp-only tanks = 90%+ survival; community tanks = 10-30% survival.",
    ],

    commonMistakes: [
      "Using copper-based products = INSTANT DEATH. Many plant fertilizers (Flourish, API CO2 Booster) and fish medications (Cupramine, Coppersafe) contain copper. It's 100% FATAL to shrimp. Always check labels for 'invertebrate-safe' or 'shrimp-safe.'",
      "Rapid acclimation = osmotic shock death. Shrimp are MORE sensitive than fish to parameter changes. Dumping them directly into tank = death within hours. DRIP ACCLIMATE for 2-3 hours minimum. Slow and steady wins.",
      "Mixing colors = brown wild-type reversion. 'I'll have a rainbow shrimp tank!' sounds fun until all offspring are BROWN. Genetics favor wild-type coloration. Red + Blue + Yellow = BROWN SHRIMP SOUP. Keep one color per tank.",
      "No calcium supplementation in soft water. GH under 6 = soft water = insufficient calcium for molting. Shrimp get stuck in old shells and die during molts. Add cuttlebone or Wonder Shells to raise GH to 6-10.",
      "Panicking over molted shells. Empty shells look IDENTICAL to dead shrimp. New keepers panic and 'remove dead shrimp'—which was actually just a molt. Shrimp eat molts for calcium recycling. COUNT shrimp or wait 24 hours before removing.",
    ],
    
    feeding: {
      frequency: 'every-other-day',
      primaryFoods: ['biofilm', 'algae-wafers', 'wafers', 'pellets'],
      supplements: ['vegetables', 'spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 20,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Weekly 20-30% water changes. MATCH temperature EXACTLY—shrimp are sensitive to temp swings. Use dechlorinator (chlorine kills shrimp quickly). Don\'t vacuum substrate aggressively—disturbs biofilm and can suck up shrimplets. Gentle maintenance only.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 2,
    commonDiseases: ['molting-failure', 'bacterial-infections', 'vorticella', 'scutariella', 'parasites'],
    sensitivities: ['COPPER (100% fatal)', 'Sudden parameter changes (failed molts)', 'Low GH (calcium deficiency)', 'Medications (most are toxic)', 'Chlorine/chloramine', 'Ammonia/nitrite spikes'],
  },

  scientificContext: {
    wildHabitat: "Cherry Shrimp (Neocaridina davidi) inhabit shallow, slow-moving streams, ponds, and rice paddies in East Asia (China, Taiwan, Korea). Wild specimens are DRAB brownish-green with transparent bodies—NOT red! All color varieties (Red, Blue, Yellow, Orange, Green) are SELECTIVELY BRED from decades of aquarium breeding. Wild habitat has moderate current, dense vegetation, rocky substrates, and abundant biofilm. Water is cooler (18-24°C), neutral pH (6.8-7.5), moderate hardness (GH 8-12). They're HARDY generalists adapted to variable conditions—explaining their aquarium resilience.",
    sexualDimorphism: "FEMALES: Larger (2.5-3cm), rounder belly, MORE COLORFUL (higher grade reds), curved underbelly (swimmerets visible), develop 'saddle' (yellow/green eggs visible through shell on back). When berried (carrying eggs), eggs visible under tail. MALES: Smaller (2cm), slimmer, LESS COLORFUL (1-2 grades lower than females), straight underbelly. Males are faster swimmers. Easy to sex once mature (3+ months).",
    variants: ['Red Cherry (wild-type base)', 'Blue Dream/Velvet (blue)', 'Yellow Golden Back (yellow)', 'Orange Sakura (orange)', 'Green Jade (green)', 'Carbon Rili (black patches)', 'Chocolate (brown—wild-type)', 'ALL are Neocaridina davidi and interbreed!'],
  },

  breeding: {
    method: 'other',
    difficulty: 'beginner',
    trigger: 'Cherry Shrimp breeding is AUTOMATIC—easiest invertebrate to breed! No special setup needed. Provide: 1) Stable parameters (pH 7.0-7.5, GH 8-12, temp 22-25°C), 2) Regular feeding (shrimp pellets, blanched vegetables, biofilm), 3) Calcium for shell growth (GH 8+ or add cuttlebone). Females molt every 4-6 weeks. IMMEDIATELY after molting, they release pheromones that trigger MATING FRENZY: males swim FRANTICALLY around tank searching for female. Once mated, female develops SADDLE (yellow/green eggs visible through shell on back). After 1-2 weeks, saddle eggs move to swimmerets under tail—she\'s now BERRIED.',
    fryCare: 'Females carry 20-50 eggs under tail for 3-4 WEEKS (shorter in warmer water: 3 weeks at 25°C, 4 weeks at 20°C). She fans eggs constantly with swimmerets to oxygenate them. Eggs start yellow/green, darken to brown, then you see TINY EYE SPOTS (eggs about to hatch). After 21-28 days, she releases FULLY-FORMED shrimplets (2mm miniature adults—NO larval stage!). Shrimplets are INDEPENDENT immediately: they graze biofilm, hide in moss, and grow rapidly. NO parental care. In shrimp-only tanks, survival is 80-90%. In community tanks with fish, provide DENSE JAVA MOSS for hiding—survival drops to 10-30%. Shrimplets reach maturity at 3-5 months.',
    notes: 'Cherry Shrimp breed PROLIFICALLY—start with 10 shrimp and you\'ll have 100+ within 6 months in shrimp-only tank. Breeding is CONTINUOUS: once colony establishes, you\'ll ALWAYS have berried females at different stages. No special breeding tank needed—they breed in main tank. For COLOR IMPROVEMENT, selectively cull low-grade shrimp and keep only highest-grade breeders. Over 6-12 months, colony quality improves dramatically (Cherry grade → Sakura/Fire Red).',
  },
  
  experienceData: {
    successRate: 0.90,
    survivalRate: 0.85,
    
    commonFailures: [
      { issue: 'copper-poisoning-mass-death', cause: 'medications-or-fertilizers-with-copper', frequency: 0.30 },
      { issue: 'death-during-acclimation', cause: 'rapid-parameter-change-osmotic-shock', frequency: 0.25 },
      { issue: 'failed-molt-death', cause: 'low-calcium-or-sudden-parameter-shift', frequency: 0.18 },
      { issue: 'brown-offspring-color-loss', cause: 'mixed-neocaridina-colors-interbreeding', frequency: 0.15 },
      { issue: 'shrimplets-eaten-by-fish', cause: 'community-tank-without-dense-moss', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 30, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};
