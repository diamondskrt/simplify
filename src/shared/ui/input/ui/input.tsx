import { PrimitiveIcon } from '@gluestack-ui/core/icon/creator';
import { useStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import React from 'react';

import {
  inputFieldStyle,
  inputIconStyle,
  inputSlotStyle,
  inputStyle,
  SCOPE,
  UIInput,
} from '../config';
import type { IInputFieldProps, IInputIconProps, IInputProps, IInputSlotProps } from '../model';

cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: 'classNameColor',
      stroke: true,
    },
  },
});

const Input = React.forwardRef<React.ComponentRef<typeof UIInput>, IInputProps>(function Input(
  { className, variant = 'rounded', size = 'md', ...props },
  ref,
) {
  return (
    <UIInput
      ref={ref}
      {...props}
      className={inputStyle({ variant, size, class: className })}
      context={{ variant, size }}
    />
  );
});

const InputIcon = React.forwardRef<React.ComponentRef<typeof UIInput.Icon>, IInputIconProps>(
  function InputIcon({ className, size, ...props }, ref) {
    const { size: parentSize } = useStyleContext(SCOPE);

    return (
      <UIInput.Icon
        ref={ref}
        {...props}
        className={inputIconStyle({
          parentVariants: {
            size: parentSize,
          },
          class: className,
        })}
      />
    );
  },
);

const InputSlot = React.forwardRef<React.ComponentRef<typeof UIInput.Slot>, IInputSlotProps>(
  function InputSlot({ className, ...props }, ref) {
    return (
      <UIInput.Slot
        ref={ref}
        {...props}
        className={inputSlotStyle({
          class: className,
        })}
      />
    );
  },
);

const InputField = React.forwardRef<React.ComponentRef<typeof UIInput.Input>, IInputFieldProps>(
  function InputField({ className, ...props }, ref) {
    const { variant: parentVariant, size: parentSize } = useStyleContext(SCOPE);

    return (
      <UIInput.Input
        ref={ref}
        {...props}
        className={inputFieldStyle({
          parentVariants: {
            variant: parentVariant,
            size: parentSize,
          },
          class: className,
        })}
      />
    );
  },
);

Input.displayName = 'Input';
InputIcon.displayName = 'InputIcon';
InputSlot.displayName = 'InputSlot';
InputField.displayName = 'InputField';

export { Input, InputField, InputIcon, InputSlot };
