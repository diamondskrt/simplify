import { ApolloProvider } from '@apollo/client/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { GluestackUIProvider } from '~/app/providers';
import { apolloClient, queryClient, useAuthStore } from '~/shared/api';
import { useHydration } from '~/shared/hooks';

import '../global.css';

void SplashScreen.preventAutoHideAsync();

function RootNavigator() {
  const isSignedIn = useAuthStore((state) => !!state.session);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={Boolean(isSignedIn)}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>

      <Stack.Protected guard={!isSignedIn}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'sans-black': require('~/assets/fonts/Roboto/Roboto-Black.ttf'),
    'sans-bold': require('~/assets/fonts/Roboto/Roboto-Bold.ttf'),
    'sans-extrabold': require('~/assets/fonts/Roboto/Roboto-ExtraBold.ttf'),
    'sans-extralight': require('~/assets/fonts/Roboto/Roboto-ExtraLight.ttf'),
    'sans-light': require('~/assets/fonts/Roboto/Roboto-Light.ttf'),
    'sans-medium': require('~/assets/fonts/Roboto/Roboto-Medium.ttf'),
    'sans-regular': require('~/assets/fonts/Roboto/Roboto-Regular.ttf'),
    'sans-semibold': require('~/assets/fonts/Roboto/Roboto-SemiBold.ttf'),
    'sans-thin': require('~/assets/fonts/Roboto/Roboto-Thin.ttf'),
  });

  const { isHydrated } = useHydration();

  useEffect(() => {
    if ((loaded || error) && isHydrated) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error, isHydrated]);

  if ((!loaded && !error) || !isHydrated) {
    return null;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <GluestackUIProvider mode="dark">
          <RootNavigator />
        </GluestackUIProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
}
