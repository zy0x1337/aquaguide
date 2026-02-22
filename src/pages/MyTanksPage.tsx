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
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Loader2 className="w-16 h-16 text-indigo-600 dark:text-indigo-400 animate-spin mx-auto mb-4" />
          <p className="text-slate-700 dark:text-slate-300 font-semibold">Loading your tanks...</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Just a moment</p>
        </motion.div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <Fish className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Oops!</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">{error}</p>
          <button
            onClick={loadTanks}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow-sm hover:shadow transition-all"
          >
            Try Again
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="My Tanks"
        description="Manage your aquarium collection - add, edit, and monitor your tanks."
      />

      {/* Clean Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Droplets className="w-8 h-8" />
                <h1 className="text-4xl font-bold">My Tanks</h1>
              </div>
              <p className="text-indigo-100 ml-11">Manage your aquarium collection</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-5 py-3 rounded-xl font-semibold transition-all border border-white/20"
              >
                <BarChart3 className="w-5 h-5" />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-white hover:bg-white/95 text-indigo-600 px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow transition-all"
              >
                <Plus className="w-5 h-5" />
                Add Tank
              </button>
            </div>
          </div>

          {/* Clean Stats */}
          {tanks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-11"
            >
              <CleanStatCard
                icon={<LayoutGrid className="w-5 h-5 text-blue-600" />}
                label="Total Tanks"
                value={tanks.length}
              />
              <CleanStatCard
                icon={<Sparkles className="w-5 h-5 text-purple-600" />}
                label="Fish Species"
                value={totalFishSpecies}
              />
              <CleanStatCard
                icon={<Fish className="w-5 h-5 text-emerald-600" />}
                label="Total Fish"
                value={totalFish}
              />
              <CleanStatCard
                icon={<Droplets className="w-5 h-5 text-cyan-600" />}
                label="Total Volume"
                value={`${totalVolume}L`}
              />
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {tanks.length === 0 ? (
          // Clean Empty State
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Fish className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">No Tanks Yet</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Start your aquarium journey by adding your first tank.
                Track inhabitants, water parameters, and maintenance schedules.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-sm hover:shadow transition-all"
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

// Clean Stat Card Component
const CleanStatCard = ({ 
  icon, 
  label, 
  value
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string | number;
}) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
      {label}
    </div>
    <div className="text-2xl font-bold text-white">
      {value}
    </div>
  </div>
);

export default MyTanksPage;
