import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://mojptfpacmyjglncbykp.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const Supabase = createClient(supabaseUrl, supabaseKey);