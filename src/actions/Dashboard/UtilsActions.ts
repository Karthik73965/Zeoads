"use server";

import { prisma } from "@/utils/db";

// ----------------------- Invoice -------------------------------

export const InvoiceInfo = async (userId: string) => {
  try {
    const getInvoice = await prisma.invoice.findFirst({
      where: { userId },
    });
    return getInvoice;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const UpdateInvoiceInfp = async (
  userId: string,
  name: string,
  type: string,
  country: string,
  email: string,
  adress: string,
  zipcode: string,
  taxOffice: string,
  Reg_number: string,
  phoneNumber: string,
  model: string,
  currency: string
) => {
  try {
    const precheck = await InvoiceInfo(userId);
    if (precheck) {
      const updatedInvoice = await prisma.invoice.update({
        where: { userId },
        data: {
          userId,
          name,
          type,
          country,
          email,
          adress,
          zipcode,
          taxOffice,
          Reg_number,
          phoneNumber,
          model,
          currency,
        },
      });
      return updatedInvoice;
    } else {
      const createInvoice = await prisma.invoice.create({
        data: {
          userId,
          name,
          type,
          country,
          email,
          adress,
          zipcode,
          taxOffice,
          Reg_number,
          phoneNumber,
        },
      });
      return createInvoice;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

// ----------------------- user info -------------------------------
export const UpdateUserInfo = async (
  id: string,
  name: string,
  email: string,
  phoneNumber: string,
) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        name,
        phoneNumber,
        email,
      },
    });
    return updatedUser;
  } catch (error) {
    console.log(error);
    return null;
  }
};
