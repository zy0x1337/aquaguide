import { Maximize2, MoveVertical, MoveHorizontal, Shield } from 'lucide-react';
import { SpaceNeeds } from '../../types/species';

interface Props {
  spaceNeeds: SpaceNeeds;
  tankSize: number;
}

export const SpaceNeedsIndicator = ({ spaceNeeds, tankSize }: Props) => {
  const { horizontalCM, verticalCM, territories } = spaceNeeds;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-5 md:p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 md:mb-5 flex items-center gap-2">
        <Maximize2 className="w-4 h-4" />
        Space Requirements
      </h4>

      <div className="space-y-3 md:space-y-4">
        {/* Horizontal Space */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 md:p-4 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
              <MoveHorizontal className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              Floor Space
            </div>
            <span className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">{horizontalCM}cm</span>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Minimum horizontal swimming room per fish
          </div>
        </div>

        {/* Vertical Space */}
        {verticalCM !== undefined && verticalCM > 0 && (
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 md:p-4 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                <MoveVertical className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                Tank Height
              </div>
              <span className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">{verticalCM}cm</span>
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Minimum vertical space required
            </div>
          </div>
        )}

        {/* Territories */}
        {territories !== undefined && territories > 0 && (
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 md:p-4 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                <Shield className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                Territories
              </div>
              <span className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">{territories}</span>
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Distinct zones needed to prevent aggression
            </div>
          </div>
        )}

        {/* Non-Territorial */}
        {territories !== undefined && territories === 0 && (
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 md:p-4 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              <Shield className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              Non-Territorial
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              No specific territories needed—peaceful species
            </div>
          </div>
        )}
      </div>

      {/* Tank Size Recommendation */}
      <div className="mt-4 md:mt-5 pt-4 md:pt-5 border-t border-slate-200 dark:border-slate-700">
        <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
          <strong className="font-semibold">For {tankSize}L tank:</strong> Provides adequate space for natural behavior
        </div>
      </div>
    </div>
  );
};
