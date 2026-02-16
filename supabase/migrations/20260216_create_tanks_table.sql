-- Create tanks table
CREATE TABLE IF NOT EXISTS public.tanks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('freshwater', 'saltwater', 'brackish')),
  volume_liters INTEGER NOT NULL CHECK (volume_liters > 0),
  parameters JSONB NOT NULL DEFAULT '{"tempC": 24, "ph": 7.0, "ammonia": 0, "nitrite": 0, "nitrate": 0}'::jsonb,
  inhabitants JSONB NOT NULL DEFAULT '{"fish": [], "plants": []}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.tanks ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (for re-running migration)
DROP POLICY IF EXISTS "Users can view own tanks" ON public.tanks;
DROP POLICY IF EXISTS "Users can create own tanks" ON public.tanks;
DROP POLICY IF EXISTS "Users can update own tanks" ON public.tanks;
DROP POLICY IF EXISTS "Users can delete own tanks" ON public.tanks;

-- RLS Policies
-- Users can view their own tanks
CREATE POLICY "Users can view own tanks"
  ON public.tanks
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can create their own tanks
CREATE POLICY "Users can create own tanks"
  ON public.tanks
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own tanks
CREATE POLICY "Users can update own tanks"
  ON public.tanks
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Users can delete their own tanks
CREATE POLICY "Users can delete own tanks"
  ON public.tanks
  FOR DELETE
  USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_tanks_user_id ON public.tanks(user_id);
CREATE INDEX IF NOT EXISTS idx_tanks_created_at ON public.tanks(created_at DESC);

-- Enable realtime for tanks table (only if publication exists)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.tanks;
  END IF;
END $$;

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if exists
DROP TRIGGER IF EXISTS set_updated_at ON public.tanks;

-- Trigger to update updated_at on tank changes
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.tanks
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();
