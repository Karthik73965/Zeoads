import React from 'react'

type Props = {
    image: string,
    text: string
}

export default function ProblemsHome({ image, text }: Props) {
    return (
        <center className='w-[384px] h-[316px] rounded-2xl py-[32px] px-[24px] bg-[#F5F6FA]'>
            <img className='mt-5' src={image} alt="image"  />
            <h3 className='text-[24px] mt-7 font-medium leading-[36px] text-center'>{text}</h3>
            <button className='text-white text-center mt-10 bg-[#4779E8]  rounded-[4px] py-[12px] px-[80px] w-[249px] h-[48px]'>
                Get Started
            </button>

        </center>
    )
}