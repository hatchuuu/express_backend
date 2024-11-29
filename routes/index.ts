import { authRouter } from "./authRoutes";
import { userRouter } from "./userRoutes";

import { Application, Router } from "express";

const _routes: Array<[string, Router]> = [
    ["", authRouter],
    ["/users", userRouter]
]

export const routes = (app: Application) => {
    _routes.map((route) => {
        const [url, router] = route
        app.use(url, router)
    })
}