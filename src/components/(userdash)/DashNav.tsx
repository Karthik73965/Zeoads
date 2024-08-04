"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";


type Props = {
    route: string
}

export default function DashNav({ route }: Props) {
    const [page, Setpage] = useState<string>("dashboard")
    const [billing, setbilling] = useState<boolean>(false)
    const [settings, setsettings] = useState<boolean>(false)
    const router = useRouter()



    useEffect(() => {

        if (route === "Recharge-wallet" || route === "Transaction-history" || route === "Plans") {
            setbilling(true)
        } else {
            setbilling(false)
        }
        if (route === "Settings" || route === "Invoice" || route === "User-Management") {
            setsettings(true)
        } else {
            setsettings(false)
        }
        Setpage(route)
    }, [route])

    return (
        <div className='w-[252px]   min-h-screen bg-white  border-r-[1px]  border-[#E4E7EC]'>
            <div className='h-[84px] mx-2  p-5 border-b-[1px] border-[#E4E7EC] '>
                <img className='h-[32px] w-[144px]' src="/logo.svg" alt="" />
            </div>
            <section className='px-5'>
                <div className='text-[14px] mx-2 mt-2 text-[#727F8F]'>Overview</div>
                <section className='gap-[20px] grid mt-5'>
                    <div onClick={() => router.push('/dashboard')} className={`w-[220px] h-[40px]  cursor-pointer  flex ${route == "dashboard" ? " bg-[#4779E8]" : ""}  gap-[12px] p-[8px] rounded-[4px]`}>
                        <img src={`${route == 'dashboard' ? "/userDash/Nav/DashWhite.png" : "/userDash/Nav/Dash.png"}`} alt="dash" /> <div className={`${route == "dashboard" ? "text-white" : "text-[#3E4C59]"}`}>Dashboard</div>
                    </div>
                    <div onClick={() => router.push('/account')} className={`w-[220px] h-[40px] cursor-pointer ${route == "account" ? " bg-[#4779E8]" : ""}  flex  gap-[12px] p-[8px] rounded-[4px]`}>
                        <img src={`${route == 'account' ? "/userDash/Nav/profile2white.svg" : "/userDash/Nav/profile2.svg"}`} alt="dash" /><div className={`${route == "account" ? "text-white" : "text-[#3E4C59]"}`}>Agency Account </div>
                    </div>
                    <div onClick={() => router.push('/courses')} className={`w-[220px] h-[40px] cursor-pointer ${route == "courses" ? " bg-[#4779E8]" : ""}  flex  gap-[12px] p-[8px] rounded-[4px]`}>
                        <img src={`${route == 'couses' ? "/userDash/Nav/coursesWhite.svg" : "/userDash/Nav/Courses.svg"}`} alt="dash" /> <div className={`${route == "courses" ? "text-white" : "text-[#3E4C59]"}`}>Courses</div>
                    </div>
                    <div onClick={() => router.push('/billing/Recharge-wallet')} className={`w-[220px] h-[40px] cursor-pointer ${billing ? " bg-[#4779E8]" : "bg-white"}  flex  gap-[12px]  p-[8px] rounded-[4px]`}>
                        <img src={`${billing ? "/userDash/Nav/billingWhite.svg" : "/userDash/Nav/billing.svg"}`} alt="dash" /> <div className={`${billing ? "text-white" : "text-[#3E4C59]"}`}>
                            <div className='flex justify-between gap-[100px] w-full'> Billing <MdOutlineKeyboardArrowUp className='m-1 text-xl' /></div>
                        </div>
                    </div>
                    {
                        billing ? <div className='border-l-[1px] border-[#E4E7EC] pl-5 mt-0'>
                            <div onClick={() => router.push('/billing/Recharge-wallet')} className={`${route == "Recharge-wallet" ? "primary-text " : "text-[#3E4C59] cursor-pointer"} mb-3 text-[14px]`}>Recharge Wallet Feauture</div>
                            <div onClick={() => router.push('/billing/Transaction-history')} className={`${route == "Transaction-history" ? "primary-text " : "text-[#3E4C59] cursor-pointer"} mb-3 text-[14px]`}>Transaction History</div>
                            <div onClick={() => router.push('/billing/Plans')} className={`${route == "Plans" ? "primary-text " : "text-[#3E4C59]"} mb-3 cursor-pointer text-[14px]`}>View Plans</div>
                        </div> : ""
                    }

                    <div onClick={() => router.push('/settings/Account-settings')} className={`w-[220px] h-[40px] cursor-pointer ${settings ?" bg-[#4779E8]" : ""}  flex  gap-[12px] p-[8px] rounded-[4px]`}>
                        <img src={`${settings ? "/userDash/Nav/settingwhite.png" : "/userDash/Nav/setting.png"}`} alt="dash" /> <div className={`${settings? "text-white" : "text-[#3E4C59]"}`}>Settings</div>
                    </div>
                    {
                        settings ? <div className='border-l-[1px] border-[#E4E7EC] pl-5 mt-0'>
                            <div onClick={() => router.push('/settings/Account-settings')} className={`${route == "Settings" ? "primary-text " : "text-[#3E4C59] cursor-pointer"} mb-3 text-[14px]`}>Account Settings</div>
                            <div onClick={() => router.push('/settings/Invoice-information')} className={`${route == "Invoice" ? "primary-text " : "text-[#3E4C59] cursor-pointer"} mb-3 text-[14px]`}>Invoice Information</div>
                            <div onClick={() => router.push('/settings/User-Management')} className={`${route == "User-Management" ? "primary-text " : "text-[#3E4C59]"} mb-3 cursor-pointer text-[14px]`}>User Management</div>
                        </div> : ""
                    }
                </section>
                <div className='w-[220px] h-[40px] cursor-pointer  flex mt-10 gap-[12px] p-[8px] rounded-[4px]'>
                    <img src="/userDash/Nav/logout.png" alt="dash" /> <div className='text-[#4779E8]'>Logout</div>
                </div>
            </section>
        </div>
    )
}