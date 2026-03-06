import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Fish, Leaf, BookOpen, Activity, Map, X, ArrowRight } from 'lucide-react';
import { allSpecies } from '../../data/species';
import { allPlants } from '../../data/plants';
import { allKnowledgeArticles } from '../../data/knowledge';
import { allDiseases } from '../../data/diseases';
import habitatsData from '../../data/habitats.json';

interface SearchResult {
  id: string;
  title: string;
  subtitle?: string;
  type: 'fish' | 'plant' | 'knowledge' | 'disease' | 'habitat';
  url: string;
  imageUrl?: string;
}

const TYPE_CONFIG = {
  fish: { icon: Fish, label: 'Fish & Inverts', color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
  plant: { icon: Leaf, label: 'Plants', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
  knowledge: { icon: BookOpen, label: 'Knowledge', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/20' },
  disease: { icon: Activity, label: 'Diseases', color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-50 dark:bg-rose-900/20' },
  habitat: { icon: Map, label: 'Habitats', color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-50 dark:bg-cyan-900/20' },
};

export const GlobalSearch = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Build search index
  const searchIndex = useMemo(() => {
    const results: SearchResult[] = [];

    // Fish & Inverts
    allSpecies.forEach(s => {
      results.push({
        id: s.id,
        title: s.taxonomy.commonName,
        subtitle: s.taxonomy.scientificName,
        type: 'fish',
        url: `/species/${s.slug}`,
        imageUrl: s.imageUrl,
      });
    });

    // Plants
    allPlants.forEach(p => {
      results.push({
        id: p.id,
        title: p.taxonomy.commonName,
        subtitle: p.taxonomy.scientificName,
        type: 'plant',
        url: `/plants/${p.slug}`,
        imageUrl: p.imageUrl,
      });
    });

    // Knowledge
    allKnowledgeArticles.forEach(a => {
      results.push({
        id: a.id,
        title: a.title,
        subtitle: a.category,
        type: 'knowledge',
        url: `/knowledge/${a.slug}`,
        imageUrl: a.visuals.headerImage,
      });
    });

    // Diseases
    allDiseases.forEach(d => {
      results.push({
        id: d.id,
        title: d.name,
        subtitle: d.scientificName || d.type,
        type: 'disease',
        url: `/diseases/${d.slug}`,
      });
    });

    // Habitats
    habitatsData.forEach((h: any) => {
      results.push({
        id: h.id,
        title: h.title,
        subtitle: h.location || h.conditions.waterType,
        type: 'habitat',
        url: `/biotopes/${h.id}`,
        imageUrl: h.imageUrl,
      });
    });

    return results;
  }, []);

  // Filter results
  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const q = query.toLowerCase();
    const matches = searchIndex.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(q);
      const subtitleMatch = item.subtitle?.toLowerCase().includes(q);
      return titleMatch || subtitleMatch;
    });

    // Group by type
    const grouped: Record<string, SearchResult[]> = {};
    matches.forEach(item => {
      if (!grouped[item.type]) grouped[item.type] = [];
      grouped[item.type].push(item);
    });

    // Flatten with max 5 per type
    const final: SearchResult[] = [];
    Object.entries(grouped).forEach(([type, items]) => {
      final.push(...items.slice(0, 5));
    });

    return final.slice(0, 20);
  }, [query, searchIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || filteredResults.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredResults.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredResults.length) % filteredResults.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredResults[selectedIndex]) {
          navigate(filteredResults[selectedIndex].url);
          setIsOpen(false);
          setQuery('');
        }
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, navigate]);

  // Click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Global keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleGlobalShortcut = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleGlobalShortcut);
    return () => window.removeEventListener('keydown', handleGlobalShortcut);
  }, []);

  const handleInputChange = (value: string) => {
    setQuery(value);
    setIsOpen(value.length > 0);
    setSelectedIndex(0);
  };

  const handleClear = () => {
    setQuery('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="relative w-full max-w-2xl" ref={dropdownRef}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          placeholder="Search species, plants, articles..."
          className="w-full pl-12 pr-24 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-700 transition-all"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {query && (
            <button
              onClick={handleClear}
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
            >
              <X className="w-4 h-4 text-slate-400" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Results Dropdown */}
      {isOpen && filteredResults.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl max-h-[500px] overflow-y-auto z-50">
          <div className="p-2">
            {filteredResults.map((result, idx) => {
              const config = TYPE_CONFIG[result.type];
              const Icon = config.icon;
              const isSelected = idx === selectedIndex;

              return (
                <Link
                  key={result.id}
                  to={result.url}
                  onClick={handleResultClick}
                  className={`group flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isSelected
                      ? 'bg-slate-100 dark:bg-slate-800'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {/* Image/Icon */}
                  {result.imageUrl ? (
                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800">
                      <img
                        src={result.imageUrl}
                        alt={result.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${config.bg}`}>
                      <Icon className={`w-5 h-5 ${config.color}`} />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 dark:text-white truncate text-sm">
                      {result.title}
                    </p>
                    {result.subtitle && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {result.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Type Badge */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${config.bg} ${config.color}`}>
                      <Icon className="w-3 h-3" />
                      {config.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          <div className="border-t border-slate-200 dark:border-slate-700 p-3 bg-slate-50 dark:bg-slate-800/50">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-[10px]">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-[10px]">↵</kbd>
                  Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-[10px]">Esc</kbd>
                  Close
                </span>
              </div>
              <span>{filteredResults.length} results</span>
            </div>
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && query && filteredResults.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl p-8 text-center z-50">
          <Search className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">No results found</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Try searching for a different species or term
          </p>
        </div>
      )}
    </div>
  );
};
