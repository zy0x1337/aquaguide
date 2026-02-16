-- Complete schema extension to capture ALL fields from Species type
-- Based on the full bettaSplendens example with advanced data

-- Drop existing columns that need to be JSONB for complex data
ALTER TABLE public.species DROP COLUMN IF EXISTS behavior_tags;

-- Add all missing fields as JSONB for maximum flexibility
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS fun_fact text,
ADD COLUMN IF NOT EXISTS region text,
ADD COLUMN IF NOT EXISTS biotope text,
ADD COLUMN IF NOT EXISTS icon_shape text,
ADD COLUMN IF NOT EXISTS color text,
ADD COLUMN IF NOT EXISTS flow text,
ADD COLUMN IF NOT EXISTS substrate text,
ADD COLUMN IF NOT EXISTS swimming_zone jsonb,
ADD COLUMN IF NOT EXISTS space_needs jsonb,
ADD COLUMN IF NOT EXISTS bioload_multiplier numeric,
ADD COLUMN IF NOT EXISTS planting text,
ADD COLUMN IF NOT EXISTS planting_notes text,
ADD COLUMN IF NOT EXISTS hardscape text[],
ADD COLUMN IF NOT EXISTS behavior_tags jsonb,
ADD COLUMN IF NOT EXISTS behavior_description text,
ADD COLUMN IF NOT EXISTS good_mates text[],
ADD COLUMN IF NOT EXISTS bad_mates text[],
ADD COLUMN IF NOT EXISTS compatibility_notes text,
ADD COLUMN IF NOT EXISTS compatibility_rules jsonb,
ADD COLUMN IF NOT EXISTS ideal_tankmates jsonb,
ADD COLUMN IF NOT EXISTS aggression_level jsonb,
ADD COLUMN IF NOT EXISTS activity jsonb,
ADD COLUMN IF NOT EXISTS social_structure jsonb,
ADD COLUMN IF NOT EXISTS fin_nipping jsonb,
ADD COLUMN IF NOT EXISTS effort text,
ADD COLUMN IF NOT EXISTS cost text,
ADD COLUMN IF NOT EXISTS special_requirements text[],
ADD COLUMN IF NOT EXISTS pro_tips text[],
ADD COLUMN IF NOT EXISTS common_mistakes text[],
ADD COLUMN IF NOT EXISTS feeding jsonb,
ADD COLUMN IF NOT EXISTS maintenance jsonb,
ADD COLUMN IF NOT EXISTS equipment jsonb,
ADD COLUMN IF NOT EXISTS common_diseases text[],
ADD COLUMN IF NOT EXISTS sensitivities text[],
ADD COLUMN IF NOT EXISTS wild_habitat text,
ADD COLUMN IF NOT EXISTS sexual_dimorphism text,
ADD COLUMN IF NOT EXISTS variants text[],
ADD COLUMN IF NOT EXISTS breeding_method text,
ADD COLUMN IF NOT EXISTS breeding_trigger text,
ADD COLUMN IF NOT EXISTS fry_care text,
ADD COLUMN IF NOT EXISTS breeding_notes text,
ADD COLUMN IF NOT EXISTS experience_data jsonb;

-- Update existing columns to allow more data
ALTER TABLE public.species ALTER COLUMN description TYPE text;
ALTER TABLE public.species ALTER COLUMN care_guide TYPE text;
ALTER TABLE public.species ALTER COLUMN diet TYPE text;

-- Add indexes for common queries
CREATE INDEX IF NOT EXISTS idx_species_type ON public.species(type);
CREATE INDEX IF NOT EXISTS idx_species_difficulty ON public.species(difficulty);
CREATE INDEX IF NOT EXISTS idx_species_family ON public.species(family);
CREATE INDEX IF NOT EXISTS idx_species_origin ON public.species(origin);
CREATE INDEX IF NOT EXISTS idx_species_region ON public.species(region);

-- Add GIN indexes for JSONB columns (for faster queries)
CREATE INDEX IF NOT EXISTS idx_species_behavior_tags ON public.species USING GIN (behavior_tags);
CREATE INDEX IF NOT EXISTS idx_species_compatibility_rules ON public.species USING GIN (compatibility_rules);

COMMENT ON COLUMN public.species.fun_fact IS 'Interesting fact about the species';
COMMENT ON COLUMN public.species.swimming_zone IS 'Primary/secondary swimming zones with preference percentage';
COMMENT ON COLUMN public.species.space_needs IS 'Horizontal/vertical space and territory requirements';
COMMENT ON COLUMN public.species.compatibility_rules IS 'Advanced compatibility rules with severity levels';
COMMENT ON COLUMN public.species.aggression_level IS 'Quantified aggression: intraspecific, interspecific, territorial (0-10)';
COMMENT ON COLUMN public.species.experience_data IS 'Success rates, common failures, estimated costs';
