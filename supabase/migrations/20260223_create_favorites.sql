-- Create favorites table
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  item_type TEXT NOT NULL CHECK (item_type IN ('species', 'plant')),
  item_slug TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, item_type, item_slug)
);

-- Add indexes
CREATE INDEX idx_favorites_user_id ON public.favorites(user_id);
CREATE INDEX idx_favorites_item ON public.favorites(item_type, item_slug);
CREATE INDEX idx_favorites_user_item ON public.favorites(user_id, item_type);

-- Enable RLS
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

-- Policies
-- Users can view their own favorites
CREATE POLICY "Users can view their own favorites"
ON public.favorites
FOR SELECT
USING (auth.uid() = user_id);

-- Users can view other users' favorites (for public profiles)
CREATE POLICY "Users can view others' favorites"
ON public.favorites
FOR SELECT
USING (true);

-- Users can insert their own favorites
CREATE POLICY "Users can insert their own favorites"
ON public.favorites
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can delete their own favorites
CREATE POLICY "Users can delete their own favorites"
ON public.favorites
FOR DELETE
USING (auth.uid() = user_id);
