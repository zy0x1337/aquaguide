import type { Species } from '../../types/species';

export const sterbaiCory: Species = {
  id: 'cory-sterbai',
  slug: 'sterbai-cory',
  imageUrl: '/images/species/sterbai-cory.jpg',
  funFact: "Sterbai Corys are the only Corydoras that can happily live in warm Discus tanks! While most Corys prefer cooler water (22-24°C), Sterbais thrive at 26-28°C—making them the perfect warm-water bottom-dweller. Named after German ichthyologist Dr. Günther Sterba, they're instantly recognizable by their stunning orange pectoral fins that flash like tiny flames when they swim.",

  taxonomy: {
    scientificName: 'Corydoras sterbai',
    commonName: 'Sterbai Corydoras',
    family: 'Callichthyidae',
    origin: 'South America (Brazil and Bolivia - Guaporé River basin)',
    region: 'South America',
    biotope: 'Slow-moving tributaries, floodplain lakes, and oxbow lagoons with sandy substrates and submerged wood. Warmer waters than most Corydoras habitats',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 6.5,
    color: 'Dark charcoal-brown to black body covered in brilliant white spots (like stars on night sky). SIGNATURE orange or yellow-orange pectoral fins. White belly',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 2, max: 18 },
    kh: { min: 2, max: 12 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'surface',
      preference: 0.96,
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
    plantingNotes: 'Sterbais appreciate planted tanks with OPEN sandy areas for foraging. Because they tolerate warmer water (26-28°C), pair them with tropical plants: Amazon Swords, Cryptocoryne, Anubias, Java Fern, Vallisneria. Driftwood is essential—they love resting on and under wood pieces. Floating plants (Water Sprite, Frogbit) help diffuse bright light. Leaf litter (Indian Almond, Catappa leaves) adds tannins and provides foraging opportunities. Unlike cool-water Corys (Panda, Peppered), Sterbais work perfectly in warm planted tanks with CO2 injection.',
    hardscape: ['Driftwood (Mopani, Malaysian, Spider Wood)', 'Smooth River Stones', 'Terracotta Caves', 'Leaf Litter (Indian Almond, Catappa)'],
  },

  behavior: {
    tags: ['shoaler', 'bottom_dweller', 'peaceful', 'robust', 'scaleless'],
    minGroupSize: 6,
    description: 'Sterbai Corys have a gentle, slightly shy personality—less boisterous than Bronze Corys but more confident than Pandas. They\'re the "Goldilocks" of Corydoras temperament: not too bold, not too timid, just right. You\'ll watch them methodically work the substrate, whiskers twitching as they hunt for food particles. Their signature move: sudden fin-flaring to show off those spectacular orange pectorals when excited (during feeding or courtship). They travel in loose groups, occasionally forming adorable "Cory piles" where 3-4 fish stack on top of each other on driftwood or broad leaves. Unlike hyperactive species, Sterbais have a calm, deliberate foraging style—thorough but unhurried. Their air-breathing behavior (zooming to surface for gulps) is frequent, especially in warmer water where oxygen is lower.',
    
    compatibility: {
      goodMates: ['Discus', 'German Blue Rams', 'Bolivian Rams', 'Apistogramma', 'Cardinal Tetras', 'Rummynose Tetras', 'Congo Tetras', 'Angelfish', 'Peaceful Gouramis', 'Cherry Shrimp', 'Nerite Snails'],
      badMates: ['Goldfish (temperature mismatch)', 'Peppered Corys (temperature mismatch)', 'Panda Corys (temperature mismatch)', 'Aggressive Cichlids', 'Large predatory catfish'],
      notes: 'Sterbai Corys are THE warm-water Corydoras. This is their superpower: they THRIVE at 26-28°C where other Corys suffer. This makes them perfect tankmates for Discus, German Rams, and other warm-water species. However, do NOT mix Sterbais with cool-water Corys (Pandas at 22°C, Peppered at 20°C)—the temperature compromise stresses both. Choose tankmates based on temperature needs.',
      
      rules: [
        {
          type: 'requires',
          target: 'discus and warm-water cichlids',
          reason: 'Sterbais THRIVE in warm water (26-28°C) where most Corys suffer. They\'re the ONLY Corydoras recommended for Discus tanks (though 27°C is better than 30°C long-term)',
          severity: 'low',
        },
        {
          type: 'avoid',
          target: 'cool-water corydoras (Panda, Peppered)',
          reason: 'Temperature incompatibility. Sterbais need 26-28°C; Pandas need 22°C; Peppered need 20°C. Mixing creates compromise temperature that stresses all species',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'Gravel erodes barbels (whiskers), causing bacterial infection and inability to find food. Sand allows natural foraging behavior',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 6',
          reason: 'Shoaling fish that become shy and stressed in small groups. 6 minimum for wellbeing; 8-10+ for confident behavior',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'angelfish',
          reason: 'Usually compatible, but large Angels (12cm+) may occasionally harass or nip slower-moving Corys during feeding frenzies. Monitor behavior',
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
      level: 'moderate',
      peakTimes: ['morning', 'evening'],
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
    cost: 'medium',
    specialRequirements: [
      'WARM water (26-28°C ideal) - unique among common Corydoras!', 
      'Sand substrate mandatory for barbel health', 
      'Groups of 6+ required for shoaling behavior',
      'Well-oxygenated water critical (warmer water = less oxygen)',
    ],

    proTips: [
      "Sterbai Corys are the WARM-WATER specialists of the Corydoras world. Keep them at 26-28°C for best health. At 22-24°C (ideal for Pandas), Sterbais become lethargic and less active. They\'re one of the FEW Corys that can live in Discus tanks (though 27°C is better long-term than 30°C).",
      "Orange pectoral fin intensity = health indicator. Vibrant orange = thriving Sterbai. Pale peachy-yellow = stressed or unwell. Check water quality, temperature, and feeding if color fades.",
      "Sterbais are LESS sensitive to nitrates than Pandas but still benefit from clean water. Keep nitrates below 40ppm (20ppm ideal). In warm water (26-28°C), metabolism is faster, so waste accumulates quicker.",
      "Breeding trigger: Unlike cool-water Corys that spawn after COOL water changes, Sterbais spawn after WARM water changes (26-27°C). The seasonal flooding they experience in the wild is warm Amazonian rain, not cool mountain snowmelt.",
      "Feed sinking foods at dusk. In warm-water tanks with active midwater fish (Tetras, Rams), Sterbais often miss out on food. Feeding after lights dim ensures they get their share.",
      "White spot pattern varies individually—each Sterbai has unique spotting like fingerprints. You can identify individuals by their patterns over time. It\'s like keeping a galaxy of stars!",
    ],

    commonMistakes: [
      "Keeping them in cool water (22-24°C) with Pandas or Peppered Corys. Sterbais are WARM-water fish! At 22°C they become sluggish, eat less, and don\'t display natural behavior. Keep them at 26-28°C with warm-water tankmates.",
      "Using gravel substrate. This causes barbel erosion (whisker damage), bacterial infections (red blotch disease), and inability to find food. Sterbais need SAND for healthy barbels and natural foraging.",
      "Assuming all Corydoras are identical. Sterbais need WARMER water than Bronze (24-26°C), Panda (22°C), or Peppered (20°C). Don\'t mix temperature-incompatible species.",
      "Poor oxygenation in warm tanks. Warm water (26-28°C) holds LESS dissolved oxygen. Ensure strong surface agitation, good filtration, and consider an airstone if Sterbais gulp air excessively (>10 times/hour).",
      "Keeping in groups under 6. Sterbais are shy when alone or in pairs. Groups of 6+ bring out confident foraging, fin displays, and natural shoaling behavior. Single Sterbais hide constantly.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['wafers', 'pellets', 'bloodworms', 'brine-shrimp'],
      supplements: ['daphnia', 'vegetables', 'spirulina'],
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
      notes: 'Weekly substrate vacuuming removes detritus and prevents anaerobic pockets. In warm water (26-28°C), bacterial growth is faster, making regular maintenance MORE important than in cool-water Cory tanks.',
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
    lifespanYears: 10,
    commonDiseases: ['barbel-erosion', 'red-blotch-disease', 'ich', 'columnaris', 'fungal-infections'],
    sensitivities: ['Sharp substrate', 'Salt (scaleless fish)', 'Copper medications', 'Low oxygen (in warm water)', 'Sudden temperature shocks'],
  },

  scientificContext: {
    wildHabitat: "Sterbai Corys inhabit the Guaporé River basin along the Brazil-Bolivia border—specifically the slow-moving tributaries, floodplain lakes, and oxbow lagoons with sandy bottoms and submerged wood. Unlike high-altitude cool-water Corys (Panda), Sterbais come from LOWLAND tropical waters that reach 26-28°C during the wet season. These are blackwater environments stained with tannins from decomposing leaves. Water is soft (GH 2-5), slightly acidic (pH 6.0-6.5), and well-oxygenated despite warmth due to flowing tributaries. This warm-water adaptation is why Sterbais tolerate higher temperatures than most Corydoras—they evolved in tropical lowland systems, not cool mountain streams.",
    sexualDimorphism: "Females are noticeably rounder and fuller-bodied when viewed from above, especially when gravid (carrying eggs). Males are slimmer, smaller, and more streamlined. Females' pectoral fins are shorter and rounder; males have slightly longer, pointed pectorals. The orange pectoral fin color is equally vibrant in both sexes. During breeding season, females become dramatically plump—visibly wider than males.",
    variants: ['Wild Type (white spots on dark body)', 'Captive-bred (most common, very hardy)'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'beginner',
    trigger: 'Sterbai breeding is moderately easy. Condition breeders with high-protein foods (bloodworms, daphnia, brine shrimp) for 2-3 weeks until females are visibly plump. Trigger spawning with a 40-50% water change using WARM water (26-27°C)—not cool like Pandas! This mimics warm tropical rain flooding the Guaporé basin. Spawning usually occurs 24-48 hours after water change. Males chase females relentlessly in classic T-position courtship, following them around the tank persistently.',
    fryCare: 'Females lay 100-250 adhesive eggs on glass, plants, smooth rocks, and driftwood. Eggs are cream-colored and sticky. Remove adults after spawning (they eat eggs). Eggs hatch in 4-6 days at 26°C. Fry are robust and immediately accept microworms, powdered flakes, or finely crushed pellets. Growth is moderate; fry reach 1.5cm in 6-8 weeks. Maintain warm water (25-26°C) and perform daily 10% water changes to prevent bacterial infections. Fry survival is good (60-75%) with basic care.',
    notes: 'Sterbai breeding differs from cool-water Corys: use WARM water changes (26-27°C), not cool. Keep fry tanks warm (25-26°C) unlike Panda fry (20-22°C). Many aquarists report spontaneous spawnings after routine warm water changes. Breeding groups (2 males : 3 females) spawn regularly without special intervention.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.82,
    
    commonFailures: [
      { issue: 'lethargy-low-activity', cause: 'kept-too-cool-under-24C', frequency: 0.28 },
      { issue: 'barbel-erosion', cause: 'gravel-substrate', frequency: 0.25 },
      { issue: 'oxygen-stress', cause: 'poor-aeration-in-warm-water', frequency: 0.18 },
      { issue: 'red-blotch-disease', cause: 'dirty-substrate-bacteria', frequency: 0.15 },
      { issue: 'stress-hiding', cause: 'small-group-under-6-fish', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 180, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};
