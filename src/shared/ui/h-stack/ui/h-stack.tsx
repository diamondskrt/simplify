import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import React from 'react';
import type { ViewProps } from 'react-native';

import { View } from '../../view';
import { hStackStyle } from '../config';

type IHStackProps = ViewProps & VariantProps<typeof hStackStyle>;

const HStack = React.forwardRef<React.ComponentRef<typeof View>, IHStackProps>(function HStack(
  { className, reversed, space, ...props },
  ref,
) {
  return (
    <View
      className={hStackStyle({
        class: className,
        reversed: reversed as boolean,
        space,
      })}
      {...props}
      ref={ref}
    />
  );
});

HStack.displayName = 'HStack';

export { HStack };
