import { Species } from '../../types/species';

export const sparklingGourami: Species = {
  id: 'sparkling-gourami',
  slug: 'sparkling-gourami',
  imageUrl: '/images/species/sparkling-gourami.jpg',
  imageCredit: 'TODO',
  
  taxonomy: {
    commonName: 'Sparkling Gourami',
    scientificName: 'Trichopsis pumila',
    family: 'Osphronemidae',
    order: 'Anabantiformes',
    region: 'Asia'
  },
  
  environment: {
    minTankSizeLiters: 30,
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    tempC: { min: 24, max: 28, ideal: 26 },
    hardness: 'soft to medium',
    biotope: ['Rice paddies', 'Shallow ponds', 'Slow moving streams', 'Dense vegetation']
  },
  
  behavior: {
    social: 'pair or small groups',
    activity: 'mid to top level',
    temperament: 'peaceful but territorial',
    tags: ['peaceful', 'nano_suitable', 'labyrinth_fish', 'vocal']
  },
  
  care: {
    difficulty: 'beginner',
    minGroupSize: 2,
    diet: ['micro pellets', 'frozen daphnia', 'baby brine shrimp', 'micro worms', 'mosquito larvae'],
    specialRequirements: [
      'Surface access required (labyrinth organ)',
      'Prefers heavily planted tanks',
      'Males can be territorial but rarely aggressive',
      'Produces audible croaking sounds during courtship',
      'Floating plants appreciated'
    ]
  },
  
  appearance: {
    size: { min: 3.0, max: 4.0 },
    description: 'Tiny, jewel-like gourami with iridescent blue-green spots across body. Red eyes. Males have more vibrant coloration and pointed dorsal fins. Transparent fins with blue/red edging.'
  },
  
  breeding: {
    difficulty: 'easy',
    description: 'Bubble nest builder. Male builds nest under floating plants or leaves. Courtship involves croaking sounds. Male guards eggs and fry. Separate breeding pair. Fry need infusoria initially.'
  },
  
  compatibility: {
    canLiveWith: [
      'ember-tetra',
      'pygmy-cory',
      'chili-rasbora',
      'celestial-pearl-danio',
      'neocaridina-davidi-red-cherry',
      'otocinclus-vittatus'
    ],
    shouldAvoid: [
      'betta-splendens',
      'oscar',
      'electric-yellow-lab',
      'danio-rerio'
    ]
  }
};
