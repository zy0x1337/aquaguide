-- Add substrate and lighting columns to tanks table
ALTER TABLE tanks 
ADD COLUMN IF NOT EXISTS substrate TEXT,
ADD COLUMN IF NOT EXISTS lighting TEXT;

-- Add comments for documentation
COMMENT ON COLUMN tanks.substrate IS 'Type of substrate: sand, gravel, soil, bare';
COMMENT ON COLUMN tanks.lighting IS 'Lighting level: low, medium, high';
