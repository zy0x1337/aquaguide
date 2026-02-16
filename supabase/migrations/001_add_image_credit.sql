-- Add image_credit column if it doesn't exist
ALTER TABLE public.species 
ADD COLUMN IF NOT EXISTS image_credit text;
