-- Add header_url column to profiles table for custom header images
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS header_url TEXT;

-- Add comment to the column
COMMENT ON COLUMN profiles.header_url IS 'Base64 encoded header image (max 5MB)';
