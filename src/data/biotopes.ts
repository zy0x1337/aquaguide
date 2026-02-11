// src/data/biotopes.ts

export interface BiotopeTag {
  id: string;
  label: string;
  description: string;
  regions: string[]; // z.B. ["South America", "Asia"]
}

export const biotopes: BiotopeTag[] = [
  // --- AKTUELL IN DEINEN DATEN ---
  {
    id: 'blackwater',
    label: 'Blackwater',
    description: 'Tea-colored, acidic water stained by tannins. Very soft (pH 4-6).',
    regions: ['South America', 'Asia'],
  },
  {
    id: 'clearwater',
    label: 'Clearwater',
    description: 'Crystal-clear, neutral water with moderate flow.',
    regions: ['South America'],
  },
  {
    id: 'rice-paddy',
    label: 'Rice Paddies',
    description: 'Shallow, stagnant water with dense vegetation. Warm and oxygen-poor.',
    regions: ['Asia'],
  },
  {
    id: 'mekong',
    label: 'Mekong River',
    description: 'Large Southeast Asian river system. Moderate flow, varied habitats.',
    regions: ['Asia'],
  },
  {
    id: 'amazon',
    label: 'Amazon Basin',
    description: 'Worlds largest river basin. Mix of blackwater, clearwater, and whitewater.',
    regions: ['South America'],
  },
  {
    id: 'congo',
    label: 'Congo Basin',
    description: 'Central African river system. Warm, soft water with dense vegetation.',
    regions: ['Africa'],
  },
  {
    id: 'fast-flowing',
    label: 'Fast-Flowing Streams',
    description: 'High oxygen, rocky substrate. Cool to moderate temperatures.',
    regions: ['South America', 'Asia', 'Central America'],
  },
  {
    id: 'swamp',
    label: 'Swamps / Marshes',
    description: 'Shallow, stagnant water with thick vegetation. Low oxygen.',
    regions: ['Africa', 'Asia', 'South America'],
  },
  {
    id: 'mountain-stream',
    label: 'Mountain Streams',
    description: 'Cool (15-22°C), oxygen-rich water with strong current.',
    regions: ['Asia', 'South America'],
  },

  // --- FÜR DIE ZUKUNFT (Häufige Aquarium-Biotope) ---
  {
    id: 'lake-malawi',
    label: 'Lake Malawi',
    description: 'African Rift Lake. Hard, alkaline water (pH 7.8-8.6). Rocky substrate.',
    regions: ['Africa'],
  },
  {
    id: 'lake-tanganyika',
    label: 'Lake Tanganyika',
    description: 'Deepest African Rift Lake. Extremely hard water. Sand & rock.',
    regions: ['Africa'],
  },
  {
    id: 'whitewater',
    label: 'Whitewater (Amazon)',
    description: 'Sediment-rich, turbid water. Neutral pH, moderate hardness.',
    regions: ['South America'],
  },
  {
    id: 'rio-negro',
    label: 'Rio Negro',
    description: 'Extreme blackwater tributary of the Amazon. pH 3.5-5.5.',
    regions: ['South America'],
  },
  {
    id: 'brackish',
    label: 'Brackish Estuaries',
    description: 'Mix of fresh and saltwater. Variable salinity.',
    regions: ['Asia', 'Central America'],
  },
  {
    id: 'floodplain',
    label: 'Floodplains',
    description: 'Seasonal wetlands. Shallow, nutrient-rich water.',
    regions: ['South America', 'Africa'],
  },
  {
    id: 'rainforest-stream',
    label: 'Rainforest Streams',
    description: 'Shaded, leaf-litter covered. Low pH, warm temperatures.',
    regions: ['South America', 'Asia', 'Africa'],
  },
];

// Helper: Fuzzy Search (case-insensitive, substring match)
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
