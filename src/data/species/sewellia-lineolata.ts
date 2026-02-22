import type { Species } from '../../types/species';

export const sewelliaLineolata: Species = {
  id: 'sewellia-001',
  slug: 'sewellia-lineolata',
  imageUrl: '/images/species/sewellia-lineolata.jpg',
  funFact: "Sewellia lineolata are living suction cups! Their pectoral and pelvic fins have evolved into a powerful disc that creates negative pressure, allowing them to stick to rocks and glass even in torrential rapids. They can withstand water flow speeds of up to 2 meters per second - that's like holding onto a surface in a category 5 hurricane! Watch them 'walk' across your aquarium glass using their fins like little legs. In the wild, they cling to boulders in mountain streams so fast that standing in them would knock you off your feet.",

  taxonomy: {
    scientificName: 'Sewellia lineolata',
    commonName: 'Reticulated Hillstream Loach',
    family: 'Gastromyzontidae',
    origin: 'Vietnam (Thua Thien-Hue, Quang Nam, Quang Ngai, Binh Dinh provinces)',
    region: 'Asia',
    biotope: 'Fast-flowing, highly oxygenated mountain streams and rivers with rocky substrates, strong current (1-2 m/s), cool water (18-24°C), and abundant biofilm growth on smooth stones',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 6,
    color: 'Stunning tiger-striped pattern with alternating golden-yellow and dark brown/black reticulated lines running horizontally across the flattened body. Ventral side is pale cream. Fins are transparent with dark spots and bands. Pattern intensity varies by mood and dominance (dominant individuals show darker, more contrasted markings). Under UV light, some specimens show subtle blue-green iridescence.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 150,
    tempC: { min: 18, max: 24, ideal: 20 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 6, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'high',
    substrate: 'smooth-river-stones',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 100,
      verticalCM: 30,
      territories: 6,
    },
    
    bioloadMultiplier: 0.8,
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'Sewellia tanks prioritize water flow and smooth surfaces over planting. Use ONLY robust plants that tolerate high current: Anubias (attached to rocks), Java Fern, Bolbitis (African Water Fern), Microsorum, and mosses (Java Moss, Christmas Moss on stones). Avoid stem plants and floating plants - they get shredded by powerheads and clog filters. Plants should be secured to hardscape, never planted in substrate (roots get uprooted by current). Focus is on creating biofilm-rich grazing surfaces, not lush planted tank. 70% hardscape, 20% open, 10% planted.',
    hardscape: ['Smooth river stones (fist-sized)', 'Flat slate pieces (vertical and horizontal)', 'River rocks (create caves and channels)', 'Mopani driftwood (minimal, for tannins)', 'No sharp edges - grind down rough spots'],
  },

  behavior: {
    tags: ['bottom_dweller', 'diurnal', 'social'],
    minGroupSize: 4,
    description: 'Sewellia are peaceful, active bottom-dwellers that spend 90% of their time grazing biofilm and algae from rocks and glass. They use their sucker-disc to "walk" across surfaces, scraping with rasping mouthparts. Despite their flat, stingray-like appearance, they\'re incredibly entertaining to watch. They\'re highly social and should always be kept in groups of 4-6+ (the more, the better). In groups, they establish loose hierarchies with dominant males claiming prime grazing spots, but aggression is limited to posturing and chasing - no serious injuries. They\'re diurnal (active during day) and love to bask in high-flow areas, flattening their bodies against stones. When startled, they can "jet" across the tank with surprising speed. They occasionally rest in caves or under ledges but spend most time actively foraging.',
    
    compatibility: {
      goodMates: ['Other hillstream loaches (Beaufortia, Pseudogastromyzon)', 'White Cloud Mountain Minnows', 'Danios (Celestial Pearl, Zebra)', 'Dwarf Rasboras', 'Otocinclus', 'Nerite Snails', 'Bamboo Shrimp (filter feeders)', 'Cherry Shrimp (if no predation risk)'],
      badMates: ['Slow-moving fish (exhausted by current)', 'Long-finned fish (fins get damaged)', 'Tropical fish requiring >24°C', 'Plecos and other bottom competitors', 'Crayfish (catch and eat hillstreams)', 'Large cichlids', 'Goldfish (temperature mismatch)'],
      notes: 'Sewellia need tankmates that tolerate HIGH FLOW and COOLER temperatures (18-22°C). This eliminates most tropical species. Ideal tankmates are other current-loving, cool-water fish from similar biotopes. Avoid ANY bottom-dwelling competitors like plecos, corydoras, or loaches from stagnant waters - they compete for grazing surfaces and food. Shrimp work well but need MANY hiding spots (hillstreams occasionally snack on molting shrimp). The tank setup (high flow, smooth rocks, sparse planting) naturally limits compatible species. Think "mountain stream community" not "planted community tank".',
      
      rules: [
        {
          type: 'requires',
          condition: 'group of 4-6+ individuals',
          reason: 'Sewellia are social and become stressed, shy, and inactive when kept alone or in pairs. Groups establish natural hierarchies and encourage natural foraging behavior.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'tropical fish requiring >24°C',
          reason: 'Sewellia are temperate/subtropical and become stressed above 24°C. Most tetras, bettas, angels, discus are incompatible due to temperature needs.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'slow-moving or long-finned fish',
          reason: 'High water flow (necessary for Sewellia) exhausts fancy goldfish, bettas, angelfish, and guppies. They\'ll hide constantly and develop fin damage.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'mature biofilm and algae growth',
          reason: 'Sewellia are obligate biofilm grazers. Never add them to newly cycled tanks. Wait 8-12 weeks for algae and microorganism colonization on rocks.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'shrimp',
          reason: 'Shrimp work in most cases, but hillstreams may prey on molting or baby shrimp. Provide dense moss coverage and monitor initially.',
          severity: 'low',
        },
      ],
      
      idealTankmates: {
        surface: 8-12,
        midwater: '6-10',
        bottom: '4-8',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 1,
      territorial: 4,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 999,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Very high water flow (turnover 15-20x tank volume per hour) via multiple powerheads or wavemakers',
      'Cool water (18-24°C) - chiller may be needed in warm climates',
      'Mature tank with established biofilm (minimum 8-12 weeks old)',
      'Pristine water quality (0 ammonia, 0 nitrite, <10 ppm nitrate)',
      'High dissolved oxygen (multiple airstones or surface agitation)',
      'Smooth river stones (no sharp edges)',
    ],

    proTips: [
      "Biofilm cultivation is EVERYTHING. Before adding Sewellia, run the tank for 8-12 weeks with lights on 10-12 hours daily. Add small amounts of food (algae wafers, blanched veggies) to decay and seed surfaces with microorganisms. You want visible biofilm coating rocks - this is their primary food source. Clean glass front only; leave other surfaces untouched.",
      "Multiple powerheads create dynamic flow. Use 2-4 powerheads on timers/controllers to create alternating current patterns. Sewellia LOVE playing in varying flow - they'll position themselves in strong jets, then rest in eddies behind rocks. Aim for 3000-4000 LPH total flow in 150L tank (20x turnover).",
      "Smooth stones are mandatory. Run your hand over EVERY rock before adding to tank. Even slightly rough surfaces can abrade their ventral disc and cause infections. Tumbled river rocks from landscaping suppliers work perfectly. Avoid lava rock, Texas holey rock, or any porous/sharp stone.",
      "Supplement grazing with gel foods. Prepare Repashy Soilent Green (algae-based gel food) and smear thin layers on rocks. They'll rasp it off over days. Also offer blanched zucchini, cucumber, or spinach weighted down with rocks. Remove after 24 hours to prevent fouling.",
      "Cool water = more oxygen. Sewellia come from cold mountain streams. In summer, tank temperatures above 24°C stress them and reduce dissolved oxygen. Use cooling fans, frozen water bottles, or invest in aquarium chiller if you live in warm climate. 20-22°C is ideal.",
      "Watch for glass-surfing. If Sewellia constantly swim up and down glass rather than grazing, something is wrong: insufficient biofilm (starvation), poor water quality, or inadequate current. They should spend 80%+ of time stuck to surfaces grazing, not swimming.",
    ],

    commonMistakes: [
      "Adding them to new tanks. Sewellia starve without mature biofilm. Adding them to freshly cycled tanks (4-6 weeks old) is a death sentence. They need 8-12 weeks minimum of algae/biofilm growth. This is #1 cause of hillstream loach death.",
      "Insufficient water flow. Standard canister filter (4-6x turnover) is NOWHERE near enough. Sewellia need 15-20x turnover via powerheads, wavemakers, or multiple filters. Without strong current, they become lethargic, stop grazing, and decline. Think 'river rapids' not 'lazy stream'.",
      "Keeping them alone or in pairs. Sewellia are social and show best behavior in groups of 6+. Solo individuals hide constantly and barely graze. Groups are active, confident, and display natural hierarchies. Always keep 4 minimum, ideally 6-8.",
      "Warm water (>24°C). Most aquarists keep tropical tanks at 26-28°C. This is too hot for Sewellia and causes stress, lethargy, reduced appetite, and shortened lifespan. They're temperate fish needing 18-22°C. Don't mix them with tropical species.",
      "Rough substrate or sharp rocks. Their ventral disc is delicate skin that can be abraded by coarse gravel, rough lava rock, or sharp edges. Abrasions lead to bacterial infections and death. Use ONLY smooth, tumbled stones. Test by rubbing your palm on every surface.",
      "Overfeeding algae wafers. Many keepers panic when hillstreams ignore commercial foods and overfeed. Trust the biofilm! If rocks are coated with brown/green film, they're eating constantly. Supplement sparingly with wafers/gel food - primary diet is grazing.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['biofilm', 'algae-wafers', 'aufwuchs'],
      supplements: ['blanched-zucchini', 'spirulina', 'flakes'],
      vegetarian: true,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: "sunday",
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Weekly 30-40% water changes with temperature-matched, dechlorinated water. DO NOT vacuum substrate - disturbs beneficial biofilm. Instead, use turkey baster to spot-clean visible debris between rocks. Clean filter media monthly in old tank water (never tap water - kills beneficial bacteria). Scrub front glass only - leave side/back glass for biofilm grazing. Check powerheads monthly for debris. Monitor nitrates (keep <10 ppm) and oxygen levels (use test kit). In summer, weekly temperature checks are critical.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'strong',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 8,
    commonDiseases: ['skinny-disease', 'bacterial-infections', 'ich', 'fungal-infections', 'starvation'],
    sensitivities: [
      'Warm water (>24°C causes stress and oxygen depletion)',
      'Stagnant water (suffocates without flow)',
      'Insufficient biofilm (starvation)',
      'Rough substrates (ventral disc abrasions)',
      'Nitrate >10 ppm',
      'Medications containing copper (toxic)',
      'Sudden temperature changes',
    ],
  },

  scientificContext: {
    wildHabitat: "Wild Sewellia lineolata inhabit fast-flowing mountain streams and rivers in central Vietnam at elevations of 50-300 meters. These are shallow (10-40cm deep), crystal-clear waters rushing over smooth boulders and bedrock at speeds of 1-2 meters per second. Water temperature ranges 16-22°C (coolest in winter, warmest in monsoon season). Dissolved oxygen is near saturation (8-10 mg/L) due to turbulent flow and cool temperature. Substrate is primarily smooth river stones (10-40cm diameter) covered in thick biofilm, diatoms, and green algae. During dry season (November-April), water levels drop and current slows slightly. Monsoon season (May-October) brings torrential rains that swell streams into raging rapids - Sewellia's sucker-disc allows them to remain attached during floods that would wash other fish away. They share their habitat with other hillstream specialists (Beaufortia, Homaloptera, Pseudogastromyzon) and midwater cyprinids.",
    sexualDimorphism: "Subtle dimorphism difficult to spot in juveniles. Adult males (18+ months): larger pectoral fins with thickened, roughened leading rays (tubercles) used for maintaining grip during spawning; slightly longer, more pointed head; brighter, higher-contrast striping; visible genital papilla (small pointed projection behind anus). Adult females: smaller overall; more rounded, fuller body when gravid; paler coloration; broader, more rounded head; visible egg mass (orange/yellow) through translucent belly when gravid; genital papilla is rounded, not pointed. During spawning, males develop pronounced tubercles on pectoral fin rays - these feel rough/sandpapery when gently touched (don't stress fish). Best to purchase group of 6-8 juveniles and let them mature together.",
    variants: [
      'Standard wild-type (golden-yellow with brown reticulation)',
      'High-contrast morph (deeper black markings)',
      'Pale morph (lighter yellow, less defined pattern)',
      'No captive-bred color morphs exist - all variants are natural variation',
    ],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Rarely bred in home aquariums. Most specimens are wild-caught. Breeding requires: cooling period (drop to 16-18°C for 6-8 weeks to simulate dry season), then gradual warming + increased feeding (simulates monsoon rains and food abundance), pH 6.5-7.0, extreme pristine water quality, group of 6-8 adults with multiple males/females. Spawning observed in early morning in strong current. Males display to females by flaring pectoral fins and vibrating.',
    fryCare: 'Eggs (1-1.5mm diameter, adhesive) are scattered among rocks in high-flow areas. No parental care - eggs and fry are on their own. Eggs hatch in 5-7 days at 20°C. Fry are 4-5mm long with fully formed sucker-disc. They immediately grasp substrate and begin grazing biofilm. Fry are nearly impossible to spot (camouflaged against stones). First food: biofilm, aufwuchs, green algae. Supplement with powdered spirulina and microscopic algae cultures. Fry grow extremely slowly - 6-8 months to reach 2cm, 18-24 months to reach adult size (6cm). Raising fry requires mature, aged tanks with extensive biofilm cultivation.',
    notes: 'Breeding Sewellia in captivity is extremely rare and considered expert-level. Commercial breeding is virtually non-existent - 99% of trade specimens are wild-caught from Vietnam. Major challenges: inducing spawning (requires seasonal temperature/photoperiod manipulation), locating microscopic eggs among rocks, providing adequate biofilm for fry, slow growth rate requiring 18-24 months to raise sellable fish. Most successful breeding reports come from large, outdoor concrete pools that simulate natural seasonal cycles. Not recommended for home aquarists unless you have multiple dedicated species tanks and years of hillstream experience.',
  },
  
  experienceData: {
    successRate: 0.60,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'starvation', cause: 'insufficient-biofilm-or-new-tank', frequency: 0.45 },
      { issue: 'heat-stress-death', cause: 'temperature-above-24C', frequency: 0.20 },
      { issue: 'lethargy-decline', cause: 'insufficient-water-flow', frequency: 0.15 },
      { issue: 'bacterial-infection', cause: 'rough-substrate-abrasions', frequency: 0.10 },
      { issue: 'oxygen-deprivation', cause: 'stagnant-water-or-high-temp', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 350, max: 800, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};
