import { KnowledgeArticle } from '../../types/knowledge';

export const plantedTankSetup: KnowledgeArticle = {
  id: 'planted-tank-setup',
  slug: 'planted-tank-setup',
  title: 'Planted Tank Setup: From Substrate to First Plant',
  category: 'setup',
  difficulty: 'beginner',
  readingTime: 13,
  summary: 'Complete low tech planted aquarium guide covering substrate types, hardscape design, plant selection, and lighting. Build a thriving planted ecosystem step by step.',
  
  content: {
    introduction: 'Live plants transform aquariums from static displays into living ecosystems. They oxygenate water, consume nitrates, suppress algae, and provide natural fish habitat. Low tech setups require minimal equipment while delivering stunning results.',
    
    sections: [
      {
        heading: 'Substrate Selection: Foundation for Growth',
        content: 'Substrate anchors roots and stores nutrients. Three categories serve different needs and budgets. Research confirms 2 to 4 inches depth optimal for most planted tanks.',
        subsections: [
          {
            subheading: 'Inert Substrates (Sand or Gravel)',
            content: 'CaribSea Eco Complete, pool filter sand, or aquarium gravel provide stable base without altering chemistry. Require root tabs for heavy feeders (crypts, swords). Last indefinitely, easy cleaning. Best for: beginners, low tech setups, budget conscious aquarists.'
          },
          {
            subheading: 'Aquasoils (Active Substrates)',
            content: 'ADA Aqua Soil, Fluval Stratum, Master Soil release nutrients gradually while lowering pH and KH. Soft, porous structure ideal for delicate roots. Break down after 2 to 3 years. Best for: shrimp tanks, soft water plants, carpeting species like Monte Carlo.'
          },
          {
            subheading: 'Soil Based Systems (Dirted Tanks)',
            content: 'Organic potting soil capped with 1 to 2 inches sand or gravel. Cheapest option, massive nutrient reserves. Requires 4 to 6 week maturation, anaerobic pockets possible. Best for: experienced aquarists, low tech jungle tanks.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Use 2 to 3 inches substrate depth minimum. Slope higher in back for visual depth and better root space.'
        }
      },
      {
        heading: 'Hardscape Design: The Invisible Structure',
        content: 'Rocks and wood create visual focal points and define planting zones before adding water.',
        subsections: [
          {
            subheading: 'Rock Selection',
            content: 'Dragon stone (neutral pH), Seiryu stone (raises pH and KH), lava rock (porous, plant anchors). Arrange in odd numbers (3 to 5 pieces) following rule of thirds. Largest rock equals focal point offset from center.'
          },
          {
            subheading: 'Driftwood Types',
            content: 'Manzanita (dense, sinks immediately), Mopani (two tone, heavy tannins), Spider wood (intricate branches). Boil 1 to 2 hours or soak 1 to 2 weeks to waterlog. Position before substrate for stable anchoring.'
          },
          {
            subheading: 'Layout Principles',
            content: 'Convex (island style): Substrate mounded center, plants tallest middle. Concave (valley style): Low center, high sides create depth. Triangle: Gradual slope left to right or vice versa. Leave open swimming space (30 to 40 percent tank floor).'
          }
        ],
        callout: {
          type: 'important',
          text: 'Test rocks with vinegar. Fizzing equals calcium carbonate raising pH. Avoid in soft water setups.'
        }
      },
      {
        heading: 'Plant Selection and Placement',
        content: 'Layer plants by height and light requirements for natural aesthetics and healthy growth.',
        subsections: [
          {
            subheading: 'Background Plants (12 to 24 inches)',
            content: 'Vallisneria (fast growing, nutrient sponge), Amazon swords (centerpiece, heavy root feeders), Water sprite (floating or planted, algae fighter). Plant densely to hide equipment and create backdrop.'
          },
          {
            subheading: 'Midground Plants (4 to 8 inches)',
            content: 'Anubias (low light, attach to wood or rocks), Java fern (slow growth, rhizome exposed), Cryptocoryne (color variety, melts then regrows). Transition zone between foreground and background.'
          },
          {
            subheading: 'Foreground or Carpet (1 to 3 inches)',
            content: 'Dwarf sagittaria (runners, no CO₂), Monte Carlo (dense carpet, medium light), Staurogyne repens (bushy, trim regularly). Plant small portions 1 to 2 inches apart for spreading.'
          },
          {
            subheading: 'Planting Techniques',
            content: 'Stemmed plants: Remove lower leaves, bury 1 to 2 inches deep in groups of 3 to 5. Rhizome plants: Tie to hardscape with thread or glue, never bury rhizome. Carpeting: Use tweezers, plant individual nodes 0.5 inches apart.'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Burying Anubias or Java fern rhizomes causes rot. Always attach above substrate.'
        }
      },
      {
        heading: 'Lighting and Equipment',
        content: 'Balance light intensity and duration to support plants without triggering algae.',
        subsections: [
          {
            subheading: 'Lighting Requirements',
            content: 'Low light (20 to 30 PAR): Anubias, Java fern, crypts. 6 to 7 hours per day. Medium light (40 to 60 PAR): Most plants including swords, vals. 7 to 8 hours per day. High light (80 plus PAR): Carpets, red plants. Requires CO₂, 8 to 9 hours per day.'
          },
          {
            subheading: 'Low Tech Equipment',
            content: 'Filter: Sponge filter or HOB rated 5 to 10 times tank volume. Gentle flow prevents CO₂ off gassing. Heater: 25 to 26°C stable temperature. Fertilizer: All in one liquid (Easy Green, Thrive) 1 to 2 pumps per 10 gallons weekly. Root tabs: Insert 3 to 4 per plant every 3 to 4 months for root feeders.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Start lighting at 6 hours. Add 30 minutes weekly until plants pearl (release O₂ bubbles).'
        }
      },
      {
        heading: 'Filling and Initial Cycling',
        content: 'Proper filling prevents substrate disruption and cloudiness.',
        subsections: [
          {
            subheading: 'Filling Technique',
            content: 'Fill tank one third full before planting (supports stems). Place plate or bowl on substrate, pour dechlorinated water slowly. Top off after planting complete. Add bacteria starter (Seachem Stability, Fritz Zyme 7).'
          },
          {
            subheading: 'First 4 Weeks',
            content: 'Week 1 to 2: Diatom algae appears (normal, temporary). Plants may melt (adaptation). 50 percent water change if ammonia above 0.5 ppm. Week 3 to 4: Green algae possible. Add snails or shrimp after week 3. Fish after full cycle (ammonia and nitrite 0 ppm).'
          }
        ]
      }
    ],
    
    keyTakeaways: [
      'Substrate depth 2 to 3 inches: inert (sand or gravel) plus tabs or aquasoils for nutrients',
      'Hardscape first: rule of thirds, odd numbers, test rocks with vinegar',
      'Layer plants: tall background, midground transition, carpet foreground',
      'Low tech lighting: 6 to 8 hours, 20 to 40 PAR, avoid algae blooms',
      'Cycle 3 to 4 weeks: expect diatoms and melting, add livestock gradually'
    ],
    
    relatedTopics: ['substrate-guide', 'plant-nutrition', 'aquascaping-styles', 'low-tech-maintenance']
  },
  
  visuals: {
    headerImage: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=1200&auto=format&fit=crop',
    diagrams: [
      {
        id: 'hardscape-layout-diagram',
        title: 'Aquascaping Layout Styles',
        imageUrl: '/images/knowledge/hardscape-layout-diagram.svg',
        caption: 'Comparison of convex, concave, and triangle hardscape arrangements',
        credit: 'AquaGuide Educational Content'
      }
    ]
  },
  
  references: [
    {
      title: 'How to Set Up a Low Tech Planted Aquarium',
      author: 'Aquarium Co-Op',
      url: 'https://www.aquariumcoop.com/blogs/aquarium/beginner-planted-aquarium',
      type: 'article'
    },
    {
      title: 'How Deep Should Substrate Be in Planted Aquarium',
      author: 'The Aquarium Expert',
      url: 'https://theaquariumexpert.com/how-deep-should-substrate-be-in-planted-aquarium/',
      type: 'article'
    },
    {
      title: 'Complete Planted Aquarium Substrate Guide',
      author: 'The 2Hr Aquarist',
      url: 'https://www.2hraquarist.com/blogs/substrates-overview/substrate-101',
      type: 'article'
    }
  ],
  
  lastUpdated: '2026-02-23'
};