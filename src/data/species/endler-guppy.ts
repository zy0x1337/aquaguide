import type { Species } from '../../types/species';

export const endlerGuppy: Species = {
  id: 'livebearer-001',
  slug: 'endler-guppy',
  imageUrl: '/images/species/endler-guppy.jpg',
  funFact: "Discovered by Prof. John Endler in 1975. Pure strains are rare; most 'Endlers' in pet stores are hybrids with common Guppies. Unlike common Guppies, Endler females rarely eat their own fry.",
  
  taxonomy: {
    scientificName: 'Poecilia wingei',
    commonName: 'Endler\'s Livebearer',
    family: 'Poeciliidae',
    origin: 'Venezuela (Campoma & Cumana Lagoons)',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2.5, // Männchen sind winzig! Weibchen ca 4cm.
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 28, ideal: 26 },
    ph: { min: 7.0, max: 8.5, ideal: 7.5 }, // Hassen weiches/saures Wasser!
    gh: { min: 10, max: 25 }, // Hartes Wasser ist Pflicht
    flow: 'slow',
    substrate: 'any',
  },
  
  habitat: {
    planting: 'dense',
    plantingNotes: 'Floating plants (like Hornwort or Guppy Grass) are essential to protect fry, although Endlers are less cannibalistic than other livebearers.',
    hardscape: ['Limestone (to raise hardness)', 'Driftwood'],
  },
  
  behavior: {
    tags: ['shoaler', 'peaceful', 'surface', 'active'],
    minGroupSize: 6,
    description: 'Hyperactive and extremely colorful males that dance for females constantly. Best kept in a ratio of 1 male to 2-3 females to disperse aggression, or in "all-male" bachelor tanks to prevent breeding.',
    compatibility: {
      goodMates: ['Cherry Shrimp', 'Corydoras', 'Snails', 'Otocinclus'],
      badMates: ['Angelfish', 'Betta (sometimes works, often risky)', 'Large Tetras'],
      notes: 'Will hybridize with common Guppies (Poecilia reticulata) - do not mix if you want pure strains.',
    }
  },
  
  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Hard water (High GH/KH)', 'Population control plan'],
  },
  
  health: {
    lifespanYears: 2,
    commonDiseases: [
      'ich',
      'Shimmies', // Mineralienmangel (zu weiches Wasser)
      'Fin Clamp'
    ],
    sensitivities: ['Soft water', 'Acidic pH (< 6.5)'],
  },

  scientificContext: {
    wildHabitat: "Warm, hard, and algae-rich lagoons in Venezuela. Often brackish environments.",
    sexualDimorphism: "Extreme. Males are tiny (2cm) and psychedelic neon-colored. Females are larger (4cm) and usually plain silver/tan.",
    variants: ['Tiger Endler', 'Japan Blue', 'Black Bar'],
  },

  breeding: {
    method: 'livebearer',
    difficulty: 'beginner',
    trigger: 'Just add water. They breed constantly (every 23-28 days).',
    fryCare: 'Fry are born fully formed and independent. Feed crushed flakes. Survival rate is very high.',
  },
};
