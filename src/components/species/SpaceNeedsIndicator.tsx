import { Maximize2, MoveVertical, MoveHorizontal, Shield } from 'lucide-react';
import { SpaceNeeds } from '../../types/species';

interface Props {
  spaceNeeds: SpaceNeeds;
  tankSize: number;
}

export const SpaceNeedsIndicator = ({ spaceNeeds, tankSize }: Props) => {
  const { horizontalCM, verticalCM, territories } = spaceNeeds;

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl p-5 md:p-6 border-2 border-indigo-200 dark:border-indigo-800 shadow-lg">
      <h4 className="text-xs md:text-sm font-black text-indigo-900 dark:text-indigo-300 uppercase mb-4 md:mb-5 flex items-center gap-2 tracking-wider">
        <Maximize2 className="w-4 h-4" />
        Space Requirements
      </h4>

      <div className="space-y-3 md:space-y-4">
        {/* Horizontal Space */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-3 md:p-4 border-2 border-indigo-200 dark:border-indigo-800">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">
              <MoveHorizontal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              Floor Space
            </div>
            <span className="text-base md:text-lg font-black text-indigo-900 dark:text-indigo-300">{horizontalCM}cm</span>
          </div>
          <div className="text-[10px] md:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Minimum horizontal swimming room per fish
          </div>
        </div>

        {/* Vertical Space - nur anzeigen wenn definiert und > 0 */}
        {verticalCM !== undefined && verticalCM > 0 && (
          <div className="bg-white dark:bg-slate-800 rounded-lg p-3 md:p-4 border-2 border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">
                <MoveVertical className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                Tank Height
              </div>
              <span className="text-base md:text-lg font-black text-purple-900 dark:text-purple-300">{verticalCM}cm</span>
            </div>
            <div className="text-[10px] md:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Minimum vertical space required
            </div>
          </div>
        )}

        {/* Territories - nur anzeigen wenn definiert und > 0 */}
        {territories !== undefined && territories > 0 && (
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 md:p-4 border-2 border-amber-200 dark:border-amber-800">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-amber-900 dark:text-amber-300">
                <Shield className="w-4 h-4" />
                Territories
              </div>
              <span className="text-base md:text-lg font-black text-amber-900 dark:text-amber-200">{territories}</span>
            </div>
            <div className="text-[10px] md:text-xs text-amber-800 dark:text-amber-400 leading-relaxed">
              Distinct zones needed to prevent aggression
            </div>
          </div>
        )}

        {/* Kein Territory-Hinweis für friedliche Fische */}
        {territories !== undefined && territories === 0 && (
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3 md:p-4 border-2 border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-emerald-900 dark:text-emerald-300 mb-1">
              <Shield className="w-4 h-4" />
              Non-Territorial
            </div>
            <div className="text-[10px] md:text-xs text-emerald-800 dark:text-emerald-400 leading-relaxed">
              No specific territories needed—peaceful species
            </div>
          </div>
        )}
      </div>

      {/* Tank Size Recommendation */}
      <div className="mt-4 md:mt-5 pt-4 md:pt-5 border-t-2 border-indigo-200 dark:border-indigo-800">
        <div className="text-[10px] md:text-xs text-indigo-800 dark:text-indigo-300 font-semibold">
          <strong className="font-black">For {tankSize}L tank:</strong> Provides adequate space for natural behavior
        </div>
      </div>
    </div>
  );
};
