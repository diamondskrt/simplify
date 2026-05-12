import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

import type { dividerStyle } from '../config';

type IUIDividerProps = React.ComponentPropsWithoutRef<typeof View> &
  VariantProps<typeof dividerStyle>;

export type { IUIDividerProps };
