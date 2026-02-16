-- Table for water parameter readings history
CREATE TABLE IF NOT EXISTS public.tank_parameter_readings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tank_id UUID REFERENCES public.tanks(id) ON DELETE CASCADE NOT NULL,
  temp_c DECIMAL(4,2),
  ph DECIMAL(3,2),
  ammonia DECIMAL(4,2),
  nitrite DECIMAL(4,2),
  nitrate DECIMAL(5,2),
  gh DECIMAL(4,1),
  kh DECIMAL(4,1),
  tds INTEGER,
  salinity DECIMAL(4,2),
  notes TEXT,
  measured_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table for maintenance logs
CREATE TABLE IF NOT EXISTS public.tank_maintenance_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tank_id UUID REFERENCES public.tanks(id) ON DELETE CASCADE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('water_change', 'filter_cleaning', 'equipment_maintenance', 'medication', 'other')),
  title TEXT NOT NULL,
  description TEXT,
  water_change_percent INTEGER CHECK (water_change_percent >= 0 AND water_change_percent <= 100),
  performed_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.tank_parameter_readings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tank_maintenance_logs ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view own tank parameter readings" ON public.tank_parameter_readings;
DROP POLICY IF EXISTS "Users can create own tank parameter readings" ON public.tank_parameter_readings;
DROP POLICY IF EXISTS "Users can update own tank parameter readings" ON public.tank_parameter_readings;
DROP POLICY IF EXISTS "Users can delete own tank parameter readings" ON public.tank_parameter_readings;

DROP POLICY IF EXISTS "Users can view own tank maintenance logs" ON public.tank_maintenance_logs;
DROP POLICY IF EXISTS "Users can create own tank maintenance logs" ON public.tank_maintenance_logs;
DROP POLICY IF EXISTS "Users can update own tank maintenance logs" ON public.tank_maintenance_logs;
DROP POLICY IF EXISTS "Users can delete own tank maintenance logs" ON public.tank_maintenance_logs;

-- RLS Policies for tank_parameter_readings
CREATE POLICY "Users can view own tank parameter readings"
  ON public.tank_parameter_readings FOR SELECT
  USING (
    tank_id IN (
      SELECT id FROM public.tanks WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create own tank parameter readings"
  ON public.tank_parameter_readings FOR INSERT
  WITH CHECK (
    tank_id IN (
      SELECT id FROM public.tanks WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own tank parameter readings"
  ON public.tank_parameter_readings FOR UPDATE
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

CREATE POLICY "Users can delete own tank parameter readings"
  ON public.tank_parameter_readings FOR DELETE
  USING (
    tank_id IN (
      SELECT id FROM public.tanks WHERE user_id = auth.uid()
    )
  );

-- RLS Policies for tank_maintenance_logs
CREATE POLICY "Users can view own tank maintenance logs"
  ON public.tank_maintenance_logs FOR SELECT
  USING (
    tank_id IN (
      SELECT id FROM public.tanks WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create own tank maintenance logs"
  ON public.tank_maintenance_logs FOR INSERT
  WITH CHECK (
    tank_id IN (
      SELECT id FROM public.tanks WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own tank maintenance logs"
  ON public.tank_maintenance_logs FOR UPDATE
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

CREATE POLICY "Users can delete own tank maintenance logs"
  ON public.tank_maintenance_logs FOR DELETE
  USING (
    tank_id IN (
      SELECT id FROM public.tanks WHERE user_id = auth.uid()
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_tank_parameter_readings_tank_id ON public.tank_parameter_readings(tank_id);
CREATE INDEX IF NOT EXISTS idx_tank_parameter_readings_measured_at ON public.tank_parameter_readings(measured_at DESC);
CREATE INDEX IF NOT EXISTS idx_tank_maintenance_logs_tank_id ON public.tank_maintenance_logs(tank_id);
CREATE INDEX IF NOT EXISTS idx_tank_maintenance_logs_performed_at ON public.tank_maintenance_logs(performed_at DESC);
CREATE INDEX IF NOT EXISTS idx_tank_maintenance_logs_type ON public.tank_maintenance_logs(type);
