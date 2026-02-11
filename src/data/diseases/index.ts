// src/data/diseases/index.ts

import { shrimpDiseases } from './shrimp-diseases';
import type { Disease } from './shrimp-diseases';
import { fishDiseases } from './fish-diseases';

export type { Disease };

class DiseaseRepository {
  private diseases: Disease[] = [
    ...shrimpDiseases,
    ...fishDiseases, // <--- Jetzt eingebunden
  ];

  getAll(): Disease[] {
    return this.diseases;
  }

  getById(id: string): Disease | undefined {
    return this.diseases.find(d => d.id === id);
  }

  getByIds(ids: string[]): Disease[] {
    return ids
      .map(id => this.getById(id))
      .filter((d): d is Disease => d !== undefined);
  }

  getByCategory(category: Disease['category']): Disease[] {
    return this.diseases.filter(d => d.category === category);
  }

  search(term: string): Disease[] {
    const lower = term.toLowerCase();
    return this.diseases.filter(d => 
      d.name.toLowerCase().includes(lower) || 
      d.symptoms.some(s => s.toLowerCase().includes(lower))
    );
  }
}

export const diseaseRepository = new DiseaseRepository();
