"use client";
import React, { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { ProfileToggle } from "./Nav/ProfieToggle";
import { NotificationsToggle } from "./Nav/NotificationsToggle";
import { useRouter } from "next/navigation";
import { Link } from "lucide-react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { logOut } from "@/actions/AuthActions";
import { SucessToast } from "@/utils/ToastFucntion";

export default function MainNav() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const router = useRouter();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logout = () => {
    try {
      const res = logOut();
      if (res) {
        SucessToast("logged out sucessfull ");

        setTimeout(() => {
          router.push("/signup");
        }, 5000);
      } else {
        alert("done");
      }
    } catch (error) {}
  };

  return (
    <header className="h-[84px] w-full flex flex-col md:flex-row justify-between py-[16px] px-[24px]  border-b-[1px] brder-[#E4E7EC]">
      <h3 className=" hidden md:flex text-[#171C20] gap-[4px] mt-2  font-semibold text-[20px]">
        <div>Good Morning!</div>{" "}
        <img
          className="w-[32px] -mt-5 "
          src="/home/handshake.svg"
          alt="handshake"
        />
      </h3>
      <section className="flex gap-4 justify-between  md:gap-[24px]">
        {/* Mobile Hamburger */}
        <div
          onClick={toggleMenu}
          className="block md:hidden mt-2 cursor-pointer text-3xl"
        >
          <VscMenu />
        </div>
        <div className="flex gap-4 md:gap-[24px] ">
          <div className="flex md:border-[1px] rounded-[8px] gap-[10px] md:w-[287px]">
            <img
              className=" md:w-[22px] my-auto mx-auto h-[22px]"
              src="/userDash/Nav/search.png"
              alt="search"
            />
            <input
              type="text"
              className="hidden md:flex outline-none text-[#52606D]"
              placeholder="Search"
            />
          </div>
          <div className="flex md:border-r-[1px]">
            <NotificationsToggle />
            <img src="/userDash/Nav/Faq.svg" alt="Faq" />
          </div>
          <ProfileToggle />
        </div>
      </section>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-300">
          <span onClick={toggleMenu} className="text-3xl cursor-pointer">
            <AiOutlineClose />
          </span>
        </div>
        {/* Mobile Menu Links */}
          <section className="xl:px-5 mx-[15vw] justify-start">
            <div className="text-[14px] xl:mx-2 mt-2 text-[#727F8F]  xl:flex">
              Overview
            </div>
            <section className="flex flex-col  gap-[20px] xl:grid mt-5">
              <div
                onClick={() => router.push("/dashboard")}
                className={`w-fit xl:w-full xl:h-[40px] cursor-pointer flex  gap-[12px] p-[8px] rounded-[4px]`}
              >
                <img src={`${"/userDash/Nav/Dash.png"}`} alt="dash" />
                <div className={` xl:flex ${"text-[#3E4C59]"}`}>Dashboard</div>
              </div>
              <div
                onClick={() => router.push("/account")}
                className={`w-fit xl:w-full xl:h-[40px] cursor-pointer  flex  gap-[12px] p-[8px] rounded-[4px]`}
              >
                <img src={`${"/userDash/Nav/profile2.svg"}`} alt="dash" />
                <div className={` xl:flex ${"text-[#3E4C59]"}`}>
                  Agency Account{" "}
                </div>
              </div>
              <div
                onClick={() => router.push("/courses")}
                className={`w-fit xl:w-full xl:h-[40px] cursor-pointer flex  gap-[12px] p-[8px] rounded-[4px]`}
              >
                <img src={` ${"/userDash/Nav/Courses.svg"}`} alt="dash" />{" "}
                <div className={` xl:flex ${"text-[#3E4C59]"}`}>Courses</div>
              </div>
              <div
                onClick={() => router.push("/billing/Recharge-wallet")}
                className={`w-fit xl:w-full xl:h-[40px] cursor-pointer   flex  gap-[12px]  p-[8px] rounded-[4px]`}
              >
                <img src={`${"/userDash/Nav/billing.svg"}`} alt="dash" />{" "}
                <div className={` xl:flex ${"text-[#3E4C59]"}`}>
                  <div className="flex justify-between gap-[100px] w-full">
                    {" "}
                    Billing <MdOutlineKeyboardArrowUp className="m-1 text-xl" />
                  </div>
                </div>
              </div>

              <div className="border-l-[1px] border-[#E4E7EC] pl-5 mt-0">
                <div
                  onClick={() => router.push("/billing/Recharge-wallet")}
                  className={` xl:flex 
                    : "text-[#3E4C59] cursor-pointer"
                mb-3 text-[14px]`}
                >
                  Recharge Wallet Feauture
                </div>
                <div
                  onClick={() => router.push("/billing/Transaction-history")}
                  className={` xl:flex "text-[#3E4C59] cursor-pointer"
                 mb-3 text-[14px]`}
                >
                  Transaction History
                </div>
                <div
                  onClick={() => router.push("/billing/Plans")}
                  className={` xl:flex  "text-[#3E4C59]"
                 mb-3 cursor-pointer text-[14px]`}
                >
                  View Plans
                </div>
              </div>

              <div
                onClick={() => router.push("/settings/Account-settings")}
                className={`w-fit xl:w-full xl:h-[40px] cursor-pointer  flex  gap-[12px] p-[8px] rounded-[4px]`}
              >
                <img src={`${"/userDash/Nav/setting.png"}`} alt="dash" />{" "}
                <div className={` xl:flex ${"text-[#3E4C59]"}`}>Settings</div>
              </div>

              <div className="border-l-[1px] border-[#E4E7EC] pl-5 mt-0">
                <div
                  onClick={() => router.push("/settings/Account-settings")}
                  className={` xl:flex ${"text-[#3E4C59] cursor-pointer"} mb-3 text-[14px]`}
                >
                  Account Settings
                </div>
                <div
                  onClick={() => router.push("/settings/Invoice-information")}
                  className={` xl:flex ${"text-[#3E4C59] cursor-pointer"} mb-3 text-[14px]`}
                >
                  Invoice Information
                </div>
                <div
                  onClick={() => router.push("/settings/User-Management")}
                  className={` xl:flex ${"text-[#3E4C59]"} mb-3 cursor-pointer text-[14px]`}
                >
                  User Management
                </div>
              </div>
            </section>
            <div
              onClick={() => logout()}
              className="w-full justify-center xl:w-full xl:h-[40px] cursor-pointer  flex mt-10 gap-[12px] p-[8px] rounded-[4px]"
            >
              <img
                src="/userDash/Nav/logout.png"
                className="self-center"
                alt="dash"
              />{" "}
              <div className="text-[#4779E8]  xl:flex">Logout</div>
            </div>
          </section>
      </div>
    </header>
  );
}
