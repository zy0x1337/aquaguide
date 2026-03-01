import { Link } from 'react-router-dom';
import { 
  Zap, ChevronRight, ArrowRight,
  Database, Shield, Gauge, BookOpen, Activity, LayoutDashboard, UserPlus,
  Leaf, Map, Lightbulb
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { allSpecies, bettaSplendens, neonTetra, oscar, amanoShrimp } from '../data/species';
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {
  const { user, profile } = useAuth();
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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-cyan-50/20 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950/20" />
          
          {/* Animated gradient orbs */}
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
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
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
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none"
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
                    v1.0.1 Beta
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
                  {/* Primary CTA: Auth-Aware */}
                  {user ? (
                    <Link 
                      to="/my-tanks" 
                      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md overflow-hidden"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      <span className="relative flex items-center gap-2">
                        My Tanks
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  ) : (
                    <Link 
                      to="/auth" 
                      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-black font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md border border-black dark:border-white overflow-hidden"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent" />
                      <span className="relative flex items-center gap-2">
                        Sign In
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  )}
                  
                  {/* Secondary CTA */}
                  <Link 
                    to="/tank-builder" 
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                  >
                    <Zap className="w-4 h-4 text-amber-500" />
                    Tank Builder
                  </Link>
                </motion.div>
                
                {/* Trust indicators */}
                <motion.div 
                  variants={fadeInUp}
                  className="mt-12 flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-sm font-medium text-slate-500 dark:text-slate-400"
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

              {/* Visual Grid - The 4 Fishes */}
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
        <section className="py-12 px-6 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard number={`${allSpecies.length}+`} label="Species Documented" />
              <StatCard number="10+" label="Compatibility Checks" />
              <StatCard number="72" label="Data Points per Fish" />
              <StatCard number="100%" label="Free & Open" />
            </div>
          </div>
        </section>

        {/* EXPLORE MORE CARDS - Habitats, Plants, Knowledge */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Mehr als nur Fische
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Entdecke die ganze Welt der Aquaristik. Von authentischen Biotopen über detaillierte Pflanzenprofile bis hin zu essenziellem Fachwissen.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ExploreCard 
                icon={<Map className="w-6 h-6" />}
                title="Biotope & Habitate"
                desc="Erfahre, wie du natürliche Lebensräume wie den Amazonas oder den Tanganjikasee perfekt im Aquarium nachbildest."
                link="/biotopes"
                image="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=800"
                color="indigo"
              />
              <ExploreCard 
                icon={<Leaf className="w-6 h-6" />}
                title="Pflanzen-Lexikon"
                desc="Finde die perfekten Pflanzen für dein Setup. Mit Lichtbedarf, Wachstumsraten und genauen Dünge-Anforderungen."
                link="/plants"
                image="https://images.unsplash.com/photo-1622312683073-f14d7a861dcd?auto=format&fit=crop&q=80&w=800"
                color="emerald"
              />
              <ExploreCard 
                icon={<Lightbulb className="w-6 h-6" />}
                title="Knowledge Base"
                desc="Lerne alles über den Stickstoffkreislauf, Wasserchemie und Krankheitserkennung in unseren Guides."
                link="/knowledge"
                image="https://images.unsplash.com/photo-1544552866-d3ed42536fc6?auto=format&fit=crop&q=80&w=800"
                color="amber"
              />
            </div>
          </div>
        </section>

        {/* FEATURES BENTO GRID (Core App Features) */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                Dein digitaler Aquaristik-Assistent
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Alles, was du brauchst, um gesunde und stabile Ökosysteme zu erschaffen. Von der Artenrecherche bis zur Pflege.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <FeatureCard 
                icon={<BookOpen className="w-7 h-7" />}
                iconBg="from-indigo-500 to-purple-500"
                title="Arten-Lexikon"
                desc="Durchsuche unsere große Datenbank offline & blitzschnell. Entdecke detaillierte Profile für Fische und Pflanzen."
                link="/species"
                linkText="Zum Lexikon"
              />
              <FeatureCard 
                icon={<Activity className="w-7 h-7" />}
                iconBg="from-emerald-500 to-teal-500"
                title="Kompatibilitäts-Check"
                desc="Vermeide fatale Fehler. Prüfe sofort, welche Arten friedlich zusammenleben können und zusammen passen."
                link="/tank-builder"
                linkText="Check starten"
              />
              <FeatureCard 
                icon={<LayoutDashboard className="w-7 h-7" />}
                iconBg="from-amber-500 to-orange-500"
                title="Dein Dashboard (My Tanks)"
                desc="Verwalte deine Aquarien, tracke die Wasserwerte und behalte den Überblick über deinen Besatz."
                link="/my-tanks"
                linkText="Zu meinen Becken"
              />
            </div>
          </div>
        </section>

        {/* BOTTOM CTA / AUTH BANNER */}
        <section className="relative py-20 sm:py-24 overflow-hidden bg-white dark:bg-slate-950">
          {/* Subtle gradient shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[80px]" />
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl"
            >
              {!user ? (
                <>
                  <div className="mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6">
                    <UserPlus className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                    Bereit, dein Aquarium zu verbessern?
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                    Erstelle jetzt deinen kostenlosen Account. Speichere deine Lieblingsarten, baue virtuelle Becken und tracke deine Wasserwerte.
                  </p>
                  <Link 
                    to="/auth" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
                  >
                    Jetzt kostenlos registrieren
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </>
              ) : (
                <>
                  <div className="mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-6">
                    <LayoutDashboard className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                    Hallo {profile?.username || user.email?.split('@')[0]}! 👋
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                    Willkommen zurück bei AquaGuide. Bereit, nach deinen Aquarien zu schauen oder neue Arten zu entdecken?
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link 
                      to="/my-tanks" 
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
                    >
                      Ab zu deinen Becken
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link 
                      to="/species" 
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition-all shadow-sm border border-slate-200 dark:border-slate-700 w-full sm:w-auto"
                    >
                      Neue Art suchen
                    </Link>
                  </div>
                </>
              )}
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
    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 mb-2">
      {number}
    </div>
    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium tracking-wide">
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
    className="group relative bg-white dark:bg-slate-900/80 p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-500/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
  >
    {/* Icon */}
    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${iconBg} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    
    {/* Content */}
    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow">
      {desc}
    </p>
    
    {/* Link */}
    <Link 
      to={link} 
      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-auto"
    >
      {linkText} 
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
    
    {/* Hover gradient effect */}
    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${iconBg} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
  </motion.div>
);

const ExploreCard = ({ 
  icon, 
  title, 
  desc, 
  link, 
  image,
  color
}: { 
  icon: any; 
  title: string; 
  desc: string; 
  link: string; 
  image: string;
  color: 'indigo' | 'emerald' | 'amber';
}) => {
  const colorMap = {
    indigo: 'from-indigo-600/80 to-indigo-900/90 hover:from-indigo-500/80 hover:to-indigo-800/90',
    emerald: 'from-emerald-600/80 to-emerald-900/90 hover:from-emerald-500/80 hover:to-emerald-800/90',
    amber: 'from-amber-600/80 to-amber-900/90 hover:from-amber-500/80 hover:to-amber-800/90'
  };

  const iconColorMap = {
    indigo: 'text-indigo-300',
    emerald: 'text-emerald-300',
    amber: 'text-amber-300'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link 
        to={link}
        className="group block relative h-[320px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      >
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${colorMap[color]} transition-colors duration-300`} />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className={`mb-4 ${iconColorMap[color]} transform group-hover:scale-110 transition-transform duration-300 origin-left`}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-white/80 text-sm line-clamp-2 mb-4">
            {desc}
          </p>
          <div className="flex items-center gap-2 text-white font-medium text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Entdecken
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default HomePage;