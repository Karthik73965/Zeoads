"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


type Props = {}

export default function Hero({ }: Props) {
    return (
        <main className='md:px-20 px-10 md:pt-[112px] pt-[102px] mt-10 md:flex flex-1  justify-between'>
            <section>
                <div className='flex gap-x-3 text-[20px] Neutral5'>Hey there, we&apos;re <span className='primary-text'> Zeoads</span> <img src='/home/handshake.svg' alt='handshake' /></div>
                <h1 className='md:text-[56px] text-[32px] mt-5 font-bold md:w-[45vw] w-[84vw] leading-[44px]  md:leading-[70px]'>
                    <TypeAnimation
                        sequence={[
                            "TIRED OF DISABLED AD ACCOUNTS?",
                            3000,
                            'TIRED OF SPENDING LIMITS?',
                            3000,
                            'NOT GETTING RESULTS ON REGULAR AD ACCOUNT?',
                            3000,
                            'ADS NOT GETTING APPROVED?',
                            3000,
                            'PAYING HEAVY TAXES?',
                            3000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='Neutral4 hidden md:block md:text-xl mt-5 leading-[34px]'>Zeoads works directly with all Ad platforms and provides a <br />seamless Ad publishing service.</p>
                <p className='Neutral4 block md:hidden  my-5 '>Zeoads works directly with all Ad platforms and provides a seamless Ad publishing service.</p>
                <div className='mt-10  gap-x-[24px] hidden md:flex'>
                    <button className='bg-[#4779E8] w-[204px] h-[48px] rounded-[4px] text-white '>
                        Get started Today
                    </button>
                    <button className='bg-white w-[151px] h-[48px] border-[#4779E8] border-[1px] rounded-[4px] primary-text '>
                        Learn More
                    </button>
                </div>
            </section>
            <section className='md:w-[50%] h-full flex '>
                <div className='grid gap-y-80 absolute'>
                    <img className='w-[22.31px] md:w-auto md:h-auto h-[22.31px]' src='/Home/avatar/2.svg' alt='avatar 1' />
                    <img className='w-[22.31px] -mt-20 md:-mt-0 md:w-auto md:h-auto h-[22.31px]' src='/Home/avatar/1.svg' alt='avatar 2' />
                </div>
                <div>
                    <img src="/Home/chart.svg" className='z-10 md:ml-20 ml-10  relative' alt="" />
                    <div className='gradient md:w-[558px] w-full h-[280px] -z-20 -mt-[300px] -ml-10 absolute'> &nbsp;</div>
                </div>
                <div className='grid gap-y-80 ml-10'>
                    <img className='w-[30.31px] md:w-auto md:h-auto h-[30.31px]' src='/Home/avatar/3.svg' alt='avatar 3' />
                    <img className='w-[30.31px] -mt-20 md:-mt-0  md:w-auto md:h-auto h-[30.31px]' src='/Home/avatar/4.svg' alt='avatar 4' />
                </div>
            </section>
        </main>
    )
}