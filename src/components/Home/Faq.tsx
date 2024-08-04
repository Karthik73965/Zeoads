import { FaqAcc } from '@/app/ui/FaqAcc'
import React from 'react'

type Props = {}

export default function Faq({ }: Props) {
    return (
        <main className='bg-[#F5F6FA] mx-20  py-[40px] rounded-2xl'>
            <h1 className='text-center text-[40px] font-bold mt-10'>FAQ</h1>
            <FaqAcc/>

        </main>
    )
}