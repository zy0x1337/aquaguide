import { Species } from '../../types/species';

export const emberTetra: Species = {
  id: 'ember-tetra',
  slug: 'ember-tetra',
  imageUrl: '/images/species/ember-tetra.jpg',
  imageCredit: 'TODO',
  
  taxonomy: {
    commonName: 'Ember Tetra',
    scientificName: 'Hyphessobrycon amandae',
    family: 'Characidae',
    order: 'Characiformes',
    region: 'South America'
  },
  
  environment: {
    minTankSizeLiters: 40,
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    tempC: { min: 23, max: 28, ideal: 25 },
    hardness: 'soft to medium',
    biotope: ['Araguaia River', 'Blackwater streams', 'Slow flowing waters']
  },
  
  behavior: {
    social: 'shoaling',
    activity: 'mid-level swimmer',
    temperament: 'peaceful',
    tags: ['peaceful', 'shoaler', 'nano_suitable']
  },
  
  care: {
    difficulty: 'beginner',
    minGroupSize: 10,
    diet: ['micropellets', 'flakes', 'micro worms', 'baby brine shrimp'],
    specialRequirements: [
      'Keep in groups of 10+',
      'Prefers dimmed lighting',
      'Dark substrate shows best coloration',
      'Peaceful tankmates only'
    ]
  },
  
  appearance: {
    size: { min: 1.5, max: 2.0 },
    description: 'Tiny, vibrant orange-red fish that glow like embers in the right lighting. Males show more intense coloration. Translucent body with fiery red-orange hue intensifying during breeding.'
  },
  
  breeding: {
    difficulty: 'medium',
    description: 'Egg scatterers. Condition with live foods. Separate breeding pair, use spawning mop or dense plants. Remove adults after spawning. Fry are tiny and require infusoria initially.'
  },
  
  compatibility: {
    canLiveWith: [
      'pygmy-cory',
      'otocinclus-vittatus',
      'neocaridina-davidi-red-cherry',
      'chili-rasbora',
      'celestial-pearl-danio'
    ],
    shouldAvoid: [
      'oscar',
      'electric-yellow-lab',
      'betta-splendens'
    ]
  }
};
