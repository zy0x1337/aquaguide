import type { Disease } from '../../types/disease';

export const ich: Disease = {
  id: 'disease-001',
  slug: 'ich',
  name: 'Ichthyophthirius multifiliis (Ich)',
  aliases: ['White Spot Disease', 'Pünktchenkrankheit'],
  type: 'parasitic',
  severity: 'high', // Tödlich ohne Behandlung, aber heilbar
  isContagious: true,
  isIncurable: false,

  symptoms: [
    'Small white cysts resembling salt grains on body and fins',
    'Fish rubbing against hardscape (flashing)',
    'Clamped fins',
    'Labored breathing (if gills are infected)'
  ],

  treatment: {
    steps: [
      'Slowly raise temperature to 30°C (86°F) to speed up parasite life cycle (check fish tolerance first!).',
      'Perform gravel vacuuming daily to remove fallen cysts.',
      'Dose medication containing Malachite Green and/or Formalin.',
      'Continue treatment for 3 days AFTER spots disappear.'
    ],
    medication: ['Malachite Green', 'Formalin', 'Copper (caution with invertebrates)'],
    prognosis: 'Excellent if caught early. Fatal if untreated.'
  },

  prevention: [
    'Quarantine all new fish for 2 weeks.',
    'Avoid sudden temperature drops.'
  ]
};
