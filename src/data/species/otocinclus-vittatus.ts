import type { Species } from '../../types/species';

export const otocinclusVittatus: Species = {
  id: 'oto-001',
  slug: 'otocinclus',
  imageUrl: '/images/species/otocinclus-vittatus.jpg',
  funFact: "Otocinclus are nature's tiny vacuums creating adorable grazing parties! Watch groups of 6-10 work glass and plants in synchronized rows like little lawnmowers. They're the only 100% shrimp-safe algae eater—mouths too small for any shrimp! Here's the critical catch: they're starvation machines if added to new tanks—60% die within 2-4 weeks from lack of biofilm/algae! They're obligate aufwuchs eaters (specialized algae/biofilm grazers) requiring constant food supply. In the wild, they school in thousands grazing algae-covered rocks 24/7. Males perform 'glass dances': racing up and down aquarium glass chasing females during spawning. From Amazon River margins with moderate flow!",

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
    iconShape: 'depressed',
    adultSizeCM: 4.5,
    color: 'Subtle! Small torpedo-shaped body (dwarf pleco). Mottled brown-tan to olive-green back with distinctive dark horizontal stripe running from snout through eye to tail base (like racing stripe). Silver-white belly. Transparent/translucent fins. Suckermouth underneath for clinging to surfaces. Females rounder when gravid',
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
    planting: 'dense',
    plantingNotes:
      'Otocinclus are plant-dependent and require densely planted tanks with broad-leaved plants! They graze biofilm and algae from every surface—glass, plants, driftwood, decor. Best plants: Broad-leaved (Amazon Sword, Anubias, Java Fern—large grazing surfaces essential!), stem plants (Rotala, Ludwigia, Bacopa), floating plants (Salvinia, Frogbit). CRITICAL: Mature planted tanks (6+ months old) with established biofilm are mandatory—new sterile tanks = starvation death. They need constant food supply (algae/biofilm). Watch them graze broad leaves for hours—adorable!',
    hardscape: ['CRITICAL: Multiple driftwood pieces (biofilm grows on wood—essential food source!)', 'Smooth river stones (algae grazing)', 'Minimal sharp decorations'],
  },

  behavior: {
    tags: ['peaceful', 'shy', 'social', 'algae_eater', 'bottom_dweller'],
    minGroupSize: 6,
    description:
      'Otocinclus are shy, peaceful algae-eating machines creating adorable grazing behaviors! They\'re highly social and form grazing groups—watch 6-10 work glass/plants in synchronized rows like tiny lawnmowers (adorable!). They\'re constantly grazing (18+ hours daily) rasping algae and biofilm from every surface using suckermouth. Watch them cling to glass upside-down, race across leaves, and rest on broad-leaved plants. They\'re timid: sudden movements = hiding. Males perform glass dances during spawning: racing vertically up/down glass chasing gravid females. They\'re 100% peaceful toward all tankmates and completely harmless. CRITICAL: They\'re obligate aufwuchs eaters (specialized biofilm/algae grazers) requiring constant food—they can\'t survive on leftovers alone.',
    
    compatibility: {
      goodMates: ['All peaceful fish (tetras, rasboras, barbs)', 'Corydoras', 'Peaceful cichlids (Rams, Apistos)', 'All shrimp (Cherry, Amano - 100% safe!)', 'Snails'],
      badMates: ['Large aggressive fish', 'Goldfish (wrong temps)', 'Any fish that might eat them'],
      notes:
        'Otocinclus are perfect for peaceful community tanks! They\'re 100% peaceful toward all tankmates and focus exclusively on grazing algae. CRITICAL: They\'re the only 100% shrimp-safe algae eater—mouths too small for any shrimp (even shrimplets). Unlike plecos, they never harm plants or shrimp. Best in peaceful planted tanks with calm species. Groups of 6-10+ spread grazing behavior across tank and create adorable synchronized grazing parties. They\'re timid—avoid aggressive/fast fish that stress them.',
      
      rules: [
        {
          type: 'requires',
          condition: 'mature tank 6+ months old with established algae/biofilm',
          reason: 'CRITICAL #1 KILLER: Otocinclus are obligate aufwuchs eaters requiring constant biofilm/algae supply. Adding to new/sterile tanks = 60% die within 2-4 weeks from starvation. They can\'t survive on supplemental foods alone. Wait 6+ months for biofilm establishment',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'groups of 6-10+ fish',
          reason: 'Otocinclus are highly social. Singles or small groups (under 6) = stressed, hiding fish with poor survival. Groups of 6-10+ = confident, active grazers with natural synchronized grazing behavior. Social species',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'broad-leaved plants (Amazon Sword, Anubias, Java Fern)',
          reason: 'Otocinclus need large surface areas for grazing biofilm. Broad-leaved plants provide essential grazing surfaces. Without them, food supply inadequate. This is essential for survival',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'sunken-belly fish at store',
          reason: 'CRITICAL: Check for sunken bellies (concave stomach area) at purchase. This indicates starvation and fish often don\'t recover. Healthy Otos have round, plump bellies. Reject skinny fish',
          severity: 'critical',
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
      peakTimes: ['all-day'],
      nocturnal: false,
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
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Mature tank 6+ months old (biofilm essential)', 
      'Groups of 6-10+ (highly social)', 
      'Broad-leaved plants (grazing surfaces)', 
      'Constant algae/biofilm supply', 
      'Supplemental feeding (vegetables, wafers)',
      'Oxygen-rich water (moderate flow)',
    ],

    proTips: [
      "Mature tank = survival! The #1 killer of Otocinclus is adding them to new/sterile tanks. They're obligate aufwuchs eaters requiring constant biofilm/algae. In new tanks without established biofilm, 60% die within 2-4 weeks from starvation even with supplemental feeding. Wait 6+ months for biofilm establishment before buying Otos. This is non-negotiable.",
      "Check bellies at purchase! Healthy Otos have round, plump bellies (slightly bulging). Reject fish with sunken bellies (concave stomach area between pectoral fins)—this indicates starvation and they rarely recover. Many store Otos are already starving. This check saves lives.",
      "Supplement feeding! Don't rely on algae alone (even in mature tanks). Feed blanched zucchini, cucumber, spinach slices, algae wafers, Repashy Soilent Green 2-3x weekly. Clip vegetables to glass and watch them swarm. Varied diet = healthy Otos.",
      "Buy them last! Wait until your tank has visible algae growth (brown/green film on glass, green spot algae on plants). If you need to scrape glass weekly, tank is ready. Don't buy Otos for algae-free sterile tanks.",
      "100% shrimp-safe! Otos are the only algae eater with mouths too small for any shrimp—even shrimplets. Unlike plecos/SAEs, they never harm shrimp colonies. Perfect for shrimp tanks.",
      "Watch the grazing parties! Groups work glass/plants in synchronized rows like tiny lawnmowers. Adorable behavior showing they feel secure. Healthy social groups constantly graze together.",
      "Moderate flow essential! Otos are from flowing river margins and need oxygen-rich water. Stagnant water = stress. Use gentle current from filter output.",
    ],

    commonMistakes: [
      "Adding to new/sterile tanks. #1 killer! 60% of Otos die within 2-4 weeks from starvation when added to tanks under 6 months old. They're obligate aufwuchs eaters needing constant biofilm. New tanks = death sentence. Wait for mature tank with visible algae.",
      "Buying sunken-belly fish. Many store Otos are already starving (concave bellies). These rarely recover even in mature tanks. Always check for round bellies before purchase. Skinny Otos = avoid.",
      "Small groups (under 6). Otos are highly social. Singles or pairs = stressed, hiding fish with poor survival. Groups of 6-10+ = confident, active grazers. Don't buy 2-3—buy 6+.",
      "No supplemental feeding. 'Algae eaters don't need food' myth kills Otos. Even mature tanks need supplemental vegetables/wafers. Relying on algae alone = slow starvation.",
      "No broad-leaved plants. Otos need large grazing surfaces (Amazon Swords, Anubias, Java Fern). Sparse tanks with only stem plants = insufficient food. Provide broad leaves.",
      "Expecting them to eat poop/detritus. Otos only eat soft algae and biofilm—they're specialized grazers. They won't clean waste or eat leftover food. Not general scavengers.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['biofilm', 'aufwuchs'],
      supplements: ['algae-wafers', 'blanched-zucchini', 'spirulina'],
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
      notes: 'Weekly 30% water changes. Otocinclus prefer clean, oxygen-rich water with moderate flow. Keep nitrates below 10ppm. CRITICAL: Don\'t scrape all algae—leave some for Otos to graze! Moderate flow from filter output essential. Mature planted tanks with biofilm ideal.',
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
    sensitivities: ['Starvation (lack of biofilm - #1 killer!)', 'Ammonia/Nitrite', 'Medications (scaleless - use half-dose)', 'Low oxygen', 'Parameter swings'],
  },

  scientificContext: {
    wildHabitat:
      'Otocinclus inhabit vegetation-rich river margins and flooded forests in Amazon Basin (Peru, Brazil, Colombia). Wild habitat: shallow (20-100cm deep) areas with moderate flow, high oxygen content, dense aquatic vegetation and submerged roots, surfaces covered in thick algae/biofilm layers. They school in thousands grazing algae-covered rocks, wood, and plants 24/7. Water is soft to moderate hardness (GH 5-12), slightly acidic to neutral (pH 6.5-7.5), warm (22-26°C). They occupy all surfaces clinging with sucker mouths.',
    sexualDimorphism:
      'Subtle unless gravid. Males: Slimmer, more streamlined torpedo-shaped bodies when viewed from above. Slightly smaller overall. Females: Noticeably wider and rounder when viewed from above, especially when gravid (carrying eggs—belly visibly swollen, sometimes greenish eggs visible through translucent skin). Fuller body shape. Juveniles (under 4 months) difficult to sex—wait for maturity and observe from above.',
    variants: ['Otocinclus vittatus (standard)', 'Otocinclus affinis (similar)', 'Otocinclus macrospilus (often sold as same)', 'Otocinclus vestitus (rare)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger:
      'Otocinclus breeding is rare but possible in mature tanks with excellent conditions. Trigger: 1) Mature group (8+ months old, 8+ fish) with plump gravid females, 2) Excellent water quality (pristine conditions, GH 6-10, pH 6.5-7.2, temp 24-26°C), 3) Heavy conditioning with varied foods (vegetables, wafers, algae, biofilm) for 2-3 weeks until females visibly plump, 4) Large cool water changes (50-70%) with 2-3°C cooler water simulating rainfall, 5) Moderate flow, high oxygen. Males perform glass dances: racing vertically up/down glass chasing gravid females.',
    fryCare:
      'Spawning similar to Corydoras: males chase gravid females in T-position. Females attach 3-6 tiny adhesive eggs to broad leaves, glass, or smooth surfaces (50-100 total eggs scattered). Adults may eat eggs—provide dense planting for egg hiding or remove adults. Eggs hatch in 48-72 hours at 24°C. Fry are microscopic (3mm) and need biofilm and infusoria for first 2 weeks before accepting powdered algae wafers. Growth is slow: 1cm at 8 weeks, 2cm at 4 months, mature at 8+ months. Fry rearing is very challenging—need established biofilm.',
    notes:
      'Otocinclus breeding in home aquariums is rare and challenging. Main issues: 1) Need pristine water quality (they\'re sensitive), 2) Adults eat eggs (provide dense plants), 3) Fry need biofilm immediately (prepare tanks). Most breeding is accidental in mature planted tanks with large healthy groups. For deliberate breeding: large water changes with cooler water trigger spawning.',
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
