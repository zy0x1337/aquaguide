import { formatDistanceToNow } from 'date-fns';
import { Droplets, Filter, Settings, Pill, FileText, Trash2 } from 'lucide-react';
import { MaintenanceLog } from '../../lib/supabase/tankHistory';

interface MaintenanceTimelineProps {
  logs: MaintenanceLog[];
  onDelete: (id: string) => void;
}

const maintenanceIcons = {
  water_change: Droplets,
  filter_cleaning: Filter,
  equipment_maintenance: Settings,
  medication: Pill,
  other: FileText,
};

const maintenanceColors = {
  water_change: 'from-blue-500 to-cyan-500',
  filter_cleaning: 'from-green-500 to-emerald-500',
  equipment_maintenance: 'from-purple-500 to-pink-500',
  medication: 'from-red-500 to-rose-500',
  other: 'from-slate-500 to-gray-500',
};

const MaintenanceTimeline = ({ logs, onDelete }: MaintenanceTimelineProps) => {
  if (logs.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500">
        <p>No maintenance logs yet. Start tracking your tank maintenance!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {logs.map((log, index) => {
        const Icon = maintenanceIcons[log.type];
        const colorClass = maintenanceColors[log.type];
        const timeAgo = formatDistanceToNow(new Date(log.performedAt), { addSuffix: true });

        return (
          <div
            key={log.id}
            className="relative pl-8 pb-8 group"
          >
            {/* Timeline line */}
            {index < logs.length - 1 && (
              <div className="absolute left-4 top-10 w-0.5 h-full bg-slate-200" />
            )}

            {/* Icon */}
            <div className={`absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg`}>
              <Icon className="w-4 h-4 text-white" />
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl border-2 border-slate-200 p-4 hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Title & Type */}
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-slate-900">{log.title}</h4>
                    {log.waterChangePercent && (
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {log.waterChangePercent}%
                      </span>
                    )}
                  </div>

                  {/* Time */}
                  <p className="text-sm text-slate-500 mb-2">{timeAgo}</p>

                  {/* Description */}
                  {log.description && (
                    <p className="text-sm text-slate-700 bg-slate-50 rounded-lg p-3 mt-3">
                      {log.description}
                    </p>
                  )}
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => {
                    if (confirm('Delete this maintenance log?')) {
                      onDelete(log.id);
                    }
                  }}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MaintenanceTimeline;
