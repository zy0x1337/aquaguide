-- Create tanks table
CREATE TABLE IF NOT EXISTS public.tanks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('freshwater', 'saltwater', 'brackish')),
  volume_liters INTEGER NOT NULL CHECK (volume_liters > 0),
  parameters JSONB NOT NULL DEFAULT '{}'::jsonb,
  inhabitants JSONB NOT NULL DEFAULT '{"fish": [], "plants": []}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for faster user queries
CREATE INDEX IF NOT EXISTS tanks_user_id_idx ON public.tanks(user_id);

-- Create index for tank type filtering
CREATE INDEX IF NOT EXISTS tanks_type_idx ON public.tanks(type);

-- Enable Row Level Security
ALTER TABLE public.tanks ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own tanks
CREATE POLICY "Users can view own tanks"
  ON public.tanks
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can create their own tanks
CREATE POLICY "Users can create own tanks"
  ON public.tanks
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own tanks
CREATE POLICY "Users can update own tanks"
  ON public.tanks
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can delete their own tanks
CREATE POLICY "Users can delete own tanks"
  ON public.tanks
  FOR DELETE
  USING (auth.uid() = user_id);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to call the function before update
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.tanks
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Add comment to table
COMMENT ON TABLE public.tanks IS 'User aquarium tanks with parameters and inhabitants';
COMMENT ON COLUMN public.tanks.parameters IS 'Water parameters as JSONB: {ph, tempC, ammonia, nitrite, nitrate, gh, kh, tds, salinity}';
COMMENT ON COLUMN public.tanks.inhabitants IS 'Tank inhabitants as JSONB: {fish: [{speciesId, speciesName, quantity, addedAt}], plants: [...]}';
