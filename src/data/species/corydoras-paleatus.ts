import type { Species } from '../../types/species';

export const corydorasPaleatus: Species = {
  id: 'species-corydoras-paleatus',
  slug: 'corydoras-paleatus',
  imageUrl: '/images/species/corydoras-paleatus.jpg',
  funFact: "These armored tanks can breathe air! If you see them dart to the surface and back down, they are taking a gulp of atmospheric oxygen using their intestines.",

  imageCredit: {
    photographer: 'Kuznetsov_Peter on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/corydoras-paleatus-4996632/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  taxonomy: {
    scientificName: 'Corydoras paleatus',
    commonName: 'Peppered Corydoras',
    family: 'Callichthyidae',
    origin: 'South America (Paraná Basin, Uruguay)',
    region: 'South America',
    biotope: 'Shallow, slow-moving waters with soft mud or sand bottoms',
  },

  visuals: {
    iconShape: 'fusiform', // Falls dein Type-System das unterstützt, sonst 'fusiform'
    adultSizeCM: 7,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60, // Minimum footprint is key (60x30cm)
    tempC: { min: 18, max: 24, ideal: 21 }, // COOLER water than most tropicals!
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 5, max: 19 },
    flow: 'low',
    substrate: 'sand', // CRITICAL: Sand only!
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Broad-leaved plants (Anubias, Swords) for resting. Open sandy areas in the front are mandatory for digging.',
    hardscape: ['Rounded river stones', 'Driftwood caves', 'Soft sand beaches'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'bottom_dweller', 'social'],
    minGroupSize: 6, // Absolute minimum for wellbeing
    description: 'Peaceful bottom dwellers that constantly sift through the sand for food. They wiggle their tails excitedly when feeding and love resting in groups on plant leaves.',
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Livebearers', 'Dwarf Cichlids', 'Shrimp'],
      badMates: ['Aggressive Cichlids', 'Fin-nippers', 'Large predatory catfish'],
      notes: 'Safe with almost everything. Protect baby shrimp, but adults are safe.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Sand substrate', 'Sinking food'],

    proTips: [
      "Sand substrate is MANDATORY to prevent barbel erosion.",
      "They are cooler water fish - 22°C is perfect. Do not keep >25°C long term.",
      "They don't eat poop! You must feed them high-quality sinking wafers.",
      "Feed at night if other fish steal their food."
    ],

    commonMistakes: [
      "Sharp gravel substrate → Cuts sensitive barbels (infection risk).",
      "Temperatures too high (26°C+) → Shortens lifespan drastically.",
      "Adding salt → They are scaleless and intolerant to salt.",
      "Keeping solitary → They become shy and stressed."
    ],
  },

  health: {
    lifespanYears: 8,
    commonDiseases: ['Barbel erosion', 'Red blotch disease', 'Bacterial infections'],
    sensitivities: ['Salt', 'Copper', 'Nitrate (>20ppm)'],
  },

  scientificContext: {
    wildHabitat: "Found in the lower Paraná basin. Temperatures vary seasonally, making them very hardy to cooler swings.",
    sexualDimorphism: "Females significantly rounder and larger when viewed from above. Males have higher dorsal fins.",
    variants: ['Albino Corydoras', 'Longfin Paleatus', 'High-Fin'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Large cold water change (simulates rain season) + Live bloodworms.',
    fryCare: 'Eggs hatch in 3-5 days. Fry need microworms or infusoria. Parents may eat eggs.',
    notes: 'Famous "T-Position" mating dance. Females carry eggs in pelvic fins and stick them to glass/plants.',
  },
};
