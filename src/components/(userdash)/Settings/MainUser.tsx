"use client";
import React, { useCallback, useEffect, useState } from "react";
import MainNav from "../MainNav";
import UserTable from "./UserTable";
import { CreateUserModal } from "./CreateUserModal";
import { UserList } from "@prisma/client";
import { useUserInfo } from "@/hooks/useUserInfo";
import { getUsersList } from "@/actions/Dashboard/Settings.CreateUser";
import { CheckIsSubUser } from "@/utils/SubUserUtils";
import { WarnToast } from "@/utils/ToastFucntion";

type Props = {};

export default function MainInvoice({}: Props) {
  const [users, setusers] = useState<UserList[]>([]);
  const [isSubUser, SetisSubUSer] = useState<boolean>(false);

  const userinfo = useUserInfo();

  const fetchusers = useCallback(() => {
    const fetch = async () => {
      if (userinfo?.id) {
        const CheckSub = await CheckIsSubUser();
        if (CheckSub) {
          WarnToast("This page can only managed by Admin");
          SetisSubUSer(true);
        } else {
          const data = await getUsersList(userinfo.id);
          if (data) {
            setusers(data);
            SetisSubUSer(false)
          }
        }
      }
    };
    fetch();
  }, [userinfo?.id]);

  useEffect(() => {
    fetchusers();
  }, [fetchusers]);
  return (
    <main className="w-full   dh-bg">
      <MainNav />
      <section className="mx-5 mt-10 flex justify-between">
        {isSubUser ? (
          <div className="bg-white mx-5 text-xl md:text-3xl md:mx-10 w-full h-[70vh] rounded-xl  ">
              <div className="mt-20 text-center mx-auto font-semibold ">Only Admin Can view this page</div>
          </div>
        ) : (
          <>
            <div className="flex bg-white border-[1px] gap-[16px] h-[56px] w-[364px] rounded-[8px]  px-3  ">
              <img
                className="w-[22px] my-auto  h-[22px]"
                src="/userDash/Nav/search.png"
                alt="search"
              />
              <input
                type="text"
                className="outline-none text-[#52606D]"
                placeholder="Search"
              />
            </div>
            <CreateUserModal />
          </>
        )}
      </section>
      {users.length > 0 && <UserTable UserList={users} route="" />}
    </main>
  );
}
