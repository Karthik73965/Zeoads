"use client"
import React, { useEffect, useState } from 'react'
import AdminMainNav from '../AdminMainNav'
import UsersTable from './UsersTable'
import { getAllUsers } from '@/actions/admin/AdminUserActions'

type Props = {}

export default function UserMain({ }: Props) {
    const [WhichUsers, SetWhichUsers] = useState("Active")
    const [users , setusers ] = useState<any>(null)

    const AllUSers =async ()=>{
        try {
            const data = await getAllUsers()   
            setusers(data)   
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{

        AllUSers()
    } , [])
    return (
        <main className='w-full  min-h-screen dh-bg'>
            <AdminMainNav />
            {/* ---------------------------------------- Main secton --------------------------------------  */}

            <section className='mt-10 flex justify-between  mx-5'>
                <div className='flex bg-white border-[1px] gap-[16px] h-[58px] w-[313px] rounded-[8px]  px-[24px] py-[9px]  '>
                    <div onClick={() => SetWhichUsers("Active")} className={` h-[40px] border-b-[2px] pl-2  ${WhichUsers == "Active" ? "primary-text border-[#4779E8]  " : "text-[#3E4C59] border-[] "} pt-2 `} >
                        All Active Users
                    </div>
                    <div onClick={() => SetWhichUsers("Paid")} className={`h-[40px] border-b-[2px] pl-2  ${WhichUsers == "Paid" ? "primary-text border-[#4779E8]  " : "text-[#3E4C59] border-[] "} pt-2 [16px] `} >
                        Paid Users
                    </div>
                </div>
                {/* filter */}
                <div className='flex gap-[px]'>
                    <div className=' w-[103px] h-[56px] flex rounded-[8px] bg-white gap-[8px] ml-10 border-[1px] border-[#CBD2DA] p-[16px]'>
                        Filter
                        <img src="/utils/filter.svg" alt="share" />
                    </div>
                    <div className='w-[56px] h-[56px] rounded-[8px] bg-white gap-[8px] ml-10 border-[1px] border-[#CBD2DA] p-[16px]'>
                        <img src="/userDash/Agencies/share.svg" alt="share" />
                    </div>
                </div>
            </section>
            <section>
                {
                    users && <UsersTable userinfo={users}/>
                }
            </section>

        </main>
    )
}
