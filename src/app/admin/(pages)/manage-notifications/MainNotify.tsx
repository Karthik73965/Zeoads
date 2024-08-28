"use client";
import { getAllNotifications } from "@/actions/admin/NotifyActions";
import { NotificationDialog } from "@/components/(userdash)/Settings/NotificationDailog";
import React, { useEffect, useState } from "react";
import EditBannerCta from "./EditBannerCta";
import EditProductVideo from "./EditProductVideo";

const MainNotify = () => {
  const [activeTab, setActiveTab] = useState("Notifications");

  const handleCreateNew = () => {
    // Implement create new notification functionality here
    console.log("Create new notification");
  };

  return (
    <div className="  p-6 dh-bg rounded-lg mx-5">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4 rounded-md border-[1px] bg-white p-2">
          {["Notifications", "Banner CTA Video", "Product Video"].map((tab:any) => (
            <button
              key={tab}
              className={`px-4 py-2 ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {activeTab == "Notifications" ? (
          <button
            className="px-4 py-2 bg-blue-600 h-[56px] text-white rounded-md hover:bg-blue-700 p-2 transition-colors"
            onClick={handleCreateNew}
          >
            <NotificationDialog />
          </button>
        ) : (
          ""
        )}
      </div>
      {activeTab == "Notifications" ? (
        <Notification />
      ) : activeTab == "Banner CTA Video" ? (
        <EditBannerCta />
      ) : activeTab == "Product Video" ? (
        <EditProductVideo />
      ) : (
        ""
      )}
    </div>
  );
};

export default MainNotify;

const Notification = () => {
  const [notifications, setNotifications] = useState<any>([]);
  const handleDelete = (id: any) => {
    // setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const handleEdit = (id: any) => {
    // Implement edit functionality here
    console.log("Edit notification with id:", id);
  };

  const fetchNotificatons = async () => {
    try {
      const data = await getAllNotifications();
      setNotifications(data);
    } catch (error) {
      console.log(error);
      alert("errror");
    }
  };

  useEffect(() => {
    fetchNotificatons();
  }, []);
  return (
    <div className="">
      {notifications &&
        notifications.map((notification: any) => (
          <div
            key={notification.id}
            className="flex p-6 mb-5 bg-white  rounded-md items-center justify-between py-4 border-b"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">{notification.heading}</h3>
                <p className="text-gray-600">{notification.message}</p>
              </div>
            </div>
            <div className="space-x-2">
              <button
                className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => handleDelete(notification.id)}
              >
                Delete
              </button>
              <button
                className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => handleEdit(notification.id)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
