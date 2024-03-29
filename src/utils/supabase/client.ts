import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/src/config/constants";
import { Database } from "@/src/types/supabase";
import { createBrowserClient } from "@supabase/ssr";

/**
 *  Utility function for creating a Supabase client on the client.
 */
export const createClient = () =>
  createBrowserClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
