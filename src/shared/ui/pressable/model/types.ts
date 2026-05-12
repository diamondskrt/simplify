import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

import type { pressableStyle, UIPressable } from '../config';

type IPressableProps = Omit<React.ComponentProps<typeof UIPressable>, 'context'> &
  VariantProps<typeof pressableStyle>;

export type { IPressableProps };
