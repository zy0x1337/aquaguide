import type { Species } from '../../types/species';

export const bettaSplendensFemale: Species = {
  id: 'betta-002',
  slug: 'betta-splendens-female',
  imageUrl: '/images/species/betta-splendens-female.jpg',
  funFact: "Female Bettas are often called 'docile', but in groups (Sororities), they establish brutal pecking orders that can be just as violent as males.",

  taxonomy: {
    scientificName: 'Betta splendens',
    commonName: 'Siamese Fighting Fish (female)',
    family: 'Osphronemidae',
    origin: 'Thailand (Mekong Basin)',
    region: 'Asia',
    biotope: 'Rice paddies & stagnant floodplains with dense vegetation',
  },

  visuals: {
    iconShape: 'fusiform', // Schlanker und weniger Flossenmasse als Männchen
    adultSizeCM: 5,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 20, // Einzelhaltung OK ab 20L. Sorority MINIMUM 80L!
    tempC: { min: 24, max: 30, ideal: 26 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    flow: 'low',
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Broken lines of sight are CRITICAL for Sororities. Jungle-style planting prevents constant chasing. Floating plants are recommended.',
    hardscape: ['Driftwood', 'Caves', 'Botanicals'],
  },

  behavior: {
    tags: ['semi-aggressive', 'surface_dweller', 'labyrinth_fish'],
    minGroupSize: 1, // Alleine OK. Gruppe NUR 5+ (Sorority)
    description: 'Less aggressive than males but still territorial. Can be kept in groups ("Sorority") ONLY by experienced keepers in large, planted tanks. They establish a strict hierarchy.',
    compatibility: {
      goodMates: ['Tetras', 'Corydoras', 'Rasboras', 'Snails', 'Kuhli Loaches'],
      badMates: ['Male Bettas (except brief breeding encounters)', 'Fin-nippers'],
      notes: 'NEVER keep 1 male and 1 female together permanently. He will harass or kill her.',
    },
  },

  care: {
    difficulty: 'medium', // Sororities sind 'expert', Einzelhaltung 'beginner'
    diet: 'carnivore',
    effort: 'medium',
    cost: 'low',
    specialRequirements: ['Lid required (jumper)', 'Broken sightlines (Sorority)'],

    proTips: [
      "For a Sorority: Always use odd numbers (5, 7, 9) to help spread aggression.",
      "If you see a white dot on the belly (ovipositor/egg spot), it is definitely a female.",
      "Short fins mean they are faster swimmers than males – better at catching food in community tanks."
    ],

    commonMistakes: [
      "Thinking females are 'friendly'. A failed Sorority is a bloodbath.",
      "Keeping with a male. Breeding is a temporary meeting (hours), not a cohabitation.",
      "Underestimating their colors. Modern 'Koi' or 'Galaxy' females are just as stunning as males."
    ],
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['fin-rot', 'dropsy', 'ich', 'velvet'],
    sensitivities: ['Stress (Sorority dynamics)', 'Ammonia'],
  },

  scientificContext: {
    wildHabitat: "Stagnant rice paddies and floodplains.",
    sexualDimorphism: "Short fins, egg spot (ovipositor), smaller size, horizontal stripes when stressed.",
    variants: ['Koi Female', 'Crown Tail Female', 'Dumbo Ear Female', 'Halfmoon Female'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'Introduction to male + conditioning with live food.',
    fryCare: 'Females do not care for fry and will eat them if given the chance.',
    notes: 'Females display vertical "breeding stripes" when receptive to a male.',
  },
};
