import { AlertCircleIcon } from 'lucide-react-native';
import React from 'react';

import { TextField } from '../../text-field';
import type { UIFormControl } from '../config';
import type { IFormControlTextFieldProps } from '../model';

import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
} from './form-control-items';

const FormControlTextField = React.forwardRef<
  React.ComponentRef<typeof UIFormControl>,
  IFormControlTextFieldProps
>(function FormControlTextField(
  { label, description, errorMessage, formControlProps, textFieldProps },
  ref,
) {
  return (
    <FormControl {...formControlProps} ref={ref}>
      <FormControlLabel>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <TextField {...textFieldProps} />
      {description && (
        <FormControlHelper>
          <FormControlHelperText>{description}</FormControlHelperText>
        </FormControlHelper>
      )}
      {errorMessage && (
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} className="text-error" />
          <FormControlErrorText className="text-error">{errorMessage}</FormControlErrorText>
        </FormControlError>
      )}
    </FormControl>
  );
});

FormControlTextField.displayName = 'FormControlTextField';

export { FormControlTextField };
