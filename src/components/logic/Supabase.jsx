import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mojptfpacmyjglncbykp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDk3OTgyOCwiZXhwIjoxOTU2NTU1ODI4fQ.LqZYa9hT6j5VCmP46VFv8Y5ceeGP4iDOkgM1a7oM3mI";

export const Supabase = createClient(supabaseUrl, supabaseKey);
