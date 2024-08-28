"use server";
import { prisma } from "@/utils/db";

// purchase 5999 transaction
export const purchase5999 = async (
    amount: number,
    currency: string,
    userId: string
) => {
    try {
        const transaction = await prisma.testTransaction.create({
            data: {
                amount,
                currency,
                userId,
                status: "COMPLETED",
            },
        });
        return transaction;
    } catch (error) {
        console.log(error);
        return null;
    }
};

// get all transactions
export const getAllTxns = async (userId: string) => {
    try {
        const txns = await prisma.testTransaction.findMany({
            where: { userId },
        });
        return txns;
    } catch (error) { 
        console.log(error)
        return null
    }
};
