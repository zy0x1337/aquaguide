import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Loader2, ArrowRight, Fish, Sparkles, Droplets, Activity, Hammer } from 'lucide-react';
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
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
        <Loader2 className="w-16 h-16 text-indigo-600 dark:text-indigo-400 animate-spin mx-auto mb-4" />
        <p className="text-slate-700 dark:text-slate-300 font-semibold">Loading dashboard...</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fetching your aquarium data</p>
      </motion.div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-xl mx-auto mb-4 flex items-center justify-center">
          <Fish className="w-8 h-8 text-red-600 dark:text-red-400" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Oops!</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">{error}</p>
        <button onClick={loadDashboardData} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow-sm hover:shadow transition-all">
          Try Again
        </button>
      </motion.div>
    </div>
  );

  // ─── Empty State ─────────────────────────────────────────────────────────────
  if (stats && stats.totalTanks === 0) return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead title="Dashboard" description="Your aquarium dashboard – monitor tank health and track activities." />

      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Dashboard</h1>
          </div>
          <p className="text-indigo-100 ml-11">Your aquarium analytics at a glance</p>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="text-center py-20">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Fish className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">No Tanks Yet</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Add your first tank to start tracking water parameters, maintenance schedules, and health metrics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/my-tanks"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-sm hover:shadow transition-all">
                <Plus className="w-5 h-5" />Add Your First Tank
              </Link>
              <Link to="/tank-builder"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold shadow-sm hover:shadow transition-all">
                <Hammer className="w-5 h-5" />Plan in Builder
              </Link>
            </div>
            <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
              Already have a plan? Build it first in the Tank Builder, then save it directly to My Tanks.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );

  // ─── Main Dashboard ────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead title="Dashboard" description="Your aquarium dashboard – monitor tank health and track activities." />

      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Activity className="w-8 h-8" />
                <h1 className="text-4xl font-bold">Dashboard</h1>
              </div>
              <p className="text-indigo-100 ml-11">Your aquarium analytics at a glance</p>
              {stats && (
                <div className="flex flex-wrap gap-2 mt-4 ml-11">
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 text-sm font-semibold">
                    <span className="text-white/70">Tanks: </span><span>{stats.totalTanks}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 text-sm font-semibold">
                    <span className="text-white/70">Fish: </span><span>{stats.totalFish}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 text-sm font-semibold">
                    <span className="text-white/70">Avg Health: </span><span>{stats.avgHealthScore}%</span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <Link to="/tank-builder"
                className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-5 py-3 rounded-xl font-semibold transition-all border border-white/30 w-fit">
                <Hammer className="w-4 h-4" />Tank Builder
              </Link>
              <Link to="/my-tanks"
                className="flex items-center gap-2 bg-white hover:bg-white/95 text-indigo-600 px-6 py-3 rounded-xl font-semibold transition-all shadow-sm hover:shadow w-fit">
                View All Tanks
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {stats && <DashboardStats stats={stats} />}

        <QuickActions
          onAddTank={() => navigate('/my-tanks')}
          onPlanTank={() => navigate('/tank-builder')}
          onAddReading={handleLogParameters}
          onLogMaintenance={handleLogMaintenance}
        />

        {alerts.length > 0 && <AlertsPanel alerts={alerts} />}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-indigo-600" />Tank Health
              </h2>
              <Link to="/my-tanks" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-semibold text-sm flex items-center gap-1 transition-colors">
                View Details<ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <TankHealthList healthScores={healthScores} />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Activity className="w-6 h-6 text-purple-600" />Recent Activity
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
