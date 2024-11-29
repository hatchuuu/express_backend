import { NextFunction, Request, Response } from "express";
import { z, ZodSchema } from "zod";

export const validate = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const validatedFields = schema.safeParse(req.body)
            if (!validatedFields.success) {
                const dataError = validatedFields.error.errors.map((result) => ({
                    fields: result.path[0],
                    message: result.message
                }))
                res.status(400).json(dataError)
            } else {
                next()
            }
        } catch (error) {
            if (error instanceof z.ZodError) res.json({ message: error })
            res.json({ message: "Internal Server Error" })
        }
    }
}
