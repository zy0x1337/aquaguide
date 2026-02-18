import type { Species } from '../../types/species';

export const kuhliLoach: Species = {
  id: 'loach-001',
  slug: 'kuhli-loach',
  imageUrl: '/images/species/kuhli-loach.jpg',
  funFact: "Kuhli Loaches are living noodles creating adorable cuddle piles in caves! They're nearly scaleless (tiny embedded scales) making them look like striped eels or snakes slithering through substrate. Watch groups of 6-10 form 'noodle piles'—tangled masses of loaches sleeping together in caves like spaghetti! They're burrowing machines: disappearing completely into sand for days then suddenly reappearing like magic. Here's the weird part: they can gulp atmospheric air using modified intestines for emergency oxygen (not primary breathing). Males perform spiral spawning dances: pairs twist around each other while swimming to the surface, releasing eggs among floating plant roots. CRITICAL: They're scaleless = highly sensitive to copper medications (deadly—use half-dose everything). From Southeast Asian blackwater streams!",

  imageCredit: {
    photographer: 'Marrabbio2 (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pangio_kuhlii.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },

  taxonomy: {
    scientificName: 'Pangio kuhlii',
    commonName: 'Kuhli Loach',
    family: 'Cobitidae',
    origin: 'Southeast Asia (Indonesia, Malaysia, Thailand - Borneo, Sumatra, Java - blackwater streams)',
    region: 'Asia',
    biotope: 'Shallow forest streams with thick leaf litter substrate, blackwater conditions, mud bottoms, minimal flow, dense vegetation',
  },

  visuals: {
    iconShape: 'eel-like',
    adultSizeCM: 10,
    color: 'Striking! Eel-like/snake-like body with distinctive vertical dark brown/black bands alternating with bright orange/salmon/pink bands (like candy canes). 10-15 bands wrapping around body. Belly lighter. Four pairs of barbels around mouth (sensory whiskers for finding food). Tiny beady black eyes. Nearly scaleless appearance (smooth, slimy skin)',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 24, max: 30, ideal: 26 },
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    gh: { min: 0, max: 10 },
    kh: { min: 0, max: 5 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.98,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 20,
      territories: 0,
    },
    
    bioloadMultiplier: 0.6,
  },

  habitat: {
    planting: 'dense',
    plantingNotes:
      'Kuhli Loaches love densely planted tanks with abundant hiding spots! They prefer bottom areas with caves, tubes, and leaf litter. Best plants: broad-leaved (Anubias, Java Fern, Amazon Sword—provide shade), stem plants (Rotala, Ludwigia), fine plants (Java Moss, Christmas Moss), floating plants (Salvinia, Frogbit—dim lighting). CRITICAL: Soft substrate mandatory—fine sand only (play sand, pool filter sand). They burrow constantly, sifting sand through gills. Gravel or coarse sand injures their delicate bellies and barbels. Leaf litter (Indian Almond leaves, oak leaves) mimics natural habitat and provides hiding spots.',
    hardscape: ['CRITICAL: Multiple caves/tubes (PVC pipes 4cm+ diameter, terracotta pots, slate caves)', 'Smooth driftwood', 'Leaf litter (Indian Almond, oak leaves)', 'Smooth river stones', 'Avoid sharp decorations—injure scaleless skin'],
  },

  behavior: {
    tags: ['peaceful', 'shy', 'nocturnal', 'social', 'bottom_dweller', 'scaleless'],
    minGroupSize: 6,
    description:
      'Kuhli Loaches are shy, nocturnal noodles creating adorable social behaviors! They\'re extreme bottom-dwellers spending 98% of time on substrate. Watch them burrow: they disappear completely into sand for hours/days, then suddenly reappear like magic (burrowing helps them feel secure). They\'re highly social and form "NOODLE PILES"—groups of 6-10 tangled together in caves sleeping like spaghetti! This behavior is adorable and shows they feel secure. They\'re nocturnal: during day, they hide in caves/sand. At night, they emerge and become active scavengers, racing around substrate searching for food using barbels (sensory whiskers). Watch them dig through sand with mouths, sifting substrate through gills looking for worms/food. They\'re 100% peaceful and ignore all tankmates. Paradox: More hiding spots = more visible loaches (they feel secure).',
    
    compatibility: {
      goodMates: ['Small peaceful fish (tetras, rasboras)', 'Corydoras', 'Otocinclus', 'Peaceful gouramis', 'Bettas (usually safe)', 'Adult shrimp', 'Peaceful snails'],
      badMates: ['Large aggressive cichlids', 'Large catfish (Plecos - compete for caves)', 'Goldfish (wrong temps)', 'Any fish that might eat them', 'Very aggressive bottom-dwellers'],
      notes:
        'Kuhli Loaches are perfect for peaceful community tanks! They\'re 100% peaceful toward all tankmates and focus on scavenging substrate. They\'re bottom-dwellers—avoid mixing with aggressive bottom species (large plecos, aggressive cichlids) that compete for caves. Best with mid-water fish leaving bottom zone to loaches. Shrimp: mostly safe (adults ignored), but shrimplets occasionally eaten. CRITICAL: Groups of 6+ mandatory—they\'re highly social and stressed alone (hide constantly, never come out). Groups form adorable noodle piles in caves.',
      
      rules: [
        {
          type: 'requires',
          condition: 'fine sand substrate (play sand, pool filter sand)',
          reason: 'CRITICAL: Kuhli Loaches burrow constantly, sifting sand through gills. They need fine sand. Gravel or coarse substrate injures their delicate scaleless bellies and barbels. This is non-negotiable—no sand = chronic injuries',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'groups of 6-10+ fish',
          reason: 'Kuhli Loaches are highly social. Singles or small groups (under 6) = stressed, hiding fish that never come out. Groups of 6-10+ = confident loaches forming adorable "noodle piles" and exploring actively. Social species',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'multiple caves/tubes (4cm+ diameter)',
          reason: 'Kuhli Loaches need caves for security and forming noodle piles. Without caves, they hide in sand constantly and show chronic stress. Provide 3-5+ caves (PVC pipes, terracotta pots, slate caves)',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'copper-based medications',
          reason: 'DEADLY! Kuhli Loaches are scaleless and absorb toxins directly through skin. Copper medications (ich treatments) are highly toxic and kill them. Use half-dose medications or scaleless-safe treatments only',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'filter intake protection (sponge covers)',
          reason: 'Kuhli Loaches are escape artists and squeeze into tiny spaces. They get sucked into filter intakes and die. Cover all intakes with sponge or mesh. Check filters regularly',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 6-12,
        midwater: '12-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['night'],
      nocturnal: true,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 10,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Fine sand substrate mandatory (burrowing)', 
      'Groups of 6-10+ (highly social)', 
      'Multiple caves/tubes (noodle piles)', 
      'Filter intake protection (sponge covers)', 
      'No copper medications (scaleless - toxic!)',
      'Tight-fitting lid (escape artists)',
    ],

    proTips: [
      "Fine sand = happy loaches! Kuhli Loaches burrow constantly—disappearing into sand for hours/days then reappearing. This is natural and shows they feel secure. Use fine sand (play sand, pool filter sand). Gravel or coarse sand injures their delicate scaleless bellies and barbels. No sand = chronic injuries and stress.",
      "GROUP SIZE = NOODLE PILES! Small groups (under 6) = stressed, hiding fish you never see. Groups of 6-10+ = confident loaches forming adorable 'noodle piles' (tangled masses sleeping in caves like spaghetti). This is the cutest behavior in fishkeeping! Buy 6+ minimum.",
      "More hiding spots = more visible loaches! Paradox: the more caves/tubes you provide, the more you see loaches (they feel secure). Sparse tanks = hiding constantly. Provide 3-5+ caves (PVC pipes 4cm+ diameter, terracotta pots, slate caves). They form noodle piles inside!",
      "Cover filter intakes! Kuhli Loaches are escape artists and squeeze into impossibly tight spaces. They get sucked into filter intakes and die. Cover all intakes with sponge prefilters or mesh. Check filters regularly. Also use tight-fitting lids—they jump!",
      "Copper = deadly! Kuhli Loaches are scaleless (nearly) and absorb medications directly through skin. Copper-based ich treatments are highly toxic and kill them within hours. Use half-dose medications or scaleless-safe treatments (Malachite Green, salt). This is non-negotiable.",
      "Feed at night! Kuhli Loaches are nocturnal. If you feed during day, other fish eat everything before loaches emerge. Feed sinking foods (wafers, pellets, bloodworms) 30 minutes after lights out. Watch them race around hunting!",
      "Leaf litter enhances behavior! Indian Almond leaves, oak leaves create natural tannin-stained water and provide hiding spots. Loaches love exploring leaf litter. Also helps simulate blackwater habitat.",
    ],

    commonMistakes: [
      "Gravel substrate. #1 killer! Kuhli Loaches need fine sand for burrowing. Gravel or coarse substrate injures their delicate scaleless bellies and barbels causing infections/death. 40% of failures from wrong substrate. Use fine sand only (play sand, pool filter sand).",
      "Small groups (under 6). Kuhli Loaches are highly social. Singles or small groups = stressed fish hiding constantly that you never see. They need groups of 6-10+ to form noodle piles and feel secure. Don't buy 2-3—buy 6+.",
      "No caves/tubes. Kuhli Loaches need caves for security and forming noodle piles. Without caves, chronic stress. Provide 3-5+ caves (PVC pipes, terracotta pots).",
      "Copper medications during ich. Kuhli Loaches are scaleless and absorb copper directly (deadly). Many beginners treat ich with copper meds = dead loaches within hours. Use half-dose or scaleless-safe treatments only.",
      "Uncovered filter intakes. Kuhli Loaches squeeze into filter intakes and get sucked in (death). Cover all intakes with sponge prefilters. Check filters regularly.",
      "Feeding during day only. Loaches are nocturnal. Daytime feeding = other fish eat everything. Feed sinking foods after lights out so loaches get meals.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets', 'wafers', 'bloodworms', 'tubifex'],
      supplements: ['brine-shrimp', 'daphnia'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Weekly 30% water changes. Kuhli Loaches prefer soft acidic stable water. Keep nitrates below 20ppm (sensitive). Low flow. CRITICAL: Do not vacuum sand deeply—loaches burrow inside! Surface vacuum only. Add leaf litter for tannins. Mature tanks ideal.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
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
    lifespanYears: 10,
    commonDiseases: ['ich', 'skin-infections', 'barbel-erosion', 'fin-rot', 'internal-parasites'],
    sensitivities: ['Copper medications (deadly - scaleless!)', 'Sharp substrate (injuries)', 'High nitrates (over 20ppm)', 'Parameter swings', 'Bright lighting (stress)'],
  },

  scientificContext: {
    wildHabitat:
      'Kuhli Loaches inhabit shallow forest streams and peat swamps in Southeast Asia (Indonesia, Malaysia, Thailand - Borneo, Sumatra, Java). Wild habitat: shallow (10-40cm deep) slow-moving or stagnant blackwater streams with thick leaf litter substrate (decomposing leaves creating soft mud), tannin-stained tea-colored water, soft acidic conditions (GH 0-6, KH 0-2, pH 5.5-6.5), warm temperatures (24-28°C), minimal flow, dense vegetation. They burrow into leaf litter and mud during day, emerging at night to scavenge for worms, insect larvae, and organic debris.',
    sexualDimorphism:
      'Difficult until breeding. Males: Slimmer, more streamlined bodies. Slightly larger pectoral fins (muscular for gripping females during spawning). Females: Noticeably plumper and fuller bodies especially when gravid (carrying eggs). Green eggs visible through translucent skin when gravid (unique!). Rounder cross-section. Juveniles (under 6 months) impossible to sex—wait for maturity and egg development.',
    variants: ['Standard Kuhli Loach (Pangio kuhlii - banded)', 'Black Kuhli Loach (Pangio oblonga - solid dark)', 'Silver/Cinnamon Kuhli (lighter coloration)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger:
      'Kuhli Loach breeding is rare and usually accidental in home aquariums. Trigger: 1) Mature group (12+ months old, 8+ fish) with plump gravid females (green eggs visible through skin), 2) Soft acidic water (GH 2-6, pH 6.0-6.5, temp 26-28°C), 3) Heavy conditioning with live foods (blackworms, tubifex, bloodworms, grindal worms) for 2-3 weeks, 4) Large water changes (50-70%) with cooler water (22-24°C) simulating seasonal flooding/monsoon rains, 5) Floating plants (Salvinia, Water Lettuce - eggs laid among roots), 6) Lower barometric pressure (storms). Spawning often triggered by weather changes (storms, pressure drops). Males chase gravid females to surface.',
    fryCare:
      'Surface spawning: Pairs swim to surface in spiral dance—twisting around each other while swimming upward. Eggs released among floating plant roots and fall slowly. 200-300+ bright green eggs scattered (unique color!). Eggs are adhesive, sticking to plant roots/glass. Adults ignore eggs (no parental care). Eggs hatch in 24 hours at 27°C. Fry are microscopic (2mm) and bright green (unique!). They hang on glass/plants for 2-3 days absorbing yolk. Once free-swimming, feed infusoria or green water for 7-10 days, then graduate to baby brine shrimp nauplii and microworms. Growth is slow: 2cm at 8 weeks, 5cm at 6 months, mature at 12+ months.',
    notes:
      'Kuhli Loach breeding in home aquariums is extremely rare and usually accidental (triggered by storm pressure drops or large water changes). They spawn at surface among floating plants (unusual for bottom-dwellers). Main challenge: fry are microscopic and need infusoria immediately. Accidental spawning more common in heavily planted mature tanks with large groups (8+) during monsoon season simulation (large cool water changes). Don\'t expect breeding—enjoy it if it happens!',
  },
  
  experienceData: {
    successRate: 0.65,
    survivalRate: 0.60,
    
    commonFailures: [
      { issue: 'injuries-infections-death', cause: 'gravel-or-coarse-substrate-instead-of-fine-sand', frequency: 0.40 },
      { issue: 'constant-hiding-never-visible', cause: 'small-groups-under-6-or-no-caves', frequency: 0.25 },
      { issue: 'medication-poisoning-death', cause: 'copper-based-ich-treatments-on-scaleless-fish', frequency: 0.15 },
      { issue: 'sucked-into-filter-death', cause: 'uncovered-filter-intakes', frequency: 0.12 },
      { issue: 'stress-from-bright-lighting', cause: 'no-caves-or-dim-lighting', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 100, max: 250, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};
