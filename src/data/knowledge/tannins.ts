import { KnowledgeArticle } from '../../types/knowledge';

export const tannins: KnowledgeArticle = {
  id: 'tannins',
  slug: 'tannins',
  title: 'Tannins in Aquariums: Benefits and Management',
  category: 'chemistry',
  difficulty: 'beginner',
  readingTime: 6,
  summary: 'Tannins from driftwood and leaves create blackwater conditions that benefit many fish species. Learn how to use tannins effectively and when to reduce them.',
  
  content: {
    introduction: 'Tannins are natural organic compounds released by driftwood, leaves, and certain botanicals. They tint water yellow to brown and lower pH, mimicking the blackwater habitats of many popular aquarium fish like bettas, tetras, and Apistogramma.',
    
    sections: [
      {
        heading: 'What are Tannins?',
        content: 'Tannins are polyphenolic compounds found in wood, bark, and leaves. When submerged, they leach into water, creating the characteristic amber color seen in natural blackwater rivers like the Amazon. Beyond aesthetics, tannins have several beneficial properties for fish health.',
        subsections: [
          {
            subheading: 'Natural Sources',
            content: 'Mopani and Malaysian driftwood release moderate tannins. Spiderwood and Cholla wood release higher amounts. Indian Almond Leaves (Catappa), Oak leaves, and Alder cones are popular botanical sources. Peat moss (in filters) provides concentrated tannins but is less sustainable.'
          },
          {
            subheading: 'Chemical Properties',
            content: 'Tannins act as mild acids, gradually lowering pH (typically to 6.0-6.8 depending on concentration). They also reduce water hardness (GH/KH) over time. Tannins have antibacterial and antifungal properties, helping prevent infections and promoting fin healing.'
          }
        ],
        callout: {
          type: 'info',
          text: 'The yellow-brown tint from tannins is harmless and natural. Many fishkeepers consider it aesthetically pleasing and beneficial for shy species.'
        }
      },
      
      {
        heading: 'Benefits of Tannins',
        content: 'Many aquarium fish evolved in tannin-rich blackwater habitats. Replicating these conditions reduces stress and encourages natural behaviors.',
        subsections: [
          {
            subheading: 'Stress Reduction',
            content: 'The subdued lighting created by tannins makes fish feel more secure, reducing aggression and skittishness. Species like bettas, Apistogramma, and tetras display more vibrant colors and natural behaviors in tannin-stained water.'
          },
          {
            subheading: 'Health Benefits',
            content: 'Tannins have mild antibacterial, antifungal, and antiparasitic properties. They support wound healing, reduce inflammation, and may help prevent diseases like columnaris and fin rot. Breeding pairs often show increased spawning activity in blackwater conditions.'
          },
          {
            subheading: 'Water Chemistry Buffering',
            content: 'Tannins naturally lower pH, which benefits soft-water species (South American cichlids, rasboras, wild bettas). They also act as mild buffers, preventing sudden pH swings. However, this can be problematic for species preferring alkaline water (African cichlids, livebearers).'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Start with one Indian Almond Leaf per 40 liters. Monitor pH changes and adjust based on your fish species\' requirements.'
        }
      },
      
      {
        heading: 'Managing Tannin Levels',
        content: 'Control the intensity of tannins based on your fish species and aesthetic preferences. Some fishkeepers embrace heavy blackwater setups, while others prefer minimal tinting.',
        subsections: [
          {
            subheading: 'Reducing Tannins',
            content: 'Pre-soak driftwood for 1-2 weeks before adding to tank, changing water daily. Use activated carbon in your filter to absorb tannins (replace monthly). Perform larger water changes (40-50% weekly) to dilute tannins. Boiling driftwood for 1-2 hours releases most tannins upfront.'
          },
          {
            subheading: 'Increasing Tannins',
            content: 'Add more driftwood, especially Mopani or Malaysian types. Introduce botanicals like Indian Almond Leaves, Oak leaves, or Alder cones. Use Rooibos tea bags (chemical-free) in the filter for quick tannin infusion. Reduce activated carbon use or remove it entirely.'
          },
          {
            subheading: 'Stable Maintenance',
            content: 'Replace botanicals every 2-3 weeks as they decompose. Monitor pH weekly to ensure it stays within your fish species\' preferred range. Adjust water change frequency to maintain consistent tannin levels—larger changes dilute tannins faster.'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Heavy tannins can drop pH below 6.0 in soft water. Always test pH when adding new botanical sources to avoid shocking fish.'
        }
      },
      
      {
        heading: 'Species That Benefit from Tannins',
        content: 'Many popular aquarium species originate from blackwater habitats and thrive in tannin-rich environments.',
        subsections: [
          {
            subheading: 'South American Species',
            content: 'Betta splendens and wild bettas, Cardinal and Neon Tetras, Corydoras catfish, Apistogramma dwarf cichlids, Angelfish (wild types), Discus (prefer heavy tannins). These species show enhanced colors and reduced stress in blackwater conditions.'
          },
          {
            subheading: 'Southeast Asian Species',
            content: 'Rasboras (Chili, Harlequin), Kuhli Loaches, Chocolate Gouramis, Betta species (wild types), Pangio eels. Many Southeast Asian rivers have tannin-stained water from peat swamps and decaying vegetation.'
          },
          {
            subheading: 'Species to Avoid Tannins',
            content: 'African Rift Lake cichlids (prefer alkaline, hard water), Livebearers (guppies, mollies, platies—prefer pH 7.0-8.0), Goldfish (prefer neutral to slightly alkaline). These species may become stressed in low-pH blackwater conditions.'
          }
        ]
      }
    ],
    
    keyTakeaways: [
      'Tannins are natural compounds from wood and leaves that tint water and lower pH',
      'Benefits include stress reduction, antibacterial properties, and natural habitat replication',
      'Sources include driftwood (Mopani, Malaysian), Indian Almond Leaves, Oak leaves, and Alder cones',
      'Control tannins using activated carbon (reduce) or botanicals (increase)',
      'Best for South American and Southeast Asian blackwater species (bettas, tetras, Apistogramma)',
      'Monitor pH closely—heavy tannins can drop pH below 6.0 in soft water'
    ],
    
    relatedTopics: ['water-parameters', 'ph-management', 'blackwater-biotope', 'driftwood-preparation']
  },
  
  visuals: {
    headerImage: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200'
  },
  
  references: [
    {
      title: 'The Benefits of Tannins for Aquarium Fish',
      author: 'Tannin Aquatics',
      url: 'https://www.tanninaquatics.com/blogs/the-tint/the-benefits-of-tannins',
      type: 'article'
    },
    {
      title: 'Using Indian Almond Leaves in Aquariums',
      author: 'Aquarium Co-Op',
      url: 'https://www.aquariumcoop.com/blogs/aquarium/indian-almond-leaves',
      type: 'article'
    }
  ],
  
  lastUpdated: '2026-02-22'
};
