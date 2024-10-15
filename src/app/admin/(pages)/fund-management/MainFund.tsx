"use client";
import React, { useEffect, useState } from "react";
import AdminMainNav from "../../components/AdminMainNav";
import Card from "./Card";
import FundsTable from "./FundsTable";
import ClearFundsTable from "./ClearFundsTable";
import { getTotalPendingFundOfMOnth } from "@/actions/admin/FundActions";
import { ErrorToast } from "@/utils/ToastFucntion";

type Props = {};

export default function MainFund({}: Props) {
  const [Funds, SetFunds] = useState("PENDING");
  const [pedingFunds, SetpendingFunds] = useState<string>("");
  const [completedFunds, SetcompletedFunds] = useState<string>("");
  const [Orders, SetOrders] = useState<string>("");

  const fetchPendingFunds = async () => {
    try {
      const data = await getTotalPendingFundOfMOnth();
      if (data) {
        SetpendingFunds(JSON.stringify(data.pending));
        SetcompletedFunds(JSON.stringify(data.completed));
        SetcompletedFunds(JSON.stringify(data.completed));
        SetOrders(JSON.stringify(data.orders))
      } else {
        ErrorToast("wrong");
      }
    } catch (error) {
      ErrorToast("Something went wrong ")
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPendingFunds();
  }, []);
  return (
    <main className="w-full dh-bg ">
      <AdminMainNav />
      <section className="mt-10 mx-5 ">
        <div className="flex justify-between">
          <Card
            heading="Pending Fund"
            description="Fund Transfer Pending Request"
            amount={pedingFunds}
          />
          <Card
            heading="Total Fund Collection"
            description="Total Fund Collection This Month"
            amount={completedFunds}
          />
          <Card
            heading="Total Orders"
            description="Total Orders This Month"
            amount={Orders}
          />
        </div>
      </section>
      <section className="mt-10 flex justify-between  mx-5">
        <div className="flex bg-white border-[1px] gap-[16px] h-[58px] w-[] rounded-[8px]  px-[24px] py-[9px]  ">
          <div
            onClick={() => SetFunds("PENDING")}
            className={` h-[40px] border-b-[2px] pl-2  ${
              Funds == "PENDING"
                ? "primary-text border-[#4779E8]  "
                : "text-[#3E4C59] border-[] "
            } pt-2 `}
          >
            Pending Funds
          </div>
          <div
            onClick={() => SetFunds("CLEAR")}
            className={`h-[40px] border-b-[2px] pl-2  ${
              Funds == "CLEAR"
                ? "primary-text border-[#4779E8]  "
                : "text-[#3E4C59] border-[] "
            } pt-2 [16px] `}
          >
            Clear Funding History
          </div>
        </div>
        {/* filter */}
        <div className="flex gap-[px]">
          <div className="w-[56px] h-[56px] rounded-[8px] bg-white gap-[8px] ml-10 border-[1px] border-[#CBD2DA] p-[16px]">
            <img src="/userDash/Agencies/share.svg" alt="share" />
          </div>
        </div>
      </section>
      <div className="pb-10">
        {Funds == "PENDING" ? <FundsTable /> : <ClearFundsTable />}
      </div>
    </main>
  );
}
