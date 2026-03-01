import type { Species } from '../../types/species';

export const carnegiellaStrigata: Species = {
  id: 'hatchetfish-marbled',
  slug: 'marbled-hatchetfish',
  imageUrl: '/images/species/marbled-hatchetfish.jpg',

  imageCredit: {
    photographer: 'Sven Kullander (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Carnegiella_strigata_lateral_view.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  
  funFact: "The Marbled Hatchetfish possesses one of the most extreme body shapes in the aquarium hobby, resembling a small axe head. Their massively expanded pectoral fins and specialized muscles allow them to leap high out of the water and glide considerable distances to escape predators, making them the true 'flying fish' of the freshwater aquarium.",

  taxonomy: {
    scientificName: 'Carnegiella strigata',
    commonName: 'Marbled Hatchetfish',
    family: 'Gasteropelecidae',
    origin: 'South America (Amazon Basin - Peru, Brazil, Bolivia)',
    region: 'South America',
    biotope: 'Surface waters of slow-moving creeks and backwaters, often found under overhanging vegetation in tannin-stained blackwater.',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 4,
    color: 'A distinctive deep, hatchet-shaped body with a silver-cream background covered in dark, marbled brown stripes and patterns. The pectoral fins are large and wing-like. The body is very thin when viewed from the front.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 23, max: 27, ideal: 25 },
    ph: { min: 5.5, max: 7.0, ideal: 6.5 },
    gh: { min: 2, max: 12 },
    kh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'surface',
      preference: 0.99,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.4,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Floating plants are mandatory to diffuse light and provide the security they need. They rarely venture to the lower levels of the tank. Surface plants like Salvinia or Frogbit reduce their notorious skittishness.',
    hardscape: ['Driftwood branches reaching the surface', 'Leaf litter', 'Dim lighting'],
  },

  behavior: {
    tags: ['surface_dweller', 'jumper', 'schooler', 'shy'],
    minGroupSize: 8,
    description: 'A specialized surface dweller that spends its entire life in the top few centimeters of water. They are extremely skittish and will "fly" out of the tank at the slightest disturbance. They are peaceful but easily bullied or outcompeted for food. In a calm, covered tank, they will display fascinating group behavior, hovering just below the surface waiting for insect prey.',
    
    compatibility: {
      goodMates: ['Small peaceful tetras (Ember, Neon)', 'Pencilfish', 'Corydoras', 'Rasboras', 'Dwarf shrimp'],
      badMates: ['Fast eaters (Danios, Barbs)', 'Fin nippers', 'Large fish', 'Cichlids', 'Bettas'],
      notes: 'They must be kept with peaceful, slow-moving tankmates that won\'t compete aggressively for surface food. They are easily intimidated. An absolute secure lid is non-negotiable.',
      
      rules: [
        {
          type: 'requires',
          condition: 'secure lid with no gaps',
          reason: 'They are expert jumpers and gliders. An open tank or even small gaps around filters/wires will result in dried fish on the floor. This is the primary cause of loss for this species.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 8',
          reason: 'They are a schooling fish that relies on the group for security. In small groups, they become terrified and refuse to eat.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'floating plants',
          reason: 'Without surface cover, they feel exposed and constantly stressed, leading to disease and jumping attempts.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '10-15',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'low',
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
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Absolute secure lid', 
      'Floating plants', 
      'Floating foods', 
      'Very peaceful tankmates', 
      'Soft, acidic water preferred',
    ],

    proTips: [
      "Feed floating foods exclusively. They will not dive for sinking pellets. Dried fruit flies or flakes that sit on the surface are ideal.",
      "Acclimatize them slowly. They are often wild-caught and sensitive to pH shock and high hardness.",
      "Cover filter intake pipes with sponges; they sometimes get stuck against strong intakes."
    ],

    commonMistakes: [
      "Underestimating their jumping ability. They can glide surprisingly long distances.",
      "Keeping them in hard, alkaline water shortens their lifespan.",
      "Housing them with fast surface feeders like Guppies or Danios results in the Hatchetfish starving."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'pellets'],
      supplements: ['bloodworms', 'brine-shrimp', 'daphnia'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Keep the water clean but avoid creating strong currents during water changes. They do not tolerate high nitrates well.',
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
    commonDiseases: ['ich', 'velvet', 'skinny-disease', 'internal-parasites'],
    sensitivities: ['Poor water quality', 'Hard water', 'Strong currents', 'Stress', 'Rapid acclimation'],
  },

  scientificContext: {
    wildHabitat: "Surface dweller of blackwater habitats in the Amazon. The water is typically tea-colored, acidic, and very soft. They feed on terrestrial insects that fall onto the water surface. Their body shape is an adaptation for stability at the air-water interface.",
    sexualDimorphism: "Females are slightly rounder in the belly when viewed from above, especially when gravid. Males are slimmer.",
    variants: ['Wild-type Marbled', 'Spotted Hatchetfish (Carnegiella maculata) - similar species'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Requires very soft, acidic water (pH < 6.5) and fine-leaved floating plants. Spawning is rarely witnessed and often happens at night.',
    fryCare: 'Fry are incredibly small and hang at the surface. They need infusoria or extremely fine dry food initially.',
    notes: 'Breeding is rarely achieved in home aquariums. Most specimens are wild-caught.',
  },
  
  experienceData: {
    successRate: 0.55,
    survivalRate: 0.50,
    
    commonFailures: [
      { issue: 'jumping-escape', cause: 'no-lid-or-gaps', frequency: 0.45 },
      { issue: 'starvation', cause: 'outcompeted-for-surface-food', frequency: 0.25 },
      { issue: 'acclimation-shock', cause: 'hard-water-shock', frequency: 0.15 },
      { issue: 'parasites', cause: 'wild-caught-import', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};