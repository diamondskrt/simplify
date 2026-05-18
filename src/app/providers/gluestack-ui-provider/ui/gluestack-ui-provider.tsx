import { OverlayProvider } from '@gluestack-ui/core/overlay/creator';
import { ToastProvider } from '@gluestack-ui/core/toast/creator';
import { useColorScheme } from 'nativewind';
import React, { useEffect } from 'react';
import { useColorScheme as useRNColorScheme, type ViewProps } from 'react-native';

import { type ITheme, PREFERRED_THEME, useThemeStore } from '~/shared/lib';
import { SafeAreaView } from '~/shared/ui';

import { themeConfig } from '../config';

export function GluestackUIProvider({
  mode = PREFERRED_THEME,
  ...props
}: {
  mode?: ITheme;
  children?: React.ReactNode;
  style?: ViewProps['style'];
}) {
  const { theme } = useThemeStore();
  const { colorScheme, setColorScheme } = useColorScheme();
  const systemColorScheme = useRNColorScheme();

  useEffect(() => {
    if (theme === 'system') {
      setColorScheme(systemColorScheme ?? PREFERRED_THEME);
    } else {
      setColorScheme(theme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, systemColorScheme]);

  return (
    <SafeAreaView
      style={[themeConfig[colorScheme ?? PREFERRED_THEME], props.style]}
      className="h-full w-full flex-1">
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </SafeAreaView>
  );
}
