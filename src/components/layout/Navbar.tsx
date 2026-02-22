import { Link, useLocation } from 'react-router-dom';
import { Droplets, Fish, Leaf, Stethoscope, BoxSelect, Home, LayoutDashboard, Waves, BookOpen } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';
import { useAuth } from '../../lib/supabase/auth';

export const Navbar = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [_isMobileMenuOpen, _setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/species', label: 'Fish', icon: Fish },
    { path: '/plants', label: 'Plants', icon: Leaf },
    { path: '/habitats', label: 'Habitats', icon: Waves },
    { path: '/tank-builder', label: 'Builder', icon: BoxSelect },
    ...(user ? [{ path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard }] : []),
    { path: '/diseases', label: 'Diseases', icon: Stethoscope },
    { path: '/about', label: 'About', icon: BookOpen },
  ];

  return (
    <>
      {/* 🖥️ DESKTOP NAV */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 h-16 items-center justify-between px-6 transition-all duration-300 shadow-sm">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300 group-hover:scale-105">
            <Droplets className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          
          <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
            Aqua<span className="text-indigo-600 dark:text-indigo-400">Guide</span>
          </span>
        </Link>

        {/* CENTER LINKS */}
        <div className="flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 px-1.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          {navLinks.slice(0, 6).map(link => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                  isActive(link.path)
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-700/60'
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={2.5} />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          {!user && (
            <Link
              to="/login"
              className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-indigo-500/30 transition-all text-sm hover:scale-105"
            >
              Sign In
            </Link>
          )}
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
          <ThemeToggle />
        </div>
      </nav>

      {/* 📱 MOBILE TOP BAR */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 h-14 flex items-center px-4 justify-between transition-all duration-300 shadow-sm">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
            <Droplets className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
            Aqua<span className="text-indigo-600 dark:text-indigo-400">Guide</span>
          </span>
        </Link>
        
        <ThemeToggle />
      </nav>

      {/* 📱 MOBILE BOTTOM NAV */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 pb-safe pt-2 px-2 flex justify-around items-center shadow-[0_-2px_20px_rgba(0,0,0,0.03)] dark:shadow-none transition-all duration-300">
        {navLinks.slice(0, 5).map(link => {
          const Icon = link.icon;
          return (
            <Link 
              key={link.path}
              to={link.path} 
              className={`flex flex-col items-center justify-center w-full py-2 rounded-xl transition-all active:scale-95 ${
                isActive(link.path) ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              <div className={`p-2 rounded-xl transition-all duration-200 ${
                isActive(link.path) ? 'bg-indigo-50 dark:bg-indigo-500/10 -translate-y-0.5' : ''
              }`}>
                <Icon className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className={`text-[10px] font-bold mt-0.5 transition-all ${
                isActive(link.path) ? 'opacity-100' : 'opacity-70'
              }`}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};