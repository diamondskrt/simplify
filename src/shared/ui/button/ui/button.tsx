import Ionicons from '@expo/vector-icons/Ionicons';
import { createButton } from '@gluestack-ui/core/button/creator';
import { useStyleContext, withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Icon } from '../../icon';
import { Pressable } from '../../pressable';
import { Text } from '../../text';
import { View } from '../../view';
import { buttonGroupStyle, buttonIconStyle, buttonStyle, buttonTextStyle, SCOPE } from '../config';
import type { IButtonGroupProps, IButtonIconProps, IButtonProps, IButtonTextProps } from '../model';

const Root = withStyleContext(Pressable, SCOPE);

const UIButton = createButton({
  Group: View,
  Icon: Icon,
  Root: Root,
  Spinner: ActivityIndicator,
  Text,
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

export { UIButton, Button, ButtonText, ButtonSpinner, ButtonIcon, ButtonGroup };
