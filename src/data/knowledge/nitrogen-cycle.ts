import { KnowledgeArticle } from '../../types/knowledge';

export const nitrogenCycle: KnowledgeArticle = {
  id: 'nitrogen-cycle',
  slug: 'nitrogen-cycle',
  title: 'The Nitrogen Cycle in Aquariums',
  category: 'chemistry',
  difficulty: 'beginner',
  readingTime: 8,
  summary: 'Understanding the nitrogen cycle is fundamental to maintaining a healthy aquarium. Learn how beneficial bacteria convert toxic ammonia into safer compounds.',
  
  content: {
    introduction: 'The nitrogen cycle is the most important biological process in your aquarium. It describes how toxic fish waste (ammonia) is converted by beneficial bacteria into less harmful substances. Without a properly cycled tank, fish can suffer from ammonia poisoning within days.',
    
    sections: [
      {
        heading: 'What is the Nitrogen Cycle?',
        content: 'The nitrogen cycle is a natural biological process where beneficial bacteria convert toxic waste products into less harmful compounds. In aquariums, this process involves three main stages: ammonia production, nitrite conversion, and nitrate formation.',
        subsections: [
          {
            subheading: 'Stage 1: Ammonia (NH₃/NH₄⁺)',
            content: 'Fish produce ammonia through respiration and waste. Uneaten food and decaying plant matter also release ammonia. Even in small concentrations (0.5 ppm), ammonia is highly toxic to fish, causing gill damage, stress, and potentially death.'
          },
          {
            subheading: 'Stage 2: Nitrite (NO₂⁻)',
            content: 'Nitrosomonas bacteria colonize filter media and substrate, converting ammonia into nitrite. While less toxic than ammonia, nitrite is still dangerous (>0.5 ppm) as it prevents oxygen uptake in fish blood, causing "brown blood disease".'
          },
          {
            subheading: 'Stage 3: Nitrate (NO₃⁻)',
            content: 'Nitrobacter bacteria convert nitrite into nitrate, the final product. Nitrate is relatively harmless in moderate concentrations (<40 ppm for freshwater). It is removed through regular water changes and consumed by live plants.'
          }
        ],
        callout: {
          type: 'important',
          text: 'A fully cycled tank has 0 ppm ammonia, 0 ppm nitrite, and <40 ppm nitrate. This process typically takes 4-6 weeks.'
        }
      },
      
      {
        heading: 'How to Cycle Your Aquarium',
        content: 'There are two main methods to establish the nitrogen cycle in a new aquarium: fishless cycling (recommended) and fish-in cycling.',
        subsections: [
          {
            subheading: 'Fishless Cycling (Recommended)',
            content: 'Add a source of ammonia (pure ammonia solution, fish food, or raw shrimp) to an empty tank. Test water daily for ammonia, nitrite, and nitrate. The cycle is complete when ammonia and nitrite drop to 0 ppm within 24 hours of adding ammonia, and nitrates are present. This method takes 4-6 weeks but is safer for fish.'
          },
          {
            subheading: 'Fish-In Cycling',
            content: 'Introduces hardy fish immediately to produce ammonia naturally. Requires daily water testing and frequent partial water changes (25-50%) to keep ammonia and nitrite levels safe (<0.5 ppm). Very stressful for fish and not recommended unless absolutely necessary.'
          },
          {
            subheading: 'Speeding Up the Process',
            content: 'Use established filter media, substrate, or decorations from a cycled tank to introduce beneficial bacteria. Bottled bacteria cultures (Seachem Stability, API Quick Start) can help, though results vary. Maintaining water temperature at 25-28°C accelerates bacterial growth.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Ask your local fish store for a piece of used filter sponge to jumpstart your cycle. This can reduce cycling time to 2-3 weeks.'
        }
      },
      
      {
        heading: 'Testing and Monitoring',
        content: 'Regular water testing is essential during cycling and ongoing maintenance. Use liquid test kits (API Master Test Kit) rather than strips for accuracy.',
        subsections: [
          {
            subheading: 'Cycling Phase (Weeks 1-6)',
            content: 'Test ammonia, nitrite, and nitrate daily. Record results to track progress. Expect ammonia to spike first (days 5-10), followed by nitrite (days 10-20), before both drop to 0 ppm.'
          },
          {
            subheading: 'Established Tank (After Cycling)',
            content: 'Test weekly for the first 3 months, then bi-weekly. Check ammonia and nitrite after adding new fish, overfeeding, or noticing fish stress. Monitor nitrates before water changes to ensure they stay below 40 ppm (freshwater) or 20 ppm (saltwater).'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Any ammonia or nitrite reading above 0 ppm in an established tank indicates a problem. Perform immediate water changes and investigate the cause.'
        }
      },
      
      {
        heading: 'Common Problems and Solutions',
        content: 'Even in established tanks, the nitrogen cycle can be disrupted. Understanding common issues helps you respond quickly.',
        subsections: [
          {
            subheading: 'Mini-Cycle or Cycle Crash',
            content: 'Occurs when beneficial bacteria die off due to medication (antibiotics), filter cleaning with tap water (chlorine kills bacteria), or prolonged power outages. Re-cycle with daily water changes and avoid feeding heavily until parameters stabilize.'
          },
          {
            subheading: 'Nitrite Stalling',
            content: 'Nitrite stays elevated while ammonia drops to 0 ppm. Often caused by pH below 6.5 (bacteria become inactive). Increase pH gradually using crushed coral or baking soda. Ensure adequate oxygenation through aeration or surface agitation.'
          },
          {
            subheading: 'High Nitrates',
            content: 'Nitrates above 40 ppm indicate insufficient water changes or overstocking. Increase water change frequency (25-30% weekly). Add fast-growing plants (Java Fern, Water Sprite) to consume nitrates. Reduce feeding to minimize waste.'
          }
        ]
      }
    ],
    
    keyTakeaways: [
      'The nitrogen cycle converts toxic ammonia (NH₃) → nitrite (NO₂⁻) → nitrate (NO₃⁻) through beneficial bacteria',
      'Fishless cycling takes 4-6 weeks and is safer than fish-in cycling',
      'A cycled tank shows 0 ppm ammonia, 0 ppm nitrite, and <40 ppm nitrate',
      'Test water parameters daily during cycling, weekly after establishment',
      'Never clean filter media with tap water—use dechlorinated water to preserve bacteria',
      'Live plants naturally reduce nitrates and support the nitrogen cycle'
    ],
    
    relatedTopics: ['water-parameters', 'beneficial-bacteria', 'filter-maintenance', 'new-tank-syndrome']
  },
  
  visuals: {
    headerImage: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=1200',
    diagrams: [
      {
        id: 'cycle-diagram',
        title: 'Nitrogen Cycle Process',
        imageUrl: '/images/knowledge/nitrogen-cycle-diagram.svg',
        caption: 'Simplified diagram showing the three stages of the nitrogen cycle in aquariums',
        credit: 'AquaGuide Educational Content'
      }
    ]
  },
  
  references: [
    {
      title: 'The Nitrogen Cycle in Freshwater Aquariums',
      author: 'Aquarium Co-Op',
      url: 'https://www.aquariumcoop.com/blogs/aquarium/nitrogen-cycle',
      type: 'article'
    },
    {
      title: 'Understanding Ammonia, Nitrite, and Nitrate',
      author: 'Seachem Laboratories',
      url: 'https://www.seachem.com/support/articles/the-nitrogen-cycle',
      type: 'article'
    },
    {
      title: 'Fishless Cycling Guide',
      author: 'Seriously Fish',
      url: 'https://www.seriouslyfish.com/fishless-cycling/',
      type: 'article'
    }
  ],
  
  lastUpdated: '2026-02-22'
};
