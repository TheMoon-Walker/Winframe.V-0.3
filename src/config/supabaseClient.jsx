import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_URL;
const supabaseKey = import.meta.env.VITE_APP_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and Key are required");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
