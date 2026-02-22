import type { Species } from '../../types/species';

export const sailfinPleco: Species = {
  id: 'pleco-004',
  slug: 'sailfin-pleco',
  imageUrl: '/images/species/sailfin-pleco.jpg',
  funFact: "Sailfin Plecos are the aquarium hobby's biggest rehoming problem! Pet stores sell adorable 2-inch babies (€5-10) without warning that they grow into 18-20 inch (50cm) submarine-sized armored tanks that produce more waste than three Oscars combined. They're called 'sailfin' because their massive dorsal fin unfurls like a ship's sail when defending territory—it's magnificent but terrifying! In Florida, released Sailfins became invasive super-predators: they devour native fish eggs, destabilize riverbanks with burrows, and outcompete native species. Some Florida rivers are now 70% pleco biomass! The lesson: these are pond fish masquerading as aquarium fish. Only commit if you have 500L+ for life!",

  taxonomy: {
    scientificName: 'Pterygoplichthys gibbiceps',
    commonName: 'Sailfin Pleco',
    family: 'Loricariidae',
    origin: 'South America (Orinoco and Amazon River Basins - Brazil, Peru, Venezuela)',
    region: 'South America',
    biotope: 'Large rivers with strong current, sandy/rocky substrates, submerged driftwood forests, deep pools (2-6m). Water is warm (24-30°C), soft to moderate hardness, slightly acidic to neutral (pH 6.0-7.5). High oxygen content from rapids',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 50,
    color: 'Juveniles (2-6 inches): Beautiful golden-brown base with striking dark brown/black leopard spots and vermiculated patterns. Dorsal fin has dramatic spotted rays. Adults (12+ inches): Colors fade to muddy brown/gray with less distinct patterns—less attractive than juveniles. MASSIVE sail-like dorsal fin (hence "sailfin") that extends nearly full body length when erected—used for territory displays and intimidation. Armor plating covers entire body',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 500,
    tempC: { min: 23, max: 30, ideal: 26 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 4, max: 20 },
    kh: { min: 2, max: 15 },
    flow: 'strong',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.90,
    },
    
    spaceNeeds: {
      horizontalCM: 180,
      verticalCM: 60,
      territories: 1,
    },
    
    bioloadMultiplier: 3.5,
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'Sailfin Plecos are incompatible with planted aquariums—they\'re bulldozers that destroy everything! Adults (12+ inches) uproot plants while moving, crush delicate stems with their bulk, and eat soft vegetation. Only extremely hardy, robust plants survive: large Anubias bolted to heavy driftwood, thick-rooted Amazon Swords in deep substrate, massive Java Fern colonies. Forget carpets, stem plants, or any delicate species—they\'ll be demolished within days. Most Sailfin keepers abandon plants entirely and go hardscape-only (driftwood, large rocks, caves). Tank aesthetics take backseat to functionality when housing submarine-sized plecos.',
    hardscape: ['MASSIVE driftwood pieces (3-4 feet long—they need wood for digestion)', 'Large smooth boulders/river rocks (stable, won\'t tip)', 'Extra-large caves (12+ inches diameter—adults barely fit)', 'PVC pipes (6-8 inches diameter for hiding)', 'Heavy slate structures (must be stable—they knock things over)', 'Sandy substrate (they sift sand through gills)'],
  },

  behavior: {
    tags: ['semi-aggressive', 'nocturnal', 'territorial', 'algae_eater', 'bottom_dweller'],
    minGroupSize: 1,
    description: 'Sailfin Plecos are gentle giants as juveniles (<8 inches) but become increasingly territorial, destructive, and aggressive as adults (12+ inches). They\'re nocturnal bulldozers: during night, they patrol entire tank bottom like armored submarines, uprooting plants, knocking over decorations, and intimidating tankmates with sheer size. When threatened or territorial, they erect their MASSIVE dorsal fin ("sailfin") like a ship\'s sail and spread pectoral fins—it\'s dramatic and intimidating! Adults become aggressive toward other bottom-dwellers (plecos, catfish, loaches) and may chase/injure them with spiny fins. They\'re not aggressive toward mid/upper-level fish but can accidentally injure smaller fish by crushing them against glass/decorations during nighttime rampages. Hearing loud scraping/rasping at night? That\'s your 18-inch pleco demolishing your hardscape! They produce OBSCENE amounts of waste—more poop than three Oscars combined. Bioload is tank-crushing.',
    
    compatibility: {
      goodMates: ['Large robust cichlids (Oscars, Jack Dempseys, Severums)', 'Large catfish (Pictus, Synodontis)', 'Large barbs/tinfoil barbs', 'Large gouramis (Giant Gourami)', 'Silver Dollars', 'Bichirs', 'Arowanas (pond setups)'],
      badMates: ['Small fish (crushed/eaten)', 'Other plecos (fights)', 'Bottom-dwellers (territorial aggression)', 'Delicate/slow fish (injured by thrashing)', 'Peaceful community fish', 'Corydoras (crushed)', 'Invertebrates (crushed/eaten)'],
      notes: 'Sailfin Plecos are only compatible with LARGE, ROBUST, FAST-MOVING FISH in MASSIVE tanks (500L+). They\'re NOT community fish despite being sold as such! Juveniles (2-6 inches) coexist peacefully but adults (12+ inches) become territorial bulldozers. They fight viciously with other large plecos—locked jaws, injuries, death. Safe tankmates: Large aggressive cichlids that defend themselves (Oscars, Jack Dempseys), large fast-swimming fish that avoid bottom (Tinfoil Barbs, Silver Dollars). Avoid all small/medium peaceful fish—they\'ll be terrorized or accidentally crushed. Sailfins are best kept ALONE or in single-species pond setups.',
      
      rules: [
        {
          type: 'requires',
          condition: '500L+ tank minimum (adults)',
          reason: 'CRITICAL: Sailfin Plecos grow 18-20 inches (50cm) and produce MASSIVE bioload. Pet stores sell 2-inch babies in 80L tanks—this is cruel and unsustainable. Adults need minimum 500L (180cm length). Realistically, 800-1000L+ or outdoor ponds are ideal. This is a commitment for 20+ years!',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'small/medium peaceful fish',
          reason: 'Adults crush, injure, or stress smaller fish through sheer size and nighttime rampages. They knock fish into glass, pin them under driftwood, or accidentally swallow tiny fish. Only large robust species survive',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'other large plecos',
          reason: 'Sailfins fight brutally with other large plecos (Common Plecos, other Sailfins, large Ancistrus). Locked jaws, injuries, death. Keep only ONE large pleco per tank unless pond-sized (2000L+)',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'driftwood mandatory',
          reason: 'Like all plecos, Sailfins MUST rasp wood for fiber/digestion. Without driftwood, digestive failure and death occur. Provide MASSIVE pieces (3-4 feet long) proportional to their size',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'planted tanks',
          reason: 'Sailfins destroy planted aquariums. They uproot, crush, and eat plants. Only massive hardy species bolted down survive. Most keepers abandon plants entirely',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'industrial filtration',
          reason: 'Sailfins produce more waste than ANY other aquarium fish relative to size—more than Oscars, Goldfish, or any cichlid. They require oversized canister filters (2x tank volume turnover), weekly 50% water changes, daily vacuuming. Filtration costs are enormous',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0-5,
        midwater: '5-10',
        bottom: '1',
      },
    },
    
    aggressionLevel: {
      intraspecific: 9,
      interspecific: 6,
      territorial: 9,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['night'],
      nocturnal: true,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'low',
      targets: [],
    },
  },

  care: {
    difficulty: 'expert',
    diet: 'herbivore',
    effort: 'very-high',
    cost: 'very-high',
    specialRequirements: [
      'MINIMUM 500L tank (800-1000L+ realistic for adult)', 
      'MASSIVE driftwood (3-4 feet long)', 
      'Industrial-grade filtration (2x turnover, oversized canisters)',
      'Weekly 50% water changes (bioload is crushing)',
      'Plan for 20+ year commitment (they outlive dogs!)',
      'Emergency rehoming plan (they outgrow tanks)',
    ],

    proTips: [
      "DO NOT BUY UNLESS YOU HAVE 500L+ TANK OR POND! Pet stores sell adorable 2-inch babies (€5-10) without warning they become 18-20 inch bioload monsters. 90% of Sailfin buyers surrender them within 2 years when they outgrow tanks. This is the aquarium hobby's #1 rehoming crisis! Ask yourself: Can I house a 50cm fish producing more waste than three Oscars for 20+ years? If no = don't buy!",
      "Growth rate is FAST! Juveniles grow 2-3 inches per YEAR in first 4-5 years. A 3-inch baby becomes 12+ inches within 3 years. By year 5-6, they reach 16-18 inches. Maximum size (20 inches) by 8-10 years. Plan tank upgrades or pond transfer BEFORE buying.",
      "Bioload is CRUSHING. Sailfins produce more poop per pound than any aquarium fish—more than Goldfish, Oscars, or large cichlids. You'll see constant clouds of fine 'sawdust' waste. Requires: Oversized canister filters (2-3x tank volume turnover), weekly 50% water changes (not 30%!), daily substrate vacuuming. Filtration costs = €300+ annually.",
      "Sailfin vs Common vs Bristlenose: Sailfin = 18-20 inches (50cm), Common Pleco = 18-24 inches, Bristlenose = 5 inches (13cm). Stores sell all three as 'plecos' interchangeably. ALWAYS verify scientific name: Pterygoplichthys gibbiceps = Sailfin (huge), Hypostomus plecostomus = Common (huge), Ancistrus = Bristlenose (small, manageable). Buying wrong species = disaster!",
      "Vegetable feeding is MANDATORY. Algae alone cannot sustain 18-inch fish. Feed daily: blanched zucchini, cucumber, spinach, romaine lettuce, green beans, peas, sweet potato, kale. Adults eat entire zucchini slices in 24 hours. Food costs = €30-50/month.",
      "Pond transfer at 12+ inches. Most homes cannot sustain 16+ inch plecos in aquariums. Outdoor ponds (2000L+) are ideal for adults—they thrive in warm climates (California, Texas, Florida, Mediterranean Europe). Winter heating required in cold climates. Many hobbyists donate to public aquariums or specialized pleco rescues.",
      "They're invasive in Florida! Released Sailfins destroyed Florida's ecosystems—they outcompete natives, eat fish eggs, destabilize riverbanks. NEVER release into wild. It's illegal, ecologically catastrophic, and cruel to fish (winter kills them in cold climates).",
    ],

    commonMistakes: [
      "Impulse buying babies. The #1 mistake! Cute 2-inch babies (€5-10) become 18-inch monsters within 3-5 years. Result: overcrowded tanks, chronic stress, surrender to rescues/euthanasia. Only buy if you have 500L+ tank OR concrete plan for pond transfer. This is NOT a beginner fish despite being sold as such!",
      "Underestimating bioload. 'I have 200L with good filter—should be fine!' NO. Adults produce more waste than three Oscars combined. 200L tanks crash within months (ammonia spikes, nitrate poisoning, constant algae blooms). Minimum 500L with industrial filtration or don't buy.",
      "Keeping in planted tanks. Sailfins destroy planted aquariums—they uproot, crush, and bulldoze everything. €500 planted setups ruined in days. Hardscape-only tanks or sacrifice plants.",
      "Multiple large plecos. 'I have Sailfin and Common Pleco together!' They fight brutally—locked jaws, torn fins, injuries, death. Keep ONE large pleco per tank unless pond-sized (2000L+).",
      "Insufficient driftwood. Despite size, they MUST rasp wood for digestion. Adults need MASSIVE driftwood pieces (3-4 feet long). Standard aquarium driftwood (12 inches) is insufficient. No wood = digestive failure and death.",
      "Releasing into wild. 'I'll release into lake/river!' This is ILLEGAL, ecologically catastrophic, and cruel. Sailfins became invasive in Florida, destroying ecosystems. They die in winter in cold climates. Surrender to rescues, donate to public aquariums, or euthanize humanely (clove oil). NEVER release!",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['vegetables', 'algae-wafers'],
      supplements: ['blanched-zucchini', 'spirulina', 'pellets'],
      vegetarian: true,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 50,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'MASSIVE maintenance required! Weekly 50% water changes mandatory (not 30%—bioload is too high). Daily substrate vacuuming to remove poop clouds. Oversized canister filters (2-3x tank volume turnover) cleaned biweekly. Nitrates must stay below 20ppm (difficult with this bioload). Budget 5-10 hours weekly for maintenance. This is NOT a low-maintenance fish!',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 300,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'very-strong',
      },
      airstone: true,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 20,
    commonDiseases: ['ich', 'bloat', 'digestive-issues-no-wood', 'skin-infections', 'nitrate-poisoning'],
    sensitivities: ['Copper in medications (plecos extremely sensitive)', 'High nitrates (>20ppm)', 'Lack of fiber/wood (digestive failure)', 'Poor oxygenation (large fish need high O2)', 'Ammonia/nitrite spikes (bioload causes crashes)'],
  },

  scientificContext: {
    wildHabitat: "Sailfin Plecos inhabit large, fast-flowing rivers of the Orinoco and Amazon Basins (Brazil, Peru, Venezuela). Wild habitat: massive rivers (100-500m wide), strong current, deep pools (2-6m), sandy/rocky bottoms, submerged driftwood forests. Water: warm (24-30°C year-round), soft to moderate hardness (GH 4-12), slightly acidic to neutral (pH 6.0-7.5). Adults inhabit deeper pools and migrate upstream during breeding season. They're built for powerful currents—hence need for strong flow in aquariums.",
    sexualDimorphism: "Extremely difficult to sex until fully mature (12+ inches, 5+ years). Males: Develop genital papilla (small fleshy projection behind anus) and slightly broader head. More aggressive/territorial behavior. Females: Rounder body when gravid, less territorial. Juveniles (<12 inches) nearly impossible to sex visually. Commercial breeders use vent examination (requires expert handling). Most hobbyists never successfully sex Sailfins due to massive size required for maturity.",
    variants: ['Wild-type Sailfin (leopard pattern)', 'Gold/Albino Sailfin (rare, expensive)', 'Leopard Sailfin (enhanced pattern)', 'Orinoco Sailfin (color variant)'],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'nearly-impossible',
    trigger: 'Sailfin Pleco breeding in home aquariums is NEARLY IMPOSSIBLE and virtually never attempted by hobbyists. Requirements are absurd: 1) Minimum 2000L+ tank or pond (adults need space), 2) Mature breeding pair (12+ inches, 5+ years old, extremely difficult to sex), 3) MASSIVE caves (12+ inches diameter, 3+ feet long), 4) Perfect water parameters (pH 6.5-7.0, GH 5-10, temp 26-28°C), 5) Simulated seasonal flooding (large water changes with cooler water). Males excavate massive burrows in riverbanks in wild—impossible to replicate in aquariums. Commercial breeding occurs in outdoor ponds in tropical climates (Asia, South America).',
    fryCare: 'In the extremely rare event of successful spawning: Females lay 500-5000 eggs in cave/burrow. Male guards eggs for 7-14 days, fanning constantly. Eggs hatch into 1-2cm fry that emerge looking like tiny armored submarines. Fry rasp biofilm, algae, and wood immediately. Feed crushed algae wafers, spirulina, blanched vegetables. Fry grow slowly: 5cm at 6 months, 10cm at 1 year. Males are aggressive toward fry—remove or provide massive space. Raising hundreds of fry requires industrial-scale facilities—not feasible for hobbyists.',
    notes: 'Sailfin breeding is left to commercial farms with massive outdoor pond systems. Hobbyists should never attempt this—it requires facilities comparable to fish farming operations. All Sailfins in trade are commercially bred in Asia (Thailand, Indonesia) or South America. Wild-caught specimens are rare and expensive. If you see spawning behavior (cave excavation, aggression), separate fish immediately—you cannot raise fry in home aquarium.',
  },
  
  experienceData: {
    successRate: 0.15,
    survivalRate: 0.45,
    
    commonFailures: [
      { issue: 'outgrew-tank-surrendered', cause: 'impulse-buy-undersized-tank', frequency: 0.50 },
      { issue: 'nitrate-poisoning-bioload-crash', cause: 'insufficient-filtration-water-changes', frequency: 0.20 },
      { issue: 'fighting-injuries-death', cause: 'kept-with-other-large-plecos', frequency: 0.12 },
      { issue: 'digestive-failure', cause: 'insufficient-driftwood-or-vegetables', frequency: 0.10 },
      { issue: 'chronic-stress-stunting', cause: 'tank-too-small-poor-conditions', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 800, max: 2500, currency: 'EUR' },
      monthly: { min: 50, max: 150, currency: 'EUR' },
    },
  },
};
