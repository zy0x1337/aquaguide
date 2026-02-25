import type { Species } from '../../types/species';

export const discus: Species = {
  id: 'cichlid-008',
  slug: 'discus',
  imageUrl: '/images/species/discus.jpg',
  
  funFact: "Known as the King of the Aquarium, Discus parents produce a special skin mucus that their fry feed on for the first few weeks of life.",

  taxonomy: {
    scientificName: 'Symphysodon spp.',
    commonName: 'Discus',
    family: 'Cichlidae',
    origin: 'South America (Amazon River Basin - Brazil, Peru, Colombia, Venezuela)',
    region: 'South America',
    biotope: 'Slow-moving blackwater rivers and flooded forests with extremely soft, acidic water and dense submerged wood.',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 20,
    color: 'These laterally compressed fish display a kaleidoscope of patterns, from wild-type browns and blues to solid reds and turquoises in cultivated strains. They adjust their color intensity based on mood and environment.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 280,
    tempC: { min: 28, max: 32, ideal: 30 },
    ph: { min: 5.0, max: 7.0, ideal: 6.0 },
    gh: { min: 1, max: 8 },
    kh: { min: 0, max: 4 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'all',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 120,
      verticalCM: 50,
      territories: 1,
    },
    
    bioloadMultiplier: 1.5,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Large, broad-leaved plants such as Amazon Swords provide necessary vertical shelter and potential spawning sites. High water temperatures limit plant choices to hardy species like Anubias and Java Fern attached to hardscape.',
    hardscape: ['Massive vertical driftwood', 'Smooth river rocks', 'Indian Almond Leaves', 'Breeding cones'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'midwater', 'shy', 'diurnal', 'colorful'],
    minGroupSize: 6,
    description: 'Discus are peaceful but shy cichlids that form complex social hierarchies within a group. They are relatively inactive, often hovering in midwater or near cover, but become skittish if the environment is too open or bright. A group of at least six is essential to spread aggression and allow natural schooling behavior to develop. These fish require exceptionally stable water parameters and are sensitive to sudden changes in chemistry or temperature.',
    
    compatibility: {
      goodMates: ['Cardinal Tetras', 'Rummynose Tetras', 'Corydoras Sterbai', 'Otocinclus', 'Rams'],
      badMates: ['Aggressive cichlids', 'Fast feeders', 'Fin-nippers', 'Angelfish'],
      notes: 'Tankmates must tolerate the high temperatures and pristine water conditions required by Discus. Avoid fast-swimming fish that will outcompete them for food.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group size 6+ Discus',
          reason: 'They are social shoaling fish that suffer from stress and aggression if kept in small numbers.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'pristine water quality (ammonia/nitrite 0, nitrate <10ppm)',
          reason: 'They are extremely sensitive to nitrogenous waste and require rigorous maintenance schedules.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'high temperature 28-30°C',
          reason: 'They require warmer water than most tropical community fish to maintain a healthy immune system.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'angelfish',
          reason: 'Angelfish can carry pathogens that are harmless to themselves but fatal to Discus.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'fast aggressive feeders',
          reason: 'Discus are slow eaters and will starve if housed with fish that consume food rapidly.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'soft acidic water (pH 5.5-6.5, GH <6)',
          reason: 'Hard, alkaline water causes chronic stress and makes them susceptible to disease.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'beginners',
          reason: 'This species requires expert-level care, significant time investment, and a substantial budget.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '30-50',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 1,
      territorial: 4,
    },
    
    activity: {
      level: 'low',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
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
    difficulty: 'expert',
    diet: 'carnivore',
    effort: 'high',
    cost: 'high',
    specialRequirements: [
      'Pristine water quality', 
      'Soft acidic blackwater', 
      'High stable temperature',
      'Groups of 6+',
      'Frequent massive water changes',
      'Specialized diet',
      'Quarantine protocol',
      'Expensive setup',
    ],

    proTips: [
      "Perform large, frequent water changes to keep nitrates below 10 ppm, as this is the cornerstone of successful Discus keeping.",
      "House them in a species-only tank to ensure the slow-moving fish receive enough food without competition.",
      "Invest in a high-quality reverse osmosis system to achieve the necessary water softness and purity."
    ],

    commonMistakes: [
      "Keeping them in groups smaller than six leads to bullying and chronic stress.",
      "Introducing them to a tank that has not been fully cycled or established will likely result in loss due to their sensitivity to ammonia.",
      "Using standard tap water without adjusting hardness and pH can cause long-term health issues."
    ],
    
    feeding: {
      frequency: 'three-times-daily',
      primaryFoods: ['bloodworms', 'brine-shrimp', 'pellets'],
      supplements: ['spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 40,
      waterChangeFrequency: 'twice-weekly',
      vacuumingNeeded: true,
      notes: 'Daily observation and rigorous cleaning are mandatory to prevent disease outbreaks in these sensitive fish.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 300,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 10,
    commonDiseases: ['hexamita', 'gill-flukes', 'ich', 'columnaris', 'internal-parasites', 'hole-in-head-disease'],
    sensitivities: ['Ammonia', 'Nitrite', 'Nitrates', 'Temperature fluctuations', 'pH swings', 'Chlorine', 'Stress'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the Amazon Basin, these fish inhabit calm, tannin-stained waters rich in driftwood and roots. The water is characteristically very soft and acidic, with a low pH often dropping below 6.0. They congregate in large schools around submerged structures where they forage for insect larvae and detritus. Habitat degradation and collection for the aquarium trade have impacted wild populations.",
    sexualDimorphism: "Males tend to be slightly larger and may develop more pointed dorsal and anal fins, though this is inconsistent. The most reliable method for sexing is examining the breeding tube, which is pointed in males and blunt in females. Generally, they are difficult to distinguish without observing spawning behavior.",
    variants: ['Wild Green', 'Wild Blue/Brown', 'Wild Heckel', 'Pigeon Blood', 'Blue Diamond', 'Turquoise', 'Red Melon', 'Snake Skin', 'Leopard'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'expert',
    trigger: 'Condition a bonded pair with high-quality frozen foods and perform large, cool water changes to simulate the rainy season. Providing a vertical spawning surface like a broad leaf or cone is essential for egg deposition.',
    fryCare: 'Newly hatched fry feed on a nutrient-rich mucus secreted by the parents skin for the first few weeks. Once weaned off the parents, they accept newly hatched brine shrimp and grow rapidly with frequent feeding and daily water changes. Maintaining pristine water quality is critical for their survival during the early stages.',
    notes: 'Breeding is a significant undertaking that requires a dedicated setup and strict adherence to water quality standards.',
  },
  
  experienceData: {
    successRate: 0.30,
    survivalRate: 0.40,
    
    commonFailures: [
      { issue: 'death-from-poor-water-quality', cause: 'insufficient-water-changes-nitrate-poisoning', frequency: 0.35 },
      { issue: 'disease-outbreak-hexamita-gill-flukes', cause: 'stress-poor-quarantine-protocol', frequency: 0.25 },
      { issue: 'chronic-stress-hiding-color-loss', cause: 'wrong-water-parameters-hard-alkaline-water', frequency: 0.18 },
      { issue: 'aggression-injuries-death', cause: 'group-too-small-under-6-fish', frequency: 0.12 },
      { issue: 'starvation-despite-feeding', cause: 'tankmates-too-fast-aggressive-steal-food', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 1000, max: 3000, currency: 'EUR' },
      monthly: { min: 80, max: 200, currency: 'EUR' },
    },
  },
};