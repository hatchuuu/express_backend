import { registerType, userType } from '@/types/types.d';
import { prisma } from '@/config/prisma';

export const createUser = async (data: registerType): Promise<boolean> => {
    try {
        const { email, username, password } = data
        await prisma.user.create({
            data: {
                email,
                username,
                password
            }
        })
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export const readUsers = async (): Promise<object | null> => {
    try {
        const response = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                username: true,
                createdAt: true,
                updatedAt: true
            }
        })
        return response
    } catch (error) {
        console.log(error)
        return null
    }
}
export const readUsersByEmail = async (email: string): Promise<userType | null> => {
    try {
        const response = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                username: true,
                password: true
            }
        })
        return response
    } catch (error) {
        console.log(error)
        return null
    }
}