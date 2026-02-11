import type { Species } from '../../types/species';

export const pandaCory: Species = {
  id: 'cory-001',
  slug: 'panda-cory',
  imageUrl: '/images/species/panda-cory.jpg',
  funFact: "Like all Corydoras, they can breathe atmospheric air by gulping it at the surface. This intestinal breathing helps them survive in low-oxygen waters.",

  taxonomy: {
    scientificName: 'Corydoras panda',
    commonName: 'Panda Cory',
    family: 'Callichthyidae',
    origin: 'Peru (Ucayali River system)',
    region: 'South America',
    biotope: 'Clearwater tributaries with sandy bottoms and moderate flow',
  },

  visuals: {
    iconShape: 'fusiform', // Etwas bodenorientierter, aber fusiform passt
    adultSizeCM: 5,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 20, max: 25, ideal: 22 }, // Mag es kühler als andere Corys!
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 2, max: 12 },
    flow: 'moderate', // Mag Strömung
    substrate: 'sand', // PFLICHT
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Needs open sandy areas to forage. Plants provide cover but should not block the substrate entirely.',
    hardscape: ['Round River Stones', 'Driftwood', 'Fine Sand'],
  },

  behavior: {
    tags: ['shoaler', 'bottom_dweller', 'peaceful', 'diurnal'],
    minGroupSize: 6,
    description: 'Active and playful bottom dwellers. They constantly sift through the sand for food. One of the most social Corydoras species.',
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Apistogramma', 'Livebearers'],
      badMates: ['Large Cichlids', 'Aggressive Bottom Dwellers (Red Tailed Shark)'],
      notes: 'Excellent community fish. Safe with adult shrimp, may eat shrimplets.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'medium', // Pandas sind oft teurer als Bronze
    specialRequirements: ['Sand substrate mandatory (protect barbels)', 'Cooler water (<25°C)'],

    proTips: [
      "Keep the water cool! Unlike Sterbais, Pandas suffer in temperatures over 25°C long-term.",
      "Use fine sand. Gravel wears down their sensitive barbels (whiskers), leading to infection and starvation.",
      "Feed sinking wafers. Flakes often get eaten by other fish before reaching the bottom."
    ],

    commonMistakes: [
      "Keeping them on sharp gravel (Barbel erosion).",
      "Keeping them singly. They are extremely social and will pine away alone.",
      "Ignoring their need for air. Access to the surface must be clear (no solid plant cover)."
    ],
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['fin-rot', 'ich', 'red-blotch-disease', 'barbel-erosion'],
    sensitivities: ['High Nitrate', 'Salt (sensitive to high doses)', 'Sharp substrate'],
  },

  scientificContext: {
    wildHabitat: "Clear, relatively fast-flowing streams with sandy beds. The water is cooler than the main Amazon river.",
    sexualDimorphism: "Females are significantly rounder and broader when viewed from above. Males are slimmer and smaller.",
    variants: ['Longfin Panda Cory', 'White Panda (Leucistic)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Cool water change (simulates rainy season) + Live food (Bloodworms).',
    fryCare: 'Eggs are adhesive and stuck to glass/plants. Fry need microworms or baby brine shrimp.',
    notes: 'Parents may eat eggs, so removing eggs to a hatcher is recommended.',
  },
};
