import type { Species } from '../../types/species';

export const oscar: Species = {
  id: 'oscar',
  slug: 'oscar',
  imageUrl: '/images/species/oscar.jpg',
  funFact: "Oscars sind 'AQUARIUM-GENIES' mit DOG-LEVEL INTELLIGENCE! They RECOGNIZE OWNERS within 1 WEEK (swim to glass when you approach), learn FEEDING TIMES (react to door opening/footsteps), eat from HAND with long tongs, PLAY with ping-pong balls/toys, and rearrange ENTIRE TANK weekly moving rocks/plants with brute force! They have MEMORY for routines, show EXCITEMENT (wiggling/dancing when owner appears), and display MOODS (sulking when hungry). Here's the catch: they're WASTE MONSTERS producing 20-30X NORMAL BIOLOAD! A single Oscar = equivalent waste of 30 tetras! They're MESSY EATERS scattering food everywhere, AGGRESSIVE EXCAVATORS creating constant muddy water, and need MASSIVE filtration (4-6x turnover/hour). They grow FAST: 25cm in year 1, 35cm by year 3! CRITICAL: 450L MINIMUM for single adult (many die in 200L tanks from stunting → liver failure). Personality-packed interactive pets if you can handle the commitment. From Amazon floodplains!",

  imageCredit: {
    photographer: 'focusdanifocus on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/fische-oscar-fisch-oscar-tiger-7769543/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },
  
  taxonomy: {
    scientificName: 'Astronotus ocellatus',
    commonName: 'Tiger Oscar / Velvet Cichlid / Oscar Fish',
    family: 'Cichlidae',
    origin: 'South America (Amazon Basin - Peru, Brazil, Colombia, Venezuela, Ecuador - floodplain forests, slow rivers)',
    region: 'South America',
    biotope: 'Flooded forests and blackwater river margins with slow current, muddy/sandy substrates, submerged logs/branches, warm soft acidic water',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 35,
    color: 'WILD TYPE: Spectacular dark olive-green to black base with BRIGHT ORANGE-RED tiger stripes creating marbled patterns across entire body! DISTINCTIVE FALSE EYE SPOT (ocellus) on tail base surrounded by orange ring (confuses predators - looks like eye). Velvety texture to scales. Juveniles (under 5cm) gray-brown with white/orange bands. Adults massively thick-bodied, powerful jaws. Variants: ALBINO (white/yellow with red eyes), RED OSCAR (solid deep red), TIGER (classic orange/black), LEOPARD (spotted patterns)',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 450,
    tempC: { min: 23, max: 29, ideal: 26 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 18 },
    kh: { min: 3, max: 12 },
    flow: 'low',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 150,
      verticalCM: 60,
      territories: 1,
    },
    
    bioloadMultiplier: 25.0,
  },

  habitat: {
    planting: 'sparse',
    plantingNotes:
      'Oscars are AGGRESSIVE EXCAVATORS constantly uprooting plants! They DIG to substrate, move decorations, and destroy fragile plants. Best approach: 1) POTTED PLANTS secured with large rocks (Amazon Sword, Vallisneria in terracotta pots buried in sand), 2) HARD-LEAVED attached plants (Anubias, Java Fern tied to driftwood - harder to destroy), 3) MINIMAL planting (they need open swimming space). Avoid delicate stem plants (destroyed within hours!). Watch them bulldoze entire tank weekly - redecorating behavior is NORMAL. Provide muddy beach zones for natural digging.',
    hardscape: ['MASSIVE driftwood branches (60cm+ secured with silicone - creates territories/caves)', 'Large flat slate rocks (10kg+ smooth edges - spawning surfaces)', 'PVC pipes/caves (15cm+ diameter - hiding spots)', 'Smooth river rocks (tennis-ball size - they WILL move these!)'],
  },

  behavior: {
    tags: ['intelligent', 'predator', 'territorial'],
    minGroupSize: 1,
    description:
      'Oscars are PERSONALITY-PACKED AQUARIUM GENIES displaying DOG-LEVEL INTELLIGENCE and interactive behaviors! They RECOGNIZE INDIVIDUAL OWNERS (swim excitedly to glass when you approach, ignore strangers), learn FEEDING ROUTINES (react to door opening, footsteps, specific times), and accept HAND-FEEDING with long tongs after 1-2 weeks bonding. Watch them PLAY with ping-pong balls or floating toys, pushing them around tank! They\'re AGGRESSIVE EXCAVATORS constantly REARRANGING TANK: moving rocks, uprooting plants, digging caves, creating new layouts weekly. They display MOODS: excitement (wiggling/dancing), sulking (hiding when hungry), curiosity (investigating new objects). Oscars are MESSY EATERS scattering food everywhere, aggressive toward smaller fish (anything mouth-sized = food!), and TERRITORIAL defending caves/zones. They\'re PREDATORS with powerful jaws eating whole fish, crustaceans, insects. CRITICAL: Despite intelligence, they\'re AGGRESSIVE and incompatible with most community fish.',
    
    compatibility: {
      goodMates: ['LARGE Common/Sailfin Plecos (30cm+ only - too big to swallow)', 'Giant Danios in large groups (fast swimmers avoiding predation)', 'Large Silver Dollars (15cm+ disc-shaped hard to eat)', 'Jack Dempsey Cichlids (similar size/aggression)', 'Another Oscar (ONLY in 900L+ tanks with stable bonded pair!)'],
      badMates: ['ALL small/medium fish (eaten immediately)', 'Angelfish/Discus (killed)', 'Flowerhorns (hybrid vigor diseases)', 'Goldfish (fatty liver disease from diet)', 'Shrimp/snails (eaten)', 'Peaceful community fish', 'Nano species (instant prey)'],
      notes:
        'Oscars are BEST KEPT SOLO in species-only 450L+ tanks! They\'re PREDATORS: anything fitting in mouth (up to 8cm fish!) = food. Even "compatible" tankmates require MASSIVE tanks (600-900L+) and careful monitoring. Oscar PAIRS require 900L+ minimum and must be BONDED from juveniles (introducing adults = death fights). Tankmates must be: 1) TOO LARGE to swallow (30cm+ plecos), 2) TOO FAST to catch (Giant Danios in groups), 3) Similar AGGRESSION level (Jack Dempseys). CRITICAL: Most Oscar tankmate failures occur from underestimating their PREDATORY INSTINCTS and GROWTH SPEED (tankmates fine at 10cm Oscar become prey at 25cm!). Safest approach: SOLO TANK with human interaction as enrichment.',
      
      rules: [
        {
          type: 'requires',
          condition: '450L MINIMUM for SINGLE adult Oscar',
          reason: 'CRITICAL: Oscars grow to 35cm and produce 20-30x NORMAL BIOLOAD! Smaller tanks (200-300L) cause: 1) Stunted growth → liver/kidney failure by year 2, 2) Constant ammonia/nitrite spikes, 3) Behavioral issues (aggression, glass surfing). Many die in undersized tanks. 450L (120x50x60cm) is absolute minimum - bigger is always better',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'MASSIVE FILTRATION 4-6x tank volume turnover/hour',
          reason: 'Oscars are WASTE MONSTERS (bioload 25.0!) and MESSY EATERS. Without powerful filtration: ammonia reaches 1.0ppm+ constantly causing stress, disease, death. Need canister filter + sump OR dual canisters rated for 2-3x actual tank volume',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'Oscar pairs without 900L+ tank',
          reason: 'Oscar pairs are HIGHLY AGGRESSIVE and TERRITORIAL! Without 900L+ tank with multiple territories, they FIGHT TO DEATH (even bonded pairs in small tanks). Most pair attempts fail. Only attempt in massive tanks with escape routes',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'feeding live goldfish',
          reason: 'Live goldfish (feeder fish) cause FATTY LIVER DISEASE in Oscars from high fat content and carry parasites/diseases. Many Oscars die from goldfish-only diets. Use quality pellets + frozen foods instead',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '0-6',
        bottom: '1',
      },
    },
    
    aggressionLevel: {
      intraspecific: 8,
      interspecific: 7,
      territorial: 9,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'pair',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'high',
      targets: ['all smaller fish - predatory behavior not fin nipping'],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'high',
    cost: 'high',
    specialRequirements: [
      '450L MINIMUM tank (single adult)', 
       'MASSIVE filtration 4-6x turnover/hour (canister + sump)', 
      '50% weekly water changes (waste production!)', 
      'Secure lid with locks (powerful jumpers!)', 
      'Fine sand substrate (1mm - belly protection)', 
      'Backup air pump + battery (oxygen critical)', 
      'Long feeding tongs (hand-feeding)',
    ],

    proTips: [
      "FILTRATION IS EVERYTHING! Oscars produce 20-30x NORMAL BIOLOAD and are MESSY EATERS scattering food. Without MASSIVE filtration, ammonia/nitrite spike constantly. Setup: 1) Large canister filter (rated 2-3x tank volume), 2) Sump filtration (adds water volume + bio-media), 3) Backup sponge filter (redundancy). Test water 2x weekly - ammonia/nitrite must stay 0ppm!",
      "HAND-FEEDING builds incredible bonds! Use 30cm+ LONG TONGS (never bare hands - powerful bite!) with NLS large pellets (6mm) or 2-3cm chunks frozen silversides/tilapia. Daily 10min sessions: approach slowly, offer food at tong tip, let Oscar learn routine. Within 1-2 weeks they'll swim excitedly when you approach. This is their BEST enrichment!",
      "Plan TANK UPGRADES from day one! Oscars grow FAST: 2.5cm/month when young, 25cm in year 1, 35cm by year 3! Juveniles (5cm) seem fine in 200L but rapidly outgrow it. Budget: Start 450L OR buy juvenile knowing you'll upgrade to 600L+ within 18 months. Stunted Oscars develop liver failure.",
      "FINE SAND substrate (1mm silica sand) is MANDATORY! Oscars are aggressive DIGGERS constantly excavating substrate. Gravel (even small pebbles) CUTS BELLIES causing bacterial infections. Watch them bulldoze sand creating caves - this is natural behavior!",
      "Diet variety = health! Staple: NLS Cichlid Formula large pellets (6mm) 2x daily. Supplements 3x weekly: frozen silversides, frozen tilapia chunks (2-3cm), frozen krill, live earthworms (farm-raised). AVOID: live goldfish (fatty liver disease!), mammalian meat (beef/chicken - can't digest), freeze-dried foods only (nutritionally poor).",
      "Provide ENRICHMENT! Oscars are INTELLIGENT and get bored. Add: ping-pong balls (they push them around!), rearrangeable rocks (let them redecorate), mirror outside tank 5min daily (interactive behavior), varied feeding routines. Bored Oscars become aggressive/destructive.",
      "Backup OXYGEN system is CRITICAL! Oscars are large fish with HIGH oxygen needs. During power outage, they suffocate within hours. Keep battery-powered air pump + airstone ready. Test backup quarterly.",
    ],

    commonMistakes: [
      "Small tanks (200-300L). BIGGEST KILLER! 60% of Oscars die in undersized tanks from: 1) Stunted growth → liver/kidney failure by year 2, 2) Chronic ammonia/nitrite exposure, 3) Stress from cramped space. Juvenile Oscars seem fine in 200L but RAPIDLY outgrow it. 450L minimum for life!",
      "Weak filtration. Oscars produce 20-30x NORMAL WASTE + scatter food everywhere. Without massive filtration (4-6x turnover), ammonia reaches 1.0ppm+ constantly causing stress, hole-in-head disease, death. Single canister filter is NOT enough - need canister + sump OR dual canisters.",
      "Live goldfish diet. 'Feeder goldfish' cause FATTY LIVER DISEASE from high fat content and carry parasites (Ichthyophthirius, flukes, worms). Oscars on goldfish-only diets develop liver failure within 1-2 years. Use NLS pellets + frozen silversides instead!",
      "Oscar pairs in tanks under 900L. Even BONDED pairs from juveniles become TERRITORIAL in small tanks (under 900L) and fight to death. 90% of pair attempts fail. Solo Oscars or pairs in 1200L+ only.",
      "No oxygen backup. Oscars are LARGE FISH with high oxygen demands. Power outages (filter stops = no surface agitation) = suffocation within 3-6 hours. Many die from single blackout. Keep battery air pump ready!",
      "Gravel substrate. Oscars are aggressive DIGGERS. Gravel (even 3-5mm) CUTS their bellies when digging causing bacterial infections (30% of cases!). Use fine sand (1mm) only.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['cichlid-pellets-large', 'frozen-tilapia'],
      supplements: ['frozen-krill'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 50,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'CRITICAL: Weekly 50% water changes MANDATORY! Oscars are WASTE MONSTERS (bioload 25.0!) producing massive ammonia. Without huge water changes, nitrates climb to 80-100ppm+ causing hole-in-head disease. Vacuum substrate thoroughly (scattered food everywhere!). Test ammonia/nitrite/nitrate 2x weekly - must stay: ammonia 0ppm, nitrite 0ppm, nitrate under 40ppm. Clean canister filter monthly. Check backup oxygen system quarterly.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 300,
      },
      filter: {
        required: true,
        type: 'canister-plus-sump',
        flowRate: 'strong',
      },
      airstone: true,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 15,
    commonDiseases: ['hole-in-head-disease', 'ich', 'columnaris', 'fatty-liver-disease', 'fin-rot'],
    sensitivities: ['Ammonia (over 0.25ppm causes stress)', 'Nitrate (over 40ppm causes HITH)', 'Fatty foods (goldfish diet)', 'Copper medications', 'Stunting from small tanks'],
  },

  scientificContext: {
    wildHabitat:
      'Astronotus ocellatus inhabits AMAZON BASIN FLOODPLAINS and slow-moving blackwater rivers (Peru, Brazil, Colombia, Venezuela, Ecuador). Wild habitat: flooded forest margins and river edges during wet season (water rises 10-15 meters!), slow current or stagnant pools, muddy/sandy substrates with submerged logs/branches, soft acidic water (pH 6.0-7.0, GH 5-10), warm temps (25-28°C), dense vegetation and leaf litter. They\'re OPPORTUNISTIC PREDATORS eating: whole fish, insects (grasshoppers, beetles), crustaceans (crayfish, shrimp), fallen fruit (omnivorous!), aquatic snails. They display LEGENDARY PARENTAL CARE: both parents guard eggs/fry fiercely for 6+ weeks attacking much larger intruders!',
    sexualDimorphism:
      'DIFFICULT to sex (subtle differences). MALES: Slightly LARGER overall size, THICKER/BROADER head and jaw structure, more prominent genital papilla (breeding tube - visible during spawning as pointed). FEMALES: Slightly SMALLER, slimmer head/jaw, rounder body when gravid (carrying eggs - belly visibly swollen), blunt rounded genital papilla during spawning. Best method: VENTING (examining genital papilla shape during breeding season - pointed = male, rounded = female) or behavioral observation (males more territorial, females select spawning sites). Juveniles impossible to sex until 15cm+.',
    variants: ['Tiger Oscar (wild-type orange/black)', 'Albino Oscar (white/yellow with red eyes)', 'Red Oscar (solid deep red)', 'Leopard Oscar (spotted patterns)', 'Longfin Tiger Oscar (extended fins)'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'expert',
    trigger:
      'Oscar breeding requires MASSIVE TANK (1200L+ minimum!), STABLE BONDED PAIR (raised from juveniles together - introducing adults fails!), and pristine conditions. Triggers: 1) Increase temp to 28-29°C, 2) Massive water changes (50-70%) with slightly SOFTER water (GH 5-8, pH 6.0-6.5), 3) Heavy feeding with high-protein foods (frozen silversides, earthworms) 2-3 weeks, 4) Provide LARGE FLAT SURFACES (30cm+ smooth slate rocks - spawning sites). Watch pair behavior: cleaning slate surface together, increased territorial aggression, color intensification.',
    fryCare:
      'Oscar spawning is SPECTACULAR: pair meticulously cleans flat slate for hours, then female lays 1000-3000 EGGS in rows (male fertilizes immediately). BOTH PARENTS fiercely GUARD EGGS for 3 days attacking anything approaching (even owner!). Eggs hatch in 72 hours at 28°C. Parents move WRIGGLERS (larvae) to pre-dug pits in substrate, continue guarding 4-6 weeks! Fry become free-swimming day 7-10. Parents PROTECT FRY for 6+ weeks (amazing parental care!). Fry need ARTEMIA NAUPLII (baby brine shrimp) first 2 weeks, then micro-pellets. Growth FAST: 5cm at 8 weeks. CRITICAL: Remove fry at 6 weeks or parents may eat them when next spawning cycle starts.',
    notes:
      'Oscar breeding is CHALLENGING but rewarding! Main issues: 1) Finding compatible pair (90% of pairings FAIL - fight to death!), 2) Massive tank requirement (1200L+ for pair + fry), 3) Parents become HYPER-AGGRESSIVE during spawning (may attack each other post-spawn if stressed). Best approach: Buy 6 juveniles (5cm), raise together in 600L+ tank, let natural pair form (takes 12-18 months), separate pair to breeding tank, remove non-paired individuals. Watch legendary parental care - both parents guard eggs/fry for 6+ weeks!',
  },
  
  experienceData: {
    successRate: 0.50,
    survivalRate: 0.55,
    
    commonFailures: [
      { issue: 'stunted-growth-liver-failure', cause: 'tank-too-small-under-450L-stunting', frequency: 0.35 },
      { issue: 'chronic-ammonia-poisoning', cause: 'inadequate-filtration-waste-buildup', frequency: 0.25 },
      { issue: 'hole-in-head-disease', cause: 'high-nitrates-over-40ppm-from-poor-maintenance', frequency: 0.15 },
      { issue: 'fatty-liver-disease', cause: 'feeder-goldfish-diet-high-fat', frequency: 0.15 },
      { issue: 'pair-fighting-death', cause: 'oscar-pair-in-tank-under-900L', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 800, max: 2500, currency: 'EUR' },
      monthly: { min: 40, max: 100, currency: 'EUR' },
    },
  },
};
