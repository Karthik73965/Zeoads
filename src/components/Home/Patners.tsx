import React from 'react'

type Props = {}

export default function Patners({}: Props) {
  return (
    <main className='md:my-20 md:mx-20 mt-5 mx-7'>
        <h2 className='text-[32px] font-semibold text-[#1F2933] text-center'>Our Partners</h2>
        <section className='grid md:flex justify-center  mt-10 gap-y-5 md:gap-x-10'>
            <center className='md:w-[180px] w-[90vw] bg-[#F5F6FA]   h-[98px] py-[24px] px-[18px] rounded-[8px]'>
                <img src='/Home/Patners/meta.svg' alt='meta' />
            </center>
            <center className='md:w-[180px] w-[90vw]  bg-[#F5F6FA]  h-[98px] py-[24px] px-[18px] rounded-[8px]'>
                <img src='/Home/Patners/tiktok.svg' alt='tiktok' />
            </center>
            <center className='md:w-[180px] w-[90vw]  bg-[#F5F6FA]  h-[98px] py-[24px] px-[18px] rounded-[8px]'>
                <img src='/Home/Patners/google.svg' alt='googles' />
            </center>
        </section>

    </main>
  )
}