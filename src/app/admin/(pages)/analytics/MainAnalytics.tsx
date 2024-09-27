"use state"
import React, { useEffect, useState } from "react";
import AdminMainNav from "../../components/AdminMainNav";
import Piechart from "./comp/PieChart";
import MontlyBarChart from "./comp/BarChart";
import Card from "../fund-management/Card";
import { getAllAnalytics } from "@/actions/admin/AnalyticsActions";

type Props = {};

export default function MainAnalytics({}: Props) {
  const [Data ,SetData] = useState<any>({})
  const fetchAnlaytics = async ()=>{
    try {
      const res  =await getAllAnalytics()
      if(res){
        SetData(res)
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    fetchAnlaytics()
  } , [])
  return (
    <main className="w-full">
      <AdminMainNav />
      <section className="py-10 flex justify-between  mx-5">
        <section className="grid gap-y-5">
          <Piechart AllUsers={Data?.AllUsers} newUsers={Data?.newUsers}  />
          <Card
            heading="Montly Revenue"
            amount={Data?.montlyRevenue?.collectedFunds || ""}
            description="Revenue generated this month"
          />
          <Card
            heading="Accounts Sold"
            amount={ JSON.stringify(Data?.accountsSold) || "0"}
            description="Total Accounts Sold This Month"
          />
        </section>
        <section>
            {/* total funds */}
          <div className="bg-white h-[125.25px] mb-5 p-6 gap-6 flex justify-between rounded-md border-[1px] ">
            <div>
              <div className="text-[20px] text-[#1F2933] font-semibold">
                Total Funds{" "}
              </div>
              <p className="mt-3 text-[#3E4C59] ">
                Total Fund of All Users Account Wallet.
              </p>
            </div>
            <div className="text-[32px] flex justify-between gap-x-5 text-[#171C20] mt-3 font-semibold ">
              <div> {Data?.balance?._sum?.balance || "asdasd"}</div>
              <img
                className=" w-[46px] h-[47px] mt-"
                src="/admin/Fund.svg"
                alt="fund"
              />
            </div>
          </div>
          <MontlyBarChart  things={Data?.dailyMontlyPerformance ||Dummy} />
            {/* total orders */}
          <div className="bg-white mt-5 h-[125.25px] mb-5 p-6 gap-6 flex justify-between rounded-md border-[1px] ">
            <div>
              <div className="text-[20px] text-[#1F2933] font-semibold">
                New Orders
              </div>
              <p className="mt-3 text-[#3E4C59] ">
                Total Numbers of New Account Orders This Month.
              </p>
            </div>
            <div className="text-[32px] flex justify-between gap-x-5 text-[#171C20] mt-3 font-semibold ">
              <div>{Data?.AllAccounts || ""}</div>
              <img
                className=" w-[46px] h-[47px] mt-"
                src="/admin/Fund.svg"
                alt="fund"
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
const Dummy = {
  dailyMontlyPerformance: [
    {
      id: '66dcdd68cb3fbec80db40740',
      month: 'September',
      year: '2024',
      amount: 1,
      createdAt: '2024-09-07T23:10:32.164Z',
    },
    {
      id: '66dcdd77cb3fbec80db40742',
      month: 'September',
      year: '2024',
      amount: 2,
      createdAt: '2024-09-07T23:10:47.505Z',
    },
    {
      id: '66dcdd87cb3fbec80db40744',
      month: 'September',
      year: '2024',
      amount: 3,
      createdAt: '2024-09-08T23:11:03.360Z',
    },
    {
      id: '66dcdd8acb3fbec80db40746',
      month: 'September',
      year: '2024',
      amount: 4,
      createdAt: '2024-09-09T23:11:06.322Z',
    },
    {
      id: '66dcdd8dcb3fbec80db40748',
      month: 'September',
      year: '2024',
      amount: 5,
      createdAt: '2024-09-09T23:11:09.173Z',
    },
  ]
};