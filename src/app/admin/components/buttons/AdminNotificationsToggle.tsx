"use client"

import * as React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function AdminNotificationsToggle() {
    const [notifyState, SetNotifyState] = React.useState("All")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <img  className="cursor-pointer" src="/userDash/Nav/bell.svg" alt="bell" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-[433px] rounded-[8px] p-[24px]  mt-5 mr-28">
                <h3 className="text-[24px]">Notifications</h3>
                <section className="mt-10 gap-[24px] grid">
                    <div className="pb-1 flex gap-x-5 border-b-[1px] border-[#E4E7EC]">
                        <div className="primary-text font-medium  underline">All</div>
                        <div className=" font-medium ">Unread</div>
                    </div>
                    <section>
                        <div className="flex justify-between mb-5  cursor-pointer border-[#E4E7EC]  pb-3 border-b-[1px]   ">
                            <div className="bg-blue-700 h-[44px] w-[44px]   p-3 rounded-[4px]">
                                <img src="/userDash/Nav/Dash.png" alt="profile"  />
                            </div>
                            <div className="grid ">
                                <div className="text-[#3E4C59]">Your account request has been received.</div>
                                <div className="flex mt-2 gap-[24px] text-[#727F8F]">
                                    <div>19.06.2024</div>
                                    <div>17:54</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mb-5  border-[#E4E7EC]  pb-3 border-b-[1px] ">
                            <div className="bg-blue-700 h-[44px] w-[44px]   p-3 rounded-[4px]">
                                <img src="/userDash/Nav/Dash.png" alt="profile"  />
                            </div>
                            <div className="grid ">
                                <div className="text-[#3E4C59]">Your account request has been received.</div>
                                <div className="flex mt-2 gap-[24px] text-[#727F8F]">
                                    <div>19.06.2024</div>
                                    <div>17:54</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mb-5  border-[#E4E7EC]  pb-3 border-b-[1px]   ">
                            <div className="bg-blue-700 h-[44px] w-[44px]   p-3 rounded-[4px]">
                                <img src="/userDash/Nav/Dash.png" alt="profile"  />
                            </div>
                            <div className="grid ">
                                <div className="text-[#3E4C59]">Your account request has been received.</div>
                                <div className="flex mt-2 gap-[24px] text-[#727F8F]">
                                    <div>19.06.2024</div>
                                    <div>17:54</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
