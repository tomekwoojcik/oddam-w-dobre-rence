import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.
const supabaseKey = process.env.REACT_APP_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)