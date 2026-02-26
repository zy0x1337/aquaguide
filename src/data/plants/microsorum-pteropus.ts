import type { Plant } from '../../types/plant';

export const microsorumPteropus: Plant = {
  id: 'plant-java-fern',
  slug: 'microsorum-pteropus',

  imageUrl: '/images/plants/microsorum-pteropus.jpg',

  imageCredit: {
    photographer: 'TsunamiCarlos',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Microsorum_pteropus.jpg',
    license: 'Public Domain',
    licenseUrl: 'https://en.wikipedia.org/wiki/Public_domain'
  },

  difficulty: 'easy',

  funFact: 'Java Farn schmeckt Fischen bitter – selbst pflanzenfressende Arten wie Goldfish meiden ihn meistens. Das macht ihn zur perfekten Wahl für Tanks mit "Pflanzenfressern".',

  taxonomy: {
    scientificName: 'Microsorum pteropus',
    commonName: 'Java Fern',
    family: 'Polypodiaceae',
    origin: 'Southeast Asia',
    nativeRegion: 'Flüsse und Bäche in Malaysia, Thailand, Indonesien und den Philippinen; wächst auf Steinen und Treibholz in schnell fließendem, sauerstoffreichem Wasser'
  },

  specs: {
    type: 'fern',
    heightCM: { min: 15, max: 30 },
    light: 'low',
    co2: 'low',
    growthRate: 'slow',
    placement: ['midground', 'background', 'epiphyte']
  },

  parameters: {
    tempC: { min: 20, max: 28, ideal: 24 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    kh: { min: 2, max: 15 },
    gh: { min: 3, max: 18 },
    flow: 'medium',
    photoperiodHours: { min: 6, max: 10 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Rhizomteilung oder Adventivpflänzchen. Baby-Pflanzen wachsen auf den Spitzen reifer Blätter – einfach abwarten bis sie 2–3 cm groß sind, dann abtrennen.',
    notes: 'Das Rhizom NICHT eingraben! An Holz oder Stein mit Superkleber oder Faden befestigen. Verträgt sehr wenig Licht.',
    trimming: 'Alte oder von Adventivpflanzen besetzte Blätter am Stiel abschneiden. Die kleinen Jungpflanzen können abgelöst und neu befestigt werden.',
    senescenceNotes: 'Ältere Blätter dunkel bis schwarzbraun – solange das Rhizom grün und fest ist, ist die Pflanze gesund.'
  },

  nutrients: {
    nitrogen: 'low',
    phosphate: 'low',
    potassium: 'low',
    iron: 'low'
  },

  variants: ['Microsorum pteropus (Standard)', 'Microsorum pteropus \'Windelov\'', 'Microsorum pteropus \'Trident\'', 'Microsorum pteropus \'Narrow Leaf\'', 'Microsorum pteropus \'Needle Leaf\''],

  commonProblems: [
    {
      title: 'Braune Blattspitzen',
      desc: 'Blattspitzen werden braun und trocken.',
      solution: 'Betroffene Blätter stutzen. Auf übermäßige Düngersalze prüfen. Wasserqualität durch regelmäßige Wasserwechsel verbessern.'
    },
    {
      title: 'Kein Rhizom-Wachstum',
      desc: 'Rhizom bleibt klein, keine neuen Blätter.',
      solution: 'Spurenelemente erhöhen. Sanfte Wasserbewegung sorgen. Sicherstellen, dass das Rhizom das Substrat nicht berührt.'
    },
    {
      title: 'Einrissige Blätter',
      desc: 'Blätter entwickeln lange Risse von der Spitze zur Basis.',
      solution: 'Normal für Java Farn. Starke Strömung verursacht Risse. Strömung reduzieren oder Pflanze in geschützter Position platzieren.'
    }
  ],

  proTips: [
    'Adventivpflänzchen auf den Blättern einfach wachsen lassen – die Pflanze vermehrt sich von selbst.',
    'Enge Kombination mit Anubias auf Treibholz erzeugt einen natürlichen "Baumstamm"-Effekt.',
    'Unter stärkerem Licht (low-medium) wachsen die Blätter größer und satter grün.'
  ],

  commonMistakes: [
    'Rhizom eingraben – es fault innerhalb weniger Wochen.',
    'Zu starke Strömung direkt auf die Pflanze – reißt Blätter ein.',
    'Adventivpflanzen zu früh entfernen – erst bei 2–3 cm Größe ablösen.'
  ],

  aquascapeContext: {
    styles: ['nature_aquarium', 'biotope', 'jungle', 'low_tech'],
    roleInTank: 'Midground-Epiphyt auf Treibholz oder Steinen. Gibt dem Scape Textur und Tiefe durch die gefiederten Blätter.',
    companionFish: ['Neon Tetra', 'Corydoras', 'Otocinclus', 'Cherry Shrimp', 'Amano Shrimp', 'Betta', 'Goldfish (toleriert)'],
    incompatibleFish: ['Große pflanzenfressende Cichliden', 'Buenos Aires Tetra (potentiell)'],
    substrateRecommendations: ['Kies (2–3 mm)', 'Sand', 'Nackte Steine und Treibholz – kein Substrat nötig']
  },

  relatedPlants: [
    'anubias-barteri-var-nana',
    'microsorum-pteropus-windelov',
    'bucephalandra-sp-green'
  ],

  description: 'Eine der beliebtesten Aquarienpflanzen weltweit. Java Farn ist außerordentlich robust, gedeiht unter wenig Licht ohne CO₂, und Fische fressen ihn wegen des bitteren Geschmacks selten. Die einzigartigen gewellten Blätter erzeugen natürliche Bewegung und Textur. Jungpflanzen wachsen auf den Blattspitzen. Perfekter Epiphyt für Treibholz und Steine.'
};
