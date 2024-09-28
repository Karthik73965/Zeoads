"use server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const jwtSecret = process.env.JWT_SECRET || "";
const secretKey = new TextEncoder().encode(jwtSecret);

export const CheckIsSubUser = async () => {
  try {
    const token = cookies().get("access_token")?.value;
    if (token) {
      const { payload } = await jwtVerify(token, secretKey, {
        algorithms: ["HS256"],
      });
      //@ts-ignore
      const check = payload?.id?.subId;
      if (check) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
