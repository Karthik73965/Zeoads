"use client";
import MainComp from "@/components/(userdash)/Agencies/MainComp";
import DashNav from "@/components/(userdash)/DashNav";
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
