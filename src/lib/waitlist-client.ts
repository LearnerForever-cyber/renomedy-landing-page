import { createClient } from "@supabase/supabase-js";

// Supabase client for waitlist storage.
// Uses VITE_* env variables loaded from .env
// Support standard Netlify/Supabase env vars without VITE_ prefix (using process.env fallback if built via node)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || import.meta.env.SUPABASE_URL || (typeof process !== "undefined" && process.env.SUPABASE_URL) || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY || import.meta.env.SUPABASE_PUBLISHABLE_KEY || (typeof process !== "undefined" && (process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_PUBLISHABLE_KEY)) || "";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "Missing Supabase credentials. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY are set in .env"
  );
}

export const WAITLIST_TABLE = "renomedy_waitlist";

export const waitlistClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
