import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets, Stethoscope, Info, Fish, Leaf, BoxSelect, Home, Scale, LogOut, User, Crown, Waves, BookOpen, ArrowRight, Settings, LayoutDashboard, ChevronDown, Heart } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useComparison } from '../../contexts/ComparisonContext';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const location = useLocation();
  const { comparedSpecies } = useComparison();
  const { user, signOut } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user) {
      // Load role and avatar from profiles
      supabase
        .from('profiles')
        .select('role, avatar_url')
        .eq('id', user.id)
        .single()
        .then(({ data }) => {
          setIsAdmin(data?.role === 'admin');
          setAvatarUrl(data?.avatar_url || null);
        });
    } else {
      setIsAdmin(false);
      setAvatarUrl(null);
    }
  }, [user]);

  // Listen for avatar updates
  useEffect(() => {
    const handleAvatarUpdate = () => {
      if (user) {
        supabase
          .from('profiles')
          .select('avatar_url')
          .eq('id', user.id)
          .single()
          .then(({ data }) => {
            setAvatarUrl(data?.avatar_url || null);
          });
      }
    };

    window.addEventListener('avatar-updated', handleAvatarUpdate);
    return () => window.removeEventListener('avatar-updated', handleAvatarUpdate);
  }, [user]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };

    if (profileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileDropdownOpen]);

  const isActive = (path: string) => 
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/species', label: 'Fish', icon: Fish },
    { path: '/plants', label: 'Plants', icon: Leaf },
    { path: '/habitats', label: 'Habitats', icon: Waves },
    { path: '/knowledge', label: 'Knowledge', icon: BookOpen },
    { path: '/diseases', label: 'Diseases', icon: Stethoscope },
    { path: '/about', label: 'About', icon: Info },
  ];

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user?.email) return 'U';
    const email = user.email.split('@')[0];
    return email.slice(0, 2).toUpperCase();
  };

  const handleSignOut = () => {
    signOut();
    setProfileDropdownOpen(false);
  };

  // Avatar Component
  const AvatarDisplay = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) => {
    const sizeClasses = {
      sm: 'w-8 h-8 text-xs',
      md: 'w-9 h-9 text-sm',
      lg: 'w-10 h-10 text-base'
    };

    if (avatarUrl) {
      return (
        <img
          src={avatarUrl}
          alt="Avatar"
          className={`${sizeClasses[size]} rounded-full object-cover shadow-sm border-2 border-white dark:border-slate-800 ${className}`}
        />
      );
    }

    return (
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold shadow-sm border-2 border-white dark:border-slate-800 ${className}`}>
        {getUserInitials()}
      </div>
    );
  };

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
            <div className="flex items-center gap-3">
              {/* Compare Button */}
              {comparedSpecies.length > 0 && (
                <Link
                  to="/compare"
                  className="relative p-2 rounded-lg bg-emerald-500 dark:bg-emerald-600 text-white hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all hover:scale-105 shadow-sm"
                  title="Compare Species"
                >
                  <Scale className="w-5 h-5" strokeWidth={2.5} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                    {comparedSpecies.length}
                  </span>
                </Link>
              )}

              {/* Tank Builder (Desktop) - Vercel Style */}
              <Link
                to="/tank-builder"
                className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive('/tank-builder')
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm hover:shadow-md'
                }`}
              >
                <BoxSelect className="w-4 h-4" strokeWidth={2.5} />
                Builder
              </Link>

              {/* Admin Link (Desktop) - Vercel Style */}
              {isAdmin && (
                <Link
                  to="/admin"
                  className={`hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive('/admin')
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900 border border-amber-200 dark:border-amber-800'
                  }`}
                  title="Admin Panel"
                >
                  <Crown className="w-4 h-4" strokeWidth={2.5} />
                </Link>
              )}

              {/* Auth (Desktop) - Purple Hover Text */}
              <div className="hidden md:flex items-center gap-3">
                {user ? (
                  <div className="relative" ref={dropdownRef}>
                    {/* User Avatar Button with Dropdown */}
                    <button
                      onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                      className="group relative flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    >
                      <AvatarDisplay size="md" />
                      <ChevronDown className={`w-4 h-4 text-slate-600 dark:text-slate-400 transition-transform ${
                        profileDropdownOpen ? 'rotate-180' : ''
                      }`} strokeWidth={2.5} />
                    </button>

                    {/* Dropdown Menu */}
                    {profileDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* User Info Header */}
                        <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                          <div className="flex items-center gap-3">
                            <AvatarDisplay size="lg" />
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                                {user.email?.split('@')[0]}
                              </div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div className="py-2">
                          <Link
                            to="/dashboard"
                            onClick={() => setProfileDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          >
                            <LayoutDashboard className="w-4 h-4" strokeWidth={2.5} />
                            Dashboard
                          </Link>
                          <Link
                            to="/favorites"
                            onClick={() => setProfileDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          >
                            <Heart className="w-4 h-4" strokeWidth={2.5} />
                            Favorites
                          </Link>
                          <Link
                            to="/settings"
                            onClick={() => setProfileDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          >
                            <Settings className="w-4 h-4" strokeWidth={2.5} />
                            Settings
                          </Link>
                          <Link
                            to="/profile"
                            onClick={() => setProfileDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          >
                            <User className="w-4 h-4" strokeWidth={2.5} />
                            Profile
                          </Link>
                        </div>

                        {/* Sign Out */}
                        <div className="border-t border-slate-200 dark:border-slate-800 py-2">
                          <button
                            onClick={handleSignOut}
                            className="flex items-center gap-3 w-full px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                          >
                            <LogOut className="w-4 h-4" strokeWidth={2.5} />
                            Sign Out
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to="/auth"
                    className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 bg-black dark:bg-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 dark:hover:from-purple-500 dark:hover:to-indigo-500 text-white dark:text-black dark:hover:text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md border border-black dark:border-white hover:border-transparent overflow-hidden"
                  >
                    <span className="relative flex items-center gap-1.5">
                      Sign In
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>
                  </Link>
                )}
              </div>

              {/* Theme Toggle */}
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
              <ThemeToggle />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
                  <div className="space-y-2">
                    {/* User Info */}
                    <div className="flex items-center gap-3 px-2">
                      <AvatarDisplay size="lg" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-slate-900 dark:text-white truncate">{user.email?.split('@')[0]}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-500 truncate">{user.email}</div>
                      </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="space-y-1">
                      <Link
                        to="/dashboard"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4" strokeWidth={2.5} />
                        Dashboard
                      </Link>
                      <Link
                        to="/favorites"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <Heart className="w-4 h-4" strokeWidth={2.5} />
                        Favorites
                      </Link>
                      <Link
                        to="/settings"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <Settings className="w-4 h-4" strokeWidth={2.5} />
                        Settings
                      </Link>
                      <Link
                        to="/profile"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <User className="w-4 h-4" strokeWidth={2.5} />
                        Profile
                      </Link>
                      <button
                        onClick={() => {
                          signOut();
                          setMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" strokeWidth={2.5} />
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/auth"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-black dark:bg-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 dark:hover:from-purple-500 dark:hover:to-indigo-500 text-white dark:text-black dark:hover:text-white rounded-lg text-sm font-medium transition-all shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      Sign In
                      <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                  </Link>
                )}
              </div>

              {/* Special Actions (Mobile) */}
              <div className="space-y-2 mb-4">
                <Link
                  to="/tank-builder"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all ${
                    isActive('/tank-builder')
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <BoxSelect className="w-5 h-5" strokeWidth={2.5} />
                  Tank Builder
                </Link>

                {isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all ${
                      isActive('/admin')
                        ? 'bg-amber-500 text-white shadow-sm'
                        : 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900 border border-amber-200 dark:border-amber-800'
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
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-all ${
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
