"use server";
import { prisma } from "@/utils/db";

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      include: {
        TestTxns: {
          take: 1,
          orderBy: {
            createdAt: "desc", // Get the most recent transaction
          },
        },
        wallets: true,
      },
    });

    // Process the users data to include only the first transaction and the sum of wallet balances
    const processedUsers = users.map((user) => {
      const totalBalanceByCurrency = user.wallets.reduce((acc, wallet) => {
        //@ts-ignore
        if (acc[wallet.currency]) {
          //@ts-ignore
          acc[wallet.currency] += wallet.balance;
        } else {
          //@ts-ignore
          acc[wallet.currency] = wallet.balance;
        }
        return acc;
      }, {});

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        phoneNumber:user.phoneNumber,
        
        firstTransaction: user.TestTxns[0] || null, // The first transaction if it exists
        totalBalanceByCurrency, // The sum of balances grouped by currency
      };
    });

    return processedUsers;
  } catch (error) {
    console.log(error);
    return null;
  }
};
