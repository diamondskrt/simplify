import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import type { FieldValues } from 'react-hook-form';

import type { Text } from '../../text';
import type { ICTextFieldProps, ITextFieldProps } from '../../text-field';
import type {
  formControlErrorIconStyle,
  formControlErrorStyle,
  formControlErrorTextStyle,
  formControlHelperStyle,
  formControlHelperTextStyle,
  formControlLabelAstrickStyle,
  formControlLabelStyle,
  formControlLabelTextStyle,
  formControlStyle,
} from '../config';
import type { UIFormControl } from '../ui';

type IFormControlProps = React.ComponentProps<typeof UIFormControl> &
  VariantProps<typeof formControlStyle>;

type IFormControlLabelAstrickProps = React.ComponentPropsWithoutRef<typeof Text> &
  VariantProps<typeof formControlLabelAstrickStyle>;

type IFormControlErrorProps = React.ComponentProps<typeof UIFormControl.Error> &
  VariantProps<typeof formControlErrorStyle>;

type IFormControlErrorTextProps = React.ComponentProps<typeof UIFormControl.Error.Text> &
  VariantProps<typeof formControlErrorTextStyle>;

type IFormControlErrorIconProps = React.ComponentProps<typeof UIFormControl.Error.Icon> &
  VariantProps<typeof formControlErrorIconStyle> & {
    height?: number;
    width?: number;
  };

type IFormControlLabelProps = React.ComponentProps<typeof UIFormControl.Label> &
  VariantProps<typeof formControlLabelStyle> & {
    htmlFor?: string;
    role?: string;
  };

type IFormControlLabelTextProps = React.ComponentProps<typeof UIFormControl.Label.Text> &
  VariantProps<typeof formControlLabelTextStyle>;

type IFormControlHelperProps = React.ComponentProps<typeof UIFormControl.Helper> &
  VariantProps<typeof formControlHelperStyle>;

type IFormControlHelperTextProps = React.ComponentProps<typeof UIFormControl.Helper.Text> &
  VariantProps<typeof formControlHelperTextStyle>;

interface IFormControlTextFieldProps extends IFormControlProps {
  textFieldProps?: ITextFieldProps;
  label: string;
  description?: string;
  errorMessage?: string;
}

interface IFormControlCTextFieldProps<T extends FieldValues> extends Omit<
  IFormControlTextFieldProps,
  'textFieldProps'
> {
  cTextFieldProps: ICTextFieldProps<T>;
}

export type {
  IFormControlLabelAstrickProps,
  IFormControlProps,
  IFormControlErrorProps,
  IFormControlErrorTextProps,
  IFormControlErrorIconProps,
  IFormControlLabelProps,
  IFormControlLabelTextProps,
  IFormControlHelperProps,
  IFormControlHelperTextProps,
  IFormControlTextFieldProps,
  IFormControlCTextFieldProps,
};
