// src/data/biotopes.ts

export interface BiotopeTag {
  id: string;
  label: string;
  description: string;
  regions: string[];
  narrative?: string; // Rich, educational text with potential links
}

export const biotopes: BiotopeTag[] = [
  // --- SOUTH AMERICAN BIOTOPES ---
  {
    id: 'blackwater',
    label: 'Blackwater Streams',
    description: 'Tea-colored, acidic water stained by tannins. A mysterious, low-light world.',
    regions: ['South America', 'Asia'],
    narrative: `
      Imagine a submerged cathedral where the sunlight barely touches the floor. This is the **Blackwater** realm—a world stained the color of dark tea by decaying leaves and submerged roots. The water here is soft and highly acidic (pH 3.5–6.0), creating a natural barrier against bacteria and parasites.
      
      In this gloom, fish have evolved to shine. The electric stripes of the **Neon Tetra** and **Cardinal Tetra** act as living beacons, allowing schools to stay connected in the pitch-black tributaries of the Rio Negro. Bottom dwellers like the **Panda Cory** and **Sterbai Cory** sift through the leaf litter, while shy jewels like the **Ram Cichlid** claim territories among the twisted driftwood roots. It is a slow, silent world where chemistry shapes life.
    `
  },
  {
    id: 'clearwater',
    label: 'Clearwater Rivers',
    description: 'Crystal-clear, nutrient-poor water flowing over sandy beds.',
    regions: ['South America'],
    narrative: `
      In contrast to the dark blackwater, **Clearwater** rivers like the Rio Xingu flow over ancient crystalline shields. The water is transparent, often appearing emerald green or azure blue from depth. Here, the sun penetrates all the way to the sandy bottom.
      
      These open, flowing waters are the playground of active swimmers. Schools of **Rummynose Tetra** dart through the currents, their red noses signaling their health. Armored catfish like the **Bristlenose Pleco** graze on the algae-covered rocks that bask in the intense sunlight. It is a habitat of visibility, where camouflage and speed are the only defenses.
    `
  },
  {
    id: 'amazon',
    label: 'Amazon Basin',
    description: 'The green lung of the world. A massive, diverse ecosystem.',
    regions: ['South America'],
    narrative: `
      The **Amazon Basin** is not just a river; it is a moving ocean of freshwater. During the flood season, the river swallows the forest, allowing fish to swim among tree canopies. This massive influx of food and space triggers spawning events on an epic scale.
      
      Giants roam here. The intelligent **Oscar** patrols the submerged branches, while massive schools of **Black Skirt Tetra** occupy the midwater. In the muddy shallows, the **Bronze Cory** finds safety in numbers. It is a place of infinite variety, where the **Angelfish** (Pterophyllum) glides through vertical reeds, its body shape perfectly adapted to life in narrow spaces.
    `
  },

  // --- ASIAN BIOTOPES ---
  {
    id: 'rice-paddy',
    label: 'Rice Paddies & Ditches',
    description: 'Shallow, warm, stagnant waters. The labyrinth fish domain.',
    regions: ['Asia'],
    narrative: `
      A landscape engineered by humans but reclaimed by nature. **Rice Paddies** are shallow, sun-baked wetlands where the water is still and often oxygen-poor. Survival here requires a special adaptation: the labyrinth organ, which allows fish to breathe atmospheric air.
      
      This is the kingdom of the **Betta Splendens**. Among the dense reeds, males build delicate bubble nests, fiercely defending their territory. Elegant **Honey Gourami** and sparkling **Sparkling Gourami** drift through the vegetation, using their thread-like fins to feel their way through the murky water. It is a humid, lush world where the boundary between water and air is blurred.
    `
  },
  {
    id: 'mountain-stream',
    label: 'Hillstreams & Mountain Brooks',
    description: 'Cool, fast-flowing, oxygen-rich water over smooth stones.',
    regions: ['Asia'],
    narrative: `
      High in the mountains, the water is cold, clear, and relentless. **Mountain Streams** are high-energy environments where oxygen saturation is at its peak. Life here must cling on or be swept away.
      
      The **White Cloud Minnow** thrives in these cooler temperatures (15-22°C), flashing its colors in the dappled sunlight. Streamlined swimmers like the **Danio Rerio** (Zebra Danio) play in the current, their bodies built for speed. On the rocks, algae eaters like the **Siamese Algae Eater** anchor themselves against the flow. It is a refreshing, invigorating world that demands resilience.
    `
  },
  {
    id: 'mekong',
    label: 'Mekong River System',
    description: 'A biodiversity hotspot. From rapids to calm backwaters.',
    regions: ['Asia'],
    narrative: `
      The Mother of Waters. The **Mekong** is a lifeline for Southeast Asia, hosting a diversity of species second only to the Amazon. It varies from raging rapids to tranquil, silt-laden pools.
      
      Here, tiny jewels like the **Celestial Pearl Danio** and **Chili Rasbora** hide in the densely vegetated margins, safe from larger predators. The playful **Kuhli Loach** burrows into the soft substrate, emerging only at night to scavenge. It is a river of contrasts, home to both the microscopic and the monstrous.
    `
  },

  // --- AFRICAN BIOTOPES ---
  {
    id: 'lake-malawi',
    label: 'Lake Malawi Reef',
    description: 'The inland sea. Hard, alkaline water and rocky fortresses.',
    regions: ['Africa'],
    narrative: `
      In the Great Rift Valley lies a freshwater sea that mimics the ocean. **Lake Malawi** is famous for its crystal-clear, hard, alkaline water (pH 7.8-8.5) and massive rock formations. Evolution here has gone into overdrive.
      
      The lake is ruled by Cichlids. The **Electric Yellow Lab** (Labidochromis caeruleus) flashes against the dark granite rocks, a striking splash of color. These "Mbuna" (rock-dwellers) are highly intelligent and social, forming complex hierarchies. They don't lay eggs on plants but carry them in their mouths (mouthbrooders) to protect their young in this competitive, rock-bound metropolis.
    `
  },
  {
    id: 'congo',
    label: 'Congo River Basin',
    description: 'Deep rainforest rivers. Shadowy and swift.',
    regions: ['Africa'],
    narrative: `
      The dark heart of Africa. The **Congo River** cuts through the second-largest rainforest on Earth. It is a deep, powerful river with pockets of quiet, shaded streams.
      
      Here, unique species like the **Anomalochromis Thomasi** (African Butterfly Cichlid) display their iridescent scales in the dappled light. It is a habitat of ancient lineages and unique adaptations, where the water is often soft but swift-moving.
    `
  },

  // --- SPECIALIZED ---
  {
    id: 'brackish',
    label: 'Brackish Estuaries',
    description: 'Where river meets sea. Variable salinity and mangroves.',
    regions: ['Asia', 'Central America'],
    narrative: `
      The mixing zone. In **Brackish Estuaries**, fresh water battles the tide. Salinity fluctuates daily, creating a challenging environment that excludes most freshwater fish.
      
      Only the tough survive here. The grumpy-looking **Bumblebee Goby** hops among the mangrove roots, finding shelter in empty snail shells. Adaptable livebearers like the **Molly** thrive in these salt-rich waters, often growing larger and more colorful than their freshwater counterparts. It is a gateway world, neither fully river nor fully ocean.
    `
  },
  {
    id: 'swamp',
    label: 'Dense Swamps',
    description: 'Low flow, high vegetation, acidic water.',
    regions: ['Global'],
    narrative: `
      Stagnant but full of life. **Swamps** are the ultimate planted tank inspiration. The water barely moves, stained dark and crowded with plants like Cryptocoryne and Anubias.
      
      In these quiet corners, the **Cherry Barb** glows a deep red, competing for attention. The tiny **Sparkling Gourami** hunts vertically among the plant stems, croaking audibly during courtship. It is a slow-paced ecosystem where plants are the dominant force.
    `
  }
];

export const searchBiotopes = (query: string, limit = 5): BiotopeTag[] => {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return biotopes
    .filter(b => 
      b.label.toLowerCase().includes(q) || 
      b.description.toLowerCase().includes(q) ||
      b.id.includes(q)
    )
    .slice(0, limit);
};