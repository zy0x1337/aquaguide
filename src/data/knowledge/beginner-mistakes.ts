import { KnowledgeArticle } from '../../types/knowledge';

export const beginnerMistakes: KnowledgeArticle = {
  id: 'beginner-mistakes',
  slug: 'beginner-mistakes',
  title: 'Common Beginner Mistakes: What Not to Do in Your First Aquarium',
  category: 'beginner',
  difficulty: 'beginner',
  readingTime: 14,
  summary: 'Avoid the top 10 mistakes that kill beginner tanks: overstocking, skipping cycling, incompatible fish, overfeeding, poor water changes. Learn why each fails and how to prevent disaster.',
  
  content: {
    introduction: 'Most beginner tanks fail within 6 months from preventable mistakes. Understanding these errors before starting saves money, time, and fish lives. This guide addresses the most common failures and their solutions.',
    
    sections: [
      {
        heading: 'Mistake 1: Buying Fish Before Cycling',
        content: 'Adding fish to brand new tanks causes new tank syndrome: ammonia poisoning within days.',
        subsections: [
          {
            subheading: 'Why It Kills Fish',
            content: 'New tanks lack beneficial bacteria to convert ammonia into nitrate. Fish waste produces ammonia immediately. Ammonia at 0.5 ppm burns gills, suppresses immune system. Most fish die within 7 to 14 days from cumulative stress and secondary infections.'
          },
          {
            subheading: 'The Correct Approach',
            content: 'Fishless cycling: Add ammonia source (pure ammonia or fish food) to empty tank for 4 to 6 weeks. Test daily until ammonia and nitrite process to 0 ppm within 24 hours. Seeded cycling: Borrow established filter media from friend (cuts time to 2 to 3 weeks). Last resort (fish in cycle): 2 to 3 hardy fish only, daily 25% water changes, test parameters twice daily.'
          },
          {
            subheading: 'Cycling Completion Signs',
            content: 'Ammonia: 0 ppm. Nitrite: 0 ppm. Nitrate: 5 to 20 ppm (present but low). Consistent readings 3 days running. Bacteria established, safe for fish.'
          }
        ],
        callout: {
          type: 'important',
          text: 'Number one cause of beginner tank failure. Never buy fish same day as tank setup.'
        }
      },
      {
        heading: 'Mistake 2: Overstocking the Tank',
        content: 'Too many fish overwhelms filtration and creates toxic waste buildup.',
        subsections: [
          {
            subheading: 'The Inch Per Gallon Myth',
            content: 'Old rule: 1 inch of fish per gallon of water. Oversimplified and dangerous. Ignores adult size: Goldfish grows 8 inches (needs 40 gallons alone). Ignores waste output: Plecos produce 10x waste of tetras. Ignores swimming behavior: Active swimmers need horizontal space regardless of body size.'
          },
          {
            subheading: 'Real Stocking Guidelines',
            content: 'Research adult sizes: Pet store juveniles triple in size within 1 year. Account for bioload: Large bodied fish (goldfish, cichlids) = heavy waste. Small bodied (tetras, rasboras) = light waste. Swimming space: Active swimmers (danios, barbs) need 3 feet minimum length. Slow swimmers (bettas, gouramis) comfortable in smaller spaces. Filtration capacity: 5 to 10x tank volume per hour for heavy stock.'
          },
          {
            subheading: 'Consequences of Overstocking',
            content: 'Ammonia and nitrite spikes (even in cycled tanks). Oxygen depletion (fish gasping at surface). Increased aggression (territorial disputes, stress). Stunted growth (hormones suppress size). Shortened lifespans (chronic stress, disease susceptibility).'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Use AqAdvisor.com calculator. Input actual adult sizes and filtration for accurate stocking advice.'
        }
      },
      {
        heading: 'Mistake 3: Incompatible Fish Combinations',
        content: 'Mixing species without research causes aggression, stress, and death.',
        subsections: [
          {
            subheading: 'Common Deadly Pairings',
            content: 'Goldfish with tropical fish: Goldfish need 18 to 22°C, tropicals need 24 to 28°C (neither thrives). Aggressive with peaceful: Tiger barbs nip betta or gourami fins constantly. Large with small: Adult angelfish eat neon tetras (prey size trigger). Fin nippers with long fins: Barbs, tetras destroy betta or fancy guppy tails.'
          },
          {
            subheading: 'Parameter Incompatibility',
            content: 'pH differences: African cichlids (pH 8.0 to 8.5) with Amazonian tetras (pH 6.0 to 7.0) both stressed. Temperature: Discus (28 to 30°C) with corydoras (22 to 26°C) suboptimal for both. Hardness: Soft water shrimp (GH below 6) with livebearers (GH above 10) causes molting or mineral deficiency issues.'
          },
          {
            subheading: 'Behavioral Conflicts',
            content: 'Solitary vs schooling: Single tetra hides constantly (needs 10+ group). Multiple males: Male bettas, gouramis, or dwarf cichlids fight to death. Nocturnal vs diurnal: Kuhli loaches emerge at night (fine with daytime schoolers).'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Research every species before purchase. Compatible parameters + size + temperament all required.'
        }
      },
      {
        heading: 'Mistake 4: Overfeeding',
        content: 'Excess food decays into ammonia, causing water quality crashes and algae blooms.',
        subsections: [
          {
            subheading: 'How Much to Feed',
            content: 'Rule: Only what fish consume in 2 to 3 minutes, once or twice daily. Observation: Food should not reach substrate (bottom feeders excepted). Fasting: Skip 1 day per week (prevents constipation, mimics nature).'
          },
          {
            subheading: 'Signs of Overfeeding',
            content: 'Cloudy white water: Bacterial bloom from excess organics. Algae explosion: Nitrates and phosphates fuel growth. Bloated fish: Constipation or swim bladder disorder. Ammonia spikes: Decaying food overwhelms bacteria. Film on surface: Protein buildup from uneaten pellets.'
          },
          {
            subheading: 'Proper Feeding Techniques',
            content: 'Variety: Alternate flakes, pellets, frozen, live foods (nutritional balance). Target feeding: Drop food near slow eaters (bettas, gouramis) before fast schoolers. Sinking foods: Ensure bottom dwellers receive share (corydoras, plecos). Remove uneaten: Net out excess after 5 minutes (prevents decay).'
          }
        ],
        callout: {
          type: 'important',
          text: 'Underfeeding is safer than overfeeding. Healthy fish can survive 7 to 10 days without food.'
        }
      },
      {
        heading: 'Mistake 5: Infrequent or Excessive Water Changes',
        content: 'Both extremes cause parameter swings and stress.',
        subsections: [
          {
            subheading: 'Too Few Water Changes',
            content: 'Nitrate accumulation: Above 40 ppm stunts growth, suppresses immunity. TDS creep: Total dissolved solids increase (old tank syndrome). pH crash: KH depletes, pH drops rapidly (lethal shock). Consequences: Chronic stress, disease outbreaks, sudden deaths after eventual large change.'
          },
          {
            subheading: 'Too Large or Sudden Changes',
            content: 'Replacing more than 50% at once shocks fish (parameter shift too rapid). Temperature mismatch: Adding cold water drops tank temperature 5°C (stress response). pH shock: Tap water pH differs from tank (must acclimate slowly). Old tank syndrome: Neglected tank then 75% change = massive parameter swing = deaths.'
          },
          {
            subheading: 'Optimal Water Change Schedule',
            content: 'Standard: 20 to 30% weekly for community tanks. Heavy stock: 30 to 40% weekly or 20% twice weekly. Planted low tech: 15 to 20% weekly (plants consume nitrates). Match temperature: Within 2°C of tank water. Dechlorinate: Treat new water with Prime or Stress Coat before adding.'
          }
        ]
      },
      {
        heading: 'Mistake 6: Adding Too Many Fish at Once',
        content: 'Even cycled tanks cannot handle sudden bioload increases.',
        subsections: [
          {
            subheading: 'Why Bacteria Need Time',
            content: 'Beneficial bacteria reproduce slowly (doubles every 24 hours at optimal conditions). Adding 10 fish at once triples ammonia production. Bacteria colony takes 7 to 10 days to catch up. Result: Mini cycle (ammonia and nitrite spike despite previous cycling).'
          },
          {
            subheading: 'Proper Stocking Timeline',
            content: 'Week 1 post cycle: 3 to 5 small fish (tetras, rasboras). Week 2: Monitor parameters (should remain 0 ppm ammonia/nitrite). Week 3: Add 3 to 5 more if parameters stable. Week 4: Repeat until desired stock reached. Larger fish: Add 1 to 2 at a time (angelfish, cichlids produce more waste).'
          },
          {
            subheading: 'Testing Between Additions',
            content: 'Test ammonia and nitrite 3 days after new additions. If any reading above 0 ppm: Stop stocking, daily 25% water changes until 0 ppm. Wait additional week before next group. Never add fish if parameters unstable.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Patience prevents crashes. Slower stocking gives bacteria time to expand safely.'
        }
      },
      {
        heading: 'Mistake 7: Ignoring Quarantine',
        content: 'New fish without quarantine introduce diseases that wipe out entire tanks.',
        subsections: [
          {
            subheading: 'Common Diseases from Stores',
            content: 'Ich (white spot): 7 to 10 day incubation, extremely contagious. Velvet: Kills within 48 hours if untreated. Internal parasites: Slow wasting over weeks. Bacterial infections: Fin rot, columnaris spread rapidly. One infected fish = entire display must be treated (expensive, stressful).'
          },
          {
            subheading: 'Minimum Quarantine Protocol',
            content: 'Separate tank: 10 to 20 gallons, bare bottom, sponge filter. Duration: Minimum 4 weeks, 6 weeks recommended. Observation: Daily checks for white spots, flashing, gasping. Preventative treatment: Medication trio (Ich X, Maracyn, ParaCleanse) Week 1.'
          }
        ]
      },
      {
        heading: 'Mistake 8: Inadequate Filtration',
        content: 'Undersized or poorly maintained filters cannot support bioload.',
        subsections: [
          {
            subheading: 'Filter Sizing',
            content: 'Minimum flow: 5x tank volume per hour (50 gallon tank = 250 GPH filter). Ideal flow: 8 to 10x volume per hour for heavy stock. Oversizing: Impossible to overfilter (adjust flow with valve if too strong). Multiple filters: Running two provides redundancy (one fails, other sustains bacteria).'
          },
          {
            subheading: 'Maintenance Failures',
            content: 'Clogged media: Reduces flow and oxygen, traps waste. Monthly cartridge replacement: Marketing scam, kills bacteria colony (rinse and reuse instead). Tap water cleaning: Chlorine kills beneficial bacteria (use old tank water only). No maintenance: 3 to 6 months without cleaning = flow reduced 50%, poor water quality.'
          }
        ]
      },
      {
        heading: 'Mistake 9: Impulse Buying Fish',
        content: 'Purchasing without research leads to incompatible or outgrowing species.',
        subsections: [
          {
            subheading: 'Research Before Purchase',
            content: 'Adult size: Pleco grows 18 inches (needs 100+ gallon tank). Lifespan: Goldfish lives 15 to 20 years (long commitment). Tank requirements: Clown loaches need groups of 5+ in 125 gallon minimum. Temperament: Red tail shark becomes aggressive at maturity.'
          },
          {
            subheading: 'Store Misinformation',
            content: 'Common size: Juvenile oscars sold in 10 gallon tank kits (need 75 gallons adult). Goldfish bowls: Marketed despite needing 40+ gallons each. Betta cups: Stores claim 1 gallon sufficient (5+ gallons minimum for health).'
          }
        ],
        callout: {
          type: 'important',
          text: 'Create stocking plan before visiting store. Write down research, resist impulse additions.'
        }
      },
      {
        heading: 'Mistake 10: Giving Up Too Soon',
        content: 'Initial challenges discourage beginners, but persistence leads to success.',
        subsections: [
          {
            subheading: 'Normal Initial Struggles',
            content: 'Algae blooms: Common in first 3 months (balance establishes naturally). Plant melting: Transition adaptation (regrows after 2 to 3 weeks). Minor parameter fluctuations: Stabilize after 6 months maturation. Occasional fish deaths: Learning curve (not personal failure).'
          },
          {
            subheading: 'Building Experience',
            content: 'Start simple: Hardy fish (zebra danios, cherry barbs), low tech plants. Join communities: Online forums, local clubs provide support. Learn gradually: Master basics before attempting advanced species or setups. Enjoy process: Aquariums are living art requiring patience and observation.'
          }
        ]
      }
    ],
    
    keyTakeaways: [
      'Never add fish before completing 4 to 6 week cycling (ammonia and nitrite 0 ppm)',
      'Research adult size, temperament, and parameters before buying any fish',
      'Stock gradually: 3 to 5 fish every 7 to 10 days, test between additions',
      'Feed only what consumed in 2 to 3 minutes, weekly 20 to 30% water changes',
      'Quarantine all new fish 4 weeks minimum, filtration 5 to 10x tank volume per hour'
    ],
    
    relatedTopics: ['cycling-guide', 'stocking-calculator', 'quarantine-protocol', 'fish-compatibility']
  },
  
  visuals: {
    headerImage: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=1200&auto=format&fit=crop',
    diagrams: [
      {
        id: 'mistake-checklist-diagram',
        title: 'Beginner Mistakes Prevention Checklist',
        imageUrl: '/images/knowledge/mistake-checklist-diagram.svg',
        caption: 'Visual checklist of top 10 mistakes to avoid when starting your first aquarium',
        credit: 'AquaGuide Educational Content'
      }
    ]
  },
  
  references: [
    {
      title: '10 Common Aquarium Stocking Mistakes',
      author: 'Aquarium Stocking Calculator',
      url: 'https://www.aquariumstockingcalculator.com/blog/aquarium-stocking-mistakes',
      type: 'article'
    },
    {
      title: 'Top 10 Beginner Aquarium Mistakes',
      author: 'Bulk Reef Supply',
      url: 'https://fresh.bulkreefsupply.com/content/post/top-10-beginner-aquarium-mistakes-and-how-to-avoid-them',
      type: 'article'
    },
    {
      title: 'Common Beginner Mistakes Starting an Aquarium',
      author: 'Reddit Aquariums',
      url: 'https://www.reddit.com/r/Aquariums/comments/ew7ouo/what_are_common_mistakes_for_beginners_starting/',
      type: 'forum'
    }
  ],
  
  lastUpdated: '2026-02-23'
};