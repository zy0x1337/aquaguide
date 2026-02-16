-- Create tanks table (without inhabitants)
CREATE TABLE IF NOT EXISTS public.tanks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('freshwater', 'saltwater', 'brackish')),
  volume_liters INTEGER NOT NULL CHECK (volume_liters > 0),
  parameters JSONB NOT NULL DEFAULT '{"tempC": 24, "ph": 7.0, "ammonia": 0, "nitrite": 0, "nitrate": 0}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create tank_inhabitants table (if it doesn't exist)
CREATE TABLE IF NOT EXISTS public.tank_inhabitants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tank_id UUID REFERENCES public.tanks(id) ON DELETE CASCADE NOT NULL,
  species_id TEXT NOT NULL,
  species_name TEXT NOT NULL,
  species_type TEXT NOT NULL CHECK (species_type IN ('fish', 'plant')),
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  added_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security on both tables
ALTER TABLE public.tanks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tank_inhabitants ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view own tanks" ON public.tanks;
DROP POLICY IF EXISTS "Users can create own tanks" ON public.tanks;
DROP POLICY IF EXISTS "Users can update own tanks" ON public.tanks;
DROP POLICY IF EXISTS "Users can delete own tanks" ON public.tanks;

DROP POLICY IF EXISTS "Users can view own tank inhabitants" ON public.tank_inhabitants;
DROP POLICY IF EXISTS "Users can create own tank inhabitants" ON public.tank_inhabitants;
DROP POLICY IF EXISTS "Users can update own tank inhabitants" ON public.tank_inhabitants;
DROP POLICY IF EXISTS "Users can delete own tank inhabitants" ON public.tank_inhabitants;

-- RLS Policies for tanks
CREATE POLICY "Users can view own tanks"
  ON public.tanks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own tanks"
  ON public.tanks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tanks"
  ON public.tanks FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own tanks"
  ON public.tanks FOR DELETE
  USING (auth.uid() = user_id);

-- RLS Policies for tank_inhabitants
CREATE POLICY "Users can view own tank inhabitants"
  ON public.tank_inhabitants FOR SELECT
  USING (
    tank_id IN (
      SELECT id FROM public.tanks WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create own tank inhabitants"
  ON public.tank_inhabitants FOR INSERT
  WITH CHECK (
    tank_id IN (
      SELECT id FROM public.tanks WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own tank inhabitants"
  ON public.tank_inhabitants FOR UPDATE
  USING (
    tank_id IN (
      SELECT id FROM public.tanks WHERE user_id = auth.uid()
    )
  )
  WITH CHECK (
    tank_id IN (
      SELECT id FROM public.tanks WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete own tank inhabitants"
  ON public.tank_inhabitants FOR DELETE
  USING (
    tank_id IN (
      SELECT id FROM public.tanks WHERE user_id = auth.uid()
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_tanks_user_id ON public.tanks(user_id);
CREATE INDEX IF NOT EXISTS idx_tanks_created_at ON public.tanks(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tank_inhabitants_tank_id ON public.tank_inhabitants(tank_id);
CREATE INDEX IF NOT EXISTS idx_tank_inhabitants_species_type ON public.tank_inhabitants(species_type);

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
