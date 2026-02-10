import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplets } from 'lucide-react';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-slate-50">
      
      {/* Global Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
              <Droplets className="w-5 h-5 text-indigo-600" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              Aqua<span className="text-indigo-600">Guide</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm font-medium text-slate-500">
            <Link to="/" className={`hover:text-indigo-600 transition-colors ${isHome ? 'text-indigo-600' : ''}`}>
              Explore
            </Link>
            <Link to="/about" className="hover:text-indigo-600 transition-colors">
              Methodology
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>

      {/* Global Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Scientifically accurate. Data-driven. Made for hobbyists.
          </p>
          <div className="flex justify-center gap-6 text-slate-400 text-xs mb-8">
            <Link to="/about" className="hover:text-slate-600">About</Link>
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Imprint</a>
          </div>
          <p className="text-slate-300 text-xs">
            © {new Date().getFullYear()} AquaGuide. Not advice. Consult a vet for sick fish.
          </p>
        </div>
      </footer>

    </div>
  );
};
