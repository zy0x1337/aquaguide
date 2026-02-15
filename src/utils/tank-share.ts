import { TankConfig, TankItem, HardscapeItem } from '../types/builder';
import { allSpecies } from '../data/species';
import { allPlants } from '../data/plants';
import { HARDSCAPE_LIBRARY } from '../data/builder';

/**
 * Encode tank state to URL-safe base64 string
 */
export const encodeTankToURL = (tankConfig: TankConfig, items: TankItem[]): string => {
  const state = {
    t: { // tank
      l: tankConfig.length,
      w: tankConfig.width,
      h: tankConfig.height,
      v: tankConfig.volume,
    },
    i: items.map(item => ({ // items
      type: item.type[0], // f/p/h
      id: extractId(item),
      pos: [Math.round(item.position.x), Math.round(item.position.y), Math.round(item.position.z)],
      cnt: item.count || undefined,
      vis: {
        r: item.visuals?.rotation ? Math.round(item.visuals.rotation) : undefined,
        f: item.visuals?.flipX || undefined,
      }
    }))
  };

  const json = JSON.stringify(state);
  return btoa(json).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
};

/**
 * Decode URL parameter back to tank state
 */
export const decodeTankFromURL = (encoded: string): { tankConfig: TankConfig, items: TankItem[] } | null => {
  try {
    const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    const json = atob(base64);
    const state = JSON.parse(json);

    const tankConfig: TankConfig = {
      name: 'Shared Tank',
      length: state.t.l,
      width: state.t.w,
      height: state.t.h,
      volume: state.t.v,
      aspectRatio: state.t.l / state.t.h,
    };

    const items: TankItem[] = state.i.map((i: any, idx: number) => {
      const type = i.type === 'f' ? 'fish' : i.type === 'p' ? 'plant' : 'hardscape';
      let data: any;

      if (type === 'fish') {
        data = allSpecies.find(s => s.id === i.id);
        if (!data) return null;
      } else if (type === 'plant') {
        data = allPlants.find(p => p.id === i.id);
        if (!data) return null;
      } else {
        data = HARDSCAPE_LIBRARY.find((h: HardscapeItem) => h.name === i.id || h.id === i.id);
        if (!data) return null;
      }

      return {
        id: `${type}-${i.id}-${Date.now()}-${idx}`,
        type,
        data,
        position: { x: i.pos[0], y: i.pos[1], z: i.pos[2] },
        count: i.cnt,
        locked: false,
        visuals: {
          rotation: i.vis?.r || 0,
          flipX: i.vis?.f || false,
          swayDelay: Math.random() * 2,
          floatSpeed: 3 + Math.random() * 2,
        }
      };
    }).filter(Boolean) as TankItem[];

    return { tankConfig, items };
  } catch (e) {
    console.error('Failed to decode tank from URL:', e);
    return null;
  }
};

/**
 * Extract ID from TankItem data
 */
const extractId = (item: TankItem): string => {
  if ('id' in item.data) {
    return (item.data as any).id;
  } else if ('name' in item.data) {
    return (item.data as HardscapeItem).name;
  }
  return 'unknown';
};

/**
 * Generate shareable URL
 */
export const generateShareURL = (tankConfig: TankConfig, items: TankItem[]): string => {
  const encoded = encodeTankToURL(tankConfig, items);
  const baseURL = window.location.origin + window.location.pathname;
  return `${baseURL}?tank=${encoded}`;
};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    }
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
};
