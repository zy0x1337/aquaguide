import type { Species } from '../../types/species';

export const bronzeCory: Species = {
  id: 'cory-002',
  slug: 'bronze-cory',
  imageUrl: '/images/species/bronze-cory.jpg',
  funFact: "This is one of the few fish that can 'wink' – they can rotate their eyes downwards to scan the substrate.",

  taxonomy: {
    scientificName: 'Corydoras aeneus',
    commonName: 'Bronze Corydoras',
    family: 'Callichthyidae',
    origin: 'Widely distributed across South America (Venezuela to Argentina)',
    region: 'South America',
    biotope: 'Slow-moving rivers and marshes with muddy bottoms',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 7, // Größer als Panda
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80, // Brauchen mehr Platz
    tempC: { min: 21, max: 28, ideal: 24 }, // Toleranter
    ph: { min: 6.0, max: 8.0, ideal: 7.0 }, // Sehr anpassungsfähig
    gh: { min: 2, max: 20 },
    flow: 'low',
    substrate: 'sand', // Immer noch Pflicht
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Robust plants like Swords and Crypts. They can accidentally uproot delicate carpets while digging.',
    hardscape: ['Driftwood', 'Smooth Stones'],
  },

  behavior: {
    tags: ['shoaler', 'bottom_dweller', 'peaceful', 'robust'],
    minGroupSize: 6,
    description: 'The tank of the Corydoras world. Large, boisterous, and indestructible. They are constantly active and not shy at all.',
    compatibility: {
      goodMates: ['Almost everything peaceful', 'Angelfish', 'Tetras'],
      badMates: ['Large aggressive Cichlids'],
      notes: 'One of the best beginner fish due to their hardiness.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Sand substrate'],

    proTips: [
      "The 'Albino Cory' is usually just an Albino Bronze Cory. They have the exact same care requirements.",
      "They eat A LOT. Ensure enough food reaches the bottom, or they will outcompete slower bottom feeders.",
      "Great for warmer tanks where Pandas would struggle."
    ],

    commonMistakes: [
      "Sharp gravel (Universal Corydoras rule).",
      "Thinking they eat poop. They are scavengers, not waste disposal units. You still need to vacuum.",
      "Underfeeding. Just because they are cleaners doesn't mean they don't need high-quality pellets."
    ],
  },

  health: {
    lifespanYears: 7, // Können sehr alt werden
    commonDiseases: ['ich', 'fin-rot', 'barbel-erosion'],
    sensitivities: ['Salt (moderate sensitivity)', 'Sharp substrate'],
  },

  scientificContext: {
    wildHabitat: "Found in almost every type of water body in South America, from clear streams to murky stagnant pools.",
    sexualDimorphism: "Females are massive compared to males, especially when full of eggs.",
    variants: ['Albino Cory', 'Green Laser Cory (different lineage)', 'Black Venezuela'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Massive cool water change (50%). They lay hundreds of eggs on the glass.',
    fryCare: 'Very easy to raise. Fry accept crushed flakes and powdered food quickly.',
    notes: 'One of the easiest egg-layers to breed. Often spawn spontaneously after water changes.',
  },
};
