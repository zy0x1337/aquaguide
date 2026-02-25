import type { Species } from '../../types/species';

export const anomalochromisThomasi: Species = {
  id: 'cichlid-001',
  slug: 'anomalochromis-thomasi',
  imageUrl: '/images/species/anomalochromis-thomasi.jpg',
  
  funFact: "The African Butterfly Cichlid is a gentle anomaly among cichlids, forming devoted pairs that calmly herd their fry around the tank like attentive parents.",

  imageCredit: {
    photographer: 'Haplochromis (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anomalochromis_thomasi.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  
  taxonomy: {
    scientificName: 'Anomalochromis thomasi',
    commonName: 'African Butterfly Cichlid',
    family: 'Cichlidae',
    origin: 'West Africa (Sierra Leone, Guinea, Liberia)',
    region: 'Africa',
    biotope: 'Shallow, slow-flowing forest streams with dense vegetation and rocky hiding spots.',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 7,
    color: 'A pale beige body is overlaid with iridescent blue-green scales and a series of dark vertical bars that shift with mood. Males often display red edges on their dorsal fins.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 23, max: 27, ideal: 25 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.80,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 30,
      territories: 1,
    },
    
    bioloadMultiplier: 0.8,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Robust plants like Anubias and Java Fern attached to hardscape survive any minor digging during spawning. Dense planting along the back creates visual barriers that reduce shyness and aggression.',
    hardscape: ['Flat stones', 'Driftwood roots', 'Terracotta caves', 'Leaf litter'],
  },

  behavior: {
    tags: ['peaceful', 'pair-bonding', 'cichlid', 'parental-care'],
    minGroupSize: 2,
    description: 'Defying the aggressive reputation of its family, this dwarf cichlid is a peaceful inhabitant well-suited for community aquariums. They form strong monogamous pairs that stay close together, often patrolling their territory side by side. During spawning, they become dedicated parents, carefully guarding eggs on a flat stone and herding the fry for weeks. They prefer staying near the bottom where they sift through the substrate for food. Adequate cover is essential, as they can be shy and will retreat into vegetation if threatened by faster fish.',
    
    compatibility: {
      goodMates: ['Small Characins', 'Rasboras', 'Corydoras', 'Loricariids', 'Peaceful Gouramis'],
      badMates: ['Large Cichlids', 'Aggressive Barbs', 'Mbuna', 'Nippy fish'],
      notes: 'An ideal choice for a West African biotope or a peaceful community setup, provided they have a small territory to call their own.',
      
      rules: [
        {
          type: 'requires',
          condition: 'flat stones',
          reason: 'Flat stones serve as essential spawning sites where the female deposits her adhesive eggs.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 5,
        midwater: '10 to 20',
        bottom: '4 to 6',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
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
      maxMalesPerTank: 2,
    },
    
    finNipping: {
      risk: 'low',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Clean water', 
      'Flat stones for spawning', 
      'Peaceful tankmates'
    ],

    proTips: [
      "Purchase a group of six juveniles to allow natural pairs to form, as forced pairs often result in incompatibility.",
      "Condition breeding pairs with high-quality frozen or live foods to stimulate spawning behavior.",
      "Watch for faded colors, which often indicate stress or poor water quality in this sensitive species.",
    ],

    commonMistakes: [
      "Keeping them in barren tanks without hiding spots causes chronic stress and washed-out colors.",
      "Placing them with boisterous fish prevents them from competing for food during feeding time.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'pellets'],
      supplements: ['bloodworms', 'brine-shrimp', 'vegetables'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 20,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'They are sensitive to deteriorating water conditions, so regular partial changes are vital to maintain their health.',
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
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'parasites'],
    sensitivities: ['Poor water quality', 'High nitrates', 'Aggressive tankmates'],
  },

  scientificContext: {
    wildHabitat: "Native to the slow-moving, forested streams of Sierra Leone, Guinea, and Liberia. The water in these habitats is typically stained with tannins from decaying vegetation, creating soft and acidic conditions. They inhabit shallow margins densely packed with aquatic plants and submerged roots. These environments offer ample hiding spots and a rich supply of small invertebrates for food.",
    sexualDimorphism: "Males attain a larger size and display more elongated dorsal and anal fins compared to females. Females develop a rounder body shape, particularly when full of eggs, and generally exhibit slightly duller coloration. During courtship, the female often displays a more intense reddish or pinkish belly area to attract the male.",
    variants: ['Wild type'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'beginner',
    trigger: 'Spawning is often initiated by a slight increase in temperature combined with the addition of high-protein live or frozen foods. Performing a larger water change with slightly cooler water can also simulate rainy season conditions.',
    fryCare: 'Once the fry become free-swimming after about five to seven days, the parents will guide them in a tight school around the tank. They can be fed newly hatched brine shrimp or finely crushed flake food multiple times a day. The parents continue to guard the brood for several weeks, herding them into shelter at night or when danger approaches. As the fry grow, it is important to maintain excellent water quality through frequent small water changes.',
    notes: 'They are excellent parents, and watching them care for their brood is a rewarding experience for any aquarist.',
  },
  
  experienceData: {
    successRate: 0.90,
    survivalRate: 0.85,
    
    commonFailures: [
      { issue: 'stress', cause: 'aggressive tankmates', frequency: 0.30 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 10, currency: 'EUR' },
    },
  },
};