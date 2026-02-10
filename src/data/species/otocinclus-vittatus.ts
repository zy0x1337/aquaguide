import type { Species } from '../../types/species';

export const otocinclusVittatus: Species = { // Variable umbenannt
  id: 'catfish-001',
  slug: 'otocinclus-vittatus',
  imageUrl: '/images/species/otocinclus-vittatus.jpg',
  funFact: "Otocinclus are obligate 'Aufwuchs' eaters. They don't just eat algae, but the biofilm (bacteria/microorganisms) growing on it. A sterile, new tank is a death sentence for them.",
  
  taxonomy: {
    scientificName: 'Otocinclus vittatus',
    commonName: 'Common Otocinclus', // Präziserer Name
    family: 'Loricariidae',
    origin: 'South America (Amazon Basin, Orinoco)',
  },
  
  // ... Rest bleibt gleich wie vorher ...
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 21, max: 26, ideal: 23 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 5, max: 15 },
    flow: 'medium',
    substrate: 'any',
  },
  
  habitat: {
    planting: 'dense',
    plantingNotes: 'Broad-leaved plants (like Amazon Swords) provide excellent grazing surfaces. Driftwood is essential for biofilm growth.',
    hardscape: ['Driftwood', 'Smooth Stones (for algae growth)'],
  },
  
  behavior: {
    tags: ['shoaler', 'peaceful', 'bottom_dweller', 'shy'],
    minGroupSize: 6,
    description: 'Extremely peaceful schooling catfish. They spend their entire day grazing on surfaces. If kept alone, they become stressed and hide constantly.',
    compatibility: {
      goodMates: ['Shrimp (100% safe)', 'Discus', 'Tetras', 'Corydoras'],
      badMates: ['Oscars', 'Goldfish', 'Large Cichlids'],
      notes: 'One of the few fish that is 100% shrimp-baby safe.',
    }
  },
  
  care: {
    difficulty: 'expert',
    diet: 'herbivore',
    effort: 'medium',
    cost: 'low',
    specialRequirements: ['Established tank (6+ months old)', 'High Oxygen'],
  },
  
  health: {
    lifespanYears: 5,
    commonDiseases: [
      'ich',
      'Starvation',
      'Nitrate poisoning'
    ],
    sensitivities: ['New Tank Syndrome (No biofilm)', 'High Nitrates'],
  },

  scientificContext: {
    wildHabitat: "Vegetation-choked margins of rivers. They hang onto plant stems in the current.",
    sexualDimorphism: "Females are noticeably wider when viewed from above and slightly larger than males.",
    variants: ['Zebra Otocinclus (O. cocama)', 'Silver Otocinclus'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Mimic rainy season (cool water changes). Eggs are laid on plant leaves or glass.',
    fryCare: 'Fry need constant supply of biofilm and algae powder. Very high mortality rate.',
  },
};
