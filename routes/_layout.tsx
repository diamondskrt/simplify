import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { GluestackUIProvider } from '~/app/providers';

import '../global.css';

SplashScreen.preventAutoHideAsync();

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

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GluestackUIProvider mode="dark">
      <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>
  );
}
