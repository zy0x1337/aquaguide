-- Add all missing profile fields to profiles table

-- Header image
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS header_url TEXT;

COMMENT ON COLUMN profiles.header_url IS 'Base64 encoded header image (max 5MB)';

-- Display name
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS display_name TEXT;

COMMENT ON COLUMN profiles.display_name IS 'User display name shown on profile';

-- Bio
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS bio TEXT;

COMMENT ON COLUMN profiles.bio IS 'User biography/about text';

-- Location
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS location TEXT;

COMMENT ON COLUMN profiles.location IS 'User location (city, country)';

-- Website
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS website TEXT;

COMMENT ON COLUMN profiles.website IS 'User personal website URL';

-- Favorite species
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS favorite_species TEXT;

COMMENT ON COLUMN profiles.favorite_species IS 'User favorite aquarium species';
