// src/components/ui/LoadingSkeleton.tsx

import { motion } from 'framer-motion';

// === SPECIES CARD SKELETON ===
export const SpeciesCardSkeleton = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-white rounded-xl border border-slate-200 overflow-hidden"
  >
    <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse" />
    <div className="p-5 space-y-3">
      <div className="h-6 bg-slate-200 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-slate-200 rounded animate-pulse w-1/2" />
      <div className="flex gap-2 mt-4">
        <div className="h-6 w-20 bg-slate-200 rounded-full animate-pulse" />
        <div className="h-6 w-20 bg-slate-200 rounded-full animate-pulse" />
      </div>
      <div className="space-y-2 pt-4">
        <div className="flex justify-between">
          <div className="h-4 bg-slate-200 rounded animate-pulse w-1/3" />
          <div className="h-4 bg-slate-200 rounded animate-pulse w-1/4" />
        </div>
        <div className="flex justify-between">
          <div className="h-4 bg-slate-200 rounded animate-pulse w-1/3" />
          <div className="h-4 bg-slate-200 rounded animate-pulse w-1/4" />
        </div>
      </div>
    </div>
  </motion.div>
);

// === SPECIES DETAIL SKELETON ===
export const SpeciesDetailSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
    {/* Header Skeleton */}
    <div className="relative bg-slate-900 text-white overflow-hidden pt-16 pb-24">
      <div className="absolute inset-0 bg-slate-800 animate-pulse" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="h-4 w-32 bg-slate-700 rounded mb-6 animate-pulse" />
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="h-6 w-24 bg-slate-700 rounded-full animate-pulse" />
            <div className="h-6 w-24 bg-slate-700 rounded-full animate-pulse" />
          </div>
          <div className="h-12 bg-slate-700 rounded w-2/3 animate-pulse" />
          <div className="h-8 bg-slate-700 rounded w-1/2 animate-pulse" />
        </div>
      </div>
    </div>

    {/* Content Skeleton */}
    <main className="relative max-w-6xl mx-auto px-6 -mt-16 pb-20">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <div className="h-6 bg-slate-200 rounded w-1/3 mb-4 animate-pulse" />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="bg-slate-50 p-4 rounded-xl">
                  <div className="h-4 bg-slate-200 rounded mb-2 animate-pulse" />
                  <div className="h-6 bg-slate-200 rounded w-2/3 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside>
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <div className="h-64 bg-slate-200 rounded animate-pulse" />
          </div>
        </aside>
      </div>
    </main>
  </div>
);

// === DISEASE CARD SKELETON ===
export const DiseaseCardSkeleton = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-white rounded-xl border border-slate-200 p-6"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 bg-slate-200 rounded-xl animate-pulse" />
      <div className="flex-1">
        <div className="h-6 bg-slate-200 rounded w-3/4 mb-2 animate-pulse" />
        <div className="h-4 bg-slate-200 rounded w-1/2 animate-pulse" />
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-4 bg-slate-200 rounded animate-pulse" />
      <div className="h-4 bg-slate-200 rounded animate-pulse" />
      <div className="h-4 bg-slate-200 rounded w-5/6 animate-pulse" />
    </div>
  </motion.div>
);

// === GENERIC PAGE SKELETON ===
export const PageSkeleton = () => (
  <div className="min-h-screen bg-slate-50 pt-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="h-12 bg-slate-200 rounded w-1/3 mb-8 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="h-6 bg-slate-200 rounded mb-4 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-slate-200 rounded animate-pulse" />
              <div className="h-4 bg-slate-200 rounded animate-pulse" />
              <div className="h-4 bg-slate-200 rounded w-2/3 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// === TABLE SKELETON ===
export const TableSkeleton = () => (
  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
    <div className="p-4 border-b border-slate-200">
      <div className="h-6 bg-slate-200 rounded w-1/4 animate-pulse" />
    </div>
    <div className="divide-y divide-slate-200">
      {[1,2,3,4,5].map(i => (
        <div key={i} className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-12 h-12 bg-slate-200 rounded-full animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-slate-200 rounded w-1/3 animate-pulse" />
              <div className="h-3 bg-slate-200 rounded w-1/4 animate-pulse" />
            </div>
          </div>
          <div className="h-8 w-24 bg-slate-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
  </div>
);
