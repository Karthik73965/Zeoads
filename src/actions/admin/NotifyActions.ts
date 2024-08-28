"use server";

import { prisma } from "@/utils/db";

export const pushNotificationAll = async (
  heading: string,
  message: string,
  To: string,
  image_url: string | null , 
  email :string
) => {
  try {
    if(email){
      const user = await prisma.user.findUnique({
        where:{email}
      })
      if(user){
        const res = await prisma.notification.create({
          data:{
            heading , 
            message , 
            //@ts-ignore
            To, 
            userId:user.id
          }
        })
        return res
      }else{
        return null 
      }
    }
    const res = await prisma.notification.create({
      data: {
        heading,
        message,
        //@ts-ignore
        To,
        image_url
      },
    });
    
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllNotifications = async ()=>{
  try {
    const data = await prisma.notification.findMany({
      where:{
        To: {
          not: "CUSTOM",
        }, 
      }
    })
    return data
  } catch (error) {
    console.log(error);
    return null
  }
}