import { useState, useEffect } from 'react';
import { Plus, Fish, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import TankCard from '../components/tanks/TankCard';
import AddTankModal from '../components/tanks/AddTankModal';
import DashboardStats from '../components/dashboard/DashboardStats';
import TankHealthList from '../components/dashboard/TankHealthList';
import RecentActivityFeed from '../components/dashboard/RecentActivityFeed';
import QuickActions from '../components/dashboard/QuickActions';
import AggregatedParameterChart from '../components/dashboard/AggregatedParameterChart';
import { Tank } from '../types/tank';
import { SEOHead } from '../components/seo/SEOHead';
import { getUserTanks, createTank, deleteTank } from '../lib/supabase/tanks';
import { 
  getDashboardStats, 
  getAllTankHealthScores, 
  getRecentActivity, 
  getAggregatedParameterTrends,
  DashboardStats as StatsType, 
  TankHealthScore, 
  RecentActivity 
} from '../lib/supabase/dashboard';

const MyTanksPage = () => {
  const [tanks, setTanks] = useState<Tank[]>([]);
  const [stats, setStats] = useState<StatsType | null>(null);
  const [healthScores, setHealthScores] = useState<TankHealthScore[]>([]);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [parameterTrends, setParameterTrends] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load all data on mount
  useEffect(() => {
    localStorage.removeItem('aquaguide_tanks'); // Migration cleanup
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Load all data in parallel
      const [tanksData, statsData, healthData, activityData, trendsData] = await Promise.all([
        getUserTanks(),
        getDashboardStats(),
        getAllTankHealthScores(),
        getRecentActivity(10),
        getAggregatedParameterTrends(30),
      ]);

      setTanks(tanksData);
      setStats(statsData);
      setHealthScores(healthData);
      setRecentActivity(activityData);
      setParameterTrends(trendsData);
    } catch (err) {
      console.error('Error loading dashboard data:', err);
      setError('Failed to load dashboard. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTank = async (newTank: Omit<Tank, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const createdTank = await createTank(newTank);
      setIsModalOpen(false);
      // Reload all data to update stats
      await loadAllData();
    } catch (err) {
      console.error('Error creating tank:', err);
      alert('Failed to create tank. Please try again.');
    }
  };

  const handleDeleteTank = async (id: string) => {
    if (!confirm('Are you sure you want to delete this tank?')) return;
    
    try {
      await deleteTank(id);
      // Reload all data to update stats
      await loadAllData();
    } catch (err) {
      console.error('Error deleting tank:', err);
      alert('Failed to delete tank. Please try again.');
    }
  };

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-indigo-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600 font-semibold">Loading your dashboard...</p>
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
            onClick={loadAllData}
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
        title="My Tanks Dashboard"
        description="Manage your aquarium collection, monitor tank health, and track water parameters."
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
              <h1 className="text-4xl font-bold mb-2">My Tanks Dashboard</h1>
              <p className="text-indigo-200">Monitor and manage your aquarium collection</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5" />
              Add Tank
            </button>
          </div>
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
          // Dashboard Content
          <div className="space-y-8">
            {/* Stats Overview */}
            {stats && <DashboardStats stats={stats} />}

            {/* Quick Actions */}
            <QuickActions onAddTank={() => setIsModalOpen(true)} />

            {/* Parameter Trends Chart */}
            {parameterTrends.length > 0 && (
              <AggregatedParameterChart trends={parameterTrends} />
            )}

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Tank Health */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900">Tank Health Overview</h2>
                </div>
                <TankHealthList healthScores={healthScores} />
              </div>

              {/* Right Column - Recent Activity */}
              <div>
                <RecentActivityFeed activities={recentActivity} />
              </div>
            </div>

            {/* All Tanks Grid */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">All Tanks</h2>
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
            </div>
          </div>
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

export default MyTanksPage;
