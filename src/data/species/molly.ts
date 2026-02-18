import type { Species } from '../../types/species';

export const molly: Species = {
  id: 'molly-001',
  slug: 'molly',
  imageUrl: '/images/species/molly.jpg',
  funFact: "Mollies are brackish water survivors with extreme salinity tolerance! They naturally inhabit coastal estuaries and mangrove swamps where fresh and saltwater mix, thriving anywhere from pure freshwater to full marine conditions (35ppt)! They're one of the only community fish that can live in saltwater aquariums and are used to cycle new marine tanks! Here's the catch: they're HARD WATER OBLIGATES and develop 'the shimmies' (death wobble disease) in soft/acidic water—50% of molly deaths! Mollies shimmy = side-to-side rocking motion indicating mineral deficiency/stress. They need GH 15-30+ and pH 7.5-8.5 (alkaline!). Add aquarium salt (1 tsp per 20L) for best health. Males are relentless breeders harassing females constantly—1 male : 2-3 females ratio mandatory! Livebearers producing 20-100 fry every 4-6 weeks! Black Mollies are most inbred/weakest genetically. From Central American warm coastal waters!",

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
    color: 'Highly variable depending on morph! Wild type: Silver-gray body with orange/yellow on dorsal fin, horizontal dark spots/stripes. Bred morphs: Black Molly (solid jet black - most popular but weakest genetics), Dalmatian (white with black spots like dalmatian dog), Gold/Creamsicle (yellow-orange), Marble (black/white patterns), Balloon (deformed shortened spine - ethical concerns). Males slimmer, females rounder/deeper-bodied (especially when gravid). Males have gonopodium (modified anal fin for internal fertilization)',
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
      'Mollies love plants but also eat them when hungry (especially soft-leaved plants)! They\'re omnivores needing algae in diet. Best setup: Dense background/sides (Java Fern, Anubias - hard leaves they can\'t eat), open swimming space center/front (active swimmers!), floating plants (Water Sprite, Hornwort - provides algae grazing, security for fry, dim lighting). Warning: Mollies will nibble soft plants (Cabomba, fine-leaved stems). Provide Java Moss and broad-leaved plants for grazing. Thick planting provides fry hiding spots (adults eat babies!). Salt-tolerant plants best (Java Fern, Anubias, Hornwort). Heavy planting reduces male aggression.',
    hardscape: ['Driftwood (provides aufwuchs/biofilm for grazing)', 'Smooth rocks (no sharp edges)', 'Minimal decor (open swimming space important)'],
  },

  behavior: {
    tags: ['peaceful', 'active', 'livebearer', 'surface_dweller'],
    minGroupSize: 3,
    description:
      'Mollies are peaceful, active surface swimmers with constant breeding behavior! They\'re friendly community fish but males are RELENTLESS BREEDERS constantly chasing/harassing females with gonopodium (modified anal fin for internal fertilization). 1 male : 2-3 females ratio mandatory to spread harassment! Males display to each other (flaring dorsals, circling) but rarely fight seriously. They\'re prolific livebearers: females can store sperm for 6+ months producing 5-10 consecutive broods from single mating (20-100 fry every 4-6 weeks)! Adults eat their own fry if not separated. Watch them constantly grazing algae from glass/plants/decor like guppies. They\'re active swimmers cruising all levels but prefer top. Peaceful toward other species but boisterous/nippy when hungry. Very social fish displaying best behavior in groups.',
    
    compatibility: {
      goodMates: ['Platies (same genus - can hybridize!)', 'Swordtails (same genus)', 'Peaceful community fish (tetras in groups)', 'Corydoras', 'Peaceful gouramis', 'Larger shrimp (Amano - may eat small shrimp)', 'Snails'],
      badMates: ['Aggressive cichlids', 'Long-finned slow fish (may nip)', 'Soft water fish (incompatible parameters)', 'Very small fish (may harass)', 'Bettas (may nip fins)'],
      notes:
        'Mollies are excellent for hard water community tanks with alkaline pH! Perfect with Platies/Swordtails (same genus - compatible parameters). Warning: Can hybridize with Platies producing infertile hybrid offspring. Compatible with most peaceful community fish tolerating hard alkaline water. They\'re generally peaceful but boisterous when hungry (may nip fins if underfed - feed vegetable matter!). Safe with larger shrimp (Amano) but may eat cherry shrimp (especially fry). Adults eat their own babies - provide dense planting or separate fry. CRITICAL: Require hard alkaline water (GH 15-30+, pH 7.5-8.5) - incompatible with soft water species (tetras, discus, Apistos)!',
      
      rules: [
        {
          type: 'requires',
          condition: 'hard alkaline water (GH 15-30+, pH 7.5-8.5)',
          reason: 'CRITICAL #1 KILLER: Mollies are HARD WATER OBLIGATES from coastal estuaries. In soft/acidic water they develop "the shimmies" (death wobble disease - side-to-side rocking from mineral deficiency). 50% of molly deaths from soft water! They need calcium/magnesium minerals for health',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: '1 male : 2-3 females ratio',
          reason: 'Males are relentless breeders constantly chasing/harassing females with gonopodium. Single female = harassed to death. Multiple females = harassment spread. Too many males = constant chasing/stress',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'Black Mollies',
          reason: 'Black Mollies are weakest genetically from decades of inbreeding. Most disease-prone morph. Higher failure rates than wild-type or other color morphs. Buy from quality breeders',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'Balloon Mollies',
          reason: 'Balloon Mollies have deformed shortened spines (bred for "cute" round shape). Ethical concerns: swim poorly, shorter lifespans, health issues. Consider avoiding this morph',
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
      'Hard alkaline water (GH 15-30+, pH 7.5-8.5) - mandatory', 
      '1 male : 2-3 females ratio (prevents harassment)', 
      'Warm temps 25-28°C (heat lovers)', 
      'Vegetable matter in diet (algae/spirulina)', 
      'Optional: aquarium salt (1 tsp per 20L)',
    ],

    proTips: [
      "HARD WATER = SURVIVAL! Mollies are HARD WATER OBLIGATES from coastal estuaries. In soft water (under GH 15) they develop 'the shimmies' (death wobble - side-to-side rocking from mineral deficiency) and die within weeks. 50% of molly deaths! Use Seachem Equilibrium or crushed coral to raise GH to 15-30+ and pH to 7.5-8.5. Test before buying mollies!",
      "Add aquarium salt (not table salt)! While not required, 1 teaspoon per 20L (1 tsp per 5 gallons) improves molly health dramatically. Mimics their brackish natural habitat. Note: Check tankmates tolerate salt (most do, but not all).",
      "1 male : 2-3 females ratio mandatory! Males are relentless breeders constantly chasing females. Single female = harassed to death from stress. Multiple females = harassment spread. Watch male behavior - if one female hiding constantly, add more females.",
      "Feed vegetable matter daily! Mollies are omnivores needing 60-70% plant material (algae, spirulina flakes, blanched zucchini/spinach, vegetable wafers). Without plant matter they become fin nippers and develop health issues. They love grazing algae!",
      "Keep warm (26-28°C)! Mollies are heat lovers from tropical coastal waters. Black Mollies especially need 26-27°C for best colors and health. Cold water (under 24°C) = stress, disease, dull colors.",
      "Avoid Black Mollies if possible! They're the most inbred morph from decades of line-breeding and are weakest genetically. Most disease-prone, shortest lifespans. Wild-type, Dalmatian, or Gold morphs are hardier. Buy Black Mollies only from quality breeders.",
      "Prepare for fry explosion! Females produce 20-100 fry every 4-6 weeks (can store sperm 6+ months!). Adults eat babies. Provide dense plants (Java Moss, Water Sprite) or separate gravid females to breeder box. Fry grow fast on crushed flakes.",
    ],

    commonMistakes: [
      "Soft water (GH under 15). #1 killer! Mollies are hard water obligates. In soft/acidic water they develop 'the shimmies' (death wobble disease from mineral deficiency) and die within 2-4 weeks. 50% of failures! They need GH 15-30+ and pH 7.5-8.5. Test water before buying.",
      "Wrong male:female ratio. Too many males (or 1 male with 1 female) = constant harassment, stressed females, aggression. Single female gets chased to death. 1 male : 2-3 females spreads harassment.",
      "Cold water (under 24°C). Mollies are tropical heat lovers from warm coastal waters. Cold temps = stress, disease (ich common), dull colors, lethargy. Keep 25-28°C minimum.",
      "No vegetable matter in diet. Mollies need 60-70% plant material (algae, spirulina, vegetables). Pure protein diet = fin nipping, health issues, aggression. Feed blanched zucchini/spinach weekly.",
      "Buying Black Mollies from chain stores. Black Mollies are weakest genetically (decades of inbreeding). Chain store Black Mollies often diseased/weak. Buy from quality breeders or choose hardier morphs (Dalmatian, Gold).",
      "Overstocking with fry. Mollies are prolific - 20-100 fry every 4-6 weeks! Without population control, tank overruns quickly. Adults eat most fry naturally (this is OK!). Don't save every baby.",
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
      notes: 'Weekly 30% water changes. Mollies produce high waste (bioloadMultiplier 1.8!) - keep nitrates under 20ppm. CRITICAL: Maintain hard alkaline water (GH 15-30+, pH 7.5-8.5) - use crushed coral in filter or Seachem Equilibrium. Test GH/KH/pH weekly. Optional: add 1 tsp aquarium salt per 20L during water changes.',
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
    sensitivities: ['Soft water (causes shimmies - #1 killer!)', 'Cold temperatures', 'High nitrates', 'Sudden parameter swings', 'Weak genetics (especially Black Mollies)'],
  },

  scientificContext: {
    wildHabitat:
      'Poecilia sphenops inhabits coastal estuaries and mangrove swamps in Central America (Mexico to Colombia). Wild habitat: shallow (10-100cm) warm brackish water where freshwater rivers meet ocean (fluctuating salinity 0-15ppt!), hard alkaline water rich in minerals (GH 15-30+, pH 7.5-8.5), dense aquatic vegetation and mangrove roots, high temperatures (26-30°C year-round), moderate to strong current. They have extreme salinity tolerance: found in pure freshwater rivers AND full marine conditions (35ppt) - one of only community fish surviving saltwater! They graze algae from submerged vegetation and feed on aquatic insects.',
    sexualDimorphism:
      'Easy to sex. Males: Slimmer, more streamlined torpedo-shaped bodies. Gonopodium (modified anal fin - long pointed tube for internal fertilization). Brighter colors, especially in breeding condition. Larger dorsal fin. Females: Fuller, rounder, much deeper-bodied especially when gravid (carrying developing fry - belly hugely swollen, dark gravid spot near vent visible). Normal fan-shaped anal fin. Larger overall size. Juveniles (under 6 weeks) difficult to sex - wait for gonopodium development.',
    variants: ['Black Molly (solid black - most popular but weakest genetics)', 'Dalmatian (white with black spots)', 'Gold/Creamsicle (yellow-orange)', 'Marble (black/white)', 'Balloon (deformed short spine)', 'Sailfin Molly (Poecilia latipinna - larger dorsal)', 'Lyretail (extended tail lobes)'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger:
      'Mollies are prolific breeders requiring no special conditions! They breed continuously in any tank with males and females present. Natural triggers: 1) Warm temps (26-28°C), 2) Hard alkaline water (GH 15-30+, pH 7.5-8.5), 3) Good feeding (especially vegetable matter), 4) Presence of males (gonopodium for internal fertilization). Females can store sperm for 6+ months producing 5-10 consecutive broods from single mating! Gestation: 4-6 weeks.',
    fryCare:
      'Mollies are livebearers giving birth to free-swimming fry (20-100 per brood every 4-6 weeks!). Watch gravid females: hugely swollen bellies, dark gravid spot, hiding behavior before birth. Birth occurs over hours - female releases fry one-by-one. CRITICAL: Adults (including mother!) eat their own fry immediately! For fry survival: 1) Provide dense plants (Java Moss, Water Sprite, floating plants - fry hide here), 2) Separate gravid female to breeder box 1-2 days before birth (return mother after), 3) Raise fry in separate tank. Fry are large at birth (6-8mm) and accept crushed flakes immediately (no special foods needed!). Feed 3-4x daily. Growth is fast: 2cm at 8 weeks, sexually mature at 3-4 months. Maintain hard water for fry health.',
    notes:
      'Molly breeding is effortless (almost too easy!). Main challenge: population control! Females produce 20-100 fry every 4-6 weeks continuously. Without intervention, tank overruns with hundreds of mollies within months. Natural solution: Adults eat most fry (this is OK and natural!). Only save fry from first 1-2 broods. Warning: Mollies can hybridize with Platies (same genus) producing infertile hybrid offspring with health issues. Separate species for pure breeding.',
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
