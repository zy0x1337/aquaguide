import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { User, Calendar, Award, Fish, Droplets, Camera, Edit2, Save, X, Upload, ArrowLeft, Heart, Leaf, Trash2, Globe, Trophy, Star, Target, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFavorites } from '../hooks/useFavorites';

interface SpeciesData {
  slug: string;
  common_name: string;
  scientific_name: string;
  image_url?: string;
}

interface PlantData {
  slug: string;
  common_name: string;
  scientific_name: string;
  image_url?: string;
}

type TabType = 'overview' | 'favorites' | 'achievements' | 'activity';

const ProfilePage = () => {
  const { userId } = useParams<{ userId?: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadingHeader, setUploadingHeader] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [headerUrl, setHeaderUrl] = useState<string | null>(null);
  const [profileUser, setProfileUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const headerInputRef = useRef<HTMLInputElement>(null);

  // Favorites
  const { favorites, loading: favoritesLoading, toggleFavorite } = useFavorites(userId || user?.id);
  const [speciesData, setSpeciesData] = useState<Record<string, SpeciesData>>({});
  const [plantsData, setPlantsData] = useState<Record<string, PlantData>>({});
  const [dataLoading, setDataLoading] = useState(true);

  const favSpecies = favorites.filter((f) => f.item_type === 'species');
  const favPlants = favorites.filter((f) => f.item_type === 'plant');

  // Check if viewing own profile
  const isOwnProfile = !userId || userId === user?.id;

  // Load profile from Supabase
  const [profile, setProfile] = useState({
    displayName: '',
    bio: 'Aquarium enthusiast and fish keeper',
    location: '',
    website: '',
    favoriteSpecies: '',
  });

  // Achievements (calculated from user data)
  const achievements = [
    { 
      id: 'collector', 
      name: 'Collector', 
      description: 'Save 10+ favorites',
      icon: Heart,
      unlocked: favorites.length >= 10,
      progress: Math.min(favorites.length, 10),
      max: 10,
      color: 'rose'
    },
    { 
      id: 'diverse', 
      name: 'Diverse Keeper', 
      description: 'Favorite both fish and plants',
      icon: Target,
      unlocked: favSpecies.length > 0 && favPlants.length > 0,
      progress: (favSpecies.length > 0 ? 1 : 0) + (favPlants.length > 0 ? 1 : 0),
      max: 2,
      color: 'emerald'
    },
    { 
      id: 'explorer', 
      name: 'Explorer', 
      description: 'Favorite 5+ different species',
      icon: Fish,
      unlocked: favSpecies.length >= 5,
      progress: Math.min(favSpecies.length, 5),
      max: 5,
      color: 'coral'
    },
    { 
      id: 'botanist', 
      name: 'Botanist', 
      description: 'Favorite 5+ plants',
      icon: Leaf,
      unlocked: favPlants.length >= 5,
      progress: Math.min(favPlants.length, 5),
      max: 5,
      color: 'emerald'
    },
    { 
      id: 'veteran', 
      name: 'Veteran', 
      description: 'Member for 1+ year',
      icon: Trophy,
      unlocked: profileUser?.created_at && new Date().getFullYear() - new Date(profileUser.created_at).getFullYear() >= 1,
      progress: profileUser?.created_at ? Math.min(new Date().getFullYear() - new Date(profileUser.created_at).getFullYear(), 1) : 0,
      max: 1,
      color: 'amber'
    },
  ];

  const unlockedCount = achievements.filter(a => a.unlocked).length;

  // Activity feed (mock data - would come from backend)
  const recentActivity = [
    { type: 'favorite', item: 'Neon Tetra', timestamp: '2 hours ago', icon: Heart },
    { type: 'favorite', item: 'Java Fern', timestamp: '1 day ago', icon: Leaf },
    { type: 'profile', item: 'Updated profile', timestamp: '3 days ago', icon: Edit2 },
  ];

  // Load profile data
  useEffect(() => {
    loadProfile();
  }, [userId, user]);

  // Load favorites details
  useEffect(() => {
    fetchFavoriteDetails();
  }, [favorites]);

  const fetchFavoriteDetails = async () => {
    setDataLoading(true);

    try {
      // Fetch species details
      if (favSpecies.length > 0) {
        const { data: species } = await supabase
          .from('species')
          .select('slug, common_name, scientific_name, image_url')
          .in(
            'slug',
            favSpecies.map((f) => f.item_slug)
          );

        if (species) {
          const speciesMap: Record<string, SpeciesData> = {};
          species.forEach((s) => {
            speciesMap[s.slug] = s;
          });
          setSpeciesData(speciesMap);
        }
      }

      // Fetch plant details
      if (favPlants.length > 0) {
        const { data: plants } = await supabase
          .from('plants')
          .select('slug, common_name, scientific_name, image_url')
          .in(
            'slug',
            favPlants.map((f) => f.item_slug)
          );

        if (plants) {
          const plantsMap: Record<string, PlantData> = {};
          plants.forEach((p) => {
            plantsMap[p.slug] = p;
          });
          setPlantsData(plantsMap);
        }
      }
    } catch (error) {
      console.error('Error fetching favorite details:', error);
    } finally {
      setDataLoading(false);
    }
  };

  const loadProfile = async () => {
    setLoading(true);
    const targetUserId = userId || user?.id;
    
    if (!targetUserId) {
      setLoading(false);
      return;
    }

    try {
      // Get profile data
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('avatar_url, header_url, display_name, bio, location, website, favorite_species')
        .eq('id', targetUserId)
        .single();

      if (profileError) throw profileError;

      // Get user email
      const { data: userData, error: userError } = await supabase.auth.admin.getUserById(targetUserId);
      
      if (profileData) {
        setAvatarUrl(profileData.avatar_url);
        setHeaderUrl(profileData.header_url);
        setProfile({
          displayName: profileData.display_name || (userData?.user?.email?.split('@')[0]) || 'User',
          bio: profileData.bio || 'Aquarium enthusiast and fish keeper',
          location: profileData.location || '',
          website: profileData.website || '',
          favoriteSpecies: profileData.favorite_species || '',
        });
        setProfileUser(userData?.user);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { label: 'Favorites', value: favorites.length.toString(), icon: Heart, color: 'rose' },
    { label: 'Achievements', value: `${unlockedCount}/${achievements.length}`, icon: Trophy, color: 'amber' },
    { label: 'Member Since', value: new Date(profileUser?.created_at || user?.created_at || Date.now()).getFullYear().toString(), icon: Calendar, color: 'coral' },
  ];

  const getUserInitials = () => {
    const email = profileUser?.email || user?.email;
    if (!email) return 'U';
    return email.split('@')[0].slice(0, 2).toUpperCase();
  };

  const handleSave = async () => {
    if (!user || !isOwnProfile) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          display_name: profile.displayName,
          bio: profile.bio,
          location: profile.location,
          website: profile.website,
          favorite_species: profile.favoriteSpecies,
        })
        .eq('id', user.id);

      if (error) throw error;

      setIsEditing(false);
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile. Please try again.');
    }
  };

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isOwnProfile) return;
    
    const file = event.target.files?.[0];
    if (!file || !user) return;

    if (file.size > 2 * 1024 * 1024) {
      alert('File size must be less than 2MB');
      return;
    }

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    setUploading(true);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = async () => {
        const base64String = reader.result as string;

        const { error } = await supabase
          .from('profiles')
          .update({ avatar_url: base64String })
          .eq('id', user.id);

        if (error) throw error;

        setAvatarUrl(base64String);
        window.dispatchEvent(new Event('avatar-updated'));
      };

      reader.onerror = () => {
        throw new Error('Failed to read file');
      };
    } catch (error) {
      console.error('Error uploading avatar:', error);
      alert('Failed to upload avatar. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleHeaderUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isOwnProfile) return;
    
    const file = event.target.files?.[0];
    if (!file || !user) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    setUploadingHeader(true);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = async () => {
        const base64String = reader.result as string;

        const { error } = await supabase
          .from('profiles')
          .update({ header_url: base64String })
          .eq('id', user.id);

        if (error) throw error;

        setHeaderUrl(base64String);
      };

      reader.onerror = () => {
        throw new Error('Failed to read file');
      };
    } catch (error) {
      console.error('Error uploading header:', error);
      alert('Failed to upload header. Please try again.');
    } finally {
      setUploadingHeader(false);
    }
  };

  const handleShareProfile = () => {
    const profileUrl = `${window.location.origin}/profile/${user?.id}`;
    navigator.clipboard.writeText(profileUrl);
    alert('Profile link copied to clipboard!');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'favorites', label: 'Favorites', icon: Heart, badge: favorites.length },
    { id: 'achievements', label: 'Achievements', icon: Trophy, badge: unlockedCount },
    { id: 'activity', label: 'Activity', icon: TrendingUp },
  ] as const;

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
          <div className="text-gray-600 dark:text-gray-400">Loading profile...</div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <SEOHead 
        title={`${profile.displayName}'s Profile - AquaGuide`}
        description={`View ${profile.displayName}'s aquarium profile, favorites, and achievements on AquaGuide.`}
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-12">
        {/* Header Card */}
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto">
            {/* Cover Image */}
            <div className="relative h-48 sm:h-64 group">
              <input
                ref={headerInputRef}
                type="file"
                accept="image/*"
                onChange={handleHeaderUpload}
                className="hidden"
              />
              {headerUrl ? (
                <img
                  src={headerUrl}
                  alt="Header"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-coral-500 via-sapphire-500 to-emerald-500" />
              )}
              {isOwnProfile && (
                <button
                  onClick={() => headerInputRef.current?.click()}
                  disabled={uploadingHeader}
                  className="absolute bottom-4 right-4 z-10 p-2.5 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 backdrop-blur-sm rounded-xl text-gray-700 dark:text-gray-300 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                >
                  {uploadingHeader ? (
                    <Upload className="w-4 h-4 animate-pulse" strokeWidth={2.5} />
                  ) : (
                    <Camera className="w-4 h-4" strokeWidth={2.5} />
                  )}
                </button>
              )}
            </div>

            {/* Profile Info */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16 sm:-mt-20 pb-6">
                {/* Avatar */}
                <div className="relative group z-20">
                  {isOwnProfile && (
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      className="hidden"
                    />
                  )}
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt="Avatar"
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl shadow-2xl border-4 border-white dark:border-gray-900 object-cover"
                    />
                  ) : (
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-coral-500 to-sapphire-500 flex items-center justify-center text-white text-3xl font-black shadow-2xl border-4 border-white dark:border-gray-900">
                      {getUserInitials()}
                    </div>
                  )}
                  {isOwnProfile && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity disabled:cursor-not-allowed"
                    >
                      {uploading ? (
                        <Upload className="w-7 h-7 text-white animate-pulse" strokeWidth={2.5} />
                      ) : (
                        <Camera className="w-7 h-7 text-white" strokeWidth={2.5} />
                      )}
                    </button>
                  )}
                </div>

                {/* Name & Bio */}
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">
                    {profile.displayName}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {profile.bio}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    {profile.location && (
                      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                        <Globe className="w-3.5 h-3.5" />
                        <span>{profile.location}</span>
                      </div>
                    )}
                    {profile.website && (
                      <a
                        href={profile.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-coral-600 dark:text-coral-400 hover:underline"
                      >
                        {profile.website.replace(/^https?:\/\//, '')}
                      </a>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                {isOwnProfile && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleShareProfile}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-xl transition-all text-sm"
                    >
                      Share
                    </button>
                    <button
                      onClick={() => {
                        if (isEditing) {
                          handleSave();
                        }
                        setIsEditing(!isEditing);
                      }}
                      className={`px-4 py-2 font-bold rounded-xl transition-all text-sm flex items-center gap-2 ${
                        isEditing
                          ? 'bg-coral-600 hover:bg-coral-700 text-white'
                          : 'bg-coral-600 hover:bg-coral-700 text-white'
                      }`}
                    >
                      {isEditing ? (
                        <>
                          <Save className="w-4 h-4" strokeWidth={2.5} />
                          Save
                        </>
                      ) : (
                        <>
                          <Edit2 className="w-4 h-4" strokeWidth={2.5} />
                          Edit
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pb-6">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tabs */}
              <div className="flex gap-1 overflow-x-auto no-scrollbar border-t border-gray-200 dark:border-gray-800">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      className={`relative flex items-center gap-2 px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors ${
                        activeTab === tab.id
                          ? 'text-coral-600 dark:text-coral-400'
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" strokeWidth={2.5} />
                      <span>{tab.label}</span>
                      {tab.badge !== undefined && tab.badge > 0 && (
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          activeTab === tab.id
                            ? 'bg-coral-100 dark:bg-coral-900/30 text-coral-700 dark:text-coral-300'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                        }`}>
                          {tab.badge}
                        </span>
                      )}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral-600 dark:bg-coral-400"
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <AnimatePresence mode="wait">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Favorites Preview */}
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-rose-500" fill="currentColor" />
                        <h3 className="text-lg font-black text-gray-900 dark:text-white">Recent Favorites</h3>
                      </div>
                      <button
                        onClick={() => setActiveTab('favorites')}
                        className="text-sm font-bold text-coral-600 dark:text-coral-400 hover:underline"
                      >
                        View All
                      </button>
                    </div>
                    <div className="space-y-2">
                      {favorites.slice(0, 3).map((fav) => {
                        const data = fav.item_type === 'species' ? speciesData[fav.item_slug] : plantsData[fav.item_slug];
                        if (!data) return null;
                        return (
                          <Link
                            key={fav.id}
                            to={`/${fav.item_type === 'species' ? 'species' : 'plants'}/${data.slug}`}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden flex-shrink-0">
                              {data.image_url ? (
                                <img src={data.image_url} alt={data.common_name} className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  {fav.item_type === 'species' ? <Fish className="w-5 h-5 text-gray-400" /> : <Leaf className="w-5 h-5 text-gray-400" />}
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-bold text-gray-900 dark:text-white truncate">{data.common_name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 italic truncate">{data.scientific_name}</div>
                            </div>
                          </Link>
                        );
                      })}
                      {favorites.length === 0 && (
                        <div className="text-center py-8 text-sm text-gray-500 dark:text-gray-400">
                          No favorites yet
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Achievements Preview */}
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-amber-500" />
                        <h3 className="text-lg font-black text-gray-900 dark:text-white">Achievements</h3>
                      </div>
                      <button
                        onClick={() => setActiveTab('achievements')}
                        className="text-sm font-bold text-coral-600 dark:text-coral-400 hover:underline"
                      >
                        View All
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {achievements.slice(0, 3).map((achievement) => {
                        const Icon = achievement.icon;
                        return (
                          <div
                            key={achievement.id}
                            className={`aspect-square rounded-xl flex flex-col items-center justify-center p-3 transition-all ${
                              achievement.unlocked
                                ? `bg-${achievement.color}-100 dark:bg-${achievement.color}-900/20 border-2 border-${achievement.color}-200 dark:border-${achievement.color}-800`
                                : 'bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 opacity-50'
                            }`}
                          >
                            <Icon className={`w-6 h-6 mb-1 ${
                              achievement.unlocked ? `text-${achievement.color}-600 dark:text-${achievement.color}-400` : 'text-gray-400'
                            }`} strokeWidth={2.5} />
                            <div className={`text-[10px] font-bold text-center ${
                              achievement.unlocked ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                            }`}>
                              {achievement.name.split(' ')[0]}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Profile Details (Edit Mode) */}
                {isEditing && (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <h3 className="text-lg font-black text-gray-900 dark:text-white mb-4">Edit Profile</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Display Name</label>
                        <input
                          type="text"
                          value={profile.displayName}
                          onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Bio</label>
                        <textarea
                          value={profile.bio}
                          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                          rows={3}
                          className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-all resize-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Location</label>
                          <input
                            type="text"
                            value={profile.location}
                            onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Website</label>
                          <input
                            type="url"
                            value={profile.website}
                            onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                            placeholder="https://example.com"
                            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Favorites Tab */}
            {activeTab === 'favorites' && (
              <motion.div
                key="favorites"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Species */}
                {favSpecies.length > 0 && (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Fish className="w-5 h-5 text-coral-500" strokeWidth={2.5} />
                      <h3 className="text-lg font-black text-gray-900 dark:text-white">Fish ({favSpecies.length})</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {favSpecies.map((fav) => {
                        const data = speciesData[fav.item_slug];
                        if (!data) return null;
                        return (
                          <div key={fav.id} className="relative group">
                            <Link
                              to={`/species/${data.slug}`}
                              className="block bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-coral-300 dark:hover:border-coral-700 overflow-hidden transition-all"
                            >
                              <div className="aspect-square bg-gray-100 dark:bg-gray-700">
                                {data.image_url ? (
                                  <img src={data.image_url} alt={data.common_name} className="w-full h-full object-cover" />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <Fish className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                                  </div>
                                )}
                              </div>
                              <div className="p-2">
                                <div className="text-xs font-bold text-gray-900 dark:text-white truncate">{data.common_name}</div>
                                <div className="text-[10px] text-gray-500 dark:text-gray-400 italic truncate">{data.scientific_name}</div>
                              </div>
                            </Link>
                            {isOwnProfile && isEditing && (
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleFavorite('species', fav.item_slug);
                                }}
                                className="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                              >
                                <Trash2 className="w-3 h-3" strokeWidth={2.5} />
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Plants */}
                {favPlants.length > 0 && (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Leaf className="w-5 h-5 text-emerald-500" strokeWidth={2.5} />
                      <h3 className="text-lg font-black text-gray-900 dark:text-white">Plants ({favPlants.length})</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {favPlants.map((fav) => {
                        const data = plantsData[fav.item_slug];
                        if (!data) return null;
                        return (
                          <div key={fav.id} className="relative group">
                            <Link
                              to={`/plants/${data.slug}`}
                              className="block bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 overflow-hidden transition-all"
                            >
                              <div className="aspect-square bg-gray-100 dark:bg-gray-700">
                                {data.image_url ? (
                                  <img src={data.image_url} alt={data.common_name} className="w-full h-full object-cover" />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <Leaf className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                                  </div>
                                )}
                              </div>
                              <div className="p-2">
                                <div className="text-xs font-bold text-gray-900 dark:text-white truncate">{data.common_name}</div>
                                <div className="text-[10px] text-gray-500 dark:text-gray-400 italic truncate">{data.scientific_name}</div>
                              </div>
                            </Link>
                            {isOwnProfile && isEditing && (
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleFavorite('plant', fav.item_slug);
                                }}
                                className="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                              >
                                <Trash2 className="w-3 h-3" strokeWidth={2.5} />
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {favorites.length === 0 && (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-12 text-center">
                    <Heart className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">No Favorites Yet</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Start exploring species and plants to add them to your favorites!
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Trophy className="w-6 h-6 text-amber-500" />
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">
                      Achievements ({unlockedCount}/{achievements.length})
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement) => {
                      const Icon = achievement.icon;
                      const percentage = (achievement.progress / achievement.max) * 100;
                      return (
                        <div
                          key={achievement.id}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            achievement.unlocked
                              ? `bg-${achievement.color}-50 dark:bg-${achievement.color}-900/10 border-${achievement.color}-200 dark:border-${achievement.color}-800`
                              : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-3 rounded-xl ${
                              achievement.unlocked
                                ? `bg-${achievement.color}-100 dark:bg-${achievement.color}-900/30`
                                : 'bg-gray-100 dark:bg-gray-700'
                            }`}>
                              <Icon className={`w-6 h-6 ${
                                achievement.unlocked ? `text-${achievement.color}-600 dark:text-${achievement.color}-400` : 'text-gray-400'
                              }`} strokeWidth={2.5} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-1">
                                <h4 className="font-bold text-gray-900 dark:text-white">{achievement.name}</h4>
                                {achievement.unlocked && <Star className="w-5 h-5 text-amber-400" fill="currentColor" />}
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{achievement.description}</p>
                              {/* Progress Bar */}
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${percentage}%` }}
                                  transition={{ duration: 0.5, delay: 0.2 }}
                                  className={`h-full ${
                                    achievement.unlocked
                                      ? `bg-${achievement.color}-500`
                                      : 'bg-gray-400 dark:bg-gray-600'
                                  }`}
                                />
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {achievement.progress}/{achievement.max}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Activity Tab */}
            {activeTab === 'activity' && (
              <motion.div
                key="activity"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-6 h-6 text-coral-500" />
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">Recent Activity</h3>
                  </div>
                  <div className="space-y-3">
                    {recentActivity.map((activity, idx) => {
                      const Icon = activity.icon;
                      return (
                        <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                          <div className="p-2 bg-white dark:bg-gray-900 rounded-lg">
                            <Icon className="w-4 h-4 text-coral-600 dark:text-coral-400" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-bold text-gray-900 dark:text-white">{activity.item}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{activity.timestamp}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProfilePage;