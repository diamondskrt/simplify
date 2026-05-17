import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

import type { IIConProps } from '../../icon';
import type { buttonGroupStyle, buttonIconStyle, buttonStyle, buttonTextStyle } from '../config';
import type { UIButton } from '../ui';

type IButtonProps = Omit<React.ComponentPropsWithoutRef<typeof UIButton>, 'context'> &
  VariantProps<typeof buttonStyle> & { className?: string };

type IButtonTextProps = React.ComponentPropsWithoutRef<typeof UIButton.Text> &
  VariantProps<typeof buttonTextStyle> & { className?: string };

type IButtonGroupProps = React.ComponentPropsWithoutRef<typeof UIButton.Group> &
  VariantProps<typeof buttonGroupStyle>;

type IButtonIconProps = IIConProps & VariantProps<typeof buttonIconStyle>;

export type { IButtonProps, IButtonTextProps, IButtonGroupProps, IButtonIconProps };
