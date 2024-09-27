"use client";
import { getCreditAccDetails } from "@/actions/Dashboard/CreditActions";
import { AddBalance } from "@/app/(user dashbaord)/account/[slug]/AddBalance";
import { useUserInfo } from "@/hooks/useUserInfo";
import React, { useCallback, useEffect, useState } from "react";
import { CreditAccount } from "@prisma/client";
import { ErrorToast } from "@/utils/ToastFucntion";

type Props = {
  id: string;
  status: string | undefined;
  link: string | null | undefined;
  creditAccount: string | undefined;
  userId: string | undefined;
};

export default function Header({ id, status, creditAccount }: Props) {
  const [walletDetials, setWalletDetails] = useState<CreditAccount | null>(
    null
  );
  const userinfo = useUserInfo();

  const fetchCreditDetails = useCallback(async () => {
    if (!userinfo?.id || !creditAccount) return;

    try {
      const data = await getCreditAccDetails(userinfo.id, creditAccount);
      console.log(data);
      if (data) {
        setWalletDetails(data);
      }
    } catch (error) {
      ErrorToast("Internal server error")
      console.error(error);
    }
  }, [creditAccount, userinfo?.id]);

  useEffect(() => {
    fetchCreditDetails();
  }, [fetchCreditDetails]);

  return (
    <main className="flex">
      <section className="w-[534px] border-r-[1px] flex justify-between ">
        <div className="h-[77px] gap-[24px] py-[8px] flex">
          <div className="flex gap-[12px]">
            <img
              src="/userDash/Agencies/meta.svg"
              className="w-[48px] h-[48px]"
              alt="meta"
            />
            <div>
              <div className="text-[#1F2933] font-medium">
                Reserved Ad Account
              </div>
              <div className="flex">
                <div className="text-[#3E4C59]">ID :</div>
                <span className="text-[#F3CC02] bg-[#FCF8DD] -mt-1 py-[4px] px-[12px]">
                  {status}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#727F8F] flex m-5 font-medium text-[14px] gap-[8px] cursor-pointer ">
          Ads Manager
          <img
            className="w-[20px] h-[20px]"
            src="/userDash/Agencies/tiltedArrow.svg"
            alt=""
          />
        </div>
      </section>
      <section className="pl-5 mt-3 gap-x-16 flex justify-center">
        <div>
          <div className="text-[#1F2933] font-semibold">
            Credit Account: {creditAccount}
          </div>
          <div className="mt-2 text-[#3E4C59] text-[14px]">
            ID: {walletDetials?.id}
          </div>
        </div>
        <div className="-mt-2">
          <AddBalance
            Acc_id={id}
            id={walletDetials?.id || ""}
            balance={walletDetials?.balance || 0}
            currency={walletDetials?.currency}
            name={walletDetials?.name || "Main"}
          />
        </div>
      </section>
    </main>
  );
}
