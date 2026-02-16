import { Link } from 'react-router-dom';
import { Fish, Droplets, Thermometer, Trash2, Edit, ChevronRight } from 'lucide-react';
import { Tank } from '../../types/tank';

interface TankCardProps {
  tank: Tank;
  onDelete: (id: string) => void;
}

const TankCard = ({ tank, onDelete }: TankCardProps) => {
  const totalFish = tank.inhabitants?.fish.length || 0;
  const totalPlants = tank.inhabitants?.plants.length || 0;

  return (
    <div className="group bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-1">{tank.name}</h3>
            <p className="text-indigo-200 text-sm">{tank.volumeLiters}L • {tank.type}</p>
          </div>
          <div className="flex gap-2">
            <button
              className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              title="Edit Tank"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (confirm(`Delete "${tank.name}"?`)) {
                  onDelete(tank.id);
                }
              }}
              className="p-2 bg-white/20 hover:bg-red-500 rounded-lg transition-colors"
              title="Delete Tank"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <StatBadge icon={<Fish className="w-4 h-4" />} value={totalFish} label="Fish" />
          <StatBadge icon={<Droplets className="w-4 h-4" />} value={totalPlants} label="Plants" />
          <StatBadge icon={<Thermometer className="w-4 h-4" />} value={`${tank.parameters.tempC}°C`} label="Temp" />
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Water Parameters */}
        <div className="space-y-3 mb-6">
          <h4 className="text-sm font-bold text-slate-700 uppercase">Water Parameters</h4>
          <div className="grid grid-cols-2 gap-3">
            <ParamCard label="pH" value={tank.parameters.ph} />
            <ParamCard label="Ammonia" value={`${tank.parameters.ammonia}ppm`} />
            <ParamCard label="Nitrite" value={`${tank.parameters.nitrite}ppm`} />
            <ParamCard label="Nitrate" value={`${tank.parameters.nitrate}ppm`} />
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/my-tanks/${tank.id}`}
          className="w-full flex items-center justify-between bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold px-4 py-3 rounded-xl transition-colors group"
        >
          <span>View Details</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

// Helper Components
const StatBadge = ({ icon, value, label }: { icon: React.ReactNode; value: string | number; label: string }) => (
  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
    <div className="flex items-center justify-center gap-1 mb-1">
      {icon}
      <span className="text-lg font-bold">{value}</span>
    </div>
    <div className="text-xs text-center text-indigo-200">{label}</div>
  </div>
);

const ParamCard = ({ label, value }: { label: string; value: string | number }) => (
  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
    <div className="text-xs text-slate-600 mb-1">{label}</div>
    <div className="text-lg font-bold text-slate-900">{value}</div>
  </div>
);

export default TankCard;
