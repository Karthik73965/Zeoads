import React from 'react'

type Props = {
    id:string , 
    currency :string | undefined ,  
    balance:number| undefined
}

export default function Balance({ id , currency , balance} : Props) {
    return (
        <section className='mx-5 mt-5 border-[1px] px-[24px] flex justify-between rounded-[8px] h-[150px] py-5'>
            <div>
                <div className='text-[#3E4C59]'>Total Balance</div>
                <div className='text-[#1F2933] font-semibold  mt-2 text-[32px]'>{currency} {balance}</div>
                <div className='text-[#727F8F] text-[14px]'>Transfer To Credit Account</div>
            </div>
            <div className='flex gap-[24px] my-auto'>
                <button className='py-[16px] px-[40px] border-[1px] primary-text border-[#4779E8] rounded-[4px] bg-white'>
                    Watch Tutorial 
                </button>
                <button className='py-[16px] px-[40px] border-[1px] text-white border-[#4779E8] rounded-[4px] bg-[#4779E8]'>
                    View Tutorial  
                </button>
            </div>


        </section>
    )
}