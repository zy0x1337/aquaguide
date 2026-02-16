export interface Tank {
  id: string;
  name: string;
  type: string; // 'freshwater' | 'saltwater' | 'brackish'
  volumeLiters: number;
  createdAt: string;
  substrate?: string; // 'sand' | 'gravel' | 'soil' | 'bare'
  lighting?: string; // 'low' | 'medium' | 'high'
  parameters: WaterParameters;
  inhabitants?: {
    fish: TankInhabitant[];
    plants: TankInhabitant[];
  };
}

export interface WaterParameters {
  tempC: number;
  ph: number;
  ammonia: number;
  nitrite: number;
  nitrate: number;
  gh?: number; // General Hardness (°dGH)
  kh?: number; // Carbonate Hardness (°dKH)
  tds?: number; // Total Dissolved Solids (ppm)
  salinity?: number; // For saltwater tanks (ppt)
}

export interface TankInhabitant {
  speciesId: string;
  speciesName: string;
  quantity: number;
  addedAt: string;
}
