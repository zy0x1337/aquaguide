import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { User, Mail, Calendar, Award, Fish, Droplets, Camera, Edit2, Save, X } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    displayName: user?.email?.split('@')[0] || 'User',
    bio: 'Aquarium enthusiast and fish keeper',
    location: 'Hannover, Germany',
    website: '',
    favoriteSpecies: 'Betta Splendens',
  });

  const stats = [
    { label: 'Tanks', value: '3', icon: Droplets },
    { label: 'Species Kept', value: '12', icon: Fish },
    { label: 'Member Since', value: '2024', icon: Calendar },
    { label: 'Level', value: 'Expert', icon: Award },
  ];

  const getUserInitials = () => {
    if (!user?.email) return 'U';
    const email = user.email.split('@')[0];
    return email.slice(0, 2).toUpperCase();
  };

  const handleSave = () => {
    // Save profile changes
    setIsEditing(false);
  };

  return (
    <PageTransition>
      <SEOHead 
        title="Profile - AquaGuide"
        description="View and manage your AquaGuide profile, tanks, and aquarium journey."
      />
      
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Profile Header Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-6"
          >
            {/* Cover Image */}
            <div className="h-32 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 relative">
              <button className="absolute bottom-4 right-4 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white transition-all">
                <Camera className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>

            {/* Profile Info */}
            <div className="px-6 pb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16 mb-4">
                {/* Avatar */}
                <div className="relative group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl border-4 border-white dark:border-slate-900">
                    {getUserInitials()}
                  </div>
                  <button className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </button>
                </div>

                {/* Name & Email */}
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    {profile.displayName}
                  </h1>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <Mail className="w-4 h-4" strokeWidth={2.5} />
                    <span className="text-sm">{user?.email}</span>
                  </div>
                </div>

                {/* Edit Button */}
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
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
                      Edit Profile
                    </>
                  )}
                </button>
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

          {/* Profile Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
                    {profile.location}
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
                    {profile.favoriteSpecies}
                  </div>
                )}
              </div>

              {/* Save Button */}
              {isEditing && (
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