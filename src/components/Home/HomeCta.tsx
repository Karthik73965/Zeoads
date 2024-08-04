import React from 'react'

type Props = {}

export default function HomeCta({ }: Props) {
    return (
        <main className='h-[304px] px-20 rouded-2xl   '>
            <img src='/utils/CoverHomeCta.jpeg' className='demo-bg' alt='Cover image' />
            <center className="demo-content py-[40px]">
                <h5 className='text-[32px] font-[#171C20]  text-center font-bold'>Zeoads for Agencies</h5>
                <p className='font-medium text-center mt-5'>Are you an agency that manages a large client base? <br /><span className='text-[#52606D]'>Get reliable agency ad accounts with special offers.</span></p>
                <center className='bg-[#4779E8]  text-white rounded-[4px] py-[16px] px-[40px] w-[157px] h-[56px] mt-10'>
                    Start Now
                </center>
            </center>
        </main>
    )
}