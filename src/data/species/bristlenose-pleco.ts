import type { Species } from '../../types/species';

export const bristlenosePleco: Species = {
  id: 'pleco-001',
  slug: 'bristlenose-pleco',
  imageUrl: '/images/species/bristlenose-pleco.jpg',
  funFact: "The 'bristles' on the male's nose are fleshy tentacles used to impress females and mimic nutritious insect larvae.",

  taxonomy: {
    scientificName: 'Ancistrus cirrhosus',
    commonName: 'Bristlenose Pleco',
    family: 'Loricariidae',
    origin: 'Amazon Basin',
    region: 'South America',
    biotope: 'Fast-flowing rivers with rocky bottoms and submerged wood',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 12, // Bleibt kleiner als Common Pleco (30cm!)
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80, // 60cm Kantenlänge Minimum
    tempC: { min: 21, max: 27, ideal: 24 },
    ph: { min: 5.8, max: 7.5, ideal: 6.8 },
    gh: { min: 2, max: 20 },
    flow: 'moderate',
    substrate: 'any',
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Robust plants are better. They can accidentally uproot delicate stems while thrashing.',
    hardscape: ['Driftwood (MANDATORY)', 'Caves (Slate/Clay)', 'River Stones'],
  },

  behavior: {
    tags: ['bottom_dweller', 'nocturnal', 'territorial', 'algae_eater'],
    minGroupSize: 1, // Einzelgänger
    description: 'Peaceful towards fish, but territorial towards other plecos. They spend the day hiding under wood and come out at night to rasp algae.',
    compatibility: {
      goodMates: ['Tetras', 'Angelfish', 'Corydoras', 'Livebearers'],
      badMates: ['Other male Bristlenoses (fighting)', 'Large aggressive Cichlids'],
      notes: 'The perfect alternative to the "Common Pleco" which grows too big for 99% of tanks.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'herbivore', // Primär Aufwuchs/Holz
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Driftwood mandatory (digestion)', 'Cave for spawning'],

    proTips: [
      "They NEED real wood in the tank. They rasp fibers to aid digestion.",
      "Feed fresh veggies! Zucchini, cucumber, and green beans (canned, no salt) are favorites.",
      "Don't rely on them to clean your glass. You still need to scrub."
    ],

    commonMistakes: [
      "No wood in tank -> Starvation/Digestive issues.",
      "Thinking they eat poop. They produce A LOT of poop (sawdust). You need good filtration.",
      "Buying a 'Common Pleco' by mistake (Hypostomus plecostomus). Always check the label!"
    ],
  },

  health: {
    lifespanYears: 10, // Langlebig
    commonDiseases: ['ich', 'bloat', 'starvation'],
    sensitivities: ['Copper', 'Lack of fiber'],
  },

  scientificContext: {
    wildHabitat: "Rapid streams with high oxygen content. They cling to rocks and wood using their sucker mouth.",
    sexualDimorphism: "Males develop the iconic 'bushy nose' bristles. Females have very few or none.",
    variants: ['Albino Bristlenose', 'Super Red', 'Calico', 'Longfin Bristlenose'],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'medium',
    trigger: 'Cool water change + High protein food + Suitable cave.',
    fryCare: 'Male guards the eggs/fry in the cave. Fry eat biofilm/wood immediately.',
    notes: 'They breed like rabbits if happy. Be prepared for 50+ babies.',
  },
};
