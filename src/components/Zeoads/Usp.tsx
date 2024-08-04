import React from 'react'

type Props = {}

export default function Usp({}: Props) {
  return (
    <main className='mx-20 mt-20 flex justify-between'>
        <section className='bg-[#F5F6FA] h-[236px]  py-[32px] px-[24px] items-center justify-center  text-center w-[384px] rounded-lg'>
           <img src='/Zeoads/5.svg' className='mx-auto mt-8' alt='image5' />
           <h3 className='text-[#1F2933] mt-5 text-center font-medium text-[24px]'>Limitless Ad Account</h3>
        </section>
        <section className='bg-[#F5F6FA] h-[236px]  py-[32px] px-[24px] items-center justify-center  text-center w-[384px] rounded-lg'>
           <img src='/Zeoads/6.svg' className='mx-auto mt-8' alt='image5' />
           <h3 className='text-[#1F2933] mt-5 text-center font-medium text-[24px]'>Get unlimited ad accounts in <br /> minutes</h3>
        </section>
        <section className='bg-[#F5F6FA] h-[236px]  py-[32px] px-[24px] items-center justify-center  text-center w-[384px] rounded-lg'>
           <img src='/Zeoads/7.svg' className='mx-auto mt-5' alt='image5' />
           <h3 className='text-[#1F2933] mt-5 text-center font-medium text-[24px]'>We are ready to hear your <br /> technology and development <br /> requests. </h3>
        </section>
    </main>
  )
}