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
    { id: 'all', label: 'All Topics', color: 'from-indigo-500 to-purple-500', text: 'text-indigo-600 dark:text-indigo-400', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'chemistry', label: 'Water Chemistry', color: 'from-blue-500 to-cyan-500', text: 'text-blue-600 dark:text-blue-400', icon: <Droplets className="w-4 h-4" /> },
    { id: 'biology', label: 'Biology', color: 'from-green-500 to-emerald-500', text: 'text-emerald-600 dark:text-emerald-400', icon: <Users className="w-4 h-4" /> },
    { id: 'equipment', label: 'Equipment', color: 'from-purple-500 to-pink-500', text: 'text-purple-600 dark:text-purple-400', icon: <Award className="w-4 h-4" /> },
    { id: 'maintenance', label: 'Maintenance', color: 'from-orange-500 to-red-500', text: 'text-orange-600 dark:text-orange-400', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'diseases', label: 'Diseases', color: 'from-red-500 to-rose-500', text: 'text-rose-600 dark:text-rose-400', icon: <Zap className="w-4 h-4" /> },
    { id: 'plants', label: 'Plants', color: 'from-emerald-500 to-teal-500', text: 'text-teal-600 dark:text-teal-400', icon: <Sparkles className="w-4 h-4" /> }
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

      <div className="min-h-screen bg-white dark:bg-slate-950 pb-20">
        
        {/* Cleaner, Light/Dark Mode Responsive Header */}
        <header className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 px-6 overflow-hidden border-b border-slate-200 dark:border-slate-800">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950/20" />
          
          {/* Animated gradient orbs */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.2, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"
          />

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Expert Knowledge Base
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white"
            >
              Master Aquarium <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
                Knowledge & Skills
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Comprehensive guides on water chemistry, equipment, biology, and care. Learn from expert-written articles designed for all experience levels.
            </motion.p>

            {/* Clean Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 md:gap-8"
            >
              <div className="flex flex-col items-center p-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-3">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">{allKnowledgeArticles.length}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Articles</div>
              </div>

              <div className="w-px h-16 bg-slate-200 dark:bg-slate-800 hidden sm:block self-center"></div>

              <div className="flex flex-col items-center p-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">{totalReadingTime}m</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Reading Time</div>
              </div>

              <div className="w-px h-16 bg-slate-200 dark:bg-slate-800 hidden sm:block self-center"></div>

              <div className="flex flex-col items-center p-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">7</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Categories</div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-12 relative z-20">
          
          {/* Featured Article */}
          {featuredArticle && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Featured Article</h2>
              </div>
              <FeaturedArticleCard article={featuredArticle} />
            </motion.section>
          )}

          {/* Category Filter */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Categories</span>
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
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold whitespace-nowrap transition-all duration-200 text-sm border ${
                    selectedCategory === cat.id
                      ? `bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-md`
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <span className={selectedCategory === cat.id ? (document.documentElement.classList.contains('dark') ? 'text-slate-900' : 'text-white') : cat.text}>
                    {cat.icon}
                  </span>
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.section>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-24 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
              <div className="w-16 h-16 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-400">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-slate-500 dark:text-slate-400">Try selecting a different category</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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

// Featured Article Card
const FeaturedArticleCard = ({ article }: { article: KnowledgeArticle }) => {
  const categoryColors: Record<string, string> = {
    chemistry: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    biology: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
    equipment: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
    maintenance: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
    diseases: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400',
    plants: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400'
  };

  return (
    <Link
      to={`/knowledge/${article.slug}`}
      className="group block bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="md:flex h-full">
        {article.visuals?.headerImage && (
          <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
            <img
              src={article.visuals.headerImage}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                Featured
              </span>
            </div>
          </div>
        )}
        <div className="md:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex gap-2 mb-4">
            <span className={`text-xs px-3 py-1.5 rounded-lg font-bold capitalize ${categoryColors[article.category] || 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}`}>
              {article.category}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
            {article.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg mb-8 leading-relaxed line-clamp-3">
            {article.summary}
          </p>
          <div className="flex items-center gap-6 mt-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Clock className="w-4 h-4" />
              <span className="font-medium">{article.readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <BookOpen className="w-4 h-4" />
              <span className="font-medium">{article.content.sections.length} sections</span>
            </div>
            <div className="ml-auto flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Article Card
const ArticleCard = ({ article, index }: { article: KnowledgeArticle; index: number }) => {
  const difficultyColors = {
    beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20',
    intermediate: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20',
    advanced: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20'
  };

  const categoryStyles: Record<string, string> = {
    chemistry: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    biology: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    equipment: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    maintenance: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    diseases: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
    plants: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        to={`/knowledge/${article.slug}`}
        className="block bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-500/40 transition-all duration-300 group flex flex-col h-full"
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${categoryStyles[article.category] || 'bg-slate-100 text-slate-600'}`}>
            <BookOpen className="w-6 h-6" />
          </div>
          <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${difficultyColors[article.difficulty]}`}>
            {article.difficulty}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
          {article.title}
        </h3>

        {/* Summary */}
        <div className="mb-6 flex-grow">
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
            {article.summary}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTime}m</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{article.content.sections.length}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            <span>Read</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default KnowledgeHubPage;
