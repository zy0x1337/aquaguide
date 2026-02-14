import type { Species } from '../../types/species';

export const sparklingGourami: Species = {
  id: 'sparkling-gourami',
  slug: 'sparkling-gourami',
  imageUrl: '/images/species/sparkling-gourami.jpg',
  funFact: 'Sparkling Gouramis produce audible croaking sounds during courtship displays - you can actually hear them communicate!',
  
  taxonomy: {
    scientificName: 'Trichopsis pumila',
    commonName: 'Sparkling Gourami',
    family: 'Osphronemidae',
    origin: 'Thailand, Cambodia, Vietnam',
    region: 'Asia',
    biotope: 'Rice paddies, shallow ponds, and slow-moving streams with dense vegetation',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 3.5,
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 30,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    gh: { min: 2, max: 10 },
    flow: 'low',
    substrate: 'dark sand or fine gravel',
  },
  
  habitat: {
    planting: 'dense',
    plantingNotes: 'Requires heavily planted tanks with floating plants. Surface access is essential for their labyrinth organ breathing.',
    hardscape: ['Driftwood', 'Leaf litter', 'Floating plants'],
  },
  
  behavior: {
    tags: ['peaceful', 'midwater', 'pair_bonding'],
    minGroupSize: 2,
    description: 'Tiny, jewel-like labyrinth fish with iridescent blue-green spots. Peaceful but males can be territorial. Produces audible croaking sounds during courtship. Very active and curious.',
    compatibility: {
      goodMates: ['Ember Tetra', 'Pygmy Corydoras', 'Chili Rasbora', 'Otocinclus', 'Dwarf Shrimp'],
      badMates: ['Bettas', 'Aggressive fish', 'Large Cichlids', 'Fast swimmers like Zebra Danios'],
      notes: 'Perfect for peaceful nano community tanks. Males can be territorial but rarely aggressive. Avoid keeping with fin-nippers.',
    },
  },
  
  care: {
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Surface access required (labyrinth organ)',
      'Prefers heavily planted tanks',
      'Floating plants appreciated',
      'Peaceful tankmates only'
    ],
    proTips: [
      'Leave an air gap at the water surface - they need to breathe atmospheric air.',
      'Feed small live/frozen foods like baby brine shrimp or daphnia.',
      'Males produce croaking sounds - listen closely during feeding time!',
      'Provide dense planting to reduce territorial behavior.',
    ],
    commonMistakes: [
      'Filling tank to the brim - they need air access.',
      'Keeping with fast, aggressive eaters that outcompete them for food.',
      'Too much water flow - they prefer still water.',
    ],
  },
  
  health: {
    lifespanYears: 4,
    commonDiseases: ['ich', 'velvet', 'labyrinth-organ-damage'],
    sensitivities: ['Cold water', 'Strong water flow', 'Lack of surface access'],
  },
  
  scientificContext: {
    wildHabitat: 'Inhabits shallow, slow-moving waters with dense vegetation including rice paddies, ditches, and ponds. Water is soft and slightly acidic.',
    sexualDimorphism: 'Males have more vibrant coloration, pointed dorsal fins, and produce croaking sounds. Females are duller and rounder.',
    variants: [],
  },
  
  breeding: {
    method: 'bubble_nester',
    difficulty: 'beginner',
    trigger: 'Provide floating plants for nest building. Males build bubble nests under leaves.',
    fryCare: 'Fry need infusoria initially, then baby brine shrimp. Male guards nest.',
    notes: 'Male produces croaking sounds during courtship. Remove female after spawning; male cares for eggs and fry.',
  },
};
