-- Extend species table with additional fields for comprehensive data

-- Size and lifespan
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS adult_size_cm jsonb,  -- { min: 3, max: 5 }
ADD COLUMN IF NOT EXISTS lifespan_years jsonb; -- { min: 2, max: 5 }

-- Detailed requirements
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS light_requirement text,  -- 'low', 'medium', 'high'
ADD COLUMN IF NOT EXISTS co2_requirement text,   -- 'none', 'low', 'medium', 'high'
ADD COLUMN IF NOT EXISTS growth_rate text,       -- 'slow', 'medium', 'fast'
ADD COLUMN IF NOT EXISTS placement text[];       -- ['foreground', 'midground', 'background', 'epiphyte', 'floating']

-- Breeding and propagation
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS breeding_info jsonb,    -- { difficulty: 'easy', notes: '...' }
ADD COLUMN IF NOT EXISTS propagation text;       -- For plants

-- Taxonomy and origin
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS family text,
ADD COLUMN IF NOT EXISTS origin text,            -- Geographic origin
ADD COLUMN IF NOT EXISTS category text;          -- 'Tetra', 'Cichlid', 'Livebearers', etc.

-- Compatibility (array of compatible/incompatible species slugs)
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS compatible_with text[],
ADD COLUMN IF NOT EXISTS incompatible_with text[];

-- Common problems (JSONB array)
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS common_problems jsonb;  -- [{ title: '...', description: '...', solution: '...' }]

-- Related species
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS related_species text[]; -- Array of slugs

-- Swimming level (for fish)
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS swimming_level text;    -- 'top', 'middle', 'bottom', 'all'

-- Temperament
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS temperament text;       -- 'peaceful', 'semi-aggressive', 'aggressive'

-- Schooling behavior
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS is_schooling boolean DEFAULT false;

-- Nutrient requirements (for plants)
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS nutrient_requirements jsonb; -- { nitrogen: 'low', phosphate: 'medium', etc. }

-- Substrate requirements (for plants)
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS substrate_required boolean,
ADD COLUMN IF NOT EXISTS root_tabs_required boolean;

COMMENT ON COLUMN public.species.adult_size_cm IS 'Adult size range in centimeters';
COMMENT ON COLUMN public.species.lifespan_years IS 'Expected lifespan range in years';
COMMENT ON COLUMN public.species.common_problems IS 'Array of common problems with solutions';
COMMENT ON COLUMN public.species.compatible_with IS 'Array of species slugs that are compatible';
COMMENT ON COLUMN public.species.incompatible_with IS 'Array of species slugs that are incompatible';
