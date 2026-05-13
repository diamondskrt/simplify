import { z } from 'zod';

const profileSchema = z.object({
  id: z.uuid(),
  email: z.email(),
  firstName: z.string().min(2).max(10),
  lastName: z.string().min(2).max(10),
  avatarUrl: z.url().nullable(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

const profileUpdateSchema = z.object({
  firstName: z.string().min(2).max(10),
  lastName: z.string().min(2).max(10),
  avatarUrl: z.url().nullable(),
});

export { profileSchema, profileUpdateSchema };
