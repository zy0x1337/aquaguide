import { KnowledgeArticle } from '../../types/knowledge';

export const algaeInAquarium: KnowledgeArticle = {
  id: 'algae-in-aquarium',
  slug: 'algae-in-aquarium',
  title: 'Algae in the Aquarium: Complete Identification and Control Guide',
  category: 'maintenance',
  difficulty: 'intermediate',
  readingTime: 12,
  summary: 'Algae issues signal an ecological imbalance, not just a nuisance. This guide identifies common algae types by their root causes and outlines a strategic approach to restore balance without harming your livestock.',
  
  content: {
    introduction: 'Algae are natural opportunists. In a balanced aquarium, plants outcompete algae for nutrients and light. When algae dominate, it signals that specific parameters—light, nutrients, or CO₂—are favoring the algae over higher plants. Understanding this competition is key to long-term control.',
    
    sections: [
      {
        heading: 'Common Algae Types and Identification',
        content: 'Accurate identification is half the battle. Each algae form points to a specific imbalance in the aquarium ecosystem.',
        subsections: [
          {
            subheading: 'Green Spot Algae (GSA)',
            content: 'Hard, circular green dots adhering tightly to glass and slow-growing plants (like Anubias). Primarily driven by high light intensity combined with fluctuating or low CO₂ levels. Unlike other algae, it thrives in mature, stable tanks where phosphate levels are too low for plants to outcompete the algae.'
          },
          {
            subheading: 'Thread and Hair Algae',
            content: 'Fine, flowing green filaments that drift in the current or coat hardscape. Indicates excess nutrients—specifically nitrates above 20 ppm or iron overdosing—often coupled with excessive lighting duration. Fast-spreading and physically smothers delicate plants.'
          },
          {
            subheading: 'Black Beard Algae (BBA)',
            content: 'Fuzzy, dark grey or black tufts anchoring firmly to leaf edges and hardscape. The most persistent type, often triggered by unstable liquid carbon or CO₂ levels. It thrives in high-flow areas where CO₂ fluctuates and is highly resistant to manual removal.'
          },
          {
            subheading: 'Diatom Algae (Brown Algae)',
            content: 'Brown, dusty film that wipes off easily. Caused by silicates and common in newly cycled tanks (first 4–6 weeks). It indicates immature biological filtration. Harmless and typically resolves naturally as the tank matures and silicates deplete.'
          },
          {
            subheading: 'Cyanobacteria (Blue-Green Algae)',
            content: 'Slimy, sheet-like coatings (green, black, or red) with a distinct earthy or sulfur smell. Technically a photosynthetic bacteria, not algae. Thrives in stagnant areas with high organics and very low nitrates. Can release toxins harmful to plants and invertebrates.'
          }
        ],
        callout: {
          type: 'important',
          text: 'Do not treat the symptom; treat the cause. Identify the algae type to diagnose the specific chemical or lighting imbalance in your tank.'
        }
      },
      {
        heading: 'Root Causes and Prevention',
        content: 'Prevention relies on ecological stability. Algae exploit instability faster than plants can adapt.',
        subsections: [
          {
            subheading: 'The Nutrient Balance',
            content: 'Algae bloom when nutrients are either excessive (dumping) or imbalanced. High nitrates (>20 ppm) feed hair algae, while phosphate deficiency can trigger Green Spot Algae. The goal is stable, plant-available levels: Nitrates 5–15 ppm, Phosphates 0.5–2 ppm, and Potassium 10–20 ppm.'
          },
          {
            subheading: 'Lighting Management',
            content: 'Intensity and duration matter more than spectrum. Plants reach saturation point after 8 hours; excess light feeds algae directly. Use a timer strictly. Reduce photoperiod to 6 hours during outbreaks and ensure light output matches plant demand and CO₂ levels.'
          },
          {
            subheading: 'CO₂ Stability',
            content: 'Fluctuating CO₂ is the #1 cause of BBA and stunted plant growth. Aim for 25–30 ppm consistently throughout the photoperiod. Plants with adequate carbon outcompete algae for all other nutrients. In low-tech tanks, rely on surface agitation control and easy plants.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'The "Estimative Index" (EI) method prevents deficiencies by providing excess nutrients, relying on healthy plant growth and water changes to deny algae a foothold.'
        }
      },
      {
        heading: 'Strategic Control Methods',
        content: 'Combining physical removal, biological cleaners, and chemical adjustment creates a multi-front attack.',
        subsections: [
          {
            subheading: 'Immediate Physical Intervention',
            content: 'Perform a 50% water change to reset nutrient levels. Physically scrape glass and prune heavily affected leaves. For severe blooms, a 3-day complete blackout (cover tank entirely) can crash algae populations, though it stresses plants.'
          },
          {
            subheading: 'Biological Cleaners',
            content: 'Amano Shrimp (Caridina multidentata): The gold standard for hair algae control. Nerite Snails: Unequaled for diatoms and Green Spot Algae on glass; do not reproduce in freshwater. Siamese Algae Eater (Crossocheilus oblongus): One of the few consumers of Black Beard Algae; requires space. Otocinclus: Safe, schooling diatom control for planted tanks.'
          },
          {
            subheading: 'Chemical-Free Solutions',
            content: 'Liquid Carbon (Glutaraldehyde): Dosed daily, it effectively kills BBA and hair algae on contact. Spot treat directly for stubborn patches. Hydrogen Peroxide (1ml per 10L): Effective spot treatment for BBA on hardscape (turn off filters during application for 15 mins).'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Copper-based algaecides are often fatal to shrimp, snails, and beneficial filter bacteria. Use only as a last resort in fish-only systems.'
        }
      }
    ],
    
    keyTakeaways: [
      'Green Spot Algae usually signals low CO₂ or low phosphates; Hair Algae signals excess nutrients.',
      'Stability is key: Consistent CO₂ and a regular photoperiod prevent 90% of outbreaks.',
      'Amano shrimp and Nerite snails are the most effective biological control team.',
      'Balance lighting with plant mass: Heavy planting absorbs the waste that fuels algae.',
      'Manual removal plus water changes fixes most issues without harsh chemicals.'
    ],
    
    relatedTopics: ['water-parameters', 'co2-injection', 'planted-tank-setup', 'maintenance-routine']
  },
  
  visuals: {
    headerImage: 'https://images.unsplash.com/photo-1588205282192-7c0c0f5e1a0e?w=1200&auto=format&fit=crop',
    diagrams: [
      {
        id: 'algae-nutrient-diagram',
        title: 'Nutrient Balance for Algae Control',
        imageUrl: '/images/knowledge/algae-nutrient-diagram.svg',
        caption: 'Visualizing the equilibrium between light, nutrients, and CO₂.',
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
      title: 'Algenprobleme im Aquarium',
      author: 'Dennerle',
      url: 'https://dennerle.com/blogs/ratgeber/algenprobleme-im-aquarium',
      type: 'article'
    }
  ],
  
  lastUpdated: '2026-03-07'
};