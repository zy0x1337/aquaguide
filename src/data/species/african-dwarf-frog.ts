import type { Species } from '../../types/species';

export const africanDwarfFrog: Species = {
  id: 'amphibian-001',
  slug: 'african-dwarf-frog',
  imageUrl: '/images/species/african-dwarf-frog.jpg', // Bild nicht vergessen!
  funFact: "They are fully aquatic but have lungs, so they must dash to the surface to breathe. They often practice 'Zen floating'—freezing mid-water with limbs spread out.",
  
  taxonomy: {
    scientificName: 'Hymenochirus boettgeri',
    commonName: 'African Dwarf Frog (Zwergkrallenfrosch)',
    family: 'Pipidae',
    origin: 'Central Africa (Congo Basin)',
  },
  
  visuals: {
    iconShape: 'fusiform', // Im Simulator am ehesten passend für die Schwimmform
    adultSizeCM: 4,
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 24, max: 27, ideal: 25 },
    ph: { min: 6.5, max: 7.8, ideal: 7.2 },
    gh: { min: 5, max: 20 },
    flow: 'slow', // WICHTIG: Schwimmen schlecht!
    substrate: 'sand', // Kies kann verschluckt werden (Impaction risk!)
  },
  
  habitat: {
    planting: 'dense',
    plantingNotes: 'Broad leaves (Anubias) near the surface are loved as "hammocks" to rest on while breathing.',
    hardscape: ['Smooth Stones', 'Driftwood'],
  },
  
  behavior: {
    tags: ['social', 'peaceful', 'bottom_dweller', 'shy'],
    minGroupSize: 2, // Fühlen sich alleine unsicher
    description: 'Nearly blind and relies on smell. They are extremely slow eaters. If kept with fast fish, they will starve. They "sing" (humming sound) underwater at night.',
    compatibility: {
      goodMates: ['Snails', 'Very calm fish'],
      badMates: ['Goldfish', 'Cichlids', 'Fast Tetras (steal food)', 'Shrimp (might get eaten)'],
      notes: 'Best kept in a species-only tank to ensure they get enough food.',
    }
  },
  
  care: {
    difficulty: 'medium', // Wegen der Fütterung
    diet: 'carnivore',
    effort: 'medium',
    cost: 'low',
    specialRequirements: ['Target feeding (tweezers)', 'No high currents'],
  },
  
  health: {
    lifespanYears: 5,
    commonDiseases: [
      'Chytrid Fungus (deadly)',
      'Dropsy (Bloat)',
      'Bacterial infections'
    ],
    sensitivities: ['Vibration', 'Chemicals', 'Impaction (swallowing gravel)'],
  },

  scientificContext: {
    wildHabitat: "Stagnant, shaded pools and slow rivers in rainforests.",
    sexualDimorphism: "Males have a small gland (pimple) behind the front legs and are slightly smaller/slimmer.",
    variants: ['Platinum (White)', 'Natural (Brown/Spotted)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Water level reduction followed by refill (mimicking rain). Males sing to attract females.',
    fryCare: 'Tadpoles look like tiny catfish. Need infusoria and liquid fry food. High mortality.',
  },
};
