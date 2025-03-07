import React from 'react'

type Props = { 
    index:number,
     text:string,
      heading:string }

export default function AdvantagesChild({ index, text, heading }: Props) {
    return (
        <main className={`rounded-2xl py-[40px] px-[24px] mt-10 ${index %2 == 0 ? "bg-[#FFF8E8]":"bg-[#EDF3FF]"} grid md:flex justify-evenly align-middle `}>
            <section className='md:w-[564px] -mt-5'>
                <img src="/Zeoads/message.svg" alt="message icon" />
                <h2 className='mt-2 text-[#1F2933] font-semibold text-[20px] md:text-[32px] '>{heading}</h2>
                <p className='text-[#3E4C59] text-[14px] md:text-[16px] mt-2 '>{text}</p>
                <img className='mt-3' src="/Zeoads/payment.svg" alt="error" />

            </section>
            <section>
                <img className='md:w-[545.23px] md:h-[302.85px]' src={`/Zeoads/${index}.svg`} alt="Zeoads1" />
            </section>
        </main>

    )
}