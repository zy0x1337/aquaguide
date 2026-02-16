import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Droplets, Thermometer, Fish as FishIcon, Leaf, Trash2, AlertTriangle, CheckCircle, Edit, Activity, Wrench, Mountain, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tank } from '../types/tank';
import { SEOHead } from '../components/seo/SEOHead';
import AddInhabitantModal from '../components/tanks/AddInhabitantModal';
import EditTankModal from '../components/tanks/EditTankModal';
import AddParameterModal from '../components/tanks/AddParameterModal';
import AddMaintenanceModal from '../components/tanks/AddMaintenanceModal';
import ParameterChart from '../components/tanks/ParameterChart';
import MaintenanceTimeline from '../components/tanks/MaintenanceTimeline';
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

const TankDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tank, setTank] = useState<Tank | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'parameters' | 'maintenance'>('overview');
  
  // Modals
  const [isInhabitantModalOpen, setIsInhabitantModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isParameterModalOpen, setIsParameterModalOpen] = useState(false);
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'fish' | 'plant'>('fish');

  // History data
  const [parameterReadings, setParameterReadings] = useState<ParameterReading[]>([]);
  const [maintenanceLogs, setMaintenanceLogs] = useState<MaintenanceLog[]>([]);

  // Load tank and history
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
        console.log('🐟 TANK DATA LOADED:', data);
        console.log('📦 Substrate:', data.substrate);
        console.log('💡 Lighting:', data.lighting);
        setTank(data);
      } else {
        navigate('/my-tanks');
      }
    } catch (err) {
      console.error('Error loading tank:', err);
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
    }
  };

  const handleEditTank = async (updatedTank: Tank) => {
    if (!id) return;
    
    try {
      console.log('💾 SAVING TANK WITH:', {
        substrate: updatedTank.substrate,
        lighting: updatedTank.lighting,
      });
      const updated = await updateTank(id, {
        name: updatedTank.name,
        type: updatedTank.type,
        volumeLiters: updatedTank.volumeLiters,
        substrate: updatedTank.substrate,
        lighting: updatedTank.lighting,
      });
      console.log('✅ TANK UPDATED:', updated);
      setTank(updated);
      setIsEditModalOpen(false);
    } catch (err) {
      console.error('Error updating tank:', err);
      alert('Failed to update tank. Please try again.');
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
    } catch (err) {
      console.error('Error adding inhabitant:', err);
      alert('Failed to add inhabitant. Please try again.');
    }
  };

  const handleRemoveInhabitant = async (speciesId: string, type: 'fish' | 'plant') => {
    if (!tank || !id) return;

    try {
      await removeInhabitant(id, speciesId, type);
      await loadTank();
    } catch (err) {
      console.error('Error removing inhabitant:', err);
      alert('Failed to remove inhabitant. Please try again.');
    }
  };

  const handleAddParameterReading = async (reading: any) => {
    if (!id || !tank) return;

    try {
      // Save the parameter reading to history
      await addParameterReading(id, reading);
      
      // Update tank's current parameters with the new reading
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
      
      // Reload tank and history to reflect changes
      await loadTank();
      await loadHistory();
      
      setIsParameterModalOpen(false);
    } catch (err) {
      console.error('Error adding reading:', err);
      alert('Failed to add reading. Please try again.');
    }
  };

  const handleDeleteParameterReading = async (readingId: string) => {
    try {
      await deleteParameterReading(readingId);
      await loadHistory();
    } catch (err) {
      console.error('Error deleting reading:', err);
      alert('Failed to delete reading. Please try again.');
    }
  };

  const handleAddMaintenanceLog = async (log: any) => {
    if (!id) return;

    try {
      await addMaintenanceLog(id, log);
      await loadHistory();
      setIsMaintenanceModalOpen(false);
    } catch (err) {
      console.error('Error adding log:', err);
      alert('Failed to add maintenance log. Please try again.');
    }
  };

  const handleDeleteMaintenanceLog = async (logId: string) => {
    try {
      await deleteMaintenanceLog(logId);
      await loadHistory();
    } catch (err) {
      console.error('Error deleting log:', err);
      alert('Failed to delete log. Please try again.');
    }
  };

  if (isLoading || !tank) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading tank...</p>
        </div>
      </div>
    );
  }

  const totalFish = tank.inhabitants?.fish.reduce((sum, f) => sum + f.quantity, 0) || 0;
  const totalPlants = tank.inhabitants?.plants.reduce((sum, p) => sum + p.quantity, 0) || 0;

  // Check compatibility warnings
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <SEOHead
        title={`${tank.name} - My Tanks`}
        description={`Manage ${tank.name}, a ${tank.volumeLiters}L ${tank.type} aquarium.`}
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            to="/my-tanks"
            className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Back to My Tanks
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{tank.name}</h1>
              <p className="text-indigo-200">
                {tank.volumeLiters}L • {tank.type.charAt(0).toUpperCase() + tank.type.slice(1)} • {totalFish} fish • {totalPlants} plants
              </p>
            </div>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Edit className="w-4 h-4" />
              Edit Tank
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCard
              icon={<Thermometer className="w-5 h-5" />}
              label="Temperature"
              value={`${tank.parameters.tempC}°C`}
            />
            <StatCard
              icon={<Droplets className="w-5 h-5" />}
              label="pH Level"
              value={tank.parameters.ph}
            />
            <StatCard
              icon={<FishIcon className="w-5 h-5" />}
              label="Total Fish"
              value={totalFish}
            />
            <StatCard
              icon={<Leaf className="w-5 h-5" />}
              label="Total Plants"
              value={totalPlants}
            />
          </div>
        </div>
      </motion.header>

      {/* Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-8">
            <TabButton
              active={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
              icon={<FishIcon className="w-4 h-4" />}
              label="Overview"
            />
            <TabButton
              active={activeTab === 'parameters'}
              onClick={() => setActiveTab('parameters')}
              icon={<Activity className="w-4 h-4" />}
              label="Parameters"
              badge={parameterReadings.length}
            />
            <TabButton
              active={activeTab === 'maintenance'}
              onClick={() => setActiveTab('maintenance')}
              icon={<Wrench className="w-4 h-4" />}
              label="Maintenance"
              badge={maintenanceLogs.length}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {activeTab === 'overview' && (
          <OverviewTab
            tank={tank}
            compatibilityWarnings={compatibilityWarnings}
            onAddFish={() => { setModalType('fish'); setIsInhabitantModalOpen(true); }}
            onAddPlant={() => { setModalType('plant'); setIsInhabitantModalOpen(true); }}
            onRemoveInhabitant={handleRemoveInhabitant}
          />
        )}

        {activeTab === 'parameters' && (
          <ParametersTab
            readings={parameterReadings}
            onAddReading={() => setIsParameterModalOpen(true)}
            onDeleteReading={handleDeleteParameterReading}
          />
        )}

        {activeTab === 'maintenance' && (
          <MaintenanceTab
            logs={maintenanceLogs}
            onAddLog={() => setIsMaintenanceModalOpen(true)}
            onDeleteLog={handleDeleteMaintenanceLog}
          />
        )}
      </main>

      {/* Modals */}
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

// Tab Components
const OverviewTab = ({ tank, compatibilityWarnings, onAddFish, onAddPlant, onRemoveInhabitant }: any) => {
  // Format substrate and lighting for display
  const getSubstrateLabel = (substrate?: string) => {
    if (!substrate) return 'Not specified';
    const labels: Record<string, string> = {
      sand: 'Sand',
      gravel: 'Gravel',
      soil: 'Aqua Soil',
      bare: 'Bare Bottom',
    };
    return labels[substrate] || substrate;
  };

  const getLightingLabel = (lighting?: string) => {
    if (!lighting) return 'Not specified';
    const labels: Record<string, string> = {
      low: 'Low (10-30 PAR)',
      medium: 'Medium (30-50 PAR)',
      high: 'High (50+ PAR)',
    };
    return labels[lighting] || lighting;
  };

  return (
    <div className="space-y-8">
      {/* Compatibility Warnings */}
      {compatibilityWarnings.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6"
        >
          <div className="flex gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Compatibility Warnings</h3>
              <ul className="space-y-1">
                {compatibilityWarnings.map((warning: string, i: number) => (
                  <li key={i} className="text-sm text-amber-800">• {warning}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tank Setup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Tank Setup</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <SetupCard
            icon={<Mountain className="w-6 h-6 text-amber-600" />}
            label="Substrate"
            value={getSubstrateLabel(tank.substrate)}
            isEmpty={!tank.substrate}
          />
          <SetupCard
            icon={<Lightbulb className="w-6 h-6 text-yellow-600" />}
            label="Lighting"
            value={getLightingLabel(tank.lighting)}
            isEmpty={!tank.lighting}
          />
        </div>
      </motion.div>

      {/* Water Parameters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Current Water Parameters</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ParamCard label="pH" value={tank.parameters.ph} status="good" />
          <ParamCard label="Temperature" value={`${tank.parameters.tempC}°C`} status="good" />
          <ParamCard label="Ammonia" value={`${tank.parameters.ammonia} ppm`} status={tank.parameters.ammonia > 0 ? 'warning' : 'good'} />
          <ParamCard label="Nitrite" value={`${tank.parameters.nitrite} ppm`} status={tank.parameters.nitrite > 0 ? 'warning' : 'good'} />
          <ParamCard label="Nitrate" value={`${tank.parameters.nitrate} ppm`} status={tank.parameters.nitrate > 20 ? 'warning' : 'good'} />
          {(tank.parameters.gh != null && tank.parameters.gh > 0) && <ParamCard label="GH" value={`${tank.parameters.gh}°dGH`} status="good" />}
          {(tank.parameters.kh != null && tank.parameters.kh > 0) && <ParamCard label="KH" value={`${tank.parameters.kh}°dKH`} status="good" />}
          {(tank.parameters.tds != null && tank.parameters.tds > 0) && <ParamCard label="TDS" value={`${tank.parameters.tds} ppm`} status="good" />}
          {(tank.parameters.salinity != null && tank.parameters.salinity > 0) && <ParamCard label="Salinity" value={`${tank.parameters.salinity} ppt`} status="good" />}
        </div>
      </motion.div>

      {/* Fish Section */}
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
        addButtonColor="bg-indigo-600 hover:bg-indigo-700"
      />

      {/* Plants Section */}
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
        addButtonColor="bg-emerald-600 hover:bg-emerald-700"
      />
    </div>
  );
};

const ParametersTab = ({ readings, onAddReading, onDeleteReading }: any) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-slate-900">Parameter History</h2>
      <button
        onClick={onAddReading}
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
      >
        <Plus className="w-5 h-5" />
        Log Parameters
      </button>
    </div>

    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <ParameterChart readings={readings} />
    </div>
  </div>
);

const MaintenanceTab = ({ logs, onAddLog, onDeleteLog }: any) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-slate-900">Maintenance History</h2>
      <button
        onClick={onAddLog}
        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
      >
        <Plus className="w-5 h-5" />
        Log Maintenance
      </button>
    </div>

    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <MaintenanceTimeline logs={logs} onDelete={onDeleteLog} />
    </div>
  </div>
);

// Helper Components
const StatCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) => (
  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
    <div className="flex items-center gap-2 mb-2 text-indigo-200">
      {icon}
      <span className="text-xs font-semibold uppercase">{label}</span>
    </div>
    <div className="text-2xl font-bold">{value}</div>
  </div>
);

const SetupCard = ({ icon, label, value, isEmpty }: { icon: React.ReactNode; label: string; value: string; isEmpty: boolean }) => (
  <div className={`bg-gradient-to-br ${
    isEmpty 
      ? 'from-slate-50 to-slate-100 border-slate-200' 
      : 'from-indigo-50 to-purple-50 border-indigo-200'
  } border-2 rounded-xl p-4`}>
    <div className="flex items-center gap-3 mb-2">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
        isEmpty ? 'bg-slate-200' : 'bg-white'
      }`}>
        {icon}
      </div>
      <span className="text-sm font-semibold text-slate-700">{label}</span>
    </div>
    <div className={`text-lg font-bold ${
      isEmpty ? 'text-slate-500 italic' : 'text-slate-900'
    }`}>
      {value}
    </div>
  </div>
);

const TabButton = ({ active, onClick, icon, label, badge }: any) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-4 font-semibold border-b-2 transition-colors ${
      active
        ? 'border-indigo-600 text-indigo-600'
        : 'border-transparent text-slate-600 hover:text-slate-900'
    }`}
  >
    {icon}
    <span>{label}</span>
    {badge !== undefined && badge > 0 && (
      <span className="ml-1 px-2 py-0.5 bg-indigo-100 text-indigo-600 text-xs font-bold rounded-full">
        {badge}
      </span>
    )}
  </button>
);

const ParamCard = ({ label, value, status }: { label: string; value: string | number; status: 'good' | 'warning' | 'danger' }) => {
  const statusColors = {
    good: 'from-emerald-50 to-green-50 border-emerald-200',
    warning: 'from-amber-50 to-orange-50 border-amber-300',
    danger: 'from-red-50 to-rose-50 border-red-300',
  };

  const iconColors = {
    good: 'text-emerald-600',
    warning: 'text-amber-600',
    danger: 'text-red-600',
  };

  return (
    <div className={`bg-gradient-to-br ${statusColors[status]} border-2 rounded-xl p-4`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-slate-700">{label}</span>
        {status === 'good' ? (
          <CheckCircle className={`w-5 h-5 ${iconColors[status]}`} />
        ) : (
          <AlertTriangle className={`w-5 h-5 ${iconColors[status]}`} />
        )}
      </div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
    </div>
  );
};

const InhabitantsSection = ({ title, icon, inhabitants, speciesData, linkPrefix, onAdd, onRemove, emptyMessage, addButtonLabel, addButtonColor }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
  >
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
        {icon}
        {title} ({inhabitants.length} species)
      </h2>
      <button
        onClick={onAdd}
        className={`flex items-center gap-2 ${addButtonColor} text-white px-4 py-2 rounded-lg font-semibold transition-colors`}
      >
        <Plus className="w-4 h-4" />
        {addButtonLabel}
      </button>
    </div>

    {inhabitants.length === 0 ? (
      <div className="text-center py-12 text-slate-500">
        <p>{emptyMessage}</p>
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

const InhabitantCard = ({
  name,
  scientificName,
  quantity,
  slug,
  imageUrl,
  linkPrefix,
  onRemove,
}: any) => (
  <div className="flex items-center gap-4 bg-slate-50 hover:bg-slate-100 rounded-xl p-4 border border-slate-200 transition-colors group">
    {imageUrl ? (
      <img
        src={imageUrl}
        alt={name}
        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
      />
    ) : (
      <div className="w-20 h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-slate-500 text-xs font-bold">No Image</span>
      </div>
    )}
    
    <Link to={`${linkPrefix}/${slug}`} className="flex-1">
      <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{name}</h3>
      <p className="text-sm text-slate-500 italic">{scientificName}</p>
      <p className="text-xs text-slate-600 mt-1">Quantity: {quantity}</p>
    </Link>
    
    <button
      onClick={(e) => {
        e.preventDefault();
        if (confirm(`Remove ${name} from tank?`)) {
          onRemove();
        }
      }}
      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
      title="Remove"
    >
      <Trash2 className="w-5 h-5" />
    </button>
  </div>
);

export default TankDetailPage;
