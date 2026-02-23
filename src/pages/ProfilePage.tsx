import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { User, Calendar, Award, Fish, Droplets, Camera, Edit2, Save, X, Upload, ArrowLeft, Heart, Leaf, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
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

const ProfilePage = () => {
  const { userId } = useParams<{ userId?: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
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
    { label: 'Tanks', value: '3', icon: Droplets },
    { label: 'Species Kept', value: '12', icon: Fish },
    { label: 'Member Since', value: new Date(profileUser?.created_at || user?.created_at || Date.now()).getFullYear().toString(), icon: Calendar },
    { label: 'Favorites', value: favorites.length.toString(), icon: Heart },
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

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
          <div className="text-slate-600 dark:text-slate-400">Loading profile...</div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <SEOHead 
        title={`${profile.displayName}'s Profile - AquaGuide`}
        description={`View ${profile.displayName}'s aquarium profile, tanks, and aquarium journey on AquaGuide.`}
      />
      
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button (if viewing other user's profile) */}
          {!isOwnProfile && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 mb-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-sm font-semibold">Back</span>
            </motion.button>
          )}

          {/* Profile Header Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-6"
          >
            {/* Cover Image */}
            <div className="relative h-32 group">
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
                <div className="w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600" />
              )}
              {isOwnProfile && (
                <button
                  onClick={() => headerInputRef.current?.click()}
                  disabled={uploadingHeader}
                  className="absolute bottom-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white transition-all opacity-0 group-hover:opacity-100"
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
            <div className="relative px-6 pb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16 mb-4">
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
                      className="w-24 h-24 rounded-full shadow-xl border-4 border-white dark:border-slate-900 object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl border-4 border-white dark:border-slate-900">
                      {getUserInitials()}
                    </div>
                  )}
                  {isOwnProfile && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:cursor-not-allowed"
                    >
                      {uploading ? (
                        <Upload className="w-6 h-6 text-white animate-pulse" strokeWidth={2.5} />
                      ) : (
                        <Camera className="w-6 h-6 text-white" strokeWidth={2.5} />
                      )}
                    </button>
                  )}
                </div>

                {/* Name */}
                <div className="flex-1 z-20 bg-white dark:bg-slate-900 px-2 py-1 rounded-lg">
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    {profile.displayName}
                  </h1>
                  {profile.location && (
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {profile.location}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 z-30">
                  {isOwnProfile ? (
                    <>
                      {/* Share Button */}
                      <button
                        onClick={handleShareProfile}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-sm"
                      >
                        Share
                      </button>
                      {/* Edit Button */}
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm ${
                          isEditing
                            ? 'bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-950/50'
                            : 'bg-black dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-100'
                        }`}
                      >
                        {isEditing ? (
                          <>
                            <X className="w-4 h-4" strokeWidth={2.5} />
                            Cancel
                          </>
                        ) : (
                          <>
                            <Edit2 className="w-4 h-4" strokeWidth={2.5} />
                            Edit
                          </>
                        )}
                      </button>
                    </>
                  ) : (
                    <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400 shadow-sm">
                      Viewing Profile
                    </div>
                  )}
                </div>
              </div>

              {/* Bio */}
              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows={3}
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {profile.bio}
                </p>
              )}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-950/30 rounded-lg">
                      <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Favorites Section */}
          {favorites.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <Heart className="w-5 h-5 text-rose-500" fill="currentColor" strokeWidth={2.5} />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Favorites
                </h2>
              </div>

              {/* Species */}
              {favSpecies.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Fish className="w-4 h-4 text-indigo-500" strokeWidth={2.5} />
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                      Fish ({favSpecies.length})
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {favSpecies.map((fav) => {
                      const data = speciesData[fav.item_slug];
                      if (!data) return null;

                      return (
                        <div key={fav.id} className="relative group">
                          <Link
                            to={`/species/${data.slug}`}
                            className="block bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-rose-300 dark:hover:border-rose-700 overflow-hidden transition-all"
                          >
                            <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-700">
                              {data.image_url ? (
                                <img
                                  src={data.image_url}
                                  alt={data.common_name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <Fish className="w-8 h-8 text-slate-300 dark:text-slate-600" />
                                </div>
                              )}
                            </div>
                            <div className="p-2">
                              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                                {data.common_name}
                              </div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 italic truncate">
                                {data.scientific_name}
                              </div>
                            </div>
                          </Link>
                          {/* Remove button (edit mode only) */}
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
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Leaf className="w-4 h-4 text-emerald-500" strokeWidth={2.5} />
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                      Plants ({favPlants.length})
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {favPlants.map((fav) => {
                      const data = plantsData[fav.item_slug];
                      if (!data) return null;

                      return (
                        <div key={fav.id} className="relative group">
                          <Link
                            to={`/plants/${data.slug}`}
                            className="block bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 overflow-hidden transition-all"
                          >
                            <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-700">
                              {data.image_url ? (
                                <img
                                  src={data.image_url}
                                  alt={data.common_name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <Leaf className="w-8 h-8 text-slate-300 dark:text-slate-600" />
                                </div>
                              )}
                            </div>
                            <div className="p-2">
                              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                                {data.common_name}
                              </div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 italic truncate">
                                {data.scientific_name}
                              </div>
                            </div>
                          </Link>
                          {/* Remove button (edit mode only) */}
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
            </motion.div>
          )}

          {/* Profile Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6"
          >
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Profile Details
            </h2>

            <div className="space-y-6">
              {/* Display Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Display Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.displayName}
                    onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                ) : (
                  <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm">
                    {profile.displayName}
                  </div>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Location
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                ) : (
                  <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm">
                    {profile.location || 'Not set'}
                  </div>
                )}
              </div>

              {/* Website */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Website
                </label>
                {isEditing ? (
                  <input
                    type="url"
                    value={profile.website}
                    onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                    placeholder="https://example.com"
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                ) : (
                  <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm">
                    {profile.website || 'Not set'}
                  </div>
                )}
              </div>

              {/* Favorite Species */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Favorite Species
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.favoriteSpecies}
                    onChange={(e) => setProfile({ ...profile, favoriteSpecies: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                ) : (
                  <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm">
                    {profile.favoriteSpecies || 'Not set'}
                  </div>
                )}
              </div>

              {/* Save Button */}
              {isEditing && isOwnProfile && (
                <button
                  onClick={handleSave}
                  className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-black dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-black font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md border border-black dark:border-white overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent" />
                  <span className="relative flex items-center gap-2">
                    <Save className="w-4 h-4" strokeWidth={2.5} />
                    Save Changes
                  </span>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProfilePage;