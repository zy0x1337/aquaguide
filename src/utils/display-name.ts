/**
 * Sanitises a raw display_name value coming from the DB.
 * Returns null if the value is absent, blank, or the legacy sentinel 'User'.
 */
export function sanitizeDisplayName(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (trimmed === '' || trimmed === 'User') return null;
  return trimmed;
}

/**
 * Resolves the best display name for the current viewer.
 * Priority: profiles.display_name → email prefix → empty string
 */
export function resolveDisplayName(
  displayName: string | null | undefined,
  email: string | null | undefined,
): string {
  const clean = sanitizeDisplayName(displayName);
  if (clean) return clean;
  if (email) return email.split('@')[0];
  return '';
}
