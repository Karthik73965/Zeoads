"use client";

import DashNav from "@/components/(userdash)/DashNav";
import React from "react";
import MainRecharge from "./MainRecharge";
import { Suspense } from "react";

type Props = {};

export default function Page({ params }: { params: { slug: string } }) {
  const id = params.slug || "";

  return (
    <main className="flex  w-full">
      <Suspense fallback={<>Loading...</>}>
        <DashNav route="Recharge-wallet" />
        <MainRecharge id={id} />
      </Suspense>
    </main>
  );
}