// src/pages/NotFoundPage.tsx

import { Link } from 'react-router-dom';
import { Home, Search, Fish, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/20 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <div className="relative">
            <div className="text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 leading-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Fish className="w-24 h-24 text-indigo-400 dark:text-indigo-600 opacity-20" />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-10"
        >
          Looks like this species swam away! The page you're looking for doesn't exist.
        </motion.p>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          <QuickLink to="/" icon={<Home />} label="Home" />
          <QuickLink to="/species" icon={<Fish />} label="Species" />
          <QuickLink to="/diseases" icon={<Microscope />} label="Diseases" />
          <QuickLink to="/plants" icon={<Search />} label="Plants" />
        </motion.div>

        {/* Main Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold rounded-xl transition-colors shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Fun Fact */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xs text-gray-500 dark:text-gray-400 mt-12 italic"
        >
          💡 Did you know? Some fish species can navigate using the Earth's magnetic field!
        </motion.p>
      </motion.div>
    </div>
  );
};

const QuickLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
  <Link
    to={to}
    className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 rounded-xl transition-all group"
  >
    <div className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
      {icon}
    </div>
    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
      {label}
    </span>
  </Link>
);

export default NotFoundPage;
