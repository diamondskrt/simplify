import z from 'zod';

import { PASSWORD_MAX_CHARACTERS_COUNT } from './constants';

const signUpSchema = z.object({
  email: z
    .email({ message: 'Please enter a valid email address' })
    .min(1, { message: 'Email is required' }),
  password: z
    .string()
    .min(PASSWORD_MAX_CHARACTERS_COUNT, {
      message: `Password must be at least ${PASSWORD_MAX_CHARACTERS_COUNT} characters`,
    })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)/, {
      message: 'Password must contain at least 1 letter and 1 number',
    }),
});

export { signUpSchema };
