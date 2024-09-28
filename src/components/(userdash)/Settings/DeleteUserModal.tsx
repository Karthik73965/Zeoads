"use client";
import {
  DelteSUbUSer,
  updateUser,
} from "@/actions/Dashboard/Settings.CreateUser";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";

interface Props {
  id: string;
}

export function DelteeUserModal({ id }: Props) {
  const DelteUser = async () => {
    try {
      const res = await DelteSUbUSer(id);
      if (res) {
        SucessToast("User Deleted SuccessFully");
      } else {
        ErrorToast("Something went wrong");
      }
    } catch (error) {
      ErrorToast("Update failed");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          className="w-[32px] h-[32px] bg-[#3E4C59] rounded-full"
          src="/utils/bin.svg"
          alt="bin"
        />
      </DialogTrigger>
      <DialogContent className="bg-white max-w-[364px] p-6  ">
        <h5 className="text-[20px] mt-3 text-center font-semibold">
          Are you really want to delte this User Panel ?{" "}
        </h5>
        <p className="px-5 text-center text-[14px] ">
          After clicking on yes the user id will lost access and credentials to
          login admin credentials .{" "}
        </p>
        <div className="flex gap-x-10 mt-2 justify-center">
          <button
            type="button"
            className="h-[40px] w-[137px] border rounded-[4px] border-[#4779E8] primary-text"
          >
            Cancel
          </button>
          <button
            onClick={() => DelteUser()}
            className="h-[40px] w-[137px] border rounded-[4px] border-[#4779E8] bg-[#4779E8] text-white"
          >
            Confirm
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
