import type { Species } from '../../types/species';

export const endlerGuppy: Species = {
  id: 'guppy-001',
  slug: 'endler-guppy',
  imageUrl: '/images/species/endler-guppy.jpg',
  funFact: "Endler's Livebearers were rediscovered in 1975 by Dr. John Endler in isolated lagoons in Venezuela. They're not just 'small guppies'—they're a completely separate species (Poecilia wingei vs Poecilia reticulata) with explosive metallic colors and hyperactive personalities that put common guppies to shame.",

  taxonomy: {
    scientificName: 'Poecilia wingei',
    commonName: 'Endler\'s Livebearer',
    family: 'Poeciliidae',
    origin: 'Venezuela (Laguna de Patos, Campoma, Cumana)',
    region: 'South America',
    biotope: 'Warm, hard-water coastal lagoons with dense algae growth and brackish influence from coastal proximity',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2.5,
    color: 'Males: Electric neon orange, metallic green, iridescent blue in psychedelic patterns. Females: Plain silver-grey',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 24, max: 30, ideal: 27 },
    ph: { min: 7.0, max: 8.5, ideal: 7.5 },
    gh: { min: 10, max: 30 },
    kh: { min: 5, max: 20 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'midwater',
      preference: 0.90,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 20,
      territories: 0,
    },
    
    bioloadMultiplier: 0.4,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Floating plants (Water Sprite, Guppy Grass, Amazon Frogbit) are mandatory if keeping both sexes—females need hiding spots from relentless male attention. Dense planting provides fry refuges and grazing surfaces for algae. Moss (Java Moss, Christmas Moss) gives fry cover and acts as microfauna breeding grounds. Avoid sharp decorations that can damage delicate fins.',
    hardscape: ['Smooth River Rocks', 'Driftwood (Malaysian or Mopani)', 'Clay Pots (fry shelters)'],
  },

  behavior: {
    tags: ['livebearer', 'surface_dweller', 'active', 'colorful', 'nano', 'shoaler'],
    minGroupSize: 6,
    description: 'Endlers are hyperactive nano-fish with explosive personalities. Males are in constant motion, displaying their psychedelic colors to females 24/7 in elaborate mating dances. They dart around the surface like tiny missiles, investigating everything. Despite their small size (2.5cm), they have massive energy levels and dominate the upper water column. Males follow females relentlessly—what looks like "harassment" to humans is actually their natural courtship display. Females choose the most vibrant, energetic males. Pure-strain (N-Class) Endlers are significantly hardier than fancy guppies due to lack of inbreeding.',
    
    compatibility: {
      goodMates: ['Corydoras', 'Otocinclus', 'Small Rasboras (Chili, Harlequin)', 'Dwarf Shrimp (Cherry, Amano)', 'Nerite Snails', 'Ember Tetras', 'Microrasboras'],
      badMates: ['Bettas (attack colorful males)', 'Angelfish (predators)', 'Large Tetras', 'Tiger Barbs (fin nippers)', 'Common Guppies (hybridization risk)', 'Goldfish'],
      notes: 'Endlers are peaceful surface dwellers ideal for nano community tanks. Their tiny size (2.5cm) makes them vulnerable to larger predators. CRITICAL: Do not mix with common guppies (Poecilia reticulata) if you want to maintain pure genetics—they hybridize easily and the resulting offspring lose the metallic coloration and hardiness.',
      
      rules: [
        {
          type: 'avoid',
          target: 'common guppies',
          reason: 'Endlers (Poecilia wingei) hybridize with common guppies (Poecilia reticulata). Hybrids lose pure strain genetics, hardiness, and metallic coloration. N-Class purity is permanently lost',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'bettas',
          reason: 'Bettas mistake colorful male Endlers for rival bettas and will attack. Females usually ignored but males are targets',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'male-to-female-ratio 1:2 or 1:3',
          reason: 'Males court females relentlessly. Without enough females, a single female will be chased to exhaustion and stress-death. More females = distributed attention',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'all-male groups',
          reason: 'Male-only tanks work well and eliminate breeding. Males are peaceful together and still display vibrant colors',
          severity: 'low',
        },
        {
          type: 'requires',
          condition: 'hard-water GH >= 10',
          reason: 'Endlers evolved in mineral-rich lagoons. In soft water they develop "shimmies" (nervous twitching) and weakened immune systems',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '6-12',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 4,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'afternoon', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
      maleToFemaleRatio: '1:2-3',
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
      'HARD water (GH 10-30) is mandatory—soft water causes shimmies and death', 
       'Male-to-female ratio of 1:2 or 1:3 prevents female stress', 
      'Dense floating plants required if keeping both sexes',
      'Do not mix with common guppies—they hybridize and lose N-Class purity',
    ],

    proTips: [
      "Male-only tanks are amazing. Males display full colors without breeding chaos, coexist peacefully, and eliminate the fry explosion problem. Perfect for nano tanks.",
      "N-Class (pure strain) Endlers are significantly hardier than fancy guppies. They lack the inbreeding issues and genetic defects common in store guppies. Worth seeking out from specialty breeders.",
      "Temperature matters: Endlers love warm water (27°C). Higher temps increase metabolism, intensify colors, and boost activity. They tolerate up to 30°C in summer.",
      "Vegetable matter is key for color. Feed spirulina flakes, blanched zucchini, or algae wafers. The carotenoids intensify their neon orange and make metallic greens pop.",
      "If breeding, plan ahead. Females drop 10-30 fry every 28 days. In 6 months you'll have 200+ fish. Have a plan: sell to stores, cull poor specimens, or keep males only.",
      "Avoid hybrids (K-Class). Pet store 'Endlers' are often guppy hybrids. True N-Class Endlers stay tiny (2.5cm), have metallic colors, and specific strain names (Black Bar, Tiger, El Silverado).",
    ],

    commonMistakes: [
      "Keeping them in soft/acidic water. Endlers evolved in hard, alkaline lagoons (GH 15-25, pH 7.5-8.0). In soft water they develop 'shimmies' (nervous twitching disease) and die within weeks.",
      "Wrong male-to-female ratio. Keeping 3 males with 1 female = dead female from exhaustion. Males court 24/7. You need 2-3 females per male minimum.",
      "Mixing with common guppies. This permanently ruins N-Class genetics. Hybrids are less colorful, less hardy, and can't be sold as pure strains. Once mixed, you can never go back.",
      "Underestimating breeding rate. One female = 20 fry/month. After 6 months you'll have 200+ fish. Parents rarely eat fry unlike guppies. You will be overrun without a plan.",
      "Expecting them to behave like guppies. Endlers are much more active, stay smaller, and prefer warmer water. They're a different species with different needs.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'spirulina'],
      supplements: ['daphnia', 'brine-shrimp', 'vegetables'],
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
      notes: 'Endlers are active eaters and produce moderate waste for their size. With breeding populations, bioload increases rapidly. Weekly 30% changes prevent nitrate buildup.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 2,
    commonDiseases: ['shimmies', 'ich', 'fin-rot', 'internal-parasites', 'columnaris'],
    sensitivities: ['Soft water (causes shimmies)', 'Cold water (<24°C)', 'Acidic pH (<7.0)', 'Overfeeding (bloat)', 'Inbreeding (hybrids only)'],
  },

  scientificContext: {
    wildHabitat: "Endlers inhabit isolated coastal lagoons in northern Venezuela (Laguna de Patos, Campoma). These lagoons are extremely warm (28-32°C), mineral-rich (GH 20-30), alkaline (pH 7.5-8.5), and often have slight brackish influence from coastal proximity. The water is green with algae blooms, and vegetation is dense. The lagoons are small and isolated, leading to distinct color strains in each population. Sadly, some original habitats have been destroyed by development, making wild populations endangered.",
    sexualDimorphism: "Extreme and immediate. Males are tiny (2.0-2.5cm) with explosive neon colors—metallic greens, electric oranges, iridescent blues in wild patterns. Each strain has unique markings (Tiger, Black Bar, Peacock). Females are significantly larger (3.5-4.0cm), plain silver-grey with a gravid spot (dark area near anal fin when pregnant). Males develop full color by 4-5 weeks old, making sexing juveniles easy.",
    variants: ['Black Bar Endler (black chevron pattern)', 'Tiger Endler (tiger stripes)', 'El Silverado (silver metallic)', 'Peacock Endler (eye-spots)', 'Japan Blue (blue metallic)', 'Hybrid K-Class (mixed with guppies - avoid)'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger: 'Breeding is automatic. Simply adding males and females together triggers immediate breeding. Warmer water (27-28°C) increases breeding frequency. Females reach maturity at 8-10 weeks.',
    fryCare: 'Fry are born fully formed, free-swimming, and relatively large (5-6mm). They immediately accept crushed flakes, micro-pellets, and baby brine shrimp. No infusoria stage needed unlike egg-layers. Parents rarely eat fry (unlike common guppies). Provide dense plants/moss for fry refuges. Fry grow fast—males show color at 4-5 weeks, full adult size at 8-10 weeks.',
    notes: 'Endler breeding is too easy—that\'s the problem. Females store sperm for 6+ months and drop 10-30 fry every 28 days. Without population control, you\'ll have 200+ fish in 6 months. Options: 1) Keep males only. 2) Separate sexes. 3) Sell fry to stores. 4) Let nature take its course (add predators). 5) Cull poor specimens to maintain quality. CRITICAL: Never mix strains or with common guppies—this destroys N-Class purity forever.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'shimmies-disease', cause: 'soft-water', frequency: 0.30 },
      { issue: 'female-stress-death', cause: 'wrong-sex-ratio', frequency: 0.20 },
      { issue: 'fry-overpopulation', cause: 'no-breeding-control', frequency: 0.15 },
      { issue: 'hybridization', cause: 'mixed-with-guppies', frequency: 0.12 },
      { issue: 'predation', cause: 'betta-tankmate', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};
