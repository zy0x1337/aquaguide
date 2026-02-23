import { Heart } from 'lucide-react';
import { useFavorites } from '../../hooks/useFavorites';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FavoriteButtonProps {
  itemType: 'species' | 'plant';
  itemSlug: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const FavoriteButton = ({
  itemType,
  itemSlug,
  size = 'md',
  showLabel = false,
}: FavoriteButtonProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(itemType, itemSlug);

  const sizeClasses = {
    sm: 'p-1.5 w-7 h-7',
    md: 'p-2 w-9 h-9',
    lg: 'p-2.5 w-11 h-11',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      navigate('/auth');
      return;
    }

    toggleFavorite(itemType, itemSlug);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      className={`${
        sizeClasses[size]
      } rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-2 ${
        favorite
          ? 'border-rose-500 dark:border-rose-400'
          : 'border-slate-200 dark:border-slate-700'
      } hover:scale-110 transition-all shadow-lg hover:shadow-xl ${
        showLabel ? 'flex items-center gap-2 px-4 py-2 w-auto' : ''
      }`}
      title={favorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart
        className={`${
          iconSizes[size]
        } transition-colors ${
          favorite
            ? 'text-rose-500 dark:text-rose-400'
            : 'text-slate-400 dark:text-slate-500'
        }`}
        fill={favorite ? 'currentColor' : 'none'}
        strokeWidth={2.5}
      />
      {showLabel && (
        <span
          className={`text-sm font-semibold ${
            favorite
              ? 'text-rose-500 dark:text-rose-400'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {favorite ? 'Favorited' : 'Add to Favorites'}
        </span>
      )}
    </motion.button>
  );
};
