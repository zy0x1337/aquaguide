import type { Species } from '../../types/species';

export const amanoShrimp: Species = {
  id: 'amano-shrimp',
  slug: 'amano-shrimp',
  imageUrl: '/images/species/amano-shrimp.jpg',
  funFact: "Amano Shrimp are the UNDISPUTED algae-eating champions of the freshwater aquarium world! Named after legendary aquascaper Takashi Amano (who popularized them in the 1980s), they can devour hair algae that even snails won't touch. A single Amano can eat its own body weight in algae daily. Watch them work: they're like tiny transparent bulldozers, constantly shoveling food into their mouths with their tiny hands. Fun fact: they molt (shed their shell) every 4-6 weeks, and you'll often find the empty shell—don't panic, it's not a dead shrimp!",

  imageCredit: {
    photographer: 'fdolmo on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/aquarium-garnelen-wirbellosen-626556/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/',
  },

  taxonomy: {
    scientificName: 'Caridina multidentata',
    commonName: 'Amano Shrimp',
    family: 'Atyidae',
    origin: 'Japan, Taiwan, Korea - coastal rivers and streams',
    region: 'Asia',
    biotope: 'Fast-flowing mountain streams with waterfalls, moss-covered rocks, high dissolved oxygen, and abundant algae. Adults live in freshwater; larvae require BRACKISH water (estuaries)',
  },

  visuals: {
    iconShape: 'shrimp',
    adultSizeCM: 5,
    color: 'Translucent grey-green body with brown/red speckles forming a broken stripe along the back. Females have blue-green saddle (eggs visible through shell). Almost invisible in planted tanks!',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 18, max: 28, ideal: 24 },
    ph: { min: 6.5, max: 7.8, ideal: 7.2 },
    gh: { min: 6, max: 14 },
    kh: { min: 2, max: 10 },
    flow: 'moderate',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.85,
    },
    
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 20,
      territories: 0,
    },
    
    bioloadMultiplier: 0.1,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Amano Shrimp THRIVE in heavily planted tanks with algae, biofilm, and hiding spots. They love Java Moss, Java Fern, Anubias, and Marimo moss balls—anything that grows biofilm or soft algae. Driftwood is ESSENTIAL for biofilm grazing. They climb everything: plants, glass, filter intakes, heaters. Dense planting provides security during molting (when they\'re vulnerable). Floating plants help diffuse light and encourage algae growth on surfaces. Unlike Neocaridina (Cherry Shrimp), Amanos appreciate some water flow—position plants near filter outputs for current.',
    hardscape: ['Driftwood (biofilm source - CRITICAL)', 'Smooth river stones', 'Moss-covered rocks', 'Caves for molting security'],
  },

  behavior: {
    tags: ['algae_eater', 'peaceful', 'active', 'social'],
    minGroupSize: 5,
    description: 'Amano Shrimp are the aquarium\'s tireless janitors—constantly moving, climbing, and eating. They\'re HYPERACTIVE compared to Cherry Shrimp, always on the go like caffeinated cleaners. Watch them "sweep" with their tiny fan-like hands (maxillipeds), shoveling detritus and algae into their mouths at incredible speed. They\'re bold and curious, often ignoring fish entirely while exploring every surface. Unlike shy Cherry Shrimp, Amanos work in broad daylight, climbing glass, marching across plants, and even riding the filter current like a water slide. They\'re peaceful but assertive—they\'ll steal food from slower shrimp without aggression. Social in groups of 5+, they often graze together in algae "parties." Females carrying eggs (green saddle visible through shell) are even bolder, constantly foraging for protein.',
    
    compatibility: {
      goodMates: ['Cherry Shrimp (Neocaridina)', 'Other peaceful shrimp', 'Peaceful community fish (Tetras, Rasboras, Corydoras)', 'Snails (Nerite, Mystery)', 'Otocinclus', 'Small peaceful fish'],
      badMates: ['Pufferfish (shrimp hunters)', 'Loaches (eat shrimp)', 'Large Cichlids', 'Crayfish', 'Bettas (sometimes nippy)', 'Goldfish (may eat them)'],
      notes: 'Amano Shrimp are safe with MOST community fish. Their larger size (5cm vs 2cm Cherry Shrimp) makes them less vulnerable to predation. However, ANY fish large enough to swallow them (>8cm mouth) is a risk. Amanos are peaceful toward other shrimp and ignore fish. They WILL eat shrimplets (baby Cherry Shrimp) and snail eggs if they find them—they\'re opportunistic scavengers, not vegetarians. Keep with adult shrimp only or accept baby losses.',
      
      rules: [
        {
          type: 'avoid',
          target: 'copper-based medications',
          reason: 'Invertebrates are EXTREMELY sensitive to copper. Even trace amounts (from pipes, medications, plant fertilizers) are 100% fatal. Always use shrimp-safe products',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'predatory fish (puffers, loaches, cichlids)',
          reason: 'These species actively hunt shrimp. Amanos may survive in heavily planted tanks but live in constant stress. Not recommended',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'stable water parameters',
          reason: 'Shrimp are sensitive to sudden changes (pH, temp, GH swings). Drip-acclimate new shrimp for 2+ hours. Sudden changes cause failed molts and death',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'supplemental feeding',
          reason: 'Algae alone is insufficient. Amanos need protein (shrimp pellets, blanched vegetables) or they\'ll starve after eating all algae. They clean TOO well!',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 0-10,
        midwater: '10-30',
        bottom: '5-20',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
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
      'Stable water parameters (shrimp-sensitive)', 
      'Driftwood for biofilm grazing', 
      'Supplemental feeding (algae wafers, blanched veggies)',
      'NO copper-based products (fertilizers, medications)',
      'Drip-acclimate for 2+ hours when adding to tank',
    ],

    proTips: [
      "Amanos are the BEST algae eaters for hair algae (green thread algae). They ignore brown diatoms and black beard algae but DEMOLISH soft green algae that covers everything. If you have hair algae, 5-10 Amanos will clear a 100L tank in 2-3 weeks.",
      "SUPPLEMENT THEIR DIET! Once algae is gone, they need food or they'll starve. Feed blanched zucchini, spinach, algae wafers, or shrimp pellets 2-3x per week. A starving Amano becomes lethargic and stops moving.",
      "Molting (shedding shell) happens every 4-6 weeks. You'll find a translucent empty shell that looks EXACTLY like a dead shrimp. Don't remove it! Shrimp eat their old shells to recycle calcium for the next molt. Count your shrimp to confirm nobody died.",
      "Drip-acclimate new Amanos for 2+ hours. They're MORE sensitive than fish to parameter changes. Sudden pH or temp shifts cause failed molts (shrimp gets stuck in old shell and dies). Slow acclimation is critical.",
      "Amanos are ESCAPE ARTISTS. They can climb airline tubing, HOB filter intakes, and even wet glass outside the tank. Always use a lid with NO GAPS. A dried-out Amano on your floor is heartbreaking.",
      "Calcium is critical for molting. If water is soft (GH <6), add crushed coral, cuttlebone, or Wonder Shells to provide calcium. Without it, shells stay soft and shrimp die during molts.",
    ],

    commonMistakes: [
      "No supplemental feeding = starvation. Amanos eat algae so efficiently that they run out of food in clean tanks. Once algae is gone, feed them! Blanched veggies, algae wafers, shrimp pellets. A well-fed Amano is active; a starving one sits still.",
      "Using copper-based products. Many plant fertilizers (especially 'complete' formulas), fish medications (Cupramine, Coppersafe), and even tap water (copper pipes) contain copper. It's 100% FATAL to shrimp. Always check labels for 'shrimp-safe.'",
      "Rapid acclimation. Dumping shrimp directly into tank = death sentence. Drip-acclimate for 2+ hours to match temp, pH, GH slowly. Sudden changes cause osmotic shock and failed molts.",
      "Expecting baby shrimp. Amanos CANNOT breed in freshwater. Females carry eggs (you'll see green saddle), but larvae need BRACKISH WATER (saltwater mix) to survive. All aquarium Amanos are wild-caught or farmed. Don't expect babies.",
      "Assuming they're dead when molting. The empty shell looks identical to a dead shrimp. Count your shrimp or wait 24 hours before panicking. Shrimp often hide for 1-2 days after molting while new shell hardens.",
    ],
    
    feeding: {
      frequency: 'every-other-day',
      primaryFoods: ['algae-wafers', 'biofilm', 'spirulina', 'vegetables'],
      supplements: ['pellets', 'vegetables'],
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
      notes: 'Weekly 20-30% water changes. Match temperature EXACTLY—shrimp are sensitive to temp swings. Use dechlorinator (chlorine kills shrimp quickly). Vacuum substrate lightly to avoid sucking up shrimp. No deep cleaning—biofilm is their food source.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['molting-failure', 'bacterial-infections', 'vorticella', 'parasitic-infections'],
    sensitivities: ['COPPER (100% fatal)', 'Sudden parameter changes (failed molts)', 'Low GH (calcium deficiency)', 'Medications (most are toxic to inverts)', 'Chlorine/chloramine', 'Low oxygen'],
  },

  scientificContext: {
    wildHabitat: "Amano Shrimp inhabit fast-flowing mountain streams and rivers in Japan, Taiwan, and Korea. ADULTS live in FRESHWATER (rivers, streams, waterfalls), but they're amphidromous—meaning LARVAE require BRACKISH WATER (estuaries where rivers meet ocean). Females carry 1,000-3,000 eggs and migrate downstream to estuaries to release larvae. Larvae drift in brackish water for 4-6 weeks, feeding on phytoplankton, then metamorphose into juvenile shrimp and migrate BACK upstream to freshwater. This complex lifecycle makes captive breeding nearly impossible.",
    sexualDimorphism: "Females are MUCH larger (4-5cm) and have elongated lower abdomens (pleopods) for carrying eggs. When gravid (carrying eggs), you'll see a bright GREEN or BROWN saddle (egg cluster) visible through the translucent shell on their back/sides. Males are smaller (3-4cm), slimmer, and lack the saddle. Females have longer second pleopods (swimmerets under tail). In groups, females are noticeably bigger and more aggressive about food.",
    variants: ['Wild Type (grey-green with red/brown speckles)', 'Blue/Green tint variants (lighting-dependent)', 'Rare albino (extremely uncommon, almost impossible to find)'],
  },

  breeding: {
    method: 'other',
    difficulty: 'expert',
    trigger: 'Amano Shrimp breeding is EXTREMELY DIFFICULT and nearly impossible for hobbyists. Females frequently carry eggs in freshwater tanks (you\'ll see green saddle), but larvae REQUIRE BRACKISH WATER (specific gravity 1.024, full marine salinity) to survive. Breeding requires: 1) Females with eggs, 2) Separate brackish water tank (35 ppt salinity), 3) Algae-covered surfaces for larvae to graze, 4) 6-8 WEEKS of larval care in saltwater, 5) Gradual transition back to freshwater after metamorphosis. Larvae are microscopic filter-feeders that eat diatoms/phytoplankton. Most hobbyists fail due to larval death.',
    fryCare: 'Females release 1,000-3,000 microscopic larvae (zoea stage) that MUST be transferred to brackish water within hours. Larvae are free-swimming and feed on algae growing on tank walls—they cannot eat normal foods. After 4-6 weeks, larvae metamorphose into tiny shrimp (2mm) and must be SLOWLY acclimated back to freshwater over 1-2 weeks. Survival rate is <5% even for experts. Commercial breeders use hormone injections to synchronize spawning. Home breeding is possible but requires marine aquarium experience.',
    notes: 'Almost all Amano Shrimp sold in stores are wild-caught from Japan/Taiwan or farmed commercially. Home breeding is so difficult that it\'s not economically viable. If your female drops eggs in freshwater, the larvae will die within 24 hours—they cannot survive without saltwater. Enjoy watching females carry eggs (fascinating to see green saddle through shell), but don\'t expect babies. This is why Amanos are more expensive than Cherry Shrimp (which breed easily in freshwater).',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'death-during-acclimation', cause: 'rapid-parameter-change-osmotic-shock', frequency: 0.25 },
      { issue: 'failed-molt-death', cause: 'low-calcium-or-sudden-parameter-shift', frequency: 0.20 },
      { issue: 'copper-poisoning', cause: 'medications-or-fertilizers-with-copper', frequency: 0.15 },
      { issue: 'starvation', cause: 'no-supplemental-food-after-algae-gone', frequency: 0.12 },
      { issue: 'predation', cause: 'kept-with-aggressive-fish', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};
