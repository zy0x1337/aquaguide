import type { Species } from '../../types/species';

export const tetraodonMbu: Species = {
  id: 'tetraodon-mbu',
  slug: 'tetraodon-mbu',
  imageUrl: '/images/species/tetraodon-mbu.jpg',
  funFact: "The Giant Pufferfish (Tetraodon mbu) is the world's largest freshwater pufferfish, reaching a MASSIVE 67cm (26 inches)! They're aquarium geniuses with dog-like personalities: recognizing individual owners within days, begging for food by spitting water, playing with toys, and even allowing gentle petting through the glass! Watch them hunt with surgical precision: stalking prey with sideways crab walk, inflating to 2-3x size when threatened (rarely in aquariums), and cracking snail shells with beak-like teeth that never stop growing (need constant trimming!). Here's the catch: they're MONSTER-sized fish requiring 1500L minimum (for life!), are aggressive predators eating anything that moves, and cost €1000-3000+ just for setup! Their teeth grow continuously and need live snails weekly or dental overgrowth causes starvation. Personality-packed gentle giants if you can handle the extreme commitment. From Congo River!",

  imageCredit: {
    photographer: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tetraodon_mbu_1.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  
  taxonomy: {
    scientificName: 'Tetraodon mbu',
    commonName: 'Giant Pufferfish / Mbu Puffer / Giant Freshwater Puffer',
    family: 'Tetraodontidae',
    origin: 'Central Africa (Congo River Basin, Tanganyika Basin - DRC, Zambia, Tanzania)',
    region: 'Africa',
    biotope: 'Large rivers and lakes with rocky/sandy substrates, moderate to strong current, clear well-oxygenated water, plenty of hiding spots among rocks',
  },

  visuals: {
    iconShape: 'globiform',
    adultSizeCM: 67,
    color: 'Stunning golden-yellow to bright olive-green base with intricate chocolate-brown to black maze-like patterns (worm-like squiggles) covering entire body! Belly pale cream to white. Pattern unique to each individual (like fingerprints). Large expressive eyes with ability to move independently. Thick bulbous body shape. Four fused teeth forming powerful beak (visible when mouth open constantly growing!). Can inflate to 2-3x normal size when threatened (puffing with water/air). Juveniles (under 10cm) have simpler patterns, develop complex maze markings as they mature. Adults incredibly thick-bodied and powerful.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 1500,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 7.0, max: 8.0, ideal: 7.5 },
    gh: { min: 10, max: 25 },
    kh: { min: 5, max: 15 },
    flow: 'moderate',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 250,
      verticalCM: 80,
      territories: 1,
    },
    
    bioloadMultiplier: 30.0,
  },

  habitat: {
    planting: 'none',
    plantingNotes:
      'Mbu puffers are completely incompatible with live plants! They destroy ALL plants within hours: uprooting, shredding, eating, or bulldozing them. Best approach: 1) No plants at all (most common), 2) Artificial silk plants secured with heavy weights (decorative only they may still attack), 3) Plastic plants tied to large rocks (harder to destroy). Focus on open swimming space Mbus need room to patrol. They prefer bare or minimally decorated tanks with hiding caves.',
    hardscape: ['Massive rock caves (30cm+ openings hiding spots)', 'Large smooth river rocks (football-size+ natural environment)', 'Driftwood branches (60cm+ secured territorial markers)', 'PVC pipe caves (20cm+ diameter backup hides)', 'Slate overhangs (creates shaded areas)'],
  },

  behavior: {
    tags: ['intelligent', 'predator', 'territorial'],
    minGroupSize: 1,
    description:
      'Mbu puffers are legendary aquarium personalities combining dog-level intelligence with prehistoric predatory instincts! They recognize individual owners within 1-2 weeks: swimming excitedly to glass when favorite person approaches (ignoring others!), begging for food by spitting water streams at owner, following fingers along glass. Watch their hunting behavior: stalking prey with slow sideways crab walk, freezing motionless before explosive strike, using powerful beak to crack snail shells or crush fish. They are incredibly curious investigating everything: new decorations, hands in tank (gentle but watch the beak!), floating objects. Many tolerate gentle petting through glass! They display moods: excitement (bright colors, swimming patterns), stress (darkened colors, hiding), hunger (aggressive begging, spitting water). Their teeth grow continuously (2-3mm/month) requiring weekly live snails for grinding or manual trimming by vet. CRITICAL: Despite gentle demeanor toward owners, they are aggressive predators and all tankmates equal food or victims!',
    
    compatibility: {
      goodMates: ['NONE Must be kept alone! All tankmates eventually killed or eaten'],
      badMates: ['ALL FISH (eaten or killed)', 'ALL INVERTEBRATES (eaten)', 'Other pufferfish (territorial fights)', 'Plecos (eyes eaten!)', 'Large cichlids (killed)', 'Any living creature'],
      notes:
        'Mbu puffers are OBLIGATE SOLITARY fish and must be kept alone in species-only tanks! They are apex predators: ALL tankmates (fish, shrimp, snails, even large plecos) are either eaten or killed through aggression. Even compatible large fish are eventually attacked. Mbus are intelligent hunters with powerful beaks and they bite fins off sleeping fish at night, eat eyes of plecos, crack shells of large snails. Attempting tankmates results in: 1) Small fish eaten immediately, 2) Medium fish harassed to death (torn fins, stress), 3) Large fish killed over weeks (beak attacks). CRITICAL: Many keepers attempt plecos thinking too armored to eat but Mbus eat their eyes causing slow death! Only living tankmates allowed: feeder snails (Ramshorn, Pond snails for dental maintenance). Safest approach: solo tank with human interaction as enrichment.',
      
      rules: [
        {
          type: 'requires',
          condition: '1500L minimum for single adult Mbu',
          reason: 'CRITICAL: Mbu puffers grow to MASSIVE 67cm and produce extreme bioload (30.0x)! Smaller tanks cause: 1) Stunted growth leading to organ failure, 2) Constant ammonia spikes, 3) Extreme aggression, 4) Premature death. 1500L (250x80x75cm) is absolute minimum with 2000L+ recommended. Most Mbus die in undersized tanks',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'weekly live snails for dental health',
          reason: 'Mbu teeth grow continuously (2-3mm/month) throughout life! Without weekly hard-shelled snails (Ramshorn, Apple, Mystery), teeth overgrow within 2-3 months causing: inability to eat leading to starvation death. Need 10-20 large snails weekly for grinding. Mandatory for survival',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'all tankmates (fish, inverts, other puffers)',
          reason: 'Mbu puffers are apex predators with powerful beaks! ALL tankmates are killed or eaten with no exceptions. They are territorial and aggressive: bite fins, crack shells, eat eyes of plecos. Even large fish (30cm+) are eventually killed. Attempting tankmates causes suffering and death',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'copper medications and formalin',
          reason: 'Pufferfish are extremely sensitive to copper and formalin and even therapeutic doses are lethal! Use only puffer-safe medications (Praziquantel, API General Cure). Most ich treatments kill puffers. Research medication safety before use',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '0',
        bottom: '0',
      },
    },
    
    aggressionLevel: {
      intraspecific: 10,
      interspecific: 10,
      territorial: 9,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'high',
      targets: ['all tankmates predatory behavior, not fin nipping'],
    },
  },

  care: {
    difficulty: 'expert',
    diet: 'carnivore',
    effort: 'high',
    cost: 'high',
    specialRequirements: [
      '1500L minimum tank (single adult) with 2000L+ recommended', 
      'Massive filtration 6-8x turnover per hour (dual canister plus sump mandatory)', 
       'Weekly 50-60% water changes (extreme bioload!)', 
      'Weekly live snails (10-20 large for dental maintenance)', 
      'Backup power system (battery air pump plus filter)', 
      'Heavy-duty lid with locks (curious and strong!)', 
      'Fine sand substrate (prevents belly injuries)', 
      'Veterinarian experienced with pufferfish (dental trimming)',
    ],

    proTips: [
      "Dental health is LIFE OR DEATH! Mbu teeth grow 2-3mm per month continuously. Without weekly hard-shelled live snails (Ramshorn, Apple, Mystery with 10-20 large), teeth overgrow within 2-3 months causing inability to eat leading to starvation. Setup snail breeding colony (20L tub, feed vegetables, harvest weekly). Supplement with clams in shell and mussels in shell. Monitor teeth monthly and if overgrown (longer than 5mm), find puffer-experienced vet for trimming (general anesthesia required!). This is non-negotiable!",
      "Massive filtration is mandatory! Mbus produce EXTREME bioload (30.0x) which is equivalent waste of 30 Oscar fish! Without powerful filtration (6-8x turnover), ammonia reaches 1.0ppm+ within days. Setup: 1) Two large canister filters (each rated 1000L+), 2) Sump system (adds 200L+ water volume plus massive bio-media), 3) Backup sponge filter. Test water 3x weekly with ammonia and nitrite at 0ppm and nitrates under 40ppm!",
      "Tank size cannot be compromised! Juveniles (10-15cm) seem manageable in 600L but grow FAST: 10cm per year for first 3-4 years, 67cm by year 6-7! Budget: Start 1500L+ tank from day one OR commit to upgrading. Most Mbu failures equal buying juvenile planning small tank now and upgrade later but never upgrade. They become stunted, aggressive, die prematurely. If you cannot afford 1500L+ setup (€2000-4000), do not get a Mbu!",
      "Bond through enrichment! Mbus are incredibly intelligent. Provide: 1) Daily hand-feeding sessions (30cm+ tongs never bare hands!), 2) Ping-pong balls to push around, 3) Mirror outside tank (they investigate reflection), 4) Rearrangeable decorations (they explore changes), 5) Varied feeding routines (hide food in shells, freeze food in ice cubes). They learn routines within weeks!",
      "Diet variety prevents deficiencies! Staple: Live snails (weekly dental maintenance) plus quality frozen foods. Variety: Frozen prawns and shrimp (shell-on for dental), frozen whole fish (silversides, lance fish), frozen squid, live or frozen crayfish, clams and mussels in shell, frozen krill. Avoid: Mammalian meat (beef, chicken cannot digest), processed foods, dried foods only. Feed 5-6 days weekly, fast 1 day.",
      "Water quality is critical! Mbus are sensitive to ammonia and nitrite despite being tough predators. Weekly 50-60% water changes mandatory (bioload!), vacuum substrate thoroughly (messy eaters scatter food), test parameters 3x weekly. Target: ammonia 0ppm, nitrite 0ppm, nitrate under 40ppm, pH 7.5. Use quality dechlorinator (Seachem Prime) as tap water chloramines are toxic.",
      "Backup systems save lives! Power outage equals death within hours for 67cm fish! Keep: battery-powered air pump (runs 24+ hours), backup canister filter, water test kit, medications (Praziquantel, methylene blue). Test backup systems quarterly. Mbus worth €500+ as adults so protect your investment!",
    ],

    commonMistakes: [
      "Undersized tanks (under 1500L). BIGGEST KILLER! 80% of Mbu failures stem from tank size. Juveniles seem fine in 600-800L but grow to 67cm! Undersized tanks cause: 1) Stunted growth leading to liver and kidney failure by year 4, 2) Extreme aggression, 3) Chronic stress leading to disease, 4) Premature death. Average lifespan in 800L tank: 4-6 years. Average in 2000L+ tank: 15-20 years. Tank size equals survival!",
      "No snails for dental maintenance. Teeth overgrow 2-3mm per month! Without weekly hard-shelled live snails, teeth grow beyond 5mm+ preventing eating leading to starvation death within 3-4 months. 40% of Mbu deaths are from dental neglect. Setup breeding snail colony (easy: 20L tub plus vegetables). Non-negotiable requirement!",
      "Attempting tankmates. 100% of tankmate attempts fail eventually! Even success stories end in death: plecos have eyes eaten, large cichlids killed at night, other puffers fight to death. Mbus are apex predators and their beak crushes bones. Many keepers regret trying after watching beloved tankmates killed. Solo only!",
      "Weak filtration. Mbu bioload (30.0x) is EXTREME! Single canister filter causes constant ammonia and nitrite spikes (tested: 1.0+ ppm daily!). Without dual canisters plus sump, water quality collapses within 3-4 days between changes. 30% of Mbus die from chronic ammonia poisoning in first 2 years. Invest in filtration!",
      "Using copper medications. Pufferfish are hypersensitive to copper and therapeutic ich doses (0.15-0.20 ppm) kill them within hours! Many Mbus die from well-intentioned ich treatment. Use only puffer-safe medications: Praziquantel (parasites), methylene blue (fungus), salt baths (ich research protocol!). Never use standard fish medications!",
      "No backup power. Mbus are 67cm fish with extreme oxygen needs! Power outage stops filters (no surface agitation) leading to suffocation within 2-4 hours. Many die during storms and blackouts. Battery air pump (€30-50) saves €500+ fish. Test quarterly as batteries expire!",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['live-snails-weekly', 'frozen-whole-fish'],
      supplements: ['frozen-squid', 'frozen-krill'],
      vegetarian: false,
      liveFood: {
        required: true,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 50,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'CRITICAL: Weekly 50-60% water changes mandatory! Mbu bioload (30.0x) produces EXTREME ammonia. Without massive water changes, nitrates climb to 100ppm+ causing organ damage. Vacuum substrate aggressively (scattered food plus snail shells!). Test parameters 3x weekly: ammonia 0ppm, nitrite 0ppm, nitrate under 40ppm. Clean dual canister filters alternately (one per fortnight). Monthly deep-clean: scrub decorations, inspect equipment, test backup systems. This is high-maintenance species!',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 500,
      },
      filter: {
        required: true,
        type: 'canister-plus-sump',
        flowRate: 'strong',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 20,
    commonDiseases: ['dental-overgrowth', 'ich', 'internal-parasites', 'fatty-liver-disease', 'gill-flukes'],
    sensitivities: ['Copper medications (LETHAL!)', 'Formalin (LETHAL!)', 'Ammonia over 0.25ppm', 'Nitrate over 40ppm', 'Chlorine and chloramines', 'Sudden pH swings', 'Lack of live snails (dental)'],
  },

  scientificContext: {
    wildHabitat:
      'Tetraodon mbu inhabits large rivers and lakes of Congo River Basin and Lake Tanganyika region (DRC, Zambia, Tanzania). Wild habitat: Deep river channels (3-10 meters) with moderate to strong current, rocky or sandy substrates with scattered boulders, clear well-oxygenated water (pH 7.5-8.2, GH 10-20, temp 24-28°C), plenty of hiding spots among rocks. They are ambush predators hunting: snails (primary diet crush shells with beak!), crustaceans (crayfish, crabs), whole fish, mollusks, insects. Use crab walk hunting technique: slow sideways approach, freeze motionless, explosive strike. Display incredible intelligence: learning territorial boundaries, recognizing fishing boats (associate with food scraps!), investigating novel objects. Can inflate to 2-3x size when threatened (puffing with water) and uses elastic stomach as balloon! Wild specimens reach 67-75cm.',
    sexualDimorphism:
      'Nearly impossible to sex visually (extremely subtle differences). Males: Possibly slightly larger overall size, marginally thicker body. Females: Possibly slightly rounder body when mature, may show minor color pattern differences (unconfirmed). NO reliable external characteristics! Best method: Venting (examining genital papilla requires expert experience) or ultrasound imaging (detects eggs in mature females requires veterinary equipment). Most keepers never determine sex. Juveniles completely impossible to sex. Breeding so rare in captivity that sexual characteristics remain poorly documented.',
    variants: ['Wild type only (no captive-bred color morphs)', 'Regional variants show minor pattern differences (Congo vs Tanganyika populations)'],
  },

  breeding: {
    method: 'unknown',
    difficulty: 'impossible',
    trigger:
      'Tetraodon mbu breeding is virtually UNKNOWN in home aquariums! Only handful of suspected spawnings recorded (none fully documented). Wild breeding habitat: deep river channels during rainy season. Theoretical triggers: 1) MASSIVE tank (3000L+ minimum for pair unproven!), 2) Perfectly stable water conditions for months, 3) Heavy feeding with varied live foods, 4) Simulated rainy season (increased water changes, temperature fluctuations). CRITICAL: No confirmed breeding protocol exists. Attempting breeding is expert-level experimental project.',
    fryCare:
      'Unknown in captivity! No documented fry rearing success. Theoretical based on related species: Eggs likely laid on hard surfaces (rocks), parents possibly guard eggs (unconfirmed), fry would need live foods (Artemia nauplii), growth likely slow (2-3cm per year). Without confirmed breeding, fry care protocols are pure speculation. ALL captive Mbus are wild-caught imports.',
    notes:
      'Mbu puffer breeding is essentially IMPOSSIBLE in home aquariums. Reasons: 1) Requires 3000L+ tank for pair (cost-prohibitive), 2) Extreme aggression between individuals (pair formation unlikely), 3) Unknown spawning triggers, 4) No documented success stories. All captive Mbus (100%) are wild-caught from Congo and Tanganyika. Attempting breeding: expert-level project, likely to fail, requires massive resources. Focus instead on providing excellent care for single specimen!',
  },
  
  experienceData: {
    successRate: 0.20,
    survivalRate: 0.25,
    
    commonFailures: [
      { issue: 'dental-overgrowth-starvation', cause: 'no-live-snails-teeth-grew-preventing-eating', frequency: 0.40 },
      { issue: 'stunted-growth-organ-failure', cause: 'tank-too-small-under-1500L', frequency: 0.30 },
      { issue: 'chronic-ammonia-poisoning', cause: 'inadequate-filtration-bioload-too-high', frequency: 0.15 },
      { issue: 'copper-medication-death', cause: 'used-standard-ich-treatment-with-copper', frequency: 0.10 },
      { issue: 'suffocation-power-outage', cause: 'no-backup-oxygen-system', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 2000, max: 5000, currency: 'EUR' },
      monthly: { min: 60, max: 150, currency: 'EUR' },
    },
  },
};
