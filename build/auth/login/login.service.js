"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const user_module_1 = require("@/users/user.module");
const bcrypt_1 = require("bcrypt");
const login_module_1 = require("./login.module");
const loginUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password: inputPassword } = data;
        const validatedEmail = yield (0, user_module_1.readUsersByEmail)(email);
        if (!validatedEmail)
            return { message: "Email not found" };
        const { password, id, username } = validatedEmail;
        const validatedPassword = yield (0, bcrypt_1.compare)(inputPassword, password);
        if (!validatedPassword)
            return { message: "Password is incorrect" };
        const accessToken = (0, jsonwebtoken_1.sign)({ id, username, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "15s"
        });
        const refreshToken = (0, jsonwebtoken_1.sign)({ id, username, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "1d"
        });
        const updatedToken = yield (0, login_module_1.updateToken)(refreshToken, id);
        if (!updatedToken)
            return { message: "Cannot update the token" };
        return {
            accessToken, refreshToken
        };
    }
    catch (error) {
        return { message: "Internal Server Error" };
    }
});
exports.loginUser = loginUser;
//# sourceMappingURL=login.service.js.map