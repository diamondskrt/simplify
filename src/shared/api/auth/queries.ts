import type { SignUpWithPasswordCredentials } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { authApi } from './api';
import { queryKeys } from './constants';
import { useAuthStore } from './store';

const useSession = () => {
  return useQuery({
    queryFn: async () => {
      return authApi.getSession();
    },
    queryKey: queryKeys.session(),
    staleTime: Infinity, // изменяется редко
  });
};

const useSignIn = () => {
  const queryClient = useQueryClient();
  const setSession = useAuthStore((state) => state.setSession);

  return useMutation({
    mutationFn: (credentials: SignUpWithPasswordCredentials) => authApi.signIn(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.session(), data.user);
      setSession(data.session);
    },
  });
};

const useSignout = () => {
  const setSession = useAuthStore((state) => state.setSession);

  return useMutation({
    mutationFn: () => authApi.signOut(),
    onSuccess: () => setSession(null),
  });
};

const useSignUp = () => {
  const queryClient = useQueryClient();
  const setSession = useAuthStore((state) => state.setSession);

  return useMutation({
    mutationFn: (credentials: SignUpWithPasswordCredentials) => authApi.signUp(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.session(), data.user);
      setSession(data.session);
    },
  });
};

export { useSession, useSignIn, useSignUp, useSignout };
