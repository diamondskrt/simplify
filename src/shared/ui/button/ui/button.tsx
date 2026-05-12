import Ionicons from '@expo/vector-icons/Ionicons';
import { useStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import React from 'react';

import {
  buttonStyle,
  UIButton,
  SCOPE,
  buttonTextStyle,
  buttonIconStyle,
  buttonGroupStyle,
} from '../config';
import type { IButtonGroupProps, IButtonIconProps, IButtonProps, IButtonTextProps } from '../model';

const Button = React.forwardRef<React.ComponentRef<typeof UIButton>, IButtonProps>(
  ({ action = 'primary', className, size = 'xs', variant = 'solid', ...props }, ref) => {
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
  ({ action, className, size, ...props }, ref) => {
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
        })}
      />
    );
  },
);

const ButtonSpinner = UIButton.Spinner;

const ButtonIcon = React.forwardRef<React.ComponentRef<typeof Ionicons>, IButtonIconProps>(
  function ButtonIcon({ className, size, ...props }, ref) {
    const {
      action: parentAction,
      size: parentSize,
      variant: parentVariant,
    } = useStyleContext(SCOPE);

    return (
      <Ionicons
        className={buttonIconStyle({
          class: className,
          parentVariants: {
            action: parentAction,
            size: parentSize,
            variant: parentVariant,
          },
          size,
        })}
        // to avoid fontSize default style
        style={{ fontSize: null as unknown as number }}
        {...props}
        ref={ref}
      />
    );
  },
);

const ButtonGroup = React.forwardRef<React.ComponentRef<typeof UIButton.Group>, IButtonGroupProps>(
  ({ className, flexDirection = 'column', isAttached = false, space, ...props }, ref) => {
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
