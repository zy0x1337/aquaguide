import type { Species } from '../../types/species';

export const otocinclusMacrospilus: Species = {
  id: 'oto-002',
  slug: 'otocinclus-macrospilus',
  imageUrl: '/images/species/otocinclus-macrospilus.jpg',
  funFact: "Otocinclus macrospilus is the MARBLED MIMIC constantly confused with O. vittatus! The CRITICAL IDENTIFICATION DIFFERENCE: O. macrospilus has INTERRUPTED LATERAL STRIPE stopping before tail base with SEPARATE DISTINCT TAIL SPOT (heart-shaped blotch disconnected from body stripe!), while O. vittatus has CONTINUOUS UNINTERRUPTED STRIPE running through to tail tip. Plus O. macrospilus has MARBLED/MOTTLED BROWN PATTERN on back (like camouflage!) vs vittatus' cleaner appearance. They're often mislabeled in stores as 'Oto vittatus' (90% of sold 'vittatus' are actually macrospilus!). Both are IDENTICAL in care needs and behavior - they're interchangeable algae-eating machines! Can school together mixed. From Peruvian Amazon!",

  imageCredit: {
    photographer: 'AquaInfo (via aquainfo.org)',
    sourceUrl: 'https://aquainfo.org/article/otocinclus-macrospilus-tailspotted-oto/',
    license: 'Educational Use',
    licenseUrl: 'https://aquainfo.org/article/otocinclus-macrospilus-tailspotted-oto/'
  },

  taxonomy: {
    scientificName: 'Otocinclus macrospilus',
    commonName: 'Marbled Otocinclus / Tailspot Oto / Macrospilus Oto',
    family: 'Loricariidae',
    origin: 'South America (Peru - Amazon River system, vegetation-rich river margins)',
    region: 'South America',
    biotope: 'Slow to moderate flow vegetation-rich river margins, dense floating plants, submerged branches, soft acidic water',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 3.5,
    color: 'CRITICAL SPECIES IDENTIFICATION (often confused with O. vittatus!): Light beige/tan body with INTERRUPTED DARK BROWN LATERAL STRIPE running from snout along body but STOPPING BEFORE TAIL BASE (interrupted - key difference!). Large SEPARATE HEART-SHAPED TAIL SPOT at caudal peduncle (disconnected from body stripe - CRITICAL ID feature!). Back/dorsal surface has distinctive MARBLED/MOTTLED BROWN CAMOUFLAGE PATTERN (irregular patches - not clean like vittatus). Belly white/cream. Clear fins. Distinctive SUCKER MOUTH. O. VITTATUS COMPARISON: Vittatus has CONTINUOUS UNINTERRUPTED stripe running through to tail tip (no separate tail spot!) and CLEANER back without marbled pattern. This is THE key difference for identification',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 21, max: 26, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 2, max: 15 },
    kh: { min: 1, max: 8 },
    flow: 'moderate',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'middle',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.3,
  },

  habitat: {
    planting: 'very-heavy',
    plantingNotes:
      'Otocinclus macrospilus requires VERY HEAVY PLANTING with BROAD-LEAVED PLANTS for grazing! They\'re algae/biofilm specialists needing constant food surfaces. Best setup: BROAD-LEAVED PLANTS (Amazon Swords, Anubias, Java Fern - large leaf surfaces accumulate algae/biofilm for grazing!), FLOATING PLANTS (Water Sprite, Frogbit - creates aufwuchs underneath, provides security), fine-leaved plants (Cabomba, hornwort). They spend 90% of time GRAZING SURFACES constantly! Dense planting creates biofilm-rich microhabitats mimicking Amazonian vegetation margins. CRITICAL: Mature tank (6+ months old) with established algae/biofilm is MANDATORY before adding Otos (new/clean tanks = starvation!).',
    hardscape: ['DRIFTWOOD BRANCHES (mandatory - main grazing surfaces!)', 'Smooth river stones (biofilm growth)', 'NO SHARP EDGES (soft-bodied fish!)', 'Lots of surface area for algae growth'],
  },

  behavior: {
    tags: ['algae_eater', 'peaceful', 'shy', 'schooling', 'diurnal', 'bottom_dweller'],
    minGroupSize: 6,
    description:
      'Otocinclus macrospilus are EXTREMELY SHY PEACEFUL ALGAE-EATING SPECIALISTS displaying constant grazing behaviors! Watch them sucker-mouth attached to surfaces (glass, leaves, driftwood) scraping biofilm/algae 8-12 hours daily in slow methodical movements. They\'re NERVOUS FISH: easily spooked by sudden movements, hiding when stressed. They need GROUPS 6+ for security (single/small groups = constant hiding, stress, early death). They\'re DIURNAL GRAZERS most active during day. Watch them perform "glass dancing" up/down aquarium walls grazing algae. They\'re COMPLETELY PEACEFUL never aggressive. CRITICAL: They\'re SLOW EATERS easily outcompeted for food - need peaceful tankmates only!',
    
    compatibility: {
      goodMates: ['All peaceful community fish (Neon Tetras, Harlequin Rasboras)', 'Corydoras (different bottom level)', 'ALL dwarf shrimp (Neocaridina, Caridina - 100% safe!)', 'Snails (peaceful cohabitants)', 'Small peaceful fish under 6cm', 'Can mix with O. vittatus (interchangeable!)', 'Discus (same water parameters)', 'Peaceful gouramis'],
      badMates: ['Goldfish (incompatible temps/parameters)', 'Large/aggressive cichlids', 'Fast/competitive eaters (outcompete for food)', 'Boisterous fish (stress shy Otos)', 'Any predatory fish'],
      notes:
        'Otocinclus macrospilus are MODEL COMMUNITY FISH perfect for peaceful planted tanks! They\'re 100% SAFE with ALL INVERTEBRATES including tiny shrimplets (never predatory). CRITICAL: They\'re SLOW FEEDERS easily outcompeted - only keep with PEACEFUL TANKMATES! Boisterous/fast fish (barbs, large danios) stress them causing hiding/starvation. Best in CALM PLANTED COMMUNITY TANKS. They can SCHOOL WITH O. VITTATUS mixed (identical behavior - interchangeable!).',
      
      rules: [
        {
          type: 'requires',
          condition: 'MATURE TANK (6+ months old) with established algae/biofilm',
          reason: 'CRITICAL #1 CAUSE OF DEATH: Adding Otos to NEW/CLEAN tanks with no algae = STARVATION within 2-3 weeks! They need constant biofilm/algae for grazing. Mature tanks have established algae/aufwuchs on all surfaces. New tanks = sterile = death. Wait 6+ months after cycling before adding Otos. This is absolutely mandatory',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'groups of 6+ fish minimum',
          reason: 'Otos are SCHOOLING FISH needing groups 6+ for security! Singles or pairs = extreme stress, constant hiding, refusal to eat, early death. Large groups = confident grazing behavior, natural activity. This is critical for survival and well-being',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'mixing with fast/competitive feeders',
          reason: 'Otos are SLOW GRAZERS easily outcompeted for food! In tanks with boisterous fish (barbs, large danios), Otos become stressed and hide rather than graze = starvation. Only keep with peaceful slow-moving tankmates',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: '8-12',
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
      level: 'moderate',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'schooling',
      maxMalesPerTank: 10,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'expert',
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'MATURE TANK (6+ months old) with established algae - MANDATORY', 
      'Constant supply of algae/biofilm on surfaces', 
      'Groups 6+ minimum (schooling security)', 
      'BROAD-LEAVED PLANTS for grazing surfaces', 
      'Pristine water quality (ammonia/nitrite 0ppm, nitrate under 20ppm)', 
      'Peaceful tankmates only (slow feeders)', 
      'Supplemental algae-based foods (spirulina wafers, blanched vegetables)',
    ],

    proTips: [
      "MATURE TANK IS MANDATORY! #1 cause of Oto death: adding to NEW/CLEAN tanks with no algae/biofilm = STARVATION within 2-3 weeks! They're specialized algae grazers needing constant food surfaces. Before buying Otos: Wait 6+ MONTHS after cycling for algae/biofilm to establish on all surfaces (glass, plants, driftwood). Test: Can you see green tinge on glass? Biofilm on driftwood? Then ready for Otos. New tanks = death sentence.",
      "Pre-grow ALGAE ROCKS for emergency food! Setup: Take smooth river stones, place in sunny window in bucket of old tank water for 2-3 weeks until covered in green algae. Rotate these 'algae stones' into Oto tank when cleaned surfaces run low. This prevents starvation between algae growth cycles. Critical backup food source!",
      "SPECIES IDENTIFICATION: O. macrospilus vs O. vittatus confusion! Key differences: MACROSPILUS (this species): Interrupted lateral stripe + separate heart-shaped tail spot + marbled back. VITTATUS: Continuous uninterrupted stripe to tail tip + clean back. 90% of store 'vittatus' are actually macrospilus! Both identical in care - interchangeable. Can school together mixed.",
      "Groups 6+ MINIMUM for survival! Otos are SCHOOLING FISH - singles/pairs = extreme stress, constant hiding, refusal to eat, early death. In groups 6+: confident grazing behavior, natural activity, security. This isn't optional - it's survival. Bigger groups = better (8-12 ideal).",
      "DRIP ACCLIMATION mandatory! Otos are EXTREMELY SENSITIVE to parameter changes - standard acclimation = shock death! Use DRIP METHOD: 2-3 hours slow drip from main tank into Oto container gradually adjusting parameters. Rush = death. Most Oto deaths occur first 2 weeks from poor acclimation.",
      "Supplement with ALGAE WAFERS + BLANCHED VEGETABLES! While Otos prefer grazing algae, tanks rarely produce enough for 6+ fish. Supplement nightly: spirulina/algae wafers (break into pieces placed near favorite spots), blanched zucchini/cucumber slices (clip to glass), Repashy Soilent Green gel food. Feed after lights out when they're most active.",
      "PRISTINE WATER QUALITY non-negotiable! Otos are sensitive to pollution: ammonia/nitrite = death, nitrates over 20ppm = stress/disease. Weekly 30% water changes mandatory. They're indicator fish - if Otos dying, water quality failing.",
    ],

    commonMistakes: [
      "Adding to NEW/CLEAN tanks. BIGGEST KILLER (70% of failures!). Otos are specialized algae/biofilm grazers. New tanks have NO algae/biofilm = NO FOOD = starvation within 2-3 weeks. They can't survive on supplemental foods alone long-term. Wait 6+ months for mature biofilm before adding Otos. This is mandatory.",
      "Keeping singly or pairs. Otos are SCHOOLING FISH needing groups 6+ for security! Singles/pairs = extreme stress, constant hiding, refusal to eat, early death. This isn't optional - groups = survival.",
      "Poor acclimation. Otos are EXTREMELY SENSITIVE to parameter changes! Standard float-and-dump acclimation = shock death. Must use DRIP ACCLIMATION (2-3 hours slow adjustment). 50% of Oto deaths occur first week from acclimation shock.",
      "Mixing with boisterous fish. Otos are SHY SLOW GRAZERS! In tanks with active fish (barbs, large danios), Otos hide constantly rather than graze = starvation. Only peaceful calm tankmates.",
      "Not supplementing food. Even mature tanks rarely produce enough algae for 6+ Otos. Without nightly supplements (algae wafers, vegetables), they slowly starve. Thin bodies, lethargy = starvation.",
      "Buying stressed fish. Otos are often malnourished at stores (kept in clean tanks with no algae). Look for: rounded bellies (well-fed), active grazing, no sunken appearance. Avoid thin/listless fish - they rarely recover.",
    ],
    
    feeding: {
      frequency: 'constant-grazing',
      primaryFoods: ['algae', 'biofilm', 'aufwuchs', 'spirulina-wafers', 'blanched-zucchini'],
      supplements: ['blanched-cucumber', 'blanched-spinach', 'repashy-soilent-green', 'nori-sheets'],
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
      vacuumingNeeded: true,
      notes: 'Weekly 30% water changes MANDATORY. Otos are EXTREMELY SENSITIVE to water quality - they\'re indicator fish showing distress before other species! Keep: ammonia/nitrite 0ppm (any amount = stress/death), nitrate UNDER 20ppm (they\'re intolerant to high nitrates). They need SOFT ACIDIC WATER (pH 6.0-7.5, GH 2-15) - avoid hard alkaline water. Gentle to moderate flow from filter output. Test water weekly. They\'re SCALELESS making them sensitive to medications - avoid copper-based treatments! Very delicate maintenance needs.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'moderate',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['starvation', 'ich', 'velvet', 'stress-related-infections'],
    sensitivities: ['Ammonia (instant death!)', 'Nitrite (highly toxic)', 'High nitrates (over 20ppm)', 'Copper medications (scaleless fish!)', 'Parameter changes (drip acclimate!)', 'Poor acclimation (shock death)'],
  },

  scientificContext: {
    wildHabitat:
      'Otocinclus macrospilus inhabits VEGETATION-RICH SLOW TO MODERATE FLOW river margins in Peruvian Amazon River system. Wild habitat: shallow water (20-80cm depth) among DENSE FLOATING VEGETATION (Water Hyacinth rafts, matured aquatic plants), submerged branches covered in aufwuchs/biofilm, SOFT ACIDIC WATER (pH 6.0-6.8, very soft GH 2-5), warm temps 22-25°C, tannin-stained water. They graze biofilm/algae from undersides of floating plant roots and submerged surfaces constantly. They\'re AUFWUCHS SPECIALISTS with sucker mouths adapted for surface grazing.',
    sexualDimorphism:
      'DIFFICULT TO SEX (subtle differences). Females MAY be: Rounder, fuller-bodied especially when gravid (carrying eggs - belly noticeably swollen), slightly larger overall. Males MAY be: Slimmer, more streamlined profiles, slightly smaller. These differences only visible when mature (8+ months) and side-by-side comparison. Juveniles impossible to sex. Most hobbyists never reliably sex Otos.',
    variants: ['Otocinclus macrospilus (this species - marbled back, interrupted stripe)', 'O. vittatus (continuous stripe - often confused!)', 'O. vestitus (similar to vittatus, smaller)', 'O. cocama (Zebra Oto - black/white stripes, premium species)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger:
      'Otocinclus macrospilus breeding is EXTREMELY RARE in home aquaria (expert-level challenge!). Wild spawning triggers: 1) RAINY SEASON simulation (cool water change from 24°C to 21-22°C over days mimicking seasonal cooling), 2) HEAVY FEEDING with protein-rich foods (live foods, spirulina), 3) Large healthy groups (8-12+ fish with mature adults 12+ months old), 4) Pristine water quality (triggers spawning readiness). Condition fish for weeks before attempting. Success rate very low.',
    fryCare:
      'Breeding details RARE in home aquaria (few successful reports!). Observed behavior: Males chase gravid females in courtship, females lay 3-6 sticky eggs on broad plant leaves (Anubias, Amazon Swords) or aquarium glass, eggs scattered over hours, NO parental care (parents may eat eggs!). For fry survival: Remove parents or move eggs to hatching container with gentle airstone. Eggs hatch 3-4 days (tiny transparent fry!). Fry need MICROSCOPIC FIRST FOODS: infusoria/green water (week 1), spirulina powder (week 2), soft algae scraped from surfaces (week 3+), eventually micro-pellets. Growth SLOW: 1cm at 8 weeks, 2cm at 6 months. Extremely challenging.',
    notes:
      'Otocinclus macrospilus breeding is the HOLY GRAIL for Oto keepers - extremely rare in captivity! Most breeding attempts fail. Challenges: 1) Difficulty triggering spawning (specific environmental cues unknown), 2) Tiny fry requiring microscopic foods (infusoria cultures needed), 3) Slow growth (months to maturity), 4) Parents eating eggs/fry. Few hobbyists successfully breed Otos. Focus on keeping them healthy rather than breeding attempts.',
  },
  
  experienceData: {
    successRate: 0.30,
    survivalRate: 0.35,
    
    commonFailures: [
      { issue: 'starvation-death', cause: 'added-to-new-clean-tanks-with-no-algae-biofilm', frequency: 0.70 },
      { issue: 'acclimation-shock-death', cause: 'poor-acclimation-parameter-shock-first-week', frequency: 0.15 },
      { issue: 'stress-hiding-death', cause: 'kept-singly-or-small-groups-under-6-fish', frequency: 0.08 },
      { issue: 'stress-from-boisterous-tankmates', cause: 'mixed-with-active-fish-cant-graze-peacefully', frequency: 0.05 },
      { issue: 'ammonia-nitrite-poisoning', cause: 'poor-water-quality-sensitive-fish', frequency: 0.02 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};
