import type { Species } from '../../types/species';

export const goldSpotPleco: Species = {
  id: 'pleco-002',
  slug: 'gold-spot-pleco',
  imageUrl: '/images/species/gold-spot-pleco.jpg',
  
  funFact: "Despite their name, these fish do not eat fish waste; they are specialized algae grazers that will actually starve if the aquarium is too clean.",

  imageCredit: {
    photographer: 'Klaus Rudloff (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pterygoplichthys_gibbiceps.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  
  taxonomy: {
    scientificName: 'Pterygoplichthys gibbiceps',
    commonName: 'Gold Spot Pleco',
    family: 'Loricariidae',
    origin: 'Brazil (Tocantins and Araguaia River basins)',
    region: 'South America',
    biotope: 'Fast-flowing rivers with rocky substrates, submerged wood, and high oxygen levels.',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 35,
    color: 'Dark brown body with distinct gold spots covering the head and fins. The dorsal fin is tall and sail-like.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 550,
    tempC: { min: 23, max: 28, ideal: 26 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.90,
    },
    
    spaceNeeds: {
      horizontalCM: 150,
      verticalCM: 50,
      territories: 1,
    },
    
    bioloadMultiplier: 3.0,
  },

  habitat: {
    planting: 'none',
    plantingNotes: 'Plants are generally destroyed by grazing. Attach tough species like Anubias to Anubias to hardscape to provide limited grazing surfaces. Floating plants can help diffuse lighting.',
    hardscape: ['Large driftwood', 'Smooth river stones', 'Slate caves'],
  },

  behavior: {
    tags: ['peaceful', 'nocturnal', 'algae_eater', 'territorial', 'bottom_dweller'],
    minGroupSize: 1,
    description: 'A large, impressive pleco that spends its day grazing on algae and biofilm. It is generally peaceful but can be territorial toward other plecos. It requires plenty of hiding spots and driftwood to rasp on.',
    
    compatibility: {
      goodMates: ['Large Characins', 'Geophagus', 'Other large peaceful cichlids', 'Silver Dollars', 'Headstanders'],
      badMates: ['Small fish', 'Shrimp', 'Slow-moving long-finned fish', 'Other plecos (territorial)'],
      notes: 'Best kept in a large South American biotope setup. Do not keep with fish small enough to be eaten.',
      
      rules: [
        {
          type: 'requires',
          condition: 'driftwood mandatory',
          reason: 'Essential for digestion. The wood fibers aid in their digestive process.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'other plecos',
          reason: 'Males are territorial and will fight for prime grazing spots.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '10-20',
        bottom: '1',
      },
    },
    
    aggressionLevel: {
      intraspecific: 6,
      interspecific: 2,
      territorial: 7,
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
    difficulty: 'expert',
    diet: 'herbivore',
    effort: 'high',
    cost: 'high',
    specialRequirements: [
      'Huge tank (550L+ minimum)',
      'Massive filtration',
      'Driftwood mandatory',
      'High oxygen levels',
    ],

    proTips: [
      "This is not a beginner fish. Ensure you have a large tank and powerful filtration before buying.",
      "Feed plenty of vegetables like blanched zucchini and sweet potato to supplement their algae diet.",
    ],

    commonMistakes: [
      "Buying for a small tank leads to stunting and water quality issues.",
      "Expecting them to clean the tank walls of addition to algae control; they have a large bioload.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['algae-wafers', 'vegetables'],
      supplements: ['spirulina', 'pellets'],
      vegetarian: true,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 50,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Produce massive waste. Weekly large water changes and strong filtration are non-negotiable.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 300,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'strong',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 15,
    commonDiseases: ['bloat', 'ich', 'hole-in-head'],
    sensitivities: ['Poor water quality', 'Low oxygen', 'Lack of wood', 'Small tanks'],
  },

  scientificContext: {
    wildHabitat: "Inhabits fast-flowing, oxygen-rich rivers in the Tocantins and Araguaia basins. Found among rocky substrates and submerged wood. Seasonal flooding influences their habitat. They are not currently evaluated by the IUCN Red List, but habitat degradation is a local concern.",
    sexualDimorphism: "Males develop bristled odontodes on the pectoral fins and cheek plates, Females are larger and rounder.",
    variants: ['L001 (Gold Spot)', 'L022 (Marbled)'],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'expert',
    trigger: 'Breeding in home aquaria is exceptionally rare. Requires simulation of seasonal changes and deep burrows in mud banks, which is impossible to standard glass tanks.',
    fryCare: 'In the wild, males guard burrow entrances. Fry would need immense space and specific conditions. Not a viable breeding project for home aquaria.',
    notes: 'Virtually all specimens are wild-caught or bred in outdoor ponds. Do not attempt breeding without expert setup.',
  },
  
  experienceData: {
    successRate: 0.30,
    survivalRate: 0.35,
    
    commonFailures: [
      { issue: 'outgrew-tank-stunted-growth-death', cause: 'bought-juvenile-without-adult-tank-plan', frequency: 0.50 },
      { issue: 'digestive-failure-bloating-death', cause: 'no-driftwood-in-tank', frequency: 0.20 },
      { issue: 'nitrate-poisoning-poor-health', cause: 'inadequate-filtration-for-massive-waste', frequency: 0.15 },
      { issue: 'fighting-injuries-death', cause: 'multiple-plecos-in-small-tank', frequency: 0.10 },
      { issue: 'starvation', cause: 'insufficient-vegetable-feeding', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 800, max: 2500, currency: 'EUR' },
      monthly: { min: 40, max: 80, currency: 'EUR' },
    },
  },
};