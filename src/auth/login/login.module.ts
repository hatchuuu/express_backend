import { prisma } from "@/config/prisma"

export const updateToken = async (refreshToken: string, id: string): Promise<boolean> => {
    try {
        await prisma.user.update({
            where: { id },
            data: { refreshToken }
        })
        return true
    } catch (error) {
        return false
    }
}