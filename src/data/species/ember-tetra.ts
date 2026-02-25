import type { Species } from '../../types/species';

export const emberTetra: Species = {
  id: 'ember-tetra',
  slug: 'ember-tetra',
  imageUrl: '/images/species/ember-tetra.jpg',
  
  funFact: "Discovered in 1987, the Ember Tetra is named for its intense orange glow that resembles dying embers, especially when viewed against a dark substrate in a planted aquarium.",

  imageCredit: {
    photographer: 'Klaus Rudloff (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyphessobrycon_amandae_A.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },

  taxonomy: {
    scientificName: 'Hyphessobrycon amandae',
    commonName: 'Ember Tetra',
    family: 'Characidae',
    origin: 'Brazil (Araguaia River basin, Mato Grosso - blackwater tributaries)',
    region: 'South America',
    biotope: 'Slow-moving blackwater streams with dense vegetation and tannin-stained water.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2,
    color: 'Exhibits a vibrant orange to reddish body color that appears to glow under dim lighting. Males are generally more colorful and slender than the rounder females.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    gh: { min: 3, max: 12 },
    kh: { min: 1, max: 6 },
    flow: 'low',
    substrate: 'dark-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.3,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense planting is essential to make these shy fish feel secure enough to swim in the open. Floating plants help diffuse bright lighting, which brings out their signature glowing coloration.',
    hardscape: ['Driftwood', 'Leaf litter', 'Smooth stones'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'nano', 'colorful', 'active'],
    minGroupSize: 10,
    description: 'These small tetras are peaceful shoaling fish that spend their time in the middle and upper layers of the water. They can be quite timid, so keeping them in groups of ten or more is essential to encourage natural activity and confidence. A well planted tank with plenty of cover will make them feel secure and display their best colors. They are active swimmers but appreciate calm water to drift through the vegetation.',
    
    compatibility: {
      goodMates: ['Chili Rasboras', 'Pygmy Corydoras', 'Otocinclus', 'Cherry Shrimp', 'Kuhli Loaches'],
      badMates: ['Bettas', 'Angelfish', 'Larger tetras', 'Fast feeders'],
      notes: 'Best kept in a species only setup or with other peaceful nano fish to ensure they get enough food.',
      
      rules: [
        {
          type: 'requires',
          condition: 'groups of 10-20+ fish',
          reason: 'Small groups lead to shyness and stress, while larger groups encourage natural schooling and vibrant coloration.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'very densely planted tank with floating plants',
          reason: 'Without dense cover, these shy fish will hide constantly and lose their coloration.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'dark substrate (black sand, dark gravel)',
          reason: 'A dark background provides the contrast needed to make their orange coloration truly stand out.',
          severity: 'medium',
        },
        {
          type: 'warning',
          condition: 'dim lighting or floating plants',
          reason: 'Bright lighting washes out their colors and causes stress.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 0-8,
        midwater: '10-20',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
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
      maxMalesPerTank: 10,
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
      'Groups of 10-20+', 
      'Dense planting', 
      'Dark substrate', 
      'Dim lighting', 
      'Soft acidic water',
      'Tiny foods',
    ],

    proTips: [
      "Maintaining a dark substrate and tannin-stained water significantly intensifies their fiery orange color.",
      "Feed very small foods like micro-pellets or crushed flakes, as their mouths are quite tiny."
    ],

    commonMistakes: [
      "Keeping them in small groups results in shy fish that hide behind equipment.",
      "Bright lighting without floating plants washes out their vibrant colors.",
      "Using a light-colored substrate makes them appear pale and washed out."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'crushed-flakes', 'brine-shrimp', 'daphnia'],
      supplements: ['spirulina', 'cyclops'],
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
      vacuumingNeeded: false,
      notes: 'Keep the water clean and stable, as they are sensitive to high nitrate levels and sudden parameter shifts.',
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
    commonDiseases: ['ich', 'velvet', 'fin-rot', 'internal-parasites', 'fungal-infections'],
    sensitivities: ['Sudden parameter changes', 'High nitrates', 'Bright lighting', 'Sparse planting', 'Small groups'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the Araguaia River basin in Brazil, this species inhabits shallow, slow-moving blackwater streams. The water is typically stained dark by tannins from decaying organic matter, creating soft and acidic conditions. These habitats are heavily vegetated, providing shelter and foraging grounds for the fish. They feed on small invertebrates and zooplankton among the submerged roots and leaves.",
    sexualDimorphism: "Males are more intensely colored and display a slimmer body shape compared to females. Females are noticeably rounder, especially when carrying eggs, and may have slightly duller coloration. The differences are subtle and easiest to see when the fish are fully mature and in breeding condition.",
    variants: ['Standard Ember Tetra'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Condition the group with high-quality live or frozen foods and maintain soft, acidic water. Spawning often occurs in the early morning, with females scattering eggs among fine-leaved plants.',
    fryCare: 'The tiny eggs are scattered among plants and are prone to being eaten by the parents, so dense moss or a separate rearing tank is recommended. Fry hatch within 24 to 36 hours and are incredibly small, requiring infusoria or green water for the first few days. As they grow, they can accept newly hatched brine shrimp. Frequent small water changes are essential to maintain water quality for the developing fry.',
    notes: 'They are continuous spawners but offer no parental care, often consuming their own eggs if not separated.',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'pale-washed-out-colors', cause: 'light-substrate-or-bright-lighting', frequency: 0.35 },
      { issue: 'constant-hiding-stress', cause: 'small-groups-under-10-or-sparse-planting', frequency: 0.25 },
      { issue: 'intimidation-by-tankmates', cause: 'mixed-with-larger-or-faster-fish', frequency: 0.18 },
      { issue: 'starvation', cause: 'food-too-large-or-outcompeted', frequency: 0.12 },
      { issue: 'stress-from-bright-lighting', cause: 'no-floating-plants-or-shade', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 150, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};