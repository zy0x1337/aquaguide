import type { Species } from '../../types/species';

export const pelvicachromispulcher: Species = {
  id: 'pelvicachromis-001',
  slug: 'pelvicachromis-pulcher',
  imageUrl: '/images/species/pelvicachromis-pulcher.jpg',
  funFact: "Kribensis are the 'helicopter parents' of the aquarium world! Both parents provide incredibly intense biparental care for 21-28 days - guarding, herding, and even pre-chewing food for their fry. The female's belly transforms into a brilliant cherry-red beacon during breeding, essentially shouting 'I'M PREGNANT!' to everyone in the tank. But here's the wild part: in nature, breeding pairs sometimes ADOPT orphaned fry from other Kribensis families to create larger schools, which confuses predators and dilutes the risk to their own babies. It's like a neighborhood daycare center run by overprotective cichlid parents. Watch them march their cloud of 50-100 fry around the tank like a tiny army - any fish that gets too close gets charged immediately!",

  taxonomy: {
    scientificName: 'Pelvicachromis pulcher',
    commonName: 'Kribensis',
    family: 'Cichlidae',
    origin: 'West Africa (Nigeria, Cameroon - Niger Delta, Cross River, and adjacent coastal drainages)',
    region: 'Africa',
    biotope: 'Shallow, slow-moving streams, creeks, tributary rivers, and coastal estuaries with soft substrates (sand, mud), abundant vegetation (Anubias, Bolbitis), submerged roots, leaf litter, and cave-like structures (undercut banks, root tangles, rock crevices). Water ranges from soft, acidic freshwater (pH 5.0-6.5) in forest streams to slightly brackish (salinity 5-10 ppt) in coastal areas',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 10,
    color: 'Stunning sexual dimorphism and color intensity varies with mood/breeding. Males: larger (up to 10cm), elongated body, golden-yellow to olive-brown dorsal body with iridescent blue-green scales creating metallic sheen, dark lateral stripe from mouth to caudal fin, dorsal fin with gold-ringed eyespots (ocelli) - spectacular peacock-like display when spread, caudal fin with upper lobe extending into filament, red/pink flush on lower body intensifying during courtship. Females: smaller (7-8cm), deeper-bodied (more rotund), same golden-yellow base color, BRILLIANT cherry-red to magenta belly (especially when breeding - becomes incandescent), purple/violet hue on gill plates, shorter rounded fins without filaments, overall warmer coloration. Both sexes show color polymorphisms: some populations have red males, others yellow males.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 5.0, max: 8.0, ideal: 6.5 },
    gh: { min: 2, max: 12 },
    kh: { min: 2, max: 8 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.80,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 30,
      territories: 1,
    },
    
    bioloadMultiplier: 1.1,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Kribensis appreciate planted tanks but need CAVES more than plants. Setup priority: 1) Multiple cave structures (clay pots, coconut shells, slate caves, driftwood tunnels), 2) Territorial boundaries created by hardscape and plants, 3) Dense planting on sides/back for security. Use robust, African-biotope plants: Anubias (all species - attach to wood/rocks), Bolbitis (African Water Fern), Java Fern, Vallisneria, Crinum species. Avoid delicate stem plants near caves - breeding pairs EXCAVATE vigorously, uprooting anything in their way. They dig pits, move substrate, and completely redecorate spawning areas. Plant roots need to be secured (attach epiphytes to hardscape, use root tabs for swords). Floating plants (Water Sprite, Amazon Frogbit) provide dim lighting that reduces stress.',
    hardscape: ['CAVES (ESSENTIAL): clay pots (horizontal, entrance 4-5cm), coconut shells, slate caves, PVC pipes (10-12cm diameter), driftwood tunnels', 'Smooth river stones (create territory divisions)', 'Malaysian Driftwood or Mopani wood (natural borders)', 'Leaf litter (oak, Indian Almond - mimics natural habitat)', 'Flat stones (spawning surfaces inside caves)'],
  },

  behavior: {
    tags: ['pair-bonding', 'territorial', 'semi-aggressive', 'parental-care'],
    minGroupSize: 2,
    description: 'Kribensis are fascinating dwarf cichlids famous for forming monogamous pairs (though polygyny occurs in wild) and exhibiting world-class parental care. Outside breeding, they\'re relatively peaceful and can work in community tanks with proper planning. Behavior shifts DRAMATICALLY when breeding: pairs become fiercely territorial, claiming 30-50cm radius around their cave and aggressively defending against ANY intruder regardless of size. The breeding ritual is mesmerizing - female displays her cherry-red belly with shimmering movements to entice male into cave, both excavate substrate creating "nursery," pair spawn on cave ceiling (female inverted, laying 40-200 adhesive eggs), then both parents guard eggs/fry with military precision. Division of labor: female stays inside cave tending eggs/fry while male patrols perimeter attacking anything that approaches. When fry emerge (7-10 days), both parents herd the cloud of babies around tank, pre-chewing food and spitting out tiny particles for fry to eat. Parental aggression peaks during first 2-3 weeks with fry - even 30cm Plecos get charged if they drift too close. Non-breeding pairs explore actively, forage substrate, interact peacefully with tankmates, and establish loose territories around preferred caves. They\'re intelligent and interactive - recognize owners, learn feeding times, and show personality.',
    
    compatibility: {
      goodMates: ['Peaceful schooling fish that occupy upper levels (Tetras: Congo, Diamond, Bleeding Heart)', 'Rainbowfish (Boesemani, Turquoise)', 'Peaceful barbs (Rosy, Cherry in groups 10+)', 'Corydoras (all species - occupy different zones)', 'Synodontis catfish (Upside-down, Multipunctatus)', 'Larger peaceful tetras', 'Peaceful gouramis (Pearl, Honey)', 'Other dwarf cichlids IF tank is large (150L+) with multiple territories', 'Loricariids (Bristlenose, Clown Pleco)', 'Peaceful Rainbowfish'],
      badMates: ['Aggressive cichlids (Convicts, Jack Dempseys, Oscars)', 'Territorial bottom-dwellers (other cave-spawning cichlids in <150L)', 'Fin-nippers (Tiger Barbs, Serpae Tetras)', 'Very small fish (Neon Tetras, Microrasboras - may eat fry or get bullied when breeding)', 'Aggressive catfish (large Synodontis, Pictus Cats)', 'Goldfish (temperature incompatibility)', 'Shrimp (eaten or harassed, especially when breeding)', 'Slow-moving long-finned fish (Angelfish - territory conflicts)'],
      notes: 'Kribensis compatibility is CONTEXT-DEPENDENT. Non-breeding pairs: peaceful, excellent community fish suitable for 80L+ tanks with proper tankmates. Breeding pairs: semi-aggressive territorial defenders that will charge ANY fish approaching their cave/fry. Success factors: 1) Tank size (120L+ for communities allows multiple territories), 2) Tankmate selection (fast swimmers that stay in upper levels work best), 3) Cave placement (position caves at opposite ends to create distinct territories), 4) Backup plan (have spare tank if aggression becomes unmanageable). Best community setup: single Kribensis pair + mid/upper level schooling fish (Congo Tetras, Rainbowfish) + Corydoras. Avoid multiple dwarf cichlid pairs in tanks <150L - territory conflicts inevitable.',
      
      rules: [
        {
          type: 'requires',
          condition: 'multiple caves (3-4 minimum)',
          reason: 'Kribensis are obligate cave spawners. Without caves, they become stressed, aggressive, and won\'t breed. Provide 3-4 caves even for single pair (they choose favorites and have backups).',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'breeding pairs become highly territorial',
          reason: 'Peaceful outside breeding, but guarding pairs will attack tankmates 3-5x their size. Aggression peaks during first 3 weeks with fry. Plan for 30-50cm defended territory radius around cave.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'sand or fine gravel substrate',
          reason: 'Kribensis excavate extensively - digging pits, moving substrate, creating trenches around caves. Coarse gravel prevents natural digging behavior and causes stress. Sand allows natural breeding behavior.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'other bottom-dwelling cichlids in small tanks',
          reason: 'Multiple cave-spawning dwarf cichlids (Apistogramma, other Pelvicachromis) in <150L = constant territory battles. Each pair needs 40-60cm territory. Large tanks (200L+) can house multiple pairs.',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'small fish (<3cm)',
          reason: 'Neon Tetras, Ember Tetras, and microrasboras may be eaten by Kribensis or bullied during breeding. Stick to mid-sized tankmates (5-8cm) that are too large to swallow but fast enough to escape.',
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
      intraspecific: 4,
      interspecific: 6,
      territorial: 9,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'pair',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'low',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Multiple caves (clay pots, coconut shells, slate) - ESSENTIAL for spawning',
      'Sand or fine gravel substrate (allows digging behavior)',
      'Stable, mature tank (6-8 weeks cycled minimum)',
      'Territorial planning (40-60cm territory per pair)',
      'Backup tank for fry grow-out or if aggression escalates',
    ],

    proTips: [
      "Cave selection is CRITICAL. Kribensis prefer horizontal caves with small entrances (4-5cm opening) positioned low in tank. Lay clay pots on their side with drainage hole as entrance. They want enclosed, dark, ceiling-spawning sites - not open spaces. Provide 3-4 caves even for single pair. They'll inspect all options and choose favorites. Rejected caves become 'vacation homes' or fry shelters.",
      "Watch for the 'cherry belly signal.' When female's belly turns incandescent cherry-red/magenta and she starts shimmering displays near caves, spawning is imminent (24-48 hours). At this point, feed heavily with protein foods (bloodworms, brine shrimp) to condition pair. Bright belly = peak fertility and readiness to spawn.",
      "Don't panic when they excavate. New keepers freak out when Kribensis dig massive pits and move substrate around caves. This is NORMAL and desired behavior! They're landscaping their nursery. Expect substrate removal, uprooted plants near caves, trenches, and complete territory redesign. This means they're comfortable and preparing to breed. Embrace the chaos.",
      "Dim lighting reduces aggression. Kribensis from shaded forest streams prefer subdued lighting. Use floating plants (Amazon Frogbit, Water Lettuce) or reduce light intensity to 50-60%. Dimmer tanks = more confident, less stressed fish. Bright lighting makes them skittish and MORE aggressive as they feel exposed.",
      "Separate fry at 4-6 weeks to prevent cannibalism. Once fry are 1.5-2cm and swimming independently, parents may prepare for next spawn. At this point, they sometimes turn on older fry (nature's way of forcing independence). Net out fry to grow-out tank. Also, female often becomes gravid again 2-3 weeks after first spawn while still caring for fry!",
      "Observe male color morphs - behavior differs! Some populations have red males (more aggressive, polygamous tendencies), others have yellow males (less aggressive, better pair-bonding). If buying juveniles, you can't predict morph. Red males are spectacular but may harass females more. Yellow males are calmer, gentler dads.",
    ],

    commonMistakes: [
      "No caves provided. This is the #1 Kribensis mistake. Without proper caves, they become stressed, won't breed, and become randomly aggressive as they search for suitable sites. Clay pots laid horizontally are perfect, cheap, and instantly solve the problem. Never keep Kribensis without caves - it's like keeping Bettas without surface access.",
      "Coarse gravel substrate. Kribensis are compulsive diggers, especially when breeding. Coarse gravel prevents their natural excavation behavior, causes frustration, and can injure their mouths as they attempt to move rocks. Sand or fine gravel (2-3mm) is mandatory. Watch them happily excavate bucket-loads of sand in hours.",
      "Underestimating breeding aggression. New keepers see 'peaceful dwarf cichlid' in descriptions and assume they're like Tetras. Nope. Breeding pairs become fierce territorial defenders. They'll charge 20cm Plecos, nip fins of Angels, and stress out entire tanks. Plan for this BEFORE breeding occurs. Have backup plans.",
      "Removing fry too early. Anxious keepers see fry and immediately want to separate them 'for safety.' DON'T. Parents provide incredible care - pre-chewing food, guarding from predators, teaching foraging. Fry with parents grow faster, healthier, and learn social behaviors. Only separate at 4-6 weeks when parents start preparing next spawn or if tankmates are predatory.",
      "Keeping multiple males in small tanks. Two male Kribensis in 80L = constant warfare. Males are territorial even without breeding. Either keep single pair or provide 150L+ with multiple caves at opposite ends. Crowding multiple males is recipe for beaten, stressed, fin-damaged fish.",
      "Ignoring water quality during breeding. Breeding pairs have increased bioload (heavy feeding + fry waste + disrupted substrate releasing detritus). Many keepers neglect water changes during breeding, causing nitrate spikes. INCREASE water changes to 30-40% weekly during breeding/fry rearing. Clean water = healthy fry growth and fewer fungal infections on eggs.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets', 'spirulina', 'bloodworms', 'brine-shrimp', 'daphnia', 'flakes'],
      supplements: ['blanched-zucchini'],
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
      notes: 'Weekly 25-30% water changes maintain stable conditions. Kribensis are hardy and tolerate wide parameter ranges but prefer consistency. During breeding/fry rearing, INCREASE to 30-40% weekly (higher bioload). Vacuum substrate carefully avoiding active caves/territories (wait until fry are removed). They tolerate slightly elevated nitrates (up to 40 ppm) but <20 ppm is ideal. Test weekly: ammonia and nitrite must be 0 ppm. Use dechlorinator and temperature-match new water. Kribensis handle parameters shifts better than most cichlids but sudden changes stress them.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'hole-in-head-disease', 'fungal-infections', 'fin-rot', 'bloat', 'parasites'],
    sensitivities: [
      'Sudden water parameter swings (though wide tolerance)',
      'High nitrates >40 ppm (though more tolerant than sensitive species)',
      'Poor diet lacking vegetable matter (causes bloat/constipation)',
      'Stress from lack of caves or territories',
      'Overcrowding (increases aggression and disease)',
      'Copper-based medications (use with caution)',
    ],
  },

  scientificContext: {
    wildHabitat: "Wild Pelvicachromis pulcher inhabit shallow (20-80cm depth), slow-moving to stagnant waters in coastal West Africa (Nigeria, Cameroon) within the Niger Delta, Cross River system, and adjacent coastal drainages. Their habitat ranges from soft, acidic freshwater forest streams (pH 5.0-6.5, <5° GH) far inland to slightly brackish coastal estuaries near river mouths (salinity 5-10 ppt). Substrates are predominantly soft - sand, silt, mud, thick leaf litter (5-15cm deep). Vegetation is dense: Anubias growing on rocks/wood, Bolbitis along stream margins, emergent plants (reeds, sedges), and overhanging riparian forest creating heavy shade. Water temperature 24-28°C year-round. Critical habitat feature: abundant cave structures - undercut banks, submerged root tangles, rock crevices, and holes excavated beneath aquatic plants. Water chemistry varies seasonally: during rainy season (April-October), flooding brings soft, acidic runoff (pH 5.5-6.0); dry season (November-March) sees water concentration, higher pH (6.5-7.5), and slight salinity intrusion in coastal areas. Kribensis form social groups (10-30 individuals) in non-breeding season, occupying shared territories. During breeding season, pairs claim and defend individual caves. They coexist with various characins, mormyrids, other dwarf cichlids, and catfish. Natural predators include larger cichlids (Hemichromis), snakeheads, and piscivorous birds.",
    sexualDimorphism: "Dramatic and easily identified in adults (6+ months). Males: larger overall (up to 10cm standard length), more elongated/streamlined body, dorsal fin more pointed with extended filaments especially on upper rays, caudal fin with upper lobe extending into pronounced filament, gold-ringed eyespots (ocelli) on dorsal fin more numerous and defined, lower body/belly pink-red but less intense than females, overall more muted coloration. Females: smaller (7-8cm), much deeper-bodied (rounder, fuller profile), BRILLIANT cherry-red to magenta belly especially when breeding (becomes incandescent - visible across room), purple-violet flush on gill plates, dorsal and caudal fins shorter and more rounded (no filaments), warmer overall coloration with more red/purple tones. During breeding, differences intensify: female's belly becomes SHOCKINGLY bright red (unmistakable fertility signal), male's fins extend further with breeding tubercles on anal fin. Juveniles (<6 months) are monomorphic - all appear female-like until sexual maturity. Best to purchase group of 6-8 juveniles and let them pair naturally.",
    variants: [
      'Wild type (standard golden-yellow with red belly)',
      'Red male morph (males with red-orange body instead of yellow)',
      'Yellow male morph (males with bright yellow body)',
      'Regional color variations (Nigerian populations vs. Cameroonian)',
      'No true captive-bred color morphs exist - variations are natural polymorphisms',
      'Albino Kribensis (extremely rare, not commercially available)',
    ],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'beginner',
    trigger: 'Kribensis are among the EASIEST cichlids to breed - often spawn without any special effort. Natural pairing: Purchase 6-8 juveniles (3-4 months old), raise together, let them pair naturally at 6-8 months. Pairs form through mutual mate choice - you\'ll notice two fish spending time together, displaying, and defending shared territory. Breeding triggers: stable water conditions (weekly water changes), protein-rich diet (bloodworms, brine shrimp 3-4x weekly), suitable cave (horizontal clay pot, 4-5cm entrance), warm temperature (26-27°C). Female signals readiness by developing brilliant cherry-red belly and performing shimmering displays near cave entrance. Male responds by entering cave, inspecting, and both begin excavating. Spawning occurs inside cave on ceiling - female inverts (upside-down), lays 40-200 adhesive cream-colored eggs in neat rows while male fertilizes. Entire spawn takes 2-4 hours. No special breeding tank needed - pairs spawn readily in community tanks.',
    fryCare: 'Post-spawn: Female stays in cave guarding eggs while male patrols territory perimeter. Eggs hatch in 2-3 days at 26-27°C - wrigglers remain attached to cave ceiling absorbing yolk sac. At 5-7 days, fry become free-swimming and emerge from cave as cloud of tiny babies (4-5mm). Both parents herd fry constantly - swimming together as tight school. Parents pre-chew food (pellets, flakes) and spit out tiny particles for fry - fascinating to watch! Fry also graze biofilm and algae. Supplement with: finely crushed flakes, powdered spirulina, liquid fry food, baby brine shrimp (Artemia nauplii) at 7-10 days, microworms. Feed fry 3-4x daily. Parents care for fry 21-28 days total. At 3-4 weeks, fry are 1-1.5cm and parents may prepare for next spawn (female shows red belly again). Separate fry to 40-60L grow-out tank at this point. Expect 50-150 surviving fry from 100-200 eggs with parental care. Fry grow quickly - 3-4cm at 3 months, sexual maturity at 6-8 months.',
    notes: 'Breeding Kribensis is INCREDIBLY EASY - perfect first cichlid breeding experience. They spawn every 4-6 weeks when well-fed, require no special setup (just caves), exhibit amazing parental care (both parents involved), and fry are hardy. Challenges are minimal: 1) Increased territorial aggression during breeding (plan community tank carefully), 2) What to do with 100+ fry every 6 weeks (need grow-out space or LFS willing to buy juveniles), 3) Preventing parents from eating older fry when preparing next spawn (separate at 4 weeks). Success rate approaches 95% - if you have male + female + cave + decent water quality, they WILL breed. Commercial breeding is extensive but home breeding remains popular because it\'s so rewarding. Watching both parents care for fry is one of aquarium keeping\'s greatest joys. Many breeders keep Kribensis specifically for this behavior. Single pairs can produce 500-1000+ offspring per year. Selective breeding over decades created various color strains and improved captive hardiness.',
  },
  
  experienceData: {
    successRate: 0.90,
    survivalRate: 0.85,
    
    commonFailures: [
      { issue: 'no-breeding-occurs', cause: 'lack-of-caves-or-unsuitable-caves', frequency: 0.25 },
      { issue: 'excessive-aggression-to-tankmates', cause: 'breeding-pair-in-small-tank-or-poor-tankmate-selection', frequency: 0.20 },
      { issue: 'egg-fungus', cause: 'poor-water-quality-or-infertile-eggs', frequency: 0.15 },
      { issue: 'parents-eat-fry', cause: 'stress-disturbance-or-poor-nutrition', frequency: 0.15 },
      { issue: 'territorial-fights-between-males', cause: 'multiple-males-in-small-tank', frequency: 0.12 },
      { issue: 'ich-outbreak', cause: 'stress-from-poor-acclimation', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};
