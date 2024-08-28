"use server";

import { prisma } from "@/utils/db";

export const getOrders = async () => {
  try {
    const data = await prisma.account.findMany();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getOrderInfo = async (id:string)=>{
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

export const SubmitOrder = async(id:string , link:string)=>{
    try {
       const data =  await prisma.account.update({
        where:{id}, 
        data:{
            AddLink:link  , 
            status:"COMPLETED"
        }
       })
       return data.AddLink
    } catch (error) {
        console.log(error);        
        return null 
    }
}
