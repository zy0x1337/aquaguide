import { Maximize2, MoveVertical, MoveHorizontal } from 'lucide-react';
import { SpaceNeeds } from '../../types/species';

interface Props {
  spaceNeeds: SpaceNeeds;
  tankSize: number;
}

export const SpaceNeedsIndicator = ({ spaceNeeds, tankSize }: Props) => {
  const { horizontalCM, verticalCM, territories } = spaceNeeds;

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
      <h4 className="text-sm font-bold text-indigo-900 dark:text-indigo-300 uppercase mb-4 flex items-center gap-2">
        <Maximize2 className="w-4 h-4" />
        Space Requirements
      </h4>

      <div className="space-y-4">
        {/* Horizontal Space */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              <MoveHorizontal className="w-4 h-4 text-indigo-600" />
              Floor Space per Fish
            </div>
            <span className="text-lg font-bold text-indigo-900 dark:text-indigo-300">{horizontalCM}cm</span>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400">
            Minimum horizontal swimming room required
          </div>
        </div>

        {/* Vertical Space */}
        {verticalCM && (
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <MoveVertical className="w-4 h-4 text-purple-600" />
                Tank Height
              </div>
              <span className="text-lg font-bold text-purple-900 dark:text-purple-300">{verticalCM}cm</span>
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              Minimum vertical space for tall-bodied fish
            </div>
          </div>
        )}

        {/* Territories */}
        {territories && (
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-amber-900 dark:text-amber-300">
                🏰 Territorial Zones
              </div>
              <span className="text-lg font-bold text-amber-900 dark:text-amber-200">{territories}</span>
            </div>
            <div className="text-xs text-amber-800 dark:text-amber-400">
              Requires distinct territories to prevent aggression
            </div>
          </div>
        )}
      </div>

      {/* Tank Size Recommendation */}
      <div className="mt-4 pt-4 border-t border-indigo-200 dark:border-indigo-800">
        <div className="text-xs text-indigo-800 dark:text-indigo-300">
          <strong>For {tankSize}L tank:</strong> Provides adequate space for proper behavior
        </div>
      </div>
    </div>
  );
};
