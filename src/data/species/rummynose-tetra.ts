import type { Species } from '../../types/species';

export const rummynoseTetra: Species = {
  id: 'rummy-nose-tetra',
  slug: 'rummy-nose-tetra',
  imageUrl: '/images/species/rummy-nose-tetra.jpg',
  
  funFact: "Rummynose Tetras are living water quality tests; the intensity of their signature red nose fades instantly when water conditions deteriorate, providing an early warning system for the aquarist.",

  taxonomy: {
    scientificName: 'Petitella rhodostoma',
    commonName: 'Rummy Nose Tetra',
    family: 'Acestrorhynchidae',
    origin: 'South America (Lower Amazon basin - Rio Tapajós, Brazil)',
    region: 'South America',
    biotope: 'Blackwater streams and flooded forests with ultra-soft, acidic, tannin-stained water and dense vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'Features a brilliant red head that extends to the gill plates, a silvery body, and a distinctive black and white striped tail. The red coloration serves as a health indicator, fading when the fish is stressed or kept in poor water conditions.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 100,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 5.5, max: 7.0, ideal: 6.2 },
    gh: { min: 1, max: 8 },
    kh: { min: 0, max: 4 },
    flow: 'low',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 100,
      verticalCM: 40,
      territories: 0,
    },
    
    bioloadMultiplier: 0.9,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Thrives in a densely planted tank with floating plants to diffuse light. Tannin-stained water from Indian Almond Leaves or driftwood is highly beneficial for mimicking their natural blackwater habitat.',
    hardscape: ['Driftwood branches', 'Fine sand substrate', 'Leaf litter'],
  },

  behavior: {
    tags: ['schooler', 'peaceful', 'shy', 'active', 'midwater'],
    minGroupSize: 12,
    description: 'Known for their incredibly tight, synchronized schooling behavior. They are shy and easily startled, requiring calm tankmates. The red "nose" is a reliable visual indicator of water quality; it fades rapidly in the presence of ammonia, nitrite, or high nitrates.',
    
    compatibility: {
      goodMates: ['Neon Tetras', 'Cardinal Tetras', 'Corydoras', 'Harlequin Rasboras', 'Otocinclus', 'Honey Gouramis', 'Dwarf shrimp'],
      badMates: ['Tiger Barbs', 'Aggressive fish', 'Large cichlids', 'Goldfish', 'Boisterous fish'],
      notes: 'A peaceful community fish that must be kept in large groups to feel secure. They are sensitive to water quality and should not be introduced to immature tanks.',
      
      rules: [
        {
          type: 'requires',
          condition: 'large groups 12+ fish minimum',
          reason: 'They are obligate schoolers. In groups smaller than 12, they become stressed, hide constantly, and their signature red coloration fades.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'pristine water quality (ammonia/nitrite 0ppm, nitrate under 20ppm)',
          reason: 'They act as a canary in the coal mine for water quality. Any detectable ammonia or nitrite, or nitrates over 20ppm, will cause immediate fading of the red nose and stress.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'ignoring faded nose color',
          reason: 'A faded nose is an early warning sign of water parameter issues. Immediate water testing and corrective action are required.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'mixing with boisterous/aggressive tankmates',
          reason: 'They are easily intimidated. Active or aggressive fish will cause them to hide and lose color.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 10-15,
        midwater: '20-30',
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
      type: 'school',
      maxMalesPerTank: 20,
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
      'Large groups 12+ fish', 
      'Pristine water quality', 
      'Blackwater conditions (tannins)', 
      'Ultra-soft acidic water', 
      'Weekly water changes', 
      'Dimmed lighting', 
      'Peaceful tankmates only',
    ],

    proTips: [
      "Use the red nose as a daily water quality check; if it fades, test the water immediately.",
      "Add Indian Almond Leaves or driftwood to create tannin-stained blackwater conditions, which enhances their coloration.",
      "They require large schools to display their natural schooling behavior and maintain confidence."
    ],

    commonMistakes: [
      "Keeping them in groups smaller than 12 results in shy, stressed fish that refuse to school.",
      "Ignoring a fading red nose leads to missed water quality emergencies.",
      "Placing them in hard, alkaline water causes long-term stress and color loss."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'flakes', 'brine-shrimp', 'daphnia'],
      supplements: ['bloodworms', 'spirulina'],
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
      notes: 'Maintaining stable, pristine water conditions is the priority. Always match the temperature of new water to the tank to avoid shock, which causes the nose color to fade.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
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
    lifespanYears: 6,
    commonDiseases: ['ich', 'fin-rot', 'columnaris', 'neon-tetra-disease'],
    sensitivities: ['Nitrate over 20ppm', 'Ammonia/nitrite', 'pH over 7.5', 'Temperature fluctuations', 'Copper medications'],
  },

  scientificContext: {
    wildHabitat: "Inhabits the slow-flowing, tannin-stained blackwater streams of the Rio Tapajós basin. These environments are extremely soft and acidic, with dense vegetation and leaf litter providing cover. The fish school tightly as a defense against predators.",
    sexualDimorphism: "Females are rounder and fuller-bodied than males, especially when carrying eggs. Males are slimmer and may display slightly more intense coloration.",
    variants: ['Petitella rhodostoma (Common Rummynose)', 'Hemigrammus bleheri (Firehead)', 'Petitella georgiae (False Rummynose)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Breeding requires very soft, acidic blackwater conditions (pH 5.5-6.0). Condition the group with live foods and perform cool water changes to simulate the rainy season.',
    fryCare: 'Eggs are scattered on fine-leaved plants or spawning mops and are light-sensitive. Parents must be removed as they will eat the eggs. Fry require infusoria for the first few days before accepting baby brine shrimp.',
    notes: 'Breeding is achievable but requires attention to water chemistry and rearing the tiny fry.',
  },
  
  experienceData: {
    successRate: 0.65,
    survivalRate: 0.60,
    
    commonFailures: [
      { issue: 'faded-noses-chronic-stress', cause: 'small-groups-under-12-fish-or-poor-water-quality', frequency: 0.35 },
      { issue: 'nitrate-poisoning-deaths', cause: 'nitrate-creep-over-20ppm-infrequent-water-changes', frequency: 0.25 },
      { issue: 'stress-from-wrong-tankmates', cause: 'mixed-with-boisterous-aggressive-fish', frequency: 0.15 },
      { issue: 'temperature-shock', cause: 'cold-water-changes-not-matching-tank-temp', frequency: 0.15 },
      { issue: 'shortened-lifespan', cause: 'no-blackwater-conditions-hard-alkaline-water', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 150, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};