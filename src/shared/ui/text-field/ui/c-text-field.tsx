import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import React from 'react';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { Input, InputField, InputSlot, InputIcon } from '../../input';
import { useCTextFieldPassword } from '../hooks';
import type { ICTextFieldProps } from '../model';

export function CTextField<T extends FieldValues>({
  name,
  control,
  appendIcon,
  prependIcon,
  inputProps,
  inputFieldProps,
  inputSlotProps,
}: ICTextFieldProps<T>) {
  const { gInputFieldProps, handleInputSlotPress, isShowPassword } = useCTextFieldPassword<T>({
    inputFieldProps,
    inputSlotProps,
  });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <Input {...inputProps}>
            {appendIcon && (
              <InputSlot className="pl-3" {...inputSlotProps}>
                <InputIcon as={appendIcon} />
              </InputSlot>
            )}
            <InputField
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              {...gInputFieldProps}
            />
            {prependIcon && (
              <InputSlot className="pr-3" {...inputSlotProps}>
                <InputIcon as={prependIcon} />
              </InputSlot>
            )}
            {inputFieldProps?.type === 'password' && (
              <InputSlot className="pr-3" {...inputSlotProps} onPress={handleInputSlotPress}>
                <InputIcon as={isShowPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            )}
          </Input>
        );
      }}
    />
  );
}
