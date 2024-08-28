"use server";

import { prisma } from "@/utils/db";
import { log } from "console";

export const CreateWallet = async (
  userId: string,
  name: string,
  currency: string
) => {
  try {
    const wallet = await prisma.creditAccount.create({
      data: {
        userId,
        name,
        currency,
        balance: 0,
      },
    });
    return wallet;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllWallets = async (userId: string) => {
  try {
    const allwallets = await prisma.creditAccount.findMany({
      where: { userId },
    });
    return allwallets;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCreditAccDetails = async (userId: string, name: string) => {
  console.log(name, userId);
  try {
    const data = await prisma.creditAccount.findFirst({
      where: {
        name,
        userId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getWalletInfo = async (id: string) => {
  try {
    const res = await prisma.creditAccount.findUnique({
      where: { id },
    });
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addBalanceTowallet = async (
  id: string,
  userId: string,
  amount: number,
  mode: string
) => {
  try {
    const getWallet = await prisma.creditAccount.findUnique({
      where: { id, userId },
    });
    if (getWallet) {
      const balance = getWallet.balance;
      const updatedAmount = balance + amount;

      // making a txns
      const txn = await prisma.creditTxns.create({
        data: {
          name: getWallet.name,
          currency: getWallet.currency,
          payment_mode: mode,
          amount,
        },
      });
      //updating Wallet
      const updatedWallet = await prisma.creditAccount.update({
        where: { id },
        data: {
          balance: updatedAmount,
        },
      });
      console.log("updated wallet ", updatedWallet);
      return true;
    } else {
      console.log("wallet not found");
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
