import React from 'react';

// 1. Hier 'eel-like' hinzufügen!
export type FishShape = 'fusiform' | 'compressed' | 'round' | 'eel-like'; 

interface Props {
  shape: FishShape;
  className?: string;
}

export const FishSilhouette = ({ shape, className = '' }: Props) => {
  // SVG Pfade für die verschiedenen Formen
  const paths = {
    // Standard Fisch (z.B. Neon, Guppy)
    fusiform: "M2 12s4-5 12-5 14 3 16 5c2 2 0 5-2 5-3 0-8-1-12-3s-8-2-14-2z M26 10l4-3v6l-4-3",
    
    // Hoher Körper (z.B. Skalar, Diskus)
    compressed: "M10 2s5 3 8 10c3 7 0 14-4 16-4 2-8 0-10-5-2-5 0-15 6-21z M22 15l4-5v10l-4-5",
    
    // Kugeliger Körper (z.B. Goldfisch, Kugelfisch)
    round: "M6 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0z M26 12l4-4v8l-4-4",

    // NEU: Aal-artig (lang und wellig, z.B. Kuhli Loach)
    'eel-like': "M2 14c3-2 6-2 9 0s6 2 9 0 6-2 9 0l3 2-3 2c-3-2-6-2-9 0s-6 2-9 0-6-2-9 0z"
  };

  // ViewBox muss für den Aal breiter sein, damit er nicht gequetscht aussieht
  const viewBox = shape === 'eel-like' ? "0 0 40 24" : "0 0 32 24";

  return (
    <svg 
      viewBox={viewBox} 
      className={`w-full h-full fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={paths[shape] || paths.fusiform} />
    </svg>
  );
};
