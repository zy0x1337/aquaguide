import { KnowledgeArticle } from '../../types/knowledge';

export const fishCompatibilityGuide: KnowledgeArticle = {
  id: 'fish-compatibility-guide',
  slug: 'fish-compatibility-guide',
  title: 'Fish Compatibility: Building Peaceful Community Tanks',
  category: 'stocking',
  difficulty: 'intermediate',
  readingTime: 14,
  summary: 'Master fish compatibility through temperament assessment, water parameter overlap, schooling behavior, and territory management. Build harmonious communities that thrive.',
  
  content: {
    introduction: 'Incompatible fish cause stress, aggression, and death. Successful community tanks balance temperament, size, water needs, and behavioral patterns. Understanding these factors prevents costly mistakes and creates stable ecosystems.',
    
    sections: [
      {
        heading: 'The Four Pillars of Compatibility',
        content: 'Every successful pairing satisfies these core requirements simultaneously.',
        subsections: [
          {
            subheading: 'Temperament Matching',
            content: 'Peaceful (community): Tetras, rasboras, corydoras, guppies. Coexist without aggression. Semi-aggressive: Gouramis, angelfish, rainbow sharks. Territorial during breeding or if crowded. Aggressive: Cichlids, bettas, tiger barbs. Require species-specific setups or large tanks.'
          },
          {
            subheading: 'Size Compatibility',
            content: 'Rule: Adult size difference <2x prevents predation. 1-inch neon tetra + 4-inch angelfish = risk (angels eat neons). Safe: Neons (1 inch) + cherry barbs (2 inches) + honey gourami (2.5 inches). Always research adult sizes, not juvenile store sizes.'
          },
          {
            subheading: 'Water Parameter Overlap',
            content: 'Temperature: ±1°C tolerance. pH: ±0.5 units. Example: Neons (24-26°C, pH 6.0-7.0) + cardinal tetras (24-28°C, pH 5.5-7.0) = perfect overlap. Incompatible: Goldfish (18-22°C) + discus (28-30°C).'
          },
          {
            subheading: 'Behavioral Patterns',
            content: 'Activity level: Fast swimmers stress slow fish. Avoid danios (hyper) with bettas (slow fins). Feeding style: Bottom feeders (corys) + mid-level (tetras) + surface (hatchetfish) = full tank utilization. Nocturnal vs diurnal: Kuhli loaches (night) + daytime schoolers coexist peacefully.'
          }
        ],
        callout: {
          type: 'important',
          text: 'Always cross-reference all four pillars. One mismatch overrides three matches.'
        }
      },
      {
        heading: 'Schooling Fish Dynamics',
        content: 'Social species require groups for mental health and natural behavior expression.',
        subsections: [
          {
            subheading: 'Minimum School Sizes',
            content: 'Tight schoolers (constant grouping): Neon tetras, cardinal tetras, rummy nose tetras. Minimum 10-15 fish. Loose schoolers (group periodically): Cherry barbs, zebra danios, white cloud minnows. Minimum 6-8 fish. Shoaling (same area, not synchronized): Corydoras, otocinclus. Minimum 6 fish.'
          },
          {
            subheading: 'Benefits of Proper Schooling',
            content: 'Reduced stress: Solo schooling fish hide constantly, refuse food, develop diseases. Natural behavior: Synchronized swimming, breeding displays, hierarchical feeding. Predator confusion: Group movement deters aggression from larger tankmates.'
          },
          {
            subheading: 'Mixing Similar Species',
            content: 'Same genus sometimes school together: Cardinal + neon tetras may loosely group. Ember tetras stay separate from neons. Different body shapes rarely mix: Serpae tetras (deep-bodied) ignore rummy nose (slender). Test with small groups first.'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Undersized schools cause chronic stress = shortened lifespan + disease susceptibility.'
        }
      },
      {
        heading: 'Territory and Tank Zoning',
        content: 'Space allocation prevents conflicts even among semi-compatible species.',
        subsections: [
          {
            subheading: 'Horizontal Territory (Bottom)',
            content: 'Bottom dwellers need floor space: Corydoras (peaceful, 2-3 sq ft/group). Plecos (semi-territorial, 4-6 sq ft each). Loaches (active, 6+ sq ft/group). Caves and driftwood define boundaries. One territory/fish or school.'
          },
          {
            subheading: 'Vertical Territory (Mid-Upper)',
            content: 'Angelfish, gouramis claim vertical zones. Tank height >18 inches allows stacking: Surface: Hatchetfish, guppies. Mid-level: Tetras, rasboras. Lower-mid: Angelfish, larger barbs. Tall plants separate vertical territories.'
          },
          {
            subheading: 'Breeding Territory',
            content: 'Cichlids, gouramis, bettas become hyper-aggressive when spawning. Isolate breeding pairs in separate tanks. Egg-scatterers (tetras, barbs) less territorial but may eat fry. Dense plants protect eggs/fry in community setups.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Add all schooling fish simultaneously. Prevents established residents bullying newcomers.'
        }
      },
      {
        heading: 'Building Your Community: Step-by-Step',
        content: 'Strategic stocking order minimizes aggression and establishes balance.',
        subsections: [
          {
            subheading: 'Step 1: Centerpiece Fish (Weeks 5-6 Post-Cycle)',
            content: 'Choose 1-2 larger peaceful species as focal points. Dwarf cichlids (Apistogramma, Bolivian rams), gouramis (honey, pearl), or rainbow fish. Stock first to claim territory before adding faster schoolers.'
          },
          {
            subheading: 'Step 2: Schooling Fish (Week 7)',
            content: 'Add 1-2 schooling species simultaneously. Tetras, rasboras, or danios in groups of 10-15. Wait 1-2 weeks, observe for aggression before adding more schools. Max 3-4 schooling species total (visual chaos if more).'
          },
          {
            subheading: 'Step 3: Bottom Dwellers (Week 8-9)',
            content: 'Corydoras (6-8 fish), otocinclus (6 fish), or small plecos (1-2 fish). Bottom feeders added last avoid competition with mid-level feeders establishing routines.'
          },
          {
            subheading: 'Step 4: Cleanup Crew (Week 10+)',
            content: 'Nerite snails (algae), Malaysian trumpet snails (substrate aeration), Amano shrimp (detritus). Inverts added last once fish acclimated and stable.'
          }
        ],
        callout: {
          type: 'important',
          text: 'Wait 7-10 days between stocking groups. Monitor ammonia/nitrite after each addition.'
        }
      },
      {
        heading: 'Common Compatibility Mistakes',
        content: 'Avoid these frequent errors that lead to tank failures.',
        subsections: [
          {
            subheading: 'Mixing Fin Nippers with Long-Finned Fish',
            content: 'Tiger barbs, serpae tetras nip betta/gourami/angelfish fins. Results: Stress, infections, death. Solution: Keep nippers in species-only or with fast, short-finned tankmates.'
          },
          {
            subheading: 'Single Schooling Fish',
            content: 'One tetra/rasbora hides constantly, refuses food. Dies prematurely from stress. Solution: Always buy 6+ minimum, ideally 10-15 for tight schoolers.'
          },
          {
            subheading: 'Overstocking Semi-Aggressive Fish',
            content: 'Multiple male gouramis/bettas/dwarf cichlids fight in <55 gallons. Females harassed relentlessly. Solution: One male per species, 2-3 females, or species-only tank with heavy dividers.'
          }
        ]
      }
    ],
    
    keyTakeaways: [
      'Match temperament + size (≤2x difference) + water parameters + behavior',
      'School minimums: 10-15 tight schoolers, 6-8 loose schoolers',
      'Allocate territories: horizontal (bottom), vertical (mid-upper), breeding zones',
      'Stocking order: centerpiece → schoolers → bottom dwellers → cleanup crew',
      'Wait 7-10 days between groups, monitor parameters after each addition'
    ],
    
    relatedTopics: ['stocking-calculator', 'bioload-management', 'aggression-troubleshooting', 'breeding-setup']
  },
  
  visuals: {
    headerImage: 'https://images.unsplash.com/photo-1520990904315-d49f7a35a4d7?w=1200&auto=format&fit=crop',
    diagrams: [
      {
        id: 'compatibility-matrix-diagram',
        title: 'Community Tank Compatibility Matrix',
        imageUrl: '/images/knowledge/compatibility-matrix-diagram.svg',
        caption: 'Visual guide showing compatible pairings of popular community species',
        credit: 'AquaGuide Educational Content'
      }
    ]
  },
  
  references: [
    {
      title: 'What Fish Can Live Together? Complete Compatibility Guide',
      author: 'Aquarium Stocking Calculator',
      url: 'https://www.aquariumstockingcalculator.com/blog/fish-compatibility-chart-beginners',
      type: 'article'
    },
    {
      title: 'Schooling Fish: What Fish School Together',
      author: 'Fishing and Fish',
      url: 'https://fishingandfish.com/what-fish-school-together/',
      type: 'article'
    },
    {
      title: 'Top 10 Fish for a Community Tank',
      author: 'Buce Plant',
      url: 'https://buceplant.com/blogs/aquascaping-guides-and-tips/top-10-fish-for-a-community-tank',
      type: 'article'
    }
  ],
  
  lastUpdated: '2026-02-23'
};