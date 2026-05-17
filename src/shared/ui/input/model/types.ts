import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

import type {
  inputFieldStyle,
  inputIconStyle,
  inputSlotStyle,
  inputStyle,
  UIInput,
} from '../config';

type IInputProps = React.ComponentProps<typeof UIInput> &
  VariantProps<typeof inputStyle> & { className?: string };

type IInputIconProps = React.ComponentProps<typeof UIInput.Icon> &
  VariantProps<typeof inputIconStyle> & {
    className?: string;
    height?: number;
    width?: number;
  };

type IInputSlotProps = React.ComponentProps<typeof UIInput.Slot> &
  VariantProps<typeof inputSlotStyle> & { className?: string };

type IInputFieldProps = React.ComponentProps<typeof UIInput.Input> &
  VariantProps<typeof inputFieldStyle> & { className?: string };

export type { IInputProps, IInputIconProps, IInputSlotProps, IInputFieldProps };
