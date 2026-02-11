import { useMemo, useState } from 'react';
import type { Species, Difficulty, Region } from '../types/species';

type Category = 'fish' | 'invertebrate' | 'amphibian';

const inferCategory = (s: Species): Category => {
  // NOTE: Das ist bewusst ein Interim-Hack über die ID. Später besser als explizites Feld im Species-Typ.
  if (s.id.startsWith('shrimp-')) return 'invertebrate';
  if (s.id.startsWith('amphibian-')) return 'amphibian';
  return 'fish';
};

export const useSpeciesSearch = (data: Species[]) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [filterDifficulty, setFilterDifficulty] = useState<Difficulty | null>(null);
  const [filterRegion, setFilterRegion] = useState<Region | null>(null);

  // NEU
  const [filterTankLiters, setFilterTankLiters] = useState<number | null>(null);
  const [filterBiotopeTerm, setFilterBiotopeTerm] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<Category | null>(null);

  const results = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    const bio = filterBiotopeTerm.toLowerCase().trim();

    return data.filter((s) => {
      // Textsuche (Name etc.)
      const matchesSearch =
        !term ||
        s.taxonomy.commonName.toLowerCase().includes(term) ||
        s.taxonomy.scientificName.toLowerCase().includes(term) ||
        s.taxonomy.family.toLowerCase().includes(term);

      // Level
      const matchesDifficulty = filterDifficulty ? s.care.difficulty === filterDifficulty : true;

      // Region
      const matchesRegion = filterRegion ? s.taxonomy.region === filterRegion : true;

      // Tank liters gate (hart)
      const matchesTank =
        filterTankLiters !== null ? s.environment.minTankSizeLiters <= filterTankLiters : true;

      // Category
      const matchesCategory = filterCategory ? inferCategory(s) === filterCategory : true;

      // Biotope/Place search (soft)
      const haystack = [
        s.taxonomy.origin,
        (s.taxonomy as any).biotope ?? '', // falls du es schon eingeführt hast
        s.scientificContext?.wildHabitat ?? '',
      ]
        .join(' ')
        .toLowerCase();

      const matchesBiotope = !bio || haystack.includes(bio);

      return (
        matchesSearch &&
        matchesDifficulty &&
        matchesRegion &&
        matchesTank &&
        matchesCategory &&
        matchesBiotope
      );
    });
  }, [
    data,
    searchTerm,
    filterDifficulty,
    filterRegion,
    filterTankLiters,
    filterBiotopeTerm,
    filterCategory,
  ]);

  return {
    // existing
    searchTerm,
    setSearchTerm,
    filterDifficulty,
    setFilterDifficulty,
    filterRegion,
    setFilterRegion,

    // new
    filterTankLiters,
    setFilterTankLiters,
    filterBiotopeTerm,
    setFilterBiotopeTerm,
    filterCategory,
    setFilterCategory,

    results,
    totalCount: data.length,
    resultCount: results.length,
  };
};
