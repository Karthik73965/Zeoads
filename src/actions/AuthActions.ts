"use server";

import { prisma } from "@/utils/db";
import { cookies } from "next/headers";
import { generateRoleToken, generateToken } from "@/utils/jwt";

export const CreateUser = async (
  userId: string,
  name: string,
  email: string,
  phoneNumber: string,
  country: string
) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (user) {
      const token = await generateToken(user);
      cookies().set("access_token", token, {
        maxAge: 86400,
        httpOnly: true,
        secure: false,
      });
      if (user.role == "NONE") {
        const roleToken = await generateRoleToken(user.role);
        cookies().set("role_token", roleToken, {
          maxAge: 86400,
          httpOnly: true,
          secure: false,
        });
      }
      return {
        message: "Login succesfull",
        user,
      };
    }
    const CreatedUser = await prisma.user.create({
      data: {
        userId,
        name,
        email,
        phoneNumber,
        country,
      },
    });
    const createCreditAccount = await prisma.creditAccount.create({
      data: {
        name: "default",
        currency: "INR",
        balance: 0,
        userId: CreatedUser.id,
      },
    });
    const token = await generateToken(CreatedUser);
    cookies().set("access_token", token, {
      maxAge: 86400,
      httpOnly: true,
      secure: false,
    });
    if (CreatedUser.role == "NONE") {
      const roleToken = await generateRoleToken(CreatedUser.role);
      cookies().set("role_token", roleToken, {
        maxAge: 3060,
        httpOnly: true,
        secure: false,
      });
    }
    return {
      message: "Profile created",
      user: CreatedUser,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};

export const logOut =  () => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("access_token");

    if (token) {
      cookieStore.delete("access_token");
      return true;
    } else {
      return false; 
    }
  } catch (error) {
    console.error("Error logging out:", error);
    return false; 
  }
};
