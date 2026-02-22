import { Link } from 'react-router-dom';
import { 
  Search, BookOpen, Droplets, Beaker, Users,
  TrendingUp, Shield, Zap, ArrowRight,
  Fish, Leaf, Waves, Stethoscope, Target, Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { allSpecies } from '../data/species';
import { allPlants } from '../data/plants';
import { allKnowledgeArticles } from '../data/knowledge';

const HomePage = () => {
  const stats = [
    { label: 'Fish Species', value: allSpecies.length, icon: Fish, color: 'text-blue-500' },
    { label: 'Plant Species', value: allPlants.length, icon: Leaf, color: 'text-green-500' },
    { label: 'Knowledge Articles', value: allKnowledgeArticles.length, icon: BookOpen, color: 'text-purple-500' },
    { label: 'Active Users', value: '2.5K+', icon: Users, color: 'text-orange-500' },
  ];

  return (
    <PageTransition>
      <SEOHead 
        title="AquaGuide - Your Complete Aquarium Resource"
        description="Comprehensive aquarium database with detailed species profiles, care guides, water chemistry knowledge, and professional tank planning tools."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-32 px-6 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-sm font-bold mb-8 border border-indigo-200 dark:border-indigo-800">
                  <Zap className="w-4 h-4" />
                  Your Complete Aquarium Companion
                </div>
                
                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 dark:text-white leading-tight">
                  Build the Perfect
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500">
                    Aquarium Ecosystem
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Access comprehensive species profiles, expert care guides, and professional planning tools—all backed by science.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                  <Link 
                    to="/species" 
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/40 hover:-translate-y-1"
                  >
                    <Search className="w-5 h-5" />
                    Explore Database
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/knowledge" 
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-2xl transition-all border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <BookOpen className="w-5 h-5" />
                    Learn & Discover
                  </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      <stat.icon className={`w-8 h-8 ${stat.color} mb-3 mx-auto`} />
                      <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* QUICK ACCESS CARDS */}
        <section className="py-20 px-6 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Everything You Need in One Place
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                From beginner guides to advanced biotope planning—comprehensive resources for every aquarist
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CategoryCard 
                icon={<Fish className="w-8 h-8" />}
                title="Fish Database"
                desc={`Browse ${allSpecies.length}+ documented species with detailed care requirements, compatibility data, and high-quality images.`}
                link="/species"
                gradient="from-blue-500 to-cyan-500"
                stats={`${allSpecies.length}+ Species`}
              />
              <CategoryCard 
                icon={<Leaf className="w-8 h-8" />}
                title="Aquatic Plants"
                desc={`Discover ${allPlants.length}+ plant species with growth requirements, lighting needs, and aquascaping tips.`}
                link="/plants"
                gradient="from-green-500 to-emerald-500"
                stats={`${allPlants.length}+ Plants`}
              />
              <CategoryCard 
                icon={<BookOpen className="w-8 h-8" />}
                title="Knowledge Hub"
                desc="Learn about nitrogen cycle, water chemistry, equipment, and disease prevention with expert-written guides."
                link="/knowledge"
                gradient="from-purple-500 to-pink-500"
                stats="Expert Guides"
              />
              <CategoryCard 
                icon={<Waves className="w-8 h-8" />}
                title="Natural Habitats"
                desc="Recreate authentic biotopes from around the world with species-specific environmental recommendations."
                link="/habitats"
                gradient="from-cyan-500 to-blue-500"
                stats="Biotope Guides"
              />
              <CategoryCard 
                icon={<Target className="w-8 h-8" />}
                title="Tank Builder"
                desc="Plan your perfect aquarium with our interactive compatibility checker and stocking calculator."
                link="/tank-builder"
                gradient="from-orange-500 to-red-500"
                stats="Smart Planning"
              />
              <CategoryCard 
                icon={<Stethoscope className="w-8 h-8" />}
                title="Disease Guide"
                desc="Identify and treat common fish diseases with symptom checkers and medication recommendations."
                link="/diseases"
                gradient="from-red-500 to-rose-500"
                stats="Health Resources"
              />
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Features List */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Why Choose AquaGuide?
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                  Professional-grade tools and reliable information for aquarists of all experience levels.
                </p>

                <div className="space-y-6">
                  <FeatureItem 
                    icon={<Shield className="w-6 h-6" />}
                    title="Science-Backed Data"
                    desc="All information verified by aquarium experts and based on scientific research."
                  />
                  <FeatureItem 
                    icon={<Beaker className="w-6 h-6" />}
                    title="Smart Compatibility"
                    desc="Advanced algorithms check temperature, pH, behavior, and size compatibility."
                  />
                  <FeatureItem 
                    icon={<TrendingUp className="w-6 h-6" />}
                    title="Always Growing"
                    desc="Regular updates with new species, articles, and community-requested features."
                  />
                  <FeatureItem 
                    icon={<Droplets className="w-6 h-6" />}
                    title="Water Testing Tools"
                    desc="Track parameters, log water changes, and get personalized maintenance reminders."
                  />
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500 to-blue-500 p-1">
                  <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-900 p-8 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800&q=80" 
                      alt="Beautiful aquarium"
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-slate-900 dark:text-white">98%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Accuracy Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KNOWLEDGE PREVIEW */}
        <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Learn from the Experts
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Deep-dive articles on aquarium science, maintenance, and best practices
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {allKnowledgeArticles.slice(0, 3).map(article => (
                <Link
                  key={article.id}
                  to={`/knowledge/${article.slug}`}
                  className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  {article.visuals?.headerImage && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.visuals.headerImage} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold capitalize">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        {article.readingTime} min
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link 
                to="/knowledge"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                View All Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-12 border border-slate-700 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Join thousands of aquarists using AquaGuide to build healthier, more beautiful aquariums.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/species" 
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl transition-all shadow-lg"
                >
                  Browse {allSpecies.length}+ Species
                </Link>
                <Link 
                  to="/tank-builder" 
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg border border-indigo-500"
                >
                  Plan Your Tank
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

const CategoryCard = ({ icon, title, desc, link, gradient, stats }: any) => (
  <Link
    to={link}
    className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
      {title}
    </h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
      {desc}
    </p>
    <div className="flex items-center justify-between">
      <span className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wide">{stats}</span>
      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
    </div>
  </Link>
);

const FeatureItem = ({ icon, title, desc }: any) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{title}</h4>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default HomePage;
