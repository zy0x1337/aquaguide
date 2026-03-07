// src/data/diseases/fish-diseases.ts

import type { Disease } from './index';

export const fishDiseases: Disease[] = [
  // === PARASITÄR ===
  {
  "id": "ich",
  "name": "Ichthyophthirius multifiliis (Ich)",
  "category": "parasitic",
  "severity": "high",
  "contagious": true,
  
  "symptoms": [
    "White spot stage: Distinct white spots (1-2mm) like salt grains on body and fins",
    "Behavioral stage: Flashing (rubbing against objects) due to irritation",
    "Advanced stage: Clamped fins, lethargy, and loss of appetite",
    "Respiratory distress: Gasping at surface if gills are heavily infected"
  ],
  
  "causes": [
    "Introduction of infected fish or plants without quarantine",
    "Sudden temperature drops or stress weakening the fish immune system",
    "Transport stress triggering latent infections in carrier fish"
  ],
  
  "treatment": [
    "Option A (Heat): Raise temperature slowly to 30°C (86°F) over 24h to accelerate the parasite life cycle. Stop if fish show signs of heat stress. Add extra aeration immediately.",
    "Option B (Medication): Dose Malachite Green + Formalin combinations (e.g., Kordon Rid-Ich) OR Copper-based treatments. Follow manufacturer dosage strictly.",
    "Safety Warning: Scaleless fish (Loaches, Catfish) and Tetras are sensitive to medication. Use half-dose or formalin-only products for sensitive species.",
    "Crucial Step: Perform daily deep gravel vacuuming to remove tomonts (reproductive cysts) from the substrate.",
    "Duration: Continue treatment for at least 3-5 days AFTER the last visible spot disappears to kill the free-swimming theront stage."
  ],
  
  "prevention": [
    "Quarantine all new fish for a minimum of 2-4 weeks in a separate tank",
    "Maintain stable water parameters; avoid rapid temperature fluctuations",
    "Disinfect nets and equipment shared between tanks",
    "Use a UV sterilizer to kill free-swimming infectious stages (optional but effective)"
  ],
  
  "notes": "Ich has a complex life cycle. The parasite is only vulnerable to treatment during the free-swimming stage (theront). This is why extended treatment is mandatory, even after spots vanish.",
  "affectedSpecies": ["All Freshwater Fish"]
},

  {
  "id": "velvet",
  "name": "Velvet Disease (Piscinoodinium)",
  "category": "parasitic",
  "severity": "critical",
  "contagious": true,
  
  "symptoms": [
    "Visual stage: Distinctive gold or rust-colored 'dusty' coating on skin (visible under angled light)",
    "Behavioral stage: Severe flashing (rubbing) against substrate due to irritation",
    "Respiratory stage: Rapid/labored breathing as parasites primarily attack gills",
    "Advanced stage: Lethargy, clamped fins, and isolation from the school"
  ],
  
  "causes": [
    "Introduction via infected fish, plants, or contaminated water",
    "Poor water quality and stress compromising the fish's slime coat",
    "Life cycle dependency: Parasite contains chlorophyll and requires light to reproduce"
  ],
  
  "treatment": [
    "Option A (Environmental): Enforce total tank blackout for 7-10 days. The parasite relies on photosynthesis; darkness inhibits reproduction.",
    "Option B (Medication): Dose Copper Sulfate (CuSO4) at 0.15-0.20 ppm. A copper test kit is mandatory to maintain safe therapeutic levels.",
    "Option C (Alternative): Malachite Green + Formalin combinations if copper is unavailable.",
    "Safety Warning: Copper is lethal to invertebrates (shrimp/snails) and toxic to scaleless fish (Loaches, Catfish). Use half-dose or formalin-only for sensitive species.",
    "Crucial Step: Raise temperature slowly to 28-30°C (82-86°F) to speed up the parasite life cycle, ensuring the medication targets the vulnerable stage.",
    "Supportive Action: Remove activated carbon from filters as it will absorb medication."
  ],
  
  "prevention": [
    "Quarantine all new fish for minimum 3 weeks (longer than Ich requires)",
    "Dip new plants in a diluted potassium permanganate or hydrogen peroxide solution",
    "Maintain pristine water quality and avoid sudden temperature drops",
    "Dimming tank lights for new arrivals can help prevent outbreaks"
  ],
  
  "notes": "Velvet is often deadlier than Ich because it attacks the gills first, suffocating fish before external symptoms are obvious. Darkness is a critical weapon in treatment.",
  "affectedSpecies": ["All Freshwater Fish", "Bettas", "Scaleless Fish (High Risk)"]
},

  {
  "id": "neon-tetra-disease",
  "name": "Neon Tetra Disease (NTD)",
  "category": "parasitic",
  "severity": "critical",
  "contagious": true,
  
  "symptoms": [
    "Visual stage: Distinct pale patch appearing behind the dorsal fin (loss of iridescence)",
    "Progression stage: White or grey cysts visible beneath the skin; spinal deformity (curved spine)",
    "Behavioral stage: Isolation from the shoal, erratic swimming, and severe restlessness",
    "Terminal stage: Rapid weight loss ('wasting away') despite eating, leading to death within weeks"
  ],
  
  "causes": [
    "Causative agent: Pleistophora hyphessobryconis (Microsporidian parasite) infecting muscle tissue",
    "Transmission: Ingestion of spores from infected carcasses or contaminated feces",
    "Vector risk: High prevalence in wild-caught fish or inadequate quarantine procedures"
  ],
  
  "treatment": [
    "Prognosis: There is currently no known cure for NTD. Infected fish will not recover.",
    "Containment Action: Immediately remove infected fish to a separate quarantine tank or humanely euthanize with Clove Oil.",
    "Safety Warning: Do NOT allow healthy fish to eat the carcass. Digestion releases infectious spores into the tank.",
    "Hygiene Step: Perform deep gravel vacuuming and large water changes to remove spores from the substrate.",
    "Observation: Monitor the remaining population closely for at least 6 months; any fish showing symptoms must be removed immediately."
  ],
  
  "prevention": [
    "Quarantine all new fish for a minimum of 3-4 weeks in a separate tank",
    "Purchase only tank-raised fish from reputable breeders; avoid wild-caught imports",
    "Remove dead fish within minutes to prevent cannibalism",
    "Disinfect nets and equipment with bleach solution between tanks"
  ],
  
  "notes": "NTD is 100% fatal. The parasite consumes muscle tissue, causing the characteristic wasting and curvature. Despite the name, it affects many small characins, not just Neons.",
  "affectedSpecies": ["Neon Tetra", "Cardinal Tetra", "Rasboras", "Danios", "Barbs"]
},

  {
    id: 'anchor-worms',
    name: 'Anchor Worms (Lernaea)',
    category: 'parasitic',
    severity: 'high',
    contagious: true,
    
    symptoms: [
      'Visible worm-like parasites (2-10mm) protruding from fish body',
      'Red, inflamed wounds at attachment sites',
      'Fish rubbing against objects (flashing)',
      'Ulcers and secondary bacterial infections at wounds',
      'Lethargy and loss of appetite',
      'Thread-like structures with Y-shaped anchor head'
    ],
    
    causes: [
      'Copepod crustacean parasite Lernaea cyprinacea',
      'Introduced via new fish, live food, or pond water',
      'Female burrows into skin, causes tissue damage',
      'Most common in outdoor ponds and goldfish'
    ],
    
    treatment: [
      'Manual removal: Use tweezers to carefully pull out entire worm (including anchor)',
      'Dab wound with Betadine or Malachite Green to prevent infection',
      'Potassium permanganate bath: 10mg/L for 30 minutes (kills free-swimming larvae)',
      'OR Dimilin (Diflubenzuron): 0.06mg/L for 14 days (prevents molting)',
      'Treat entire tank for 3 weeks to kill larvae',
      'Repeat treatment after 7 days to target new hatches'
    ],
    
    prevention: [
      'Quarantine new fish for 4 weeks',
      'Avoid live food from unknown sources',
      'Never add pond water to aquarium',
      'Inspect new fish closely for parasites',
      'Use UV sterilizer or dechlorinate pond water'
    ],
    
    notes: 'Only female anchor worms are visible (males are microscopic). The visible "worm" is actually the egg sac. Removing the worm leaves a wound that MUST be treated to prevent fungal/bacterial infection.',
    affectedSpecies: ['Goldfish', 'Koi', 'All Coldwater Fish', 'Occasionally tropical species']
  },

  {
    id: 'gill-flukes',
    name: 'Gill Flukes (Dactylogyrus)',
    category: 'parasitic',
    severity: 'high',
    contagious: true,
    
    symptoms: [
      'Rapid breathing (gasping at surface)',
      'Flared or inflamed gills',
      'Excessive mucus production on gills',
      'One or both opercula (gill covers) held open',
      'Scratching or rubbing gills against objects',
      'Lethargy and loss of appetite'
    ],
    
    causes: [
      'Monogenean flatworm parasites attach to gill filaments',
      'Introduced via new fish or contaminated equipment',
      'Thrive in poor water quality and overcrowded tanks',
      'Reproduce rapidly (30+ eggs per day)'
    ],
    
    treatment: [
      'Praziquantel: 10mg per liter (3 doses, 7 days apart)',
      'Salt baths: 3% solution for 10-15 minutes (use dechlorinated water)',
      'Formalin baths: 25mg/L for 30-60 minutes (use cautiously)',
      'Increase aeration during treatment',
      'Perform 50% water change before each redose',
      'Remove carbon from filter'
    ],
    
    prevention: [
      'Quarantine new fish for 3 weeks',
      'Maintain excellent water quality (0 ammonia/nitrite)',
      'Avoid overstocking',
      'Clean equipment between tanks',
      'Feed immune-boosting foods (garlic, spirulina)'
    ],
    
    notes: 'Gill flukes are microscopic (0.3-1mm). You cannot see them without a microscope. Diagnosis is based on respiratory symptoms. Skin flukes (Gyrodactylus) cause similar symptoms on the body.',
    affectedSpecies: ['All Freshwater Fish', 'Discus, Goldfish, and Koi particularly prone']
  },

  {
    id: 'hole-in-head',
    name: 'Hole-in-the-Head Disease (HITH)',
    category: 'parasitic',
    severity: 'high',
    contagious: false,
    
    symptoms: [
      'Small pits or holes developing on head and lateral line',
      'White, stringy mucus secretion from holes',
      'Lesions enlarge over time (can expose bone)',
      'Loss of appetite and color',
      'Sunken eyes and lethargy',
      'Secondary bacterial infections in wounds'
    ],
    
    causes: [
      'Hexamita (Spironucleus) flagellate parasites in intestines',
      'Nutritional deficiency (Vitamin C, Calcium, Phosphorus)',
      'Activated carbon use (leeches trace minerals)',
      'Poor water quality and stress',
      'Most common in large cichlids and discus'
    ],
    
    treatment: [
      'Metronidazole: 250mg per 40L every other day (5 doses total)',
      'Feed medicated food: Mix metronidazole powder with gel food',
      'Add vitamins and minerals to food (Repashy Vitamin C)',
      'Perform 50% water changes before each dose',
      'Remove activated carbon from filter permanently',
      'Raise temperature to 28-30°C (speeds metabolism)'
    ],
    
    prevention: [
      'Feed varied, high-quality diet (spirulina, vegetables, frozen foods)',
      'Avoid activated carbon in filters (use Purigen instead)',
      'Maintain pristine water quality',
      'Supplement food with vitamins 2x per week',
      'Reduce stress (proper tank size, compatible tankmates)'
    ],
    
    notes: 'HITH is NOT always caused by Hexamita. It is a multifactorial disease. Many cases are pure nutritional deficiency. Cichlids fed only pellets are at high risk. Holes can heal, but severe damage may scar.',
    affectedSpecies: ['Oscars', 'Discus', 'Severums', 'Angelfish', 'All large Cichlids']
  },

  // === BAKTERIELL ===
  {
    id: 'fin-rot',
    name: 'Fin Rot',
    category: 'bacterial',
    severity: 'medium',
    contagious: false,
    
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
    contagious: false,
    
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

  {
    id: 'pop-eye',
    name: 'Popeye (Exophthalmia)',
    category: 'bacterial',
    severity: 'medium',
    contagious: false,
    
    symptoms: [
      'One or both eyes protrude abnormally from socket',
      'Cloudy or whitish appearance around eye',
      'Swelling behind the eye',
      'Ruptured eye in severe cases (irreversible damage)',
      'Lethargy and loss of appetite'
    ],
    
    causes: [
      'Bacterial infection behind the eye (Aeromonas, Pseudomonas)',
      'Physical injury (fighting, sharp objects)',
      'Poor water quality (ammonia/nitrite damage)',
      'Internal parasites or tuberculosis (rare)',
      'Vitamin A deficiency'
    ],
    
    treatment: [
      'Test water immediately (fix parameters first)',
      'Perform 50% water change',
      'Epsom salt: 1-3 tablespoons per 5 gallons (reduces swelling)',
      'Antibiotics: Kanamycin (KanaPlex) or Maracyn-Two',
      'Treat for 10-14 days',
      'If unilateral (one eye): likely physical injury, will heal with clean water',
      'If bilateral (both eyes): systemic infection, requires antibiotics'
    ],
    
    prevention: [
      'Maintain 0 ammonia/nitrite',
      'Avoid aggressive tankmates',
      'Remove sharp decorations',
      'Feed vitamin-rich foods (spirulina, vegetables)',
      'Quarantine new fish'
    ],
    
    notes: 'Unilateral popeye (one eye) often resolves on its own with clean water. Bilateral popeye (both eyes) indicates serious systemic infection. Ruptured eyes do not regenerate.',
    affectedSpecies: ['All Fish', 'Goldfish and Bettas particularly prone']
  },

  {
    id: 'fish-tuberculosis',
    name: 'Fish Tuberculosis (Mycobacteriosis)',
    category: 'bacterial',
    severity: 'critical',
    contagious: true,
    
    symptoms: [
      'Chronic weight loss ("wasting disease")',
      'Curved spine (lordosis or kyphosis)',
      'Hollow belly despite eating',
      'Ulcers, skin lesions, or fin rot',
      'Popeye and dropsy in advanced stages',
      'Slow progression over weeks/months',
      'HUMAN HEALTH RISK: Can infect open wounds on hands'
    ],
    
    causes: [
      'Mycobacterium marinum, fortuitum, or chelonae (acid-fast bacteria)',
      'Spread via contaminated water, feces, or cannibalism of infected fish',
      'Extremely persistent (survives in gravel and equipment)',
      'Stress and poor conditions accelerate progression'
    ],
    
    treatment: [
      'THERE IS NO PRACTICAL CURE',
      'Antibiotics (Kanamycin + Rifampin) may slow progression but require months',
      'Euthanize severely affected fish (prevents spread)',
      'Disinfect tank with 10% bleach solution for 30 minutes',
      'Discard all gravel, plants, and porous decor',
      'Wear gloves when handling water (zoonotic risk!)'
    ],
    
    prevention: [
      'Quarantine new fish for 4-6 weeks',
      'Buy from reputable sources',
      'Avoid overcrowding and stress',
      'Remove dead fish immediately',
      'Never reuse equipment from infected tanks without sterilization',
      'Wear gloves if you have cuts/wounds on hands'
    ],
    
    notes: 'Fish TB is one of the most serious aquarium diseases. It is slow-acting but 100% fatal. Humans can contract "Fish Tank Granuloma" from contaminated water—painful skin nodules requiring antibiotics. Diagnosis requires necropsy.',
    affectedSpecies: ['All Freshwater Fish', 'Labyrinth fish, Tetras, and Goldfish particularly prone']
  },

  // === FUNGAL ===
  {
    id: 'fungal-infection',
    name: 'Fungal Infection (Saprolegnia)',
    category: 'fungal',
    severity: 'medium',
    contagious: false,
    
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
  },

  // === OTHER / ENVIRONMENTAL ===
  {
    id: 'swim-bladder-disease',
    name: 'Swim Bladder Disorder',
    category: 'environmental',
    severity: 'medium',
    contagious: false,
    
    symptoms: [
      'Fish floating at surface (unable to dive)',
      'Fish sinking to bottom (unable to rise)',
      'Swimming upside-down or sideways',
      'Difficulty maintaining balance',
      'Curved or twisted spine',
      'Normal appetite in most cases'
    ],
    
    causes: [
      'Overfeeding or swallowing air while eating',
      'Constipation (most common)',
      'Bacterial infection in swim bladder',
      'Physical injury or genetic deformity',
      'Rapid temperature change',
      'Poor water quality'
    ],
    
    treatment: [
      'FAST THE FISH: Do not feed for 2-3 days (allows digestive system to clear)',
      'Raise temperature to 28°C (speeds digestion)',
      'Feed blanched pea (remove shell, mash softly) on day 4 (natural laxative)',
      'If bacterial: Antibiotics (Kanamycin)',
      'If constipation persists: Epsom salt 1 tsp per 5 gallons',
      'Lower water level in tank (reduces pressure on swim bladder)'
    ],
    
    prevention: [
      'Soak dry pellets before feeding (prevents swelling in stomach)',
      'Feed smaller portions 2x daily instead of 1 large meal',
      'Avoid floating pellets (fish swallow air)',
      'Feed sinking granules or frozen food',
      'Fast fish 1 day per week',
      'Maintain stable temperature'
    ],
    
    notes: 'Swim bladder disorder is a SYMPTOM, not a disease. It has multiple causes. Fancy goldfish and bettas are genetically prone due to compressed body shape. Chronic cases may be permanent.',
    affectedSpecies: ['Fancy Goldfish', 'Bettas', 'Balloon Mollies', 'All deep-bodied fish']
  },

  {
    id: 'ammonia-poisoning',
    name: 'Ammonia Poisoning',
    category: 'environmental',
    severity: 'critical',
    contagious: false,
    
    symptoms: [
      'Red or bleeding gills',
      'Gasping at surface',
      'Red streaks in fins (hemorrhaging)',
      'Lethargy and loss of appetite',
      'Clamped fins',
      'Lying on bottom or erratic swimming',
      'Death within hours if severe'
    ],
    
    causes: [
      'New tank syndrome (insufficient beneficial bacteria)',
      'Overstocking or overfeeding',
      'Dead fish or rotting organic matter',
      'Filter failure or cleaning beneficial bacteria',
      'Chloramine in tap water (not dechlorinated)'
    ],
    
    treatment: [
      'IMMEDIATELY perform 50% water change with dechlorinated water',
      'Test ammonia level (should be 0 ppm)',
      'Add Seachem Prime (detoxifies ammonia for 24-48 hours)',
      'Stop feeding for 24 hours',
      'Add bottled bacteria (Seachem Stability, API Quick Start)',
      'Increase aeration',
      'Repeat water changes daily until ammonia reads 0 ppm'
    ],
    
    prevention: [
      'Cycle tank for 4-6 weeks BEFORE adding fish',
      'Test water weekly (ammonia should ALWAYS be 0 ppm)',
      'Do not overfeed (remove uneaten food after 2 minutes)',
      'Properly stock tank (1 inch of fish per gallon is a myth—research each species)',
      'Use dechlorinator for all water changes',
      'Never clean filter media under tap water (kills bacteria)'
    ],
    
    notes: 'Ammonia is the #1 killer in new aquariums. Even 0.25 ppm is toxic. Chronic low-level ammonia causes permanent gill damage. "Fish-in" cycling is cruel—always cycle without fish first.',
    affectedSpecies: ['ALL AQUATIC LIFE']
  },

  {
    id: 'nitrite-poisoning',
    name: 'Nitrite Poisoning (Brown Blood Disease)',
    category: 'environmental',
    severity: 'critical',
    contagious: false,
    
    symptoms: [
      'Brown or purple gills (instead of bright red)',
      'Rapid breathing or gasping at surface',
      'Lethargy and loss of coordination',
      'Fish hanging at surface near filter outflow',
      'Brown streaks in fins',
      'Sudden death in severe cases'
    ],
    
    causes: [
      'Second stage of new tank syndrome (ammonia converts to nitrite)',
      'Insufficient Nitrobacter bacteria (converts nitrite to nitrate)',
      'Filter disturbance during cycling',
      'Overstocking during tank maturation'
    ],
    
    treatment: [
      'Perform 50% water change immediately',
      'Add aquarium salt: 1 tablespoon per 5 gallons (chloride blocks nitrite absorption)',
      'Test nitrite (should be 0 ppm)',
      'Add Seachem Prime (temporarily detoxifies nitrite)',
      'Stop feeding for 24 hours',
      'Increase aeration (nitrite blocks oxygen transport in blood)',
      'Repeat water changes daily until nitrite = 0 ppm'
    ],
    
    prevention: [
      'Complete nitrogen cycle before adding fish',
      'Test nitrite weekly during first 2 months',
      'Add aquarium salt during cycling (1 tsp per gallon)',
      'Do not overstock new tanks',
      'Be patient—nitrite spike typically occurs 2-3 weeks after setup'
    ],
    
    notes: 'Nitrite binds to hemoglobin, preventing oxygen transport (methemoglobinemia). Fish literally suffocate even in oxygenated water. Salt (NaCl) provides chloride ions, which compete with nitrite at gill receptors.',
    affectedSpecies: ['ALL AQUATIC LIFE']
  }
];
