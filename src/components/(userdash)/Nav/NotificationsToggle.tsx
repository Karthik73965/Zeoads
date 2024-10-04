"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getNotifications } from "@/actions/admin/NotifyActions";
import { useUserInfo } from "@/hooks/useUserInfo";
import { notification } from "@prisma/client";

export function NotificationsToggle() {
  const [notifyState, SetNotifyState] = React.useState("All");
  const [notifications, setNotifications] = React.useState<notification[] | null>(
    null
  );
  const userinfo = useUserInfo();

  React.useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotifications(userinfo?.id);
        console.log(data)
        if (data) {
          setNotifications(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (userinfo?.id) {
      fetchNotifications();
    }
  }, [userinfo?.id]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img
          className="cursor-pointer"
          src="/userDash/Nav/bell.svg"
          alt="bell"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[433px] rounded-[8px] p-[24px] mt-5 mr-28">
        <h3 className="text-[24px]">Notifications</h3>
        <section className="mt-10 gap-[24px] grid">
          <div className="pb-1 flex gap-x-5 border-b-[1px] border-[#E4E7EC]">
            <div className="primary-text font-medium underline">All</div>
            <div className="font-medium">Unread</div>
          </div>
          <section className="h-[40vh] overflow-y-scroll thin-scroll">
            {notifications?.map((i) => (
              <div
                key={i.id} // Add key prop
                className="flex gap-x-5 mb-5 border-[#E4E7EC] pb-3 border-b-[1px]"
              >
                <div className="h-[44px] w-[44px] p-3 rounded-[4px]">
                  <img
                    src={i.image_url ? i.image_url : "/userDash/Nav/Dash.png"}
                    alt="profile"
                  />
                </div>
                <div className="grid">
                  <div className="text-[#3E4C59]">{i.heading}</div>
                  <div className="flex mt-2 text-left gap-[24px] text-[#727F8F]">
                    <div>{i.createdAt && new Date(i.createdAt).toLocaleDateString()}</div>
                    <div>{i.createdAt && new Date(i.createdAt).toLocaleTimeString()}</div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
