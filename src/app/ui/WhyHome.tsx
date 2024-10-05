import React from 'react'

type Props = {
    image: string,
    Heading: string,
    text: string
}

export default function WhyHome({ image, text , Heading }: Props) {
    return (
        <center className=' w-[90vw] md:w-[384px] md:h-[414px] rounded-2xl py-[32px] px-[24px] bg-[#F5F6FA]'>
            <img className='mt-5' src={image} alt="image"  />
            <h3 className='text-[#171C20] mt-5  font-medium text-[24px]'>{Heading}</h3>
            <h3 className=' mt-2 font-normal leading-[36px] text-left'>{text}</h3>
        </center>
    )
}