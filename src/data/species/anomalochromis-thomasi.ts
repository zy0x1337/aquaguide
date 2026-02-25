import type { Species } from '../../types/species';

export const anomalochromisThomasi: Species = {
  id: 'anomalochromis-thomasi',
  slug: 'african-butterfly-cichlid',
  imageUrl: '/images/species/african-butterfly-cichlid.jpg',
  funFact: "Unlike their rowdy Rift Lake cousins, these 'gentle dwarfs' form lifelong monogamous pairs. During breeding, they display dazzling iridescent colors and work as a synchronized team to herd their fry—true underwater parenting goals!",

  imageCredit: {
    photographer: 'Klaus Rudloff (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anomalochromis_thomasi_A.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },

  taxonomy: {
    scientificName: 'Anomalochromis thomasi',
    commonName: 'African Butterfly Cichlid',
    family: 'Cichlidae',
    origin: 'West Africa (Guinea, Liberia, Sierra Leone)',
    region: 'Africa',
    biotope: 'Shallow, slow moving forest streams and swamps with soft, acidic, tannin stained water. Muddy or sandy substrates, dense vegetation, submerged roots, and leaf litter create shaded habitats.',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 8,
    color: 'Silvery yellow base with iridescent blue spots across body. Two horizontal stripes: blue along midline, red orange on upper body. Males show intense coloration when breeding. Juveniles are drab grey brown.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    gh: { min: 2, max: 10 },
    kh: { min: 1, max: 6 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 1,
    },
    
    bioloadMultiplier: 0.8,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'African Butterfly Cichlids are among the few African cichlids that won\'t destroy planted tanks. Unlike Rift Lake cichlids that uproot everything, A. thomasi are plant safe even during breeding. Plant heavily with Anubias, Cryptocoryne, Amazon Swords, Java Fern, and Vallisneria. Floating plants (Water Sprite, Frogbit) create shaded areas mimicking their forest stream habitat. Dense planting provides security and natural spawning sites. Leave open sandy areas for foraging and fry herding.',
    hardscape: ['Smooth flat stones (10-15cm diameter, critical for spawning)', 'Driftwood (tannins and shade)', 'Leaf litter (Indian Almond, Oak leaves)', 'Caves and coconut shells'],
  },

  behavior: {
    tags: ['peaceful', 'social', 'pair-bonding', 'parental-care'],
    minGroupSize: 8,
    description: 'African Butterfly Cichlids are remarkably peaceful for cichlids. Juveniles are shy, social fish that feel secure in groups of 8+. As they mature (6 to 12 months), they form monogamous pairs with intense courtship displays: side by side swimming, color flashing, and fin spreading. Paired fish become inseparable, constantly swimming and foraging together. During breeding, pairs claim a small territory (30 cm radius) and become mildly territorial, but rarely cause serious harm. Their parenting is exceptional: both parents guard eggs in shifts, fan them with fins, remove dead eggs, and later herd fry clouds. They are active during daytime, constantly exploring substrate for food.',
    
    compatibility: {
      goodMates: ['Peaceful Tetras (Congo, Ember, Rummynose)', 'Small Barbs (Cherry, Rosy)', 'Corydoras', 'Kuhli Loaches', 'Peaceful Rainbowfish', 'Otocinclus', 'Peaceful Gouramis', 'Rasboras'],
      badMates: ['Aggressive Cichlids (Oscars, Jack Dempseys, Rift Lake cichlids)', 'Fin nippers (Tiger Barbs, Serpae Tetras)', 'Large predatory fish', 'Fast competitive feeders'],
      notes: 'One of the few African cichlids suitable for peaceful community tanks. Less aggressive than Rams or Kribs. Pairs claim 30 cm territory during breeding but use threat displays rather than violence. Coexist peacefully with bottom dwellers like Corydoras. Best kept as juvenile groups (8+) or breeding pairs in community tanks.',
      
      rules: [
        {
          type: 'warning',
          target: 'Breeding pairs with other cichlids',
          reason: 'Breeding pairs become mildly territorial (30 cm radius). They rarely harm tankmates but will chase intruders. Provide adequate space (80 liters minimum) and visual barriers.',
          severity: 'low',
        },
        {
          type: 'requires',
          condition: 'Soft acidic water',
          reason: 'Wild habitat has pH 5.5 to 6.5, GH 2 to 6. They survive in neutral water but colors fade and breeding success drops. Soft water brings out best coloration.',
          severity: 'medium',
        },
        {
          type: 'requires',
          condition: 'Group of 8+ juveniles OR bonded pair',
          reason: 'Juveniles are shy and stressed in small groups. Adults form pairs and may be aggressive toward same species rivals. Keep large juvenile group or single bonded pair.',
          severity: 'medium',
        },
        {
          type: 'avoid',
          target: 'Aggressive cichlids',
          reason: 'A. thomasi are peaceful and submissive. Aggressive species will bully them relentlessly. Keep with peaceful community fish only.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
        midwater: '15-30',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 1,
      territorial: 4,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'pair',
      maxMalesPerTank: 1,
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
      'Soft, acidic water (pH 6.0 to 6.5, GH 2 to 6) for best coloration and breeding', 
      'Multiple smooth flat stones (10 to 15 cm) for spawning', 
      'Groups of 8+ juveniles OR bonded pair for adults',
      'Planted tank with shaded areas',
      'Stable water parameters',
    ],

    proTips: [
      "JUVENILE TRANSFORMATION: Baby A. thomasi are drab grey brown and easily overlooked. After 4 to 6 months in soft, acidic, planted tanks with quality food, they transform into stunning adults with blue red coloration. Be patient!",
      "Provide 3 to 5 flat stones (10 to 15 cm diameter) scattered around the tank. Pairs are selective about spawning sites and will test multiple locations before choosing. Smooth river stones or slate tiles work well.",
      "Soft water equals vibrant colors. In hard water (GH over 10), they survive but look washed out. Use RO water, peat filtration, or Indian Almond leaves to soften water. The color difference is dramatic.",
      "Lifelong pair bonds: Once paired, they typically stay together for life (5 to 8 years). If one partner dies, survivors often refuse to pair again.",
      "Parent fry bond lasts 4 to 6 weeks. Parents herd, protect, and communicate with fry through body movements. Watching them shepherd 100+ babies is fascinating.",
    ],

    commonMistakes: [
      "Expecting immediate color in juveniles. Store bought juveniles are dull grey brown for months. Give them 4 to 6 months in optimal conditions and watch them develop stunning coloration.",
      "Hard, alkaline water. They survive in pH 7.5, GH 15+, but colors fade and breeding fails. They need soft, acidic conditions (pH 6.0 to 6.5, GH 2 to 6) to thrive.",
      "Housing with aggressive cichlids. A. thomasi are peaceful and shy. Aggressive species (Oscars, Rift Lake cichlids) will bully them. Keep with peaceful community fish only.",
      "Keeping single fish. Juveniles are social (need 8+). Adults form pairs and become stressed alone. Keep either large juvenile group or bonded pair—never singles.",
      "Insufficient spawning sites. Provide multiple flat stones. Pairs are selective and need options.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets', 'flakes', 'bloodworms', 'brine-shrimp'],
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
      notes: 'Weekly 30 percent water changes maintain soft, acidic conditions. Vacuum sandy substrate lightly while preserving some leaf litter for tannins. During breeding, reduce water changes to 10 to 15 percent to avoid shocking eggs fry. Use RO water or peat filtration to maintain low pH GH.',
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
    lifespanYears: 6,
    commonDiseases: ['ich', 'velvet', 'bacterial-infections', 'bloat', 'hole-in-head-disease'],
    sensitivities: [
      'Stress (color fades dramatically)', 
      'Hard water (reduced coloration and breeding)', 
      'High nitrates (over 20 ppm)', 
      'Sudden parameter changes', 
      'Poor diet (color loss)',
    ],
  },

  scientificContext: {
    wildHabitat: "African Butterfly Cichlids inhabit shallow (10 to 50 cm depth), slow moving forest streams and swamps in coastal West Africa (Guinea, Liberia, Sierra Leone). These are soft, acidic, tannin stained waters (pH 5.5 to 6.5, GH 2 to 4) with muddy or sandy substrates, dense vegetation, submerged roots, and thick leaf litter. Water is heavily shaded by forest canopy. Temperatures range 24 to 28 degrees C year round. Cooler rain during rainy season triggers spawning. Unlike Rift Lake cichlids from hard alkaline water, A. thomasi evolved in peaceful, soft water environments—explaining their gentle temperament.",
    sexualDimorphism: "Difficult to sex outside breeding. Males are slightly larger (8 cm vs 7 cm), develop longer dorsal and anal fin filaments, and show more intense coloration when mature. Females have rounder bellies, especially when gravid. During breeding, males display vivid colors and females' bellies swell noticeably. Juveniles cannot be visually sexed. Best method: buy 8 to 10 juveniles and allow natural pairing.",
    variants: ['Wild Type (silvery yellow with blue red stripes)', 'Gold Xanthic (rare—golden yellow body with reduced melanin)'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'beginner',
    trigger: 'One of the easiest cichlids to breed. Trigger spawning with: 1) Soft, acidic water (pH 6.0 to 6.5, GH 2 to 6)—critical, 2) Large (40 to 50 percent) water change with slightly cooler water (23 to 24 degrees C) to simulate rainy season, 3) Conditioning with live frozen foods (bloodworms, brine shrimp, daphnia) for 2 weeks, 4) Multiple flat stones (10 to 15 cm diameter) for spawning sites. Pairs court intensely—swimming side by side, vibrating, flashing colors—before choosing a site.',
    fryCare: 'Female lays 50 to 300 eggs (average 150 to 200) on pre cleaned flat stone. Male fertilizes immediately. Both parents guard eggs 24 7 in shifts. They remove dead eggs precisely. Eggs hatch in 2 to 3 days at 26 degrees C into larvae. Parents move larvae to shallow substrate pit. At 5 to 7 days, fry become free swimming. Parents herd fry protectively for 4 to 6 weeks. Survival is high (70 to 90 percent) with parental care. Growth: 1 cm at 4 weeks, 2 cm at 8 weeks.',
    notes: 'Exceptional parental care—both parents cooperate intensely. Watch them herd fry, retrieve wanderers in mouths, and coordinate defense. One of the most rewarding breeding experiences. Pairs may spawn every 4 to 6 weeks if well fed. Remove older fry before next spawn to prevent predation. Excellent beginner cichlid breeding project!',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'dull-coloration', cause: 'hard-alkaline-water-or-poor-diet', frequency: 0.30 },
      { issue: 'failed-breeding', cause: 'hard-water-or-no-flat-stones', frequency: 0.25 },
      { issue: 'bullying', cause: 'housed-with-aggressive-cichlids', frequency: 0.18 },
      { issue: 'stress-hiding', cause: 'kept-alone-or-inadequate-group', frequency: 0.12 },
      { issue: 'fry-death', cause: 'separated-from-parents-too-early', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 70, max: 160, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};
