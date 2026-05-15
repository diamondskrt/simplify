import { useEffect } from 'react';

import { authApi, useAuthStore } from '~/shared/api';

export function useHydration() {
  const isHydrated = useAuthStore((state) => state.isHydrated);
  const setHydrated = useAuthStore((state) => state.setHydrated);
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    const subscription = authApi.onAuthStateChange(setSession);

    const hydrate = async () => {
      try {
        const session = await authApi.getSession();
        setSession(session);
      } catch (error) {
        console.error(error);
      } finally {
        setHydrated(true);
      }
    };

    hydrate();

    return () => {
      subscription.unsubscribe();
    };
  }, [setHydrated, setSession]);

  return {
    isHydrated,
  };
}
