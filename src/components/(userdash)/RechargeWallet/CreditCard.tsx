import React from 'react'

type Props = {}

export default function CreditCard({ }: Props) {
    return (
        <div className='w-[364px] border-[#E4E7EC] border-[1px] bg-white rounded-[8px] h-[161px] py-[16px] px-[24px]'>
            <div className='flex justify-between'>
                <div className='text-[#3E4C59] text-[14px]'>Balance </div>
                <div className='primary-text flex gap-[10px]'>
                    <div>Add Balance</div>
                    <img src="/userDash/Agencies/circleplus.svg" alt="plus" />                
            </div>
                </div>
                <div className='font-semibold text-[#1F2933] my-5 text-[32px]'>$ 12.00</div>
                <div className='text-[14px]'>Test ID : <span className='text-[#727F8F]'>q123123</span></div>
        </div>
    )
}