import { useMemo, useState } from 'react';
import type { Disease } from '../types/disease';

type SeverityFilter = Disease['severity'] | null;

export const useDiseaseSearch = (data: Disease[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [severity, setSeverity] = useState<SeverityFilter>(null);

  const results = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return data.filter((d) => {
      const matchesSeverity = severity ? d.severity === severity : true;

      if (!term) return matchesSeverity;

      const matchesName = d.name.toLowerCase().includes(term);
      const matchesAliases = (d.aliases ?? []).some(a => a.toLowerCase().includes(term));
      const matchesType = d.type.toLowerCase().includes(term);
      const matchesSymptoms = d.symptoms.some(s => s.toLowerCase().includes(term));

      return matchesSeverity && (matchesName || matchesAliases || matchesType || matchesSymptoms);
    });
  }, [data, searchTerm, severity]);

  return {
    searchTerm,
    setSearchTerm,
    severity,
    setSeverity,
    results,
    totalCount: data.length,
    resultCount: results.length,
  };
};
