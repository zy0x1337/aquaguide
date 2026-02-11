import type { Species } from '../../types/species';

export const africanDwarfFrog: Species = {
  id: 'frog-001',
  slug: 'african-dwarf-frog',
  imageUrl: '/images/species/african-dwarf-frog.jpg',
  funFact: "They are fully aquatic but have lungs. They must dash to the surface to breathe air. If they can't reach the surface, they will drown.",

  taxonomy: {
    scientificName: 'Hymenochirus boettgeri',
    commonName: 'African Dwarf Frog',
    family: 'Pipidae',
    origin: 'Central Africa (Congo Basin)',
    region: 'Africa',
    biotope: 'Stagnant, shaded rainforest pools and creeks',
  },

  visuals: {
    iconShape: 'frog',
    adultSizeCM: 5,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 27, ideal: 25 },
    ph: { min: 6.5, max: 7.8, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    flow: 'low', // PFLICHT: Starke Strömung stresst sie
    substrate: 'sand', // Kies kann verschluckt werden
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Broad leaves (Anubias) near the surface to rest on. They are clumsy swimmers.',
    hardscape: ['Smooth Rocks', 'Driftwood', 'Caves'],
  },

  behavior: {
    tags: ['amphibian', 'peaceful', 'social', 'slow_eater'],
    minGroupSize: 2, // Sehr sozial!
    description: 'Completely aquatic frogs. They are nearly blind and find food by smell. They are clumsy, slow, and spend lots of time "zen floating".',
    compatibility: {
      goodMates: ['Snails', 'Themselves (Best kept species-only)'],
      badMates: ['Fish (outcompete them for food)', 'Crayfish (will pinch/eat them)', 'African Clawed Frogs (predators!)'],
      notes: 'BEST KEPT ALONE. In community tanks, they often starve because fish eat the food before the frogs find it.',
    },
  },

  care: {
    difficulty: 'medium', // Wegen Fütterung
    diet: 'carnivore',
    effort: 'medium',
    cost: 'low',
    specialRequirements: ['Target feeding required', 'Lid without holes (escapists)', 'Low height tank'],

    proTips: [
      "Target feed! Use long tweezers to place food (frozen bloodworms/mysis) directly in front of their nose. They are practically blind.",
      "Singing? Yes, males 'hum' or buzz at night to attract females.",
      "Check the feet: Dwarf Frogs have 4 webbed feet. African CLAWED Frogs (which grow huge and eat fish) only have webbing on back feet."
    ],

    commonMistakes: [
      "Starvation in community tanks. Fish are faster. Frogs die slowly of hunger.",
      "Confusing with African Clawed Frog (Xenopus). Xenopus grows to 15cm and eats everything.",
      "Tall tanks. They need to reach the surface to breathe. Deep tanks >40cm are dangerous."
    ],
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['chytridiomycosis', 'dropsy', 'bacterial-infections'], // Chytrid ist der Killer
    sensitivities: ['Copper', 'Medications', 'Vibrations/Noise'],
  },

  scientificContext: {
    wildHabitat: "Shallow, stagnant, shaded pools in the rainforest. Low oxygen levels.",
    sexualDimorphism: "Males have a small white/pink gland behind the front legs (post-axillary subdermal gland). Females are rounder.",
    variants: ['Standard (Brown/Grey)', 'Blonde (Leucistic)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Water level drop + heavy feeding.',
    fryCare: 'Tadpoles are filter feeders and need specialized liquid food. Hard to raise.',
    notes: 'They engage in "Amplexus" (hugging) for hours while spawning at the surface.',
  },
};
