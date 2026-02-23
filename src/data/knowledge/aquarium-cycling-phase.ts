import { KnowledgeArticle } from '../../types/knowledge';

export const aquariumCyclingPhase: KnowledgeArticle = {
  id: 'aquarium-cycling-phase',
  slug: 'aquarium-cycling-phase',
  title: 'Aquarium Cycling Phase: The Complete Fishless Method Guide',
  category: 'setup',
  difficulty: 'beginner',
  readingTime: 10,
  summary: 'Master the nitrogen cycle safely with our fishless cycling guide. Detailed timelines, testing protocols, and troubleshooting to establish a stable biological filter in 4 to 6 weeks.',
  
  content: {
    introduction: 'Every new aquarium must complete the nitrogen cycle before safely housing fish. This biological process converts deadly ammonia waste into harmless nitrate through beneficial bacteria colonization, establishing the foundation for long term tank health.',
    
    sections: [
      {
        heading: 'Understanding the Nitrogen Cycle',
        content: 'Three bacterial stages transform fish waste through aerobic oxidation reactions.',
        subsections: [
          {
            subheading: 'Ammonia to Nitrite (Nitrosomonas)',
            content: 'Ammonia (NH₃ and NH₄⁺) from fish respiration, waste, and decaying organics. Highly toxic above 0.25 ppm, burns gill tissue and suppresses immune system. Nitrosomonas bacteria oxidize ammonia to nitrite, doubling population every 15 to 20 hours under optimal conditions (26 to 28°C, pH 7 to 8).'
          },
          {
            subheading: 'Nitrite to Nitrate (Nitrobacter)',
            content: 'Nitrite (NO₂⁻) equally toxic to fish, binds hemoglobin preventing oxygen transport causing brown blood disease. Nitrobacter bacteria convert nitrite to nitrate, reproducing slightly slower than Nitrosomonas at 20 to 24 hour doubling time. This second stage takes longer to establish (weeks 2 to 4).'
          },
          {
            subheading: 'Nitrate Management',
            content: 'Nitrate (NO₃⁻) is final product, relatively safe below 40 ppm freshwater or 20 ppm saltwater. Not removed by bacteria in typical aquariums (requires anaerobic conditions). Managed via 25 to 50 percent weekly water changes and live plant consumption.'
          }
        ],
        callout: {
          type: 'important',
          text: 'Fully cycled means 0 ppm ammonia, 0 ppm nitrite, measurable nitrates present after processing 4 ppm ammonia dose in 24 hours.'
        }
      },
      {
        heading: 'Fishless Cycling Protocol (4 to 6 Weeks)',
        content: 'Safest method using controlled ammonia source without risking fish lives.',
        subsections: [
          {
            subheading: 'Week 1: Setup and Ammonia Addition',
            content: 'Install all equipment: filter, heater at 26 to 28°C, test kits. Add 2 to 4 ppm ammonia daily using pure ammonium chloride solution or 1 teaspoon fish food per 10 liters (produces ammonia as it decays). Test ammonia, nitrite, nitrate, and pH daily at same time. Log all results to track bacterial colonization progress.'
          },
          {
            subheading: 'Week 2 to 3: Nitrite Spike Phase',
            content: 'Days 7 to 14: Ammonia begins dropping rapidly, nitrite rises (often spiking above 5 ppm). Continue ammonia dosing to feed growing Nitrosomonas colony. Nitrite spike can last 10 to 21 days while Nitrobacter colony catches up. Partial water changes only if nitrite exceeds 10 ppm (stalls cycle at extreme levels). Patience critical: This phase feels longest but indicates progress.'
          },
          {
            subheading: 'Week 4 to 6: Cycle Completion',
            content: 'Both ammonia and nitrite process within 12 to 24 hours of dosing. Nitrates accumulate steadily (10 to 40 ppm range normal). Final stability test: Dose 4 ppm ammonia, test 24 hours later for 0/0/20 plus readings. Pass this test 2 days running = safe to stock fish. Research confirms average 3 to 5 weeks for 20 gallon tanks, 5 to 8 weeks for 55 gallons.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Seeding with established filter media cuts cycling time by 50 percent (2 to 3 weeks typical).'
        }
      },
      {
        heading: 'Testing Schedule and Interpretation',
        content: 'Accurate liquid test kits (API Master Kit) essential over unreliable test strips.',
        subsections: [
          {
            subheading: 'Daily Parameters During Cycle',
            content: 'Ammonia: Should drop from 4 ppm to 0.25 ppm within 24 hours by week 3. Nitrite: Peaks week 2, drops toward 0 ppm by week 5. Nitrate: Steadily accumulates as end product (proves bacteria working). pH: Optimal 7.0 to 7.8 for bacteria (cycle stalls below 6.5). Temperature: Maintain 26 to 28°C (bacteria growth slows dramatically below 20°C).'
          },
          {
            subheading: 'Timeline Expectations',
            content: 'Day 1 to 10: Ammonia spike then gradual decline, no nitrite yet. Day 12 to 21: Nitrite spike appears and peaks (ammonia near zero). Day 25 plus: Both toxins process rapidly, nitrates climbing. Variability factors: Temperature (warmer cycles faster), pH (neutral optimal), seeding (cuts time 50 percent).'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Stalled cycle? Check pH above 6.5, temperature above 24°C, adequate oxygenation via surface agitation.'
        }
      }
    ],
    
    keyTakeaways: [
      'Fishless cycling: dose 4 ppm ammonia daily until both toxins process in 24 hours',
      'Expect ammonia drop week 1, nitrite spike weeks 2 to 3, completion weeks 4 to 6',
      'API Freshwater Master Kit provides accurate testing (avoid strips)',
      'Maintain 26 to 28°C and pH 7 to 8 for optimal bacteria doubling (every 15 to 20 hours)',
      'Stock gradually after cycling: hardy inverts week 5, fish week 7 and beyond'
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
        caption: 'Expected parameter progression over 6 weeks showing ammonia, nitrite, and nitrate curves',
        credit: 'AquaGuide Educational Content'
      }
    ]
  },
  
  references: [
    {  
      title: 'Der Einsteiger Guide Teil 3: Einfahrphase und Pflege',
      author: 'Dennerle',
      url: 'https://dennerle.com/blogs/ratgeber/der-einsteiger-guide-teil-3',
      type: 'article'
    },
    {
      title: 'Nitrogen Cycle Overview',
      author: 'Aquatic Creations Group',
      url: 'https://aquaticcreationsgroup.com/nitrogen-cycle-overview/',
      type: 'article'
    },
    {
      title: 'The Ultimate Guide to the Nitrogen Cycle',
      author: 'Aqua Fish',
      url: 'https://en.aqua-fish.net/articles/aquarium-bacteria-discussion',
      type: 'article'
    }
  ],
  
  lastUpdated: '2026-02-23'
};