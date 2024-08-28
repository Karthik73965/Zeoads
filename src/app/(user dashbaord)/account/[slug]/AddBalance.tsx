"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { CreateWallet } from "@/actions/Dashboard/CreditActions";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
type props = {
  id: string;
  name: string;
  balance: number;
  currency:any;
};

export function AddBalance({ id, name, balance , currency }: props) {
  const [AccountName, SetAccountName] = useState<string>("");

  const userinfo = useUserInfo();
  const router = useRouter();

  const handleCreate = async () => {
    try {
      const create = await CreateWallet(userinfo?.id, AccountName, currency);
      console.log(create);
      router.refresh();
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" h-[56px] py-[16px] px-[24px] flex gap-[8px] text-white rounded-[8px] bg-[#4779E8] ">
          <img className="mt-1" src="/userDash/Agencies/plus.svg" alt="plus" />
          <div>Add Balance</div>
        </button>
      </DialogTrigger>
      <DialogContent className="min-w  p-6 gap-6  h-[412px] ">
        <h2 className="text-[#1F2933] text-[24  px]  font-bold">
          Add Balance to Your Wallet :{id} <br />
          current balance -{currency}  : {balance}
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
