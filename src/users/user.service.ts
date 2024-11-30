import { createUser, readUsersByEmail } from './user.module';
import { registerType, responseType } from "@/types/types";
import { hash, genSalt } from 'bcrypt';

export const addUser = async (data: registerType): Promise<responseType> => {
    try {
        const { password, email } = data
        const salt = await genSalt(10)
        const hashPassword = await hash(password, salt)
        const { password: _, ...newData } = data
        const updatedData = { ...newData, password: hashPassword }

        const checkEmail = await readUsersByEmail(email)
        if (checkEmail) return {
            "status": 400,
            "message": "Email was used by another user"
        }

        const response = await createUser(updatedData)
        if (!response) return {
            "status": 400,
            "message": "User not created"
        }
        return {
            "status": 201,
            "message": "User is created"
        }
    } catch (error) {
        return {
            "status": 400,
            "message": "Internal Server Error"
        }
    }
}