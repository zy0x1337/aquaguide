import type { Species } from '../../types/species';

export const cherryBarb: Species = {
  id: 'barb-001',
  slug: 'cherry-barb',
  imageUrl: '/images/species/cherry-barb.jpg',
  funFact: "Male Cherry Barbs display incredible red coloration during breeding season or when establishing dominance. Females remain silver/yellow year-round.",

  taxonomy: {
    scientificName: 'Puntius titteya',
    commonName: 'Cherry Barb',
    family: 'Cyprinidae',
    origin: 'Sri Lanka',
    region: 'Asia',
    biotope: 'Shaded forest streams with dense vegetation',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 20, max: 27, ideal: 24 },
    ph: { min: 6.0, max: 7.0, ideal: 6.5 },
    gh: { min: 5, max: 15 },
    flow: 'low',
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense background plants. They love to dart through vegetation.',
    hardscape: ['Driftwood', 'Smooth Stones'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'active'],
    minGroupSize: 6,
    description: 'Peaceful but playful schoolers. Males establish subtle dominance through fin-displays. Best color in groups.',
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Corydoras', 'Gouramis'],
      badMates: ['Aggressive fish', 'Fin-nippers'],
      notes: 'Safe with shrimp.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Groups of 6+'],

    proTips: [
      "Males turn BRIGHT red during spawning season. Plan ahead for fry if you notice this.",
      "Feed quality pellets. They respond well to Spirulina flakes (color enhancement).",
      "They are less aggressive than most barbs (like Tiger Barbs)."
    ],

    commonMistakes: [
      "Keeping singly (dull colors).",
      "Mixing with Tiger Barbs (different temperament)."
    ],
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['ich', 'fin-rot'],
    sensitivities: ['Cold water'],
  },

  scientificContext: {
    wildHabitat: "Shaded streams in rainforests with thick leaf cover.",
    sexualDimorphism: "Males turn cherry-red (especially during breeding). Females stay yellow/silver.",
    variants: [],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Increased temperature + Live food.',
    fryCare: 'Fairly easy. Fry accept crushed flakes quickly.',
    notes: 'One of the easier barbs to breed.',
  },
};
