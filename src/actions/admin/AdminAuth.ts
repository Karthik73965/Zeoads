"use server";

import { prisma } from "@/utils/db";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

const jwtSecret = process.env.JWT_SECRET || "";
const secretKey = new TextEncoder().encode(jwtSecret);

// generating a token
async function generateToken(data: any): Promise<string> {
  const token = await new SignJWT(data)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(secretKey);
  return token;
}

export const verifyAdmin = async (email: string, password: string) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: { email, password },
    });
    if (!admin) {
      console.log("password", email, password);
      return false;
    }
    const token = await generateToken({
      id: admin.id,
      name: admin.name,
      email: admin.email,
      phoneNumber: admin.phoneNumber,
      image: admin.image,
    });
    cookies().set("admin_token", token, {
      maxAge: 86400,
      httpOnly: true,
      secure: false,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const AdminLogout = () => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("admin_token");
    if (token) {
      cookieStore.delete("admin_token");
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
