"use client";

import React from "react";
import dynamic from "next/dynamic";
const MainRecharge = dynamic(()=>import('./MainRecharge') , {
  ssr:false
})
const DashNav = dynamic(()=>import('@/components/(userdash)/DashNav') , {
  ssr:false
})
import { Suspense } from "react";


export default function Page({ params }: { params: { slug: string } }) {
  const id = params.slug || "";

  return (
    <main className="flex w-full">
      <Suspense fallback={<>Loading...</>}>
        <DashNav route="Recharge-wallet" />
        <MainRecharge id={id} />
      </Suspense>
    </main>
  );
}