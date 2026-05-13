import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type ITheme = 'light' | 'dark' | 'system';

const PREFERRED_THEME = 'light';

interface ThemeStore {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      setTheme: (theme) => set({ theme }),
      theme: 'dark',
    }),
    {
      name: 'simplify-theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export { PREFERRED_THEME, useThemeStore, type ITheme };
