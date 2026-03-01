import type { Species } from '../../types/species';

export const carinotetraodonTravancoricus: Species = {
  id: 'puffer-dwarf-pea',
  slug: 'dwarf-pufferfish',
  imageUrl: '/images/species/dwarf-pufferfish.jpg',

  imageCredit: {
    photographer: 'Parazelsus (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Carinotetraodon_travancoricus_by_Parazelsus_(cropped).jpg',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
  },
  
  funFact: "The Dwarf Pufferfish is one of the smallest pufferfish in the world and one of the few that spends its entire life in freshwater. Unlike most fish, they can move their eyes independently and appear to 'blink'. They are incredibly intelligent, often recognizing their owner and begging for food at the front of the tank.",

  taxonomy: {
    scientificName: 'Carinotetraodon travancoricus',
    commonName: 'Dwarf Pufferfish / Pea Puffer / Malabar Puffer',
    family: 'Tetraodontidae',
    origin: 'Southwest India (Kerala)',
    region: 'Asia',
    biotope: 'Slow-moving rivers, streams, and estuaries with dense aquatic vegetation and a sandy or muddy bottom.',
  },

  visuals: {
    iconShape: 'globiform',
    adultSizeCM: 3.5,
    color: 'Males are bright yellowish-green with a distinct dark line running along the belly and a dark patch behind the eye. Females are rounder with a mottled pattern of dark spots over a lighter background. Both sexes can change color intensity based on mood and environment.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.5, max: 7.8, ideal: 7.2 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'all',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 25,
      territories: 1,
    },
    
    bioloadMultiplier: 0.9,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense planting is essential to break lines of sight and reduce aggression between individuals. They appreciate hiding spots among vegetation.',
    hardscape: ['Driftwood', 'Caves', 'Coconut shells', 'Tall plants'],
  },

  behavior: {
    tags: ['predator', 'intelligent', 'scaleless', 'territorial'],
    minGroupSize: 1,
    description: 'A tiny but feisty fish with a distinct personality. Males are territorial and can be aggressive towards each other and other tankmates. They are curious hunters that constantly search for snails and other small invertebrates. They have a beak that grows continuously and must be worn down by eating hard-shelled prey.',
    
    compatibility: {
      goodMates: ['Amano Shrimp (adults only)', 'Nerite Snails (may still be nipped)', 'Fast peaceful fish (in large tanks)', 'Other dwarf puffers (females only)', 'Best kept alone'],
      badMates: ['Long-finned fish', 'Slow-moving fish', 'Small shrimp', 'Snails (intended as food)', 'Other male dwarf puffers'],
      notes: 'Ideally kept in a species-only tank. They are fin nippers and will harass slow-moving or long-finned fish. In a community tank, they often bully tankmates or get outcompeted for food.',
      
      rules: [
        {
          type: 'requires',
          condition: 'snails for dental health',
          reason: 'Their teeth grow continuously and must be worn down by crushing snail shells. Without snails, their beak will overgrow, leading to starvation.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'multiple males in small tanks',
          reason: 'Males are highly territorial. Keeping more than one male in a small tank leads to constant fighting and injury.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'copper medications',
          reason: 'As scaleless fish, they are extremely sensitive to copper and other harsh medications.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '0',
        bottom: '0',
      },
    },
    
    aggressionLevel: {
      intraspecific: 8,
      interspecific: 7,
      territorial: 9,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'high',
      targets: ['long-finned fish', 'slow fish'],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Live or frozen meaty foods (snails are critical)', 
      'Species-only tank recommended', 
      'No copper medications', 
      'Dense cover for territory breaks',
    ],

    proTips: [
      "Cultivate a colony of small pond snails or ramshorn snails in a separate container to provide a constant food source for dental maintenance.",
      "They rarely accept dry food. Feed bloodworms, brine shrimp, and small snails.",
      "Provide plenty of plants and decorations to break the line of sight, which reduces aggression."
    ],

    commonMistakes: [
      "Keeping them in community tanks with long-finned fish leads to shredded fins.",
      "Feeding only soft foods like bloodworms leads to beak overgrowth.",
      "Using copper-based treatments kills them quickly."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['snails', 'bloodworms', 'brine-shrimp', 'daphnia'],
      supplements: ['frozen-krill'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'They are messy eaters. Regular water changes help maintain water quality. They are sensitive to deteriorating conditions.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 25,
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
    lifespanYears: 4,
    commonDiseases: ['ich', 'internal-parasites', 'bloat', 'beak-overgrowth'],
    sensitivities: ['Copper medications', 'Malachite green', 'Formalin', 'Poor water quality'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the Western Ghats of India. They inhabit slow-moving waters with lush vegetation. They are often found in rice paddies and flooded fields.",
    sexualDimorphism: "Males have a dark line running along the belly and are generally more colorful. Females have a rounder body and a spotted pattern without the distinct belly line.",
    variants: ['Wild Type', 'Golden Variant'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Spawning is often triggered by a large water change with slightly cooler water. Males will dance around the female, leading her to a flat surface or broad leaf where eggs are deposited.',
    fryCare: 'Eggs are laid on surfaces and hatch in about 5 days. Fry are tiny and need infusoria or green water initially, moving on to baby brine shrimp. Parents may eat eggs or fry.',
    notes: 'Breeding is achievable in home aquaria. Raising the fry requires careful attention to food size.',
  },
  
  experienceData: {
    successRate: 0.65,
    survivalRate: 0.60,
    
    commonFailures: [
      { issue: 'starvation', cause: 'refusal-to-eat-dry-food-or-teeth-overgrowth', frequency: 0.30 },
      { issue: 'aggression-injuries', cause: 'keeping-multiple-males-or-wrong-tankmates', frequency: 0.25 },
      { issue: 'medication-toxicity', cause: 'use-of-copper-or-harsh-meds', frequency: 0.20 },
      { issue: 'jumping', cause: 'startled-and-jumped-from-tank', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};