"use server";
import { prisma } from "@/utils/db";

export const getPendingFunds = async () => {
  try {
    const data = await prisma.accountTxns.findMany({
      where: {
        status: "PENDING",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getClearedFunds = async () => {
  try {
    const data = await prisma.accountTxns.findMany({
      where: {
        status: "COMPLETED",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const approveFund = async (id: string, Acc_id: string) => {
  try {
    const fundDetails = await prisma.accountTxns.update({
      where: { id },
      data: {
        status: "COMPLETED",
      },
    });
    const accountDetials = await prisma.account.findUnique({
      where: { id: Acc_id },
    });
    if (fundDetails && accountDetials) {
      await prisma.account.update({
        where: { id: Acc_id },
        data: {
          balance: accountDetials.balance + fundDetails.amount,
        },
      });
      return true;
    } else return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const DeclineFund = async (id: string) => {
  try {
    const res = await prisma.accountTxns.update({
      where: { id },
      data: {
        status: "CANCELED",
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getTotalPendingFundOfMOnth = async () => {
  try {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const fetchPending = await prisma.accountTxns.findMany({
      where: {
        status: "PENDING",
        createdAt: {
          gte: startOfMonth,
        },
      },
    });
    const fetchComplete = await prisma.accountTxns.findMany({
      where: {
        status: "COMPLETED",
        createdAt: {
          gte: startOfMonth,
        },
      },
    });
    const fetchOrders = await prisma.account.count({
      where:{
        createdAt:{
          gte:startOfMonth
        }
      }
    })
    const pending = fetchPending.reduce((sum, txn) => sum + txn.amount, 0); // Assuming `amount` is a field in `accountTxns`
    const completed = fetchComplete.reduce((sum, txn) => sum + txn.amount, 0); // Assuming `amount` is a field in `accountTxns`

    return { pending, completed , orders :fetchOrders };
  } catch (error) {
    console.log(error);
    return null;
  }
};
