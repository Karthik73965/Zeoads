"use server";

import Balance from "@/components/(userdash)/Agencies/slug/Balance";
import { prisma } from "@/utils/db";
import { log } from "console";

export const CreateAdAccount = async (
  userId: string,
  name: string,
  email: string,
  phoneNumber: string,
  model: string,
  type: string,
  creditAccount: string,
  currency: string,
  timezone: string,
  weblink: string
) => {
  try {
    const NewAdAccount = await prisma.account.create({
      data: {
        userId,
        name,
        email,
        phoneNumber,
        //@ts-ignore
        model,
        //@ts-ignore
        type,
        creditAccount,
        currency,
        timezone,
        weblink,
        balance: 0,
      },
    });
    return NewAdAccount;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAdAccounts = async (userId: string) => {
  try {
    const data = await prisma.account.findMany({
      where: { userId },
    });

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const AdAccountDetails = async (id: string) => {
  try {
    const data = await prisma.account.findUnique({
      where: { id },
    });

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

//--------------------------------- Add Balance to the account actions -----------------------------

export const addBalanceToAdAcc = async (
  id: string,
  userId: string,
  Acc_id: string,
  amount: number
) => {
  try {
    const wallet = await prisma.creditAccount.findUnique({
      where: { id, userId },
    });
    const adaccount = await prisma.account.findUnique({
      where: { id: Acc_id },
    });

    if (wallet && adaccount) {
      if(wallet?.balance < amount ){
        return "Insufficient Balance"
      }
      const txn = await prisma.accountTxns.create({
        data: {
          name: wallet.name,
          Acc_id,
          type: adaccount.model,
          creditAcc: wallet.id,
          status: "PENDING",
          amount,
        },
      });
      await prisma.creditAccount.update({
        where:{id } , 
        data:{
          balance:wallet.balance - amount
        }
      })
      
      // await prisma.account.update({
      //   where: { id: Acc_id },
      //   data: {
      //       balance:adaccount.balance + amount
      //   },
      // });

      console.log("transacton ", txn);
      return txn;
    } else {
      console.log(wallet, adaccount);

      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const getAccountFunds = async (Acc_id:string)=>{
  try {
    const data = await prisma.accountTxns.findMany({
      where:{Acc_id}
    })
    return data
  } catch (error) {
    console.log(error)
return null 
  }
}