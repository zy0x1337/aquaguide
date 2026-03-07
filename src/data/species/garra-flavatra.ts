import type { Species } from '../../types/species';

export const garraFlavatra: Species = {
  id: 'garra-flavatra',
  slug: 'garra-flavatra',
  imageUrl: '/images/species/garra-flavatra.jpg',

  imageCredit: {
    photographer: 'Marcin Adrian (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Prachtalgenfresser_(Panda_Garra,_Garra_flavatra)_by_Marcin_Adrian.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  
  funFact: "The Panda Garra, also known as the Clown Garra, gets its name from the distinctive dark bands across its body that resemble a panda or clown pattern. Unlike some other algae eaters, they are not strictly herbivorous and require a varied diet to thrive in captivity.",

  taxonomy: {
    scientificName: 'Garra flavatra',
    commonName: 'Panda Garra / Clown Garra',
    family: 'Cyprinidae',
    origin: 'Myanmar (Burma - Rakhine State)',
    region: 'Asia',
    biotope: 'Clear, fast-flowing hill streams with rocky substrates and high oxygen content.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 8,
    color: 'A distinctive pattern of dark brown to black vertical bands alternating with lighter orange-tan or yellowish areas. They have a specialized sucker mouth adapted for clinging to rocks in fast currents.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 22, max: 26, ideal: 24 },
    ph: { min: 6.5, max: 7.8, ideal: 7.2 },
    gh: { min: 6, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'high',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.85,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 1,
    },
    
    bioloadMultiplier: 0.8,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'They require a tank that mimics a flowing stream. Use robust plants like Anubias or Java Fern attached to hardscape. They will uproot delicate plants. Smooth river stones are essential for grazing.',
    hardscape: ['Smooth river stones', 'Biofilm covered rocks', 'Driftwood', 'Slate'],
  },

  behavior: {
    tags: ['active', 'territorial', 'algae_eater', 'jumper', 'peaceful'],
    minGroupSize: 3,
    description: 'An active and engaging fish that spends much of its time grazing on biofilm and algae. They can be territorial towards their own kind, especially in smaller tanks, but are generally peaceful towards other species. They are known to be jumpers when startled.',
    
    compatibility: {
      goodMates: ['Zebra Danio', 'Barbs', 'Hillstream Loach', 'Corydoras', 'Rasboras', 'Peaceful Gouramis'],
      badMates: ['Bettas', 'Guppies', 'Slow moving fish', 'Long finned fish', 'Large aggressive cichlids'],
      notes: 'They are best kept with other active species that appreciate similar water conditions. While they are good algae eaters, they should not be relied upon to clean a dirty tank.',
      
      rules: [
        {
          type: 'requires',
          condition: 'high oxygen and water flow',
          reason: 'They are rheophilic fish adapted to fast-flowing streams. Stagnant water leads to stress and susceptibility to disease.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'secure lid',
          reason: 'They are skilled jumpers and will leap from the tank if startled or during territorial chases.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'keeping single specimens',
          reason: 'While territorial, they are social fish. Keeping them alone can lead to shyness. Keeping a group allows natural social interaction, provided there is enough space.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '3-6',
      },
    },
    
    aggressionLevel: {
      intraspecific: 4,
      interspecific: 1,
      territorial: 5,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 3,
    },
    
    finNipping: {
      risk: 'low',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'High water flow', 
      'High oxygen levels', 
      'Secure lid', 
      'Varied diet including vegetable matter',
    ],

    proTips: [
      "Powerheads or wavemakers are highly recommended to provide the current they need.",
      "Although they eat algae, they must be fed a varied diet of sinking pellets, frozen foods, and vegetable matter.",
      "They often 'glass surf' when oxygen levels are too low or water flow is insufficient."
    ],

    commonMistakes: [
      "Keeping them in stagnant water leads to lethargy and disease.",
      "Relying solely on tank algae leads to malnutrition.",
      "Underestimating their jumping ability results in lost fish."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['algae-wafers', 'spirulina', 'bloodworms', 'brine-shrimp'],
      supplements: ['vegetables', 'daphnia'],
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
      vacuumingNeeded: true,
      notes: 'Regular water changes are essential to maintain high oxygen levels and water quality.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 75,
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
    lifespanYears: 6,
    commonDiseases: ['ich', 'velvet', 'bacterial infections'],
    sensitivities: ['Low oxygen', 'Stagnant water', 'High temperatures', 'Sharp substrate'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the Rakhine State in Myanmar. They inhabit clear, shallow, fast-flowing streams with rocky bottoms. These streams are well-oxygenated and rich in biofilm.",
    sexualDimorphism: "Males develop small breeding tubercles on the head and pectoral fins. Females are generally rounder in the belly, especially when gravid.",
    variants: ['Wild Type'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Breeding is rarely achieved in home aquaria. It requires specific water conditions and triggers that mimic seasonal changes in their native streams.',
    fryCare: 'Fry are tiny and require microscopic foods. Parents do not care for the eggs or fry.',
    notes: 'There are few documented cases of captive breeding. Most specimens are wild-caught.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'jumping', cause: 'startled-no-lid', frequency: 0.25 },
      { issue: 'oxygen-deprivation', cause: 'stagnant-water', frequency: 0.30 },
      { issue: 'starvation', cause: 'relied-on-algae-only', frequency: 0.15 },
      { issue: 'aggression', cause: 'too-many-males-in-small-tank', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 18, currency: 'EUR' },
    },
  },
};