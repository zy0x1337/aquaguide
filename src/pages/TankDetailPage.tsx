import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Droplets, Thermometer, Fish as FishIcon, Leaf, Trash2, AlertTriangle, CheckCircle, Edit } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tank } from '../types/tank';
import { SEOHead } from '../components/seo/SEOHead';
import AddInhabitantModal from '../components/tanks/AddInhabitantModal';
import EditTankModal from '../components/tanks/EditTankModal';
import { allSpecies } from '../data/species';
import { allPlants } from '../data/plants';

const TankDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tank, setTank] = useState<Tank | null>(null);
  const [isInhabitantModalOpen, setIsInhabitantModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'fish' | 'plant'>('fish');

  // Load tank from localStorage (temporary until we have backend)
  useEffect(() => {
    const storedTanks = localStorage.getItem('aquaguide_tanks');
    if (storedTanks) {
      const tanks: Tank[] = JSON.parse(storedTanks);
      const foundTank = tanks.find(t => t.id === id);
      if (foundTank) {
        setTank(foundTank);
      } else {
        navigate('/my-tanks');
      }
    } else {
      navigate('/my-tanks');
    }
  }, [id, navigate]);

  const handleEditTank = (updatedTank: Tank) => {
    // Update localStorage
    const storedTanks = localStorage.getItem('aquaguide_tanks');
    if (storedTanks) {
      const tanks: Tank[] = JSON.parse(storedTanks);
      const updatedTanks = tanks.map(t => t.id === updatedTank.id ? updatedTank : t);
      localStorage.setItem('aquaguide_tanks', JSON.stringify(updatedTanks));
      setTank(updatedTank);
    }
    setIsEditModalOpen(false);
  };

  const handleAddInhabitant = (speciesId: string, quantity: number, type: 'fish' | 'plant') => {
    if (!tank) return;

    // Try finding in both species and plants
    const species = allSpecies.find(s => s.id === speciesId) || allPlants.find(p => p.id === speciesId);
    if (!species) return;

    const updatedTank = {
      ...tank,
      inhabitants: {
        fish: type === 'fish' 
          ? [...(tank.inhabitants?.fish || []), { speciesId, speciesName: species.taxonomy.commonName, quantity, addedAt: new Date().toISOString() }]
          : tank.inhabitants?.fish || [],
        plants: type === 'plant'
          ? [...(tank.inhabitants?.plants || []), { speciesId, speciesName: species.taxonomy.commonName, quantity, addedAt: new Date().toISOString() }]
          : tank.inhabitants?.plants || [],
      },
    };

    // Update localStorage
    const storedTanks = localStorage.getItem('aquaguide_tanks');
    if (storedTanks) {
      const tanks: Tank[] = JSON.parse(storedTanks);
      const updatedTanks = tanks.map(t => t.id === tank.id ? updatedTank : t);
      localStorage.setItem('aquaguide_tanks', JSON.stringify(updatedTanks));
      setTank(updatedTank);
    }

    setIsInhabitantModalOpen(false);
  };

  const handleRemoveInhabitant = (speciesId: string, type: 'fish' | 'plant') => {
    if (!tank) return;

    const updatedTank = {
      ...tank,
      inhabitants: {
        fish: type === 'fish' 
          ? (tank.inhabitants?.fish || []).filter(f => f.speciesId !== speciesId)
          : tank.inhabitants?.fish || [],
        plants: type === 'plant'
          ? (tank.inhabitants?.plants || []).filter(p => p.speciesId !== speciesId)
          : tank.inhabitants?.plants || [],
      },
    };

    // Update localStorage
    const storedTanks = localStorage.getItem('aquaguide_tanks');
    if (storedTanks) {
      const tanks: Tank[] = JSON.parse(storedTanks);
      const updatedTanks = tanks.map(t => t.id === tank.id ? updatedTank : t);
      localStorage.setItem('aquaguide_tanks', JSON.stringify(updatedTanks));
      setTank(updatedTank);
    }
  };

  if (!tank) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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

  // Simple compatibility check
  fishSpecies.forEach((species, i) => {
    fishSpecies.slice(i + 1).forEach(otherSpecies => {
      if (species && otherSpecies) {
        // Check if species are in each other's bad mates list
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
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
                  {compatibilityWarnings.map((warning, i) => (
                    <li key={i} className="text-sm text-amber-800">• {warning}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Water Parameters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Water Parameters</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ParamCard label="pH" value={tank.parameters.ph} status="good" />
            <ParamCard label="Temperature" value={`${tank.parameters.tempC}°C`} status="good" />
            <ParamCard label="Ammonia" value={`${tank.parameters.ammonia} ppm`} status={tank.parameters.ammonia > 0 ? 'warning' : 'good'} />
            <ParamCard label="Nitrite" value={`${tank.parameters.nitrite} ppm`} status={tank.parameters.nitrite > 0 ? 'warning' : 'good'} />
            <ParamCard label="Nitrate" value={`${tank.parameters.nitrate} ppm`} status={tank.parameters.nitrate > 20 ? 'warning' : 'good'} />
            {tank.parameters.gh && tank.parameters.gh > 0 && <ParamCard label="GH" value={`${tank.parameters.gh}°dGH`} status="good" />}
            {tank.parameters.kh && tank.parameters.kh > 0 && <ParamCard label="KH" value={`${tank.parameters.kh}°dKH`} status="good" />}
            {tank.parameters.tds && tank.parameters.tds > 0 && <ParamCard label="TDS" value={`${tank.parameters.tds} ppm`} status="good" />}
            {tank.parameters.salinity && tank.parameters.salinity > 0 && <ParamCard label="Salinity" value={`${tank.parameters.salinity} ppt`} status="good" />}
          </div>
        </motion.div>

        {/* Fish Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <FishIcon className="w-6 h-6 text-indigo-600" />
              Fish ({tank.inhabitants?.fish.length || 0} species)
            </h2>
            <button
              onClick={() => {
                setModalType('fish');
                setIsInhabitantModalOpen(true);
              }}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Fish
            </button>
          </div>

          {(tank.inhabitants?.fish.length || 0) === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <FishIcon className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>No fish added yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {tank.inhabitants?.fish.map((fish, index) => {
                const species = allSpecies.find(s => s.id === fish.speciesId);
                if (!species) return null;
                
                return (
                  <InhabitantCard
                    key={`${fish.speciesId}-${index}`}
                    name={fish.speciesName}
                    scientificName={species.taxonomy.scientificName}
                    quantity={fish.quantity}
                    slug={species.slug}
                    imageUrl={species.imageUrl}
                    linkPrefix="/species"
                    onRemove={() => handleRemoveInhabitant(fish.speciesId, 'fish')}
                  />
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Plants Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Leaf className="w-6 h-6 text-emerald-600" />
              Plants ({tank.inhabitants?.plants.length || 0} species)
            </h2>
            <button
              onClick={() => {
                setModalType('plant');
                setIsInhabitantModalOpen(true);
              }}
              className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Plant
            </button>
          </div>

          {(tank.inhabitants?.plants.length || 0) === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <Leaf className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>No plants added yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {tank.inhabitants?.plants.map((plant, index) => {
                const species = allPlants.find(p => p.id === plant.speciesId);
                if (!species) return null;
                
                return (
                  <InhabitantCard
                    key={`${plant.speciesId}-${index}`}
                    name={plant.speciesName}
                    scientificName={species.taxonomy.scientificName}
                    quantity={plant.quantity}
                    slug={species.slug}
                    imageUrl={species.imageUrl}
                    linkPrefix="/plants"
                    onRemove={() => handleRemoveInhabitant(plant.speciesId, 'plant')}
                  />
                );
              })}
            </div>
          )}
        </motion.div>
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
    </div>
  );
};

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

const InhabitantCard = ({
  name,
  scientificName,
  quantity,
  slug,
  imageUrl,
  linkPrefix,
  onRemove,
}: {
  name: string;
  scientificName: string;
  quantity: number;
  slug: string;
  imageUrl?: string;
  linkPrefix: string;
  onRemove: () => void;
}) => (
  <div className="flex items-center gap-4 bg-slate-50 hover:bg-slate-100 rounded-xl p-4 border border-slate-200 transition-colors group">
    {/* Image */}
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
    
    {/* Info */}
    <Link to={`${linkPrefix}/${slug}`} className="flex-1">
      <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{name}</h3>
      <p className="text-sm text-slate-500 italic">{scientificName}</p>
      <p className="text-xs text-slate-600 mt-1">Quantity: {quantity}</p>
    </Link>
    
    {/* Remove Button */}
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
