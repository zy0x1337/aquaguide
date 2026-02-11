// src/data/diseases/shrimp-diseases.ts

export interface Disease {
  id: string;
  name: string;
  category: 'parasitic' | 'bacterial' | 'fungal' | 'viral' | 'nutritional' | 'environmental';
  
  symptoms: string[];
  causes: string[];
  treatment: string[];
  prevention: string[];
  
  severity: 'low' | 'medium' | 'high' | 'critical'; // Wie gefährlich ist es?
  contagious: boolean; // Ansteckend?
  
  affectedSpecies?: string[]; // Leer = alle, sonst spezifisch (z.B. ["Neocaridina"])
  notes?: string;
}

export const shrimpDiseases: Disease[] = [
  // === PARASITEN ===
  {
    id: 'scutariella-japonica',
    name: 'Scutariella Japonica',
    category: 'parasitic',
    severity: 'medium',
    contagious: true,
    
    symptoms: [
      'Tiny white worms (1-3mm) visible on head, rostrum, or gills',
      'Shrimp scratching at its head with legs',
      'Lethargy and reduced feeding',
      'Difficulty swimming (in severe cases)'
    ],
    
    causes: [
      'Introduced via new plants or shrimp without quarantine',
      'Poor water quality weakens immune system',
      'Overstocked tanks with high bioload'
    ],
    
    treatment: [
      'Salt Dip: 1 tablespoon aquarium salt per 1 cup tank water for 30-60 seconds (daily for 1 week)',
      'Seachem ParaGuard: 5 mL per 40 liters, daily for 7 days (safe for shrimplets)',
      'Praziquantel: 2.5 mg/L, repeat after 2-3 weeks to kill hatched eggs',
      'Fenbendazole: 0.1g per 40L (AVOID if snails are present - lethal to them!)'
    ],
    
    prevention: [
      'Always quarantine new shrimp for 2 weeks',
      'Dip new plants in diluted bleach or alum solution',
      'Maintain stable parameters (avoid ammonia/nitrite spikes)',
      'Remove molts regularly (eggs are laid on them)'
    ],
    
    notes: 'The parasite feeds on detritus, not the shrimp itself. Mostly harmless in low numbers, but heavy infestations can block gill function.',
    affectedSpecies: ['Neocaridina', 'Caridina']
  },

  {
    id: 'vorticella',
    name: 'Vorticella',
    category: 'parasitic',
    severity: 'medium',
    contagious: true,
    
    symptoms: [
      'Fluffy white/green mold-like growth on body, head, or rostrum',
      'Altered swimming (inverted, circling)',
      'Shrimp stops feeding and becomes lethargic',
      'In severe cases: death within 48-72 hours'
    ],
    
    causes: [
      'Poor water quality (high organic waste)',
      'Overfeeding leading to biofilm buildup',
      'Introduced via contaminated plants or livestock'
    ],
    
    treatment: [
      'Salt Dip (preferred): 1 tbsp salt per cup of tank water for 30-60 seconds, daily until gone',
      'Potassium Permanganate (PP): Light pink solution for 15 min dip (advanced users only!)',
      'Tannins: Add Indian Almond Leaves to achieve 10-20 ppm concentration (natural method)',
      'Isolate infected shrimp immediately to prevent spread'
    ],
    
    prevention: [
      'Maintain pristine water (zero ammonia/nitrite)',
      'Avoid overfeeding (remove uneaten food after 2 hours)',
      'Increase water changes (20-30% weekly)',
      'Use a sponge filter to avoid biofilm buildup on intake'
    ],
    
    notes: 'Vorticella is a ciliated protozoan that attaches to the exoskeleton. It feeds on bacteria in the water, NOT the shrimp, but heavy infestations impair gill and swimming function.',
    affectedSpecies: ['Neocaridina', 'Caridina', 'Amano']
  },

  {
    id: 'ellobiopsidae',
    name: 'Ellobiopsidae (Green/Brown Fungus)',
    category: 'parasitic',
    severity: 'high',
    contagious: true,
    
    symptoms: [
      'Green, yellow, or brown fuzzy growth on shrimp body (often on carapace)',
      'Growth resembles tree branches or moss',
      'Shrimp becomes weak and stops breeding',
      'Death within 1-2 weeks if untreated'
    ],
    
    causes: [
      'Introduced via wild-caught shrimp or contaminated plants',
      'Unknown trigger (possibly stress/poor water)',
      'No known cure exists yet'
    ],
    
    treatment: [
      'No confirmed treatment available',
      'Immediate isolation and culling recommended to protect colony',
      'Some breeders report success with salt dips (unconfirmed)',
      'Best practice: Euthanize infected shrimp to prevent spread'
    ],
    
    prevention: [
      'Never introduce wild-caught shrimp to breeding tanks',
      'Strict quarantine (minimum 3 weeks)',
      'Avoid mixing species from different sources'
    ],
    
    notes: 'Often mistaken for a fungus, but it is a parasitic dinoflagellate. There is no proven cure, making prevention critical.',
    affectedSpecies: ['Neocaridina', 'Caridina']
  },

  // === BAKTERIELL ===
  {
    id: 'muscular-necrosis',
    name: 'Muscular Necrosis (White Muscle Disease)',
    category: 'bacterial',
    severity: 'critical',
    contagious: false,
    
    symptoms: [
      'Opaque white patches inside the body (visible through shell)',
      'Loss of color intensity (red shrimp turns pale pink)',
      'Muscle tissue appears milky/cloudy',
      'Rapid death (often within 24-48 hours)'
    ],
    
    causes: [
      'Poor water quality (nitrite, ammonia spikes)',
      'Sudden temperature changes',
      'Low oxygen levels',
      'Genetic weakness (inbreeding)'
    ],
    
    treatment: [
      'No cure once symptoms appear',
      'Immediate 50% water change',
      'Improve aeration (add air stone)',
      'Remove affected shrimp to reduce stress on colony'
    ],
    
    prevention: [
      'Maintain stable parameters (avoid drastic changes)',
      'Avoid inbreeding (introduce new bloodlines every 6 months)',
      'Use Indian Almond Leaves for antibacterial properties',
      'Never overfeed (causes ammonia spikes)'
    ],
    
    notes: 'This is the #1 killer of Neocaridina. Often called "sudden death syndrome." Once white patches appear, death is almost certain.',
    affectedSpecies: ['Neocaridina', 'Caridina']
  },

  {
    id: 'chitinolytic-bacterial-disease',
    name: 'Shell Disease (Chitinolytic Bacteria)',
    category: 'bacterial',
    severity: 'medium',
    contagious: false,
    
    symptoms: [
      'Black, brown, or rust-colored spots on shell',
      'Eroded or pitted carapace',
      'Lesions on tail, gills, or abdomen',
      'Shell becomes soft or brittle'
    ],
    
    causes: [
      'Poor water quality (high organic waste)',
      'Low pH (acidic water dissolves chitin)',
      'Physical damage to shell (injury, rough handling)',
      'Bacteria: Vibrio, Aeromonas, Pseudomonas, Benekea spp.'
    ],
    
    treatment: [
      'Improve water quality (30% water change)',
      'Raise pH to 7.0-7.5 (use crushed coral or baking soda)',
      'Add calcium supplement (cuttlebone or Shrimp King Mineral)',
      'Indian Almond Leaves (antibacterial tannins)',
      'Isolate severely infected shrimp'
    ],
    
    prevention: [
      'Maintain neutral to slightly alkaline pH (6.8-7.8)',
      'Provide calcium-rich diet (Spinach, Spirulina, Shrimp pellets)',
      'Avoid overfeeding (excess food = bacterial bloom)',
      'Use sponge filter (reduces shell abrasion)'
    ],
    
    notes: 'The bacteria degrades chitin (shell material). If caught early, shrimp can recover after molting. Severe cases are fatal.',
    affectedSpecies: ['Neocaridina', 'Caridina', 'Crayfish']
  },

  // === ENVIRONMENTAL ===
  {
    id: 'white-ring-of-death',
    name: 'White Ring of Death (Failed Molt)',
    category: 'environmental',
    severity: 'critical',
    contagious: false,
    
    symptoms: [
      'White ring visible around the body (between carapace and tail)',
      'Shrimp struggles to molt, gets stuck halfway',
      'Death within hours of molting attempt',
      'Often preceded by erratic swimming'
    ],
    
    causes: [
      'Calcium deficiency (soft water)',
      'Rapid parameter changes (osmotic shock)',
      'Low iodine levels',
      'Stress (overcrowding, aggressive tankmates)'
    ],
    
    treatment: [
      'No treatment once ring appears (almost always fatal)',
      'If caught early: Add mineral supplement immediately',
      'Raise GH to 6-8 (use Salty Shrimp GH+ or crushed coral)',
      'Avoid disturbing the shrimp (stress accelerates death)'
    ],
    
    prevention: [
      'Maintain GH at 6-8 dGH (use remineralizer for RO water)',
      'Provide calcium sources: Cuttlebone, Shrimp King Mineral, blanched spinach',
      'Add iodine supplement weekly (Seachem Equilibrium)',
      'NEVER change more than 20% water at once (osmotic shock)',
      'Acclimate new shrimp using drip method (minimum 1 hour)'
    ],
    
    notes: 'The white ring is a death sentence. Prevention is the ONLY cure. This is caused by osmotic stress or mineral deficiency.',
    affectedSpecies: ['Neocaridina', 'Caridina', 'Amano']
  },

  // === VIRAL ===
  {
    id: 'white-spot-syndrome-virus',
    name: 'White Spot Syndrome Virus (WSSV)',
    category: 'viral',
    severity: 'critical',
    contagious: true,
    
    symptoms: [
      'Tiny white spots (0.5mm) inside the shell',
      'Lethargy and loss of appetite',
      'Death within 72 hours of symptom onset',
      'Entire colony can be wiped out in days'
    ],
    
    causes: [
      'Introduced via infected shrimp or live food',
      'No cure exists',
      'Highly contagious (spreads through water)'
    ],
    
    treatment: [
      'No known cure',
      'Immediate culling of infected shrimp required',
      'Full tank sterilization (bleach, dry for 2 weeks)',
      'Do NOT reuse substrate, plants, or decor (virus survives)'
    ],
    
    prevention: [
      'NEVER buy shrimp from questionable sources',
      'Quarantine ALL new arrivals for minimum 3 weeks',
      'Avoid feeding live or frozen food from unknown sources',
      'If outbreak occurs: Cull entire colony and restart'
    ],
    
    notes: 'WSSV is the Ebola of the shrimp world. It is incurable and spreads like wildfire. Prevention is the only defense.',
    affectedSpecies: ['Neocaridina', 'Caridina', 'Amano', 'All Crustaceans']
  }
];
