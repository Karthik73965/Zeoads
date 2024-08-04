import React from 'react'

type Props = {}

export default function Demo({}: Props) {
  return (
    <main className='mx-20 h-[600px] mt-20 mb-36 bg-[#171C20] pt-10  rounded-2xl'>
        <h1 className='text-center text-white font-bold text-[56px] '>Pricing Plans Explanation!</h1>
        <p className=' text-[#E4E7EC] text-center mt-5 tex'>Here is a Quick Video to Summarize our pricing plans for you. </p>
        <center className='mt-[60px]'>
        <img src='/pricing/Demo.png' className='rounded-xl' alt='Demo'/>
        </center>

    </main>
  )
}