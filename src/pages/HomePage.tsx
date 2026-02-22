import { Link } from 'react-router-dom';
import { 
  Search, BookOpen, Droplets, Target,
  TrendingUp, Shield, Zap, ArrowRight,
  Fish, Leaf, Waves, Stethoscope, Database, Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { allSpecies } from '../data/species';
import { allPlants } from '../data/plants';
import { allKnowledgeArticles } from '../data/knowledge';

const HomePage = () => {
  // Real statistics from actual data
  const stats = {
    species: allSpecies.length,
    plants: allPlants.length,
    articles: allKnowledgeArticles.length,
    dataPoints: 15 // Per species: temp, pH, hardness, size, lifespan, diet, behavior tags, tank size, group size, breeding, origin, family, etc.
  };

  return (
    <PageTransition>
      <SEOHead 
        title="AquaGuide - Your Complete Aquarium Resource"
        description="Comprehensive aquarium database with detailed species profiles, care guides, water chemistry knowledge, and professional tank planning tools."
      />
      
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        
        {/* UNDERWATER BACKGROUND EFFECTS */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Gradient Ocean Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-cyan-50/30 to-teal-50/50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950" />
          
          {/* Animated Wave Layers */}
          <svg className="absolute bottom-0 w-full h-64 opacity-20 dark:opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <motion.path
              fill="currentColor"
              className="text-blue-300 dark:text-blue-900"
              d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />
          </svg>

          {/* Floating Bubbles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-300/30 dark:bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: -20
              }}
              animate={{
                y: [-20, -window.innerHeight - 100],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Floating Fish Silhouettes */}
          <motion.div
            className="absolute top-1/4 left-0 opacity-5 dark:opacity-10"
            animate={{ x: [-100, window.innerWidth + 100] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Fish className="w-16 h-16 text-blue-900 dark:text-blue-300" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-0 opacity-5 dark:opacity-10"
            animate={{ x: [window.innerWidth + 100, -100] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 3 }}
          >
            <Fish className="w-20 h-20 text-cyan-900 dark:text-cyan-300 scale-x-[-1]" />
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          
          {/* HERO SECTION - Keep original design */}
          <section className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wide mb-6 border border-indigo-200 dark:border-indigo-800">
                      <Sparkles className="w-3 h-3" />
                      v0.0.7 Beta Live
                    </span>
                    
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                      Learn all about your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">favorite Fish</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                      The modern standard for aquarium planning. 
                      Explore <span className="font-bold text-slate-900 dark:text-white">{stats.species} documented species</span> with science-based compatibility checks and smart filtering.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                      <Link 
                        to="/species" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                      >
                        <Search className="w-5 h-5" />
                        Browse Database
                      </Link>
                      <Link 
                        to="/tank-builder" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 text-slate-900 dark:text-white font-bold rounded-xl transition-all border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md"
                      >
                        <Zap className="w-5 h-5 text-amber-500" />
                        Tank Builder
                      </Link>
                    </div>
                  </motion.div>
                  
                  {/* Mini Stats */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-slate-500 dark:text-slate-500"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Always Free</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-500" />
                      <span>Scientific Data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-500" />
                      <span>Mobile Ready</span>
                    </div>
                  </motion.div>
                </div>

                {/* Right: Glassmorphic Stats Card */}
                <div className="flex-1 w-full max-w-lg">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative"
                  >
                    {/* Main Stats Card */}
                    <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/50 shadow-2xl">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg">
                          <Database className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Database Overview</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Real-time statistics</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <StatBox icon={<Fish className="w-5 h-5" />} label="Fish Species" value={stats.species} color="from-blue-500 to-cyan-500" />
                        <StatBox icon={<Leaf className="w-5 h-5" />} label="Plants" value={stats.plants} color="from-green-500 to-emerald-500" />
                        <StatBox icon={<BookOpen className="w-5 h-5" />} label="Articles" value={stats.articles} color="from-purple-500 to-pink-500" />
                        <StatBox icon={<Target className="w-5 h-5" />} label="Data Points" value={`${stats.dataPoints}+`} color="from-orange-500 to-red-500" />
                      </div>

                      {/* Data Points Detail */}
                      <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-3">Per Species Data</p>
                        <div className="flex flex-wrap gap-2">
                          {['Temperature', 'pH Range', 'Hardness', 'Adult Size', 'Lifespan', 'Diet', 'Behavior', 'Tank Size', 'Group Size', 'Origin', 'Family', 'Breeding', 'Care Level'].map((param) => (
                            <span key={param} className="text-[10px] px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 font-semibold">
                              {param}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Decorative SVG Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
                      <svg viewBox="0 0 100 100" className="text-indigo-500">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 50 50"
                            to="360 50 50"
                            dur="20s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES SECTION WITH SVG ILLUSTRATIONS */}
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Everything you need to succeed
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Stop guessing. Use professional tools backed by {stats.dataPoints}+ data points per species.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={<Search className="w-6 h-6" />}
                  title="Advanced Filtering"
                  desc={`Search through ${stats.species} species by temperature, pH, size, behavior, and origin.`}
                  link="/species"
                  gradient="from-blue-500 to-cyan-500"
                />
                <FeatureCard 
                  icon={<Shield className="w-6 h-6" />}
                  title="Compatibility Analysis"
                  desc="Science-based compatibility checks covering water parameters, temperament, and tank requirements."
                  link="/tank-builder"
                  gradient="from-emerald-500 to-green-500"
                />
                <FeatureCard 
                  icon={<BookOpen className="w-6 h-6" />}
                  title="Knowledge Hub"
                  desc={`${stats.articles} expert guides on nitrogen cycle, water chemistry, disease prevention, and more.`}
                  link="/knowledge"
                  gradient="from-purple-500 to-pink-500"
                />
              </div>
            </div>
          </section>

          {/* CATEGORY QUICK LINKS */}
          <section className="py-20 px-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <QuickLinkCard 
                  icon={<Fish className="w-8 h-8" />}
                  title="Fish Species"
                  count={stats.species}
                  link="/species"
                  color="blue"
                />
                <QuickLinkCard 
                  icon={<Leaf className="w-8 h-8" />}
                  title="Plants"
                  count={stats.plants}
                  link="/plants"
                  color="green"
                />
                <QuickLinkCard 
                  icon={<Waves className="w-8 h-8" />}
                  title="Habitats"
                  count="Guides"
                  link="/habitats"
                  color="cyan"
                />
                <QuickLinkCard 
                  icon={<Stethoscope className="w-8 h-8" />}
                  title="Diseases"
                  count="Database"
                  link="/diseases"
                  color="red"
                />
              </div>
            </div>
          </section>

          {/* DATA SHOWCASE */}
          <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-12 border border-slate-700 shadow-2xl relative overflow-hidden">
                {/* Decorative SVG Background */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                      Comprehensive Species Profiles
                    </h2>
                    <p className="text-lg text-slate-300">
                      Each species includes {stats.dataPoints}+ parameters for accurate tank planning
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <DataPointCategory title="Water Parameters" items={['Temperature Range', 'pH Range', 'Water Hardness (GH)', 'Carbonate Hardness (KH)']} />
                    <DataPointCategory title="Physical Traits" items={['Adult Size', 'Growth Rate', 'Lifespan', 'Sexual Dimorphism']} />
                    <DataPointCategory title="Behavior & Care" items={['Temperament', 'Activity Level', 'Diet Type', 'Care Difficulty']} />
                  </div>

                  <div className="mt-10 text-center">
                    <Link 
                      to="/species"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl transition-all shadow-lg"
                    >
                      Explore All Species
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                Join aquarists worldwide using AquaGuide to build healthier, more sustainable aquariums.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/species" 
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl"
                >
                  Browse {stats.species} Species
                </Link>
                <Link 
                  to="/knowledge" 
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl transition-all border-2 border-slate-200 dark:border-slate-700 shadow-lg"
                >
                  Read Knowledge Base
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
};

const StatBox = ({ icon, label, value, color }: any) => (
  <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-200/50 dark:border-slate-700/50">
    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white mb-3 shadow-lg`}>
      {icon}
    </div>
    <div className="text-2xl font-black text-slate-900 dark:text-white mb-1">{value}</div>
    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">{label}</div>
  </div>
);

const FeatureCard = ({ icon, title, desc, link, gradient }: any) => (
  <Link
    to={link}
    className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-slate-700/50 hover:shadow-2xl transition-all hover:-translate-y-2"
  >
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
      {title}
    </h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
      {desc}
    </p>
  </Link>
);

const QuickLinkCard = ({ icon, title, count, link, color }: any) => {
  const colors: any = {
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    cyan: 'from-cyan-500 to-blue-500',
    red: 'from-red-500 to-rose-500'
  };

  return (
    <Link
      to={link}
      className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors[color]} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
      <p className="text-2xl font-black text-slate-900 dark:text-white">{count}</p>
    </Link>
  );
};

const DataPointCategory = ({ title, items }: any) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{title}</h4>
    <ul className="space-y-2">
      {items.map((item: string) => (
        <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default HomePage;
