import type { Species } from '../../types/species';

export const neonTetra: Species = {
  id: 'tetra-001',
  slug: 'neon-tetra',
  imageUrl: '/images/species/neon-tetra.jpg',
  funFact: "In the wild, Neon Tetras live in blackwater streams so dark that their iridescent stripe is the only way they can locate each other in the gloom.",

  taxonomy: {
    scientificName: 'Paracheirodon innesi',
    commonName: 'Neon Tetra',
    family: 'Characidae',
    origin: 'Peru, Brazil (Amazon Basin, Solimões)',
    region: 'South America',
    biotope: 'Blackwater tributaries (Tea-colored, acidic water with tannins)',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 3,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60, // Brauchen Schwimmraum in Gruppen
    tempC: { min: 20, max: 26, ideal: 23 }, // Mögen es kühler als Kardinäle
    ph: { min: 5.0, max: 7.0, ideal: 6.0 },
    gh: { min: 2, max: 10 }, // Weiches Wasser
    flow: 'low', // Korrigiert von 'slow'
    substrate: 'any',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Prefers dense background planting for security with open swimming space in the center. Floating plants help simulate the dark conditions of their natural blackwater habitat.',
    hardscape: ['Branchy Driftwood (roots)', 'Leaf Litter', 'River Stones'],
  },

  behavior: {
    tags: ['shoaler', 'shy', 'midwater', 'peaceful'],
    minGroupSize: 10, // Wichtig: Nicht unter 10!
    description: 'A peaceful shoaling fish that displays stunning bio-luminescence-like colors. They are timid and require a large group (10+) to feel secure. When stressed or alone, their colors fade and they hide constantly.',
    compatibility: {
      goodMates: ['Corydoras', 'Otocinclus', 'Harlequin Rasboras', 'Dwarf Gouramis', 'Apistogramma'],
      badMates: ['Angelfish (natural predator!)', 'Large Cichlids', 'Goldfish', 'Bettas (risk)'],
      notes: 'Classic community fish. The only risk is large fish seeing them as snacks. Angelfish hunt them in the wild!',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Needs groups of 10+', 'Soft lighting preferred', 'Stable parameters (no new tanks!)'],

    proTips: [
      "Dim the lights or add floating plants. In bright light, Neons stay near the bottom and lose color.",
      "Add Indian Almond Leaves. The tannins (brown water) mimic their natural habitat and boost their immune system.",
      "Feed small foods. Their mouths are tiny! Crushed flakes or micro-pellets are best.",
      "Dark substrate brings out their colors. Avoid white gravel."
    ],

    commonMistakes: [
      "Adding them to a brand new tank. They are sensitive to instability and often die in tanks < 2 months old (New Tank Syndrome).",
      "Buying only 3-5. They will be constantly stressed and hide. 10 is the minimum for natural behavior.",
      "Keeping them with Angelfish. It's a classic combo, but Angelfish are their natural predators and will eat them."
    ],
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['neon-tetra-disease', 'ich', 'fin-rot'],
    sensitivities: ['New Tank Syndrome', 'High Nitrite', 'Sudden pH swings', 'Bright light'],
  },

  scientificContext: {
    wildHabitat: "Inhabits clearwater and blackwater tributaries of the Amazon. The water is often tea-colored due to tannins, extremely soft (<1 dGH), and acidic (pH 4.0-6.0).",
    sexualDimorphism: "Subtle. Females are noticeably rounder and deeper in the belly area, which causes their lateral blue stripe to appear 'bent' or curved. Males are slimmer with a straighter blue line.",
    variants: ['Longfin Neon', 'Gold Neon (Leucistic)', 'Diamond Head Neon'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Total darkness required (eggs are photosensitive!). Use extremely soft water (RO water, GH < 1) and acidify to pH 5.5.',
    fryCare: 'Fry hatch after 24 hours but remain light-sensitive. Feed infusoria or paramecium in dim light for the first week.',
  },
};
