export interface TankParameters {
  ph: number;
  tempC: number;
  ammonia: number;
  nitrite: number;
  nitrate: number;
  gh?: number;
  kh?: number;
  tds?: number;
  salinity?: number;
}

export interface TankInhabitant {
  speciesId: string;
  speciesName: string;
  quantity: number;
  addedAt: string;
}

export interface Tank {
  id: string;
  name: string;
  type: 'freshwater' | 'saltwater' | 'brackish';
  volumeLiters: number;
  substrate?: string;
  lighting?: string;
  parameters: TankParameters;
  inhabitants?: {
    fish: TankInhabitant[];
    plants: TankInhabitant[];
  };
  /** Whether the tank is publicly accessible via publicSlug */
  isPublic?: boolean;
  /** URL-safe slug for the public tank profile, e.g. "nemos-tank-a3f9" */
  publicSlug?: string;
  /** Whether this tank is pinned to the user's public profile page */
  isFeaturedOnProfile?: boolean;
  createdAt: string;
  updatedAt: string;
}
