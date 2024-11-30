import { z } from "zod";
import { loginSchema, registerSchema } from "@/config/zod";

export type responseType = {
    status: number;
    message: string | unknown;
    token?: string | null;
    data?: string | null;
};
export type loginType = z.infer<typeof loginSchema>;
export type registerType = z.infer<typeof registerSchema>;

export type userType = {
    id: string;
    email: string;
    username: string;
    password?: string | null;
};

export type responseLogin = {
    message?: string | null,
    accessToken?: string | null,
    refreshToken?: string | null

}
