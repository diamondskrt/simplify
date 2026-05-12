import React from 'react';
import { Platform } from 'react-native';

import { View } from '../../view';
import { dividerStyle } from '../config';
import type { IUIDividerProps } from '../model';

const Divider = React.forwardRef<React.ComponentRef<typeof View>, IUIDividerProps>(function Divider(
  { className, orientation = 'horizontal', ...props },
  ref,
) {
  return (
    <View
      ref={ref}
      {...props}
      aria-orientation={orientation}
      role={Platform.OS === 'web' ? 'separator' : undefined}
      className={dividerStyle({
        class: className,
        orientation,
      })}
    />
  );
});

Divider.displayName = 'Divider';

export { Divider };
