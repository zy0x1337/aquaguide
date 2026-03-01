import type { Species } from '../../types/species';

export const trichogasterLeeri: Species = {
  id: 'gourami-pearl',
  slug: 'pearl-gourami',
  imageUrl: '/images/species/pearl-gourami.jpg',

  imageCredit: {
    photographer: 'Zoofoto! (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:20130624_100102_Haus_des_Meeres.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  
  funFact: "The Pearl Gourami is renowned as one of the most peaceful and beautiful gouramis. Males display a brilliant orange-red throat and belly during courtship, while the 'pearl' pattern consists of white spots distributed across a brownish-silver body. Like all labyrinth fish, they possess a specialized organ allowing them to breathe atmospheric air, which they must access at the water's surface.",

  taxonomy: {
    scientificName: 'Trichopodus leeri',
    commonName: 'Pearl Gourami / Lace Gourami / Mosaic Gourami',
    family: 'Osphronemidae',
    origin: 'Southeast Asia (Thailand, Malaysia, Indonesia, Borneo)',
    region: 'Asia',
    biotope: 'Swamps, shallow lakes, and densely vegetated slow-moving waters with low oxygen content.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 12,
    color: 'The body is a brownish-silver base covered in a lace-like pattern of white "pearl" spots. A distinct black horizontal line runs from the mouth to the tail base. Males develop a vibrant orange-red throat and belly, especially during breeding, and have a pointed dorsal fin. Females remain duller with a more rounded dorsal fin.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 4, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 35,
      territories: 1,
    },
    
    bioloadMultiplier: 1.2,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Heavily planted tanks with floating plants are essential. They require dim lighting and plenty of hiding spots to feel secure. The presence of floating plants like Salvinia or Frogbit reduces skittishness and encourages natural behavior.',
    hardscape: ['Driftwood', 'Leaf litter', 'Dense vegetation'],
  },

  behavior: {
    tags: ['peaceful', 'shy', 'bubble_nester', 'labyrinth_fish', 'surface_dweller'],
    minGroupSize: 4,
    description: 'An exceptionally peaceful and somewhat timid species, ideal for a calm community tank. They spend much of their time in the upper water column. Males may spar gently during breeding but rarely cause damage. Being labyrinth fish, they need access to the surface to gulp air. They are easily intimidated by boisterous tankmates and will hide if kept with fast-moving or aggressive fish.',
    
    compatibility: {
      goodMates: ['Harlequin Rasboras', 'Corydoras', 'Kuhli Loaches', 'Tetras', 'Dwarf Shrimp', 'Other peaceful Gouramis (in large tanks)'],
      badMates: ['Bettas', 'Aggressive Cichlids', 'Fin nippers', 'Barbs', 'Fast-moving fish'],
      notes: 'Best kept with other gentle species. Do not house with Bettas due to potential aggression similarities. Males can be territorial towards each other in small tanks; keep one male with multiple females or in a spacious planted setup.',
      
      rules: [
        {
          type: 'requires',
          condition: 'air gap at water surface',
          reason: 'As a labyrinth fish, they must have access to the surface to breathe atmospheric air. Sealing the tank or filling it to the brim without an air gap can cause suffocation.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'dense surface cover (floating plants)',
          reason: 'They originate from shaded waters and feel exposed in bright, open tanks. Floating plants reduce stress and encourage natural behavior.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'mixing with active or aggressive fish',
          reason: 'Their long, delicate ventral fins and timid nature make them targets for fin nippers and bullying by active species.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '8-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 1,
      territorial: 3,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'evening'],
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
      'Access to surface air', 
      'Dense planting including floating plants', 
      'Very peaceful tankmates', 
      'Low flow',
    ],

    proTips: [
      "Maintain a good gap between the water surface and the lid. They will often gulp air from the surface.",
      "Males in breeding condition display a stunning deep red chest; this is the easiest way to sex them.",
      "They are prone to stress-related diseases if kept with boisterous fish; ensure tankmates are equally docile."
    ],

    commonMistakes: [
      "Keeping them in bright, bare tanks without floating plants leads to severe stress and loss of color.",
      "Housing them with fin nippers like Tiger Barbs results in torn ventral fins and infection.",
      "Filling the tank to the very top prevents them from accessing the atmospheric air they need."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'pellets', 'bloodworms', 'brine-shrimp'],
      supplements: ['spirulina', 'vegetables'],
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
      notes: 'Regular water changes are beneficial. They are sensitive to poor water conditions and the accumulation of organic waste. Keep the flow gentle.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'hang-on-back',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 8,
    commonDiseases: ['hole-in-head', 'ich', 'fin-rot', 'velvet'],
    sensitivities: ['Poor water quality', 'Bullying', 'Lack of surface access', 'Sharp objects'],
  },

  scientificContext: {
    wildHabitat: "Found in heavily vegetated, slow-moving bodies of water in Southeast Asia. These environments are often stained with tannins, dimly lit, and have low dissolved oxygen, which favored the evolution of their labyrinth organ.",
    sexualDimorphism: "Males are more colorful with a bright red or orange throat and belly, and a pointed dorsal fin. Females are larger, rounder, and have a duller coloration with a rounded dorsal fin.",
    variants: ['Wild-type Pearl', 'Golden Pearl', 'Platinum Pearl'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'Lower the water level and slightly raise the temperature to simulate the dry season shifting to the rainy season. Provide floating plants for the bubble nest.',
    fryCare: 'The male builds a bubble nest and guards the eggs. After hatching, the fry are very small and need infusoria or liquid fry food for the first few days. Remove the male once the fry are free-swimming.',
    notes: 'Breeding is straightforward in a dedicated tank. The male becomes very protective of the nest.',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'stress-from-fast-tankmates', cause: 'kept-with-active-or-nippy-fish', frequency: 0.30 },
      { issue: 'jumping', cause: 'no-lid-or-startled', frequency: 0.25 },
      { issue: 'malnutrition', cause: 'lack-of-varied-diet', frequency: 0.15 },
      { issue: 'disease', cause: 'poor-water-quality', frequency: 0.15 },
      { issue: 'temperature-shock', cause: 'sudden-changes', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};