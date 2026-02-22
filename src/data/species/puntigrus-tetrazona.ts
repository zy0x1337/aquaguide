import type { Species } from '../../types/species';

export const puntigrusTetrazona: Species = {
  id: 'puntigrus-001',
  slug: 'puntigrus-tetrazona',
  imageUrl: '/images/species/puntigrus-tetrazona.jpg',
  funFact: "Tiger Barbs are the playground bullies of the aquarium world - but they're not actually mean, just hyperactive! Their infamous fin-nipping behavior is massively reduced when kept in large groups (10+) because they're too busy establishing their own social pecking order to bother other fish. In groups of 6 or fewer, they get bored and look for trouble. Think of them like energetic puppies - if you don't give them enough playmates, they'll chew your furniture (or in this case, your Angelfish's fins). Interestingly, the 'four stripes' pattern is disruption coloration - in murky Southeast Asian streams, the vertical bars break up their body outline making them harder for predators to track as they dart between plants.",

  imageCredit: {
    photographer: 'Anandarajkumar',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:A_Male_Tiger_barb.png',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },

  taxonomy: {
    scientificName: 'Puntigrus tetrazona',
    commonName: 'Tiger Barb',
    family: 'Cyprinidae',
    origin: 'Indonesia (Sumatra, Borneo - Kapuas, Mahakam, and Bulungan river basins)',
    region: 'Asia',
    biotope: 'Shallow (30-80cm depth), slow-moving and stagnant waters including forest streams, tributaries, oxbow lakes, flooded forests, and peat swamps. Densely vegetated with submerged roots, leaf litter, sandy or muddy substrates. Water is often tannin-stained (tea-colored) from decaying vegetation, soft, acidic (pH 5.0-6.5), and warm (24-28°C)',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 7,
    color: 'Wild type: Golden-orange to peachy-yellow body with four distinctive vertical black bars (stripes). Bar 1: through eye, Bar 2: before dorsal fin, Bar 3: behind dorsal fin extending onto anal fin, Bar 4: on caudal peduncle. Dorsal fin black with bright red-orange base and white/transparent tip. Pelvic and anal fins bright red-orange. Males more intensely colored (deeper orange, blacker bars, brighter red snout during breeding). Females paler with rounder belly. Numerous color morphs exist: Green Tiger (metallic moss-green body), Albino (golden-white with pink bars), Platinum/Snow (silvery-white), GloFish (fluorescent genetically modified).',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 120,
    tempC: { min: 20, max: 26, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    gh: { min: 3, max: 10 },
    kh: { min: 2, max: 8 },
    flow: 'moderate',
    substrate: 'sand-or-fine-gravel',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.70,
    },
    
    spaceNeeds: {
      horizontalCM: 100,
      verticalCM: 35,
      territories: 0,
    },
    
    bioloadMultiplier: 1.2,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Tiger Barbs need SPACE more than heavy planting. They\'re incredibly active swimmers requiring large open areas for schooling, chasing, and their constant high-speed antics. Setup: 60-70% open swimming space in center/front, 30-40% planted perimeter (sides and back). Use robust plants that tolerate their boisterous behavior: Java Fern, Anubias (attached to wood), Vallisneria, Amazon Swords, Java Moss. Avoid delicate stem plants (they uproot them during spawning or rough play). Floating plants work well (Water Sprite, Frogbit) to diffuse light. DO NOT densely plant entire tank - they become frustrated, stressed, and MORE aggressive when cramped. Tiger Barbs appreciate planted areas for shelter but spend 80% of time in open water schooling.',
    hardscape: ['Driftwood (Mopani, Spiderwood - creates tannins)', 'Smooth river stones', 'Indian Almond Leaves (optional, for blackwater effect)', 'Caves and crevices (limited use - they rarely hide)', 'Avoid sharp rocks (they swim fast and can injure themselves)'],
  },

  behavior: {
    tags: ['schooler', 'semi-aggressive', 'fin_nipper', 'active'],
    minGroupSize: 10,
    description: 'Tiger Barbs are hyperactive, social schooling fish with notorious reputations as fin-nippers - but this behavior is MASSIVELY exaggerated when kept properly. In groups of 10-12+, they form complex social hierarchies where males constantly spar with EACH OTHER (not tankmates) for dominance and female attention. These mock battles involve parallel swimming, flank displays, and chasing - pure posturing, no injuries. When kept in large groups, they\'re so preoccupied with their own school dynamics that they largely ignore other species. The fin-nipping problem occurs primarily in small groups (4-6 fish) where bored individuals seek stimulation by harassing slower tankmates. They\'re constantly in motion - schooling, foraging, play-fighting, exploring every inch of the tank. Activity level is exhausting to watch - they never stop! Males are particularly feisty, showing off bright colors and chasing rivals and females. Despite reputation, they\'re NOT truly aggressive (no sustained attacks, no killing) - just boisterous and rambunctious like overexcited children. Think "annoying" not "dangerous." They occupy mid-water primarily but forage on substrate and occasionally dart to surface for food.',
    
    compatibility: {
      goodMates: ['Other robust barbs (Rosy, Cherry, Gold, Denison)', 'Fast-moving fish (Danios, Giant Danios, Rasboras)', 'Loaches (Clown, Yoyo, Zebra)', 'Rainbowfish', 'Larger active tetras (Congo, Buenos Aires)', 'Plecos (Bristlenose, Clown)', 'Corydoras (in groups of 8+, can handle barb energy)', 'Swordtails, Platys (avoid fancy varieties)', 'Gouramis (ONLY robust species like Pearl, Blue - avoid Dwarf)', 'Red-tail Sharks, Rainbow Sharks'],
      badMates: ['Angelfish (slow-moving, long fins - classic victim)', 'Bettas (fins shredded within hours)', 'Guppies, fancy guppies (fins destroyed)', 'Goldfish (temperature mismatch + fin-nipping)', 'Discus (too slow, too expensive to risk)', 'Dwarf Cichlids (Apistogramma, Rams - too timid)', 'Dwarf Gouramis (harassed constantly)', 'Long-finned varieties (Veiltail Bettas, Longfin Tetras)', 'Slow-moving catfish (Upside-down Catfish)', 'Shrimp (eaten or harassed)'],
      notes: 'Tiger Barbs are NOT suitable for typical peaceful community tanks. They work ONLY in "rough and tumble" communities with similarly sized, active, fast-swimming, short-finned species. The key to success: GROUP SIZE. 10-12+ Tiger Barbs focus on each other, not tankmates. 4-6 Tiger Barbs = disaster (boredom = fin-nipping). Avoid ANY slow-moving or long-finned fish - Angelfish and Bettas are the classic mistakes (Tigers will relentlessly nip fins until they\'re shredded stumps). Best tankmates are other barbs, danios, loaches, and rainbowfish that match their energy level. In 200L+ tanks with 12+ Tigers and compatible tankmates, they\'re surprisingly tolerable - still boisterous but manageable.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group of 10-12+ individuals',
          reason: 'Tiger Barbs become significantly MORE aggressive and fin-nippy in small groups (<8). Large groups redirect aggression inward toward conspecifics rather than tankmates. 10+ is non-negotiable for community tanks.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'long-finned or slow-moving fish',
          reason: 'Angelfish, Bettas, Guppies, fancy Goldfish, and Discus are incompatible. Tiger Barbs will relentlessly nip fins causing stress, infections, and eventual death of victims.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'large tank (120L minimum, 200L+ ideal)',
          reason: 'Tiger Barbs are hyperactive and need extensive swimming space. Cramped quarters increase aggression exponentially. 120L for 10-12 Tigers, 200L+ for community setups.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'shrimp and small snails',
          reason: 'Tiger Barbs will eat small shrimp (Cherry, Amano juveniles) and harass larger ones. Nerite and Mystery Snails usually tolerated, but small snails may be picked at.',
          severity: 'medium',
        },
        {
          type: 'avoid',
          target: 'timid or shy fish',
          reason: 'Even without fin-nipping, Tiger Barbs\' constant activity and boisterous behavior stresses timid species (Dwarf Cichlids, Otocinclus, small Rasboras). Choose confident tankmates.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '6-8',
      },
    },
    
    aggressionLevel: {
      intraspecific: 5,
      interspecific: 7,
      territorial: 3,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
      maxMalesPerTank: 999,
    },
    
    finNipping: {
      risk: 'high',
      targets: ['angelfish', 'bettas', 'guppies', 'fancy-goldfish', 'long-finned-fish'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'low',
    specialRequirements: [
      'Large group (10-12+ individuals minimum) to reduce aggression',
      'Spacious tank (120L minimum, 200L+ for communities)',
      'Open swimming areas (60-70% of tank space)',
      'Compatible tankmates (fast-moving, short-finned, robust species only)',
      'Stable water parameters (sensitive to ammonia/nitrite spikes)',
    ],

    proTips: [
      "The magic number is 10+. Every Tiger Barb guide says 'keep in groups of 6+' but this is MINIMUM for survival, not ideal behavior. At 6-8 fish, they're still nippy and aggressive. At 10-12+, the dynamic shifts - they create complex hierarchies and focus on each other. At 15-20 fish in large tanks (250L+), they're absolutely mesmerizing with coordinated schooling and constant sparring. If you want community tank success, don't cheap out - buy 10-12 minimum.",
      "Blackwater setup calms them down. Tiger Barbs from Borneo peat swamps naturally experience tannin-stained water (pH 5.5-6.5). Adding Indian Almond Leaves, Alder Cones, or driftwood that leeches tannins creates dim, amber-colored water. This reduces stress, intensifies their orange coloration, and surprisingly decreases aggression. They feel more secure in darker water.",
      "Feed heavily and frequently during conditioning for breeding. These fish are gluttons - in preparation for spawning, feed 2-3x daily with protein-rich foods (bloodworms, brine shrimp, daphnia). Well-fed Tigers are less aggressive and show better colors. Hungry Tigers are MORE nippy and irritable.",
      "Open center, planted perimeter is the ideal layout. They need racing room - imagine a swimming pool vs. obstacle course. Plant heavily on sides/back for visual security, but leave 60-70% of center/front wide open. Watch them use the entire space - tight circles, sprints across tank, parallel swimming competitions. Cramped planted tanks make them frustrated and aggressive.",
      "Mix color morphs for stunning displays. Standard wild-type (orange/black), Green Tigers (moss-green), Albino (pink/cream), and Platinum (silver) can be kept together. A school of 12 fish with 3-4 of each morph creates incredible visual diversity. They don't care about color differences - all recognized as conspecifics.",
      "Spawning happens spontaneously in community tanks. If you have mixed-sex group, well-fed, with fine-leaved plants (Java Moss, spawning mops), they'll breed without special setup. You'll notice eggs scattered in plants. Remove adults immediately or they'll devour eggs. Most hobbyists don't bother breeding intentionally - they reproduce readily if conditions are right.",
    ],

    commonMistakes: [
      "Small group sizes (4-6 fish). This is the #1 Tiger Barb mistake and reason for their terrible reputation. In groups under 8, they're absolute terrors - nipping fins, harassing tankmates, creating chaos. At 10+, they transform into manageable community fish. The fin-nipping problem is DIRECTLY proportional to group size. Don't believe 'minimum 6' recommendations - that's survival minimum, not behavioral minimum.",
      "Housing with Angelfish or Bettas. This combination appears constantly in forums: 'Help! My Tiger Barbs are killing my Angelfish!' Yes, they are. That's what they do. Angels and Bettas have everything Tigers love to attack: slow movement, long flowing fins, docile temperament. This combination NEVER works. It's not 'bad luck' or 'aggressive individuals' - it's predictable species behavior.",
      "Inadequate tank size. Beginners try keeping 6-8 Tigers in 60L tanks. These hyperactive fish need SPACE to burn energy through schooling and play-fighting. Cramped quarters = frustrated, aggressive fish. 120L minimum for 10 Tigers. 200L+ for community setups. Think 'racetrack' not 'studio apartment.'",
      "Expecting peaceful behavior. New keepers buy Tigers thinking they're like Neon Tetras or Guppies. They're NOT. Tigers are semi-aggressive, boisterous, and nippy even at best. If you want a calm, peaceful tank, choose different fish. If you want an active, energetic, 'rough and tumble' tank, Tigers are perfect. Manage expectations.",
      "Overfeeding leading to water quality crashes. Tiger Barbs are GLUTTONS and will beg for food constantly (they're basically aquatic golden retrievers). Overfeeding 10-12 active fish in 120L tank = nitrate spike, cloudy water, stressed fish. Feed once daily, small amounts. They'll act starving even when well-fed. Don't fall for it.",
      "Mixing with shrimp tanks. 'Can I keep Tigers with my Cherry Shrimp colony?' No. They'll eat every shrimp they can catch and harass the rest. Tigers are opportunistic predators. Small inverts = snacks. If you want shrimp, choose peaceful fish (Otocinclus, Ember Tetras, Celestial Pearl Danios).",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'spirulina', 'bloodworms', 'brine-shrimp'],
      supplements: ['daphnia','blanched-zucchini'],
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
      notes: 'Weekly 30-40% water changes are CRITICAL for Tiger Barbs. They have high bioload (active metabolism, messy eaters) and are sensitive to nitrate buildup. Keep nitrates <30 ppm (ideally <20 ppm). Higher nitrates = faded colors, increased aggression, disease susceptibility. Vacuum substrate thoroughly (they scatter food everywhere). Test water weekly: ammonia and nitrite MUST stay 0 ppm. Use dechlorinator and temperature-match new water. Tiger Barbs are hardy but water quality matters - poor conditions make them irritable and more aggressive.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 150,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['ich', 'velvet', 'fungal-infections', 'fin-rot', 'dropsy', 'swim-bladder-disorder'],
    sensitivities: [
      'Ammonia and nitrite (very sensitive during cycling)',
      'Nitrate >30 ppm (causes lethargy and aggression)',
      'Temperature fluctuations (maintain 23-26°C)',
      'Overcrowding (increases stress and disease)',
      'Poor diet (leads to stunted growth and faded colors)',
      'Sudden water parameter changes',
    ],
  },

  scientificContext: {
    wildHabitat: "Wild Puntigrus tetrazona inhabit shallow (30-80cm depth), slow-moving to stagnant waters across Sumatra and western Borneo (Indonesia). Their range includes forest streams, tributary rivers, oxbow lakes, flooded forests during monsoon season, and blackwater peat swamps. These habitats feature soft, acidic water (pH 4.5-6.5, GH <5°) heavily stained brown by tannins from decaying leaves, submerged roots, and peat. Substrate is sand, mud, or thick leaf litter (2-10cm deep). Water temperature ranges 24-28°C year-round. Vegetation is dense: emergent plants along margins, submerged roots, aquatic plants (Cryptocoryne), and thick surface mats of floating vegetation. Visibility is often poor (1-2 meters) due to tannin staining. Tiger Barbs form large shoals (50-200+ individuals) in midwater, actively foraging on aquatic invertebrates (mosquito larvae, daphnia, small worms), algae, plant matter, and organic detritus. During monsoon floods (November-March), they disperse into newly inundated forest floors and floodplains where food is abundant (terrestrial insects, decomposing organic matter). Dry season (May-September) concentrates them in permanent water bodies. They coexist with other cyprinids (Rasbora, Puntius), loaches (Pangio), and gouramis. Natural predators include larger fish, wading birds, and snakes.",
    sexualDimorphism: "Moderate dimorphism, easiest to identify in mature adults (8-12 months). Males: deeper, richer orange-red body coloration especially when breeding; bright red/scarlet snout and gill plates during spawning season; black bars more defined and contrasting; slimmer, more torpedo-shaped body; dorsal and anal fins with more intense red coloration and blacker pigmentation; slightly larger overall (up to 7cm). Females: paler peachy-orange body color; rounder, deeper belly especially when gravid (carrying eggs - visible as yellowish mass through translucent skin); black bars slightly less defined; overall more subdued coloration; dorsal and anal fins paler red-orange; slightly smaller (5-6cm average). During breeding, males become DRAMATICALLY more colorful - snouts turn brilliant scarlet, entire body intensifies to deep orange-red. Females remain paler but become noticeably plump with eggs. In groups, males are constantly displaying and sparring (easy to identify). Juveniles (<4 months) are difficult to sex - all appear female-like until maturity.",
    variants: [
      'Wild type (golden-orange body, black bars)',
      'Green Tiger Barb (metallic moss-green body, black bars)',
      'Albino Tiger Barb (cream/golden-white body, pink-orange bars)',
      'Platinum/Snow Tiger Barb (silvery-white body, faint gray bars)',
      'GloFish Tiger Barbs (fluorescent genetic modifications - multiple colors)',
      'Longfin Tiger Barb (selectively bred elongated fins - NOT recommended, defeats purpose)',
    ],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Tiger Barbs breed readily in home aquariums with minimal effort. Breeding setup: 40-60L dedicated tank, bare bottom or spawning grid/marbles (prevents egg eating), spawning mop or fine-leaved plants (Java Moss, spawning yarn), soft water (GH 3-6°, pH 6.0-6.5), temperature 26-27°C, gentle sponge filter, dim lighting. Conditioning: Select 6-8 healthiest, most colorful adults (equal males/females). Separate sexes for 10-14 days. Feed heavily 2-3x daily with protein-rich live/frozen foods (bloodworms, brine shrimp, daphnia). Females will become noticeably plump with eggs (round belly, yellowish egg mass visible). Introduce conditioned group to breeding tank in evening. Spawning occurs at dawn - males intensify colors (scarlet snouts), chase females vigorously, pair off. Females scatter 200-500 eggs among plants/mop while male fertilizes. Spawning lasts 1-3 hours.',
    fryCare: 'Remove adults IMMEDIATELY post-spawning - they are voracious egg eaters and will consume entire spawn within hours. Eggs are tiny (1mm), transparent, adhesive, scattered throughout plants. Fertile eggs remain clear; infertile turn white/opaque (remove with turkey baster to prevent fungus). Eggs hatch in 24-48 hours at 26°C. Newly hatched fry are nearly microscopic (2-3mm), immobile, attached to surfaces via adhesive threads, surviving on yolk sac. At 3-5 days, fry become free-swimming. First foods: infusoria or liquid fry food for 5-7 days (they\'re too tiny for baby brine shrimp initially). At 7-10 days, introduce freshly-hatched baby brine shrimp (Artemia nauplii) - fry grow explosively on this. Feed 4-5x daily in small amounts. At 3-4 weeks, transition to finely crushed flakes and micro pellets. Water quality is CRITICAL for fry - perform daily 10-15% water changes with aged, temperature-matched water. Use gentle sponge filter to avoid sucking up fry. Fry develop adult coloration (black bars appear) at 6-8 weeks. Sexual maturity at 6-8 months. Expect 100-300 surviving fry from successful spawn.',
    notes: 'Tiger Barbs are among the EASIEST egg-scattering species to breed - perfect for beginners wanting breeding experience. They spawn readily (every 2-3 weeks when well-conditioned), produce large spawns (200-500 eggs), don\'t require extreme water parameters, and fry are relatively hardy. Main challenges: preventing adults from eating eggs (requires immediate removal) and raising microscopic fry (need infusoria first 5-7 days). Commercial breeding is extensive - most trade specimens are captive-bred in Southeast Asia and Eastern Europe. Tiger Barbs have been bred in aquariums for 100+ years with no wild collection necessary. Breeding them at home is rewarding and profitable (LFS often buy healthy juveniles). Selective breeding created color morphs (Green, Albino, Platinum) through 50+ years of captive propagation.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'fin-nipping-stress-to-tankmates', cause: 'small-group-size-or-incompatible-tankmates', frequency: 0.35 },
      { issue: 'ich-outbreak', cause: 'stress-from-poor-acclimation-or-temperature-fluctuation', frequency: 0.20 },
      { issue: 'aggression-injuries', cause: 'overcrowding-or-inadequate-tank-size', frequency: 0.15 },
      { issue: 'water-quality-crash', cause: 'overfeeding-or-insufficient-filtration', frequency: 0.12 },
      { issue: 'faded-colors-lethargy', cause: 'high-nitrates-or-poor-diet', frequency: 0.10 },
      { issue: 'jumping-out', cause: 'no-lid-during-spawning-chases', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 200, currency: 'EUR' },
      monthly: { min: 12, max: 30, currency: 'EUR' },
    },
  },
};
