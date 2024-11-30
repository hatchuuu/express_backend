import { verifyToken } from '../src/middleware/verifyToken';
import { validate } from '../src/middleware/validate';

import { postUserController } from '../../controller/user.controller';
import { getTokenController, loginController } from '../../controller/auth.controller';
import { Router } from "express";
import { loginSchema, registerSchema } from '../config/zod';

export const authRouter: Router = Router()

authRouter.post("/auth/login", loginController)
authRouter.post("/api/v1/auth/register", verifyToken, validate(registerSchema), postUserController)
authRouter.get("/token", getTokenController)