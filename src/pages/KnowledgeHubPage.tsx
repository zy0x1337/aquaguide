import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight, Sparkles, Filter, TrendingUp, Award, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { allKnowledgeArticles } from '../data/knowledge';
import { KnowledgeArticle } from '../types/knowledge';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';

const KnowledgeHubPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Topics', color: 'from-indigo-500 to-purple-500', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'chemistry', label: 'Water Chemistry', color: 'from-blue-500 to-cyan-500', icon: <Zap className="w-4 h-4" /> },
    { id: 'biology', label: 'Biology', color: 'from-green-500 to-emerald-500', icon: <Users className="w-4 h-4" /> },
    { id: 'equipment', label: 'Equipment', color: 'from-purple-500 to-pink-500', icon: <Award className="w-4 h-4" /> },
    { id: 'maintenance', label: 'Maintenance', color: 'from-orange-500 to-red-500', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'diseases', label: 'Diseases', color: 'from-red-500 to-rose-500', icon: <Award className="w-4 h-4" /> },
    { id: 'plants', label: 'Plants', color: 'from-emerald-500 to-teal-500', icon: <Sparkles className="w-4 h-4" /> }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? allKnowledgeArticles 
    : allKnowledgeArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = allKnowledgeArticles[0];
  const totalReadingTime = allKnowledgeArticles.reduce((sum, article) => sum + article.readingTime, 0);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <PageTransition>
      <SEOHead 
        title="Knowledge Hub - AquaGuide"
        description="Comprehensive guides on aquarium care, water chemistry, equipment, and more. Learn at your own pace with expert articles."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/20">
        
        {/* HERO SECTION - ENHANCED */}
        <section className="relative pt-20 sm:pt-28 pb-12 sm:pb-20 px-6 overflow-hidden">
          {/* Background with better gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-950 dark:to-purple-950/20" />
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(148 163 184 / 0.05) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }} />
          </div>
          
          {/* Animated gradient orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-8 border-2 border-purple-200/50 dark:border-purple-500/30 shadow-sm">
                <Sparkles className="w-4 h-4" />
                Expert Guides & Tutorials
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-800 to-purple-900 dark:from-white dark:via-indigo-200 dark:to-purple-200">
                  Knowledge Hub
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Dive deep into aquarium keeping with comprehensive, expert-written guides. 
                Master water chemistry, equipment, biology, and everything in between.
              </p>
            </motion.div>

            {/* Stats Cards - ENHANCED */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
            >
              <StatsCard icon={<BookOpen className="w-6 h-6" />} value={allKnowledgeArticles.length.toString()} label="Expert Articles" color="indigo" />
              <StatsCard icon={<Clock className="w-6 h-6" />} value={`${totalReadingTime}min`} label="Total Content" color="purple" />
              <StatsCard icon={<Award className="w-6 h-6" />} value="7" label="Categories" color="cyan" />
              <StatsCard icon={<TrendingUp className="w-6 h-6" />} value="100%" label="Free Access" color="emerald" />
            </motion.div>
          </div>
        </section>

        {/* FEATURED ARTICLE - REDESIGNED */}
        {featuredArticle && (
          <section className="px-6 pb-16">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white">Featured Article</h2>
              </div>
              <FeaturedArticleCard article={featuredArticle} />
            </div>
          </section>
        )}

        {/* CATEGORY FILTER - ENHANCED */}
        <section className="sticky top-16 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-y-2 border-slate-200 dark:border-slate-800 py-6 px-6 shadow-lg">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <Filter className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Filter by Category</span>
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="ml-auto text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-bold uppercase tracking-wider"
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
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold whitespace-nowrap transition-all duration-200 border-2 ${
                    selectedCategory === cat.id
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-xl scale-105 border-transparent`
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <span className={selectedCategory === cat.id ? 'scale-110' : ''}>{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLES GRID - IMPROVED SPACING */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-24">
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-slate-400 dark:text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">No articles found</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg">Try selecting a different category</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                    {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.label}
                    <span className="ml-4 text-xl font-bold text-slate-500 dark:text-slate-400">({filteredArticles.length})</span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {filteredArticles.map((article, idx) => (
                    <ArticleCard key={article.id} article={article} index={idx} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

// ENHANCED STATS CARD
const StatsCard = ({ icon, value, label, color }: { icon: React.ReactNode; value: string; label: string; color: string }) => {
  const colorClasses = {
    indigo: 'from-indigo-500 to-indigo-600',
    purple: 'from-purple-500 to-purple-600',
    cyan: 'from-cyan-500 to-cyan-600',
    emerald: 'from-emerald-500 to-emerald-600'
  }[color];

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">{value}</div>
      <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{label}</div>
    </div>
  );
};

// REDESIGNED FEATURED ARTICLE CARD
const FeaturedArticleCard = ({ article }: { article: KnowledgeArticle }) => {
  const categoryColors: Record<string, string> = {
    chemistry: 'bg-blue-500 text-white',
    biology: 'bg-green-500 text-white',
    equipment: 'bg-purple-500 text-white',
    maintenance: 'bg-orange-500 text-white',
    diseases: 'bg-red-500 text-white',
    plants: 'bg-emerald-500 text-white'
  };

  return (
    <Link
      to={`/knowledge/${article.slug}`}
      className="group block bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className="lg:flex">
        {article.visuals?.headerImage && (
          <div className="lg:w-5/12 h-80 lg:h-auto overflow-hidden relative">
            <img
              src={article.visuals.headerImage}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 rounded-full bg-amber-500 text-white text-xs font-black uppercase tracking-wider shadow-2xl">
                ✨ Featured
              </span>
            </div>
          </div>
        )}
        <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex gap-2 mb-5">
            <span className={`text-xs px-3 py-1.5 rounded-full font-bold capitalize ${categoryColors[article.category]} shadow-md`}>
              {article.category}
            </span>
          </div>
          <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
            {article.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-base lg:text-lg mb-8 leading-relaxed line-clamp-3">
            {article.summary}
          </p>
          <div className="flex items-center gap-8 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold">{article.readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span className="font-bold">{article.content.sections.length} sections</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-black text-lg group-hover:gap-5 transition-all">
            <span>Read Full Article</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

// REDESIGNED ARTICLE CARD
const ArticleCard = ({ article, index }: { article: KnowledgeArticle; index: number }) => {
  const difficultyColors = {
    beginner: 'text-emerald-700 bg-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800',
    intermediate: 'text-amber-700 bg-amber-100 dark:bg-amber-950/30 dark:text-amber-400 border-amber-300 dark:border-amber-800',
    advanced: 'text-rose-700 bg-rose-100 dark:bg-rose-950/30 dark:text-rose-400 border-rose-300 dark:border-rose-800'
  };

  const categoryColors: Record<string, string> = {
    chemistry: 'bg-blue-500 text-white border-blue-600',
    biology: 'bg-green-500 text-white border-green-600',
    equipment: 'bg-purple-500 text-white border-purple-600',
    maintenance: 'bg-orange-500 text-white border-orange-600',
    diseases: 'bg-red-500 text-white border-red-600',
    plants: 'bg-emerald-500 text-white border-emerald-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      <Link
        to={`/knowledge/${article.slug}`}
        className="group block bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
      >
        {/* Header Image */}
        {article.visuals?.headerImage && (
          <div className="h-56 overflow-hidden relative">
            <img
              src={article.visuals.headerImage}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
          </div>
        )}

        <div className="p-6 lg:p-7 flex-1 flex flex-col">
          {/* Category & Difficulty */}
          <div className="flex gap-2 mb-5">
            <span className={`text-xs px-3 py-1.5 rounded-full font-bold capitalize border-2 shadow-sm ${categoryColors[article.category]}`}>
              {article.category}
            </span>
            <span className={`text-xs px-3 py-1.5 rounded-full font-bold capitalize border-2 ${difficultyColors[article.difficulty]}`}>
              {article.difficulty}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight line-clamp-2">
            {article.title}
          </h3>

          {/* Summary */}
          <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base mb-6 line-clamp-3 leading-relaxed flex-1">
            {article.summary}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between pt-5 border-t-2 border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-bold">{article.readingTime}min</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span className="font-bold">{article.content.sections.length}</span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default KnowledgeHubPage;