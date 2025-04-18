import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(1),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const FeriCreateSchema = z.object({
  name: z.string().min(1),
  status: z.boolean(),
  availableTrigerId: z.string(),
  triggerMetadata: z.any().optional(),
  actions: z.array(
    z.object({
      availableActionId: z.string(),
      actionMetadata: z.any().optional(),
    })
  ),
});

export const EditFeriCreateSchema = z.object({
  name: z.string().min(1),
  status: z.boolean(),
  triggerId: z.string(),
  actions: z.array(
    z.object({
      availableActionId: z.string(),
      actionMetadata: z.any().optional(),
    })
  ),
  trigger: z.object({
    availableTriggerId: z.string(),
  }),
});
