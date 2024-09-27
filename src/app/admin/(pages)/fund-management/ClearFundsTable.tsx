"use client";
import { getClearedFunds } from "@/actions/admin/FundActions";
import React, { useEffect, useState } from "react";

export default function ClearFundsTable() {
  const [Funds, SetFunds] = useState<any>([]);
  const fetchFunds = async () => {
    const data = await getClearedFunds();
    console.log(data);
    if (data) {
      SetFunds(data);
    }
  };

  useEffect(() => {
    fetchFunds();
  }, []);
  return (
    <main
      className={`mt-10 mx-5 p-[24px] border-[1px]  bg-white rounded-[4px]  gap-[4px] border-[#E4E7EC]`}
    >
      {/* headings  */}
      <section className="flex justify-between text-center h-[52px] pl-5 py-[12px] dh-bg">
        <div className="text-[12px] text-center w-[30px] cursor-pointer font-medium text-[#171C20]">
          NO
        </div>
        <div className="text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]">
          Customer Name
        </div>
        <div className="text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]">
          Account ID
        </div>
        <div className="text-[12px] text-center w-[50px] cursor-pointer font-medium text-[#171C20]">
          Transfer Date
        </div>
        <div className="text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]">
          Fund Request Amount
        </div>
        <div className="text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]">
          Account type
        </div>
        <div className="text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]">
          Actions
        </div>
      </section>
      {Funds &&
        Funds.map((i: any, index: number) => {
          return (
            <section
              key={index}
              className="flex justify-between h-[42px] py-[12px]  "
            >
              <div className=" w-[50px] text-[14px] border-r-[1px] h-[40px] text-center pl-6 truncate cursor-pointer font-medium text-[#171C20]">
                {index + 1}
              </div>
              <div className=" w-[100px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center  truncate cursor-pointer font-medium text-[#171C20]">
                {i.name}
              </div>
              <div className=" w-[100px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center  truncate cursor-pointer font-medium text-[#171C20]">
                {i.id}
              </div>
              <div className=" w-[100px]  h-[40px] text-center  border-r-[1px]  truncate cursor-pointer font-medium text-[#171C20] text-[12px] primary-text  ">
                {i?.updatedAt && new Date(i.updatedAt).toLocaleDateString()}
              </div>
              <div className=" w-[70px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center  truncate cursor-pointer font-medium text-[#171C20]">
                {i.amount}
              </div>
              <div
                className={`  text-[14px] border-r-[1px]  h-[25px] mb-1 w-[150px] text-center dh-bg -ml-5  ${
                  i.type == "NONCOMMISSION" ? "primary-text " : "text-[#159A3A]"
                }   px-auto   cursor-pointer font-medium `}
              >
                {i.type}
              </div>
              <div className=" w-[100px]  h-[40px] text-center  border-r-[1px]  truncate cursor-pointer font-medium text-[#171C20] text-[12px] primary-text  ">
                View Account
              </div>
            </section>
          );
        })}
    </main>
  );
}
