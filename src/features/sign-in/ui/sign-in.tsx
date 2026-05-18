import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';

import { PASSWORD_MAX_CHARACTERS_COUNT, useSignIn } from '~/shared/api';
import {
  Button,
  ButtonText,
  FormControlCTextField,
  Heading,
  ScrollView,
  Text,
  VStack,
} from '~/shared/ui';

import { signInSchema } from '../config';
import type { SignInFormData } from '../model';

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const router = useRouter();

  const { mutateAsync: signIn, isPending } = useSignIn();

  const isSignInPending = isSubmitting || isPending;

  const onSubmit = async (data: SignInFormData) => {
    try {
      await signIn(data);
      reset();
      router.replace('/(tabs)/profile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <VStack space="md" className="px-4">
        <Heading className="text-center" size="xl">
          Sign In
        </Heading>

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
              secureTextEntry: true,
            },
          }}
        />

        <Button onPress={handleSubmit(onSubmit)} isDisabled={!isValid || isSignInPending}>
          <ButtonText>Sign In</ButtonText>
        </Button>

        <Text>
          Don&apos;t have an account?{' '}
          <Link href="/(auth)/sign-up" className="text-primary">
            Sign up
          </Link>
        </Text>
      </VStack>
    </ScrollView>
  );
}
