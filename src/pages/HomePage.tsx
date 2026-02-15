import { Link } from 'react-router-dom';
import { Fish, Droplets, BookOpen, Zap, Shield, Users, ArrowRight, Sparkles } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { allSpecies } from '../data/species';

const HomePage = () => {
  return (
    <PageTransition>
      <SEOHead 
        title="AquaGuide - The Modern Aquarium Database"
        description="Discover 50+ detailed species profiles, scientifically accurate care guides, and build your perfect aquarium setup."
      />
      
      <div className="min-h-screen bg-slate-50 dark:bg-stone-950 transition-colors duration-300">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white pt-32 pb-24 px-6 overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[100px] opacity-20 translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="w-4 h-4" />
              The Modern Aquarium Database
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Stop Guessing.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                Start Scaping.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Build your dream aquarium with confidence. Access {allSpecies.length}+ detailed species profiles, 
              advanced water parameter filters, and scientifically accurate compatibility checks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Link 
                to="/species" 
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl transition-all shadow-2xl shadow-indigo-500/30 flex items-center gap-2"
              >
                Browse Species
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/tank-builder" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 backdrop-blur-sm"
              >
                Tank Builder
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <div>
                <div className="text-4xl font-black text-indigo-400 mb-2">{allSpecies.length}+</div>
                <div className="text-sm text-slate-400 font-semibold">Species Profiles</div>
              </div>
              <div>
                <div className="text-4xl font-black text-emerald-400 mb-2">10+</div>
                <div className="text-sm text-slate-400 font-semibold">Filter Options</div>
              </div>
              <div>
                <div className="text-4xl font-black text-amber-400 mb-2">100%</div>
                <div className="text-sm text-slate-400 font-semibold">Science-Based</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400">Build Better</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-stone-400 max-w-2xl mx-auto">
                From beginners to experts, AquaGuide provides the tools and knowledge for successful aquarium keeping.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Fish className="w-8 h-8" />}
                title="Detailed Species Profiles"
                description="Comprehensive care guides with behavior patterns, compatibility data, and breeding information for 50+ species."
                color="indigo"
              />
              <FeatureCard 
                icon={<Droplets className="w-8 h-8" />}
                title="Advanced Water Parameters"
                description="Filter by temperature, pH, hardness, and more. Find species that match your exact tank conditions."
                color="blue"
              />
              <FeatureCard 
                icon={<Zap className="w-8 h-8" />}
                title="Smart Tank Builder"
                description="Visual tank planning tool with real-time compatibility checks and stocking level warnings."
                color="emerald"
              />
              <FeatureCard 
                icon={<Shield className="w-8 h-8" />}
                title="Scientific Accuracy"
                description="All information is researched and verified. No guesswork, just reliable aquarium science."
                color="amber"
              />
              <FeatureCard 
                icon={<BookOpen className="w-8 h-8" />}
                title="Disease Database"
                description="Identify and treat common fish diseases with detailed symptom guides and treatment protocols."
                color="rose"
              />
              <FeatureCard 
                icon={<Users className="w-8 h-8" />}
                title="Community Driven"
                description="Built by aquarists, for aquarists. Open source and constantly improving with user feedback."
                color="violet"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-indigo-600 to-emerald-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTZjMC0zLjMxNC0yLjY4Ni02LTYtNnMtNiAyLjY4Ni02IDZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Ready to Build Your Perfect Aquarium?
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Join thousands of aquarists using AquaGuide to create thriving, beautiful aquariums.
            </p>
            <Link 
              to="/species" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-600 hover:bg-slate-50 font-black rounded-xl transition-all shadow-2xl text-lg group"
            >
              Start Exploring
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

const FeatureCard = ({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) => {
  const colorClasses: Record<string, string> = {
    indigo: 'from-indigo-500 to-indigo-600',
    blue: 'from-blue-500 to-blue-600',
    emerald: 'from-emerald-500 to-emerald-600',
    amber: 'from-amber-500 to-amber-600',
    rose: 'from-rose-500 to-rose-600',
    violet: 'from-violet-500 to-violet-600'
  };

  return (
    <div className="group bg-white dark:bg-stone-900 p-8 rounded-2xl border border-slate-200 dark:border-stone-800 hover:border-slate-300 dark:hover:border-stone-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${colorClasses[color]} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-stone-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default HomePage;