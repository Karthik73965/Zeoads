"use client";
import React, { useEffect, useState } from "react";
import AdminNav from "@/app/admin/components/AdminNav";
import AdminMainNav from "@/app/admin/components/AdminMainNav";
import UserAgecyAcc from "./UserAgecyAcc";
import Invoice from "./Invoice";
import UserAccSettings from "./UserAccSettings";
import { useRouter } from "next/navigation";


export default function Page({ params }: { params: { slug: string } }) {
  const id = params.slug;
  const [AccOption, SetAccOption] = useState<string>("Agency");
  const router = useRouter()

  return (
    <main className="flex">
      <AdminNav route="User" />
      <section className="">
        <AdminMainNav />
        <section className="m-10  flex justify-between">
          <div onClick={()=>router.push('/admin/user-management')} className="flex cursor-pointer gap-[16px] mt-3">
            <img    
              className="w-[24px] h-[24px]  mt-1"
              src="/utils/arrowblueleft.svg"
              alt="blue"
            />
            <div className="text-[20px] text-[#171C20] font-medium">
              View Account{" "}
            </div>
          </div>
          <div className="flex cursor-pointer  py-[9px] gap-[10px] px-[24px] bg-white h-[58px] rounded-[8px] pt-2  border-[1px] ">
            <div
              onClick={() => SetAccOption("Agency")}
              className={` h-[40px] border-b-[2px] pl-2  ${
                AccOption == "Agency"
                  ? "primary-text border-[#4779E8]  "
                  : "text-[#3E4C59] border-[] "
              } pt-2 `}
            >
              User Agency Account Details
            </div>
            <div
              onClick={() => SetAccOption("Invoice")}
              className={`h-[40px] border-b-[2px] pl-2  ${
                AccOption == "Invoice"
                  ? "primary-text border-[#4779E8]  "
                  : "text-[#3E4C59] border-[] "
              } pt-2 [16px] `}
            >
              User Invoice Information Details
            </div>
            <div
              onClick={() => SetAccOption("Account")}
              className={`h-[40px] border-b-[2px] pl-2  ${
                AccOption == "Account"
                  ? "primary-text border-[#4779E8]  "
                  : "text-[#3E4C59] border-[] "
              } pt-2 [16px] `}
            >
              User Account Details
            </div>
          </div>
        </section>
        <div className="mr-10 w-full">
          {AccOption == "Agency" ? (
            <UserAgecyAcc />
          ) : AccOption == "Invoice" ? (
            <Invoice id={id} />
          ) : AccOption == "Account" ? (
            <UserAccSettings id={id} />
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
}
