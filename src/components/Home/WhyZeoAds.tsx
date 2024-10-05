import WhyHome from '@/app/ui/WhyHome'
import React from 'react'

type Props = {}

export default function WhyZeoAds({ }: Props) {
    return (
        <main className='md:px-20 px-10 pb-10 mt-5 md:mt-10 '>
            <h3 className='text-center font-semibold text-[20px] md:text-[32px] '>6 Reasons why you should choose <span className='primary-text'>Zeoads</span></h3>
            <section className='grid md:flex -ml-5 gap-y-5 md:gap-y-0 md:-ml-0 justify-between mt-5 md:mt-10 '>
                <WhyHome image='/Home/why/7.svg' Heading='One Time Charges' text="Yes that's right! No monthly Rent , No Hidden Charges, No Commission & No Hidden Charges - We charge a one time charge model where you pay once and we handle the rest. We also have a commission model incase you don't want to pay directly to Facebook" />
                <WhyHome image='/Home/why/8.svg' Heading='Cheaper CPMs & CPAs' text="Enterprise Level Agency Accounts have an advantage in auctions from the moment they are created due to the internal trust tier rankings. We have seen CPMs be up to 40% cheaper when running with our accounts, which leads to cheaper results." />
                <WhyHome image='/Home/why/9.svg' Heading='Unrestricted Category' text="Don't waste time warming accounts. Stop getting stuck at a spending limit and scale as much as you want, as fast as you want. Our clients scale faster than their competition and make their profits quickly." />
            </section>
            <section className='grid md:flex -ml-5 gap-y-5 md:gap-y-0 md:-ml-0 justify-between mt-10'>
                <WhyHome image='/Home/why/10.svg' Heading='Data and Pixel Protection' text="Add Unlimited Pages and Pixel. We have developed a system to protect your assets at all times. With this, you never have to worry about losing your Pixel or Audiences again." />
                <WhyHome image='/Home/why/11.svg' Heading='Feedback Score Solutions' text="Our clients never have to deal with page feedback score issues. We have a multitude of solutions available depending on your scale and spend." />
                <WhyHome image='/Home/why/12.svg' Heading='Business Whitelisting' text="If your business operates in a restricted area, or you are worried about ad rejections or disapprovals, we can help get you whitelisted to bypass the system." />
            </section>

        </main>
    )
}