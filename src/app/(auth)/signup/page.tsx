"use client";
import React, { useEffect, useState } from "react";
import { verifyToken } from "@/utils/helpers";
import Script from "next/script";
import { CheckSubUser, CreateUser } from "@/actions/AuthActions";
import { useRouter } from "next/navigation";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";
import { ToastContainer } from "react-toastify";
interface Props {}

export default function Page({}: Props) {
  const [status, setStatus] = useState<boolean>(false);
  const [otplessinfo, setotplessinfo] = useState<any>(null);

  const token: string | null = otplessinfo
    ? JSON.parse(otplessinfo).token
    : null;

  const userId: string = otplessinfo
    ? JSON.parse(otplessinfo).userId
    : null || "";

  const router = useRouter();

  useEffect(() => {
    const handleOtpless = (otplessUser: any) => {
      setotplessinfo(JSON.stringify(otplessUser));
      setStatus(true);
    };
    //@ts-ignore
    window.otpless = handleOtpless;
  }, []);

  const toast = (response: any) => {
    SucessToast(response.message);
  };
  useEffect(() => {
    const getIdAcessTokenAsync = async () => {
      if (!token) {
        return;
      }
      try {
        const userDetail = await verifyToken(
          token,
          "VR65QXGRT6YJUJHCOHVB607YVGE9VZP6",
          "ehjruitnzlu5h5g0i3la86smqh44mry2"
        );

        if (userDetail) {
          const check = await CheckSubUser(userDetail.email)
          if(check) {
            SucessToast("sub user has been there")
            setTimeout(() => {
              router.push("/dashboard");
            }, 2000);
          }         
          const response = await CreateUser(
            userId,
            userDetail.name,
            userDetail.email,
            userDetail.phone_number,
            userDetail.country_code
          );

          if (response?.status) {
            SucessToast(response.message);
          } else {
            toast(response.message);
            setTimeout(() => {
              router.push("/dashboard");
            }, 2000);
          }
        }
      } catch (error) {
        console.error("Error:", error);
        ErrorToast("Internal server error");
      }
    };

    getIdAcessTokenAsync();
  }, [token, status, userId, router]);

  return (
    <main className="pt-10 dh-bg h-screen">
      <ToastContainer />
      <div className="  h-screen" id="otpless-login-page"></div>
    </main>
  );
}
