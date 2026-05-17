import { createFormControl } from '@gluestack-ui/core/form-control/creator';
import { PrimitiveIcon } from '@gluestack-ui/core/icon/creator';
import { useStyleContext, withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import React from 'react';

import { Icon } from '../../icon';
import { Text } from '../../text';
import { View } from '../../view';
import {
  formControlErrorIconStyle,
  formControlErrorStyle,
  formControlErrorTextStyle,
  formControlHelperStyle,
  formControlHelperTextStyle,
  formControlLabelAstrickStyle,
  formControlLabelStyle,
  formControlLabelTextStyle,
  formControlStyle,
  SCOPE,
} from '../config';
import type {
  IFormControlErrorIconProps,
  IFormControlErrorProps,
  IFormControlErrorTextProps,
  IFormControlHelperProps,
  IFormControlHelperTextProps,
  IFormControlLabelAstrickProps,
  IFormControlLabelProps,
  IFormControlLabelTextProps,
  IFormControlProps,
} from '../model';

cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: true,
      stroke: true,
    },
  },
});

const FormControl = React.forwardRef<React.ComponentRef<typeof UIFormControl>, IFormControlProps>(
  function FormControl({ className, size = 'md', ...props }, ref) {
    return (
      <UIFormControl
        ref={ref}
        className={formControlStyle({ size, class: className })}
        {...props}
        context={{ size }}
      />
    );
  },
);

const FormControlLabelAstrick = React.forwardRef<
  React.ComponentRef<typeof Text>,
  IFormControlLabelAstrickProps
>(function FormControlLabelAstrick({ className, ...props }, ref) {
  const { size: parentSize } = useStyleContext(SCOPE);

  return (
    <Text
      ref={ref}
      className={formControlLabelAstrickStyle({
        parentVariants: { size: parentSize },
        class: className,
      })}
      {...props}
    />
  );
});

const FormControlError = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Error>,
  IFormControlErrorProps
>(function FormControlError({ className, ...props }, ref) {
  return (
    <UIFormControl.Error
      ref={ref}
      className={formControlErrorStyle({ class: className })}
      {...props}
    />
  );
});

const FormControlErrorText = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Error.Text>,
  IFormControlErrorTextProps
>(function FormControlErrorText({ className, size, ...props }, ref) {
  const { size: parentSize } = useStyleContext(SCOPE);
  return (
    <UIFormControl.Error.Text
      className={formControlErrorTextStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

const FormControlErrorIcon = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Error.Icon>,
  IFormControlErrorIconProps
>(function FormControlErrorIcon({ className, size, ...props }, ref) {
  const { size: parentSize } = useStyleContext(SCOPE);

  if (typeof size === 'number') {
    return (
      <UIFormControl.Error.Icon
        ref={ref}
        {...props}
        className={formControlErrorIconStyle({ class: className })}
        size={size}
      />
    );
  } else if ((props.height !== undefined || props.width !== undefined) && size === undefined) {
    return (
      <UIFormControl.Error.Icon
        ref={ref}
        {...props}
        className={formControlErrorIconStyle({ class: className })}
      />
    );
  }
  return (
    <UIFormControl.Error.Icon
      className={formControlErrorIconStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
      {...props}
    />
  );
});

const FormControlLabel = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Label>,
  IFormControlLabelProps
>(function FormControlLabel({ className, ...props }, ref) {
  return (
    <UIFormControl.Label
      ref={ref}
      className={formControlLabelStyle({ class: className })}
      {...props}
    />
  );
});

const FormControlLabelText = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Label.Text>,
  IFormControlLabelTextProps
>(function FormControlLabelText({ className, size, ...props }, ref) {
  const { size: parentSize } = useStyleContext(SCOPE);

  return (
    <UIFormControl.Label.Text
      className={formControlLabelTextStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

const FormControlHelper = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Helper>,
  IFormControlHelperProps
>(function FormControlHelper({ className, ...props }, ref) {
  return (
    <UIFormControl.Helper
      ref={ref}
      className={formControlHelperStyle({
        class: className,
      })}
      {...props}
    />
  );
});

const FormControlHelperText = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Helper.Text>,
  IFormControlHelperTextProps
>(function FormControlHelperText({ className, size, ...props }, ref) {
  const { size: parentSize } = useStyleContext(SCOPE);

  return (
    <UIFormControl.Helper.Text
      className={formControlHelperTextStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

const UIFormControl = createFormControl({
  Root: withStyleContext(View, SCOPE),
  Error: View,
  ErrorText: Text,
  ErrorIcon: Icon,
  Label: View,
  LabelText: Text,
  LabelAstrick: FormControlLabelAstrick,
  Helper: View,
  HelperText: Text,
});

FormControl.displayName = 'FormControl';
FormControlError.displayName = 'FormControlError';
FormControlErrorText.displayName = 'FormControlErrorText';
FormControlErrorIcon.displayName = 'FormControlErrorIcon';
FormControlLabel.displayName = 'FormControlLabel';
FormControlLabelText.displayName = 'FormControlLabelText';
FormControlLabelAstrick.displayName = 'FormControlLabelAstrick';
FormControlHelper.displayName = 'FormControlHelper';
FormControlHelperText.displayName = 'FormControlHelperText';

export {
  UIFormControl,
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  FormControlLabelAstrick,
  FormControlHelper,
  FormControlHelperText,
};
