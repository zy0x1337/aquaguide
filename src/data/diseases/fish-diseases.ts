// src/data/diseases/fish-diseases.ts

import type { Disease } from './index';

export const fishDiseases: Disease[] = [
  // === PARASITÄR ===
  {
    id: 'ich',
    name: 'Ichthyophthirius multifiliis (Ich)',
    category: 'parasitic',
    severity: 'high',
    contagious: true,
    
    symptoms: [
      'Small white spots (1-2mm) resembling salt grains on body, fins, and gills',
      'Fish rubbing against hardscape (flashing behavior)',
      'Clamped fins and lethargy',
      'Labored breathing (if gills are infected)',
      'Loss of appetite'
    ],
    
    causes: [
      'Introduced via new fish without proper quarantine',
      'Stress from sudden temperature drops or poor water quality',
      'Parasite is present in many tanks but only attacks weakened fish'
    ],
    
    treatment: [
      'Slowly raise temperature to 28-30°C (82-86°F) to speed up parasite life cycle (check species tolerance first!)',
      'Perform daily gravel vacuuming to remove fallen cysts (parasite reproduces in substrate)',
      'Dose medication: Malachite Green + Formalin (e.g., Kordon Rid-Ich Plus) OR Copper-based treatment',
      'Continue treatment for 3-5 days AFTER all spots disappear (parasite has invisible free-swimming stage)',
      'Add aeration (higher temps = lower oxygen)'
    ],
    
    prevention: [
      'Quarantine all new fish for minimum 2 weeks',
      'Avoid sudden temperature drops (stress triggers outbreaks)',
      'Maintain stable water parameters (0 ammonia, 0 nitrite)',
      'Use UV sterilizer to kill free-swimming parasites (optional)'
    ],
    
    notes: 'Ich has a 3-stage life cycle: 1) Feeding stage (on fish), 2) Reproductive stage (in substrate), 3) Free-swimming (infective). You can only kill it in stage 3, which is why prolonged treatment is critical.',
    affectedSpecies: ['All Freshwater Fish']
  },

  {
    id: 'velvet',
    name: 'Velvet Disease (Piscinoodinium)',
    category: 'parasitic',
    severity: 'critical',
    contagious: true,
    
    symptoms: [
      'Gold or rust-colored dusty coating on body (often visible under light)',
      'Extreme flashing (rubbing against objects)',
      'Rapid breathing (parasites attack gills first)',
      'Lethargy and loss of appetite',
      'Clamped fins and isolation from group'
    ],
    
    causes: [
      'Introduced via new fish or plants',
      'Poor water quality weakens immune system',
      'Parasite is photosynthetic (requires light to survive)'
    ],
    
    treatment: [
      'TURN OFF LIGHTS: Velvet relies on photosynthesis. Keep tank dark for 7-10 days',
      'Raise temperature to 28-30°C (speeds up life cycle)',
      'Copper-based medication: CuSO4 at 0.15-0.20 ppm (use test kit!)',
      'OR Malachite Green + Formalin combination',
      'Treat for minimum 10 days (parasite has invisible stages)',
      'Remove carbon from filter (it absorbs medication)'
    ],
    
    prevention: [
      'Quarantine new fish for 3 weeks (longer than Ich)',
      'Dip new plants in diluted hydrogen peroxide solution',
      'Maintain pristine water quality',
      'Avoid overfeeding (organic waste weakens fish)'
    ],
    
    notes: 'Velvet is deadlier than Ich because it attacks gills first, often killing fish before external symptoms appear. Darkness is your weapon—the parasite cannot survive without light.',
    affectedSpecies: ['All Freshwater Fish', 'Bettas particularly vulnerable']
  },

  {
    id: 'neon-tetra-disease',
    name: 'Neon Tetra Disease (NTD)',
    category: 'parasitic',
    severity: 'critical',
    contagious: true,
    
    symptoms: [
      'Loss of color (pale patch starting near dorsal fin)',
      'White lumps or cysts visible under skin',
      'Curved spine (S-shape deformity)',
      'Separation from shoal and restlessness at night',
      'Extreme weight loss (wasting disease)',
      'Death within 1-3 weeks of first symptoms'
    ],
    
    causes: [
      'Caused by Pleistophora hyphessobryconis (Microsporidian parasite)',
      'Spreads when healthy fish eat infected carcasses or feces',
      'Most common in wild-caught or poorly quarantined fish'
    ],
    
    treatment: [
      'THERE IS NO CURE',
      'Immediately remove infected fish (quarantine or humane euthanasia with Clove Oil)',
      'Do NOT allow other fish to eat the carcass (this spreads spores)',
      'Perform 30% water change and maintain pristine parameters',
      'Monitor remaining fish closely for symptoms'
    ],
    
    prevention: [
      'Buy only from reputable sources (avoid wild-caught for beginners)',
      'Strict 3-week quarantine for all new arrivals',
      'Remove dead fish immediately (within minutes)',
      'Feed high-quality food to boost immune systems',
      'Avoid overstocking (stress accelerates spread)'
    ],
    
    notes: 'NTD is 100% fatal once symptoms appear. The parasite destroys muscle tissue from the inside. Despite the name, it affects ALL small tetras, rasboras, and barbs. Prevention is the only defense.',
    affectedSpecies: ['Neon Tetras', 'Cardinal Tetras', 'Rasboras', 'Small Barbs']
  },

  // === BAKTERIELL ===
  {
    id: 'fin-rot',
    name: 'Fin Rot',
    category: 'bacterial',
    severity: 'medium',
    contagious: false, // Environmental (bacteria is always present)
    
    symptoms: [
      'Ragged or fraying edges of fins (looks like torn fabric)',
      'White, milky, or red edges on fins',
      'Progressive loss of fin tissue (starts at edges, moves toward body)',
      'Inflammation at fin base (severe cases)',
      'Black or brown discoloration on fin edges'
    ],
    
    causes: [
      'Poor water quality (ammonia/nitrite spikes damage slime coat)',
      'Physical injury from fin-nipping tankmates',
      'Sharp decorations cutting fins',
      'Secondary bacterial infection (Pseudomonas, Aeromonas, Vibrio species)'
    ],
    
    treatment: [
      'Test water immediately (Ammonia, Nitrite, Nitrate)',
      'Perform 50% water change to remove toxins',
      'Add aquarium salt (1 tablespoon per 5 gallons) IF species tolerates it (avoid with scaleless fish)',
      'Use antibacterial medication: Seachem KanaPlex OR API Fin & Body Cure',
      'For severe cases: Methylene Blue baths (5 drops per gallon for 30 min daily)',
      'Treatment duration: 7-10 days'
    ],
    
    prevention: [
      'Maintain 0 ppm Ammonia and 0 ppm Nitrite at all times',
      'Weekly water changes (20-30%)',
      'Avoid fin-nipping species (e.g., Tiger Barbs with Bettas)',
      'Sand smooth edges on driftwood and rocks',
      'Feed high-quality food to boost immune system'
    ],
    
    notes: 'Mild fin rot can heal on its own with clean water. Fins usually grow back, but may have clear edges or slight curling. If infection reaches the body (body rot), it becomes life-threatening.',
    affectedSpecies: ['All Fish', 'Bettas and Guppies particularly prone']
  },

  {
    id: 'columnaris',
    name: 'Columnaris (Mouth Fungus)',
    category: 'bacterial',
    severity: 'high',
    contagious: true,
    
    symptoms: [
      'White or gray cottony growth on mouth (often mistaken for fungus)',
      'Lesions on body, fins, or gills',
      'Saddle-like patch on back (classic "saddleback" appearance)',
      'Ulcers or open sores',
      'Rapid breathing (if gills are infected)',
      'Death within 48-72 hours if untreated'
    ],
    
    causes: [
      'Caused by Flavobacterium columnare (gram-negative bacteria)',
      'Thrives in warm water (75-85°F / 24-29°C)',
      'Stress, poor water quality, or physical injury triggers outbreak',
      'Highly contagious (spreads via water)'
    ],
    
    treatment: [
      'LOWER TEMPERATURE to 75°F (24°C) slowly (bacteria grows faster in heat)',
      'Salt treatment: 1 tablespoon per gallon (if species tolerates)',
      'Methylene Blue: 5 drops per gallon (external treatment)',
      'Antibiotics: Kanamycin (Seachem KanaPlex) + Nitrofurazone (API Furan-2) combination',
      'Treat for 10 days minimum, even if symptoms disappear',
      'Quarantine infected fish immediately'
    ],
    
    prevention: [
      'Maintain water temperature below 78°F (26°C) if possible',
      'Avoid overcrowding and aggressive tankmates',
      'Quarantine new fish for 3 weeks',
      'Never introduce water from fish store bags into your tank',
      'Maintain pristine water quality'
    ],
    
    notes: 'Columnaris is NOT a fungus, despite its cottony appearance. It is extremely aggressive and requires antibiotic treatment. The "saddle" lesion on the back is diagnostic.',
    affectedSpecies: ['All Freshwater Fish', 'Livebearers especially vulnerable']
  },

  {
    id: 'dropsy',
    name: 'Dropsy (Fluid Retention)',
    category: 'bacterial',
    severity: 'critical',
    contagious: false, // Bacteria is present, but only attacks weak fish
    
    symptoms: [
      'Extreme bloating (body swells like a balloon)',
      'Pine-coning of scales (scales stick out perpendicular to body)',
      'Bulging eyes (exophthalmia)',
      'Lethargy and bottom-dwelling',
      'Loss of appetite',
      'Pale gills and labored breathing'
    ],
    
    causes: [
      'Caused by Aeromonas bacteria (gram-negative)',
      'Symptom of kidney/organ failure (not a primary disease)',
      'Poor water quality, old age, or genetic weakness',
      'Internal parasites or tumors can also cause similar symptoms'
    ],
    
    treatment: [
      'Isolate fish in hospital tank immediately',
      'Epsom Salt bath: 1 tablespoon per 5 gallons (helps reduce fluid retention)',
      'Antibiotics: Kanamycin (Seachem KanaPlex) OR Maracyn-Two',
      'Raise temperature slightly (28°C) to speed metabolism',
      'Hand-feed high-quality food (if fish accepts)',
      'Prognosis: Poor (50-70% fatal even with treatment)'
    ],
    
    prevention: [
      'Maintain pristine water quality (dropsy is almost always preceded by stress)',
      'Feed varied, high-quality diet',
      'Avoid overfeeding (obesity weakens organs)',
      'Quarantine new fish',
      'Euthanize humanely if fish stops eating or cant swim'
    ],
    
    notes: 'Dropsy is a SYMPTOM, not a disease itself. It indicates catastrophic internal failure (kidneys, liver). Once scales pine-cone, survival rate is very low. Early intervention is critical.',
    affectedSpecies: ['All Freshwater Fish', 'Bettas, Goldfish, and Gouramis particularly prone']
  },

  // === FUNGAL ===
  {
    id: 'fungal-infection',
    name: 'Fungal Infection (Saprolegnia)',
    category: 'fungal',
    severity: 'medium',
    contagious: false, // Secondary infection (requires injury first)
    
    symptoms: [
      'White or gray cottony tufts on skin, fins, or mouth',
      'Fuzzy appearance (looks like bread mold)',
      'Usually appears at site of injury or wound',
      'Localized (does not spread rapidly)'
    ],
    
    causes: [
      'Secondary infection after physical injury, bite wound, or bacterial infection',
      'Poor water quality allows fungal spores (always present) to colonize',
      'Dead eggs or organic matter in tank can carry fungus'
    ],
    
    treatment: [
      'Aquarium salt: 1 tablespoon per 5 gallons (salt inhibits fungal growth)',
      'Methylene Blue: 5 drops per gallon for 3-5 days',
      'API Fungus Cure or Malachite Green',
      'For severe cases: Potassium permanganate dip (use extreme caution)',
      'Improve water quality immediately'
    ],
    
    prevention: [
      'Remove dead organic matter (uneaten food, dead fish, rotting plants)',
      'Maintain 0 ammonia/nitrite',
      'Treat injuries immediately to prevent fungal colonization',
      'Avoid rough tankmates'
    ],
    
    notes: 'True fungal infections are RARE in fish. Most "fungus" is actually Columnaris bacteria. If it spreads rapidly or kills fish, it is NOT fungus.',
    affectedSpecies: ['All Fish', 'Eggs particularly vulnerable']
  }
];
