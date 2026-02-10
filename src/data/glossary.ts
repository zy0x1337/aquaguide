import type { EthologyTag } from '../types/species';

export const tagDescriptions: Record<EthologyTag, string> = {
  architect: "This species actively modifies its environment, moving sand, gravel, or decor to suit its needs.",
  jumper: "Known to jump out of the water. A tight-fitting lid is absolutely mandatory.",
  gardener: "May eat or uproot live plants. Best kept with robust plants or artificial decor.",
  fin_nipper: "Prone to nipping the long fins of slow-moving tank mates (like Bettas or Guppies).",
  shy: "Prefers to hide and is easily stressed by bright lights or loud noises. Needs plenty of cover.",
  shoaler: "Social fish that stay loosely together for comfort but don't swim in synchronized formations.",
  schooler: "Highly social fish that swim in tight, synchronized formations. Requires larger groups.",
  surface: "Spends most of its time at the water surface. Needs floating plants for security.",
  
  // --- DIE NEUEN ---
  midwater: "Occupies the middle area of the tank. Ideal for filling empty space between bottom dwellers and surface fish.",
  bottom_dweller: "Lives primarily on the substrate. Ensure the substrate is suitable (e.g., sand) to prevent injury.",
  predator: "Hunts live prey. Will eat any fish or invertebrate that fits in its mouth.",
  peaceful: "Does not attack other fish. Safe for community tanks with similarly sized species.",
  territorial: "Defends a specific area (cave, plant) against intruders, especially of its own species.",
  active: "Constantly swimming and patrolling. Needs open swimming space and may stress out slow/shy fish.",
  social: "Requires the company of its own kind or peaceful tank mates to feel secure, but doesn't necessarily school.",
};
