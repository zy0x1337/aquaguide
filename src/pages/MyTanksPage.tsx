import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Fish, Loader2, LayoutGrid, BarChart3 } from 'lucide-react';
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

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-indigo-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600 font-semibold">Loading your tanks...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Fish className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Oops!</h2>
          <p className="text-slate-600 mb-6">{error}</p>
          <button
            onClick={loadTanks}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <SEOHead
        title="My Tanks"
        description="Manage your aquarium collection - add, edit, and monitor your tanks."
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">My Tanks</h1>
              <p className="text-indigo-200">Manage your aquarium collection</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-all"
              >
                <BarChart3 className="w-5 h-5" />
                Dashboard
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl"
              >
                <Plus className="w-5 h-5" />
                Add Tank
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          {tanks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <StatCard
                icon={<LayoutGrid className="w-5 h-5" />}
                label="Total Tanks"
                value={tanks.length}
              />
              <StatCard
                icon={<Fish className="w-5 h-5" />}
                label="Fish Species"
                value={tanks.reduce((sum, t) => sum + (t.inhabitants?.fish.length || 0), 0)}
              />
              <StatCard
                icon={<Fish className="w-5 h-5" />}
                label="Total Fish"
                value={tanks.reduce((sum, t) => {
                  return sum + (t.inhabitants?.fish.reduce((s, f) => s + f.quantity, 0) || 0);
                }, 0)}
              />
              <StatCard
                icon={<Fish className="w-5 h-5" />}
                label="Total Volume"
                value={`${tanks.reduce((sum, t) => sum + t.volumeLiters, 0)}L`}
              />
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {tanks.length === 0 ? (
          // Empty State
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <Fish className="w-16 h-16 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">No Tanks Yet</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Start your aquarium journey by adding your first tank.
                Track inhabitants, water parameters, and maintenance schedules.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {tanks.map((tank, index) => (
              <motion.div
                key={tank.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
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

// Stat Card Component
const StatCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) => (
  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
    <div className="flex items-center gap-2 mb-2 text-indigo-200">
      {icon}
      <span className="text-xs font-semibold uppercase tracking-wide">{label}</span>
    </div>
    <div className="text-2xl font-bold">{value}</div>
  </div>
);

export default MyTanksPage;
