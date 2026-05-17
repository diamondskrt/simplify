import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';

import { useSignUp } from '~/shared/api';
import { Box, Text, FormControlCTextField, Button, ButtonText, VStack } from '~/shared/ui';

import { PASSWORD_MAX_CHARACTERS_COUNT, signUpSchema } from '../config';
import type { SignUpFormData } from '../model';

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const router = useRouter();

  const { mutateAsync: signUp, isPending } = useSignUp();

  const isSignUpPending = isSubmitting || isPending;

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await signUp(data);
      reset();
      router.replace('/(tabs)/profile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className="flex-1 justify-center px-4">
      <VStack space="md">
        <Text className="text-2xl">Sign Up</Text>

        <FormControlCTextField
          label="Email"
          errorMessage={errors.email?.message}
          isInvalid={Boolean(errors.email)}
          cTextFieldProps={{
            name: 'email',
            control,
            inputFieldProps: {
              placeholder: 'user@example.com',
              keyboardType: 'email-address',
              autoCapitalize: 'none',
            },
          }}
        />

        <FormControlCTextField
          label="Password"
          description={`Must be at least ${PASSWORD_MAX_CHARACTERS_COUNT} characters.`}
          errorMessage={errors.password?.message}
          isInvalid={Boolean(errors.password)}
          cTextFieldProps={{
            name: 'password',
            control,
            inputFieldProps: {
              type: 'password',
              placeholder: '••••••',
            },
          }}
        />

        <Button onPress={handleSubmit(onSubmit)} isDisabled={!isValid || isSignUpPending}>
          <ButtonText>Sign Up</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
