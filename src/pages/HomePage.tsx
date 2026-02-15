import { Link } from 'react-router-dom';
import { Fish, Droplets, BookOpen, Zap, Shield, ArrowRight, Sparkles, Database, TrendingUp } from 'lucide-react';
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
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 transition-colors duration-300">
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-6 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[140px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 border border-indigo-500/20 dark:border-indigo-400/20 text-indigo-700 dark:text-indigo-300 text-sm font-bold uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              The Modern Aquarium Database
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-[0.95] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <span className="text-slate-900 dark:text-white">Stop Guessing.</span>
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600 dark:from-indigo-400 dark:via-blue-400 dark:to-emerald-400">
                Start Scaping.
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-stone-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Build your dream aquarium with confidence. Access <span className="font-bold text-indigo-600 dark:text-indigo-400">{allSpecies.length}+ detailed species profiles</span>, 
              advanced water parameter filters, and scientifically accurate compatibility checks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Link 
                to="/species" 
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-105 flex items-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <span className="relative z-10">Browse Species</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/tank-builder" 
                className="px-8 py-4 bg-white dark:bg-stone-800 hover:bg-slate-50 dark:hover:bg-stone-700 text-slate-900 dark:text-white font-bold rounded-xl transition-all border-2 border-slate-200 dark:border-stone-700 hover:border-indigo-300 dark:hover:border-indigo-600 shadow-lg hover:shadow-xl"
              >
                Tank Builder
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-stone-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-400 dark:to-indigo-500 mb-2">{allSpecies.length}+</div>
                  <div className="text-sm text-slate-600 dark:text-stone-400 font-bold">Species Profiles</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-stone-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-400 dark:to-emerald-500 mb-2">10+</div>
                  <div className="text-sm text-slate-600 dark:text-stone-400 font-bold">Filter Options</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-stone-800 hover:border-amber-300 dark:hover:border-amber-700 transition-all">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-600 to-amber-700 dark:from-amber-400 dark:to-amber-500 mb-2">100%</div>
                  <div className="text-sm text-slate-600 dark:text-stone-400 font-bold">Science-Based</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Everything You Need to Build
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400">Better Aquariums</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-stone-400 max-w-2xl mx-auto">
                From beginners to experts, AquaGuide provides the tools and knowledge for successful aquarium keeping.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<Fish className="w-7 h-7" />}
                title="Detailed Species Database"
                description="Comprehensive care guides with behavior patterns, compatibility data, and breeding information for 50+ species."
                gradient="from-indigo-500 to-blue-500"
              />
              <FeatureCard 
                icon={<Droplets className="w-7 h-7" />}
                title="Advanced Water Parameters"
                description="Filter by temperature, pH, hardness, and more. Find species that match your exact tank conditions."
                gradient="from-blue-500 to-cyan-500"
              />
              <FeatureCard 
                icon={<Zap className="w-7 h-7" />}
                title="Smart Tank Builder"
                description="Visual tank planning tool with real-time compatibility checks and stocking level warnings."
                gradient="from-emerald-500 to-teal-500"
              />
              <FeatureCard 
                icon={<Shield className="w-7 h-7" />}
                title="Scientific Accuracy"
                description="All information is researched and verified. No guesswork, just reliable aquarium science."
                gradient="from-amber-500 to-orange-500"
              />
              <FeatureCard 
                icon={<BookOpen className="w-7 h-7" />}
                title="Disease Database"
                description="Identify and treat common fish diseases with detailed symptom guides and treatment protocols."
                gradient="from-rose-500 to-pink-500"
              />
              <FeatureCard 
                icon={<Database className="w-7 h-7" />}
                title="Constantly Updated"
                description="Regular updates with new species, enhanced features, and the latest aquarium keeping research."
                gradient="from-violet-500 to-purple-500"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-emerald-600 dark:from-indigo-700 dark:via-blue-700 dark:to-emerald-700"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTZjMC0zLjMxNC0yLjY4Ni02LTYtNnMtNiAyLjY4Ni02IDZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <TrendingUp className="w-16 h-16 text-white mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Build Your Perfect Aquarium?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join thousands of aquarists using AquaGuide to create thriving, beautiful aquariums with scientific precision.
            </p>
            <Link 
              to="/species" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-600 hover:bg-slate-50 font-black rounded-xl transition-all shadow-2xl hover:shadow-3xl text-lg group"
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

const FeatureCard = ({ icon, title, description, gradient }: { icon: React.ReactNode; title: string; description: string; gradient: string }) => {
  return (
    <div className="group relative bg-white dark:bg-stone-900 p-8 rounded-2xl border border-slate-200 dark:border-stone-800 hover:border-slate-300 dark:hover:border-stone-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 dark:to-stone-800/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10">
        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-stone-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HomePage;