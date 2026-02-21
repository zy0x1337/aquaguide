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
      color: 'text-slate-600 dark:text-slate-400',
      description: 'Best kept alone or with other species'
    },
    pair: {
      icon: Heart,
      label: 'Pair Bonding',
      color: 'text-rose-500',
      description: 'Forms monogamous pairs'
    },
    harem: {
      icon: Crown,
      label: 'Harem',
      color: 'text-purple-500',
      description: 'One male with multiple females'
    },
    school: {
      icon: Users,
      label: 'Schooling',
      color: 'text-blue-500',
      description: 'Tight-knit synchronized group'
    },
    shoal: {
      icon: Users,
      label: 'Shoaling',
      color: 'text-teal-500',
      description: 'Loose social group'
    }
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-5 md:p-6 border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 md:mb-5 pb-4 border-b border-slate-200 dark:border-slate-700">
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
          <Icon className={`w-5 h-5 md:w-6 md:h-6 ${config.color}`} />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white text-base md:text-lg leading-tight">{config.label}</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{config.description}</p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="space-y-2 md:space-y-3">
        {/* Minimum Group Size */}
        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 rounded-lg p-3 md:p-4 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-500" />
            </div>
            <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">Min. Group Size</span>
          </div>
          <span className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
            {minGroupSize === 1 ? '1 (solo)' : `${minGroupSize}+`}
          </span>
        </div>

        {/* Male to Female Ratio */}
        {maleToFemaleRatio && (
          <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 rounded-lg p-3 md:p-4 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <UserCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500" />
              </div>
              <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">M:F Ratio</span>
            </div>
            <span className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">{maleToFemaleRatio}</span>
          </div>
        )}

        {/* Max Males per Tank */}
        {maxMalesPerTank !== undefined && maxMalesPerTank !== 999 && (
          <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 rounded-lg p-3 md:p-4 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <Crown className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-500" />
              </div>
              <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">Max Males</span>
            </div>
            <span className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">{maxMalesPerTank}</span>
          </div>
        )}

        {/* Unlimited Males Message */}
        {maxMalesPerTank === 999 && (
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 md:p-4 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
              <div className="p-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <UserCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500" />
              </div>
              <span>Multiple males can coexist peacefully</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
