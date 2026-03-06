import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Droplets, Thermometer, Fish as FishIcon, Leaf, Trash2, AlertTriangle, CheckCircle, Edit, Activity, Wrench, Mountain, Lightbulb, Bell, Sparkles, Hammer, Share2, Globe, Lock, Bookmark, BookmarkCheck, Camera, Waves, Settings as SettingsIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tank } from '../types/tank';
import { TankConfig, TankItem } from '../types/builder';
import { SEOHead } from '../components/seo/SEOHead';
import AddInhabitantModal from '../components/tanks/AddInhabitantModal';
import EditTankModal from '../components/tanks/EditTankModal';
import AddParameterModal from '../components/tanks/AddParameterModal';
import AddMaintenanceModal from '../components/tanks/AddMaintenanceModal';
import ParameterChart from '../components/tanks/ParameterChart';
import MaintenanceTimeline from '../components/tanks/MaintenanceTimeline';
import ReminderPanel from '../components/notifications/ReminderPanel';
import { TankShareModal } from '../components/tanks/TankShareModal';
import { allSpecies } from '../data/species';
import { allPlants } from '../data/plants';
import { getTankById, updateTank, addInhabitant, removeInhabitant, publishTank, unpublishTank, setFeaturedOnProfile } from '../lib/supabase/tanks';
import {
  getParameterReadings, addParameterReading, deleteParameterReading,
  getMaintenanceLogs, addMaintenanceLog, deleteMaintenanceLog,
  ParameterReading, MaintenanceLog,
} from '../lib/supabase/tankHistory';
import { completeReminder, getTankReminders } from '../lib/notifications';
import { useToast } from '../contexts/ToastContext';
import { useSettings } from '../hooks/useSettings';

const BUILDER_AUTOSAVE_KEY = 'tankBuilder_autosave';

const TankDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toast = useToast();
  const { settings } = useSettings();
  const [tank, setTank] = useState<Tank | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'parameters' | 'maintenance' | 'reminders'>('overview');
  const [isPublishing, setIsPublishing] = useState(false);
  const [isFeaturing, setIsFeaturing] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const [isInhabitantModalOpen, setIsInhabitantModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isParameterModalOpen, setIsParameterModalOpen] = useState(false);
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'fish' | 'plant'>('fish');

  const [parameterReadings, setParameterReadings] = useState<ParameterReading[]>([]);
  const [maintenanceLogs, setMaintenanceLogs] = useState<MaintenanceLog[]>([]);
  const [remindersBadge, setRemindersBadge] = useState(0);

  useEffect(() => {
    if (!id) return;
    loadTank(); loadHistory(); loadReminderBadge();
  }, [id]);

  const loadTank = async () => {
    if (!id) return;
    try {
      setIsLoading(true);
      const data = await getTankById(id);
      if (data) setTank(data);
      else { toast.error('Tank not found', 'Redirecting...'); navigate('/my-tanks'); }
    } catch { toast.error('Failed to load tank', 'Please try again.'); navigate('/my-tanks'); }
    finally { setIsLoading(false); }
  };

  const loadHistory = async () => {
    if (!id) return;
    try {
      const [readings, logs] = await Promise.all([getParameterReadings(id, 30), getMaintenanceLogs(id, 50)]);
      setParameterReadings(readings); setMaintenanceLogs(logs);
    } catch { toast.error('Failed to load history', 'Some data may be incomplete.'); }
  };

  const loadReminderBadge = () => {
    if (!id) return;
    const reminders = getTankReminders(id);
    const now = Date.now();
    const overdueCount = reminders.filter(r => r.enabled && new Date(r.nextDate).getTime() < now).length;
    setRemindersBadge(overdueCount);
  };

  // ─── Share my Tank (publish / unpublish) ────────────────────────────────────────────────────────────────────────────
  const handleTogglePublic = async () => {
    if (!tank || !id) return;

    // 🔒 Privacy Check: Respect allowTankSharing setting
    if (!tank.isPublic && !settings.allowTankSharing) {
      toast.error(
        'Tank sharing is disabled',
        'Enable "Allow Tank Sharing" in Settings → Privacy to share tanks.',
        'warning'
      );
      return;
    }

    setIsPublishing(true);
    try {
      if (tank.isPublic) {
        if (tank.isFeaturedOnProfile) await setFeaturedOnProfile(id, false);
        const updated = await unpublishTank(id);
        setTank(updated);
        toast.success('Tank is now private', 'The public link has been deactivated.');
      } else {
        const updated = await publishTank(id);
        setTank(updated);
        const url = `${window.location.origin}/tanks/${updated.publicSlug}`;
        try { await navigator.clipboard.writeText(url); } catch { /* ignore */ }
        toast.success('Tank is now public! 🎉', `Link copied: ${url}`);
      }
    } catch {
      toast.error('Failed to update visibility', 'Please try again.');
    } finally {
      setIsPublishing(false);
    }
  };

  // ─── Feature on profile toggle ──────────────────────────────────────────────────────────────────────────────────────
  const handleToggleFeatured = async () => {
    if (!tank || !id) return;
    if (!tank.isPublic) {
      toast.error('Tank must be public', 'Share the tank first, then pin it to your profile.');
      return;
    }
    setIsFeaturing(true);
    try {
      const updated = await setFeaturedOnProfile(id, !tank.isFeaturedOnProfile);
      setTank(updated);
      if (updated.isFeaturedOnProfile) {
        toast.success('Pinned to profile! 📌', 'This tank now shows on your public profile.');
      } else {
        toast.success('Unpinned from profile', 'Tank removed from your public profile.');
      }
    } catch {
      toast.error('Failed to update profile pin', 'Please try again.');
    } finally {
      setIsFeaturing(false);
    }
  };

  // ─── Copy public link ───────────────────────────────────────────────────────────────────────────────────────────────
  const handleCopyLink = async () => {
    if (!tank?.publicSlug) return;
    const url = `${window.location.origin}/tanks/${tank.publicSlug}`;
    try { await navigator.clipboard.writeText(url); } catch { prompt('Copy this link:', url); }
    toast.success('Link copied!', url);
  };

  // ─── Edit in Builder ────────────────────────────────────────────────────────────────────────────────────────────────
  const handleEditInBuilder = () => {
    if (!tank) return;
    const existing = localStorage.getItem(BUILDER_AUTOSAVE_KEY);
    if (existing) {
      const ok = confirm('This will replace your current Tank Builder session with this tank. Continue?');
      if (!ok) return;
    }
    const vol = tank.volumeLiters;
    const height = Math.max(20, Math.round(Math.cbrt(vol * 500)));
    const length = Math.max(40, height * 2);
    const width  = Math.max(20, Math.round((vol * 1000) / (length * height)));
    const tankConfig: TankConfig = {
      name: tank.name, volume: tank.volumeLiters, length, width, height,
      aspectRatio: length / height, substrate: (tank.substrate as any) || 'gravel',
      hasFilter: false, hasHeater: false,
    };
    const now = Date.now();
    const items: TankItem[] = [
      ...(tank.inhabitants?.fish || []).map((inh, idx) => {
        const sp = allSpecies.find(s => s.id === inh.speciesId);
        if (!sp) return null;
        return { id: `fish-${inh.speciesId}-${now}-${idx}`, type: 'fish' as const, data: sp,
          position: { x: 20 + Math.random() * 60, y: 20 + Math.random() * 60, z: 40 + Math.random() * 30 },
          count: inh.quantity, locked: false, notes: '',
          visuals: { rotation: 0, flipX: false, swayDelay: Math.random() * 2, floatSpeed: 2 + Math.random() * 2 } };
      }).filter(Boolean),
      ...(tank.inhabitants?.plants || []).map((inh, idx) => {
        const pl = allPlants.find(p => p.id === inh.speciesId);
        if (!pl) return null;
        return { id: `plant-${inh.speciesId}-${now}-${idx}`, type: 'plant' as const, data: pl,
          position: { x: 10 + Math.random() * 80, y: 65 + Math.random() * 25, z: 10 + Math.random() * 20 },
          count: inh.quantity, locked: false, notes: '',
          visuals: { rotation: 0, flipX: false, swayDelay: Math.random() * 2, floatSpeed: 1.5 + Math.random() } };
      }).filter(Boolean),
    ] as TankItem[];
    localStorage.setItem(BUILDER_AUTOSAVE_KEY, JSON.stringify({ tankConfig, items, customDimensions: { length, width, height }, timestamp: now }));
    navigate('/tank-builder');
  };

  const handleEditTank = async (updatedTank: Tank) => {
    if (!id) return;
    try {
      const updated = await updateTank(id, { name: updatedTank.name, type: updatedTank.type, volumeLiters: updatedTank.volumeLiters, substrate: updatedTank.substrate, lighting: updatedTank.lighting });
      setTank(updated); setIsEditModalOpen(false);
      toast.success('Tank updated!', `${updatedTank.name} has been updated successfully.`);
    } catch { toast.error('Failed to update tank', 'Please try again.'); }
  };

  const handleAddInhabitant = async (speciesId: string, quantity: number, type: 'fish' | 'plant') => {
    if (!tank || !id) return;
    const species = allSpecies.find(s => s.id === speciesId) || allPlants.find(p => p.id === speciesId);
    if (!species) return;
    try {
      await addInhabitant(id, speciesId, species.taxonomy.commonName, type, quantity);
      await loadTank(); setIsInhabitantModalOpen(false);
      toast.success(`${type === 'fish' ? 'Fish' : 'Plant'} added!`, `${quantity}x ${species.taxonomy.commonName} added to ${tank.name}.`);
    } catch { toast.error('Failed to add inhabitant', 'Please try again.'); }
  };

  const handleRemoveInhabitant = async (speciesId: string, type: 'fish' | 'plant') => {
    if (!tank || !id) return;
    try {
      await removeInhabitant(id, speciesId, type); await loadTank();
      toast.success('Inhabitant removed', 'Successfully removed from tank.');
    } catch { toast.error('Failed to remove inhabitant', 'Please try again.'); }
  };

  const handleAddParameterReading = async (reading: any) => {
    if (!id || !tank) return;
    try {
      await addParameterReading(id, reading);
      await updateTank(id, { parameters: {
        ph: reading.ph ?? tank.parameters.ph, tempC: reading.tempC ?? tank.parameters.tempC,
        ammonia: reading.ammonia ?? tank.parameters.ammonia, nitrite: reading.nitrite ?? tank.parameters.nitrite,
        nitrate: reading.nitrate ?? tank.parameters.nitrate, gh: reading.gh ?? tank.parameters.gh,
        kh: reading.kh ?? tank.parameters.kh, tds: reading.tds ?? tank.parameters.tds,
        salinity: reading.salinity ?? tank.parameters.salinity,
      }});
      await loadTank(); await loadHistory(); setIsParameterModalOpen(false);
      completeReminder(id, 'parameter_check');
      loadReminderBadge();
      toast.success('Parameters logged!', 'Water parameters have been updated.');
    } catch { toast.error('Failed to log parameters', 'Please try again.'); }
  };

  const handleDeleteParameterReading = async (readingId: string) => {
    try { await deleteParameterReading(readingId); await loadHistory(); toast.success('Reading deleted', 'Removed from history.'); }
    catch { toast.error('Failed to delete reading', 'Please try again.'); }
  };

  const handleAddMaintenanceLog = async (log: any) => {
    if (!id) return;
    try {
      await addMaintenanceLog(id, log); await loadHistory(); setIsMaintenanceModalOpen(false);
      if (log.type === 'water_change') completeReminder(id, 'water_change');
      else if (log.type === 'filter_cleaning') completeReminder(id, 'filter_clean');
      loadReminderBadge();
      toast.success('Maintenance logged!', `${log.title} has been recorded.`);
    } catch { toast.error('Failed to log maintenance', 'Please try again.'); }
  };

  const handleDeleteMaintenanceLog = async (logId: string) => {
    try { await deleteMaintenanceLog(logId); await loadHistory(); toast.success('Log deleted', 'Removed from history.'); }
    catch { toast.error('Failed to delete log', 'Please try again.'); }
  };

  if (isLoading || !tank) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50/20 to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-indigo-200 dark:border-indigo-900 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin mx-auto mb-4" />
          <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
        </div>
        <p className="text-slate-700 dark:text-slate-300 font-semibold">Loading tank...</p>
      </motion.div>
    </div>
  );

  const totalFish   = tank.inhabitants?.fish.reduce((s, f) => s + f.quantity, 0) || 0;
  const totalPlants = tank.inhabitants?.plants.reduce((s, p) => s + p.quantity, 0) || 0;
  const fishSpecies = (tank.inhabitants?.fish || []).map(f => allSpecies.find(s => s.id === f.speciesId)).filter(Boolean);
  const compatibilityWarnings: string[] = [];
  fishSpecies.forEach((sp, i) => {
    fishSpecies.slice(i + 1).forEach(other => {
      if (sp && other) {
        const bad = sp.behavior.compatibility.badMates.some(bm =>
          other.taxonomy.commonName.toLowerCase().includes(bm.toLowerCase()) ||
          bm.toLowerCase().includes(other.taxonomy.commonName.toLowerCase()));
        if (bad) compatibilityWarnings.push(`${sp.taxonomy.commonName} and ${other.taxonomy.commonName} may not be compatible`);
      }
    });
  });

  const publicUrl = tank.publicSlug ? `${window.location.origin}/tanks/${tank.publicSlug}` : null;

  // 🔒 Privacy warning display
  const showPrivacyWarning = !settings.allowTankSharing && !tank.isPublic;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/20 to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <SEOHead title={`${tank.name} – My Tanks`} description={`Manage ${tank.name}, a ${tank.volumeLiters}L ${tank.type} aquarium.`} />

      {/* Clean Modern Header */}
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <div className="py-4">
            <Link to="/my-tanks"
              className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-semibold gap-1.5">
              <ArrowLeft className="w-4 h-4" />Back to My Tanks
            </Link>
          </div>

          {/* 🔒 Privacy Warning Banner */}
          {showPrivacyWarning && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-lg p-4"
            >
              <div className="flex gap-3 items-start">
                <Lock className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-amber-900 dark:text-amber-200 mb-1">
                    Tank Sharing Disabled
                  </h3>
                  <p className="text-xs text-amber-800 dark:text-amber-300 mb-2">
                    You've disabled tank sharing in your privacy settings. Enable it to share this tank publicly.
                  </p>
                  <Link 
                    to="/settings"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors"
                  >
                    <SettingsIcon className="w-3.5 h-3.5" />
                    Go to Privacy Settings
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Main Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 py-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <Droplets className="w-7 h-7 text-slate-600 dark:text-slate-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{tank.name}</h1>
                  {tank.isPublic && (
                    <span className="flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full">
                      <Globe className="w-3 h-3" />Public
                    </span>
                  )}
                  {tank.isFeaturedOnProfile && (
                    <span className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full">
                      <BookmarkCheck className="w-3 h-3" />Pinned
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Droplets className="w-4 h-4" />{tank.volumeLiters}L
                  </span>
                  <span>•</span>
                  <span className="capitalize font-semibold">{tank.type}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <FishIcon className="w-4 h-4" />{totalFish} fish
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Leaf className="w-4 h-4" />{totalPlants} plants
                  </span>
                </div>
              </div>
            </div>

            {/* More Prominent Action Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <motion.button 
                onClick={handleTogglePublic} 
                disabled={isPublishing || (!tank.isPublic && !settings.allowTankSharing)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 rounded-lg font-semibold text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm hover:shadow text-slate-700 dark:text-slate-200"
                title={!settings.allowTankSharing && !tank.isPublic ? 'Enable sharing in Privacy Settings' : ''}
              >
                {tank.isPublic ? <><Lock className="w-4 h-4" />Make Private</> : <><Share2 className="w-4 h-4" />Share</>}
              </motion.button>

              {tank.isPublic && (
                <motion.button 
                  onClick={handleToggleFeatured} 
                  disabled={isFeaturing}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg font-semibold text-sm transition-all disabled:opacity-60 shadow-sm hover:shadow"
                >
                  {tank.isFeaturedOnProfile ? <><BookmarkCheck className="w-4 h-4" />Unpin</> : <><Bookmark className="w-4 h-4" />Pin</>}
                </motion.button>
              )}

              <motion.button 
                onClick={() => setIsShareModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg font-semibold text-sm transition-all shadow-sm hover:shadow"
              >
                <Camera className="w-4 h-4" />Image
              </motion.button>

              <motion.button 
                onClick={handleEditInBuilder}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg font-semibold text-sm transition-all shadow-sm hover:shadow"
              >
                <Hammer className="w-4 h-4" />Builder
              </motion.button>

              <motion.button 
                onClick={() => setIsEditModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group/btn relative flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-lg transition-all border border-slate-800 dark:border-slate-700 shadow-lg hover:shadow-xl overflow-hidden text-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                <Edit className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Edit</span>
              </motion.button>
            </div>
          </div>

          {/* Quick Stats: Temp, pH, GH, KH with matching TankCard colors */}
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-3 sm:gap-8 py-5 border-t border-slate-200 dark:border-slate-800">
            <QuickStatColored icon={<Thermometer className="w-4 h-4" />} label="Temperature" value={`${tank.parameters.tempC}°C`} color="orange" />
            <QuickStatColored icon={<Droplets className="w-4 h-4" />} label="pH" value={tank.parameters.ph} color="blue" />
            <QuickStatColored icon={<Waves className="w-4 h-4" />} label="GH" value={tank.parameters.gh ? `${tank.parameters.gh}°` : 'N/A'} color="cyan" />
            <QuickStatColored icon={<Waves className="w-4 h-4" />} label="KH" value={tank.parameters.kh ? `${tank.parameters.kh}°` : 'N/A'} color="teal" />
          </div>
        </div>
      </motion.header>

      {/* Tabs */}
      <div className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            <CleanTabButton active={activeTab === 'overview'}    onClick={() => setActiveTab('overview')}    icon={<Sparkles className="w-4 h-4" />} label="Overview" />
            <CleanTabButton active={activeTab === 'parameters'}  onClick={() => setActiveTab('parameters')}  icon={<Activity className="w-4 h-4" />} label="Parameters"  badge={parameterReadings.length} />
            <CleanTabButton active={activeTab === 'maintenance'} onClick={() => setActiveTab('maintenance')} icon={<Wrench className="w-4 h-4" />}   label="Maintenance" badge={maintenanceLogs.length} />
            <CleanTabButton active={activeTab === 'reminders'}   onClick={() => setActiveTab('reminders')}   icon={<Bell className="w-4 h-4" />}     label="Reminders" badge={remindersBadge} badgeColor="red" />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <OverviewTab key="overview" tank={tank} compatibilityWarnings={compatibilityWarnings}
              onAddFish={() => { setModalType('fish');  setIsInhabitantModalOpen(true); }}
              onAddPlant={() => { setModalType('plant'); setIsInhabitantModalOpen(true); }}
              onRemoveInhabitant={handleRemoveInhabitant} />
          )}
          {activeTab === 'parameters' && (
            <ParametersTab key="parameters" readings={parameterReadings}
              onAddReading={() => setIsParameterModalOpen(true)}
              onDeleteReading={handleDeleteParameterReading} />
          )}
          {activeTab === 'maintenance' && (
            <MaintenanceTab key="maintenance" logs={maintenanceLogs}
              onAddLog={() => setIsMaintenanceModalOpen(true)}
              onDeleteLog={handleDeleteMaintenanceLog} />
          )}
          {activeTab === 'reminders' && (
            <RemindersTab key="reminders" tankId={id!} tankName={tank.name} onBadgeChange={setRemindersBadge} />
          )}
        </AnimatePresence>
      </main>

      <AddInhabitantModal isOpen={isInhabitantModalOpen} onClose={() => setIsInhabitantModalOpen(false)} onSubmit={handleAddInhabitant} type={modalType} tankType={tank.type} />
      <EditTankModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} onSubmit={handleEditTank} tank={tank} />
      <AddParameterModal isOpen={isParameterModalOpen} onClose={() => setIsParameterModalOpen(false)} onSubmit={handleAddParameterReading} tankType={tank.type} />
      <AddMaintenanceModal isOpen={isMaintenanceModalOpen} onClose={() => setIsMaintenanceModalOpen(false)} onSubmit={handleAddMaintenanceLog} />
      <TankShareModal open={isShareModalOpen} tank={tank} onClose={() => setIsShareModalOpen(false)} />
    </div>
  );
};

// ─── TAB COMPONENTS ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const OverviewTab = ({ tank, compatibilityWarnings, onAddFish, onAddPlant, onRemoveInhabitant }: any) => {
  const substrateLabel = (s?: string) => ({ sand: 'Sand', gravel: 'Gravel', soil: 'Aqua Soil', bare: 'Bare Bottom' } as any)[s || ''] || 'Not specified';
  const lightingLabel  = (l?: string) => ({ low: 'Low (10–30 PAR)', medium: 'Medium (30–50 PAR)', high: 'High (50+ PAR)' } as any)[l || ''] || 'Not specified';
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="space-y-5">
      {compatibilityWarnings.length > 0 && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded-lg p-4">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-sm text-amber-900 dark:text-amber-300 mb-1.5">Compatibility Warnings</h3>
              <ul className="space-y-1">
                {compatibilityWarnings.map((w: string, i: number) => (
                  <li key={i} className="text-xs text-amber-800 dark:text-amber-200 flex items-start gap-1.5">
                    <span className="text-amber-500 mt-0.5">•</span><span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <Mountain className="w-5 h-5 text-indigo-600" />Tank Setup
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <CompactSetupCard icon={<Mountain className="w-5 h-5 text-amber-600" />}   label="Substrate" value={substrateLabel(tank.substrate)} isEmpty={!tank.substrate} />
          <CompactSetupCard icon={<Lightbulb className="w-5 h-5 text-yellow-600" />} label="Lighting"  value={lightingLabel(tank.lighting)}   isEmpty={!tank.lighting} />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-600" />Water Parameters
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
          <CompactParamCard label="pH"          value={tank.parameters.ph}              status={tank.parameters.ph >= 6.5 && tank.parameters.ph <= 7.5 ? 'good' : 'warning'} />
          <CompactParamCard label="Temp"        value={`${tank.parameters.tempC}°C`}    status="good" />
          <CompactParamCard label="Ammonia"     value={`${tank.parameters.ammonia}ppm`} status={tank.parameters.ammonia > 0 ? 'danger' : 'good'} />
          <CompactParamCard label="Nitrite"     value={`${tank.parameters.nitrite}ppm`} status={tank.parameters.nitrite > 0 ? 'danger' : 'good'} />
          <CompactParamCard label="Nitrate"     value={`${tank.parameters.nitrate}ppm`} status={tank.parameters.nitrate > 20 ? 'warning' : 'good'} />
          {(tank.parameters.gh   ?? 0) > 0 && <CompactParamCard label="GH"       value={`${tank.parameters.gh}°`}    status="good" />}
          {(tank.parameters.kh   ?? 0) > 0 && <CompactParamCard label="KH"       value={`${tank.parameters.kh}°`}    status="good" />}
          {(tank.parameters.tds  ?? 0) > 0 && <CompactParamCard label="TDS"      value={`${tank.parameters.tds}ppm`}   status="good" />}
          {(tank.parameters.salinity ?? 0) > 0 && <CompactParamCard label="Salinity" value={`${tank.parameters.salinity}ppt`} status="good" />}
        </div>
      </motion.div>
      <InhabitantsSection title="Fish"   icon={<FishIcon className="w-5 h-5 text-indigo-600" />} inhabitants={tank.inhabitants?.fish   || []} speciesData={allSpecies} linkPrefix="/species" onAdd={onAddFish}  onRemove={(sid: string) => onRemoveInhabitant(sid, 'fish')}  emptyMessage="No fish added yet"   addButtonLabel="Add Fish" />
      <InhabitantsSection title="Plants" icon={<Leaf     className="w-5 h-5 text-emerald-600" />} inhabitants={tank.inhabitants?.plants || []} speciesData={allPlants}  linkPrefix="/plants"  onAdd={onAddPlant} onRemove={(sid: string) => onRemoveInhabitant(sid, 'plant')} emptyMessage="No plants added yet" addButtonLabel="Add Plant" />
    </motion.div>
  );
};

const ParametersTab = ({ readings, onAddReading }: any) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="space-y-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2"><Activity className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />Parameter History</h2>
      <button onClick={onAddReading} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow transition-all w-fit"><Plus className="w-5 h-5" />Log Parameters</button>
    </div>
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 md:p-6"><ParameterChart readings={readings} /></div>
  </motion.div>
);

const MaintenanceTab = ({ logs, onAddLog, onDeleteLog }: any) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="space-y-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2"><Wrench className="w-6 h-6 md:w-7 md:h-7 text-purple-600" />Maintenance History</h2>
      <button onClick={onAddLog} className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow transition-all w-fit"><Plus className="w-5 h-5" />Log Maintenance</button>
    </div>
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 md:p-6"><MaintenanceTimeline logs={logs} onDelete={onDeleteLog} /></div>
  </motion.div>
);

const RemindersTab = ({ tankId, tankName, onBadgeChange }: { tankId: string; tankName: string; onBadgeChange: (count: number) => void }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2"><Bell className="w-6 h-6 md:w-7 md:h-7 text-indigo-600" />Reminders</h2>
    <ReminderPanel tankId={tankId} tankName={tankName} onBadgeChange={onBadgeChange} />
  </motion.div>
);

// ─── UTILITY COMPONENTS ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const QuickStatColored = ({ icon, label, value, color }: any) => {
  const colorClasses = {
    orange: { bg: 'bg-orange-50 dark:bg-orange-950/30', border: 'border-orange-200 dark:border-orange-900', icon: 'text-orange-600 dark:text-orange-400', text: 'text-orange-700 dark:text-orange-300' },
    blue: { bg: 'bg-blue-50 dark:bg-blue-950/30', border: 'border-blue-200 dark:border-blue-900', icon: 'text-blue-600 dark:text-blue-400', text: 'text-blue-700 dark:text-blue-300' },
    cyan: { bg: 'bg-cyan-50 dark:bg-cyan-950/30', border: 'border-cyan-200 dark:border-cyan-900', icon: 'text-cyan-600 dark:text-cyan-400', text: 'text-cyan-700 dark:text-cyan-300' },
    teal: { bg: 'bg-teal-50 dark:bg-teal-950/30', border: 'border-teal-200 dark:border-teal-900', icon: 'text-teal-600 dark:text-teal-400', text: 'text-teal-700 dark:text-teal-300' },
  }[color];

  return (
    <div className={`flex items-center gap-3 ${colorClasses.bg} border ${colorClasses.border} rounded-lg px-3 py-2.5`}>
      <div className={`p-1.5 bg-white/60 dark:bg-slate-800/60 rounded-lg ${colorClasses.icon}`}>{icon}</div>
      <div>
        <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{label}</p>
        <p className={`text-base font-black ${colorClasses.text}`}>{value}</p>
      </div>
    </div>
  );
};

const CleanTabButton = ({ active, onClick, icon, label, badge, badgeColor }: any) => (
  <button onClick={onClick} className={`relative flex items-center gap-2 px-4 md:px-5 py-3 md:py-4 font-semibold transition-all whitespace-nowrap ${ active ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}>
    {icon}<span className="text-sm md:text-base">{label}</span>
    {badge !== undefined && badge > 0 && (
      <span className={`ml-1 px-2 py-0.5 text-xs font-bold rounded-full ${
        badgeColor === 'red'
          ? 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'
          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
      }`}>{badge}</span>
    )}
    {active && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400" transition={{ type: 'spring', stiffness: 500, damping: 30 }} />}
  </button>
);

const CompactSetupCard = ({ icon, label, value, isEmpty }: any) => (
  <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-3 flex items-center gap-3">
    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center flex-shrink-0">{icon}</div>
    <div className="flex-1 min-w-0">
      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{label}</div>
      <div className={`text-sm font-bold truncate ${isEmpty ? 'text-slate-400 dark:text-slate-500 italic' : 'text-slate-900 dark:text-white'}`}>{value}</div>
    </div>
  </div>
);

const CompactParamCard = ({ label, value, status }: any) => {
  const cfg = { good: { Icon: CheckCircle, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-950/30', border: 'border-emerald-200 dark:border-emerald-900' }, warning: { Icon: AlertTriangle, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-950/30', border: 'border-amber-200 dark:border-amber-900' }, danger: { Icon: AlertTriangle, color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-950/30', border: 'border-red-200 dark:border-red-900' } }[status as 'good'|'warning'|'danger'];
  return (
    <div className={`${cfg.bg} border ${cfg.border} rounded-lg p-3`}>
      <div className="flex items-center justify-between mb-1"><span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{label}</span><cfg.Icon className={`w-4 h-4 ${cfg.color}`} /></div>
      <div className="text-base font-bold text-slate-900 dark:text-white">{value}</div>
    </div>
  );
};

const InhabitantsSection = ({ title, icon, inhabitants, speciesData, linkPrefix, onAdd, onRemove, emptyMessage, addButtonLabel }: any) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
      <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">{icon}{title} ({inhabitants.length})</h2>
      <button onClick={onAdd} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all w-fit"><Plus className="w-4 h-4" />{addButtonLabel}</button>
    </div>
    {inhabitants.length === 0
      ? <div className="text-center py-8 text-slate-500 dark:text-slate-400 text-sm"><p>{emptyMessage}</p></div>
      : <div className="space-y-2.5">{inhabitants.map((inh: any, i: number) => {
          const sp = speciesData.find((s: any) => s.id === inh.speciesId);
          if (!sp) return null;
          return <CompactInhabitantCard key={`${inh.speciesId}-${i}`} name={inh.speciesName} scientificName={sp.taxonomy.scientificName} quantity={inh.quantity} slug={sp.slug} imageUrl={sp.imageUrl} linkPrefix={linkPrefix} onRemove={() => onRemove(inh.speciesId)} />;
        })}</div>
    }
  </motion.div>
);

const CompactInhabitantCard = ({ name, scientificName, quantity, slug, imageUrl, linkPrefix, onRemove }: any) => (
  <div className="group flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg p-2.5 border border-slate-200 dark:border-slate-700 transition-all">
    {imageUrl ? <img src={imageUrl} alt={name} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" /> : <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0"><Sparkles className="w-5 h-5 text-slate-400" /></div>}
    <Link to={`${linkPrefix}/${slug}`} className="flex-1 min-w-0">
      <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">{name}</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 italic truncate">{scientificName}</p>
      <div className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[10px] font-bold text-slate-600 dark:text-slate-300">Qty: {quantity}</div>
    </Link>
    <button onClick={e => { e.preventDefault(); if (confirm(`Remove ${name}?`)) onRemove(); }} className="p-1.5 text-slate-400 dark:text-slate-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors flex-shrink-0" title="Remove"><Trash2 className="w-4 h-4" /></button>
  </div>
);

export default TankDetailPage;
