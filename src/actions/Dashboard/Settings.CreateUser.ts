"use server";
import { prisma } from "@/utils/db";

export const CreateSubUser = async (
  adminId: string,
  email: string,
  name: string,
  role: string
) => {
  try {
    const res = await prisma.userList.create({
      data: {
        adminId,
        email,
        name,
        //@ts-ignore
        role,
        status: "Active",
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getUsersList = async (adminId: string) => {
  try {
    const data = await prisma.userList.findMany({
      where: {
        adminId,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateUser = async (
  id: string,
  name: string,
  role: string,
  email: string
) => {
  try {
    const data = await prisma.userList.update({
      where: { id },
      data: {
        name,
        //@ts-ignore
        role,
        email,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const DelteSUbUSer = async (id: string) => {
  try {
    const data = await prisma.userList.update({
      where: { id },
      data: {
        status: "DELETED",
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
