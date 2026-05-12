import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import type { ComponentProps } from 'react';
import type { View } from 'react-native';

import type { vStackStyle } from '../config';

type IVStackProps = ComponentProps<typeof View> & VariantProps<typeof vStackStyle>;
type IVStackWebProps = React.ComponentProps<'div'> & VariantProps<typeof vStackStyle>;

export type { IVStackProps, IVStackWebProps };
