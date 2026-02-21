import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  description?: string;
  showBack?: boolean;
  className?: string;
}

export default function PageHeader({ title, description, showBack = false, className = "" }: PageHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className={`mb-8 ${className}`}>
      {showBack && (
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück
        </button>
      )}
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-lg text-slate-600 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
