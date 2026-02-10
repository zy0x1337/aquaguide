import type { Species } from '../../types/species';

export const neocaridinaDavidi: Species = {
  id: 'invertebrate-001',
  slug: 'neocaridina-davidi',
  imageUrl: '/images/species/neocaridina-davidi.jpg',
  funFact: "If you mix different colors (e.g., Red Cherry and Blue Velvet), their offspring will eventually revert to the wild 'brown/transparent' coloration. This is called 'culling' in reverse.",
  
  taxonomy: {
    scientificName: 'Neocaridina davidi',
    commonName: 'Freshwater Shrimp',
    family: 'Atyidae',
    origin: 'Taiwan',
  },
  
  visuals: {
    iconShape: 'fusiform', // Klein und länglich
    adultSizeCM: 2.5,
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 20, // Nano-perfekt
    tempC: { min: 18, max: 28, ideal: 22 },
    ph: { min: 6.5, max: 8.0, ideal: 7.2 },
    gh: { min: 4, max: 14 }, // Brauchen Mineralien für den Panzer
    flow: 'slow',
    substrate: 'any',
  },
  
  habitat: {
    planting: 'dense',
    plantingNotes: 'Java Moss or Christmas Moss is essentially mandatory for fry survival. They graze on the biofilm on leaves.',
    hardscape: ['Cholla Wood', 'Rocks', 'Sponge Filter (safest)'],
  },
  
  behavior: {
    tags: ['shoaler', 'peaceful', 'active', 'bottom_dweller'],
    minGroupSize: 10,
    description: 'Busy scavengers that spend 100% of their time grazing on algae and biofilm. They have zero aggression but are prey to almost everything else.',
    compatibility: {
      goodMates: ['Otocinclus', 'Endler Guppies (fry risk)', 'Snails', 'Chili Rasboras'],
      badMates: ['Angelfish', 'Betta (snack risk)', 'Cichlids', 'Goldfish'],
      notes: 'Only Otocinclus are 100% safe for baby shrimp. Everything else might eat a baby if it fits in the mouth.',
    }
  },
  
  care: {
    difficulty: 'beginner',
    diet: 'omnivore', // Eigentlich Aufwuchsfresser + Reste
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Copper-free water/meds', 'Biofilm'],
  },
  
  health: {
    lifespanYears: 2,
    commonDiseases: [
      'Molting issues (White Ring of Death)',
      'Scutariella (Parasites)',
      'Planaria (Pests)'
    ],
    sensitivities: ['COPPER (Lethal!)', 'Rapid parameter swings'],
  },

  scientificContext: {
    wildHabitat: "Mountain streams and ponds with vegetation and rocky substrates.",
    sexualDimorphism: "Females are larger, more colorful, and have a 'saddle' (eggs) behind the head or carry eggs under the tail ('berried').",
    variants: ['Red Cherry', 'Blue Velvet', 'Yellow Fire', 'Green Jade', 'Rili'],
  },

  breeding: {
    method: 'livebearer', // Technisch gesehen Eier, aber es schlüpfen fertige Garnelen
    difficulty: 'beginner',
    trigger: 'Food abundance and stable water. Happens automatically.',
    fryCare: 'No special care needed. Fry eat biofilm and crushed flake food immediately. Avoid filters that suck them in!',
  },
};
