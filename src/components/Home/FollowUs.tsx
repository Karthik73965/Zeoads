import React from 'react'

type Props = {}

export default function FollowUs({}: Props) {
  return (
    <main className='mx-20 bg-[#F5F6FA] mt-20 py-[40px] px-[102px] flex justify-between h-[168px]'>
        <h2 className='text-[32px] font-semibold leading-[44px] text-[#727F8F]'><span className='text-[#1F2933]'>Follow Us</span> to stay updated about <br /> developments.</h2>
        <section className='w-[296px] flex gap-x-5'>
            <img className='h-[56px] w-[56px]' src="/Home/Follow/x.svg" alt="x"  />
            <img className='h-[56px] w-[56px]' src="/Home/Follow/insta.svg" alt="instagram"  />
            <img className='h-[56px] w-[56px]' src="/Home/Follow/linkedin.svg" alt="linjedin"  />
            <img className='h-[56px] w-[56px]' src="/Home/Follow/fb.svg" alt="fb"  />
        </section>

    </main>
  )
}