"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const validate_1 = require("./../middleware/validate");
const user_controller_1 = require("./../controller/user.controller");
const auth_controller_1 = require("./../controller/auth.controller");
const express_1 = require("express");
const zod_1 = require("../config/zod");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post("/auth/login", (0, validate_1.validate)(zod_1.loginSchema), auth_controller_1.loginController);
exports.authRouter.post("/api/v1/auth/register", (0, validate_1.validate)(zod_1.registerSchema), user_controller_1.postUserController);
exports.authRouter.get("/token", auth_controller_1.getTokenController);
//# sourceMappingURL=authRoutes.js.map