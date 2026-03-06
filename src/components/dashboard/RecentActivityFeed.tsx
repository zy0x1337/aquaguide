import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Activity, Droplets, Wrench, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { RecentActivity } from '../../lib/supabase/dashboard';

interface RecentActivityFeedProps {
  activities: RecentActivity[];
}

const activityIcons = {
  parameter_reading: Droplets,
  maintenance: Wrench,
  tank_created: Activity,
  inhabitant_added: Activity,
};

const activityColors = {
  parameter_reading: { bg: 'bg-blue-100 dark:bg-blue-900/40', text: 'text-blue-600 dark:text-blue-400' },
  maintenance: { bg: 'bg-purple-100 dark:bg-purple-900/40', text: 'text-purple-600 dark:text-purple-400' },
  tank_created: { bg: 'bg-emerald-100 dark:bg-emerald-900/40', text: 'text-emerald-600 dark:text-emerald-400' },
  inhabitant_added: { bg: 'bg-indigo-100 dark:bg-indigo-900/40', text: 'text-indigo-600 dark:text-indigo-400' },
};

const RecentActivityFeed = ({ activities }: RecentActivityFeedProps) => {
  if (activities.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-12 text-center">
        <Clock className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
        <p className="text-slate-500 dark:text-slate-400 text-sm">No recent activity</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5">
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <ActivityItem key={activity.id} activity={activity} delay={index * 0.05} isLast={index === activities.length - 1} />
        ))}
      </div>
    </div>
  );
};

const ActivityItem = ({ activity, delay, isLast }: { activity: RecentActivity; delay: number; isLast: boolean }) => {
  const Icon = activityIcons[activity.type];
  const colors = activityColors[activity.type];
  const timeAgo = formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="relative pl-8"
    >
      {!isLast && (
        <div className="absolute left-3 top-9 w-px h-full bg-slate-200 dark:bg-slate-700" />
      )}

      <div className={`absolute left-0 top-1 w-6 h-6 rounded-lg ${colors.bg} flex items-center justify-center`}>
        <Icon className={`w-3.5 h-3.5 ${colors.text}`} />
      </div>

      <Link
        to={`/my-tanks/${activity.tankId}`}
        className="block bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg p-3 transition-colors group"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {activity.tankName}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{activity.description}</p>
          </div>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 whitespace-nowrap uppercase tracking-wide font-medium">{timeAgo}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default RecentActivityFeed;
