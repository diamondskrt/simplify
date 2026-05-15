import type z from 'zod';

import type { profileSchema, profileUpdateSchema } from '../config';

type ProfileSchema = z.infer<typeof profileSchema>;
type ProfileUpdateSchema = z.infer<typeof profileUpdateSchema>;

export type { ProfileSchema, ProfileUpdateSchema };
