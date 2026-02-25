# Tank Profile Components

User-generated aquarium profiles with image galleries and inhabitant tracking.

## Features

- 📸 **Image Gallery**: Upload multiple tank photos with captions
- 🐠 **Inhabitant Tracking**: Add fish and plants with individual photos
- 💧 **Water Parameters**: Track pH, temperature, and other parameters
- 🔧 **Equipment Management**: List filters, heaters, lighting
- 📅 **Maintenance Logs**: Track water changes and testing
- 🌍 **Social Features**: Public/private profiles, likes, views

## Components

### TankProfileCard

Compact preview card for tank profiles.

```tsx
import { TankProfileCard } from '@/components/tankProfile';

<TankProfileCard 
  profile={tankProfile}
  showStats={true}
/>
```

**Props:**
- `profile: TankProfile` - Tank data
- `showStats?: boolean` - Show views/likes (default: true)

### TankProfileGallery

Grid layout for displaying multiple tank profiles.

```tsx
import { TankProfileGallery } from '@/components/tankProfile';

<TankProfileGallery
  profiles={userTanks}
  onCreateNew={() => setShowModal(true)}
  showCreateButton={true}
/>
```

**Props:**
- `profiles: TankProfile[]` - Array of tank profiles
- `onCreateNew?: () => void` - Create button handler
- `showCreateButton?: boolean` - Show create button (default: true)

### CreateTankProfileModal

Modal dialog for creating new tank profiles.

```tsx
import { CreateTankProfileModal } from '@/components/tankProfile';
import type { CreateTankProfileDTO } from '@/types/tankProfile';

const handleCreate = async (data: CreateTankProfileDTO) => {
  const newTank = await api.createTankProfile(data);
  // Handle success
};

<CreateTankProfileModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onSubmit={handleCreate}
/>
```

**Props:**
- `isOpen: boolean` - Modal visibility
- `onClose: () => void` - Close handler
- `onSubmit: (data: CreateTankProfileDTO) => void` - Submit handler

### TankImageUpload

Drag & drop image upload with preview and captions.

```tsx
import { TankImageUpload } from '@/components/tankProfile';

const handleUpload = async (images: ImageFile[]) => {
  const formData = new FormData();
  images.forEach((img) => {
    formData.append('images', img.file);
    formData.append('captions', img.caption || '');
    formData.append('isPrimary', String(img.isPrimary));
  });
  
  await api.uploadTankImages(tankId, formData);
};

<TankImageUpload
  onUpload={handleUpload}
  maxFiles={10}
  maxSizeMB={5}
/>
```

**Props:**
- `onUpload: (files: ImageFile[]) => void` - Upload handler
- `maxFiles?: number` - Maximum images (default: 10)
- `maxSizeMB?: number` - Max file size in MB (default: 5)

## Data Structure

### TankProfile

```typescript
interface TankProfile {
  id: string;
  userId: string;
  name: string;
  description?: string;
  type: TankType; // 'community' | 'planted' | 'biotope' | ...
  status: TankStatus; // 'planning' | 'cycling' | 'established' | ...
  volumeLiters: number;
  dimensions?: { length: number; width: number; height: number };
  setupDate?: string;
  images: TankImage[];
  inhabitants: TankInhabitant[];
  currentWaterParameters?: WaterParameters;
  equipment: Equipment[];
  maintenanceLogs: MaintenanceLog[];
  isPublic: boolean;
  likes: number;
  views: number;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
}
```

### TankInhabitant

Represents fish or plants in the tank, with their own images.

```typescript
interface TankInhabitant {
  id: string;
  type: 'species' | 'plant';
  slug: string; // Links to species/plant database
  commonName: string;
  scientificName: string;
  quantity: number;
  addedDate: string;
  notes?: string;
  images: TankImage[]; // User photos of this inhabitant
}
```

## Integration Guide

### 1. User Profile Page

```tsx
import { TankProfileGallery } from '@/components/tankProfile';
import { useTankProfiles } from '@/hooks/useTankProfiles';

const ProfilePage = () => {
  const { profiles, loading } = useTankProfiles();
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
      <TankProfileGallery
        profiles={profiles}
        onCreateNew={() => setShowModal(true)}
      />
      
      <CreateTankProfileModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleCreate}
      />
    </div>
  );
};
```

### 2. Tank Detail Page

```tsx
import { TankImageUpload } from '@/components/tankProfile';

const TankDetailPage = ({ tankId }) => {
  return (
    <div>
      {/* Tank Images Gallery */}
      <ImageGallery images={tank.images} />
      
      {/* Add More Images */}
      <TankImageUpload
        onUpload={(images) => handleImageUpload(tankId, images)}
      />
      
      {/* Inhabitants List with Photos */}
      {tank.inhabitants.map((inhabitant) => (
        <InhabitantCard
          key={inhabitant.id}
          inhabitant={inhabitant}
        />
      ))}
    </div>
  );
};
```

### 3. API Integration

Example API service:

```typescript
// src/services/tankProfileService.ts
import type { 
  TankProfile, 
  CreateTankProfileDTO,
  UploadTankImageDTO 
} from '@/types/tankProfile';

export const tankProfileService = {
  // Create new tank profile
  create: async (data: CreateTankProfileDTO): Promise<TankProfile> => {
    const response = await fetch('/api/tank-profiles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  
  // Upload tank images
  uploadImages: async (tankId: string, formData: FormData): Promise<TankImage[]> => {
    const response = await fetch(`/api/tank-profiles/${tankId}/images`, {
      method: 'POST',
      body: formData,
    });
    return response.json();
  },
  
  // Add inhabitant
  addInhabitant: async (tankId: string, data: AddInhabitantDTO) => {
    const response = await fetch(`/api/tank-profiles/${tankId}/inhabitants`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  
  // Upload inhabitant image
  uploadInhabitantImage: async (tankId: string, inhabitantId: string, file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch(
      `/api/tank-profiles/${tankId}/inhabitants/${inhabitantId}/images`,
      { method: 'POST', body: formData }
    );
    return response.json();
  },
};
```

## Styling

All components use the **Coral Theme** from the design system:

- Primary color: `coral-600` / `coral-700`
- Hover states: `coral-50` / `coral-900/20` (dark mode)
- Accent colors: `sapphire`, `emerald`, `amber`
- Consistent with rest of AquaGuide UI

## Backend Requirements

### Database Schema

```sql
-- Tank Profiles
CREATE TABLE tank_profiles (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(50),
  status VARCHAR(50),
  volume_liters INTEGER,
  setup_date DATE,
  is_public BOOLEAN DEFAULT true,
  likes INTEGER DEFAULT 0,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tank Images
CREATE TABLE tank_images (
  id UUID PRIMARY KEY,
  tank_id UUID REFERENCES tank_profiles(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  thumbnail_url TEXT,
  caption TEXT,
  is_primary BOOLEAN DEFAULT false,
  uploaded_at TIMESTAMP DEFAULT NOW()
);

-- Tank Inhabitants
CREATE TABLE tank_inhabitants (
  id UUID PRIMARY KEY,
  tank_id UUID REFERENCES tank_profiles(id) ON DELETE CASCADE,
  type VARCHAR(20), -- 'species' or 'plant'
  slug VARCHAR(255),
  common_name VARCHAR(255),
  scientific_name VARCHAR(255),
  quantity INTEGER,
  added_date DATE,
  notes TEXT
);

-- Inhabitant Images
CREATE TABLE inhabitant_images (
  id UUID PRIMARY KEY,
  inhabitant_id UUID REFERENCES tank_inhabitants(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  caption TEXT,
  uploaded_at TIMESTAMP DEFAULT NOW()
);
```

### Storage

Recommended: **Cloudinary** or **AWS S3** for image hosting

- Automatic thumbnail generation
- Image optimization
- CDN delivery
- Direct upload from browser (signed URLs)

## Next Steps

1. **Backend API**: Implement REST endpoints
2. **Image Storage**: Setup Cloudinary/S3
3. **Context/Hooks**: Create `useTankProfiles` hook
4. **Profile Pages**: Add tank profiles to user pages
5. **Social Features**: Implement likes, comments
6. **Search/Discovery**: Public tank gallery page

## License

Part of AquaGuide project.
