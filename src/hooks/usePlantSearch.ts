import { useMemo, useState } from 'react';
import type { Plant } from '../types/plant';

type HeightFilter = 'nano' | 'small' | 'medium' | 'tall' | null;

export const usePlantSearch = (data: Plant[]) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filters
  const [filterDifficulty, setFilterDifficulty] = useState<'easy' | 'medium' | 'advanced' | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterLight, setFilterLight] = useState<'low' | 'medium' | 'high' | null>(null);
  const [filterCo2, setFilterCo2] = useState<'low' | 'medium' | 'high' | null>(null);
  const [filterGrowthRate, setFilterGrowthRate] = useState<'slow' | 'medium' | 'fast' | 'very fast' | null>(null);
  const [filterHeight, setFilterHeight] = useState<HeightFilter>(null);

  const results = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return data.filter((plant) => {
      // Textsuche
      const matchesSearch =
        !term ||
        plant.taxonomy.commonName.toLowerCase().includes(term) ||
        plant.taxonomy.scientificName.toLowerCase().includes(term) ||
        plant.taxonomy.family.toLowerCase().includes(term);

      // Difficulty
      const matchesDifficulty = filterDifficulty ? plant.difficulty === filterDifficulty : true;

      // Type
      const matchesType = filterType ? plant.specs.type === filterType : true;

      // Light
      const matchesLight = filterLight ? plant.specs.light === filterLight : true;

      // CO2
      const matchesCo2 = filterCo2 ? plant.specs.co2 === filterCo2 : true;

      // Growth Rate
      const matchesGrowth = filterGrowthRate ? plant.specs.growthRate === filterGrowthRate : true;

      // Height Filter
      const heightMatches = filterHeight ? 
        (filterHeight === 'nano' && plant.specs.heightCM.max <= 10) ||
        (filterHeight === 'small' && plant.specs.heightCM.max <= 20) ||
        (filterHeight === 'medium' && plant.specs.heightCM.max <= 40) ||
        (filterHeight === 'tall' && plant.specs.heightCM.max > 40)
        : true;

      return matchesSearch && matchesDifficulty && matchesType && matchesLight && 
             matchesCo2 && matchesGrowth && heightMatches;
    });
  }, [
    data, searchTerm, filterDifficulty, filterType, filterLight, filterCo2, 
    filterGrowthRate, filterHeight
  ]);

  return {
    searchTerm, setSearchTerm,
    filterDifficulty, setFilterDifficulty,
    filterType, setFilterType,
    filterLight, setFilterLight,
    filterCo2, setFilterCo2,
    filterGrowthRate, setFilterGrowthRate,
    filterHeight, setFilterHeight,
    results,
    totalCount: data.length,
    resultCount: results.length
  };
};
