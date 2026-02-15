import { Link } from 'react-router-dom';
import { Fish, Droplets, BookOpen, Zap, Shield, ArrowRight, Database, ChevronRight, Check } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { allSpecies } from '../data/species';

const HomePage = () => {
  return (
    <PageTransition>
      <SEOHead 
        title="AquaGuide - Professional Aquarium Database"
        description="Science-based aquarium planning with detailed species profiles, water parameter filtering, and compatibility analysis."
      />
      
      <div className="min-h-screen bg-white dark:bg-stone-950 transition-colors duration-300">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-stone-900 dark:to-stone-950">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6">
              Professional Aquarium Database
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white max-w-4xl">
              Science-Based Aquarium Planning & Species Research
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-slate-600 dark:text-stone-400 max-w-3xl mb-12 leading-relaxed">
              Make informed decisions with our comprehensive database of <span className="font-semibold text-slate-900 dark:text-white">{allSpecies.length}+ documented species</span>, advanced filtering tools, and scientifically accurate compatibility analysis.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link 
                to="/species" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                Browse Species Database
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link 
                to="/tank-builder" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-stone-900 hover:bg-slate-50 dark:hover:bg-stone-800 text-slate-900 dark:text-white font-semibold rounded-lg transition-all border border-slate-200 dark:border-stone-800 shadow-sm"
              >
                Tank Builder Tool
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl bg-white dark:bg-stone-900 p-8 rounded-xl border border-slate-200 dark:border-stone-800 shadow-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{allSpecies.length}+</div>
                <div className="text-sm text-slate-600 dark:text-stone-400 font-medium">Species Documented</div>
              </div>
              <div className="text-center border-x border-slate-200 dark:border-stone-800">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">10+</div>
                <div className="text-sm text-slate-600 dark:text-stone-400 font-medium">Filter Parameters</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">100%</div>
                <div className="text-sm text-slate-600 dark:text-stone-400 font-medium">Research-Based</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-slate-50 dark:bg-stone-900">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Comprehensive Tools for Informed Aquarium Management
              </h2>
              <p className="text-lg text-slate-600 dark:text-stone-400">
                Built for hobbyists and professionals who value accuracy and detailed information.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<Fish className="w-6 h-6" />}
                title="Detailed Species Profiles"
                description="Complete care requirements, behavioral characteristics, breeding information, and compatibility data."
                features={[
                  'Water parameter ranges',
                  'Dietary requirements',
                  'Behavioral patterns',
                  'Compatibility analysis'
                ]}
              />
              <FeatureCard 
                icon={<Droplets className="w-6 h-6" />}
                title="Advanced Filtering"
                description="Precision search by temperature, pH, tank size, biotope, care level, and temperament."
                features={[
                  'Temperature ranges',
                  'pH tolerance levels',
                  'Tank size requirements',
                  'Geographic origin'
                ]}
              />
              <FeatureCard 
                icon={<Zap className="w-6 h-6" />}
                title="Tank Planning Tool"
                description="Visual planning with real-time compatibility checks and stocking calculations."
                features={[
                  'Live compatibility checks',
                  'Stocking level warnings',
                  'Territory calculations',
                  'Water parameter matching'
                ]}
              />
              <FeatureCard 
                icon={<Shield className="w-6 h-6" />}
                title="Scientific Accuracy"
                description="All data is research-verified and regularly updated with current aquarium science."
                features={[
                  'Peer-reviewed sources',
                  'Expert consultation',
                  'Regular updates',
                  'Fact-checked data'
                ]}
              />
              <FeatureCard 
                icon={<BookOpen className="w-6 h-6" />}
                title="Disease Reference"
                description="Comprehensive disease identification with symptoms, causes, and treatment protocols."
                features={[
                  'Symptom identification',
                  'Treatment protocols',
                  'Prevention guidelines',
                  'Medication reference'
                ]}
              />
              <FeatureCard 
                icon={<Database className="w-6 h-6" />}
                title="Regular Updates"
                description="Continuously expanded with new species profiles and enhanced search capabilities."
                features={[
                  'New species additions',
                  'Enhanced filtering',
                  'Bug fixes',
                  'Feature improvements'
                ]}
              />
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 px-6 bg-white dark:bg-stone-950">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Built on Scientific Research, Not Guesswork
                </h2>
                <p className="text-lg text-slate-600 dark:text-stone-400 mb-8">
                  Every species profile is compiled from reputable sources including scientific literature, expert aquarists, and field research. We prioritize accuracy over quantity.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white mb-1">Verified Information</div>
                      <div className="text-slate-600 dark:text-stone-400">Cross-referenced with multiple authoritative sources</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white mb-1">Expert Consultation</div>
                      <div className="text-slate-600 dark:text-stone-400">Reviewed by experienced aquarium professionals</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white mb-1">Regular Updates</div>
                      <div className="text-slate-600 dark:text-stone-400">Continuously refined with new research and findings</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 dark:bg-stone-900 p-8 rounded-xl border border-slate-200 dark:border-stone-800">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Fish className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white mb-1">Species Database</div>
                      <div className="text-sm text-slate-600 dark:text-stone-400">Detailed profiles with full care requirements and compatibility data</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white mb-1">Parameter Filtering</div>
                      <div className="text-sm text-slate-600 dark:text-stone-400">Find species that match your exact water conditions</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white mb-1">Tank Builder</div>
                      <div className="text-sm text-slate-600 dark:text-stone-400">Plan your setup with live compatibility analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-slate-900 dark:bg-stone-950 border-t border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Planning Your Aquarium Today
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Access our complete species database and advanced planning tools to build a thriving aquarium ecosystem.
            </p>
            <Link 
              to="/species" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Browse Species Database
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

const FeatureCard = ({ icon, title, description, features }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  features: string[];
}) => {
  return (
    <div className="bg-white dark:bg-stone-950 p-6 rounded-lg border border-slate-200 dark:border-stone-800 hover:border-slate-300 dark:hover:border-stone-700 transition-all">
      <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-stone-900 flex items-center justify-center text-slate-900 dark:text-white mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-stone-400 mb-4 text-sm">
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-stone-400">
            <div className="w-1 h-1 rounded-full bg-indigo-600 dark:bg-indigo-400 flex-shrink-0"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;