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
  parameter_reading: 'from-blue-500 to-cyan-500',
  maintenance: 'from-purple-500 to-pink-500',
  tank_created: 'from-green-500 to-emerald-500',
  inhabitant_added: 'from-indigo-500 to-purple-500',
};

const RecentActivityFeed = ({ activities }: RecentActivityFeedProps) => {
  if (activities.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-12 text-center">
        <Clock className="w-12 h-12 text-slate-300 mx-auto mb-3" />
        <p className="text-slate-500">No recent activity. Start tracking your tanks!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <ActivityItem key={activity.id} activity={activity} delay={index * 0.05} isLast={index === activities.length - 1} />
        ))}
      </div>
    </div>
  );
};

const ActivityItem = ({ activity, delay, isLast }: { activity: RecentActivity; delay: number; isLast: boolean }) => {
  const Icon = activityIcons[activity.type];
  const colorClass = activityColors[activity.type];
  const timeAgo = formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true });

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3.5 top-10 w-0.5 h-full bg-slate-200" />
      )}

      {/* Icon */}
      <div className={`absolute left-0 top-1 w-7 h-7 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-md`}>
        <Icon className="w-4 h-4 text-white" />
      </div>

      {/* Content */}
      <Link
        to={`/my-tanks/${activity.tankId}`}
        className="block bg-slate-50 hover:bg-slate-100 rounded-lg p-3 transition-colors group"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
              {activity.tankName}
            </p>
            <p className="text-sm text-slate-600 mt-0.5">{activity.description}</p>
          </div>
          <span className="text-xs text-slate-500 whitespace-nowrap">{timeAgo}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default RecentActivityFeed;
