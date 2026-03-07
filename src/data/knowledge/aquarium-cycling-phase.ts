import { KnowledgeArticle } from '../../types/knowledge';

export const aquariumCyclingPhase: KnowledgeArticle = {
  id: 'aquarium-cycling-phase',
  slug: 'aquarium-cycling-phase',
  title: 'Aquarium Cycling Phase: The Complete Fishless Method Guide',
  category: 'maintenance',
  difficulty: 'beginner',
  readingTime: 10,
  summary: 'Establish a bulletproof biological foundation using the fishless cycling method. This guide covers the precise 4-to-6-week timeline, testing protocols, and troubleshooting to achieve a fully cycled tank without harming any livestock.',
  
  content: {
    introduction: 'The nitrogen cycle is the engine of your aquarium. Without a fully established colony of beneficial bacteria, toxic ammonia from fish waste will quickly become lethal. Fishless cycling is the only ethical and reliable method to build this biological filter, allowing you to stock your tank safely from day one.',
    
    sections: [
      {
        heading: 'The Science: How the Cycle Works',
        content: 'Biological filtration relies on two distinct colonies of nitrifying bacteria working in sequence to detoxify waste.',
        subsections: [
          {
            subheading: 'Stage 1: Ammonia Oxidation (AOB)',
            content: 'Ammonia (NH₃) released from waste is highly toxic. Ammonia-Oxidizing Bacteria (AOB), primarily *Nitrosomonas* species, colonize your filter media. They oxidize ammonia into nitrite. This colony establishes first, usually within 10–14 days, doubling every 15–20 hours in warm, oxygenated water.'
          },
          {
            subheading: 'Stage 2: Nitrite Oxidation (NOB)',
            content: 'Nitrite (NO₂⁻) is the byproduct of stage 1 and is arguably more toxic than ammonia, preventing blood from carrying oxygen. Nitrite-Oxidizing Bacteria (NOB), primarily *Nitrospira* species, convert nitrite into nitrate. This stage is the "bottleneck" of the cycle, often taking 3–4 weeks to mature.'
          },
          {
            subheading: 'Stage 3: Nitrate Management',
            content: 'Nitrate (NO₃⁻) is the end product of nitrification. It is far less toxic than ammonia or nitrite but accumulates over time. In a cycled tank, nitrate is controlled through weekly water changes and uptake by live plants. Target levels: < 20 ppm for sensitive species, < 40 ppm generally.'
          }
        ],
        callout: {
          type: 'important',
          text: 'A tank is only "cycled" when it can process a 2–4 ppm dose of ammonia into nitrate within 24 hours, leaving 0 ppm ammonia and 0 ppm nitrite.'
        }
      },
      {
        heading: 'Fishless Cycling Protocol (Step-by-Step)',
        content: 'This method uses pure ammonia, allowing for precise control and rapid colonization compared to "ghost feeding" (fish food), which is unpredictable and dirty.',
        subsections: [
          {
            subheading: 'Week 1: Initialization',
            content: 'Set up equipment: Filter running 24/7, heater set to 26–28°C (accelerates bacteria growth by ~30%), and strong surface agitation for oxygen. Dose ammonium chloride (pure ammonia with no surfactants/detergents) to reach 2–4 ppm. Use an online calculator for precise dosing. Test daily. Ammonia will stay high initially; this is normal.'
          },
          {
            subheading: 'Weeks 2–3: The Nitrite Spike',
            content: 'Ammonia levels will begin to drop as the AOB colony establishes. Nitrite will appear and skyrocket—often exceeding 5 ppm (off the charts). Continue dosing ammonia to 1–2 ppm daily to feed the bacteria. Do NOT let ammonia hit 0 ppm for more than 24 hours, or the colony may starve. This is the critical "ugly phase"; patience is required.'
          },
          {
            subheading: 'Weeks 4–6: Completion & Testing',
            content: 'As the NOB colony catches up, nitrite will plummet. Both ammonia and nitrite should process to 0 ppm within 24 hours of dosing. Once parameters hold at 0/0/positive nitrates for 3 consecutive days, the cycle is complete. Perform a large (80–90%) water change to reset nitrates before adding fish.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Speed up the process by 50%: "Seed" the tank with filter media or sponge foam from an established, disease-free aquarium. This introduces mature bacteria instantly.'
        }
      },
      {
        heading: 'Troubleshooting and Maintenance',
        content: 'Cycles rarely go perfectly smooth. Here is how to solve common stalls.',
        subsections: [
          {
            subheading: 'Why is my cycle stalled?',
            content: 'The #1 cause of a stalled cycle is a pH crash. Nitrifying bacteria stop working below pH 6.5. Test pH; if it is low, perform a water change to reset buffers. Low oxygen is another culprit: ensure filter output agitates the surface. Temperature below 22°C also significantly slows reproduction.'
          },
          {
            subheading: 'Testing Protocol',
            content: 'Use liquid test kits (API Master Kit) for accuracy; strips are often too vague for cycling. Test at the same time daily. Track the trend: Ammonia should fall daily, Nitrite should rise then fall, Nitrate should climb. If Nitrite stays extremely high (>5 ppm) for weeks, perform a partial water change to lower it below 5 ppm, as extreme levels can inhibit the bacteria.'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Never let ammonia or nitrite hit 0 ppm for extended periods during the cycle without dosing more ammonia. Starving the colony can cause it to die off, forcing you to restart.'
        }
      }
    ],
    
    keyTakeaways: [
      'Use pure ammonium chloride for dosing; it is cleaner and more precise than fish food.',
      'The Nitrite Spike (Weeks 2–3) is the hardest phase; test daily and be patient.',
      'Maintain pH above 6.5 and Temp 26–28°C for optimal bacteria reproduction.',
      'Cycle is complete only when 2 ppm ammonia processes to 0/0 in 24 hours.',
      'Always dechlorinate water; chlorine kills the beneficial bacteria you are trying to grow.'
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
        caption: 'The characteristic ammonia, nitrite, and nitrate curves over a 6-week cycle.',
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
      title: 'Fishless Cycling Guide',
      author: 'Aquarium Co-Op',
      url: 'https://www.aquariumcoop.com/blogs/aquarium/fishless-cycling',
      type: 'article'
    },
    {
      title: 'Nitrogen Cycle Overview',
      author: 'USGS',
      url: 'https://www.usgs.gov/special-topics/water-science-school/science/nitrogen-and-water',
      type: 'article'
    }
  ],
  
  lastUpdated: '2024-03-07'
};