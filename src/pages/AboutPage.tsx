import { SEOHead } from '../components/seo/SEOHead';
import { Database, ShieldCheck, Zap, Target, Lightbulb, CheckCircle2, ArrowRight, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allSpecies } from '../data/species';
import { biotopes } from '../data/biotopes';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SEOHead 
        title="About AquaGuide" 
        description="Learn about our mission to make aquarium keeping accessible through data-driven tools and scientific accuracy." 
      />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/30 px-4 py-2 rounded-full text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-8 border border-indigo-100 dark:border-indigo-900/50">
            <Droplets className="w-4 h-4" />
            Science-Backed Aquarium Guide
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
            Data-Driven<br className="md:hidden" /> Aquaristics
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We combine scientific data with modern design to help aquarists make informed decisions—from species compatibility to water parameters.
          </p>
        </div>
      </div>

      {/* Problem & Solution Cards */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {/* The Challenge */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-950/30 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">The Challenge</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Aquarium advice is often contradictory. Beginners struggle with incompatible fish, incorrect water parameters, and outdated rules that don't reflect modern aquarium science.
            </p>
          </div>

          {/* Our Approach */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-950/30 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Approach</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We provide <strong className="text-gray-900 dark:text-white font-semibold">standardized, scientifically sourced data</strong> with practical adjustments for home aquariums. Every compatibility rule is backed by species behavior and environmental needs.
            </p>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Core Principles</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What guides our approach to aquarium data and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Principle 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-950/30 rounded-xl flex items-center justify-center mb-6">
              <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Scientific Sources</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              We cross-reference data with FishBase, IUCN Red List, and peer-reviewed literature. Water parameters and habitat information are documented, not guessed.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-green-200 dark:hover:border-green-800 transition-all">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-950/30 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Beginner Safety</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Every species profile is manually curated. Compatibility warnings prevent common mistakes like pairing Bettas with fin-nippers or Neon Tetras with Angelfish.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-800 transition-all">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950/30 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Practical Tools</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Beyond static information, we provide interactive tools like the Tank Builder with real-time compatibility checks and bioload calculations.
            </p>
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Methodology</h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-950/30 rounded-lg flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-lg flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Data Collection</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We extract taxonomy, standard length, distribution, and habitat parameters from scientific databases like FishBase and IUCN.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-950/30 rounded-lg flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-lg flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Aquarium Adjustment</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We adjust wild parameters for captive-bred tolerance. For example, wild Neon Tetras live at pH 4.5, but tank-bred individuals tolerate pH 6.0–7.0.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-950/30 rounded-lg flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-lg flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Behavioral Analysis</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We calculate space requirements based on swimming behavior, not arbitrary "inches per gallon" rules. A territorial 5cm Betta needs different space than a schooling 5cm Danio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Database Stats */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-2xl p-8 md:p-12 border border-indigo-200 dark:border-indigo-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Current Database</h2>
          
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-black text-indigo-600 dark:text-indigo-400 mb-2">
                {allSpecies.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Species Profiles
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                Freshwater fish, invertebrates, and amphibians
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-black text-indigo-600 dark:text-indigo-400 mb-2">
                {biotopes.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Biotope Guides
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                From Amazonian blackwater to African Rift Lakes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Development Status */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Development Roadmap</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            AquaGuide is actively developed with new features shipping regularly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Released */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recently Released</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Species Database with detailed care profiles</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Biotope Explorer with educational content</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Interactive Tank Builder</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>My Tanks management dashboard</span>
              </li>
            </ul>
          </div>

          {/* In Development */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-6">
              <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">In Development</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <ArrowRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>Advanced search and filtering system</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <ArrowRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>Water parameter calculators</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <ArrowRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>Disease diagnosis tool</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <ArrowRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>Plant database expansion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-10 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Start Building Your Aquarium</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Explore our species database and use the Tank Builder to create your perfect setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/species"
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
            >
              Browse Species
            </Link>
            <Link 
              to="/tank-builder"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              Open Tank Builder
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;