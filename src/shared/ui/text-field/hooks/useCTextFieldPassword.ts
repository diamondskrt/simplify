import React from 'react';
import type { FieldValues } from 'react-hook-form';
import type { GestureResponderEvent } from 'react-native';

import type { IPasswordType, ICTextFieldProps } from '../model';

export function useCTextFieldPassword<T extends FieldValues>({
  inputSlotProps,
  inputFieldProps,
}: {
  inputFieldProps: ICTextFieldProps<T>['inputFieldProps'];
  inputSlotProps: ICTextFieldProps<T>['inputSlotProps'];
}) {
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const passwordType: IPasswordType = isShowPassword ? 'text' : 'password';

  const handleSetIsShowPassword = () => {
    setIsShowPassword((showState) => !showState);
  };

  const handleInputSlotPress = (event: GestureResponderEvent) => {
    inputSlotProps?.onPress?.(event);
    handleSetIsShowPassword();
  };

  const gInputFieldProps = {
    ...inputFieldProps,
    type: inputFieldProps?.type === 'password' ? passwordType : inputFieldProps?.type,
  };

  return {
    gInputFieldProps,
    handleInputSlotPress,
    isShowPassword,
  };
}
