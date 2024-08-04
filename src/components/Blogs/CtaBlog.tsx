import React from 'react'

type Props = {}

export default function CtaBlog({ }: Props) {
    return (
        <section className='mx-20 mt-10 rounded-[8px] bg-[#F5F6FA] flex justify-between py-[40px] px-[24px]  gap-[24px] h-[400px]'>
            <div>
            <div className=' font-bold leading-[70px]'>
                <span className='text-[#727F8F] text-[56px]'>Time to get </span> <br />  <span className='text-[#171C20] text-[56px]'>marketing stuff </span>  <span className='text-[#727F8F] text-[56px]'>in</span> <br /> <span className='text-[#171C20] text-[56px]'>order</span>.
            </div> 
            <button className='bg-[#4779E8] w-[174px] h-[56px] py-[16px] px-[40px] text-white rounded-[4px] ' >Try ZEOADS</button>
            </div>
            <img src="/utils/laptop.png" alt="laptop" />


        </section>
    )
}