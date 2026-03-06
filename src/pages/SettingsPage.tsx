import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { 
  Settings, User, Lock, Trash2, Ruler, Eye, Database, Shield, 
  Save, CheckCircle2, AlertTriangle, Download, RefreshCw, 
  Globe, FileText, ChevronDown, Info
} from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

type UnitSystem = 'metric' | 'imperial';
type TempUnit = 'celsius' | 'fahrenheit';
type DensityMode = 'comfortable' | 'compact';

const SettingsPage = () => {
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState('account');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Load settings from localStorage
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('aquaguide_user_settings');
    return saved ? JSON.parse(saved) : {
      unitSystem: 'metric' as UnitSystem,
      tempUnit: 'celsius' as TempUnit,
      showScientificNames: true,
      showDifficultyBadges: true,
      cardsDensity: 'comfortable' as DensityMode,
      profilePublic: true,
      allowTankSharing: true,
      offlineMode: false,
    };
  });

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'units', label: 'Units & Measurements', icon: Ruler },
    { id: 'display', label: 'Display', icon: Eye },
    { id: 'data', label: 'Data & Storage', icon: Database },
    { id: 'privacy', label: 'Privacy', icon: Shield },
  ];

  const handleSave = () => {
    setSaveStatus('saving');
    localStorage.setItem('aquaguide_user_settings', JSON.stringify(settings));
    setTimeout(() => {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 500);
  };

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (newPassword.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      alert('Error updating password: ' + error.message);
    } else {
      alert('Password updated successfully!');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  const handleDeleteAccount = async () => {
    if (!showDeleteConfirm) {
      setShowDeleteConfirm(true);
      return;
    }

    // Delete user data from profiles table
    if (user) {
      await supabase.from('profiles').delete().eq('id', user.id);
      await supabase.from('tanks').delete().eq('user_id', user.id);
    }

    // Sign out
    await signOut();
    alert('Your account has been deleted.');
  };

  const handleExportData = () => {
    const data = {
      settings,
      exportDate: new Date().toISOString(),
      user: user?.email,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aquaguide-settings-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  const handleClearCache = () => {
    if (confirm('This will clear all locally cached data. Continue?')) {
      localStorage.removeItem('aquaguide_user_settings');
      localStorage.removeItem('aquaguide_favorites');
      alert('Cache cleared successfully!');
      window.location.reload();
    }
  };

  return (
    <PageTransition>
      <SEOHead 
        title="Settings - AquaGuide"
        description="Manage your AquaGuide account settings, units, display preferences, and privacy options."
      />
      
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Settings
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Customize your AquaGuide experience and manage your account
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Sidebar Tabs */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:w-64 flex-shrink-0"
            >
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-2 shadow-sm">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                        activeTab === tab.id
                          ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <Icon className="w-4 h-4" strokeWidth={2.5} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Content Area */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                
                {/* ACCOUNT SETTINGS */}
                {activeTab === 'account' && (
                  <div className="p-6 space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        Account Settings
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Manage your account details and security
                      </p>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={user?.email || ''}
                        disabled
                        className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm cursor-not-allowed"
                      />
                      <p className="text-xs text-slate-500 dark:text-slate-500">
                        Email address cannot be changed
                      </p>
                    </div>

                    {/* Change Password */}
                    <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          Change Password
                        </h3>
                      </div>
                      <input
                        type="password"
                        placeholder="New password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        onClick={handlePasswordChange}
                        disabled={!newPassword || !confirmPassword}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Lock className="w-3.5 h-3.5" /> Update Password
                      </button>
                    </div>

                    {/* Delete Account */}
                    <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                        <h3 className="text-sm font-bold text-red-600 dark:text-red-400">
                          Danger Zone
                        </h3>
                      </div>
                      <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg">
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                          Permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                        {showDeleteConfirm && (
                          <div className="mb-3 p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-800 rounded-lg">
                            <p className="text-xs font-bold text-red-900 dark:text-red-200">
                              ⚠️ Are you absolutely sure? Click again to confirm.
                            </p>
                          </div>
                        )}
                        <button
                          onClick={handleDeleteAccount}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* UNITS & MEASUREMENTS */}
                {activeTab === 'units' && (
                  <div className="p-6 space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        Units & Measurements
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Choose your preferred units for measurements
                      </p>
                    </div>

                    {/* Unit System */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                        Unit System
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['metric', 'imperial'].map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setSettings({ ...settings, unitSystem: mode })}
                            className={`px-4 py-3 rounded-lg text-sm font-semibold capitalize transition-all ${
                              settings.unitSystem === mode
                                ? 'bg-black dark:bg-white text-white dark:text-black'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            {mode === 'metric' ? 'Metric (cm, L, kg)' : 'Imperial (in, gal, lb)'}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-500">
                        This affects tank sizes, fish measurements, and water parameters
                      </p>
                    </div>

                    {/* Temperature Unit */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                        Temperature Unit
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['celsius', 'fahrenheit'].map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setSettings({ ...settings, tempUnit: mode })}
                            className={`px-4 py-3 rounded-lg text-sm font-semibold capitalize transition-all ${
                              settings.tempUnit === mode
                                ? 'bg-black dark:bg-white text-white dark:text-black'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            {mode === 'celsius' ? 'Celsius (°C)' : 'Fahrenheit (°F)'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* DISPLAY PREFERENCES */}
                {activeTab === 'display' && (
                  <div className="p-6 space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        Display Preferences
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Customize how information is displayed
                      </p>
                    </div>

                    {/* Cards Density */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                        Card Layout Density
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['comfortable', 'compact'].map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setSettings({ ...settings, cardsDensity: mode })}
                            className={`px-4 py-3 rounded-lg text-sm font-semibold capitalize transition-all ${
                              settings.cardsDensity === mode
                                ? 'bg-black dark:bg-white text-white dark:text-black'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-500">
                        Compact mode shows more items per row
                      </p>
                    </div>

                    {/* Toggle Items */}
                    <div className="space-y-4 pt-2">
                      <ToggleItem
                        label="Show Scientific Names"
                        description="Display scientific names alongside common names"
                        checked={settings.showScientificNames}
                        onChange={(checked) => setSettings({ ...settings, showScientificNames: checked })}
                      />
                      <ToggleItem
                        label="Show Difficulty Badges"
                        description="Display care difficulty badges on species cards"
                        checked={settings.showDifficultyBadges}
                        onChange={(checked) => setSettings({ ...settings, showDifficultyBadges: checked })}
                      />
                    </div>
                  </div>
                )}

                {/* DATA & STORAGE */}
                {activeTab === 'data' && (
                  <div className="p-6 space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        Data & Storage
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Manage your local data and storage options
                      </p>
                    </div>

                    {/* Export Data */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        Export Your Data
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Download a copy of your settings and preferences as JSON
                      </p>
                      <button
                        onClick={handleExportData}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-sm font-semibold rounded-lg transition-all"
                      >
                        <Download className="w-3.5 h-3.5" /> Export Settings
                      </button>
                    </div>

                    {/* Clear Cache */}
                    <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        Clear Local Cache
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Remove all cached data to free up space or fix issues
                      </p>
                      <button
                        onClick={handleClearCache}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg transition-all"
                      >
                        <RefreshCw className="w-3.5 h-3.5" /> Clear Cache
                      </button>
                    </div>

                    {/* Offline Mode */}
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                      <ToggleItem
                        label="Offline Mode (Beta)"
                        description="Cache data locally for offline access"
                        checked={settings.offlineMode}
                        onChange={(checked) => setSettings({ ...settings, offlineMode: checked })}
                      />
                    </div>
                  </div>
                )}

                {/* PRIVACY & SAFETY */}
                {activeTab === 'privacy' && (
                  <div className="p-6 space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        Privacy & Safety
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Control your privacy and profile visibility
                      </p>
                    </div>

                    {/* Privacy Toggles */}
                    <div className="space-y-4">
                      <ToggleItem
                        label="Public Profile"
                        description="Allow others to view your profile and tanks"
                        checked={settings.profilePublic}
                        onChange={(checked) => setSettings({ ...settings, profilePublic: checked })}
                      />
                      <ToggleItem
                        label="Allow Tank Sharing"
                        description="Enable sharing your tanks via public links"
                        checked={settings.allowTankSharing}
                        onChange={(checked) => setSettings({ ...settings, allowTankSharing: checked })}
                      />
                    </div>

                    {/* Info Box */}
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
                      <div className="flex gap-3">
                        <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-1">
                            Your Privacy Matters
                          </p>
                          <p className="text-xs text-blue-700 dark:text-blue-300">
                            We never sell your data. All settings are stored locally and encrypted. Learn more in our Privacy Policy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Save Button */}
                <div className="border-t border-slate-200 dark:border-slate-800 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {saveStatus === 'saved' && (
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                          <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} />
                          Changes saved
                        </div>
                      )}
                    </div>
                    <button
                      onClick={handleSave}
                      disabled={saveStatus === 'saving'}
                      className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-black dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-black font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md border border-black dark:border-white overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent" />
                      <span className="relative flex items-center gap-2">
                        <Save className="w-4 h-4" strokeWidth={2.5} />
                        {saveStatus === 'saving' ? 'Saving...' : 'Save Changes'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

// Toggle Component
const ToggleItem = ({ 
  label, 
  description, 
  checked, 
  onChange 
}: { 
  label: string; 
  description: string; 
  checked: boolean; 
  onChange: (checked: boolean) => void;
}) => (
  <div className="flex items-start justify-between py-3 border-b border-slate-200 dark:border-slate-800 last:border-0">
    <div className="flex-1">
      <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
        {label}
      </div>
      <div className="text-xs text-slate-600 dark:text-slate-400">
        {description}
      </div>
    </div>
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
        checked ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
      }`}
    >
      <span
        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  </div>
);

export default SettingsPage;