'use client';
import { PrimitiveIcon } from '@gluestack-ui/core/icon/creator';
import { useStyleContext, type VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import React from 'react';

import {
  buttonStyle,
  UIButton,
  SCOPE,
  buttonTextStyle,
  buttonIconStyle,
  buttonGroupStyle,
} from '../config';
import { IButtonGroupProps, IButtonProps, IButtonTextProps } from '../model';

cssInterop(PrimitiveIcon, {
  className: {
    nativeStyleToProp: {
      color: 'classNameColor',
      fill: true,
      height: true,
      stroke: true,
      width: true,
    },
    target: 'style',
  },
});

const Button = React.forwardRef<React.ComponentRef<typeof UIButton>, IButtonProps>(
  ({ action = 'primary', className, size = 'md', variant = 'solid', ...props }, ref) => {
    return (
      <UIButton
        ref={ref}
        {...props}
        className={buttonStyle({ action, class: className, size, variant })}
        context={{ action, size, variant }}
      />
    );
  },
);

const ButtonText = React.forwardRef<React.ComponentRef<typeof UIButton.Text>, IButtonTextProps>(
  ({ action, className, size, variant, ...props }, ref) => {
    const {
      action: parentAction,
      size: parentSize,
      variant: parentVariant,
    } = useStyleContext(SCOPE);

    return (
      <UIButton.Text
        ref={ref}
        {...props}
        className={buttonTextStyle({
          action,
          class: className,
          parentVariants: {
            action: parentAction,
            size: parentSize,
            variant: parentVariant,
          },
          size,
          variant,
        })}
      />
    );
  },
);

const ButtonSpinner = UIButton.Spinner;

type IButtonIcon = React.ComponentPropsWithoutRef<typeof UIButton.Icon> &
  VariantProps<typeof buttonIconStyle> & {
    className?: string | undefined;
    as?: React.ElementType;
    height?: number;
    width?: number;
  };

const ButtonIcon = React.forwardRef<React.ComponentRef<typeof UIButton.Icon>, IButtonIcon>(
  ({ className, size, ...props }, ref) => {
    const {
      action: parentAction,
      size: parentSize,
      variant: parentVariant,
    } = useStyleContext(SCOPE);

    if (typeof size === 'number') {
      return (
        <UIButton.Icon
          ref={ref}
          {...props}
          className={buttonIconStyle({ class: className })}
          size={size}
        />
      );
    } else if ((props.height !== undefined || props.width !== undefined) && size === undefined) {
      return (
        <UIButton.Icon ref={ref} {...props} className={buttonIconStyle({ class: className })} />
      );
    }
    return (
      <UIButton.Icon
        {...props}
        className={buttonIconStyle({
          class: className,
          parentVariants: {
            action: parentAction,
            size: parentSize,
            variant: parentVariant,
          },
          size,
        })}
        ref={ref}
      />
    );
  },
);

const ButtonGroup = React.forwardRef<React.ComponentRef<typeof UIButton.Group>, IButtonGroupProps>(
  ({ className, flexDirection = 'column', isAttached = false, space = 'md', ...props }, ref) => {
    return (
      <UIButton.Group
        className={buttonGroupStyle({
          class: className,
          flexDirection,
          isAttached,
          space,
        })}
        {...props}
        ref={ref}
      />
    );
  },
);

Button.displayName = 'Button';
ButtonText.displayName = 'ButtonText';
ButtonSpinner.displayName = 'ButtonSpinner';
ButtonIcon.displayName = 'ButtonIcon';
ButtonGroup.displayName = 'ButtonGroup';

export { Button, ButtonText, ButtonSpinner, ButtonIcon, ButtonGroup };
