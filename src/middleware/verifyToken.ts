import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
    email?: string
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader?.split(" ")[1] as string
    if (token === null) res.status(403).json({ message: "Forbidden" })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Unauthorized" })

        if (typeof decoded === "object" && "email" in decoded) {
            const authRequest = req as AuthenticatedRequest;
            authRequest.email = (decoded as JwtPayload).email;
            next();
        } else {
            return res.status(401).json({ message: "Invalid token payload" });
        }
    })

}