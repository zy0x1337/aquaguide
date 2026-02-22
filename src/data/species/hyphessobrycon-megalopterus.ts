import type { Species } from '../../types/species';

export const hyphessobryconMegalopterus: Species = {
  id: 'hyphessobrycon-001',
  slug: 'hyphessobrycon-megalopterus',
  imageUrl: '/images/species/hyphessobrycon-megalopterus.jpg',
  funFact: "Black Phantom Tetras are peaceful showoffs! Males perform elaborate courtship displays where they spread their huge dorsal fins like black sails and 'dance' in circles around females or rival males. During these displays, their entire body darkens from silvery-gray to jet black - it's like watching them put on a tuxedo in real-time! This color change happens in seconds and is controlled by specialized pigment cells called chromatophores. Despite looking intimidating when displaying, they never actually fight - it's all bluff and show. Think of them as the peacocks of the tetra world: all drama, zero violence.",

  taxonomy: {
    scientificName: 'Hyphessobrycon megalopterus',
    commonName: 'Black Phantom Tetra',
    family: 'Characidae',
    origin: 'Bolivia and Brazil (Upper Rio Madeira, Rio Guaporé, Rio Paraguay, Pantanal wetlands)',
    region: 'South America',
    biotope: 'Still and slow-moving tributaries, backwaters, ponds, and small lakes with crystal-clear water, dense marginal vegetation (Echinodorus, Bacopa, Ludwigia), submerged roots, and sandy substrates. Found in Pantanal wetlands with extremely high plant diversity (280+ aquatic macrophyte species)',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4.5,
    color: 'Striking sexual dimorphism. Males: silvery-gray body with prominent black shoulder patch behind gill plate, smaller black spot on caudal peduncle, enormous black dorsal and anal fins with white leading edges ("phantom" appearance), reddish pelvic fins. During courtship/display, entire body darkens to charcoal-black. Females: warmer beige-brown body, same shoulder patch but less defined, reddish-orange anal and pelvic fins, smaller rounded dorsal fin, overall softer coloration. Both sexes have semi-transparent body with visible backbone/organs. Eye has brilliant red upper half.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    gh: { min: 2, max: 15 },
    kh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.7,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Black Phantom Tetras THRIVE in heavily planted tanks that mimic their natural Pantanal habitat. Use South American plants: Amazon Swords (Echinodorus), Bacopa species, Ludwigia, Cabomba, Water Sprite. Create dense planting on sides and back with open swimming space in center/front. Floating plants (Salvinia, Amazon Frogbit, Water Lettuce) are ESSENTIAL - they diffuse light creating the dim, tannin-stained environment these fish prefer. Without subdued lighting, they become washed-out and shy. Add fine-leaved plants (Cabomba, Myriophyllum) for spawning sites. Avoid sparse, brightly-lit tanks - they stress easily and lose their dramatic black coloration.',
    hardscape: ['Driftwood (Mopani, Spiderwood - essential for tannins)', 'Smooth river stones', 'Indian Almond Leaves (recreates blackwater)', 'Leaf litter (oak, beech, catappa)', 'Twisted roots creating caves'],
  },

  behavior: {
    tags: ['schooler', 'peaceful', 'active'],
    minGroupSize: 8,
    description: 'Black Phantom Tetras are peaceful, highly social schooling fish that should ALWAYS be kept in groups of 8-12+ individuals. In proper groups, they display fascinating natural behaviors: males constantly perform courtship displays (spreading fins, darkening color, circling), establish loose hierarchies through non-contact "sparring" (parallel swimming with fins flared), and create stunning visual effects when the entire school moves in synchronized patterns. They\'re active swimmers occupying mid-water column, constantly exploring and foraging. Unlike aggressive fish, their displays are purely ritualistic - contact is extremely rare and injuries virtually never occur. Females observe male displays and occasionally join in gentle chasing. In small groups (<6), they become timid, pale, hide constantly, and rarely display. Proper group size unlocks their personality - you\'ll see constant activity, vibrant coloration, and males showing off every few minutes. They\'re most active during dawn/dusk (crepuscular tendency) but remain visible throughout the day in dimly-lit tanks.',
    
    compatibility: {
      goodMates: ['Other peaceful tetras (Ember, Neon, Cardinal, Rummy-nose)', 'Hatchetfish', 'Pencilfish', 'Corydoras (all species)', 'Small Loricariids (Otocinclus, small Ancistrus)', 'Peaceful Rasboras', 'Small Danios', 'Apistogramma dwarf cichlids', 'German Blue Rams', 'Discus (if water parameters match)', 'Freshwater shrimp (Amano, Cherry, Crystal)', 'Snails (all types)'],
      badMates: ['Aggressive fish (barbs that nip fins)', 'Large cichlids (Oscars, Jack Dempseys)', 'Angelfish (may eat small tetras)', 'Bettas (sometimes chase/stress tetras)', 'Fast, boisterous fish (Giant Danios)', 'Goldfish (different temperature/pH needs)'],
      notes: 'Black Phantom Tetras are model community fish - peaceful, non-aggressive, and compatible with 95% of similarly-sized peaceful species. They work perfectly in South American biotopes (with Corydoras, Apistogramma, other tetras) or general community tanks. Key compatibility factor: tank size. In 80L minimum, they have space to school without bothering tankmates. Avoid very small tanks (<60L) where any fish becomes territorial. They ignore shrimp (too small to eat) and coexist beautifully with bottom-dwellers since they occupy mid-water. Their only "aggression" is toward each other during displays, which is harmless posturing.',
      
      rules: [
        {
          type: 'requires',
          condition: 'school of 8-12+ individuals',
          reason: 'Tetras are obligate schooling fish. Groups <6 cause chronic stress, faded colors, hiding, and shortened lifespan. Minimum 8, ideal 12+ for natural behavior and confident swimming.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'subdued lighting with floating plants',
          reason: 'Black Phantom Tetras come from tannin-stained blackwater habitats. Bright lighting causes stress, washed-out colors, and constant hiding. Floating plants diffuse light creating security.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'fin-nipping species',
          reason: 'Tiger Barbs, Serpae Tetras, some Rainbowfish will shred the males\' large dorsal/anal fins. Fin damage causes stress, infections, and ruins their display behavior.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'very large fish',
          reason: 'Adult Angelfish (12+ cm), large Gouramis, or Oscars may view 4cm tetras as food. Only keep with fish under 8-10cm or proven peaceful larger species like Discus.',
          severity: 'medium',
        },
        {
          type: 'requires',
          condition: 'stable water parameters',
          reason: 'While adaptable, sudden pH or temperature swings stress them. Maintain consistent conditions and acclimate slowly (drip method) when introducing new fish.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '12-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 0,
      territorial: 1,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
      maxMalesPerTank: 999,
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
      'School of 8-12+ individuals (minimum 8, never keep fewer)',
      'Heavily planted tank with floating plants for subdued lighting',
      'Soft to moderately hard water (GH 2-15°)',
      'Tannin-stained water (Indian Almond Leaves, driftwood) for best coloration',
      'Stable, mature tank (minimum 6-8 weeks cycled)',
    ],

    proTips: [
      "Blackwater conditions unlock their true colors. Add 2-3 Indian Almond Leaves or Alder Cones to tank. Water will turn amber/tea-colored (this is GOOD - mimics natural habitat). Tannins boost immune system, reduce stress, and intensify the males' jet-black display coloration. Replace leaves monthly as they decompose.",
      "Dim lighting = confident fish. Black Phantom Tetras naturally live under heavy canopy cover in tannin-stained water (visibility 2-3 meters). Bright aquarium lights make them timid. Use 50-70% of your light's capacity or add dense floating plants (Salvinia, Frogbit). You'll see them venture out constantly instead of hiding in corners.",
      "Male-heavy groups create best displays. If purchasing 10 fish, aim for 6-7 males, 3-4 females. Males will compete for female attention with dramatic displays every few hours. Too many females and males don't bother showing off. Too many males is fine - they'll establish dominance hierarchy through gorgeous fin-spreading contests.",
      "Feed high-quality foods for intense black coloration. Cheap flake food produces washed-out gray fish. Use spirulina-enriched flakes, micro pellets, and frozen foods (bloodworms, daphnia, brine shrimp) 3x per week. Color-enhancing foods with astaxanthin boost the red in their fins and black in displays.",
      "Watch for 'phantom mode' behavior. When first introduced or after water changes, they sometimes go completely pale/transparent (hence 'phantom' name). This is temporary stress response. Within 30-60 minutes in stable conditions with schoolmates, color returns. If pale for days, check water parameters.",
      "Spawning mops encourage breeding. Even in community tanks, pairs will spawn if conditions are right. Add yarn spawning mops or dense fine-leaved plants (Cabomba, Java Moss clumps). You might see fry appear in heavily planted tanks without dedicated breeding setup.",
    ],

    commonMistakes: [
      "Keeping them in groups <6. This is the #1 Black Phantom Tetra mistake. Small groups cause chronic stress - they hide constantly, colors fade to pale gray, and lifespan shortens. They're schooling fish that feel safe and confident ONLY in groups of 8+. Never buy 2-3 'to try them out.'",
      "Bright, sterile tanks. Beginners often keep them in brightly-lit tanks with minimal planting and white substrate. These fish come from dim, densely vegetated blackwater habitats. Bright light = stressed, pale, hiding fish. Add floating plants, use dark substrate, and reduce lighting intensity.",
      "Mixed with fin-nippers. Tiger Barbs are the classic mistake - they shred the males' beautiful long fins within days. Fin damage causes stress, infections, and the males stop displaying. Choose peaceful tankmates only (Corydoras, other small tetras, Rasboras).",
      "Inadequate tank size. Sometimes sold as '60L community fish.' While they're small (4.5cm), they need swimming space for schooling behavior. 60L works for 6-8 fish but feels cramped. 80-100L minimum allows proper schooling, territories for multiple males, and room for tankmates.",
      "Neglecting water quality. Black Phantom Tetras are hardy but NOT bulletproof. Beginners sometimes skip water changes in 'low-maintenance' tetra tanks. Nitrate buildup (>40 ppm) causes faded colors, lethargy, and disease susceptibility. Weekly 25-30% water changes are non-negotiable.",
      "Forgetting they're omnivores. Flake-food-only diets produce undersized, pale fish. In nature they eat insects, larvae, algae, and plant matter. Vary diet with frozen bloodworms, brine shrimp, spirulina flakes, and occasional blanched vegetables (zucchini, spinach). Dietary variety = vibrant colors and active behavior.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['micro-pellets', 'flakes', 'spirulina', 'bloodworms', 'brine-shrimp'],
      supplements: ['daphnia', 'cyclops'],
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
      notes: 'Weekly 25-30% water changes maintain pristine conditions. Black Phantom Tetras are sensitive to nitrate accumulation (keep <20 ppm, ideally <10 ppm). Vacuum substrate lightly to remove uneaten food and waste without destroying beneficial bacteria. Use dechlorinator and temperature-match new water (sudden temp changes stress them). Test water weekly: ammonia and nitrite must stay 0 ppm, nitrate <20 ppm. In heavily planted tanks, nitrates naturally stay low and water changes can be 20% biweekly.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'neon-tetra-disease', 'fin-rot', 'columnaris', 'parasites'],
    sensitivities: [
      'Bright lighting (causes chronic stress)',
      'Nitrate >20 ppm (lethargy, faded colors)',
      'Sudden water parameter changes',
      'Small group sizes (stress from lack of schoolmates)',
      'Copper-based medications (toxic to tetras)',
      'Strong water flow (exhausts them)',
    ],
  },

  scientificContext: {
    wildHabitat: "Wild Hyphessobrycon megalopterus inhabit the upper Paraguay and Madeira river basins in Bolivia and western Brazil, with highest populations in the Pantanal - one of the world's largest tropical wetlands (140,000+ square km). They're found in still and sluggish tributaries, backwaters, oxbow lakes, and small ponds with crystal-clear water (visibility 3-5 meters in dry season). Water is soft (GH 2-6°), acidic (pH 5.5-6.5), stained amber-brown by tannins from decaying vegetation. Temperature ranges 22-28°C seasonally. The Pantanal is exceptionally rich in aquatic plants - over 280 macrophyte species including Echinodorus (Amazon Swords), Bacopa, Ludwigia, Eleocharis, and extensive Salvinia mats covering surface. Black Phantom Tetras form large aggregations (50-100+ individuals) around marginal vegetation and submerged tree roots, feeding on fallen insects, insect larvae, microcrustaceans (daphnia, copepods), filamentous algae, and small amounts of plant matter. During wet season (November-March), waters rise 3-5 meters flooding forests and grasslands - fish disperse into newly flooded areas with abundant food. Dry season (May-September) concentrates them in permanent lagoons and river channels. They coexist with numerous other characins including Serpae Tetras (H. eques), Bleeding Heart Tetras (H. erythrostigma), and various Corydoras species.",
    sexualDimorphism: "Dramatic and easy to identify in adults (6+ months). Males: larger overall (4.5cm vs 4cm), massively elongated dorsal fin (nearly tall as body depth) with pointed extension, elongated anal fin with white leading edge creating 'phantom' appearance, slimmer body, more intense black shoulder patch, capable of darkening entire body to charcoal-black during displays, red-orange pelvic fins. Females: smaller, much shorter rounded dorsal fin (1/2 size of male's), shorter rounded anal fin with orange-red coloration, fuller rounder body especially when gravid (carrying eggs - visible as yellowish mass through semi-transparent body), warmer beige-brown base color instead of silvery-gray, less defined shoulder patch. Juveniles (<6 months) are difficult to sex - all look like females until males develop elongated fins at maturity. Best to purchase group of 10-12 juveniles and let them mature together (takes 4-6 months).",
    variants: [
      'Wild type (standard black/silver with red fins)',
      'No captive-bred color morphs exist',
      'Red Phantom Tetra (Hyphessobrycon sweglesi) is separate species, not variant',
      'Megalamphodus megalopterus is junior synonym (old genus name)',
    ],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Black Phantom Tetras breed readily in proper conditions. Setup: 40L breeding tank, bare bottom or marbles (prevents egg eating), spawning mop or thick Java Moss clump, very soft water (GH 1-3°, pH 5.5-6.0 via peat or tannins), temperature 26-27°C, dim lighting or sides covered. Condition pair separately for 2 weeks on high-protein foods (bloodworms, brine shrimp, daphnia) 2-3x daily - female should become noticeably plump with eggs. Introduce pair in evening. Spawning occurs at dawn - male darkens to jet black, circles female performing displays, pair swims side-by-side into plants releasing 200-400 eggs and milt. Eggs are tiny (0.8-1mm), transparent, adhesive. Remove parents immediately after spawning (they eat eggs voraciously if given chance).',
    fryCare: 'Eggs hatch in 24-36 hours at 26°C. Fry are microscopic (2mm) and photophobic (light-sensitive) - keep tank dark or cover sides with paper/cloth. Fry absorb yolk sac for 3-4 days, then become free-swimming. First food: infusoria or liquid fry food for 5-7 days (they\'re too small for baby brine shrimp initially). At day 7-10, introduce freshly-hatched baby brine shrimp (Artemia nauplii) - fry grow rapidly on this. Feed 4-5x daily in small amounts. At 3-4 weeks, introduce finely crushed flakes and micro pellets. Fry are delicate - pristine water quality is CRITICAL. Perform daily 10-20% water changes with aged, temperature-matched water. Use sponge filter (won\'t suck up fry). Dim lighting for first 2 weeks, then gradually increase. Fry develop adult coloration at 8-12 weeks, sexual maturity at 6-8 months. Expect 50-150 fry survival from 200-400 eggs with good care.',
    notes: 'Breeding Black Phantom Tetras is moderately difficult but very achievable for intermediate aquarists. Main challenges: obtaining truly soft water (RO or distilled water remineralized to GH 1-3°), removing parents quickly post-spawn (they\'re aggressive egg eaters), and raising microscopic fry (requires infusoria/liquid fry food first week). Successes: they spawn readily (often spawn in community tanks but eggs/fry get eaten), produce large spawns (200-400 eggs), and fry grow quickly on baby brine shrimp. Much easier than many tetras (Cardinals, Neons require extremely specific water chemistry). Commercial breeding occurs but most trade specimens are captive-bred in Asia/Europe. Rewarding species for breeders wanting to try characin breeding without extreme difficulty.',
  },
  
  experienceData: {
    successRate: 0.88,
    survivalRate: 0.82,
    
    commonFailures: [
      { issue: 'faded-colors-hiding', cause: 'small-group-size-or-bright-lighting', frequency: 0.30 },
      { issue: 'ich-outbreak', cause: 'stress-from-poor-acclimation', frequency: 0.25 },
      { issue: 'neon-tetra-disease', cause: 'infected-specimens-or-stress', frequency: 0.15 },
      { issue: 'stunted-growth', cause: 'poor-diet-flakes-only', frequency: 0.12 },
      { issue: 'fin-damage', cause: 'aggressive-tankmates-fin-nippers', frequency: 0.10 },
      { issue: 'premature-death', cause: 'high-nitrates-or-unstable-parameters', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 150, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};
