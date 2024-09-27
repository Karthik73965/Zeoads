"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { logOut } from "@/actions/AuthActions";
import { SucessToast } from "@/utils/ToastFucntion";
type Props = {
  route: string;
};

export default function DashNav({ route }: Props) {
  const [page, Setpage] = useState<string>("dashboard");
  const [billing, setbilling] = useState<boolean>(false);
  const [settings, setsettings] = useState<boolean>(false);
  const router = useRouter();

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

  useEffect(() => {
    if (
      route === "Recharge-wallet" ||
      route === "Transaction-history" ||
      route === "Plans"
    ) {
      setbilling(true);
    } else {
      setbilling(false);
    }
    if (
      route === "Settings" ||
      route === "Invoice" ||
      route === "User-Management"
    ) {
      setsettings(true);
    } else {
      setsettings(false);
    }
    Setpage(route);
  }, [route]);

  // toast function

  return (
    <div className="w-fit min-w-12 md:w-[282px] min-h-screen border-r-[1px]  border-[#E4E7EC]">
      <div className="h-20 md:h-[84px] md:mx-2 p-5 border-b-[1px] border-[#E4E7EC] ">
        <img
          className="h-20 w-20 md:h-[32px] md:w-[144px]"
          src="/logo.svg"
          alt=""
        />
      </div>
      <section className="md:px-5">
        <div className="text-[14px] md:mx-2 mt-2 text-[#727F8F] hidden md:flex">
          Overview
        </div>
        <section className="flex flex-col items-center gap-[20px] md:grid mt-5">
          <div
            onClick={() => router.push("/dashboard")}
            className={`w-fit md:w-[220px] md:h-[40px] cursor-pointer ${
              route == "dashboard" ? " bg-[#4779E8]" : ""
            }  flex  gap-[12px] p-[8px] rounded-[4px]`}
          >
            <img
              src={`${
                route == "dashboard"
                  ? "/userDash/Nav/DashWhite.png"
                  : "/userDash/Nav/Dash.png"
              }`}
              alt="dash"
            />
            <div
              className={`hidden md:flex ${
                route == "dashboard" ? "text-white" : "text-[#3E4C59]"
              }`}
            >
              Dashboard
            </div>
          </div>
          <div
            onClick={() => router.push("/account")}
            className={`w-fit md:w-[220px] md:h-[40px] cursor-pointer ${
              route == "account" ? " bg-[#4779E8]" : ""
            }  flex  gap-[12px] p-[8px] rounded-[4px]`}
          >
            <img
              src={`${
                route == "account"
                  ? "/userDash/Nav/profile2white.svg"
                  : "/userDash/Nav/profile2.svg"
              }`}
              alt="dash"
            />
            <div
              className={`hidden md:flex ${
                route == "account" ? "text-white" : "text-[#3E4C59]"
              }`}
            >
              Agency Account{" "}
            </div>
          </div>
          <div
            onClick={() => router.push("/courses")}
            className={`w-fit md:w-[220px] md:h-[40px] cursor-pointer ${
              route == "courses" ? " bg-[#4779E8]" : ""
            }  flex  gap-[12px] p-[8px] rounded-[4px]`}
          >
            <img
              src={` ${
                route == "couses"
                  ? "/userDash/Nav/coursesWhite.svg"
                  : "/userDash/Nav/Courses.svg"
              }`}
              alt="dash"
            />{" "}
            <div
              className={`hidden md:flex ${
                route == "courses" ? "text-white" : "text-[#3E4C59]"
              }`}
            >
              Courses
            </div>
          </div>
          <div
            onClick={() => router.push("/billing/Recharge-wallet")}
            className={`w-fit md:w-[220px] md:h-[40px] cursor-pointer ${
              billing ? " bg-[#4779E8]" : "bg-white"
            }  flex  gap-[12px]  p-[8px] rounded-[4px]`}
          >
            <img
              src={`${
                billing
                  ? "/userDash/Nav/billingWhite.svg"
                  : "/userDash/Nav/billing.svg"
              }`}
              alt="dash"
            />{" "}
            <div
              className={`hidden md:flex ${
                billing ? "text-white" : "text-[#3E4C59]"
              }`}
            >
              <div className="flex justify-between gap-[100px] w-full">
                {" "}
                Billing <MdOutlineKeyboardArrowUp className="m-1 text-xl" />
              </div>
            </div>
          </div>
          {billing ? (
            <div className="border-l-[1px] border-[#E4E7EC] pl-5 mt-0">
              <div
                onClick={() => router.push("/billing/Recharge-wallet")}
                className={`hidden md:flex ${
                  route == "Recharge-wallet"
                    ? "primary-text "
                    : "text-[#3E4C59] cursor-pointer"
                } mb-3 text-[14px]`}
              >
                Recharge Wallet Feauture
              </div>
              <div
                onClick={() => router.push("/billing/Transaction-history")}
                className={`hidden md:flex ${
                  route == "Transaction-history"
                    ? "primary-text "
                    : "text-[#3E4C59] cursor-pointer"
                } mb-3 text-[14px]`}
              >
                Transaction History
              </div>
              <div
                onClick={() => router.push("/billing/Plans")}
                className={`hidden md:flex ${
                  route == "Plans" ? "primary-text " : "text-[#3E4C59]"
                } mb-3 cursor-pointer text-[14px]`}
              >
                View Plans
              </div>
            </div>
          ) : (
            ""
          )}

          <div
            onClick={() => router.push("/settings/Account-settings")}
            className={`w-fit md:w-[220px] md:h-[40px] cursor-pointer ${
              settings ? " bg-[#4779E8]" : ""
            }  flex  gap-[12px] p-[8px] rounded-[4px]`}
          >
            <img
              src={`${
                settings
                  ? "/userDash/Nav/settingwhite.png"
                  : "/userDash/Nav/setting.png"
              }`}
              alt="dash"
            />{" "}
            <div
              className={`hidden md:flex ${
                settings ? "text-white" : "text-[#3E4C59]"
              }`}
            >
              Settings
            </div>
          </div>
          {settings ? (
            <div className="border-l-[1px] border-[#E4E7EC] pl-5 mt-0">
              <div
                onClick={() => router.push("/settings/Account-settings")}
                className={`hidden md:flex ${
                  route == "Settings"
                    ? "primary-text "
                    : "text-[#3E4C59] cursor-pointer"
                } mb-3 text-[14px]`}
              >
                Account Settings
              </div>
              <div
                onClick={() => router.push("/settings/Invoice-information")}
                className={`hidden md:flex ${
                  route == "Invoice"
                    ? "primary-text "
                    : "text-[#3E4C59] cursor-pointer"
                } mb-3 text-[14px]`}
              >
                Invoice Information
              </div>
              <div
                onClick={() => router.push("/settings/User-Management")}
                className={`hidden md:flex ${
                  route == "User-Management"
                    ? "primary-text "
                    : "text-[#3E4C59]"
                } mb-3 cursor-pointer text-[14px]`}
              >
                User Management
              </div>
            </div>
          ) : (
            ""
          )}
        </section>
        <div
          onClick={() => logout()}
          className="w-full justify-center md:w-[220px] md:h-[40px] cursor-pointer  flex mt-10 gap-[12px] p-[8px] rounded-[4px]"
        >
          <img
            src="/userDash/Nav/logout.png"
            className="self-center"
            alt="dash"
          />{" "}
          <div className="text-[#4779E8] hidden md:flex">Logout</div>
        </div>
      </section>
    </div>
  );
}
