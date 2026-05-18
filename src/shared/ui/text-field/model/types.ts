import type { Control, FieldValues, Path } from 'react-hook-form';

import type { IIConProps } from '../../icon';
import type { IInputFieldProps, IInputProps, IInputSlotProps } from '../../input';

interface ITextFieldProps {
  inputProps?: IInputProps;
  inputFieldProps?: IInputFieldProps;
  inputSlotProps?: Omit<IInputSlotProps, 'className'>;
  appendIcon?: IIConProps['as'];
  prependIcon?: IIConProps['as'];
}

interface ICTextFieldProps<T extends FieldValues> extends Omit<ITextFieldProps, 'inputFieldProps'> {
  control: Control<T>;
  name: Path<T>;
  inputFieldProps?: Omit<IInputFieldProps, 'value' | 'onBlur' | 'onTextChange'>;
}

type IPasswordType = 'text' | 'password' | undefined;

export type { ITextFieldProps, ICTextFieldProps, IPasswordType };
