import React from 'react';
import type { FieldValues } from 'react-hook-form';
import type { GestureResponderEvent } from 'react-native';

import type { ICTextFieldProps, IPasswordType } from '../model';

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

  const gInputFieldProps: ICTextFieldProps<T>['inputFieldProps'] = {
    ...inputFieldProps,
    type: inputFieldProps?.type === 'password' ? passwordType : inputFieldProps?.type,
    secureTextEntry: passwordType === 'password',
  };

  return {
    gInputFieldProps,
    handleInputSlotPress,
    isShowPassword,
  };
}
