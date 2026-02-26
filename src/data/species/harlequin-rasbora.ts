import type { Species } from '../../types/species';

export const harlequinRasbora: Species = {
  id: 'rasbora-001',
  slug: 'harlequin-rasbora',
  imageUrl: '/images/species/harlequin-rasbora.jpg',
  
  funFact: "Unlike most rasboras, the Harlequin Rasbora spawns on the underside of broad leaves, flipping upside down in a unique courtship ritual to deposit its eggs.",

  taxonomy: {
    scientificName: 'Trigonostigma heteromorpha',
    commonName: 'Harlequin Rasbora',
    family: 'Cyprinidae',
    origin: 'Southeast Asia (Thailand, Malaysia, Singapore, Sumatra)',
    region: 'Asia',
    biotope: 'Slow-moving blackwater peat swamps and forest streams with dense vegetation and tannin stained water.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4.5,
    color: 'A metallic copper orange body contrasts sharply with a distinctive triangular black patch covering the rear half. Females typically possess a larger, more rounded body shape compared to the slimmer males.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    gh: { min: 2, max: 12 },
    kh: { min: 1, max: 6 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.5,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'These fish feel most secure in densely planted tanks that mimic the shaded protection of their native peat swamps. Broad leaved plants like Java Fern are essential if breeding is desired.',
    hardscape: ['Driftwood', 'Leaf litter', 'Smooth river stones'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'active'],
    minGroupSize: 8,
    description: 'These peaceful schooling fish are a classic choice for the community aquarium, known for their tight formation swimming. They spend their day actively exploring the middle water layers, weaving gracefully through plants. When kept in large groups, they display a mesmerizing synchronized swimming pattern that creates a stunning visual display. Their distinctive black triangular marking serves as a visual cue, fading when the fish is stressed or frightened.',
    
    compatibility: {
      goodMates: ['Other peaceful rasboras', 'Small tetras', 'Corydoras', 'Kuhli Loaches', 'Otocinclus', 'Gouramis'],
      badMates: ['Aggressive fish', 'Large cichlids', 'Fin-nippers'],
      notes: 'They are the gold standard for community tanks and get along with virtually any peaceful species.',
      
      rules: [
        {
          type: 'requires',
          condition: 'groups of 8-12+ fish',
          reason: 'They are highly social and become timid and stressed in smaller numbers.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'densely planted tank',
          reason: 'They feel exposed in bare tanks and will hide constantly without vegetation.',
          severity: 'high',
        },
        {
          type: 'warning',
          condition: 'soft acidic water (pH 6.0-7.0) with tannins',
          reason: 'While they adapt to harder water, their colors are most vibrant in blackwater conditions.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-12,
        midwater: '8-15',
        bottom: '8-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 8,
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
      'Groups of 8-12+', 
      'Densely planted tank', 
      'Dark substrate', 
      'Soft acidic water preferred',
    ],

    proTips: [
      "A dark substrate and tannin stained water significantly enhance their metallic copper coloration.",
      "Keep them in groups of eight or more to encourage natural schooling behavior and reduce shyness."
    ],

    commonMistakes: [
      "Keeping them in small groups results in shy fish that lack confidence and color.",
      "Bright lighting without floating plants causes stress and washes out their coloration."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'crushed-flakes', 'brine-shrimp', 'daphnia'],
      supplements: ['bloodworms', 'spirulina'],
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
      vacuumingNeeded: false,
      notes: 'They prefer stable water conditions with low nitrates, so regular maintenance is beneficial.',
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
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['ich', 'velvet', 'fin-rot', 'internal-parasites'],
    sensitivities: ['Hard alkaline water', 'Bright lighting', 'Sparse planting', 'Small groups', 'Parameter swings'],
  },

  scientificContext: {
    wildHabitat: "Native to Southeast Asia, this species inhabits slow-moving, tannin-stained peat swamps and forest streams. The water is typically soft and acidic, rich in decomposing plant matter which gives it a characteristic tea color. These densely vegetated environments provide ample cover and foraging grounds for insect larvae. While common in the aquarium trade, some wild populations face pressure from habitat destruction.",
    sexualDimorphism: "Females are noticeably rounder and larger than males, particularly when carrying eggs. Males are slimmer and often display a slightly more intense copper coloration.",
    variants: ['Standard Harlequin', 'Glowlight Rasbora', 'Lambchop Rasbora'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Condition the group with live or frozen foods and provide broad-leaved plants for them to spawn underneath.',
    fryCare: 'The tiny fry require infusoria or liquid fry food for the first few days before they can accept newly hatched brine shrimp. Maintain pristine water quality and low light levels to ensure high survival rates during the early stages.',
    notes: 'Spawning involves a unique upside-down position under a leaf, making them fascinating to breed.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'faded-colors-stress', cause: 'small-groups-under-8-or-sparse-planting', frequency: 0.30 },
      { issue: 'pale-washed-out-colors', cause: 'light-substrate-or-bright-lighting', frequency: 0.25 },
      { issue: 'chronic-stress-hiding', cause: 'hard-alkaline-water-or-aggressive-tankmates', frequency: 0.18 },
      { issue: 'timid-behavior', cause: 'insufficient-planting-or-floating-cover', frequency: 0.15 },
      { issue: 'outcompeted-at-feeding', cause: 'fast-boisterous-tankmates', frequency: 0.12 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 200, currency: 'EUR' },
      monthly: { min: 12, max: 30, currency: 'EUR' },
    },
  },
};