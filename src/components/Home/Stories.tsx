"use client"
import React, { useState } from 'react'

type Props = {}
const phtos = [
    "",
    "",
    ""
]
const text = [
    "Expert policy support 1",
    "Expert policy support 2",
    "Expert policy support 3",
]
const description = [
    "zeoads 1 expert policy support helped us to comply with ad policies and avoid account restriction. Their team's guidance and support were crucial in identifying and addressing any policy violations, keeping our account in good standing and allowing us to continue running our ad campaigns.",
    "zeoads 2 expert policy support helped us to comply with ad policies and avoid account restriction. Their team's guidance and support were crucial in identifying and addressing any policy violations, keeping our account in good standing and allowing us to continue running our ad campaigns.",
    "zeoads 3 expert policy support helped us to comply with ad policies and avoid account restriction. Their team's guidance and support were crucial in identifying and addressing any policy violations, keeping our account in good standing and allowing us to continue running our ad campaigns.",
]

export default function Stories({ }: Props) {
    const [index, setindex] = useState(0)


    const handleleft = () => {
        if(index <=0){

            setindex(2)
        }else{
            setindex(index - 1)

        }
    }

const handleright = () => {
    if(index>=2){
        setindex(0)
    }else{
    setindex(index + 1)}
}
    
return (
    <main className='bg-[#F5F6FA] md:mt-20 md:mx-20 mx-4 rounded-[16px] md:h-[468px] py-[40px] px-[24px]'>
        <section className='flex flex-1 justify-between text-[32px] font-semibold text-[#171C20] text-center'>
            <div className='text-[16px] mt-2 md:text-[32px]'>Success Stories</div>
            <section className='flex'>
                <ul className='flex gap-x-3 mt-5 mr-5'>
                    <li className={`w-[8px] h-[8px] rounded-full ${index == 0 ? 'bg-[#4779E8]' : "bg-[#D9D9D9]"}`}></li>
                    <li className={`w-[8px] h-[8px] rounded-full ${index == 1 ? 'bg-[#4779E8]' : "bg-[#D9D9D9]"}`}></li>
                    <li className={`w-[8px] h-[8px] rounded-full ${index == 2 ? 'bg-[#4779E8]' : "bg-[#D9D9D9]"}`}></li>
                </ul>
                <div className='flex gap-x-3 '>
                    <button onClick={() => handleleft()} className='w-[48px] h-[48px] rounded-[4px] font-thin bg-[#4779E8] text-white'>
                        {"<--"}
                    </button>
                    <div onClick={() => handleright()} className='w-[48px] h-[48px] font-thin rounded-[4px] bg-[#4779E8] text-white'>
                        {"-->"}
                    </div>
                </div>
            </section>
        </section>
        <section className='mt-10 md:flex grid  flex-1 justify-between'>
            <img className='md:w-[564px] md:h-[320px] rounded-[4px] border-[1px]' alt='' src='/utils/StoreisTest.jpeg' />
            <div className='ml-5 '>
                <h5 className='text-[32px] font-semibold mt-10 '>{text[index]}</h5>
                <p className='text-[#52606D] mt-5'>{description[index]}</p>
            </div>
        </section>

    </main>
)
}