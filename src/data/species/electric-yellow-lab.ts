import type { Species } from '../../types/species';

export const electricYellowLab: Species = {
  id: 'electric-yellow-lab',
  slug: 'electric-yellow-lab',
  imageUrl: '/images/species/electric-yellow-lab.jpg', // Matches your uploaded photo perfectly!
  funFact: "Electric Yellow Labs sind die 'Friedensbotschafter' unter Mbuna - die allerwenigsten aggressiv und ideal für Einsteiger-Mixed-Communitys!",

  imageCredit: {
    photographer: 'FilderAquaristik on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/firefish-fisch-malawibuntbarsch-3928534/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
    },

  taxonomy: {
    scientificName: 'Labidochromis caeruleus',
    commonName: 'Electric Yellow Lab (Yellow Lab, Lemon Lab)',
    family: 'Cichlidae',
    origin: "Lake Malawi: Lion's Cove, Nkhata Bay, Charo Reef (10-15m depth)",
    region: 'Africa',
    biotope: 'Sandy shores mit scattered boulders, algae-covered rocks, moderate current',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 12,
    color: 'neon yellow body, black dorsal stripe, electric blue highlights',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 300, // 120x45cm+ für 8-12 Fische Colony
    tempC: { min: 23, max: 28, ideal: 25.5 },
    ph: { min: 7.5, max: 8.6, ideal: 8.0 },
    gh: { min: 8, max: 16 },
    flow: 'moderate',
    substrate: 'aragonite sand (1-2mm)',
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'Plants rarely survive. Vallisneria oder Anubias on rocks possible.',
    hardscape: [
      'Malawi limestone boulders (2-10kg)', 
      'Stacked rock territories (1 pro Fisch)', 
      'Open sand swimming zones', 
      'Cave complexes für Shelters'
    ],
  },

  behavior: {
    tags: [
      'semi-aggressive', 
      'cichlid', 
      'colorful', 
      'active', 
      'nano_safe', 
      'shoaler'
    ],
    minGroupSize: 6, // 2M:4+F ideal für Stability
    description: 'Brilliant neon-yellow Mbuna mit black dorsal stripe. Friedlichste Malawi-Art - perfekt für Mixed Mbuna tanks. Males electric yellow bei courtship, females duller.',
    compatibility: {
      goodMates: [
        'Red Zebra (Maylandia estherae, 1:1)', 
        'Yellow Tail Acei (Pseudotropheus acuticeps)', 
        'Kenyi (Maylandia lombardoi)', 
        'Synodontis petricola (6"/15cm)', 
        'Labidochromis joanjohnsonae'
      ],
      badMates: [
        'Haps/Butterfly cichlids (tear aggression)', 
        'Tanganyika species (water params)', 
        'Nano fish/shrimp (eaten)', 
        'Softwater tetras/guppies'
      ],
      notes: 'Harem-Setup: 1M:3+F per 100L. Overstocking + ample territories reduces fights. Excellent Red Zebra Tankmate - contrasting colors!',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore', // 60% veggie, 40% protein
    effort: 'medium',
    cost: 'low',
    specialRequirements: [
      'African cichlid salts (GH 12-15)', 
      'Aragonite sand (pH buffer)', 
      'Rockwork: 1 cave/territory per fish', 
      'Filtration: 5-8x turnover/hour'
    ],
    proTips: [
      "Diet: 50% spirulina flakes/wafers + cyclops/Daphnia. Prevents bloat.",
      "Water: Target KH 7-10, GH 12-15, pH 8.0 stable (cichlid salts!).",
      "Territories: Stack rocks to create 1 male + 3 female territories.",
      "Colony size: 8-12 fish in 300L+ = harmony durch overstocking.",
      "Sexing: Males egg-spots on anal fin, brighter yellow."
    ],
    commonMistakes: [
      "High protein (>40%) → Fatal Malawi Bloat within months.",
      "Wrong params (pH<7.5) → Stress, spawning failure, death.",
      "Insufficient rocks → Constant territory wars.",
      "Single specimens → Extreme stress/aggression.",
      "No sand → Digging injuries, no spawning."
    ],
  },

  health: {
    lifespanYears: 10, // 12+ mit perfekter Pflege
    commonDiseases: ['Malawi Bloat (diet)', 'Ich/White Spot', 'Bacterial Fin rot'],
    sensitivities: ['Low pH/KH', 'High protein diet', 'Ammonia spikes', 'Nitrate >40ppm'],
  },

  scientificContext: {
    wildHabitat: "Lake Malawi sandy-rocky zones. Constant algae grazer (aufwuchs). Peaceful compared to other Mbuna.",
    sexualDimorphism: "Males: brighter neon yellow, prominent egg spots on anal fin, slightly larger. Females: duller yellow/orange with vertical stress bars.",
    variants: [
      'Classic Electric Yellow (Lion\'s Cove)', 
      'Nkhata Bay strain', 
      'Charo Reef yellow'
    ],
  },

  breeding: {
    method: 'mouthbrooder',
    difficulty: 'beginner',
    trigger: 'pH 8.2+, KH 8+, stable colony, evening light reduction.',
    fryCare: 'Female holds 15-40 eggs 21-25 days. Often releases swimming fry. Strip if mouth distended.',
    notes: 'Prolific & easy. Best in 1M:4F harems. Fry hardy, grow fast on baby brine.',
  },
};
