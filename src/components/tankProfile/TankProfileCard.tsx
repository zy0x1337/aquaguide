import { Link } from 'react-router-dom';
import { Fish, Droplets, Calendar, Eye, Heart, Camera } from 'lucide-react';
import { TankProfile } from '../../types/tankProfile';
import { cn } from '../../lib/utils';

interface TankProfileCardProps {
  profile: TankProfile;
  showStats?: boolean;
}

export const TankProfileCard = ({ profile, showStats = true }: TankProfileCardProps) => {
  const primaryImage = profile.images.find(img => img.isPrimary) || profile.images[0];
  const totalInhabitants = profile.inhabitants.reduce((sum, i) => sum + i.quantity, 0);
  
  return (
    <Link
      to={`/profile/tanks/${profile.id}`}
      className={cn(
        "relative group flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden",
        "shadow-sm hover:shadow-2xl dark:shadow-dark-md dark:hover:shadow-dark-lg transition-all duration-500",
        "border border-gray-200 dark:border-gray-800",
        "hover:-translate-y-1 hover:border-coral-200 dark:hover:border-coral-800"
      )}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {primaryImage ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src={primaryImage.url}
              alt={profile.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <Camera className="w-12 h-12" />
          </div>
        )}
        
        {/* Status Badge */}
        <div className={cn(
          "absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide backdrop-blur-md shadow-sm border border-white/10",
          profile.status === 'established' && "bg-emerald-500/90 text-white",
          profile.status === 'cycling' && "bg-amber-500/90 text-white",
          profile.status === 'planning' && "bg-blue-500/90 text-white",
          profile.status === 'maintenance' && "bg-orange-500/90 text-white"
        )}>
          {profile.status}
        </div>
        
        {/* Image Count */}
        {profile.images.length > 1 && (
          <div className="absolute bottom-3 right-3 z-20 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs font-bold flex items-center gap-1">
            <Camera className="w-3 h-3" />
            <span>{profile.images.length}</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-auto">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1 group-hover:text-coral-600 dark:group-hover:text-coral-400 transition-colors line-clamp-1">
            {profile.name}
          </h3>
          {profile.description && (
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-2">
              {profile.description}
            </p>
          )}
          
          {/* Tank Specs */}
          <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 mt-2">
            <div className="flex items-center gap-1">
              <Droplets className="w-3.5 h-3.5 text-sapphire-500" />
              <span className="font-semibold">{profile.volumeLiters}L</span>
            </div>
            <div className="flex items-center gap-1">
              <Fish className="w-3.5 h-3.5 text-coral-500" />
              <span className="font-semibold">{totalInhabitants} inhabitants</span>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        {showStats && (
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              <span>{profile.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5" />
              <span>{profile.likes}</span>
            </div>
            {profile.setupDate && (
              <div className="flex items-center gap-1 ml-auto">
                <Calendar className="w-3.5 h-3.5" />
                <span>{new Date(profile.setupDate).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};
