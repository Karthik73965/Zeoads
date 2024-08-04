import React from 'react'

type Props = {}

export default function Patners({}: Props) {
  return (
    <main className='my-20 mx-20'>
        <h2 className='text-[32px] font-semibold text-[#1F2933] text-center'>Our Partners</h2>
        <section className='flex justify-center  mt-10 gap-x-10'>
            <center className='w-[180px] bg-[#F5F6FA]   h-[98px] py-[24px] px-[18px] rounded-[8px]'>
                <img src='/Home/Patners/meta.svg' alt='meta' />
            </center>
            <center className='w-[180px]  bg-[#F5F6FA]  h-[98px] py-[24px] px-[18px] rounded-[8px]'>
                <img src='/Home/Patners/tiktok.svg' alt='tiktok' />
            </center>
            <center className='w-[180px]  bg-[#F5F6FA]  h-[98px] py-[24px] px-[18px] rounded-[8px]'>
                <img src='/Home/Patners/google.svg' alt='googles' />
            </center>
        </section>

    </main>
  )
}