import type { Species } from '../../types/species';

export const bettaSplendensFemale: Species = {
  id: 'betta-splendens-female',
  slug: 'betta-splendens-female',
  imageUrl: '/images/species/betta-splendens-female.jpg',
  
  funFact: "While often sold as peaceful community fish, female Bettas can form complex social hierarchies known as sororities, establishing dominance through intricate displays of flaring and chasing.",

  taxonomy: {
    scientificName: 'Betta splendens',
    commonName: 'Siamese Fighting Fish (Female)',
    family: 'Osphronemidae',
    origin: 'Thailand, Cambodia, Vietnam',
    region: 'Asia',
    biotope: 'Shallow, stagnant rice paddies and slow-moving floodplains with dense vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'Females display the same vibrant coloration as males but feature significantly shorter fins. A distinct white dot, known as an ovipositor, is visible on their belly.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 20,
    tempC: { min: 24, max: 30, ideal: 26 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    kh: { min: 3, max: 15 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'midwater',
      preference: 0.70,
    },
    
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 20,
      territories: 1,
    },
    
    bioloadMultiplier: 0.5,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Heavy planting creates essential sight breaks that reduce aggression in group settings. Floating plants are crucial to provide cover for subdominant females escaping harassment.',
    hardscape: ['Driftwood', 'Caves', 'Leaf litter'],
  },

  behavior: {
    tags: ['semi-aggressive', 'surface_dweller', 'territorial', 'labyrinth_fish', 'jumper'],
    minGroupSize: 1,
    description: 'Female Bettas are active and inquisitive fish that often patrol the entire tank rather than guarding a single spot like males. While less aggressive than males, they still possess a strong territorial drive and will flare at their own reflection or other fish with long fins. In a community setting, a single female often coexists peacefully with fast-moving schooling fish, ignoring them while asserting mild dominance. However, keeping multiple females together requires a complex setup to mitigate their natural instinct to establish a hierarchy through chasing and nipping.',
    
    compatibility: {
      goodMates: ['Small Tetras', 'Corydoras', 'Rasboras', 'Snails'],
      badMates: ['Male Bettas', 'Guppies', 'Other females (beginners)', 'Fin nippers'],
      notes: 'A single female makes an excellent centerpiece for a peaceful community tank, but mixing multiple females requires a specialized setup.',
      
      rules: [
        {
          type: 'avoid',
          target: 'male Bettas',
          reason: 'The male will relentlessly harass the female to breed, often causing severe injury or death.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'expert for sororities',
          reason: 'Without dense hiding spots and correct group dynamics, dominant females will bully weaker individuals to death.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        midwater: '10 to 30',
        bottom: '6 to 15',
      },
    },
    
    aggressionLevel: {
      intraspecific: 6,
      interspecific: 2,
      territorial: 4,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 0,
    },
    
    finNipping: {
      risk: 'low',
      targets: ['long-finned fish'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Heater mandatory', 
      'Tight-fitting lid (jumper)',
      'Low flow',
    ],

    proTips: [
      "A single female is often a more reliable community member than a male, displaying high intelligence and recognition of her keeper.",
      "Look for vertical breeding stripes to indicate readiness to spawn, or horizontal stress stripes to indicate fear or submission.",
      "Target feeding ensures she gets her share before greedy tank mates steal it, as she may be slower than fish like Tetras."
    ],

    commonMistakes: [
      "Attempting a sorority in a small tank results in relentless bullying and eventual death of the weaker females.",
      "Adding flashy, long-finned fish like Guppies triggers the female to attack, mistaking them for rival Bettas.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets', 'brine-shrimp'],
      supplements: ['bloodworms', 'daphnia'],
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
      notes: 'Maintain a tight-fitting lid, as these fish are accomplished jumpers capable of escaping through the smallest gaps.',
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
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['fin rot', 'dropsy', 'ich'],
    sensitivities: ['Cold water', 'Strong currents', 'Fin nipping', 'Ammonia spikes'],
  },

  scientificContext: {
    wildHabitat: "Native to the shallow, stagnant waters of Thailand's central basin, they inhabit rice paddies, ponds, and slow-moving streams. These environments are often choked with dense vegetation and have very low oxygen levels, which the fish navigates using its labyrinth organ. The water is typically warm, soft, and stained with tannins from decaying organic matter. Seasonal fluctuations in water depth drive their evolutionary adaptation to survive in tiny pockets of water during the dry season.",
    sexualDimorphism: "Females are easily distinguished by their significantly shorter fins and a prominent white egg spot visible on the underbelly. While males possess long, flowing fins and a torpedo-shaped body, females appear rounder, especially when gravid. Males also lack the distinct ovipositor tube seen on mature females.",
    variants: ['Koi', 'Galaxy', 'Crowntail', 'Veiltail', 'Plakat'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'Condition the pair separately with high-quality live or frozen foods for two weeks to ensure the female develops eggs. Introducing the female to the male\'s tank in a clear divider container allows them to see each other without physical contact until the male builds a bubble nest and the female displays vertical breeding stripes.',
    fryCare: 'After spawning, the male tends the eggs in the bubble nest while the female should be removed immediately to prevent her from eating the eggs or being attacked. The fry hatch within 48 hours but remain in the nest until they become free-swimming a few days later. At this stage, they require microscopic foods like infusoria or vinegar eels, graduating to newly hatched brine shrimp as they grow. Maintain a tight lid on the rearing tank to trap humidity, which is critical for the development of their labyrinth organ.',
    notes: 'Spawning involves intense chasing and aggressive behavior from both partners, requiring a dedicated breeding tank.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'sorority violence', cause: 'aggression', frequency: 0.35 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};