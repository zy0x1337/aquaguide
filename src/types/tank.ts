export interface Tank {
  id: string;
  name: string;
  type: string; // 'freshwater' | 'saltwater' | 'brackish'
  volumeLiters: number;
  createdAt: string;
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
}

export interface TankInhabitant {
  speciesId: string;
  speciesName: string;
  quantity: number;
  addedAt: string;
}
