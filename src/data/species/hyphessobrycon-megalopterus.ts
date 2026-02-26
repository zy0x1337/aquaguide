import type { Species } from '../../types/species';

export const hyphessobryconMegalopterus: Species = {
  id: 'hyphessobrycon-001',
  slug: 'hyphessobrycon-megalopterus',
  imageUrl: '/images/species/hyphessobrycon-megalopterus.jpg',
  
  funFact: "Males perform dramatic displays where they spread their large dorsal fins like black sails and darken their bodies to charcoal, a harmless ritual of bluff and showmanship.",

  taxonomy: {
    scientificName: 'Hyphessobrycon megalopterus',
    commonName: 'Black Phantom Tetra',
    family: 'Characidae',
    origin: 'Bolivia and Brazil (Upper Rio Madeira, Rio Guaporé, Rio Paraguay)',
    region: 'South America',
    biotope: 'Still tributaries and backwaters of the Pantanal wetlands with dense vegetation and tannin-stained water.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4.5,
    color: 'Males are silvery-gray with a black shoulder patch and elongated black dorsal fins. Females are smaller with rounded fins and a reddish-orange hue on the anal fin.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    gh: { min: 2, max: 15 },
    kh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.7,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Heavily planted tanks with floating plants are essential to diffuse light, mimicking their natural blackwater habitat and encouraging vibrant coloration.',
    hardscape: ['Driftwood', 'Smooth river stones', 'Indian Almond Leaves', 'Leaf litter'],
  },

  behavior: {
    tags: ['schooler', 'peaceful', 'active'],
    minGroupSize: 8,
    description: 'These peaceful tetras are known for the male\'s elaborate courtship displays, where they spread their fins and darken their bodies to intimidate rivals without actual violence. They are active schooling fish that occupy the middle water layers, exploring the tank in tight formations. While males may spar visually, they are harmless to other tankmates and thrive in community settings.',
    
    compatibility: {
      goodMates: ['Peaceful tetras', 'Corydoras', 'Rasboras', 'Dwarf Cichlids', 'Hatchetfish'],
      badMates: ['Tiger Barbs', 'Angelfish', 'Large cichlids'],
      notes: 'A model community fish that is compatible with most peaceful species, provided they are kept in a school.',
      
      rules: [
        {
          type: 'requires',
          condition: 'school of 8-12+ individuals',
          reason: 'They are obligate schooling fish that become stressed and pale in small groups.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'subdued lighting with floating plants',
          reason: 'Bright lighting causes stress and washes out their dramatic black coloration.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'fin-nipping species',
          reason: 'Species like Tiger Barbs will shred the males\' large fins.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'very large fish',
          reason: 'Adult Angelfish or Gouramis may view them as food.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '12-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 0,
      territorial: 1,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
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
      'School of 8-12+ individuals', 
      'Heavily planted tank', 
      'Subdued lighting', 
      'Tannin-stained water',
    ],

    proTips: [
      "Add Indian Almond Leaves to create tannin-stained water, which boosts their immune system and intensifies the males' black coloration.",
      "Keep a male-heavy group to encourage constant fin-flaring displays without harming the females."
    ],

    commonMistakes: [
      "Keeping them in small groups causes chronic stress and faded colors.",
      "Bright lighting without floating plants makes them timid and washed out.",
      "Mixing them with fin-nippers ruins the males' beautiful fins."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['micro-pellets', 'flakes', 'spirulina', 'bloodworms', 'brine-shrimp'],
      supplements: ['daphnia', 'cyclops'],
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
      notes: 'They are sensitive to nitrate accumulation, so regular water changes are necessary to keep levels below 20 ppm.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
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
    lifespanYears: 5,
    commonDiseases: ['ich', 'neon-tetra-disease', 'fin-rot', 'columnaris', 'parasites'],
    sensitivities: ['Bright lighting', 'High nitrates', 'Sudden parameter changes', 'Small groups', 'Copper medications'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the upper Paraguay and Madeira river basins, including the Pantanal wetlands. They inhabit clear, tannin-stained waters with dense aquatic vegetation. These environments experience seasonal flooding which expands their habitat and food sources. The water is typically soft and acidic, rich in insect life. They congregate in large schools around submerged roots and marginal plants.",
    sexualDimorphism: "Males possess a tall, elongated dorsal fin and turn deep black when displaying. Females have a shorter, rounded dorsal fin and display reddish-orange coloration on the anal fin. Females also have a fuller, rounder body shape.",
    variants: ['Wild type'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Condition the pair with live foods and provide very soft, acidic water in a separate breeding tank. Dim lighting and spawning mops or fine-leaved plants are necessary to encourage spawning.',
    fryCare: 'The tiny fry are light-sensitive and require infusoria or liquid fry food for the first few days. Once they accept newly hatched brine shrimp, growth is rapid. Maintaining pristine water quality with daily small water changes is critical for their development. They reach maturity at about six months.',
    notes: 'Males will display intensely for the female before scattering eggs among plants.',
  },
  
  experienceData: {
    successRate: 0.88,
    survivalRate: 0.82,
    
    commonFailures: [
      { issue: 'faded-colors-hiding', cause: 'small-group-size-or-bright-lighting', frequency: 0.30 },
      { issue: 'ich-outbreak', cause: 'stress-from-poor-acclimation', frequency: 0.25 },
      { issue: 'neon-tetra-disease', cause: 'infected-specimens-or-stress', frequency: 0.15 },
      { issue: 'stunted-growth', cause: 'poor-diet-flakes-only', frequency: 0.12 },
      { issue: 'fin-damage', cause: 'aggressive-tankmates-fin-nippers', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 150, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};