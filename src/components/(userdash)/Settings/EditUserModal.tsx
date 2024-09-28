"use client";
import { updateUser } from "@/actions/Dashboard/Settings.CreateUser";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";
import { useState, useEffect } from "react";

interface Props {
  id: string;
  getrole: string;
  getemail: string;
  getname: string;
}

export function EditUserModal({ id, getrole, getemail, getname }: Props) {
  const [role, setRole] = useState<string>(getrole);
  const [email, setEmail] = useState<string>(getemail);
  const [name, setName] = useState<string>(getname);

  // Use useEffect to sync props with state when the component is rendered
  useEffect(() => {
    setRole(getrole);
    setEmail(getemail);
    setName(getname);
  }, [getrole, getemail, getname]);

  const UpdatedUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await updateUser(id, name, role, email);
      if (res) {
        SucessToast("User updated successfully");
        setRole("");
        setName("");
        setEmail("");
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
        <img className="w-[32px] h-[32px] rounded-full" src="/utils/edit.svg" alt="bin" />
      </DialogTrigger>
      <DialogContent className="bg-white p-6 gap-6">
        <h5 className="text-3xl text-center font-semibold">Edit User</h5>
        <form onSubmit={UpdatedUser} className="mt-5 w-full">
          <div className="mb-5">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border-[1px] p-3 w-full rounded-xl"
              placeholder="Email ID"
            />
          </div>
          <div className="w-full mb-5">
            <label htmlFor="name">Full Name</label>
            <br />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none border-[1px] p-3 w-full rounded-xl"
              placeholder="Full Name"
            />
          </div>
          <div className="w-full mb-5">
            <label htmlFor="role">Role</label>
            <br />
            <select
              value={role}
              required
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="" disabled>
                Select Role
              </option>
              <option>Admin</option>
              <option>User</option>
            </select>
          </div>
          <div className="flex gap-x-10 justify-center">
            <button
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
