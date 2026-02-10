import type { Disease } from '../../types/disease';

export const finRot: Disease = {
  id: 'disease-002',
  slug: 'fin-rot',
  name: 'Fin Rot',
  aliases: ['Flossenfäule', 'Tail Rot'],
  type: 'bacterial', // Kann auch pilzlich sein, meist aber bakteriell sekundär
  severity: 'moderate',
  isContagious: false, // Meistens umweltbedingt, aber Bakterien sind im Wasser
  isIncurable: false,

  symptoms: [
    'Ragged or fraying edges of fins',
    'White, milky, or red edges on the fins',
    'Parts of the fin falling off',
    'Inflammation at the base of the fin (severe)'
  ],

  treatment: {
    steps: [
      'Check water parameters immediately (Ammonia/Nitrite).',
      'Perform a 50% water change.',
      'Add aquarium salt (if species tolerates it) to promote slime coat.',
      'Use antibacterial medication for severe cases.'
    ],
    medication: ['Erythromycin', 'Methylene Blue', 'Aquarium Salt'],
    prognosis: 'Good. Fins usually grow back, though sometimes with clear/curled edges.'
  },

  prevention: [
    'Maintain pristine water quality (0 Ammonia, 0 Nitrite).',
    'Avoid fin-nipping tank mates.',
    'Prevent physical injury from sharp decor.'
  ]
};
