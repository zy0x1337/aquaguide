import type { Species } from '../../types/species';

export const clownPleco: Species = {
  id: 'clown-pleco',
  slug: 'clown-pleco',
  imageUrl: '/images/species/clown-pleco.jpg',
  
  funFact: "The Clown Pleco is a specialized wood-eater that requires driftwood not just for shelter, but as an essential part of its daily diet to survive.",

  taxonomy: {
    scientificName: 'Panaqolus maccus',
    commonName: 'Clown Pleco',
    family: 'Loricariidae',
    origin: 'Venezuela, Colombia (Orinoco and Apure River basins)',
    region: 'South America',
    biotope: 'Fast-flowing rivers and streams with abundant submerged driftwood and rocky substrates.',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 10,
    color: 'A dark brown to black body is patterned with striking orange or yellow vertical bands. Males develop distinct bristle-like odontodes on their pectoral fins and head as they mature.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 23, max: 28, ideal: 26 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 6, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 1,
    },
    
    bioloadMultiplier: 0.7,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Hardy plants like Anubias and Java Fern are ideal as they can be attached to hardscape. Ample driftwood is strictly required for dietary needs.',
    hardscape: ['Driftwood', 'Caves', 'Smooth river stones', 'Terracotta pipes'],
  },

  behavior: {
    tags: ['peaceful', 'nocturnal', 'algae_eater', 'shy', 'bottom_dweller'],
    minGroupSize: 1,
    description: 'A shy and nocturnal species, the Clown Pleco spends the daylight hours hidden inside crevices or under driftwood. It emerges at night to rasp on wood and forage for algae, often audible as a faint scraping sound. Males can be territorial toward one another, but they are generally peaceful toward other tank inhabitants. Providing adequate cover is essential to coax this reclusive fish out into the open.',
    
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Gouramis', 'Corydoras', 'Peaceful Cichlids'],
      badMates: ['Large aggressive cichlids', 'Other Clown Plecos', 'Pufferfish'],
      notes: 'Ideally kept as a single specimen per tank to avoid territorial aggression between males.',
      
      rules: [
        {
          type: 'requires',
          condition: 'driftwood in tank',
          reason: 'This species is a xylivore that derives essential nutrients from rasping on wood.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'multiple clown plecos in small tanks',
          reason: 'Males are highly territorial and will fight aggressively for prime cave locations.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'caves and hiding spots',
          reason: 'They are shy by nature and require secure hiding places to feel safe during the day.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
        midwater: '15-30',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 5,
      interspecific: 0,
      territorial: 6,
    },
    
    activity: {
      level: 'low',
      peakTimes: ['night'],
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
    difficulty: 'beginner',
    diet: 'herbivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Driftwood mandatory', 
      'Caves for hiding', 
      'Moderate water flow',
      'Solitary housing',
      'Night feeding',
    ],

    proTips: [
      "Unlike the Common Pleco, this species stays small and is perfect for medium-sized aquariums.",
      "Driftwood is not just decoration; it is a necessary dietary component that aids their digestion.",
      "Feed sinking wafers and vegetables after the tank lights turn off to ensure they get their share."
    ],

    commonMistakes: [
      "Failing to provide driftwood leads to malnutrition and eventual death despite other foods being offered.",
      "Keeping multiple males in a small tank results in violent territorial disputes.",
      "Expecting them to clean the tank completely leads to underfeeding as they are not primarily algae eaters."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['algae-wafers', 'vegetables', 'spirulina'],
      supplements: ['blanched-zucchini'],
      vegetarian: true,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Regular water changes are necessary to manage the significant waste produced by their wood-heavy diet.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 12,
    commonDiseases: ['ich', 'fin-rot', 'bloat', 'parasites', 'malnutrition-from-no-wood'],
    sensitivities: ['Lack of wood', 'High nitrates', 'Low oxygen', 'Copper medications'],
  },

  scientificContext: {
    wildHabitat: "Native to the Orinoco and Apure River basins in Venezuela and Colombia, this species inhabits fast-flowing, oxygen-rich waters. These environments are typically littered with submerged wood and roots, which the fish rasp upon constantly. They have evolved specialized teeth and a digestive system capable of breaking down lignin, allowing them to exploit a food source unavailable to most other fish. While currently stable in the wild, habitat alteration is a potential concern.",
    sexualDimorphism: "Males develop pronounced odontodes, or bristle-like spines, along their pectoral fins and snout, which are absent or minimal in females. Females tend to have a rounder body shape, particularly when viewed from above.",
    variants: ['L104 (Standard)', 'L162 (Variant)'],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'medium',
    trigger: 'Spawning is often initiated by a large water change with slightly cooler water and a protein-rich conditioning diet. Males will claim a suitable cave and entice a female inside to lay her eggs.',
    fryCare: 'The male guards the eggs within the cave and fans them until they hatch. The fry are born with yolk sacs that sustain them for about a week. Once free-swimming, they should be fed a diet of crushed algae wafers and decaying wood. Providing soft wood for grazing is critical for their development. Growth is slow, and they require pristine water conditions.',
    notes: 'Breeding is achievable in home aquaria but requires specific cave dimensions and strict separation of males.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'starvation-death-despite-feeding', cause: 'no-driftwood-in-tank', frequency: 0.40 },
      { issue: 'fighting-injuries-death', cause: 'multiple-males-in-small-tank', frequency: 0.20 },
      { issue: 'chronic-stress-hiding', cause: 'no-caves-or-bright-lighting', frequency: 0.15 },
      { issue: 'disappears-never-seen', cause: 'nocturnal-behavior-normal', frequency: 0.12 },
      { issue: 'poor-health', cause: 'high-nitrates-or-low-oxygen', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};