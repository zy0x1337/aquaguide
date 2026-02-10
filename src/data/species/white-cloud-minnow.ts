import type { Species } from '../../types/species';

export const whiteCloudMinnow: Species = {
  id: 'minnow-001',
  slug: 'white-cloud-minnow',
  imageUrl: '/images/species/white-cloud-mountain-minnow.jpg',
  funFact: "Once thought to be extinct in the wild, a small population was rediscovered in 2001. They are often called 'Poor Man's Neon' due to their colors but much lower price and hardiness.",
  
  taxonomy: {
    scientificName: 'Tanichthys albonubes',
    commonName: 'White Cloud Mountain Minnow',
    family: 'Cyprinidae',
    origin: 'China (White Cloud Mountain, Guangdong)',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4,
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 14, max: 24, ideal: 18 }, // ECHTES Kaltwasser!
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    flow: 'medium', // Lieben Strömung
    substrate: 'gravel',
  },
  
  habitat: {
    planting: 'medium',
    plantingNotes: 'Looks best in planted tanks which contrast with their red fins. Can survive in sparse tanks but colors show better with cover.',
    hardscape: ['River Rocks', 'Smooth Gravel'],
  },
  
  behavior: {
    tags: ['shoaler', 'peaceful', 'surface', 'jumper'], // Springen gerne!
    minGroupSize: 8,
    description: 'An incredibly active and hardy fish. Males display against each other by flaring their fins (sparring) but rarely cause injury. Perfect for unheated aquariums.',
    compatibility: {
      goodMates: ['Hillstream Loaches', 'Rosy Barbs', 'Danios', 'Shrimp (adults)'],
      badMates: ['Tropical fish requiring >26°C', 'Angelfish', 'Bettas (Temp mismatch)'],
      notes: 'Do not keep with tropical fish that need high heat. Minnows live much shorter lives in warm water.',
    }
  },
  
  care: {
    difficulty: 'beginner', // Einer der einfachsten Fische überhaupt
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Cooler water preferred', 'Lid (jumping)'],
  },
  
  health: {
    lifespanYears: 5, // Werden oft 7+ bei kühlem Wasser
    commonDiseases: [
      'ich',
      'Fungal infections',
      'Velvet'
    ],
    sensitivities: ['Heat stress (>26°C)', 'Chlorine'],
  },

  scientificContext: {
    wildHabitat: "Clear, fast-flowing mountain streams with rocky bottoms and vegetation.",
    sexualDimorphism: "Males are slimmer with more vibrant red coloration. Females are rounder, especially when carrying eggs.",
    variants: ['Golden White Cloud', 'Longfin White Cloud'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner', // Vermehren sich oft von selbst
    trigger: 'Daily feeding of live food and cool water changes. They scatter eggs daily over plants.',
    fryCare: 'Parents rarely eat their own eggs/fry if well fed. Fry accept crushed flake food immediately.',
  },
};
