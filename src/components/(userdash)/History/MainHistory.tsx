import React from 'react'
import MainNav from '../MainNav'
import HistoryOptions from './HistoryOptions'

type Props = {}

export default function MainHistory({ }: Props) {
    return (
        <main className='w-full   dh-bg'>
            <MainNav />
            <section className='mx-5 rounded-[8px] p-[24px] border-[1px] border-[#E4E7EC]  bg-white  mt-10'>
                <div className='mx-5 rounded-[8px] px-[24px] border-[1px] border-[#E4E7EC]  bg-white mt-5 h-[116px] flex justify-between'>
                    <div className='grid gap-[10px] my-5'>
                        <div className='font-semibold text-[#3E4C59]'>Balance Amount</div>
                        <div className='text-[#1F2933] text-[32px] font-semibold'>$ 12.00</div>
                    </div>
                    <div className='grid gap-[10px] my-5'>
                        <div className='font-semibold text-[#3E4C59]'>Credit Account</div>
                        <div className='text-[#3E4C59]'>1231312</div>
                    </div>
                    <div className='grid gap-[10px] my-5'>
                        <div className='font-semibold text-[#3E4C59]'>Credit Account Name</div>
                        <div className='text-[#3E4C59]'>Main Account </div>
                    </div>
                    <button className=' my-auto h-[56px] text-white bg-[#4779E8] rounded-[8px] text-center outline-none py-[16px] px-[40px]'>
                      Add Balance 
                    </button>
                </div>
            <HistoryOptions/>
            </section>
        </main>
    )
}