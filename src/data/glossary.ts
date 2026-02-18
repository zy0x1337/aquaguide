import type { EthologyTag } from '../types/species';

export const tagDescriptions: Record<EthologyTag, string> = {
  // --- MOVEMENT & LOCATION ---
  surface: "Spends most of its time at the water surface. Needs floating plants for security.",
  surface_dweller: "Lives almost exclusively at the top. Jump protection is mandatory.",
  midwater: "Occupies the middle area of the tank. Ideal for filling empty space between bottom dwellers and surface fish.",
  bottom_dweller: "Lives primarily on the substrate. Ensure the substrate is suitable (e.g., sand) to prevent injury.",
  active: "Constantly swimming and patrolling. Needs open swimming space.",
  jumper: "Known to jump out of the water. A tight-fitting lid is absolutely mandatory.",

  // --- SOCIAL BEHAVIOR ---
  shoaler: "Social fish that stay loosely together for comfort but don't swim in synchronized formations.",
  schooler: "Highly social fish that swim in tight, synchronized formations. Requires larger groups.",
  social: "Requires the company of its own kind or peaceful tank mates to feel secure.",
  shy: "Prefers to hide and is easily stressed by bright lights or loud noises. Needs plenty of cover.",
  territorial: "Defends a specific area (cave, plant) against intruders, especially of its own species.",
  centerpiece: "A standout fish often kept singly or as a pair to be the visual focus of the tank.",

  // --- TEMPERAMENT ---
  peaceful: "Does not attack other fish. Safe for community tanks with similarly sized species.",
  "semi-aggressive": "Generally peaceful but can be aggressive towards similar species or during breeding.",
  predator: "Hunts live prey. Will eat any fish or invertebrate that fits in its mouth.",
  fin_nipper: "Prone to nipping the long fins of slow-moving tank mates (like Bettas or Guppies).",
  robust: "Hardy and resilient. Can hold its own in active community tanks.",

  // --- DIET & FUNCTION ---
  algae_eater: "Feeds on algae growth. Excellent cleanup crew, but may need supplemental vegetable matter.",
  slow_eater: "Eats slowly and can be outcompeted by fast swimmers. Target feeding recommended.",

  // --- BIOLOGY & SPECIAL TRAITS ---
  architect: "This species actively modifies its environment, moving sand, gravel, or decor to suit its needs.",
  gardener: "May eat or uproot live plants. Best kept with robust plants or artificial decor.",
  bubble_nester: "Males build floating nests of bubbles for breeding. Requires calm surface water.",
  labyrinth_fish: "Possesses a labyrinth organ allowing it to breathe atmospheric air. Needs access to the surface.",
  nocturnal: "Active primarily at night. Provide caves and dim lighting or moonlights for viewing.",
  scaleless: "Lacks protective scales. Highly sensitive to medications (especially copper) and rough substrates.",
  livebearer: "Gives birth to free-swimming live young rather than laying eggs. Populations can grow quickly.",
  amphibian: "Not a fish! Needs access to air and specific care requirements distinct from fish.",
  cichlid: "Member of the Cichlidae family. Often intelligent, with complex social behaviors and parental care.",
  coldwater: "Thrives in cooler temperatures (unheated). Not suitable for tropical tanks.",
  diurnal: "Active during the day.",
  colorful: "Chosen for its striking coloration.",

  // --- TANK SIZES ---
  nano: "Small species suitable for smaller tanks (under 60L/15g).",
  nano_safe: "Can be safely kept in smaller setups, provided water quality is maintained.",
  'parental-care': 'Elternfürsorge bei Fischen: Verhalten, bei dem Elternteile Eier oder Jungfische schützen, füttern oder transportieren, um deren Überlebenschancen zu erhöhen. Häufig bei Cichliden oder Betta-Fischen beobachtet. [web:2][web:6]',
  'pair-bonding': 'Paarbindung: Langfristige monogame Partnerschaft zwischen zwei Fischen, oft mit gemeinsamer Verteidigung von Territorium und Nahrung. Typisch bei Schmetterlingsfischen (Chaetodon), unabhängig von Fortpflanzung. [web:7]',
  hierarchy: 'Soziale Hierarchie (Pecking Order): Dominanzordnung in Fischgruppen, die Zugang zu Futter, Verstecken und Partnern bestimmt. Kann Aggression und Stress verursachen, besonders bei neuen Fischen. [web:8][web:14]',
  'substrate-sifter': 'Substratsiebender Fisch: Bodendweller wie Corydoras oder Loaches, die Sand oder Kies durchwühlen, um Nahrung (Detritus, Würmer) zu finden. Erfordert feinen, weichen Boden. [web:15]',
  intelligent: 'Intelligenter Fisch: Arten mit Lernfähigkeit, Besitzererkennung oder Problemlösung, z. B. Oscars, Bettas oder Flowerhorns. Können Tricks lernen und auf Interaktionen reagieren. [web:10][web:16]',
  hillstream: 'Hillstream-Loach: Saugmaul-Aal (z. B. Beaufortia kweichowensis), angepasst an starke Strömung in Bergbächen. Algenfresser mit flachem Körper, braucht hohe Durchflussrate und glatte Steine. [web:11]'
};
