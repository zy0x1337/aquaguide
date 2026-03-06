import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Loader2, ArrowRight, Fish, Droplets, Activity, Hammer, BarChart3, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50/20 to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <div className="relative">
          <div className="w-16 h-16 border-4 border-indigo-200 dark:border-indigo-900 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin mx-auto mb-4" />
          <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
        </div>
        <p className="text-slate-700 dark:text-slate-300 font-semibold">Loading dashboard...</p>
        <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">Preparing your aquarium insights</p>
      </motion.div>
    </div>
  );

  if (error) return (
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
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{error}</p>
        <button 
          onClick={loadDashboardData} 
          className="group/btn relative inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl transition-all border border-slate-800 dark:border-slate-700 shadow-lg hover:shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
          <span className="relative z-10">Try Again</span>
        </button>
      </motion.div>
    </div>
  );

  // ─── Empty State ─────────────────────────────────────────────────────────────────
  if (stats && stats.totalTanks === 0) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <SEOHead title="Dashboard" description="Your aquarium dashboard – monitor tank health and track activities." />

      <motion.header 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <BarChart3 className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Analytics • Overview</p>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="text-center py-12"
        >
          <div className="max-w-md mx-auto">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950/40 dark:to-purple-950/40 rounded-2xl blur-2xl" />
              <div className="relative w-24 h-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-2xl flex items-center justify-center border border-indigo-200 dark:border-indigo-900 shadow-xl">
                <Droplets className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">No Tanks Yet</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Start your aquarium journey! Add your first tank to track parameters, maintenance, and health metrics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/my-tanks"
                className="group/btn relative inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl transition-all border border-slate-800 dark:border-slate-700 shadow-lg hover:shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                <Plus className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Add First Tank</span>
              </Link>
              <Link to="/tank-builder"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold transition-all">
                <Hammer className="w-5 h-5" />Tank Builder
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );

  // ─── Main Dashboard ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/20 to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <SEOHead title="Dashboard" description="Your aquarium dashboard – monitor tank health and track activities." />

      <motion.header 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <BarChart3 className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Analytics • Overview</p>
              </div>
            </div>
            {stats && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-6 px-5 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg">
                  <div className="text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide mb-0.5">Tanks</p>
                    <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{stats.totalTanks}</p>
                  </div>
                  <div className="w-px h-10 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent" />
                  <div className="text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide mb-0.5">Fish</p>
                    <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">{stats.totalFish}</p>
                  </div>
                  <div className="w-px h-10 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent" />
                  <div className="text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide mb-0.5">Health</p>
                    <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">{stats.avgHealthScore}%</p>
                  </div>
                </div>
                <Link to="/my-tanks"
                  className="group/btn relative flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-xl transition-all border border-slate-800 dark:border-slate-700 shadow-lg hover:shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative z-10">View All</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
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
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-indigo-600" />
                Tank Health
              </h2>
              <Link to="/my-tanks" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold text-sm flex items-center gap-1 transition-colors">
                View All<ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <TankHealthList healthScores={healthScores} />
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              Recent Activity
            </h2>
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
