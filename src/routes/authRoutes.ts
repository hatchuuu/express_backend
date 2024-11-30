
import { validate } from '@/middleware/validate';
import { verifyToken } from '@/middleware/verifyToken';

import { postUserController } from '@/users/user.controller';
import { loginController } from '@/auth/login/login.controller';
import { Router } from "express";
import { loginSchema, registerSchema } from '@/config/zod';

export const authRouter: Router = Router()

authRouter.post("/auth/login", validate(loginSchema), loginController)
authRouter.post("/api/v1/auth/register", verifyToken, validate(registerSchema), postUserController)