"use server";

import Balance from "@/components/(userdash)/Agencies/slug/Balance";
import { prisma } from "@/utils/db";

export const CreateAdAccount = async (
    userId:string,
  name: string,
  email: string,
  phoneNumber: string,
  model: string,
  type: string,
  creditAccount: string,
  currency: string,
  timezone: string,
  weblink: string , 
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
        balance:0
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

export const AdAccountDetails = async (id:string)=>{
  try {
    const data = await prisma.account.findUnique({
      where:{id}
    })
    
    return data
  } catch (error) {
    console.log(error);
    return null     
    
  }
}
