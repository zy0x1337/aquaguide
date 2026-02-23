import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export interface Favorite {
  id: string;
  user_id: string;
  item_type: 'species' | 'plant';
  item_slug: string;
  created_at: string;
}

export const useFavorites = (userId?: string) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  const targetUserId = userId || user?.id;

  useEffect(() => {
    if (!targetUserId) {
      setLoading(false);
      return;
    }

    fetchFavorites();
  }, [targetUserId]);

  const fetchFavorites = async () => {
    if (!targetUserId) return;

    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', targetUserId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFavorites(data || []);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  const isFavorite = (itemType: 'species' | 'plant', itemSlug: string) => {
    return favorites.some(
      (fav) => fav.item_type === itemType && fav.item_slug === itemSlug
    );
  };

  const toggleFavorite = async (itemType: 'species' | 'plant', itemSlug: string) => {
    if (!user) {
      console.error('User must be logged in to favorite');
      return;
    }

    const existing = favorites.find(
      (fav) => fav.item_type === itemType && fav.item_slug === itemSlug
    );

    if (existing) {
      // Remove favorite
      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('id', existing.id);

      if (!error) {
        setFavorites(favorites.filter((fav) => fav.id !== existing.id));
      }
    } else {
      // Add favorite
      const { data, error } = await supabase
        .from('favorites')
        .insert({
          user_id: user.id,
          item_type: itemType,
          item_slug: itemSlug,
        })
        .select()
        .single();

      if (!error && data) {
        setFavorites([data, ...favorites]);
      }
    }
  };

  const getFavoritesByType = (itemType: 'species' | 'plant') => {
    return favorites.filter((fav) => fav.item_type === itemType);
  };

  return {
    favorites,
    loading,
    isFavorite,
    toggleFavorite,
    getFavoritesByType,
    refetch: fetchFavorites,
  };
};
