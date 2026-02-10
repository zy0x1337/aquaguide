import type { Species } from '../../types/species';

export const kuhliLoach: Species = {
  id: 'loach-001',
  slug: 'kuhli-loach',
  imageUrl: '/images/species/kuhli-loach.jpg',
  funFact: "Kuhli Loaches are 'scaleless' fish. Because they lack hard scales, they are extremely sensitive to medications (like copper) and sharp gravel, which can cut their bellies.",
  
  taxonomy: {
    scientificName: 'Pangio kuhlii',
    commonName: 'Kuhli Loach',
    family: 'Cobitidae',
    origin: 'Indonesia, Malaysia (Forest streams)',
  },
  
  visuals: {
    iconShape: 'eel-like', // <--- Hier nutzen wir den neuen Typ!
    adultSizeCM: 10,
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 24, max: 30, ideal: 26 },
    ph: { min: 5.5, max: 7.0, ideal: 6.0 }, // Mögen es sauer
    gh: { min: 0, max: 10 },
    flow: 'slow',
    substrate: 'sand', // PFLICHT! Sie graben sich ein.
  },
  
  habitat: {
    planting: 'dense',
    plantingNotes: 'Requires plenty of hiding spots (caves, leaf litter) and low light. If they feel secure, they will come out more often. Sharp gravel is strictly forbidden.',
    hardscape: ['Smooth Rocks', 'PVC Tubes (hiding)', 'Leaf Litter', 'Fine Sand'],
  },
  
  behavior: {
    tags: ['bottom_dweller', 'shy', 'shoaler', 'peaceful'],
    minGroupSize: 6,
    description: 'Nocturnal scavengers that love to burrow into soft sand. They are very social and form "cuddle piles" in caves. Often called "noodle fish" by hobbyists.',
    compatibility: {
      goodMates: ['Neon Tetras', 'Rasboras', 'Bettas', 'Gouramis'],
      badMates: ['Cichlids', 'Goldfish', 'Large Catfish', 'Aggressive Bottom Dwellers'],
      notes: 'Safe with almost anything that doesn\'t eat them. Shrimp safe-ish (might eat babies).',
    }
  },
  
  care: {
    difficulty: 'medium', // Wegen der Empfindlichkeit (Scaleless)
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Sand substrate mandatory', 'Cave systems'],
  },
  
  health: {
    lifespanYears: 10,
    commonDiseases: [
      'ich', // SEHR anfällig
      'fin-rot',
      'Skin infections' // Wegen Verletzungen
    ],
    sensitivities: ['Copper medications', 'Sharp substrate', 'Nitrate > 20ppm'],
  },

  scientificContext: {
    wildHabitat: "Slow-moving forest streams with thick layers of leaf litter and mud bottoms. Water is usually stained with tannins (blackwater).",
    sexualDimorphism: "Females become noticeably plumper/thicker when carrying eggs. Males have slightly larger pectoral fins.",
    variants: ['Black Kuhli (Pangio oblonga)', 'Silver Kuhli'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Accidental breeding happens, but intentional breeding often requires hormone injections. In nature, they spawn near the surface among floating plant roots.',
    fryCare: 'Green water and infusoria. Fry are bright green when hatched!',
  },
};
