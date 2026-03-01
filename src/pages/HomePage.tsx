import { Link } from 'react-router-dom';
import { 
  Zap, ArrowRight,
  Database, Shield, Gauge, BookOpen, Activity, LayoutDashboard, UserPlus,
  Leaf, Map, Lightbulb, Clock, Droplets, Ruler
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { allSpecies, bettaSplendens, neonTetra, oscar, amanoShrimp } from '../data/species';
import { useAuth } from '../contexts/AuthContext';
import { allPlants } from '../data/plants';
import habitatsData from '../data/habitats.json';
import { allKnowledgeArticles } from '../data/knowledge';

const HomePage = () => {
  const { user, profile } = useAuth();
  
  const featuredSpecies = [bettaSplendens, neonTetra, oscar, amanoShrimp];
  
  // Dynamically pulled featured items
  const featuredPlants = [
    allPlants.find(p => p.slug === 'anubias-barteri-nana'),
    allPlants.find(p => p.slug === 'bacopa-monnieri'),
    allPlants.find(p => p.slug === 'microsorum-pteropus')
  ].filter((p): p is (typeof allPlants)[number] => Boolean(p));

  const featuredBiotopes = [
    habitatsData.find(h => h.id === 'amazon-blackwater'),
    habitatsData.find(h => h.id === 'lake-tanganyika-rocky')
  ].filter(Boolean) as typeof habitatsData;

  const featuredArticles = ['nitrogen-cycle', 'planted-tank-setup']
    .map(slug => allKnowledgeArticles.find(a => a.slug === slug))
    .filter((a): a is (typeof allKnowledgeArticles)[number] => Boolean(a));

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

        {/* HOME TEASERS - Plants / Habitats / Knowledge */}
        <section className="py-20 px-6 relative overflow-hidden bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                Mehr als nur Fische
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Entdecke authentische Biotop-Setups, detaillierte Pflanzenprofile und lerne die wichtigsten Grundlagen in unserer Knowledge Base.
              </p>
            </motion.div>

            {/* Plants Row */}
            <div className="mb-20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Beliebte Pflanzen</h3>
                </div>
                <Link to="/plants" className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors shrink-0">
                  Lexikon öffnen <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {featuredPlants.map((plant, i) => (
                  <motion.div
                    key={plant.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <Link to={`/plants/${plant.slug}`} className="group flex flex-col h-full bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-500/40 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden p-2">
                      <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden shrink-0 mb-4 bg-slate-100 dark:bg-slate-800">
                        <img 
                          src={plant.imageUrl} 
                          alt={plant.taxonomy.commonName} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                          {plant.taxonomy.family}
                        </div>
                      </div>
                      
                      <div className="flex flex-col flex-grow px-3 pb-3">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {plant.taxonomy.commonName}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 italic mb-4">
                          {plant.taxonomy.scientificName}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-2 mt-auto">
                          <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                            <Shield className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="capitalize truncate">{plant.difficulty}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                            <Ruler className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="truncate">{plant.specs.heightCM.max} cm</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                            <Activity className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="capitalize truncate">{plant.specs.growthRate}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                            <Droplets className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="capitalize truncate">{plant.parameters.ph.ideal || plant.parameters.ph.min} pH</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Biotopes & Knowledge Split Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Biotopes Column */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                      <Map className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Habitate</h3>
                  </div>
                  <Link to="/biotopes" className="text-amber-600 dark:text-amber-400 font-semibold hover:underline flex items-center gap-1">
                    Entdecken <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid gap-6">
                  {featuredBiotopes.map((biotope, i) => (
                    <motion.div
                      key={biotope.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      <Link to={`/biotopes/${biotope.id}`} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl border-2 border-slate-100 dark:border-slate-800 transition-all duration-300 h-56 block bg-slate-900">
                        <img 
                          src={biotope.imageUrl} 
                          alt={biotope.title} 
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
                        <div className="absolute bottom-5 left-5 right-5">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                              {biotope.conditions.waterType}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors leading-tight">{biotope.title}</h4>
                          <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">{biotope.subtitle || biotope.description}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Knowledge Column */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Wissen</h3>
                  </div>
                  <Link to="/knowledge" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1">
                    Alle Guides <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid gap-6">
                  {featuredArticles.map((article, i) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      <Link to={`/knowledge/${article.slug}`} className="group flex flex-row gap-5 p-4 rounded-3xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-200 dark:hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-lg h-56">
                        <div className="w-2/5 sm:w-1/3 rounded-2xl overflow-hidden shrink-0 relative">
                          <img src={article.visuals.headerImage} alt={article.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                            {article.category}
                          </div>
                        </div>
                        <div className="flex flex-col justify-center flex-1 py-1 pr-2">
                          <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2">
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readingTime} min</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                            <span className="capitalize text-indigo-600 dark:text-indigo-400">{article.difficulty}</span>
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                            {article.summary}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

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

export default HomePage;
