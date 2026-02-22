import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, Lightbulb, Info, AlertTriangle, AlertCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { getArticleBySlug } from '../data/knowledge';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';

const KnowledgeDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');

  if (!article) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 px-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-slate-400 dark:text-slate-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Article not found</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">This article doesn't exist or has been removed.</p>
            <Link 
              to="/knowledge" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Knowledge Hub
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400 border-green-200 dark:border-green-800',
    intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
    advanced: 'bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400 border-red-200 dark:border-red-800'
  };

  const categoryColors: Record<string, string> = {
    chemistry: 'bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    biology: 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400 border-green-200 dark:border-green-800',
    equipment: 'bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400 border-purple-200 dark:border-purple-800',
    maintenance: 'bg-orange-100 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400 border-orange-200 dark:border-orange-800',
    diseases: 'bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400 border-red-200 dark:border-red-800',
    plants: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
  };

  return (
    <PageTransition>
      <SEOHead 
        title={`${article.title} - Knowledge Hub`}
        description={article.summary}
      />

      <div className="min-h-screen bg-white dark:bg-slate-950">
        
        {/* HERO HEADER IMAGE */}
        {article.visuals?.headerImage && (
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img
              src={article.visuals.headerImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
            
            {/* Breadcrumb on image */}
            <div className="absolute bottom-6 left-0 right-0 px-6">
              <div className="max-w-4xl mx-auto">
                <Link
                  to="/knowledge"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold transition-colors mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Knowledge Hub
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          
          {/* Back button (if no header image) */}
          {!article.visuals?.headerImage && (
            <Link
              to="/knowledge"
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-8 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Knowledge Hub
            </Link>
          )}

          {/* ARTICLE HEADER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className={`text-xs px-3 py-1.5 rounded-full font-bold capitalize border ${categoryColors[article.category]}`}>
                {article.category}
              </span>
              <span className={`text-xs px-3 py-1.5 rounded-full font-bold capitalize border ${difficultyColors[article.difficulty]}`}>
                {article.difficulty}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400 pb-8 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-medium">{article.readingTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span className="font-medium">{article.content.sections.length} sections</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Updated {new Date(article.lastUpdated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
              </div>
            </div>

            {/* Introduction */}
            <div className="mt-8 text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              {article.content.introduction}
            </div>
          </motion.div>

          {/* SECTIONS */}
          <div className="space-y-12">
            {article.content.sections.map((section, idx) => (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-800">
                  {section.heading}
                </h2>
                
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-8">
                    {section.content}
                  </p>
                </div>

                {/* Subsections */}
                {section.subsections?.map((sub, subIdx) => (
                  <div key={subIdx} className="ml-0 sm:ml-6 mt-8 mb-8 last:mb-0">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      {sub.subheading}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                      {sub.content}
                    </p>
                  </div>
                ))}

                {/* Callout */}
                {section.callout && <Callout callout={section.callout} />}
              </motion.section>
            ))}
          </div>

          {/* KEY TAKEAWAYS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl p-8 sm:p-10 border-2 border-indigo-100 dark:border-indigo-900/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Key Takeaways
              </h2>
            </div>
            <ul className="space-y-4">
              {article.content.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-bold flex items-center justify-center mt-1">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{takeaway}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* REFERENCES */}
          {article.references && article.references.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12 bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border-2 border-slate-200 dark:border-slate-800"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">References & Further Reading</h2>
              <ul className="space-y-4">
                {article.references.map((ref, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-slate-400 dark:text-slate-600 font-bold">[{idx + 1}]</span>
                    {ref.url ? (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline font-medium transition-colors"
                      >
                        {ref.title}
                        {ref.author && <span className="text-slate-600 dark:text-slate-400"> — {ref.author}</span>}
                      </a>
                    ) : (
                      <span className="text-slate-700 dark:text-slate-300">
                        {ref.title}
                        {ref.author && <span className="text-slate-600 dark:text-slate-400"> — {ref.author}</span>}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

        </div>
      </div>
    </PageTransition>
  );
};

const Callout = ({ callout }: { callout: { type: string; text: string } }) => {
  const icons = {
    tip: Lightbulb,
    warning: AlertTriangle,
    info: Info,
    important: AlertCircle
  };

  const styles = {
    tip: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 text-green-800 dark:text-green-400',
    warning: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-400',
    info: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-400',
    important: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-400'
  };

  const Icon = icons[callout.type as keyof typeof icons];

  return (
    <div className={`mt-8 p-6 rounded-2xl border-2 ${styles[callout.type as keyof typeof styles]}`}>
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <Icon className="w-6 h-6 mt-1" />
        </div>
        <p className="leading-relaxed text-lg">{callout.text}</p>
      </div>
    </div>
  );
};

export default KnowledgeDetailPage;
