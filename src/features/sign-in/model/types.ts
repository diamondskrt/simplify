import type z from 'zod';

import type { signInSchema } from '../config';

type SignInFormData = z.infer<typeof signInSchema>;

export type { SignInFormData };
