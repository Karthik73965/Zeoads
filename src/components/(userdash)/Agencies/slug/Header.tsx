import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <main className='flex'>
    <section className='w-[534px] border-r-[1px] flex justify-between '>
                <div className='h-[77px] gap-[24px] py-[8px] flex'>
                    <div className='flex gap-[12px]'>
                        <img src="/userDash/Agencies/meta.svg" className='w-[48px] h-[48px]' alt="meta" />
                        <div>
                            <div className='text-[#1F2933] font-medium'>Reserved Ad Account</div>
                            <div className='flex'>
                                <div className='text-[#3E4C59]'>ID</div>
                                <span className='text-[#F3CC02] bg-[#FCF8DD] -mt-1 py-[4px] px-[12px]'>Pending</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-[#727F8F] flex m-5 font-medium text-[14px] gap-[8px] cursor-pointer '>
                    Ads Manager  
                    <img className='w-[20px] h-[20px]' src="/userDash/Agencies/tiltedArrow.svg" alt="" />
                </div>
            </section>
            <section className=' w-px] pl-5 mt-3 gap-x-[24px] flex justify-between '>
                <div>
                    <div className='text-[#1F2933] font-semibold '>Credit Account: Main Wallet</div>
                    <div className='mt-2 text-[#3E4C59] text-[14px]'>ID: 402013</div>
                </div>  
                <div className='primary-text mt-3 flex justify-between font-semibold ml-5  gap-[8px] cursor-pointer '>
                    Go To Credit Account  
                    <img className='w-[20px] h-[20px]' src="/userDash/Agencies/tiltedblue.svg" alt="" />
                </div>             
            </section>
    </main>
  )
}