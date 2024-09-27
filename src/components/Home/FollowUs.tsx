import React from 'react'

type Props = {}

export default function FollowUs({}: Props) {
  return (
    <main className=' mx-5 md:mx-20  bg-[#F5F6FA] mt-36 md:mt-20 rounded-2xl md:py-[40px ]md:px-[102px] grid md:flex justify-between p-4  md:h-[168px]'>
        <h2 className='md:text-[32px] font-semibold md:leading-[44px] text-[#727F8F]'><span className='text-[#1F2933]'>Follow Us</span> to stay updated about <br /> developments.</h2>
        <section className='w-[296px] flex gap-x-5'>
            <img className='h-[56px] w-[56px]' src="/Home/Follow/x.svg" alt="x"  />
            <img className='h-[56px] w-[56px]' src="/Home/Follow/insta.svg" alt="instagram"  />
            <img className='h-[56px] w-[56px]' src="/Home/Follow/linkedin.svg" alt="linjedin"  />
            <img className='h-[56px] w-[56px]' src="/Home/Follow/fb.svg" alt="fb"  />
        </section>

    </main>
  )
}