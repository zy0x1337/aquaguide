import type { Species } from '../../types/species';

export const corydorasPaleatus: Species = {
  id: 'species-corydoras-paleatus',
  slug: 'corydoras-paleatus',
  imageUrl: '/images/species/corydoras-paleatus.jpg',
  funFact: "Peppered Corys made aquarium history in 1876 as one of the FIRST fish ever successfully bred in captivity! Over 150 years later, they're still beloved for their hardiness, peppered pattern (like someone sprinkled black pepper on a silver fish), and ability to breathe air through their intestines. Watch them rocket to the surface for a gulp—it's their superpower for surviving low-oxygen waters.",

  imageCredit: {
    photographer: 'Kuznetsov_Peter on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/corydoras-paleatus-4996632/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  taxonomy: {
    scientificName: 'Corydoras paleatus',
    commonName: 'Peppered Corydoras',
    family: 'Callichthyidae',
    origin: 'South America (Argentina, Uruguay - Paraná and La Plata river basins)',
    region: 'South America',
    biotope: 'Shallow, slow-moving rivers, marshes, and floodplains with soft mud or sandy bottoms. Temperate climate with seasonal temperature swings',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 7,
    color: 'Silver-green base with black pepper-like mottling across body and fins. Albino variant: peachy-white with red eyes. Longfin variant: dramatically elongated fins',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 18, max: 24, ideal: 21 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 5, max: 19 },
    kh: { min: 2, max: 12 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'surface',
      preference: 0.98,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.6,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Peppered Corys appreciate planted tanks but need GENEROUS open floor space for their constant foraging marathons. Use temperate-friendly plants like Vallisneria, Java Fern, Anubias, and Cryptocoryne that tolerate cooler water (20-22°C). They LOVE resting on broad-leaved plants (Amazon Swords, Anubias) like tiny armored lounge chairs. Provide dense planting in back/sides with wide-open sandy areas in front for their digging expeditions. Floating plants optional (they enjoy diffused light but aren\'t as light-sensitive as Pandas).',
    hardscape: ['Smooth River Stones', 'Driftwood (Malaysian, Mopani)', 'Terracotta Caves', 'Leaf Litter (Oak, Beech - they love cooler-climate leaves)'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'bottom_dweller', 'social', 'robust', 'scaleless', 'coldwater'],
    minGroupSize: 6,
    description: 'Peppered Corys are the ORIGINAL aquarium Corydoras—tough, adaptable, and endlessly entertaining. They\'re larger and more robust than Pandas or Pygmies, with a confident, outgoing personality similar to Bronze Corys. You\'ll watch them power-vacuum the substrate with unstoppable determination, whiskers twitching as they hunt buried treasures. When they find food, their entire body wiggles with excitement (the "Cory shimmy"). They travel in loose groups, occasionally forming adorable "Cory trains" where 3-6 fish line up and march across the bottom single-file. Unlike shy species, Peppered Corys barely acknowledge human presence—they\'re too busy investigating every grain of sand. Their air-breathing behavior is frequent and dramatic: sudden sprint to surface, audible gulp, rocket back down. In groups of 6+, they display synchronized resting on plant leaves, stacked like pancakes.',
    
    compatibility: {
      goodMates: ['White Cloud Mountain Minnows', 'Hillstream Loaches', 'Rosy Barbs', 'Paradise Fish', 'Weather Loaches', 'Goldfish (temperate species)', 'Cherry Shrimp', 'Nerite Snails', 'Most peaceful temperate fish'],
      badMates: ['Tropical fish requiring 26-28°C (Discus, German Rams, Sterbai Corys)', 'Aggressive Cichlids', 'Large predatory catfish', 'Fin-nippers'],
      notes: 'Peppered Corys are TEMPERATE fish, NOT tropical! This is critical but often misunderstood. They come from ARGENTINA (33°S latitude)—the aquatic equivalent of North Carolina\'s climate. They THRIVE in cooler water (18-22°C) and SUFFER in typical tropical temps (25-28°C). This makes them perfect tankmates for goldfish, White Cloud Minnows, and other temperate species. Mixing them with warm-water tropicals creates a compromise temperature that stresses both groups.',
      
      rules: [
        {
          type: 'requires',
          condition: 'temperature <= 24°C',
          reason: 'CRITICAL: Peppered Corys are temperate/coolwater fish from Argentina. Temperatures over 24°C long-term shorten lifespan dramatically (5 years vs 15 years potential). Keep cool!',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'tropical fish requiring 26-28°C',
          reason: 'Temperature incompatibility. Peppered Corys thrive at 20-22°C; tropical fish need 26°C+. The compromise temperature (24-25°C) stresses Peppered Corys and shortens their lifespan',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'Gravel erodes their barbels (whiskers), causing bacterial infection and inability to find food. Sand allows natural foraging behavior',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 6',
          reason: 'Shoaling fish that become stressed and hide constantly in small groups. 6 minimum for wellbeing; 8-10+ for full confidence',
          severity: 'high',
        },
        {
          type: 'requires',
          target: 'goldfish (fancy varieties)',
          reason: 'Temperature match! Both prefer 20-22°C. Peppered Corys clean up goldfish mess (leftover food, not waste). Avoid pairing with large goldfish that might outcompete for food',
          severity: 'low',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
        midwater: '15-30',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'afternoon', 'evening'],
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
      'COOL water (18-22°C ideal) - heater often unnecessary in temperate climates!', 
      'Sand substrate mandatory for barbel health', 
      'Groups of 6+ required for shoaling behavior',
      'Sinking foods essential (they cannot eat floating flakes efficiently)',
    ],

    proTips: [
      "Peppered Corys are COLDWATER specialists, not tropical fish! Keep them at 20-22°C for maximum lifespan (10-15 years). At 26°C, lifespan drops to 5-7 years max. Temperature is THE difference between a short-lived Cory and a 15-year companion.",
      "In temperate climates (Europe, northern USA), Peppered Corys often DON'T NEED HEATERS year-round. They tolerate room temperature (18-20°C) perfectly. This makes them incredibly economical to keep compared to tropical fish.",
      "Historical significance: Peppered Corys were first bred in captivity in 1876 in Paris—one of the earliest aquarium fish breeding successes EVER. You're keeping a piece of aquarium history!",
      "Albino Peppered Corys are just leucistic (color mutation) versions—same species, same care. They're NOT separate fish despite store labels. Albinos have peachy-pink bodies with ruby-red eyes and are slightly more light-sensitive.",
      "Longfin variants have dramatically elongated fins (especially dorsals and pectorals) from selective breeding. They're stunning but slightly less agile. Avoid pairing with nippy fish.",
      "Feed sinking foods at night. Peppered Corys are active during daytime but feeding after lights dim ensures they get food before faster midwater fish steal it. They're thorough but slow eaters.",
    ],

    commonMistakes: [
      "Keeping them in tropical tanks at 25-26°C. THIS IS THE #1 PEPPERED CORY KILLER. They're temperate fish that suffer in warm water. Would you keep a polar bear in Florida? Same concept. Keep them COOL (20-22°C) for long, healthy lives.",
      "Using gravel substrate. This causes barbel erosion (whisker damage), bacterial infections (red blotch disease), and eventual inability to find food. Peppered Corys have sensitive barbels—ONLY use sand.",
      "Mixing with warm-water-only fish. Don't pair Peppered Corys with Discus, German Rams, or Sterbai Corys that need 26-28°C. The temperature compromise stresses everyone. Choose temperate tankmates.",
      "Assuming all Corydoras are identical. Peppered Corys need COOLER water than Bronze (24-26°C), Panda (22-24°C), or Sterbai (24-28°C). Research each species individually.",
      "Adding aquarium salt. Peppered Corys are scaleless (armored with plates, not scales) and INTOLERANT to salt. Salt treatments damage their skin and can kill them. Use salt-free medications only.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['wafers', 'pellets', 'bloodworms', 'brine-shrimp'],
      supplements: ['daphnia', 'vegetables'],
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
      notes: 'Weekly substrate vacuuming prevents detritus buildup and bacterial infections. Peppered Corys are hardy but benefit from consistent water quality. Keep nitrates below 30ppm (they tolerate higher than Pandas but lower is better).',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 12,
    commonDiseases: ['barbel-erosion', 'red-blotch-disease', 'ich', 'columnaris', 'fungal-infections'],
    sensitivities: ['High temperatures (>24°C)', 'Salt (scaleless fish)', 'Copper medications', 'Sharp substrate', 'Sudden temperature changes'],
  },

  scientificContext: {
    wildHabitat: "Peppered Corys inhabit the Paraná and La Plata river basins in Argentina and Uruguay—far south of the tropical Amazon (33°S latitude, equivalent to Los Angeles or Morocco). These are TEMPERATE regions with seasonal temperature swings. In summer, water reaches 22-24°C; in winter, it drops to 12-15°C. Peppered Corys thrive in shallow marshes, floodplains, and slow-moving streams with muddy or sandy bottoms rich in detritus. This temperate adaptation makes them unique among commonly-kept Corydoras, most of which come from tropical Amazonia. Their hardiness and temperature tolerance explain why they were among the first aquarium fish successfully bred—they tolerated unheated Victorian-era fishbowls better than tropical species.",
    sexualDimorphism: "Clear when viewed from above. Females are significantly larger, rounder, and deeper-bodied, especially when gravid (carrying eggs). Males are smaller, slimmer, and more torpedo-shaped. Females' pectoral fins are shorter and rounder; males have slightly longer, more pointed pectorals. During breeding season, females become massively plump—almost comically round when full of eggs.",
    variants: ['Wild Type (peppered silver-green)', 'Albino (leucistic - peachy-white with red eyes)', 'Longfin (elongated fins, captive mutation)', 'High-Fin (taller dorsal, rare)'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'beginner',
    trigger: 'Peppered Corys are among the EASIEST egg-layers to breed—they practically breed themselves! Condition breeders with high-protein foods (bloodworms, daphnia, brine shrimp) for 2 weeks. Trigger spawning with a large (40-50%) water change using COOL water (16-18°C)—this mimics spring rain flooding in Argentina. Repeat cool water changes daily until spawning occurs (usually within 3-7 days). Males chase females relentlessly in the famous "T-position" courtship: male forms a T-shape with female, she collects sperm in her mouth, then fertilizes eggs externally.',
    fryCare: 'Females lay 200-400 large, adhesive eggs on glass, plants, rocks, and decorations. Eggs are cream-colored and sticky. Remove adults after spawning (they eat eggs enthusiastically). Eggs hatch in 4-6 days at 20°C (faster in warmer water, slower in cooler). Fry are large and robust compared to other Corys. Feed microworms, powdered flakes, or crushed pellets immediately—no infusoria stage needed. Fry grow quickly; reach 1.5cm in 6 weeks. Maintain cool water (18-20°C) and daily 10% water changes. Fry survival is excellent (60-80%) with minimal care.',
    notes: 'Peppered Corys have been commercially bred for over 140 years—almost all aquarium specimens are captive-bred, making them incredibly hardy and disease-resistant. Breeding groups (2 males : 3 females) spawn regularly without intervention. Many aquarists report surprise spawnings after routine water changes. This is THE beginner\'s egg-laying species—easier than most livebearers!',
  },
  
  experienceData: {
    successRate: 0.92,
    survivalRate: 0.88,
    
    commonFailures: [
      { issue: 'shortened-lifespan-early-death', cause: 'kept-too-warm-over-24C', frequency: 0.35 },
      { issue: 'barbel-erosion', cause: 'gravel-substrate', frequency: 0.25 },
      { issue: 'stress-hiding', cause: 'small-group-under-6-fish', frequency: 0.15 },
      { issue: 'red-blotch-disease', cause: 'dirty-substrate-bacteria', frequency: 0.12 },
      { issue: 'salt-toxicity', cause: 'aquarium-salt-treatment', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 6, max: 18, currency: 'EUR' },
    },
  },
};
