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
  "id": "scutariella-japonica",
  "name": "Scutariella Japonica",
  "category": "parasitic",
  "severity": "medium",
  "contagious": true,
  
  "symptoms": [
    "Visual stage: Tiny white, rod-like worms (1-3mm) anchored on the shrimp's head, rostrum, or gill plates",
    "Behavioral stage: Shrimp frantically scratching its head with walking legs to dislodge parasites",
    "Systemic stage: Lethargy, reduced feeding, and difficulty swimming in severe infestations"
  ],
  
  "causes": [
    "Vector: Introduction via infected shrimp or aquatic plants harboring the parasitic stages",
    "Environmental trigger: Poor water quality stresses shrimp, lowering their resistance to infestation",
    "Lifecycle factor: Parasites reproduce on shed molts; leaving molts in the tank facilitates spread"
  ],
  
  "treatment": [
    "Option A (Physical): Salt Dip. Mix 1 tablespoon Aquarium Salt per 1 cup tank water. Dip the shrimp for 30-60 seconds. Adult worms detach immediately. Repeat daily for 1 week.",
    "Option B (Chemical - Gentle): Seachem ParaGuard. Dose 5 mL per 40 Liters daily for 7 days. Generally safe for shrimplets and the bio-filter.",
    "Option C (Chemical - Strong): Praziquantel at 2.5 mg/L. Effective against flatworms but requires a second dose after 2-3 weeks to kill hatching eggs.",
    "Safety Warning: Fenbendazole (Panacur) is effective but LETHAL to snails. Do not use in tanks containing desired snail populations."
  ],
  
  "prevention": [
    "Quarantine all new shrimp for minimum 2 weeks in a separate container",
    "Dip new plants in a diluted Potassium Permanganate or Alum solution before adding to the tank",
    "Remove shed shrimp molts immediately to break the parasite's reproductive cycle",
    "Maintain pristine water parameters (0 ammonia, 0 nitrite)"
  ],
  
  "notes": "Scutariella is a commensal flatworm that feeds on detritus, not shrimp blood. It is rarely fatal but can impede gill function in heavy infestations.",
  "affectedSpecies": ["Neocaridina", "Caridina"]
},

{
  "id": "vorticella",
  "name": "Vorticella",
  "category": "parasitic",
  "severity": "medium",
  "contagious": true,
  
  "symptoms": [
    "Visual stage: Fluffy white, greenish, or mold-like growths attached to the body, head, or rostrum",
    "Behavioral stage: Altered swimming patterns (inverted, circling) due to impaired balance",
    "Systemic stage: Lethargy, refusal to feed, and potential death within 48-72 hours if gills are obstructed"
  ],
  
  "causes": [
    "Environmental trigger: High levels of dissolved organic waste and bacteria in the water column",
    "Substrate issues: Overfeeding and accumulated detritus providing a food source for the protozoa",
    "Vector: Introduction via contaminated plants, live food, or new shrimp"
  ],
  
  "treatment": [
    "Option A (Physical - Best): Salt Dip. Mix 1 tablespoon Aquarium Salt per 1 cup tank water. Dip the shrimp for 30-60 seconds. This causes the stalks to contract and detach immediately.",
    "Option B (Chemical): Potassium Permanganate dip in a light pink solution for 15 minutes. *Safety Warning: This is a strong oxidizer; accurate dosing is critical to avoid fatal burns.*",
    "Option C (Natural): Add Indian Almond Leaves (Catappa) to lower pH slightly and release tannins, creating an environment less favorable to the parasite.",
    "Management: Isolate infected shrimp immediately. Vorticella can spread via free-swimming spores."
  ],
  
  "prevention": [
    "Maintain pristine water quality (0 ammonia/nitrite) to limit bacterial blooms",
    "Avoid overfeeding; siphon out uneaten food and detritus promptly",
    "Perform weekly water changes (20-30%) to reduce dissolved organics",
    "Quarantine new shrimp and dip new plants before introduction"
  ],
  
  "notes": "Vorticella is a sessile ciliate that anchors to the exoskeleton. It feeds on bacteria in the water, not the shrimp itself, but heavy infestations can obstruct gill function.",
  "affectedSpecies": ["Neocaridina", "Caridina", "Amano Shrimp"]
},

  {
  "id": "ellobiopsidae",
  "name": "Ellobiopsidae (Green/Brown Fungus)",
  "category": 'parasitic',
  "severity": 'high',
  "contagious": true,
  
  "symptoms": [
    "Visual stage: Distinctive green, yellow, or brown branching, moss-like growths on the exoskeleton (often under the carapace or pleopods)",
    "Progression stage: The parasite forms 'rhizoids' that penetrate internal organs, leading to weakness and cessation of breeding",
    "Terminal stage: Death within 1-2 weeks as the parasite consumes internal resources"
  ],
  
  "causes": [
    "Causative agent: A parasitic dinoflagellate (Ellobiopsidae family) that infects the exoskeleton and internal tissues",
    "Vector: Introduction via wild-caught shrimp or contaminated plants carrying the parasitic spores",
    "Trigger: Stress or poor water conditions may predispose shrimp to infection, though the exact mechanism is poorly understood"
  ],
  
  "treatment": [
    "Prognosis: There is currently no confirmed cure for Ellobiopsidae infection in home aquaria.",
    "Containment Action: Immediately isolate infected shrimp into a separate quarantine container to prevent spore release into the main tank.",
    "Recommended Action: Humane euthanasia (culling) is often the most responsible choice to protect the breeding colony from total infection.",
    "Experimental Option: Salt dips are reported by some breeders to stall progression, but this does not eradicate the internal parasite."
  ],
  
  "prevention": [
    "Strict quarantine (minimum 3-4 weeks) for all new shrimp, especially wild-caught specimens",
    "Never mix wild-caught shrimp with established breeding colonies",
    "Maintain high water quality to minimize stress-related susceptibility"
  ],
  
  "notes": "Often mistaken for a fungus or Cladogonium, but it is a parasitic dinoflagellate. The 'branches' are external reproductive structures.",
  "affectedSpecies": ["Neocaridina", "Caridina"]
},

  // === BAKTERIELL ===
  {
  "id": "muscular-necrosis",
  "name": "Muscular Necrosis (White Muscle Disease)",
  "category": "bacterial",
  "severity": "critical",
  "contagious": false,
  
  "symptoms": [
    "Visual stage: Distinct opaque white or milky patches visible inside the body tissue, contrasting with the normal transparency",
    "Coloration stage: Rapid loss of color intensity; red shrimp turn pale pink or washed out",
    "Progression stage: Muscle tissue appears cloudy or liquefied; shrimp becomes lethargic",
    "Terminal stage: Sudden death, often occurring within 24-48 hours of the first visible signs"
  ],
  
  "causes": [
    "Environmental trigger: Acute stress from sudden parameter shifts (temperature, pH) or toxic spikes (ammonia, nitrite)",
    "Physiological factor: Severe hypoxia (low oxygen) causing tissue death",
    "Genetic factor: Weakened immune systems due to excessive inbreeding (inbreeding depression)"
  ],
  
  "treatment": [
    "Prognosis: There is no cure once visible symptoms appear. The necrotic tissue is irreversible.",
    "Supportive Action: Perform an immediate 50% water change with matched parameters to remove potential toxins.",
    "Environmental Aid: Maximize aeration immediately. Low oxygen often contributes to the onset.",
    "Management: Isolate or humanely euthanize affected shrimp. They act as a signal that the environment is compromised for the rest of the colony."
  ],
  
  "prevention": [
    "Maintain extremely stable water parameters; shrimp molt based on stability",
    "Introduce new genetic bloodlines every 6-12 months to prevent inbreeding weakness",
    "Use Indian Almond Leaves (Catappa) for mild antibacterial properties",
    "Ensure powerful filtration and surface agitation to prevent hypoxia"
  ],
  
  "notes": "This is a primary killer of Neocaridina. It is often a symptom of 'Old Tank Syndrome' or poor genetics rather than a primary pathogen.",
  "affectedSpecies": ["Neocaridina", "Caridina"]
},

  {
  "id": "chitinolytic-bacterial-disease",
  "name": "Shell Disease (Chitinolytic Bacteria)",
  "category": "bacterial",
  "severity": "medium",
  "contagious": false,
  
  "symptoms": [
    "Visual stage: Black, brown, or rust-colored spots appearing on the exoskeleton; often starting at the tail or joints",
    "Structural stage: Eroded or pitted carapace; shell appears soft, brittle, or transparent in affected areas",
    "Systemic stage: Lesions on gills potentially causing respiratory distress"
  ],
  
  "causes": [
    "Environmental trigger: Low pH (acidic water) dissolving the protective chitin layer; high organic waste fueling bacterial blooms",
    "Pathogen: Chitinolytic bacteria (Vibrio, Aeromonas, Benekea) colonizing micro-abrasions on the shell",
    "Mechanism: Bacteria enzymatically digest the chitin, creating lesions that compromise the exoskeleton"
  ],
  
  "treatment": [
    "Option A (Environmental): Raise pH to neutral or slightly alkaline (7.0-7.5) using Crushed Coral or Aragonite. Acidic water inhibits shell hardening and promotes bacterial growth.",
    "Option B (Supportive): Supplement Calcium (liquid calcium, Cuttlebone) to support shell regeneration during the next molt.",
    "Immediate Action: Perform a 30% water change to reduce organic waste and bacterial load in the water column.",
    "Natural Aid: Add Indian Almond Leaves (Catappa) to release antibacterial tannins and create a bio-film that competes with pathogenic bacteria."
  ],
  
  "prevention": [
    "Maintain neutral to slightly alkaline pH (6.8-7.8) to preserve chitin integrity",
    "Provide a calcium-rich diet (Spinach, Spirulina, specialized shrimp foods) to ensure strong molting",
    "Avoid overfeeding to prevent bacterial blooms from decomposing organic matter",
    "Use smooth filter intakes or sponge filters to prevent shell abrasions"
  ],
  
  "notes": "The bacteria degrades chitin (shell material). If caught early, shrimp can fully recover after a successful molt. Severe cases where the shell is breached can be fatal.",
  "affectedSpecies": ["Neocaridina", "Caridina", "Crayfish"]
},

  // === ENVIRONMENTAL ===
  {
  "id": "white-ring-of-death",
  "name": "White Ring of Death (Failed Molt)",
  "category": "environmental",
  "severity": "critical",
  "contagious": false,
  
  "symptoms": [
    "Visual stage: Distinct white horizontal band visible between the carapace and abdomen, indicating a separation of shell layers",
    "Behavioral stage: Shrimp violently flicking its tail or lying on its side, unable to free itself from the old exoskeleton",
    "Terminal stage: Death usually occurs within hours if the molt cannot be completed"
  ],
  
  "causes": [
    "Mineral imbalance: GH too low (soft water) or Calcium deficiency preventing proper shell formation",
    "Osmotic shock: Large water changes with mismatched parameters causing sudden shifts in internal pressure",
    "Iodine deficiency: Lack of iodine impairing the molting hormone process"
  ],
  
  "treatment": [
    "Prognosis: Almost always fatal once the shrimp is physically stuck. Manual removal of the shell usually tears the delicate new body.",
    "Early Intervention: If the shrimp is still moving but stuck, adding a concentrated mineral supplement or Iodine bath *might* help soften the old shell, but success rates are extremely low.",
    "Colony Management: Immediately test and adjust GH to 6-8 dGH. This prevents further casualties in the colony.",
    "Palliative Action: Isolate the suffering shrimp to a quiet container with tank water to minimize stress from tankmates during its final hours."
  ],
  
  "prevention": [
    "Maintain stable GH (6-8 dGH) using remineralizing salts for RO water",
    "Provide constant calcium sources: Cuttlebone, mineral rocks, or spinach",
    "Perform small, frequent water changes (10-20%) instead of large ones to prevent osmotic shock",
    "Drip acclimate all new shrimp for a minimum of 1-2 hours to equalize internal pressure"
  ],
  
  "notes": "This is a symptom of unstable husbandry. Prevention via stable mineral parameters is the only effective 'cure'.",
  "affectedSpecies": ["Neocaridina", "Caridina", "Amano Shrimp"]
},

  // === VIRAL ===
  {
  "id": "white-spot-syndrome-virus",
  "name": "White Spot Syndrome Virus (WSSV)",
  "category": "viral",
  "severity": "critical",
  "contagious": true,
  
  "symptoms": [
    "Visual stage: Distinct tiny white spots (0.5-2mm) embedded within the carapace (internal), not on the surface",
    "Behavioral stage: Extreme lethargy, refusal to eat, and reddish body discoloration",
    "Terminal stage: Rapid mortality within 72 hours; 'wasting' appearance followed by death"
  ],
  
  "causes": [
    "Causative agent: White Spot Syndrome Virus (WSSV), a highly virulent rod-shaped virus",
    "Vector: Introduction via infected shrimp, contaminated frozen foods, or shared equipment",
    "Persistence: The virus is extremely hardy and can survive in water and sediment for extended periods"
  ],
  
  "treatment": [
    "Prognosis: There is no known cure. Mortality rates approach 100%.",
    "Eradication Protocol: Immediate culling of the entire colony is required to prevent further suffering and spread.",
    "Decontamination: Break down the tank completely. Discard all substrate, plants, and filter media. Sterilize the tank and non-porous hardscape with 10% bleach for 30 minutes.",
    "Safety Warning: The virus is highly persistent. Do not reuse porous items (driftwood, rocks) from an infected setup."
  ],
  
  "prevention": [
    "Quarantine ALL new shrimp for minimum 3-4 weeks in a separate room",
    "Avoid feeding frozen foods from unknown or unsterilized sources",
    "Never mix shrimp from different sources in the same quarantine tank",
    "Disinfect all equipment (nets, siphons) between tanks"
  ],
  
  "notes": "WSSV is the 'Ebola' of the shrimp hobby. It is incurable and highly contagious. Absolute biosecurity is the only defense.",
  "affectedSpecies": ["Neocaridina", "Caridina", "Amano", "All Crustaceans"]
}
];
