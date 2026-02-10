import { SEOHead } from '../components/seo/SEOHead';
import { Database, ShieldCheck } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white">
      <SEOHead title="Methodology & Mission" description="How AquaGuide sources data." />
      
      {/* 1. Header Section */}
      <div className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Data-Driven Aquaristics
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          We’re fighting aquarium myths with scientific data and modern visualization.
        </p>
      </div>

      {/* 2. Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        
        {/* Intro Text */}
        <div className="prose prose-lg prose-indigo mx-auto text-slate-600 mb-16">
          <p className="lead">
            The aquarium hobby is full of conflicting advice. "Ask 10 aquarists, get 11 opinions." 
            We believe there's a better way: <strong>Standardized, curated data.</strong>
          </p>
          <p>
            AquaGuide isn't just a wiki. It's a tool designed to prevent common mistakes 
            like overstocking, incompatibility, and keeping fish in environments that stunt their growth.
          </p>
        </div>

        {/* 3. Feature Grid (Why us?) */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <Database className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">Scientific Sources</h3>
            <p className="text-sm text-slate-600">
              Taxonomy and habitat data is cross-referenced with FishBase and IUCN Red List. 
              We don't guess water parameters.
            </p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <ShieldCheck className="w-8 h-8 text-optimal mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">Curated Safety</h3>
            <p className="text-sm text-slate-600">
              No user-generated chaos. Every profile is manually reviewed to ensure 
              compatibility advice is safe for beginners.
            </p>
          </div>
        </div>

        {/* 4. Methodology Steps */}
        <div className="border-t border-slate-100 pt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Process</h2>
          <div className="space-y-6">
            <MethodStep 
              num="01" 
              title="Raw Data Extraction" 
              desc="We pull standard length (SL) and distribution data from scientific databases." 
            />
            <MethodStep 
              num="02" 
              title="Aquarium Adjustment" 
              desc="We adjust wild parameters (e.g. pH) to match realistic tank conditions (e.g. captive bred tolerance)." 
            />
            <MethodStep 
              num="03" 
              title="Visual Calculation" 
              desc="We calculate bioload and swimming space requirements geometrically, not just by 'inch per gallon' rules." 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

// Helper Component für die Liste
const MethodStep = ({ num, title, desc }: { num: string, title: string, desc: string }) => (
  <div className="flex gap-4 items-start">
    <span className="text-2xl font-black text-slate-200">{num}</span>
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  </div>
);

export default AboutPage;
