"use client"
import React, { useState } from "react";
import AdminMainNav from "../../components/AdminMainNav";
import Card from "./Card";
import FundsTable from "./FundsTable";
import ClearFundsTable from "./ClearFundsTable";

type Props = {};

export default function MainFund({}: Props) {
    const [Funds, SetFunds] = useState("PENDING")

  return (
    <main className="w-full dh-bg ">
      <AdminMainNav />
      <section className="mt-10 mx-5 ">
        <div className="flex justify-between">
        <Card heading="Pending Fund" description="Fund Transfer Pending Request" amount="10" />
        <Card heading="Total Fund Collection" description="Total Fund Collection This Month" amount="10000" />
        <Card heading="Total Orders" description="Total Orders This Month" amount="20" />
        </div>
      </section>
      <section className='mt-10 flex justify-between  mx-5'>
                <div className='flex bg-white border-[1px] gap-[16px] h-[58px] w-[] rounded-[8px]  px-[24px] py-[9px]  '>
                    <div onClick={() => SetFunds("PENDING")} className={` h-[40px] border-b-[2px] pl-2  ${Funds == "PENDING" ? "primary-text border-[#4779E8]  " : "text-[#3E4C59] border-[] "} pt-2 `} >
                       Pending Funds
                    </div>
                    <div onClick={() => SetFunds("CLEAR")} className={`h-[40px] border-b-[2px] pl-2  ${Funds == "CLEAR" ? "primary-text border-[#4779E8]  " : "text-[#3E4C59] border-[] "} pt-2 [16px] `} >
                        Clear Funding History
                    </div>
                </div>
                {/* filter */}
                <div className='flex gap-[px]'>
                    <div className=' w-[103px] h-[56px] flex rounded-[8px] bg-white gap-[8px] ml-10 border-[1px] border-[#CBD2DA] p-[16px]'>
                        Filter
                        <img src="/utils/filter.svg" alt="share" />
                    </div>
                    <div className='w-[56px] h-[56px] rounded-[8px] bg-white gap-[8px] ml-10 border-[1px] border-[#CBD2DA] p-[16px]'>
                        <img src="/userDash/Agencies/share.svg" alt="share" />
                    </div>
                </div>
            </section>
            <div className="pb-10">
                {
                    Funds == "PENDING" ? <FundsTable/> :<ClearFundsTable/>
                }
            </div>
    </main>
  );
}
