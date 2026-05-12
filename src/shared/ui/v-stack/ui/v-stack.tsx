import React from 'react';

import { View } from '../../view';
import { vStackStyle } from '../config';
import type { IVStackProps } from '../model';

const VStack = React.forwardRef<React.ComponentRef<typeof View>, IVStackProps>(function VStack(
  { className, reversed, space, ...props },
  ref,
) {
  return (
    <View
      className={vStackStyle({
        class: className,
        reversed: reversed as boolean,
        space,
      })}
      {...props}
      ref={ref}
    />
  );
});

VStack.displayName = 'VStack';

export { VStack };
