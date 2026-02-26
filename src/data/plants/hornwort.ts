import type { Plant } from '../../types/plant';

export const hornwort: Plant = {
  id: 'plant-hornwort',
  slug: 'ceratophyllum-demersum',
  imageUrl: '/images/plants/ceratophyllum-demersum.jpg',

  imageCredit: {
    photographer: 'Laila_ on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/hornkraut-verwenden-aquarium-pflanze-3390274/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  difficulty: 'easy',

  funFact: 'Hornkraut hat gar keine echten Wurzeln – es ist eine der wenigen echten wurzellosen Wasserpflanzen der Welt. Nährstoffe nimmt es ausschließlich über die Blätter aus dem Wasser auf.',

  taxonomy: {
    scientificName: 'Ceratophyllum demersum',
    commonName: 'Hornwort',
    family: 'Ceratophyllaceae',
    origin: 'Cosmopolitan (worldwide in freshwater)',
    nativeRegion: 'Weltweit in Teichen, Seen und langsam fließenden Bächen verbreitet – eines der kosmopolitischsten Wasserpflanzen-Genera'
  },

  specs: {
    type: 'float',
    heightCM: { min: 20, max: 300 },
    light: 'medium',
    co2: 'low',
    growthRate: 'very fast',
    placement: ['background', 'floating']
  },

  parameters: {
    tempC: { min: 10, max: 30, ideal: 22 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    kh: { min: 2, max: 21 },
    gh: { min: 3, max: 21 },
    flow: 'low',
    photoperiodHours: { min: 8, max: 14 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Stecklinge. Stängel einfach brechen oder schneiden und liegenlassen – bewurzeln aus den Knoten innerhalb von Tagen.',
    notes: 'Frei schwimmend oder mit Stein/Bleigewicht beschweren. Hervorragender Nitrat-Schwamm. Bietet Schutz für Brut und Garnelen. Regelmäßig stutzen, um Überwuchs zu verhindern.',
    trimming: 'Wöchentlich 30–50 % der Masse entfernen. Überschüssige Stecklinge als Fischfutter verwenden oder weiterverschenken.',
    senescenceNotes: 'Untere Stängelbereiche werden braun und verlieren Blätter – regelmäßiges Kürzen von oben sorgt für immer frisches Wachstum.'
  },

  nutrients: {
    nitrogen: 'high',
    phosphate: 'high',
    potassium: 'medium',
    iron: 'low'
  },

  commonProblems: [
    {
      title: 'Überwuchs',
      desc: 'Rasantes Wachstum füllt den Tank, beschattet Bodenpflanzen, verbraucht alle Nährstoffe.',
      solution: 'Wöchentliches Stutzen. 50 % wöchentlich entfernen. Schnittreste als Fischfutter oder für neue Tanks verwenden.'
    },
    {
      title: 'Blattabfall',
      desc: 'Feine Blätter fallen ab, Pflanze sieht kahl aus.',
      solution: 'Normale Akklimatisation. Flüssigdünger zugeben. Mittleres Licht sicherstellen. Parameter stabilisieren.'
    },
    {
      title: 'Algenbewuchs',
      desc: 'Grüne Fadenalgen oder Bartalgen an den Stängeln.',
      solution: 'Bekämpft paradoxerweise Algen. Betroffene Teile stutzen. Licht reduzieren. Nitratquelle hinzufügen, falls Wert niedrig.'
    },
    {
      title: 'Langsames Wachstum',
      desc: 'Minimale Verlängerung, dünner sporadischer Wuchs.',
      solution: 'Licht auf mittel-hoch erhöhen. Makronährstoffe (Nitrat/Phosphat) zugeben. Temperatur auf 24–28 °C anheben.'
    },
    {
      title: 'Faulendes Unterende',
      desc: 'Untere Stängel werden schwarz und zerfallen.',
      solution: 'Totes Material sofort entfernen. Wasserfluss verbessern. Niemals im Substrat vergraben.'
    }
  ],

  proTips: [
    'Als "Starter-Pflanze" im Einfahren: neutralisiert Ammoniak-Spitzen und beschleunigt das Cycling.',
    'Büschel locker binden und an Steinen befestigen für geordnetes Hintergrundbild.',
    'Fischbrut und Garnelen-Babys verstecken sich perfekt in den dichten Nadeln.'
  ],

  commonMistakes: [
    'Nie stutzen – führt zu unkontrolliertem Überwuchs der alles beschattet.',
    'Im Substrat verankern – Hornkraut hat keine Wurzeln und fault am Boden.',
    'Bei Lichtmangel einsetzen – wächst dann kaum und wird unansehnlich.'
  ],

  aquascapeContext: {
    styles: ['low_tech', 'biotope', 'jungle', 'nature_aquarium'],
    roleInTank: 'Hintergrundpflanze oder Floating-Teppich. Schneller Nitratpuffer in Becken mit hohem Besatz. Fryprotection und Sichtschutz.',
    companionFish: ['Guppies', 'Endler', 'Platy', 'Molly', 'Corydoras', 'Cherry Shrimp', 'Neon Tetra'],
    incompatibleFish: ['Goldfish (frisst es, aber sehr tolerant)', 'Große Cichliden'],
    substrateRecommendations: ['Kein Substrat nötig – frei schwimmend oder locker aufgehängt']
  },

  relatedPlants: [
    'bacopa-monnieri',
    'hygrophila-difformis',
    'elodea-canadensis'
  ],

  description: 'Der ultimative Nitrat-Schwamm und Einsteigerfluter. Hornkraut wächst explosionsartig ohne CO₂, sauerstofft das Wasser stark auf und schlägt Algen im Wettbewerb um Nährstoffe. Die feinen, federartigen Blätter erzeugen dynamische Bewegung und bieten perfekten Schutz für Garnelen, Brut und Fische. Als Hintergrundpflanze, schwimmender Teppich oder hängend an der Oberfläche verwendbar. Stecklinge eignen sich als Fischfutter. Verträgt extreme Bedingungen (10–30 °C).'
};
