import type { Species } from '../../types/species';

export const otocinclusMacrospilus: Species = {
  id: 'catfish-002',
  slug: 'otocinclus-macrospilus',
  imageUrl: '/images/species/otocinclus-macrospilus.jpg',
  funFact: "Often confused with O. vittatus. The macrospilus has a distinct 'Mickey Mouse' pattern on its tail root, while vittatus has a solid black stripe extending into the tail fin.",
  
  taxonomy: {
    scientificName: 'Otocinclus macrospilus',
    commonName: 'Macrospilus Oto',
    family: 'Loricariidae',
    origin: 'Peru (Rio Nanay, Amazon)',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4.5, // Ticken kleiner als vittatus
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 21, max: 26, ideal: 24 },
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    gh: { min: 3, max: 12 },
    flow: 'medium',
    substrate: 'any',
  },
  
  habitat: {
    planting: 'dense',
    plantingNotes: 'Requires established tanks with plenty of leaf surfaces (Anubias, Swords) to graze on biofilm. Fresh drift wood is highly recommended.',
    hardscape: ['Round River Stones', 'Driftwood'],
  },
  
  behavior: {
    tags: ['shoaler', 'peaceful', 'bottom_dweller', 'shy'],
    minGroupSize: 6,
    description: 'A gentle, cleaning crew favorite. They are strictly social and will pine away if kept alone. They are safer for shrimp fry than almost any other fish.',
    compatibility: {
      goodMates: ['Shrimp', 'Corydoras', 'Small Rasboras', 'Apistogramma'],
      badMates: ['Goldfish', 'Large Cichlids', 'Aggressive Barbs'],
      notes: 'Can be kept with Betta fish if the tank is large enough.',
    }
  },
  
  care: {
    difficulty: 'expert', // Wegen Futter-Empfindlichkeit
    diet: 'herbivore',
    effort: 'medium', // Zufüttern (Zucchini/Tabs) nötig
    cost: 'low',
    specialRequirements: ['Mature tank only!', 'Vegetable supplementation'],
  },
  
  health: {
    lifespanYears: 5,
    commonDiseases: [
      'Starvation', // Hauptproblem im Handel
      'ich',
      'Bacterial infections'
    ],
    sensitivities: ['Ammonia', 'Nitrite', 'Medications (Scaleless-ish)'],
  },

  scientificContext: {
    wildHabitat: "Found in floating meadows of vegetation in the river. They hold onto roots in the current.",
    sexualDimorphism: "Females are significantly broader and rounder than males.",
    variants: [],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Cool water changes and high protein diet conditioning. Eggs are adhesive.',
    fryCare: 'Extremely difficult. Fry are microscopic and need constant biofilm access.',
  },
};
