import { createClient } from '@supabase/supabase-js';

// ⚠️ Best Practice: Verschiebe diese Keys später in eine .env Datei!
// VITE_SUPABASE_URL=https://plyiyuctfphxtvzyqttz.supabase.co
// VITE_SUPABASE_ANON_KEY=sb_publishable_TBiJDamJ_bJY8Y-KzX4gGg_UFxqMCFv

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://plyiyuctfphxtvzyqttz.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_TBiJDamJ_bJY8Y-KzX4gGg_UFxqMCFv';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
