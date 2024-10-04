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
  const [otplessinfo, setOtplessInfo] = useState<any>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  const token: string | null = otplessinfo
    ? JSON.parse(otplessinfo).token
    : null;

  const userId: string = otplessinfo
    ? JSON.parse(otplessinfo).userId
    : "" || "";

  const router = useRouter();

  // Ensuring the component is hydrated and running on the client side
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Handle the otpless integration only on the client side
  useEffect(() => {
    if (isHydrated && typeof window !== "undefined") {
      const handleOtpless = (otplessUser: any) => {
        setOtplessInfo(JSON.stringify(otplessUser));
        setStatus(true);
      };
      //@ts-ignore
      window.otpless = handleOtpless;
    }
  }, [isHydrated]);

  // Function to display success or error toasts
  const toast = (response: any) => {
    SucessToast(response.message);
  };

  // Verify token and perform user actions
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
          const check = await CheckSubUser(userDetail.email);
          if (check) {
            SucessToast("Sub user exists");
            setTimeout(() => {
              router.push("/dashboard");
            }, 2000);
          } else {
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
        }
      } catch (error) {
        console.error("Error:", error);
        ErrorToast("Internal server error");
      }
    };

    if (status) {
      getIdAcessTokenAsync();
    }
  }, [token, status, userId, router]);

  // Return nothing until the component is hydrated to avoid hydration mismatch errors
  if (!isHydrated) {
    return null;
  }

  return (
    <main className="pt-10 dh-bg h-screen">
      <ToastContainer />
      <div className="h-screen" id="otpless-login-page"></div>

      {/* Example of including the otpless script */}
      <Script
        strategy="lazyOnload"
        id="otpless-sdk"
        type="text/javascript"
        data-appid="40QPLY4PUSRV0E0VMZCU"
        src="https://otpless.com/v2/auth.js"
        onLoad={() => {
          console.log("Otpless script loaded successfully.");
        }}
      />
    </main>
  );
}
