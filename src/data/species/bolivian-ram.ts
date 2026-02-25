import type { Species } from '../../types/species';

export const bolivianRam: Species = {
  id: 'cichlid-015',
  slug: 'bolivian-ram',
  imageUrl: '/images/species/bolivian-ram.jpg',
  
  funFact: "The Bolivian Ram is a gentle 'eartheater' that sifts sand through its gills to find food, a mesmerizing behavior that keeps the substrate clean and provides endless entertainment.",

  imageCredit: {
    photographer: 'Elma (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Male_altispinosa_dwarf_cichlid_(3229597033).jpg',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
  },
  
  taxonomy: {
    scientificName: 'Mikrogeophagus altispinosus',
    commonName: 'Bolivian Ram',
    family: 'Cichlidae',
    origin: 'South America (Bolivia, Brazil - Amazon River Basin headwaters)',
    region: 'South America',
    biotope: 'Shallow, slow-moving streams with sandy substrates and moderate vegetation.',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 8,
    color: 'The body is a peachy-orange hue with iridescent blue scales and distinctive black markings. Males develop elongated filaments on the dorsal and anal fins as they mature.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 23, max: 28, ideal: 25 },
    ph: { min: 6.5, max: 7.8, ideal: 7.0 },
    gh: { min: 6, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.85,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 1,
    },
    
    bioloadMultiplier: 0.8,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Hardy plants like Anubias and Cryptocoryne are ideal as they tolerate occasional digging. Large open sandy areas are crucial for natural foraging behavior.',
    hardscape: ['Smooth flat stones', 'Driftwood', 'Caves', 'River stones'],
  },

  behavior: {
    tags: ['peaceful', 'pair-bonding', 'substrate-sifter', 'cichlid', 'slow_eater'],
    minGroupSize: 2,
    description: 'These peaceful dwarf cichlids are known for their methodical sand-sifting behavior, where they take mouthfuls of substrate to filter out food particles. They form strong monogamous pairs and exhibit excellent parental care, making them a joy to observe during breeding. Unlike their more delicate cousins, the German Blue Rams, Bolivians are hardy and adaptable to a range of water parameters. They are slow and deliberate feeders, preferring calm environments where they do not have to compete with fast-moving tankmates. Their calm demeanor makes them one of the few cichlids perfectly suited for a peaceful community aquarium.',
    
    compatibility: {
      goodMates: ['Cardinal Tetras', 'Corydoras', 'Kuhli Loaches', 'Otocinclus', 'Hatchetfish'],
      badMates: ['Danios', 'Barbs', 'Aggressive Cichlids', 'Large predatory fish'],
      notes: 'They are ideal community cichlids but slow feeding habits make them vulnerable to competition from fast fish.',
      
      rules: [
        {
          type: 'warning',
          target: 'fast aggressive feeders (Danios, Barbs)',
          reason: 'They are slow, methodical feeders that will starve if forced to compete with fast-moving species.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'Sifting substrate through their gills is a primary foraging and enrichment behavior.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'aggressive cichlids',
          reason: 'Their peaceful temperament makes them an easy target for more boisterous or aggressive cichlid species.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'stable clean water',
          reason: 'They are sensitive to high nitrate levels and deteriorating water conditions.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
        midwater: '15-30',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 1,
      territorial: 3,
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
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Sand substrate', 
      'Calm tankmates', 
      'Stable water parameters',
      'Open sandy areas',
      'Target feeding if needed',
    ],

    proTips: [
      "Bolivian Rams are significantly hardier than German Blue Rams and tolerate a wider range of water parameters. They are the ideal choice for beginners who want a dwarf cichlid without the specific requirements of a blackwater setup.",
      "Use a turkey baster to target feed sinking pellets directly to them if kept with fast-eating tankmates. This ensures they receive adequate nutrition before faster fish consume the food.",
      "Pairs form strong bonds and often stay together for life. Buying a group of six juveniles allows them to select their own partners naturally."
    ],

    commonMistakes: [
      "Keeping them on gravel prevents their natural sand-sifting behavior and causes chronic stress.",
      "Housing them with fast-feeding fish like Danios often leads to starvation as they cannot compete for food.",
      "Assuming all cichlids are aggressive leads to missing out on this peaceful species that thrives in community settings."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['pellets', 'wafers', 'bloodworms'],
      supplements: ['brine-shrimp', 'daphnia', 'spirulina'],
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
      notes: 'Perform weekly water changes to keep nitrates low, as this species is sensitive to poor water quality.',
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
    lifespanYears: 5,
    commonDiseases: ['ich', 'hole-in-head-disease', 'bacterial-infections', 'bloat', 'parasites'],
    sensitivities: ['High nitrates', 'Sudden parameter changes', 'Starvation', 'Aggressive tankmates'],
  },

  scientificContext: {
    wildHabitat: "Native to the upper Amazon Basin in Bolivia and Brazil, this species inhabits shallow, slow-moving streams with sandy bottoms. The water is typically clear to slightly stained, neutral in pH, and well-oxygenated. Unlike the blackwater habitats of some other dwarf cichlids, these environments offer more stable water chemistry. This adaptability makes them significantly easier to care for in captivity than their relatives.",
    sexualDimorphism: "Males grow larger and develop extended, filamentous rays on their dorsal and anal fins. Females possess a rounder body shape, particularly when gravid, and generally lack the male's fin extensions. The female also often shows a more intense pinkish belly when ready to spawn.",
    variants: ['Wild Type'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'medium',
    trigger: 'Condition a bonded pair with high-quality live or frozen foods for several weeks. A slight drop in temperature combined with a large water change often simulates the rainy season and triggers spawning. Providing a clean, flat stone in a quiet area encourages the female to deposit her eggs.',
    fryCare: 'Both parents meticulously guard the eggs and wrigglers, often moving them between pre-dug pits in the sand. Once the fry are free-swimming after about a week, they can be fed newly hatched brine shrimp. The parents will herd the school around the tank for several weeks, protecting them from perceived threats. It is best to raise the fry in a separate tank to ensure high survival rates against other community fish.',
    notes: 'Bolivian Rams are excellent parents and exhibit strong biparental care, making them a rewarding species to breed.',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'starvation from competition', cause: 'kept with fast aggressive feeders', frequency: 0.28 },
      { issue: 'stress from gravel substrate', cause: 'no sand for natural behavior', frequency: 0.22 },
      { issue: 'bullying by aggressive fish', cause: 'paired with aggressive species', frequency: 0.18 },
      { issue: 'poor health high nitrates', cause: 'insufficient water changes', frequency: 0.15 },
      { issue: 'failed pairing', cause: 'forced incompatible pairs', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 70, max: 160, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};