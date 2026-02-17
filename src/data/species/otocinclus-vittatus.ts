import type { Species } from '../../types/species';

export const otocinclusVittatus: Species = {
  id: 'oto-001',
  slug: 'otocinclus',
  imageUrl: '/images/species/otocinclus-vittatus.jpg',
  funFact: "Otocinclus are NATURE'S TINY VACUUMS creating ADORABLE grazing parties! Watch groups of 6-10 work glass and plants in synchronized rows like little lawnmowers. They're the ONLY 100% shrimp-safe algae eater—mouths too small for any shrimp! Here's the CRITICAL catch: they're STARVATION MACHINES if added to new tanks—60% DIE within 2-4 weeks from lack of biofilm/algae! They're OBLIGATE AUFWUCHS EATERS (specialized algae/biofilm grazers) requiring CONSTANT food supply. In the wild, they school in THOUSANDS grazing algae-covered rocks 24/7. Males perform GLASS DANCES: racing up and down aquarium glass chasing females during spawning. From Amazon River margins with moderate flow!",

  imageCredit: {
    photographer: 'Haps (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Otocinclus_vittatus.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },

  taxonomy: {
    scientificName: 'Otocinclus vittatus',
    commonName: 'Otocinclus Catfish',
    family: 'Loricariidae',
    origin: 'South America (Amazon Basin - Peru, Brazil, Colombia - river margins with vegetation)',
    region: 'South America',
    biotope: 'Vegetation-rich river margins and flooded forests with moderate flow, dense aquatic plants, algae-covered surfaces, oxygen-rich water',
  },

  visuals: {
    iconShape: 'pleco',
    adultSizeCM: 4.5,
    color: 'SUBTLE! Small torpedo-shaped body (dwarf pleco). Mottled brown-tan to olive-green back with DISTINCTIVE dark HORIZONTAL STRIPE running from snout through eye to tail base (like racing stripe). Silver-white belly. Transparent/translucent fins. Suckermouth underneath for clinging to surfaces. Females rounder when gravid',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 21, max: 27, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 4, max: 15 },
    kh: { min: 2, max: 10 },
    flow: 'moderate',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.6,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.4,
  },

  habitat: {
    planting: 'very-heavy',
    plantingNotes:
      'Otocinclus are PLANT-DEPENDENT and REQUIRE densely planted tanks with BROAD-LEAVED PLANTS! They graze biofilm and algae from EVERY surface—glass, plants, driftwood, decor. Best plants: BROAD-LEAVED (Amazon Sword, Anubias, Java Fern—large grazing surfaces essential!), stem plants (Rotala, Ludwigia, Bacopa), floating plants (Salvinia, Frogbit). CRITICAL: Mature planted tanks (6+ months old) with established BIOFILM are MANDATORY—new sterile tanks = starvation death. They need CONSTANT food supply (algae/biofilm). Watch them graze broad leaves for hours—adorable!',
    hardscape: ['CRITICAL: Multiple driftwood pieces (biofilm grows on wood—essential food source!)', 'Smooth river stones (algae grazing)', 'Minimal sharp decorations'],
  },

  behavior: {
    tags: ['peaceful', 'shy', 'social', 'algae_eater', 'bottom_dweller', 'glass_cleaner'],
    minGroupSize: 6,
    description:
      'Otocinclus are SHY, PEACEFUL ALGAE-EATING MACHINES creating adorable grazing behaviors! They\'re HIGHLY SOCIAL and form grazing groups—watch 6-10 work glass/plants in synchronized ROWS like tiny lawnmowers (adorable!). They\'re CONSTANTLY GRAZING (18+ hours daily) rasping algae and biofilm from every surface using suckermouth. Watch them cling to glass upside-down, race across leaves, and rest on broad-leaved plants. They\'re TIMID: sudden movements = hiding. Males perform GLASS DANCES during spawning: racing vertically up/down glass chasing gravid females. They\'re 100% PEACEFUL toward all tankmates and completely harmless. CRITICAL: They\'re OBLIGATE AUFWUCHS EATERS (specialized biofilm/algae grazers) requiring CONSTANT food—they can\'t survive on leftovers alone.',
    
    compatibility: {
      goodMates: ['ALL peaceful fish (tetras, rasboras, barbs)', 'Corydoras', 'Peaceful cichlids (Rams, Apistos)', 'ALL shrimp (Cherry, Amano - 100% safe!)', 'Snails'],
      badMates: ['Large aggressive fish', 'Goldfish (wrong temps)', 'Any fish that might eat them'],
      notes:
        'Otocinclus are PERFECT for PEACEFUL COMMUNITY TANKS! They\'re 100% peaceful toward all tankmates and focus exclusively on grazing algae. CRITICAL: They\'re the ONLY 100% SHRIMP-SAFE algae eater—mouths too small for ANY shrimp (even shrimplets). Unlike plecos, they never harm plants or shrimp. Best in PEACEFUL PLANTED TANKS with calm species. Groups of 6-10+ spread grazing behavior across tank and create adorable synchronized grazing parties. They\'re TIMID—avoid aggressive/fast fish that stress them.',
      
      rules: [
        {
          type: 'requires',
          condition: 'MATURE TANK 6+ months old with established algae/biofilm',
          reason: 'CRITICAL #1 KILLER: Otocinclus are OBLIGATE aufwuchs eaters requiring CONSTANT biofilm/algae supply. Adding to NEW/STERILE tanks = 60% DIE within 2-4 weeks from STARVATION. They can\'t survive on supplemental foods alone. Wait 6+ months for biofilm establishment',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'groups of 6-10+ fish',
          reason: 'Otocinclus are HIGHLY SOCIAL. Singles or small groups (under 6) = stressed, hiding fish with poor survival. Groups of 6-10+ = confident, active grazers with natural synchronized grazing behavior. Social species',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'BROAD-LEAVED PLANTS (Amazon Sword, Anubias, Java Fern)',
          reason: 'Otocinclus need LARGE surface areas for grazing biofilm. Broad-leaved plants provide essential grazing surfaces. Without them, food supply inadequate. This is essential for survival',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'sunken-belly fish at store',
          reason: 'CRITICAL: Check for SUNKEN BELLIES (concave stomach area) at purchase. This indicates STARVATION and fish often don\'t recover. Healthy Otos have ROUND, plump bellies. Reject skinny fish',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: '6-12',
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
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'group',
      maxMalesPerTank: 10,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'intermediate',
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'MATURE TANK 6+ months old (biofilm essential)', 
      'Groups of 6-10+ (highly social)', 
      'BROAD-LEAVED PLANTS (grazing surfaces)', 
      'Constant algae/biofilm supply', 
      'SUPPLEMENTAL feeding (vegetables, wafers)',
      'Oxygen-rich water (moderate flow)',
    ],

    proTips: [
      "MATURE TANK = SURVIVAL! The #1 KILLER of Otocinclus is adding them to NEW/STERILE tanks. They're OBLIGATE AUFWUCHS EATERS requiring CONSTANT biofilm/algae. In new tanks without established biofilm, 60% DIE within 2-4 weeks from STARVATION even with supplemental feeding. WAIT 6+ MONTHS for biofilm establishment before buying Otos. This is NON-NEGOTIABLE.",
      "CHECK BELLIES at purchase! Healthy Otos have ROUND, PLUMP bellies (slightly bulging). REJECT fish with SUNKEN BELLIES (concave stomach area between pectoral fins)—this indicates starvation and they rarely recover. Many store Otos are already starving. This check saves lives.",
      "SUPPLEMENT FEEDING! Don't rely on algae alone (even in mature tanks). Feed blanched zucchini, cucumber, spinach slices, algae wafers, Repashy Soilent Green 2-3x weekly. Clip vegetables to glass and watch them swarm. Varied diet = healthy Otos.",
      "Buy them LAST! Wait until your tank has VISIBLE algae growth (brown/green film on glass, green spot algae on plants). If you need to scrape glass weekly, tank is ready. Don't buy Otos for algae-free sterile tanks.",
      "100% SHRIMP-SAFE! Otos are the ONLY algae eater with mouths too small for ANY shrimp—even shrimplets. Unlike plecos/SAEs, they never harm shrimp colonies. Perfect for shrimp tanks.",
      "Watch the GRAZING PARTIES! Groups work glass/plants in synchronized ROWS like tiny lawnmowers. Adorable behavior showing they feel secure. Healthy social groups constantly graze together.",
      "Moderate FLOW essential! Otos are from flowing river margins and need OXYGEN-RICH water. Stagnant water = stress. Use gentle current from filter output.",
    ],

    commonMistakes: [
      "Adding to NEW/STERILE tanks. #1 KILLER! 60% of Otos die within 2-4 weeks from STARVATION when added to tanks under 6 months old. They're obligate aufwuchs eaters needing CONSTANT biofilm. New tanks = death sentence. WAIT for mature tank with visible algae.",
      "Buying SUNKEN-BELLY fish. Many store Otos are already STARVING (concave bellies). These rarely recover even in mature tanks. Always check for ROUND bellies before purchase. Skinny Otos = avoid.",
      "Small groups (under 6). Otos are HIGHLY SOCIAL. Singles or pairs = stressed, hiding fish with poor survival. Groups of 6-10+ = confident, active grazers. Don't buy 2-3—buy 6+.",
      "No supplemental feeding. 'Algae eaters don't need food' myth KILLS Otos. Even mature tanks need supplemental vegetables/wafers. Relying on algae alone = slow starvation.",
      "No broad-leaved plants. Otos need LARGE grazing surfaces (Amazon Swords, Anubias, Java Fern). Sparse tanks with only stem plants = insufficient food. Provide broad leaves.",
      "Expecting them to eat poop/detritus. Otos ONLY eat soft algae and biofilm—they're specialized grazers. They won't clean waste or eat leftover food. Not general scavengers.",
    ],
    
    feeding: {
      frequency: 'continuous',
      primaryFoods: ['biofilm', 'soft-algae', 'aufwuchs', 'diatoms'],
      supplements: ['algae-wafers', 'zucchini', 'cucumber', 'spirulina'],
      vegetarian: true,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Weekly 30% water changes. Otocinclus prefer CLEAN, OXYGEN-RICH water with moderate flow. Keep nitrates below 10ppm. CRITICAL: Don\'t scrape ALL algae—leave some for Otos to graze! Moderate flow from filter output essential. Mature planted tanks with biofilm ideal.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['starvation', 'ich', 'bacterial-infections', 'fungal-infections'],
    sensitivities: ['STARVATION (lack of biofilm - #1 killer!)', 'Ammonia/Nitrite', 'Medications (scaleless - use half-dose)', 'Low oxygen', 'Parameter swings'],
  },

  scientificContext: {
    wildHabitat:
      'Otocinclus inhabit vegetation-rich river margins and flooded forests in Amazon Basin (Peru, Brazil, Colombia). Wild habitat: shallow (20-100cm deep) areas with MODERATE FLOW, high oxygen content, DENSE aquatic vegetation and submerged roots, surfaces covered in thick ALGAE/BIOFILM layers. They school in THOUSANDS grazing algae-covered rocks, wood, and plants 24/7. Water is soft to moderate hardness (GH 5-12), slightly acidic to neutral (pH 6.5-7.5), warm (22-26°C). They occupy ALL surfaces clinging with sucker mouths.',
    sexualDimorphism:
      'SUBTLE UNLESS GRAVID. MALES: Slimmer, more streamlined torpedo-shaped bodies when viewed from above. Slightly smaller overall. FEMALES: NOTICEABLY WIDER and ROUNDER when viewed from above, especially when gravid (carrying eggs—belly visibly swollen, sometimes greenish eggs visible through translucent skin). Fuller body shape. Juveniles (under 4 months) difficult to sex—wait for maturity and observe from above.',
    variants: ['Otocinclus vittatus (standard)', 'Otocinclus affinis (similar)', 'Otocinclus macrospilus (often sold as same)', 'Otocinclus vestitus (rare)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger:
      'Otocinclus breeding is RARE but possible in mature tanks with excellent conditions. Trigger: 1) Mature group (8+ months old, 8+ fish) with plump gravid females, 2) EXCELLENT water quality (pristine conditions, GH 6-10, pH 6.5-7.2, temp 24-26°C), 3) Heavy conditioning with VARIED FOODS (vegetables, wafers, algae, biofilm) for 2-3 weeks until females visibly plump, 4) LARGE COOL WATER CHANGES (50-70%) with 2-3°C cooler water simulating rainfall, 5) Moderate flow, high oxygen. Males perform GLASS DANCES: racing vertically up/down glass chasing gravid females.',
    fryCare:
      'Spawning similar to Corydoras: males chase gravid females in T-position. Females attach 3-6 TINY adhesive eggs to broad leaves, glass, or smooth surfaces (50-100 total eggs scattered). Adults may eat eggs—provide DENSE planting for egg hiding or remove adults. Eggs hatch in 48-72 hours at 24°C. Fry are MICROSCOPIC (3mm) and need BIOFILM and INFUSORIA for first 2 weeks before accepting powdered algae wafers. Growth is SLOW: 1cm at 8 weeks, 2cm at 4 months, mature at 8+ months. Fry rearing is VERY CHALLENGING—need established biofilm.',
    notes:
      'Otocinclus breeding in home aquariums is RARE and challenging. Main issues: 1) Need PRISTINE water quality (they\'re sensitive), 2) Adults eat eggs (provide dense plants), 3) Fry need biofilm immediately (prepare tanks). Most breeding is accidental in mature planted tanks with large healthy groups. For deliberate breeding: large water changes with cooler water trigger spawning.',
  },
  
  experienceData: {
    successRate: 0.40,
    survivalRate: 0.40,
    
    commonFailures: [
      { issue: 'starvation-death-within-2-4-weeks', cause: 'added-to-new-sterile-tank-under-6-months', frequency: 0.60 },
      { issue: 'purchased-already-starving', cause: 'bought-fish-with-sunken-bellies-from-store', frequency: 0.20 },
      { issue: 'slow-starvation', cause: 'no-supplemental-feeding-or-insufficient-biofilm', frequency: 0.10 },
      { issue: 'stress-from-isolation', cause: 'kept-singly-or-in-small-groups-under-6', frequency: 0.05 },
      { issue: 'medication-poisoning', cause: 'full-dose-copper-medications-scaleless-sensitivity', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 200, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};
