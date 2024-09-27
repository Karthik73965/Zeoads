"use client"

import React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useUserInfo } from "@/hooks/useUserInfo"

export function ProfileToggle() {
   const userinfo = useUserInfo()


    return <>
    {
        userinfo ?  <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className='cursor-pointer bg-white flex gap-[8px] py-[8px] px-[4px] rounded-[8px]'>
                <img className='w-[32px] h-[32px] rounded-full' src={userinfo.image} alt="profile" />
                <div className='text-[#727F8F] mt-1 font-medium truncate'> {userinfo.name}</div>
                <img className='w-[24px] h-[24px] mt-1' src="/userDash/Nav/dropIcon.svg" alt="icon" />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" w-[195px] rounded-[8px] p-[24px]  mt-5 mr-5">
            <ul className="grid gap-[24px]">
                <li className="flex w-[147px] gap-[8px]  cursor-pointer text-[#3E4C59]"> <img className="w-[20px] h-[20px]" src="/userDash/Nav/account.svg" alt="account" />Account details</li>
                <li className="flex w-[147px] gap-[8px]  cursor-pointer text-[#3E4C59]"><img className="w-[20px] h-[20px]" src="/userDash/Nav/profilehelp.svg" alt="Faq" />F.A.Q              </li>
                <li className="flex w-[147px] gap-[8px]  cursor-pointer text-[#3E4C59]"> <img className="w-[20px] h-[20px]" src="/userDash/Nav/help.svg" alt="help" />Help</li>
                <li className="flex w-[147px] gap-[8px]  cursor-pointer text-[#3E4C59]"> <img className="w-[20px] h-[20px]" src="/userDash/Nav/signout.svg" alt="signout" />Sign Out</li>
            </ul>
        </DropdownMenuContent>
    </DropdownMenu> :"loading"
    }
    </>
}
