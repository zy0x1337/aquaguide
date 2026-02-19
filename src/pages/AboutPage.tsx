import { SEOHead } from '../components/seo/SEOHead';
import { Database, ShieldCheck, Zap, Users, Github, Sparkles, Target, Lightbulb, Rocket, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allSpecies } from '../data/species';
import { biotopes } from '../data/biotopes';

const AboutPage = () => {
  const stats = [
    { label: 'Species', value: allSpecies.length, icon: '🐠' },
    { label: 'Biotopes', value: biotopes.length, icon: '🌊' },
    { label: 'Active Users', value: '1,200+', icon: '👥' },
    { label: 'Tank Setups', value: '3,500+', icon: '🎨' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-[#1c1917] dark:via-stone-900 dark:to-[#1c1917]">
      <SEOHead title="About AquaGuide" description="Learn about our mission to make aquarium keeping accessible through data-driven tools and scientific accuracy." />
      
      {/* 1. Hero Section with Animated Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white pt-32 pb-20 px-6">
        {/* Animated Wave Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] animate-pulse"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Sparkles className="w-4 h-4" />
            Science-Backed Aquarium Guide
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            Data-Driven<br />
            <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent">
              Aquaristics
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Fighting aquarium myths with scientific data, modern visualization, and community-driven insights.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {stats.map(stat => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Mission Statement (Bento Grid) */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 mb-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Problem */}
          <div className="bg-white dark:bg-stone-800/50 rounded-3xl p-8 border border-stone-200/60 dark:border-stone-700/40 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-black text-stone-900 dark:text-white mb-4">The Problem</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              The aquarium hobby is plagued by contradictory advice. "Ask 10 aquarists, get 11 opinions." 
              Beginners waste money on incompatible fish, overstocked tanks, and outdated 'rules of thumb'.
            </p>
          </div>

          {/* Card 2: Solution */}
          <div className="bg-white dark:bg-stone-800/50 rounded-3xl p-8 border border-stone-200/60 dark:border-stone-700/40 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-black text-stone-900 dark:text-white mb-4">Our Solution</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              <strong className="text-stone-900 dark:text-white">Standardized, curated data.</strong> We cross-reference scientific databases, 
              adjust for captive breeding, and visualize compatibility in real-time. No more guessing.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Features Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-stone-900 dark:text-white mb-4">What Makes Us Different</h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            We're not just another fish wiki. Here's why AquaGuide stands out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-3xl p-8 border border-blue-200/60 dark:border-blue-800/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-black text-stone-900 dark:text-white mb-3">Scientific Sources</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              Taxonomy and habitat data cross-referenced with FishBase, IUCN Red List, and peer-reviewed literature. 
              We don't guess water parameters.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-3xl p-8 border border-green-200/60 dark:border-green-800/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-black text-stone-900 dark:text-white mb-3">Curated Safety</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              No user-generated chaos. Every species profile is manually reviewed. 
              Compatibility rules are beginner-safe and prevent common disasters (like Bettas with fin-nippers).
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-3xl p-8 border border-purple-200/60 dark:border-purple-800/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-black text-stone-900 dark:text-white mb-3">Real-Time Tools</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              Tank Builder calculates bioload geometrically, not by "inch per gallon" myths. 
              Compatibility checks happen live as you add species.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Methodology Timeline */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-stone-900 dark:text-white mb-4">Our Process</h2>
          <p className="text-lg text-stone-600 dark:text-stone-400">
            How we turn scientific data into practical advice.
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex gap-6 items-start group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
              01
            </div>
            <div className="flex-1 bg-white dark:bg-stone-800/50 rounded-2xl p-6 border border-stone-200/60 dark:border-stone-700/40">
              <h4 className="text-xl font-black text-stone-900 dark:text-white mb-2">Raw Data Extraction</h4>
              <p className="text-stone-600 dark:text-stone-400">
                We pull standard length (SL), distribution, and habitat data from FishBase, IUCN, and scientific journals. 
                No anecdotal forum posts.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6 items-start group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
              02
            </div>
            <div className="flex-1 bg-white dark:bg-stone-800/50 rounded-2xl p-6 border border-stone-200/60 dark:border-stone-700/40">
              <h4 className="text-xl font-black text-stone-900 dark:text-white mb-2">Aquarium Adjustment</h4>
              <p className="text-stone-600 dark:text-stone-400">
                We adjust wild parameters for captive reality. Example: Wild Neon Tetras live at pH 4.5, 
                but tank-bred tolerate 6.0-7.0. We document both.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6 items-start group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
              03
            </div>
            <div className="flex-1 bg-white dark:bg-stone-800/50 rounded-2xl p-6 border border-stone-200/60 dark:border-stone-700/40">
              <h4 className="text-xl font-black text-stone-900 dark:text-white mb-2">Geometric Calculation</h4>
              <p className="text-stone-600 dark:text-stone-400">
                We calculate swimming space requirements based on body shape and behavior. 
                A 5cm Betta needs different space than a 5cm Danio (one is territorial, one is a schooler).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Roadmap */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-3xl p-12 border border-indigo-200/60 dark:border-indigo-800/40">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-3xl font-black text-stone-900 dark:text-white">What's Next</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Completed */}
            <div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Recently Shipped
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-stone-600 dark:text-stone-400">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>45+ Species Database with detailed care profiles</span>
                </li>
                <li className="flex items-start gap-2 text-stone-600 dark:text-stone-400">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Biotope Explorer with educational narratives</span>
                </li>
                <li className="flex items-start gap-2 text-stone-600 dark:text-stone-400">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Tank Builder with real-time compatibility checks</span>
                </li>
                <li className="flex items-start gap-2 text-stone-600 dark:text-stone-400">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>My Tanks Dashboard for tracking your setups</span>
                </li>
              </ul>
            </div>

            {/* Coming Soon */}
            <div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                Coming Soon
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-stone-600 dark:text-stone-400">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Advanced Search & Filter System</span>
                </li>
                <li className="flex items-start gap-2 text-stone-600 dark:text-stone-400">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Water Parameter Calculator Tools</span>
                </li>
                <li className="flex items-start gap-2 text-stone-600 dark:text-stone-400">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Disease Diagnosis Interactive Tool</span>
                </li>
                <li className="flex items-start gap-2 text-stone-600 dark:text-stone-400">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Community Tank Showcases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 6. CTA Section */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-black mb-4">Join the Community</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Start building your dream aquarium with data-driven tools and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/species"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              Explore Species
            </Link>
            <Link 
              to="/tank-builder"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all hover:scale-105"
            >
              Build a Tank
            </Link>
          </div>
        </div>
      </div>

      {/* 7. Open Source Badge (Optional) */}
      <div className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <a 
          href="https://github.com/zy0x1337/aquaguide" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
          <span className="font-medium">View source on GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default AboutPage;