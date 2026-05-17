import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import React from 'react';
import type { GestureResponderEvent } from 'react-native';

import type { UIInput } from '../../input';
import { Input, InputField, InputSlot, InputIcon } from '../../input';
import type { ITextFieldProps } from '../model';

const TextField = React.forwardRef<React.ComponentRef<typeof UIInput>, ITextFieldProps>(
  function TextField(
    { inputProps, inputFieldProps, inputSlotProps, appendIcon, prependIcon },
    ref,
  ) {
    const [isShowPassword, setIsShowPassword] = React.useState(false);

    const handleSetIsShowPassword = () => {
      setIsShowPassword((showState) => !showState);
    };

    const handleInputSlotPress = (event: GestureResponderEvent) => {
      inputSlotProps?.onPress?.(event);
      handleSetIsShowPassword();
    };

    return (
      <Input {...inputProps} ref={ref}>
        {appendIcon && (
          <InputSlot className="pl-3" {...inputSlotProps}>
            <InputIcon as={appendIcon} />
          </InputSlot>
        )}
        <InputField {...inputFieldProps} />
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
  },
);

TextField.displayName = 'TextField';

export { TextField };
