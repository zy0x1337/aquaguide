import { KnowledgeArticle } from '../../types/knowledge';

export const maintenanceSchedule: KnowledgeArticle = {
  id: 'maintenance-schedule',
  slug: 'maintenance-schedule',
  title: 'Aquarium Maintenance Schedule: Daily, Weekly, and Monthly Tasks',
  category: 'maintenance',
  difficulty: 'beginner',
  readingTime: 11,
  summary: 'Comprehensive maintenance checklist for healthy aquariums. Daily feeding and observation, weekly water changes and algae cleaning, monthly filter maintenance and testing protocols.',
  
  content: {
    introduction: 'Consistent maintenance prevents crises. Small routine tasks keep water parameters stable, fish healthy, and equipment functional. This schedule balances effort with results, suitable for community tanks 20 to 100 gallons.',
    
    sections: [
      {
        heading: 'Daily Tasks (5 Minutes)',
        content: 'Brief daily checks catch problems before they escalate.',
        subsections: [
          {
            subheading: 'Feeding and Observation',
            content: 'Feed once or twice daily, only what fish consume in 2 to 3 minutes. Watch feeding response: Healthy fish eagerly compete for food. Lethargy or refusal signals illness. Count fish: Missing fish could be deceased (ammonia spike risk). Behavioral changes: Flashing, gasping, hiding, aggression.'
          },
          {
            subheading: 'Equipment Check',
            content: 'Filter flow: Strong, steady stream (weak flow = clog). Heater indicator: Light confirms operation. Temperature: Stable within 1°C of target. Lights: Timer correct, brightness consistent (fading bulbs stress fish).'
          },
          {
            subheading: 'Visual Inspection',
            content: 'Water clarity: Cloudy water indicates bacterial bloom or overfeeding. Surface: No oil film (protein buildup, increase surface agitation). Plants: Brown edges or holes show nutrient deficiency. Algae: Sudden growth signals parameter imbalance.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Feed at same time daily. Routine reduces stress and makes behavior changes obvious.'
        }
      },
      {
        heading: 'Weekly Tasks (30 Minutes)',
        content: 'Weekly maintenance prevents waste accumulation and maintains water quality.',
        subsections: [
          {
            subheading: 'Water Changes (20 to 30 Percent)',
            content: 'Frequency: Once weekly for community tanks, twice weekly for heavy stocking. Process: Siphon substrate (removes detritus), target corners and under decorations. Match temperature: Within 2°C of tank (sudden shifts stress fish). Dechlorinate: Seachem Prime or API Stress Coat added to new water. Refill slowly: Avoid disturbing substrate or stressing fish with current.'
          },
          {
            subheading: 'Algae Removal',
            content: 'Glass cleaning: Magnetic scraper or algae pad, front and sides (leave back for aesthetic depth). Plant leaves: Gently wipe large leaves with fingers (removes diatoms). Decorations: Scrub in tank water if heavily coated (avoid tap water shock).'
          },
          {
            subheading: 'Filter Maintenance (Light)',
            content: 'Intake tube: Remove debris blockage (prevents flow reduction). Pre filter sponge: Quick rinse in old tank water (removes large particles). Check flow rate: Should be 5 to 10x tank volume per hour. Do NOT deep clean filter media weekly (kills bacteria).'
          },
          {
            subheading: 'Parameter Testing (Established Tanks)',
            content: 'pH: Stable within species range (sudden drops indicate KH depletion). Nitrate: Below 40 ppm freshwater, 20 ppm saltwater (increase water change frequency if higher). If ammonia or nitrite detectable: Emergency 50% water change, investigate cause (overfeeding, dead fish, filter failure).'
          }
        ],
        callout: {
          type: 'important',
          text: 'Consistency matters more than perfection. Same day each week establishes routine.'
        }
      },
      {
        heading: 'Monthly Tasks (45 to 60 Minutes)',
        content: 'Monthly deep maintenance sustains equipment and prevents gradual decline.',
        subsections: [
          {
            subheading: 'Filter Deep Clean',
            content: 'Sponges and pads: Rinse thoroughly in old tank water (remove all debris). Ceramic rings and bio balls: Light rinse only if visibly clogged (preserve bacteria). Impeller and housing: Remove, scrub calcium deposits, check for cracks. Replace cartridges: If using disposable media (better to switch to reusable sponges).'
          },
          {
            subheading: 'Equipment Inspection',
            content: 'Heater: Test with separate thermometer, replace if 2°C off target. Airline tubing: Check for cracks or clogs (reduces air flow). Light bulbs: Fluorescent loses 30% intensity after 12 months (replace annually). Lid: Clean condensation buildup (reduces light penetration 20%).'
          },
          {
            subheading: 'Plant and Décor Maintenance',
            content: 'Trim plants: Remove dead/dying leaves, thin overgrown stems. Replant: Uproot floating stems, replant securely. Décor deep clean: Boil or soak in vinegar solution if algae covered (rinse thoroughly). Substrate vacuum: Deep clean entire substrate, rotate areas weekly for thorough coverage.'
          },
          {
            subheading: 'Comprehensive Testing',
            content: 'Full parameter check: Ammonia, nitrite, nitrate, pH, GH, KH. Compare tap water: Identify changes in source water affecting tank. Log results: Track trends over months (gradual pH drops show KH depletion). Adjust routine: If nitrates rise above 40 ppm consistently, increase water change frequency or reduce feeding.'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Never clean all filter media at once. Rotate cleaning: sponges one month, bio media next month.'
        }
      },
      {
        heading: 'Quarterly Tasks (Every 3 Months)',
        content: 'Seasonal deep maintenance addresses gradual wear and buildup.',
        subsections: [
          {
            subheading: 'Major Equipment Replacement',
            content: 'Air stones: Replace if bubbles weak or noisy (mineral buildup clogs pores). Filter floss: Full replacement (cheap, traps finest particles). Activated carbon: Replace if using for odor/tannin removal (exhausted after 4 to 6 weeks). Check warranties: Test equipment within warranty period.'
          },
          {
            subheading: 'Deep Substrate Cleaning',
            content: 'Anaerobic pockets: Stir substrate gently, release trapped gases (sulfur smell = problem). Malaysian trumpet snails: Naturally aerate substrate (prevent anaerobic zones). Consider substrate replacement: After 3 to 5 years in planted tanks (nutrient depletion).'
          },
          {
            subheading: 'Algae Prevention Review',
            content: 'Evaluate lighting duration: Reduce if algae persistent despite maintenance. Phosphate test: High phosphate (above 0.5 ppm) fuels algae (increase plants or reduce feeding). Flow pattern: Dead spots collect detritus (reposition filter output or add powerhead).'
          }
        ]
      },
      {
        heading: 'Red Flag Situations: Immediate Action',
        content: 'Certain observations require breaking the routine for emergency intervention.',
        subsections: [
          {
            subheading: 'Ammonia or Nitrite Detected',
            content: 'Immediate 50% water change. Stop feeding 24 hours. Test daily until 0 ppm. Add Seachem Prime (detoxifies temporarily). Investigate cause: dead fish, overfeeding, filter failure, overstocking.'
          },
          {
            subheading: 'Sudden Fish Deaths',
            content: 'Remove body immediately (decomposition spikes ammonia). Test all parameters. Observe remaining fish for symptoms (white spots, gasping, flashing). Consider quarantine for sick individuals. Check oxygen: increase surface agitation if fish gasping.'
          },
          {
            subheading: 'Cloudy Water',
            content: 'White cloudiness: Bacterial bloom from overfeeding or new tank syndrome (reduce feeding, increase water changes). Green cloudiness: Algae bloom from excess light or nutrients (reduce lighting to 6 hours, 50% water change). Brown cloudiness: Substrate disturbance or diatoms (temporary, vacuum substrate).'
          }
        ],
        callout: {
          type: 'important',
          text: 'Keep emergency supplies ready: Seachem Prime, extra buckets, test kit, spare heater.'
        }
      }
    ],
    
    keyTakeaways: [
      'Daily: feed, count fish, check equipment (5 minutes)',
      'Weekly: 20 to 30% water change, clean glass, test nitrates (30 minutes)',
      'Monthly: deep clean filter, inspect equipment, trim plants (60 minutes)',
      'Quarterly: replace air stones, check substrate, evaluate lighting (seasonal)',
      'Emergency: ammonia/nitrite detected = immediate 50% water change'
    ],
    
    relatedTopics: ['water-change-guide', 'filter-maintenance', 'parameter-testing', 'algae-prevention']
  },
  
  visuals: {
    headerImage: 'https://images.unsplash.com/photo-1520990904315-d49f7a35a4d7?w=1200&auto=format&fit=crop',
    diagrams: [
      {
        id: 'maintenance-calendar-diagram',
        title: 'Annual Maintenance Calendar',
        imageUrl: '/images/knowledge/maintenance-calendar-diagram.svg',
        caption: 'Visual calendar showing daily, weekly, monthly, and quarterly maintenance tasks',
        credit: 'AquaGuide Educational Content'
      }
    ]
  },
  
  references: [
    {
      title: 'Aquarium Maintenance Checklist: Weekly & Monthly Tasks',
      author: 'Aquassi',
      url: 'https://aquassi.co.uk/aquarium-maintenance-checklist-weekly-monthly-tasks/',
      type: 'article'
    },
    {
      title: 'Routine Care',
      author: 'OASE',
      url: 'https://us.oase.com/blogs/aquarium-maintenance/routine-care',
      type: 'article'
    },
    {
      title: 'A Marine Aquarium Maintenance Checklist',
      author: 'TFH Magazine',
      url: 'https://www.tfhmagazine.com/articles/aquarium-basics/a-marine-aquarium-maintenance-checklist-the-salt-creep',
      type: 'article'
    }
  ],
  
  lastUpdated: '2026-02-23'
};