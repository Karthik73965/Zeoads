import Link from 'next/link'
import React from 'react'

type Props = { balance:number, id:string, name:string, currency:string }

export default function CreditCard({ balance, id, name, currency }: Props) {
    return (
        <div className='md:w-[364px] w-fit border-[#E4E7EC] border-[1px] bg-white rounded-[8px] h-[161px] py-[16px] px-[24px]'>
            <div className='flex justify-between'>
                <div className='text-[#3E4C59] text-[14px]'> {name} </div>
                <div className='primary-text flex gap-[10px]'>
                    <Link href={`/billing/wallet/${id}`} className='cursor-pointer' >Add Balance</Link>
                    <img src="/userDash/Agencies/circleplus.svg" alt="plus" />
                </div>
            </div>
            <div className='font-semibold text-[#1F2933] my-5 text-[32px]'>{currency} : {JSON.stringify(balance)}</div>
            <div className='text-[14px]'>ID : <span className='text-[#727F8F]'>{id}</span> </div>
        </div>
    )
}