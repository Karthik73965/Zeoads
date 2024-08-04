import React from 'react'
import Header from './slug/Header'
import Balance from './slug/Balance'
import MainSlug from './slug/MainSlug'

type Props = {}

export default function SpecificSection({ }: Props) {
    return (
        <main className='w-full mt-10   mx-5 border-[1px] border-[#E4E7EC] rounded-[8px] p-[24px] bg-white  '>
            <Header />
            <Balance />
            <MainSlug />
        </main>
    )
}