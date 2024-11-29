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
exports.readUsersByEmail = exports.readUsers = exports.createUser = void 0;
const prisma_1 = require("./../config/prisma");
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, username, password } = data;
        yield prisma_1.prisma.user.create({
            data: {
                email,
                username,
                password
            }
        });
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.createUser = createUser;
const readUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield prisma_1.prisma.user.findMany({
            select: {
                id: true,
                email: true,
                username: true,
                createdAt: true,
                updatedAt: true
            }
        });
        return response;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.readUsers = readUsers;
const readUsersByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield prisma_1.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                username: true,
                password: true
            }
        });
        return response;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.readUsersByEmail = readUsersByEmail;
//# sourceMappingURL=user.module.js.map