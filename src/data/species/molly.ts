import type { Species } from '../../types/species';

export const molly: Species = {
  id: 'molly-001',
  slug: 'molly',
  imageUrl: '/images/species/molly.jpg',
  funFact: "Mollies are BRACKISH WATER SURVIVORS with EXTREME SALINITY TOLERANCE! They naturally inhabit coastal estuaries and mangrove swamps where FRESH and SALTWATER MIX, thriving anywhere from pure freshwater to FULL MARINE conditions (35ppt)! They're one of the ONLY community fish that can live in SALTWATER AQUARIUMS and are used to CYCLE NEW MARINE TANKS! Here's the catch: they're HARD WATER OBLIGATES and develop THE SHIMMIES (death wobble disease) in soft/acidic water—50% of molly deaths! Mollies shimmy = side-to-side rocking motion indicating mineral deficiency/stress. They need GH 15-30+ and pH 7.5-8.5 (alkaline!). Add aquarium salt (1 tsp per 20L) for best health. Males are RELENTLESS BREEDERS harassing females constantly—1 male : 2-3 females ratio MANDATORY! Livebearers producing 20-100 fry every 4-6 weeks! Black Mollies are most inbred/weakest genetically. From Central American warm coastal waters!",

  imageCredit: {
    photographer: 'Marrabbio2 (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Poecilia_sphenops_couple.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },

  taxonomy: {
    scientificName: 'Poecilia sphenops',
    commonName: 'Molly / Short-finned Molly / Black Molly',
    family: 'Poeciliidae',
    origin: 'Central America (Mexico to Colombia - coastal estuaries, brackish mangrove swamps, freshwater rivers near coast)',
    region: 'Central America',
    biotope: 'Warm coastal estuaries, mangrove swamps, river mouths with brackish/saline influence, hard alkaline water with fluctuating salinity',
  },

  visuals: {
    iconShape: 'globiform',
    adultSizeCM: 9,
    color: 'HIGHLY VARIABLE depending on morph! Wild type: Silver-gray body with orange/yellow on dorsal fin, horizontal dark spots/stripes. Bred morphs: BLACK MOLLY (solid jet black - most popular but weakest genetics), DALMATIAN (white with black spots like dalmatian dog), GOLD/CREAMSICLE (yellow-orange), MARBLE (black/white patterns), BALLOON (deformed shortened spine - ethical concerns). Males slimmer, females rounder/deeper-bodied (especially when gravid). Males have GONOPODIUM (modified anal fin for internal fertilization)',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 7.5, max: 8.5, ideal: 8.0 },
    gh: { min: 15, max: 35 },
    kh: { min: 8, max: 20 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'midwater',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 35,
      territories: 0,
    },
    
    bioloadMultiplier: 1.8,
  },

  habitat: {
    planting: 'medium',
    plantingNotes:
      'Mollies LOVE plants but also EAT THEM when hungry (especially soft-leaved plants)! They\'re omnivores needing ALGAE in diet. Best setup: Dense background/sides (Java Fern, Anubias - hard leaves they can\'t eat), open swimming space center/front (active swimmers!), FLOATING PLANTS (Water Sprite, Hornwort - provides algae grazing, security for fry, dim lighting). WARNING: Mollies will NIBBLE soft plants (Cabomba, fine-leaved stems). Provide JAVA MOSS and broad-leaved plants for grazing. Thick planting provides FRY HIDING SPOTS (adults eat babies!). Salt-tolerant plants best (Java Fern, Anubias, Hornwort). Heavy planting reduces male aggression.',
    hardscape: ['Driftwood (provides aufwuchs/biofilm for grazing)', 'Smooth rocks (no sharp edges)', 'Minimal decor (open swimming space important)'],
  },

  behavior: {
    tags: ['peaceful', 'active', 'livebearer', 'surface_dweller'],
    minGroupSize: 3,
    description:
      'Mollies are PEACEFUL, ACTIVE SURFACE SWIMMERS with CONSTANT BREEDING BEHAVIOR! They\'re friendly community fish but males are RELENTLESS BREEDERS constantly chasing/harassing females with gonopodium (modified anal fin for internal fertilization). 1 male : 2-3 females ratio MANDATORY to spread harassment! Males display to each other (flaring dorsals, circling) but rarely fight seriously. They\'re PROLIFIC LIVEBEARERS: females can store sperm for 6+ months producing 5-10 CONSECUTIVE BROODS from single mating (20-100 fry every 4-6 weeks)! Adults EAT THEIR OWN FRY if not separated. Watch them constantly GRAZING algae from glass/plants/decor like guppies. They\'re ACTIVE SWIMMERS cruising all levels but prefer TOP. Peaceful toward other species but boisterous/nippy when hungry. Very social fish displaying best behavior in groups.',
    
    compatibility: {
      goodMates: ['Platies (same genus - can hybridize!)', 'Swordtails (same genus)', 'Peaceful community fish (tetras in groups)', 'Corydoras', 'Peaceful gouramis', 'Larger shrimp (Amano - may eat small shrimp)', 'Snails'],
      badMates: ['Aggressive cichlids', 'Long-finned slow fish (may nip)', 'Soft water fish (incompatible parameters)', 'Very small fish (may harass)', 'Bettas (may nip fins)'],
      notes:
        'Mollies are EXCELLENT for HARD WATER COMMUNITY TANKS with alkaline pH! Perfect with Platies/Swordtails (same genus - compatible parameters). WARNING: Can HYBRIDIZE with Platies producing infertile hybrid offspring. Compatible with most peaceful community fish tolerating hard alkaline water. They\'re generally peaceful but BOISTEROUS when hungry (may nip fins if underfed - feed vegetable matter!). Safe with LARGER shrimp (Amano) but may eat CHERRY SHRIMP (especially fry). Adults eat their own babies - provide dense planting or separate fry. CRITICAL: Require HARD ALKALINE WATER (GH 15-30+, pH 7.5-8.5) - incompatible with soft water species (tetras, discus, Apistos)!',
      
      rules: [
        {
          type: 'requires',
          condition: 'HARD ALKALINE WATER (GH 15-30+, pH 7.5-8.5)',
          reason: 'CRITICAL #1 KILLER: Mollies are HARD WATER OBLIGATES from coastal estuaries. In soft/acidic water they develop THE SHIMMIES (death wobble disease - side-to-side rocking from mineral deficiency). 50% of molly deaths from soft water! They need calcium/magnesium minerals for health',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: '1 male : 2-3 females ratio',
          reason: 'Males are RELENTLESS BREEDERS constantly chasing/harassing females with gonopodium. Single female = harassed to death. Multiple females = harassment spread. Too many males = constant chasing/stress',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'Black Mollies',
          reason: 'Black Mollies are WEAKEST GENETICALLY from decades of inbreeding. Most disease-prone morph. Higher failure rates than wild-type or other color morphs. Buy from quality breeders',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'Balloon Mollies',
          reason: 'Balloon Mollies have DEFORMED SHORTENED SPINES (bred for "cute" round shape). Ethical concerns: swim poorly, shorter lifespans, health issues. Consider avoiding this morph',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 2,
      territorial: 1,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
      maxMalesPerTank: 3,
    },
    
    finNipping: {
      risk: 'low',
      targets: ['long-finned slow fish when hungry'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'HARD ALKALINE WATER (GH 15-30+, pH 7.5-8.5) - MANDATORY', 
      '1 male : 2-3 females ratio (prevents harassment)', 
      'Warm temps 25-28°C (heat lovers)', 
      'Vegetable matter in diet (algae/spirulina)', 
      'Optional: aquarium salt (1 tsp per 20L)',
    ],

    proTips: [
      "HARD WATER = SURVIVAL! Mollies are HARD WATER OBLIGATES from coastal estuaries. In soft water (under GH 15) they develop THE SHIMMIES (death wobble - side-to-side rocking from mineral deficiency) and DIE within weeks. 50% of molly deaths! Use Seachem Equilibrium or crushed coral to raise GH to 15-30+ and pH to 7.5-8.5. Test before buying mollies!",
      "Add AQUARIUM SALT (not table salt!)! While not required, 1 teaspoon per 20L (1 tsp per 5 gallons) improves molly health dramatically. Mimics their brackish natural habitat. NOTE: Check tankmates tolerate salt (most do, but not all).",
      "1 MALE : 2-3 FEMALES ratio MANDATORY! Males are relentless breeders constantly chasing females. Single female = harassed to death from stress. Multiple females = harassment spread. Watch male behavior - if one female hiding constantly, add more females.",
      "Feed VEGETABLE MATTER daily! Mollies are omnivores needing 60-70% plant material (algae, spirulina flakes, blanched zucchini/spinach, vegetable wafers). Without plant matter they become FIN NIPPERS and develop health issues. They LOVE grazing algae!",
      "Keep WARM (26-28°C)! Mollies are HEAT LOVERS from tropical coastal waters. Black Mollies especially need 26-27°C for best colors and health. Cold water (under 24°C) = stress, disease, dull colors.",
      "Avoid BLACK MOLLIES if possible! They're the MOST INBRED morph from decades of line-breeding and are WEAKEST GENETICALLY. Most disease-prone, shortest lifespans. Wild-type, Dalmatian, or Gold morphs are hardier. Buy Black Mollies only from quality breeders.",
      "Prepare for FRY EXPLOSION! Females produce 20-100 fry every 4-6 weeks (can store sperm 6+ months!). Adults EAT babies. Provide DENSE PLANTS (Java Moss, Water Sprite) or separate gravid females to breeder box. Fry grow fast on crushed flakes.",
    ],

    commonMistakes: [
      "SOFT WATER (GH under 15). #1 KILLER! Mollies are hard water obligates. In soft/acidic water they develop THE SHIMMIES (death wobble disease from mineral deficiency) and die within 2-4 weeks. 50% of failures! They need GH 15-30+ and pH 7.5-8.5. Test water before buying.",
      "Wrong male:female ratio. Too many males (or 1 male with 1 female) = constant harassment, stressed females, aggression. Single female gets chased to death. 1 male : 2-3 females spreads harassment.",
      "COLD WATER (under 24°C). Mollies are tropical heat lovers from warm coastal waters. Cold temps = stress, disease (ich common), dull colors, lethargy. Keep 25-28°C minimum.",
      "No vegetable matter in diet. Mollies need 60-70% PLANT MATERIAL (algae, spirulina, vegetables). Pure protein diet = fin nipping, health issues, aggression. Feed blanched zucchini/spinach weekly.",
      "Buying Black Mollies from chain stores. Black Mollies are weakest genetically (decades of inbreeding). Chain store Black Mollies often diseased/weak. Buy from quality breeders or choose hardier morphs (Dalmatian, Gold).",
      "Overstocking with fry. Mollies are PROLIFIC - 20-100 fry every 4-6 weeks! Without population control, tank overruns quickly. Adults eat most fry naturally (this is OK!). Don't save every baby.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['spirulina', 'algae-wafers', 'vegetables', 'flakes'],
      supplements: ['brine-shrimp', 'bloodworms', 'daphnia'],
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
      notes: 'Weekly 30% water changes. Mollies produce HIGH WASTE (bioloadMultiplier 1.8!) - keep nitrates under 20ppm. CRITICAL: Maintain HARD ALKALINE WATER (GH 15-30+, pH 7.5-8.5) - use crushed coral in filter or Seachem Equilibrium. Test GH/KH/pH weekly. Optional: add 1 tsp aquarium salt per 20L during water changes.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 150,
      },
      filter: {
        required: true,
        type: 'hang-on-back',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['shimmies', 'ich', 'fin-rot', 'fungal-infections', 'parasites'],
    sensitivities: ['SOFT WATER (causes shimmies - #1 killer!)', 'Cold temperatures', 'High nitrates', 'Sudden parameter swings', 'Weak genetics (especially Black Mollies)'],
  },

  scientificContext: {
    wildHabitat:
      'Poecilia sphenops inhabits COASTAL ESTUARIES and MANGROVE SWAMPS in Central America (Mexico to Colombia). Wild habitat: shallow (10-100cm) warm brackish water where FRESHWATER RIVERS meet OCEAN (fluctuating salinity 0-15ppt!), hard alkaline water rich in minerals (GH 15-30+, pH 7.5-8.5), dense aquatic vegetation and mangrove roots, high temperatures (26-30°C year-round), moderate to strong current. They have EXTREME SALINITY TOLERANCE: found in pure freshwater rivers AND full marine conditions (35ppt) - one of only community fish surviving saltwater! They graze ALGAE from submerged vegetation and feed on aquatic insects.',
    sexualDimorphism:
      'EASY TO SEX. MALES: Slimmer, more streamlined torpedo-shaped bodies. GONOPODIUM (modified anal fin - long pointed tube for internal fertilization). Brighter colors, especially in breeding condition. Larger dorsal fin. FEMALES: Fuller, rounder, MUCH DEEPER-BODIED especially when gravid (carrying developing fry - belly hugely swollen, dark gravid spot near vent visible). Normal fan-shaped anal fin. Larger overall size. Juveniles (under 6 weeks) difficult to sex - wait for gonopodium development.',
    variants: ['BLACK MOLLY (solid black - most popular but weakest genetics)', 'DALMATIAN (white with black spots)', 'GOLD/CREAMSICLE (yellow-orange)', 'MARBLE (black/white)', 'BALLOON (deformed short spine)', 'SAILFIN MOLLY (Poecilia latipinna - larger dorsal)', 'LYRETAIL (extended tail lobes)'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger:
      'Mollies are PROLIFIC BREEDERS requiring NO SPECIAL CONDITIONS! They breed continuously in any tank with males and females present. Natural triggers: 1) Warm temps (26-28°C), 2) Hard alkaline water (GH 15-30+, pH 7.5-8.5), 3) Good feeding (especially vegetable matter), 4) Presence of males (gonopodium for internal fertilization). Females can STORE SPERM for 6+ MONTHS producing 5-10 CONSECUTIVE BROODS from single mating! Gestation: 4-6 weeks.',
    fryCare:
      'Mollies are LIVEBEARERS giving birth to FREE-SWIMMING FRY (20-100 per brood every 4-6 weeks!). Watch gravid females: hugely swollen bellies, dark gravid spot, hiding behavior before birth. Birth occurs over hours - female releases fry one-by-one. CRITICAL: Adults (including mother!) EAT THEIR OWN FRY immediately! For fry survival: 1) Provide DENSE PLANTS (Java Moss, Water Sprite, floating plants - fry hide here), 2) Separate gravid female to BREEDER BOX 1-2 days before birth (return mother after), 3) Raise fry in separate tank. Fry are LARGE at birth (6-8mm) and accept CRUSHED FLAKES immediately (no special foods needed!). Feed 3-4x daily. Growth is FAST: 2cm at 8 weeks, sexually mature at 3-4 months. Maintain hard water for fry health.',
    notes:
      'Molly breeding is EFFORTLESS (almost TOO easy!). Main challenge: POPULATION CONTROL! Females produce 20-100 fry every 4-6 weeks continuously. Without intervention, tank overruns with hundreds of mollies within months. Natural solution: Adults eat most fry (this is OK and natural!). Only save fry from first 1-2 broods. WARNING: Mollies can HYBRIDIZE with Platies (same genus) producing infertile hybrid offspring with health issues. Separate species for pure breeding.',
  },
  
  experienceData: {
    successRate: 0.65,
    survivalRate: 0.60,
    
    commonFailures: [
      { issue: 'shimmies-death-wobble', cause: 'soft-acidic-water-under-gh-15', frequency: 0.50 },
      { issue: 'weak-black-mollies', cause: 'inbred-genetics-from-chain-stores', frequency: 0.20 },
      { issue: 'female-harassment-death', cause: 'wrong-male-female-ratio-too-many-males', frequency: 0.10 },
      { issue: 'ich-outbreak', cause: 'cold-water-under-24c-stress', frequency: 0.10 },
      { issue: 'fin-nipping-aggression', cause: 'no-vegetable-matter-in-diet', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
