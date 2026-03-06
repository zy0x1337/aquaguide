import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Loader2, ArrowRight, Fish, Droplets, Activity, Hammer, BarChart3 } from 'lucide-react';
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
  const navigate = useNavigate();
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

  useEffect(() => { loadDashboardData(); }, []);

  const loadDashboardData = async () => {
    try {
      setIsLoading(true); setError(null);
      const [tanksData, statsData, healthData, activityData] = await Promise.all([
        getUserTanks(), getDashboardStats(), getAllTankHealthScores(), getRecentActivity(10),
      ]);
      setTanks(tanksData); setStats(statsData); setHealthScores(healthData); setRecentActivity(activityData);
      setAlerts(getAllAlerts(tanksData));
    } catch (err) {
      console.error('Error loading dashboard:', err);
      setError('Failed to load dashboard. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogParameters  = () => { setSelectionType('parameters');  setIsTankSelectionOpen(true); };
  const handleLogMaintenance = () => { setSelectionType('maintenance'); setIsTankSelectionOpen(true); };

  const handleTankSelected = async (tankId: string) => {
    setSelectedTankId(tankId);
    const tank = await getTankById(tankId);
    setSelectedTank(tank);
    selectionType === 'parameters' ? setIsParameterModalOpen(true) : setIsMaintenanceModalOpen(true);
  };

  const handleAddParameterReading = async (reading: any) => {
    if (!selectedTankId || !selectedTank) return;
    try {
      await addParameterReading(selectedTankId, reading);
      await updateTank(selectedTankId, {
        parameters: {
          ph: reading.ph ?? selectedTank.parameters.ph,
          tempC: reading.tempC ?? selectedTank.parameters.tempC,
          ammonia: reading.ammonia ?? selectedTank.parameters.ammonia,
          nitrite: reading.nitrite ?? selectedTank.parameters.nitrite,
          nitrate: reading.nitrate ?? selectedTank.parameters.nitrate,
          gh: reading.gh ?? selectedTank.parameters.gh,
          kh: reading.kh ?? selectedTank.parameters.kh,
          tds: reading.tds ?? selectedTank.parameters.tds,
          salinity: reading.salinity ?? selectedTank.parameters.salinity,
        },
      });
      await loadDashboardData();
      setIsParameterModalOpen(false); setSelectedTankId(null); setSelectedTank(null);
    } catch (err) {
      console.error('Error adding reading:', err); alert('Failed to add reading. Please try again.');
    }
  };

  const handleAddMaintenanceLog = async (log: any) => {
    if (!selectedTankId) return;
    try {
      await addMaintenanceLog(selectedTankId, log);
      await loadDashboardData();
      setIsMaintenanceModalOpen(false); setSelectedTankId(null); setSelectedTank(null);
    } catch (err) {
      console.error('Error adding log:', err); alert('Failed to add maintenance log. Please try again.');
    }
  };

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <Loader2 className="w-12 h-12 text-slate-400 dark:text-slate-600 animate-spin mx-auto mb-3" />
        <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">Loading dashboard...</p>
      </motion.div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md mx-auto px-4">
        <div className="w-14 h-14 bg-red-50 dark:bg-red-950/20 rounded-lg mx-auto mb-3 flex items-center justify-center border border-red-100 dark:border-red-900">
          <Fish className="w-7 h-7 text-red-600 dark:text-red-400" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Error Loading Dashboard</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">{error}</p>
        <button onClick={loadDashboardData} className="bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors">
          Retry
        </button>
      </motion.div>
    </div>
  );

  // ─── Empty State ─────────────────────────────────────────────────────────────────
  if (stats && stats.totalTanks === 0) return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead title="Dashboard" description="Your aquarium dashboard – monitor tank health and track activities." />

      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-7 h-7 text-slate-900 dark:text-white" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Analytics · Overview</p>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-center py-20">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-lg mx-auto mb-4 flex items-center justify-center border border-slate-200 dark:border-slate-700">
              <Droplets className="w-8 h-8 text-slate-400 dark:text-slate-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No Tanks Yet</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">
              Add your first tank to start tracking parameters, maintenance, and health metrics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/my-tanks"
                className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
                <Plus className="w-4 h-4" />Add First Tank
              </Link>
              <Link to="/tank-builder"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
                <Hammer className="w-4 h-4" />Tank Builder
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );

  // ─── Main Dashboard ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead title="Dashboard" description="Your aquarium dashboard – monitor tank health and track activities." />

      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-7 h-7 text-slate-900 dark:text-white" />
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Analytics · Overview</p>
              </div>
            </div>
            {stats && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-6 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Tanks</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">{stats.totalTanks}</p>
                  </div>
                  <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
                  <div className="text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Fish</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">{stats.totalFish}</p>
                  </div>
                  <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
                  <div className="text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Health</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">{stats.avgHealthScore}%</p>
                  </div>
                </div>
                <Link to="/my-tanks"
                  className="flex items-center gap-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {stats && <DashboardStats stats={stats} />}

        <QuickActions
          onAddTank={() => navigate('/my-tanks')}
          onPlanTank={() => navigate('/tank-builder')}
          onAddReading={handleLogParameters}
          onLogMaintenance={handleLogMaintenance}
        />

        {alerts.length > 0 && <AlertsPanel alerts={alerts} />}

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Tank Health</h2>
              <Link to="/my-tanks" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm flex items-center gap-1 transition-colors">
                Details<ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <TankHealthList healthScores={healthScores} />
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h2>
            <RecentActivityFeed activities={recentActivity} />
          </div>
        </div>
      </main>

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
            onClose={() => { setIsParameterModalOpen(false); setSelectedTankId(null); setSelectedTank(null); }}
            onSubmit={handleAddParameterReading}
            tankType={selectedTank.type}
          />
          <AddMaintenanceModal
            isOpen={isMaintenanceModalOpen}
            onClose={() => { setIsMaintenanceModalOpen(false); setSelectedTankId(null); setSelectedTank(null); }}
            onSubmit={handleAddMaintenanceLog}
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
