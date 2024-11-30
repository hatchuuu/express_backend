import { loginUser } from './login.service';
import { Request, Response } from "express"
import { responseLogin } from '@/types/types';

export const loginController = async (req: Request, res: Response) => {
    const response: responseLogin = await loginUser(req.body)
    if (response.message) res.status(400).json(response)
    res.cookie("refreshToken", response.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
    })
    res.status(200).json({ "token": response.accessToken })
}