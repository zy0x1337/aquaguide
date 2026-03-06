import { useState, useEffect } from 'react';

export type UnitSystem = 'metric' | 'imperial';
export type TempUnit = 'celsius' | 'fahrenheit';
export type DensityMode = 'comfortable' | 'compact';

export interface UserSettings {
  unitSystem: UnitSystem;
  tempUnit: TempUnit;
  showScientificNames: boolean;
  showDifficultyBadges: boolean;
  cardsDensity: DensityMode;
  profilePublic: boolean;
  allowTankSharing: boolean;
  offlineMode: boolean;
}

const DEFAULT_SETTINGS: UserSettings = {
  unitSystem: 'metric',
  tempUnit: 'celsius',
  showScientificNames: true,
  showDifficultyBadges: true,
  cardsDensity: 'comfortable',
  profilePublic: true,
  allowTankSharing: true,
  offlineMode: false,
};

const STORAGE_KEY = 'aquaguide_user_settings';

/**
 * Hook for managing user settings
 * Automatically syncs with localStorage
 */
export const useSettings = () => {
  const [settings, setSettings] = useState<UserSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  // Persist to localStorage whenever settings change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
      // Dispatch event for other tabs/components
      window.dispatchEvent(new CustomEvent('settings-updated', { detail: settings }));
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  }, [settings]);

  // Listen for settings updates from other tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(e.newValue) });
        } catch {}
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const updateSetting = <K extends keyof UserSettings>(key: K, value: UserSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  return {
    settings,
    updateSetting,
    resetSettings,
  };
};

/**
 * Hook to get a specific setting value
 */
export const useSettingValue = <K extends keyof UserSettings>(key: K): UserSettings[K] => {
  const { settings } = useSettings();
  return settings[key];
};
