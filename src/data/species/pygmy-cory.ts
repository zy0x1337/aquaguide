import { Species } from '../../types/species';

export const pygmyCory: Species = {
  id: 'pygmy-cory',
  slug: 'pygmy-cory',
  imageUrl: '/images/species/pygmy-cory.jpg',
  imageCredit: 'TODO',
  
  taxonomy: {
    commonName: 'Pygmy Corydoras',
    scientificName: 'Corydoras pygmaeus',
    family: 'Callichthyidae',
    order: 'Siluriformes',
    region: 'South America'
  },
  
  environment: {
    minTankSizeLiters: 40,
    ph: { min: 6.0, max: 7.5, ideal: 7.0 },
    tempC: { min: 22, max: 26, ideal: 24 },
    hardness: 'soft to medium',
    biotope: ['Rio Madeira tributaries', 'Shallow streams', 'Planted areas']
  },
  
  behavior: {
    social: 'shoaling',
    activity: 'bottom dweller',
    temperament: 'peaceful',
    tags: ['peaceful', 'shoaler', 'bottom_dweller', 'nano_suitable']
  },
  
  care: {
    difficulty: 'beginner',
    minGroupSize: 8,
    diet: ['sinking pellets', 'micro pellets', 'frozen daphnia', 'baby brine shrimp', 'micro worms'],
    specialRequirements: [
      'Fine sand substrate mandatory',
      'Keep in groups of 8+',
      'Unlike other corys, often swims in mid-water',
      'Very sensitive to nitrates'
    ]
  },
  
  appearance: {
    size: { min: 2.0, max: 3.0 },
    description: 'Smallest Corydoras species. Silver-grey body with bold black horizontal stripe from snout to tail. Translucent fins. Adorable "mini-cory" appearance.'
  },
  
  breeding: {
    difficulty: 'medium',
    description: 'Egg layers. Condition with live/frozen foods. Females scatter eggs on plants and glass. Remove parents after spawning. Fry are very small, need fine powdered food initially.'
  },
  
  compatibility: {
    canLiveWith: [
      'ember-tetra',
      'chili-rasbora',
      'celestial-pearl-danio',
      'neocaridina-davidi-red-cherry',
      'otocinclus-vittatus',
      'honey-gourami'
    ],
    shouldAvoid: [
      'oscar',
      'electric-yellow-lab',
      'gold-spot-pleco'
    ]
  }
};
