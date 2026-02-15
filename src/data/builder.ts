import { TankConfig, HardscapeItem } from '../types/builder';

export const PRESET_TANKS: TankConfig[] = [
  { name: 'Nano (20L)', length: 40, width: 25, height: 25, volume: 20, aspectRatio: 1.6 },
  { name: 'Nano (30L)', length: 30, width: 30, height: 35, volume: 30, aspectRatio: 0.86 },
  { name: 'Standard (54L)', length: 60, width: 30, height: 30, volume: 54, aspectRatio: 2.0 },
  { name: 'Standard (112L)', length: 80, width: 35, height: 40, volume: 112, aspectRatio: 2.0 },
  { name: 'Medium (180L)', length: 100, width: 40, height: 45, volume: 180, aspectRatio: 2.22 },
  { name: 'Large (240L)', length: 120, width: 40, height: 50, volume: 240, aspectRatio: 2.4 },
  { name: 'XL (350L)', length: 150, width: 50, height: 50, volume: 350, aspectRatio: 3.0 },
  { name: 'Custom', length: 80, width: 40, height: 40, volume: 128, aspectRatio: 2.0 },
];

export const HARDSCAPE_LIBRARY: HardscapeItem[] = [
  { id: 'rock-s', name: 'Small Rock', icon: '🪨', size: 5, color: '#666', type: 'rock' },
  { id: 'rock-m', name: 'Medium Rock', icon: '🪨', size: 10, color: '#555', type: 'rock' },
  { id: 'rock-l', name: 'Large Rock', icon: '🗿', size: 18, color: '#444', type: 'rock' },
  { id: 'seiryu', name: 'Seiryu Stone', icon: '⛰️', size: 15, color: '#5a5a5a', type: 'rock' },
  { id: 'dragon', name: 'Dragon Stone', icon: '🏔️', size: 12, color: '#7a6952', type: 'rock' },
  { id: 'wood-s', name: 'Driftwood', icon: '🪵', size: 12, color: '#8B4513', type: 'wood' },
  { id: 'wood-l', name: 'Large Wood', icon: '🪵', size: 25, color: '#654321', type: 'wood' },
  { id: 'spiderwood', name: 'Spiderwood', icon: '🌳', size: 20, color: '#8B7355', type: 'wood' },
  { id: 'manzanita', name: 'Manzanita', icon: '🌿', size: 22, color: '#A0522D', type: 'wood' },
  { id: 'cave', name: 'Cave', icon: '🏔️', size: 10, color: '#777', type: 'decoration' },
  { id: 'shell', name: 'Shell', icon: '🐚', size: 3, color: '#F5DEB3', type: 'decoration' },
  { id: 'coconut', name: 'Coconut Cave', icon: '🥥', size: 8, color: '#8B4513', type: 'decoration' },
  { id: 'bamboo', name: 'Bamboo Tube', icon: '🎋', size: 10, color: '#6B8E23', type: 'decoration' },
];
