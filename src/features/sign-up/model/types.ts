import type z from 'zod';

import type { signUpSchema } from '../config';

type SignUpFormData = z.infer<typeof signUpSchema>;

export type { SignUpFormData };
