"use client";
import MainRecharge from "@/components/(userdash)/RechargeWallet/MainRecharge";
import DashNav from "@/components/(userdash)/DashNav";
import React from "react";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="flex  w-full">
      <Suspense fallback={<>Loading...</>}>
        <DashNav route="Recharge-wallet" />
        <MainRecharge />
      </Suspense>
    </main>
  );
}
