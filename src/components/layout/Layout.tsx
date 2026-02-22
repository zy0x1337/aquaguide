import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets, Stethoscope, Info, Fish, Leaf, BoxSelect, Home, Scale, LogIn, LogOut, User, Crown, LayoutDashboard, Waves, BookOpen } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useComparison } from '../../contexts/ComparisonContext';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { comparedSpecies } = useComparison();
  const { user, signOut } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()
        .then(({ data }) => {
          setIsAdmin(data?.role === 'admin');
        });
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  const isActive = (path: string) => 
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/species', label: 'Fish', icon: Fish },
    { path: '/plants', label: 'Plants', icon: Leaf },
    { path: '/habitats', label: 'Habitats', icon: Waves },
    { path: '/knowledge', label: 'Knowledge', icon: BookOpen },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, requireAuth: true },
    { path: '/diseases', label: 'Diseases', icon: Stethoscope },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* LEFT: LOGO */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300 group-hover:scale-105">
                <Droplets className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                Aqua<span className="text-indigo-600 dark:text-indigo-400">Guide</span>
              </span>
            </Link>

            {/* CENTER: MAIN NAVIGATION (Desktop) */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 px-1.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              {navItems.map(item => {
                if (item.requireAuth && !user) return null;
                
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                      active 
                        ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-700/60'
                    }`}
                  >
                    <Icon className="w-4 h-4" strokeWidth={2.5} />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* RIGHT: ACTIONS */}
            <div className="flex items-center gap-2">
              {/* Compare Button */}
              {comparedSpecies.length > 0 && (
                <Link
                  to="/compare"
                  className="relative p-2 rounded-xl bg-emerald-500 dark:bg-emerald-600 text-white hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all hover:scale-105 shadow-sm"
                  title="Compare Species"
                >
                  <Scale className="w-5 h-5" strokeWidth={2.5} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                    {comparedSpecies.length}
                  </span>
                </Link>
              )}

              {/* Tank Builder (Desktop) */}
              <Link
                to="/tank-builder"
                className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                  isActive('/tank-builder')
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-indigo-500 text-white hover:bg-indigo-600 shadow-sm hover:shadow-lg hover:scale-105'
                }`}
              >
                <BoxSelect className="w-4 h-4" strokeWidth={2.5} />
                Builder
              </Link>

              {/* Admin Link (Desktop) */}
              {isAdmin && (
                <Link
                  to="/admin"
                  className={`hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isActive('/admin')
                      ? 'bg-amber-500 text-white shadow-lg'
                      : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-900 hover:scale-105'
                  }`}
                  title="Admin Panel"
                >
                  <Crown className="w-4 h-4" strokeWidth={2.5} />
                </Link>
              )}

              {/* Auth (Desktop) */}
              <div className="hidden md:flex items-center gap-2">
                {user ? (
                  <>
                    <div className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hidden xl:block border border-slate-200 dark:border-slate-700">
                      {user.email?.split('@')[0]}
                    </div>
                    <button
                      onClick={() => signOut()}
                      className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all hover:scale-105"
                      title="Sign Out"
                    >
                      <LogOut className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:scale-105"
                  >
                    <LogIn className="w-4 h-4" strokeWidth={2.5} />
                    Sign In
                  </Link>
                )}
              </div>

              {/* Theme Toggle */}
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
              <ThemeToggle />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-700 dark:text-slate-300" strokeWidth={2.5} />
                ) : (
                  <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 animate-in slide-in-from-top-2 duration-200">
              {/* Auth (Mobile) */}
              <div className="mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                {user ? (
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-950 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        <User className="w-5 h-5" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">{user.email?.split('@')[0]}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-500">Member</div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        signOut();
                        setMobileMenuOpen(false);
                      }}
                      className="p-2 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                    >
                      <LogOut className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    <LogIn className="w-5 h-5" strokeWidth={2.5} />
                    Sign In
                  </Link>
                )}
              </div>

              {/* Special Actions (Mobile) */}
              <div className="space-y-2 mb-4">
                <Link
                  to="/tank-builder"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                    isActive('/tank-builder')
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950/50'
                  }`}
                >
                  <BoxSelect className="w-5 h-5" strokeWidth={2.5} />
                  Tank Builder
                </Link>

                {isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                      isActive('/admin')
                        ? 'bg-amber-500 text-white shadow-lg'
                        : 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-950/50'
                    }`}
                  >
                    <Crown className="w-5 h-5" strokeWidth={2.5} />
                    Admin Panel
                  </Link>
                )}
              </div>

              {/* Main Nav (Mobile) */}
              <div className="space-y-1">
                {navItems.map(item => {
                  if (item.requireAuth && !user) return null;
                  
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                        active
                          ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={2.5} />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-500">© 2026 AquaGuide. Not advice. Consult a vet for sick fish.</p>
            <div className="flex gap-6">
              <Link to="/about" className="text-sm text-slate-500 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">About</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
