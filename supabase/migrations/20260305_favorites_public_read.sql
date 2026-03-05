-- Allow unauthenticated guests (anon role) to read favorites.
-- This is required so public profile pages show fish/plants to non-logged-in visitors.
-- Write operations (INSERT/UPDATE/DELETE) remain restricted to the owner.

-- 1. Drop the old restrictive SELECT policy (name may vary – drop both common variants safely)
DROP POLICY IF EXISTS "Users can view their own favorites" ON favorites;
DROP POLICY IF EXISTS "Users can read own favorites"       ON favorites;
DROP POLICY IF EXISTS "Enable read access for all users"   ON favorites;

-- 2. Add a fully public SELECT policy (anon + authenticated can read any row)
CREATE POLICY "Public read access to favorites"
  ON favorites
  FOR SELECT
  USING (true);

-- 3. Make sure anon role has SELECT privilege on the table
GRANT SELECT ON favorites TO anon;
