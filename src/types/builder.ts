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
  notes?: string; // User notes per item
  estimatedPrice?: number; // Price tracking
  priority?: 'high' | 'medium' | 'low'; // Shopping priority
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
  substrate?: 'sand' | 'gravel' | 'soil' | 'bare'; // Substrate type for warnings
  hasFilter?: boolean;
  hasHeater?: boolean;
}

export interface SmartSuggestion {
  id: string;
  type: 'fish' | 'plant' | 'equipment' | 'maintenance';
  title: string;
  description: string;
  species?: Species | Plant; // If suggesting a specific species
  priority: 'high' | 'medium' | 'low';
  reason: string; // Why is this suggested?
}

export interface CompatibilityIssue {
  severity: 'critical' | 'warning' | 'info';
  affectedItems: string[]; // Item IDs
  message: string;
  solution?: string;
}
