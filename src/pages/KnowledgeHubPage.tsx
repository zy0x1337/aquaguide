import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight, Sparkles, Filter, Award, TrendingUp, Users, Zap, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import { allKnowledgeArticles } from '../data/knowledge';
import { KnowledgeArticle } from '../types/knowledge';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';

const KnowledgeHubPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Topics', color: 'from-indigo-500 to-purple-500', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'chemistry', label: 'Water Chemistry', color: 'from-blue-500 to-cyan-500', icon: <Droplets className="w-4 h-4" /> },
    { id: 'biology', label: 'Biology', color: 'from-green-500 to-emerald-500', icon: <Users className="w-4 h-4" /> },
    { id: 'equipment', label: 'Equipment', color: 'from-purple-500 to-pink-500', icon: <Award className="w-4 h-4" /> },
    { id: 'maintenance', label: 'Maintenance', color: 'from-orange-500 to-red-500', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'diseases', label: 'Diseases', color: 'from-red-500 to-rose-500', icon: <Zap className="w-4 h-4" /> },
    { id: 'plants', label: 'Plants', color: 'from-emerald-500 to-teal-500', icon: <Sparkles className="w-4 h-4" /> }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? allKnowledgeArticles 
    : allKnowledgeArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = allKnowledgeArticles[0];
  const totalReadingTime = allKnowledgeArticles.reduce((sum, article) => sum + article.readingTime, 0);

  return (
    <PageTransition>
      <SEOHead 
        title="Knowledge Hub - AquaGuide"
        description="Comprehensive guides on aquarium care, water chemistry, equipment, and more. Learn at your own pace with expert articles."
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950 dark:via-slate-950 dark:to-gray-950 pb-20">
        
        {/* Modern Hero Header */}
        <header className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-950 text-white pt-20 pb-32">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          {/* Gradient Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-400/30 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
              className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-400/30 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Expert Knowledge Base
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
            >
              Master Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
                Aquarium Skills
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Comprehensive guides on water chemistry, equipment, biology, and care. Learn from expert-written articles.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6"
            >
              <StatCard icon={<BookOpen />} value={allKnowledgeArticles.length} label="Articles" color="from-indigo-500 to-purple-500" />
              <StatCard icon={<Clock />} value={`${totalReadingTime}min`} label="Total Content" color="from-purple-500 to-pink-500" />
              <StatCard icon={<Award />} value="7" label="Categories" color="from-cyan-500 to-blue-500" />
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
          
          {/* Featured Article */}
          {featuredArticle && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">Featured Article</h2>
              </div>
              <FeaturedArticleCard article={featuredArticle} />
            </motion.section>
          )}

          {/* Category Filter */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Filter by Category</span>
              </div>
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-bold uppercase tracking-wider transition-colors"
                >
                  Clear filter
                </button>
              )}
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all duration-200 text-sm ${
                    selectedCategory === cat.id
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg scale-105`
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.section>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-gray-100 dark:bg-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try selecting a different category</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredArticles.map((article, idx) => (
                <ArticleCard key={article.id} article={article} index={idx} />
              ))}
            </motion.div>
          )}
        </main>

      </div>
    </PageTransition>
  );
};

// Stat Card Component
const StatCard = ({ icon, value, label, color }: any) => (
  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 shadow-lg">
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white`}>
      {icon}
    </div>
    <div className="text-left">
      <div className="text-2xl md:text-3xl font-black text-white">{value}</div>
      <div className="text-xs font-bold text-indigo-100 uppercase tracking-wider">{label}</div>
    </div>
  </div>
);

// Featured Article Card
const FeaturedArticleCard = ({ article }: { article: KnowledgeArticle }) => {
  const categoryColors: Record<string, string> = {
    chemistry: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    biology: 'bg-gradient-to-r from-green-500 to-emerald-500',
    equipment: 'bg-gradient-to-r from-purple-500 to-pink-500',
    maintenance: 'bg-gradient-to-r from-orange-500 to-red-500',
    diseases: 'bg-gradient-to-r from-red-500 to-rose-500',
    plants: 'bg-gradient-to-r from-emerald-500 to-teal-500'
  };

  return (
    <Link
      to={`/knowledge/${article.slug}`}
      className="group block bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="md:flex">
        {article.visuals?.headerImage && (
          <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
            <img
              src={article.visuals.headerImage}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                Featured
              </span>
            </div>
          </div>
        )}
        <div className="md:w-3/5 p-8 flex flex-col justify-center">
          <div className="flex gap-2 mb-4">
            <span className={`text-xs px-3 py-1.5 rounded-xl font-bold capitalize text-white ${categoryColors[article.category]}`}>
              {article.category}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
            {article.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed line-clamp-2">
            {article.summary}
          </p>
          <div className="flex items-center gap-5 text-sm text-gray-500 dark:text-gray-400 mb-5">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">{article.readingTime} min</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="font-semibold">{article.content.sections.length} sections</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm group-hover:gap-3 transition-all">
            <span>Read Full Article</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
};

// Article Card
const ArticleCard = ({ article, index }: { article: KnowledgeArticle; index: number }) => {
  const difficultyColors = {
    beginner: 'bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-950/50 dark:text-emerald-400 dark:border-emerald-800',
    intermediate: 'bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-950/50 dark:text-amber-400 dark:border-amber-800',
    advanced: 'bg-rose-100 text-rose-700 border-rose-300 dark:bg-rose-950/50 dark:text-rose-400 dark:border-rose-800'
  };

  const categoryColors: Record<string, string> = {
    chemistry: 'from-blue-500 to-cyan-500',
    biology: 'from-green-500 to-emerald-500',
    equipment: 'from-purple-500 to-pink-500',
    maintenance: 'from-orange-500 to-red-500',
    diseases: 'from-red-500 to-rose-500',
    plants: 'from-emerald-500 to-teal-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        to={`/knowledge/${article.slug}`}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${categoryColors[article.category]} flex items-center justify-center shrink-0 text-white shadow-lg`}>
            <BookOpen className="w-7 h-7" />
          </div>
          <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${difficultyColors[article.difficulty]}`}>
            {article.difficulty}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
          {article.title}
        </h3>

        {/* Summary */}
        <div className="mb-4 flex-grow">
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
            {article.summary}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">{article.readingTime}min</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span className="font-semibold">{article.content.sections.length}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Read</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default KnowledgeHubPage;