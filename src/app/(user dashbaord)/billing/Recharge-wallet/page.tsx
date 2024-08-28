"use client";
import dynamic from "next/dynamic";
const MainRecharge = dynamic(()=>import('@/components/(userdash)/RechargeWallet/MainRecharge') , {
  ssr:false
})
const DashNav = dynamic(()=>import('@/components/(userdash)/DashNav') , {
  ssr:false
})
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
