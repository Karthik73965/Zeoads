"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getOrders} from '@/actions/admin/OrderActions';

type Props = {
}

const getStatusImage = (status: string) => {
    switch (status) {
        case "PENDING":
            return <div className='flex gap-[10px]'>
                 <img src="/utils/new.svg" alt="Pending" />  <div className='pt-1'>Pending</div>
            </div>
        case "PROCESSING":
            return <div className='flex gap-[10px]'>
            <img src="/utils/processing.svg" alt="Processing" />  <div className='pt-1'>Processing</div>
       </div>
        case "DONE":
            return <div className='flex gap-[10px]'>
            <img src="/utils/done.svg" alt="Done" /> <div className='pt-1'>Done</div>
       </div>
        default:
            return null;
    }
};


export default function OrdersTable({ }: Props) {
    const [orders , setorders] = useState<any>([])
    const fetchOrders = async ()=>{
        try {
            const data = await getOrders()
            setorders(data)
            
        } catch (error) {
            console.log(error);         
        }
    }
    useEffect(()=>{
        fetchOrders()
        
    } ,[] )
    return (
        <main className={`mt-10  mx-5 p-[24px] border-[1px]  bg-white rounded-[4px]  gap-[4px] border-[#E4E7EC]`}>
            {/* headings  */}
            <section className='flex justify-between h-[42px] py-[12px] dh-bg'>
                <div className='text-[12px]    cursor-pointer font-semibold text-[#171C20]'>No</div>
                <div className='text-[12px]  px-[15px] cursor-pointer w-[140px]  font-semibold  text-[#171C20]'>Customer Name</div>
                <div className='text-[12px]  px-[15px] cursor-pointer w-[100px]  font-semibold text-[#171C20]'>Phone No</div>
                <div className='text-[12px]  px-[15px] cursor-pointer w-[100px]  font-semibold  text-[#171C20]'>Email ID</div>
                <div className='text-[12px]  px-[15px]text-center cursor-pointer w-[100px]  font-semibold  text-[#171C20]'>Account type</div>
                <div className='text-[12px]  px-[15px]text-center cursor-pointer w-[100px]  font-semibold  text-[#171C20]'>Action</div>
                <div className='text-[12px]  px-[15px]text-center cursor-pointer w-[100px]  font-semibold   text-[#171C20]'>Take Action</div>
            </section>
            {
             orders &&   orders.map((i:any, index:number) => {
                    return <section key={index} className='flex justify-between border-b-[1px] h-[42px] py-[12px]  '>
                        <div className='text-[14px] border-r-[1px] w-[50px]  cursor-pointer font-semibold text-[#171C20]'>{index + 1}</div>
                        <div className='  text-[14px] border-r-[1px]  h-[40px]  pl-6   w-[140px] truncate   px-auto  cursor-pointer font-medium text-[#171C20] pr-[20px] '>{i.name}                       </div>
                        <div className='  text-[14px] border-r-[1px] h-[40px] w-[100px]  px-auto truncate   cursor-pointer font-medium text-[#171C20]'>{i.phoneNumber}</div>
                        <div className='  text-[14px] border-r-[1px] h-[40px] w-[100px]   px-auto truncate   cursor-pointer font-medium text-[#171C20]'>{i.email}</div>
                        <div className={`  text-[14px] border-r-[1px]  h-[25px] mb-1 w-[150px] text-center dh-bg -ml-5  ${i.model == "NONCOMMISSION" ? "primary-text " : "text-[#159A3A]"}   px-auto   cursor-pointer font-medium `}>{i.model}</div>
                        <div className=' text-[14px] border-r-[1px] h-[40px]  w-[100px]    px-auto cursor-pointer font-medium text-[#171C20]'>
                            <Link className='text-[#171C20] text-[14px] text-center w-[100px] -ml-3 border-r-[1px] border-[#E4E7EC]  font-medium primary-text' href={`/admin/order/${i.id}`} >View Account </Link>

                        </div>
                        <Select>
                            <SelectTrigger className="w-[150px] h-[40px] -mt-2">
                            <SelectValue placeholder={getStatusImage(i.status)} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </section>
                })
            }
        </main >
    )
}