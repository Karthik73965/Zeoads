"use client";
import FeauturesHome from "@/app/ui/FeauturesHome";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Facebookdata, Googledata, Tiktokdata } from "../Home/Feautures";
import { useState } from "react";
import { CreateWallet } from "@/actions/Dashboard/CreditActions";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";

export function CreateCreditAccount() {
  const [AccountName, SetAccountName] = useState<string>("");
  const [currency, setcurrency] = useState<string>("USD");

  const userinfo = useUserInfo();
  const router = useRouter();

  const handleCreate = async () => {
    try {
      const create = await CreateWallet(userinfo?.id, AccountName, currency);
      if (create) {
        SucessToast("Account Created Succesfully");
        setTimeout(() => {
          router.refresh();
        }, 3000);
      } else {
        ErrorToast("Somethig went wrong ");
      }
    } catch (error) {
      ErrorToast("Somethig went wrong ");
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" h-[56px] py-[16px] px-[24px] flex gap-[8px] text-white rounded-[8px] bg-[#4779E8] ">
          <img className="mt-1" src="/userDash/Agencies/plus.svg" alt="plus" />
          <div>Create Credit Account</div>
        </button>
      </DialogTrigger>
      <DialogContent className="min-w  p-6 gap-6  h-[412px] ">
        <h2 className="text-[#1F2933] text-[32px]  font-bold">
          Create Credit Account
        </h2>
        {/* feilds */}
        <div className=" h-[200px] -mt-10">
          <div className="mt-5">
            <div className="text-[#3E4C59] font-semibold">Account Name</div>
            <input
              value={AccountName}
              onChange={(e) => SetAccountName(e.target.value)}
              type="text"
              placeholder="Account Name"
              className="outline-none mt-2 px-[16px] py-[12px] text-[#3E4C59]  w-full border-[1px] rounded-[8px] h-[56px] border-[#E4E7EC] "
            />
          </div>
          <div className="mt-5">
            <div>Acccount Type</div>
            <div className="flex mt-3 gap-[16px]">
              <div
                onClick={() => setcurrency("USD")}
                className="w-[80px] text-center   h-[40px] border-[#4779E8] py-[8px]   text-[#3E4C59] font-semibold  px-[16px] border-[1px] rounded-[4px]"
              >
                USD
              </div>
              <div
                onClick={() => setcurrency("EUR")}
                className="h-[40px] text-center   py-[8px] px-[16px] text-[#3E4C59] font-semibold border-[1px] rounded-[4px]"
              >
                EUR
              </div>
              <div
                onClick={() => setcurrency("TRY")}
                className="h-[40px] text-center   py-[8px] px-[16px] text-[#3E4C59] font-semibold border-[1px] rounded-[4px]"
              >
                TRY
              </div>
              <div
                onClick={() => setcurrency("INR")}
                className="h-[40px] text-center   py-[8px] px-[16px] text-[#3E4C59] font-semibold border-[1px] rounded-[4px]"
              >
                INR
              </div>
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className=" flex  justify-around mx-6 mt-3 font-semibold">
          <button className="text-[#3E4C59] h-[48px] py-3 w-[180px] px-8 rounded-[4px] border-[1px]">
            Cancel
          </button>
          <button
            onClick={() => handleCreate()}
            className="bg-[#4779E8] h-[48px] text-white w-[180px] py-3 px-8 rounded-[4px] border-[1px]"
          >
            Save
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
