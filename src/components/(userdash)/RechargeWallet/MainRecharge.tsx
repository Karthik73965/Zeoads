"use client";
import React, { useEffect, useState, useCallback } from "react";
import MainNav from "../MainNav";
import CreditCard from "./CreditCard";
import { CreateCreditAccount } from "../CreateCreditAccount";
import { CreditAccount } from "@prisma/client";
import { useUserInfo } from "@/hooks/useUserInfo";
import { getAllWallets } from "@/actions/Dashboard/CreditActions";

type Props = {};

export default function MainRecharge({}: Props) {
  const [wallets, setwallets] = useState<CreditAccount[] | null>(null);
  const userinfo = useUserInfo();

  const getwallets = useCallback(async () => {
    if (userinfo?.id) {
      const data = await getAllWallets(userinfo.id);
      setwallets(data);
    }
  }, [userinfo.id]); // Adding userinfo.id as a dependency to useCallback

  useEffect(() => {
    if (userinfo) {
      getwallets();
    }
  }, [userinfo, getwallets]); // No changes needed here

  return (
    <main className="w-full min-h-screen dh-bg">
      <MainNav />
      <section className="mx-5 mt-10 flex justify-between">
        <div className="flex bg-white border-[1px] gap-[16px] h-[56px] w-[364px] rounded-[8px] px-3">
          <img
            className="w-[22px] my-auto h-[22px]"
            src="/userDash/Nav/search.png"
            alt="search"
          />
          <input
            type="text"
            className="outline-none text-[#52606D]"
            placeholder="Search"
          />
        </div>
        <CreateCreditAccount />
      </section>
      <section className="m-5 grid grid-cols-3 gap-5">
        {wallets &&
          wallets.map((i:any, index:number) => (
            <CreditCard
              key={i.id} // Always add a key when mapping
              balance={i.balance}
              name={i.name}
              currency={i.currency}
              id={i.id}
            />
          ))}
      </section>
    </main>
  );
}
