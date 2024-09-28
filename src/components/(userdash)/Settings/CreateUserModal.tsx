"use client";
import { CreateSubUser } from "@/actions/Dashboard/Settings.CreateUser";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useUserInfo } from "@/hooks/useUserInfo";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";
import { useCallback, useEffect, useState } from "react";

export function CreateUserModal() {
  const [role, setRole] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [name, setname] = useState<string>("");
  const[ open  , setopen ]= useState<boolean>(false)

  const userInfo = useUserInfo();

  const CreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await CreateSubUser(userInfo?.id, email, name, role);
      if (res) {
        SucessToast("User Created Successfully");
        setRole("");
        setname("");
        setRole("");
      } else {
        ErrorToast("Something went wrong");
      }
    } catch (error) {}
  };
  return (
    <Dialog >
      <DialogTrigger asChild>
        <button className="w-[] h-[56px] py-[16px] px-[24px] flex gap-[8px] text-white rounded-[8px] bg-[#4779E8] ">
          <img className="mt-1" src="/userDash/Agencies/plus.svg" alt="plus" />
          <div>Create New User</div>
        </button>
      </DialogTrigger>
      <DialogContent className="  bg-white p-6 gap-6">
        <h5 className="text-3xl text-center font-semibold">
          Create a New User Panel{" "}
        </h5>
        <form onSubmit={(e) => CreateUser(e)} className="mt-5 w-full">
          <div className=" mb-5">
            <label className="" htmlFor="email">
              Email
            </label>{" "}
            <br />
            <input
              type="text"
              required
              onChange={(e) => setemail(e.target.value)}
              className="outline-none border-[1px] p-3 w-full rounded-xl"
              placeholder="Email ID"
            />
          </div>
          <div className="w-full mb-5">
            <label className="" htmlFor="email">
              Full Name
            </label>{" "}
            <br />
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              required
              className="outline-none border-[1px] p-3 w-full  rounded-xl"
              placeholder="Full Name"
            />
          </div>
          <div className="w-full mb-5">
            <label className="mb-2" htmlFor="email">
              Role
            </label>{" "}
            <br />
            <select
              id="wallet-dropdown"
              value={role}
              required
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="" disabled>
                Role
              </option>
              <option>Admin</option>
            </select>
          </div>
          <div className="flex gap-x-10 justify-center">
            <button
            onClick={()=>setopen(false)}
              type="button"
              className="h-[40px] w-[91px] border rounded-[4px] border-[#4779E8] primary-text"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-[40px] w-[137px] border rounded-[4px] border-[#4779E8] bg-[#4779E8] text-white"
            >
              Confirm
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
