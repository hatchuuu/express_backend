import { readUsersByEmail } from "../module/user.module";
import { loginType, responseLogin, userType } from "../types/types";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (data: loginType): Promise<responseLogin> => {
    const { email, password: inputPassword } = data;

    const validatedEmail: userType | null = await readUsersByEmail(email);
    if (!validatedEmail) return { message: "Cannot find the account" };

    const { password, id, username } = validatedEmail;
    const validatedPassword = await compare(inputPassword, password as string);
    if (!validatedPassword) return { message: "Password is incorrect" };

    const accessToken = jwt.sign(
        { id, username, email },
        process.env.ACCESS_TOKEN_SECRET as string, {
        expiresIn: "15s"
    }
    );
    const refreshToken = jwt.sign(
        { id, username, email },
        process.env.ACCESS_TOKEN_SECRET as string,
        {
            expiresIn: "1d"
        }
    );
    return {
        accessToken, refreshToken
    }
};
