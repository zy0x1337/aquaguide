import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Loader2, ArrowRight, Fish, Sparkles, TrendingUp, Droplets, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import DashboardStats from '../components/dashboard/DashboardStats';
import TankHealthList from '../components/dashboard/TankHealthList';
import RecentActivityFeed from '../components/dashboard/RecentActivityFeed';
import QuickActions from '../components/dashboard/QuickActions';
import AlertsPanel from '../components/dashboard/AlertsPanel';
import TankSelectionModal from '../components/dashboard/TankSelectionModal';
import AddParameterModal from '../components/tanks/AddParameterModal';
import AddMaintenanceModal from '../components/tanks/AddMaintenanceModal';
import { SEOHead } from '../components/seo/SEOHead';
import { getUserTanks, updateTank, getTankById } from '../lib/supabase/tanks';
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
import { addParameterReading, addMaintenanceLog } from '../lib/supabase/tankHistory';

const DashboardPage = () => {
  const [tanks, setTanks] = useState<Tank[]>([]);
  const [stats, setStats] = useState<StatsType | null>(null);
  const [healthScores, setHealthScores] = useState<TankHealthScore[]>([]);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [alerts, setAlerts] = useState<ParameterAlert[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal states
  const [isTankSelectionOpen, setIsTankSelectionOpen] = useState(false);
  const [selectionType, setSelectionType] = useState<'parameters' | 'maintenance'>('parameters');
  const [selectedTankId, setSelectedTankId] = useState<string | null>(null);
  const [selectedTank, setSelectedTank] = useState<Tank | null>(null);
  const [isParameterModalOpen, setIsParameterModalOpen] = useState(false);
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);

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

  // Handle Quick Action clicks
  const handleLogParameters = () => {
    setSelectionType('parameters');
    setIsTankSelectionOpen(true);
  };

  const handleLogMaintenance = () => {
    setSelectionType('maintenance');
    setIsTankSelectionOpen(true);
  };

  // Handle tank selection
  const handleTankSelected = async (tankId: string) => {
    setSelectedTankId(tankId);
    const tank = await getTankById(tankId);
    setSelectedTank(tank);
    
    // Open appropriate modal based on selection type
    if (selectionType === 'parameters') {
      setIsParameterModalOpen(true);
    } else {
      setIsMaintenanceModalOpen(true);
    }
  };

  // Handle parameter submission
  const handleAddParameterReading = async (reading: any) => {
    if (!selectedTankId || !selectedTank) return;

    try {
      // Save the parameter reading to history
      await addParameterReading(selectedTankId, reading);
      
      // Update tank's current parameters with the new reading
      const updatedParameters = {
        ph: reading.ph ?? selectedTank.parameters.ph,
        tempC: reading.tempC ?? selectedTank.parameters.tempC,
        ammonia: reading.ammonia ?? selectedTank.parameters.ammonia,
        nitrite: reading.nitrite ?? selectedTank.parameters.nitrite,
        nitrate: reading.nitrate ?? selectedTank.parameters.nitrate,
        gh: reading.gh ?? selectedTank.parameters.gh,
        kh: reading.kh ?? selectedTank.parameters.kh,
        tds: reading.tds ?? selectedTank.parameters.tds,
        salinity: reading.salinity ?? selectedTank.parameters.salinity,
      };

      await updateTank(selectedTankId, { parameters: updatedParameters });
      
      // Reload dashboard data
      await loadDashboardData();
      
      // Close modals
      setIsParameterModalOpen(false);
      setSelectedTankId(null);
      setSelectedTank(null);
    } catch (err) {
      console.error('Error adding reading:', err);
      alert('Failed to add reading. Please try again.');
    }
  };

  // Handle maintenance submission
  const handleAddMaintenanceLog = async (log: any) => {
    if (!selectedTankId) return;

    try {
      await addMaintenanceLog(selectedTankId, log);
      
      // Reload dashboard data
      await loadDashboardData();
      
      // Close modals
      setIsMaintenanceModalOpen(false);
      setSelectedTankId(null);
      setSelectedTank(null);
    } catch (err) {
      console.error('Error adding log:', err);
      alert('Failed to add maintenance log. Please try again.');
    }
  };

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
          <p className="text-slate-700 dark:text-slate-300 font-semibold">Loading dashboard...</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fetching your aquarium data</p>
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
            onClick={loadDashboardData}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow-sm hover:shadow transition-all"
          >
            Try Again
          </button>
        </motion.div>
      </div>
    );
  }

  // Empty State - No Tanks
  if (stats && stats.totalTanks === 0) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
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
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-8 h-8" />
              <h1 className="text-4xl font-bold">Dashboard</h1>
            </div>
            <p className="text-indigo-100 ml-11">Your aquarium analytics at a glance</p>
          </div>
        </motion.header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
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
                Add your first tank to start tracking water parameters, maintenance schedules, and health metrics.
              </p>
              <Link
                to="/my-tanks"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-sm hover:shadow transition-all"
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="Dashboard"
        description="Your aquarium dashboard - monitor tank health and track activities."
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
                <Activity className="w-8 h-8" />
                <h1 className="text-4xl font-bold">Dashboard</h1>
              </div>
              <p className="text-indigo-100 ml-11">Your aquarium analytics at a glance</p>
              
              {/* Subtle Stats Badges */}
              {stats && (
                <div className="flex flex-wrap gap-2 mt-4 ml-11">
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 text-sm font-semibold">
                    <span className="text-white/70">Tanks: </span>
                    <span>{stats.totalTanks}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 text-sm font-semibold">
                    <span className="text-white/70">Fish: </span>
                    <span>{stats.totalFish}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 text-sm font-semibold">
                    <span className="text-white/70">Avg Health: </span>
                    <span>{stats.avgHealthScore}%</span>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/my-tanks"
              className="flex items-center gap-2 bg-white hover:bg-white/95 text-indigo-600 px-6 py-3 rounded-xl font-semibold transition-all shadow-sm hover:shadow w-fit"
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
        <QuickActions 
          onAddTank={() => window.location.href = '/my-tanks'}
          onAddReading={handleLogParameters}
          onLogMaintenance={handleLogMaintenance}
        />

        {/* Alerts Panel */}
        {alerts.length > 0 && <AlertsPanel alerts={alerts} />}

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Tank Health */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-indigo-600" />
                Tank Health
              </h2>
              <Link
                to="/my-tanks"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold text-sm flex items-center gap-1 transition-colors"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <TankHealthList healthScores={healthScores} />
          </div>

          {/* Right Column - Recent Activity */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Activity className="w-6 h-6 text-purple-600" />
              Recent Activity
            </h2>
            <RecentActivityFeed activities={recentActivity} />
          </div>
        </div>
      </main>

      {/* Modals */}
      <TankSelectionModal
        isOpen={isTankSelectionOpen}
        onClose={() => setIsTankSelectionOpen(false)}
        onSelectTank={handleTankSelected}
        tanks={tanks}
        title={selectionType === 'parameters' ? 'Log Water Parameters' : 'Log Maintenance'}
        description={selectionType === 'parameters' ? 'Select a tank to record water readings' : 'Select a tank to log maintenance'}
      />

      {selectedTank && (
        <>
          <AddParameterModal
            isOpen={isParameterModalOpen}
            onClose={() => {
              setIsParameterModalOpen(false);
              setSelectedTankId(null);
              setSelectedTank(null);
            }}
            onSubmit={handleAddParameterReading}
            tankType={selectedTank.type}
          />

          <AddMaintenanceModal
            isOpen={isMaintenanceModalOpen}
            onClose={() => {
              setIsMaintenanceModalOpen(false);
              setSelectedTankId(null);
              setSelectedTank(null);
            }}
            onSubmit={handleAddMaintenanceLog}
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
