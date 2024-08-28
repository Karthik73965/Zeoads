"use server";

import { prisma } from "@/utils/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const jwtSecret = process.env.JWT_SECRET || "";
const secretKey = new TextEncoder().encode(jwtSecret);

export const getUserInfo = async () => {
  try {
    const access_token = cookies().get("access_token")?.value;

    if (access_token) {
      const { payload } = await jwtVerify(access_token, secretKey, {
        algorithms: ["HS256"],
      });
      //@ts-ignore
      return payload.id;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getUserInfoDb = async (id: string) => {
  try {
    const userinfo = await prisma.user.findUnique({
      where: { id },
    });
    return userinfo;
  } catch (error) {
    console.log(error);
    return null;
  }
};
