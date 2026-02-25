import type { Species } from '../../types/species';

export const africanDwarfFrog: Species = {
  id: 'african-dwarf-frog',
  slug: 'african-dwarf-frog',
  imageUrl: '/images/species/african-dwarf-frog.jpg',
  
  funFact: "As one of the few entirely aquatic frog species, they possess the miraculous ability to regrow lost limbs, heart tissue, and even parts of their brain.",

  taxonomy: {
    scientificName: 'Hymenochirus boettgeri',
    commonName: 'African Dwarf Frog',
    family: 'Pipidae',
    origin: 'Central Africa (Congo Basin, Cameroon, Nigeria)',
    region: 'Africa',
    biotope: 'Shallow, stagnant rainforest pools and slow-moving creeks.',
  },

  visuals: {
    iconShape: 'frog',
    adultSizeCM: 5,
    color: 'Olive to grey bodies with black mottling and a cream-colored belly. A blonde variant displays peachy-tan skin with lighter markings.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.5, max: 7.8, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    kh: { min: 3, max: 12 },
    flow: 'low',
    substrate: 'sand',
    swimmingZone: {
      primary: 'bottom',
      secondary: 'surface',
      preference: 0.70,
    },
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 25,
      territories: 0,
    },
    bioloadMultiplier: 0.4,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Broad-leaved plants like Anubias and Java Fern serve as essential resting platforms near the water surface. Floating plants provide necessary shade and security for these poor swimmers.',
    hardscape: ['Smooth river stones', 'Driftwood', 'Terracotta shelters', 'Floating platforms'],
  },

  behavior: {
    tags: ['peaceful', 'social', 'nocturnal'],
    minGroupSize: 2,
    description: 'These amphibians are nearly blind and rely entirely on sensitive fingertips and a keen sense of smell to locate food in the murky depths. They are notoriously clumsy hunters, often bumping into prey before realizing it is right in front of them. A unique behavior known as the zen float sees them hanging motionless mid-water with limbs outstretched, a resting posture often mistaken for illness by new keepers. While generally peaceful and social, they are best kept in species-only groups where they can forage without competition from faster fish. Activity peaks at dawn and dusk when they actively explore the tank bottom for morsels.',

    compatibility: {
      goodMates: [
        'Other African Dwarf Frogs', 
        'Nerite Snails', 
        'Mystery Snails', 
      ],
      badMates: [
        'Community fish', 
        'African Clawed Frogs', 
        'Crayfish', 
        'Goldfish', 
        'Cichlids', 
        'Bettas', 
      ],
      notes: 'A species-only tank is the best environment to ensure they receive adequate food without competition.',
      
      rules: [
        {
          type: 'avoid',
          target: 'most community fish',
          reason: 'Fast fish consume all food before the blind and slow frogs can locate it.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'African Clawed Frogs (Xenopus laevis)',
          reason: 'African Clawed Frogs are larger predators that will eat Dwarf Frogs.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'low flow / calm water',
          reason: 'Strong currents exhaust these weak swimmers and prevent them from surfacing to breathe.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'target feeding required',
          reason: 'Their poor eyesight requires food to be delivered directly to their mouth area.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'shallow tank depth < 40cm',
          reason: 'They must surface frequently to breathe and deep water causes exhaustion.',
          severity: 'high',
        },
      ],
      idealTankmates: {
        surface: 0,
        midwater: '0-10',
        bottom: '2-6',
      },
    },

    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },

    activity: {
      level: 'low',
      peakTimes: ['morning', 'night'],
      nocturnal: true,
    },

    socialStructure: {
      type: 'shoal',
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
    cost: 'low',
    
    specialRequirements: [
      'Target feeding with tweezers',
      'Sponge filter for gentle flow',
      'Tank depth under 40cm',
      'Tight-fitting lid',
      'Species-only setup',
    ],
    
    proTips: [
      "Use a turkey baster to deliver food directly in front of the frog to ensure it eats.",
      "Verify the frog has webbing on all four feet to avoid buying the larger African Clawed Frog.",
      "Avoid bloodworms as a staple food as they can cause bloat; prefer brine shrimp or daphnia.",
    ],
    
    commonMistakes: [
      "Keeping them with fish causes starvation because the frogs cannot compete for food.",
      "Deep tanks force them to swim too far for air, leading to exhaustion.",
      "Gravel substrates cause impaction if swallowed during feeding.",
    ],
    
    feeding: {
      frequency: 'every-other-day',
      primaryFoods: ['brine-shrimp', 'daphnia', 'tubifex'],
      supplements: ['pellets', 'bloodworms'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Use a dechlorinator for every water change because amphibians absorb chemicals directly through their skin.',
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
    lifespanYears: 6,
    commonDiseases: ['dropsy-bloat', 'bacterial-infections', 'fungal-infections', 'chytridiomycosis', 'skin-lesions'],
    sensitivities: [
      'Starvation from competition', 
      'Copper-based medications', 
      'Salt', 
      'Chlorine', 
      'Strong vibrations'
    ],
  },

  scientificContext: {
    wildHabitat: "Native to the Congo River basin in Central Africa, this species populates shallow, stagnant pools within rainforests. These waters are typically tannin-stained, warm, and low in oxygen, lined with thick mud and decomposing leaf litter. They thrive in calm environments where they scavenge along the bottom, surfacing frequently to breathe. While currently listed as Least Concern by the IUCN, habitat degradation poses a potential future threat to local populations.",
    sexualDimorphism: "Males can be identified by a small, white or pinkish post-axillary gland visible behind each front leg, which females lack. Females grow larger and develop a rounder, fuller body shape, particularly when gravid with eggs. Additionally, males are the ones producing the audible buzzing song during courtship.",
    variants: [
      'Wild-type olive grey', 
      'Blonde (leucistic) tan'
    ],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: "Breeding is often triggered by simulating a rainy season through environmental changes. Lower the water level gradually by thirty to fifty percent and slightly raise the temperature to 27-28°C. Accompanied by heavy feeding of live foods, this shift encourages males to begin their courtship singing.",
    fryCare: "The tiny tadpoles are delicate filter feeders that require microscopic food like infusoria or commercial liquid fry food multiple times a day. They are sensitive to water quality and light, so keep them in shallow, shaded containers with frequent, small water changes. Metamorphosis occurs over six to eight weeks, during which legs develop and the tail is absorbed. Survival rates are low without diligent care, as the fry are prone to starvation and water parameter shocks.",
    notes: 'Spawning is rare in home aquaria and usually follows a simulated rainy season.',
  },

  experienceData: {
    successRate: 0.55,
    survivalRate: 0.50,
    commonFailures: [
      { issue: 'starvation-death', cause: 'kept-with-fish-outcompeted-for-food', frequency: 0.45 },
      { issue: 'drowning-exhaustion', cause: 'deep-tank-or-strong-current', frequency: 0.18 },
      { issue: 'escape-and-desiccation', cause: 'lid-with-holes-or-gaps', frequency: 0.12 },
      { issue: 'dropsy-bloat', cause: 'poor-water-quality-or-overfeeding', frequency: 0.10 },
      { issue: 'bought-african-clawed-frog-by-mistake', cause: 'store-mislabeling', frequency: 0.08 },
    ],
    estimatedCosts: {
      initial: { min: 30, max: 80, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};