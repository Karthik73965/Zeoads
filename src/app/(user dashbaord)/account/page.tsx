  "use client";
  import dynamic from "next/dynamic";
  const MainComp = dynamic(()=>import('@/components/(userdash)/Agencies/MainComp') , {
    ssr:false
  })
  const DashNav = dynamic(()=>import('@/components/(userdash)/DashNav') , {
    ssr:false
  })
  import React, { Suspense } from "react";

  export default function Page() {
    return (
      <main className="flex">
        <Suspense fallback={<>Loading...</>}>
          <DashNav route="account" />
          <MainComp />
        </Suspense>
      </main>
    );
  }
