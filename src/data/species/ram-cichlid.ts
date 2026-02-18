import type { Species } from '../../types/species';

export const ramCichlid: Species = {
  id: 'cichlid-001',
  slug: 'ram-cichlid',
  imageUrl: '/images/species/ram-cichlid.jpg',
  funFact: "German Blue Rams are temperature extremists requiring warm stable temps (26-29°C) - they're the hottest community fish! Here's the critical catch: they're hyper-sensitive to temperature fluctuations - even ±1-2°C swings over 24 hours = stress, disease, death within days! They evolved in Venezuelan tropical streams (30°C year-round) and cannot tolerate cold. They're peaceful dwarf cichlids (6cm) displaying spectacular courtship dances creating 'sand volcanoes' (excavated mounds marking territory) and mate for life forming monogamous pairs with fierce parental care! Watch pairs perform synchronized swimming displays and communicate via body quivering. They're substrate spawners laying 150-500 eggs on flat surfaces (slate rocks, broad leaves) with both parents actively guarding/fanning eggs for 72 hours! They're safe for community tanks unlike most cichlids. Electric blue bodies with neon spots, black eye stripe, orange fins! From Orinoco Basin!",

  taxonomy: {
    scientificName: 'Mikrogeophagus ramirezi',
    commonName: 'German Blue Ram / Blue Ram Cichlid / Butterfly Cichlid / Ramirezi',
    family: 'Cichlidae',
    origin: 'South America (Orinoco River Basin - Venezuela, Colombia - slow streams, shallow pools)',
    region: 'South America',
    biotope: 'Warm shallow streams and pools with sandy bottoms, dense aquatic vegetation, submerged roots, soft acidic water, high temps 28-30°C',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 6,
    color: 'Stunning! Base color: Electric iridescent blue body covered in neon blue metallic spots creating shimmering effect! Black vertical bar through eye (distinctive), black spot on dorsal fin. Yellow/gold head and chest. Fins: Orange-red edging on dorsal/anal/tail fins. Sexual colors: Males more intense blues/reds, longer dorsal spines. Females rounder bellies with bright pink/magenta belly (especially when breeding - glowing!). Breeding colors intensify dramatically - males become electric blue. Variants: Gold Ram (yellow body), Black Ram (melanistic), Electric Blue Ram (enhanced blue)',
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
      secondary: 'midwater',
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
    planting: 'dense',
    plantingNotes:
      'German Blue Rams are heavily planted tank species! They need dense vegetation for security, territorial markers, spawning sites, and stress reduction. Best plants: Broad-leaved (Amazon Sword, Anubias - spawning sites!), stem plants (Rotala, Ludwigia - territorial markers), floating plants (Salvinia, Frogbit - dim lighting + security), carpet plants (Java Moss - infusoria growth for fry). CRITICAL: Leave open sandy areas center/front for displaying, foraging, and sand volcano building (excavated mounds marking territory - adorable behavior!). Rams constantly dig creating caves/pits. Dense planting reduces stress and provides breeding territories. They thrive in planted tanks with subdued lighting.',
    hardscape: ['CRITICAL: Flat smooth stones (10-15cm slate rocks - essential spawning surfaces!)', 'Small caves (terracotta pots, driftwood caves - hiding spots)', 'Driftwood branches (territorial markers)', 'No sharp edges (they constantly dig!)'],
  },

  behavior: {
    tags: ['peaceful', 'colorful', 'bottom_dweller', 'territorial', 'pair-bonding', 'intelligent'],
    minGroupSize: 2,
    description:
      'German Blue Rams are peaceful dwarf cichlids displaying spectacular behaviors! They\'re one of the few cichlids safe for community tanks. Watch them constantly foraging substrate picking at algae/detritus, creating sand volcanoes (excavated mounds marking territory - adorable!), and displaying to each other with fin flaring/body quivering. They\'re intelligent: learning feeding times, recognizing owners, establishing hierarchies. Pairs mate for life forming monogamous bonds performing elaborate courtship dances (synchronized swimming, circling, body quivering, fin displays). They\'re mildly territorial during breeding defending small area (30cm radius) around spawning site but peaceful otherwise. Both parents exhibit fierce parental care guarding eggs/fry for weeks attacking intruders! Watch them fan eggs constantly (oxygenation) and move fry to pre-dug pits.',
    
    compatibility: {
      goodMates: ['Small peaceful fish (tetras - Rummynose, Cardinals, Neons)', 'Peaceful rasboras (Harlequin)', 'Corydoras species', 'Otocinclus', 'Peaceful gouramis (Honey)', 'Apistogramma (if tank large enough)', 'Larger shrimp (Amano - may eat small shrimp)', 'Snails'],
      badMates: ['Aggressive cichlids', 'Large predatory fish', 'Fin nippers (Tiger Barbs)', 'Goldfish (wrong temps)', 'Very small fish (may eat fry-sized fish)', 'Fast competitive feeders'],
      notes:
        'German Blue Rams are perfect for warm peaceful community tanks! They\'re among the few truly peaceful cichlids compatible with small community fish. They\'re non-aggressive toward tankmates and focus on substrate foraging. CRITICAL: Tankmates must tolerate warm temps (27-29°C) - incompatible with cold-water species! Best with other warm-loving species (Discus, Sterbai Corys, Cardinals). They\'re mildly territorial during breeding defending small spawning area (30cm radius) but peaceful otherwise. Safe with larger shrimp (Amano) but may eat cherry shrimp opportunistically. Pairs need flat spawning surfaces (slate rocks). Avoid aggressive/competitive feeders (they\'re shy slow eaters!).',
      
      rules: [
        {
          type: 'requires',
          condition: 'stable warm temperature 26-29°C with ±0.5°C accuracy',
          reason: 'CRITICAL #1 KILLER: German Blue Rams are extreme temperature sensitive! They evolved in 30°C Venezuelan streams and cannot tolerate cold or fluctuations. Even ±1-2°C daily swings = stress, immune suppression, disease (ich, velvet), death within days. Use quality heater with thermostat (±0.5°C accuracy!). Test daily. 60% of Ram deaths from temperature instability',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'soft acidic water (pH 5.0-7.0, GH 4-10)',
          reason: 'Rams are from soft acidic blackwater streams. In hard alkaline water (pH over 7.5, GH over 15) they develop stress, poor coloration, shortened lifespans. Use RO water or Indian Almond Leaves to achieve soft acidic conditions',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'pristine water quality (ammonia/nitrite 0ppm, nitrate under 10ppm)',
          reason: 'Rams are extremely sensitive to water quality - more than most fish. Even low ammonia (0.25ppm) or nitrates (over 20ppm) = stress, hole-in-head disease, death. Weekly 30% water changes mandatory. Not for new tanks (need 3+ months cycling)',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'fine sand substrate (1mm grain size)',
          reason: 'Rams are substrate foragers constantly digging, sifting sand through gills, creating sand volcanoes. Gravel (even small pebbles) damages delicate gills and prevents natural foraging behavior. Fine sand mandatory for health and enrichment',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0-6,
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
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'high',
    cost: 'medium',
    specialRequirements: [
      'Stable warm temperature 26-29°C (±0.5°C accuracy!) - critical', 
      'Quality heater with thermostat (cheap heaters = death!)', 
      'Soft acidic water (pH 5.0-7.0, GH 4-10)', 
      'Pristine water quality (ammonia/nitrite 0ppm, nitrate under 10ppm)', 
      'Fine sand substrate (1mm grain - gill health)', 
      'Flat spawning surfaces (slate rocks essential)', 
      'Weekly 30% water changes (non-negotiable)', 
      'Not for new tanks (need 3+ months mature cycling)',
    ],

    proTips: [
      "Temperature = survival! German Blue Rams are the #1 most temperature-sensitive community fish! They need stable warm temps (27-29°C) with ±0.5°C accuracy. Even ±1-2°C daily fluctuations = stress, immune suppression, disease (ich/velvet common!), death within days. 60% of Ram deaths from temperature instability! CRITICAL: Use quality heater with accurate thermostat (±0.5°C) - cheap heaters kill Rams. Test temp 2x daily with digital thermometer. This is non-negotiable.",
      "Pristine water = health! Rams are hyper-sensitive to water quality (more than most fish!). Even low ammonia (0.25ppm) or nitrates (over 20ppm) = stress, hole-in-head disease, death. Weekly 30% water changes mandatory. Test ammonia/nitrite/nitrate weekly. Keep nitrates under 10ppm ideal, 20ppm maximum. Don't add Rams to new tanks - need 3+ months mature cycling with established bacteria.",
      "Soft acidic water for vibrant colors! Rams are from Venezuelan soft acidic blackwater streams (pH 5.5-6.5, GH 4-8). In hard alkaline water colors fade, stress increases, lifespans shorten. Use: 1) RO water mixed with tap, 2) Indian Almond Leaves (release tannins), 3) Peat moss in filter. Test GH/pH weekly. Soft water = electric blue colors!",
      "Fine sand substrate mandatory! Rams constantly dig, sift sand through gills, forage, create sand volcanoes. Gravel (even small 3mm) damages gills and prevents natural behavior. Use 1mm fine silica sand. Watch them bulldoze sand creating mounds (territorial markers) - adorable!",
      "Provide flat spawning surfaces! Pairs need 10-15cm smooth slate rocks for egg laying (essential for breeding). Place 2-3 flat rocks in corners. Watch pairs meticulously clean surfaces before spawning. This triggers natural behaviors even without breeding.",
      "Feed high-protein variety! Rams are carnivorous grazers needing protein-rich diet. Best: frozen bloodworms (2-3x weekly - color enhancer!), frozen brine shrimp, daphnia, high-quality micro-pellets, occasional spirulina. Feed small amounts 2x daily. They're shy slow eaters - ensure food reaches bottom before aggressive tankmates eat everything.",
      "Buy healthy specimens! Many store Rams are weak from improper temps/water quality. Check: 1) Round bellies (not sunken/concave), 2) Vibrant colors (not pale), 3) Active swimming (not lethargic), 4) Clear eyes/fins. Reject skinny/pale Rams - they rarely recover. Quarantine 2-4 weeks before adding to main tank.",
    ],

    commonMistakes: [
      "Temperature instability. Biggest killer! 60% of Ram deaths! Rams need stable 27-29°C with ±0.5°C accuracy. Even ±1-2°C daily fluctuations = stress, ich outbreaks, death within days. Cheap heaters with ±2-3°C swings kill Rams. Use quality heater with accurate thermostat. Test temp 2x daily. This is critical.",
      "Cold water (under 26°C). Rams are tropical hot-water species from 30°C Venezuelan streams. Keeping at 22-24°C (common community temp) = chronic stress, immune suppression, disease, shortened lifespans (die within 1-2 years vs 4 years!). Minimum 26°C, ideal 27-29°C.",
      "Poor water quality. Rams are hyper-sensitive! Even low ammonia (0.25ppm) or high nitrates (over 20ppm) = stress, hole-in-head disease, death. Without weekly 30% water changes and pristine conditions, they develop ich, velvet, fungal infections rapidly. Test water weekly.",
      "Adding to new tanks. Rams cannot tolerate cycling fluctuations or unstable bacteria. Adding to tanks under 3 months old = death from parameter swings. Wait for mature stable tank with established cycle (6+ months ideal).",
      "Gravel substrate. Rams constantly dig and sift substrate through gills (natural foraging). Gravel (even small 3-5mm) damages delicate gills causing bacterial infections. Without fine sand, they can't perform natural behaviors and become stressed.",
      "Hard alkaline water. In pH over 7.5 or GH over 15 (common tap water), Rams develop stress, pale colors, disease-prone, shortened lifespans. They need soft acidic water (pH 5.5-6.5, GH 4-8) from blackwater streams. Use RO water or tannins.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['bloodworms', 'brine-shrimp', 'micro-pellets', 'daphnia'],
      supplements: ['spirulina', 'flakes'],
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
      notes: 'CRITICAL: Weekly 30% water changes mandatory! German Blue Rams are hyper-sensitive to water quality - more than most fish. Without pristine conditions they develop stress, disease, death. Keep: ammonia/nitrite 0ppm, nitrate under 10ppm ideal (20ppm maximum). Test water weekly. Vacuum substrate gently (they dig constantly!). Maintain soft acidic water (pH 5.5-6.5, GH 4-8) using RO water or Indian Almond Leaves. Stable temperature 27-29°C (±0.5°C accuracy) - test 2x daily. Clean filter monthly without disturbing bacteria.',
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
    lifespanYears: 4,
    commonDiseases: ['ich', 'velvet', 'hole-in-head-disease', 'fin-rot', 'fungal-infections'],
    sensitivities: ['Temperature instability (even ±1-2°C = stress/death!)', 'Cold water (under 26°C)', 'Ammonia/Nitrite (hyper-sensitive!)', 'High nitrates (over 20ppm)', 'Hard alkaline water', 'Poor water quality'],
  },

  scientificContext: {
    wildHabitat:
      'Mikrogeophagus ramirezi inhabits warm shallow streams and pools in Orinoco River Basin (Venezuela - Río Apure/Río Meta, Colombia). Wild habitat: shallow (10-50cm) slow-moving or stagnant pools/streams with sandy bottoms, dense aquatic vegetation (Cabomba, Echinodorus), submerged roots/leaf litter, soft acidic water (pH 5.0-6.5, GH 2-6, tea-colored from tannins), high temps (28-31°C year-round - tropical!), subdued lighting from vegetation cover. They forage substrate for insect larvae, small crustaceans, worms. Territorial during breeding defending small areas around spawning sites.',
    sexualDimorphism:
      'Moderate difficulty (subtle unless breeding). Males: Slightly larger overall, more intense electric blue coloration, longer/pointed dorsal fin spines (first 2-3 rays extend beyond membrane), slimmer body profile. Females: Smaller, rounder/fuller body especially when gravid (belly swollen with eggs), shorter dorsal spines (rounded profile), bright pink/magenta belly especially during breeding (glowing!), less intense blue coloration. Breeding colors intensify dramatically: males become electric blue, females glow pink. Juveniles (under 3 months) difficult to sex - wait for maturity and color development.',
    variants: ['German Blue Ram (standard wild-type)', 'Gold Ram (xanthic - yellow body)', 'Electric Blue Ram (enhanced blue - line-bred)', 'Black Ram (melanistic)', 'Longfin Ram (extended fins)', 'Balloon Ram (deformed - ethical concerns)'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'medium',
    trigger:
      'German Blue Ram breeding requires stable bonded pair (raised from juveniles ideal), pristine conditions, and spawning sites. Triggers: 1) Increase temp to 28-29°C (spawning temp), 2) Massive water changes (50%) with soft acidic water (pH 5.5-6.5, GH 4-6 - use RO water), 3) Heavy conditioning with high-protein foods (frozen bloodworms, brine shrimp) 2-3 weeks, 4) Provide flat smooth surfaces (10-15cm slate rocks - essential spawning sites!). Watch courtship: pair meticulously cleans slate for hours, synchronized swimming displays, body quivering, fin flaring, color intensification (males electric blue, females glowing pink!).',
    fryCare:
      'Ram spawning is spectacular: pair cleans flat surface, female lays 150-500 adhesive eggs in rows (male fertilizes immediately). Both parents fiercely guard and fan eggs constantly (oxygenation) for 72 hours. Eggs hatch in 3-4 days at 28°C. Parents move wrigglers (larvae) to pre-dug pits in substrate continuing care 7-10 days! Fry become free-swimming day 5-7. Parents protect fry for 2-3 weeks (amazing parental care!). CRITICAL: Rams are notorious egg eaters especially first spawns. For fry survival: 1) Leave with parents (best!), 2) Remove eggs to separate hatch tank if parents eat them. Fry need infusoria first 5 days (green water, liquid fry food), then baby brine shrimp. Growth fast: 1cm at 4 weeks, 2.5cm at 8 weeks. Separate sexes at 3 months.',
    notes:
      'Ram breeding is challenging but rewarding! Main issues: 1) Pair compatibility (90% of random pairings fail - aggression!), 2) Egg eating (especially first spawns - parents learn), 3) Temperature sensitivity (fry die if under 27°C), 4) Water quality (fry hyper-sensitive!). Best approach: Buy 6 juveniles, raise together, let natural pair form (12-18 months), separate pair to breeding tank. First spawns usually eaten - don\'t intervene! By spawn 3-5, parents learn and raise fry successfully. Patience is key!',
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