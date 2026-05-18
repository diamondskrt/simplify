import { cn } from '@gluestack-ui/utils/nativewind-utils';
import React from 'react';
import { ScrollView as RNScrollView } from 'react-native';

import type { IScrollViewProps } from '../model';

const ScrollView = React.forwardRef<React.ComponentRef<typeof RNScrollView>, IScrollViewProps>(
  function View({ className, ...props }, ref) {
    return (
      <RNScrollView
        {...props}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          padding: 20,
        }}
        className={cn('bg-background', className)}
        ref={ref}
      />
    );
  },
);

ScrollView.displayName = 'ScrollView';

export { ScrollView };
