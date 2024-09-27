"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { CreateWallet } from "@/actions/Dashboard/CreditActions";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { addBalanceToAdAcc } from "@/actions/Dashboard/AdAccountActions";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";
type props = {
  id: string;
  name: string;
  balance: number;
  currency: any;
  Acc_id: string;
};

export function AddBalance({ id, Acc_id, name, balance, currency }: props) {
  const [amount, setamount] = useState<number>(0);

  const userinfo = useUserInfo();
  const router = useRouter();

  const handleAddBalance = async () => {
    try {
      const data = await addBalanceToAdAcc(id, userinfo.id, Acc_id, amount);
      if (data) {
        SucessToast("Balance Added SucessFully");
      }else{
        ErrorToast("Something went wrong")
      }
    } catch (error) {
      console.log(error);
      ErrorToast("Internal server error");
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
          Add Balance to Your Wallet :{name} <br />
          current balance -{currency} : {balance}
        </h2>
        {/* feilds */}
        <div className=" h-[200px] -mt-10">
          <div className="mt-5">
            <div className="font-semibold">Enter Amount :</div>
            <input
              value={amount}
              onChange={(e) => setamount(Number(e.target.value))}
              type="number"
              placeholder="Enter Amount "
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
            onClick={() => handleAddBalance()}
            className="bg-[#4779E8] h-[48px] text-white w-[180px] py-3 px-8 rounded-[4px] border-[1px]"
          >
            Add Balance
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
