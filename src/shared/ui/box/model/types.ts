import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import type { ViewProps } from 'react-native';

import type { boxStyle } from '../config';

type IBoxProps = ViewProps & VariantProps<typeof boxStyle> & { className?: string };

export type { IBoxProps };
