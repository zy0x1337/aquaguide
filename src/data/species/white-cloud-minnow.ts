import type { Species } from '../../types/species';

export const whiteCloudMinnow: Species = {
  id: 'minnow-001',
  slug: 'white-cloud-minnow',
  imageUrl: '/images/species/white-cloud-mountain-minnow.jpg',
  funFact: "Often called the 'Poor Man's Neon' because they display similar iridescent colors but are much hardier and cheaper. In the wild, they are actually extinct in their original type locality (White Cloud Mountain).",

  taxonomy: {
    scientificName: 'Tanichthys albonubes',
    commonName: 'White Cloud Mountain Minnow',
    family: 'Cyprinidae',
    origin: 'China (Guangdong Province)',
    region: 'Asia',
    biotope: 'Cool, clear, fast-flowing mountain streams',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 14, max: 22, ideal: 18 }, // ECHTES Kaltwasser!
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    flow: 'moderate', // Mag Strömung
    substrate: 'any',
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Looks best in heavily planted tanks with dark substrate. Floating plants encourage breeding.',
    hardscape: ['River Stones', 'Driftwood'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'active', 'coldwater', 'jumper'],
    minGroupSize: 8,
    description: 'Extremely peaceful and active schooling fish. Males display constantly by spreading their fins ("sparring") but never hurt each other.',
    compatibility: {
      goodMates: ['Hillstream Loaches', 'Danio rerio', 'Shrimp', 'Goldfish (if Minnows are fast enough)'],
      badMates: ['Tropical fish (Angelfish, Discus) - Temps mismatch!', 'Large predators'],
      notes: 'Best kept in a specialized hillstream or unheated setup.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['No Heater needed (room temp)', 'Lid required'],

    proTips: [
      "Save money on electricity! These fish thrive at room temperature (18-20°C).",
      "They are practically bulletproof. Ideal for first-time keepers.",
      "Males will display brighter colors if you keep more females than males."
    ],

    commonMistakes: [
      "Keeping them in tropical tanks (26°C+). They live shorter lives and lose color.",
      "Thinking they are boring. In a proper group, their sparring behavior is fascinating.",
      "Open top tanks. They jump when excited."
    ],
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'fin-rot'],
    sensitivities: ['Heat stress (>26°C)', 'Chlorine'],
  },

  scientificContext: {
    wildHabitat: "Clear, shallow mountain streams with rocky bottoms and dense vegetation. Temperatures drop significantly in winter.",
    sexualDimorphism: "Males are slimmer with more intense red coloration on fins. Females are rounder.",
    variants: ['Golden White Cloud', 'Longfin White Cloud'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'None. They spawn daily in planted tanks.',
    fryCare: 'Parents rarely eat fry if well-fed. Fry appear near the surface and eat powdered flakes.',
    notes: 'One of the easiest egg-layers to breed. Colony breeding works well.',
  },
};
