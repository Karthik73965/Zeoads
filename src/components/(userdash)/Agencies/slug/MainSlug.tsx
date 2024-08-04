"use client"
import React, { useState } from 'react'
import Table from '../Table'
import { CreateAddAccount } from '../../CreateAddAccount'

type Props = {}

export default function MainSlug({ }: Props) {
    const [option, setoption] = useState("Add Account")

    return (
        <main>
            <div className='mt-10 flex justif  px-5  border-b-[1px] '>
                <div onClick={() => setoption("Add Account")} className={` w-[130px] pb-1 ${option == "Add Account" ? "primary-text border-b-[1px] border-[#4779E8]" : "text-[#3E4C59]"} text-center font-medium`} >Add Account</div>
                <div onClick={() => setoption("Transaction")} className={` w-[130px] pb-1 ${option == "Transaction" ? "primary-text border-b-[1px] border-[#4779E8]" : "text-[#3E4C59]"} text-center font-medium`} >Transaction</div>
                <div onClick={() => setoption("Settings")} className={` w-[130px] pb-1 ${option == "Settings" ? "primary-text border-b-[1px] border-[#4779E8]" : "text-[#3E4C59]"} text-center font-medium`} >Settings</div>
                <div onClick={() => setoption("Additional Info")} className={` w-[130px] pb-1 ${option == "Additional Info" ? "primary-text border-b-[1px] border-[#4779E8]" : "text-[#3E4C59]"} text-center font-medium`} >Additional Info</div>
                <div onClick={() => setoption("Add Spent")} className={` w-[130px] pb-1 ${option == "Add Spent" ? "primary-text border-b-[1px] border-[#4779E8]" : "text-[#3E4C59]"} text-center font-medium`} >Add Spent</div>
            </div>
            <section>
                {
                    option == "Add Account" ? <Filters /> : (
                        option == "Transaction" ? <TransactionComp /> : (
                            option == "Settings" ? <SettingsComp /> : (
                                option == "Additional Info" ? <AdditionalComp /> : (
                                    option == "Add Spent" ? <AddSpent /> : ""
                                )
                            )
                        )
                    )
                }
            </section>

        </main>
    )
}



const Filters = () => {
    return <main>
        <section className='mt-10 flex gap-[20px] justify-between mx-5'>
            <div className='flex bg-white border-[1px] gap-[16px] h-[56px] w-[330px] rounded-[8px]  px-3  '>
                <img className='w-[22px] my-auto  h-[22px]' src="/userDash/Nav/search.png" alt="search" />
                <input type="text" className='outline-none text-[#52606D]' placeholder='Search' />
            </div>
            <div className='h-[56px] border-[1px] rounded-[8px] py-[12px] bg-white px-[10px] flex gap-[12px]'>
                <div className='text-[#3E4C59] '>Select Date </div>
                <img className='w-[24px] h-[24px]' src="/userDash/Agencies/cal.svg" alt="cal" />
            </div>
            <div className='h-[56px] border-[1px] rounded-[8px] py-[12px]  gap-[5px] bg-white px-[5px] flex '>
                <div className='text-[#3E4C59] t  flex'><div>More</div> <div>Filters</div></div>
                <img className='w-[24px] h-[24px]' src="/userDash/Agencies/circleplus.svg" alt="cal" />
            </div>
            <div className='w-[56px] h-[56px] rounded-[8px] bg-white  border-[1px] border-[#CBD2DA] p-[16px]'>
                <img src="/userDash/Agencies/share.svg" alt="share" />
            </div>
            <CreateAddAccount/>

        </section>
        <Table route='slug' />
    </main>
}

const TransactionComp = () => {
    return <main className='flex justify-between mt-10'>
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
            <img src="/userDash/Agencies/circleplus.svg" alt="plus" />
        </section>
    </main>
}
const SettingsComp = () => {
    return <main className=' mt-10'>
        <div className='flex gap-[24px] ml-5 mb-5'>
            <div className='text-[#1F2933] w-[184px] font-semibold'>Account Status </div>
            <div className='w-[374px] text-center px-[16px]'>Pending</div>
        </div>
        <div className='flex gap-[24px]  ml-5 mb-5'>
            <div className='text-[#1F2933] py-[12px] w-[184px] pr-[16px] font-semibold'>Alias Name  </div>
            <div className='w-[374px] py-[12px] px-[16px] border-[1px] rounded-[4px] text-[#3E4C59] text-center'>My Meta Account 1234567890</div>
        </div>
        <div className='flex gap-[24px]  ml-5 mb-5'>
            <div className='text-[#1F2933] py-[12px] w-[184px] pr-[16px] font-semibold '>Time Zone  </div>
            <div className='w-[374px] py-[12px] px-[16px] border-[1px] rounded-[4px] text-[#3E4C59] text-center'>Asia / Kolkata</div>
        </div>
        <div className='flex gap-[24px] ml-5 mb-5'>
            <div className='text-[#1F2933] w-[184px] font-semibold'>Currency </div>
            <div className='w-[374px] text-center px-[16px]'>USD</div>
        </div>
        <div className='flex gap-[24px]  ml-5 mb-5'>
            <div className='text-[#1F2933] py-[12px] w-[184px] pr-[16px] font-semibold'>Link Credit Account  </div>
            <div className='w-[374px] py-[12px] px-[16px] border-[1px] rounded-[4px] text-[#3E4C59] text-center'>Main wallet</div>
        </div>
        <div className='m-10 primary-text font-semibold'>
            Remove Ad Account
        </div>
    </main>
}
const AdditionalComp = () => {
    return <main className=' m-10 w-[467px]'>
        <div className='text-[#1F2933] font-semibold'>Product Link</div>
        <div className='w-[374px] py-[12px] px-[16px] border-[1px] rounded-[4px] text-[#3E4C59] my-5'>Link.in</div>
        <p className='text-[#727F8F] text-[14px]'>The product link should be the link to the website or app that you will promote. You cannot promote anything other than the specified product.</p>
    </main>
}
const AddSpent = () => {
    return <main className='flex justify-between mt-10'>
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
            <img src="/userDash/Agencies/circleplus.svg" alt="plus" />
        </section>
    </main>
}