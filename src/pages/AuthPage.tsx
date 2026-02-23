import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Mail, Lock, User, ArrowRight, Loader2, AlertCircle, CheckCircle2, Fish, Eye, EyeOff, Droplets, LayoutDashboard, Bell, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEOHead } from '../components/seo/SEOHead';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        setSuccess('Welcome back! Redirecting...');
        setTimeout(() => navigate('/dashboard'), 1000);
      } else {
        // Sign up
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username: username,
            },
          },
        });
        if (error) throw error;
        
        // Check if user is immediately confirmed (email confirmation disabled)
        if (data.user && data.session) {
          // User is auto-confirmed and logged in
          setSuccess('Account created! Redirecting to dashboard...');
          setTimeout(() => navigate('/dashboard'), 1000);
        } else if (data.user && !data.session) {
          // Email confirmation is required
          setSuccess('Account created! Please check your email for verification.');
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setError(null);
    setSuccess(null);
  };

  const features = [
    {
      icon: LayoutDashboard,
      title: 'Personal Dashboard',
      description: 'Track all your aquariums in one place'
    },
    {
      icon: Droplets,
      title: 'Tank Management',
      description: 'Monitor water parameters and schedules'
    },
    {
      icon: Bell,
      title: 'Smart Reminders',
      description: 'Never miss water changes or feeding times'
    },
    {
      icon: Fish,
      title: 'Species Database',
      description: 'Access detailed care guides for 1000+ species'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950 dark:via-slate-950 dark:to-gray-950 px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      <SEOHead title={isLogin ? 'Login - AquaGuide' : 'Register - AquaGuide'} description="Access your personal aquarium dashboard." />
      
      {/* Modern Animated Background - Subtle Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Orb - Top Left */}
        <motion.div 
          animate={{ 
            x: [0, 40, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[15%] w-[70%] h-[70%] bg-gradient-to-br from-indigo-400/30 via-purple-400/20 to-transparent dark:from-indigo-600/20 dark:via-purple-600/10 rounded-full blur-3xl"
        />
        
        {/* Medium Gradient Orb - Bottom Right */}
        <motion.div 
          animate={{ 
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute -bottom-[20%] -right-[15%] w-[65%] h-[65%] bg-gradient-to-tl from-cyan-400/30 via-blue-400/20 to-transparent dark:from-cyan-600/20 dark:via-blue-600/10 rounded-full blur-3xl"
        />
        
        {/* Small Accent Orb - Center */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 10 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-gradient-to-br from-purple-400/20 via-pink-400/10 to-transparent dark:from-purple-600/10 dark:via-pink-600/5 rounded-full blur-3xl"
        />
      </div>

      {/* Main Container */}
      <div className="flex gap-8 items-center max-w-6xl w-full relative z-10">
        {/* Left Side - Auth Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-md w-full"
        >
          {/* Logo & Header */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl shadow-indigo-500/30 mb-6"
            >
              <Fish className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-2">
              AquaGuide
            </h1>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Your Personal Aquarium Manager
            </p>
          </motion.div>

          {/* Main Auth Card */}
          <motion.div 
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-800/50 p-8 space-y-6"
          >
            {/* Toggle Tabs - FIXED: Proper active states */}
            <div className="relative flex bg-gray-100 dark:bg-gray-800/50 p-1.5 rounded-2xl">
              <motion.div
                layout
                layoutId="authTab"
                initial={false}
                animate={{ x: isLogin ? 0 : '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-y-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg"
              />
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`relative flex-1 py-3 text-sm font-bold rounded-xl transition-colors duration-200 z-10 ${
                  isLogin ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`relative flex-1 py-3 text-sm font-bold rounded-xl transition-colors duration-200 z-10 ${
                  !isLogin ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Welcome Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login' : 'signup'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center py-2"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {isLogin ? 'Welcome Back!' : 'Create Account'}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isLogin ? 'Enter your credentials to continue' : 'Sign up to start your aquarium journey'}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleAuth}>
              {/* Username Field (Sign Up Only) */}
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginBottom: 20 }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Username</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-indigo-500 transition-colors" />
                      </div>
                      <input
                        type="text"
                        required={!isLogin}
                        className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                        placeholder="Choose a username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="block w-full pl-12 pr-12 py-3.5 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-xl p-4 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-red-700 dark:text-red-300">{error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success Message */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl p-4 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">{success}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="group relative w-full flex justify-center items-center gap-2 py-4 px-6 border-2 border-transparent text-base font-bold rounded-xl text-white bg-black dark:bg-white dark:text-black focus:outline-none focus:ring-4 focus:ring-indigo-500/50 shadow-xl hover:shadow-2xl transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
              >
                {/* Shimmer Effect */}
                {!loading && (
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 dark:via-black/20 to-transparent" />
                )}
                
                {/* Content */}
                <span className="relative flex items-center gap-2">
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg">{isLogin ? 'Sign In' : 'Create Account'}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                    </>
                  )}
                </span>
              </motion.button>

              {/* Alternative: Continue as Guest */}
              <button
                type="button"
                onClick={() => navigate('/')}
                className="w-full py-3 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Continue as Guest
              </button>
            </form>

            {/* Footer Links */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 leading-relaxed">
                By continuing, you agree to our{' '}
                <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">Privacy Policy</a>
              </p>
            </div>
          </motion.div>

          {/* Switch Auth Mode */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                onClick={switchMode}
                className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline transition-colors"
              >
                {isLogin ? 'Sign up for free' : 'Sign in instead'}
              </button>
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side - Features Panel (Sign Up Only) */}
        <AnimatePresence>
          {!isLogin && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="hidden lg:block max-w-md w-full"
            >
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-800/50 p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4"
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Hello, Friend!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Join AquaGuide and unlock powerful features
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-5">
                  {features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="mt-8 text-center"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full border border-indigo-500/20">
                    <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      Free Forever
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthPage;
