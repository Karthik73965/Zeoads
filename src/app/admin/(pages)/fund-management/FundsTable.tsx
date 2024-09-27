"use client";
import { approveFund, getPendingFunds } from "@/actions/admin/FundActions";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";
import React, { useEffect, useState } from "react";

export default function FundsTable() {
  const [Funds, SetFunds] = useState<any>([]);

  const getFunds = async () => {
    try {
      const res = await getPendingFunds();
      if (res) {
        SetFunds(res);
      } else {
        ErrorToast("something went wring");
      }
    } catch (error) {
      console.error("Network connection error");
    }
  };
  const handleApprove = async (id: string, Acc_id: string) => {
    try {
      const res = await approveFund(id, Acc_id);
      if(res){
        SucessToast("Funds Added Succesfully");
      }else{
        ErrorToast("Something went wrong")
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFunds();
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
          Account Name
        </div>
        <div className="text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]">
          Account ID
        </div>
        <div className="text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]">
          Account Status{" "}
        </div>
        <div className="text-[12px] text-center w-[50px] cursor-pointer font-medium text-[#171C20]">
          view
        </div>
        <div className="text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]">
          Fund Request Amount
        </div>
        <div className="text-[12px] text-center w-[200px] cursor-pointer font-medium text-[#171C20]">
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
              <div className=" w-[70px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center  truncate cursor-pointer font-medium text-[#171C20]">
                {i.amount}
              </div>
              <div className=" w-[200px] flex gap-x-4 text-[14px] pr-4 h-[40px] text-center  truncate cursor-pointer font-medium text-[#171C20]">
                <button className="w-[89px] h-[40px] border-[1px] rounded-md border-[#4779E8] primary-text">
                  Decline
                </button>
                <button onClick={()=>handleApprove(i.id , i.Acc_id)} className="w-[107px] h-[40px] border-[1px] rounded-md text-white bg-[#4779E8]">
                  Approved
                </button>
              </div>
            </section>
          );
        })}
    </main>
  );
}

const data = [
  {
    id: "64fd82b5a5c6d9a33b2c1a1b",
    name: "John Doe",
    Acc_id: "64fd82b5a5c6d9a33b2c1a2c",
    account: {
      id: "64fd82b5a5c6d9a33b2c1a2c",
      name: "John's Account",
    },
    type: "NONCOMMISSION",
    creditAcc: "64fd82b5a5c6d9a33b2c1a3d",
    amount: 1000,
    status: "PENDING",
    createdAt: new Date("2023-08-01T12:00:00Z"),
    updatedAt: new Date("2023-08-01T12:00:00Z"),
  },
  {
    id: "64fd82b5a5c6d9a33b2c1a1b",
    name: "John Doe",
    Acc_id: "64fd82b5a5c6d9a33b2c1a2c",
    account: {
      id: "64fd82b5a5c6d9a33b2c1a2c",
      name: "John's Account",
    },
    type: "COMMISSION",
    creditAcc: "64fd82b5a5c6d9a33b2c1a3d",
    amount: 1000,
    status: "PENDING",
    createdAt: new Date("2023-08-01T12:00:00Z"),
    updatedAt: new Date("2023-08-01T12:00:00Z"),
  },
  {
    id: "64fd82b5a5c6d9a33b2c1a1b",
    name: "John Doe",
    Acc_id: "64fd82b5a5c6d9a33b2c1a2c",
    account: {
      id: "64fd82b5a5c6d9a33b2c1a2c",
      name: "John's Account",
    },
    type: "NONCOMMISSION",
    creditAcc: "64fd82b5a5c6d9a33b2c1a3d",
    amount: 1000,
    status: "PENDING",
    createdAt: new Date("2023-08-01T12:00:00Z"),
    updatedAt: new Date("2023-08-01T12:00:00Z"),
  },
  {
    id: "64fd82b5a5c6d9a33b2c1a1b",
    name: "John Doe",
    Acc_id: "64fd82b5a5c6d9a33b2c1a2c",
    account: {
      id: "64fd82b5a5c6d9a33b2c1a2c",
      name: "John's Account",
    },
    type: "NONCOMMISSION",
    creditAcc: "64fd82b5a5c6d9a33b2c1a3d",
    amount: 1000,
    status: "PENDING",
    createdAt: new Date("2023-08-01T12:00:00Z"),
    updatedAt: new Date("2023-08-01T12:00:00Z"),
  },
  {
    id: "64fd82b5a5c6d9a33b2c1a1b",
    name: "John Doe",
    Acc_id: "64fd82b5a5c6d9a33b2c1a2c",
    account: {
      id: "64fd82b5a5c6d9a33b2c1a2c",
      name: "John's Account",
    },
    type: "NONCOMMISSION",
    creditAcc: "64fd82b5a5c6d9a33b2c1a3d",
    amount: 1000,
    status: "PENDING",
    createdAt: new Date("2023-08-01T12:00:00Z"),
    updatedAt: new Date("2023-08-01T12:00:00Z"),
  },
];
