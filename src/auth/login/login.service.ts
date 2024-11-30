import { sign } from 'jsonwebtoken';
import { loginType, responseLogin } from "@/types/types";
import { readUsersByEmail } from "@/users/user.module";
import { compare } from "bcrypt";
import { updateToken } from './login.module';

export const loginUser = async (data: loginType): Promise<responseLogin> => {
    try {
        const { email, password: inputPassword } = data
        const validatedEmail = await readUsersByEmail(email)
        if (!validatedEmail) return { message: "Email not found" }

        const { password, id, username } = validatedEmail
        const validatedPassword = await compare(inputPassword, password as string)

        if (!validatedPassword) return { message: "Password is incorrect" }

        const accessToken = sign({ id, username, email }, process.env.ACCESS_TOKEN_SECRET as string, {
            expiresIn: "15s"
        })
        const refreshToken = sign({ id, username, email }, process.env.REFRESH_TOKEN_SECRET as string, {
            expiresIn: "1d"
        })
        const updatedToken = await updateToken(refreshToken, id)
        if (!updatedToken) return { message: "Cannot update the token" }
        return {
            accessToken, refreshToken
        }

    } catch (error) {
        return { message: "Internal Server Error" }
    }
}