"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { AdminLogout } from "@/actions/admin/AdminAuth";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";

type Props = {
  route: string;
};

export default function AdminNav({ route }: Props) {
  const [page, Setpage] = useState<string>("dashboard");
  const router = useRouter();

  const logout = () => {
    const res = AdminLogout();
    if (res) {
      SucessToast("Logged out Succesfully ");
      setTimeout(() => {
        router.push("/admin/login");
      }, 3000);
    } else {
      ErrorToast("Something went wrong");
    }
  };

  return (
    <div className="w-[252px]   min-h-screen bg-white  border-r-[1px]  border-[#E4E7EC]">
      <div className="h-[84px] mx-2  p-5 border-b-[1px] border-[#E4E7EC] ">
        <img className="h-[32px] w-[144px]" src="/logo.svg" alt="" />
      </div>
      <section className="px-5">
        <div className="text-[14px] mx-2 mt-2 text-[#727F8F]">Overview</div>
        <section className="gap-[20px] grid mt-5">
          <div
            onClick={() => router.push("/admin/user-management")}
            className={`w-[220px] h-[40px]  cursor-pointer  flex ${
              route == "User" ? " bg-[#4779E8]" : ""
            }  gap-[12px] p-[8px] rounded-[4px]`}
          >
            <img
              src={`${
                route == "dashboard"
                  ? "/userDash/Nav/profile2white.svg"
                  : "/userDash/Nav/profile2white.svg"
              }`}
              alt="User"
            />{" "}
            <div
              className={`${route == "User" ? "text-white" : "text-[#3E4C59]"}`}
            >
              User Management
            </div>
          </div>
          <div
            onClick={() => router.push("/admin/manage-orders")}
            className={`w-[220px] h-[40px] cursor-pointer ${
              route == "Orders" ? " bg-[#4779E8]" : ""
            }  flex  gap-[12px] p-[8px] rounded-[4px]`}
          >
            <img
              src={`${
                route == "Orders"
                  ? "/admin/sidebar/cartwhite.svg"
                  : "/admin/sidebar/cart.svg"
              }`}
              alt="Orders"
            />
            <div
              className={`${
                route == "Orders" ? "text-white" : "text-[#3E4C59]"
              }`}
            >
              Manage Orders{" "}
            </div>
          </div>
          <div
            onClick={() => router.push("/admin/product-management")}
            className={`w-[220px] h-[40px] cursor-pointer ${
              route == "Product" ? " bg-[#4779E8]" : ""
            }  flex  gap-[12px] p-[8px] rounded-[4px]`}
          >
            <img
              src={`${
                route == "couses"
                  ? "/userDash/Nav/DashWhite.png"
                  : "/userDash/Nav/Dash.png"
              }`}
              alt="Product"
            />{" "}
            <div
              className={`${
                route == "Product" ? "text-white" : "text-[#3E4C59]"
              }`}
            >
              Product Management{" "}
            </div>
          </div>
          <div
            onClick={() => router.push("/admin/fund-management")}
            className={`w-[220px] h-[40px] cursor-pointer ${
              route == "Fund" ? " bg-[#4779E8]" : ""
            }  flex  gap-[12px] p-[8px] rounded-[4px]`}
          >
            <img
              src={`${
                route == "couses"
                  ? "/userDash/Nav/coursesWhite.svg"
                  : "/userDash/Nav/courses.svg"
              }`}
              alt="Fund"
            />{" "}
            <div
              className={`${route == "Fund" ? "text-white" : "text-[#3E4C59]"}`}
            >
              Fund Management{" "}
            </div>
          </div>
          <div
            onClick={() => router.push("/admin/analytics")}
            className={`w-[220px] h-[40px] cursor-pointer ${
              route == "Analytics" ? " bg-[#4779E8]" : ""
            }  flex  gap-[12px] p-[8px] rounded-[4px]`}
          >
            <img
              src={`${
                route == "couses"
                  ? "/userDash/Nav/billingWhite.svg"
                  : "/userDash/Nav/billing.svg"
              }`}
              alt="Analytics"
            />{" "}
            <div
              className={`${
                route == "Analytics" ? "text-white" : "text-[#3E4C59]"
              }`}
            >
              Analytics & Reporting{" "}
            </div>
          </div>
          <div
            onClick={() => router.push("/admin/manage-notifications")}
            className={`w-[220px] h-[40px] cursor-pointer ${
              route == "Notifications" ? " bg-[#4779E8]" : ""
            }  flex  gap-[12px] p-[8px] rounded-[4px]`}
          >
            <img
              src={`${
                route == "couses"
                  ? "/userDash/Nav/billingWhite.svg"
                  : "/userDash/Nav/billing.svg"
              }`}
              alt="Notifications"
            />{" "}
            <div
              className={`${
                route == "Notifications" ? "text-white" : "text-[#3E4C59]"
              }`}
            >
              Manage Notifications{" "}
            </div>
          </div>
          <div
            onClick={() => router.push("/admin/settings")}
            className={`w-[220px] h-[40px] cursor-pointer ${
              route == "Settings" ? " bg-[#4779E8]" : ""
            }  flex  gap-[12px] p-[8px] rounded-[4px]`}
          >
            <img
              src={`${
                route == "couses"
                  ? "/userDash/Nav/settingwhite.png"
                  : "/userDash/Nav/setting.png"
              }`}
              alt="Settings"
            />{" "}
            <div
              className={`${
                route == "Settings" ? "text-white" : "text-[#3E4C59]"
              }`}
            >
              Settings
            </div>
          </div>
        </section>
        <div
          onClick={() => logout()}
          className="w-[220px] h-[40px] cursor-pointer  flex mt-10 gap-[12px] p-[8px] rounded-[4px]"
        >
          <img src="/userDash/Nav/logout.png" alt="dash" />{" "}
          <div className="text-[#4779E8]">Logout</div>
        </div>
      </section>
    </div>
  );
}
