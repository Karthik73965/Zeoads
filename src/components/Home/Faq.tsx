import { FaqAcc } from '@/app/ui/FaqAcc'
import React from 'react'

type Props = {}

export default function Faq({ }: Props) {
    return (
        <main className='bg-[#F5F6FA] md:mx-20 mx-5 md:py-[40px] py-5 mt-5 rounded-2xl'>
            <h1 className='text-center text-[40px] font-bold mt-10'>FAQ</h1>
            <FaqAcc/>
        </main>
    )
}