import { useState, useEffect } from 'react';
import { Plus, Fish, Droplets, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import TankCard from '../components/tanks/TankCard';
import AddTankModal from '../components/tanks/AddTankModal';
import { Tank } from '../types/tank';
import { SEOHead } from '../components/seo/SEOHead';

const MyTanksPage = () => {
  const [tanks, setTanks] = useState<Tank[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load tanks from localStorage on mount
  useEffect(() => {
    const storedTanks = localStorage.getItem('aquaguide_tanks');
    if (storedTanks) {
      setTanks(JSON.parse(storedTanks));
    }
  }, []);

  // Save tanks to localStorage whenever they change
  useEffect(() => {
    if (tanks.length > 0) {
      localStorage.setItem('aquaguide_tanks', JSON.stringify(tanks));
    }
  }, [tanks]);

  const handleAddTank = (newTank: Omit<Tank, 'id' | 'createdAt'>) => {
    const tank: Tank = {
      ...newTank,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    const updatedTanks = [...tanks, tank];
    setTanks(updatedTanks);
    localStorage.setItem('aquaguide_tanks', JSON.stringify(updatedTanks));
    setIsModalOpen(false);
  };

  const handleDeleteTank = (id: string) => {
    const updatedTanks = tanks.filter(t => t.id !== id);
    setTanks(updatedTanks);
    localStorage.setItem('aquaguide_tanks', JSON.stringify(updatedTanks));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <SEOHead
        title="My Tanks"
        description="Manage your aquarium collection and track your fish, plants, and water parameters."
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">My Tanks</h1>
              <p className="text-indigo-200">Manage your aquarium collection</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5" />
              Add Tank
            </button>
          </div>

          {/* Stats Bar */}
          {tanks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <StatCard
                icon={<Fish className="w-5 h-5" />}
                label="Total Tanks"
                value={tanks.length}
              />
              <StatCard
                icon={<Droplets className="w-5 h-5" />}
                label="Total Volume"
                value={`${tanks.reduce((sum, t) => sum + t.volumeLiters, 0)}L`}
              />
              <StatCard
                icon={<Fish className="w-5 h-5" />}
                label="Fish Species"
                value={tanks.reduce((sum, t) => sum + (t.inhabitants?.fish.length || 0), 0)}
              />
              <StatCard
                icon={<Calendar className="w-5 h-5" />}
                label="Avg Age"
                value={`${Math.round(
                  tanks.reduce((sum, t) => {
                    const months = Math.floor(
                      (Date.now() - new Date(t.createdAt).getTime()) / (1000 * 60 * 60 * 24 * 30)
                    );
                    return sum + months;
                  }, 0) / (tanks.length || 1)
                )}mo`}
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
                transition={{ delay: index * 0.1 }}
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
      <span className="text-xs font-semibold uppercase">{label}</span>
    </div>
    <div className="text-2xl font-bold">{value}</div>
  </div>
);

export default MyTanksPage;
