"use server";

import { prisma } from "@/utils/db";

export const pushNotificationAll = async (
  heading: string,
  message: string,
  To: string,
  image_url: string,
  email: string
) => {
  try {
    if (email) {
      const user = await prisma.user.findUnique({
        where: { email },
      });
      if (user) {
        const res = await prisma.notification.create({
          data: {
            heading,
            image_url,
            message,
            //@ts-ignore
            To,
            userId: user.id,
          },
        });
        return res;
      } else {
        return null;
      }
    }
    const res = await prisma.notification.create({
      data: {
        heading,
        message,
        //@ts-ignore
        To,
        image_url,
      },
    });

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllNotifications = async () => {
  try {
    const data = await prisma.notification.findMany({
      where: {
        To: {
          not: "CUSTOM",
        },
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getNotifications = async (userId: string) => {
  console.log(userId);
  try {
    // Fetch the user's creation date
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { createdAt: true }, // Fetch only the creation date
    });

    if (!user) {
      throw new Error("User not found");
    }

    const userCreationDate = user.createdAt;

    // Get the current date for setting the upper limit
    const currentDate = new Date();
    const monthEnd = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
      23,
      59,
      59,
      999
    );

    // Check if the user has made a "PAID" transaction after their creation date
    const paidUser = await prisma.testTransaction.findFirst({
      where: {
        userId,
        status: "COMPLETED",
        createdAt: {
          gte: userCreationDate, // Start from the user's creation date
          lte: monthEnd,
        },
      },
    });

    // Fetch notifications based on the subscription status
    const notifications = await prisma.notification.findMany({
      where: {
        OR: [
          // Notifications for all users
          { To: "ALL" },
          // Notifications for active/paid users (if the user is paid)
          { To: paidUser ? "PAID" : "ACTIVE" },
          // Custom notifications (for this specific user)
          { To: "CUSTOM", userId },
          // Personal notifications (directly addressed to this user)
          { userId },
        ],
        // Filter by the user's creation date as the start date
        createdAt: {
          gte: userCreationDate,
        },
      },
      orderBy: {
        createdAt: "desc", // Sort by most recent
      },
    });

    return notifications;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return null;
  }
};


//--------------------------------------- Video Handles ------------------------------------------------------

export const updateDbforVideos = async (title: string, url: string) => {
  try {
    const res = await prisma.videos.findUnique({
      where: {
        title,
      },
    });
    if (res) {
      await prisma.videos.update({
        where: { title },
        data: {
          url,
        },
      });
      return true;
    } else {
      await prisma.videos.create({
        data: {
          title,
          url,
        },
      });
      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getVideobyTitle = async (title: string) => {
  console.log("getting url");
  try {
    const data = await prisma.videos.findUnique({
      where: { title },
    });
    console.log(data);
    return data?.url;
  } catch (error) {
    console.error(error);
    return null;
  }
};
