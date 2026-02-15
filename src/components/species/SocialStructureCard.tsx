import { Users, Heart, Crown, User } from 'lucide-react';
import { SocialStructure } from '../../types/species';

interface Props {
  socialStructure: SocialStructure;
  minGroupSize: number;
}

export const SocialStructureCard = ({ socialStructure, minGroupSize }: Props) => {
  const { type, maleToFemaleRatio, maxMalesPerTank } = socialStructure;

  const typeConfig = {
    solitary: {
      icon: User,
      label: 'Solitary',
      color: 'from-slate-400 to-gray-500',
      bg: 'from-slate-50 to-gray-50',
      border: 'border-slate-200',
      description: 'Best kept alone or with other species'
    },
    pair: {
      icon: Heart,
      label: 'Pair Bonding',
      color: 'from-rose-400 to-pink-500',
      bg: 'from-rose-50 to-pink-50',
      border: 'border-rose-200',
      description: 'Forms monogamous pairs'
    },
    harem: {
      icon: Crown,
      label: 'Harem',
      color: 'from-purple-400 to-indigo-500',
      bg: 'from-purple-50 to-indigo-50',
      border: 'border-purple-200',
      description: 'One male with multiple females'
    },
    school: {
      icon: Users,
      label: 'Schooling',
      color: 'from-blue-400 to-cyan-500',
      bg: 'from-blue-50 to-cyan-50',
      border: 'border-blue-200',
      description: 'Tight-knit synchronized group'
    },
    shoal: {
      icon: Users,
      label: 'Shoaling',
      color: 'from-teal-400 to-emerald-500',
      bg: 'from-teal-50 to-emerald-50',
      border: 'border-teal-200',
      description: 'Loose social group'
    }
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div className={`bg-gradient-to-br ${config.bg} dark:from-slate-900 dark:to-slate-800 rounded-xl p-6 border ${config.border} dark:border-slate-700`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-lg">{config.label}</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">{config.description}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Minimum Group Size</span>
          <span className="text-lg font-bold text-slate-900 dark:text-white">{minGroupSize}+</span>
        </div>

        {maleToFemaleRatio && (
          <div className="flex items-center justify-between bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Male:Female Ratio</span>
            <span className="text-lg font-bold text-slate-900 dark:text-white">{maleToFemaleRatio}</span>
          </div>
        )}

        {maxMalesPerTank && (
          <div className="flex items-center justify-between bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 border border-amber-200 dark:border-amber-800">
            <span className="text-sm font-semibold text-amber-900 dark:text-amber-300">Max Males per Tank</span>
            <span className="text-lg font-bold text-amber-900 dark:text-amber-200">{maxMalesPerTank}</span>
          </div>
        )}
      </div>
    </div>
  );
};
