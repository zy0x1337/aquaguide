import { createContext, useContext, useState, ReactNode } from 'react';
import type { Species } from '../types/species';

interface ComparisonContextType {
  comparedSpecies: Species[];
  addToComparison: (species: Species) => void;
  removeFromComparison: (speciesId: string) => void;
  clearComparison: () => void;
  isInComparison: (speciesId: string) => boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider = ({ children }: { children: ReactNode }) => {
  const [comparedSpecies, setComparedSpecies] = useState<Species[]>([]);

  const addToComparison = (species: Species) => {
    if (comparedSpecies.length >= 3) {
      alert('Maximum 3 species can be compared at once');
      return;
    }
    if (!comparedSpecies.find(s => s.id === species.id)) {
      setComparedSpecies([...comparedSpecies, species]);
    }
  };

  const removeFromComparison = (speciesId: string) => {
    setComparedSpecies(comparedSpecies.filter(s => s.id !== speciesId));
  };

  const clearComparison = () => {
    setComparedSpecies([]);
  };

  const isInComparison = (speciesId: string) => {
    return comparedSpecies.some(s => s.id === speciesId);
  };

  return (
    <ComparisonContext.Provider value={{
      comparedSpecies,
      addToComparison,
      removeFromComparison,
      clearComparison,
      isInComparison
    }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error('useComparison must be used within ComparisonProvider');
  }
  return context;
};
