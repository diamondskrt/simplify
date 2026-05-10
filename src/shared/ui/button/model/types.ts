import { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

import { buttonGroupStyle, buttonStyle, buttonTextStyle, UIButton } from '../config';

type IButtonProps = Omit<React.ComponentPropsWithoutRef<typeof UIButton>, 'context'> &
  VariantProps<typeof buttonStyle> & { className?: string };

type IButtonTextProps = React.ComponentPropsWithoutRef<typeof UIButton.Text> &
  VariantProps<typeof buttonTextStyle> & { className?: string };

type IButtonGroupProps = React.ComponentPropsWithoutRef<typeof UIButton.Group> &
  VariantProps<typeof buttonGroupStyle>;

export type { IButtonProps, IButtonTextProps, IButtonGroupProps };
