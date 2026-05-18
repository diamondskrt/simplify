import { cn } from '@gluestack-ui/utils/nativewind-utils';
import React from 'react';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

import type { ISafeAreaViewProps } from '../model';

const SafeAreaView = React.forwardRef<
  React.ComponentRef<typeof RNSafeAreaView>,
  ISafeAreaViewProps
>(function SafeAreaView({ className, ...props }, ref) {
  return <RNSafeAreaView {...props} className={cn('bg-background', className)} ref={ref} />;
});

SafeAreaView.displayName = 'SafeAreaView';

export { SafeAreaView };
