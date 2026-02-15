import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { allSpecies } from '../data/species';
import { Species, EthologyTag } from '../types/species';

export interface SearchFilters {
  query: string;
  difficulty: string[];
  environment: string[];
  minTankSize: number;
  maxTankSize: number;
  tempRange: [number, number];
  phRange: [number, number];
  diet: string[];
  tags: EthologyTag[];
  sortBy: 'name' | 'size' | 'difficulty' | 'tankSize';
  sortOrder: 'asc' | 'desc';
}

const defaultFilters: SearchFilters = {
  query: '',
  difficulty: [],
  environment: [],
  minTankSize: 0,
  maxTankSize: 500,
  tempRange: [15, 35],
  phRange: [4.0, 9.0],
  diet: [],
  tags: [],
  sortBy: 'name',
  sortOrder: 'asc'
};

export const useSpeciesSearch = () => {
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters);

  // Fuse.js configuration
  const fuse = useMemo(() => {
    return new Fuse(allSpecies, {
      keys: [
        { name: 'taxonomy.commonName', weight: 2 },
        { name: 'taxonomy.scientificName', weight: 1.5 },
        { name: 'behavior.description', weight: 0.5 },
        { name: 'behavior.tags', weight: 1 },
        { name: 'taxonomy.origin', weight: 0.3 }
      ],
      threshold: 0.3,
      ignoreLocation: true,
      useExtendedSearch: true
    });
  }, []);

  // Apply filters
  const filteredSpecies = useMemo(() => {
    let results: Species[] = allSpecies;

    // Text search
    if (filters.query.trim()) {
      results = fuse.search(filters.query).map(r => r.item);
    }

    // Filter by difficulty
    if (filters.difficulty.length > 0) {
      results = results.filter(s => filters.difficulty.includes(s.care.difficulty));
    }

    // Filter by environment
    if (filters.environment.length > 0) {
      results = results.filter(s => filters.environment.includes(s.environment.type));
    }

    // Filter by tank size
    results = results.filter(s => 
      s.environment.minTankSizeLiters >= filters.minTankSize &&
      s.environment.minTankSizeLiters <= filters.maxTankSize
    );

    // Filter by temperature range
    results = results.filter(s => {
      const [minTemp, maxTemp] = filters.tempRange;
      return s.environment.tempC.min <= maxTemp && s.environment.tempC.max >= minTemp;
    });

    // Filter by pH range
    results = results.filter(s => {
      const [minPh, maxPh] = filters.phRange;
      return s.environment.ph.min <= maxPh && s.environment.ph.max >= minPh;
    });

    // Filter by diet
    if (filters.diet.length > 0) {
      results = results.filter(s => filters.diet.includes(s.care.diet));
    }

    // Filter by tags (NOW WITH CORRECT TYPE)
    if (filters.tags.length > 0) {
      results = results.filter(s => 
        filters.tags.some(tag => s.behavior.tags.includes(tag))
      );
    }

    // Sort results
    results.sort((a, b) => {
      let comparison = 0;
      
      switch (filters.sortBy) {
        case 'name':
          comparison = a.taxonomy.commonName.localeCompare(b.taxonomy.commonName);
          break;
        case 'size':
          comparison = a.visuals.adultSizeCM - b.visuals.adultSizeCM;
          break;
        case 'difficulty': {
          const diffMap = { beginner: 1, medium: 2, intermediate: 2, expert: 3 };
          comparison = (diffMap[a.care.difficulty as keyof typeof diffMap] || 2) - 
                      (diffMap[b.care.difficulty as keyof typeof diffMap] || 2);
          break;
        }
        case 'tankSize':
          comparison = a.environment.minTankSizeLiters - b.environment.minTankSizeLiters;
          break;
      }

      return filters.sortOrder === 'asc' ? comparison : -comparison;
    });

    return results;
  }, [filters, fuse]);

  const resetFilters = () => setFilters(defaultFilters);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.query.trim()) count++;
    if (filters.difficulty.length > 0) count++;
    if (filters.environment.length > 0) count++;
    if (filters.diet.length > 0) count++;
    if (filters.tags.length > 0) count++;
    if (filters.minTankSize > 0 || filters.maxTankSize < 500) count++;
    if (filters.tempRange[0] > 15 || filters.tempRange[1] < 35) count++;
    if (filters.phRange[0] > 4.0 || filters.phRange[1] < 9.0) count++;
    return count;
  }, [filters]);

  return {
    filters,
    setFilters,
    filteredSpecies,
    resetFilters,
    activeFilterCount,
    totalCount: allSpecies.length,
    resultCount: filteredSpecies.length
  };
};
