import { KnowledgeArticle } from '../../types/knowledge';

export const waterParametersCo2: KnowledgeArticle = {
  id: 'water-parameters-co2',
  slug: 'water-parameters-co2',
  title: 'Water Parameters and CO₂ Management: KH pH CO₂ Mastery',
  category: 'chemistry',
  difficulty: 'intermediate',
  readingTime: 11,
  summary: 'Master CO₂ injection using the KH pH relationship. Complete reference table, calculation formulas, drop checker usage, and troubleshooting for optimal plant growth without fish stress.',
  
  content: {
    introduction: 'Carbon dioxide drives aquatic plant photosynthesis but requires precise management to avoid fish stress. The mathematical relationship between carbonate hardness and pH allows indirect CO₂ measurement without expensive probes. This guide covers the chemistry, practical application, and safety limits.',
    
    sections: [
      {
        heading: 'The KH pH CO₂ Relationship',
        content: 'Carbonate hardness (KH) acts as pH buffer, resisting changes from dissolved CO₂ forming carbonic acid.',
        subsections: [
          {
            subheading: 'CO₂ Calculation Formula',
            content: 'Accurate formula: CO₂ (mg per liter) equals KH (degrees) divided by 2.8, then multiplied by 10 raised to the power of 7.9 minus pH. Example calculation: KH 4 degrees and pH 6.6 yields 30 ppm CO₂. This relationship holds reliably when KH exceeds 1 degree (below 1 degree, insufficient buffering causes formula breakdown). Only valid in systems where carbonic acid is primary pH influence (true for planted tanks without strong acids or bases).'
          },
          {
            subheading: 'Target Ranges for Health',
            content: 'Plants: 25 to 35 ppm daytime for optimal photosynthesis and growth rates. Fish safety: Maximum 40 ppm (above causes stress, rapid breathing, surface gasping). Nighttime: CO₂ off allowing pH to rise 0.3 to 0.6 units (plants respire and consume oxygen at night). Sensitive species: Discus, rams, apistos prefer 20 to 25 ppm maximum. Shrimp: Tolerant to 35 ppm if acclimated gradually.'
          }
        ],
        callout: {
          type: 'important',
          text: 'Measure KH once weekly, pH twice daily (before lights on and 2 hours after lights off).'
        }
      },
      {
        heading: 'KH pH CO₂ Reference Table',
        content: 'Use morning pH readings before CO₂ injection peaks. All values in mg per liter.',
        subsections: [
          {
            subheading: 'Freshwater Community Tanks (KH 3 to 6 degrees)',
            content: 'At KH 3 degrees: pH 6.4 gives 35 ppm, pH 6.6 gives 25 ppm, pH 6.8 gives 17 ppm, pH 7.0 gives 12 ppm. At KH 4 degrees: pH 6.4 gives 47 ppm (too high), pH 6.6 gives 33 ppm, pH 6.8 gives 23 ppm, pH 7.0 gives 16 ppm. At KH 5 degrees: pH 6.4 gives 58 ppm (dangerous), pH 6.6 gives 41 ppm (upper limit), pH 6.8 gives 29 ppm (ideal), pH 7.0 gives 20 ppm. At KH 6 degrees: pH 6.6 gives 49 ppm, pH 6.8 gives 35 ppm (target), pH 7.0 gives 24 ppm, pH 7.2 gives 17 ppm.'
          },
          {
            subheading: 'Soft Water Planted Tanks (KH 2 to 4 degrees)',
            content: 'Lower KH allows finer CO₂ control with smaller pH swings equaling larger concentration changes. However, requires extremely stable injection as fluctuations cause rapid pH crashes. Best for experienced aquarists with reliable regulators and solenoid valves. Discus breeders often maintain KH 1 to 2 degrees but avoid CO₂ injection due to crash risk.'
          }
        ]
      },
      {
        heading: 'Practical CO₂ Management',
        content: 'Injection system setup and monitoring simplified for planted tank success.',
        subsections: [
          {
            subheading: 'Drop Checker Usage',
            content: '4 dKH reference solution provides accurate color indication: Lime green equals 30 ppm (perfect target for plants and fish). Yellow indicates above 50 ppm (emergency shut off CO₂ immediately). Blue indicates below 20 ppm (plants starving, increase injection rate). Drop checker lags 2 hours behind actual tank levels (measures equilibrium with air space). Always cross reference with morning pH test for verification.'
          },
          {
            subheading: 'Daily Injection Routine',
            content: '6 AM: Solenoid opens, CO₂ begins bubbling (1 hour before lights for equilibration). pH drops 0.5 to 0.8 units over 2 hours as gas dissolves. 8 PM: Lights off, solenoid closes CO₂ (plants stop photosynthesis). Overnight: pH rises naturally as CO₂ off gasses and consumption stops. Monitor fish behavior: Darting or surface swimming indicates excessive levels. Proper circulation prevents CO₂ pockets (causes localized high concentrations).'
          },
          {
            subheading: 'Troubleshooting Common Issues',
            content: 'pH crash (drop exceeding 1.2 units): Reduce injection rate 20 percent, check KH above 3 degrees. Pearling absent (no oxygen bubbles from leaves): Increase CO₂ by 5 to 10 ppm, verify adequate light intensity (minimum 30 PAR). Fish gasping at surface: Emergency CO₂ shutoff, increase surface agitation, test for 0 ppm ammonia (mimics CO₂ poisoning symptoms). Algae outbreak: Check CO₂ stability (fluctuations stress plants more than low steady levels).'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Never exceed 40 ppm CO₂ or pH drop exceeding 1.2 units in 24 hours. Both cause severe fish stress and potential mortality.'
        }
      }
    ],
    
    keyTakeaways: [
      'CO₂ concentration equals KH divided by 2.8 then multiplied by 10 to power of 7.9 minus pH',
      'Target 25 to 35 ppm daytime verified by 4 dKH drop checker showing lime green color',
      'Daily pH swing of 0.3 to 0.6 units normal and healthy with proper timing',
      'Monitor fish behavior more than test kits for early stress detection',
      'KH 3 to 6 degrees ideal for injection stability in community planted tanks'
    ],
    
    relatedTopics: ['kh-ph-balance', 'planted-tank-lighting', 'fertilization-schedule', 'advanced-planting']
  },
  
  visuals: {
    headerImage: 'https://images.unsplash.com/photo-1627483235697-29d3b69a2a90?w=1200&auto=format&fit=crop',
    diagrams: [
      {
        id: 'kh-ph-co2-graph',
        title: 'KH pH CO₂ Relationship Chart',
        imageUrl: '/images/knowledge/kh-ph-co2-graph.svg',
        caption: 'Interactive graph showing CO₂ concentrations across KH and pH ranges with safety zones',
        credit: 'AquaGuide Educational Content'
      }
    ]
  },
  
  references: [
    {
      title: 'KH pH CO₂ Tabelle',
      author: 'Aquasabi',
      url: 'https://www.aquasabi.de/aquascaping-wiki_aquarium_die-kh-ph-co2-tabelle',
      type: 'article'
    },
    {
      title: 'KH pH CO2 Relationships',
      author: 'Aquarium Science',
      url: 'https://aquariumscience.org/15-6-2-kh-ph-co2-relationships/',
      type: 'article'
    },
    {
      title: 'CO₂ im Aquarium: Alle Infos',
      author: 'DRTA Archiv',
      url: 'https://www.drta-archiv.de/co2-aquarium/',
      type: 'article'
    }
  ],
  
  lastUpdated: '2026-02-23'
};