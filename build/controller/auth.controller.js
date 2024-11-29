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
exports.getTokenController = exports.loginController = void 0;
const auth_service_1 = require("./../service/auth.service");
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, auth_service_1.loginUser)(req.body);
    if (response.message)
        res.status(400).json(response);
    res.cookie("refreshToken", response.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
    });
    res.status(200).json({ "token": response.accessToken });
});
exports.loginController = loginController;
const getTokenController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getTokenController = getTokenController;
//# sourceMappingURL=auth.controller.js.map