import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Fish, Stethoscope, Info, Github } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Helper: Ist die aktuelle Route aktiv?
  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path);

  // Menu Items (DRY Principle: Don't Repeat Yourself)
  const navItems = [
    { path: '/', label: 'Database', icon: Fish },
    { path: '/diseases', label: 'Diseases', icon: Stethoscope },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      
      {/* --- HEADER / NAVBAR --- */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo / Brand */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                <Fish className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tight hidden sm:block">
                Aqua<span className="text-indigo-600">Guide</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(item => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all
                      ${active 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
              
              {/* GitHub Link (Optional) */}
              <a 
                href="https://github.com/yourusername/aquarium-guide" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 p-2 text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu (Dropdown) */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-100 animate-fade-in">
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
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'text-slate-700 hover:bg-slate-50'
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

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1">
        {children}
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2026 AquaGuide. Not advice. Consult a vet for sick fish.
            </p>
            <div className="flex gap-6">
              <Link to="/about" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                About
              </Link>
              <a href="https://github.com/yourusername/aquarium-guide" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                GitHub
              </a>
              <a href="mailto:your@email.com" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
