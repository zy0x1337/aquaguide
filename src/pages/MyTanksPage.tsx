import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Fish, Loader2, LayoutGrid, BarChart3, Droplets, Activity, Sparkles } from 'lucide-react';
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <Loader2 className="w-20 h-20 text-indigo-600 dark:text-indigo-400 animate-spin mx-auto mb-6 relative" />
          </div>
          <p className="text-slate-700 dark:text-slate-300 font-bold text-lg">Loading your tanks...</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Just a moment</p>
        </motion.div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl">
            <Fish className="w-10 h-10 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Oops!</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">{error}</p>
          <button
            onClick={loadTanks}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Try Again
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <SEOHead
        title="My Tanks"
        description="Manage your aquarium collection - add, edit, and monitor your tanks."
      />

      {/* Enhanced Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Droplets className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">My Tanks</h1>
                  <p className="text-indigo-200 text-sm md:text-base mt-1">Manage your aquarium collection</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-5 py-3 rounded-xl font-bold transition-all border border-white/20 shadow-lg hover:shadow-xl"
              >
                <BarChart3 className="w-5 h-5" />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-white hover:bg-white/95 text-indigo-600 px-6 py-3 rounded-xl font-black shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <Plus className="w-5 h-5" />
                Add Tank
              </button>
            </div>
          </div>

          {/* Enhanced Quick Stats */}
          {tanks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <EnhancedStatCard
                icon={<LayoutGrid className="w-6 h-6" />}
                label="Total Tanks"
                value={tanks.length}
                gradient="from-blue-500 to-cyan-500"
              />
              <EnhancedStatCard
                icon={<Sparkles className="w-6 h-6" />}
                label="Fish Species"
                value={totalFishSpecies}
                gradient="from-purple-500 to-pink-500"
              />
              <EnhancedStatCard
                icon={<Fish className="w-6 h-6" />}
                label="Total Fish"
                value={totalFish}
                gradient="from-emerald-500 to-green-500"
              />
              <EnhancedStatCard
                icon={<Droplets className="w-6 h-6" />}
                label="Total Volume"
                value={`${totalVolume}L`}
                gradient="from-amber-500 to-orange-500"
              />
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-10 pb-16">
        {tanks.length === 0 ? (
          // Enhanced Empty State
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl">
                  <Fish className="w-16 h-16 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">No Tanks Yet</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg">
                Start your aquarium journey by adding your first tank.
                Track inhabitants, water parameters, and maintenance schedules.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
              >
                <Plus className="w-6 h-6" />
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

// Enhanced Stat Card Component
const EnhancedStatCard = ({ 
  icon, 
  label, 
  value, 
  gradient 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string | number;
  gradient: string;
}) => (
  <div className="group relative">
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
    <div className="relative bg-white dark:bg-slate-800 rounded-xl p-4 md:p-5 border-2 border-white/50 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${gradient} flex items-center justify-center shadow-lg`}>
          <div className="text-white">{icon}</div>
        </div>
      </div>
      <div className="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
        {label}
      </div>
      <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
        {value}
      </div>
    </div>
  </div>
);

export default MyTanksPage;
