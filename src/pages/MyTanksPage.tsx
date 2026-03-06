import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Fish, Loader2, LayoutGrid, BarChart3, Droplets, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import TankCard from '../components/tanks/TankCard';
import AddTankModal from '../components/tanks/AddTankModal';
import { Tank } from '../types/tank';
import { SEOHead } from '../components/seo/SEOHead';
import { getUserTanks, createTank, deleteTank } from '../lib/supabase/tanks';
import { useToast } from '../contexts/ToastContext';

const MyTanksPage = () => {
  const [tanks, setTanks] = useState<Tank[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const toast = useToast();

  useEffect(() => {
    localStorage.removeItem('aquaguide_tanks'); // Migration cleanup
    loadTanks();
  }, []);

  const loadTanks = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getUserTanks();
      setTanks(data);
    } catch (err) {
      console.error('Error loading tanks:', err);
      setError('Failed to load tanks. Please try again.');
      toast.error('Failed to load tanks', 'Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTank = async (newTank: Omit<Tank, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      await createTank(newTank);
      setIsModalOpen(false);
      await loadTanks();
      toast.success('Tank created!', `${newTank.name} has been added to your collection.`);
    } catch (err) {
      console.error('Error creating tank:', err);
      toast.error('Failed to create tank', 'Please try again or check your connection.');
    }
  };

  const handleDeleteTank = async (id: string) => {
    const tank = tanks.find(t => t.id === id);
    if (!tank) return;
    
    if (!confirm(`Are you sure you want to delete ${tank.name}?`)) return;
    
    try {
      await deleteTank(id);
      await loadTanks();
      toast.success('Tank deleted', `${tank.name} has been removed from your collection.`);
    } catch (err) {
      console.error('Error deleting tank:', err);
      toast.error('Failed to delete tank', 'Please try again.');
    }
  };

  // Compute stats
  const totalFishSpecies = tanks.reduce((sum, t) => sum + (t.inhabitants?.fish.length || 0), 0);
  const totalFish = tanks.reduce((sum, t) => {
    return sum + (t.inhabitants?.fish.reduce((s, f) => s + f.quantity, 0) || 0);
  }, 0);
  const totalVolume = tanks.reduce((sum, t) => sum + t.volumeLiters, 0);

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50/20 to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="relative">
            <div className="w-16 h-16 border-4 border-indigo-200 dark:border-indigo-900 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin mx-auto mb-4" />
            <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
          </div>
          <p className="text-slate-700 dark:text-slate-300 font-semibold">Loading your tanks...</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Just a moment</p>
        </motion.div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-red-50/20 to-slate-50 dark:from-slate-950 dark:via-red-950/10 dark:to-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950/30 dark:to-rose-950/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-red-200 dark:border-red-900 shadow-lg">
            <Fish className="w-9 h-9 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Oops!</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">{error}</p>
          <button
            onClick={loadTanks}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Try Again
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/20 to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <SEOHead
        title="My Tanks"
        description="Manage your aquarium collection - add, edit, and monitor your tanks."
      />

      {/* Clean Modern Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">My Tanks</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{tanks.length} {tanks.length === 1 ? 'aquarium' : 'aquariums'} in your collection</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Link
                to="/dashboard"
                className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-semibold text-sm transition-all rounded-lg shadow-sm hover:shadow"
              >
                <BarChart3 className="w-4 h-4" />
                Dashboard
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <Plus className="w-4 h-4" />
                Add Tank
              </button>
            </div>
          </div>

          {/* Stats Bar - Only if tanks exist */}
          {tanks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-8 py-5 border-t border-slate-200 dark:border-slate-800"
            >
              <StatItem icon={<LayoutGrid className="w-4 h-4" />} label="Tanks" value={tanks.length} />
              <StatItem icon={<Sparkles className="w-4 h-4" />} label="Species" value={totalFishSpecies} />
              <StatItem icon={<Fish className="w-4 h-4" />} label="Fish" value={totalFish} />
              <StatItem icon={<Droplets className="w-4 h-4" />} label="Volume" value={`${totalVolume}L`} />
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {tanks.length === 0 ? (
          // Enhanced Empty State
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              <div className="relative w-28 h-28 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900/40 dark:to-purple-900/40 rounded-3xl blur-2xl" />
                <div className="relative w-28 h-28 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-3xl flex items-center justify-center border border-indigo-200 dark:border-indigo-900 shadow-2xl">
                  <Fish className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">No Tanks Yet</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Start your aquarium journey by adding your first tank.
                Track inhabitants, water parameters, and maintenance schedules.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <Plus className="w-5 h-5" />
                Add Your First Tank
              </button>
            </div>
          </motion.div>
        ) : (
          // Tank Grid
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {tanks.map((tank, index) => (
              <motion.div
                key={tank.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <TankCard tank={tank} onDelete={handleDeleteTank} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>

      {/* Add Tank Modal */}
      <AddTankModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTank}
      />
    </div>
  );
};

// Clean Stat Item Component
const StatItem = ({ 
  icon, 
  label, 
  value
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string | number;
}) => (
  <div className="flex items-center gap-3">
    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400">
      {icon}
    </div>
    <div>
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">{label}</p>
      <p className="text-lg font-bold text-slate-900 dark:text-white">{value}</p>
    </div>
  </div>
);

export default MyTanksPage;
