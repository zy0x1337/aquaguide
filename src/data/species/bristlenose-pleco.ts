import type { Species } from '../../types/species';

export const bristlenosePleco: Species = {
  id: 'pleco-001',
  slug: 'bristlenose-pleco',
  imageUrl: '/images/species/bristlenose-pleco.jpg',
  funFact: "The 'bristles' on the male's nose are fleshy tentacles that mimic larvae. Scientists believe this signals to females that he is a good father who can protect many babies.",
  
  taxonomy: {
    scientificName: 'Ancistrus cf. cirrhosus',
    commonName: 'Bristlenose Pleco',
    family: 'Loricariidae',
    origin: 'Amazon Basin',
  },
  
  visuals: {
    iconShape: 'fusiform', // Eigentlich "flattened", aber fusiform passt am besten im Simulator
    adultSizeCM: 14,
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 21, max: 28, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    flow: 'medium',
    substrate: 'any', // Sand oder Kies ist egal, aber keine scharfen Kanten
  },
  
  habitat: {
    planting: 'medium',
    plantingNotes: 'Plants should be robust (Anubias, Java Fern) as they might get bulldozed occasionally. Driftwood is MANDATORY for their digestion.',
    hardscape: ['Driftwood (Must have!)', 'Slate caves', 'River stones'],
  },
  
  behavior: {
    tags: ['bottom_dweller', 'territorial', 'shy', 'peaceful'], // Territorial nur unter Männchen
    minGroupSize: 1,
    description: 'A nocturnal loner that spends the day rasping on wood or hiding in caves. Males are territorial against other males. Generally ignores other fish.',
    compatibility: {
      goodMates: ['Tetras', 'Guppies', 'Angelfish', 'Corydoras'],
      badMates: ['Other male Ancistrus (in small tanks)', 'Large aggressive Cichlids'],
      notes: 'Produces a massive bio-load (lots of poop). Filter must be strong.',
    }
  },
  
  care: {
    difficulty: 'beginner',
    diet: 'herbivore',
    effort: 'medium', // Wegen Wasserwechsel (hohe Belastung)
    cost: 'low',
    specialRequirements: ['Driftwood for cellulose digestion', 'Caves for breeding'],
  },
  
  health: {
    lifespanYears: 12, // Werden alt!
    commonDiseases: [
      'ich',
      'Starvation', // Wenn keine Algen/Holz da sind
      'Bloat'
    ],
    sensitivities: ['Copper', 'Lack of fiber'],
  },

  scientificContext: {
    wildHabitat: "Fast-flowing clear waters and stagnant floodplains with sunken wood.",
    sexualDimorphism: "Males grow large, bushy bristles (tentacles) on their snout. Females have very few or none.",
    variants: ['Albino', 'Super Red', 'L144 (Blue Eye)', 'Longfin'],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'beginner',
    trigger: 'Cool water change + a good cave. The male guards the eggs and fans fresh water over them.',
    fryCare: 'Fry hatch after 5 days and eat algae/biofilm immediately. Dad kicks them out once the yolk sac is consumed.',
  },
};
