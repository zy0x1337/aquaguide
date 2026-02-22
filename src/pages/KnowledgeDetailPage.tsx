import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, AlertCircle, Lightbulb, Info, AlertTriangle } from 'lucide-react';
import { getArticleBySlug } from '../data/knowledge';

const KnowledgeDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Article not found</h2>
          <Link to="/knowledge" className="text-indigo-600 hover:text-indigo-700">
            ← Back to Knowledge Hub
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Image */}
      {article.visuals?.headerImage && (
        <div className="h-64 md:h-96 overflow-hidden relative">
          <img
            src={article.visuals.headerImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Back Button */}
        <Link
          to="/knowledge"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-6 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Knowledge Hub
        </Link>

        {/* Article Header */}
        <div className="bg-white rounded-xl p-8 mb-8 border border-slate-200">
          <div className="flex gap-2 mb-4">
            <span className="text-xs px-3 py-1 rounded-full font-semibold bg-blue-100 text-blue-700 capitalize">
              {article.category}
            </span>
            <span className="text-xs px-3 py-1 rounded-full font-semibold bg-green-100 text-green-700 capitalize">
              {article.difficulty}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-4">{article.title}</h1>

          <div className="flex items-center gap-6 text-sm text-slate-600 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{article.content.sections.length} sections</span>
            </div>
            <span>Updated: {new Date(article.lastUpdated).toLocaleDateString()}</span>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">{article.content.introduction}</p>
        </div>

        {/* Sections */}
        {article.content.sections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-xl p-8 mb-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
            <p className="text-slate-700 leading-relaxed mb-6">{section.content}</p>

            {/* Subsections */}
            {section.subsections?.map((sub, subIdx) => (
              <div key={subIdx} className="ml-4 mb-6 last:mb-0">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{sub.subheading}</h3>
                <p className="text-slate-700 leading-relaxed">{sub.content}</p>
              </div>
            ))}

            {/* Callout */}
            {section.callout && <Callout callout={section.callout} />}
          </div>
        ))}

        {/* Key Takeaways */}
        <div className="bg-indigo-50 rounded-xl p-8 mb-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6" />
            Key Takeaways
          </h2>
          <ul className="space-y-3">
            {article.content.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span className="text-slate-700">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* References */}
        {article.references && article.references.length > 0 && (
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">References & Further Reading</h2>
            <ul className="space-y-3">
              {article.references.map((ref, idx) => (
                <li key={idx}>
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-700 hover:underline"
                    >
                      {ref.title}
                      {ref.author && <span className="text-slate-600"> — {ref.author}</span>}
                    </a>
                  ) : (
                    <span className="text-slate-700">
                      {ref.title}
                      {ref.author && <span className="text-slate-600"> — {ref.author}</span>}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
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
    tip: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    important: 'bg-red-50 border-red-200 text-red-800'
  };

  const Icon = icons[callout.type as keyof typeof icons];

  return (
    <div className={`mt-6 p-4 rounded-lg border ${styles[callout.type as keyof typeof styles]}`}>
      <div className="flex gap-3">
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <p className="text-sm leading-relaxed">{callout.text}</p>
      </div>
    </div>
  );
};

export default KnowledgeDetailPage;
