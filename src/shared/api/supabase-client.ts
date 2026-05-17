import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_API_URL ?? '';
const supabasePublishableApiKey = process.env.EXPO_PUBLIC_SUPABASE_AUTH_PUBLISHABLE_API_KEY ?? '';

const supabaseClient = createClient(supabaseUrl, supabasePublishableApiKey, {
  auth: {
    autoRefreshToken: true,
    detectSessionInUrl: false,
    persistSession: true,
    storage: AsyncStorage,
  },
});

export { supabaseClient };
