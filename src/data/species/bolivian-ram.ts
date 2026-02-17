import type { Species } from '../../types/species';

export const bolivianRam: Species = {
  id: 'cichlid-015',
  slug: 'bolivian-ram',
  imageUrl: '/images/species/bolivian-ram.jpg',
  funFact: "Bolivian Rams are the GENTLE GIANTS of the dwarf cichlid world—peaceful, hardy, and FORGIVING compared to their high-maintenance cousin, the German Blue Ram. Watch them work: they're 'eartheaters' that spend ALL DAY taking mouthfuls of sand, sifting it through their gills like underwater gold miners, and spitting out the clean sand in little clouds. It looks like they're chewing constantly but never eating—they ARE eating! Tiny food particles are extracted during every sand-sift. They're the aquarium's SLOW FOOD movement—calm, methodical grazers who take their time with every meal. Perfect for peaceful community tanks!",

  taxonomy: {
    scientificName: 'Mikrogeophagus altispinosus',
    commonName: 'Bolivian Ram',
    family: 'Cichlidae',
    origin: 'South America (Bolivia, Brazil - Amazon River Basin headwaters)',
    region: 'South America',
    biotope: 'Shallow, slow-moving streams and rivers with sandy substrates, moderate vegetation, and rocky areas. Water is clear to slightly tannin-stained, neutral pH, moderate hardness',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 8,
    color: 'Stunning peachy-orange body with silvery-blue iridescent scales creating a shimmering effect. Black vertical stripe through eye, black spot on flanks, red-orange highlights on fins. Males develop extended dorsal and anal fin rays (long filaments) and more intense coloration. Less colorful than German Blue Ram but more elegant and subtle',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 23, max: 28, ideal: 25 },
    ph: { min: 6.5, max: 7.8, ideal: 7.0 },
    gh: { min: 6, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.85,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 1,
    },
    
    bioloadMultiplier: 0.8,
  },

  habitat: {
    planting: 'moderate',
    plantingNotes: 'Bolivian Rams appreciate planted tanks but don\'t need jungle density. Plant moderately with hardy species (Anubias, Amazon Swords, Cryptocoryne, Vallisneria) that can handle occasional sand disturbance from their digging. They\'re NOT plant destroyers but will uproot delicate carpets during sand-sifting. Leave LARGE OPEN SANDY AREAS (50%+ of substrate) for foraging behavior—this is CRITICAL for their natural behavior. They spend hours sifting through sand, and without adequate space they become stressed. Smooth river stones create territories and spawning sites. Driftwood adds tannins and visual barriers.',
    hardscape: ['Smooth flat stones (spawning sites - CRITICAL)', 'Driftwood (territories + tannins)', 'Caves (rarely used but appreciated)', 'River stones scattered on sand'],
  },

  behavior: {
    tags: ['peaceful', 'pair_bonding', 'substrate_sifter', 'cichlid', 'slow_eater'],
    minGroupSize: 2,
    description: 'Bolivian Rams are REMARKABLY peaceful for cichlids—they\'re the diplomats of the dwarf cichlid family. Unlike aggressive cichlids, Bolivians are SHY, GENTLE, and CO-OPERATIVE. They spend their days methodically sifting through sand like underwater archaeologists, taking mouthfuls, filtering it through gills, and spitting out clean sand in beautiful clouds. This "eartheater" behavior is MESMERIZING to watch and happens ALL DAY LONG. They\'re SLOW, DELIBERATE feeders—no frantic rushing or food aggression. They pick at food carefully, chew thoughtfully, and often spit it out multiple times before swallowing tiny particles. This makes them VULNERABLE to fast competitive feeders. Bolivians form STRONG pair bonds with elaborate courtship: side-by-side swimming, fin displays, and synchronized movements. Pairs stay together for life and cooperate during breeding. They\'re gregarious and appreciate company of their own kind (4-6 fish create natural groupings without aggression). Non-breeding Bolivians are PEACEFUL toward all tankmates, only showing mild territoriality during spawning.',
    
    compatibility: {
      goodMates: ['Peaceful Tetras (Cardinal, Rummynose, Ember)', 'Peaceful Corydoras', 'Kuhli Loaches', 'Otocinclus', 'Peaceful Plecos', 'Hatchetfish', 'Peaceful Rasboras', 'Snails'],
      badMates: ['Fast aggressive feeders (Danios, Barbs)', 'Aggressive Cichlids', 'Fin-nippers (Tiger Barbs)', 'Very active schools that stress them', 'Large predatory fish'],
      notes: 'Bolivian Rams are IDEAL community cichlids—peaceful, non-aggressive, and compatible with most calm tankmates. HOWEVER: They are SLOW FEEDERS and get OUTCOMPETED by fast fish (Danios, Barbs, active Tetras). In tanks with hyper-active schools, Bolivians slowly STARVE because they can\'t compete for food. Pair them with CALM, PEACEFUL species only (Cardinal Tetras, Corydoras, Otocinclus). Target feeding (dropping food directly near them with turkey baster) helps. Breeding pairs claim small territories (30cm radius) around spawning sites but use threat displays, not violence. They\'re safe with other peaceful bottom-dwellers like Corydoras.',
      
      rules: [
        {
          type: 'warning',
          target: 'fast aggressive feeders (Danios, Barbs, Rainbow Sharks)',
          reason: 'Bolivian Rams are SLOW methodical feeders. Fast fish (Danios, Barbs) mob food and eat everything before Bolivians even arrive. Result: slow starvation over weeks/months. Keep with CALM peaceful fish only or use target feeding',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'Bolivians are eartheaters that MUST sift sand through gills. This is their primary feeding behavior and enrichment. Gravel prevents natural behavior and causes stress. Sand is NON-NEGOTIABLE',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'aggressive cichlids',
          reason: 'Bolivians are PEACEFUL and submissive. Aggressive species (Oscars, Jack Dempseys, African cichlids) will bully them relentlessly. Keep with peaceful community fish only',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'stable clean water',
          reason: 'Bolivians are MORE tolerant than German Rams but still sensitive to nitrates (keep <20ppm) and parameter swings. Weekly water changes mandatory',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: '10-20',
        midwater: '15-30',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 1,
      territorial: 3,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'pair',
      maxMalesPerTank: 2,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'SAND substrate (NON-NEGOTIABLE for eartheater behavior)', 
      'Calm peaceful tankmates (avoid fast aggressive feeders)', 
      'Stable water parameters (nitrates <20ppm)',
      'Open sandy areas for foraging (50%+ of substrate)',
      'Target feeding if kept with fast fish',
    ],

    proTips: [
      "Bolivian Rams vs German Blue Rams: Bolivians are HARDIER, LARGER (8cm vs 5cm), MORE PEACEFUL, and tolerate WIDER water parameters (pH 6.5-7.8, temp 23-28°C). German Rams are MORE COLORFUL but DELICATE (need pH 5.5-6.5, temp 28-30°C, die easily from stress). For beginners? BOLIVIANS win every time. They're the 'easy mode' Ram.",
      "Sand-sifting behavior: They take mouthfuls of sand, filter it through gills, and spit out clean sand. It looks like they're chewing constantly but never swallowing—they ARE eating! Tiny particles (detritus, microfauna, food scraps) are extracted during each sift. This happens ALL DAY. It's their job, their hobby, their life.",
      "SLOW FEEDER problem: Bolivians are methodical, careful eaters. They pick up food, chew it, spit it out, pick it up again—breaking it into tiny pieces. Fast fish (Danios, Barbs) swarm food and eat everything in 30 seconds. Bolivians arrive 2 minutes later and find nothing. Solution: SINK pellets/wafers directly near Bolivians using turkey baster. Target feeding ensures they get food.",
      "Pairs form STRONG bonds. Once paired (6-12 months old), they stay together for life. Watch courtship: synchronized swimming, fin spreading, body quivering. It's like underwater ballroom dancing. If one partner dies, survivor often refuses to pair again.",
      "Hardy compared to German Rams: Bolivians tolerate pH 6.5-7.8 (German Rams need <6.5), temp 23-28°C (German Rams need 28-30°C), and moderate hardness (German Rams need soft water). If your water is neutral-alkaline and moderate hardness, Bolivians are your ONLY Ram option.",
      "Groups of 4-6 create natural dynamics without aggression. They're not schoolers but appreciate company of their own kind. Multiple pairs coexist peacefully in large tanks (150L+) with visual barriers.",
    ],

    commonMistakes: [
      "Gravel substrate = stressed, unhappy Bolivians. They MUST sift sand. It's their core behavior, like birds flying or dogs digging. Gravel prevents this and causes chronic stress. Always use SAND (pool filter sand, play sand, aquarium sand—any fine sand works).",
      "Pairing with fast aggressive feeders = slow starvation. Bolivians are SLOW, CALM feeders. In tanks with Danios, Barbs, or Rainbow Sharks, Bolivians get ZERO food and slowly waste away over months. Pair with CALM fish (Cardinal Tetras, Corydoras) only.",
      "Expecting German Ram colors. Bolivians are LESS COLORFUL (peachy-orange vs electric blue) but MORE ELEGANT and SUBTLE. They're understated beauties. If you want neon colors, buy German Rams (but accept delicate care). Bolivians are for people who value HARDINESS over flash.",
      "Assuming all cichlids are aggressive. Bolivians are GENTLE, SHY, and PEACEFUL. They're more peaceful than many Tetras! Don't avoid them because 'cichlids are mean'—Bolivians break the stereotype.",
      "No flat stones for spawning. Breeding pairs NEED flat stones (10-15cm diameter) to spawn. Without them, they become frustrated and stressed. Provide 2-3 flat stones even if not breeding—it's part of their natural behavior to clean and prepare surfaces.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['pellets', 'wafers', 'bloodworms', 'brine-shrimp'],
      supplements: ['daphnia', 'vegetables', 'spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Weekly 30% water changes maintain stable parameters. Vacuum sand LIGHTLY to remove solid waste but leave some detritus for natural foraging. Bolivians help keep substrate clean through sand-sifting. Keep nitrates below 20ppm (they\'re more sensitive than average fish). Stable parameters > perfect parameters.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'low',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'hole-in-head-disease', 'bacterial-infections', 'bloat', 'parasites'],
    sensitivities: ['High nitrates (>20ppm)', 'Sudden parameter changes', 'Starvation from fast tankmates', 'Stress from aggressive fish', 'Poor diet (needs varied protein)'],
  },

  scientificContext: {
    wildHabitat: "Bolivian Rams inhabit shallow (20-80cm), slow-moving streams and rivers in the UPPER Amazon Basin (Bolivia, Brazil headwaters). Water is CLEAR to slightly tannin-stained, NEUTRAL pH (6.5-7.5), MODERATE hardness (GH 8-12), and warm (24-27°C). Substrate is SANDY with scattered rocks and moderate vegetation (not jungle density like German Ram habitat). Water flow is GENTLE. This habitat explains their HARDINESS compared to German Rams (which come from soft, acidic blackwater). Bolivians evolved in more forgiving water chemistry, making them ADAPTABLE to average aquarium conditions.",
    sexualDimorphism: "Males are LARGER (8cm vs 7cm females), develop LONGER dorsal and anal fin filaments (elegant trailing rays), and show MORE INTENSE coloration (brighter orange, deeper reds). Females are rounder, fuller-bodied, especially when gravid. During breeding, females develop swollen bellies and males' colors intensify dramatically. Juveniles impossible to sex—buy 6-8 and let them pair naturally.",
    variants: ['Wild Type (standard peachy-orange)', 'No color morphs (unlike German Rams with Electric Blue, Gold, Balloon variants)'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'intermediate',
    trigger: 'Bolivian Rams breed readily in home aquariums with proper conditions: 1) BONDED PAIR (let them choose partners naturally from group of 6+), 2) Soft, slightly acidic water (pH 6.5-7.0, GH 6-10), 3) Large water change (40-50%) with slightly COOLER water (23-24°C) to simulate rainy season, 4) Conditioning with high-protein live/frozen foods (bloodworms, brine shrimp) for 2-3 weeks until female plump, 5) Flat stone (10-15cm) for spawning site. Pair cleans stone obsessively for DAYS before spawning.',
    fryCare: 'Female lays 100-300 eggs on pre-cleaned flat stone. Both parents guard and fan eggs. Eggs hatch in 48-72 hours at 26°C into wriggling larvae. Parents DIG PITS in sand and MOVE larvae multiple times over 5-7 days (pit rotation). Fry become free-swimming at 7-9 days. BOTH parents herd fry like border collies—keeping school together, retrieving stragglers in mouths. Parental care is EXCELLENT. Feed fry baby brine shrimp and finely crushed flakes. Parents guard fry for 4-6 weeks. In community tanks, fry disappear quickly (eaten). For successful rearing, use species-only breeding tank. Growth moderate: 1cm at 4 weeks, 2cm at 8 weeks.',
    notes: 'Bolivian Rams are GOOD parents with strong biparental care. Unlike German Rams (which often eat eggs), Bolivians have HIGH success rates. Watching them herd fry clouds is ADORABLE. They\'re less prone to eating eggs/fry than German Rams. Pairs may spawn every 4-6 weeks if conditions maintained. Breeding is EASIER than German Rams due to hardier fry and better parental instincts.',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'starvation-from-competition', cause: 'kept-with-fast-aggressive-feeders', frequency: 0.28 },
      { issue: 'stress-from-gravel-substrate', cause: 'no-sand-for-natural-behavior', frequency: 0.22 },
      { issue: 'bullying-by-aggressive-fish', cause: 'paired-with-aggressive-species', frequency: 0.18 },
      { issue: 'poor-health-high-nitrates', cause: 'insufficient-water-changes', frequency: 0.15 },
      { issue: 'failed-pairing', cause: 'forced-incompatible-pairs', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 70, max: 160, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};
