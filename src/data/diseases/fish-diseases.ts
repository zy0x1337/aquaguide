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
  "id": "anchor-worms",
  "name": "Anchor Worms (Lernaea)",
  "category": "parasitic",
  "severity": "high",
  "contagious": true,
  
  "symptoms": [
    "Visual stage: Distinctive whitish-green threads (up to 10mm) protruding from the fish's body, often with two egg sacs at the end",
    "Inflammation stage: Red, swollen wounds or ulcers at the attachment site where the anchor is buried",
    "Behavioral stage: Intense flashing (rubbing) against objects due to irritation and pain",
    "Systemic stage: Lethargy, weight loss, and secondary bacterial infections"
  ],
  
  "causes": [
    "Causative agent: Lernaea cyprinacea, a parasitic copepod crustacean",
    "Vector: Introduction via infected pond fish, live foods, or contaminated water",
    "Mechanism: The female parasite burrows deep into muscle tissue with a Y-shaped anchor, causing severe tissue damage"
  ],
  
  "treatment": [
    "Option A (Physical): Use sterile tweezers to grip the parasite close to the skin. Pull steadily at the angle of entry to remove the entire anchor. Do not jerk.",
    "Option B (Chemical): Dose Dimilin (Diflubenzuron) at 0.06mg/L. This disrupts the parasite's life cycle but requires a prescription in some countries.",
    "Supportive Action: Perform Potassium Permanganate dips (10mg/L for 30 mins) to kill free-swimming larvae.",
    "Critical Post-Care: Immediately apply Betadine or Mercurochrome to the wound after removal to prevent fatal secondary infections.",
    "Duration: Treat the entire system for 3 weeks. Repeat treatment after 7 days to target the next generation of larvae.",
    "Safety Warning: Breaking the worm during removal leaves the head embedded, leading to infection. If the anchor does not release, use chemical treatment instead."
  ],
  
  "prevention": [
    "Quarantine all new fish for 4 weeks minimum",
    "Never add water from outdoor ponds to aquariums",
    "Inspect new fish closely for trailing threads before purchase",
    "Disinfect nets and equipment between tanks"
  ],
  
  "notes": "Only the female is parasitic; the visible 'worm' is her egg sacs. Common in goldfish and koi, but can infect tropical species exposed to pond-sourced materials.",
  "affectedSpecies": ["Goldfish", "Koi", "Livebearers", "Cichlids"]
},

{
  "id": "gill-flukes",
  "name": "Gill Flukes (Dactylogyrus)",
  "category": "parasitic",
  "severity": "high",
  "contagious": true,
  
  "symptoms": [
    "Respiratory stage: Rapid or labored breathing; gasping at the surface due to reduced oxygen absorption",
    "Visual stage: Inflamed, swollen gill covers (opercula) often held open; excessive mucus production",
    "Behavioral stage: Flashing (rubbing gills) against substrate or hardscape to dislodge parasites",
    "Systemic stage: Lethargy, loss of appetite, and fading colors"
  ],
  
  "causes": [
    "Causative agent: Dactylogyrus species (Monogenean flatworms) attaching to gill filaments with hooks",
    "Transmission: Introduction via infected fish or contaminated equipment; direct life cycle (no intermediate host)",
    "Trigger: Poor water quality (high organics) and overcrowding accelerate reproduction rates"
  ],
  
  "treatment": [
    "Option A (Best Practice): Praziquantel at 10mg/L. This is gentle on fish but effective against flukes. Repeat dose after 7 days to kill hatching larvae.",
    "Option B (Chemical): Formalin baths at 25mg/L for 30-60 minutes in a separate container. Effective but stresses fish with already damaged gills.",
    "Option C (Physical): Salt baths (3% solution) for 10-15 minutes. Dislodges adult parasites but requires careful monitoring.",
    "Crucial Support: Increase aeration/agitation to maximum. Damaged gills cannot extract oxygen efficiently; hypoxia is the primary cause of death during treatment.",
    "Maintenance: Perform 50% water changes before re-dosing to remove organic waste. Remove activated carbon from filter."
  ],
  
  "prevention": [
    "Quarantine all new fish for minimum 3-4 weeks",
    "Maintain pristine water quality (0 ammonia, 0 nitrite)",
    "Avoid overstocking which facilitates rapid parasite transmission",
    "Disinfect nets and equipment between tanks"
  ],
  
  "notes": "Gill flukes are microscopic (0.3-1mm) and cannot be seen with the naked eye. Diagnosis relies on symptom recognition. Skin flukes (Gyrodactylus) are similar but live on the body surface and are viviparous (live-bearing).",
  "affectedSpecies": ["All Freshwater Fish", "Discus", "Goldfish", "Koi"]
},

{
  "id": "hole-in-head",
  "name": "Hole-in-the-Head Disease (HITH)",
  "category": "parasitic",
  "severity": "high",
  "contagious": false,
  
  "symptoms": [
    "Early stage: Small pinpoint pits or indentations on the head and along the lateral line",
    "Progressive stage: Pits enlarge into crater-like lesions, often oozing white stringy mucus",
    "Advanced stage: Deep ulcers that may expose the bone structure of the skull",
    "Systemic signs: Loss of appetite, faded coloration, and lethargy"
  ],
  
  "causes": [
    "Primary pathogen: Hexamita (Spironucleus) flagellate parasites invading the intestinal tract and lesions",
    "Nutritional factor: Deficiencies in Vitamin C, Vitamin D, Calcium, or Phosphorus affecting tissue integrity",
    "Environmental trigger: Long-term use of Activated Carbon (leeches essential trace elements from water)",
    "Stress factor: Poor water quality (high nitrates) compromising the immune system"
  ],
  
  "treatment": [
    "Option A (Medical): Dose Metronidazole at 250mg per 40L every other day for 5 doses. Best combined with medicated food (mix powder with gel food) for internal effectiveness.",
    "Option B (Nutritional): Supplement diet with Vitamin C and mineral-rich foods (e.g., Repashy with vitamin boost). Nutritional recovery is slow but essential.",
    "Crucial Action: Permanently remove Activated Carbon from the filter. It is a major contributing factor in many cases.",
    "Supportive Action: Perform large (50%) water changes before each treatment dose to lower nitrates and bacterial load.",
    "Safety Warning: Raise temperature gradually to 28-30°C (82-86°F) to boost metabolism, but ensure oxygen levels remain high."
  ],
  
  "prevention": [
    "Feed a varied, high-quality diet including frozen foods and vegetable matter; avoid exclusive pellet diets",
    "Avoid using Activated Carbon in filters; use Purigen or fine filter wool instead",
    "Maintain low nitrate levels (<20 ppm) through weekly water changes",
    "Supplement food with vitamins and minerals at least 2x per week"
  ],
  
  "notes": "HITH is multifactorial—it is rarely just parasites or just nutrition. Successful treatment requires addressing both. Healing of deep lesions takes months and may leave scars.",
  "affectedSpecies": ["Oscars", "Discus", "Severums", "Angelfish", "Large Cichlids"]
},

  // === BAKTERIELL ===
{
  "id": "fin-rot",
  "name": "Fin Rot",
  "category": "bacterial",
  "severity": "medium",
  "contagious": false,
  
  "symptoms": [
    "Visual stage: Ragged, fraying fin edges resembling torn fabric; often whitish, milky, or blood-tinged tips",
    "Progressive stage: Steady erosion of fin tissue moving from the edges toward the body",
    "Color changes: Black or brown edges often indicate necrotic (dead) tissue or healing margins (melanization)",
    "Systemic sign: Inflammation or red streaks at the fin base; indicates advanced infection threatening the body"
  ],
  
  "causes": [
    "Primary trigger: Poor water quality (Ammonia/Nitrite spikes) damaging the protective slime coat",
    "Physical vector: Fin-nipping tankmates or abrasions from sharp decorations creating entry points",
    "Pathogen: Opportunistic bacteria (Pseudomonas, Aeromonas) infecting stressed or damaged tissue"
  ],
  
  "treatment": [
    "Option A (Environmental): Immediate 50% water change and substrate vacuuming. Clean water is often sufficient to reverse mild cases.",
    "Option B (Supportive): Add Aquarium Salt (1 tablespoon per 5 gallons) to reduce osmotic stress. *Safety Warning: Do NOT use with scaleless fish (Loaches, Corys) or live plants sensitive to salt.*",
    "Option C (Medication): If rot persists after 24h, dose broad-spectrum antibiotics (e.g., Seachem KanaPlex, API Fin & Body Cure).",
    "Supportive Action: Methylene Blue baths (5 drops per gallon for 30 mins) for severe cases to combat fungal/bacterial co-infections.",
    "Duration: Treat for a minimum of 7-10 days. Continue until clear regrowth (often transparent) is visible."
  ],
  
  "prevention": [
    "Maintain strict water quality (0 ppm Ammonia, 0 ppm Nitrite) via weekly water changes",
    "Remove or separate aggressive fin-nipping species from long-finned fish",
    "Smooth sharp driftwood edges with sandpaper to prevent injury",
    "Feed high-quality foods rich in vitamins to boost immune response"
  ],
  
  "notes": "Mild cases heal with clean water alone. Fins regenerate but may grow back clear or slightly uneven. If infection reaches the body ('Body Rot'), survival rates drop significantly.",
  "affectedSpecies": ["All Fish", "Bettas", "Guppies", "Goldfish"]
},

{
  "id": "columnaris",
  "name": "Columnaris (Mouth Fungus)",
  "category": 'bacterial',
  "severity": 'high',
  "contagious": true,
  
  "symptoms": [
    "Visual stage: White, gray, or yellowish cottony growths on the mouth, body, or fins (often mistaken for true fungus)",
    "Specific lesion: Distinctive 'saddleback' lesion—a white band wrapping around the dorsal area/back",
    "Progressive stage: Raw ulcers or open sores on the skin; frayed fins",
    "Systemic stage: Rapid breathing if gills are infected; lethargy and anorexia"
  ],
  
  "causes": [
    "Causative agent: Flavobacterium columnare (Gram-negative bacteria)",
    "Trigger: Stress, overcrowding, or poor water quality (especially high organic load)",
    "Environmental factor: Thrives in warm water (24-29°C / 75-85°F); higher temperatures accelerate bacterial reproduction"
  ],
  
  "treatment": [
    "Option A (Environmental): Slowly lower water temperature to 24°C (75°F). Unlike Ich, warmth aids the bacteria; cooling slows its progression.",
    "Option B (Medication): Antibiotics are mandatory. Use Kanamycin (Seachem KanaPlex) combined with Nitrofurazone (API Furan-2) for effective treatment.",
    "Option C (Supportive): Salt treatment (1 tbsp per gallon) can assist osmoregulation, provided species tolerate it.",
    "Supportive Action: Methylene Blue baths (5 drops per gallon) can help treat external lesions and protect open wounds.",
    "Safety Warning: Do NOT treat with anti-fungal medication. Despite its woolly appearance, Columnaris is 100% bacterial."
  ],
  
  "prevention": [
    "Quarantine all new fish for 3-4 weeks",
    "Avoid extreme overcrowding which facilitates rapid transmission",
    "Maintain pristine water quality; high organic waste promotes bacterial blooms",
    "Disinfect all equipment shared between tanks"
  ],
  
  "notes": "Columnaris is often misdiagnosed as a fungus due to its cottony appearance. It is highly virulent and requires immediate antibiotic intervention.",
  "affectedSpecies": ["All Freshwater Fish", "Livebearers", "Catfish", "Cichlids"]
},

  {
  "id": "dropsy",
  "name": "Dropsy (Fluid Retention)",
  "category": "bacterial",
  "severity": "critical",
  "contagious": false,
  
  "symptoms": [
    "Visual stage: Severe abdominal bloating (body swells like a balloon); scales raised perpendicular to the body ('pine-coning')",
    "Ocular stage: Bulging eyes (exophthalmia) due to internal pressure",
    "Behavioral stage: Extreme lethargy, hiding at the bottom, and refusal to eat",
    "Systemic stage: Pale gills, stringy feces, and redness/ulcers on the body surface"
  ],
  
  "causes": [
    "Mechanism: Kidney or liver failure preventing fluid regulation, leading to fluid accumulation in tissues",
    "Primary pathogen: Gram-negative bacteria (Aeromonas) often involved in the internal infection",
    "Triggers: Chronic poor water quality (high nitrates), sudden temperature drops, or internal parasites",
    "Note: Dropsy is a SYMPTOM of organ failure, not a specific disease itself"
  ],
  
  "treatment": [
    "Option A (Medical): Dose Kanamycin (Seachem KanaPlex) or Minocycline (Maracyn-Two) in a hospital tank. These antibiotics target internal gram-negative infections.",
    "Option B (Supportive): Add Epsom Salt (Magnesium Sulfate) at 1 tablespoon per 5 gallons. This helps draw fluid out of the body via osmosis. *Safety Warning: Do NOT use Aquarium Salt (Sodium Chloride), which worsens fluid retention.*",
    "Environmental Action: Isolate the fish immediately. Raise temperature to 28°C (82°F) to boost metabolism.",
    "Prognosis: Very poor. If scales are heavily pine-coned, organ damage is likely irreversible. Euthanasia (Clove Oil) should be considered to prevent suffering."
  ],
  
  "prevention": [
    "Maintain pristine water quality (0 ammonia, 0 nitrite, low nitrate)",
    "Avoid sudden temperature fluctuations which shock the kidneys",
    "Feed a varied, high-quality diet to prevent obesity and organ strain",
    "Quarantine new fish to prevent introducing virulent bacterial strains"
  ],
  
  "notes": "Dropsy indicates catastrophic internal failure. Success rates are low because treatment must happen before the organs shut down. Early detection (bloating without pine-coning) offers the only realistic chance of survival.",
  "affectedSpecies": ["All Freshwater Fish", "Bettas", "Goldfish", "Gouramis"]
},

{
  "id": "pop-eye",
  "name": "Popeye (Exophthalmia)",
  "category": "bacterial",
  "severity": "medium",
  "contagious": false,
  
  "symptoms": [
    "Visual stage: Abnormal protrusion of one (unilateral) or both (bilateral) eyes from the socket",
    "Advanced stage: Cloudy or whitish cornea; swelling of tissue behind the eye",
    "Systemic stage: Lethargy and loss of appetite",
    "Severe complication: Rupture of the eyeball, which is irreversible"
  ],
  
  "causes": [
    "Infectious: Bacterial infection (Aeromonas, Pseudomonas) behind the eye, often secondary to systemic illness",
    "Environmental: Poor water quality (Ammonia/Nitrite damage) or gas supersaturation (gas bubble disease)",
    "Physical: Trauma from aggressive tankmates or collision with sharp hardscape",
    "Systemic: Internal parasites or fish tuberculosis (Mycobacterium)"
  ],
  
  "treatment": [
    "Diagnostic Step: Determine if Unilateral (one eye) or Bilateral (both eyes). Unilateral usually implies trauma; Bilateral implies systemic infection.",
    "Option A (Unilateral/Injury): Isolate fish. Maintain pristine water quality. Add Epsom Salt (1 tbsp/5 gal) to reduce swelling. Often resolves without antibiotics.",
    "Option B (Bilateral/Systemic): Requires antibiotic treatment. Dose Kanamycin (Seachem KanaPlex) or Minocycline (Maracyn-Two) to combat internal infection.",
    "Supportive Action: Perform a 50% water change immediately to eliminate environmental toxins.",
    "Safety Warning: If the eye ruptures, the fish will be blind in that eye. Infection can still spread; maintain treatment."
  ],
  
  "prevention": [
    "Maintain 0 ppm Ammonia and Nitrite through regular maintenance",
    "Remove sharp decorations or aggressive tankmates to prevent trauma",
    "Feed a varied diet rich in Vitamin A to support eye health",
    "Quarantine new fish to prevent introducing systemic infections"
  ],
  
  "notes": "Unilateral popeye has a good prognosis with clean water. Bilateral popeye is a sign of serious internal disease and carries a higher risk. Eyes do not regenerate if ruptured.",
  "affectedSpecies": ["All Fish", "Goldfish", "Bettas", "Cichlids"]
},

{
  "id": "fish-tuberculosis",
  "name": "Fish Tuberculosis (Mycobacteriosis)",
  "category": "bacterial",
  "severity": "critical",
  "contagious": true,
  
  "symptoms": [
    "Early stage: Chronic weight loss ('wasting') and hollow belly despite normal appetite",
    "Physical stage: Skeletal deformities (curved spine) and non-healing ulcers or skin lesions",
    "Advanced stage: Concurrent symptoms of Dropsy or Popeye as internal organs fail",
    "Safety Alert: Transmissible to humans via broken skin (Fish Tank Granuloma)"
  ],
  
  "causes": [
    "Causative agent: Mycobacterium marinum (acid-fast bacteria); highly resistant to standard treatments",
    "Persistence: Survives in biofilms, gravel, and dried organics; extremely difficult to eradicate",
    "Transmission: Ingestion of infected tissue or contact with contaminated water"
  ],
  
  "treatment": [
    "Prognosis: There is no practical cure for fish TB in home aquaria. It is terminal.",
    "Option A (Medical): Long-term antibiotic cocktails (Kanamycin + Rifampin) may slow progression but are rarely curative and often cost-prohibitive.",
    "Recommended Action: Humane euthanasia (Clove Oil) is advised to prevent spread to other fish and humans.",
    "Decontamination: Break down the tank. Discard all porous items (gravel, wood, plants). Disinfect glass/equipment with 10% bleach for 30 minutes.",
    "Safety Warning: ZOONOTIC RISK. Wear waterproof gloves when handling infected fish or water. Can cause persistent skin nodules in humans."
  ],
  
  "prevention": [
    "Quarantine new fish for 4-6 weeks minimum",
    "Purchase only from reputable sources; avoid 'wasting' fish in shop tanks",
    "Remove dead fish immediately to prevent cannibalism",
    "Always wear gloves when cleaning tanks if you have cuts or abrasions on hands"
  ],
  
  "notes": "Fish TB is one of the few aquarium diseases transmissible to humans. The bacteria persist in the environment for long periods, making complete sterilization of an infected tank difficult.",
  "affectedSpecies": ["All Freshwater Fish", "Bettas", "Gouramis", "Tetras", "Goldfish"]
},

  // === FUNGAL ===
{
  "id": "fungal-infection",
  "name": "Fungal Infection (Saprolegnia)",
  "category": "fungal",
  "severity": "medium",
  "contagious": false,
  
  "symptoms": [
    "Visual stage: Distinct white, gray, or off-white cottony tufts on skin, fins, or mouth",
    "Texture: Fuzzy or hairy appearance resembling bread mold; grows in localized patches",
    "Location: Almost always originates at a site of previous physical injury or bacterial lesion",
    "Progression: Spreads slowly. Rapid spread or sudden death suggests Columnaris (bacteria), not fungus."
  ],
  
  "causes": [
    "Opportunistic pathogen: Fungal spores (Saprolegnia) are ubiquitous in water but only infect compromised tissue",
    "Trigger: Physical injury, fin nipping, or pre-existing bacterial infection damaging the slime coat",
    "Environmental: Excessive organic waste or decaying matter in the tank fuels fungal blooms"
  ],
  
  "treatment": [
    "Option A (Mild): Aquarium Salt (1 tbsp per 5 gallons) inhibits fungal growth. Combine with pristine water maintenance.",
    "Option B (Medicated): Methylene Blue baths (5 drops per gallon) or Malachite Green (e.g., API Fungus Cure) are highly effective.",
    "Option C (Physical): For severe localized patches, apply Iodine or Mercurochrome directly to the spot with a cotton swab while fish is out of water.",
    "Diagnostic Warning: If the infection spreads rapidly, kills fish within 48 hours, or appears 'saddle-backed', treat for Columnaris (Bacterial) immediately. True fungus moves slowly."
  ],
  
  "prevention": [
    "Remove dead organic matter (uneaten food, leaves) immediately",
    "Treat physical injuries promptly with antiseptics to prevent colonization",
    "Maintain 0 ppm Ammonia and Nitrite to protect the slime coat",
    "Avoid aggressive tankmates that cause bite wounds"
  ],
  
  "notes": "True fungal infections are strictly secondary; they only attack damaged tissue. Most hobbyists misdiagnose Columnaris bacteria as fungus. If it kills fast, it is bacterial.",
  "affectedSpecies": ["All Fish", "Eggs"]
},

  // === OTHER / ENVIRONMENTAL ===
{
  "id": "swim-bladder-disease",
  "name": "Swim Bladder Disorder",
  "category": "environmental",
  "severity": "medium",
  "contagious": false,
  
  "symptoms": [
    "Buoyancy stage: Fish floats uncontrollably at the surface, sinks to the bottom, or swims upside-down/sideways",
    "Balance stage: Difficulty maintaining horizontal position; 'standing on head' behavior",
    "Physical stage: Curved or twisted spine in chronic cases",
    "Behavioral note: Appetite often remains normal despite mobility issues"
  ],
  
  "causes": [
    "Dietary (Most common): Constipation or overeating compressing the swim bladder; swallowing air from surface feeding",
    "Infectious: Bacterial infection of the swim bladder organ",
    "Anatomical: Genetic deformities common in 'fancy' breeds with compressed bodies (Goldfish, Balloon Mollies)",
    "Environmental: Rapid temperature changes shocking the metabolism"
  ],
  
  "treatment": [
    "Option A (Dietary - First Line): Fast the fish for 48-72 hours to clear the digestive tract. This resolves most constipation-based cases.",
    "Option B (Laxative): After fasting, feed a blanched, skinned pea (mashed) to act as a natural laxative.",
    "Option C (Environmental): Raise temperature slowly to 28°C (82°F) to accelerate metabolism. Add Epsom Salt (1 tsp per 5 gal) to reduce internal fluid retention.",
    "Option D (Medical): If no improvement after 5 days, dose antibiotics (Kanamycin) to target potential internal infection.",
    "Supportive Action: Lower the water level in the tank to reduce hydrostatic pressure on the bladder, making swimming easier."
  ],
  
  "prevention": [
    "Soak dry pellets before feeding to prevent expansion in the stomach",
    "Use sinking foods to prevent air gulping at the surface",
    "Feed smaller portions 2-3 times daily rather than one large meal",
    "Fast fish one day per week to clear the digestive system"
  ],
  
  "notes": "Swim Bladder Disorder is a SYMPTOM with multiple causes. In fancy Goldfish, it is often a permanent genetic disability. In slim-bodied fish, it is usually curable via diet.",
  "affectedSpecies": ["Fancy Goldfish", "Bettas", "Balloon Mollies", "Deep-bodied fish"]
},

  {
  "id": "ammonia-poisoning",
  "name": "Ammonia Poisoning",
  "category": "environmental",
  "severity": "critical",
  "contagious": false,
  
  "symptoms": [
    "Respiratory stage: Gasping at the surface; red or inflamed gills (chemical burns); rapid breathing",
    "Physical stage: Red streaks or hemorrhaging in fins and body tissue",
    "Behavioral stage: Lethargy, clamped fins, erratic swimming, or lying on the bottom",
    "Terminal stage: Sudden death, often within hours if concentrations are high (>2 ppm)"
  ],
  
  "causes": [
    "New Tank Syndrome: Insufficient beneficial bacteria to process waste (cycling not complete)",
    "Maintenance failure: Overfeeding, dead fish decomposing, or cleaning filter media with tap water (killing bacteria)",
    "Overstocking: Bioload exceeds the biological filtration capacity",
    "Source water: Chloramine in tap water breaking down into ammonia if not treated with a suitable dechlorinator"
  ],
  
  "treatment": [
    "Immediate Action (Emergency): Perform a large (50-80%) water change immediately with temperature-matched, dechlorinated water to physically dilute the toxin concentration.",
    "Chemical Intervention: Dose Seachem Prime or equivalent conditioner. This temporarily detoxifies ammonia into ammonium for 24-48 hours, providing a buffer for fish.",
    "Supportive Care: Increase aeration/surface agitation to maximum. Ammonia damages gill function; high oxygen helps fish survive the stress. STOP FEEDING for 24-48 hours to halt waste production.",
    "Biological Restart: Add bottled beneficial bacteria (e.g., Seachem Stability, Tetra SafeStart) to colonize the filter media.",
    "Maintenance: Test water daily. Repeat large water changes daily until ammonia consistently reads 0 ppm."
  ],
  
  "prevention": [
    "Cycle the tank fully for 4-6 weeks before adding fish",
    "Test water parameters weekly (Ammonia should ALWAYS be 0 ppm)",
    "Never clean filter media under tap water; rinse in old tank water only",
    "Avoid overfeeding; remove uneaten food after 2 minutes",
    "Use a dechlorinator that neutralizes chloramine, not just chlorine"
  ],
  
  "notes": "Ammonia is the #1 killer in new aquariums. Even low levels (0.25 ppm) cause permanent gill damage. If detected, act immediately.",
  "affectedSpecies": ["ALL AQUATIC LIFE"]
},

{
  "id": "nitrite-poisoning",
  "name": "Nitrite Poisoning (Brown Blood Disease)",
  "category": "environmental",
  "severity": "critical",
  "contagious": false,
  
  "symptoms": [
    "Respiratory stage: Gills turning brown or chocolate-purple (Methemoglobinemia); gasping for air at the surface despite normal oxygen levels",
    "Physical stage: Brown streaks appearing in fins; loss of coordination and equilibrium",
    "Behavioral stage: Lethargy; fish hanging near filter outflow or water return for oxygen flow",
    "Terminal stage: Sudden death, often occurring overnight as oxygen demands drop"
  ],
  
  "causes": [
    "Bio-cycle failure: The second stage of 'New Tank Syndrome' where *Nitrobacter* bacteria are insufficient to process nitrite into nitrate",
    "Maintenance disruption: Cleaning filter media too thoroughly or changing too much water in a new tank, crashing the colony",
    "Overloading: Adding too many fish at once in an immature tank, overwhelming the biological filtration"
  ],
  
  "treatment": [
    "Immediate Action (Dilution): Perform a large (50-70%) water change immediately with dechlorinated water.",
    "Option A (Physiological): Add Aquarium Salt (NaCl) at 1 tablespoon per 5 gallons. *Mechanism: Chloride ions compete with nitrite for uptake at the gills, effectively blocking absorption.*",
    "Option B (Chemical): Dose Seachem Prime or equivalent. This temporarily detoxifies nitrite, providing a safety buffer.",
    "Supportive Care: Maximize aeration. Nitrite blocks the blood's ability to transport oxygen; adding air helps fish compensate. Stop feeding for 24-48 hours to reduce waste production.",
    "Maintenance: Test water daily. Repeat water changes and salt dosing daily until nitrite reads 0 ppm."
  ],
  
  "prevention": [
    "Cycle the tank fully for 4-6 weeks before adding fish; monitor for the nitrite spike",
    "Test nitrite levels weekly during the first 2 months of a new setup",
    "Add fish slowly in small groups to allow bacteria colonies to grow proportionally",
    "Avoid cleaning all filter media at once; rinse only in old tank water"
  ],
  
  "notes": "Nitrite binds to hemoglobin, preventing oxygen transport. The fish essentially suffocate internally. Salt (Chloride) is the specific antidote to stop further uptake.",
  "affectedSpecies": ["ALL AQUATIC LIFE"]
}
];
