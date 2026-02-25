/**
 * Tank Profile Types
 * User-generated aquarium profiles with images and inhabitants
 */

export type TankType = 'freshwater' | 'planted' | 'biotope' | 'community' | 'species-only' | 'nano' | 'paludarium';
export type TankStatus = 'planning' | 'cycling' | 'established' | 'maintenance' | 'archived';

export interface TankImage {
  id: string;
  url: string;
  thumbnailUrl?: string;
  caption?: string;
  uploadedAt: string;
  isPrimary: boolean;
  width?: number;
  height?: number;
  fileSize?: number;
}

export interface TankInhabitant {
  id: string;
  type: 'species' | 'plant';
  slug: string; // Reference to species/plant slug
  commonName: string;
  scientificName: string;
  quantity: number;
  addedDate: string;
  notes?: string;
  // User-uploaded images of this specific inhabitant in their tank
  images: TankImage[];
}

export interface WaterParameters {
  temperature: number;
  ph: number;
  ammonia?: number;
  nitrite?: number;
  nitrate?: number;
  gh?: number; // General Hardness
  kh?: number; // Carbonate Hardness
  lastTested: string;
}

export interface Equipment {
  id: string;
  category: 'filter' | 'heater' | 'light' | 'co2' | 'other';
  brand?: string;
  model?: string;
  description: string;
}

export interface MaintenanceLog {
  id: string;
  date: string;
  type: 'water-change' | 'cleaning' | 'testing' | 'feeding' | 'trimming' | 'other';
  description: string;
  waterParameters?: Partial<WaterParameters>;
}

export interface TankProfile {
  id: string;
  userId: string;
  
  // Basic Info
  name: string;
  description?: string;
  type: TankType;
  status: TankStatus;
  
  // Tank Specifications
  volumeLiters: number;
  dimensions?: {
    length: number; // cm
    width: number;  // cm
    height: number; // cm
  };
  setupDate?: string;
  
  // Images
  images: TankImage[];
  
  // Inhabitants (Fish & Plants)
  inhabitants: TankInhabitant[];
  
  // Water & Equipment
  currentWaterParameters?: WaterParameters;
  equipment: Equipment[];
  
  // Maintenance
  maintenanceLogs: MaintenanceLog[];
  
  // Social Features
  isPublic: boolean;
  likes: number;
  views: number;
  
  // Metadata
  createdAt: string;
  updatedAt: string;
  tags?: string[];
}

// DTOs for API
export interface CreateTankProfileDTO {
  name: string;
  description?: string;
  type: TankType;
  volumeLiters: number;
  dimensions?: TankProfile['dimensions'];
  setupDate?: string;
  isPublic?: boolean;
}

export interface UpdateTankProfileDTO extends Partial<CreateTankProfileDTO> {
  status?: TankStatus;
}

export interface AddInhabitantDTO {
  type: 'species' | 'plant';
  slug: string;
  quantity: number;
  notes?: string;
}

export interface UploadTankImageDTO {
  tankId: string;
  file: File;
  caption?: string;
  isPrimary?: boolean;
}

export interface UploadInhabitantImageDTO {
  tankId: string;
  inhabitantId: string;
  file: File;
  caption?: string;
}
