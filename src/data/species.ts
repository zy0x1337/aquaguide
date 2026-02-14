import { allSpecies } from './species/index';
import type { Species } from '../types/species';

class SpeciesRepository {
  private species: Species[];

  constructor(species: Species[]) {
    this.species = species;
  }

  getAll(): Species[] {
    return this.species;
  }

  getBySlug(slug: string): Species | undefined {
    return this.species.find(s => s.slug === slug);
  }

  getById(id: string): Species | undefined {
    return this.species.find(s => s.id === id);
  }

  filterBy(predicate: (species: Species) => boolean): Species[] {
    return this.species.filter(predicate);
  }

  searchByName(query: string): Species[] {
    const lowerQuery = query.toLowerCase();
    return this.species.filter(s => 
      s.taxonomy.commonName.toLowerCase().includes(lowerQuery) ||
      s.taxonomy.scientificName.toLowerCase().includes(lowerQuery)
    );
  }
}

export const speciesRepository = new SpeciesRepository(allSpecies);
export { allSpecies };