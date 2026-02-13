import { Camera, ExternalLink } from 'lucide-react';
import type { ImageCredit } from '../../types/common'; 

interface Props {
  credit?: ImageCredit;
}

export const ImageAttribution = ({ credit }: Props) => {
  if (!credit) return null;

  return (
    <div className="absolute bottom-3 right-3 z-30 max-w-[70%] text-right">
      <div className="inline-flex flex-col items-end">
        {/* Glassmorphism Container */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[10px] md:text-xs text-white/80 transition-opacity hover:bg-black/60">
          
          <Camera className="w-3 h-3 text-white/60" />
          
          <span className="truncate max-w-[150px] md:max-w-[250px]">
            {credit.sourceUrl ? (
              <a 
                href={credit.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white hover:underline decoration-white/50 underline-offset-2"
              >
                {credit.photographer}
              </a>
            ) : (
              <span>{credit.photographer}</span>
            )}
          </span>

          <span className="w-px h-3 bg-white/20 mx-1"></span>

          {credit.licenseUrl ? (
            <a 
              href={credit.licenseUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-white hover:underline decoration-white/50 underline-offset-2"
            >
              {credit.license}
              <ExternalLink className="w-2.5 h-2.5 ml-1 opacity-50" />
            </a>
          ) : (
            <span>{credit.license}</span>
          )}
        </div>
      </div>
    </div>
  );
};
