import { Link } from 'react-router-dom';
import { 
  Zap, ChevronRight, 
  Search, Layers, Sparkles, Activity 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { allSpecies, bettaSplendens, neonTetra, oscar, amanoShrimp } from '../data/species';

const HomePage = () => {
  // Select a few featured species for the visual showcase
  const featuredSpecies = [bettaSplendens, neonTetra, oscar, amanoShrimp];

  return (
    <PageTransition>
      <SEOHead 
        title="AquaGuide - Professional Aquarium Database"
        description="Science-based aquarium planning with detailed species profiles, water parameter filtering, and compatibility analysis."
      />
      
      <div className="min-h-screen bg-slate-50 dark:bg-stone-950 font-sans selection:bg-indigo-500/30">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-stone-950 dark:to-stone-950 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
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
                    v2.0 Beta Live
                  </span>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                    Learn all about your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">favorite Fish</span>
                  </h1>
                  :
                  <p className="text-xl text-slate-600 dark:text-stone-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                    The modern standard for aquarium planning. 
                    Explore <span className="font-bold text-slate-900 dark:text-white">{allSpecies.length}+ documented species</span> with science-based compatibility checks and smart filtering.
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

              {/* Visual Content (Featured Species Grid) */}
              <div className="flex-1 w-full max-w-lg lg:max-w-none">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {featuredSpecies.map((fish, idx) => (
                    <Link 
                      to={`/species/${fish.slug}`}
                      key={fish.id}
                      className={`group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 ${idx % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
                    >
                      <img 
                        src={fish.imageUrl} 
                        alt={fish.taxonomy.commonName}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute bottom-0 left-0 p-4 w-full">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 mb-1">{fish.taxonomy.family}</p>
                        <h3 className="text-white font-bold text-lg leading-tight group-hover:text-indigo-200 transition-colors">
                          {fish.taxonomy.commonName}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Everything you need to succeed</h2>
              <p className="text-slate-600 dark:text-slate-400">Stop guessing. Use professional tools to plan a healthy, balanced aquarium ecosystem.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Search className="w-6 h-6 text-indigo-500" />}
                title="Smart Filtering"
                desc="Find the perfect tank mates by filtering for temperature, pH, size, and temperament."
                link="/species"
                linkText="Search Species"
              />
              <FeatureCard 
                icon={<Activity className="w-6 h-6 text-emerald-500" />}
                title="Compatibility Engine"
                desc="Our algorithm checks 10+ data points including behavior, parameters, and size ratios to prevent conflicts."
                link="/tank-builder"
                linkText="Check Compatibility"
              />
              <FeatureCard 
                icon={<Layers className="w-6 h-6 text-rose-500" />}
                title="Biotopes & Guides"
                desc="Learn about natural habitats and replicate them with our detailed biotope guides and setups."
                link="/biotopes"
                linkText="Explore Biotopes"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start?</h2>
            <p className="text-lg text-slate-300 mb-10">Join thousands of hobbyists using AquaGuide to build better tanks.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/species" 
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25"
              >
                Browse {allSpecies.length}+ Species
              </Link>
              <Link 
                to="/about" 
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold rounded-xl transition-all border border-slate-700"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

const FeatureCard = ({ icon, title, desc, link, linkText }: { icon: any, title: string, desc: string, link: string, linkText: string }) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
    <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{desc}</p>
    <Link to={link} className="inline-flex items-center text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
      {linkText} <ChevronRight className="w-4 h-4 ml-1" />
    </Link>
  </div>
);

export default HomePage;