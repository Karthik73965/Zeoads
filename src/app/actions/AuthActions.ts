'use server'

import { prisma } from "@/utils/db"
import { cookies } from 'next/headers'
import { generateRoleToken, generateToken } from "@/utils/jwt"


export const CreateUser = async (userId: string, name: string, email: string, phoneNumber: string, country: string) => {
    console.log({
        userId,
        name,
        email,
        phoneNumber,
        country
    })
    try {
        const user = await prisma.user.findUnique({
            where: { email }
        })
        if (user) {
            console.log("user found")
            const token = await generateToken(user)
            console.log("generated ", token)
            cookies().set("access_token", token, {
                maxAge: 3060,
                httpOnly: true,
                secure: false,
            })
            if (user.role == "NONE") {
                const roleToken = await generateRoleToken(user.role)
                cookies().set("role_token", roleToken, {
                    maxAge: 3060,
                    httpOnly: true,
                    secure: false,
                })
            }
            return {
                message: "user found ",
                user,
            }
        }
        const CreatedUser = await prisma.user.create({
            data: {
                userId,
                name,
                email,
                phoneNumber,
                country
            }
        })
        console.log("user created")
        const token = await generateToken(CreatedUser)
        console.log("generated ", token)
        cookies().set("access_token", token, {
            maxAge: 3600,
            httpOnly: true,
            secure: false,
        })
        if (CreatedUser.role == "NONE") {
            const roleToken = await generateRoleToken(CreatedUser.role)
            cookies().set("role_token", roleToken, {
                maxAge: 3060,
                httpOnly: true,
                secure: false,
            })
        }
        return {
            message: "user created succesfully",
            user: CreatedUser
        }
    } catch (error) {
        console.log(error)
        return {
            message: "Something went wrong"
        }
    }

}