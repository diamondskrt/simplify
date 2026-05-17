import type {
  SignUpWithPasswordCredentials,
  SignInWithPasswordCredentials,
  Session,
  AuthTokenResponsePassword,
  AuthResponse,
} from '@supabase/supabase-js';

import { supabaseClient } from '../supabase-client';

const authApi = {
  onAuthStateChange(setSession: (session: Session | null) => void) {
    const { data } = supabaseClient.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });
    return data.subscription;
  },

  async getSession(): Promise<Session | null> {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    return data.session;
  },

  async signUp(credentials: SignUpWithPasswordCredentials): Promise<AuthResponse['data']> {
    const { data, error } = await supabaseClient.auth.signUp(credentials);
    if (error) throw error;
    return data;
  },

  async signIn(
    credentials: SignInWithPasswordCredentials,
  ): Promise<AuthTokenResponsePassword['data']> {
    const { data, error } = await supabaseClient.auth.signInWithPassword(credentials);
    if (error) throw error;
    return data;
  },

  async signOut(): Promise<void> {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
  },
};

export { authApi };
