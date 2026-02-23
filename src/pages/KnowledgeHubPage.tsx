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

  return (
    <PageTransition>
      <SEOHead 
        title="Knowledge Hub - AquaGuide"
        description="Comprehensive guides on aquarium care, water chemistry, equipment, and more. Learn at your own pace with expert articles."
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20">
        
        {/* HERO HEADER */}
        <header className="bg-gray-900 text-white pt-16 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 mr-2" /> Expert Guides
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
              Master Aquarium <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Knowledge & Skills
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Comprehensive guides on water chemistry, equipment, biology, and care. Learn from expert-written articles tailored to every skill level.
            </p>

            {/* COMPACT STATS */}
            <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/80 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-white">{allKnowledgeArticles.length}</div>
                  <div className="text-xs font-bold text-gray-300 uppercase tracking-wider">Articles</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/80 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-white">{totalReadingTime}min</div>
                  <div className="text-xs font-bold text-gray-300 uppercase tracking-wider">Reading Time</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/80 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-white">7</div>
                  <div className="text-xs font-bold text-gray-300 uppercase tracking-wider">Categories</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT GRID */}
        <main className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
          
          {/* FEATURED ARTICLE */}
          {featuredArticle && (
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white">Featured Article</h2>
              </div>
              <FeaturedArticleCard article={featuredArticle} />
            </section>
          )}

          {/* CATEGORY FILTER */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Filter by Category</span>
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
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold whitespace-nowrap transition-all duration-200 text-sm ${
                    selectedCategory === cat.id
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>
          </section>

          {/* ARTICLES GRID */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-gray-100 dark:bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">No articles found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try selecting a different category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, idx) => (
                <ArticleCard key={article.id} article={article} index={idx} />
              ))}
            </div>
          )}
        </main>

      </div>
    </PageTransition>
  );
};

// FEATURED ARTICLE CARD
const FeaturedArticleCard = ({ article }: { article: KnowledgeArticle }) => {
  const categoryColors: Record<string, string> = {
    chemistry: 'bg-blue-500',
    biology: 'bg-green-500',
    equipment: 'bg-purple-500',
    maintenance: 'bg-orange-500',
    diseases: 'bg-red-500',
    plants: 'bg-emerald-500'
  };

  return (
    <Link
      to={`/knowledge/${article.slug}`}
      className="group block bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="md:flex">
        {article.visuals?.headerImage && (
          <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
            <img
              src={article.visuals.headerImage}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                Featured
              </span>
            </div>
          </div>
        )}
        <div className="md:w-3/5 p-6 flex flex-col justify-center">
          <div className="flex gap-2 mb-3">
            <span className={`text-xs px-2.5 py-1 rounded-lg font-bold capitalize ${categoryColors[article.category]} text-white`}>
              {article.category}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
            {article.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
            {article.summary}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">{article.readingTime} min</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span className="font-semibold">{article.content.sections.length} sections</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm group-hover:gap-3 transition-all">
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

// ARTICLE CARD
const ArticleCard = ({ article, index }: { article: KnowledgeArticle; index: number }) => {
  const difficultyColors = {
    beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800',
    intermediate: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-800',
    advanced: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-800'
  };

  const categoryColors: Record<string, string> = {
    chemistry: 'bg-blue-500 shadow-blue-200 dark:shadow-none',
    biology: 'bg-green-500 shadow-green-200 dark:shadow-none',
    equipment: 'bg-purple-500 shadow-purple-200 dark:shadow-none',
    maintenance: 'bg-orange-500 shadow-orange-200 dark:shadow-none',
    diseases: 'bg-red-500 shadow-red-200 dark:shadow-none',
    plants: 'bg-emerald-500 shadow-emerald-200 dark:shadow-none'
  };

  return (
    <Link
      to={`/knowledge/${article.slug}`}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
    >
      {/* Card Header */}
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white ${categoryColors[article.category]}`}>
          <BookOpen className="w-6 h-6" />
        </div>
        <div className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${difficultyColors[article.difficulty]}`}>
          {article.difficulty}
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
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
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-semibold">{article.readingTime}min</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span className="font-semibold">{article.content.sections.length}</span>
          </div>
        </div>
        <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
          Read <ArrowRight className="w-4 h-4 ml-1" />
        </span>
      </div>
    </Link>
  );
};

export default KnowledgeHubPage;