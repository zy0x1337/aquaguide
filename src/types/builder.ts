import { Species } from './species';
import { Plant } from './plant';

export interface HardscapeItem {
  id: string;
  name: string;
  icon: string;
  size: number;
  color: string;
  type: 'rock' | 'wood' | 'decoration';
}

export interface TankItem {
  id: string;
  type: 'fish' | 'plant' | 'hardscape';
  data: Species | Plant | HardscapeItem;
  position: { x: number; y: number; z: number };
  count?: number;
  locked?: boolean;
  visuals?: {
    rotation?: number;
    flipX?: boolean;
    swayDelay?: number;
    floatSpeed?: number;
  };
}

export interface TankConfig {
  name: string;
  length: number;
  width: number;
  height: number;
  volume: number;
  aspectRatio: number;
}
