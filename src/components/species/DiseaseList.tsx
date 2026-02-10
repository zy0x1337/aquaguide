import React from 'react';
// Wir importieren Link NICHT, um sicherzugehen, dass es kein Router-Problem ist
import { resolveDiseaseReference } from '../../data/diseases';
import type { Disease } from '../../types/disease';

interface DiseaseListProps {
  diseases: string[];
}

const getSeverityBadgeStyle = (severity: Disease['severity']) => {
  switch (severity) {
    case 'critical': return 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200';
    case 'high': return 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200';
    case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200';
    default: return 'bg-blue-50 text-blue-700 border-blue-100';
  }
};

export const DiseaseList: React.FC<DiseaseListProps> = ({ diseases }) => {
  if (!diseases || diseases.length === 0) return <span className="text-gray-400">None known</span>;

  return (
    <div className="flex flex-wrap gap-2 mt-2 relative z-10"> {/* Container z-index */}
      {diseases.map((identifier, index) => {
        const result = resolveDiseaseReference(identifier);

        if (typeof result === 'string') {
          return (
            <span key={index} className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs border border-gray-200">
              {result}
            </span>
          );
        }

        return (
          // WIR NUTZEN JETZT <a href> STATT <Link to>
          <a 
            key={result.slug} 
            href={`/disease/${result.slug}`} 
            className={`
              relative z-50 cursor-pointer 
              flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border 
              transition-all duration-200 hover:scale-105 active:scale-95
              ${getSeverityBadgeStyle(result.severity)}
            `}
            style={{ pointerEvents: 'auto' }} // Erzwingt Klickbarkeit
          >
            {result.isIncurable && <span>⚠️</span>}
            {result.name}
            <span className="ml-1 opacity-50">➜</span>
          </a>
        );
      })}
    </div>
  );
};
