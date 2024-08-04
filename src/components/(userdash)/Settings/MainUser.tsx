import React from 'react'
import MainNav from '../MainNav'
import UserTable from './UserTable'

type Props = {}

export default function MainInvoice({ }: Props) {
    return (
        <main className='w-full   dh-bg'>
            <MainNav />
            <section className='mx-5 mt-10 flex justify-between'>
                <div className='flex bg-white border-[1px] gap-[16px] h-[56px] w-[364px] rounded-[8px]  px-3  '>
                    <img className='w-[22px] my-auto  h-[22px]' src="/userDash/Nav/search.png" alt="search" />
                    <input type="text" className='outline-none text-[#52606D]' placeholder='Search' />
                </div>
                <button className='w-[] h-[56px] py-[16px] px-[24px] flex gap-[8px] text-white rounded-[8px] bg-[#4779E8] '>
                    <img className='mt-1' src="/userDash/Agencies/plus.svg" alt="plus" />
                    <div>Create New User</div>
                </button>
            </section>
            <UserTable route=''/>
        </main>
    )
}