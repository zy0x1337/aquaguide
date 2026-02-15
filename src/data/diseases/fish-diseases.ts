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
