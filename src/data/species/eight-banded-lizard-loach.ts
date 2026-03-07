import type { Species } from '../../types/species';

export const serpenticobitisOctozona: Species = {
  id: 'loach-eight-banded',
  slug: 'eight-banded-lizard-loach',
  imageUrl: '/images/species/eight-banded-lizard-loach.jpg',

  imageCredit: {
    photographer: 'Bogyman (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Serpenticobitis_cingulata.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  
  funFact: "The Eight-banded Lizard Loach moves with a distinctive snake-like motion, creeping over rocks and wedging itself into tight crevices. Its body pattern of eight dark vertical bands provides excellent camouflage in the dappled light of shallow streams.",

  taxonomy: {
    scientificName: 'Serpenticobitis octozona',
    commonName: 'Eight Banded Lizard Loach',
    family: 'Cobitidae',
    origin: 'Southeast Asia (Laos, Thailand - Mekong River basin)',
    region: 'Asia',
    biotope: 'Shallow, clear, fast-flowing rivers with rocky or sandy substrates and high oxygen content.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 6,
    color: 'An elongated, snake-like body with a base color of light brown to yellow. Eight prominent dark vertical bands encircle the body. The scales are small, giving it a smooth appearance.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 22, max: 26, ideal: 24 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 5, max: 12 },
    kh: { min: 3, max: 8 },
    flow: 'high',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
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
    planting: 'sparse',
    plantingNotes: 'They inhabit rocky streams where plants are sparse. Hardy plants like Anubias attached to hardscape are suitable. Open swimming space near the bottom is more important.',
    hardscape: ['Smooth river stones', 'Driftwood', 'Slate stacks', 'Crevices and caves'],
  },

  behavior: {
    tags: ['territorial', 'peaceful', 'active', 'scaleless'],
    minGroupSize: 1,
    description: 'An active, lizard-like loach that spends its time creeping over rocks and wedging itself into crevices. Males are territorial towards each other, often engaging in lip-locking battles. They are peaceful towards other species but can outcompete slower bottom dwellers for food.',
    
    compatibility: {
      goodMates: ['Hillstream Loaches', 'Danios', 'Barbs', 'Rasboras', 'Corydoras', 'Fast swimming tetras'],
      badMates: ['Slow moving fish', 'Long finned fish', 'Other territorial bottom dwellers', 'Large aggressive cichlids'],
      notes: 'Best kept as a single specimen or one male with multiple females in spacious tanks. They are not suitable for generic community tanks with slow or long finned fish.',
      
      rules: [
        {
          type: 'requires',
          condition: 'high oxygen levels',
          reason: 'They are adapted to fast-flowing, oxygen-rich streams. Low oxygen causes stress and disease.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'multiple males in small tanks',
          reason: 'Males are highly territorial. Keeping multiple males in tanks under 120 liters leads to constant fighting.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'meaty diet',
          reason: 'They are primarily carnivorous. While they graze on biofilm, they need bloodworms, brine shrimp, or sinking carnivore pellets to thrive.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '3-6',
      },
    },
    
    aggressionLevel: {
      intraspecific: 7,
      interspecific: 2,
      territorial: 6,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: true,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'High water flow', 
      'High oxygen', 
      'Meaty diet', 
      'Hiding spots', 
      'Copper free medications',
    ],

    proTips: [
      "Powerheads are essential to provide the strong current they need.",
      "Create plenty of caves and crevices using slate or stones to allow them to exhibit their natural hiding behavior.",
      "Feed a variety of frozen foods like bloodworms and daphnia."
    ],

    commonMistakes: [
      "Keeping them in stagnant water leads to lethargy and susceptibility to disease.",
      "Housing multiple males in small tanks leads to aggression and injury.",
      "Using copper-based medications is fatal as they are scaleless."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['bloodworms', 'brine-shrimp', 'pellets'],
      supplements: ['daphnia', 'tubifex'],
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
      notes: 'Maintain high water quality and oxygen levels. They are sensitive to organic waste buildup.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 75,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'strong',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 8,
    commonDiseases: ['ich', 'velvet', 'skinny disease', 'internal parasites'],
    sensitivities: ['Copper medications', 'Low oxygen', 'Poor water quality', 'Sharp substrate'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the Mekong River basin in Laos and Thailand. They inhabit shallow riffles and runs with clear water, rocky substrates, and fast currents. They use their body shape to wedge themselves between rocks to avoid being swept away.",
    sexualDimorphism: "Males develop a fleshy ridge or lamina circularis on the first branched pectoral ray, used during courtship and combat. Females are rounder when gravid.",
    variants: ['Wild Type'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Breeding is rarely achieved in home aquaria. It requires specific environmental triggers and seasonal changes that are difficult to replicate.',
    fryCare: 'No detailed information available on raising fry in captivity.',
    notes: 'Most specimens are wild-caught.',
  },
  
  experienceData: {
    successRate: 0.65,
    survivalRate: 0.60,
    
    commonFailures: [
      { issue: 'aggression', cause: 'multiple-males-in-small-tank', frequency: 0.30 },
      { issue: 'hypoxia', cause: 'stagnant-water-low-oxygen', frequency: 0.25 },
      { issue: 'starvation', cause: 'lack-of-meaty-food', frequency: 0.15 },
      { issue: 'medication-toxicity', cause: 'exposure-to-copper', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 18, currency: 'EUR' },
    },
  },
};