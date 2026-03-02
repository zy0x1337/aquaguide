import type { Species } from '../../types/species';

export const apistogrammaAgassizii: Species = {
  id: 'cichlid-apistogramma-agassizii',
  slug: 'apistogramma-agassizii',
  imageUrl: '/images/species/apistogramma-agassizii.jpg',

  imageCredit: {
    photographer: 'harum.koh (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Agassiz%27s_dwarf_cichlid_(Apistogramma_agassizii)_(15875959140).jpg',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/'
  },
  
  funFact: "The male Agassiz's Dwarf Cichlid develops a spectacular lyre-shaped caudal fin that resembles a harp. Females, despite being smaller, transform into brilliant yellow guardians when breeding, aggressively defending their fry against much larger fish.",

  taxonomy: {
    scientificName: 'Apistogramma agassizii',
    commonName: 'Agassizs Dwarf Cichlid',
    family: 'Cichlidae',
    origin: 'South America (Amazon Basin - Peru, Brazil)',
    region: 'South America',
    biotope: 'Blackwater and clearwater streams with sandy substrates, submerged wood, and thick leaf litter.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 9,
    color: 'Males are elongated with a distinctive lyre-shaped tail fin. Coloration varies by locality, often featuring a red or orange dorsal fin and blue facial markings. Females are smaller and turn a vivid yellow with black markings when breeding.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 5.5, max: 7.0, ideal: 6.2 },
    gh: { min: 2, max: 10 },
    kh: { min: 1, max: 5 },
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
    
    bioloadMultiplier: 0.9,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'They require a tank arranged with plenty of hiding spots. Use driftwood, caves, and dense planting to break lines of sight. Leaf litter is highly recommended to mimic their natural environment and provide cover for fry.',
    hardscape: ['Driftwood', 'Coconut caves', 'Leaf litter', 'Slate caves'],
  },

  behavior: {
    tags: ['territorial', 'pair-bonding'],
    minGroupSize: 2,
    description: 'A relatively peaceful dwarf cichlid that can become territorial when breeding. Males are polygamous in the wild but can be kept in pairs in smaller tanks. Females are dedicated mothers, guarding the eggs and herding the fry.',
    
    compatibility: {
      goodMates: ['Neon Tetra', 'Cardinal Tetra', 'Rummy Nose Tetra', 'Pencilfish', 'Hatchetfish', 'Corydoras'],
      badMates: ['Other Apistogramma species', 'German Blue Ram', 'Bettas', 'Large aggressive cichlids'],
      notes: 'Best kept with peaceful dither fish that inhabit the upper levels. Avoid other bottom-dwelling cichlids to prevent territorial conflicts.',
      
      rules: [
        {
          type: 'requires',
          condition: 'caves or spawning sites',
          reason: 'They are cave spawners and need enclosed spaces to feel secure and breed.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'soft acidic water',
          reason: 'They originate from blackwater habitats. Hard, alkaline water leads to stress and reduced lifespan.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'keeping multiple males',
          reason: 'Males are territorial. In tanks smaller than 120 liters, keep only one male to prevent fighting.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 8-12,
        midwater: '15-25',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 6,
      interspecific: 3,
      territorial: 7,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
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
      'Soft acidic water', 
      'Caves for spawning', 
      'Live or frozen foods', 
      'Clean water',
    ],

    proTips: [
      "Condition breeding pairs with live foods like bloodworms or brine shrimp to trigger spawning.",
      "Use Indian Almond Leaves to create tannin-stained water, which makes them feel more secure.",
      "Males have elongated fins; ensure the lid is secure, as they can jump when startled."
    ],

    commonMistakes: [
      "Keeping them in hard, alkaline water results in poor health and failure to breed.",
      "Acclimating them too quickly can be fatal due to their sensitivity to water chemistry changes.",
      "Feeding only dry foods leads to malnutrition; they require a meaty diet."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['bloodworms', 'brine-shrimp', 'daphnia', 'flakes'],
      supplements: ['cyclops', 'pellets'],
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
      notes: 'Regular water changes are essential. They are sensitive to high nitrate levels and organic waste.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
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
    commonDiseases: ['ich', 'velvet', 'internal-parasites', 'bloat'],
    sensitivities: ['Hard water', 'Ammonia', 'Sudden parameter changes', 'Copper medications'],
  },

  scientificContext: {
    wildHabitat: "Found in the Amazon River system, inhabiting shallow, slow-moving waters. These areas are often shaded by overhanging vegetation and rich in leaf litter.",
    sexualDimorphism: "Males are larger, more colorful, and possess a distinctly lyre-shaped caudal fin. Females are smaller, rounder, and turn bright yellow with black markings during courtship and brood care.",
    variants: ['Agassizii Red', 'Agassizii Fire Red', 'Agassizii Tefe', 'Agassizii Santarem', 'Agassizii Double Red'],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'medium',
    trigger: 'Breeding is induced by soft, acidic water and a rise in temperature. Provide a suitable cave for the female to deposit her eggs.',
    fryCare: 'The female guards the eggs and later herds the fry. Fry are free-swimming after about a week and need very small live foods like baby brine shrimp.',
    notes: 'A typical harem spawner. The female takes primary care of the fry, while the male defends the perimeter.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'water-parameter-shock', cause: 'acclimated-too-quickly-to-different-parameters', frequency: 0.30 },
      { issue: 'malnutrition', cause: 'fed-only-dry-food', frequency: 0.20 },
      { issue: 'aggression-injuries', cause: 'multiple-males-in-small-tank', frequency: 0.15 },
      { issue: 'disease', cause: 'poor-water-quality', frequency: 0.15 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 150, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};