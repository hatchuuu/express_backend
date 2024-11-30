import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(20)
})

export const registerSchema = loginSchema.extend({
    username: z.string().min(5).max(20)
})



