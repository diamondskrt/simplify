import { AlertCircleIcon } from 'lucide-react-native';
import React from 'react';
import type { FieldValues } from 'react-hook-form';

import { CTextField } from '../../text-field';
import type { IFormControlCTextFieldProps } from '../model';

import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from './form-control-items';

export function FormControlCTextField<T extends FieldValues>({
  label,
  description,
  errorMessage,
  cTextFieldProps,
  ...formControlProps
}: IFormControlCTextFieldProps<T>) {
  return (
    <FormControl {...formControlProps}>
      <FormControlLabel>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <CTextField {...cTextFieldProps} />
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
}
