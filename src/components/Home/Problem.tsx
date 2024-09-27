import WhyHome from '@/app/ui/ProblemsHome'
import React from 'react'

type Props = {}

export default function Probkems({ }: Props) {
  return (
    <section className='md:px-20 px-10 pb-10 mt-10 '>
      <h3 className='text-center font-semibold text-[20px] md:text-[32px] '>What&apos;s the problem you&apos; are having with your ad accounts?</h3>
      <p className='md:my-10 mt-2 text-center text-[#3E4C59]'>Please select it and let us solve the problem.</p>
      <section className='grid md:flex  -ml-5 gap-y-5 md:gap-y-0 md:-ml-0 mt-5 md:mt-0 justify-between'>
      <WhyHome image='/Home/why/1.svg' text='Ad approval process is long, sometimes it takes days.' />
      <WhyHome image='/Home/why/2.svg' text='Ad approval process is long, sometimes it takes days.' />
      <WhyHome image='/Home/why/3.svg' text='Ad approval process is long, sometimes it takes days.' />
      </section>
      <section className='grid md:flex  -ml-5 gap-y-5 md:gap-y-0 md:-ml-0  justify-between mt-10'>
      <WhyHome image='/Home/why/4.svg' text='Ad approval process is long, sometimes it takes days.' />
      <WhyHome image='/Home/why/5.svg' text='Ad approval process is long, sometimes it takes days.' />
      <WhyHome image='/Home/why/6.svg' text='Ad approval process is long, sometimes it takes days.' />
      </section>
    </section>
  )

}