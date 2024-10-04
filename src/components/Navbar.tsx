"use client";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { getAnnouncementBar } from "@/actions/admin/ProductActions";
import { logOut } from "@/actions/AuthActions";
import { useUserInfo } from "@/hooks/useUserInfo";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";
import AnnoouncementBar from "./AnnoouncementBar";

type Props = {
  route: string;
};

export default function Navbar({ route }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [barData, setBarData] = useState<string | null>(null);
  const router = useRouter();
  const userinfo = useUserInfo();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const getAnnoncmenet = useCallback(async () => {
    const data = await getAnnouncementBar();
    if (data) {
      setBarData(data.message);
    }
  }, []);

  const logout = () => {
    try {
      const res = logOut();
      if (res) {
        SucessToast("Logged out successfully");
      } else {
        ErrorToast("Error while logging out");
      }
    } catch (error) {
      ErrorToast("Error occurred");
    }
  };

  useEffect(() => {
    getAnnoncmenet();
  }, [getAnnoncmenet]);

  return (
    <>
     <AnnoouncementBar/>

      <nav className="h-[72px] w-full fixed z-50 bg-white border-b border-[#E4E7EC] md:px-20 px-10 flex justify-between items-center">
        <img
          onClick={() => router.push("/")}
          src="/logo.svg"
          className="w-[108px] h-[24px] cursor-pointer"
          alt="logo"
        />
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-[40px]">
          <li
            onClick={() => router.push("/")}
            className={`cursor-pointer ${route == "Home" ? "primary-text" : "text-gray-600"}`}
          >
            Home
          </li>
          <li
            onClick={() => router.push("/pricing")}
            className={`cursor-pointer ${route == "Pricing" ? "primary-text" : "text-gray-600"}`}
          >
            Pricing
          </li>
          <li
            onClick={() => router.push("/zeoads-for-agencies")}
            className={`cursor-pointer ${route == "Zeoads" ? "primary-text" : "text-gray-600"}`}
          >
            Zeoads for agencies
          </li>
          <li
            onClick={() => router.push("/blogs")}
            className={`cursor-pointer ${route == "Blog" ? "primary-text" : "text-gray-600"} flex`}
          >
            Blog
            <div className="w-[47px] text-white h-[25px] bg-[#4779E8] text-center rounded-[4px] ml-2">
              New
            </div>
          </li>
        </ul>
        {/* Action Buttons (Desktop) */}
        {userinfo ? (
          <div className="hidden md:flex gap-x-[32px]">
            <button
              onClick={logout}
              className="h-[40px] -mt-2 border w-[91px] rounded-[4px] border-[#4779E8] primary-text"
            >
              Logout
            </button>
            <Link href="/dashboard">
              <button className="h-[40px] -mt-2 border rounded-[4px] w-[137px] border-[#4779E8] bg-[#4779E8] text-white">
                Dashboard
              </button>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex gap-x-[32px]">
            <Link href="/login">
              <button className="h-[40px] -mt-2 border w-[91px] rounded-[4px] border-[#4779E8] primary-text">
                Login
              </button>
            </Link>
            <a href="/signup">
              <button className="h-[40px] -mt-2 border rounded-[4px] w-[137px] border-[#4779E8] bg-[#4779E8] text-white">
                Get started
              </button>
            </a>
          </div>
        )}

        {/* Mobile Hamburger */}
        <div onClick={toggleMenu} className="block md:hidden cursor-pointer text-3xl">
          <VscMenu />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 mt-[50px] w-full h-full bg-white z-50 transition-transform transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-300">
          <img
            onClick={() => {
              router.push("/");
              toggleMenu();
            }}
            src="/logo.svg"
            className="w-[108px] h-[24px] cursor-pointer"
            alt="logo"
          />
          <span onClick={toggleMenu} className="text-3xl cursor-pointer">
            <AiOutlineClose />
          </span>
        </div>
          {/* Mobile Menu Links */}
        <ul className="flex flex-col   pl-5 space-y-5">
          <li
            onClick={() => {
              router.push("/");
              toggleMenu();
            }}
            className={`cursor-pointer ${route == "Home" ? "primary-text" : "text-gray-600"}`}
          >
            Home
          </li>
          <li
            onClick={() => {
              router.push("/pricing");
              toggleMenu();
            }}
            className={`cursor-pointer ${route == "Pricing" ? "primary-text" : "text-gray-600"}`}
          >
            Pricing
          </li>
          <li
            onClick={() => {
              router.push("/zeoads-for-agencies");
              toggleMenu();
            }}
            className={`cursor-pointer ${route == "Zeoads" ? "primary-text" : "text-gray-600"}`}
          >
            Zeoads for agencies
          </li>
          <li
            onClick={() => {
              router.push("/blogs");
              toggleMenu();
            }}
            className={`cursor-pointer ${route == "Blog" ? "primary-text" : "text-gray-600"}`}
          >
            Blog
          </li>
        </ul>

        {/* Action Buttons (Mobile) */}
        <div className="flex flex-col gap-4 mt-8 pl-5">
          {userinfo ? (
            <>
              <button
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="h-[40px] w-[91px] border rounded-[4px] border-[#4779E8] primary-text"
              >
                Logout
              </button>
              <Link href="/dashboard">
                <button
                  onClick={toggleMenu}
                  className="h-[40px] w-[137px] border rounded-[4px] border-[#4779E8] bg-[#4779E8] text-white"
                >
                  Dashboard
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <button
                  onClick={toggleMenu}
                  className="h-[40px] w-[91px] border rounded-[4px] border-[#4779E8] primary-text"
                >
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button
                  onClick={toggleMenu}
                  className="h-[40px] w-[137px] border rounded-[4px] border-[#4779E8] bg-[#4779E8] text-white"
                >
                  Get started
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Background overlay when menu is open */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
