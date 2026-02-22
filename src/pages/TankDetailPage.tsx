import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Droplets, Thermometer, Fish as FishIcon, Leaf, Trash2, AlertTriangle, CheckCircle, Edit, Activity, Wrench, Mountain, Lightbulb, Bell, Sparkles, TrendingUp } from 'lucide-react';
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="relative w-16 h-16 border-4 border-indigo-600 dark:border-indigo-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          </div>
          <p className="text-slate-700 dark:text-slate-300 font-bold">Loading tank...</p>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <SEOHead
        title={`${tank.name} - My Tanks`}
        description={`Manage ${tank.name}, a ${tank.volumeLiters}L ${tank.type} aquarium.`}
      />

      {/* Enhanced Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <Link
            to="/my-tanks"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors text-sm font-bold gap-1 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to My Tanks
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Droplets className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">{tank.name}</h1>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-sm md:text-base text-indigo-200 font-semibold">{tank.volumeLiters}L</span>
                    <span className="text-indigo-300">•</span>
                    <span className="text-sm md:text-base text-indigo-200 font-semibold capitalize">{tank.type}</span>
                    <span className="text-indigo-300">•</span>
                    <span className="text-sm md:text-base text-indigo-200 font-semibold">{totalFish} fish</span>
                    <span className="text-indigo-300">•</span>
                    <span className="text-sm md:text-base text-indigo-200 font-semibold">{totalPlants} plants</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center gap-2 bg-white hover:bg-white/95 text-indigo-600 px-5 py-3 rounded-xl transition-all font-bold shadow-lg hover:shadow-xl transform hover:scale-105 w-fit"
            >
              <Edit className="w-4 h-4" />
              Edit Tank
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <EnhancedStatCard
              icon={<Thermometer className="w-5 h-5" />}
              label="Temperature"
              value={`${tank.parameters.tempC}°C`}
              gradient="from-orange-500 to-red-500"
            />
            <EnhancedStatCard
              icon={<Droplets className="w-5 h-5" />}
              label="pH Level"
              value={tank.parameters.ph}
              gradient="from-blue-500 to-cyan-500"
            />
            <EnhancedStatCard
              icon={<FishIcon className="w-5 h-5" />}
              label="Total Fish"
              value={totalFish}
              gradient="from-purple-500 to-pink-500"
            />
            <EnhancedStatCard
              icon={<Leaf className="w-5 h-5" />}
              label="Total Plants"
              value={totalPlants}
              gradient="from-emerald-500 to-green-500"
            />
          </div>
        </div>
      </motion.header>

      {/* Enhanced Tab Navigation */}
      <div className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b-2 border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
            <EnhancedTabButton
              active={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
              icon={<Sparkles className="w-4 h-4" />}
              label="Overview"
            />
            <EnhancedTabButton
              active={activeTab === 'parameters'}
              onClick={() => setActiveTab('parameters')}
              icon={<Activity className="w-4 h-4" />}
              label="Parameters"
              badge={parameterReadings.length}
            />
            <EnhancedTabButton
              active={activeTab === 'maintenance'}
              onClick={() => setActiveTab('maintenance')}
              icon={<Wrench className="w-4 h-4" />}
              label="Maintenance"
              badge={maintenanceLogs.length}
            />
            <EnhancedTabButton
              active={activeTab === 'reminders'}
              onClick={() => setActiveTab('reminders')}
              icon={<Bell className="w-4 h-4" />}
              label="Reminders"
            />
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

      <AddInhabitantModal
        isOpen={isInhabitantModalOpen}
        onClose={() => setIsInhabitantModalOpen(false)}
        onSubmit={handleAddInhabitant}
        type={modalType}
        tankType={tank.type}
      />

      <EditTankModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditTank}
        tank={tank}
      />

      <AddParameterModal
        isOpen={isParameterModalOpen}
        onClose={() => setIsParameterModalOpen(false)}
        onSubmit={handleAddParameterReading}
        tankType={tank.type}
      />

      <AddMaintenanceModal
        isOpen={isMaintenanceModalOpen}
        onClose={() => setIsMaintenanceModalOpen(false)}
        onSubmit={handleAddMaintenanceLog}
      />
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 md:space-y-8"
    >
      {compatibilityWarnings.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-lg opacity-20"></div>
          <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-300 dark:border-amber-700 rounded-2xl p-5 md:p-6 shadow-lg">
            <div className="flex gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-black text-amber-900 dark:text-amber-300 mb-3 text-base md:text-lg">Compatibility Warnings</h3>
                <ul className="space-y-2">
                  {compatibilityWarnings.map((warning: string, i: number) => (
                    <li key={i} className="text-sm md:text-base text-amber-800 dark:text-amber-200 flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span>{warning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.05 }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-slate-200 dark:border-slate-700 p-5 md:p-6"
      >
        <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-5 md:mb-6 flex items-center gap-2">
          <Mountain className="w-6 h-6 text-indigo-600" />
          Tank Setup
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <EnhancedSetupCard 
            icon={<Mountain className="w-6 h-6 text-amber-600" />} 
            label="Substrate" 
            value={getSubstrateLabel(tank.substrate)} 
            isEmpty={!tank.substrate}
            gradient="from-amber-500 to-orange-500"
          />
          <EnhancedSetupCard 
            icon={<Lightbulb className="w-6 h-6 text-yellow-600" />} 
            label="Lighting" 
            value={getLightingLabel(tank.lighting)} 
            isEmpty={!tank.lighting}
            gradient="from-yellow-500 to-amber-500"
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-slate-200 dark:border-slate-700 p-5 md:p-6"
      >
        <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-5 md:mb-6 flex items-center gap-2">
          <Activity className="w-6 h-6 text-blue-600" />
          Current Water Parameters
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <EnhancedParamCard label="pH" value={tank.parameters.ph} status={tank.parameters.ph >= 6.5 && tank.parameters.ph <= 7.5 ? 'good' : 'warning'} />
          <EnhancedParamCard label="Temperature" value={`${tank.parameters.tempC}°C`} status="good" />
          <EnhancedParamCard label="Ammonia" value={`${tank.parameters.ammonia} ppm`} status={tank.parameters.ammonia > 0 ? 'danger' : 'good'} />
          <EnhancedParamCard label="Nitrite" value={`${tank.parameters.nitrite} ppm`} status={tank.parameters.nitrite > 0 ? 'danger' : 'good'} />
          <EnhancedParamCard label="Nitrate" value={`${tank.parameters.nitrate} ppm`} status={tank.parameters.nitrate > 20 ? 'warning' : 'good'} />
          {(tank.parameters.gh != null && tank.parameters.gh > 0) && <EnhancedParamCard label="GH" value={`${tank.parameters.gh}°dGH`} status="good" />}
          {(tank.parameters.kh != null && tank.parameters.kh > 0) && <EnhancedParamCard label="KH" value={`${tank.parameters.kh}°dKH`} status="good" />}
          {(tank.parameters.tds != null && tank.parameters.tds > 0) && <EnhancedParamCard label="TDS" value={`${tank.parameters.tds} ppm`} status="good" />}
          {(tank.parameters.salinity != null && tank.parameters.salinity > 0) && <EnhancedParamCard label="Salinity" value={`${tank.parameters.salinity} ppt`} status="good" />}
        </div>
      </motion.div>

      <InhabitantsSection 
        title="Fish" 
        icon={<FishIcon className="w-6 h-6 text-indigo-600" />} 
        inhabitants={tank.inhabitants?.fish || []} 
        speciesData={allSpecies} 
        linkPrefix="/species" 
        onAdd={onAddFish} 
        onRemove={(speciesId) => onRemoveInhabitant(speciesId, 'fish')} 
        emptyMessage="No fish added yet" 
        addButtonLabel="Add Fish" 
        addButtonGradient="from-indigo-600 to-purple-600"
      />

      <InhabitantsSection 
        title="Plants" 
        icon={<Leaf className="w-6 h-6 text-emerald-600" />} 
        inhabitants={tank.inhabitants?.plants || []} 
        speciesData={allPlants} 
        linkPrefix="/plants" 
        onAdd={onAddPlant} 
        onRemove={(speciesId) => onRemoveInhabitant(speciesId, 'plant')} 
        emptyMessage="No plants added yet" 
        addButtonLabel="Add Plant" 
        addButtonGradient="from-emerald-600 to-green-600"
      />
    </motion.div>
  );
};

const ParametersTab = ({ readings, onAddReading }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-6"
  >
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
        <Activity className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
        Parameter History
      </h2>
      <button 
        onClick={onAddReading} 
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-black shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-fit"
      >
        <Plus className="w-5 h-5" />
        Log Parameters
      </button>
    </div>
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-slate-200 dark:border-slate-700 p-5 md:p-6">
      <ParameterChart readings={readings} />
    </div>
  </motion.div>
);

const MaintenanceTab = ({ logs, onAddLog, onDeleteLog }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-6"
  >
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
        <Wrench className="w-6 h-6 md:w-7 md:h-7 text-purple-600" />
        Maintenance History
      </h2>
      <button 
        onClick={onAddLog} 
        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-black shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-fit"
      >
        <Plus className="w-5 h-5" />
        Log Maintenance
      </button>
    </div>
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-slate-200 dark:border-slate-700 p-5 md:p-6">
      <MaintenanceTimeline logs={logs} onDelete={onDeleteLog} />
    </div>
  </motion.div>
);

const RemindersTab = ({ tankId, tankName }: { tankId: string; tankName: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-6"
  >
    <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
      <Bell className="w-6 h-6 md:w-7 md:h-7 text-indigo-600" />
      Reminders
    </h2>
    <ReminderPanel tankId={tankId} tankName={tankName} />
  </motion.div>
);

// UTILITY COMPONENTS
const EnhancedStatCard = ({ icon, label, value, gradient }: any) => (
  <div className="group relative">
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
    <div className="relative bg-white/30 backdrop-blur-md rounded-xl p-4 border-2 border-white/40 shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${gradient} flex items-center justify-center shadow-md`}>
          <div className="text-white">{icon}</div>
        </div>
        <span className="text-xs font-bold text-white/90 uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-2xl font-black text-white">{value}</div>
    </div>
  </div>
);

const EnhancedTabButton = ({ active, onClick, icon, label, badge }: any) => (
  <button 
    onClick={onClick} 
    className={`relative flex items-center gap-2 px-4 md:px-5 py-3 md:py-4 font-bold transition-all whitespace-nowrap ${
      active 
        ? 'text-indigo-600 dark:text-indigo-400' 
        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
    }`}
  >
    {icon}
    <span className="text-sm md:text-base">{label}</span>
    {badge !== undefined && badge > 0 && (
      <span className="ml-1 px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-xs font-black rounded-full">
        {badge}
      </span>
    )}
    {active && (
      <motion.div
        layoutId="activeTab"
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg"
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    )}
  </button>
);

const EnhancedSetupCard = ({ icon, label, value, isEmpty, gradient }: any) => (
  <div className="group relative">
    {!isEmpty && <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity`}></div>}
    <div className={`relative ${
      isEmpty 
        ? 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700' 
        : 'bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/50 border-slate-200 dark:border-slate-700'
    } border-2 rounded-xl p-4 md:p-5 shadow-lg hover:shadow-xl transition-all`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${
          isEmpty ? 'bg-slate-200 dark:bg-slate-700' : `bg-gradient-to-r ${gradient} shadow-lg`
        }`}>
          <div className={isEmpty ? 'text-slate-400 dark:text-slate-500' : 'text-white'}>{icon}</div>
        </div>
        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{label}</span>
      </div>
      <div className={`text-base md:text-lg font-black ${
        isEmpty ? 'text-slate-500 dark:text-slate-400 italic' : 'text-slate-900 dark:text-white'
      }`}>{value}</div>
    </div>
  </div>
);

const EnhancedParamCard = ({ label, value, status }: any) => {
  const config = {
    good: { gradient: 'from-emerald-500 to-green-500', bg: 'from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30', border: 'border-emerald-200 dark:border-emerald-700', icon: CheckCircle },
    warning: { gradient: 'from-amber-500 to-orange-500', bg: 'from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30', border: 'border-amber-300 dark:border-amber-700', icon: AlertTriangle },
    danger: { gradient: 'from-red-500 to-rose-500', bg: 'from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30', border: 'border-red-300 dark:border-red-700', icon: AlertTriangle }
  }[status];
  
  const Icon = config.icon;
  
  return (
    <div className="group relative">
      <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity`}></div>
      <div className={`relative bg-gradient-to-br ${config.bg} border-2 ${config.border} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{label}</span>
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${config.gradient} flex items-center justify-center shadow-md`}>
            <Icon className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">{value}</div>
      </div>
    </div>
  );
};

const InhabitantsSection = ({ title, icon, inhabitants, speciesData, linkPrefix, onAdd, onRemove, emptyMessage, addButtonLabel, addButtonGradient }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-slate-200 dark:border-slate-700 p-5 md:p-6"
  >
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 md:mb-6">
      <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
        {icon}
        {title} ({inhabitants.length} species)
      </h2>
      <button 
        onClick={onAdd} 
        className={`flex items-center gap-2 bg-gradient-to-r ${addButtonGradient} hover:brightness-110 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-fit`}
      >
        <Plus className="w-4 h-4" />
        {addButtonLabel}
      </button>
    </div>
    {inhabitants.length === 0 ? (
      <div className="text-center py-12 text-slate-500 dark:text-slate-400">
        <p className="text-sm md:text-base">{emptyMessage}</p>
      </div>
    ) : (
      <div className="space-y-3">
        {inhabitants.map((inhabitant: any, index: number) => {
          const species = speciesData.find((s: any) => s.id === inhabitant.speciesId);
          if (!species) return null;
          return (
            <InhabitantCard 
              key={`${inhabitant.speciesId}-${index}`} 
              name={inhabitant.speciesName} 
              scientificName={species.taxonomy.scientificName} 
              quantity={inhabitant.quantity} 
              slug={species.slug} 
              imageUrl={species.imageUrl} 
              linkPrefix={linkPrefix} 
              onRemove={() => onRemove(inhabitant.speciesId)} 
            />
          );
        })}
      </div>
    )}
  </motion.div>
);

const InhabitantCard = ({ name, scientificName, quantity, slug, imageUrl, linkPrefix, onRemove }: any) => (
  <div className="group flex items-center gap-3 md:gap-4 bg-gradient-to-r from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-800 hover:from-slate-100 hover:to-slate-50 dark:hover:from-slate-700 dark:hover:to-slate-800 rounded-xl p-3 md:p-4 border-2 border-slate-200 dark:border-slate-700 transition-all shadow-sm hover:shadow-md">
    {imageUrl ? (
      <img src={imageUrl} alt={name} className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover flex-shrink-0 shadow-md" />
    ) : (
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
        <span className="text-slate-500 dark:text-slate-400 text-xs font-bold">No Image</span>
      </div>
    )}
    <Link to={`${linkPrefix}/${slug}`} className="flex-1 min-w-0">
      <h3 className="font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm md:text-base truncate">{name}</h3>
      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 italic truncate">{scientificName}</p>
      <div className="mt-1 inline-flex items-center gap-1.5 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
        <Sparkles className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
        <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300">Qty: {quantity}</span>
      </div>
    </Link>
    <button 
      onClick={(e) => { e.preventDefault(); if (confirm(`Remove ${name} from tank?`)) onRemove(); }} 
      className="p-2 text-slate-400 dark:text-slate-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors flex-shrink-0" 
      title="Remove"
    >
      <Trash2 className="w-5 h-5" />
    </button>
  </div>
);

export default TankDetailPage;
