"use client"
import React, { useState } from 'react'

type Props = {}

export default function HistoryOptions({ }: Props) {
    const [option, setoption] = useState("Transactions")

    return (
        <main>
            <div className='mt-10 flex justif  px-5  border-b-[1px] '>
                <div onClick={() => setoption("Transactions")} className={` w-[130px] pb-1 cursor-pointer ${option == "Transactions" ? "primary-text border-b-[1px] border-[#4779E8]" : "text-[#3E4C59]"} text-center font-medium`} >Transactions</div>
                <div onClick={() => setoption("Bank Transfer")} className={` w-[130px] cursor-pointer pb-1 ${option == "Bank Transfer" ? "primary-text border-b-[1px] border-[#4779E8]" : "text-[#3E4C59]"} text-center font-medium`} > Bank Transfer</div>

            </div>
            <section>
                {
                    option == "Transactions" ? <Transactions /> : (
                        option == "Bank Transfer" ? <BankTransfer /> : ""
                    )
                }
            </section>
        </main>
    )
}



const Transactions = () => {
    return <>
        <main className='flex justify-between mt-10'>
            <section className=' flex gap-[20px] mx-5'>
                <div className='flex bg-white border-[1px] gap-[16px] h-[56px] w-[330px] rounded-[8px]  px-3  '>
                    <img className='w-[22px] my-auto  h-[22px]' src="/userDash/Nav/search.png" alt="search" />
                    <input type="text" className='outline-none text-[#52606D]' placeholder='Search' />
                </div>
                <div className='h-[56px] border-[1px] rounded-[8px] py-[12px] bg-white px-[10px] flex gap-[12px]'>
                    <div className='text-[#3E4C59] '>Select Date </div>
                    <img className='w-[24px] h-[24px]' src="/userDash/Agencies/cal.svg" alt="cal" />
                </div>
            </section>
            <section className='w-[56px] h-[56px] rounded-[8px] bg-white  border-[1px] border-[#CBD2DA] p-[16px]'>
                <img src="/userDash/Agencies/share.svg" alt="share" />
            </section>
        </main>
        <section className='mt-10 h-72 border-[1px] border-[#E4E7EC] rounded-[8px] bg-white'>
            <center className='mt-[100px]'>
                <img className='w-[32px] h-[32px]' src="/utils/globe.svg" alt="globe" />
                <div className='text-[#727F8F]'>No Transactions Found ! </div>
            </center>
        </section>
    </>
}

const BankTransfer = () => {
    return <>
        <main className='flex justify-between mt-10'>
            <section className=' flex gap-[20px] mx-5'>
                <div className='flex bg-white border-[1px] gap-[16px] h-[56px] w-[330px] rounded-[8px]  px-3  '>
                    <img className='w-[22px] my-auto  h-[22px]' src="/userDash/Nav/search.png" alt="search" />
                    <input type="text" className='outline-none text-[#52606D]' placeholder='Search' />
                </div>
                <div className='h-[56px] border-[1px] rounded-[8px] py-[12px] bg-white px-[10px] flex gap-[12px]'>
                    <div className='text-[#3E4C59] '>Select Date </div>
                    <img className='w-[24px] h-[24px]' src="/userDash/Agencies/cal.svg" alt="cal" />
                </div>
            </section>
            <section className='w-[56px] h-[56px] rounded-[8px] bg-white  border-[1px] border-[#CBD2DA] p-[16px]'>
                <img src="/userDash/Agencies/share.svg" alt="share" />
            </section>
        </main>
        <section className='mt-10 h-72 border-[1px] border-[#E4E7EC] rounded-[8px] bg-white'>
            <center className='mt-[100px]'>
                <img className='w-[32px] h-[32px]' src="/utils/globe.svg" alt="globe" />
                <div className='text-[#727F8F]'>No Transfers Found ! </div>
            </center>
        </section>
    </>
}