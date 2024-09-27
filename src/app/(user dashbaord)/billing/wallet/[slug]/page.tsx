"use client";
import React from "react";
import MainRecharge from "./MainRecharge";
import DashNav from "@/components/(userdash)/DashNav";
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
