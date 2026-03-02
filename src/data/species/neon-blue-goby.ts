import type { Species } from '../../types/species';

export const stiphodonAtropurpureus: Species = {
  id: 'goby-blue-neon',
  slug: 'neon-blue-goby',
  imageUrl: '/images/species/neon-blue-goby.jpg',

  imageCredit: {
    photographer: 'Natural History Museum of the University of Pisa',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Stiphodon_atropurpureus_Natural_History_Museum_University_of_Pisa.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  
  funFact: "The Neon Blue Goby is an amphidromous species, meaning larvae hatch in freshwater streams but are washed downstream to the ocean to develop before returning to fresh water as juveniles. This complex lifecycle makes home aquarium breeding impossible, as the fry require brackish or marine conditions to survive.",

  taxonomy: {
    scientificName: 'Stiphodon atropurpureus',
    commonName: 'Neon Blue Goby',
    family: 'Gobiidae',
    origin: 'Western Pacific (Japan, Philippines, Indonesia)',
    region: 'Asia',
    biotope: 'Clear, fast-flowing streams with rocky substrates and high oxygen content.',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 5,
    color: 'Males display a stunning metallic iridescent blue or emerald green sheen across the body. Females and non-dominant males are a drab brown or grey with faint vertical bands. They have a fused pelvic fin forming a suction disc.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 22, max: 26, ideal: 24 },
    ph: { min: 6.5, max: 7.8, ideal: 7.2 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'high',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.90,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 1,
    },
    
    bioloadMultiplier: 0.4,
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'Robust plants like Anubias or Microsorum can be attached to hardscape. They do not require heavy planting but need flat stones covered in biofilm.',
    hardscape: ['Smooth river stones', 'Biofilm covered rocks', 'Driftwood'],
  },

  behavior: {
    tags: ['territorial', 'bottom_dweller', 'jumper'],
    minGroupSize: 1,
    description: 'Males are territorial and will engage in lip-locking battles to defend their patch of algae. They spend most of their time grazing on biofilm from rocks. They are generally peaceful towards other species but can be aggressive towards other gobies, especially other males.',
    
    compatibility: {
      goodMates: ['Small peaceful tetras', 'Rasboras', 'Hillstream Loaches', 'Corydoras', 'Amano Shrimp'],
      badMates: ['Other male gobies', 'Large aggressive fish', 'Herbivorous competitors'],
      notes: 'Best kept in a species-specific setup or with peaceful tankmates that do not compete for surface algae. One male per tank is recommended unless the tank is large.',
      
      rules: [
        {
          type: 'requires',
          condition: 'mature tank with biofilm',
          reason: 'They are specialized grazers that rely on aufwuchs (biofilm and algae). In sterile tanks, they often starve to death.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'high oxygen levels',
          reason: 'They inhabit fast-flowing streams in the wild and are sensitive to low oxygen environments.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'keeping multiple males',
          reason: 'Males are highly territorial. In tanks under 90 liters, keeping more than one male often leads to the death of the subordinate.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '1-3',
      },
    },
    
    aggressionLevel: {
      intraspecific: 7,
      interspecific: 2,
      territorial: 8,
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
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Mature tank with biofilm', 
      'High oxygen and flow', 
      'Algae or vegetable supplements', 
      'Secure lid',
    ],

    proTips: [
      "Only introduce them to a tank that has been running for several months with visible algae growth.",
      "Supplement their diet with blanched vegetables like spinach or zucchini if natural algae runs low.",
      "Powerheads or wavemakers are highly recommended to simulate stream flow."
    ],

    commonMistakes: [
      "Adding them to new tanks results in starvation.",
      "Keeping them in stagnant water causes oxygen stress.",
      "Housing multiple males in small tanks leads to severe aggression."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['aufwuchs', 'flakes', 'vegetables', 'spirulina'],
      supplements: ['bloodworms', 'daphnia'],
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
      notes: 'Maintain high water quality and oxygen levels. Avoid scrubbing all the algae off the rocks, as this is their food source.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
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
    lifespanYears: 5,
    commonDiseases: ['ich', 'velvet', 'starvation'],
    sensitivities: ['Low oxygen', 'Lack of algae', 'High temperatures'],
  },

  scientificContext: {
    wildHabitat: "Endemic to fast-flowing streams in the Western Pacific. They use their fused pelvic fins to cling to rocks in strong currents. They are amphidromous, migrating to the sea during their larval stage.",
    sexualDimorphism: "Males are brilliantly colored in iridescent blue or green. Females are a dull brown or grey with two faint black bands on the tail fin.",
    variants: ['Stiphodon atropurpureus (Standard)', 'Stiphodon semoni (similar species)'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'impossible',
    trigger: 'Spawning occurs in fresh water, but larvae require brackish or marine water to develop.',
    fryCare: 'Fry are swept downstream to the ocean. There are no successful reports of raising fry in captivity due to the complex amphidromous lifecycle.',
    notes: 'Breeding in the home aquarium is not feasible.',
  },
  
  experienceData: {
    successRate: 0.50,
    survivalRate: 0.45,
    
    commonFailures: [
      { issue: 'starvation', cause: 'no-biofilm-or-algae-in-new-tank', frequency: 0.50 },
      { issue: 'hypoxia', cause: 'low-oxygen-stagnant-water', frequency: 0.20 },
      { issue: 'aggression', cause: 'multiple-males-in-small-tank', frequency: 0.15 },
      { issue: 'jumping', cause: 'startled-no-lid', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 18, currency: 'EUR' },
    },
  },
};