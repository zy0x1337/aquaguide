import { Users, Heart, Crown, User, UserCheck } from 'lucide-react';
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
      bg: 'bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50',
      border: 'border-slate-200 dark:border-slate-700',
      iconBg: 'bg-gradient-to-br from-slate-400 to-gray-500',
      description: 'Best kept alone or with other species'
    },
    pair: {
      icon: Heart,
      label: 'Pair Bonding',
      color: 'from-rose-400 to-pink-500',
      bg: 'bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30',
      border: 'border-rose-200 dark:border-rose-800',
      iconBg: 'bg-gradient-to-br from-rose-400 to-pink-500',
      description: 'Forms monogamous pairs'
    },
    harem: {
      icon: Crown,
      label: 'Harem',
      color: 'from-purple-400 to-indigo-500',
      bg: 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30',
      border: 'border-purple-200 dark:border-purple-800',
      iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
      description: 'One male with multiple females'
    },
    school: {
      icon: Users,
      label: 'Schooling',
      color: 'from-blue-400 to-cyan-500',
      bg: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30',
      border: 'border-blue-200 dark:border-blue-800',
      iconBg: 'bg-gradient-to-br from-blue-400 to-cyan-500',
      description: 'Tight-knit synchronized group'
    },
    shoal: {
      icon: Users,
      label: 'Shoaling',
      color: 'from-teal-400 to-emerald-500',
      bg: 'bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30',
      border: 'border-teal-200 dark:border-teal-800',
      iconBg: 'bg-gradient-to-br from-teal-400 to-emerald-500',
      description: 'Loose social group'
    }
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div className={`${config.bg} rounded-xl p-5 md:p-6 border-2 ${config.border} shadow-lg`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 md:mb-5 pb-4 border-b-2 border-slate-200 dark:border-slate-700">
        <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl ${config.iconBg} flex items-center justify-center shadow-xl`}>
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white drop-shadow-md" />
        </div>
        <div>
          <h4 className="font-black text-slate-900 dark:text-white text-base md:text-lg leading-tight">{config.label}</h4>
          <p className="text-[10px] md:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{config.description}</p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="space-y-2 md:space-y-3">
        {/* Minimum Group Size */}
        <div className="flex items-center justify-between bg-white dark:bg-slate-800 rounded-lg md:rounded-xl p-3 md:p-4 border-2 border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
              <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">Min. Group Size</span>
          </div>
          <span className="text-base md:text-lg font-black text-slate-900 dark:text-white">
            {minGroupSize === 1 ? '1 (solo)' : `${minGroupSize}+`}
          </span>
        </div>

        {/* Male to Female Ratio */}
        {maleToFemaleRatio && (
          <div className="flex items-center justify-between bg-white dark:bg-slate-800 rounded-lg md:rounded-xl p-3 md:p-4 border-2 border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                <UserCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">M:F Ratio</span>
            </div>
            <span className="text-base md:text-lg font-black text-slate-900 dark:text-white">{maleToFemaleRatio}</span>
          </div>
        )}

        {/* Max Males per Tank */}
        {maxMalesPerTank !== undefined && maxMalesPerTank !== 999 && (
          <div className="flex items-center justify-between bg-amber-50 dark:bg-amber-900/20 rounded-lg md:rounded-xl p-3 md:p-4 border-2 border-amber-200 dark:border-amber-800 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-amber-100 dark:bg-amber-950/40 rounded-lg">
                <Crown className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <span className="text-xs md:text-sm font-bold text-amber-900 dark:text-amber-300">Max Males</span>
            </div>
            <span className="text-base md:text-lg font-black text-amber-900 dark:text-amber-200">{maxMalesPerTank}</span>
          </div>
        )}

        {/* Unlimited Males Message */}
        {maxMalesPerTank === 999 && (
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg md:rounded-xl p-3 md:p-4 border-2 border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-emerald-800 dark:text-emerald-300">
              <div className="p-1.5 bg-emerald-100 dark:bg-emerald-950/40 rounded-lg">
                <UserCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span>Multiple males can coexist peacefully</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
