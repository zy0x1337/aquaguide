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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      navigate('/auth');
      return;
    }

    toggleFavorite(itemType, itemSlug);
  };

  // Size variants matching website design system
  const sizeClasses = size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm';

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`flex items-center gap-1.5 rounded-lg font-bold transition-all ${
        favorite
          ? 'bg-coral-600 text-white hover:bg-coral-700 shadow-lg'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-coral-50 dark:hover:bg-coral-900/20 hover:text-coral-700 dark:hover:text-coral-400 border-2 border-gray-200 dark:border-gray-700 hover:border-coral-300 dark:hover:border-coral-700'
      } ${sizeClasses}`}
      title={favorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart
        className="w-3.5 h-3.5"
        fill={favorite ? 'currentColor' : 'none'}
        strokeWidth={2.5}
      />
      {showLabel && (
        <span>
          {favorite ? 'Saved' : 'Save'}
        </span>
      )}
    </motion.button>
  );
};
