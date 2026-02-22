import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { allKnowledgeArticles } from '../data/knowledge';
import { KnowledgeArticle } from '../types/knowledge';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';

const KnowledgeHubPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Topics', color: 'from-indigo-500 to-purple-500' },
    { id: 'chemistry', label: 'Water Chemistry', color: 'from-blue-500 to-cyan-500' },
    { id: 'biology', label: 'Biology', color: 'from-green-500 to-emerald-500' },
    { id: 'equipment', label: 'Equipment', color: 'from-purple-500 to-pink-500' },
    { id: 'maintenance', label: 'Maintenance', color: 'from-orange-500 to-red-500' },
    { id: 'diseases', label: 'Diseases', color: 'from-red-500 to-rose-500' },
    { id: 'plants', label: 'Plants', color: 'from-emerald-500 to-teal-500' }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? allKnowledgeArticles 
    : allKnowledgeArticles.filter(article => article.category === selectedCategory);

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

      <div className="min-h-screen bg-white dark:bg-slate-950">
        
        {/* HERO SECTION */}
        <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-20 px-6 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/20 dark:from-slate-950 dark:via-slate-950 dark:to-purple-950/20" />
          
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
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-8 border border-purple-200/50 dark:border-purple-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                Expert Guides
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                Knowledge Hub
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Comprehensive guides on aquarium care, water chemistry, equipment, and more. 
                Learn from expert-written articles tailored to every skill level.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <section className="sticky top-16 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-y border-slate-200 dark:border-slate-800 py-6 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-slate-500 dark:text-slate-400" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Filter by Category</span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-xl font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg scale-105`
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No articles found</h3>
                <p className="text-slate-600 dark:text-slate-400">Try selecting a different category</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.label}
                    <span className="ml-3 text-lg font-normal text-slate-500 dark:text-slate-400">({filteredArticles.length})</span>
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

const ArticleCard = ({ article, index }: { article: KnowledgeArticle; index: number }) => {
  const difficultyColors = {
    beginner: 'text-green-600 bg-green-100 dark:bg-green-950/30 dark:text-green-400',
    intermediate: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-950/30 dark:text-yellow-400',
    advanced: 'text-red-600 bg-red-100 dark:bg-red-950/30 dark:text-red-400'
  };

  const categoryColors: Record<string, string> = {
    chemistry: 'bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400',
    biology: 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400',
    equipment: 'bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400',
    maintenance: 'bg-orange-100 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400',
    diseases: 'bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400',
    plants: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400'
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
        className="group block bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
      >
        {/* Header Image */}
        {article.visuals?.headerImage && (
          <div className="h-48 overflow-hidden relative">
            <img
              src={article.visuals.headerImage}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
          </div>
        )}

        <div className="p-6">
          {/* Category & Difficulty */}
          <div className="flex gap-2 mb-4">
            <span className={`text-xs px-2.5 py-1 rounded-full font-bold capitalize ${categoryColors[article.category]}`}>
              {article.category}
            </span>
            <span className={`text-xs px-2.5 py-1 rounded-full font-bold capitalize ${difficultyColors[article.difficulty]}`}>
              {article.difficulty}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
            {article.title}
          </h3>

          {/* Summary */}
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
            {article.summary}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{article.readingTime} min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>{article.content.sections.length} sections</span>
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
