import { create } from 'zustand';

import type { ProfileSchema } from './types';

interface ProfileStore {
  profile: ProfileSchema | null;
  setProfile: (profile: ProfileSchema | null) => void;
  reset: () => void;
}

const initialState = {
  profile: null,
};

export const useProfileStore = create<ProfileStore>((set) => ({
  ...initialState,
  reset: () => set(initialState),
  setProfile: (profile) =>
    set({
      profile,
    }),
}));
