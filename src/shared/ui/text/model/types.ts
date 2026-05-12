import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import type { Text as RNText } from 'react-native';

import type { textStyle } from '../config';

type ITextProps = React.ComponentProps<typeof RNText> & VariantProps<typeof textStyle>;

export type { ITextProps };
