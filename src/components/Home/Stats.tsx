import React from 'react'

type Props = {}

export default function Stats({ }: Props) {
    return (
        <main className='mx-20 mt-20 rounded-2xl py-[40px] '>
            <img src='/utils/world.png' className='stats-bg -z-10 rounded-2xl bg-[#F3EFD8] ' alt='Cover image' />
            <center className="status-content py-[40px]">
                <h1 className='text-[56px] text-center font-bold text-[#1F2933] mt-5'>Zeoads Licenses and Values</h1>
                <center className='flex justify-between mx-[20vw] '>
                    <div>
                        <p className='font-medium'>Country</p>
                        <h2 className='text-[32px] font-bold'>12 +</h2>
                    </div>
                    <div>
                        <p className='font-medium'>Patner</p>
                        <h2 className='text-[32px] font-bold'>2500 +</h2>
                    </div>
                    <div>
                        <p className='font-medium'>Annual Spent</p>
                        <h2 className='text-[32px] font-bold'>$7M +</h2>
                    </div>
                </center>
            </center>
            <section className='flex mt-28  px-10  justify-between'>
                <div>
                    <h2 className='font-semibold text-[32px]'> Facebook Country Partner</h2>
                    <p className='text-[#52606D] mt-3'>Rockads is an authorized Facebook Country Partner for global app growth.</p>
                </div>
                <div className='flex  align-middle'>
                    <img src='/Home/adlogos/Facebook.svg' className='h-[48px] w-[48px]' alt='facebook' />
                    <div className='text-[32px] font-semibold '>Facebook</div>
                </div>
            </section>
        </main>
    )
}