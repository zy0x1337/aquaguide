import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Droplets, Thermometer, Fish as FishIcon, Leaf, Trash2, AlertTriangle, CheckCircle, Edit, Activity, Wrench, Mountain, Lightbulb, Bell, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tank } from '../types/tank';
import { SEOHead } from '../components/seo/SEOHead';
import AddInhabitantModal from '../components/tanks/AddInhabitantModal';
import EditTankModal from '../components/tanks/EditTankModal';
import AddParameterModal from '../components/tanks/AddParameterModal';
import AddMaintenanceModal from '../components/tanks/AddMaintenanceModal';
import ParameterChart from '../components/tanks/ParameterChart';
import MaintenanceTimeline from '../components/tanks/MaintenanceTimeline';
import ReminderPanel from '../components/notifications/ReminderPanel';
import { allSpecies } from '../data/species';
import { allPlants } from '../data/plants';
import { getTankById, updateTank, addInhabitant, removeInhabitant } from '../lib/supabase/tanks';
import { 
  getParameterReadings, 
  addParameterReading, 
  deleteParameterReading,
  getMaintenanceLogs,
  addMaintenanceLog,
  deleteMaintenanceLog,
  ParameterReading,
  MaintenanceLog,
} from '../lib/supabase/tankHistory';
import { completeReminder } from '../lib/notifications';
import { useToast } from '../contexts/ToastContext';

const TankDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toast = useToast();
  const [tank, setTank] = useState<Tank | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'parameters' | 'maintenance' | 'reminders'>('overview');
  
  // Modals
  const [isInhabitantModalOpen, setIsInhabitantModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isParameterModalOpen, setIsParameterModalOpen] = useState(false);
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'fish' | 'plant'>('fish');

  // History data
  const [parameterReadings, setParameterReadings] = useState<ParameterReading[]>([]);
  const [maintenanceLogs, setMaintenanceLogs] = useState<MaintenanceLog[]>([]);

  useEffect(() => {
    if (!id) return;
    loadTank();
    loadHistory();
  }, [id]);

  const loadTank = async () => {
    if (!id) return;
    
    try {
      setIsLoading(true);
      const data = await getTankById(id);
      if (data) {
        setTank(data);
      } else {
        toast.error('Tank not found', 'Redirecting to My Tanks...');
        navigate('/my-tanks');
      }
    } catch (err) {
      console.error('Error loading tank:', err);
      toast.error('Failed to load tank', 'Please try again.');
      navigate('/my-tanks');
    } finally {
      setIsLoading(false);
    }
  };

  const loadHistory = async () => {
    if (!id) return;

    try {
      const [readings, logs] = await Promise.all([
        getParameterReadings(id, 30),
        getMaintenanceLogs(id, 50),
      ]);
      setParameterReadings(readings);
      setMaintenanceLogs(logs);
    } catch (err) {
      console.error('Error loading history:', err);
      toast.error('Failed to load history', 'Some data may be incomplete.');
    }
  };

  const handleEditTank = async (updatedTank: Tank) => {
    if (!id) return;
    
    try {
      const updated = await updateTank(id, {
        name: updatedTank.name,
        type: updatedTank.type,
        volumeLiters: updatedTank.volumeLiters,
        substrate: updatedTank.substrate,
        lighting: updatedTank.lighting,
      });
      setTank(updated);
      setIsEditModalOpen(false);
      toast.success('Tank updated!', `${updatedTank.name} has been updated successfully.`);
    } catch (err) {
      console.error('Error updating tank:', err);
      toast.error('Failed to update tank', 'Please try again.');
    }
  };

  const handleAddInhabitant = async (speciesId: string, quantity: number, type: 'fish' | 'plant') => {
    if (!tank || !id) return;

    const species = allSpecies.find(s => s.id === speciesId) || allPlants.find(p => p.id === speciesId);
    if (!species) return;

    try {
      await addInhabitant(id, speciesId, species.taxonomy.commonName, type, quantity);
      await loadTank();
      setIsInhabitantModalOpen(false);
      toast.success(
        `${type === 'fish' ? 'Fish' : 'Plant'} added!`,
        `${quantity}x ${species.taxonomy.commonName} added to ${tank.name}.`
      );
    } catch (err) {
      console.error('Error adding inhabitant:', err);
      toast.error('Failed to add inhabitant', 'Please try again.');
    }
  };

  const handleRemoveInhabitant = async (speciesId: string, type: 'fish' | 'plant') => {
    if (!tank || !id) return;

    try {
      await removeInhabitant(id, speciesId, type);
      await loadTank();
      toast.success('Inhabitant removed', 'Successfully removed from tank.');
    } catch (err) {
      console.error('Error removing inhabitant:', err);
      toast.error('Failed to remove inhabitant', 'Please try again.');
    }
  };

  const handleAddParameterReading = async (reading: any) => {
    if (!id || !tank) return;

    try {
      await addParameterReading(id, reading);
      
      const updatedParameters = {
        ph: reading.ph ?? tank.parameters.ph,
        tempC: reading.tempC ?? tank.parameters.tempC,
        ammonia: reading.ammonia ?? tank.parameters.ammonia,
        nitrite: reading.nitrite ?? tank.parameters.nitrite,
        nitrate: reading.nitrate ?? tank.parameters.nitrate,
        gh: reading.gh ?? tank.parameters.gh,
        kh: reading.kh ?? tank.parameters.kh,
        tds: reading.tds ?? tank.parameters.tds,
        salinity: reading.salinity ?? tank.parameters.salinity,
      };

      await updateTank(id, { parameters: updatedParameters });
      await loadTank();
      await loadHistory();
      
      setIsParameterModalOpen(false);
      
      // Auto-complete parameter check reminder
      completeReminder(id, 'parameter_check');
      
      toast.success('Parameters logged!', 'Water parameters have been updated.');
    } catch (err) {
      console.error('Error adding reading:', err);
      toast.error('Failed to log parameters', 'Please try again.');
    }
  };

  const handleDeleteParameterReading = async (readingId: string) => {
    try {
      await deleteParameterReading(readingId);
      await loadHistory();
      toast.success('Reading deleted', 'Parameter reading removed from history.');
    } catch (err) {
      console.error('Error deleting reading:', err);
      toast.error('Failed to delete reading', 'Please try again.');
    }
  };

  const handleAddMaintenanceLog = async (log: any) => {
    if (!id) return;

    try {
      await addMaintenanceLog(id, log);
      await loadHistory();
      setIsMaintenanceModalOpen(false);
      
      // Auto-complete matching reminder
      if (log.type === 'water_change') {
        completeReminder(id, 'water_change');
      } else if (log.type === 'filter_cleaning') {
        completeReminder(id, 'filter_clean');
      }
      
      toast.success('Maintenance logged!', `${log.title} has been recorded.`);
    } catch (err) {
      console.error('Error adding log:', err);
      toast.error('Failed to log maintenance', 'Please try again.');
    }
  };

  const handleDeleteMaintenanceLog = async (logId: string) => {
    try {
      await deleteMaintenanceLog(logId);
      await loadHistory();
      toast.success('Log deleted', 'Maintenance log removed from history.');
    } catch (err) {
      console.error('Error deleting log:', err);
      toast.error('Failed to delete log', 'Please try again.');
    }
  };

  if (isLoading || !tank) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-indigo-600 dark:border-indigo-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-700 dark:text-slate-300 font-semibold">Loading tank...</p>
        </motion.div>
      </div>
    );
  }

  const totalFish = tank.inhabitants?.fish.reduce((sum, f) => sum + f.quantity, 0) || 0;
  const totalPlants = tank.inhabitants?.plants.reduce((sum, p) => sum + p.quantity, 0) || 0;

  const fishSpecies = (tank.inhabitants?.fish || []).map(f => allSpecies.find(s => s.id === f.speciesId)).filter(Boolean);
  const compatibilityWarnings: string[] = [];

  fishSpecies.forEach((species, i) => {
    fishSpecies.slice(i + 1).forEach(otherSpecies => {
      if (species && otherSpecies) {
        const isBadMatch = species.behavior.compatibility.badMates.some(badMate => 
          otherSpecies.taxonomy.commonName.toLowerCase().includes(badMate.toLowerCase()) ||
          badMate.toLowerCase().includes(otherSpecies.taxonomy.commonName.toLowerCase())
        );
        if (isBadMatch) {
          compatibilityWarnings.push(`${species.taxonomy.commonName} and ${otherSpecies.taxonomy.commonName} may not be compatible`);
        }
      }
    });
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title={`${tank.name} - My Tanks`}
        description={`Manage ${tank.name}, a ${tank.volumeLiters}L ${tank.type} aquarium.`}
      />

      {/* Clean Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 sm:py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            to="/my-tanks"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors text-sm font-semibold gap-1 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to My Tanks
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Droplets className="w-8 h-8" />
                <h1 className="text-3xl md:text-4xl font-bold">{tank.name}</h1>
              </div>
              <div className="flex flex-wrap items-center gap-2 ml-11 text-sm text-indigo-100">
                <span className="font-semibold">{tank.volumeLiters}L</span>
                <span>•</span>
                <span className="font-semibold capitalize">{tank.type}</span>
                <span>•</span>
                <span className="font-semibold">{totalFish} fish</span>
                <span>•</span>
                <span className="font-semibold">{totalPlants} plants</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center gap-2 bg-white hover:bg-white/95 text-indigo-600 px-5 py-3 rounded-xl font-semibold shadow-sm hover:shadow transition-all w-fit"
            >
              <Edit className="w-4 h-4" />
              Edit Tank
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 ml-11">
            <CleanStatCard icon={<Thermometer className="w-5 h-5 text-orange-600" />} label="Temperature" value={`${tank.parameters.tempC}°C`} />
            <CleanStatCard icon={<Droplets className="w-5 h-5 text-blue-600" />} label="pH Level" value={tank.parameters.ph} />
            <CleanStatCard icon={<FishIcon className="w-5 h-5 text-purple-600" />} label="Total Fish" value={totalFish} />
            <CleanStatCard icon={<Leaf className="w-5 h-5 text-emerald-600" />} label="Total Plants" value={totalPlants} />
          </div>
        </div>
      </motion.header>

      {/* Clean Tab Navigation */}
      <div className="sticky top-0 z-30 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
            <CleanTabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon={<Sparkles className="w-4 h-4" />} label="Overview" />
            <CleanTabButton active={activeTab === 'parameters'} onClick={() => setActiveTab('parameters')} icon={<Activity className="w-4 h-4" />} label="Parameters" badge={parameterReadings.length} />
            <CleanTabButton active={activeTab === 'maintenance'} onClick={() => setActiveTab('maintenance')} icon={<Wrench className="w-4 h-4" />} label="Maintenance" badge={maintenanceLogs.length} />
            <CleanTabButton active={activeTab === 'reminders'} onClick={() => setActiveTab('reminders')} icon={<Bell className="w-4 h-4" />} label="Reminders" />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <OverviewTab
              key="overview"
              tank={tank}
              compatibilityWarnings={compatibilityWarnings}
              onAddFish={() => { setModalType('fish'); setIsInhabitantModalOpen(true); }}
              onAddPlant={() => { setModalType('plant'); setIsInhabitantModalOpen(true); }}
              onRemoveInhabitant={handleRemoveInhabitant}
            />
          )}

          {activeTab === 'parameters' && (
            <ParametersTab
              key="parameters"
              readings={parameterReadings}
              onAddReading={() => setIsParameterModalOpen(true)}
              onDeleteReading={handleDeleteParameterReading}
            />
          )}

          {activeTab === 'maintenance' && (
            <MaintenanceTab
              key="maintenance"
              logs={maintenanceLogs}
              onAddLog={() => setIsMaintenanceModalOpen(true)}
              onDeleteLog={handleDeleteMaintenanceLog}
            />
          )}

          {activeTab === 'reminders' && (
            <RemindersTab key="reminders" tankId={id!} tankName={tank.name} />
          )}
        </AnimatePresence>
      </main>

      <AddInhabitantModal isOpen={isInhabitantModalOpen} onClose={() => setIsInhabitantModalOpen(false)} onSubmit={handleAddInhabitant} type={modalType} tankType={tank.type} />
      <EditTankModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} onSubmit={handleEditTank} tank={tank} />
      <AddParameterModal isOpen={isParameterModalOpen} onClose={() => setIsParameterModalOpen(false)} onSubmit={handleAddParameterReading} tankType={tank.type} />
      <AddMaintenanceModal isOpen={isMaintenanceModalOpen} onClose={() => setIsMaintenanceModalOpen(false)} onSubmit={handleAddMaintenanceLog} />
    </div>
  );
};

// TAB COMPONENTS
const OverviewTab = ({ tank, compatibilityWarnings, onAddFish, onAddPlant, onRemoveInhabitant }: any) => {
  const getSubstrateLabel = (substrate?: string) => {
    if (!substrate) return 'Not specified';
    const labels: Record<string, string> = { sand: 'Sand', gravel: 'Gravel', soil: 'Aqua Soil', bare: 'Bare Bottom' };
    return labels[substrate] || substrate;
  };
  const getLightingLabel = (lighting?: string) => {
    if (!lighting) return 'Not specified';
    const labels: Record<string, string> = { low: 'Low (10-30 PAR)', medium: 'Medium (30-50 PAR)', high: 'High (50+ PAR)' };
    return labels[lighting] || lighting;
  };
  
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="space-y-6 md:space-y-8">
      {compatibilityWarnings.length > 0 && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded-lg p-5 md:p-6">
          <div className="flex gap-3 md:gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-amber-900 dark:text-amber-300 mb-2">Compatibility Warnings</h3>
              <ul className="space-y-1.5">
                {compatibilityWarnings.map((warning: string, i: number) => (
                  <li key={i} className="text-sm text-amber-800 dark:text-amber-200 flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">•</span>
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-5 md:mb-6 flex items-center gap-2">
          <Mountain className="w-6 h-6 text-indigo-600" />
          Tank Setup
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <CleanSetupCard icon={<Mountain className="w-6 h-6 text-amber-600" />} label="Substrate" value={getSubstrateLabel(tank.substrate)} isEmpty={!tank.substrate} />
          <CleanSetupCard icon={<Lightbulb className="w-6 h-6 text-yellow-600" />} label="Lighting" value={getLightingLabel(tank.lighting)} isEmpty={!tank.lighting} />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-5 md:mb-6 flex items-center gap-2">
          <Activity className="w-6 h-6 text-blue-600" />
          Current Water Parameters
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <CleanParamCard label="pH" value={tank.parameters.ph} status={tank.parameters.ph >= 6.5 && tank.parameters.ph <= 7.5 ? 'good' : 'warning'} />
          <CleanParamCard label="Temperature" value={`${tank.parameters.tempC}°C`} status="good" />
          <CleanParamCard label="Ammonia" value={`${tank.parameters.ammonia} ppm`} status={tank.parameters.ammonia > 0 ? 'danger' : 'good'} />
          <CleanParamCard label="Nitrite" value={`${tank.parameters.nitrite} ppm`} status={tank.parameters.nitrite > 0 ? 'danger' : 'good'} />
          <CleanParamCard label="Nitrate" value={`${tank.parameters.nitrate} ppm`} status={tank.parameters.nitrate > 20 ? 'warning' : 'good'} />
          {(tank.parameters.gh != null && tank.parameters.gh > 0) && <CleanParamCard label="GH" value={`${tank.parameters.gh}°dGH`} status="good" />}
          {(tank.parameters.kh != null && tank.parameters.kh > 0) && <CleanParamCard label="KH" value={`${tank.parameters.kh}°dKH`} status="good" />}
          {(tank.parameters.tds != null && tank.parameters.tds > 0) && <CleanParamCard label="TDS" value={`${tank.parameters.tds} ppm`} status="good" />}
          {(tank.parameters.salinity != null && tank.parameters.salinity > 0) && <CleanParamCard label="Salinity" value={`${tank.parameters.salinity} ppt`} status="good" />}
        </div>
      </motion.div>

      <InhabitantsSection title="Fish" icon={<FishIcon className="w-6 h-6 text-indigo-600" />} inhabitants={tank.inhabitants?.fish || []} speciesData={allSpecies} linkPrefix="/species" onAdd={onAddFish} onRemove={(speciesId) => onRemoveInhabitant(speciesId, 'fish')} emptyMessage="No fish added yet" addButtonLabel="Add Fish" />
      <InhabitantsSection title="Plants" icon={<Leaf className="w-6 h-6 text-emerald-600" />} inhabitants={tank.inhabitants?.plants || []} speciesData={allPlants} linkPrefix="/plants" onAdd={onAddPlant} onRemove={(speciesId) => onRemoveInhabitant(speciesId, 'plant')} emptyMessage="No plants added yet" addButtonLabel="Add Plant" />
    </motion.div>
  );
};

const ParametersTab = ({ readings, onAddReading }: any) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="space-y-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
        <Activity className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
        Parameter History
      </h2>
      <button onClick={onAddReading} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow transition-all w-fit">
        <Plus className="w-5 h-5" />Log Parameters
      </button>
    </div>
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 md:p-6">
      <ParameterChart readings={readings} />
    </div>
  </motion.div>
);

const MaintenanceTab = ({ logs, onAddLog, onDeleteLog }: any) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="space-y-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
        <Wrench className="w-6 h-6 md:w-7 md:h-7 text-purple-600" />
        Maintenance History
      </h2>
      <button onClick={onAddLog} className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow transition-all w-fit">
        <Plus className="w-5 h-5" />Log Maintenance
      </button>
    </div>
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 md:p-6">
      <MaintenanceTimeline logs={logs} onDelete={onDeleteLog} />
    </div>
  </motion.div>
);

const RemindersTab = ({ tankId, tankName }: { tankId: string; tankName: string }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
      <Bell className="w-6 h-6 md:w-7 md:h-7 text-indigo-600" />
      Reminders
    </h2>
    <ReminderPanel tankId={tankId} tankName={tankName} />
  </motion.div>
);

// UTILITY COMPONENTS
const CleanStatCard = ({ icon, label, value }: any) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">{icon}</div>
      <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">{label}</span>
    </div>
    <div className="text-2xl font-bold text-white">{value}</div>
  </div>
);

const CleanTabButton = ({ active, onClick, icon, label, badge }: any) => (
  <button onClick={onClick} className={`relative flex items-center gap-2 px-4 md:px-5 py-3 md:py-4 font-semibold transition-all whitespace-nowrap ${active ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}>
    {icon}<span className="text-sm md:text-base">{label}</span>
    {badge !== undefined && badge > 0 && (<span className="ml-1 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full">{badge}</span>)}
    {active && (<motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400" transition={{ type: "spring", stiffness: 500, damping: 30 }} />)}
  </button>
);

const CleanSetupCard = ({ icon, label, value, isEmpty }: any) => (
  <div className={`bg-white dark:bg-slate-900 border ${isEmpty ? 'border-slate-200 dark:border-slate-800' : 'border-slate-200 dark:border-slate-800'} rounded-xl p-4 md:p-5 shadow-sm`}>
    <div className="flex items-center gap-3 mb-3">
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${isEmpty ? 'bg-slate-100 dark:bg-slate-800' : 'bg-slate-100 dark:bg-slate-800'}`}>{icon}</div>
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</span>
    </div>
    <div className={`text-base md:text-lg font-bold ${isEmpty ? 'text-slate-500 dark:text-slate-400 italic' : 'text-slate-900 dark:text-white'}`}>{value}</div>
  </div>
);

const CleanParamCard = ({ label, value, status }: any) => {
  const config = {
    good: { icon: CheckCircle, iconColor: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800' },
    warning: { icon: AlertTriangle, iconColor: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-800' },
    danger: { icon: AlertTriangle, iconColor: 'text-red-600 dark:text-red-400', border: 'border-red-200 dark:border-red-800' }
  }[status];
  
  const Icon = config.icon;
  
  return (
    <div className={`bg-white dark:bg-slate-900 border ${config.border} rounded-xl p-4 shadow-sm`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</span>
        <Icon className={`w-5 h-5 ${config.iconColor}`} />
      </div>
      <div className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
    </div>
  );
};

const InhabitantsSection = ({ title, icon, inhabitants, speciesData, linkPrefix, onAdd, onRemove, emptyMessage, addButtonLabel }: any) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 md:p-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 md:mb-6">
      <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">{icon}{title} ({inhabitants.length} species)</h2>
      <button onClick={onAdd} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-sm hover:shadow transition-all w-fit">
        <Plus className="w-4 h-4" />{addButtonLabel}
      </button>
    </div>
    {inhabitants.length === 0 ? (
      <div className="text-center py-12 text-slate-500 dark:text-slate-400"><p className="text-sm md:text-base">{emptyMessage}</p></div>
    ) : (
      <div className="space-y-3">
        {inhabitants.map((inhabitant: any, index: number) => {
          const species = speciesData.find((s: any) => s.id === inhabitant.speciesId);
          if (!species) return null;
          return <InhabitantCard key={`${inhabitant.speciesId}-${index}`} name={inhabitant.speciesName} scientificName={species.taxonomy.scientificName} quantity={inhabitant.quantity} slug={species.slug} imageUrl={species.imageUrl} linkPrefix={linkPrefix} onRemove={() => onRemove(inhabitant.speciesId)} />;
        })}
      </div>
    )}
  </motion.div>
);

const InhabitantCard = ({ name, scientificName, quantity, slug, imageUrl, linkPrefix, onRemove }: any) => (
  <div className="group flex items-center gap-3 md:gap-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl p-3 md:p-4 border border-slate-200 dark:border-slate-700 transition-all">
    {imageUrl ? (
      <img src={imageUrl} alt={name} className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover flex-shrink-0" />
    ) : (
      <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold">No Image</span>
      </div>
    )}
    <Link to={`${linkPrefix}/${slug}`} className="flex-1 min-w-0">
      <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm md:text-base truncate">{name}</h3>
      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 italic truncate">{scientificName}</p>
      <div className="mt-1 inline-flex items-center gap-1.5 px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded-lg">
        <Sparkles className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Qty: {quantity}</span>
      </div>
    </Link>
    <button onClick={(e) => { e.preventDefault(); if (confirm(`Remove ${name} from tank?`)) onRemove(); }} className="p-2 text-slate-400 dark:text-slate-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors flex-shrink-0" title="Remove">
      <Trash2 className="w-5 h-5" />
    </button>
  </div>
);

export default TankDetailPage;
