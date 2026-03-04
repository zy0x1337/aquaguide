import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Droplets, Thermometer, Fish as FishIcon, Leaf, CheckCircle, AlertTriangle, Mountain, Lightbulb, ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/seo/SEOHead';
import { getTankBySlug } from '../lib/supabase/tanks';
import { allSpecies } from '../data/species';
import { allPlants } from '../data/plants';
import { Tank } from '../types/tank';

const PublicTankPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [tank, setTank] = useState<Tank | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      try {
        const data = await getTankBySlug(slug);
        if (data) setTank(data);
        else setNotFound(true);
      } catch {
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [slug]);

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="w-14 h-14 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (notFound || !tank) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <FishIcon className="w-10 h-10 text-slate-400" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Tank not found</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-6">This tank profile doesn't exist or has been made private.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all">
          <ArrowLeft className="w-4 h-4" />Back to AquaGuide
        </Link>
      </div>
    </div>
  );

  const totalFish   = tank.inhabitants?.fish.reduce((s, f) => s + f.quantity, 0) || 0;
  const totalPlants = tank.inhabitants?.plants.reduce((s, p) => s + p.quantity, 0) || 0;

  const publicUrl = `${window.location.origin}/tanks/${tank.publicSlug}`;
  const ogDescription = `${tank.volumeLiters}L ${tank.type} tank – pH ${tank.parameters.ph}, ${tank.parameters.tempC}°C, ${totalFish} fish, ${totalPlants} plants. Tracked with AquaGuide.`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title={`${tank.name} – Public Tank Profile`}
        description={ogDescription}
      />
      {/* OG / Twitter meta injected via Helmet inside SEOHead;
          We add extra via a raw tag workaround using a hidden div with data attrs
          that SSR/edge middleware can pick up if needed. */}

      {/* Hero */}
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link to="/"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-semibold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />AquaGuide
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Droplets className="w-8 h-8" />
                <h1 className="text-3xl sm:text-4xl font-bold">{tank.name}</h1>
              </div>
              <p className="text-indigo-100 ml-11 text-sm font-medium">
                {tank.volumeLiters}L &bull; <span className="capitalize">{tank.type}</span> &bull; {totalFish} fish &bull; {totalPlants} plants
              </p>
            </div>
            {/* Copy Link */}
            <CopyLinkButton url={publicUrl} />
          </div>

          {/* Quick stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 ml-11">
            <HeroStat icon={<Thermometer className="w-5 h-5 text-orange-400" />} label="Temp" value={`${tank.parameters.tempC}°C`} />
            <HeroStat icon={<Droplets className="w-5 h-5 text-blue-400" />}      label="pH"   value={tank.parameters.ph} />
            <HeroStat icon={<FishIcon className="w-5 h-5 text-purple-400" />}    label="Fish"  value={totalFish} />
            <HeroStat icon={<Leaf className="w-5 h-5 text-emerald-400" />}       label="Plants" value={totalPlants} />
          </div>
        </div>
      </motion.header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">

        {/* Water Parameters */}
        <Section title="Water Parameters" icon={<Droplets className="w-6 h-6 text-blue-600" />}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <ParamCard label="pH"          value={tank.parameters.ph}           status={tank.parameters.ph >= 6.5 && tank.parameters.ph <= 7.5 ? 'good' : 'warning'} />
            <ParamCard label="Temperature" value={`${tank.parameters.tempC}°C`}  status="good" />
            <ParamCard label="Ammonia"     value={`${tank.parameters.ammonia} ppm`} status={tank.parameters.ammonia > 0 ? 'danger' : 'good'} />
            <ParamCard label="Nitrite"     value={`${tank.parameters.nitrite} ppm`} status={tank.parameters.nitrite > 0 ? 'danger' : 'good'} />
            <ParamCard label="Nitrate"     value={`${tank.parameters.nitrate} ppm`} status={tank.parameters.nitrate > 20 ? 'warning' : 'good'} />
            {(tank.parameters.gh    ?? 0) > 0 && <ParamCard label="GH"       value={`${tank.parameters.gh}°dGH`}    status="good" />}
            {(tank.parameters.kh    ?? 0) > 0 && <ParamCard label="KH"       value={`${tank.parameters.kh}°dKH`}    status="good" />}
            {(tank.parameters.tds   ?? 0) > 0 && <ParamCard label="TDS"      value={`${tank.parameters.tds} ppm`}   status="good" />}
            {(tank.parameters.salinity ?? 0) > 0 && <ParamCard label="Salinity" value={`${tank.parameters.salinity} ppt`} status="good" />}
          </div>
        </Section>

        {/* Tank Setup */}
        {(tank.substrate || tank.lighting) && (
          <Section title="Tank Setup" icon={<Mountain className="w-6 h-6 text-indigo-600" />}>
            <div className="grid sm:grid-cols-2 gap-4">
              {tank.substrate && (
                <SetupCard icon={<Mountain className="w-5 h-5 text-amber-600" />} label="Substrate"
                  value={({ sand: 'Sand', gravel: 'Gravel', soil: 'Aqua Soil', bare: 'Bare Bottom' } as any)[tank.substrate] || tank.substrate} />
              )}
              {tank.lighting && (
                <SetupCard icon={<Lightbulb className="w-5 h-5 text-yellow-600" />} label="Lighting"
                  value={({ low: 'Low (10–30 PAR)', medium: 'Medium (30–50 PAR)', high: 'High (50+ PAR)' } as any)[tank.lighting] || tank.lighting} />
              )}
            </div>
          </Section>
        )}

        {/* Fish */}
        {(tank.inhabitants?.fish.length ?? 0) > 0 && (
          <Section title={`Fish (${tank.inhabitants!.fish.length} species)`} icon={<FishIcon className="w-6 h-6 text-indigo-600" />}>
            <div className="space-y-3">
              {tank.inhabitants!.fish.map((inh, i) => {
                const sp = allSpecies.find(s => s.id === inh.speciesId);
                return (
                  <InhabitantRow key={i} name={inh.speciesName}
                    scientificName={sp?.taxonomy.scientificName}
                    quantity={inh.quantity} imageUrl={sp?.imageUrl}
                    href={sp ? `/species/${sp.slug}` : undefined} />
                );
              })}
            </div>
          </Section>
        )}

        {/* Plants */}
        {(tank.inhabitants?.plants.length ?? 0) > 0 && (
          <Section title={`Plants (${tank.inhabitants!.plants.length} species)`} icon={<Leaf className="w-6 h-6 text-emerald-600" />}>
            <div className="space-y-3">
              {tank.inhabitants!.plants.map((inh, i) => {
                const pl = allPlants.find(p => p.id === inh.speciesId);
                return (
                  <InhabitantRow key={i} name={inh.speciesName}
                    scientificName={pl?.taxonomy.scientificName}
                    quantity={inh.quantity} imageUrl={pl?.imageUrl}
                    href={pl ? `/plants/${pl.slug}` : undefined} />
                );
              })}
            </div>
          </Section>
        )}

        {/* Footer CTA */}
        <div className="text-center pt-4 pb-8">
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Tracked with AquaGuide – the smart aquarium manager</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-sm hover:shadow">
            <Droplets className="w-4 h-4" />Start tracking your own tank
          </Link>
        </div>
      </main>
    </div>
  );
};

// ─── Sub-components ──────────────────────────────────────────────────────────

const CopyLinkButton = ({ url }: { url: string }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); } catch { prompt('Copy this link:', url); }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy}
      className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all w-fit">
      <ExternalLink className="w-4 h-4" />
      {copied ? 'Copied!' : 'Copy Link'}
    </button>
  );
};

const HeroStat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: any }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
    <div className="flex items-center gap-1.5 mb-1">
      {icon}<span className="text-xs font-semibold text-white/70 uppercase tracking-wide">{label}</span>
    </div>
    <div className="text-xl font-bold text-white">{value}</div>
  </div>
);

const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
    className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 sm:p-6">
    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
      {icon}{title}
    </h2>
    {children}
  </motion.div>
);

const ParamCard = ({ label, value, status }: { label: string; value: any; status: 'good' | 'warning' | 'danger' }) => {
  const cfg = {
    good:    { Icon: CheckCircle,   color: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800' },
    warning: { Icon: AlertTriangle, color: 'text-amber-600  dark:text-amber-400',   border: 'border-amber-200  dark:border-amber-800'   },
    danger:  { Icon: AlertTriangle, color: 'text-red-600    dark:text-red-400',     border: 'border-red-200    dark:border-red-800'     },
  }[status];
  return (
    <div className={`bg-white dark:bg-slate-900 border ${cfg.border} rounded-xl p-3 shadow-sm`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{label}</span>
        <cfg.Icon className={`w-4 h-4 ${cfg.color}`} />
      </div>
      <div className="text-lg font-bold text-slate-900 dark:text-white">{value}</div>
    </div>
  );
};

const SetupCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
    <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm">{icon}</div>
    <div>
      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{label}</div>
      <div className="font-bold text-slate-900 dark:text-white">{value}</div>
    </div>
  </div>
);

const InhabitantRow = ({ name, scientificName, quantity, imageUrl, href }: {
  name: string; scientificName?: string; quantity: number; imageUrl?: string; href?: string;
}) => {
  const inner = (
    <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl p-3 border border-slate-200 dark:border-slate-700 transition-all group">
      {imageUrl
        ? <img src={imageUrl} alt={name} className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
        : <div className="w-14 h-14 bg-slate-200 dark:bg-slate-700 rounded-lg flex-shrink-0" />}
      <div className="flex-1 min-w-0">
        <div className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">{name}</div>
        {scientificName && <div className="text-xs text-slate-500 italic truncate">{scientificName}</div>}
      </div>
      <div className="text-sm font-bold text-slate-600 dark:text-slate-300 flex-shrink-0">×{quantity}</div>
      {href && <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 flex-shrink-0 transition-colors" />}
    </div>
  );
  return href ? <Link to={href}>{inner}</Link> : inner;
};

export default PublicTankPage;
