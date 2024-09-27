"use server";
import { prisma } from "@/utils/db";

export const AnalyticsFunc = async (
  order: string | null,
  amount: number,
  accountsSold: boolean
) => {
  try {
    // Validate inputs
    if (typeof amount !== "number" || amount < 0) {
      throw new Error("Invalid amount provided");
    }

    if (typeof accountsSold !== "boolean") {
      throw new Error("Invalid value for AccountsSold");
    }

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString("default", {
      month: "long",
    });
    const currentYear = currentDate.getFullYear().toString();

    let monthlyStats = await prisma.monthlyStats.findFirst({
      where: { year: currentYear, month: currentMonth },
    });

    if (!monthlyStats) {
      // Create a new record if it doesn't exist for the current month and year
      monthlyStats = await prisma.monthlyStats.create({
        data: {
          month: currentMonth,
          year: currentYear,
          orders: order ? 1 : 0,
          accountsSold: accountsSold ? 1 : 0,
          collectedFunds: amount || 0,
          pendingFunds: 0,
        },
      });
    } else {
      // Update the existing record
      await prisma.monthlyStats.update({
        where: { id: monthlyStats.id },
        data: {
          orders: order ? (monthlyStats.orders ?? 0) + 1 : monthlyStats.orders,
          accountsSold: accountsSold
            ? (monthlyStats.accountsSold ?? 0) + 1
            : monthlyStats.accountsSold,
          collectedFunds: amount
            ? (monthlyStats.collectedFunds ?? 0) + amount
            : monthlyStats.collectedFunds,
        },
      });
    }

    // Create an analytics transaction if there's an amount
    if (amount > 0) {
      await prisma.analytxns.create({
        data: {
          month: currentMonth,
          year: currentYear,
          amount: amount,
          monthlyStatsId: monthlyStats.id,
        },
      });
    }
  } catch (error: any) {
    console.error("Error processing analytics:", error);
  }
};

export const getAllAnalytics = async () => {
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString("default", {
      month: "long",
    });
    const currentYear = currentDate.getFullYear().toString();
  try {
    const balance = await prisma.creditAccount.aggregate({
      _sum: {
        balance: true,
      },
    });
    const newUsers = await prisma.user.count({
      where: {
        createdAt: {
          gte: startOfMonth,
        },
      },
    });
    const AllUsers = await prisma.user.count();
    const SoldAccounts = await prisma.account.count({
      where: {
        status: "COMPLETED",
        createdAt: {
          gte: startOfMonth,
        },
      },
    });
    const AllAccounts = await prisma.account.count({
      where: {
        createdAt: {
          gte: startOfMonth,
        },
      },
    });
    const accountsSold = await prisma.account.count({
      where:{
        status:"COMPLETED" , 
        createdAt :{
          gte:startOfMonth
        }
      }
    })
const dailyMontlyPerformance = await prisma.analytxns.findMany({
      where: {
        createdAt: {
          gte: startOfMonth,
        },
      },
    });
    const montlyRevenue = await prisma.monthlyStats.findFirst({
      where:{
            month :currentMonth , 
            year :currentYear
      }
    })
    return  {
      balance,
      newUsers , 
      AllUsers , 
      dailyMontlyPerformance, 
      montlyRevenue,
      AllAccounts , 
    };
  } catch (error) {
    console.log(error)
    return null
  }
};
