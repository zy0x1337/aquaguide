import type { Species } from '../../types/species';

export const cardinalTetra: Species = {
  id: 'tetra-002',
  slug: 'cardinal-tetra',
  imageUrl: '/images/species/cardinal-tetra.jpg',
  funFact: "Like Neon Tetras, but the red stripe runs the FULL length of the body. In the wild, they school by the millions in the Amazon.",

  taxonomy: {
    scientificName: 'Paracheirodon axelrodi',
    commonName: 'Cardinal Tetra',
    family: 'Characidae',
    origin: 'Brazil, Venezuela (Orinoco, Rio Negro)',
    region: 'South America',
    biotope: 'Blackwater tributaries (acidic, stained with tannins)',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 21, max: 27, ideal: 24 },
    ph: { min: 4.5, max: 6.5, ideal: 5.5 },
    gh: { min: 1, max: 8 }, // Very soft
    flow: 'low',
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense background plants with open middle space. Dark substrate brings out colors.',
    hardscape: ['Driftwood', 'Leaf Litter'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'shy'],
    minGroupSize: 15, // More than Neons
    description: 'Larger, hardier version of Neon Tetra. Stunning full-body red stripe. Shy and require groups.',
    compatibility: {
      goodMates: ['Other peaceful community fish', 'Corydoras', 'Rasboras'],
      badMates: ['Angelfish (predators)', 'Large Cichlids'],
      notes: 'Better choice than Neons in many cases due to hardiness.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'medium',
    specialRequirements: ['Soft/acidic water', 'Groups of 15+', 'Mature tanks'],

    proTips: [
      "More expensive than Neons but MORE hardy. Worth the price.",
      "The red stripe indicates health. Pale = stress.",
      "Feed micro-pellets. Their mouths are tiny."
    ],

    commonMistakes: [
      "Adding to new tanks (NTS vulnerability).",
      "Keeping too few.",
      "Hard water (coloration fades)."
    ],
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['neon-tetra-disease', 'ich'],
    sensitivities: ['New Tank Syndrome', 'Hard water', 'Ammonia'],
  },

  scientificContext: {
    wildHabitat: "Blackwater streams and flooded forests.",
    sexualDimorphism: "Subtle. Females are slightly rounder.",
    variants: [],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Extremely soft/acidic water + darkness.',
    fryCare: 'Microscopic fry need paramecium.',
    notes: 'Rarely bred in captivity.',
  },
};
