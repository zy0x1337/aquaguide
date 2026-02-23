import { KnowledgeArticle } from '../../types/knowledge';

export const algaeInAquarium: KnowledgeArticle = {
  id: 'algae-in-aquarium',
  slug: 'algae-in-aquarium',
  title: 'Algae in the Aquarium: Complete Identification and Control Guide',
  category: 'maintenance',
  difficulty: 'intermediate',
  readingTime: 12,
  summary: 'Algae problems affect every aquarist. This guide covers all common types, root causes, prevention strategies, and proven control methods without harming your livestock.',
  
  content: {
    introduction: 'Algae blooms are frustrating but preventable. Understanding the different types and their specific triggers allows targeted control rather than blanket chemical treatments. Healthy planted tanks naturally suppress algae through competition.',
    
    sections: [
      {
        heading: 'Common Algae Types and Identification',
        content: 'Each algae type indicates specific water chemistry imbalances. Proper identification is crucial for effective treatment.',
        subsections: [
          {
            subheading: 'Green Spot Algae (GSA)',
            content: 'Small green dots on glass, decorations, and slow-growing plants. Thrives on stable tanks with high phosphates (>0.5 ppm) and moderate light. Harmless but unsightly.'
          },
          {
            subheading: 'Thread/Hair Algae (GHA)',
            content: 'Long green filaments coating everything. Loves excess nitrates (>20 ppm), overfeeding, and 8+ hours of lighting. Fast-spreading and competes with plants.'
          },
          {
            subheading: 'Black Beard Algae (BBA)',
            content: 'Dark bushy tufts, extremely persistent. Caused by CO₂ fluctuations and high flow over plants. Melts plant tissue and resists manual removal.'
          },
          {
            subheading: 'Diatom Algae',
            content: 'Brown dusty coating, common in new tanks. Silicate-based, harmless indicator of cycling phase. Disappears naturally as silicates deplete.'
          },
          {
            subheading: 'Cyanobacteria (Blue-Green Algae)',
            content: 'Slimy black/brown/red sheets with foul odor. Low flow + nutrient imbalance. Produces toxins harmful to fish.'
          }
        ],
        callout: {
          type: 'important',
          text: 'Test phosphates and nitrates first. Most algae indicates nutrient imbalance, not light deficiency.'
        }
      },
      {
        heading: 'Root Causes and Prevention',
        content: 'Algae exploits weaknesses in tank stability. Prevention focuses on balanced ecology rather than suppression.',
        subsections: [
          {
            subheading: 'Nutrient Imbalance',
            content: 'Nitrates >20 ppm or phosphates >0.5 ppm fuel fast algae growth. Overfeeding, infrequent water changes, and decaying matter accumulate nutrients.'
          },
          {
            subheading: 'Lighting Duration and Spectrum',
            content: 'More than 8 hours daily or full-spectrum lights without CO₂ promote algae over plants. Use timers and plant-specific LEDs (6500K).'
          },
          {
            subheading: 'CO₂ and Plant Competition',
            content: 'Plants outcompete algae when CO₂ is 25-30 ppm and fast-growers (hornwort, water sprite) are present. Dense planting shades surfaces.'
          }
        ],
        callout: {
          type: 'tip',
          text: '50% water change + manual removal + fast plant growth fixes 90% of outbreaks.'
        }
      },
      {
        heading: 'Proven Control Methods',
        content: 'Integrated approach: manual + biological + chemical balance adjustment.',
        subsections: [
          {
            subheading: 'Immediate Actions',
            content: 'Siphon debris during 50% water change. Scrub surfaces with algae scraper. Reduce lighting to 6 hours for 7 days (blackout optional).'
          },
          {
            subheading: 'Biological Controls',
            content: 'Amano shrimp (10-15/100L), Otocinclus catfish (4-6/100L), Siamese algae eater (1/50L). Supplement with Malaysian trumpet snails for detritus.'
          },
          {
            subheading: 'Chemical-Free Long-Term',
            content: 'Excel/Gluteraldehyde (2.5ml/40L daily) targets algae selectively. Increase plant biomass and CO₂ stability. Maintain <10 ppm nitrates.'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Avoid copper-based algaecides – lethal to shrimp/snails and causes resistance.'
        }
      }
    ],
    
    keyTakeaways: [
      'Green spot/thread = high nutrients; black beard = CO₂ issues',
      'Reduce light to 6-8 hrs, 50% weekly water changes prevent most outbreaks',
      'Amano shrimp + fast plants = best biological control',
      'Test phosphates/nitrates before treatment',
      'Healthy plants naturally suppress algae growth'
    ],
    
    relatedTopics: ['water-parameters', 'co2-injection', 'planted-tank-setup', 'maintenance-routine']
  },
  
  visuals: {
    headerImage: 'https://images.unsplash.com/photo-1588205282192-7c0c0f5e1a0e?w=1200&auto=format&fit=crop',
    diagrams: [
      {
        id: 'algae-nutrient-diagram',
        title: 'Algae Growth Factors',
        imageUrl: '/images/knowledge/algae-nutrient-diagram.svg',
        caption: 'Balance of light, nutrients, and CO₂ determining algae vs plant dominance',
        credit: 'AquaGuide Educational Content'
      }
    ]
  },
  
  references: [
    {
      title: 'How to Fight 6 Types of Algae in Your Fish Tank',
      author: 'Aquarium Co-Op',
      url: 'https://www.aquariumcoop.com/blogs/aquarium/aquarium-algae',
      type: 'article'
    },
    {
      title: 'Algen im Aquarium vorbeugen, erkennen und bekämpfen',
      author: 'Garnelio',
      url: 'https://www.garnelio.de/blog/aquarianer-tipps/algen-im-aquarium-vorbeugen-erkennen-und-bekaempfen',
      type: 'article'
    },
    {
      title: 'Algenprobleme im Aquarium',
      author: 'Dennerle',
      url: 'https://dennerle.com/blogs/ratgeber/algenprobleme-im-aquarium',
      type: 'article'
    }
  ],
  
  lastUpdated: '2026-02-23'
};