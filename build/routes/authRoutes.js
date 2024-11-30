"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const verifyToken_1 = require("@/middleware/verifyToken");
const validate_1 = require("@/middleware/validate");
const user_controller_1 = require("@/users/user.controller");
const login_controller_1 = require("@/auth/login/login.controller");
const express_1 = require("express");
const zod_1 = require("@/config/zod");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post("/auth/login", (0, validate_1.validate)(zod_1.loginSchema), login_controller_1.loginController);
exports.authRouter.post("/api/v1/auth/register", verifyToken_1.verifyToken, (0, validate_1.validate)(zod_1.registerSchema), user_controller_1.postUserController);
//# sourceMappingURL=authRoutes.js.map