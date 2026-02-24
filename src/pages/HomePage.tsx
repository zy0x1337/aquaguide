import { Link } from 'react-router-dom';
import { 
  Zap, ChevronRight, ArrowRight,
  Search, Layers, Activity, Database, Shield, Gauge
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { allSpecies, bettaSplendens, neonTetra, oscar, amanoShrimp } from '../data/species';

const HomePage = () => {
  const featuredSpecies = [bettaSplendens, neonTetra, oscar, amanoShrimp];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <PageTransition>
      <SEOHead 
        title="AquaGuide - Professional Aquarium Database"
        description="Science-based aquarium planning with detailed species profiles, water parameter filtering, and compatibility analysis."
      />
      
      <div className="min-h-screen bg-white dark:bg-slate-950">
        
        {/* HERO SECTION */}
        <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 px-6 overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-cyan-50/20 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/20" />
          
          {/* Animated gradient orbs - more subtle */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              
              {/* Text Content */}
              <motion.div 
                className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none"
                initial="initial"
                animate="animate"
                variants={stagger}
              >
                <motion.div variants={fadeInUp}>
                  <span className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 dark:from-indigo-500/20 dark:to-cyan-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-8 border border-indigo-200/50 dark:border-indigo-500/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    v1.0.3 Beta
                  </span>
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.05]"
                >
                  Learn all about your{' '}
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500">
                      favorite Fish
                    </span>
                    {/* Animated underline */}
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 origin-left rounded-full"
                    />
                  </span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                >
                  Build healthy, balanced aquariums with confidence. Explore{' '}
                  <span className="font-bold text-slate-900 dark:text-white">{allSpecies.length}+ species</span>,{' '}
                  check compatibility, and plan your perfect tank.
                </motion.p>

                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
                >
                  {/* Sign In Button - Vercel Style */}
                  <Link 
                    to="/auth" 
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-black font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md border border-black dark:border-white overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent" />
                    <span className="relative flex items-center gap-2">
                      Sign In
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                  
                  {/* Tank Builder Button - Vercel Style */}
                  <Link 
                    to="/tank-builder" 
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                  >
                    <Zap className="w-4 h-4 text-amber-500" />
                    Tank Builder
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </motion.div>
                
                {/* Trust indicators */}
                <motion.div 
                  variants={fadeInUp}
                  className="mt-12 flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-sm font-medium text-slate-500 dark:text-slate-500"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs sm:text-sm">Always Free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-indigo-500" />
                    <span className="text-xs sm:text-sm">Scientific Data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-cyan-500" />
                    <span className="text-xs sm:text-sm">{allSpecies.length}+ Species</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Visual Grid */}
              <motion.div 
                className="flex-1 w-full max-w-lg lg:max-w-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {featuredSpecies.map((fish, idx) => (
                    <motion.div
                      key={fish.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                      className={idx % 2 !== 0 ? 'translate-y-8' : ''}
                    >
                      <Link 
                        to={`/species/${fish.slug}`}
                        className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3] block shadow-lg hover:shadow-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 transition-all duration-500 hover:-translate-y-2"
                      >
                        <img 
                          src={fish.imageUrl} 
                          alt={fish.taxonomy.commonName}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                        
                        {/* Info overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                          <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 mb-1">
                              {fish.taxonomy.family}
                            </p>
                            <h3 className="text-white font-bold text-base sm:text-lg leading-tight mb-2 group-hover:text-indigo-200 transition-colors">
                              {fish.taxonomy.commonName}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Gauge className="w-3 h-3" />
                              <span>{fish.visuals.adultSizeCM}cm</span>
                              <span className="text-slate-500">•</span>
                              <span className="capitalize">{fish.care.difficulty}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="py-12 px-6 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard number={allSpecies.length.toString()} label="Species Documented" />
              <StatCard number="10+" label="Compatibility Checks" />
              <StatCard number="72" label="Data Points per Fish" />
              <StatCard number="100%" label="Free & Open" />
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 sm:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                Everything you need to succeed
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Professional-grade tools designed for both beginners and experienced aquarists.
              </p>
            </motion.div>

            {/* Feature grid */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <FeatureCard 
                icon={<Search className="w-7 h-7" />}
                iconBg="from-indigo-500 to-purple-500"
                title="Smart Filtering"
                desc="Find compatible species by filtering temperature, pH, size, and behavior. Advanced search with real-time results."
                link="/species"
                linkText="Search Species"
              />
              <FeatureCard 
                icon={<Activity className="w-7 h-7" />}
                iconBg="from-emerald-500 to-teal-500"
                title="Compatibility Engine"
                desc="Our algorithm analyzes 10+ data points including behavior, parameters, and size ratios to prevent conflicts."
                link="/tank-builder"
                linkText="Check Compatibility"
              />
              <FeatureCard 
                icon={<Layers className="w-7 h-7" />}
                iconBg="from-rose-500 to-orange-500"
                title="Biotopes & Guides"
                desc="Learn about natural habitats and recreate them with detailed biotope guides and authentic setups."
                link="/biotopes"
                linkText="Explore Biotopes"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 via-transparent to-transparent" />

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Ready to build your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  perfect aquarium?
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join hobbyists worldwide using AquaGuide to create healthy, thriving aquatic ecosystems.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/species" 
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20"
                >
                  Browse {allSpecies.length}+ Species
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/about" 
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Social proof */}
              <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 border-2 border-slate-900" />
                    ))}
                  </div>
                  <span>Trusted by hobbyists</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-700" />
                <span className="hidden sm:inline">Open source & free forever</span>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

// Components
const StatCard = ({ number, label }: { number: string; label: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center"
  >
    <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
      {number}
    </div>
    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
      {label}
    </div>
  </motion.div>
);

const FeatureCard = ({ 
  icon, 
  iconBg,
  title, 
  desc, 
  link, 
  linkText 
}: { 
  icon: any; 
  iconBg: string;
  title: string; 
  desc: string; 
  link: string; 
  linkText: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -8 }}
    className="group relative bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    {/* Icon */}
    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${iconBg} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    
    {/* Content */}
    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
      {desc}
    </p>
    
    {/* Link */}
    <Link 
      to={link} 
      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
    >
      {linkText} 
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
    
    {/* Hover gradient effect */}
    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${iconBg} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
  </motion.div>
);

export default HomePage;