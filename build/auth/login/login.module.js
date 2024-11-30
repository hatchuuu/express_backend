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
exports.updateToken = void 0;
const prisma_1 = require("@/config/prisma");
const updateToken = (refreshToken, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma_1.prisma.user.update({
            where: { id },
            data: { refreshToken }
        });
        return true;
    }
    catch (error) {
        return false;
    }
});
exports.updateToken = updateToken;
//# sourceMappingURL=login.module.js.map