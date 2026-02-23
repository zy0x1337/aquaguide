import { KnowledgeArticle } from '../../types/knowledge';

export const aquariumFilterTypes: KnowledgeArticle = {
  id: 'aquarium-filter-types',
  slug: 'aquarium-filter-types',
  title: 'Aquarium Filter Types: Mechanical vs Biological Filtration',
  category: 'equipment',
  difficulty: 'beginner',
  readingTime: 12,
  summary: 'Compare sponge, HOB, canister, and internal filters. Understand mechanical vs biological filtration, media choices, and maintenance schedules for crystal clear water.',
  
  content: {
    introduction: 'Filtration removes waste through two processes: mechanical (physical debris) and biological (toxic ammonia and nitrite). Different filter types excel at specific tasks. Matching filter to tank size and stocking determines water quality success.',
    
    sections: [
      {
        heading: 'Filtration Fundamentals',
        content: 'Three filtration stages work synergistically to maintain water quality.',
        subsections: [
          {
            subheading: 'Mechanical Filtration',
            content: 'Physical removal of debris: uneaten food, fish waste, dead plant matter. Media: Sponges, filter floss, ceramic pre filters. Traps particles before decay releases ammonia. Requires regular cleaning (weekly to monthly) to prevent clogging and maintain flow.'
          },
          {
            subheading: 'Biological Filtration',
            content: 'Beneficial bacteria convert ammonia to nitrite to nitrate. Colonizes porous media: ceramic rings, bio balls, sponges. Surface area critical: more surface equals more bacteria equals higher bioload capacity. Never clean biological media with tap water (chlorine kills bacteria).'
          },
          {
            subheading: 'Chemical Filtration (Optional)',
            content: 'Activated carbon: Removes tannins, medications, odors. Replace monthly. Zeolite: Binds ammonia emergencies. Purigen: Polishes water clarity. Most tanks function without chemical filtration if biological and mechanical maintained properly.'
          }
        ],
        callout: {
          type: 'important',
          text: 'Biological filtration handles toxins; mechanical prevents organic buildup. Both essential.'
        }
      },
      {
        heading: 'Sponge Filters: Simple and Effective',
        content: 'Air driven filters ideal for small tanks, fry, and shrimp.',
        subsections: [
          {
            subheading: 'How They Work',
            content: 'Air pump creates bubbles rising through hollow tube, pulling water through sponge. Sponge provides mechanical plus biological filtration. No impeller equals safe for fry and shrimp.'
          },
          {
            subheading: 'Best Uses',
            content: 'Breeding tanks (gentle flow, no fry suction), Shrimp tanks (biofilm growth on sponge equals food), Hospital or quarantine (easy to move, no carbon affecting meds), Tanks under 20 gallons (sufficient for low bioload).'
          },
          {
            subheading: 'Maintenance',
            content: 'Squeeze sponge in old tank water weekly to monthly. Never use tap water (kills bacteria). Replace sponge yearly or when falling apart. Add second sponge before removing old (bacteria transfer).'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Seed new sponge filters with squeezed water from established sponge equals instant cycle.'
        }
      },
      {
        heading: 'Hang On Back (HOB) Filters',
        content: 'External filters hanging on tank rim, popular for ease and effectiveness.',
        subsections: [
          {
            subheading: 'Design and Function',
            content: 'Intake tube draws water into filter box. Passes through cartridge (mechanical floss plus carbon). Returns via spillway creating surface agitation (oxygen exchange). Replaceable cartridges: Convenient but expensive, destroy bacteria colonies. DIY mod: Replace cartridges with sponge plus ceramic rings (never replace, just rinse).'
          },
          {
            subheading: 'Advantages',
            content: 'Easy installation (no plumbing), Accessible maintenance (visible, reachable), Surface agitation included, Suitable for 10 to 75 gallon tanks, Affordable ($20 to $80).'
          },
          {
            subheading: 'Disadvantages',
            content: 'Smaller media capacity than canisters, Cartridge replacement costs add up, Can be noisy if water level drops, Limited customization vs canister filters, Evaporation affects flow (top off required).'
          },
          {
            subheading: 'Best Practices',
            content: 'Flow rate: 5 to 10 times tank volume per hour. 50 gallon tank equals 250 to 500 GPH filter. Clean mechanical sponge monthly, rinse biological media every 2 to 3 months in old tank water. Never replace all media simultaneously (lose bacteria).'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Avoid replace cartridge monthly marketing. Rinse and reuse for stable bacteria.'
        }
      },
      {
        heading: 'Canister Filters: Maximum Capacity',
        content: 'External pressurized filters for larger tanks demanding superior filtration.',
        subsections: [
          {
            subheading: 'Design and Advantages',
            content: 'Large sealed canister under or beside tank. Pump forces water through multiple media trays under pressure. Massive surface area: 5 to 10 times more bio media than HOB. Customizable media: Stack mechanical (floss) to biological (ceramic) to chemical (carbon) layers. Quiet operation (submerged pump), no evaporation issues.'
          },
          {
            subheading: 'Suitable Tank Sizes',
            content: 'Small canisters (100 to 200 GPH): 30 to 50 gallons. Medium (250 to 400 GPH): 50 to 100 gallons. Large (500 plus GPH): 100 plus gallons, heavily stocked tanks. Underpowered canister equals poor circulation, dead zones.'
          },
          {
            subheading: 'Maintenance Requirements',
            content: 'Monthly: Rinse pre filter sponge in old tank water. Every 3 months: Clean impeller, check hoses for kinks. Every 6 months: Full media rinse (biological in tank water, mechanical with tap). Never: Clean all media at once, replace established bio media.'
          },
          {
            subheading: 'Disadvantages',
            content: 'Higher cost ($100 to $400), More complex setup (hoses, priming), Difficult to access (under stand), Catastrophic leaks possible (rare but messy), Overkill for tanks under 40 gallons.'
          }
        ],
        callout: {
          type: 'important',
          text: 'Prime canister fully before starting. Air pockets damage impeller and reduce flow.'
        }
      },
      {
        heading: 'Internal Filters',
        content: 'Submersible filters inside tank, suitable for small setups.',
        subsections: [
          {
            subheading: 'Types and Uses',
            content: 'Box filters: Sponge plus carbon cartridge, air or power driven. Nano tanks (5 to 10 gallons), hospital tanks. Undergravel filters (UGF): Substrate becomes bio filter via air or powerhead. Outdated (maintenance nightmare, anaerobic zones). Modern alternatives superior.'
          },
          {
            subheading: 'Pros and Cons',
            content: 'Pros: Cheap ($10 to $30), no external space needed, safe for fry and shrimp. Cons: Takes tank space, harder to clean, less media capacity, can be eyesore (hide with plants).'
          }
        ]
      },
      {
        heading: 'Choosing Your Filter',
        content: 'Match filter type to tank parameters and maintenance willingness.',
        subsections: [
          {
            subheading: 'Decision Matrix',
            content: 'Tanks under 20 gallons, low bioload: Sponge filter ($15). Tanks 20 to 75 gallons, moderate stock: HOB filter ($40). Tanks 75 plus gallons, heavy stock: Canister filter ($150 plus). Planted low tech: Sponge or small HOB (gentle flow). Breeding or fry: Sponge only (no intake risk).'
          },
          {
            subheading: 'Dual Filtration Strategy',
            content: 'Combine filter types for redundancy: HOB plus sponge: Mechanical (HOB) plus backup biological (sponge). Maintenance friendly. Canister plus sponge: High capacity (canister) plus easy cleaning (sponge alternate weeks). If one fails, other sustains bacteria until repaired.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Run dual filters during cycling. Seed new tanks with squeezed sponge from established filter.'
        }
      }
    ],
    
    keyTakeaways: [
      'Mechanical (debris) plus biological (bacteria) filtration both required',
      'Sponge: under 20 gallons, breeding, shrimp; HOB: 20 to 75 gallons; Canister: 75 plus gallons',
      'Flow rate 5 to 10 times tank volume per hour for optimal circulation',
      'Never clean all media at once or use tap water on bio media',
      'Dual filtration provides backup and easier maintenance scheduling'
    ],
    
    relatedTopics: ['filter-media-guide', 'cycling-with-filters', 'flow-rate-calculation', 'filter-maintenance']
  },
  
  visuals: {
    headerImage: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=1200&auto=format&fit=crop',
    diagrams: [
      {
        id: 'filter-comparison-diagram',
        title: 'Filter Types Comparison',
        imageUrl: '/images/knowledge/filter-comparison-diagram.svg',
        caption: 'Side by side comparison of sponge, HOB, canister, and internal filter designs',
        credit: 'AquaGuide Educational Content'
      }
    ]
  },
  
  references: [
    {
      title: 'Different Types of Aquarium Filters and Their Functions',
      author: 'Aquatic Experts',
      url: 'https://www.aquaticexperts.com/blogs/faq-resources/different-types-of-aquarium-filters-and-their-functions',
      type: 'article'
    },
    {
      title: 'Aquarium Filter Flow Rate Calculator',
      author: 'Complete Calculators',
      url: 'https://completecalculators.com/calculators/aquarium/filter-flow-calculator',
      type: 'article'
    },
    {
      title: 'Tank Volume and Filter Flow Rate Guide',
      author: 'Fishing and Fish',
      url: 'https://fishingandfish.com/tank-volume-filter-flow-rate-calculator/',
      type: 'article'
    }
  ],
  
  lastUpdated: '2026-02-23'
};