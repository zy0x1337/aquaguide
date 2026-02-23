import { KnowledgeArticle } from '../../types/knowledge';

export const waterParametersCo2: KnowledgeArticle = {
  id: 'water-parameters-co2',
  slug: 'water-parameters-co2',
  title: 'Water Parameters & CO₂ Management: KH-pH-CO₂ Mastery',
  category: 'chemistry',
  difficulty: 'intermediate',
  readingTime: 11,
  summary: 'Master CO₂ injection using the KH-pH relationship. Complete table, calculation formulas, drop checker usage, and troubleshooting for optimal plant growth without fish stress.',
  
  content: {
    introduction: 'CO₂ drives plant growth but requires precise management. The KH-pH-CO₂ relationship allows indirect measurement without expensive equipment.',
    
    sections: [
      {
        heading: 'The KH-pH-CO₂ Relationship',
        content: 'Carbonate hardness (KH) buffers pH changes from CO₂ injection.',
        subsections: [
          {
            subheading: 'CO₂ Calculation Formula',
            content: 'CO₂ (mg/L) = (KH ÷ 2.8) × 10^(7.9 - pH). Example: KH 4, pH 6.6 = 30 ppm CO₂.'
          },
          {
            subheading: 'Target Ranges',
            content: 'Plants: 25-35 ppm daytime. Fish safe: <40 ppm. Nighttime: CO₂ off (pH rises 0.3-0.6 units).'
          }
        ],
        callout: {
          type: 'important',
          text: 'Measure KH once weekly, pH twice daily (pre/post lights).'
        }
      },
      {
        heading: 'KH-pH-CO₂ Reference Table',
        content: 'Use morning readings (before CO₂ peaks). Values show approximate CO₂ in mg/L.',
        subsections: [
          {
            subheading: 'Freshwater Community (KH 3-6)',
            content: 'At KH 3°dH: pH 6.4 = 35 ppm, pH 6.6 = 25 ppm, pH 6.8 = 17 ppm, pH 7.0 = 12 ppm. At KH 4°dH: pH 6.4 = 47 ppm, pH 6.6 = 33 ppm, pH 6.8 = 23 ppm, pH 7.0 = 16 ppm. At KH 5°dH: pH 6.4 = 58 ppm, pH 6.6 = 41 ppm, pH 6.8 = 29 ppm, pH 7.0 = 20 ppm.'
          },
          {
            subheading: 'Discus/Planted (KH 2-4)',
            content: 'Lower KH allows precise control but requires stable injection. Small pH changes = large CO₂ swings.'
          }
        ]
      },
      {
        heading: 'Practical CO₂ Management',
        content: 'Injection systems simplified.',
        subsections: [
          {
            subheading: 'Drop Checker Usage',
            content: '4 dKH reference solution: Lime green = 30 ppm (perfect). Yellow = >50 ppm (dangerous). Blue = <20 ppm (plants starve).'
          },
          {
            subheading: 'Daily Routine',
            content: '6 AM: CO₂ on (pH drops over 1hr). 8 PM: CO₂ off. Monitor fish behavior (darting = too high).'
          },
          {
            subheading: 'Troubleshooting',
            content: 'pH crash: Reduce dose 20%, check KH. Pearling absent: Increase 10 ppm. Gasping fish: Emergency off + aeration.'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Never exceed 40 ppm or pH drop >1.2 units.'
        }
      }
    ],
    
    keyTakeaways: [
      'CO₂ mg/L = (KH/2.8) × 10^(7.9-pH)',
      'Target 25-35 ppm daytime, verified by 4dKH drop checker (lime green)',
      'pH drops 0.3-0.6 units daily normal',
      'Monitor fish behavior > test kits',
      'KH 3-6 °dH ideal for injection stability'
    ],
    
    relatedTopics: ['kh-ph-balance', 'planted-tank-lighting', 'fertilization-schedule', 'advanced-planting']
  },
  
  visuals: {
    headerImage: 'https://images.unsplash.com/photo-1627483235697-29d3b69a2a90?w=1200&auto=format&fit=crop',
    diagrams: [
      {
        id: 'kh-ph-co2-graph',
        title: 'KH-pH-CO₂ Relationship Chart',
        imageUrl: '/images/knowledge/kh-ph-co2-graph.svg',
        caption: 'Interactive graph showing CO₂ levels across KH/pH ranges',
        credit: 'AquaGuide Educational Content'
      }
    ]
  },
  
  references: [
    {
      title: 'KH-pH-CO₂ Tabelle',
      author: 'Aquasabi',
      url: 'https://www.aquasabi.de/aquascaping-wiki_aquarium_die-kh-ph-co2-tabelle',
      type: 'article'
    },
    {
      title: 'CO₂ im Aquarium - Alle Infos',
      author: 'DRTA-Archiv',
      url: 'https://www.drta-archiv.de/co2-aquarium/',
      type: 'article'
    },
    {
      title: 'KH pH CO2 Relationships',
      author: 'Aquarium Science',
      url: 'https://aquariumscience.org/15-6-2-kh-ph-co2-relationships/',
      type: 'article'
    }
  ],
  
  lastUpdated: '2026-02-23'
};