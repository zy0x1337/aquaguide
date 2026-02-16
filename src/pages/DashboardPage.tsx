import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Loader2, ArrowRight, Fish } from 'lucide-react';
import { motion } from 'framer-motion';
import DashboardStats from '../components/dashboard/DashboardStats';
import TankHealthList from '../components/dashboard/TankHealthList';
import RecentActivityFeed from '../components/dashboard/RecentActivityFeed';
import QuickActions from '../components/dashboard/QuickActions';
import AlertsPanel from '../components/dashboard/AlertsPanel';
import { SEOHead } from '../components/seo/SEOHead';
import { getUserTanks } from '../lib/supabase/tanks';
import { Tank } from '../types/tank';
import { 
  getDashboardStats, 
  getAllTankHealthScores, 
  getRecentActivity,
  DashboardStats as StatsType, 
  TankHealthScore, 
  RecentActivity 
} from '../lib/supabase/dashboard';
import { getAllAlerts, ParameterAlert } from '../lib/supabase/alerts';

const DashboardPage = () => {
  const [tanks, setTanks] = useState<Tank[]>([]);
  const [stats, setStats] = useState<StatsType | null>(null);
  const [healthScores, setHealthScores] = useState<TankHealthScore[]>([]);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [alerts, setAlerts] = useState<ParameterAlert[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const [tanksData, statsData, healthData, activityData] = await Promise.all([
        getUserTanks(),
        getDashboardStats(),
        getAllTankHealthScores(),
        getRecentActivity(10),
      ]);

      setTanks(tanksData);
      setStats(statsData);
      setHealthScores(healthData);
      setRecentActivity(activityData);
      
      // Generate alerts from tanks
      const generatedAlerts = getAllAlerts(tanksData);
      setAlerts(generatedAlerts);
    } catch (err) {
      console.error('Error loading dashboard:', err);
      setError('Failed to load dashboard. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-indigo-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600 font-semibold">Loading dashboard...</p>
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
            onClick={loadDashboardData}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Empty State - No Tanks
  if (stats && stats.totalTanks === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        <SEOHead
          title="Dashboard"
          description="Your aquarium dashboard - monitor tank health and track activities."
        />

        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-indigo-200">Your aquarium analytics at a glance</p>
          </div>
        </motion.header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
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
                Add your first tank to start tracking water parameters, maintenance, and health metrics.
              </p>
              <Link
                to="/my-tanks"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
              >
                <Plus className="w-5 h-5" />
                Add Your First Tank
              </Link>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <SEOHead
        title="Dashboard"
        description="Your aquarium dashboard - monitor tank health and track activities."
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
              <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
              <p className="text-indigo-200">Your aquarium analytics at a glance</p>
            </div>
            <Link
              to="/my-tanks"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              View All Tanks
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Stats Overview */}
        {stats && <DashboardStats stats={stats} />}

        {/* Quick Actions */}
        <QuickActions onAddTank={() => window.location.href = '/my-tanks'} />

        {/* Alerts Panel */}
        {alerts.length > 0 && <AlertsPanel alerts={alerts} />}

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Tank Health */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Tank Health</h2>
              <Link
                to="/my-tanks"
                className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm flex items-center gap-1"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <TankHealthList healthScores={healthScores} />
          </div>

          {/* Right Column - Recent Activity */}
          <div>
            <RecentActivityFeed activities={recentActivity} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
