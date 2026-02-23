import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { Settings, Bell, Shield, Palette, Database, Save, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const SettingsPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('general');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // Settings state
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyDigest: true,
    darkMode: 'system',
    language: 'en',
    measurementSystem: 'metric',
  });

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'data', label: 'Data & Storage', icon: Database },
  ];

  const handleSave = async () => {
    setSaveStatus('saving');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2000);
  };

  return (
    <PageTransition>
      <SEOHead 
        title="Settings - AquaGuide"
        description="Manage your AquaGuide account settings, preferences, and privacy options."
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
              Manage your account settings and preferences
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
                
                {/* General Settings */}
                {activeTab === 'general' && (
                  <div className="p-6 space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        General Settings
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Manage your basic account preferences
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
                        Contact support to change your email address
                      </p>
                    </div>

                    {/* Language */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                        Language
                      </label>
                      <select
                        value={settings.language}
                        onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      >
                        <option value="en">English</option>
                        <option value="de">Deutsch</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                      </select>
                    </div>

                    {/* Measurement System */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                        Measurement System
                      </label>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSettings({ ...settings, measurementSystem: 'metric' })}
                          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                            settings.measurementSystem === 'metric'
                              ? 'bg-black dark:bg-white text-white dark:text-black'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          Metric (cm, L, °C)
                        </button>
                        <button
                          onClick={() => setSettings({ ...settings, measurementSystem: 'imperial' })}
                          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                            settings.measurementSystem === 'imperial'
                              ? 'bg-black dark:bg-white text-white dark:text-black'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          Imperial (in, gal, °F)
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notifications Settings */}
                {activeTab === 'notifications' && (
                  <div className="p-6 space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        Notifications
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Control how and when you receive notifications
                      </p>
                    </div>

                    {/* Toggle Items */}
                    <div className="space-y-4">
                      <ToggleItem
                        label="Email Notifications"
                        description="Receive updates and alerts via email"
                        checked={settings.emailNotifications}
                        onChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                      />
                      <ToggleItem
                        label="Push Notifications"
                        description="Get instant notifications in your browser"
                        checked={settings.pushNotifications}
                        onChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
                      />
                      <ToggleItem
                        label="Weekly Digest"
                        description="Receive a weekly summary of your tanks and activity"
                        checked={settings.weeklyDigest}
                        onChange={(checked) => setSettings({ ...settings, weeklyDigest: checked })}
                      />
                    </div>
                  </div>
                )}

                {/* Privacy Settings */}
                {activeTab === 'privacy' && (
                  <div className="p-6 space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        Privacy & Security
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Manage your privacy and security settings
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" strokeWidth={2.5} />
                          <div>
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              Account Security
                            </h3>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                              Your account is protected with industry-standard encryption
                            </p>
                            <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                              Change Password
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-900">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" strokeWidth={2.5} />
                          <div>
                            <h3 className="text-sm font-semibold text-red-900 dark:text-red-400 mb-1">
                              Delete Account
                            </h3>
                            <p className="text-xs text-red-700 dark:text-red-400/80 mb-3">
                              Permanently delete your account and all associated data
                            </p>
                            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-semibold transition-all">
                              Delete Account
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Appearance Settings */}
                {activeTab === 'appearance' && (
                  <div className="p-6 space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        Appearance
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Customize how AquaGuide looks
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                        Theme
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {['light', 'dark', 'system'].map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setSettings({ ...settings, darkMode: mode })}
                            className={`px-4 py-3 rounded-lg text-sm font-semibold capitalize transition-all ${
                              settings.darkMode === mode
                                ? 'bg-black dark:bg-white text-white dark:text-black'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Data Settings */}
                {activeTab === 'data' && (
                  <div className="p-6 space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        Data & Storage
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Manage your data and storage preferences
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">Storage Used</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">2.4 MB / 100 MB</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-600 dark:bg-indigo-400" style={{ width: '2.4%' }} />
                        </div>
                      </div>

                      <button className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                        Export My Data
                      </button>

                      <button className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                        Clear Cache
                      </button>
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
      className={`relative w-11 h-6 rounded-full transition-colors ${
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