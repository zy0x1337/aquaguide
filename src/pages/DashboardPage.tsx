import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Plus, Loader2, ArrowRight, Fish, Droplets, Activity,
  Hammer, BarChart3, Sparkles, RefreshCw, Bell, Sun, Sunset, Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardStats from '../components/dashboard/DashboardStats';
import TankHealthList from '../components/dashboard/TankHealthList';
import RecentActivityFeed from '../components/dashboard/RecentActivityFeed';
import QuickActions from '../components/dashboard/QuickActions';
import AlertsPanel from '../components/dashboard/AlertsPanel';
import TankSelectionModal from '../components/dashboard/TankSelectionModal';
import AddParameterModal from '../components/tanks/AddParameterModal';
import AddMaintenanceModal from '../components/tanks/AddMaintenanceModal';
import { SEOHead } from '../components/seo/SEOHead';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
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

// ─── Greeting helper ──────────────────────────────────────────────────────────
const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return { text: 'Good morning',  Icon: Sun,    color: 'text-amber-500'  };
  if (h < 18) return { text: 'Good afternoon', Icon: Sunset, color: 'text-orange-500' };
  return        { text: 'Good evening',   Icon: Moon,   color: 'text-indigo-400' };
};

const DashboardPage = () => {
  const navigate  = useNavigate();
  const { user }  = useAuth();
  const greeting  = getGreeting();

  const [tanks, setTanks]                   = useState<Tank[]>([]);
  const [stats, setStats]                   = useState<StatsType | null>(null);
  const [healthScores, setHealthScores]     = useState<TankHealthScore[]>([]);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [alerts, setAlerts]                 = useState<ParameterAlert[]>([]);
  const [isLoading, setIsLoading]           = useState(true);
  const [isRefreshing, setIsRefreshing]     = useState(false);
  const [error, setError]                   = useState<string | null>(null);
  const [lastRefreshed, setLastRefreshed]   = useState<Date | null>(null);
  const [displayName, setDisplayName]       = useState<string>('');
  const [nextReminder, setNextReminder]     = useState<{ title: string; tankName: string; daysLeft: number } | null>(null);

  // Modal states
  const [isTankSelectionOpen, setIsTankSelectionOpen]     = useState(false);
  const [selectionType, setSelectionType]                 = useState<'parameters' | 'maintenance'>('parameters');
  const [selectedTankId, setSelectedTankId]               = useState<string | null>(null);
  const [selectedTank, setSelectedTank]                   = useState<Tank | null>(null);
  const [isParameterModalOpen, setIsParameterModalOpen]   = useState(false);
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);

  useEffect(() => {
    loadDashboardData();
    loadProfile();
  }, []);

  const loadProfile = async () => {
    if (!user) return;
    try {
      const { data } = await supabase.from('profiles').select('display_name').eq('id', user.id).single();
      const name = data?.display_name || user.email?.split('@')[0] || 'there';
      setDisplayName(name);
    } catch { setDisplayName(user.email?.split('@')[0] || 'there'); }
  };

  const loadReminders = useCallback(async (tanksData: Tank[]) => {
    if (!user || tanksData.length === 0) return;
    try {
      const { data } = await supabase
        .from('reminder_schedules')
        .select('title, tank_name, next_due_at')
        .eq('user_id', user.id)
        .eq('enabled', true)
        .order('next_due_at', { ascending: true })
        .limit(1);
      if (data?.[0]) {
        const daysLeft = Math.ceil((new Date(data[0].next_due_at).getTime() - Date.now()) / 86400000);
        setNextReminder({ title: data[0].title, tankName: data[0].tank_name, daysLeft });
      }
    } catch { /* non-critical */ }
  }, [user]);

  const loadDashboardData = async (isRefresh = false) => {
    try {
      if (isRefresh) setIsRefreshing(true);
      else setIsLoading(true);
      setError(null);
      const [tanksData, statsData, healthData, activityData] = await Promise.all([
        getUserTanks(), getDashboardStats(), getAllTankHealthScores(), getRecentActivity(10),
      ]);
      setTanks(tanksData); setStats(statsData); setHealthScores(healthData); setRecentActivity(activityData);
      setAlerts(getAllAlerts(tanksData));
      setLastRefreshed(new Date());
      await loadReminders(tanksData);
    } catch (err) {
      console.error('Error loading dashboard:', err);
      setError('Failed to load dashboard. Please try again.');
    } finally {
      setIsLoading(false); setIsRefreshing(false);
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
      console.error('Error adding reading:', err); alert('Failed to add reading.');
    }
  };

  const handleAddMaintenanceLog = async (log: any) => {
    if (!selectedTankId) return;
    try {
      await addMaintenanceLog(selectedTankId, log);
      await loadDashboardData();
      setIsMaintenanceModalOpen(false); setSelectedTankId(null); setSelectedTank(null);
    } catch (err) {
      console.error('Error adding log:', err); alert('Failed to add maintenance log.');
    }
  };

  // ─── Loading ───
  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="w-16 h-16 border-4 border-indigo-200 dark:border-indigo-900 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin" />
          <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
        </div>
        <p className="text-slate-700 dark:text-slate-300 font-semibold">Loading dashboard…</p>
        <p className="text-slate-500 text-sm mt-1">Preparing your aquarium insights</p>
      </motion.div>
    </div>
  );

  // ─── Error ───
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 bg-red-50 dark:bg-red-950/30 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-red-200 dark:border-red-900">
          <Fish className="w-9 h-9 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Oops!</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">{error}</p>
        <button onClick={() => loadDashboardData()}
          className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition-all hover:bg-slate-800 dark:hover:bg-slate-700">
          <RefreshCw className="w-4 h-4" />Try Again
        </button>
      </motion.div>
    </div>
  );

  // ─── Empty State ───
  if (stats && stats.totalTanks === 0) return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <SEOHead title="Dashboard" description="Your aquarium dashboard." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-indigo-200 dark:border-indigo-900">
            <Droplets className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">No Tanks Yet</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Start your aquarium journey! Add your first tank to track parameters, maintenance, and health metrics.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/my-tanks"
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl">
              <Plus className="w-5 h-5" />Add First Tank
            </Link>
            <Link to="/tank-builder"
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold">
              <Hammer className="w-5 h-5" />Tank Builder
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  // ─── Main Dashboard ───
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <SEOHead title="Dashboard" description="Your aquarium dashboard – monitor tank health and track activities." />

      {/* ─── Header ─── */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            {/* Greeting */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <greeting.Icon className={`w-5 h-5 ${greeting.color}`} strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                  {greeting.text}{displayName ? `, ${displayName.split(' ')[0]}` : ''} 🐟
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {lastRefreshed
                    ? `Last updated ${lastRefreshed.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`
                    : 'Dashboard • Overview'
                  }
                </p>
              </div>
            </div>

            {/* Right: stats pill + actions */}
            <div className="flex items-center gap-3">
              {stats && (
                <div className="flex items-center gap-5 px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl">
                  <div className="text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Tanks</p>
                    <p className="text-lg font-black text-indigo-600 dark:text-indigo-400">{stats.totalTanks}</p>
                  </div>
                  <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
                  <div className="text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Fish</p>
                    <p className="text-lg font-black text-blue-600 dark:text-blue-400">{stats.totalFish}</p>
                  </div>
                  <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
                  <div className="text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Health</p>
                    <p className="text-lg font-black text-emerald-600 dark:text-emerald-400">{stats.avgHealthScore}%</p>
                  </div>
                </div>
              )}
              <button
                onClick={() => loadDashboardData(true)}
                disabled={isRefreshing}
                className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all"
                title="Refresh"
              >
                <RefreshCw className={`w-4 h-4 text-slate-600 dark:text-slate-400 ${isRefreshing ? 'animate-spin' : ''}`} />
              </button>
              <Link to="/my-tanks"
                className="flex items-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all">
                View All<ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Next Reminder Strip */}
        <AnimatePresence>
          {nextReminder && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-slate-200 dark:border-slate-800"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-3">
                <Bell className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" strokeWidth={2.5} />
                <p className="text-xs text-slate-600 dark:text-slate-400 flex-1">
                  <span className="font-bold text-slate-900 dark:text-white">{nextReminder.title}</span>
                  {' • '}
                  <span className="text-slate-500">{nextReminder.tankName}</span>
                  {' — '}
                  {nextReminder.daysLeft <= 0
                    ? <span className="text-rose-600 dark:text-rose-400 font-bold">Due today!</span>
                    : nextReminder.daysLeft === 1
                    ? <span className="text-amber-600 dark:text-amber-400 font-bold">Due tomorrow</span>
                    : <span className="text-slate-500">in {nextReminder.daysLeft} days</span>
                  }
                </p>
                <Link to="/reminders" className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 hover:underline whitespace-nowrap">View all →</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ─── Main Content ─── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">

        {/* Stats */}
        {stats && <DashboardStats stats={stats} />}

        {/* Quick Actions */}
        <QuickActions
          onAddTank={() => navigate('/my-tanks')}
          onPlanTank={() => navigate('/tank-builder')}
          onAddReading={handleLogParameters}
          onLogMaintenance={handleLogMaintenance}
        />

        {/* Alerts */}
        {alerts.length > 0 && <AlertsPanel alerts={alerts} />}

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-indigo-500" />
                Tank Health
              </h2>
              <Link to="/my-tanks" className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors">
                View All<ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <TankHealthList healthScores={healthScores} />
          </div>
          <div className="space-y-4">
            <h2 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
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
