import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Thermometer, Droplets, Ruler, Users, Fish as FishIcon, Leaf, AlertTriangle, Zap, Sun, Wind } from 'lucide-react';
import { TankItem } from '../../types/builder';
import { Species } from '../../types/species';
import { Plant } from '../../types/plant';
import { allSpecies } from '../../data/species';

interface Props {
  item: TankItem | null;
  onClose: () => void;
}

const DIFFICULTY_COLORS: Record<string, string> = {
  beginner: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  medium:   'bg-amber-100  text-amber-800  dark:bg-amber-900/40  dark:text-amber-300',
  expert:   'bg-red-100    text-red-800    dark:bg-red-900/40    dark:text-red-300',
};

const ZONE_LABELS: Record<string, string> = {
  surface: '⬆ Surface',
  mid:     '➡ Mid-water',
  bottom:  '⬇ Bottom',
};

function getSwimZone(species: Species): string {
  const tags = species.behavior.tags || [];
  if (tags.includes('surface_dweller') || tags.includes('surface')) return 'surface';
  if (tags.includes('bottom_dweller')) return 'bottom';
  return 'mid';
}

function getCompatible(species: Species): Species[] {
  return allSpecies
    .filter(s => {
      if (s.id === species.id) return false;
      const tempOk = s.environment.tempC.max >= species.environment.tempC.min &&
                     s.environment.tempC.min <= species.environment.tempC.max;
      const phOk   = s.environment.ph.max   >= species.environment.ph.min &&
                     s.environment.ph.min   <= species.environment.ph.max;
      const peaceful = s.behavior.tags?.includes('peaceful') ||
                       !s.behavior.tags?.includes('semi-aggressive') &&
                       !s.behavior.tags?.includes('territorial');
      return tempOk && phOk && peaceful;
    })
    .slice(0, 4);
}

export const SpeciesDetailSlideOver = ({ item, onClose }: Props) => {
  // Escape key + body scroll lock
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  const isFish  = item?.type === 'fish';
  const isPlant = item?.type === 'plant';

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 h-screen w-full sm:w-[460px] z-50 bg-white dark:bg-slate-900 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* ─── FISH ─────────────────────────────────────────────── */}
            {isFish && <FishDetail species={item.data as Species} count={item.count || 1} />}

            {/* ─── PLANT ────────────────────────────────────────────── */}
            {isPlant && <PlantDetail plant={item.data as Plant} />}

            {/* ─── HARDSCAPE ────────────────────────────────────────── */}
            {item.type === 'hardscape' && <HardscapeDetail data={item.data as any} />}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

/* ─── Fish detail ────────────────────────────────────────────────────────── */
const FishDetail = ({ species, count }: { species: Species; count: number }) => {
  const compatible = getCompatible(species);
  const zone = getSwimZone(species);
  const diff = species.care?.difficulty || 'beginner';
  const aggrIntra = species.behavior.aggressionLevel?.intraspecific;
  const aggrInter = species.behavior.aggressionLevel?.interspecific;

  return (
    <div className="flex flex-col h-full">
      {/* Hero */}
      <div className="relative h-52 flex-shrink-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 overflow-hidden">
        {species.imageUrl && (
          <>
            <img src={species.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm scale-110" />
            <img src={species.imageUrl} alt={species.taxonomy.commonName} className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl" />
          </>
        )}
        {!species.imageUrl && <FishIcon className="absolute bottom-4 right-4 w-24 h-24 text-white/30" />}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h2 className="text-white font-black text-xl leading-tight">{species.taxonomy.commonName}</h2>
          <p className="text-white/70 text-sm italic">{species.taxonomy.scientificName}</p>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">

        {/* Badges row */}
        <div className="flex flex-wrap gap-2">
          <span className={`text-xs font-black uppercase px-3 py-1 rounded-full ${DIFFICULTY_COLORS[diff] || DIFFICULTY_COLORS.beginner}`}>
            {diff}
          </span>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {ZONE_LABELS[zone]}
          </span>
          {count > 1 && (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
              {count}× in tank
            </span>
          )}
        </div>

        {/* Water Parameters */}
        <Section title="Water Parameters">
          <div className="grid grid-cols-2 gap-3">
            <StatPill icon={<Thermometer className="w-4 h-4 text-orange-500" />}
              label="Temperature"
              value={`${species.environment.tempC.min}–${species.environment.tempC.max}°C`} />
            <StatPill icon={<Droplets className="w-4 h-4 text-blue-500" />}
              label="pH Range"
              value={`${species.environment.ph.min}–${species.environment.ph.max}`} />
            <StatPill icon={<Ruler className="w-4 h-4 text-slate-500" />}
              label="Adult Size"
              value={`${species.visuals.adultSizeCM} cm`} />
            <StatPill icon={<FishIcon className="w-4 h-4 text-indigo-500" />}
              label="Min. Tank"
              value={`${species.environment.minTankSizeLiters} L`} />
          </div>
        </Section>

        {/* Behavior */}
        <Section title="Behavior">
          <div className="space-y-2">
            {species.behavior.minGroupSize && species.behavior.minGroupSize > 1 && (
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-purple-500 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  Needs <strong>{species.behavior.minGroupSize}+</strong> individuals (schooling species)
                </span>
              </div>
            )}
            {aggrIntra !== undefined && (
              <AggressionBar label="Intraspecific aggression" value={aggrIntra} />
            )}
            {aggrInter !== undefined && (
              <AggressionBar label="Interspecific aggression" value={aggrInter} />
            )}
            {(species.behavior.tags || []).length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {species.behavior.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 capitalize">
                    {tag.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Section>

        {/* Diet & Feeding */}
        <Section title="Diet & Feeding">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-black uppercase px-2.5 py-1 rounded-full ${
                species.care.diet === 'carnivore' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                species.care.diet === 'herbivore' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
              }`}>{species.care.diet}</span>
            </div>
            {species.care.feeding && (
              <>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Frequency:</strong> {species.care.feeding.frequency?.replace(/-/g, ' ')}
                </p>
                {species.care.feeding.primaryFoods?.length > 0 && (
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Primary foods:</strong> {species.care.feeding.primaryFoods.slice(0, 4).join(', ')}
                  </p>
                )}
                {species.care.feeding.supplements?.length > 0 && (
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Supplements:</strong> {species.care.feeding.supplements.join(', ')}
                  </p>
                )}
                {species.care.feeding.fastingDay && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 rounded-lg px-3 py-2">
                    💡 Fasting day recommended once per week
                  </p>
                )}
              </>
            )}
          </div>
        </Section>

        {/* Fin-nipping warning */}
        {(species.behavior.finNipping?.risk === 'high' || species.behavior.tags?.includes('fin_nipper')) && (
          <div className="flex items-start gap-2 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-xl p-3">
            <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-rose-700 dark:text-rose-300">
              <strong>Fin nipper</strong> – avoid keeping with long-finned or slow-moving species.
            </p>
          </div>
        )}

        {/* Compatible Tankmates */}
        {compatible.length > 0 && (
          <Section title="Compatible Tankmates">
            <div className="grid grid-cols-2 gap-2">
              {compatible.map(s => (
                <div key={s.id} className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg p-2">
                  {s.imageUrl
                    ? <img src={s.imageUrl} alt={s.taxonomy.commonName} className="w-9 h-9 rounded-md object-cover flex-shrink-0" />
                    : <div className="w-9 h-9 rounded-md bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center flex-shrink-0"><FishIcon className="w-4 h-4 text-indigo-500" /></div>
                  }
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-800 dark:text-white truncate">{s.taxonomy.commonName}</p>
                    <p className="text-[10px] text-slate-500 truncate">{s.visuals.adultSizeCM} cm</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
};

/* ─── Plant detail ───────────────────────────────────────────────────────── */
const PlantDetail = ({ plant }: { plant: Plant }) => (
  <div className="flex flex-col h-full">
    {/* Hero */}
    <div className="relative h-52 flex-shrink-0 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 overflow-hidden">
      {plant.imageUrl && (
        <>
          <img src={plant.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm scale-110" />
          <img src={plant.imageUrl} alt={plant.taxonomy.commonName} className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl" />
        </>
      )}
      {!plant.imageUrl && <Leaf className="absolute bottom-4 right-4 w-24 h-24 text-white/30" />}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h2 className="text-white font-black text-xl leading-tight">{plant.taxonomy.commonName}</h2>
        <p className="text-white/70 text-sm italic">{plant.taxonomy.scientificName}</p>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto p-5 space-y-5">
      {/* Placement badges */}
      <div className="flex flex-wrap gap-2">
        {(plant.specs?.placement || []).map(p => (
          <span key={p} className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 capitalize">{p}</span>
        ))}
        {plant.specs?.type && (
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 capitalize">{plant.specs.type}</span>
        )}
      </div>

      {/* Care requirements */}
      <Section title="Care Requirements">
        <div className="grid grid-cols-2 gap-3">
          {plant.specs?.light && (
            <StatPill icon={<Sun className="w-4 h-4 text-yellow-500" />} label="Light" value={plant.specs.light} />
          )}
          {plant.specs?.co2 && (
            <StatPill icon={<Wind className="w-4 h-4 text-slate-500" />} label="CO₂" value={plant.specs.co2} />
          )}
          {plant.specs?.heightCM && (
            <StatPill icon={<Ruler className="w-4 h-4 text-slate-500" />} label="Height" value={`${plant.specs.heightCM.min}–${plant.specs.heightCM.max} cm`} />
          )}
          {plant.specs?.growthRate && (
            <StatPill icon={<Zap className="w-4 h-4 text-emerald-500" />} label="Growth" value={plant.specs.growthRate} />
          )}
        </div>
      </Section>

      {plant.specs?.difficulty && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-600 dark:text-slate-400">Difficulty:</span>
          <span className={`text-xs font-black uppercase px-2.5 py-1 rounded-full ${DIFFICULTY_COLORS[plant.specs.difficulty] || DIFFICULTY_COLORS.beginner}`}>
            {plant.specs.difficulty}
          </span>
        </div>
      )}
    </div>
  </div>
);

/* ─── Hardscape detail ───────────────────────────────────────────────────── */
const HardscapeDetail = ({ data }: { data: any }) => (
  <div className="flex flex-col h-full">
    <div className="h-52 flex-shrink-0 bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center">
      <span className="text-8xl">{data.icon}</span>
    </div>
    <div className="flex-1 overflow-y-auto p-5 space-y-4">
      <h2 className="text-2xl font-black text-slate-900 dark:text-white">{data.name}</h2>
      {data.size && (
        <StatPill icon={<Ruler className="w-4 h-4 text-slate-500" />} label="Size" value={`${data.size} cm`} />
      )}
      {data.description && (
        <p className="text-sm text-slate-600 dark:text-slate-400">{data.description}</p>
      )}
    </div>
  </div>
);

/* ─── Shared sub-components ─────────────────────────────────────────────── */
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">{title}</h3>
    {children}
  </div>
);

const StatPill = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-xl px-3 py-2">
    {icon}
    <div>
      <p className="text-[10px] text-slate-500 uppercase font-bold">{label}</p>
      <p className="text-sm font-bold text-slate-800 dark:text-white">{value}</p>
    </div>
  </div>
);

const AggressionBar = ({ label, value }: { label: string; value: number }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-xs text-slate-500 dark:text-slate-400">{label}</span>
      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{value}/10</span>
    </div>
    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
      <div
        className={`h-1.5 rounded-full transition-all ${
          value >= 7 ? 'bg-red-500' : value >= 4 ? 'bg-amber-500' : 'bg-emerald-500'
        }`}
        style={{ width: `${value * 10}%` }}
      />
    </div>
  </div>
);
