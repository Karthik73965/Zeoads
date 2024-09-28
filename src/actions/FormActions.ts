'use server'

import { prisma } from "@/utils/db"
import { generateToken, getIdAcessToken } from "@/utils/jwt"
import { cookies } from "next/headers"

export const OnboardingSubmit = async (monthlyAdSpend: string, whyPerformance: string[], role: string) => {
    try {
        const access_token = cookies().get('access_token')?.value || ""
        const user = await getIdAcessToken(access_token) || ""
        //@ts-ignore
        const id = user.id

        const updatingInfo = await prisma.user.update({
            where: { id },
            data: {
                //@ts-ignore
                role,
                monthlyAdSpend,
                //@ts-ignore
                whyPerformance
            }
        })
        const token = await generateToken(updatingInfo)
        cookies().set("access_token", token, {
            maxAge: 86400*14,
            httpOnly: true,
            secure: false,
        })
        cookies().delete("role_token")
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}