import { KnowledgeArticle } from '../../types/knowledge';

export const quarantineProtocol: KnowledgeArticle = {
  id: 'quarantine-protocol',
  slug: 'quarantine-protocol',
  title: 'Quarantine Protocol: Protecting Your Aquarium from Disease',
  category: 'maintenance',
  difficulty: 'intermediate',
  readingTime: 13,
  summary: 'Complete quarantine guide for new fish: tank setup, 4 to 6 week timeline, medication trio protocol, and observation checklist. Prevent ich, velvet, and parasites from entering your display tank.',
  
  content: {
    introduction: 'Every new fish carries potential diseases, parasites, or stress related illness. Quarantine isolates new arrivals for 4 to 6 weeks while treating preventatively. This simple practice prevents catastrophic outbreaks that can wipe out established communities.',
    
    sections: [
      {
        heading: 'Why Quarantine Is Essential',
        content: 'Store tanks harbor hundreds of fish in crowded conditions. Stress suppresses immune systems, allowing dormant parasites to activate days or weeks after purchase.',
        subsections: [
          {
            subheading: 'Common Diseases Prevented',
            content: 'Ich (white spot disease): 7 to 10 day incubation, spreads rapidly. Velvet: Golden dust coating, deadly within 24 to 48 hours. Internal parasites: Worms cause wasting, bloating, white stringy feces. Bacterial infections: Fin rot, popeye, columnaris from wounds or stress.'
          },
          {
            subheading: 'Why Store Display Tanks Are Risky',
            content: 'Shared filtration spreads pathogens instantly. New shipments introduce diseases weekly. Stressed fish shed parasites constantly. Staff cannot observe every fish individually. You take home the entire system, not just one fish.'
          },
          {
            subheading: 'The Cost of Skipping Quarantine',
            content: 'One infected fish treats entire display with medication (expensive, stressful). Inverts and plants die from copper treatments. Beneficial bacteria crashes from antibiotics. Losing prized fish accumulated over years. Emergency treatments cost more than prevention.'
          }
        ],
        callout: {
          type: 'important',
          text: 'Public aquariums quarantine for 6+ weeks with medications. Home aquarists should do minimum 4 weeks.'
        }
      },
      {
        heading: 'Quarantine Tank Setup',
        content: 'Simple bare bottom setup allows easy observation and cleaning.',
        subsections: [
          {
            subheading: 'Equipment Needed',
            content: 'Tank: 10 to 20 gallons sufficient for most fish. Bare bottom (no substrate) for easy cleaning and observation. Filter: Sponge filter only. Medications kill beneficial bacteria, cartridges wasteful. Heater: Maintain species specific temperature. Hiding spots: PVC pipes or terracotta pots (easy disinfection). Air pump: Gentle flow, medications reduce oxygen.'
          },
          {
            subheading: 'What NOT to Include',
            content: 'No substrate (hides parasites, absorbs medication). No live plants (die from medications). No activated carbon (removes medications). No UV sterilizer (deactivates treatments). No decorative items (porous surfaces harbor pathogens).'
          },
          {
            subheading: 'Water Source',
            content: 'Use aged, dechlorinated water from display tank (matches parameters). Add Seachem Prime for ammonia detoxification (no beneficial bacteria during medication). Test daily for ammonia/nitrite spikes. Prepare for daily 25% water changes if needed.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Keep quarantine tank equipment separate. Never transfer nets, siphons, or buckets to display.'
        }
      },
      {
        heading: 'The Medication Trio Protocol',
        content: 'Aquarium Co Op trio treats bacterial, parasitic, and fungal infections preventatively.',
        subsections: [
          {
            subheading: 'Week 1: Combined Treatment',
            content: 'Simultaneously dose all three medications on Day 1. Ich X (formalin/malachite): External parasites, ich, velvet. Maracyn (erythromycin): Bacterial infections, fin rot, popeye. ParaCleanse (praziquantel/metronidazole): Internal worms, gill flukes. No feeding for 7 days (or minimal on Day 4 to 5). No water changes during treatment week. Medications remain active in water, filter continues running.'
          },
          {
            subheading: 'Week 2: Observation and Recovery',
            content: 'Day 8: 50% water change to remove medications. Resume normal feeding schedule. Observe for symptoms: white spots, flashing (scratching), rapid breathing, clamped fins. If symptoms appear: Re dose specific medication targeting disease. Healthy fish: Continue observation without medication.'
          },
          {
            subheading: 'Week 3 to 4: Extended Monitoring',
            content: 'Ich life cycle: 7 to 10 days, second generation can emerge Week 3. Internal parasites: Eggs hatch after 2 to 3 weeks, require re treatment. Velvet: Dormant stage lasts 10 to 14 days. Continue daily observation for lethargy, appetite loss, abnormal swimming. Test water parameters every 3 days.'
          },
          {
            subheading: 'Week 5 to 6: Final Clearance',
            content: 'Minimum 4 weeks total, 6 weeks recommended for valuable fish. Final week: No symptoms, active feeding, normal behavior. Transfer fish with quarantine water to display tank (float bag, acclimate temperature). Never add quarantine tank water directly to display (contains pathogens).'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Weak or stressed fish: Space out treatments. Maracyn Week 1, Ich X Week 2, ParaCleanse Week 3.'
        }
      },
      {
        heading: 'Observation Checklist',
        content: 'Daily monitoring detects diseases early when treatable.',
        subsections: [
          {
            subheading: 'Physical Symptoms',
            content: 'White spots (ich): Salt grain size, fins and body. Golden dust (velvet): Flashlight shines gold shimmer. Red streaks: Bacterial infection in fins or gills. Cloudy eyes: Injury, bacterial, or parasitic. Bloating: Constipation, internal parasites, or dropsy. Stringy white feces: Internal worms or hexamita.'
          },
          {
            subheading: 'Behavioral Red Flags',
            content: 'Flashing: Rubbing body on surfaces (parasites irritate skin). Gasping at surface: Low oxygen, gill parasites, or ammonia burn. Hiding constantly: Stress, disease, or bullying. Lethargy: Resting on bottom, clamped fins. Rapid breathing: Gill damage, stress, or poor water quality.'
          },
          {
            subheading: 'Appetite and Activity',
            content: 'Healthy fish: Eager feeding, explores tank, interacts with environment. Warning signs: Ignores food 2+ days, spits out food, swims erratically. Document daily: Photo/video comparison shows subtle changes. Weight loss visible after 7 to 10 days.'
          }
        ]
      },
      {
        heading: 'After Quarantine: Safe Transfer',
        content: 'Proper acclimation prevents shock and reintroduces fish safely.',
        subsections: [
          {
            subheading: 'Temperature Acclimation',
            content: 'Float sealed bag in display tank 15 to 20 minutes. Matches temperature slowly (sudden change causes stress). Open bag, add 1/4 cup display water every 5 minutes for 30 minutes. Drip acclimation: Tubing with valve, 2 to 4 drips per second for 1 hour (sensitive species).'
          },
          {
            subheading: 'Release Strategy',
            content: 'Net fish from bag, never add quarantine water to display. Release during feeding time (distracts established fish). Dim lights for first 2 hours (reduces aggression). Monitor for bullying 24 to 48 hours. Rearrange decorations if aggression occurs (resets territories).'
          },
          {
            subheading: 'Quarantine Tank Cleaning',
            content: 'Drain completely, scrub with vinegar solution (10:1 water to vinegar). Soak equipment in bleach solution (20:1 water to bleach) for 15 minutes. Rinse thoroughly, air dry 24 hours. Store dry until next use (pathogens die without water).'
          }
        ],
        callout: {
          type: 'important',
          text: 'Never reuse quarantine water or media. Pathogens survive weeks in moist environments.'
        }
      }
    ],
    
    keyTakeaways: [
      'Quarantine all new fish 4 to 6 weeks minimum in separate tank',
      'Medication trio (Ich X, Maracyn, ParaCleanse) Week 1, observe Weeks 2 to 6',
      'Bare bottom setup: sponge filter, heater, PVC hiding spots only',
      'Daily observation: white spots, flashing, gasping, appetite loss',
      'Never mix quarantine water with display tank, disinfect all equipment after'
    ],
    
    relatedTopics: ['disease-identification', 'medication-guide', 'ich-treatment', 'fish-acclimation']
  },
  
  visuals: {
    headerImage: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=1200&auto=format&fit=crop',
    diagrams: [
      {
        id: 'quarantine-timeline-diagram',
        title: 'Quarantine Timeline and Medication Schedule',
        imageUrl: '/images/knowledge/quarantine-timeline-diagram.svg',
        caption: '6 week quarantine protocol with medication trio dosing schedule',
        credit: 'AquaGuide Educational Content'
      }
    ]
  },
  
  references: [
    {
      title: 'Quarantine Tanks',
      author: 'Aquarium Science',
      url: 'https://aquariumscience.org/12-3-quarantine-tanks/',
      type: 'article'
    },
    {
      title: 'How to Quarantine Fish the Easy Way',
      author: 'Aquarium Co-Op',
      url: 'https://www.aquariumcoop.com/blogs/aquarium/quarantine-tank',
      type: 'article'
    },
    {
      title: 'How to Use the Quarantine Medication Trio',
      author: 'Aquarium Co-Op',
      url: 'https://www.aquariumcoop.com/blogs/faqs/how-to-use-quarantine-med-trio',
      type: 'article'
    }
  ],
  
  lastUpdated: '2026-02-23'
};