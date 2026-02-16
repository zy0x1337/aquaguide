-- Add missing columns that were referenced in import script but not in schema

ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS breeding_difficulty text;

COMMENT ON COLUMN public.species.breeding_difficulty IS 'Breeding difficulty: easy, moderate, difficult, very difficult';
