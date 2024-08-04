import WhyHome from '@/app/ui/ProblemsHome'
import React from 'react'

type Props = {}

export default function Probkems({ }: Props) {
  return (
    <section className='px-20 pb-10 mt-10 '>
      <h3 className='text-center font-semibold text-[32px] '>What's the problem you're having with your ad accounts?</h3>
      <p className='my-10 text-center text-[#3E4C59]'>Please select it and let us solve the problem.</p>
      <section className='flex justify-between'>
      <WhyHome image='/Home/why/1.svg' text='Ad approval process is long, sometimes it takes days.' />
      <WhyHome image='/Home/why/2.svg' text='Ad approval process is long, sometimes it takes days.' />
      <WhyHome image='/Home/why/3.svg' text='Ad approval process is long, sometimes it takes days.' />
      </section>
      <section className='flex justify-between mt-10'>
      <WhyHome image='/Home/why/4.svg' text='Ad approval process is long, sometimes it takes days.' />
      <WhyHome image='/Home/why/5.svg' text='Ad approval process is long, sometimes it takes days.' />
      <WhyHome image='/Home/why/6.svg' text='Ad approval process is long, sometimes it takes days.' />
      </section>
    </section>
  )

}