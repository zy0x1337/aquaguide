import type { JSX } from 'react';

// 1. Exportiere den Typ
export type FishShape = 'fusiform' | 'compressed' | 'eel-like' | 'depressed' | 'globiform';

interface Props {
  shape: string | FishShape; 
  className?: string;
  color?: string;
}

export const FishSilhouette = ({ shape, className = "w-full h-full", color = "currentColor" }: Props) => {
  const normalizedShape = (shape?.toLowerCase().trim() || 'fusiform') as FishShape;

  // Hier sind die neuen, "fischigeren" Pfade
  const paths: Record<string, JSX.Element> = {
    // STANDARD (Salmler, Barben) - Jetzt mit Rückenflosse und gegabeltem Schwanz
    fusiform: (
      <path d="M2,12 Q6,8 10,7 L13,3 L16,7 L19,9 L23,5 L21,12 L23,19 L19,15 L14,17 Q6,18 2,12 Z" />
    ),
    
    // HOCHRÜCKIG (Diskus, Skalar, Trauermantelsalmler) - Rautenform
    compressed: (
      <path d="M4,12 Q8,2 14,2 L17,6 L22,4 L20,12 L22,20 L17,18 L14,22 Q8,22 4,12 Z M13,2 L15,12 Z" />
    ),
    
    // AALARTIG (Dornauge) - Geschlängelte S-Form
    'eel-like': (
      <path d="M2,16 Q4,10 8,10 Q12,10 14,14 Q16,18 20,18 L23,16 L23,18 L20,20 Q14,20 12,16 Q10,12 6,12 Q4,12 2,16 Z" />
    ),
    
    // BODENBEWOHNER (Wels, Panzerwels) - Flacher Bauch, runder Kopf
    depressed: (
      <path d="M3,14 Q3,8 9,7 L12,3 L15,7 L20,8 L23,6 L23,14 L3,14 Z M18,12 L20,10 L20,12 Z" />
    ),
    
    // KUGELFISCH - Rund mit kleinen Flossen
    globiform: (
      <g>
        <circle cx="11" cy="12" r="7" />
        <path d="M17,10 L22,8 L22,16 L17,14 Z" /> {/* Schwanz */}
      </g>
    )
  };

  const selectedPath = paths[normalizedShape] || paths.fusiform;

  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className} 
      fill={color} 
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Silhouette of a ${normalizedShape} fish`}
    >
      {selectedPath}
    </svg>
  );
};
