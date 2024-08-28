import React from "react";
import AdminMainNav from "../../components/AdminMainNav";
import Piechart from "./comp/PieChart";
import MontlyBarChart from "./comp/BarChart";
import Card from "../fund-management/Card";

type Props = {};

export default function MainAnalytics({}: Props) {
  return (
    <main className="w-full">
      <AdminMainNav />
      <section className="py-10 flex justify-between  mx-5">
        <section className="grid gap-y-5">
          <Piechart />
          <Card
            heading="Montly Revenue"
            amount="$8000"
            description="Revenue generated this month"
          />
          <Card
            heading="Accounts Sold"
            amount="180"
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
              <div> $3,200</div>
              <img
                className=" w-[46px] h-[47px] mt-"
                src="/admin/Fund.svg"
                alt="fund"
              />
            </div>
          </div>
          <MontlyBarChart />
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
              <div>300</div>
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
