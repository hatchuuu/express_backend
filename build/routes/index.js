"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const authRoutes_1 = require("./authRoutes");
const userRoutes_1 = require("./userRoutes");
const _routes = [
    ["", authRoutes_1.authRouter],
    ["/users", userRoutes_1.userRouter]
];
const routes = (app) => {
    _routes.map((route) => {
        const [url, router] = route;
        app.use(url, router);
    });
};
exports.routes = routes;
//# sourceMappingURL=index.js.map