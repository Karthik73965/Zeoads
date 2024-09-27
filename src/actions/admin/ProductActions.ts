"use server";

import { prisma } from "@/utils/db";

// -------------------------------Blogs _---------------------------------
export const CreateBLog = async (
  image_url: string,
  Heading: string,
  Article: string,
  type: string
) => {
  try {
    const res = await prisma.blog.create({
      data: {
        image_url,
        Heading,
        Article,
        //@ts-ignore
        type,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// get all blogs for client side
export const getAllBlogs = async () => {
  try {
    const data = await prisma.blog.findMany();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// get A blog by id
export const getAblogId = async (id: string) => {
  try {
    const data = await prisma.blog.findUnique({
      where: { id },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// update blog by id
export const updateBlogbyId = async (
  id: string,
  image_url: string,
  Heading: string,
  Article: string,
  type: string
) => {
  try {
    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        image_url,
        Heading,
        Article,
        //@ts-ignore
        type,
      },
    });
    return updatedBlog;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getRecent3Blogs = async ()=>{
  try {
    const data = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc', 
      },
      take: 3, 
    });
    return data
  } catch (error) {
    return null 
    console.log(error)
  }
}
//-------------------------Product edit ----------------------------------

// this is for craeting a ad server in the model
export const CreateAdServer = async (name: string) => {
  try {
    const res = await prisma.adServer.create({
      data: {
        name,
        feautures: [],
        currency: [],
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
// this is to update a add server in the update page
export const UpdateADserver = async (
  name: string,
  logo: string,
  feautures: string[],
  currency: string[]
) => {
  try {
    const data = await prisma.adServer.update({
      where: { name },
      data: {
        logo,
        name,
        feautures,
        currency,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
// this to get all all servers ka data
export const getAllAdservers = async () => {
  try {
    const data = await prisma.adServer.findMany();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// ----------------------Price Panel ------------------------------------

export const CreatePricePanel = async (
  leftPanel: string[],
  rightPanel: string[],
  Price: number
) => {
  try {
    const res = await prisma.pricePanel.create({
      data: {
        leftPanel,
        rightPanel,
        Price,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const UpdatePricePanel = async (
  id: string,
  leftPanel: string[],
  rightPanel: string[],
  Price: number
) => {
  try {
    const data = await prisma.pricePanel.update({
      where: { id },
      data: {
        leftPanel,
        rightPanel,
        Price,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPricePanel = async () => {
  try {
    const data = await prisma.pricePanel.findFirst();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// ------------------------------Announcement Bar------------------------

export const createAnnouncemntBar = async (
  message: string,
  HexaCode: string,
  BgCode: string
) => {
  try {
    const data = await prisma.annoucement.create({
      data: {
        message,
        HexaCode,
        BgCode,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const UpdateAnnoucementBar = async (
  id: string,
  message: string,
  HexaCode: string,
  BgCode: string
) => {
  try {
    const res = await prisma.annoucement.update({
      where: { id },
      data: {
        message,
        HexaCode,
        BgCode,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAnnouncementBar = async () => {
  try {
    const data = await prisma.annoucement.findFirst();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
