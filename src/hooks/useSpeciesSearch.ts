// src/hooks/useSpeciesSearch.ts
import { useState, useMemo } from 'react';
import type { Species } from '../types/species';

export const useSpeciesSearch = (data: Species[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter States
  const [filterDifficulty, setFilterDifficulty] = useState<string | null>(null);
  const [filterRegion, setFilterRegion] = useState<string | null>(null); // NEU: z.B. "South America"
  
  // Du könntest hier auch noch filterWaterType (Freshwater/Brackish) hinzufügen, falls deine Daten das hergeben

  const filteredSpecies = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return data.filter(species => {
      // 1. Text Search
      const matchesSearch = 
        species.taxonomy.commonName.toLowerCase().includes(term) ||
        species.taxonomy.scientificName.toLowerCase().includes(term) ||
        species.taxonomy.family.toLowerCase().includes(term);

      // 2. Difficulty
      const matchesDifficulty = filterDifficulty 
        ? species.care.difficulty === filterDifficulty 
        : true;

      // 3. Region (Origin) Check
      // Wir prüfen, ob der Filter-String (z.B. "Asia") im Origin-String (z.B. "South East Asia") enthalten ist
      const matchesRegion = filterRegion
        ? species.taxonomy.origin.toLowerCase().includes(filterRegion.toLowerCase())
        : true;

      return matchesSearch && matchesDifficulty && matchesRegion;
    });
  }, [data, searchTerm, filterDifficulty, filterRegion]);

  return {
    searchTerm, setSearchTerm,
    filterDifficulty, setFilterDifficulty,
    filterRegion, setFilterRegion, // <-- NEU exportieren
    results: filteredSpecies,
    totalCount: data.length,
    resultCount: filteredSpecies.length
  };
};
