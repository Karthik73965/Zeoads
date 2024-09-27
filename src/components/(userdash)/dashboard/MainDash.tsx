"use client";
import React, { useState } from "react";
import MainNav from "../MainNav";
import DashFilter from "./DashFilter";
import DashCard from "./DashCard";
import { DailySpentChart } from "./DailySpentChart";
import PromoPie from "./PromoPie";
import { useRouter } from "next/navigation";
import { KPICHART } from "./KPIchart";

type Props = {};

export default function MainDash({}: Props) {
  const [complete, SetComplete] = useState<boolean>(false);
  const router = useRouter();
  return (
    <main className="w-fit md:w-[100vw-252px]">
      <MainNav />
      {/* Video  */}
      <section className="m-4 w-fit rounded-[8px] p-[24px] md:h-[368px] flex flex-col-reverse md:flex-row md:gap-[24px] border-[1px] border-[#E4E7EC] ">
        <div className="mt-4 md:mt-10">
          <div className="text-[#727F8F]">Here&apos;s Quick Tutorial!</div>
          <h3 className="font-medium mt-5 text-[24px] text-[#1F2933]">
            Watch our video guide - learn how to start your Zeoads account
            today.
          </h3>
          <div className="primary-text cursor-pointer mt-5 font-medium">
            Feel free to contact our support{" "}
          </div>
          <div
            onClick={() => SetComplete(true)}
            className="primary-text cursor-pointer mt-5 font-medium"
          >
            Mark As Complete{" "}
          </div>
        </div>
        <img
          className="md:w-[534px] md:h-[320px]  rounded-[8px]"
          src="/userDash/video.svg"
          alt="video"
        />
      </section>
      {/* Analytics */}
      {complete ? (
        <>
          <DashFilter />
          <section className="m-4  flex flex-col md:flex-row justify-between flex-wrap  gap-x-2">
            <DashCard
              Main="0"
              heading="Total Spend ( USD ) "
              istrue={false}
              percent="0.00"
              trueAmount="0"
              trueStr="Cpi"
            />
            <DashCard
              Main="0"
              heading="Impressions "
              istrue={true}
              percent="0.00"
              trueAmount="0"
              trueStr="Cpi"
            />
            <DashCard
              Main="0"
              heading=" Clicks"
              istrue={true}
              percent="0.00"
              trueAmount="0"
              trueStr="Cpi"
            />
            <DashCard
              Main="0"
              heading="Conversions "
              istrue={true}
              percent="0.00"
              trueAmount="0"
              trueStr="Cpi"
            />
          </section>
          <section className="flex flex-col md:flex-row justify-start">
            <DailySpentChart />
            <PromoPie AllUsers={300} newUsers={400} />
          </section>
          {/* 2nd section */}
          <section className="md:h-[386px] flex flex-col md:flex-row justify-between ">
            <div className="p-[24px] m-4 gap-[16px] border-[1px] w-fit md:w-[652px] rounded-md bg-white">
              <div className="text-[#3E4C59] font-semibold text-[20px] mb-3">
                Spend by Country{" "}
              </div>
              <p className="-mt-2">Geographic Spend Analysis</p>
              <div className="mt-10 rounded-[8px] bg-white">
                <center className="mt-[70px]">
                  <img
                    className="w-[32px] h-[32px]"
                    src="/utils/globe.svg"
                    alt="globe"
                  />
                  <div className="text-[#727F8F]">
                    No content found for country reach.
                  </div>
                </center>
              </div>
            </div>
            <div className="md:h-[356px] md:w-[364px] w-[320px] p-6 mt-5 bg-white border-[1px] rounded-[8px] items-center">
              <div className="flex gap-[16px] h-[80px] mb-5">
                <img
                  className="h-[48px] w-[48px] mt-5"
                  src="/userDash/usd.svg"
                  alt=""
                />
                <div className="">
                  <div className="text-[32px] font-semibold text-[#1F2933] ">
                    0.00
                  </div>
                  <div className="mt-2 text-[#3E4C59] ">USD Credit</div>
                </div>
              </div>
              <div className="flex gap-[16px] h-[80px] mb-5">
                <img
                  className="h-[48px] w-[48px] mt-5"
                  src="/userDash/eur.svg"
                  alt=""
                />
                <div className="">
                  <div className="text-[32px] font-semibold text-[#1F2933] ">
                    0.00
                  </div>
                  <div className="mt-2 text-[#3E4C59] ">EUR Credit</div>
                </div>
              </div>
              <div className="flex gap-[16px] h-[80px] mb-5">
                <img
                  className="h-[48px] w-[48px] mt-5"
                  src="/userDash/cred.svg"
                  alt=""
                />
                <div className="">
                  <div className="text-[32px] font-semibold text-[#1F2933] ">
                    0.00
                  </div>
                  <div className="mt-2 text-[#3E4C59] ">Try Credit</div>
                </div>
              </div>
              <div
                onClick={() => router.push("/billing/Recharge-wallet")}
                className="primary-text  font-semibold -mt-3  "
              >
                Go to credit accounts
              </div>
            </div>
          </section>
          {/* 3rd section */}
          <div className="p-[24px] h-[400px] m-4 gap-[16px] border-[1px] w-[320px]  rounded-md bg-white">
            <div className="text-[#3E4C59] font-semibold text-[20px] mb-3">
              Ad Account Performance
            </div>
            <p className="-mt-2">
              Detailed performance <br /> metrics for each ad account
            </p>
            <div className="mt-10 rounded-[8px] bg-white">
              <center className="mt-[70px]">
                <img
                  className="w-[32px] h-[32px]"
                  src="/utils/globe.svg"
                  alt="globe"
                />
                <div className="text-[#727F8F]">
                  No content found for ad account performance.{" "}
                </div>
              </center>
            </div>
          </div>
          <KPICHART />
        </>
      ) : (
        <div></div>
      )}
    </main>
  );
}
