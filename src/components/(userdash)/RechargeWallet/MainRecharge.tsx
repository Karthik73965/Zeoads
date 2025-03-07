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
    if (userinfo && userinfo.id) {
      // Add a check for userinfo here
      try {
        const data = await getAllWallets(userinfo.id);
        setwallets(data);
      } catch (error) {
        console.error("Error fetching wallets:", error);
      }
    }
  }, [userinfo]); // Adding userinfo as a dependency to useCallback

  useEffect(() => {
    getwallets();
  }, [getwallets]); // No changes needed here

  return (
    <main className="w-full min-h-screen dh-bg">
      <MainNav />
      <section className="mx-5 mt-10 flex flex-col md:flex-row md:justify-between gap-4">
        <div className="flex bg-white border-[1px]  gap-[16px] h-[56px] w-[364px] rounded-[8px] px-3">
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
      <section className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {wallets &&
          wallets.map((i: CreditAccount, index: number) => (
            <CreditCard
              key={i.id}
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
