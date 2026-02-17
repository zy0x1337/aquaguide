import type { Species } from '../../types/species';

export const siameseAlgaeEater: Species = {
  id: 'species-siamese-algae-eater',
  slug: 'siamese-algae-eater',
  imageUrl: '/images/species/siamese-algae-eater.jpg',
  funFact: "TRUE Siamese Algae Eaters (Crossocheilus atrilimes/oblongus) are BLACK BRUSH ALGAE (BBA) ASSASSINS - one of ONLY 3 FISH SPECIES that reliably consume this notorious red algae plague! They have SPECIALIZED MOUTHPARTS with razor-sharp scraping plates for shaving biofilm from rocks like living vacuum cleaners! Here's the CRITICAL catch: 90% of 'SAEs' sold in stores are MISIDENTIFIED imposters - usually aggressive Chinese Algae Eaters (Gyrinocheilus aymonieri) that grow 30cm, become territorial monsters, and SUCK SLIME COATS OFF FISH causing infections/death! TRUE SAE identification: 1) Black stripe extends THROUGH TAIL FIN (not ending at base!), 2) Two BARBELS near mouth, 3) NO sucker mouth, 4) Gold shoulder blaze, 5) Max 14cm. They're HILLSTREAM SPECIALISTS needing HIGH FLOW (powerhead mandatory!) and oxygen-rich water from Mekong rapids. From Thai/Laos fast-flowing streams!",

  imageCredit: {
    photographer: 'Basile Morin (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Crossocheilus_langei_01.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },

  taxonomy: {
    scientificName: 'Crossocheilus oblongus / Crossocheilus atrilimes',
    commonName: 'Siamese Algae Eater (SAE) / True SAE',
    family: 'Cyprinidae',
    origin: 'Southeast Asia (Mekong + Chao Phraya river basins - Thailand, Laos, Cambodia, Vietnam - fast hillstreams)',
    region: 'Asia',
    biotope: 'Fast-flowing hillstreams and rapids over limestone/pebble beds with heavy aufwuchs (biofilm) growth, high oxygen, clear water',
  },

  visuals: {
    iconShape: 'torpedo',
    adultSizeCM: 14,
    color: 'CRITICAL IDENTIFICATION FEATURES (90% store fish are WRONG SPECIES!): TRUE SAE: Dark olive-brown to golden-tan body. SHARP JET-BLACK horizontal stripe runs from SNOUT through EYE extending INTO TAIL FIN (zigzag pattern in tail - CRITICAL ID!). Gold/bronze shoulder blaze above black stripe (distinctive!). Two small BARBELS (whisker-like projections) near mouth. CLEAR or slightly yellowish fins. NO sucker mouth (normal mouth). Belly silver-white. IMPOSTERS TO AVOID: CHINESE ALGAE EATER (Gyrinocheilus): Black stripe ENDS at tail base (doesn\'t enter fin!), LARGE SUCKER MOUTH, NO barbels, red stripe edges, grows 30cm, aggressive! FLYING FOX (Epalzeorhynchos): Black stripe bordered by GOLD BANDS above/below, fins with black/red tint, more aggressive. Always verify TRUE SAE before buying!',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 120,
    tempC: { min: 23, max: 27, ideal: 25 },
    ph: { min: 6.5, max: 8.0, ideal: 7.2 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'very-high',
    substrate: 'smooth-pebbles',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'middle',
      preference: 0.9,
    },
    
    spaceNeeds: {
      horizontalCM: 120,
      verticalCM: 40,
      territories: 1,
    },
    
    bioloadMultiplier: 1.8,
  },

  habitat: {
    planting: 'minimal',
    plantingNotes:
      'TRUE Siamese Algae Eaters are HILLSTREAM AUFWUCHS GRAZERS preferring MINIMAL PLANTING with exposed rock/driftwood surfaces for biofilm grazing! They\'re from fast-flowing rapids and need: 1) SMOOTH RIVER PEBBLES (main grazing surfaces - they scrape biofilm 24/7!), 2) DRIFTWOOD BRANCHES (covered in aufwuchs/algae), 3) LIMESTONE ROCKS (calcium-rich for biofilm growth), 4) OPEN SWIMMING AREAS (they\'re active swimmers!). Best plants: HARDY ATTACHED SPECIES (Anubias, Java Fern, Bolbitis - tied to rocks/wood, tolerate high flow). They will NOT harm healthy plants (herbivores eating only algae/biofilm - safe for planted tanks!). Avoid delicate stem plants (high flow damages them).',
    hardscape: ['CRITICAL: SMOOTH RIVER PEBBLES (3-8cm - main food source for biofilm grazing!)', 'Driftwood branches (aufwuchs-covered surfaces)', 'Limestone slabs/rocks (promote biofilm/algae growth)', 'High-flow rock arrangements (create current zones)', 'NO SHARP EDGES (constant contact during grazing)'],
  },

  behavior: {
    tags: ['algae_eater', 'active', 'aufwuchs_grazer', 'hillstream', 'peaceful', 'bottom_dweller'],
    minGroupSize: 1,
    description:
      'TRUE Siamese Algae Eaters are HYPERACTIVE AUFWUCHS GRAZERS displaying unique hillstream behaviors! Watch them constantly SCRAPING SURFACES with specialized mouthparts (razor-sharp plates shaving biofilm/algae from rocks like living sanders!). They spend 80% of time HEAD-DOWN against current grazing rock surfaces. They\'re TIRELESS WORKERS: 8-12 hours daily grazing, swimming against flow, resting briefly. They\'re PEACEFUL toward most tankmates but TERRITORIAL toward similar-looking species (Flying Foxes, other SAEs - attacks on sight!). Singles are fine (solo grazers naturally) but can keep groups 3+ in large tanks (200L+) with multiple territories. They\'re JUMPERS when startled - secure lid mandatory!',
    
    compatibility: {
      goodMates: ['Fast-swimming hillstream species (Hillstream Loaches, White Cloud Minnows)', 'Danios (Zebra, Pearl - match energy)', 'Rainbowfish (active swimmers)', 'Barbs (Tiger, Rosy - robust)', 'Corydoras (bottom level different)', 'Peaceful community fish (Tetras in groups)', 'Adult shrimp (Amano - too large to eat)'],
      badMates: ['Chinese Algae Eater (aggressive imposter - fights!)', 'Flying Fox (SAE attacks on sight - similar appearance!)', 'Other SAEs unless large tank 200L+ (territorial)', 'Slow algae competitors (Otocinclus - outcompeted for food)', 'Very small fish (may eat fry-sized fish under 2cm)', 'Slow-moving peaceful species (SAE too active)'],
      notes:
        'TRUE Siamese Algae Eaters are PEACEFUL COMMUNITY FISH perfect for active tanks! They\'re non-aggressive toward different-looking tankmates and focus on grazing. CRITICAL: They\'re TERRITORIAL toward SIMILAR-LOOKING SPECIES (Flying Foxes, other SAEs) attacking viciously! Keep SOLO or groups 3+ in LARGE TANKS (200L+) with multiple territories and sightline breaks. They\'re safe with ADULT SHRIMP (Amano, large Neocaridina) but may eat SHRIMPLETS under 1cm opportunistically. Best in HIGH-FLOW community tanks with active fish matching their energy. They OUTCOMPETE slow algae-eaters (Otos) for food - avoid mixing.',
      
      rules: [
        {
          type: 'warning',
          target: 'verify TRUE SAE identification before buying',
          reason: 'CRITICAL: 90% of store "SAEs" are MISIDENTIFIED imposters (usually aggressive Chinese Algae Eaters!). Chinese grow 30cm, become territorial monsters, suck slime coats off fish causing infections/death. TRUE SAE ID: Black stripe extends INTO TAIL FIN (zigzag pattern), two barbels near mouth, NO sucker mouth, max 14cm. Always verify before buying!',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'HIGH FLOW with powerhead/strong filter (15x+ tank volume turnover)',
          reason: 'SAEs are HILLSTREAM SPECIALISTS from Mekong rapids needing HIGH FLOW and oxygen-rich water! Without strong current: lethargy, no grazing behavior, stress, early death. They should swim HEAD-DOWN against current 24/7. Powerhead mandatory - this is non-negotiable',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'BIOFILM/ALGAE surfaces or supplemental feeding',
          reason: 'SAEs are AUFWUCHS GRAZERS needing constant biofilm/algae for grazing. Introducing to CLEAN TANKS with no algae = STARVATION and death! They must have grazing surfaces OR daily supplemental spirulina wafers/blanched vegetables. This is critical for survival',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'mixing with Flying Foxes or other SAEs in small tanks',
          reason: 'SAEs are TERRITORIAL toward similar-looking species (Flying Foxes, other SAEs) attacking viciously on sight! Keep SOLO or groups 3+ in LARGE tanks (200L+) only. Small tanks = constant fighting, injuries, stress',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: '6-12',
        midwater: '10-15',
        bottom: '3-6',
      },
    },
    
    aggressionLevel: {
      intraspecific: 7,
      interspecific: 2,
      territorial: 6,
    },
    
    activity: {
      level: 'very-high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 3,
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
      'VERIFY TRUE SAE identification (90% mislabeled!) - CRITICAL', 
      'HIGH FLOW with powerhead (15x+ turnover) - hillstream requirement', 
      'BIOFILM/ALGAE surfaces (smooth river pebbles, driftwood)', 
      'Supplemental spirulina-based foods daily', 
      'High oxygen levels (airstones + surface agitation)', 
      'CLEAN WATER (low organics, high flow)', 
      'Secure lid (jumpers when startled)',
    ],

    proTips: [
      "SPECIES VERIFICATION IS CRITICAL! 90% of store 'SAEs' are MISIDENTIFIED imposters (usually Chinese Algae Eaters!). TRUE SAE identification checklist: 1) Black stripe extends INTO TAIL FIN (zigzag pattern - CRITICAL!), 2) Two BARBELS near mouth, 3) NO sucker mouth (normal mouth), 4) Gold shoulder blaze, 5) Max 14cm size. CHINESE ALGAE EATER (avoid!): Black stripe ENDS at tail base, LARGE SUCKER MOUTH, no barbels, grows 30cm, aggressive! FLYING FOX (avoid mixing!): Gold bands above/below black stripe, colored fins. Always verify before buying - this saves disasters!",
      "BLACK BRUSH ALGAE (BBA) CONTROL: SAEs are one of ONLY 3 FISH SPECIES eating BBA reliably! For effective BBA control: 1) Introduce YOUNG SAE (5-8cm) when BBA present (they're hungriest!), 2) Keep SLIGHTLY HUNGRY (don't overfeed - forces grazing), 3) Provide variety (alternates between BBA/biofilm/supplements). CRITICAL: Introducing to CLEAN TANKS with NO ALGAE = STARVATION! They need constant grazing surfaces. BBA takes weeks to control - be patient.",
      "HIGH FLOW = HEALTH! SAEs are HILLSTREAM SPECIALISTS from Mekong rapids needing STRONG CURRENT and oxygen-rich water! Setup: 1) Canister filter with high flow output, 2) POWERHEAD (15x+ tank volume turnover), 3) Airstones for oxygen. They should swim HEAD-DOWN against current 24/7 grazing surfaces. Without flow: lethargy, no grazing, stress, early death. Flow test: SAE should actively swim against current - if resting constantly, flow too weak.",
      "Supplemental SPIRULINA-BASED FOODS daily! While SAEs are famous algae-eaters, they need VARIED DIET for health: Daily staple: spirulina wafers/algae pellets (clip to rock - watch them scrape!), blanched zucchini/cucumber discs (2-3x weekly), nori sheets (seaweed - clip near current), occasional high-quality flakes. Feed small amounts ensuring food reaches bottom. They're herbivores - avoid high-protein foods (can't metabolize efficiently causing organ damage!).",
      "Provide BIOFILM SURFACES! SAEs graze AUFWUCHS (biofilm/microorganisms) from surfaces constantly. Setup: 1) SMOOTH RIVER PEBBLES (3-8cm - main grazing surfaces!), 2) Driftwood branches (algae-covered), 3) Limestone rocks (promote biofilm growth). In new/clean tanks without algae: supplement daily or they starve! Mature tanks with established biofilm = ideal.",
      "Singles are FINE! Despite store advice, SAEs are SOLITARY GRAZERS naturally - singles thrive! Groups possible in LARGE TANKS (200L+) with 3+ fish (odd numbers reduce aggression) and multiple territories/sightline breaks. Small groups (2 fish) = dominant fish bullies submissive constantly. Solo = peaceful, natural behavior.",
    ],

    commonMistakes: [
      "Buying WRONG SPECIES. BIGGEST PROBLEM! 90% of store 'SAEs' are Chinese Algae Eaters (aggressive imposters!). Chinese grow 30cm, suck slime coats off fish causing infections, become territorial monsters. Many 'my SAE turned aggressive' complaints are actually Chinese. ALWAYS verify: TRUE SAE = black stripe INTO tail fin, barbels, NO sucker mouth. Don't trust store labels!",
      "No high flow. SAEs are HILLSTREAM SPECIALISTS needing STRONG CURRENT! In low-flow tanks: lethargy, no grazing behavior, stress, early death (60% of SAE failures!). They evolved in Mekong rapids - need powerhead + canister filter creating 15x+ turnover. Without flow they don't display natural behaviors.",
      "Introducing to CLEAN TANKS with no algae. SAEs are AUFWUCHS GRAZERS needing constant biofilm/algae for grazing. Clean tanks = NO FOOD = STARVATION within weeks! Either: 1) Add to mature tanks with established algae/biofilm, 2) Supplement DAILY with spirulina wafers/vegetables if tank clean. This is critical.",
      "Overfeeding. SAEs are supposed to be CONSTANTLY HUNGRY grazing 8-12 hours daily! Overfeeding (large daily meals) = lazy, stops eating algae/BBA, defeats purpose. Feed SMALL amounts spirulina supplements letting them forage rest of time. Slightly hungry = active grazing.",
      "Mixing with Flying Foxes or multiple SAEs in small tanks. SAEs are TERRITORIAL toward similar-looking species attacking viciously! Single SAE + Flying Fox in 120L = constant fighting, stress, injuries. Keep SAE solo OR groups 3+ in 200L+ only.",
      "High-protein diet. SAEs are HERBIVORES specialized for aufwuchs/algae. Feeding high-protein foods (bloodworms, meaty pellets) regularly = can't metabolize efficiently → excessive fat deposits, organ degeneration. Stick to spirulina-based plant foods.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['spirulina-wafers', 'algae-pellets', 'blanched-zucchini', 'nori-sheets'],
      supplements: ['blanched-cucumber', 'blanched-spinach', 'aufwuchs-biofilm'],
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
      notes: 'Weekly 30% water changes MANDATORY. SAEs are HILLSTREAM SPECIALISTS intolerant to organic waste accumulation - they need PRISTINE WATER at all times! Keep: ammonia/nitrite 0ppm, nitrate under 20ppm. They require HIGH DISSOLVED OXYGEN and STRONG WATER MOVEMENT from powerhead + canister filter (15x+ turnover). Clean filter monthly maintaining bacteria. Vacuum substrate gently (they graze surfaces constantly). Test water weekly. High flow + clean water = natural behaviors and health.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'very-high',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 10,
    commonDiseases: ['ich', 'velvet', 'fin-rot', 'starvation', 'stress-from-low-flow'],
    sensitivities: ['Stagnant water (hillstream species!)', 'Low oxygen', 'Organic waste accumulation', 'Starvation (clean tanks with no algae)', 'Copper medications'],
  },

  scientificContext: {
    wildHabitat:
      'Crossocheilus oblongus/atrilimes inhabits FAST-FLOWING HILLSTREAMS and rapids in Mekong + Chao Phraya river basins (Thailand, Laos, Cambodia, Vietnam). Wild habitat: shallow to moderate depth (30-150cm) fast-flowing sections over LIMESTONE/PEBBLE BEDS, STRONG CURRENT (water velocity 50-100 cm/s!), CLEAR highly-oxygenated water, heavy AUFWUCHS GROWTH (biofilm - diatoms, algae, microorganisms covering surfaces). They\'re specialized AUFWUCHS GRAZERS with modified mouthparts containing razor-sharp scraping plates for shaving biofilm from rocks. They graze constantly against current using pectoral fins for station-holding. Famous for consuming BLACK BRUSH ALGAE (Rhodophyta red algae) - one of only 3 fish species eating it reliably!',
    sexualDimorphism:
      'EXTREMELY DIFFICULT to sex (no reliable external differences). Males MAY be: Slightly slimmer overall, more aggressive/territorial behavior. Females MAY be: Slightly fuller-bodied, rounder belly when mature. These differences are SUBTLE and unreliable. Best method: Observing spawning behavior (never documented in home aquaria). Juveniles impossible to sex. Most hobbyists never successfully sex SAEs.',
    variants: ['Crossocheilus oblongus (most common TRUE SAE)', 'Crossocheilus atrilimes (closely related - nearly identical)', 'Crossocheilus langei (rare - most efficient BBA eater!)', 'IMPOSTERS: Chinese Algae Eater (Gyrinocheilus - avoid!), Flying Fox (Epalzeorhynchos - different species)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger:
      'Siamese Algae Eater breeding is EXTREMELY RARE in captivity - never reliably documented in home aquaria! Wild spawning triggers: 1) SEASONAL COOL WATER DROP during monsoon season (temp drops from 27°C to 22-23°C over weeks), 2) HEAVY CURRENT increase (flooding rains increase flow 5-10x!), 3) Migration to upstream spawning areas, 4) Large mature groups (natural behavior). Home aquarists have NEVER successfully bred SAEs - all commercial fish are WILD-CAUGHT imports from Thailand/Laos.',
    fryCare:
      'Breeding details UNKNOWN from home aquaria (never documented!). Presumed wild behavior based on related species: Eggs scattered in fast-flowing sections among rocks/gravel (adhesive eggs stick to substrate), parents show NO parental care (egg scatterers), eggs hatch 2-3 days in fast-flowing oxygenated water, fry need INFUSORIA first week (green water, liquid fry food), then micro-algae and aufwuchs. Growth presumably slow: 3cm at 6 months, 6cm at 1 year. Extremely challenging.',
    notes:
      'Siamese Algae Eater breeding is the HOLY GRAIL of cyprinid breeding - NEVER reliably achieved in home aquaria! All commercial SAEs are WILD-CAUGHT from Mekong river system. Why breeding fails: 1) Require MASSIVE SEASONAL ENVIRONMENTAL CHANGES (temp drops, flow increases impossible to replicate), 2) Need large spawning groups (6-10+ mature adults), 3) Migratory spawning behavior (move to specific upstream areas), 4) Unknown specific spawning triggers. Most hobbyists focus on their ALGAE-EATING prowess rather than breeding attempts.',
  },
  
  experienceData: {
    successRate: 0.40,
    survivalRate: 0.45,
    
    commonFailures: [
      { issue: 'wrong-species-purchased', cause: '90-percent-store-sae-are-aggressive-chinese-algae-eaters', frequency: 0.60 },
      { issue: 'starvation-death', cause: 'introduced-to-clean-tanks-with-no-algae-biofilm', frequency: 0.20 },
      { issue: 'stress-lethargy-death', cause: 'low-flow-tanks-hillstream-species-needs-current', frequency: 0.10 },
      { issue: 'territorial-fighting', cause: 'mixing-with-flying-foxes-or-multiple-sae-small-tanks', frequency: 0.05 },
      { issue: 'organ-damage', cause: 'high-protein-diet-herbivores-cant-metabolize', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 200, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};
