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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const user_module_1 = require("../module/user.module");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password: inputPassword } = data;
    const validatedEmail = yield (0, user_module_1.readUsersByEmail)(email);
    if (!validatedEmail)
        return { message: "Cannot find the account" };
    const { password, id, username } = validatedEmail;
    const validatedPassword = yield (0, bcrypt_1.compare)(inputPassword, password);
    if (!validatedPassword)
        return { message: "Password is incorrect" };
    const accessToken = jsonwebtoken_1.default.sign({ id, username, email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15s"
    });
    const refreshToken = jsonwebtoken_1.default.sign({ id, username, email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1d"
    });
    return {
        accessToken, refreshToken
    };
});
exports.loginUser = loginUser;
//# sourceMappingURL=auth.service.js.map