import type { Species } from '../../types/species';

export const pterophyllumScalare: Species = {
  id: 'pterophyllum-scalare',
  slug: 'pterophyllum-scalare',
  imageUrl: '/images/species/pterophyllum-scalare.jpg',
  funFact: "Freshwater Angelfish (Pterophyllum scalare) are aquarium icons with 60cm tall vertical fins creating stunning disc-shaped silhouettes! They are intelligent cichlids with distinct personalities: recognizing owners, establishing complex social hierarchies, and performing elaborate courtship displays (paired angels kiss the spawning site for hours!). Watch their hunting strategy: using tall body to hide among vertical plants (Amazon sword leaves), ambushing prey with lightning-fast strikes. Here's the fascinating part: they spawn every 10-14 days laying 200-400 eggs in perfect vertical rows, both parents fiercely guard eggs fanning them 24/7, and they can live 10-15 years! Most aquarium angels are captive-bred creating dozens of color variants (koi, marble, albino, black lace). Requires tall tanks (60cm+ height!) for vertical swimming. CRITICAL: They eat small fish (neon tetras become snacks when angels mature!). Personality-packed graceful giants perfect for tall planted tanks!",

  imageCredit: {
    photographer: 'Pixabay',
    sourceUrl: 'https://pixabay.com/photos/angel-fish-tropical-fish-aquarium-1011451/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },
  
  taxonomy: {
    scientificName: 'Pterophyllum scalare',
    commonName: 'Freshwater Angelfish / Scalare / Common Angelfish',
    family: 'Cichlidae',
    origin: 'South America (Amazon Basin - Peru, Colombia, Brazil, Guyana - flooded forests, slow rivers)',
    region: 'South America',
    biotope: 'Flooded forests and slow-moving blackwater tributaries with dense vertical vegetation (submerged roots, tall plants), soft acidic water, warm temperatures, shaded areas',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 15,
    color: 'Wild type: Stunning silver base with four vertical black stripes across body creating tiger-like pattern! Stripes run from dorsal fin through body to anal fin. Long flowing triangular dorsal and anal fins creating dramatic 15cm height (taller than length!). Pelvic fins elongated into graceful filaments. Eyes crossed by first black stripe. Juveniles have more pronounced stripes, adults may show reduced stripes when stressed. Captive variants: Koi (orange and white patches), Marble (black irregular patterns), Albino (white with red eyes), Black Lace (solid black), Gold (yellow-gold), Leopard (spotted), Zebra (enhanced stripes), Platinum (metallic silver-white). All variants share iconic disc shape and tall fins.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 240,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 3, max: 15 },
    kh: { min: 2, max: 10 },
    flow: 'low',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.9,
    },
    
    spaceNeeds: {
      horizontalCM: 120,
      verticalCM: 60,
      territories: 1,
    },
    
    bioloadMultiplier: 4.0,
  },

  habitat: {
    planting: 'dense',
    plantingNotes:
      'Angelfish THRIVE in heavily planted tanks mimicking Amazon floodplains! They use tall vertical plants for: 1) Hiding and ambush hunting (natural behavior), 2) Territory markers and spawning sites, 3) Visual barriers reducing aggression. Best plants: Amazon Sword (Echinodorus, tall broad leaves they love!), Vallisneria (vertical background), Java Fern (attached to driftwood), Anubias (midground), floating plants (dappled lighting, creates shaded areas). Plant density: Dense background and sides with open swimming space in center. Angelfish rarely damage plants but may nibble soft new growth when hungry. Provide vertical structures, they naturally swim among tall plants!',
    hardscape: ['Large driftwood branches (vertical 50cm+ creates territory divisions)', 'Smooth river rocks (football-size creates caves)', 'Spawning slates (20x30cm smooth surfaces for breeding)', 'Vertical root tangles (mimics flooded forest)', 'Broad-leaved plants (natural spawning sites)'],
  },

  behavior: {
    tags: ['intelligent', 'territorial', 'schooler'],
    minGroupSize: 6,
    description:
      'Angelfish are intelligent cichlids displaying complex social behaviors and distinct personalities! In groups of 6+, they establish hierarchies: dominant pairs claim territories (corners, tall plants), subordinates respect boundaries. Watch their social dynamics: dominant angels spread fins showing dominance, subordinates tuck fins showing submission, disputes settled through fin displays (rarely physical fights). Paired angels perform elaborate courtship: selecting and cleaning spawning site together (kissing behavior!), circling each other, synchronized swimming. They are ambush predators: hiding behind vertical plants, striking prey with explosive speed. Display remarkable memory: recognizing individual owners (swim to glass when favorite person approaches), learning feeding times, remembering tank layout. CRITICAL: Territorial aggression increases during breeding (paired angels become hyper-aggressive defending spawning site, may attack all tankmates!). Semi-aggressive cichlids, not peaceful community fish despite graceful appearance.',
    
    compatibility: {
      goodMates: ['Larger tetras (Rummy Nose, Black Skirt, Bleeding Heart, Congo, 4cm+)', 'Peaceful medium cichlids (Bolivian Ram, Festivum, Uaru)', 'Corydoras catfish (Bronze, Sterbai, all sizes)', 'Bristlenose Plecos (algae control)', 'Peaceful gouramis (Pearl, Dwarf, avoid territorial species)', 'Medium barbs (Cherry, Rosy, avoid fin nippers)', 'Peaceful loaches (Kuhli, Yo-Yo)', 'Medium rainbowfish (Boesemani, Turquoise)'],
      badMates: ['Small tetras/rasboras (Neon, Cardinal, Ember, eaten when angels mature!)', 'Guppies and Endlers (eaten)', 'Fin nippers (Tiger Barb, Serpae Tetra, destroy flowing fins!)', 'Aggressive cichlids (Oscar, Jack Dempsey, Flowerhorn, killed)', 'Small shrimp (eaten, only large Amano safe)', 'Goldfish (different temperature needs)', 'Slow bottom dwellers during breeding (attacked by territorial pairs)'],
      notes:
        'Angelfish compatibility depends on SIZE and BREEDING STATUS! Juveniles (5-8cm) are peaceful, mature adults (12cm+) become territorial and predatory. Golden rule: Tankmates must be too large to eat (4cm+ minimum) and not fin nippers. CRITICAL MISTAKE: Many keep angels with neon tetras thinking safe, but mature angels (10cm+) hunt neons at night! Best approach: 1) Buy angels as juveniles with compatible fish of similar size, 2) Avoid tiny fish entirely (they become expensive snacks), 3) Increase hiding spots and visual barriers (reduces aggression), 4) Watch for breeding pairs (if pair forms, remove other angels or provide 500L+ tank with multiple territories). Breeding pairs become HYPER-aggressive attacking all fish near spawning site (even peaceful tankmates stressed to death!). Community tank works with mature peaceful species, avoid delicate/small fish. Angels are semi-aggressive cichlids, not peaceful despite elegant appearance!',
      
      rules: [
        {
          type: 'requires',
          condition: '240L minimum for 6 angels, 500L for breeding pair with tankmates',
          reason: 'Angelfish are social cichlids requiring groups of 6+ to establish natural hierarchies and spread aggression. In smaller groups (2-4), dominant angels bully weaker individuals to death. 240L (120x50x50cm with 60cm height ideal) provides space for 6 juveniles. If breeding pair forms, they need 500L+ tank to coexist with tankmates without killing them during spawning aggression',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'tank height 60cm minimum (50cm absolute minimum)',
          reason: 'Angelfish grow to 15cm body length but 20-25cm HEIGHT with vertical fins! Standard 40-50cm tall tanks restrict vertical swimming causing stress, fin damage from cramped space. 60cm+ height allows natural swimming behavior. This is NON-NEGOTIABLE for adult angels',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'small fish under 4cm (neon tetras, guppies, small rasboras)',
          reason: 'Adult angelfish are predators with mouths large enough to eat 3cm fish whole! Many keepers pair angels with neon tetras thinking safe, but mature angels (10cm+) hunt them at night. Small fish disappear one by one. Only keep tankmates 4cm+ that cannot be swallowed',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'fin nippers (tiger barbs, serpae tetras, some barbs)',
          reason: 'Angelfish have long flowing fins that are irresistible targets for fin nippers! Tiger barbs and serpae tetras relentlessly attack angel fins causing: shredded fins, chronic stress, secondary infections (fin rot). Damaged fins rarely regrow perfectly. Never mix angels with known fin nippers',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 6,
      interspecific: 5,
      territorial: 8,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
      maxMalesPerTank: 3,
    },
    
    finNipping: {
      risk: 'low',
      targets: ['not fin nippers themselves, but VICTIMS of fin nippers!'],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      '240L minimum tank for group of 6', 
      'Tank height 60cm minimum (tall tank mandatory!)', 
      'Heavily planted with vertical structures (Amazon Sword, Vallisneria)', 
      'Soft acidic water preferred (pH 6.5-7.0, though adaptable)', 
      'No fin nippers as tankmates', 
      'Tankmates 4cm+ only (no small fish!)', 
      'Spawning slate if breeding desired (20x30cm smooth surface)',
    ],

    proTips: [
      "Buy juveniles in groups of 6-8 to form natural pairs! Angelfish are social and MUST be kept in groups when young. Buying single angel or pair causes: stress, aggression, unnatural behavior. In groups, they establish hierarchies and naturally pair off (typically happens at 8-12 months). Watch for pairing signs: two angels spending time together, cleaning surfaces together, chasing others away from territory. Once stable pair forms and spawning begins, you can: keep entire group in 500L+ tank with multiple territories OR remove pair to separate breeding tank. This is the natural way!",
      "Tank height is MORE important than length! Angelfish are vertically oriented swimmers with body height reaching 20-25cm including fins. In standard 40-50cm tall tanks, they cannot swim naturally (like keeping tall person in 5ft ceiling room!). Minimum 60cm height, 70cm ideal. Look for tall aquariums specifically marketed for angels/discus. This single factor dramatically improves quality of life!",
      "Heavily plant the tank with vertical structures! Angelfish evolved in Amazon floodplains hiding among submerged roots and tall plants. Dense planting provides: hiding spots reducing stress, ambush hunting opportunities (natural behavior!), visual barriers reducing aggression, spawning sites (broad leaves). Best setup: Dense plant walls on sides and back (Vallisneria, Amazon Sword), open swimming space in center, floating plants for dappled light. Angels feel secure and display better colors!",
      "Diet variety prevents deficiencies! Staple: Quality cichlid pellets or flakes 2x daily. Variety 3-4x weekly: Frozen bloodworms (favorite!), frozen brine shrimp, frozen daphnia, blanched spinach/zucchini (vegetable matter important!), live or frozen mosquito larvae. Avoid: Mammalian meat (beef heart causes fatty liver disease despite being traditional food), feeder goldfish (parasites), dried foods only. Fast 1 day weekly. Varied diet enhances colors and breeding condition!",
      "Watch for breeding pairs and adjust setup! When pair forms (happens naturally in groups), they become HYPER-territorial during spawning. Signs: cleaning flat surface intensely (kissing behavior), chasing all fish away from area, synchronized swimming. Options: 1) Provide massive tank (500L+) with multiple territories so other angels/tankmates have space, 2) Remove other fish leaving just breeding pair, 3) Separate pair to dedicated breeding tank (240L minimum). Ignoring breeding aggression results in stressed/dead tankmates!",
      "Angelfish are sensitive to water quality despite being hardy when adapted! They tolerate wide pH range (6.0-7.5) once acclimated but sensitive to: ammonia/nitrite (causes rapid death), high nitrates (over 40ppm causes stress/disease), sudden parameter changes (causes shock). Weekly 30% water changes, test parameters weekly, use quality dechlorinator (Seachem Prime). Stable water equals happy long-lived angels!",
    ],

    commonMistakes: [
      "Keeping with small fish (neon tetras, guppies). Most common failure! Keepers buy juvenile angels (5cm) with neon tetras, everything peaceful for 6 months, then angels grow to 12cm+ and hunt tetras at night (tetras disappear one by one!). Angelfish are CICHLID PREDATORS not peaceful community fish. Only keep tankmates 4cm+ that cannot be swallowed. This mistake kills thousands of tetras yearly!",
      "Short tanks (under 60cm height). Angelfish need TALL tanks not long tanks! Standard 100L tanks are often 40-50cm tall which restricts vertical swimming. Angels develop: stress, stunted growth, fin damage (hitting lid/substrate), unnatural behavior. Minimum 60cm height for adults, 70cm ideal. Always check tank HEIGHT before buying angels!",
      "Fin nippers as tankmates (tiger barbs, serpae tetras). Tiger barbs cannot resist angels flowing fins and attack relentlessly! Results in: shredded fins, chronic stress, secondary infections, poor quality of life. Damaged fins rarely regrow perfectly. Many angels die from stress of constant harassment. NEVER mix angels with known fin nippers no matter what shop says!",
      "Small groups (1-3 angels). Angelfish are social cichlids requiring groups of 6+ when young! In small groups, dominant angels bully weaker individuals (chasing, fin nipping, preventing feeding) causing: stress, disease, death. Single angels become lonely, depressed, hide constantly. Minimum 6 angels in 240L tank, they establish natural hierarchy and spread aggression. Solo angels are sad angels!",
      "Ignoring breeding aggression. When pair forms and spawns, they become HYPER-aggressive defending territory (attack all fish near spawning site!). Many keepers ignore this thinking temporary, but breeding pairs spawn every 10-14 days continuously! Tankmates stressed to death. Solution: massive tank (500L+) with multiple territories OR separate breeding pair. Do not underestimate breeding aggression!",
      "No planted tank. Angelfish evolved in densely planted Amazon floodplains, bare tanks cause: extreme stress, washed out colors, hiding constantly, aggression increases (no visual barriers!). Heavily planted tanks with vertical structures (Amazon Sword, Vallisneria, driftwood) dramatically improve: colors, behavior, breeding success, overall health. Plants are not optional for angels!",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['pellets', 'flakes', 'bloodworms'],
      supplements: ['brine-shrimp', 'vegetables', 'daphnia'],
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
      notes: 'Angelfish are sensitive to water quality! Weekly 30% water changes mandatory maintaining stable parameters. Vacuum substrate thoroughly (planted tanks may need less aggressive vacuuming near roots). Test parameters weekly: ammonia 0ppm, nitrite 0ppm, nitrate under 40ppm, pH 6.5-7.0. Clean filter monthly (rinse media in tank water, never tap water kills beneficial bacteria!). Trim dead plant leaves weekly. Angels show stress through: darkened colors, clamped fins, hiding, rapid breathing (indicates poor water quality, test immediately!). Stable pristine water equals vibrant healthy angels.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 200,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: true,
    },
  },

  health: {
    lifespanYears: 12,
    commonDiseases: ['ich', 'hole-in-head-disease', 'fin-rot', 'velvet', 'internal-parasites', 'swim-bladder-disorder'],
    sensitivities: ['Ammonia/nitrite (rapid death)', 'High nitrates (over 40ppm)', 'Sudden pH/temperature swings', 'Copper medications (use half dose!)', 'Poor water quality (stress/disease)', 'Lack of vertical swimming space'],
  },

  scientificContext: {
    wildHabitat:
      'Pterophyllum scalare inhabits Amazon Basin floodplains and slow-moving blackwater tributaries (Peru, Colombia, Brazil, Guyana). Wild habitat: Densely vegetated flooded forests during wet season (water rises 10+ meters!), submerged roots and branches creating vertical structures, tall aquatic plants (sword plants, Vallisneria), soft acidic water (pH 6.0-6.5, GH 3-5, temp 26-28°C), tannin-stained water (tea-colored from leaf litter), shaded areas with dappled sunlight. They are ambush predators: hiding behind vertical plants using disc-shaped body as camouflage, striking prey (small fish, insects, crustaceans) with explosive speed. Use tall body to navigate dense vegetation. Display complex social behaviors: establishing territories around tall plants, forming monogamous pairs, both parents guard eggs/fry for 4-6 weeks. Wild specimens more colorful with prominent stripes than many captive-breds.',
    sexualDimorphism:
      'Difficult to sex until mature (subtle differences). Males: Slightly larger overall, more pronounced forehead bump (nuchal hump) when mature, steeper forehead angle, thicker body, breeding tube (papilla) pointed and thin during spawning. Females: Slightly smaller, rounder body especially when gravid (carrying eggs, belly visibly swollen), gentler forehead slope, breeding tube (ovipositor) thick and blunt during spawning. Best method: Observe during spawning (male has thin pointed papilla, female has thick tube for laying eggs) or vent sexing (requires experience). Juveniles impossible to sex reliably. Buy groups and let natural pairs form!',
    variants: ['Wild type (silver with black stripes)', 'Koi angelfish (orange and white patches)', 'Marble angelfish (black irregular marbling)', 'Albino angelfish (white with red eyes)', 'Black Lace angelfish (solid black)', 'Gold angelfish (yellow-gold)', 'Platinum angelfish (metallic silver-white)', 'Leopard angelfish (spotted pattern)', 'Zebra angelfish (enhanced black stripes)', 'Blue angelfish (metallic blue sheen)', 'Veil angelfish (extra long flowing fins)', 'Philippine Blue angelfish (intense blue)', 'Blushing angelfish (no dark pigment, organs visible!)'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'medium',
    trigger:
      'Angelfish breeding is relatively easy once stable pair forms! Natural pairs form in groups of 6+ juveniles raised together (typically at 8-12 months). Breeding triggers: 1) Increase temperature to 28°C, 2) Frequent water changes (30-50% every 3 days with slightly softer water GH 3-5), 3) Heavy feeding with high-protein foods (frozen bloodworms, brine shrimp, live mosquito larvae) 2-3 weeks, 4) Provide spawning surfaces (broad plant leaves like Amazon Sword OR smooth slate 20x30cm positioned vertically at 45-60 degree angle, parents prefer slight angle!). Watch pair behavior: intensely cleaning spawning site together (kissing surface for hours!), chasing other fish away from territory (aggression increases dramatically!), synchronized swimming. Spawning typically happens afternoon before lights out.',
    fryCare:
      'Angelfish are excellent parents displaying legendary care! Spawning process: Female lays 200-400 eggs in perfect vertical rows on cleaned surface, male follows immediately fertilizing each row. Both parents guard eggs fiercely (attack anything approaching!), fan eggs continuously with pectoral fins (prevents fungus), remove dead/fungused eggs with mouth. Eggs hatch in 48-60 hours at 28°C. Parents move wriggler larvae (tiny blobs with tails) to pre-dug pits in substrate using mouth, continue guarding 7-10 days until fry free-swimming. Free-swimming fry stay near parents in cloud formation, both parents protect them 4-6 weeks! First-time parents often eat first 1-2 spawns (learning process), subsequent spawns usually successful. Fry need: Artemia nauplii (baby brine shrimp) first 2 weeks 3-4x daily, then powdered fry food, transition to crushed flakes at 4 weeks. Growth: 1cm at 3 weeks, 2-3cm at 2 months, 5cm at 4 months. CRITICAL: Remove fry at 6-8 weeks or parents may eat them when preparing next spawn!',
    notes:
      'Angelfish breeding is rewarding and relatively easy! Best approach: 1) Buy 6-8 juveniles, raise in 240L+ planted tank, let natural pairs form (happens at 8-12 months), 2) Once pair spawns, decide: keep pair with fry in breeding tank (240L+ with no tankmates, parents raise fry naturally!) OR remove eggs for artificial rearing (higher survival, more work), 3) If keeping in community tank, pair will spawn every 10-14 days but tankmates eat eggs/fry (parents cannot defend in busy tank). Most breeders separate pairs to dedicated tanks for natural parenting. Angels pair for life (monogamous!) and spawn continuously for years. Breeding pairs become HYPER-aggressive (attack all tankmates near spawning site, even peaceful fish stressed to death!). Plan breeding setup before pair forms! Established pairs can produce 200-400 fry every 2 weeks (huge numbers!). Commercial breeding is viable hobbyist income.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'neon-tetras-eaten-by-mature-angels', cause: 'kept-with-small-fish-under-4cm-became-prey', frequency: 0.35 },
      { issue: 'shredded-fins-from-nipping', cause: 'kept-with-fin-nippers-tiger-barbs-serpae-tetras', frequency: 0.25 },
      { issue: 'stress-from-short-tank', cause: 'tank-height-under-60cm-restricted-vertical-swimming', frequency: 0.15 },
      { issue: 'bullying-in-small-groups', cause: 'kept-only-2-3-angels-dominant-bullied-weak', frequency: 0.15 },
      { issue: 'tankmates-killed-breeding-aggression', cause: 'ignored-breeding-pair-territorial-aggression', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 300, max: 800, currency: 'EUR' },
      monthly: { min: 20, max: 50, currency: 'EUR' },
    },
  },
};
