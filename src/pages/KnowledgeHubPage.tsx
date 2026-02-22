import { Link } from 'react-router-dom';
import { Clock, BookOpen } from 'lucide-react';
import { allKnowledgeArticles } from '../data/knowledge';
import { KnowledgeArticle } from '../types/knowledge';

const KnowledgeHubPage = () => {
  const categories = [
    { id: 'chemistry', label: 'Water Chemistry', color: 'bg-blue-500' },
    { id: 'biology', label: 'Biology', color: 'bg-green-500' },
    { id: 'equipment', label: 'Equipment', color: 'bg-purple-500' },
    { id: 'maintenance', label: 'Maintenance', color: 'bg-orange-500' },
    { id: 'diseases', label: 'Diseases', color: 'bg-red-500' },
    { id: 'plants', label: 'Plants', color: 'bg-emerald-500' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-4">Knowledge Hub</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Comprehensive guides on aquarium care, water chemistry, equipment, and more. 
            Learn at your own pace with articles tailored to every skill level.
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button className="px-4 py-2 rounded-lg font-semibold bg-indigo-600 text-white whitespace-nowrap">
              All Topics
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                className="px-4 py-2 rounded-lg font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allKnowledgeArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ArticleCard = ({ article }: { article: KnowledgeArticle }) => {
  const difficultyColors = {
    beginner: 'text-green-600 bg-green-100',
    intermediate: 'text-yellow-600 bg-yellow-100',
    advanced: 'text-red-600 bg-red-100'
  };

  const categoryColors = {
    chemistry: 'bg-blue-100 text-blue-700',
    biology: 'bg-green-100 text-green-700',
    equipment: 'bg-purple-100 text-purple-700',
    maintenance: 'bg-orange-100 text-orange-700',
    diseases: 'bg-red-100 text-red-700',
    plants: 'bg-emerald-100 text-emerald-700'
  };

  return (
    <Link
      to={`/knowledge/${article.slug}`}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group"
    >
      {/* Header Image */}
      {article.visuals?.headerImage && (
        <div className="h-48 overflow-hidden">
          <img
            src={article.visuals.headerImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        {/* Category & Difficulty */}
        <div className="flex gap-2 mb-3">
          <span className={`text-xs px-2 py-1 rounded-full font-semibold ${categoryColors[article.category]}`}>
            {article.category}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full font-semibold ${difficultyColors[article.difficulty]}`}>
            {article.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
          {article.summary}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{article.readingTime} min read</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{article.content.sections.length} sections</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default KnowledgeHubPage;
