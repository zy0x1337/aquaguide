import type { Species } from '../../types/species';

export const anomalochromisThomasi: Species = {
  id: 'anomalochromis-thomasi',
  slug: 'african-butterfly-cichlid',
  imageUrl: '/images/species/african-butterfly-cichlid.jpg',
  funFact: "African Butterfly Cichlids are the GENTLE GIANTS of the cichlid world—except they're not giants, they're tiny (8cm)! Unlike their aggressive African relatives, these peaceful beauties form LIFELONG pair bonds and raise their babies together with Disney-movie-level devotion. Watch breeding pairs work as a coordinated team: one parent fans the eggs while the other patrols for threats, then they SWITCH shifts like aquatic co-parents. Most adorable: fry literally EAT MUCUS from their parents' skin for the first week—it's like cichlid baby formula!",

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
    origin: 'West Africa (Guinea, Liberia, Sierra Leone - coastal lowland rivers)',
    region: 'Africa',
    biotope: 'Shallow, slow-moving forest streams, swamps, and savannah wetlands with muddy/sandy substrates, dense vegetation, submerged roots, and leaf litter. Shaded, tannin-stained water',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 8,
    color: 'Silvery-yellow base with blue iridescent spots scattered across body. Two striking horizontal stripes: blue stripe along midline, red-orange stripe on upper body/dorsal fin. Males show more intense coloration when breeding. Juveniles are drab grey-brown (ugly duckling phase)',
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
      secondary: 'middle',
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
    plantingNotes: 'African Butterfly Cichlids are the ONLY African cichlids that WON\'T destroy your planted tank! Unlike Lake Malawi/Tanganyika cichlids that uproot everything, A. thomasi are PLANT-SAFE even during breeding—making them perfect for Dutch-style aquascapes. Plant heavily with Anubias, Cryptocoryne, Amazon Swords, Java Fern, and Vallisneria. They appreciate shaded areas under floating plants (Water Sprite, Frogbit) since their wild habitat is heavily shaded by forest canopy. Dense planting provides security for shy juveniles and natural spawning sites for pairs. Leave open sandy areas for foraging and fry-herding behavior.',
    hardscape: ['Smooth flat stones (CRITICAL for spawning - 10-15cm diameter)', 'Driftwood (creates tannins + shade)', 'Leaf litter (Indian Almond, Oak leaves)', 'Caves and coconut shells (hiding spots)'],
  },

  behavior: {
    tags: ['peaceful', 'social', 'pair-bonding', 'substrate-spawner', 'parental-care'],
    minGroupSize: 8,
    description: 'African Butterfly Cichlids are REMARKABLY peaceful for cichlids—they\'re the gentle souls of the family. Juveniles are shy, gregarious schooling fish that feel secure in groups of 8+. As they mature (6-12 months), they form LIFELONG monogamous pairs with intense courtship displays: side-by-side swimming, color flashing, and elaborate fin spreading. Once paired, they become inseparable—constantly swimming together, foraging together, and "chatting" with subtle body language. During breeding, pairs claim a small territory (~30cm radius around spawning site) and become mildly territorial—chasing other fish away but NEVER causing serious harm. Non-breeding pairs remain peaceful. Their parenting is ADORABLE: both parents guard eggs 24/7 in shifts, fan them with pectoral fins, remove dead eggs with surgical precision, and later herd clouds of fry like aquatic sheepdogs. They\'re active during the day, constantly exploring substrate for food.',
    
    compatibility: {
      goodMates: ['Peaceful Tetras (Congo, Ember, Rummynose)', 'Small peaceful Barbs (Cherry, Rosy)', 'Corydoras (all species)', 'Kuhli Loaches', 'Peaceful Rainbowfish', 'Otocinclus', 'Peaceful Gouramis', 'Rasboras'],
      badMates: ['Aggressive Cichlids (Oscars, Jack Dempseys, most African Rift Lake cichlids)', 'Fin-nippers (Tiger Barbs, Serpae Tetras)', 'Large predatory fish', 'Fast competitive feeders (can outcompete shy juveniles)'],
      notes: 'This is one of the FEW African cichlids suitable for peaceful community tanks! They\'re LESS aggressive than even Rams or Kribs. Pairs claim ~30cm territory during breeding but use threat displays (fin flaring, body shaking) rather than violence. They coexist peacefully with bottom-dwellers like Corydoras. Avoid housing with aggressive cichlids or fin-nippers. Best kept in species groups (8+ juveniles) or as breeding pairs in community tanks.',
      
      rules: [
        {
          type: 'warning',
          target: 'breeding pairs with other cichlids',
          reason: 'Breeding pairs become mildly territorial (30cm radius). They rarely harm tankmates but will chase intruders away from eggs/fry. Provide adequate space (80L minimum) and visual barriers (plants, wood)',
          severity: 'low',
        },
        {
          type: 'requires',
          condition: 'soft acidic water for health and breeding',
          reason: 'Wild habitat has pH 5.5-6.5, GH 2-6. They survive in neutral water but colors fade and breeding success drops. Soft water brings out stunning coloration',
          severity: 'medium',
        },
        {
          type: 'requires',
          condition: 'group of 8+ juveniles OR bonded pair for adults',
          reason: 'Juveniles are shy and stressed in small groups. Adults form pairs and become aggressive toward same-species rivals. Either keep large juvenile group or single bonded pair',
          severity: 'medium',
        },
        {
          type: 'avoid',
          target: 'aggressive cichlids',
          reason: 'A. thomasi are PEACEFUL and submissive. Aggressive species (Oscars, Jack Dempseys, African Rift Lake cichlids) will bully them relentlessly. Keep with peaceful community fish only',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: '10-20',
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
      level: 'medium',
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
      'Soft, acidic water (pH 6.0-6.5, GH 2-6) for best coloration and breeding', 
      'Multiple smooth flat stones (10-15cm) for spawning sites', 
      'Groups of 8+ juveniles OR bonded pair for adults',
      'Planted tank with shaded areas',
      'Stable water parameters (avoid sudden changes)',
    ],

    proTips: [
      "JUVENILE UGLY DUCKLING PHASE: Baby A. thomasi are DRAB grey-brown and easily overlooked in stores. Don't judge! After 4-6 months in soft, acidic, planted tanks, they transform into stunning adults with blue/red striped beauty. Be patient and watch the magic happen.",
      "Provide 3-5 flat stones (10-15cm diameter) scattered around the tank. Pairs are PICKY about spawning sites and will 'test' multiple locations—cleaning surfaces, doing trial runs—before choosing THE ONE. Smooth river stones or slate tiles work perfectly.",
      "MUCUS FEEDING: During first week after hatching, fry literally graze MUCUS from parents' skin. Both mom and dad produce nutrient-rich mucus that fry nibble off their bodies. It looks bizarre but it's normal! Don't panic and don't separate fry from parents.",
      "Soft water = STUNNING colors. In hard water (GH >10), they survive but look washed-out. Use RO water, peat filtration, or Indian Almond leaves to soften water. The color difference is dramatic—like going from black-and-white TV to 4K.",
      "Lifelong pair bonds: Once paired, they stay together for life (5-8 years). If one partner dies, the survivor often refuses to pair again. It's both heartwarming and heartbreaking.",
      "Parent-fry bond lasts 4-6 WEEKS. Parents herd, protect, and 'talk to' fry with body flicks. Watching them shepherd 100+ babies around the tank like aquatic border collies is mesmerizing.",
    ],

    commonMistakes: [
      "Expecting immediate color. Juveniles are DULL grey-brown for months. Store-bought fish look disappointing. Give them 4-6 months in soft, acidic water with good food and watch them bloom into beauties. They're worth the wait!",
      "Hard, alkaline water. They SURVIVE in pH 7.5, GH 15+, but colors fade to pale yellow and breeding fails. They need soft, acidic conditions (pH 6.0-6.5, GH 2-6) to look their best and breed successfully.",
      "Separating fry from parents too early. First-time breeders panic when fry graze on parents' bodies ('Are they being eaten?!'). NO! Fry eat parental mucus for nutrition. Separating them reduces survival. Leave family together for 4-6 weeks.",
      "Housing with aggressive cichlids. A. thomasi are PEACEFUL and shy. Aggressive species (Oscars, most African Rift Lake cichlids) will bully them constantly. Keep with peaceful community fish only.",
      "Keeping single fish. Juveniles are social schoolers (need 8+). Adults form pairs and become stressed alone. Either keep large juvenile group or bonded pair—never singles.",
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
      notes: 'Weekly 30% water changes maintain soft, acidic conditions. Vacuum sandy substrate lightly to remove waste but leave some leaf litter for tannins. During breeding, REDUCE water changes to 10-15% to avoid shocking eggs/fry. Use RO water or peat filtration to maintain low pH/GH.',
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
    lifespanYears: 6,
    commonDiseases: ['ich', 'velvet', 'bacterial-infections', 'bloat', 'hole-in-head-disease'],
    sensitivities: ['Stress (color fades dramatically)', 'Hard water (reduced coloration and breeding)', 'High nitrates (>20ppm)', 'Sudden parameter changes', 'Poor diet (loses color)'],
  },

  scientificContext: {
    wildHabitat: "African Butterfly Cichlids inhabit shallow (10-50cm depth), slow-moving forest streams, swamps, and savannah wetlands in coastal lowland West Africa (Guinea, Liberia, Sierra Leone). These are SOFT, ACIDIC, TANNIN-STAINED waters (pH 5.5-6.5, GH 2-4) with muddy or sandy substrates, dense aquatic vegetation, submerged roots, and thick leaf litter. Water is heavily shaded by forest canopy, creating dim, dappled lighting. Temperatures range 24-28°C year-round. During rainy season, water levels rise and cooler rain triggers spawning. Unlike aggressive Rift Lake cichlids from hard alkaline water, A. thomasi evolved in peaceful, soft-water environments—explaining their gentle temperament.",
    sexualDimorphism: "DIFFICULT to sex outside breeding. Males are slightly larger (8cm vs 7cm females), develop longer dorsal and anal fin filaments, and show more intense blue/red coloration when mature. Females have rounder, fuller bellies especially when gravid (carrying eggs). During breeding, males display VIVID colors and females' bellies swell noticeably. Juveniles are impossible to sex visually. Best method: buy 8-10 juveniles and let them pair naturally.",
    variants: ['Wild Type (silvery-yellow with blue/red stripes)', 'Gold/Xanthoristic (rare—golden-yellow body, reduced melanin)'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'beginner',
    trigger: 'African Butterfly Cichlids are one of the EASIEST cichlids to breed! Trigger spawning with: 1) Soft, acidic water (pH 6.0-6.5, GH 2-6)—this is CRITICAL, 2) Large (40-50%) water change with slightly COOLER water (23-24°C) to simulate rainy season, 3) Conditioning with live/frozen foods (bloodworms, brine shrimp, daphnia) for 2 weeks to fatten up pair, 4) Provide multiple flat stones (10-15cm diameter) for spawning sites. Pairs will court intensely—swimming side-by-side, vibrating bodies, flashing colors—before choosing a spawning site.',
    fryCare: 'Female lays 50-500 eggs (average 150-200) on pre-cleaned flat stone. Male fertilizes immediately. BOTH parents guard eggs 24/7 in shifts—one fans eggs with pectorals while other patrols. They remove dead/fungused eggs with surgical precision. Eggs hatch in 2-3 days at 26°C into wriggling larvae. Parents move larvae to shallow pit dug in substrate. At 5-7 days, fry become free-swimming. CRITICAL: Fry GRAZE MUCUS from parents\' skin for first week (looks weird but normal!). After 7-10 days, supplement with microworms, infusoria, powdered flakes. Parents herd fry in tight clouds, protecting them fiercely. Fry survival is HIGH (70-90%) with parental care. Parents guard fry for 4-6 weeks before losing interest. Growth is moderate: 1cm at 4 weeks, 2cm at 8 weeks.',
    notes: 'EXCEPTIONAL parental care—both parents cooperate intensely. Watch them herd fry, retrieve wanderers in their mouths, and coordinate defense. It\'s one of the most rewarding breeding experiences in fishkeeping. Pairs may spawn every 4-6 weeks if well-fed. Remove older fry before next spawn or parents may eat them to protect new batch. One of the BEST beginner cichlid breeding projects—easy, reliable, and educational!',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'dull-coloration', cause: 'hard-alkaline-water-poor-diet', frequency: 0.30 },
      { issue: 'failed-breeding', cause: 'hard-water-or-no-flat-stones', frequency: 0.25 },
      { issue: 'bullying-by-aggressive-fish', cause: 'housed-with-aggressive-cichlids', frequency: 0.18 },
      { issue: 'stress-hiding', cause: 'kept-alone-or-small-group', frequency: 0.12 },
      { issue: 'fry-death', cause: 'separated-from-parents-too-early', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 70, max: 160, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};
