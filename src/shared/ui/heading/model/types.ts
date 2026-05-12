import type { H1 } from '@expo/html-elements';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

import type { headingStyle } from '../config';

type IHeadingProps = VariantProps<typeof headingStyle> &
  React.ComponentPropsWithoutRef<typeof H1> & {
    as?: React.ElementType;
  };

export type { IHeadingProps };
