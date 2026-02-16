import { Link, useLocation } from 'react-router-dom';
import { Droplets, BookOpen, Fish, Leaf, Stethoscope, BoxSelect, Home, LayoutDashboard } from 'lucide-react';
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
    { path: '/tank-builder', label: 'Builder', icon: BoxSelect },
    ...(user ? [{ path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard }] : []),
    { path: '/diseases', label: 'Diseases', icon: Stethoscope },
    { path: '/about', label: 'About', icon: BookOpen },
  ];

  return (
    <>
      {/* 🖥️ DESKTOP NAV */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 
        bg-white/90 dark:bg-[#1c1917]/90 
        backdrop-blur-md 
        border-b border-stone-200/60 dark:border-stone-800 
        h-16 items-center justify-between px-6 transition-all duration-300"
      >
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <Droplets className="w-5 h-5 fill-white/20" />
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="text-xl font-black tracking-tighter leading-none text-stone-900 dark:text-white">
              Aqua<span className="text-indigo-600 dark:text-indigo-400">Guide</span>
            </span>
          </div>
        </Link>

        {/* CENTER LINKS (Pill Shape) */}
        <div className="flex items-center gap-1 bg-stone-100/50 dark:bg-stone-800/50 p-1.5 rounded-full border border-stone-200/50 dark:border-stone-700/30">
          {navLinks.map(link => (
            <Link 
              key={link.path}
              to={link.path}
              className={`
                px-5 py-1.5 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2
                ${isActive(link.path)
                  ? 'bg-white dark:bg-stone-700 text-indigo-600 dark:text-white shadow-sm' 
                  : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-white/60 dark:hover:bg-stone-700/50'
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          {user && (
            <Link
              to="/my-tanks"
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
            >
              My Tanks
            </Link>
          )}
          {!user && (
            <Link
              to="/login"
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
            >
              Sign In
            </Link>
          )}
          <div className="h-8 w-px bg-stone-200 dark:bg-stone-800"></div>
          <ThemeToggle />
        </div>
      </nav>

      {/* 📱 MOBILE TOP BAR */}
      <nav className="md:hidden fixed top-0 w-full z-50 
        bg-white/95 dark:bg-[#1c1917]/95 
        backdrop-blur-md 
        border-b border-stone-100 dark:border-stone-800 
        h-14 flex items-center px-4 justify-between transition-colors duration-300 shadow-sm"
      >
         <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-lg flex items-center justify-center text-white shadow-md">
            <Droplets className="w-4 h-4 fill-white/20" />
          </div>
          <span className="text-lg font-black tracking-tight text-stone-900 dark:text-white">
            Aqua<span className="text-indigo-600 dark:text-indigo-400">Guide</span>
          </span>
        </Link>
        
        <ThemeToggle />
      </nav>

      {/* 📱 MOBILE BOTTOM NAV */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-white dark:bg-[#1c1917] border-t border-stone-200 dark:border-stone-800 pb-safe pt-1 px-1 flex justify-around items-center shadow-[0_-5px_30px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors duration-300">
        {navLinks.slice(0, 6).map(link => (
          <Link 
            key={link.path}
            to={link.path} 
            className={`flex flex-col items-center justify-center w-full py-2 rounded-xl transition-all active:scale-95 ${
              isActive(link.path) ? 'text-indigo-600 dark:text-indigo-400' : 'text-stone-400 dark:text-stone-500'
            }`}
          >
            <div className={`p-1 rounded-full transition-all duration-300 ${
              isActive(link.path) ? 'bg-indigo-50 dark:bg-indigo-500/10 -translate-y-1' : ''
            }`}>
              <link.icon className="w-5 h-5" />
            </div>
            <span className={`text-[10px] font-bold mt-0.5 transition-opacity ${isActive(link.path) ? 'opacity-100' : 'opacity-80'}`}>
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
    </>
  );
};
