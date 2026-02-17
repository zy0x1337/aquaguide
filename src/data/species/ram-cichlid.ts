import type { Species } from '../../types/species';

export const ramCichlid: Species = {
  id: 'cichlid-001',
  slug: 'ram-cichlid',
  imageUrl: '/images/species/ram-cichlid.jpg',
  funFact: "German Blue Rams are TEMPERATURE EXTREMISTS requiring WARM STABLE TEMPS (26-29°C) - they're the HOTTEST community fish! Here's the CRITICAL catch: they're HYPER-SENSITIVE to temperature fluctuations - even ±1-2°C swings over 24 hours = stress, disease, death within days! They evolved in Venezuelan tropical streams (30°C year-round) and CANNOT tolerate cold. They're PEACEFUL DWARF CICHLIDS (6cm) displaying SPECTACULAR COURTSHIP DANCES creating SAND VOLCANOES (excavated mounds marking territory) and MATE FOR LIFE forming monogamous pairs with fierce parental care! Watch pairs perform synchronized swimming displays and communicate via body quivering. They're SUBSTRATE SPAWNERS laying 150-500 eggs on flat surfaces (slate rocks, broad leaves) with BOTH PARENTS actively guarding/fanning eggs for 72 hours! They're safe for COMMUNITY TANKS unlike most cichlids. Electric blue bodies with neon spots, black eye stripe, orange fins! From Orinoco Basin!",

  imageCredit: {
    photographer: 'Karelj (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mikrogeophagus_ramirezi_01.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },

  taxonomy: {
    scientificName: 'Mikrogeophagus ramirezi',
    commonName: 'German Blue Ram / Blue Ram Cichlid / Butterfly Cichlid / Ramirezi',
    family: 'Cichlidae',
    origin: 'South America (Orinoco River Basin - Venezuela, Colombia - slow streams, shallow pools)',
    region: 'South America',
    biotope: 'Warm shallow streams and pools with sandy bottoms, dense aquatic vegetation, submerged roots, soft acidic water, high temps 28-30°C',
  },

  visuals: {
    iconShape: 'oval',
    adultSizeCM: 6,
    color: 'ABSOLUTELY STUNNING! Base color: ELECTRIC IRIDESCENT BLUE body covered in neon blue METALLIC SPOTS creating shimmering effect! Black vertical bar through EYE (distinctive), black spot on dorsal fin. YELLOW/GOLD HEAD and chest. Fins: Orange-red edging on dorsal/anal/tail fins. SEXUAL COLORS: Males more intense blues/reds, longer dorsal spines. Females rounder bellies with BRIGHT PINK/MAGENTA belly (especially when breeding - glowing!). Breeding colors INTENSIFY dramatically - males become ELECTRIC. Variants: Gold Ram (yellow body), Black Ram (melanistic), Electric Blue Ram (enhanced blue)',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 26, max: 30, ideal: 28 },
    ph: { min: 5.0, max: 7.0, ideal: 6.0 },
    gh: { min: 4, max: 15 },
    kh: { min: 2, max: 8 },
    flow: 'low',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'middle',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 35,
      territories: 1,
    },
    
    bioloadMultiplier: 1.0,
  },

  habitat: {
    planting: 'very-heavy',
    plantingNotes:
      'German Blue Rams are HEAVILY PLANTED TANK species! They need DENSE VEGETATION for security, territorial markers, spawning sites, and stress reduction. Best plants: BROAD-LEAVED (Amazon Sword, Anubias - spawning sites!), stem plants (Rotala, Ludwigia - territorial markers), FLOATING PLANTS (Salvinia, Frogbit - dim lighting + security), carpet plants (Java Moss - infusoria growth for fry). CRITICAL: Leave OPEN SANDY AREAS center/front for displaying, foraging, and SAND VOLCANO BUILDING (excavated mounds marking territory - adorable behavior!). Rams constantly dig creating caves/pits. Dense planting reduces stress and provides breeding territories. They thrive in planted tanks with subdued lighting.',
    hardscape: ['CRITICAL: FLAT SMOOTH STONES (10-15cm slate rocks - essential spawning surfaces!)', 'Small caves (terracotta pots, driftwood caves - hiding spots)', 'Driftwood branches (territorial markers)', 'NO SHARP EDGES (they constantly dig!)'],
  },

  behavior: {
    tags: ['peaceful', 'colorful', 'bottom_dweller', 'territorial', 'pair_bonding', 'intelligent'],
    minGroupSize: 2,
    description:
      'German Blue Rams are PEACEFUL DWARF CICHLIDS displaying SPECTACULAR BEHAVIORS! They\'re one of the FEW CICHLIDS safe for COMMUNITY TANKS. Watch them constantly foraging substrate picking at algae/detritus, creating SAND VOLCANOES (excavated mounds marking territory - adorable!), and displaying to each other with fin flaring/body quivering. They\'re INTELLIGENT: learning feeding times, recognizing owners, establishing hierarchies. Pairs MATE FOR LIFE forming MONOGAMOUS BONDS performing elaborate COURTSHIP DANCES (synchronized swimming, circling, body quivering, fin displays). They\'re MILDLY TERRITORIAL during breeding defending small area (30cm radius) around spawning site but peaceful otherwise. Both parents exhibit FIERCE PARENTAL CARE guarding eggs/fry for weeks attacking intruders! Watch them fan eggs constantly (oxygenation) and move fry to pre-dug pits.',
    
    compatibility: {
      goodMates: ['Small peaceful fish (tetras - Rummynose, Cardinals, Neons)', 'Peaceful rasboras (Harlequin)', 'Corydoras species', 'Otocinclus', 'Peaceful gouramis (Honey)', 'Apistogramma (if tank large enough)', 'Larger shrimp (Amano - may eat small shrimp)', 'Snails'],
      badMates: ['Aggressive cichlids', 'Large predatory fish', 'Fin nippers (Tiger Barbs)', 'Goldfish (wrong temps)', 'Very small fish (may eat fry-sized fish)', 'Fast competitive feeders'],
      notes:
        'German Blue Rams are PERFECT for WARM PEACEFUL COMMUNITY TANKS! They\'re among the FEW truly PEACEFUL CICHLIDS compatible with small community fish. They\'re non-aggressive toward tankmates and focus on substrate foraging. CRITICAL: Tankmates must tolerate WARM TEMPS (27-29°C) - incompatible with cold-water species! Best with OTHER WARM-LOVING SPECIES (Discus, Sterbai Corys, Cardinals). They\'re MILDLY TERRITORIAL during breeding defending small spawning area (30cm radius) but peaceful otherwise. Safe with larger shrimp (Amano) but may eat CHERRY SHRIMP opportunistically. Pairs need FLAT SPAWNING SURFACES (slate rocks). Avoid aggressive/competitive feeders (they\'re shy slow eaters!).',
      
      rules: [
        {
          type: 'requires',
          condition: 'STABLE WARM TEMPERATURE 26-29°C with ±0.5°C accuracy',
          reason: 'CRITICAL #1 KILLER: German Blue Rams are EXTREME TEMPERATURE SENSITIVE! They evolved in 30°C Venezuelan streams and CANNOT tolerate cold or fluctuations. Even ±1-2°C daily swings = stress, immune suppression, disease (ich, velvet), death within days. Use quality heater with thermostat (±0.5°C accuracy!). Test daily. 60% of Ram deaths from temperature instability',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'SOFT ACIDIC WATER (pH 5.0-7.0, GH 4-10)',
          reason: 'Rams are from soft acidic blackwater streams. In hard alkaline water (pH over 7.5, GH over 15) they develop stress, poor coloration, shortened lifespans. Use RO water or Indian Almond Leaves to achieve soft acidic conditions',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'PRISTINE WATER QUALITY (ammonia/nitrite 0ppm, nitrate under 10ppm)',
          reason: 'Rams are EXTREMELY SENSITIVE to water quality - more than most fish. Even low ammonia (0.25ppm) or nitrates (over 20ppm) = stress, hole-in-head disease, death. Weekly 30% water changes mandatory. Not for new tanks (need 3+ months cycling)',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'FINE SAND SUBSTRATE (1mm grain size)',
          reason: 'Rams are substrate foragers constantly digging, sifting sand through gills, creating sand volcanoes. Gravel (even small pebbles) damages delicate gills and prevents natural foraging behavior. Fine sand mandatory for health and enrichment',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: '0-6',
        midwater: '12-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 1,
      territorial: 5,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'pair',
      maxMalesPerTank: 2,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'intermediate',
    diet: 'omnivore',
    effort: 'high',
    cost: 'medium',
    specialRequirements: [
      'STABLE WARM TEMPERATURE 26-29°C (±0.5°C accuracy!) - CRITICAL', 
      'Quality heater with thermostat (cheap heaters = death!)', 
      'SOFT ACIDIC WATER (pH 5.0-7.0, GH 4-10)', 
      'PRISTINE water quality (ammonia/nitrite 0ppm, nitrate under 10ppm)', 
      'FINE SAND substrate (1mm grain - gill health)', 
      'FLAT SPAWNING SURFACES (slate rocks essential)', 
      'Weekly 30% water changes (non-negotiable)', 
      'NOT for new tanks (need 3+ months mature cycling)',
    ],

    proTips: [
      "TEMPERATURE = SURVIVAL! German Blue Rams are the #1 MOST TEMPERATURE-SENSITIVE community fish! They need STABLE WARM TEMPS (27-29°C) with ±0.5°C accuracy. Even ±1-2°C daily fluctuations = stress, immune suppression, disease (ich/velvet common!), death within days. 60% of Ram deaths from temperature instability! CRITICAL: Use QUALITY HEATER with accurate thermostat (±0.5°C) - cheap heaters KILL Rams. Test temp 2x daily with digital thermometer. This is NON-NEGOTIABLE.",
      "PRISTINE WATER = HEALTH! Rams are HYPER-SENSITIVE to water quality (more than most fish!). Even low ammonia (0.25ppm) or nitrates (over 20ppm) = stress, hole-in-head disease, death. Weekly 30% water changes MANDATORY. Test ammonia/nitrite/nitrate weekly. Keep nitrates under 10ppm ideal, 20ppm maximum. Don't add Rams to NEW TANKS - need 3+ months mature cycling with established bacteria.",
      "SOFT ACIDIC WATER for vibrant colors! Rams are from Venezuelan soft acidic blackwater streams (pH 5.5-6.5, GH 4-8). In hard alkaline water colors fade, stress increases, lifespans shorten. Use: 1) RO water mixed with tap, 2) Indian Almond Leaves (release tannins), 3) Peat moss in filter. Test GH/pH weekly. Soft water = electric blue colors!",
      "FINE SAND substrate MANDATORY! Rams constantly dig, sift sand through gills, forage, create sand volcanoes. Gravel (even small 3mm) DAMAGES GILLS and prevents natural behavior. Use 1mm fine silica sand. Watch them bulldoze sand creating mounds (territorial markers) - adorable!",
      "Provide FLAT SPAWNING SURFACES! Pairs need 10-15cm smooth SLATE ROCKS for egg laying (essential for breeding). Place 2-3 flat rocks in corners. Watch pairs meticulously clean surfaces before spawning. This triggers natural behaviors even without breeding.",
      "Feed HIGH-PROTEIN VARIETY! Rams are carnivorous grazers needing protein-rich diet. Best: frozen bloodworms (2-3x weekly - color enhancer!), frozen brine shrimp, daphnia, high-quality micro-pellets, occasional spirulina. Feed small amounts 2x daily. They're SHY SLOW EATERS - ensure food reaches bottom before aggressive tankmates eat everything.",
      "Buy HEALTHY specimens! Many store Rams are weak from improper temps/water quality. Check: 1) ROUND BELLIES (not sunken/concave), 2) VIBRANT COLORS (not pale), 3) ACTIVE SWIMMING (not lethargic), 4) Clear eyes/fins. Reject skinny/pale Rams - they rarely recover. Quarantine 2-4 weeks before adding to main tank.",
    ],

    commonMistakes: [
      "Temperature instability. BIGGEST KILLER! 60% of Ram deaths! Rams need STABLE 27-29°C with ±0.5°C accuracy. Even ±1-2°C daily fluctuations = stress, ich outbreaks, death within days. Cheap heaters with ±2-3°C swings KILL Rams. Use quality heater with accurate thermostat. Test temp 2x daily. This is critical.",
      "Cold water (under 26°C). Rams are TROPICAL HOT-WATER species from 30°C Venezuelan streams. Keeping at 22-24°C (common community temp) = chronic stress, immune suppression, disease, shortened lifespans (die within 1-2 years vs 4 years!). Minimum 26°C, ideal 27-29°C.",
      "Poor water quality. Rams are HYPER-SENSITIVE! Even low ammonia (0.25ppm) or high nitrates (over 20ppm) = stress, hole-in-head disease, death. Without weekly 30% water changes and pristine conditions, they develop ich, velvet, fungal infections rapidly. Test water weekly.",
      "Adding to NEW TANKS. Rams cannot tolerate cycling fluctuations or unstable bacteria. Adding to tanks under 3 months old = death from parameter swings. Wait for MATURE STABLE TANK with established cycle (6+ months ideal).",
      "Gravel substrate. Rams constantly DIG and SIFT SUBSTRATE through gills (natural foraging). Gravel (even small 3-5mm) damages delicate gills causing bacterial infections. Without fine sand, they can't perform natural behaviors and become stressed.",
      "Hard alkaline water. In pH over 7.5 or GH over 15 (common tap water), Rams develop stress, pale colors, disease-prone, shortened lifespans. They need SOFT ACIDIC water (pH 5.5-6.5, GH 4-8) from blackwater streams. Use RO water or tannins.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['frozen-bloodworms', 'frozen-brine-shrimp', 'micro-pellets', 'daphnia'],
      supplements: ['spirulina-flakes', 'frozen-mysis-shrimp', 'live-blackworms'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'weekly',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'CRITICAL: Weekly 30% water changes MANDATORY! German Blue Rams are HYPER-SENSITIVE to water quality - more than most fish. Without pristine conditions they develop stress, disease, death. Keep: ammonia/nitrite 0ppm, nitrate under 10ppm ideal (20ppm maximum). Test water weekly. Vacuum substrate gently (they dig constantly!). Maintain SOFT ACIDIC WATER (pH 5.5-6.5, GH 4-8) using RO water or Indian Almond Leaves. STABLE TEMPERATURE 27-29°C (±0.5°C accuracy) - test 2x daily. Clean filter monthly without disturbing bacteria.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'low',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['ich', 'velvet', 'hole-in-head-disease', 'fin-rot', 'fungal-infections'],
    sensitivities: ['TEMPERATURE INSTABILITY (even ±1-2°C = stress/death!)', 'Cold water (under 26°C)', 'Ammonia/Nitrite (hyper-sensitive!)', 'High nitrates (over 20ppm)', 'Hard alkaline water', 'Poor water quality'],
  },

  scientificContext: {
    wildHabitat:
      'Mikrogeophagus ramirezi inhabits WARM SHALLOW STREAMS and pools in Orinoco River Basin (Venezuela - Río Apure/Río Meta, Colombia). Wild habitat: shallow (10-50cm) slow-moving or stagnant pools/streams with SANDY BOTTOMS, dense aquatic vegetation (Cabomba, Echinodorus), submerged roots/leaf litter, SOFT ACIDIC WATER (pH 5.0-6.5, GH 2-6, tea-colored from tannins), HIGH TEMPS (28-31°C year-round - tropical!), subdued lighting from vegetation cover. They forage substrate for insect larvae, small crustaceans, worms. Territorial during breeding defending small areas around spawning sites.',
    sexualDimorphism:
      'MODERATE DIFFICULTY (subtle unless breeding). MALES: Slightly LARGER overall, more intense ELECTRIC BLUE coloration, LONGER/POINTED dorsal fin spines (first 2-3 rays extend beyond membrane), slimmer body profile. FEMALES: Smaller, rounder/fuller body especially when gravid (belly swollen with eggs), SHORTER dorsal spines (rounded profile), BRIGHT PINK/MAGENTA BELLY especially during breeding (glowing!), less intense blue coloration. Breeding colors INTENSIFY dramatically: males become electric blue, females glow pink. Juveniles (under 3 months) difficult to sex - wait for maturity and color development.',
    variants: ['German Blue Ram (standard wild-type)', 'Gold Ram (xanthic - yellow body)', 'Electric Blue Ram (enhanced blue - line-bred)', 'Black Ram (melanistic)', 'Longfin Ram (extended fins)', 'Balloon Ram (deformed - ethical concerns)'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'intermediate',
    trigger:
      'German Blue Ram breeding requires STABLE BONDED PAIR (raised from juveniles ideal), pristine conditions, and spawning sites. Triggers: 1) Increase temp to 28-29°C (spawning temp), 2) Massive water changes (50%) with SOFT ACIDIC WATER (pH 5.5-6.5, GH 4-6 - use RO water), 3) Heavy conditioning with HIGH-PROTEIN FOODS (frozen bloodworms, brine shrimp) 2-3 weeks, 4) Provide FLAT SMOOTH SURFACES (10-15cm slate rocks - essential spawning sites!). Watch courtship: pair meticulously CLEANS slate for hours, synchronized swimming displays, body quivering, fin flaring, color intensification (males electric blue, females glowing pink!).',
    fryCare:
      'Ram spawning is SPECTACULAR: pair cleans flat surface, female lays 150-500 ADHESIVE EGGS in rows (male fertilizes immediately). BOTH PARENTS fiercely GUARD and FAN eggs constantly (oxygenation) for 72 hours. Eggs hatch in 3-4 days at 28°C. Parents move WRIGGLERS (larvae) to pre-dug PITS in substrate continuing care 7-10 days! Fry become free-swimming day 5-7. Parents PROTECT FRY for 2-3 weeks (amazing parental care!). CRITICAL: Rams are NOTORIOUS EGG EATERS especially first spawns. For fry survival: 1) Leave with parents (best!), 2) Remove eggs to separate hatch tank if parents eat them. Fry need INFUSORIA first 5 days (green water, liquid fry food), then BABY BRINE SHRIMP. Growth FAST: 1cm at 4 weeks, 2.5cm at 8 weeks. Separate sexes at 3 months.',
    notes:
      'Ram breeding is CHALLENGING but rewarding! Main issues: 1) Pair compatibility (90% of random pairings FAIL - aggression!), 2) Egg eating (especially first spawns - parents learn), 3) Temperature sensitivity (fry die if under 27°C), 4) Water quality (fry hyper-sensitive!). Best approach: Buy 6 juveniles, raise together, let natural pair form (12-18 months), separate pair to breeding tank. First spawns usually eaten - don\'t intervene! By spawn 3-5, parents learn and raise fry successfully. Patience is key!',
  },
  
  experienceData: {
    successRate: 0.45,
    survivalRate: 0.50,
    
    commonFailures: [
      { issue: 'temperature-instability-stress-death', cause: 'daily-fluctuations-over-1-2C-or-cold-water-under-26c', frequency: 0.60 },
      { issue: 'ich-velvet-outbreak', cause: 'temperature-swings-or-stress-from-poor-conditions', frequency: 0.20 },
      { issue: 'hole-in-head-disease', cause: 'high-nitrates-over-20ppm-or-poor-water-quality', frequency: 0.10 },
      { issue: 'stunted-pale-colors', cause: 'hard-alkaline-water-or-wrong-parameters', frequency: 0.05 },
      { issue: 'gill-damage-infections', cause: 'gravel-substrate-instead-of-fine-sand', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 250, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};
