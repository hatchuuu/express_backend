"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (token === null)
        res.status(403).json({ message: "Forbidden" });
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err)
            return res.status(401).json({ message: "Unauthorized" });
        if (typeof decoded === "object" && "email" in decoded) {
            const authRequest = req;
            authRequest.email = decoded.email;
            next();
        }
        else {
            return res.status(401).json({ message: "Invalid token payload" });
        }
    });
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=verifyToken.js.map