import type { Species } from '../../types/species';

export const bumblebeeGoby: Species = {
  id: 'bumblebee-goby',
  slug: 'bumblebee-goby',
  imageUrl: '/images/species/bumblebee-goby.jpg',
  funFact:
    'Bumblebee gobies are cave spawners: the female sticks eggs to the cave ceiling, and the male guards and fans them until they hatch.',

  imageCredit: {
    photographer: 'theaquariumkeeper on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/hummel-fisch-hummel-grundel-7793718/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  taxonomy: {
    scientificName: 'Brachygobius spp.',
    commonName: 'Bumblebee Goby',
    family: 'Gobiidae',
    origin: 'South & Southeast Asia (coastal lowlands)',
    region: 'Asia',
    biotope: 'Mangrove swamps, estuaries, tidal streams; mud/sand with leaf litter and roots',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4,
    color: 'yellow base with bold black vertical bands',
  },

  environment: {
    type: 'brackish',
    minTankSizeLiters: 45, // 10 gal+; bigger is easier for feeding and stability
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 7.0, max: 8.5, ideal: 7.8 },
    flow: 'low',
    substrate: 'fine sand/silt with leaf litter; many caves and crevices',
  },

  habitat: {
    planting: 'medium',
    plantingNotes:
      'Provide dense cover and shaded zones (roots/leaf litter look). If you run brackish, choose salt-tolerant plants; in pure freshwater more plant options work.',
    hardscape: [
      'Smooth stones',
      'Driftwood tangles / mangrove-style roots',
      'Small caves (snail shells, stacked rocks, short PVC pieces)',
      'Leaf litter (catappa/oak) for microfauna and cover',
    ],
  },

  behavior: {
    tags: ['bottom_dweller', 'territorial', 'shy', 'social', 'diurnal', 'colorful', 'nano', 'slow_eater'],
    minGroupSize: 6,
    description:
      'A tiny, perch-and-pounce micro-predator that spends most of its time on the bottom, hopping between caves and ambush points. They are much more confident and visible in groups, but still appreciate many line-of-sight breaks.',
    compatibility: {
      goodMates: [
        'Other Bumblebee Gobies (best choice; species group)',
        'Small, peaceful brackish fish that do not outcompete at feeding time (e.g. mollies in low-end brackish)',
        'Small snails',
        'Shrimp (large adults may be ignored; shrimplets/fry will be eaten)',
      ],
      badMates: [
        'Large or aggressive fish',
        'Fin-nippers',
        'Very fast/greedy feeders (they will starve)',
        'Dwarf shrimp colonies if you want high fry survival (shrimplets will be hunted)',
      ],
      notes:
        'Keep salinity consistent for life: either freshwater or low-end brackish, but avoid switching back and forth (osmotic stress). Best results are usually in a species-focused tank where they get food reliably.',
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'low',
    specialRequirements: [
      'Food strategy: live/frozen microfoods (many ignore dry foods)',
      'Many caves and shaded cover',
      'Stable parameters; avoid salinity swings (if brackish)',
    ],
    proTips: [
      'Feed small portions 1–2× daily; target-feed with pipette/turkey baster so shy individuals eat.',
      'Core foods: Artemia, Daphnia, bloodworms (small), copepods/cyclops; frozen often works, dry foods often get ignored.',
      'Use fine sand and lots of hardscape micro-caves (snail shells work great).',
      'Run the tank mature (biofilm/microfauna help), and keep nitrates low with regular small water changes.',
    ],
    commonMistakes: [
      'Assuming they are “algae eaters” → they are micro-predators and can starve silently.',
      'Keeping only 1–2 → they stay hidden and stressed; groups behave far better.',
      'Community tank with fast feeders → chronic underfeeding.',
      'Changing from freshwater to brackish (or the reverse) after they are established → osmotic stress and losses.',
    ],
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['Ich', 'Bacterial infections', 'Internal wasting from chronic underfeeding'],
    sensitivities: ['Rapid parameter changes (especially salinity)', 'Poor water quality', 'Food competition'],
  },

  scientificContext: {
    wildHabitat:
      'Brachygobius are reported from lowland coastal systems (mangroves/estuaries/tidal streams), occurring in both fresh and slightly brackish conditions depending on locality.',
    sexualDimorphism:
      'Females tend to look fuller-bodied (especially when gravid); males may show more intense coloration and defend caves during spawning.',
    variants: [
      'Brachygobius doriae (often sold as “Bumblebee Goby”)',
      'Brachygobius xanthozonus/xanthozona complex (trade names vary; IDs are often mixed)',
    ],
    notes:
      'Trade identification is frequently inconsistent; many “bumblebee gobies” are sold under the wrong species name. Husbandry is similar across commonly traded forms.',
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'expert',
    trigger:
      'Excellent conditioning with live/frozen foods + stable (often low-end brackish) water + tight caves/shells to spawn in.',
    fryCare:
      'Male guards/fans the clutch. The main bottleneck is raising extremely tiny larvae, which need microscopic foods (infusoria/rotifers) before graduating to baby brine shrimp.',
    notes:
      'Spawning is achievable in a species tank, but larval rearing is the hard part; plan cultures of rotifers/infusoria ahead of time.',
  },
};
