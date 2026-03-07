import { useState, useRef, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import {
  User, Calendar, Fish, Droplets, Camera, Edit2, Save,
  Upload, ArrowLeft, Heart, Leaf, Trash2, Globe, Trophy, Star,
  Target, TrendingUp, MessageSquare, Send, LayoutGrid, Waves,
  ExternalLink, Lock, CheckCircle2, Zap, Award,
  FlaskConical, BookOpen, Share2, MapPin, Link2, Sparkles, LogIn, Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFavorites } from '../hooks/useFavorites';
import { getFeaturedTanksForUser } from '../lib/supabase/tanks';
import { copyToClipboard } from '../utils/tank-share';
import { calculateXP, getLevelInfo, type XPInputs, type LevelInfo } from '../utils/user-level';
import type { Tank } from '../types/tank';

interface SpeciesData { slug: string; common_name: string; scientific_name: string; image_url?: string; }
interface PlantData   { slug: string; common_name: string; scientific_name: string; image_url?: string; }

type TabType = 'overview' | 'favorites' | 'achievements' | 'activity';

interface Achievement {
  id: string;
  name: string;
  description: string;
  hint?: string;
  icon: React.ElementType;
  unlocked: boolean;
  progress: number;
  max: number;
  xpReward: number;
  category: 'collection' | 'tanks' | 'profile' | 'community' | 'milestone';
  color: string;
}

interface ActivityEvent {
  icon: React.ElementType;
  color: string;
  bg: string;
  label: string;
  sub?: string;
  badge?: string;
  badgeColor?: string;
  timestamp?: Date;
}

// ─── Relative time helper ──────────────────────────────────────────────────────
const relativeTime = (date: Date): string => {
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60)    return 'just now';
  if (diff < 3600)  return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)}mo ago`;
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

// ─── Per-level gradient definitions ───────────────────────────────────────────
const LEVEL_GRADIENTS: Record<string, [string, string, string, string]> = {
  slate:   ['#64748b', '#475569', '#ffffff', 'rgba(100,116,139,0.4)'],
  blue:    ['#3b82f6', '#2563eb', '#ffffff', 'rgba(59,130,246,0.4)'],
  cyan:    ['#06b6d4', '#0891b2', '#ffffff', 'rgba(6,182,212,0.4)'],
  teal:    ['#14b8a6', '#0d9488', '#ffffff', 'rgba(20,184,166,0.4)'],
  emerald: ['#10b981', '#059669', '#ffffff', 'rgba(16,185,129,0.4)'],
  green:   ['#22c55e', '#16a34a', '#ffffff', 'rgba(34,197,94,0.4)'],
  indigo:  ['#6366f1', '#4f46e5', '#ffffff', 'rgba(99,102,241,0.4)'],
  violet:  ['#8b5cf6', '#7c3aed', '#ffffff', 'rgba(139,92,246,0.4)'],
  purple:  ['#a855f7', '#9333ea', '#ffffff', 'rgba(168,85,247,0.4)'],
  amber:   ['#f59e0b', '#d97706', '#ffffff', 'rgba(245,158,11,0.4)'],
  rose:    ['#f43f5e', '#e11d48', '#ffffff', 'rgba(244,63,94,0.4)'],
};

// ─── Level badge ──────────────────────────────────────────────────────────────
const LevelBadge = ({ info, size = 'md' }: { info: LevelInfo; size?: 'sm' | 'md' | 'lg' }) => {
  const [from, to, textColor, borderColor] = LEVEL_GRADIENTS[info.color] ?? LEVEL_GRADIENTS.slate;
  const sizeClasses = {
    sm: { wrap: 'text-[11px] px-2.5 py-1 gap-1.5',   emoji: 'text-sm',   lvl: 'text-[11px]', sep: 'h-3', title: 'text-[11px]' },
    md: { wrap: 'text-xs   px-3   py-1.5 gap-2',       emoji: 'text-sm',   lvl: 'text-xs',     sep: 'h-3', title: 'text-xs'     },
    lg: { wrap: 'text-sm   px-4   py-2   gap-2.5',     emoji: 'text-base', lvl: 'text-sm',     sep: 'h-4', title: 'text-sm'     },
  }[size];
  return (
    <span
      className={`relative inline-flex items-center rounded-full font-bold overflow-hidden select-none ${sizeClasses.wrap}`}
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
        color: textColor,
        border: `1px solid ${borderColor}`,
        boxShadow: `0 1px 6px ${borderColor}`,
      }}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full"
        style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 55%)' }} />
      <span className={`relative ${sizeClasses.emoji} leading-none`}>{info.emoji}</span>
      <span className={`relative font-black tracking-tight ${sizeClasses.lvl}`}>Lv.{info.level}</span>
      <span className={`relative w-px ${sizeClasses.sep} bg-white/30`} />
      <span className={`relative font-semibold opacity-95 ${sizeClasses.title}`}>{info.title}</span>
    </span>
  );
};

// ─── XP bar ───────────────────────────────────────────────────────────────────
const XPBar = ({ info }: { info: LevelInfo }) => {
  const [from, to] = LEVEL_GRADIENTS[info.color] ?? LEVEL_GRADIENTS.slate;
  return (
    <div className="mt-3">
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1.5">
        <span className="font-bold text-gray-700 dark:text-gray-300">{info.xp} XP</span>
        <span className="opacity-70">{info.xpForNextLevel} XP → Lv.{info.level + 1}</span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${info.progressPercent}%` }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
        />
      </div>
      <div className="flex justify-end mt-1">
        <span className="text-[10px] text-gray-400">{info.progressPercent}%</span>
      </div>
    </div>
  );
};

// ─── Guest CTA banner ─────────────────────────────────────────────────────────
const GuestBanner = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 border border-cyan-200 dark:border-cyan-800/60 rounded-2xl p-5"
  >
    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center">
      <Lock className="w-5 h-5 text-cyan-600 dark:text-cyan-400" strokeWidth={2.5} />
    </div>
    <div className="flex-1 text-center sm:text-left">
      <p className="text-sm font-bold text-gray-900 dark:text-white">Log in to see the full profile</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Favorites, achievements and activity are only visible to logged-in users.</p>
    </div>
    <Link
      to="/login"
      className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl text-sm transition-all"
    >
      <LogIn className="w-4 h-4" />
      Log in
    </Link>
  </motion.div>
);

// ─── Achievement card ─────────────────────────────────────────────────────────
const AchievementCard = ({ a }: { a: Achievement }) => {
  const Icon = a.icon;
  const colorStyles: Record<string, { card: string; icon: string; bar: string; pill: string }> = {
    rose:    { card: 'bg-rose-50    dark:bg-rose-900/10    border-rose-200    dark:border-rose-800',    icon: 'bg-rose-100    dark:bg-rose-900/30    text-rose-600    dark:text-rose-400',    bar: 'bg-rose-500',    pill: 'bg-rose-100    dark:bg-rose-900/30    text-rose-700    dark:text-rose-300'    },
    emerald: { card: 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800', icon: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400', bar: 'bg-emerald-500', pill: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' },
    cyan:    { card: 'bg-cyan-50    dark:bg-cyan-900/10    border-cyan-200    dark:border-cyan-800',    icon: 'bg-cyan-100    dark:bg-cyan-900/30    text-cyan-600    dark:text-cyan-400',    bar: 'bg-cyan-500',    pill: 'bg-cyan-100    dark:bg-cyan-900/30    text-cyan-700    dark:text-cyan-300'    },
    indigo:  { card: 'bg-indigo-50  dark:bg-indigo-900/10  border-indigo-200  dark:border-indigo-800',  icon: 'bg-indigo-100  dark:bg-indigo-900/30  text-indigo-600  dark:text-indigo-400',  bar: 'bg-indigo-500',  pill: 'bg-indigo-100  dark:bg-indigo-900/30  text-indigo-700  dark:text-indigo-300'  },
    fuchsia: { card: 'bg-fuchsia-50 dark:bg-fuchsia-900/10 border-fuchsia-200 dark:border-fuchsia-800', icon: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400', bar: 'bg-fuchsia-500', pill: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300' },
    blue:    { card: 'bg-blue-50    dark:bg-blue-900/10    border-blue-200    dark:border-blue-800',    icon: 'bg-blue-100    dark:bg-blue-900/30    text-blue-600    dark:text-blue-400',    bar: 'bg-blue-500',    pill: 'bg-blue-100    dark:bg-blue-900/30    text-blue-700    dark:text-blue-300'    },
    amber:   { card: 'bg-amber-50   dark:bg-amber-900/10   border-amber-200   dark:border-amber-800',   icon: 'bg-amber-100   dark:bg-amber-900/30   text-amber-600   dark:text-amber-400',   bar: 'bg-amber-500',   pill: 'bg-amber-100   dark:bg-amber-900/30   text-amber-700   dark:text-amber-300'   },
    teal:    { card: 'bg-teal-50    dark:bg-teal-900/10    border-teal-200    dark:border-teal-800',    icon: 'bg-teal-100    dark:bg-teal-900/30    text-teal-600    dark:text-teal-400',    bar: 'bg-teal-500',    pill: 'bg-teal-100    dark:bg-teal-900/30    text-teal-700    dark:text-teal-300'    },
    violet:  { card: 'bg-violet-50  dark:bg-violet-900/10  border-violet-200  dark:border-violet-800',  icon: 'bg-violet-100  dark:bg-violet-900/30  text-violet-600  dark:text-violet-400',  bar: 'bg-violet-500',  pill: 'bg-violet-100  dark:bg-violet-900/30  text-violet-700  dark:text-violet-300'  },
    orange:  { card: 'bg-orange-50  dark:bg-orange-900/10  border-orange-200  dark:border-orange-800',  icon: 'bg-orange-100  dark:bg-orange-900/30  text-orange-600  dark:text-orange-400',  bar: 'bg-orange-500',  pill: 'bg-orange-100  dark:bg-orange-900/30  text-orange-700  dark:text-orange-300'  },
    slate:   { card: 'bg-gray-50    dark:bg-gray-800       border-gray-200    dark:border-gray-700',    icon: 'bg-gray-100    dark:bg-gray-700       text-gray-400',                          bar: 'bg-gray-400',   pill: 'bg-gray-100    dark:bg-gray-800       text-gray-500    dark:text-gray-400'    },
  };
  const s = a.unlocked ? (colorStyles[a.color] ?? colorStyles.slate) : colorStyles.slate;
  const pct = Math.round((a.progress / a.max) * 100);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative p-4 rounded-2xl border-2 transition-all ${
        a.unlocked ? s.card : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
      }`}
    >
      {a.unlocked && <span className="absolute top-3 right-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /></span>}
      <div className="flex items-start gap-3">
        <div className={`p-2.5 rounded-xl flex-shrink-0 ${a.unlocked ? s.icon : 'bg-gray-100 dark:bg-gray-700 text-gray-400'}`}>
          {a.unlocked ? <Icon className="w-5 h-5" strokeWidth={2} /> : <Lock className="w-5 h-5" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h4 className={`font-bold text-sm ${a.unlocked ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>{a.name}</h4>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${a.unlocked ? s.pill : 'bg-gray-100 dark:bg-gray-700 text-gray-500'}`}>+{a.xpReward} XP</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{a.unlocked ? a.description : (a.hint ?? a.description)}</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.6, delay: 0.1 }}
              className={`h-full rounded-full ${a.unlocked ? s.bar : 'bg-gray-400 dark:bg-gray-600'}`} />
          </div>
          <p className="text-[10px] text-gray-400 mt-1">{a.progress} / {a.max}</p>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────
const ProfilePage = () => {
  const { userId } = useParams<{ userId?: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  const targetUserId = userId || user?.id;

  const [activeTab, setActiveTab]             = useState<TabType>('overview');
  const [isEditing, setIsEditing]             = useState(false);
  const [uploading, setUploading]             = useState(false);
  const [uploadingHeader, setUploadingHeader] = useState(false);
  const [avatarUrl, setAvatarUrl]             = useState<string | null>(null);
  const [headerUrl, setHeaderUrl]             = useState<string | null>(null);
  const [profileUser, setProfileUser]         = useState<any>(null);
  const [loading, setLoading]                 = useState(true);
  const [linkCopied, setLinkCopied]           = useState(false);
  const [feedbackText, setFeedbackText]       = useState('');
  const [featuredTanks, setFeaturedTanks]     = useState<Tank[]>([]);
  const [tanksLoading, setTanksLoading]       = useState(false);
  const [userTanksCount, setUserTanksCount]   = useState(0);
  const [publicTanksCount, setPublicTanksCount] = useState(0);

  const fileInputRef   = useRef<HTMLInputElement>(null);
  const headerInputRef = useRef<HTMLInputElement>(null);

  const { favorites, toggleFavorite } = useFavorites(targetUserId);
  const [speciesData, setSpeciesData] = useState<Record<string, SpeciesData>>({});
  const [plantsData,  setPlantsData]  = useState<Record<string, PlantData>>({});

  const [profile, setProfile] = useState({
    displayName: '', bio: '', location: '', website: '', favoriteSpecies: '',
  });

  const isOwnProfile  = !!user && (!userId || userId === user.id);
  const isGuestView   = !user && !!userId;
  const favSpecies    = favorites.filter(f => f.item_type === 'species');
  const favPlants     = favorites.filter(f => f.item_type === 'plant');

  const achievements = useMemo<Achievement[]>(() => [
    { id: 'first_fav',     name: 'First Favorite',       category: 'collection', color: 'rose',    icon: Heart,        xpReward: 10, description: 'Save your first favorite species or plant.',    unlocked: favorites.length >= 1,   progress: Math.min(favorites.length, 1),   max: 1  },
    { id: 'collector',     name: 'Collector',             category: 'collection', color: 'rose',    icon: Heart,        xpReward: 25, description: 'Save 10+ favorites.',                           unlocked: favorites.length >= 10,  progress: Math.min(favorites.length, 10),  max: 10 },
    { id: 'hoarder',       name: 'Hoarder',               category: 'collection', color: 'fuchsia', icon: Star,         xpReward: 50, description: 'Save 25+ favorites.', hint: 'Keep collecting!',  unlocked: favorites.length >= 25,  progress: Math.min(favorites.length, 25),  max: 25 },
    { id: 'diverse',       name: 'Diverse Keeper',        category: 'collection', color: 'teal',    icon: Target,       xpReward: 15, description: 'Favorite both fish and plants.',                 unlocked: favSpecies.length > 0 && favPlants.length > 0, progress: (favSpecies.length > 0 ? 1 : 0) + (favPlants.length > 0 ? 1 : 0), max: 2 },
    { id: 'explorer',      name: 'Explorer',              category: 'collection', color: 'cyan',    icon: Fish,         xpReward: 20, description: 'Favorite 5+ different fish species.',           unlocked: favSpecies.length >= 5,  progress: Math.min(favSpecies.length, 5),  max: 5  },
    { id: 'botanist',      name: 'Botanist',              category: 'collection', color: 'emerald', icon: Leaf,         xpReward: 20, description: 'Favorite 5+ plants.',                           unlocked: favPlants.length >= 5,   progress: Math.min(favPlants.length, 5),   max: 5  },
    { id: 'aquascaper',    name: 'Aquascaper',            category: 'tanks',      color: 'cyan',    icon: Droplets,     xpReward: 30, description: 'Set up your first tracked tank.',               unlocked: userTanksCount >= 1,     progress: Math.min(userTanksCount, 1),     max: 1  },
    { id: 'mts',           name: 'Multi-Tank Syndrome',   category: 'tanks',      color: 'indigo',  icon: LayoutGrid,   xpReward: 40, description: 'Manage 3+ tanks simultaneously.', hint: 'Add more tanks to My Tanks.', unlocked: userTanksCount >= 3, progress: Math.min(userTanksCount, 3), max: 3 },
    { id: 'public_tank',   name: 'Show & Tell',           category: 'tanks',      color: 'teal',    icon: Globe,        xpReward: 20, description: 'Make at least one tank public.',                 unlocked: publicTanksCount >= 1,   progress: Math.min(publicTanksCount, 1),   max: 1  },
    { id: 'tank_farmer',   name: 'Tank Farmer',           category: 'tanks',      color: 'violet',  icon: Waves,        xpReward: 60, description: 'Own 5+ tanks.', hint: 'Keep expanding your collection.', unlocked: userTanksCount >= 5, progress: Math.min(userTanksCount, 5), max: 5 },
    { id: 'photographer',  name: 'Photographer',          category: 'profile',    color: 'fuchsia', icon: Award,        xpReward: 15, description: 'Upload a profile picture.',                     unlocked: !!avatarUrl,             progress: avatarUrl ? 1 : 0,               max: 1  },
    { id: 'storyteller',   name: 'Storyteller',           category: 'profile',    color: 'blue',    icon: BookOpen,     xpReward: 10, description: 'Write a custom bio.',                           unlocked: !!(profile.bio?.length > 10), progress: profile.bio?.length > 10 ? 1 : 0, max: 1 },
    { id: 'social',        name: 'Well Connected',        category: 'profile',    color: 'blue',    icon: Link2,        xpReward: 20, description: 'Fill in bio, location AND website.', hint: 'Complete your profile under Edit.', unlocked: !!(profile.bio?.length > 10 && profile.location && profile.website), progress: (profile.bio?.length > 10 ? 1 : 0) + (profile.location ? 1 : 0) + (profile.website ? 1 : 0), max: 3 },
    { id: 'veteran_month', name: 'One Month In',          category: 'milestone',  color: 'amber',   icon: Calendar,     xpReward: 15, description: 'Member for 1+ month.',
      unlocked: profileUser?.created_at ? (Date.now() - new Date(profileUser.created_at).getTime()) >= 30 * 86400000 : false,
      progress: profileUser?.created_at ? Math.min(Math.floor((Date.now() - new Date(profileUser.created_at).getTime()) / 86400000), 30) : 0, max: 30 },
    { id: 'veteran',       name: 'Veteran',               category: 'milestone',  color: 'orange',  icon: Trophy,       xpReward: 75, description: 'Member for 1+ year.', hint: 'Keep using AquaGuide.',
      unlocked: profileUser?.created_at ? (Date.now() - new Date(profileUser.created_at).getTime()) >= 365 * 86400000 : false,
      progress: profileUser?.created_at ? Math.min(Math.floor((Date.now() - new Date(profileUser.created_at).getTime()) / 86400000), 365) : 0, max: 365 },
    { id: 'knowledge',     name: 'Knowledge Seeker',      category: 'milestone',  color: 'violet',  icon: FlaskConical, xpReward: 30, description: 'Favorited 10+ fish species.', hint: 'Explore more fish species.', unlocked: favSpecies.length >= 10, progress: Math.min(favSpecies.length, 10), max: 10 },
  ], [favorites, favSpecies, favPlants, userTanksCount, publicTanksCount, avatarUrl, profile, profileUser]);

  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const unlockedCount        = unlockedAchievements.length;

  const levelInfo = useMemo(() => {
    const memberDays = profileUser?.created_at
      ? Math.floor((Date.now() - new Date(profileUser.created_at).getTime()) / 86400000)
      : 0;
    return getLevelInfo(calculateXP({
      favoritesCount: favorites.length,
      tanksCount: userTanksCount,
      publicTanksCount,
      hasAvatar: !!avatarUrl,
      hasBio: !!(profile.bio?.length > 10),
      hasLocation: !!profile.location,
      memberDays,
      unlockedAchievements: unlockedCount,
      speciesFavorites: favSpecies.length,
      plantFavorites: favPlants.length,
    }));
  }, [favorites, userTanksCount, publicTanksCount, avatarUrl, profile, profileUser, unlockedCount, favSpecies, favPlants]);

  // ─── Build activity feed ───────────────────────────────────────────────────
  const activityFeed = useMemo<ActivityEvent[]>(() => {
    const events: ActivityEvent[] = [];

    unlockedAchievements.forEach(a => {
      events.push({
        icon: Trophy,
        color: 'text-amber-500',
        bg: 'bg-amber-50 dark:bg-amber-900/20',
        label: `Achievement unlocked: ${a.name}`,
        sub: `+${a.xpReward} XP earned`,
        badge: 'Achievement',
        badgeColor: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
      });
    });

    featuredTanks.forEach(t => {
      events.push({
        icon: Waves,
        color: 'text-cyan-500',
        bg: 'bg-cyan-50 dark:bg-cyan-900/20',
        label: `Tank added: ${t.name}`,
        sub: `${t.volumeLiters}L · ${t.type.charAt(0).toUpperCase() + t.type.slice(1)}`,
        badge: 'Tank',
        badgeColor: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
        timestamp: t.createdAt ? new Date(t.createdAt) : undefined,
      });
    });

    favorites.slice(0, 5).forEach(f => {
      events.push({
        icon: Heart,
        color: 'text-rose-500',
        bg: 'bg-rose-50 dark:bg-rose-900/20',
        label: `Added to favorites`,
        sub: f.item_type === 'species' ? '🐠 Fish species' : '🌿 Plant',
        badge: 'Favorite',
        badgeColor: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300',
        timestamp: f.created_at ? new Date(f.created_at) : undefined,
      });
    });

    if (profileUser?.created_at) {
      events.push({
        icon: User,
        color: 'text-indigo-500',
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        label: 'Joined AquaGuide',
        sub: new Date(profileUser.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        badge: 'Milestone',
        badgeColor: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
        timestamp: new Date(profileUser.created_at),
      });
    }

    return events.slice(0, 12);
  }, [unlockedAchievements, featuredTanks, favorites, profileUser]);

  const statsRow = [
    { label: 'Tanks',        value: userTanksCount.toString(),                 icon: Waves,    color: 'text-cyan-500'   },
    { label: 'Favorites',    value: favorites.length.toString(),               icon: Heart,    color: 'text-rose-500'   },
    { label: 'Achievements', value: `${unlockedCount}/${achievements.length}`, icon: Trophy,   color: 'text-amber-500'  },
    { label: 'Member Since', value: new Date(profileUser?.created_at || user?.created_at || Date.now()).getFullYear().toString(), icon: Calendar, color: 'text-indigo-500' },
  ];

  const tabs = [
    { id: 'overview',     label: 'Overview',     icon: User       },
    { id: 'favorites',    label: 'Favorites',    icon: Heart,     badge: favorites.length },
    { id: 'achievements', label: 'Achievements', icon: Trophy,    badge: unlockedCount    },
    { id: 'activity',     label: 'Activity',     icon: TrendingUp, badge: activityFeed.length },
  ] as const;

  useEffect(() => { loadProfile(); }, [userId, user]);       // eslint-disable-line
  useEffect(() => { fetchFavoriteDetails(); }, [favorites]); // eslint-disable-line
  useEffect(() => {
    if (!targetUserId) return;
    setTanksLoading(true);
    getFeaturedTanksForUser(targetUserId).then(setFeaturedTanks).catch(console.error).finally(() => setTanksLoading(false));
  }, [targetUserId]); // eslint-disable-line

  const loadProfile = async () => {
    setLoading(true);
    if (!targetUserId) { setLoading(false); return; }
    try {
      const { data: pd } = await supabase
        .from('profiles')
        .select('avatar_url, header_url, display_name, bio, location, website, favorite_species')
        .eq('id', targetUserId).single();

      // Use getUser() for own profile (works client-side without Service-Role key).
      // For other users' profiles we only have data from the profiles table.
      let emailFallback: string | undefined;
      if (isOwnProfile) {
        const { data: authData } = await supabase.auth.getUser();
        emailFallback = authData?.user?.email?.split('@')[0];
        if (authData?.user) setProfileUser(authData.user);
      }

      const { count: tc } = await supabase.from('tanks').select('*', { count: 'exact', head: true }).eq('user_id', targetUserId);
      const { count: pc } = await supabase.from('tanks').select('*', { count: 'exact', head: true }).eq('user_id', targetUserId).eq('is_public', true);
      if (tc !== null) setUserTanksCount(tc);
      if (pc !== null) setPublicTanksCount(pc);
      if (pd) {
        setAvatarUrl(pd.avatar_url);
        setHeaderUrl(pd.header_url);
        setProfile({
          displayName: pd.display_name || emailFallback || user?.email?.split('@')[0] || '',
          bio: pd.bio || '',
          location: pd.location || '',
          website: pd.website || '',
          favoriteSpecies: pd.favorite_species || '',
        });
      }
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  const fetchFavoriteDetails = async () => {
    try {
      if (favSpecies.length > 0) {
        const { data } = await supabase.from('species').select('slug, common_name, scientific_name, image_url').in('slug', favSpecies.map(f => f.item_slug));
        if (data) { const m: Record<string, SpeciesData> = {}; data.forEach(s => { m[s.slug] = s; }); setSpeciesData(m); }
      }
      if (favPlants.length > 0) {
        const { data } = await supabase.from('plants').select('slug, common_name, scientific_name, image_url').in('slug', favPlants.map(f => f.item_slug));
        if (data) { const m: Record<string, PlantData> = {}; data.forEach(p => { m[p.slug] = p; }); setPlantsData(m); }
      }
    } catch (err) { console.error(err); }
  };

  const handleSave = async () => {
    if (!user || !isOwnProfile) return;
    try {
      await supabase.from('profiles').update({ display_name: profile.displayName, bio: profile.bio, location: profile.location, website: profile.website, favorite_species: profile.favoriteSpecies }).eq('id', user.id);
      setIsEditing(false);
    } catch (err) { console.error(err); }
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isOwnProfile || !user) return;
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { alert('Max 2 MB'); return; }
    setUploading(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const b64 = reader.result as string;
      await supabase.from('profiles').update({ avatar_url: b64 }).eq('id', user.id);
      setAvatarUrl(b64);
      window.dispatchEvent(new Event('avatar-updated'));
      setUploading(false);
    };
    reader.onerror = () => setUploading(false);
  };

  const handleHeaderUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isOwnProfile || !user) return;
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { alert('Max 5 MB'); return; }
    setUploadingHeader(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const b64 = reader.result as string;
      await supabase.from('profiles').update({ header_url: b64 }).eq('id', user.id);
      setHeaderUrl(b64);
      setUploadingHeader(false);
    };
    reader.onerror = () => setUploadingHeader(false);
  };

  const handleShareProfile = async () => {
    await copyToClipboard(`${window.location.origin}/profile/${targetUserId}`);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2200);
  };

  const handleSendFeedback = () => {
    if (!feedbackText.trim()) return;
    const sub  = encodeURIComponent(`AquaGuide Beta Feedback from ${profile.displayName || 'User'}`);
    const body = encodeURIComponent(feedbackText);
    window.location.href = `mailto:zy0x1337@proton.me?subject=${sub}&body=${body}`;
    setFeedbackText('');
  };

  const getUserInitials = () => {
    const email = profileUser?.email || user?.email;
    return email ? email.split('@')[0].slice(0, 2).toUpperCase() : 'U';
  };

  const tankTypeColor = (type: Tank['type']) => {
    if (type === 'freshwater') return 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300';
    if (type === 'saltwater')  return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
    return 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300';
  };

  const profileCompletion = useMemo(() => {
    const checks = [!!avatarUrl, !!profile.bio?.length, !!profile.location, !!profile.website, favorites.length > 0, userTanksCount > 0];
    return Math.round((checks.filter(Boolean).length / checks.length) * 100);
  }, [avatarUrl, profile, favorites, userTanksCount]);

  const achievementCategories = ['all', 'collection', 'tanks', 'profile', 'milestone'] as const;
  type AchCat = typeof achievementCategories[number];
  const [achFilter, setAchFilter] = useState<AchCat>('all');
  const filteredAchievements = achFilter === 'all' ? achievements : achievements.filter(a => a.category === achFilter);

  if (loading) return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-gray-500 dark:text-gray-400 text-sm">Loading profile…</div>
      </div>
    </PageTransition>
  );

  return (
    <PageTransition>
      <SEOHead
        title={`${profile.displayName}'s Profile – AquaGuide`}
        description={`View ${profile.displayName}'s aquarium profile, favorites and achievements on AquaGuide.`}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">

        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-5xl mx-auto">

            {/* Cover */}
            <div className="relative h-44 sm:h-56 overflow-hidden">
              <input ref={headerInputRef} type="file" accept="image/*" onChange={handleHeaderUpload} className="hidden" />
              {headerUrl
                ? <img src={headerUrl} alt="Cover" className="w-full h-full object-cover" />
                : <div className="w-full h-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600" />
              }
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              {isOwnProfile && (
                <button onClick={() => headerInputRef.current?.click()} disabled={uploadingHeader}
                  className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-xl text-white text-xs font-bold transition-all">
                  {uploadingHeader ? <Upload className="w-3.5 h-3.5 animate-pulse" /> : <Camera className="w-3.5 h-3.5" />}
                  Change cover
                </button>
              )}
            </div>

            {/* Profile strip */}
            <div className="px-4 sm:px-6 lg:px-8 pt-0 pb-0">
              <div className="flex items-end justify-between -mt-10 sm:-mt-12 mb-3">

                {/* Avatar */}
                <div className="relative group z-20 flex-shrink-0">
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
                  <div className="p-1 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
                    {avatarUrl
                      ? <img src={avatarUrl} alt="Avatar" className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover block" />
                      : <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl font-black">{getUserInitials()}</div>
                    }
                  </div>
                  {isOwnProfile && (
                    <button onClick={() => fileInputRef.current?.click()} disabled={uploading}
                      className="absolute inset-1 flex items-center justify-center bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                      {uploading ? <Upload className="w-5 h-5 text-white animate-pulse" /> : <Camera className="w-5 h-5 text-white" />}
                    </button>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pb-1">
                  {!isOwnProfile && (
                    <button onClick={() => navigate(-1)}
                      className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all">
                      <ArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  )}
                  <button onClick={handleShareProfile}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-sm transition-all ${
                      linkCopied
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                    {linkCopied ? <CheckCircle2 className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                    {linkCopied ? 'Copied!' : 'Share'}
                  </button>
                  {isOwnProfile && (
                    <button onClick={() => { if (isEditing) handleSave(); setIsEditing(e => !e); }}
                      className="flex items-center gap-1.5 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all text-sm">
                      {isEditing ? <><Save className="w-4 h-4" />Save</> : <><Edit2 className="w-4 h-4" />Edit</>}
                    </button>
                  )}
                  {isGuestView && (
                    <Link to="/login"
                      className="flex items-center gap-1.5 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all text-sm">
                      <LogIn className="w-4 h-4" />Log in
                    </Link>
                  )}
                </div>
              </div>

              {/* Name / Level / Bio / Meta */}
              <div className="mb-4">
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <h1 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-tight">{profile.displayName}</h1>
                  <LevelBadge info={levelInfo} size="sm" />
                </div>
                {profile.bio && <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 leading-relaxed max-w-2xl">{profile.bio}</p>}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  {profile.location && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{profile.location}</span>}
                  {profile.website && (
                    <a href={profile.website} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:underline">
                      <Link2 className="w-3 h-3" />{profile.website.replace(/^https?:\/\//, '')}
                    </a>
                  )}
                </div>
                {isOwnProfile && <XPBar info={levelInfo} />}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 divide-x divide-gray-200 dark:divide-gray-800 border-t border-gray-200 dark:border-gray-800 py-3">
                {statsRow.map(s => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="text-center px-2">
                      <div className="flex items-center justify-center gap-1 mb-0.5">
                        <Icon className={`w-3.5 h-3.5 ${s.color}`} strokeWidth={2.5} />
                        <span className="text-lg font-black text-gray-900 dark:text-white">{s.value}</span>
                      </div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">{s.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Tabs */}
              {!isGuestView && (
                <div className="flex gap-0 overflow-x-auto no-scrollbar">
                  {tabs.map(tab => {
                    const Icon = tab.icon;
                    const active = activeTab === tab.id;
                    return (
                      <button key={tab.id} onClick={() => setActiveTab(tab.id as TabType)}
                        className={`relative flex items-center gap-1.5 px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors ${
                          active ? 'text-cyan-600 dark:text-cyan-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}>
                        <Icon className="w-4 h-4" strokeWidth={2.5} />
                        {tab.label}
                        {'badge' in tab && (tab as any).badge > 0 && (
                          <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                            active ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                          }`}>{(tab as any).badge}</span>
                        )}
                        {active && (
                          <motion.div layoutId="activeProfileTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600 dark:bg-cyan-400"
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">

          {isGuestView ? (
            <div className="space-y-5">
              <GuestBanner />
              {(featuredTanks.length > 0 || tanksLoading) && (
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Waves className="w-5 h-5 text-cyan-500" strokeWidth={2.5} />
                    <h3 className="font-black text-gray-900 dark:text-white">Featured Tanks</h3>
                    {featuredTanks.length > 0 && <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">{featuredTanks.length}</span>}
                  </div>
                  {tanksLoading
                    ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">{[1,2].map(i => <div key={i} className="h-28 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
                    : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {featuredTanks.map(tank => (
                          <Link key={tank.id} to={tank.publicSlug ? `/tanks/${tank.publicSlug}` : '#'}
                            className="group block bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-800 rounded-xl p-4 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all hover:shadow-md">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-black text-gray-900 dark:text-white truncate text-sm">{tank.name}</h4>
                                <p className="text-xs text-gray-500 mt-0.5">{tank.volumeLiters}L</p>
                              </div>
                              <ExternalLink className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" strokeWidth={2.5} />
                            </div>
                            <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold mb-2 ${tankTypeColor(tank.type)}`}>
                              {tank.type.charAt(0).toUpperCase() + tank.type.slice(1)}
                            </span>
                            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                              {(tank.inhabitants?.fish?.length ?? 0) > 0 && <span className="flex items-center gap-1"><Fish className="w-3 h-3" />{tank.inhabitants!.fish.reduce((s,i)=>s+i.quantity,0)}</span>}
                              {(tank.inhabitants?.plants?.length ?? 0) > 0 && <span className="flex items-center gap-1"><Leaf className="w-3 h-3" />{tank.inhabitants!.plants.reduce((s,i)=>s+i.quantity,0)}</span>}
                              {tank.parameters?.ph && <span className="flex items-center gap-1"><Droplets className="w-3 h-3" />pH {tank.parameters.ph}</span>}
                            </div>
                          </Link>
                        ))}
                      </div>
                  }
                </div>
              )}
            </div>
          ) : (

          <AnimatePresence mode="wait">

            {/* ════ OVERVIEW ════════════════════════════════════════════ */}
            {activeTab === 'overview' && (
              <motion.div key="overview" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="space-y-5">

                {isOwnProfile && profileCompletion < 100 && (
                  <div className="bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-indigo-500" />
                        <span className="text-sm font-bold text-indigo-900 dark:text-indigo-300">Complete your profile</span>
                      </div>
                      <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">{profileCompletion}%</span>
                    </div>
                    <div className="w-full bg-indigo-100 dark:bg-indigo-900/40 rounded-full h-2 overflow-hidden mb-3">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${profileCompletion}%` }} transition={{ duration: 0.7 }} className="h-full bg-indigo-500 rounded-full" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {!avatarUrl           && <span className="text-xs bg-white dark:bg-gray-900 border border-indigo-200 dark:border-indigo-800 rounded-lg px-2 py-1 text-indigo-600 dark:text-indigo-400">📷 Add photo</span>}
                      {!profile.bio?.length  && <span className="text-xs bg-white dark:bg-gray-900 border border-indigo-200 dark:border-indigo-800 rounded-lg px-2 py-1 text-indigo-600 dark:text-indigo-400">✍️ Write a bio</span>}
                      {!profile.location     && <span className="text-xs bg-white dark:bg-gray-900 border border-indigo-200 dark:border-indigo-800 rounded-lg px-2 py-1 text-indigo-600 dark:text-indigo-400">📍 Set location</span>}
                      {userTanksCount === 0  && <span className="text-xs bg-white dark:bg-gray-900 border border-indigo-200 dark:border-indigo-800 rounded-lg px-2 py-1 text-indigo-600 dark:text-indigo-400">🐠 Add a tank</span>}
                    </div>
                  </div>
                )}

                {(featuredTanks.length > 0 || tanksLoading) && (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Waves className="w-5 h-5 text-cyan-500" strokeWidth={2.5} />
                        <h3 className="font-black text-gray-900 dark:text-white">Featured Tanks</h3>
                        {featuredTanks.length > 0 && <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">{featuredTanks.length}</span>}
                      </div>
                      {isOwnProfile && <Link to="/my-tanks" className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline">View All →</Link>}
                    </div>
                    {tanksLoading
                      ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">{[1,2].map(i => <div key={i} className="h-28 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
                      : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {featuredTanks.map(tank => (
                            <Link key={tank.id} to={tank.publicSlug ? `/tanks/${tank.publicSlug}` : `/my-tanks/${tank.id}`}
                              className="group block bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-800 rounded-xl p-4 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all hover:shadow-md">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-black text-gray-900 dark:text-white truncate text-sm group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">{tank.name}</h4>
                                  <p className="text-xs text-gray-500 mt-0.5">{tank.volumeLiters}L</p>
                                </div>
                                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-cyan-500 transition-colors flex-shrink-0" strokeWidth={2.5} />
                              </div>
                              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold mb-2 ${tankTypeColor(tank.type)}`}>
                                {tank.type.charAt(0).toUpperCase() + tank.type.slice(1)}
                              </span>
                              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                                {(tank.inhabitants?.fish?.length ?? 0) > 0 && <span className="flex items-center gap-1"><Fish className="w-3 h-3" />{tank.inhabitants!.fish.reduce((s,i)=>s+i.quantity,0)}</span>}
                                {(tank.inhabitants?.plants?.length ?? 0) > 0 && <span className="flex items-center gap-1"><Leaf className="w-3 h-3" />{tank.inhabitants!.plants.reduce((s,i)=>s+i.quantity,0)}</span>}
                                {tank.parameters?.ph && <span className="flex items-center gap-1"><Droplets className="w-3 h-3" />pH {tank.parameters.ph}</span>}
                              </div>
                            </Link>
                          ))}
                        </div>
                    }
                  </div>
                )}

                {isOwnProfile && !tanksLoading && featuredTanks.length === 0 && (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center">
                    <Waves className="w-8 h-8 text-gray-300 dark:text-gray-700 mx-auto mb-3" strokeWidth={1.5} />
                    <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">No public tanks yet</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Enable <strong>Show in public profile</strong> on a tank to display it here.</p>
                    <Link to="/my-tanks" className="inline-flex items-center gap-2 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all text-xs">
                      <Waves className="w-3.5 h-3.5" />Go to My Tanks
                    </Link>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-rose-500" fill="currentColor" />
                        <h3 className="font-black text-gray-900 dark:text-white text-sm">Recent Favorites</h3>
                      </div>
                      <button onClick={() => setActiveTab('favorites')} className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline">View All</button>
                    </div>
                    <div className="space-y-1.5">
                      {favorites.slice(0, 4).map(fav => {
                        const data = fav.item_type === 'species' ? speciesData[fav.item_slug] : plantsData[fav.item_slug];
                        if (!data) return null;
                        return (
                          <Link key={fav.id} to={`/${fav.item_type === 'species' ? 'species' : 'plants'}/${data.slug}`}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                            <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden flex-shrink-0">
                              {data.image_url
                                ? <img src={data.image_url} alt={data.common_name} className="w-full h-full object-cover" />
                                : <div className="w-full h-full flex items-center justify-center">{fav.item_type === 'species' ? <Fish className="w-4 h-4 text-gray-400" /> : <Leaf className="w-4 h-4 text-gray-400" />}</div>
                              }
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-bold text-gray-900 dark:text-white truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{data.common_name}</div>
                              <div className="text-[10px] text-gray-500 italic truncate">{data.scientific_name}</div>

                            </div>
                          </Link>
                        );
                      })}
                      {favorites.length === 0 && <div className="py-6 text-center text-xs text-gray-400">No favorites yet</div>}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-amber-500" />
                        <h3 className="font-black text-gray-900 dark:text-white text-sm">Achievements</h3>
                        <span className="text-xs font-bold text-amber-600 dark:text-amber-400">{unlockedCount}/{achievements.length}</span>
                      </div>
                      <button onClick={() => setActiveTab('achievements')} className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline">View All</button>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {achievements.slice(0, 8).map(a => {
                        const Icon = a.icon;
                        return (
                          <div key={a.id} title={a.name}
                            className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 border-2 transition-all ${
                              a.unlocked ? 'bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800' : 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-40'
                            }`}>
                            {a.unlocked ? <Icon className="w-5 h-5 text-amber-600 dark:text-amber-400" strokeWidth={2} /> : <Lock className="w-4 h-4 text-gray-400" strokeWidth={2} />}
                            <span className="text-[9px] font-bold text-center leading-tight text-gray-500 dark:text-gray-400 px-0.5 line-clamp-1">{a.name.split(' ')[0]}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                    <h3 className="font-black text-gray-900 dark:text-white mb-4">Edit Profile</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Display Name</label>
                        <input type="text" value={profile.displayName} onChange={e => setProfile({...profile, displayName: e.target.value})}
                          className="w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Bio</label>
                        <textarea value={profile.bio} onChange={e => setProfile({...profile, bio: e.target.value})} rows={3}
                          placeholder="Tell the community about yourself…"
                          className="w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all resize-none text-sm" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Location</label>
                          <input type="text" value={profile.location} onChange={e => setProfile({...profile, location: e.target.value})} placeholder="Berlin, Germany"
                            className="w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Website</label>
                          <input type="url" value={profile.website} onChange={e => setProfile({...profile, website: e.target.value})} placeholder="https://example.com"
                            className="w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-sm" />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button onClick={handleSave} className="flex items-center gap-1.5 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl text-sm transition-all">
                        <Save className="w-4 h-4" />Save Changes
                      </button>
                      <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold rounded-xl text-sm transition-all">
                        Cancel
                      </button>
                    </div>
                  </motion.div>
                )}

                {isOwnProfile && (
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <h3 className="font-black text-indigo-900 dark:text-indigo-300 text-sm">Beta Feedback</h3>
                    </div>
                    <p className="text-xs text-indigo-700/80 dark:text-indigo-300/80 mb-3">Found a bug or have an idea? Send it directly to the developer.</p>
                    <div className="flex gap-2">
                      <textarea value={feedbackText} onChange={e => setFeedbackText(e.target.value)}
                        placeholder="I really like… but maybe you could add…" rows={2}
                        className="flex-1 px-3 py-2.5 bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-900/50 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none text-xs" />
                      <button onClick={handleSendFeedback} disabled={!feedbackText.trim()}
                        className="self-end px-3 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* ════ FAVORITES ═══════════════════════════════════════════ */}
            {activeTab === 'favorites' && (
              <motion.div key="favorites" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="space-y-5">
                {favSpecies.length > 0 && (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Fish className="w-4 h-4 text-cyan-500" strokeWidth={2.5} />
                      <h3 className="font-black text-gray-900 dark:text-white text-sm">Fish <span className="text-gray-400 font-normal">({favSpecies.length})</span></h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {favSpecies.map(fav => {
                        const data = speciesData[fav.item_slug];
                        if (!data) return null;
                        return (
                          <div key={fav.id} className="relative group">
                            <Link to={`/species/${data.slug}`}
                              className="block bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-700 overflow-hidden transition-all">
                              <div className="aspect-square bg-gray-100 dark:bg-gray-700">
                                {data.image_url ? <img src={data.image_url} alt={data.common_name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center"><Fish className="w-8 h-8 text-gray-300" /></div>}
                              </div>
                              <div className="p-2">
                                <div className="text-xs font-bold text-gray-900 dark:text-white truncate">{data.common_name}</div>
                                <div className="text-[10px] italic text-gray-400 truncate">{data.scientific_name}</div>
                              </div>
                            </Link>
                            {isOwnProfile && isEditing && (
                              <button onClick={e => { e.preventDefault(); toggleFavorite('species', fav.item_slug); }}
                                className="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all">
                                <Trash2 className="w-3 h-3" strokeWidth={2.5} />
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {favPlants.length > 0 && (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Leaf className="w-4 h-4 text-emerald-500" strokeWidth={2.5} />
                      <h3 className="font-black text-gray-900 dark:text-white text-sm">Plants <span className="text-gray-400 font-normal">({favPlants.length})</span></h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {favPlants.map(fav => {
                        const data = plantsData[fav.item_slug];
                        if (!data) return null;
                        return (
                          <div key={fav.id} className="relative group">
                            <Link to={`/plants/${data.slug}`}
                              className="block bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 overflow-hidden transition-all">
                              <div className="aspect-square bg-gray-100 dark:bg-gray-700">
                                {data.image_url ? <img src={data.image_url} alt={data.common_name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center"><Leaf className="w-8 h-8 text-gray-300" /></div>}
                              </div>
                              <div className="p-2">
                                <div className="text-xs font-bold text-gray-900 dark:text-white truncate">{data.common_name}</div>
                                <div className="text-[10px] italic text-gray-400 truncate">{data.scientific_name}</div>
                              </div>
                            </Link>
                            {isOwnProfile && isEditing && (
                              <button onClick={e => { e.preventDefault(); toggleFavorite('plant', fav.item_slug); }}
                                className="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all">
                                <Trash2 className="w-3 h-3" strokeWidth={2.5} />
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {favorites.length === 0 && (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-12 text-center">
                    <Heart className="w-10 h-10 text-gray-300 dark:text-gray-700 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">No favorites yet</h3>
                    <p className="text-sm text-gray-500">Start exploring species and plants!</p>
                  </div>
                )}
              </motion.div>
            )}

            {/* ════ ACHIEVEMENTS ════════════════════════════════════════ */}
            {activeTab === 'achievements' && (
              <motion.div key="achievements" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="space-y-5">
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Trophy className="w-5 h-5 text-amber-500" />
                        <h3 className="font-black text-amber-900 dark:text-amber-300">{unlockedCount} / {achievements.length} Achievements</h3>
                      </div>
                      <p className="text-xs text-amber-700 dark:text-amber-400">
                        {achievements.length - unlockedCount > 0 ? `${achievements.length - unlockedCount} more to unlock` : '🎉 All achievements unlocked!'}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-amber-600 dark:text-amber-400">{Math.round((unlockedCount / achievements.length) * 100)}%</div>
                      <div className="text-[10px] text-amber-600 dark:text-amber-500 uppercase tracking-wide">complete</div>
                    </div>
                  </div>
                  <div className="mt-3 w-full bg-amber-200/60 dark:bg-amber-900/30 rounded-full h-2 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${Math.round((unlockedCount / achievements.length) * 100)}%` }} transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-amber-500 rounded-full" />
                  </div>
                </div>
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                  {achievementCategories.map(cat => (
                    <button key={cat} onClick={() => setAchFilter(cat)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                        achFilter === cat ? 'bg-cyan-600 text-white shadow-md' : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-cyan-300'
                      }`}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      {cat !== 'all' && <span className="ml-1 opacity-70">({achievements.filter(a => a.category === cat && a.unlocked).length}/{achievements.filter(a => a.category === cat).length})</span>}
                    </button>
                  ))}
                </div>
                {filteredAchievements.some(a => a.unlocked) && (
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />Unlocked
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {filteredAchievements.filter(a => a.unlocked).map(a => <AchievementCard key={a.id} a={a} />)}
                    </div>
                  </div>
                )}
                {filteredAchievements.some(a => !a.unlocked) && (
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5" />Locked
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {filteredAchievements.filter(a => !a.unlocked).map(a => <AchievementCard key={a.id} a={a} />)}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* ════ ACTIVITY ════════════════════════════════════════════ */}
            {activeTab === 'activity' && (
              <motion.div key="activity" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>
                {activityFeed.length === 0 ? (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 p-12 text-center">
                    <TrendingUp className="w-10 h-10 text-gray-300 dark:text-gray-700 mx-auto mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">No activity yet</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Start by adding a tank, saving favorites, or completing achievements.</p>
                  </div>
                ) : (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-cyan-500" />
                        <h3 className="font-black text-gray-900 dark:text-white">Recent Activity</h3>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-500">{activityFeed.length}</span>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700" />
                      <div className="space-y-3">
                        {activityFeed.map((ev, i) => {
                          const Icon = ev.icon;
                          return (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.04 }}
                              className="flex items-start gap-3"
                            >
                              <div className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-white dark:border-gray-900 shadow-sm ${ev.bg}`}>
                                <Icon className={`w-4 h-4 ${ev.color}`} strokeWidth={2} />
                              </div>
                              <div className="flex-1 min-w-0 pt-1">
                                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                                  <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{ev.label}</p>
                                  {ev.badge && (
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${ev.badgeColor}`}>{ev.badge}</span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2">
                                  {ev.sub && <p className="text-xs text-gray-500 dark:text-gray-400">{ev.sub}</p>}
                                  {ev.timestamp && (
                                    <span className="flex items-center gap-0.5 text-[10px] text-gray-400 dark:text-gray-500">
                                      <Clock className="w-2.5 h-2.5" />
                                      {relativeTime(ev.timestamp)}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

          </AnimatePresence>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default ProfilePage;
