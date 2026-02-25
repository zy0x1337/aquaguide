import { useState } from 'react';
import { Plus } from 'lucide-react';
import { TankProfile } from '../../types/tankProfile';
import { TankProfileCard } from './TankProfileCard';
import { motion } from 'framer-motion';

interface TankProfileGalleryProps {
  profiles: TankProfile[];
  onCreateNew?: () => void;
  showCreateButton?: boolean;
}

export const TankProfileGallery = ({ 
  profiles, 
  onCreateNew,
  showCreateButton = true 
}: TankProfileGalleryProps) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white">
            My Aquariums
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {profiles.length} {profiles.length === 1 ? 'tank' : 'tanks'}
          </p>
        </div>
        
        {showCreateButton && onCreateNew && (
          <button
            onClick={onCreateNew}
            className="flex items-center gap-2 px-4 py-2 bg-coral-600 hover:bg-coral-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Plus className="w-5 h-5" />
            <span>New Tank</span>
          </button>
        )}
      </div>
      
      {/* Gallery Grid */}
      {profiles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TankProfileCard profile={profile} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700">
          <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            No Tanks Yet
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Create your first tank profile to showcase your aquarium
          </p>
          {onCreateNew && (
            <button
              onClick={onCreateNew}
              className="inline-flex items-center gap-2 px-6 py-3 bg-coral-600 hover:bg-coral-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5" />
              <span>Create Tank Profile</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
