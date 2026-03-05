-- Revert: Remove the public SELECT policy added in 20260305_favorites_public_read.sql
-- Favorites are once again only readable by the owning user (auth.uid() = user_id).
-- Guests on public profiles see a "Log in to see full profile" disclaimer instead.

-- 1. Drop the permissive public policy
DROP POLICY IF EXISTS "Public read access to favorites" ON favorites;

-- 2. Revoke the anon SELECT grant
REVOKE SELECT ON favorites FROM anon;

-- 3. Re-add the restrictive owner-only SELECT policy
CREATE POLICY "Users can view their own favorites"
  ON favorites
  FOR SELECT
  USING (auth.uid() = user_id);
