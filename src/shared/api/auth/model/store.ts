import type { Session } from '@supabase/supabase-js';
import { create } from 'zustand';

interface AuthState {
  isHydrated: boolean;
  session: Session | null;
  setHydrated: (isHydrated: boolean) => void;
  setSession: (session: Session | null) => void;
  reset: () => void;
}

const initialState = {
  isHydrated: false,
  session: null,
};

const useAuthStore = create<AuthState>((set) => ({
  ...initialState,
  setHydrated: (isHydrated) =>
    set({
      isHydrated,
    }),
  setSession: (session) => set({ session }),
  reset: () => set(initialState),
}));

export { useAuthStore };
