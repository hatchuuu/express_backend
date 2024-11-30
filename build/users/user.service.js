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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const user_module_1 = require("./user.module");
const bcrypt_1 = require("bcrypt");
const addUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password } = data;
        const salt = yield (0, bcrypt_1.genSalt)(10);
        const hashPassword = yield (0, bcrypt_1.hash)(password, salt);
        const { password: _ } = data, newData = __rest(data, ["password"]);
        const updatedData = Object.assign(Object.assign({}, newData), { password: hashPassword });
        const response = yield (0, user_module_1.createUser)(updatedData);
        if (!response)
            return {
                "status": 400,
                "message": "User not created"
            };
        return {
            "status": 201,
            "message": "User is created"
        };
    }
    catch (error) {
        return {
            "status": 400,
            "message": "Internal Server Error"
        };
    }
});
exports.addUser = addUser;
//# sourceMappingURL=user.service.js.map