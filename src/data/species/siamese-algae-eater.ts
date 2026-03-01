import type { Species } from '../../types/species';

export const siameseAlgaeEater: Species = {
  id: 'species-siamese-algae-eater',
  slug: 'siamese-algae-eater',
  imageUrl: '/images/species/siamese-algae-eater.jpg',
  
  funFact: "True Siamese Algae Eaters are one of the few fish that will eat Black Brush Algae (BBA). However, they are frequently misidentified in the aquarium trade; look for a black stripe that extends all the way through the tail fin to identify the true species.",

  taxonomy: {
    scientificName: 'Crossocheilus oblongus',
    commonName: 'Siamese Algae Eater',
    family: 'Cyprinidae',
    origin: 'Southeast Asia (Mekong and Chao Phraya river basins)',
    region: 'Asia',
    biotope: 'Fast-flowing hillstreams and rapids with rocky substrates and heavy biofilm growth.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 14,
    color: 'A brownish-beige body with a distinct black horizontal stripe running from the nose through the tail fin (a key identifier). Unlike the Chinese Algae Eater, they possess a pair of barbels and lack a sucker mouth. A gold stripe often runs above the black stripe.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 120,
    tempC: { min: 23, max: 27, ideal: 25 },
    ph: { min: 6.5, max: 8.0, ideal: 7.2 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'high',
    substrate: 'smooth-pebbles',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.9,
    },
    
    spaceNeeds: {
      horizontalCM: 120,
      verticalCM: 40,
      territories: 1,
    },
    
    bioloadMultiplier: 1.8,
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'They require smooth surfaces like river pebbles and driftwood for grazing biofilm. Hardy plants like Anubias and Java Fern can be attached to hardscape. They will not harm healthy plants.',
    hardscape: ['Smooth river pebbles', 'Driftwood branches', 'Limestone slabs', 'Rocks for current deflection'],
  },

  behavior: {
    tags: ['algae_eater', 'active', 'peaceful', 'bottom_dweller', 'hillstream'],
    minGroupSize: 1,
    description: 'A hardworking algae eater most active in high-flow environments. They are generally peaceful but can become territorial toward their own kind or similar-looking species like Flying Foxes. They are known for their ability to consume Black Brush Algae. Correct identification is crucial, as the similar-looking Chinese Algae Eater is aggressive and grows much larger.',
    
    compatibility: {
      goodMates: ['Danios', 'Barbs', 'Rainbowfish', 'Rasboras', 'Corydoras', 'Adult shrimp'],
      badMates: ['Chinese Algae Eater', 'Flying Fox', 'Slow-moving fish', 'Long-finned fish', 'Other SAEs (in small tanks)'],
      notes: 'Best kept singly or in groups of three or more in large tanks to diffuse aggression. Do not mix with Flying Foxes or Chinese Algae Eaters.',
      
      rules: [
        {
          type: 'requires',
          condition: 'high flow with powerhead/strong filter',
          reason: 'As a hillstream species, they require high oxygen and water movement to thrive.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'biofilm/algae surfaces or supplemental feeding',
          reason: 'They are specialized grazers and will starve in sterile tanks.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'verify true SAE identification before buying',
          reason: 'Stores often misidentify Chinese Algae Eaters as SAEs. Check for the stripe extending into the tail fin and the presence of barbels.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 6-12,
        midwater: '10-15',
        bottom: '3-6',
      },
    },
    
    aggressionLevel: {
      intraspecific: 7,
      interspecific: 2,
      territorial: 6,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 3,
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
      'Verify true SAE identification', 
      'High flow (15x+ turnover)', 
      'Biofilm/algae surfaces', 
      'Supplemental spirulina-based foods', 
      'High oxygen levels',
    ],

    proTips: [
      "Ensure you are buying a True SAE: the black stripe must continue into the caudal fin, and they should have small barbels.",
      "They are one of the few fish that eat Black Brush Algae, making them valuable for algae control.",
      "Supplement their diet with spirulina wafers if algae runs low."
    ],

    commonMistakes: [
      "Buying a Chinese Algae Eater by mistake, which becomes aggressive and grows large.",
      "Keeping them in low-flow tanks, which causes stress and inactivity.",
      "Expecting them to survive on algae alone in a new, sterile tank."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['spirulina', 'pellets', 'blanched-zucchini'],
      supplements: ['aufwuchs'],
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
      notes: 'High flow and clean water are prerequisites. They are sensitive to organic waste buildup.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
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
    lifespanYears: 10,
    commonDiseases: ['ich', 'velvet', 'fin-rot', 'starvation'],
    sensitivities: ['Stagnant water', 'Low oxygen', 'Organic waste', 'Starvation', 'Copper medications'],
  },

  scientificContext: {
    wildHabitat: "Inhabits fast-flowing hillstreams in the Mekong basin. They are specialized grazers (aufwuchs feeders) adapted to high-current environments with high oxygen content. They are migratory in the wild, moving upstream to spawn.",
    sexualDimorphism: "Difficult to sex visually. Females may appear fuller-bodied when carrying eggs, while males are slimmer.",
    variants: ['Crossocheilus oblongus (True SAE)', 'Crossocheilus atrilimes', 'Crossocheilus langei'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Breeding is extremely rare in home aquaria. It requires precise simulation of seasonal changes, including temperature drops and increased flow. All commercial specimens are wild-caught.',
    fryCare: 'Spawning has not been reliably documented in captivity. Fry would require microscopic food sources.',
    notes: 'Not bred commercially; rely on wild-caught specimens.',
  },
  
  experienceData: {
    successRate: 0.40,
    survivalRate: 0.45,
    
    commonFailures: [
      { issue: 'wrong-species-purchased', cause: '90-percent-store-sae-are-aggressive-chinese-algae-eaters', frequency: 0.60 },
      { issue: 'starvation-death', cause: 'introduced-to-clean-tanks-with-no-algae-biofilm', frequency: 0.20 },
      { issue: 'stress-lethargy-death', cause: 'low-flow-tanks-hillstream-species-needs-current', frequency: 0.10 },
      { issue: 'territorial-fighting', cause: 'mixing-with-flying-foxes-or-multiple-sae-small-tanks', frequency: 0.05 },
      { issue: 'organ-damage', cause: 'high-protein-diet-herbivores-cant-metabolize', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 200, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};