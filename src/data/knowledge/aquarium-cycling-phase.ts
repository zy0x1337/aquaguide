import { KnowledgeArticle } from '../../types/knowledge';

export const aquariumCyclingPhase: KnowledgeArticle = {
  id: 'aquarium-cycling-phase',
  slug: 'aquarium-cycling-phase',
  title: 'Aquarium Cycling Phase: The Complete Fishless Method Guide',
  category: 'setup',
  difficulty: 'beginner',
  readingTime: 10,
  summary: 'Master the nitrogen cycle safely with our fishless cycling guide. Detailed timelines, testing protocols, and troubleshooting to establish a stable biological filter.',
  
  content: {
    introduction: 'Every new aquarium must complete the nitrogen cycle before safely housing fish. This biological process converts deadly ammonia waste into harmless nitrate, establishing the foundation for long-term tank health.',
    
    sections: [
      {
        heading: 'Understanding the Nitrogen Cycle',
        content: 'Three bacterial stages transform fish waste through oxidation.',
        subsections: [
          {
            subheading: 'Ammonia → Nitrite (Nitrosomonas)',
            content: 'Ammonia from fish respiration, waste, and decaying organics. Toxic above 0.25 ppm, burns gills and stresses immune system.'
          },
          {
            subheading: 'Nitrite → Nitrate (Nitrobacter)',
            content: 'Nitrite equally toxic, binds hemoglobin preventing oxygen transport ("brown blood disease"). Targets 0 ppm.'
          },
          {
            subheading: 'Nitrate Management',
            content: 'Final product relatively safe <40 ppm freshwater. Removed via 25-50% weekly water changes and live plants.'
          }
        ],
        callout: {
          type: 'important',
          text: 'Cycled = 0 ammonia, 0 nitrite, nitrates present after 24h ammonia dose.'
        }
      },
      {
        heading: 'Fishless Cycling Protocol (4-6 Weeks)',
        content: 'Safest method using controlled ammonia source.',
        subsections: [
          {
            subheading: 'Week 1: Setup and Ammonia Addition',
            content: 'Install equipment. Add 2-4 ppm ammonia daily (pure solution or 1 tsp fish food/10L boiled). Maintain 26-28°C. Test daily.'
          },
          {
            subheading: 'Week 2-3: Nitrite Spike',
            content: 'Ammonia drops, nitrite rises (days 7-14). Continue ammonia dosing. Partial changes if nitrite >5 ppm.'
          },
          {
            subheading: 'Week 4-6: Full Cycle',
            content: 'Both ammonia/nitrite process within 12-24 hours. Final test: dose 4 ppm ammonia, confirm 0/0/20+ next day.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Seed with used filter sponge/media cuts time by 50%.'
        }
      },
      {
        heading: 'Testing Schedule and Interpretation',
        content: 'Liquid test kits essential for accuracy.',
        subsections: [
          {
            subheading: 'Daily Parameters',
            content: 'Ammonia, nitrite, nitrate, pH, temperature. Log results. Optimal: pH 7.0-7.8 for bacteria.'
          },
          {
            subheading: 'Timeline Expectations',
            content: 'Day 5-10: Ammonia spike → drop. Day 12-21: Nitrite spike. Day 25+: Both 0 ppm.'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Stalled cycle? Check pH (>6.5), oxygen (aeration), temperature (26°C+).'
        }
      }
    ],
    
    keyTakeaways: [
      'Fishless cycling: 4 ppm ammonia daily until 0/0 processing',
      'Expect ammonia week 1, nitrite week 2-3, complete week 4-6',
      'API Freshwater Master Kit for accurate testing',
      '26-28°C accelerates bacteria 2x vs room temp',
      'Stock gradually: inverts week 5, fish week 7+'
    ],
    
    relatedTopics: ['nitrogen-cycle', 'water-testing', 'first-fish-stocking', 'filter-media']
  },
  
  visuals: {
    headerImage: 'https://images.unsplash.com/photo-1579967327980-2a4117da0e4a?w=1200&auto=format&fit=crop',
    diagrams: [
      {
        id: 'cycling-timeline-diagram',
        title: 'Fishless Cycling Timeline',
        imageUrl: '/images/knowledge/cycling-timeline-diagram.svg',
        caption: 'Expected parameter progression over 6 weeks',
        credit: 'AquaGuide Educational Content'
      }
    ]
  },
  
  references: [
    {  
      title: 'Der Einsteiger-Guide Teil 3: Einfahrphase & Pflege',
      author: 'Dennerle',
      url: 'https://dennerle.com/blogs/ratgeber/der-einsteiger-guide-teil-3',
      type: 'article'
    },
    {
      title: 'Einfahren eines Aquariums nach Ersteinrichtung',
      author: 'DRTA-Archiv',
      url: 'https://www.drta-archiv.de/aquarium-einfahren/',
      type: 'article'
    },
    {
      title: 'Fishless Cycling',
      author: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Fishless_cycling',
      type: 'article'
    }
  ],
  
  lastUpdated: '2026-02-23'
};