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
    introduction: 'Algae blooms are frustrating but preventable. Understanding the different types and their specific triggers allows targeted control rather than blanket chemical treatments. Healthy planted tanks naturally suppress algae through competition for nutrients.',
    
    sections: [
      {
        heading: 'Common Algae Types and Identification',
        content: 'Each algae type indicates specific water chemistry imbalances. Proper identification is crucial for effective treatment.',
        subsections: [
          {
            subheading: 'Green Spot Algae (GSA)',
            content: 'Small green dots on glass, decorations, and slow growing plants. Thrives in stable tanks with phosphates above 0.5 ppm and moderate light. Harmless but unsightly. Common in mature tanks with good filtration.'
          },
          {
            subheading: 'Thread and Hair Algae',
            content: 'Long green filaments coating everything. Loves excess nitrates (above 20 ppm), overfeeding, and 8 or more hours of lighting. Fast spreading and competes directly with plants for nutrients. Can smother slow growing species.'
          },
          {
            subheading: 'Black Beard Algae (BBA)',
            content: 'Dark bushy tufts on plant edges and decor, extremely persistent. Caused by CO₂ fluctuations and high flow over plants. Melts plant tissue at attachment points and strongly resists manual removal. Requires spot treatment with liquid carbon.'
          },
          {
            subheading: 'Diatom Algae (Brown Algae)',
            content: 'Brown dusty coating on all surfaces, extremely common in new tanks during first 2 to 4 weeks. Silicate based organism, harmless indicator of cycling phase. Disappears naturally as silicates deplete and competing plants establish.'
          },
          {
            subheading: 'Cyanobacteria (Blue Green Algae)',
            content: 'Slimy black, brown, or red sheets with foul sulfur odor. Actually photosynthetic bacteria, not true algae. Thrives in low flow areas with nutrient imbalance (low nitrates paradoxically). Produces toxins potentially harmful to fish and inverts.'
          }
        ],
        callout: {
          type: 'important',
          text: 'Test phosphates and nitrates first. Most algae indicates nutrient imbalance, not simply excess light.'
        }
      },
      {
        heading: 'Root Causes and Prevention',
        content: 'Algae exploits weaknesses in tank stability. Prevention focuses on balanced ecology rather than mere suppression.',
        subsections: [
          {
            subheading: 'Nutrient Imbalance',
            content: 'Nitrates above 20 ppm or phosphates above 0.5 ppm fuel rapid algae growth. Research confirms algae biomass increases exponentially with phosphate levels from 0.5 to 15 ppm. Overfeeding, infrequent water changes, and decaying plant matter accumulate these nutrients faster than plants consume them.'
          },
          {
            subheading: 'Lighting Duration and Spectrum',
            content: 'More than 8 hours daily or full spectrum lights without adequate CO₂ promote algae over plants. Plants saturate light usage after 8 to 10 hours, but algae continues photosynthesis. Use timers strictly and plant specific LED fixtures at 6500K color temperature.'
          },
          {
            subheading: 'CO₂ and Plant Competition',
            content: 'Plants outcompete algae when CO₂ maintains 25 to 30 ppm and fast growing species (hornwort, water sprite, rotala) are present. Dense planting creates mutual shading that suppresses surface algae. Stable CO₂ prevents fluctuations that stress plants but not algae.'
          }
        ],
        callout: {
          type: 'tip',
          text: '50 percent water change plus manual removal plus fast plant growth fixes 90 percent of outbreaks within 2 weeks.'
        }
      },
      {
        heading: 'Proven Control Methods',
        content: 'Integrated approach combining manual, biological, and chemical balance adjustment.',
        subsections: [
          {
            subheading: 'Immediate Actions',
            content: 'Siphon debris during 50 percent water change to remove accumulated organics. Scrub surfaces with algae scraper or credit card edge. Reduce lighting to 6 hours for 7 to 10 days while increasing plant mass. Optional blackout: Cover tank completely for 3 days, then 50 percent water change (nuclear option for severe blooms).'
          },
          {
            subheading: 'Biological Controls',
            content: 'Amano shrimp (10 to 15 per 100 liters): Best hair algae control, also consume leftover food. Otocinclus catfish (4 to 6 per 100 liters): Diatom specialists, peaceful nano species. Siamese algae eater (1 per 50 liters): Black beard algae grazer, can become territorial with age. Nerite snails: Glass cleaning specialists, cannot reproduce in freshwater.'
          },
          {
            subheading: 'Chemical Free Long Term Solutions',
            content: 'Liquid carbon (glutaraldehyde 2.5 ml per 40 liters daily): Targets algae cell walls selectively, less effective on cyanobacteria. Increase plant biomass by 30 to 50 percent to dominate nutrient uptake. Stabilize CO₂ injection with precise bubble counting and pH monitoring. Maintain nitrates 5 to 10 ppm to starve algae while feeding plants.'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Avoid copper based algaecides. Lethal to shrimp, snails, and beneficial bacteria. Creates resistant algae strains.'
        }
      }
    ],
    
    keyTakeaways: [
      'Green spot and thread algae indicate high nutrients; black beard shows CO₂ instability',
      'Reduce light to 6 to 8 hours, maintain 50 percent weekly water changes',
      'Amano shrimp plus fast growing plants equals best biological control',
      'Test phosphates and nitrates before any treatment protocol',
      'Healthy dense planted tanks naturally suppress algae through nutrient competition'
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
        caption: 'Balance of light, nutrients, and CO₂ determining algae versus plant dominance',
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
      title: 'Influence of Nitrogen and Phosphorus on Microalgal Growth',
      author: 'National Institutes of Health',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7918059/',
      type: 'research'
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