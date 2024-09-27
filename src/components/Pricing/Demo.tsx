import React from 'react'

type Props = {}

export default function Demo({}: Props) {
  return (
    <main className='md:mx-20  mx-5 md:h-[600px] h-[164px] mt-20 mb-36 bg-[#171C20] pt-10 rounded-[5px] md:rounded-2xl'>
        <h1 className='text-center text-white font-bold text-[16px] md:text-[56px] '>Pricing Plans Explanation!</h1>
        <p className=' text-[#E4E7EC] text-center mt-5 text-[8px] md:text-[16px]'>Here is a Quick Video to Summarize our pricing plans for you. </p>
        <center className='-mt-[10px] md:mt-[60px]'>
        <img src='/pricing/Demo.png' className='rounded-xl scale-75 md:scale-100' alt='Demo'/>
        </center>

    </main>
  )
}