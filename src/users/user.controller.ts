import { addUser } from './user.service';
import { Request, Response } from "express";

export const postUserController = async (req: Request, res: Response) => {
    try {
        const response = await addUser(req.body)
        res.status(response.status).json(response)
    } catch (error) {
        res.status(500).json({ message: "Something is wrong" })
    }
}