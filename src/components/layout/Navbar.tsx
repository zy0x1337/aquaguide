import { Link, useLocation } from 'react-router-dom';
import { Droplets, Fish, Leaf, Stethoscope, BoxSelect, Home, LayoutDashboard, Waves, BookOpen } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
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
    { path: '/diseases', label: 'Diseases', icon: Stethoscope },
    { path: '/about', label: 'About', icon: BookOpen },
  ];

  return (
    <>
      {/* 🖥️ DESKTOP NAV */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 h-16 items-center justify-between px-6 transition-all duration-300 shadow-sm">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-br from-coral-600 to-coral-500 dark:from-coral-500 dark:to-coral-400 rounded-xl flex items-center justify-center shadow-lg shadow-coral-500/20 dark:shadow-coral-400/20 group-hover:shadow-coral-500/40 dark:group-hover:shadow-coral-400/40 transition-all duration-300 group-hover:scale-105">
            <Droplets className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          
          <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
            Aqua<span className="text-coral-600 dark:text-coral-400">Guide</span>
          </span>
        </Link>

        {/* CENTER LINKS */}
        <div className="flex items-center gap-1 bg-gray-100/80 dark:bg-gray-800/80 px-1.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          {navLinks.slice(0, 6).map(link => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                  isActive(link.path)
                    ? 'bg-white dark:bg-gray-700 text-coral-600 dark:text-coral-400 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white/60 dark:hover:bg-gray-700/60'
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={2.5} />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* RIGHT ACTIONS - Vercel Style */}
        <div className="flex items-center gap-3">
          {user ? (
            // Dashboard Button (replaces old user button) - Vercel Style
            <Link
              to="/dashboard"
              className={`group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 overflow-hidden ${
                isActive('/dashboard')
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Shimmer effect on active */}
              {isActive('/dashboard') && (
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent" />
              )}
              <LayoutDashboard className="w-4 h-4 relative" strokeWidth={2.5} />
              <span className="relative">Dashboard</span>
            </Link>
          ) : (
            // Sign In Button - Vercel Style
            <Link
              to="/auth"
              className="group relative inline-flex items-center gap-2 px-5 py-2 bg-black dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-black font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md border border-black dark:border-white overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent" />
              <span className="relative">Sign In</span>
            </Link>
          )}
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>
          <ThemeToggle />
        </div>
      </nav>

      {/* 📱 MOBILE TOP BAR */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 h-14 flex items-center px-4 justify-between transition-all duration-300 shadow-sm">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-coral-600 to-coral-500 dark:from-coral-500 dark:to-coral-400 rounded-lg flex items-center justify-center shadow-md">
            <Droplets className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
            Aqua<span className="text-coral-600 dark:text-coral-400">Guide</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-2">
          {user && (
            <Link
              to="/dashboard"
              className={`p-2 rounded-lg transition-all ${
                isActive('/dashboard')
                  ? 'bg-coral-50 dark:bg-coral-500/10 text-coral-600 dark:text-coral-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" strokeWidth={2.5} />
            </Link>
          )}
          <ThemeToggle />
        </div>
      </nav>

      {/* 📱 MOBILE BOTTOM NAV */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 px-2 flex justify-around items-center shadow-[0_-2px_20px_rgba(0,0,0,0.03)] dark:shadow-none transition-all duration-300">
        {navLinks.slice(0, 5).map(link => {
          const Icon = link.icon;
          return (
            <Link 
              key={link.path}
              to={link.path} 
              className={`flex flex-col items-center justify-center w-full py-2 rounded-xl transition-all active:scale-95 ${
                isActive(link.path) ? 'text-coral-600 dark:text-coral-400' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <div className={`p-2 rounded-xl transition-all duration-200 ${
                isActive(link.path) ? 'bg-coral-50 dark:bg-coral-500/10 -translate-y-0.5' : ''
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