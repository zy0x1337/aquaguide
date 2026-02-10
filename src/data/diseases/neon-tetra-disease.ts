import type { Disease } from '../../types/disease';

export const neonTetraDisease: Disease = {
  id: 'disease-003',
  slug: 'neon-tetra-disease',
  name: 'Neon Tetra Disease (NTD)',
  aliases: ['Pleistophora hyphessobryconis'],
  type: 'parasitic', // Microsporidian parasite
  severity: 'critical',
  isContagious: true,
  isIncurable: true,

  symptoms: [
    'Loss of coloration (pale patch usually starting near dorsal fin)',
    'Lumps or cysts on the body',
    'Curved spine or irregular swimming',
    'Separation from the shoal',
    'Extreme weight loss (wasting)'
  ],

  treatment: {
    steps: [
      'There is NO cure.',
      'Immediately remove the infected fish to a quarantine tank or euthanize humanely (Clove Oil).',
      'Do NOT allow other fish to eat the carcass (this spreads the spores).',
      'Maintain high water quality to protect remaining fish.'
    ],
    prognosis: 'Fatal (100%). Focus must be on saving the rest of the tank.'
  },

  prevention: [
    'Purchase from reputable sources.',
    'Strict quarantine.',
    'Remove sick fish immediately upon first symptoms.'
  ]
};
