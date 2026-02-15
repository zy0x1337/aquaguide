import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets, Stethoscope, Info, Github, Fish, Leaf, BoxSelect, Sparkles, Home } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';


interface Props {
  children: React.ReactNode;
}


export const Layout: React.FC<Props> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();


  const isActive = (path: string) => 
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);


  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/species', label: 'Fish', icon: Fish },
    { path: '/plants', label: 'Plants', icon: Leaf },
    { path: '/diseases', label: 'Diseases', icon: Stethoscope },
    { path: '/about', label: 'About', icon: Info },
  ];

  const isTankBuilderActive = isActive('/tank-builder');


  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      
      {/* HEADER: Nutzt CSS-Variablen für Hintergrund und Border */}
      <header className="sticky top-0 z-50 bg-theme-nav border-b border-theme shadow-sm transition-colors duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <Droplets className="w-6 h-6 fill-white/20" />
              </div>
              <div className="flex flex-col justify-center -space-y-0.5">
                <span className="text-xl font-black tracking-tight text-theme-main leading-none">
                  Aqua<span className="text-indigo-600 dark:text-indigo-400">Guide</span>
                </span>
                <span className="text-[10px] font-bold text-theme-muted tracking-widest uppercase ml-0.5">
                  Database
                </span>
              </div>
            </Link>


            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-4">
              
              {/* TANK BUILDER - PROMINENT BUTTON */}
              <Link
                to="/tank-builder"
                className={`
                  relative flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-sm transition-all duration-300 overflow-hidden group
                  ${isTankBuilderActive 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30' 
                    : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-400/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105'
                  }
                `}
              >
                {/* Animated background shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                <BoxSelect className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Tank Builder</span>
                
                {!isTankBuilderActive && (
                  <Sparkles className="w-3.5 h-3.5 relative z-10 animate-pulse" />
                )}
              </Link>

              <div className="h-6 w-px bg-theme-nav border-l border-theme opacity-50"></div>

              {/* Regular Nav Pills */}
              <div 
                className="flex items-center gap-1 p-1 rounded-xl border border-theme"
                style={{ backgroundColor: 'var(--nav-pill-bg)' }} 
              >
                {navItems.map(item => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`
                        flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm transition-all duration-200
                        ${active ? 'nav-item-active' : 'nav-item-inactive font-bold'}
                      `}
                    >
                      {active && <Icon className="w-3.5 h-3.5" />}
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              
              <div className="h-6 w-px bg-theme-nav border-l border-theme opacity-50"></div>


              <a href="https://github.com/yourusername/aquarium-guide" target="_blank" rel="noopener noreferrer" className="p-2 text-theme-muted hover:text-theme-main transition-colors">
                <Github className="w-5 h-5" />
              </a>


              <ThemeToggle />
            </div>


            {/* MOBILE TOGGLE */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-theme-main" />
                ) : (
                  <Menu className="w-6 h-6 text-theme-main" />
                )}
              </button>
            </div>
          </div>


          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-theme animate-fade-in bg-theme-nav">
              {/* Tank Builder - Prominent on Mobile */}
              <Link
                to="/tank-builder"
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 text-base font-bold rounded-lg mb-3 transition-all relative overflow-hidden group
                  ${isTankBuilderActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:shadow-lg'
                  }
                `}
              >
                <BoxSelect className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Tank Builder</span>
                {!isTankBuilderActive && (
                  <Sparkles className="w-4 h-4 ml-auto relative z-10 animate-pulse" />
                )}
              </Link>

              <div className="h-px bg-theme my-2"></div>

              {navItems.map(item => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 text-base font-bold rounded-lg mb-1 transition-colors
                      ${active 
                        ? 'bg-indigo-50 dark:bg-stone-800 text-indigo-700 dark:text-white' 
                        : 'text-theme-muted hover:bg-black/5 dark:hover:bg-white/5'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}
        </nav>
      </header>


      <main className="flex-1">
        {children}
      </main>


      <footer className="bg-theme-nav border-t border-theme mt-auto transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-theme-muted">© 2026 AquaGuide. Not advice. Consult a vet for sick fish.</p>
            <div className="flex gap-6">
              <Link to="/about" className="text-sm text-theme-muted hover:text-indigo-600 transition-colors">About</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
