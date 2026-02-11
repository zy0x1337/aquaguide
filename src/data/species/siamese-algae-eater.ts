import type { Species } from '../../types/species';

export const siameseAlgaeEater: Species = {
  id: 'sae-001',
  slug: 'siamese-algae-eater',
  imageUrl: '/images/species/siamese-algae-eater.jpg',
  funFact: "One of the few fish that eats Black Beard Algae (BBA), which most other algae eaters ignore. In the wild, they eat biofilm off rocks in fast streams.",

  taxonomy: {
    scientificName: 'Crossocheilus siamensis',
    commonName: 'Siamese Algae Eater',
    family: 'Cyprinidae',
    origin: 'Thailand',
    region: 'Asia',
    biotope: 'Fast-flowing rocky streams with moderate to high flow',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 15, // Werden größer als viele denken!
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    flow: 'high', // WICHTIG: Sie brauchen Strömung
    substrate: 'any',
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'They will eat live plants if hungry, so ensure adequate algae. Driftwood is important for grazing.',
    hardscape: ['Smooth Rocks (algae surface)', 'Driftwood'],
  },

  behavior: {
    tags: ['algae_eater', 'active', 'peaceful', 'shoaler'],
    minGroupSize: 1,
    description: 'Active, fast-moving algae grazers. They are aggressive towards each other and similar-looking fish.',
    compatibility: {
      goodMates: ['Community fish', 'Fast-moving fish'],
      badMates: ['Slow fish (out-competed for food)', 'Other SAE (territorial)'],
      notes: 'Often confused with Chinese Algae Eaters (which are aggressive). SAE are peaceful with most fish.',
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'herbivore',
    effort: 'low',
    cost: 'medium',
    specialRequirements: ['High flow filter', 'Adequate algae or supplemental feeding'],

    proTips: [
      "They WILL NOT eat much algae in clean tanks. They need to be hungry to be useful.",
      "Often confused with Chinese Algae Eaters (CAE). CAE have a black stripe with red edges; SAE have a black stripe with no red.",
      "Feed blanched zucchini or Spirulina wafers when algae is scarce."
    ],

    commonMistakes: [
      "Buying them as a substitute for good tank maintenance.",
      "Confusing with Chinese Algae Eaters (totally different temperament).",
      "Keeping multiple SAE (they fight viciously).",
      "Low flow tanks (they hate stagnant water)."
    ],
  },

  health: {
    lifespanYears: 7,
    commonDiseases: ['ich', 'fin-rot'],
    sensitivities: ['Stagnant water', 'Starvation'],
  },

  scientificContext: {
    wildHabitat: "Rapidly flowing limestone streams with heavy algae growth on rocks.",
    sexualDimorphism: "Very subtle. Males may be slightly slimmer.",
    variants: [],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'High flow + Cool water change.',
    fryCare: 'Unknown. Never bred in captivity.',
    notes: 'Virtually impossible to breed in home aquariums.',
  },
};
