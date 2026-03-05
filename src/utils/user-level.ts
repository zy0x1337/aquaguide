/**
 * user-level.ts
 * Deterministic XP + level system calculated purely from existing data.
 * No new DB columns needed – everything is derived client-side.
 */

export interface LevelInfo {
  level: number;
  title: string;
  xp: number;
  xpForNextLevel: number;
  xpIntoCurrentLevel: number;
  progressPercent: number;
  color: string;
  emoji: string;
}

const LEVEL_THRESHOLDS = [0, 50, 130, 250, 420, 650, 950, 1330, 1810, 2410, 3150];

const LEVEL_META: { title: string; color: string; emoji: string }[] = [
  { title: 'Newcomer',       color: 'slate',   emoji: '🐣' },
  { title: 'Beginner',       color: 'blue',    emoji: '🐟' },
  { title: 'Enthusiast',     color: 'cyan',    emoji: '🐠' },
  { title: 'Hobbyist',       color: 'teal',    emoji: '🐡' },
  { title: 'Aquarist',       color: 'emerald', emoji: '🌿' },
  { title: 'Expert',         color: 'green',   emoji: '🦈' },
  { title: 'Specialist',     color: 'indigo',  emoji: '🪸' },
  { title: 'Master',         color: 'violet',  emoji: '🏆' },
  { title: 'Grand Master',   color: 'purple',  emoji: '💎' },
  { title: 'Legend',         color: 'amber',   emoji: '⭐' },
  { title: 'AquaGuide Pro',  color: 'rose',    emoji: '🌊' },
];

export interface XPInputs {
  favoritesCount: number;
  tanksCount: number;
  publicTanksCount: number;
  hasAvatar: boolean;
  hasBio: boolean;
  hasLocation: boolean;
  memberDays: number;
  unlockedAchievements: number;
  speciesFavorites: number;
  plantFavorites: number;
}

export function calculateXP(inputs: XPInputs): number {
  let xp = 0;
  xp += Math.min(inputs.favoritesCount, 30)  * 3;
  xp += Math.min(inputs.tanksCount, 10)       * 20;
  xp += Math.min(inputs.publicTanksCount, 5)  * 15;
  xp += inputs.hasAvatar   ? 30 : 0;
  xp += inputs.hasBio      ? 20 : 0;
  xp += inputs.hasLocation ? 10 : 0;
  xp += Math.min(Math.floor(inputs.memberDays / 30), 24) * 5;
  xp += inputs.unlockedAchievements * 25;
  xp += Math.min(inputs.speciesFavorites, 20) * 2;
  xp += Math.min(inputs.plantFavorites,   20) * 2;
  return xp;
}

export function getLevelInfo(xp: number): LevelInfo {
  let level = 0;
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) { level = i; break; }
  }
  const isMax = level >= LEVEL_META.length - 1;
  const currentThreshold = LEVEL_THRESHOLDS[level];
  const nextThreshold     = isMax ? LEVEL_THRESHOLDS[level] + 1000 : LEVEL_THRESHOLDS[level + 1];
  const xpInto            = xp - currentThreshold;
  const xpNeeded          = nextThreshold - currentThreshold;
  const meta              = LEVEL_META[Math.min(level, LEVEL_META.length - 1)];

  return {
    level,
    title: meta.title,
    xp,
    xpForNextLevel: nextThreshold,
    xpIntoCurrentLevel: xpInto,
    progressPercent: Math.min(Math.round((xpInto / xpNeeded) * 100), 100),
    color: meta.color,
    emoji: meta.emoji,
  };
}
