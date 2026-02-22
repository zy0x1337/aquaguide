import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, Lightbulb, Info, AlertTriangle, AlertCircle, Calendar, CheckCircle, Image } from 'lucide-react';
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 px-6">
          <div className="text-center max-w-md">
            <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <BookOpen className="w-12 h-12 text-slate-400 dark:text-slate-500" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Article Not Found</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">This article doesn't exist or has been removed.</p>
            <Link 
              to="/knowledge" 
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Knowledge Hub
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const difficultyColors = {
    beginner: 'bg-emerald-500 text-white border-emerald-600',
    intermediate: 'bg-amber-500 text-white border-amber-600',
    advanced: 'bg-rose-500 text-white border-rose-600'
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
    <PageTransition>
      <SEOHead 
        title={`${article.title} - Knowledge Hub`}
        description={article.summary}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        
        {/* HERO HEADER IMAGE - ENHANCED */}
        {article.visuals?.headerImage && (
          <div className="relative h-72 sm:h-96 lg:h-[28rem] overflow-hidden">
            <img
              src={article.visuals.headerImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
            
            {/* Breadcrumb on image */}
            <div className="absolute bottom-8 left-0 right-0 px-6">
              <div className="max-w-5xl mx-auto">
                <Link
                  to="/knowledge"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-xl transition-all border-2 border-white/20 hover:border-white/30 shadow-xl"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Knowledge Hub
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* CONTENT - REDESIGNED WITH BETTER SPACING */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          
          {/* Back button (if no header image) */}
          {!article.visuals?.headerImage && (
            <Link
              to="/knowledge"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl transition-all border-2 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-lg mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Knowledge Hub
            </Link>
          )}

          {/* ARTICLE HEADER - ENHANCED */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className={`text-xs px-4 py-2 rounded-full font-bold capitalize border-2 shadow-lg ${categoryColors[article.category]}`}>
                {article.category}
              </span>
              <span className={`text-xs px-4 py-2 rounded-full font-bold capitalize border-2 shadow-lg ${difficultyColors[article.difficulty]}`}>
                {article.difficulty}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1]">
              {article.title}
            </h1>

            {/* Summary */}
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              {article.summary}
            </p>

            {/* Meta Info - REDESIGNED */}
            <div className="flex flex-wrap items-center gap-6 text-sm pb-8 border-b-2 border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="font-bold">{article.readingTime} min read</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="font-bold">{article.content.sections.length} sections</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="font-bold">Updated {new Date(article.lastUpdated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
              </div>
            </div>
          </motion.div>

          {/* Introduction - ENHANCED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-8 lg:p-10 border-2 border-indigo-100 dark:border-indigo-900/50 shadow-lg">
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-lg lg:text-xl font-medium">
                  {article.content.introduction}
                </p>
              </div>
            </div>
          </motion.div>

          {/* DIAGRAMS - NEW SECTION */}
          {article.visuals?.diagrams && article.visuals.diagrams.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <Image className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">Visual Diagrams</h2>
              </div>
              
              <div className="grid gap-8">
                {article.visuals.diagrams.map((diagram) => (
                  <div
                    key={diagram.id}
                    className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl"
                  >
                    {/* Diagram Image */}
                    <div className="p-6 lg:p-8 bg-slate-50 dark:bg-slate-800/50">
                      <img
                        src={diagram.imageUrl}
                        alt={diagram.caption}
                        className="w-full h-auto rounded-xl shadow-lg"
                      />
                    </div>
                    
                    {/* Diagram Info */}
                    <div className="p-6 lg:p-8">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {diagram.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                        {diagram.caption}
                      </p>
                      {diagram.credit && (
                        <p className="text-sm text-slate-500 dark:text-slate-500 italic">
                          Credit: {diagram.credit}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* SECTIONS - REDESIGNED */}
          <div className="space-y-16">
            {article.content.sections.map((section, idx) => (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="scroll-mt-24"
              >
                {/* Section Header - ENHANCED */}
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                    {section.heading}
                  </h2>
                  <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                </div>
                
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-8">
                    {section.content}
                  </p>
                </div>

                {/* Subsections - ENHANCED */}
                {section.subsections?.map((sub, subIdx) => (
                  <div key={subIdx} className="ml-0 lg:ml-8 mt-10 mb-10 last:mb-0">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
                      {sub.subheading}
                    </h3>
                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                        {sub.content}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Callout */}
                {section.callout && <Callout callout={section.callout} />}
              </motion.section>
            ))}
          </div>

          {/* KEY TAKEAWAYS - COMPLETELY REDESIGNED */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-3xl p-8 lg:p-12 border-2 border-emerald-200 dark:border-emerald-900/50 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                Key Takeaways
              </h2>
            </div>
            <div className="space-y-5">
              {article.content.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex gap-5 items-start bg-white/60 dark:bg-slate-900/60 rounded-xl p-5 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-900/50">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white text-lg font-black flex items-center justify-center shadow-lg">
                    {idx + 1}
                  </span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed text-lg font-medium pt-1">{takeaway}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* REFERENCES - REDESIGNED */}
          {article.references && article.references.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-16 bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-12 border-2 border-slate-200 dark:border-slate-800 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800 flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white">References & Further Reading</h2>
              </div>
              <div className="space-y-4">
                {article.references.map((ref, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700">
                    <span className="text-slate-500 dark:text-slate-500 font-black text-sm">[{idx + 1}]</span>
                    {ref.url ? (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline font-bold transition-colors flex-1"
                      >
                        {ref.title}
                        {ref.author && <span className="text-slate-600 dark:text-slate-400 font-medium"> — {ref.author}</span>}
                      </a>
                    ) : (
                      <span className="text-slate-700 dark:text-slate-300 font-medium flex-1">
                        {ref.title}
                        {ref.author && <span className="text-slate-600 dark:text-slate-400"> — {ref.author}</span>}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </PageTransition>
  );
};

// REDESIGNED CALLOUT COMPONENT
const Callout = ({ callout }: { callout: { type: string; text: string } }) => {
  const icons = {
    tip: Lightbulb,
    warning: AlertTriangle,
    info: Info,
    important: AlertCircle
  };

  const styles = {
    tip: {
      bg: 'bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30',
      border: 'border-emerald-300 dark:border-emerald-800',
      text: 'text-emerald-900 dark:text-emerald-300',
      icon: 'bg-gradient-to-br from-emerald-500 to-green-500',
    },
    warning: {
      bg: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30',
      border: 'border-amber-300 dark:border-amber-800',
      text: 'text-amber-900 dark:text-amber-300',
      icon: 'bg-gradient-to-br from-amber-500 to-orange-500',
    },
    info: {
      bg: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30',
      border: 'border-blue-300 dark:border-blue-800',
      text: 'text-blue-900 dark:text-blue-300',
      icon: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    },
    important: {
      bg: 'bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30',
      border: 'border-rose-300 dark:border-rose-800',
      text: 'text-rose-900 dark:text-rose-300',
      icon: 'bg-gradient-to-br from-rose-500 to-red-500',
    },
  };

  const Icon = icons[callout.type as keyof typeof icons];
  const style = styles[callout.type as keyof typeof styles];

  return (
    <div className={`mt-10 ${style.bg} rounded-2xl p-6 lg:p-8 border-2 ${style.border} shadow-lg`}>
      <div className="flex gap-5">
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 rounded-xl ${style.icon} flex items-center justify-center text-white shadow-lg`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
        <div className="flex-1">
          <p className={`leading-relaxed text-lg font-medium ${style.text}`}>{callout.text}</p>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeDetailPage;