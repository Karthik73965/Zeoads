"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ErrorToast, SucessToast, WarnToast } from "@/utils/ToastFucntion";

import React from "react";
import DashNav from "@/components/(userdash)/DashNav";
import MainNav from "@/components/(userdash)/MainNav";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  const ReturnPage = () => {
    const [status, setstatus] = useState<string>("");

    useEffect(() => {
      const fetchSessionData = async () => {
        const queryString = window.location.search; 
        const urlParams = new URLSearchParams(queryString);
        const session_id = urlParams.get("session_id");

        if (session_id) {
          const response = await fetch(
            `/api/checkout?session_id=${session_id}`
          );
          const data = await response.json();

          if (data.status === "complete" || data.status == "paid") {
            SucessToast("Payment was successful!");
            setstatus("success");
          } else if (
            data.status == "open" ||
            data.status == "void" ||
            data.status == "uncollectible"
          ) {
            WarnToast("Payment is processing");
            setstatus("open");
          } else {
            ErrorToast("Payment was  has been failed ."); // Replace with your failure message
            setstatus("failed");
          }
        }
      };

      fetchSessionData();
    }, []);

    return (
      <center className="dh-bg md:mx-20 text-xl md:text-2xl font-semibold h-[70vh] md:my-5 m-5 rounded-xl  p-6  ">
        {status == "open" ? (
          <div>Please wait for sometime to process the transaction .</div>
        ) : status == "success" ? (
          <div>
            {" "}
            Your payment has been completed <br /> Click on the below buton to
            return to the wallets page{" "}  <br />
            <Link href="/billing/Recharge-wallet ">
              <button className=" p-3 text-[16px] border mt-10 rounded-[4px] border-[#4779E8] bg-[#4779E8] text-white">
                GO to wallets
              </button>
            </Link>{" "}
          </div>
        ) : status == "failed" ? (
          <>
          <div> Payment has been failed </div>
          <p className="text-underline mt-3 text-[16px]">Contact supprot </p>
          </>
        ) : (
          <div> loading</div>
        )}
      </center>
    );
  };
  return (
    <main className="flex w-full ">
      <DashNav route="dashboard" />
      <section className="w-full">
        <MainNav />
        <ReturnPage />
      </section>
    </main>
  );
}
