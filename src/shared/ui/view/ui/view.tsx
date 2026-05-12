import { cn } from '@gluestack-ui/utils/nativewind-utils';
import React from 'react';
import { View as RNView } from 'react-native';

import type { IViewProps } from '../model';

const View = React.forwardRef<React.ComponentRef<typeof RNView>, IViewProps>(function View(
  { className, ...props },
  ref,
) {
  return <RNView {...props} className={cn('bg-background', className)} ref={ref} />;
});

View.displayName = 'View';

export { View };
